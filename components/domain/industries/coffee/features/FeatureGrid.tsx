"use client";

import { Coffee, Users, ShieldCheck, Clock } from "lucide-react";
import { FeatureGridBase, type FeatureGridItem } from "@/components/shared/features/base/FeatureGridBase";

const items: FeatureGridItem[] = [
  { title: "Brew Consistency", description: "Standard recipes with real-time checks.", icon: Coffee, highlight: 'high' },
  { title: "Queue Flow", description: "Monitor and optimize rush-hour queues.", icon: Clock },
  { title: "Team Coordination", description: "Barista tasks and station handoffs.", icon: Users },
  { title: "Safety & Hygiene", description: "Daily checklists and compliance logging.", icon: ShieldCheck, highlight: 'critical' },
];

export function FeatureGrid() {
  return (
    <FeatureGridBase
      title="Coffee Operations Essentials"
      subtitle="Consistency, speed, and quality designed for busy cafés"
      items={items}
      energy="balanced"
    />
  );
}

