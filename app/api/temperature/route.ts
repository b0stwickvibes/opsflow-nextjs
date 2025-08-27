import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { AuditLogger } from "@/lib/audit";
import { realTimeService } from "@/lib/real-time";
import { z } from "zod";
import { ComplianceStatus, AlertLevel } from "@prisma/client";

// Validation schema for temperature reading
const TemperatureReadingSchema = z.object({
  sensorId: z.string().cuid(),
  temperature: z.number().min(-50).max(200), // Reasonable temperature range
  humidity: z.number().min(0).max(100).optional(),
  thresholdMin: z.number(),
  thresholdMax: z.number(),
  recordedAt: z.string().datetime().optional()
});

/**
 * POST /api/temperature - Record new temperature reading
 * Enterprise endpoint with full audit trail and compliance monitoring
 */
export async function POST(request: NextRequest) {
  try {
    // Authenticate user
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = TemperatureReadingSchema.parse(body);

    // Verify sensor belongs to user's tenant
    const sensor = await prisma.sensor.findUnique({
      where: { 
        id: validatedData.sensorId,
        tenantId: user.tenantId 
      },
      include: { location: true }
    });

    if (!sensor) {
      await AuditLogger.log({
        tenantId: user.tenantId,
        userId: user.id,
        action: 'CREATE',
        resource: 'temperature_reading',
        resourceId: validatedData.sensorId,
        outcome: 'FAILURE',
        riskLevel: 'MEDIUM',
        metadata: { error: 'sensor_not_found' }
      });

      return NextResponse.json(
        { error: "Sensor not found or access denied" },
        { status: 404 }
      );
    }

    // Check if temperature is within compliance thresholds
    const { temperature, thresholdMin, thresholdMax } = validatedData;
    const alertTriggered = temperature < thresholdMin || temperature > thresholdMax;
    
    let alertLevel: AlertLevel | null = null;
    let complianceStatus: ComplianceStatus = ComplianceStatus.COMPLIANT;

    if (alertTriggered) {
      // Determine alert severity
      const deviation = Math.max(
        Math.abs(temperature - thresholdMin),
        Math.abs(temperature - thresholdMax)
      );
      
      if (deviation > 10) {
        alertLevel = AlertLevel.CRITICAL;
        complianceStatus = ComplianceStatus.NON_COMPLIANT;
      } else if (deviation > 5) {
        alertLevel = AlertLevel.HIGH;
        complianceStatus = ComplianceStatus.WARNING;
      } else if (deviation > 2) {
        alertLevel = AlertLevel.MEDIUM;
        complianceStatus = ComplianceStatus.WARNING;
      } else {
        alertLevel = AlertLevel.LOW;
        complianceStatus = ComplianceStatus.WARNING;
      }
    }

    // Create temperature reading record
    const temperatureReading = await prisma.temperatureReading.create({
      data: {
        tenantId: user.tenantId,
        locationId: sensor.locationId,
        sensorId: validatedData.sensorId,
        userId: user.id,
        temperature: validatedData.temperature,
        humidity: validatedData.humidity,
        thresholdMin: validatedData.thresholdMin,
        thresholdMax: validatedData.thresholdMax,
        alertTriggered,
        alertLevel,
        complianceStatus,
        recordedAt: validatedData.recordedAt ? new Date(validatedData.recordedAt) : new Date()
      },
      include: {
        sensor: {
          select: { name: true }
        },
        location: {
          select: { name: true }
        }
      }
    });

    // Log audit event for compliance
    await AuditLogger.logTemperatureEvent(
      user.tenantId,
      user.id,
      validatedData.sensorId,
      validatedData.temperature,
      alertTriggered,
      complianceStatus
    );

    // If critical alert, log as high-risk event
    if (alertLevel === AlertLevel.CRITICAL) {
      await AuditLogger.log({
        tenantId: user.tenantId,
        userId: user.id,
        action: 'CREATE',
        resource: 'critical_temperature_alert',
        resourceId: temperatureReading.id,
        riskLevel: 'CRITICAL',
        metadata: {
          temperature: validatedData.temperature,
          thresholds: { min: thresholdMin, max: thresholdMax },
          location: sensor.location.name,
          sensor: sensor.name
        }
      });

      // Send real-time alert to dashboard
      await realTimeService.publishTemperatureAlert(
        user.tenantId,
        sensor.locationId,
        validatedData.sensorId,
        validatedData.temperature,
        { min: thresholdMin, max: thresholdMax },
        alertLevel === AlertLevel.CRITICAL ? 'CRITICAL' : 'HIGH'
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        id: temperatureReading.id,
        temperature: temperatureReading.temperature,
        humidity: temperatureReading.humidity,
        alertTriggered: temperatureReading.alertTriggered,
        alertLevel: temperatureReading.alertLevel,
        complianceStatus: temperatureReading.complianceStatus,
        recordedAt: temperatureReading.recordedAt,
        sensor: temperatureReading.sensor,
        location: temperatureReading.location
      }
    });

  } catch (error) {
    console.error("Temperature recording error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input data", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/temperature - Get temperature readings with filtering
 */
export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const sensorId = searchParams.get('sensorId');
    const locationId = searchParams.get('locationId');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const alertsOnly = searchParams.get('alertsOnly') === 'true';
    const limit = parseInt(searchParams.get('limit') || '100');
    const offset = parseInt(searchParams.get('offset') || '0');

    // Build query conditions
    const whereConditions: any = {
      tenantId: user.tenantId
    };

    if (sensorId) {
      whereConditions.sensorId = sensorId;
    }

    if (locationId) {
      whereConditions.locationId = locationId;
    }

    if (startDate || endDate) {
      whereConditions.recordedAt = {};
      if (startDate) whereConditions.recordedAt.gte = new Date(startDate);
      if (endDate) whereConditions.recordedAt.lte = new Date(endDate);
    }

    if (alertsOnly) {
      whereConditions.alertTriggered = true;
    }

    // Query temperature readings
    const readings = await prisma.temperatureReading.findMany({
      where: whereConditions,
      include: {
        sensor: {
          select: { id: true, name: true, type: true }
        },
        location: {
          select: { id: true, name: true, type: true }
        }
      },
      orderBy: {
        recordedAt: 'desc'
      },
      take: Math.min(limit, 1000), // Max 1000 records
      skip: offset
    });

    // Log data access for audit
    await AuditLogger.logDataAccess(
      user.tenantId,
      user.id,
      'temperature_readings',
      `query-${Date.now()}`,
      'READ',
      {
        filters: { sensorId, locationId, startDate, endDate, alertsOnly },
        recordCount: readings.length
      }
    );

    return NextResponse.json({
      success: true,
      data: readings,
      pagination: {
        limit,
        offset,
        total: readings.length
      }
    });

  } catch (error) {
    console.error("Temperature query error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}