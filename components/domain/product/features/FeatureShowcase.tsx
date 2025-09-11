"use client";

import { ArrowRight, ChefHat, Clock, Users, BarChart3, ShieldCheck, Utensils } from "lucide-react";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import { cn } from "@/lib/utils";

interface KitchenOperation {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: "prep" | "cooking" | "safety" | "management" | "analytics";
  roi: string;
  features: Array<{
    title: string;
    description: string;
    metric?: string;
  }>;
}

const kitchenOperations: KitchenOperation[] = [
  {
    id: "smart-prep",
    icon: "/icons/prep-station.svg",
    title: "Smart Prep Management",
    description: "AI-powered prep scheduling with real-time task assignments and progress tracking for optimal kitchen workflow efficiency.",
    category: "prep",
    roi: "40% faster prep times",
    features: [
      {
        title: "Intelligent Task Scheduling",
        description: "Automatically schedules prep tasks based on menu forecasts, staff availability, and kitchen capacity.",
        metric: "40% time savings"
      },
      {
        title: "Real-time Progress Tracking",
        description: "Live dashboard showing prep completion status with automatic notifications for delays or issues.",
        metric: "95% on-time completion"
      },
      {
        title: "Recipe Standardization",
        description: "Digital recipe cards with portion controls, allergen alerts, and step-by-step video guidance.",
        metric: "99% consistency rate"
      },
    ],
  },
  {
    id: "temperature-control",
    icon: "/icons/temperature-monitor.svg",
    title: "Temperature Control Systems",
    description: "Automated HACCP-compliant temperature monitoring with instant alerts and comprehensive audit trails for food safety.",
    category: "safety",
    roi: "99.8% compliance rate",
    features: [
      {
        title: "Critical Control Points",
        description: "Monitors all HACCP critical control points with automatic logging and deviation alerts.",
        metric: "Zero violations"
      },
      {
        title: "Wireless Sensor Network",
        description: "IoT temperature sensors throughout kitchen equipment with cloud data synchronization.",
        metric: "24/7 monitoring"
      },
      {
        title: "Compliance Reporting",
        description: "Automated health department reports with complete audit trails and corrective action logs.",
        metric: "100% audit ready"
      },
    ],
  },
  {
    id: "staff-coordination",
    icon: "/icons/team-management.svg",
    title: "Kitchen Team Coordination",
    description: "Digital communication hub connecting front-of-house and back-of-house teams with real-time order tracking and updates.",
    category: "management",
    roi: "32% labor cost reduction",
    features: [
      {
        title: "Order Priority Management",
        description: "Smart order queuing with real-time kitchen capacity analysis and delivery time optimization.",
        metric: "25% faster service"
      },
      {
        title: "Cross-Training Tracker",
        description: "Staff skill matrix with training schedules and competency assessments for optimal shift coverage.",
        metric: "50% flexibility increase"
      },
      {
        title: "Performance Analytics",
        description: "Individual and team productivity metrics with coaching insights and recognition programs.",
        metric: "20% productivity gain"
      },
    ],
  },
  {
    id: "inventory-control",
    icon: "/icons/inventory-tracking.svg",
    title: "Real-time Inventory Control",
    description: "Automated inventory tracking with predictive ordering, waste reduction analytics, and supplier integration.",
    category: "management",
    roi: "25% cost savings",
    features: [
      {
        title: "Auto-Replenishment",
        description: "AI-driven ordering system that predicts needs based on sales patterns and seasonal trends.",
        metric: "90% order accuracy"
      },
      {
        title: "Waste Reduction Analytics",
        description: "Track food waste patterns with actionable insights for portion control and menu optimization.",
        metric: "30% waste reduction"
      },
      {
        title: "Supplier Integration",
        description: "Direct integration with suppliers for automated ordering, delivery tracking, and invoice matching.",
        metric: "80% time savings"
      },
    ],
  },
  {
    id: "equipment-monitoring",
    icon: "/icons/equipment-health.svg",
    title: "Equipment Health Monitoring",
    description: "Predictive maintenance system that monitors equipment performance and schedules service before failures occur.",
    category: "management",
    roi: "60% downtime reduction",
    features: [
      {
        title: "Predictive Maintenance",
        description: "IoT sensors monitor equipment health with ML algorithms predicting maintenance needs.",
        metric: "85% failure prevention"
      },
      {
        title: "Energy Optimization",
        description: "Track energy consumption patterns and optimize equipment schedules for cost reduction.",
        metric: "20% energy savings"
      },
      {
        title: "Service Coordination",
        description: "Automated service scheduling with technician dispatch and repair history tracking.",
        metric: "50% faster repairs"
      },
    ],
  },
  {
    id: "analytics-dashboard",
    icon: "/icons/kitchen-analytics.svg",
    title: "Kitchen Performance Analytics",
    description: "Comprehensive dashboard providing real-time insights into kitchen efficiency, food costs, and operational metrics.",
    category: "analytics",
    roi: "15% profit increase",
    features: [
      {
        title: "Real-time KPI Tracking",
        description: "Monitor food costs, labor efficiency, and service times with customizable dashboards.",
        metric: "Live insights"
      },
      {
        title: "Predictive Analytics",
        description: "Forecast demand patterns, staff needs, and inventory requirements with machine learning.",
        metric: "95% accuracy"
      },
      {
        title: "Benchmark Comparisons",
        description: "Compare performance against industry standards and your best-performing locations.",
        metric: "Competitive edge"
      },
    ],
  },
];

