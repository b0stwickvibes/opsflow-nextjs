"use client";

import { AlertTriangle, Check, ClipboardCheck, Thermometer, Users, Megaphone, Wrench, Building2 } from "lucide-react";
import { OpsSectionHeader } from "@/components/domain/product/features/OpsSectionHeader";
import { OpsMediaFeature } from "@/components/domain/product/features/OpsMediaFeature";
import { OpsFeatureGrid } from "@/components/domain/product/features/OpsFeatureGrid";
import { marketingAssets } from "@/lib/assets/marketing";

export function DailyTasksSection() {
  const media = marketingAssets.features.staffScheduling;
  const items = [
    { icon: Check, label: "Custom checklist builder with templates" },
    { icon: Check, label: "Smart recurring task scheduling" },
    { icon: Check, label: "Role-based task assignment" },
    { icon: Check, label: "Mobile-first completion tracking" },
    { icon: Check, label: "Progress analytics and reporting" },
    { icon: Check, label: "Failed step corrective actions" },
  ];

  return (
    <section className="container py-16">
      <OpsSectionHeader
        eyebrow="50+ powerful features"
        title="Daily Tasks & Checklists"
        description="Custom templates, role-based assignments, mobile-first completion, and corrective actions—all tracked with real analytics."
      />
      <OpsMediaFeature media={{ src: media.src, alt: media.alt }} items={items} />
    </section>
  );
}

export function FoodSafetySection() {
  const media = marketingAssets.features.haccpCompliance;
  const items = [
    { icon: Check, label: "Bluetooth temperature sensor integration" },
    { icon: Check, label: "HACCP & FSMA compliance workflows" },
    { icon: Check, label: "Automated incident reporting" },
    { icon: Check, label: "Digital food safety audits" },
    { icon: Check, label: "Corrective action management" },
    { icon: Check, label: "Regulatory report generation" },
  ];

  return (
    <section className="container py-16">
      <OpsSectionHeader
        title="Food Safety & Compliance"
        description="HACCP/FSMA workflows, Bluetooth probes and continuous sensors with auto corrective actions and complete audit trails."
      />
      <OpsMediaFeature media={{ src: media.src, alt: media.alt }} items={items} reverse />
    </section>
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
  const media = marketingAssets.cards.teamMeeting || marketingAssets.industries.restaurants.fullServiceDining;
  const items = [
    { icon: Users, label: "Real-time team messaging" },
    { icon: Megaphone, label: "Announcements & broadcasts" },
    { icon: Building2, label: "Multi-location controls" },
    { icon: ClipboardCheck, label: "Unified analytics & SOPs" },
  ];

  return (
    <section className="container py-16">
      <OpsSectionHeader
        title="Team Communication & Multi‑Location"
        description="Real-time messaging, announcements, and cross-location controls with unified analytics and SOP management."
      />
      <OpsMediaFeature media={{ src: media.src, alt: media.alt }} items={items} />
    </section>
  );
}
