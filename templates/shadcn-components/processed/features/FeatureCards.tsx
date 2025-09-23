"use client";

import { ChefHat, Users, BarChart3, Clock, ShieldCheck, DollarSign, Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface StaffManagementFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  category: "scheduling" | "training" | "performance" | "compliance";
  metrics?: string;
  benefits: string[];
}

const staffFeatures: StaffManagementFeature[] = [
  {
    id: "smart-scheduling",
    icon: <Calendar className="h-5 w-5" />,
    title: "AI-Powered Scheduling",
    description: "Automated staff scheduling based on demand forecasting, labor laws, and employee preferences with conflict resolution.",
    category: "scheduling",
    metrics: "32% labor cost reduction",
    benefits: [
      "Predictive scheduling based on sales forecasts",
      "Automatic compliance with labor laws",
      "Real-time schedule adjustments",
      "Employee self-service portal"
    ]
  },
  {
    id: "skills-tracking",
    icon: <Award className="h-5 w-5" />,
    title: "Skills & Training Matrix",
    description: "Comprehensive competency tracking with personalized training paths and certification management for all positions.",
    category: "training",
    metrics: "50% faster onboarding",
    benefits: [
      "Digital competency assessments",
      "Personalized training programs",
      "Certification tracking",
      "Cross-training optimization"
    ]
  },
  {
    id: "performance-analytics",
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Performance Analytics",
    description: "Real-time productivity metrics, goal tracking, and coaching insights with automated recognition programs.",
    category: "performance",
    metrics: "25% productivity increase",
    benefits: [
      "Individual performance dashboards",
      "Goal setting and tracking",
      "Automated coaching suggestions",
      "Recognition and rewards system"
    ]
  },
  {
    id: "task-management",
    icon: <ChefHat className="h-5 w-5" />,
    title: "Digital Task Management",
    description: "Real-time task assignment and tracking with priority management and completion verification for kitchen operations.",
    category: "performance",
    metrics: "40% task completion improvement",
    benefits: [
      "Real-time task assignments",
      "Priority-based workflows",
      "Photo verification system",
      "Manager approval workflows"
    ]
  },
];

interface FeatureCardsProps {
  className?: string;
  showMetrics?: boolean;
  variant?: "default" | "compact" | "detailed";
  filterCategory?: string;
}

export function FeatureCards({ 
  className = "", 
  showMetrics = true,
  variant = "default",
  filterCategory
}: FeatureCardsProps) {
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const filteredFeatures = filterCategory 
    ? staffFeatures.filter(feature => feature.category === filterCategory)
    : staffFeatures;

  const handleFeatureClick = (feature: StaffManagementFeature) => {
    trackFeatureEngagement("staff_feature_click", {
      feature_id: feature.id,
      category: feature.category,
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "scheduling": return "bg-primary/10 text-primary border-primary/20";
      case "training": return "bg-secondary/10 text-secondary border-secondary/20";
      case "performance": return "bg-purple-100 text-purple-600 border-purple-200";
      case "compliance": return "bg-primary/10 text-primary border-primary/20";
      default: return "bg-muted text-foreground border-border";
    }
  };

  return (
    <div className={className}>
      <div className="mb-12 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Staff Management Excellence
        </h2>
        <p className="enterprise-body max-w-2xl mx-auto text-muted-foreground">
          Comprehensive workforce management tools designed for restaurant operations with focus on efficiency and compliance
        </p>
      </div>

      <div className="flex flex-wrap items-start justify-between">
        {filteredFeatures.map((feature, index, arr) => (
          <div
            key={feature.id}
            className="flex shrink grow basis-full flex-col items-start justify-between p-6 md:basis-1/2 lg:basis-1/4 group cursor-pointer clerk-glass-card hover-scale-103 transition-all duration-300"
            onClick={() => handleFeatureClick(feature)}
          >
            <div className="w-full">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <div className={`clerk-inspired-badge ${getCategoryColor(feature.category)} capitalize`}>
                    {feature.category}
                  </div>
                </div>
              </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {showMetrics && feature.metrics && (
                  <div className="mb-4 px-3 py-2 bg-muted/50 rounded-md">
                    <p className="text-sm font-medium text-primary">{feature.metrics}</p>
                  </div>
                )}

                {variant === "detailed" && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Key Benefits:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-purple-600 rounded-full" />
                          </div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {arr.length - 1 === index && (
                <button className="mt-5 w-auto cursor-pointer border-b border-primary text-sm text-primary hover:border-primary/60 transition-colors">
                  See all features
                </button>
              )}
            </div>
        ))}
      </div>

      {/* Bottom Stats Bar */}
      <div className="mt-16 border-t pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Restaurants Using</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">32%</div>
              <div className="text-sm text-muted-foreground">Average Labor Cost Reduction</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
    </div>
  );
};

export type { StaffManagementFeature, FeatureCardsProps };