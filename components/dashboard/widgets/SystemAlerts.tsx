"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, AlertCircle, Info } from "lucide-react";

export function SystemAlerts() {
  const alerts = [
    {
      id: 1,
      type: "critical",
      message: "Freezer temp high at Downtown",
      time: "5 min ago",
      icon: AlertTriangle,
      className: "surface-subtle-destructive"
    },
    {
      id: 2,
      type: "warning", 
      message: "Overdue cleaning checklist",
      time: "15 min ago",
      icon: AlertCircle,
      className: "bg-surface-subtle-secondary"
    },
    {
      id: 3,
      type: "info",
      message: "New staff training available",
      time: "1 hour ago", 
      icon: Info,
      className: "surface-subtle-muted"
    }
  ];

  return (
    <Card className="enterprise-card h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="enterprise-icon-muted">
            <AlertTriangle className="h-5 w-5" />
          </div>
          System Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert) => {
            const IconComponent = alert.icon;
            return (
              <div key={alert.id} className={`p-3 rounded-lg border ${alert.className}`}>
                <div className="flex items-start gap-3">
                  <IconComponent className="h-4 w-4 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium dashboard-text-primary truncate">
                      {alert.message}
                    </div>
                    <div className="text-xs dashboard-text-muted mt-1">
                      {alert.time}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
