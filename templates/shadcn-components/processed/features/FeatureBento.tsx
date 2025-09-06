"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Thermometer,
  Users,
  ShieldCheck,
  Clock,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ChefHat,
  Settings,
} from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface DashboardWidget {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: "analytics" | "compliance" | "operations" | "financial";
  color: string;
  bgColor: string;
  size: "small" | "medium" | "large";
  liveData: {
    primary: string;
    secondary?: string;
    trend?: "up" | "down" | "stable";
    status?: "good" | "warning" | "critical";
  };
  features: string[];
}

const dashboardWidgets: DashboardWidget[] = [
  {
    id: "live-analytics",
    title: "Real-time Analytics",
    description: "Live performance metrics with predictive insights for optimal decision-making.",
    icon: BarChart3,
    category: "analytics",
    color: "text-blue-600",
    bgColor: "bg-blue-500/10",
    size: "large",
    liveData: {
      primary: "94.2%",
      secondary: "Efficiency Score",
      trend: "up",
      status: "good"
    },
    features: [
      "Real-time KPI tracking",
      "Predictive demand forecasting",
      "Performance benchmarking",
      "Custom alerts and notifications"
    ]
  },
  {
    id: "temperature-monitoring",
    title: "HACCP Temperature Control",
    description: "Automated temperature monitoring across all critical control points.",
    icon: Thermometer,
    category: "compliance",
    color: "text-red-600",
    bgColor: "bg-red-500/10",
    size: "medium",
    liveData: {
      primary: "37°F",
      secondary: "Walk-in Cooler",
      status: "good"
    },
    features: [
      "24/7 automated logging",
      "Instant deviation alerts",
      "Digital audit trails",
      "Health department ready reports"
    ]
  },
  {
    id: "staff-performance",
    title: "Team Performance",
    description: "Comprehensive workforce analytics and productivity insights.",
    icon: Users,
    category: "operations",
    color: "text-green-600",
    bgColor: "bg-green-500/10",
    size: "medium",
    liveData: {
      primary: "18",
      secondary: "Active Staff",
      status: "good"
    },
    features: [
      "Individual performance tracking",
      "Skills gap analysis",
      "Training completion rates",
      "Engagement scoring"
    ]
  },
  {
    id: "compliance-score",
    title: "Compliance Health",
    description: "Overall compliance status with automated risk assessment.",
    icon: ShieldCheck,
    category: "compliance",
    color: "text-purple-600",
    bgColor: "bg-purple-500/10",
    size: "small",
    liveData: {
      primary: "99.8%",
      secondary: "Compliance",
      status: "good"
    },
    features: [
      "Risk assessment scoring",
      "Violation prevention",
      "Corrective action tracking"
    ]
  },
  {
    id: "financial-overview",
    title: "Financial Performance",
    description: "Real-time P&L tracking with cost optimization insights.",
    icon: DollarSign,
    category: "financial",
    color: "text-emerald-600",
    bgColor: "bg-emerald-500/10",
    size: "medium",
    liveData: {
      primary: "$12,450",
      secondary: "Today's Revenue",
      trend: "up",
      status: "good"
    },
    features: [
      "Real-time P&L dashboard",
      "Food cost tracking",
      "Labor cost optimization",
      "Profit margin analysis"
    ]
  },
  {
    id: "kitchen-efficiency",
    title: "Kitchen Operations",
    description: "Live kitchen performance with task completion tracking.",
    icon: ChefHat,
    category: "operations",
    color: "text-orange-600",
    bgColor: "bg-orange-500/10",
    size: "small",
    liveData: {
      primary: "8.3min",
      secondary: "Avg Service Time",
      trend: "down",
      status: "good"
    },
    features: [
      "Task management",
      "Equipment monitoring",
      "Prep schedule optimization"
    ]
  },
];

interface FeatureBentoProps {
  className?: string;
  showLiveData?: boolean;
  variant?: "dashboard" | "grid" | "compact";
}

