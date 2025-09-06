"use client";

import {
  ArrowRight,
  ChefHat,
  BarChart3,
  Clock,
  TrendingUp,
  Users,
  Shield,
  Workflow,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { 
  useFeatureFlag, 
  usePageView, 
  usePermission 
} from '@/lib/hooks/restaurant-pages';

// Industry-specific workflow features
const INDUSTRY_WORKFLOWS = {
  restaurant: {
    title: "Streamline Your Restaurant Workflows",
    subtitle: "Track progress across custom kitchen flows and service operations designed for your restaurant team.",
    features: [
      { title: "Kitchen Workflows", description: "Track prep-to-plate processes with custom issue flows for your team.", icon: ChefHat },
      { title: "Service Milestones", description: "Break restaurant operations down into concrete service phases.", icon: Clock },
      { title: "Cross-shift Operations", description: "Collaborate seamlessly across kitchen and front-of-house teams.", icon: Users },
      { title: "Performance Insights", description: "Track food costs, service velocity, and operational efficiency over time.", icon: BarChart3 },
    ],
    cta: "Optimize Restaurant",
    color: "orange",
  },
  bar: {
    title: "Perfect Your Bar Operations Workflow",
    subtitle: "Track progress across custom inventory flows and service operations designed for your bar team.",
    features: [
      { title: "Inventory Workflows", description: "Track bottle-to-glass processes with custom flows for your team.", icon: BarChart3 },
      { title: "Service Milestones", description: "Break bar operations down into concrete service phases.", icon: Clock },
      { title: "Cross-shift Coordination", description: "Collaborate seamlessly across bartending and service teams.", icon: Users },
      { title: "Revenue Insights", description: "Track pour costs, service velocity, and profit margins over time.", icon: TrendingUp },
    ],
    cta: "Optimize Bar",
    color: "purple",
  },
  cafe: {
    title: "Enhance Your Café Service Workflows",
    subtitle: "Track progress across custom coffee preparation flows and service operations for your café team.",
    features: [
      { title: "Preparation Workflows", description: "Track bean-to-cup processes with custom flows for your team.", icon: Clock },
      { title: "Service Milestones", description: "Break café operations down into concrete preparation phases.", icon: ChefHat },
      { title: "Team Collaboration", description: "Collaborate seamlessly across baristas and service teams.", icon: Users },
      { title: "Quality Insights", description: "Track ingredient costs, service speed, and customer satisfaction over time.", icon: BarChart3 },
    ],
    cta: "Optimize Café",
    color: "amber",
  },
};

export interface WorkflowHeroProps {
  industry: 'restaurant' | 'bar' | 'cafe';
  role?: 'owner' | 'manager' | 'staff';
  variant?: 'default' | 'compact' | 'detailed';
}

const WorkflowHero = ({ 
  industry = 'restaurant', 
  role = 'manager',
  variant = 'default'
}: WorkflowHeroProps) => {
  const showWorkflowFeatures = useFeatureFlag('workflowHeroFeatures', true);
  
  usePageView(`${industry}_workflow_hero`, { variant, industry, role });
  
  const canOptimize = usePermission('WORKFLOW_OPTIMIZATION_ACCESS');
  const content = INDUSTRY_WORKFLOWS[industry];

  const colorClasses = {
    orange: 'text-orange-600 dark:text-orange-400 bg-orange-600 hover:bg-orange-700',
    purple: 'text-purple-600 dark:text-purple-400 bg-purple-600 hover:bg-purple-700',
    amber: 'text-amber-600 dark:text-amber-400 bg-amber-600 hover:bg-amber-700'
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/20 py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center space-y-12">
          <div className="space-y-6">
            <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full border", content.color === 'orange' ? 'text-orange-600 dark:text-orange-400' : content.color === 'purple' ? 'text-purple-600 dark:text-purple-400' : 'text-amber-600 dark:text-amber-400')}>
              <Workflow className="size-4" />
              <span className="text-sm font-medium">Smart Workflows</span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in-up">
              {content.title}
            </h1>
            
            <p className="text-muted-foreground text-xl font-medium lg:text-2xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              {content.subtitle}
            </p>
          </div>

          {showWorkflowFeatures && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 animate-fade-in-up animation-delay-300">
              {content.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="space-y-4 text-center p-6 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="flex justify-center">
                      <Icon className={cn("size-8", content.color === 'orange' ? 'text-orange-600 dark:text-orange-400' : content.color === 'purple' ? 'text-purple-600 dark:text-purple-400' : 'text-amber-600 dark:text-amber-400')} />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">{feature.title}</h2>
                      <p className="text-muted-foreground mt-2 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="animate-fade-in-up animation-delay-500">
            <Button 
              size="lg" 
              className={cn(
                "shadow-lg hover:shadow-xl transition-all duration-200",
                content.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700' : 
                content.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' : 
                'bg-amber-600 hover:bg-amber-700',
                !canOptimize && "opacity-75 cursor-not-allowed"
              )}
              disabled={!canOptimize}
            >
              <span className="flex items-center gap-2">
                {content.cta}
                <ArrowRight className="size-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WorkflowHero };