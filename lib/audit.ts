import { prisma } from "@/lib/prisma";
import { AuditAction, AuditOutcome, RiskLevel } from "@prisma/client";

export interface AuditEvent {
  tenantId: string;
  userId?: string;
  action: AuditAction;
  resource: string;
  resourceId?: string;
  oldValues?: Record<string, any>;
  newValues?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
  outcome?: AuditOutcome;
  riskLevel?: RiskLevel;
  metadata?: Record<string, any>;
}

/**
 * Enterprise Audit Logger
 * Provides comprehensive audit trail for compliance (SOC 2, HACCP, etc.)
 */
export class AuditLogger {
  /**
   * Log an audit event
   */
  static async log(event: AuditEvent): Promise<void> {
    try {
      await prisma.auditLog.create({
        data: {
          tenantId: event.tenantId,
          userId: event.userId,
          action: event.action,
          resource: event.resource,
          resourceId: event.resourceId,
          oldValues: event.oldValues ? JSON.parse(JSON.stringify(event.oldValues)) : null,
          newValues: event.newValues ? JSON.parse(JSON.stringify(event.newValues)) : null,
          ipAddress: event.ipAddress,
          userAgent: event.userAgent,
          outcome: event.outcome || AuditOutcome.SUCCESS,
          riskLevel: event.riskLevel || RiskLevel.LOW,
          metadata: event.metadata ? JSON.parse(JSON.stringify(event.metadata)) : null,
        }
      });

      // If high risk, also log to external monitoring
      if (event.riskLevel === RiskLevel.CRITICAL || event.riskLevel === RiskLevel.HIGH) {
        console.warn(`HIGH RISK AUDIT EVENT:`, event);
        // In production, send to security monitoring system
      }
    } catch (error) {
      console.error("Failed to log audit event:", error);
      // Don't throw - audit failures shouldn't break application flow
    }
  }

  /**
   * Log user authentication events
   */
  static async logAuth(
    tenantId: string,
    userId: string,
    action: 'LOGIN' | 'LOGOUT',
    ipAddress?: string,
    userAgent?: string,
    outcome: AuditOutcome = AuditOutcome.SUCCESS
  ): Promise<void> {
    await this.log({
      tenantId,
      userId,
      action: action as AuditAction,
      resource: 'user_session',
      resourceId: userId,
      ipAddress,
      userAgent,
      outcome,
      riskLevel: outcome === AuditOutcome.FAILURE ? RiskLevel.HIGH : RiskLevel.LOW
    });
  }

  /**
   * Log data access events (for HACCP compliance)
   */
  static async logDataAccess(
    tenantId: string,
    userId: string,
    resource: string,
    resourceId: string,
    action: AuditAction = AuditAction.READ,
    metadata?: Record<string, any>
  ): Promise<void> {
    await this.log({
      tenantId,
      userId,
      action,
      resource,
      resourceId,
      riskLevel: RiskLevel.LOW,
      metadata
    });
  }

  /**
   * Log temperature monitoring events
   */
  static async logTemperatureEvent(
    tenantId: string,
    userId: string | undefined,
    sensorId: string,
    temperature: number,
    alertTriggered: boolean = false,
    complianceStatus: string
  ): Promise<void> {
    await this.log({
      tenantId,
      userId,
      action: AuditAction.CREATE,
      resource: 'temperature_reading',
      resourceId: sensorId,
      newValues: { temperature, alertTriggered, complianceStatus },
      riskLevel: alertTriggered ? RiskLevel.HIGH : RiskLevel.LOW,
      metadata: {
        sensor_id: sensorId,
        compliance_status: complianceStatus,
        alert_triggered: alertTriggered
      }
    });
  }

  /**
   * Log compliance record changes
   */
  static async logComplianceChange(
    tenantId: string,
    userId: string,
    recordId: string,
    oldValues?: Record<string, any>,
    newValues?: Record<string, any>,
    action: AuditAction = AuditAction.UPDATE
  ): Promise<void> {
    await this.log({
      tenantId,
      userId,
      action,
      resource: 'compliance_record',
      resourceId: recordId,
      oldValues,
      newValues,
      riskLevel: RiskLevel.MEDIUM, // Compliance changes are medium risk
      metadata: {
        compliance_type: newValues?.type,
        status_change: oldValues?.status !== newValues?.status
      }
    });
  }

  /**
   * Log administrative actions
   */
  static async logAdminAction(
    tenantId: string,
    userId: string,
    action: AuditAction,
    resource: string,
    resourceId?: string,
    oldValues?: Record<string, any>,
    newValues?: Record<string, any>
  ): Promise<void> {
    await this.log({
      tenantId,
      userId,
      action,
      resource,
      resourceId,
      oldValues,
      newValues,
      riskLevel: RiskLevel.HIGH, // Admin actions are high risk
      metadata: {
        admin_action: true,
        resource_type: resource
      }
    });
  }

  /**
   * Get audit logs for a tenant with filtering
   */
  static async getAuditLogs(
    tenantId: string,
    filters: {
      userId?: string;
      resource?: string;
      action?: AuditAction;
      riskLevel?: RiskLevel;
      startDate?: Date;
      endDate?: Date;
      limit?: number;
      offset?: number;
    } = {}
  ) {
    const {
      userId,
      resource,
      action,
      riskLevel,
      startDate,
      endDate,
      limit = 100,
      offset = 0
    } = filters;

    return await prisma.auditLog.findMany({
      where: {
        tenantId,
        ...(userId && { userId }),
        ...(resource && { resource }),
        ...(action && { action }),
        ...(riskLevel && { riskLevel }),
        ...(startDate || endDate ? {
          timestamp: {
            ...(startDate && { gte: startDate }),
            ...(endDate && { lte: endDate })
          }
        } : {})
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true
          }
        }
      },
      orderBy: {
        timestamp: 'desc'
      },
      take: limit,
      skip: offset
    });
  }

  /**
   * Get audit summary for compliance reporting
   */
  static async getComplianceSummary(
    tenantId: string,
    startDate: Date,
    endDate: Date
  ) {
    const [
      totalEvents,
      criticalEvents,
      failedEvents,
      temperatureEvents,
      complianceEvents
    ] = await Promise.all([
      prisma.auditLog.count({
        where: {
          tenantId,
          timestamp: { gte: startDate, lte: endDate }
        }
      }),
      prisma.auditLog.count({
        where: {
          tenantId,
          riskLevel: RiskLevel.CRITICAL,
          timestamp: { gte: startDate, lte: endDate }
        }
      }),
      prisma.auditLog.count({
        where: {
          tenantId,
          outcome: AuditOutcome.FAILURE,
          timestamp: { gte: startDate, lte: endDate }
        }
      }),
      prisma.auditLog.count({
        where: {
          tenantId,
          resource: 'temperature_reading',
          timestamp: { gte: startDate, lte: endDate }
        }
      }),
      prisma.auditLog.count({
        where: {
          tenantId,
          resource: 'compliance_record',
          timestamp: { gte: startDate, lte: endDate }
        }
      })
    ]);

    return {
      period: { startDate, endDate },
      summary: {
        totalEvents,
        criticalEvents,
        failedEvents,
        temperatureEvents,
        complianceEvents,
        complianceScore: totalEvents > 0 ? ((totalEvents - failedEvents) / totalEvents) * 100 : 100
      }
    };
  }
}