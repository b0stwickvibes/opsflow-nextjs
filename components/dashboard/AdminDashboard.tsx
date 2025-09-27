"use client";

import React from "react";
import { useUser, useOrganization } from "@clerk/nextjs";
import {
  Users,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  BarChart3,
  DollarSign,
  Clock,
  CheckCircle,
  Activity,
  Settings
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Widgets
import { OrganizationOverview } from "./widgets/OrganizationOverview";
import { ComplianceStatus } from "./widgets/ComplianceStatus";
import { TeamPerformance } from "./widgets/PlaceholderWidgets";
import { RevenueMetrics } from "./widgets/PlaceholderWidgets";
import { SystemAlerts } from "./widgets/SystemAlerts";
import { QuickActions } from "./widgets/QuickActions";

interface AdminDashboardProps {
  className?: string;
}

export function AdminDashboard({ className = "" }: AdminDashboardProps) {
  const { user } = useUser();
  const { organization } = useOrganization();

  return (
    <div className={`dashboard-container ${className}`}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="enterprise-headline text-3xl">
              Admin Dashboard
            </h1>
            <p className="dashboard-text-secondary mt-2">
              Welcome back, {user?.firstName}. Here's your organization overview for {organization?.name}.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="dashboard-badge-live">
              <Activity className="w-3 h-3 mr-1" />
              Live
            </Badge>
            <Button className="clerk-cta-ghost" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
        <Separator className="mt-6" />
      </div>

      {/* Dashboard Grid */}
      <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {/* Organization Overview - Large Widget */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
          <OrganizationOverview />
        </div>

        {/* Compliance Status */}
        <div className="col-span-1">
          <ComplianceStatus />
        </div>

        {/* System Alerts */}
        <div className="col-span-1">
          <SystemAlerts />
        </div>

        {/* Revenue Metrics - Medium Widget */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <RevenueMetrics />
        </div>

        {/* Team Performance - Medium Widget */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <TeamPerformance />
        </div>

        {/* Quick Actions */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
          <QuickActions />
        </div>
      </div>

      {/* Bottom Summary Stats */}
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card className="enterprise-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">12</div>
            <p className="text-xs text-muted-foreground">
              +2 this month
            </p>
          </CardContent>
        </Card>

        <Card className="enterprise-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Staff
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">84</div>
            <p className="text-xs text-muted-foreground">
              Across all locations
            </p>
          </CardContent>
        </Card>

        <Card className="enterprise-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Compliance Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">98.2%</div>
            <p className="text-xs text-muted-foreground">
              +1.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="enterprise-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Optimal</span>
            </div>
            <p className="text-xs dashboard-text-muted">
              All systems operational
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
