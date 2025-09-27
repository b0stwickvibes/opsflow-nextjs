"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Activity, Settings, Plus, FileText } from "lucide-react";

export function QuickActions() {
  return (
    <Card className="enterprise-card">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <Button className="clerk-cta-primary justify-start h-auto py-4">
            <div className="text-center">
              <Users className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-medium">Manage Team</div>
            </div>
          </Button>
          
          <Button className="clerk-cta-ghost justify-start h-auto py-4">
            <div className="text-center">
              <MapPin className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-medium">Add Location</div>
            </div>
          </Button>
          
          <Button className="clerk-cta-ghost justify-start h-auto py-4">
            <div className="text-center">
              <Activity className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-medium">View Reports</div>
            </div>
          </Button>
          
          <Button className="clerk-cta-ghost justify-start h-auto py-4">
            <div className="text-center">
              <FileText className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-medium">Create SOP</div>
            </div>
          </Button>
          
          <Button className="clerk-cta-ghost justify-start h-auto py-4">
            <div className="text-center">
              <Plus className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-medium">New Task</div>
            </div>
          </Button>
          
          <Button className="clerk-cta-ghost justify-start h-auto py-4">
            <div className="text-center">
              <Settings className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-medium">Settings</div>
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
