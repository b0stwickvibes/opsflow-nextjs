import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, CheckCircle, Thermometer, Building2, Shield, Users } from "lucide-react";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  // Get dashboard data
  const [locations, sensors, recentReadings, auditLogs, complianceRecords] = await Promise.all([
    // Locations count
    prisma.location.count({
      where: { tenantId: user.tenantId, status: 'ACTIVE' }
    }),
    
    // Active sensors count
    prisma.sensor.count({
      where: { tenantId: user.tenantId, status: 'ACTIVE' }
    }),

    // Recent temperature readings with alerts
    prisma.temperatureReading.findMany({
      where: { 
        tenantId: user.tenantId,
        recordedAt: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
        }
      },
      include: {
        sensor: { select: { name: true } },
        location: { select: { name: true } }
      },
      orderBy: { recordedAt: 'desc' },
      take: 10
    }),

    // Recent audit logs
    prisma.auditLog.findMany({
      where: { tenantId: user.tenantId },
      include: {
        user: { 
          select: { firstName: true, lastName: true } 
        }
      },
      orderBy: { timestamp: 'desc' },
      take: 5
    }),

    // Compliance status
    prisma.complianceRecord.count({
      where: {
        tenantId: user.tenantId,
        recordedAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Last week
        },
        status: 'COMPLIANT'
      }
    })
  ]);

  const alertCount = recentReadings.filter(r => r.alertTriggered).length;
  const complianceScore = recentReadings.length > 0 
    ? Math.round(((recentReadings.length - alertCount) / recentReadings.length) * 100)
    : 100;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            OpsFlow Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back, {user.firstName}. Here&apos;s what&apos;s happening at {user.tenant.name}.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Locations</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{locations}</div>
              <p className="text-xs text-muted-foreground">
                Across your organization
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Temperature Sensors</CardTitle>
              <Thermometer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{sensors}</div>
              <p className="text-xs text-muted-foreground">
                Currently monitoring
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{complianceScore}%</div>
              <p className="text-xs text-muted-foreground">
                Last 24 hours
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{alertCount}</div>
              <p className="text-xs text-muted-foreground">
                Requiring attention
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Temperature Readings */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Temperature Readings</CardTitle>
              <CardDescription>
                Latest sensor data from your locations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentReadings.length === 0 ? (
                <p className="text-muted-foreground text-center py-4">
                  No recent temperature data available
                </p>
              ) : (
                recentReadings.slice(0, 5).map((reading) => (
                  <div key={reading.id} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">
                        {reading.location.name} • {reading.sensor.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(reading.recordedAt).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={reading.alertTriggered ? "destructive" : "secondary"}>
                        {reading.temperature}°F
                      </Badge>
                      {reading.alertTriggered ? (
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      )}
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Recent Activity (Audit Log) */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest system events and user actions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {auditLogs.length === 0 ? (
                <p className="text-muted-foreground text-center py-4">
                  No recent activity
                </p>
              ) : (
                auditLogs.map((log) => (
                  <div key={log.id} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">
                        {log.action.toLowerCase().replace('_', ' ')} {log.resource.replace('_', ' ')}
                      </p>
                      <Badge variant="outline" className={
                        log.riskLevel === 'CRITICAL' ? 'border-red-500 text-red-700' :
                        log.riskLevel === 'HIGH' ? 'border-orange-500 text-orange-700' :
                        log.riskLevel === 'MEDIUM' ? 'border-yellow-500 text-yellow-700' :
                        'border-gray-500 text-gray-700'
                      }>
                        {log.riskLevel.toLowerCase()}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {log.user ? `${log.user.firstName} ${log.user.lastName}` : 'System'} • {' '}
                      {new Date(log.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>

        {/* Account Info */}
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium">Organization</p>
                <p className="text-lg">{user.tenant.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Subscription</p>
                <Badge variant="outline">{user.tenant.subscriptionTier}</Badge>
              </div>
              <div>
                <p className="text-sm font-medium">Role</p>
                <Badge variant="secondary">{user.role.replace('_', ' ')}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}