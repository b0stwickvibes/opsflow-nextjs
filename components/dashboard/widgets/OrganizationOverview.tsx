"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, MapPin, Activity } from "lucide-react";

export function OrganizationOverview() {
  return (
    <Card className="enterprise-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="enterprise-icon-primary">
            <TrendingUp className="h-5 w-5" />
          </div>
          Organization Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="text-sm dashboard-text-muted">Total Locations</div>
              <div className="text-2xl font-semibold text-primary">24</div>
            </div>
            <div>
              <div className="text-sm dashboard-text-muted">Active Staff</div>
              <div className="text-2xl font-semibold text-secondary">342</div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-sm dashboard-text-muted">Monthly Revenue</div>
              <div className="text-2xl font-semibold text-brand-gradient">$2.4M</div>
            </div>
            <div>
              <div className="text-sm dashboard-text-muted">Compliance Score</div>
              <div className="text-2xl font-semibold text-primary">98.5%</div>
            </div>
          </div>
        </div>
        
        {/* Chart placeholder */}
        <div className="mt-6 h-32 bg-surface-subtle-primary rounded-lg border border-primary/20 flex items-center justify-center">
          <div className="text-center">
            <Activity className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-sm dashboard-text-muted">Performance Chart</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
