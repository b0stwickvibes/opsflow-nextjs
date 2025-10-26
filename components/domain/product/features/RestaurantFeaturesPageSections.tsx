"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Check, ClipboardCheck, Thermometer, Users, Megaphone, Wrench, Building2 } from "lucide-react";
import { OpsSectionHeader } from "@/components/domain/product/features/OpsSectionHeader";
import { OpsFeatureGrid } from "@/components/domain/product/features/OpsFeatureGrid";
import { StripeFeatureSection } from "@/components/domain/product/features/StripeFeatureSection";

export function DailyTasksSection() {
  const features = [
    {
      title: "Custom Checklist Builder",
      description: "Create unlimited checklists from 50+ templates or build from scratch. Drag-and-drop interface with rich media support for photos and videos."
    },
    {
      title: "Smart Recurring Schedules",
      description: "Set intelligent recurring patterns based on day, time, or custom triggers. Automatic task generation keeps your team on schedule."
    },
    {
      title: "Role-Based Assignments",
      description: "Assign tasks by role, location, or individual. Automatic routing ensures the right person gets the right task every time."
    },
    {
      title: "Mobile-First Tracking",
      description: "Native iOS and Android apps with offline mode. Complete tasks, add photos, and record notes from anywhere in your restaurant."
    },
    {
      title: "Real-Time Analytics",
      description: "Live dashboards show completion rates, time-to-complete, and bottlenecks. Export reports for trend analysis and compliance."
    }
  ];

  return (
    <StripeFeatureSection
      badge="Task Management"
      title="Every Task, Every Time"
      subtitle="Digital checklists that actually get completed"
      description="Transform paper checklists into intelligent workflows with automated scheduling, role-based routing, and real-time completion tracking."
      features={features}
    />
  );
}

export function FoodSafetySection() {
  const features = [
    {
      title: "Bluetooth Temperature Sensors",
      description: "Connect wireless Bluetooth probes for continuous monitoring. Instant alerts when temperatures drift out of safe zones."
    },
    {
      title: "HACCP & FSMA Workflows",
      description: "Built-in HACCP compliance workflows with critical control points. Automated documentation for health inspections and audits."
    },
    {
      title: "Automated Incident Reporting",
      description: "One-tap incident capture with photo evidence and witness statements. Automatic notifications to management and required authorities."
    },
    {
      title: "Digital Food Safety Audits",
      description: "Conduct comprehensive audits with guided checklists. Generate inspection-ready reports in minutes, not hours."
    },
    {
      title: "Complete Audit Trails",
      description: "Every action timestamped and logged. Tamper-proof records that satisfy regulatory requirements and protect your business."
    }
  ];

  return (
    <StripeFeatureSection
      badge="Food Safety"
      title="HACCP Compliance Made Simple"
      subtitle="Automated monitoring and documentation"
      description="Maintain perfect food safety records with continuous temperature monitoring, automated corrective actions, and inspection-ready reporting."
      features={features}
      reverse
    />
  );
}

export function AdvancedOpsSection() {
  return <AdvancedOperationsFeatures />;
}

