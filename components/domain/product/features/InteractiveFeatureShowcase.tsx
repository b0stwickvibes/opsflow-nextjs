"use client";

import React, { useState } from "react";
import { CheckSquare, Thermometer, FileCheck, Users, BarChart3, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

/**
 * InteractiveFeatureShowcase - Tabbed feature demonstration with live previews
 * 
 * DESIGN STANDARDS:
 * - Uses OKLCH color tokens exclusively
 * - Professional metric card system with 8% opacity
 * - BARS-DEMO sticky sidebar pattern
 * - Follows enterprise glassmorphism standards
 * - Restaurant-specific terminology
 */

const featureTabs = [
  {
    id: "tasks",
    icon: CheckSquare,
    title: "Task Management",
    description: "Smart checklists with automated routing, role-based assignments, and mobile tracking",
    metrics: [
      { label: "Tasks Completed Today", value: "127", progress: 85, status: "active" },
      { label: "On-Time Completion", value: "94%", progress: 94, status: "success" },
      { label: "Pending Tasks", value: "23", progress: 15, status: "warning" },
      { label: "Average Completion Time", value: "12min", progress: 88, status: "info" }
    ],
    features: [
      "50+ customizable templates",
      "Smart recurring schedules",
      "Photo verification required",
      "Automated escalation rules"
    ]
  },
  {
    id: "temperature",
    icon: Thermometer,
    title: "Temperature Monitoring",
    description: "Continuous monitoring with Bluetooth sensors, automated alerts, and compliance logging",
    metrics: [
      { label: "Cooler Temperature", value: "38°F", progress: 95, status: "success" },
      { label: "Freezer Temperature", value: "-2°F", progress: 98, status: "success" },
      { label: "Hot Line Temperature", value: "152°F", progress: 92, status: "active" },
      { label: "Compliance Rate", value: "99.8%", progress: 99, status: "success" }
    ],
    features: [
      "Bluetooth probe integration",
      "24/7 continuous monitoring",
      "Instant SMS/email alerts",
      "Automatic HACCP logs"
    ]
  },
  {
    id: "compliance",
    icon: FileCheck,
    title: "HACCP Compliance",
    description: "Digital audits, corrective action workflows, and regulatory-ready reporting",
    metrics: [
      { label: "Compliance Score", value: "98.5%", progress: 98, status: "success" },
      { label: "Audits This Month", value: "12", progress: 100, status: "active" },
      { label: "Open Corrective Actions", value: "3", progress: 25, status: "warning" },
      { label: "Days Since Last Incident", value: "45", progress: 90, status: "info" }
    ],
    features: [
      "HACCP & FSMA ready",
      "Digital audit templates",
      "Photo documentation",
      "Corrective action tracking"
    ]
  },
  {
    id: "team",
    icon: Users,
    title: "Team Management",
    description: "Staff scheduling, training tracking, performance monitoring, and real-time communication",
    metrics: [
      { label: "Staff On Duty", value: "18", progress: 90, status: "active" },
      { label: "Training Compliance", value: "96%", progress: 96, status: "success" },
      { label: "Labor Cost %", value: "28.5%", progress: 71, status: "info" },
      { label: "Team Response Time", value: "3min", progress: 85, status: "success" }
    ],
    features: [
      "Smart scheduling automation",
      "Digital training tracking",
      "Real-time team chat",
      "Performance analytics"
    ]
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Real-time dashboards, custom reports, predictive insights, and KPI tracking",
    metrics: [
      { label: "Overall Efficiency", value: "87%", progress: 87, status: "success" },
      { label: "Cost Savings MTD", value: "$4,280", progress: 75, status: "active" },
      { label: "Task Completion Rate", value: "91%", progress: 91, status: "success" },
      { label: "Compliance Score", value: "98%", progress: 98, status: "success" }
    ],
    features: [
      "Live operations dashboard",
      "Custom report builder",
      "Predictive AI insights",
      "Export to Excel/PDF"
    ]
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Equipment & Maintenance",
    description: "Work orders, preventive maintenance schedules, and equipment lifecycle tracking",
    metrics: [
      { label: "Active Work Orders", value: "7", progress: 35, status: "warning" },
      { label: "PM Completion Rate", value: "94%", progress: 94, status: "success" },
      { label: "Equipment Uptime", value: "98.2%", progress: 98, status: "success" },
      { label: "Avg Resolution Time", value: "4.2hrs", progress: 82, status: "info" }
    ],
    features: [
      "Digital work order system",
      "Preventive maintenance",
      "Equipment asset tracking",
      "Vendor management"
    ]
  }
];

const statusColors = {
  active: "bg-primary/8 border-primary/15 text-primary",
  success: "bg-secondary/8 border-secondary/15 text-secondary",
  warning: "bg-primary/8 border-primary/15 text-primary",
  info: "bg-muted/50 border-border text-foreground"
};

const progressColors = {
  active: "bg-primary",
  success: "bg-secondary",
  warning: "bg-primary",
  info: "bg-muted-foreground"
};

export function InteractiveFeatureShowcase() {
  const [activeTab, setActiveTab] = useState(featureTabs[0].id);
  const currentFeature = featureTabs.find(tab => tab.id === activeTab) || featureTabs[0];
  const Icon = currentFeature.icon;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex">
          <div className="clerk-inspired-badge">
            Interactive Demo
          </div>
        </div>
        <h2 className="enterprise-headline">
          See Features in Action
          <span className="block heading-brand-gradient mt-2">
            Real-time Operations Dashboard
          </span>
        </h2>
        <p className="enterprise-body">
          Click through different operational areas to see live metrics, 
          automated workflows, and real-time monitoring in action.
        </p>
      </div>

      {/* Interactive Content */}
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Tab Navigation - Left Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          {featureTabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = tab.id === activeTab;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  w-full text-left p-4 rounded-xl border transition-all duration-300
                  ${isActive 
                    ? 'bg-primary/8 border-primary/20 shadow-sm' 
                    : 'bg-background/60 border-border/50 hover:bg-muted/50 hover:border-border'}
                `}
              >
                <div className="flex items-start gap-3">
                  <div className={`
                    flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border
                    ${isActive 
                      ? 'bg-primary/10 border-primary/20 text-primary' 
                      : 'bg-background/50 border-border/50 text-muted-foreground'}
                  `}>
                    <TabIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm ${isActive ? 'text-foreground' : 'text-foreground/80'}`}>
                      {tab.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {tab.description}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Content Area - Right Side */}
        <div className="lg:col-span-8 space-y-6">
          {/* Feature Header */}
          <div className="clerk-glass-card p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {currentFeature.title}
                </h3>
                <p className="text-muted-foreground">
                  {currentFeature.description}
                </p>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap gap-2 pt-2">
              {currentFeature.features.map((feature, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Live Metrics Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentFeature.metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`
                  p-5 rounded-xl border transition-all duration-300
                  ${statusColors[metric.status as keyof typeof statusColors]}
                  motion-fade-in-up-320
                `}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {metric.label}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] text-muted-foreground">Live</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold">
                    {metric.value}
                  </div>
                  <Progress 
                    value={metric.progress} 
                    className="h-1.5"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
