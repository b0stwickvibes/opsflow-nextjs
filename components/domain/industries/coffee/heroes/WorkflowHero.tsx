"use client";

import { Clock, ChefHat, Users, BarChart3, TrendingUp } from "lucide-react";
import { WorkflowHeroBase, type WorkflowHeroContent } from "@/components/shared/heroes/base/WorkflowHeroBase";
import { usePermission } from "@/lib/hooks/restaurant-pages";

const content: WorkflowHeroContent = {
  title: "Enhance Your Café Service Workflows",
  subtitle: "Track progress across coffee preparation flows and service ops for your café team.",
  features: [
    { title: "Preparation Workflows", description: "Track bean-to-cup with custom flows.", icon: Clock },
    { title: "Quality Milestones", description: "Maintain consistency through clear steps.", icon: ChefHat },
    { title: "Team Collaboration", description: "Coordinate across baristas and service.", icon: Users },
    { title: "Quality Insights", description: "Monitor speed and satisfaction metrics.", icon: BarChart3 },
  ],
  cta: "Optimize Café",
  color: "amber",
};

export function WorkflowHero() {
  const canOptimize = usePermission('WORKFLOW_OPTIMIZATION_ACCESS');
  return (
    <WorkflowHeroBase content={content} energy="balanced" canClick={!!canOptimize} />
  );
}

