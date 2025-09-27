"use client";

import React from "react";
import { useUser, useOrganization } from "@clerk/nextjs";
import {
  Users,
  ClipboardList,
  Clock,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Calendar,
  Activity,
  Bell,
  Settings
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Widgets
import { TodaysTasks } from "./widgets/PlaceholderWidgets";
import { TeamStatus } from "./widgets/PlaceholderWidgets";
import { ShiftSchedule } from "./widgets/PlaceholderWidgets";
import { PerformanceMetrics } from "./widgets/PlaceholderWidgets";
import { UrgentAlerts } from "./widgets/PlaceholderWidgets";
import { QuickActions } from "./widgets/QuickActions";

interface ManagerDashboardProps {
  className?: string;
}

export function ManagerDashboard({ className = "" }: ManagerDashboardProps) {
  const { user } = useUser();
  const { organization } = useOrganization();

  return (
    <div className={`dashboard-container ${className}`}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="enterprise-headline text-3xl">
              Manager Dashboard
            </h1>
            <p className="dashboard-text-secondary mt-2">
              Good morning, {user?.firstName}. Here's what needs your attention today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="dashboard-badge-active">
              <Clock className="w-3 h-3 mr-1" />
              On Duty
            </Badge>
            <Button className="clerk-cta-ghost" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Alerts
            </Button>
          </div>
        </div>
        <Separator className="mt-6" />
      </div>

      {/* Dashboard Grid */}
      <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {/* Today's Tasks - Large Widget */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
          <TodaysTasks />
        </div>

        {/* Team Status */}
        <div className="col-span-1">
          <TeamStatus />
        </div>

        {/* Urgent Alerts */}
        <div className="col-span-1">
          <UrgentAlerts />
        </div>

        {/* Shift Schedule - Medium Widget */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <ShiftSchedule />
        </div>

        {/* Performance Metrics - Medium Widget */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <PerformanceMetrics />
        </div>

        {/* Quick Actions */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
          <QuickActions />
        </div>
      </div>

      {/* Today's Overview Stats */}
      <div className="mt-8 dashboard-grid-3 lg:grid-cols-5">
        <Card className="dashboard-metric-restaurant enterprise-metric-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium dashboard-text-primary">
              Today's Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="metric-display-medium text-primary">24</div>
            <p className="text-xs dashboard-text-muted">
              18 completed
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-metric-green enterprise-metric-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium dashboard-text-primary">
              Team Present
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="metric-display-medium text-secondary">12/14</div>
            <p className="text-xs dashboard-text-muted">
              2 on break
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-metric-blue enterprise-metric-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium dashboard-text-primary">
              Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="metric-display-medium text-brand-gradient">8 min</div>
            <p className="text-xs dashboard-text-muted">
              -3 min vs yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-metric-purple enterprise-metric-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium dashboard-text-primary">
              Temperature Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium dashboard-text-primary">Normal</span>
            </div>
            <p className="text-xs dashboard-text-muted">
              All within range
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-metric-coffee enterprise-metric-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium dashboard-text-primary">
              Shift Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="metric-display-medium text-primary">65%</div>
            <p className="text-xs dashboard-text-muted">
              3.5 hours remaining
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
