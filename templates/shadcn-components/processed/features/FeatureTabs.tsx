"use client";

import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  ChefHat,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface AnalyticsTab {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: "operations" | "financial" | "compliance" | "performance";
  metrics: {
    primary: { label: string; value: string; trend: "up" | "down" | "stable" };
    secondary: Array<{ label: string; value: string }>;
  };
  features: string[];
  demoImage?: string;
}

const analyticsData: AnalyticsTab[] = [
  {
    id: "operations-dashboard",
    title: "Operations Analytics",
    description: "Real-time operational metrics with predictive insights for kitchen efficiency, service times, and resource optimization.",
    icon: <BarChart3 className="size-5" />,
    category: "operations",
    metrics: {
      primary: { label: "Efficiency Score", value: "94.2%", trend: "up" },
      secondary: [
        { label: "Avg Service Time", value: "8.3 min" },
        { label: "Kitchen Utilization", value: "87%" },
        { label: "Order Accuracy", value: "99.1%" },
      ]
    },
    features: [
      "Real-time kitchen performance monitoring",
      "Service time optimization analytics",
      "Equipment utilization tracking",
      "Predictive maintenance alerts"
    ]
  },
  {
    id: "financial-insights",
    title: "Financial Performance",
    description: "Comprehensive financial analytics including food costs, labor expenses, and profit margin analysis with trend forecasting.",
    icon: <DollarSign className="size-5" />,
    category: "financial",
    metrics: {
      primary: { label: "Profit Margin", value: "18.7%", trend: "up" },
      secondary: [
        { label: "Food Cost %", value: "28.3%" },
        { label: "Labor Cost %", value: "31.2%" },
        { label: "Daily Revenue", value: "$12,450" },
      ]
    },
    features: [
      "Real-time P&L tracking",
      "Food cost variance analysis",
      "Labor cost optimization",
      "Revenue forecasting models"
    ]
  },
  {
    id: "compliance-monitoring",
    title: "Compliance & Safety",
    description: "HACCP compliance monitoring with automated audit trails, temperature logging, and health department readiness scoring.",
    icon: <Clock className="size-5" />,
    category: "compliance",
    metrics: {
      primary: { label: "Compliance Score", value: "99.8%", trend: "stable" },
      secondary: [
        { label: "Temperature Logs", value: "1,247 today" },
        { label: "Safety Checks", value: "98/98" },
        { label: "Audit Readiness", value: "100%" },
      ]
    },
    features: [
      "Automated HACCP logging",
      "Real-time temperature monitoring",
      "Digital safety checklists",
      "Audit trail generation"
    ]
  },
  {
    id: "staff-performance",
    title: "Team Performance",
    description: "Staff productivity analytics with training insights, performance benchmarking, and employee engagement metrics.",
    icon: <Users className="size-5" />,
    category: "performance",
    metrics: {
      primary: { label: "Team Efficiency", value: "91.5%", trend: "up" },
      secondary: [
        { label: "Training Progress", value: "87%" },
        { label: "Retention Rate", value: "94%" },
        { label: "Satisfaction Score", value: "4.6/5" },
      ]
    },
    features: [
      "Individual performance tracking",
      "Training completion analytics",
      "Employee satisfaction surveys",
      "Skills gap analysis"
    ]
  }
];

interface FeatureTabsProps {
  className?: string;
  defaultTab?: string;
  showMetrics?: boolean;
}

export function FeatureTabs({ 
  className = "", 
  defaultTab = "operations-dashboard",
  showMetrics = true 
}: FeatureTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const activeTabData = analyticsData.find(tab => tab.id === activeTab) || analyticsData[0];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    trackFeatureEngagement("analytics_tab_click", {
      tab_id: tabId,
      category: analyticsData.find(tab => tab.id === tabId)?.category,
    });
  };

  const handleGetStartedClick = () => {
    trackFeatureEngagement("cta_click", {
      source: "feature_tabs",
      active_tab: activeTab,
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "operations": return "bg-blue-100 text-blue-800 border-blue-200";
      case "financial": return "bg-green-100 text-green-800 border-green-200";
      case "compliance": return "bg-red-100 text-red-800 border-red-200";
      case "performance": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-muted text-foreground border-border";
    }
  };

  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "down": return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />;
      default: return <div className="h-4 w-4" />;
    }
  };

  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-display-2xl mb-4 text-3xl font-bold tracking-tight lg:">
            Restaurant Analytics Dashboard
          </h2>
          <p className="enterprise-body  text-muted-foreground max-w-3xl mx-auto">
            Comprehensive analytics suite providing actionable insights for restaurant operations, compliance, and profitability
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {analyticsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg border transition-all",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card hover:bg-muted border-border"
              )}
            >
              {tab.icon}
              <span className="font-medium">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Tab Numbers with masked effect */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="relative mb-8">
              <h1 className="text-8xl font-bold bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent opacity-20">
                {String(analyticsData.findIndex(tab => tab.id === activeTab) + 1).padStart(2, '0')}
              </h1>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge 
                  variant="outline" 
                  className={`${getCategoryColor(activeTabData.category)} capitalize`}
                >
                  {activeTabData.category}
                </Badge>
              </div>
              
              <h3 className="enterprise-body  font-semibold">{activeTabData.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {activeTabData.description}
              </p>
              
              <Badge variant="outline" className="w-fit gap-2 py-2">
                <Clock className="size-4" />
                Real-time Updates
              </Badge>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="md:col-span-2 lg:col-span-3 grid gap-4">
            {/* Primary Metric */}
            <div className="p-6 bg-card rounded-lg border">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-muted-foreground">
                  {activeTabData.metrics.primary.label}
                </h4>
                {getTrendIcon(activeTabData.metrics.primary.trend)}
              </div>
              <div className="text-3xl font-bold text-primary">
                {activeTabData.metrics.primary.value}
              </div>
            </div>

            {/* Secondary Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeTabData.metrics.secondary.map((metric, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                  <div className="enterprise-body  font-semibold">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="enterprise-body  font-semibold mb-4">Key Features</h4>
            <div className="space-y-3">
              {activeTabData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Demo Visualization */}
          <div className="p-6 bg-muted/30 rounded-lg">
            <div className="mb-4 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                {activeTabData.icon}
                <div className="text-sm text-muted-foreground">Live Dashboard Preview</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-primary/30 rounded w-3/4"></div>
              <div className="h-2 bg-primary/20 rounded w-1/2"></div>
              <div className="h-2 bg-primary/10 rounded w-2/3"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            className="px-8 py-3" 
            size="lg"
            onClick={handleGetStartedClick}
          >
            Start Analytics Trial
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            Get full analytics access for 14 days, no credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export type { AnalyticsTab, FeatureTabsProps };