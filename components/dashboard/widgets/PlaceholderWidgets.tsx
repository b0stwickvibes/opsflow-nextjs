"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";

// Placeholder widget component for widgets not yet implemented
function PlaceholderWidget({ title, icon: Icon = Activity }: { title: string; icon?: any }) {
  return (
    <Card className="enterprise-card h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="enterprise-icon-muted">
            <Icon className="h-5 w-5" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center h-24 bg-surface-subtle-muted rounded-lg">
          <div className="text-center">
            <Icon className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <div className="text-sm dashboard-text-muted">Widget coming soon</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Placeholder widgets for missing components
export const TeamPerformance = () => <PlaceholderWidget title="Team Performance" />;
export const RevenueMetrics = () => <PlaceholderWidget title="Revenue Metrics" />;
export const TodaysTasks = () => <PlaceholderWidget title="Today's Tasks" />;
export const TeamStatus = () => <PlaceholderWidget title="Team Status" />;
export const ShiftSchedule = () => <PlaceholderWidget title="Shift Schedule" />;
export const PerformanceMetrics = () => <PlaceholderWidget title="Performance Metrics" />;
export const UrgentAlerts = () => <PlaceholderWidget title="Urgent Alerts" />;
export const MySchedule = () => <PlaceholderWidget title="My Schedule" />;
export const TrainingProgress = () => <PlaceholderWidget title="Training Progress" />;
export const Announcements = () => <PlaceholderWidget title="Announcements" />;
export const PersonalMetrics = () => <PlaceholderWidget title="Personal Metrics" />;
