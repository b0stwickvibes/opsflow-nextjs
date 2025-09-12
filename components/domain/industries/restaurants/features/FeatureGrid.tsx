"use client";

import { ChefHat, Users, ShieldCheck, Clock } from "lucide-react";
import { FeatureGridBase, type FeatureGridItem } from "@/components/shared/features/base/FeatureGridBase";

const items: FeatureGridItem[] = [
  { title: "Kitchen Workflows", description: "Standardize prep and service phases.", icon: ChefHat, highlight: 'high' },
  { title: "Team Coordination", description: "Clear tasking and status across shifts.", icon: Users },
  { title: "Food Safety", description: "Proactive HACCP checks and alerts.", icon: ShieldCheck, highlight: 'critical' },
  { title: "Service Speed", description: "Track station throughput and timing.", icon: Clock },
];

export function FeatureGrid() {
  return (
    <FeatureGridBase
      title="Restaurant Operations Excellence"
      subtitle="Comprehensive HACCP compliance and operational control designed for modern restaurant chains"
      items={items}
      energy="balanced"
    />
  );
}