interface FeatureShowcaseProps {
  className?: string;
  showMetrics?: boolean;
  variant?: "carousel" | "grid" | "compact";
}

export function FeatureShowcase({ 
  className = "", 
  showMetrics = true,
  variant = "carousel" 
}: FeatureShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const handleOperationClick = (operation: KitchenOperation, index: number) => {
    setActiveIndex(index);
    trackFeatureEngagement("kitchen_operation_view", {
      operation_id: operation.id,
      category: operation.category,
      position: index,
    });
  };

  const handleLearnMoreClick = (operation: KitchenOperation) => {
    trackFeatureEngagement("learn_more_click", {
      operation_id: operation.id,
      category: operation.category,
      source: "feature_showcase",
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "prep": return <ChefHat className="h-4 w-4" />;
      case "safety": return <ShieldCheck className="h-4 w-4" />;
      case "management": return <Users className="h-4 w-4" />;
      case "analytics": return <BarChart3 className="h-4 w-4" />;
      default: return <Utensils className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "prep": return "bg-blue-100 text-blue-800 border-blue-200";
      case "safety": return "bg-red-100 text-red-800 border-red-200";
      case "management": return "bg-green-100 text-green-800 border-green-200";
      case "analytics": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className={cn("section-marketing", className)}>
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="heading-brand-gradient mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
            Kitchen Operations Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for modern restaurant kitchens - from prep to plate with full HACCP compliance
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="mb-8 flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {["prep", "safety", "management", "analytics"].map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className={`${getCategoryColor(category)} capitalize`}
                >
                  {getCategoryIcon(category)}
                  <span className="ml-1">{category}</span>
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <CarouselPrevious
                onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                className="static"
              />
              <span className="text-sm text-muted-foreground">
                {activeIndex + 1} of {kitchenOperations.length}
              </span>
              <CarouselNext
                onClick={() => setActiveIndex(Math.min(kitchenOperations.length - 1, activeIndex + 1))}
                disabled={activeIndex === kitchenOperations.length - 1}
                className="static"
              />
            </div>
          </div>

          <div className="relative">
            <CarouselContent
              className="ml-6 pt-[5px] pb-5 transition-all duration-300 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {kitchenOperations.map((operation, index) => (
                <CarouselItem
                  key={operation.id}
                  className="flex basis-full md:basis-1/2 xl:basis-1/3"
                >
                  <div className="flex h-full flex-col justify-between rounded-xl p-8 border bg-card tile-hover">
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          {getCategoryIcon(operation.category)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{operation.title}</h3>
                          <Badge 
                            variant="outline" 
                            className={`mt-1 text-xs ${getCategoryColor(operation.category)}`}
                          >
                            {operation.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {operation.description}
                    </p>

                    {showMetrics && (
                      <div className="mb-6 px-4 py-3 bg-primary/5 rounded-lg border border-primary/10">
                        <p className="text-sm font-semibold text-primary">{operation.roi}</p>
                      </div>
                    )}

                    <button
                      className="mb-6 flex items-center text-sm text-primary hover:text-primary/80 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      onClick={() => handleLearnMoreClick(operation)}
                    >
                      Learn More 
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="space-y-4">
                      {operation.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="border-l-2 border-primary/20 pl-4">
                          <h4 className="font-medium text-sm">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {feature.description}
                          </p>
                          {feature.metric && (
                            <p className="text-xs font-medium text-primary mt-1">
                              {feature.metric}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-0 left-0 w-[30px] bg-gradient-to-r from-background from-10% to-transparent"></div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent"></div>
          </div>
        </Carousel>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-muted/50 rounded-xl">
            <p className="text-sm text-muted-foreground max-w-md">
              Join 500+ restaurants using our kitchen operations platform to reduce costs and improve efficiency
            </p>
            <button className="px-6 py-3 rounded-lg transition-colors font-medium bg-brand-gradient text-primary-foreground cta-shimmer">
              Schedule Kitchen Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export type { KitchenOperation, FeatureShowcaseProps };