function AdvancedOperationsFeatures() {
  const features = [
    {
      icon: Thermometer,
      title: "Temperature Monitoring",
      description: "Continuous sensors, alerts, and logs.",
      preview: (
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 rounded-lg bg-background/95 border border-primary/20 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <div>
                <p className="text-xs font-semibold">Walk-in Cooler</p>
                <p className="text-[10px] text-muted-foreground">Zone A</p>
              </div>
            </div>
            <span className="text-sm font-bold text-primary">38°F</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-background/95 border border-red-500/40 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <div>
                <p className="text-xs font-semibold">Freezer Unit 2</p>
                <p className="text-[10px] text-muted-foreground">Zone B</p>
              </div>
            </div>
            <span className="text-sm font-bold text-red-500">12°F ⚠️</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-background/95 border border-primary/20 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <div>
                <p className="text-xs font-semibold">Hot Hold Station</p>
                <p className="text-[10px] text-muted-foreground">Kitchen</p>
              </div>
            </div>
            <span className="text-sm font-bold text-primary">165°F</span>
          </div>
        </div>
      )
    },
    {
      icon: AlertTriangle,
      title: "Incident Management",
      description: "Capture, assign, and resolve with audit trail.",
      preview: (
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-background/95 border border-orange-500/30 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="text-xs font-semibold">Spill - Kitchen</span>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-orange-500/20 text-orange-600">
                ACTIVE
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground mb-1">Assigned to: Sarah Martinez</p>
            <p className="text-[10px] text-muted-foreground">Created: 5 min ago</p>
          </div>
          <div className="p-3 rounded-lg bg-background/95 border border-green-500/30 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-xs font-semibold">Equipment Fixed</span>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-green-500/20 text-green-600">
                RESOLVED
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground">Completed: 2h ago</p>
          </div>
        </div>
      )
    },
    {
      icon: Wrench,
      title: "Work Orders",
      description: "Create, triage, and track maintenance.",
      preview: (
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-background/95 border border-red-500/30 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold">Ice Machine Repair</span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-red-500/20 text-red-600">
                HIGH
              </span>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
              <span>Due: Today 5PM</span>
              <span>•</span>
              <span>Tech: John D.</span>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-background/95 border border-yellow-500/30 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold">AC Filter Change</span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-yellow-500/20 text-yellow-600">
                MED
              </span>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
              <span>Due: Tomorrow</span>
              <span>•</span>
              <span>Tech: Mike R.</span>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: ClipboardCheck,
      title: "Audits",
      description: "HACCP/FSMA-ready digital audits.",
      preview: (
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-background/95 border border-green-500/30 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold">Health Inspection</span>
              <span className="text-sm font-bold text-green-600">98/100</span>
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-green-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '98%' }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">Last audit: Oct 15, 2025</p>
          </div>
          <div className="p-3 rounded-lg bg-background/95 border border-primary/30 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold">Food Safety HACCP</span>
              <span className="text-sm font-bold text-primary">100/100</span>
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              />
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">Last audit: Oct 20, 2025</p>
          </div>
        </div>
      )
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Advanced Restaurant Operations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Temperature, Incidents, Audits, and Work Orders
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Sophisticated tools for monitoring, incident management, work orders, and compliance auditing.
          </p>
        </div>

        {/* Features Grid with Interactive Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group relative h-[280px] rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden hover:shadow-lg"
                initial={false}
                whileHover={{ y: -4 }}
              >
                {/* Static Content - Slides Up on Hover */}
                <motion.div 
                  className="absolute inset-0 p-6 flex flex-col"
                  initial={false}
                  animate={{ y: 0 }}
                  whileHover={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="mb-4">
                    <Icon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>

                {/* Animated Preview - Slides Up from Bottom */}
                <motion.div
                  className="absolute inset-0 p-6 flex items-center justify-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {feature.preview}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TeamAndLocationsSection() {
  const features = [
    {
      title: "Real-Time Team Messaging",
      description: "Built-in chat for instant communication across shifts. Group channels, direct messages, and @mentions keep everyone connected."
    },
    {
      title: "Announcements & Broadcasts",
      description: "Send urgent updates to all locations instantly. Require read receipts and track acknowledgment in real-time."
    },
    {
      title: "Multi-Location Dashboard",
      description: "Single pane of glass for all locations. Compare performance, identify outliers, and share best practices across your network."
    },
    {
      title: "Unified SOPs & Templates",
      description: "Create once, deploy everywhere. Location-specific customization while maintaining brand standards and compliance requirements."
    }
  ];

  return (
    <StripeFeatureSection
      badge="Team & Multi-Location"
      title="Scale Your Operations"
      subtitle="Coordinate teams across any number of locations"
      description="Centralized control with location-level flexibility. Unified communication, reporting, and SOP management for restaurant groups of any size."
      features={features}
    />
  );
}
