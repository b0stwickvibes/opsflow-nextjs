"use client";

import React from "react";
import { useUser, useOrganization } from "@clerk/nextjs";
import {
  CheckCircle2,
  Clock,
  Users,
  AlertCircle,
  Activity,
  Calendar,
  MessageSquare,
  Award,
  Target,
  TrendingUp
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

// Widgets
import { MyTasks } from "./widgets/MyTasks";
import { MySchedule } from "./widgets/PlaceholderWidgets";
import { TrainingProgress } from "./widgets/PlaceholderWidgets";
import { Announcements } from "./widgets/PlaceholderWidgets";
import { PersonalMetrics } from "./widgets/PlaceholderWidgets";

interface TeamMemberDashboardProps {
  className?: string;
}

export function TeamMemberDashboard({ className = "" }: TeamMemberDashboardProps) {
  const { user } = useUser();
  const { organization } = useOrganization();

  return (
    <div className={`dashboard-container ${className}`}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="enterprise-headline text-3xl">
              Welcome back, {user?.firstName}!
            </h1>
            <p className="dashboard-text-secondary mt-2">
              Ready for another great shift at {organization?.name}? Here's your personal dashboard.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="dashboard-badge-active">
              <Activity className="w-3 h-3 mr-1" />
              Clocked In
            </Badge>
            <Badge className="dashboard-badge-beta">
              <Award className="w-3 h-3 mr-1" />
              Star Performer
            </Badge>
          </div>
        </div>
        <Separator className="mt-6" />
      </div>

      {/* Dashboard Grid */}
      <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {/* My Tasks - Large Widget */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <MyTasks />
        </div>

        {/* My Schedule */}
        <div className="col-span-1">
          <MySchedule />
        </div>

        {/* Training Progress - Medium Widget */}
        <div className="col-span-1 md:col-span-2">
          <TrainingProgress />
        </div>

        {/* Announcements */}
        <div className="col-span-1">
          <Announcements />
        </div>

        {/* Personal Metrics - Full Width */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <PersonalMetrics />
        </div>
      </div>

      {/* Personal Stats */}
      <div className="mt-8 dashboard-grid-3 lg:grid-cols-4">
        <Card className="dashboard-metric-restaurant enterprise-metric-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium dashboard-text-primary">
              Tasks Completed Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="metric-display-medium text-primary">8/12</div>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <div className="bg-primary h-2 rounded-full" style={{width: "67%"}}></div>
            </div>
            <p className="text-xs dashboard-text-muted mt-1">
              4 tasks remaining
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-metric-green enterprise-metric-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium dashboard-text-primary">
              Shift Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="metric-display-medium text-secondary">4.2 hrs</div>
            <p className="text-xs dashboard-text-muted">
              3.8 hours remaining
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-metric-blue enterprise-metric-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium dashboard-text-primary">
              Performance Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="metric-display-medium text-brand-gradient">92%</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-primary" />
              <p className="text-xs dashboard-text-muted">
                +5% this week
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-metric-purple enterprise-metric-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium dashboard-text-primary">
              Training Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="metric-display-medium text-primary">75%</div>
            <p className="text-xs dashboard-text-muted">
              Food Safety Module
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions for Team Members */}
      <div className="mt-8">
        <Card className="enterprise-card">
          <CardHeader>
            <CardTitle className="dashboard-text-primary">Quick Actions</CardTitle>
            <CardDescription className="dashboard-text-secondary">
              Common tasks and shortcuts for your daily workflow
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <Button className="clerk-cta-primary justify-start h-auto py-4">
                <CheckCircle2 className="w-5 h-5 mb-2" />
                <div>
                  <div className="font-medium">Complete Task</div>
                  <div className="text-xs opacity-80">Mark as done</div>
                </div>
              </Button>
              <Button className="clerk-cta-ghost justify-start h-auto py-4">
                <Clock className="w-5 h-5 mb-2" />
                <div>
                  <div className="font-medium">Break Timer</div>
                  <div className="text-xs opacity-80">Start/end break</div>
                </div>
              </Button>
              <Button className="clerk-cta-ghost justify-start h-auto py-4">
                <MessageSquare className="w-5 h-5 mb-2" />
                <div>
                  <div className="font-medium">Report Issue</div>
                  <div className="text-xs opacity-80">Need help?</div>
                </div>
              </Button>
              <Button className="clerk-cta-ghost justify-start h-auto py-4">
                <Calendar className="w-5 h-5 mb-2" />
                <div>
                  <div className="font-medium">View Schedule</div>
                  <div className="text-xs opacity-80">This week</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
