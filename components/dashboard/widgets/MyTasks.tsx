"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

export function MyTasks() {
  const tasks = [
    {
      id: 1,
      title: "Morning Temperature Check",
      priority: "high",
      status: "completed",
      time: "09:00 AM",
      location: "Kitchen"
    },
    {
      id: 2, 
      title: "Prep Station Setup",
      priority: "medium",
      status: "in-progress", 
      time: "09:30 AM",
      location: "Prep Area"
    },
    {
      id: 3,
      title: "Inventory Count - Dry Goods",
      priority: "low",
      status: "pending",
      time: "02:00 PM", 
      location: "Storage"
    },
    {
      id: 4,
      title: "End of Shift Cleaning",
      priority: "high",
      status: "pending",
      time: "08:00 PM",
      location: "All Areas"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="dashboard-badge-live"><CheckCircle2 className="w-3 h-3 mr-1" />Completed</Badge>;
      case 'in-progress': 
        return <Badge className="dashboard-badge-active"><Clock className="w-3 h-3 mr-1" />In Progress</Badge>;
      case 'pending':
        return <Badge className="badge-outline">Pending</Badge>;
      default:
        return <Badge className="badge-outline">Unknown</Badge>;
    }
  };

  return (
    <Card className="enterprise-card h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="enterprise-icon-primary">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          My Tasks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="p-4 border rounded-lg hover:bg-surface-subtle-muted transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-medium dashboard-text-primary">{task.title}</h4>
                  <div className="text-sm dashboard-text-muted mt-1">
                    {task.time} • {task.location}
                  </div>
                </div>
                {getStatusBadge(task.status)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
