"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, Clock } from "lucide-react";

export function ComplianceStatus() {
  return (
    <Card className="enterprise-card h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="enterprise-icon-accent">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          Compliance Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm dashboard-text-primary">HACCP Compliance</span>
            <Badge className="dashboard-badge-live">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              Passed
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm dashboard-text-primary">Temperature Logs</span>
            <Badge className="dashboard-badge-active">
              <Clock className="w-3 h-3 mr-1" />
              Current
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm dashboard-text-primary">Staff Training</span>
            <Badge className="badge-warning">
              <AlertTriangle className="w-3 h-3 mr-1" />
              2 Pending
            </Badge>
          </div>
          
          <div className="pt-4 border-t">
            <div className="text-sm dashboard-text-muted mb-2">Overall Score</div>
            <div className="text-3xl font-bold text-brand-gradient">94.8%</div>
            <div className="text-xs dashboard-text-muted">+2.1% from last month</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
