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
    ],
    demoImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80"
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
    ],
    demoImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80"
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
    ],
    demoImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80"
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
    ],
    demoImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80"
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
      case "operations": return "bg-primary-100 text-primary border-primary-200";
      case "financial": return "bg-secondary-100 text-secondary border-secondary-200";
      case "compliance": return "bg-primary-100 text-primary border-primary-200";
      case "performance": return "bg-secondary-100 text-secondary border-secondary-200";
      default: return "bg-muted text-foreground border-border";
    }
  };

  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-primary" />;
      case "down": return <TrendingUp className="h-4 w-4 text-secondary rotate-180" />;
      default: return <div className="h-4 w-4" />;
    }
  };

  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex mb-4">
            <div className="badge-subtle-gradient">
              Analytics Platform
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Restaurant Analytics Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive analytics suite providing actionable insights for operations, compliance, and profitability
          </p>
        </div>

        {/* Tab Navigation - Clerk Clean Style */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {analyticsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                "group flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300",
                activeTab === tab.id
                  ? "bg-primary-100 text-primary border-primary/30 shadow-sm"
                  : "bg-white border-slate-200/60 hover:border-primary/20 hover:bg-primary-50"
              )}
            >
              <div className={cn(
                "transition-colors duration-300",
                activeTab === tab.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
              )}>
                {tab.icon}
              </div>
              <span className={cn(
                "font-medium text-sm transition-colors duration-300",
                activeTab === tab.id ? "text-primary" : "text-foreground group-hover:text-primary"
              )}>
                {tab.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Tab Content - Compact Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Category & Title */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge 
                  variant="outline" 
                  className={`${getCategoryColor(activeTabData.category)} capitalize text-xs`}
                >
                  {activeTabData.category}
                </Badge>
                <Badge variant="outline" className="badge-subtle-gradient border-0 text-xs">
                  <Clock className="size-3 mr-1" />
                  Live
                </Badge>
              </div>

              <h3 className="text-3xl font-bold text-foreground">
                {activeTabData.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activeTabData.description}
              </p>
            </div>

            {/* Primary Metric - Hero */}
            <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-muted-foreground">
                  {activeTabData.metrics.primary.label}
                </h4>
                {getTrendIcon(activeTabData.metrics.primary.trend)}
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {activeTabData.metrics.primary.value}
              </div>
            </div>

            {/* Secondary Metrics - Compact Grid */}
            <div className="grid grid-cols-3 gap-3">
              {activeTabData.metrics.secondary.map((metric, index) => (
                <div key={index} className="clerk-glass-card p-3">
                  <div className="text-xs text-muted-foreground mb-1 font-medium">{metric.label}</div>
                  <div className="text-base font-bold text-foreground">{metric.value}</div>
                </div>
              ))}
            </div>

            {/* Features List - Inline */}
            <div className="pt-4 border-t border-border/50">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {activeTabData.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-xs text-muted-foreground leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Overlay Badge - Above Dashboard */}
            <div className="absolute -top-3 right-0 z-10">
              <div className="badge-subtle-gradient backdrop-blur-md">
                <BarChart3 className="size-3 mr-1" />
                Live Dashboard
              </div>
            </div>

            {/* Dashboard Preview - Custom Grid */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-base-900 to-base-950 border border-slate-800 shadow-2xl p-10">
              {/* Dashboard Grid */}
              <div className="grid grid-cols-2 gap-8">
                {/* Top Left - Line Chart */}
                <div className="bg-base-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-xs text-slate-400 mb-3">{activeTabData.metrics.secondary[0].label}</div>
                  <div className="h-24 relative flex flex-col justify-end">
                    <div className="text-2xl font-bold text-primary mb-2">{activeTabData.metrics.secondary[0].value}</div>
                    <svg className="w-full h-16" viewBox="0 0 200 60" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="oklch(0.714 0.1606 214.04)" />
                          <stop offset="100%" stopColor="oklch(0.4933 0.1864 297.02)" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M0,50 L50,35 L100,25 L150,30 L200,15" 
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Top Right - Donut Chart */}
                <div className="bg-base-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-xs text-slate-400 mb-3">{activeTabData.metrics.secondary[1].label}</div>
                  <div className="h-24 flex items-center justify-between">
                    <svg className="w-16 h-16" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="35" fill="none" stroke="oklch(0.714 0.1606 214.04)" strokeWidth="12" strokeDasharray="150 100" />
                      <circle cx="50" cy="50" r="35" fill="none" stroke="oklch(0.4933 0.1864 297.02)" strokeWidth="12" strokeDasharray="100 150" transform="rotate(216 50 50)" />
                    </svg>
                    <div className="text-2xl font-bold text-secondary">{activeTabData.metrics.secondary[1].value}</div>
                  </div>
                </div>

                {/* Bottom Left - Bar Chart */}
                <div className="bg-base-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-xs text-slate-400 mb-3">{activeTabData.metrics.secondary[2].label}</div>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {activeTabData.metrics.secondary[2].value}
                    </div>
                    <div className="flex items-end justify-between gap-2 h-12">
                      <div className="w-full bg-gradient-to-t from-primary-700 to-primary-500 rounded-t" style={{height: '60%'}}></div>
                      <div className="w-full bg-gradient-to-t from-secondary-700 to-secondary-500 rounded-t" style={{height: '80%'}}></div>
                      <div className="w-full bg-gradient-to-t from-primary-700 to-primary-500 rounded-t" style={{height: '45%'}}></div>
                      <div className="w-full bg-gradient-to-t from-secondary-700 to-secondary-500 rounded-t" style={{height: '95%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Right - Primary Metric */}
                <div className="bg-base-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-xs text-slate-400 mb-3">{activeTabData.metrics.primary.label}</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {activeTabData.metrics.primary.value}
                      </div>
                      {getTrendIcon(activeTabData.metrics.primary.trend)}
                    </div>
                    <div className="w-full h-2 bg-base-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            className="stripe-cta-primary px-8 py-4" 
            size="lg"
            onClick={handleGetStartedClick}
          >
            Start Analytics Trial
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            14-day free trial • No credit card required • Full analytics access
          </p>
        </div>
      </div>
    </section>
  );
};

export type { AnalyticsTab, FeatureTabsProps };
