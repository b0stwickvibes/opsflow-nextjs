"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Thermometer, Users, BarChart3, AlertTriangle, CheckCircle, Clock, TrendingUp } from "lucide-react";

/**
 * StatusDashboard
 * Purpose: Real-time operations dashboard summary styled per Figma.
 * Used in: /landing marketing section
 */
export function StatusDashboard() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-display-md mb-4 animate-fade-in-up">Real-Time Operations Dashboard</h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">Monitor your restaurant's critical systems and compliance status at a glance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="platform-card-professional animate-scale-in">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Shield className="h-8 w-8 text-primary" />
                <Badge className="status-indicator-success">Compliant</Badge>
              </div>
              <CardTitle className="text-lg">HACCP Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">All critical control points within safe parameters</p>
              <div className="flex items-center text-xs text-green-600">
                <CheckCircle className="h-3 w-3 mr-1" />
                Last check: 2 hours ago
              </div>
            </CardContent>
          </Card>

          <Card className="platform-card-professional animate-scale-in animation-delay-100">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Thermometer className="h-8 w-8 text-primary" />
                <Badge className="status-indicator-success">Optimal</Badge>
              </div>
              <CardTitle className="text-lg">Temperature Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Walk-in cooler: 38°F | Freezer: -10°F</p>
              <div className="flex items-center text-xs text-green-600">
                <CheckCircle className="h-3 w-3 mr-1" />
                All units operational
              </div>
            </CardContent>
          </Card>

          <Card className="platform-card-professional animate-scale-in animation-delay-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Users className="h-8 w-8 text-primary" />
                <Badge className="status-indicator-warning">Review</Badge>
              </div>
              <CardTitle className="text-lg">Staff Training</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">2 certifications expiring next week</p>
              <div className="flex items-center text-xs text-orange-600">
                <Clock className="h-3 w-3 mr-1" />
                Action required
              </div>
            </CardContent>
          </Card>

          <Card className="platform-card-professional animate-scale-in animation-delay-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <BarChart3 className="h-8 w-8 text-primary" />
                <Badge className="status-indicator-success">Trending Up</Badge>
              </div>
              <CardTitle className="text-lg">Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Efficiency improved 15% this month</p>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                Above target
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="platform-card-professional animate-fade-in-up animation-delay-400">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <CardTitle>System Alerts & Notifications</CardTitle>
                </div>
                <Badge variant="outline">3 Active</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-200">Daily cleaning checklist completed</p>
                      <p className="text-sm text-green-600 dark:text-green-400">Kitchen team - 2 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium text-orange-800 dark:text-orange-200">Food safety certification renewal due</p>
                      <p className="text-sm text-orange-600 dark:text-orange-400">John Smith - Due in 5 days</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-800 dark:text-blue-200">Weekly performance report available</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">Restaurant operations - Just now</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

