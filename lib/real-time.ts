import { Redis } from '@upstash/redis';

// Initialize Redis client (for production use Upstash Redis)
export const redis = process.env.UPSTASH_REDIS_REST_URL 
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    })
  : null; // For development without Redis

/**
 * Real-time notification types for OpsFlow
 */
export enum NotificationType {
  TEMPERATURE_ALERT = 'temperature_alert',
  COMPLIANCE_VIOLATION = 'compliance_violation',
  SENSOR_OFFLINE = 'sensor_offline',
  AUDIT_EVENT = 'audit_event',
  SYSTEM_MAINTENANCE = 'system_maintenance'
}

export interface RealTimeNotification {
  id: string;
  tenantId: string;
  type: NotificationType;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  title: string;
  message: string;
  data?: Record<string, any>;
  timestamp: string;
  userId?: string; // If targeted to specific user
  locationId?: string; // If related to specific location
  read?: boolean;
}

/**
 * Enterprise Real-time Monitoring Service
 * Handles critical alerts, system notifications, and live data updates
 */
export class RealTimeService {
  private static instance: RealTimeService;
  
  static getInstance(): RealTimeService {
    if (!this.instance) {
      this.instance = new RealTimeService();
    }
    return this.instance;
  }

  /**
   * Publish temperature alert to relevant users
   */
  async publishTemperatureAlert(
    tenantId: string,
    locationId: string,
    sensorId: string,
    temperature: number,
    thresholds: { min: number; max: number },
    severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  ): Promise<void> {
    const notification: RealTimeNotification = {
      id: `temp_alert_${Date.now()}_${sensorId}`,
      tenantId,
      locationId,
      type: NotificationType.TEMPERATURE_ALERT,
      severity,
      title: `Temperature Alert - ${severity}`,
      message: `Temperature reading ${temperature}°F is outside safe range (${thresholds.min}°F - ${thresholds.max}°F)`,
      data: {
        sensorId,
        temperature,
        thresholds,
        alertLevel: severity
      },
      timestamp: new Date().toISOString()
    };

    await this.publishNotification(notification);
    
    // Store in Redis for persistence
    if (redis) {
      await redis.zadd(
        `notifications:${tenantId}`,
        { score: Date.now(), member: JSON.stringify(notification) }
      );
      
      // Keep only last 1000 notifications per tenant
      await redis.zremrangebyrank(`notifications:${tenantId}`, 0, -1001);
    }

    console.log(`🚨 TEMPERATURE ALERT [${severity}]: ${notification.message}`);
  }

  /**
   * Publish compliance violation alert
   */
  async publishComplianceViolation(
    tenantId: string,
    locationId: string,
    violationType: string,
    description: string,
    severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  ): Promise<void> {
    const notification: RealTimeNotification = {
      id: `compliance_${Date.now()}_${tenantId}`,
      tenantId,
      locationId,
      type: NotificationType.COMPLIANCE_VIOLATION,
      severity,
      title: `Compliance Violation - ${violationType}`,
      message: description,
      data: {
        violationType,
        requiresImmedateAction: severity === 'CRITICAL'
      },
      timestamp: new Date().toISOString()
    };

    await this.publishNotification(notification);
    console.log(`[WARNING] COMPLIANCE VIOLATION [${severity}]: ${description}`);
  }

  /**
   * Publish sensor offline alert
   */
  async publishSensorOffline(
    tenantId: string,
    locationId: string,
    sensorId: string,
    sensorName: string,
    lastSeen: Date
  ): Promise<void> {
    const notification: RealTimeNotification = {
      id: `sensor_offline_${sensorId}`,
      tenantId,
      locationId,
      type: NotificationType.SENSOR_OFFLINE,
      severity: 'HIGH',
      title: 'Sensor Offline',
      message: `${sensorName} has been offline since ${lastSeen.toLocaleString()}`,
      data: {
        sensorId,
        sensorName,
        lastSeen: lastSeen.toISOString(),
        offlineDuration: Date.now() - lastSeen.getTime()
      },
      timestamp: new Date().toISOString()
    };

    await this.publishNotification(notification);
    console.log(`📡 SENSOR OFFLINE: ${sensorName} at location ${locationId}`);
  }

