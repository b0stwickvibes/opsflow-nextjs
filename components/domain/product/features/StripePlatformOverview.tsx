"use client";

import React from "react";
import { 
  CheckSquare, 
  Thermometer, 
  FileCheck, 
  Users, 
  BarChart3, 
  Shield,
  Wrench,
  Bell,
  Globe,
  Smartphone,
  Zap,
  Lock
} from "lucide-react";

/**
 * Platform Overview - Clean Card Style (Screenshot Inspired)
 * 
 * DESIGN STANDARDS:
 * - Clean card-based layout like screenshot
 * - Colorful icon backgrounds
 * - Simple, elegant spacing
 * - Subtle hover effects
 */

const platformFeatures = [
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Smart checklists with automated scheduling and mobile tracking",
    iconBg: "bg-pink-100 dark:bg-pink-900/30",
    iconColor: "text-pink-600 dark:text-pink-400"
  },
  {
    icon: Thermometer,
    title: "Temperature Monitoring",
    description: "Bluetooth sensors with 24/7 continuous monitoring and alerts",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    icon: FileCheck,
    title: "HACCP Compliance",
    description: "Digital audits with automated corrective actions",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Scheduling, training tracking, and real-time communication",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Live dashboards with custom reports and AI insights",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: Shield,
    title: "Safety & Incidents",
    description: "Incident tracking with photo evidence and audit trails",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400"
  },
  {
    icon: Wrench,
    title: "Equipment Maintenance",
    description: "Work orders and preventive maintenance schedules",
    iconBg: "bg-cyan-100 dark:bg-cyan-900/30",
    iconColor: "text-cyan-600 dark:text-cyan-400"
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Multi-channel notifications with escalation rules",
    iconBg: "bg-amber-100 dark:bg-amber-900/30",
    iconColor: "text-amber-600 dark:text-amber-400"
  },
  {
    icon: Globe,
    title: "Multi-Location",
    description: "Centralized oversight with location-specific controls",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColor: "text-indigo-600 dark:text-indigo-400"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native iOS & Android with offline mode",
    iconBg: "bg-rose-100 dark:bg-rose-900/30",
    iconColor: "text-rose-600 dark:text-rose-400"
  },
  {
    icon: Zap,
    title: "Integrations",
    description: "POS, inventory, HR, and accounting system connections",
    iconBg: "bg-violet-100 dark:bg-violet-900/30",
    iconColor: "text-violet-600 dark:text-violet-400"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Role-based access, SSO, and SOC 2 compliance",
    iconBg: "bg-fuchsia-100 dark:bg-fuchsia-900/30",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400"
  }
];

export function StripePlatformOverview() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="text-foreground">Features That speak for</span>
          <br />
          <span className="text-muted-foreground">Themselves</span>
        </h2>
      </div>

      {/* Feature Grid - Clean Card Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platformFeatures.map((feature, index) => {
          const Icon = feature.icon;
          
          return (
            <div
              key={index}
              className="group relative p-8 bg-background rounded-2xl border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Icon with Colorful Background */}
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.iconBg} transition-transform group-hover:scale-110 duration-300`}>
                  <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
