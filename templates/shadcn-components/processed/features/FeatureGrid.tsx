"use client";

import {
  ArrowRight,
  Thermometer,
  ShieldCheck,
  Users,
  ChefHat,
  Clock,
  AlertTriangle,
} from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface RestaurantFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  metrics?: string;
  complianceLevel?: "critical" | "high" | "standard";
  category: "food-safety" | "operations" | "staff" | "analytics";
}

interface FeatureBlockProps extends RestaurantFeature {}

const restaurantFeatures: RestaurantFeature[] = [
  {
    id: "haccp-monitoring",
    title: "HACCP Compliance",
    description: "Automated temperature monitoring with instant alerts for critical control points and full audit trails.",
    icon: <Thermometer className="size-10 text-primary/90 md:size-12" strokeWidth={1.5} />,
    metrics: "99.8% compliance rate",
    complianceLevel: "critical",
    category: "food-safety",
  },
  {
    id: "food-safety",
    title: "Food Safety Control",
    description: "Real-time monitoring of food storage, prep times, and expiration dates with automated alerts.",
    icon: <ShieldCheck className="size-10 text-primary/90 md:size-12" strokeWidth={1.5} />,
    metrics: "95% fewer violations",
    complianceLevel: "critical",
    category: "food-safety",
  },
  {
    id: "staff-coordination",
    title: "Staff Coordination",
    description: "Digital task assignments, real-time communication, and performance tracking for kitchen teams.",
    icon: <Users className="size-10 text-primary/90 md:size-12" strokeWidth={1.5} />,
    metrics: "40% faster prep times",
    complianceLevel: "high",
    category: "staff",
  },
  {
    id: "kitchen-operations",
    title: "Kitchen Operations",
    description: "Streamlined prep workflows, equipment maintenance schedules, and recipe standardization.",
    icon: <ChefHat className="size-10 text-primary/90 md:size-12" strokeWidth={1.5} />,
    metrics: "32% cost reduction",
    complianceLevel: "high",
    category: "operations",
  },
  {
    id: "real-time-alerts",
    title: "Critical Alerts",
    description: "Instant notifications for temperature deviations, equipment failures, and compliance issues.",
    icon: <AlertTriangle className="size-10 text-primary/90 md:size-12" strokeWidth={1.5} />,
    metrics: "24/7 monitoring",
    complianceLevel: "critical",
    category: "analytics",
  },
];

interface FeatureGridProps {
  className?: string;
  showMetrics?: boolean;
  variant?: "default" | "compact" | "detailed";
}

export function FeatureGrid({ 
  className = "", 
  showMetrics = true,
  variant = "default" 
}: FeatureGridProps) {
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const handleFeatureClick = (feature: RestaurantFeature) => {
    trackFeatureEngagement("feature_grid_click", {
      feature_id: feature.id,
      category: feature.category,
      compliance_level: feature.complianceLevel,
    });
  };

  const handleGetStartedClick = () => {
    trackFeatureEngagement("cta_click", {
      source: "feature_grid",
      cta_text: "Start Free Trial",
    });
  };

  return (
    <section className={`container py-32 lg:py-40 ${className}`}>
      <div className="mb-12 text-center">
        <h2 className="text-display-2xl mb-4 text-3xl font-bold tracking-tight lg:">
          Restaurant Operations Excellence
        </h2>
        <p className="enterprise-body  text-muted-foreground max-w-2xl mx-auto">
          Comprehensive HACCP compliance and operational control designed for modern restaurant chains
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3">
        {restaurantFeatures.map((feature) => (
          <FeatureBlock
            key={feature.id}
            {...feature}
            showMetrics={showMetrics}
            onClick={() => handleFeatureClick(feature)}
          />
        ))}
        
        {/* Hero CTA Block - spans 2x2 grid */}
        <div className="flex w-full grow flex-col gap-6 rounded-lg bg-brand-surface p-6 transition-all md:col-span-2 md:col-start-2 md:row-span-2 md:row-start-2 lg:p-10">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div className="flex-1">
              <h3 className="enterprise-body mb-2  font-bold tracking-tight lg:text-3xl">
                Complete Restaurant Control
              </h3>
              <p className="text-sm text-muted-foreground lg:text-base max-w-sm">
                Join 500+ restaurants reducing costs by 30% while maintaining 99%+ compliance
              </p>
            </div>
            <Button 
              className="w-full sm:w-auto" 
              size="lg"
              onClick={handleGetStartedClick}
            >
              Start Free Trial
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative flex-1 min-h-[200px] rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 p-4 overflow-hidden">
            {/* Decorative pattern removed to avoid JSX escaping issues */}
            <div className="relative">
              <div className="mb-4 h-4 w-3/4 bg-primary/20 rounded"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="h-2 w-full bg-primary/30 rounded"></div>
                  <div className="h-2 w-2/3 bg-primary/20 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-secondary/30 rounded"></div>
                  <div className="h-2 w-1/2 bg-secondary/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureBlock: React.FC<FeatureBlockProps & { 
  showMetrics?: boolean; 
  onClick?: () => void; 
}> = ({ 
  title, 
  description, 
  icon, 
  metrics, 
  complianceLevel, 
  category,
  showMetrics = true,
  onClick 
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const getComplianceColor = (level?: string) => {
    switch (level) {
      case "critical":
        return "border-destructive/20 hover:border-destructive/40";
      case "high":
        return "border-secondary/20 hover:border-secondary/40";
      default:
        return "border-primary/20 hover:border-primary/40";
    }
  };

  return (
    <button
      className={`flex w-full cursor-pointer flex-col rounded-lg bg-card border-2 transition-all duration-200 p-6 lg:p-8 text-left hover:shadow-lg hover:scale-[1.02] ${getComplianceColor(complianceLevel)}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            {icon}
          </div>
          {complianceLevel === "critical" && (
            <div className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
              Critical
            </div>
          )}
        </div>
      </div>

      <h3
        className={`mb-3 text-lg font-bold tracking-tight transition lg:text-xl ${
          isHover ? "text-primary" : ""
        }`}
      >
        {title}
      </h3>
      
      <p className="mb-4 text-sm text-muted-foreground/90 lg:text-base flex-1">
        {description}
      </p>

      {showMetrics && metrics && (
        <div className="mb-3 px-3 py-2 bg-muted/50 rounded-md">
          <p className="text-sm font-medium text-primary">{metrics}</p>
        </div>
      )}

      <div className="flex items-center justify-between mt-auto">
        <div className="text-xs text-muted-foreground capitalize">
          {category.replace("-", " ")}
        </div>
        <ArrowRight
          className={`size-5 text-primary/80 transition-all ${
            isHover ? "translate-x-1 transform" : ""
          }`}
          strokeWidth={1.5}
        />
      </div>
    </button>
  );
};

export type { RestaurantFeature, FeatureGridProps };