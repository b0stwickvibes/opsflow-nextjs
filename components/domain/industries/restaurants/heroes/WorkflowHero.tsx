"use client";

import { ChefHat, Clock, Users, BarChart3 } from "lucide-react";
import { WorkflowHeroBase, type WorkflowHeroContent } from "@/components/shared/heroes/base/WorkflowHeroBase";
import { usePermission } from "@/lib/hooks/restaurant-pages";

const content: WorkflowHeroContent = {
  title: "Streamline Your Restaurant Workflows",
  subtitle: "Track progress across custom kitchen flows and service operations designed for your restaurant team.",
  features: [
    { title: "Kitchen Workflows", description: "Track prep-to-plate processes with custom flows.", icon: ChefHat },
    { title: "Service Milestones", description: "Break operations into clear service phases.", icon: Clock },
    { title: "Cross-shift Operations", description: "Collaborate across kitchen and FOH teams.", icon: Users },
    { title: "Performance Insights", description: "Monitor costs, velocity, and efficiency.", icon: BarChart3 },
  ],
  cta: "Optimize Restaurant",
  color: "orange",
};

export function WorkflowHero() {
  const canOptimize = usePermission('WORKFLOW_OPTIMIZATION_ACCESS');
  return (
    <WorkflowHeroBase content={content} energy="balanced" canClick={!!canOptimize} />
  );
}