  /**
   * Publish high-risk audit event
   */
  async publishAuditEvent(
    tenantId: string,
    userId: string,
    action: string,
    resource: string,
    riskLevel: 'HIGH' | 'CRITICAL',
    details: Record<string, any>
  ): Promise<void> {
    const notification: RealTimeNotification = {
      id: `audit_${Date.now()}_${userId}`,
      tenantId,
      userId,
      type: NotificationType.AUDIT_EVENT,
      severity: riskLevel,
      title: `Security Event - ${riskLevel} Risk`,
      message: `${action} performed on ${resource}`,
      data: {
        action,
        resource,
        ...details
      },
      timestamp: new Date().toISOString()
    };

    await this.publishNotification(notification);
    console.log(`🔒 AUDIT EVENT [${riskLevel}]: ${action} on ${resource}`);
  }

  /**
   * Get recent notifications for a tenant
   */
  async getRecentNotifications(
    tenantId: string,
    limit: number = 50
  ): Promise<RealTimeNotification[]> {
    if (!redis) {
      return [];
    }

    try {
      const notifications = await redis.zrange(
        `notifications:${tenantId}`,
        0,
        limit - 1,
        { rev: true }
      );

      return notifications.map((n: any) => JSON.parse(n as string));
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
      return [];
    }
  }

  /**
   * Mark notification as read
   */
  async markNotificationRead(
    tenantId: string,
    notificationId: string
  ): Promise<void> {
    if (!redis) return;

    try {
      // Get all notifications and update the specific one
      const notifications = await redis.zrange(`notifications:${tenantId}`, 0, -1);
      
      for (const notificationStr of notifications) {
        const notification = JSON.parse(notificationStr as string);
        if (notification.id === notificationId) {
          notification.read = true;
          
          // Remove old version and add updated version
          await redis.zrem(`notifications:${tenantId}`, notificationStr);
          await redis.zadd(
            `notifications:${tenantId}`,
            { score: Date.now(), member: JSON.stringify(notification) }
          );
          break;
        }
      }
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
    }
  }

  /**
   * Publish notification to WebSocket subscribers
   * In production, this would use Socket.IO rooms based on tenantId
   */
  private async publishNotification(notification: RealTimeNotification): Promise<void> {
    // For development, we'll log the notification
    // In production, this would emit to Socket.IO room: `tenant_${tenantId}`
    
    if (typeof window !== 'undefined' && (window as any).io) {
      // Client-side: emit to server
      (window as any).io.emit('notification', notification);
    } else {
      // Server-side: would emit to room
      console.log('📢 Real-time notification:', {
        room: `tenant_${notification.tenantId}`,
        notification: {
          type: notification.type,
          severity: notification.severity,
          title: notification.title
        }
      });
    }
  }

  /**
   * Subscribe to real-time updates for a tenant
   * This would be called from the client-side
   */
  subscribeToTenant(tenantId: string, callback: (notification: RealTimeNotification) => void) {
    if (typeof window !== 'undefined') {
      // In production, connect to Socket.IO server
      // const socket = io();
      // socket.emit('join_tenant', tenantId);
      // socket.on('notification', callback);
      
      console.log(`📡 Subscribed to real-time updates for tenant: ${tenantId}`);
    }
  }

  /**
   * Health check for monitoring systems
   */
  async healthCheck(): Promise<{
    redis: boolean;
    timestamp: string;
    activeConnections?: number;
  }> {
    let redisHealthy = false;
    
    if (redis) {
      try {
        await redis.ping();
        redisHealthy = true;
      } catch {
        redisHealthy = false;
      }
    }

    return {
      redis: redisHealthy,
      timestamp: new Date().toISOString(),
      activeConnections: 0 // Would track active Socket.IO connections
    };
  }
}

// Export singleton instance
export const realTimeService = RealTimeService.getInstance();