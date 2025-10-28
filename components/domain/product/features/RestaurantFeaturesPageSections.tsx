"use client";

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
  const items = [
    { icon: Thermometer, title: "Temperature Monitoring", description: "Continuous sensors, alerts, and logs." },
    { icon: AlertTriangle, title: "Incident Management", description: "Capture, assign, and resolve with audit trail." },
    { icon: Wrench, title: "Work Orders", description: "Create, triage, and track maintenance." },
    { icon: ClipboardCheck, title: "Audits", description: "HACCP/FSMA-ready digital audits." },
  ];

  return (
    <section className="container py-16">
      <OpsSectionHeader
        eyebrow="Advanced Restaurant Operations"
        title="Temperature, Incidents, Audits, and Work Orders"
        description="Sophisticated tools for monitoring, incident management, work orders, and compliance auditing."
      />
      <OpsFeatureGrid items={items} columns={4} highlightIndex={0} energy="subtle" />
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