export function FeatureBento({
  className = "",
  showLiveData = true,
  variant = "dashboard"
}: FeatureBentoProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const handleWidgetHover = (widget: DashboardWidget, index: number) => {
    setHoveredIndex(index);
    trackFeatureEngagement("dashboard_widget_hover", {
      widget_id: widget.id,
      category: widget.category,
    });
  };

  const handleExploreClick = () => {
    trackFeatureEngagement("cta_click", {
      source: "dashboard_bento",
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "analytics": return "bg-blue-100 text-blue-800 border-blue-200";
      case "compliance": return "bg-red-100 text-red-800 border-red-200";
      case "operations": return "bg-green-100 text-green-800 border-green-200";
      case "financial": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case "good": return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "warning": return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      case "critical": return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default: return null;
    }
  };

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "down": return <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />;
      default: return null;
    }
  };

  const getGridClass = (size: string) => {
    switch (size) {
      case "large": return "md:col-span-2 md:row-span-2";
      case "medium": return "md:col-span-1 md:row-span-1";
      case "small": return "md:col-span-1 md:row-span-1";
      default: return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section className={`overflow-hidden py-24 lg:py-32 ${className}`}>
      <div className="container">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            Operations Dashboard
          </Badge>
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-6xl">
            Complete Operations Control Center
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Unified dashboard providing real-time insights into every aspect of your restaurant operations. 
            Monitor, analyze, and optimize from a single command center.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
            {dashboardWidgets.map((widget, idx) => (
              <div
                key={widget.id}
                className={cn(
                  "group relative block h-full w-full p-2",
                  getGridClass(widget.size)
                )}
                onMouseEnter={() => handleWidgetHover(widget, idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {hoveredIndex === idx && (
                    <motion.span
                      className={cn(
                        "absolute inset-0 block h-full w-full rounded-2xl",
                        widget.bgColor
                      )}
                      layoutId="hoverBackground"
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>

                <DashboardCard
                  widget={widget}
                  showLiveData={showLiveData}
                  getStatusIcon={getStatusIcon}
                  getTrendIcon={getTrendIcon}
                  getCategoryColor={getCategoryColor}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">Real-time</div>
            <div className="text-sm text-muted-foreground">Data Updates</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Data Points</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Monitoring</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Customization</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Experience the Full Dashboard</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              See how all your restaurant operations come together in one comprehensive, 
              real-time dashboard. Customizable, actionable, and designed for results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={handleExploreClick}>
                Explore Live Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
                <Settings className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div>✓ Fully customizable widgets</div>
              <div>✓ Real-time data integration</div>
              <div>✓ Mobile-optimized interface</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DashboardCard: React.FC<{
  widget: DashboardWidget;
  showLiveData: boolean;
  getStatusIcon: (status?: string) => React.ReactNode;
  getTrendIcon: (trend?: string) => React.ReactNode;
  getCategoryColor: (category: string) => string;
}> = ({ widget, showLiveData, getStatusIcon, getTrendIcon, getCategoryColor }) => {
  const Icon = widget.icon;

  return (
    <div className="bg-card border relative z-20 flex h-full flex-col rounded-2xl p-6 transition-all duration-200 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-3 rounded-xl", widget.bgColor)}>
          <Icon className={cn("h-6 w-6", widget.color)} />
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge 
            variant="outline" 
            className={`text-xs ${getCategoryColor(widget.category)} capitalize`}
          >
            {widget.category}
          </Badge>
          {showLiveData && getStatusIcon(widget.liveData.status)}
        </div>
      </div>

      {/* Title and Description */}
      <div className="flex-1 mb-4">
        <h3 className="text-lg font-semibold mb-2">{widget.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {widget.description}
        </p>
      </div>

      {/* Live Data */}
      {showLiveData && (
        <div className="mb-4 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">
                {widget.liveData.primary}
              </div>
              {widget.liveData.secondary && (
                <div className="text-xs text-muted-foreground">
                  {widget.liveData.secondary}
                </div>
              )}
            </div>
            <div className="flex items-center gap-1">
              {getTrendIcon(widget.liveData.trend)}
            </div>
          </div>
        </div>
      )}

      {/* Features Preview */}
      <div className="mb-4">
        <div className="text-xs text-muted-foreground mb-2">Key Features:</div>
        <div className="space-y-1">
          {widget.features.slice(0, widget.size === "large" ? 4 : 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-1 h-1 bg-primary rounded-full" />
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <Button
        variant="ghost"
        size="sm"
        className="mt-auto w-full justify-start group/btn"
      >
        View Details
        <ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
      </Button>
    </div>
  );
};

export type { DashboardWidget, FeatureBentoProps };