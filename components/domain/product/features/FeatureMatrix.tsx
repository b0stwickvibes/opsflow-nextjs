"use client";

import {
  ArrowUpRight,
  Shield,
  BarChart3,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import { cn } from "@/lib/utils";

interface RestaurantMatrixFeature {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  category: "core" | "advanced" | "enterprise";
  benefits: string[];
  metrics: {
    primary: string;
    secondary: string;
  };
  href: string;
}

const restaurantFeatures: RestaurantMatrixFeature[] = [
  {
    id: "haccp-automation",
    icon: Shield,
    title: "Complete HACCP Automation - Building Digital Food Safety Excellence",
    description: "Comprehensive food safety compliance with automated monitoring and documentation",
    category: "core",
    benefits: [
      "Automated temperature logging across all equipment",
      "Real-time critical control point monitoring", 
      "Digital audit trails for health inspections",
      "Instant alerts for temperature deviations"
    ],
    metrics: {
      primary: "99.8% Compliance Rate",
      secondary: "Zero violations in 95% of clients"
    },
    href: "/features/haccp-compliance",
  },
  {
    id: "predictive-analytics",
    icon: BarChart3,
    title: "AI-Powered Analytics - Predictive Insights for Restaurant Success",
    description: "Advanced machine learning algorithms driving operational decision-making",
    category: "advanced",
    benefits: [
      "Demand forecasting with 95% accuracy",
      "Predictive maintenance for equipment",
      "Cost optimization recommendations",
      "Performance benchmarking against industry standards"
    ],
    metrics: {
      primary: "32% Cost Reduction",
      secondary: "ROI achieved in 60 days"
    },
    href: "/features/predictive-analytics",
  },
  {
    id: "workforce-optimization",
    icon: Users,
    title: "Smart Workforce Management - Optimizing Team Performance & Scheduling",
    description: "Intelligent staff scheduling and performance management for maximum efficiency",
    category: "advanced",
    benefits: [
      "AI-powered scheduling optimization",
      "Skills-based task assignment",
      "Performance tracking and coaching insights",
      "Automated compliance with labor laws"
    ],
    metrics: {
      primary: "40% Productivity Increase",
      secondary: "50% reduction in scheduling conflicts"
    },
    href: "/features/workforce-management",
  },
  {
    id: "multi-location-control",
    icon: TrendingUp,
    title: "Enterprise Multi-location Control - Scaling Operations Across Locations",
    description: "Centralized management platform for restaurant chains and franchise operations",
    category: "enterprise",
    benefits: [
      "Unified dashboard for all locations",
      "Standardized processes and procedures",
      "Corporate-level reporting and analytics",
      "Franchise management tools and templates"
    ],
    metrics: {
      primary: "Unlimited Locations",
      secondary: "25% faster new location setup"
    },
    href: "/features/multi-location",
  },
];

interface FeatureMatrixProps {
  className?: string;
  showMetrics?: boolean;
  variant?: "grid" | "list" | "detailed";
}

export function FeatureMatrix({
  className = "",
  showMetrics = true,
  variant = "grid"
}: FeatureMatrixProps) {
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const handleFeatureClick = (feature: RestaurantMatrixFeature) => {
    trackFeatureEngagement("feature_matrix_click", {
      feature_id: feature.id,
      category: feature.category,
    });
  };

  const getCategoryColor = (_category: string) => {
    // Standardize badge color to brand tokens for consistency
    return "bg-primary/10 text-primary border-primary/20";
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "core": return <Shield className="h-4 w-4" />;
      case "advanced": return <BarChart3 className="h-4 w-4" />;
      case "enterprise": return <TrendingUp className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />;
    }
  };

  return (
    <section className={cn("section-marketing overflow-hidden", className)}>
      <div className="container">
        <div className="relative mb-16">
          <header className="max-w-4xl">
            <div className="mb-6">
              <Badge variant="outline" className="mb-4">
                Restaurant Operations Platform
              </Badge>
              <h1 className="heading-brand-gradient mb-8 text-4xl font-bold tracking-tighter lg:text-7xl">
                Complete Restaurant Operations Matrix
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed tracking-tight md:text-xl max-w-3xl">
                Comprehensive solutions designed specifically for restaurant operations. 
                From food safety compliance to workforce optimization, we cover every aspect of your business.
              </p>
            </div>
          </header>
          
          {/* Decorative Element */}
          <div className="absolute -top-15 -right-10 hidden transition-all ease-in-out group-hover:-rotate-0 lg:block">
            <div className="size-150 md:size-100 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center">
              <div className="text-6xl font-bold text-primary/20">OPS</div>
            </div>
          </div>
        </div>

        {/* Feature Categories Overview */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["core", "advanced", "enterprise"].map((category) => {
            const categoryFeatures = restaurantFeatures.filter(f => f.category === category);
            return (
              <div key={category} className="p-6 bg-muted/30 rounded-lg border">
                <div className="flex items-center gap-2 mb-3">
                  {getCategoryIcon(category)}
                  <Badge 
                    variant="outline" 
                    className={`${getCategoryColor(category)} capitalize text-sm`}
                  >
                    {category}
                  </Badge>
                </div>
                <h3 className="font-semibold capitalize mb-2">{category} Features</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {categoryFeatures.length} essential {category} solutions
                </p>
                <div className="text-xs text-muted-foreground">
                  {categoryFeatures.map(f => f.title.split(' -')[0]).join(', ')}
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Matrix Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {restaurantFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => handleFeatureClick(feature)}
                className="block transition-all duration-500 ease-in-out text-left w-full"
              >
                <Card className="tile-hover border-border bg-background group relative border p-8 shadow-none transition-all duration-500 ease-in-out h-full">
                  <CardContent className="flex h-full flex-col justify-between p-0">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="size-15 border-border bg-muted group-hover:bg-background flex items-center justify-center border transition-colors duration-500 ease-in-out rounded-lg">
                          <Icon
                            size={24}
                            className="transition-all duration-500 ease-in-out text-primary"
                          />
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`${getCategoryColor(feature.category)} capitalize text-xs`}
                        >
                          {feature.category}
                        </Badge>
                      </div>

                      <h3 className="text-foreground pr-8 text-xl font-semibold leading-tight tracking-tight transition-all duration-500 ease-in-out md:text-2xl lg:text-2xl mb-3">
                        {feature.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {feature.description}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-medium text-sm mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {feature.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                        {feature.benefits.length > 3 && (
                          <li className="text-xs text-primary font-medium">
                            +{feature.benefits.length - 3} more benefits
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Metrics */}
                    {showMetrics && (
                      <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                        <div className="text-lg font-bold text-primary mb-1">
                          {feature.metrics.primary}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {feature.metrics.secondary}
                        </div>
                      </div>
                    )}

                    {/* Action */}
                    <div className="mt-auto">
                      <div className="border-border bg-muted absolute bottom-6 right-6 flex size-12 items-center justify-center border opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 rounded-lg">
                        <ArrowUpRight className="text-foreground h-[20px] w-[20px] transition-all duration-500 ease-in-out group-hover:rotate-45" />
                      </div>
                      
                      <div className="text-sm text-primary font-medium group-hover:underline">
                        Learn more about {feature.title.split(' -')[0]}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </button>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Restaurants Using Platform</div>
          </div>
          <div className="p-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-sm text-muted-foreground">Average Compliance Score</div>
          </div>
          <div className="p-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">32%</div>
            <div className="text-sm text-muted-foreground">Average Cost Reduction</div>
          </div>
          <div className="p-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Expert Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export type { RestaurantMatrixFeature, FeatureMatrixProps };