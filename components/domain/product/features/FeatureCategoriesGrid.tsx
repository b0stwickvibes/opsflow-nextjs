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
 * FeatureCategoriesGrid - Overview of all feature categories
 * 
 * DESIGN STANDARDS:
 * - Uses OKLCH color tokens exclusively
 * - Professional 8% opacity card backgrounds
 * - Follows BARS-DEMO grid layout standards
 * - Enterprise-grade hover effects
 * - Restaurant operations focus
 */

const featureCategories = [
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Custom checklists, smart scheduling, role-based assignments with mobile tracking",
    features: ["50+ templates", "Auto-assignment", "Mobile-first"],
    color: "blue" // Task metrics color
  },
  {
    icon: Thermometer,
    title: "Temperature Monitoring",
    description: "Bluetooth sensors, continuous monitoring, automated alerts and compliance logs",
    features: ["Bluetooth probes", "24/7 monitoring", "Auto-alerts"],
    color: "cyan" // Performance color
  },
  {
    icon: FileCheck,
    title: "HACCP Compliance",
    description: "Digital food safety audits, corrective actions, and regulatory reporting",
    features: ["HACCP/FSMA ready", "Auto-reports", "Audit trails"],
    color: "purple" // Status/compliance color
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Staff scheduling, training tracking, performance monitoring, and communication",
    features: ["Smart scheduling", "Training logs", "Team chat"],
    color: "green" // Team metrics color
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Real-time dashboards, custom reports, predictive insights and KPI tracking",
    features: ["Live dashboards", "Custom reports", "AI insights"],
    color: "blue"
  },
  {
    icon: Shield,
    title: "Safety & Incidents",
    description: "Incident tracking, corrective actions, safety protocols and documentation",
    features: ["Incident logs", "Root cause", "Safety docs"],
    color: "purple"
  },
  {
    icon: Wrench,
    title: "Equipment & Maintenance",
    description: "Work order management, preventive maintenance, equipment lifecycle tracking",
    features: ["Work orders", "PM schedules", "Asset tracking"],
    color: "orange" // Progress color
  },
  {
    icon: Bell,
    title: "Alerts & Notifications",
    description: "Smart alerts, escalation rules, multi-channel notifications and reminders",
    features: ["Smart rules", "Multi-channel", "Escalation"],
    color: "cyan"
  },
  {
    icon: Globe,
    title: "Multi-Location",
    description: "Centralized oversight, location-specific SOPs, unified reporting and controls",
    features: ["Central dashboard", "Location SOPs", "Unified data"],
    color: "blue"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS & Android apps, offline mode, barcode scanning and photo capture",
    features: ["Native apps", "Offline mode", "Barcode scan"],
    color: "green"
  },
  {
    icon: Zap,
    title: "Integrations",
    description: "POS systems, inventory, HR platforms, accounting software and more",
    features: ["50+ integrations", "API access", "Webhooks"],
    color: "orange"
  },
  {
    icon: Lock,
    title: "Security & Access",
    description: "Role-based permissions, audit logs, SSO, compliance and data encryption",
    features: ["RBAC", "SSO ready", "SOC 2"],
    color: "purple"
  }
];

const colorClasses = {
  blue: "bg-blue-500/8 border-blue-500/15 hover:bg-blue-500/12 hover:border-blue-500/25",
  green: "bg-green-500/8 border-green-500/15 hover:bg-green-500/12 hover:border-green-500/25",
  purple: "bg-purple-500/8 border-purple-500/15 hover:bg-purple-500/12 hover:border-purple-500/25",
  cyan: "bg-cyan-500/8 border-cyan-500/15 hover:bg-cyan-500/12 hover:border-cyan-500/25",
  orange: "bg-orange-500/8 border-orange-500/15 hover:bg-orange-500/12 hover:border-orange-500/25"
};

const iconColorClasses = {
  blue: "text-blue-600 dark:text-blue-400",
  green: "text-green-600 dark:text-green-400",
  purple: "text-purple-600 dark:text-purple-400",
  cyan: "text-cyan-600 dark:text-cyan-400",
  orange: "text-orange-600 dark:text-orange-400"
};

export function FeatureCategoriesGrid() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex">
          <div className="clerk-inspired-badge">
            Complete Platform
          </div>
        </div>
        <h2 className="enterprise-headline">
          Everything You Need to Run
          <span className="block heading-brand-gradient mt-2">
            Restaurant Operations
          </span>
        </h2>
        <p className="enterprise-body">
          Comprehensive features covering every aspect of restaurant management—from daily tasks 
          to compliance, team coordination to analytics.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureCategories.map((category, index) => {
          const Icon = category.icon;
          const colorClass = colorClasses[category.color as keyof typeof colorClasses];
          const iconColorClass = iconColorClasses[category.color as keyof typeof iconColorClasses];
          
          return (
            <div
              key={index}
              className={`
                group relative p-6 rounded-xl border transition-all duration-300
                ${colorClass}
                motion-fade-in-up-320
              `}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-background/50 border border-border/50">
                  <Icon className={`w-6 h-6 ${iconColorClass}`} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-background/60 border border-border/40 text-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300 pointer-events-none" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
