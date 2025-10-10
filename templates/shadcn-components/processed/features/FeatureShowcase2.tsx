"use client";

import { 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Clock, 
  BarChart3, 
  Users,
  Zap,
  Trophy,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
} from "lucide-react";
import React, { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface ROIMetric {
  icon: React.ComponentType<any>;
  title: string;
  value: string;
  period: string;
  description: string;
  category: "financial" | "efficiency" | "compliance" | "growth";
  details: {
    baseline: string;
    improvement: string;
    timeToROI: string;
    confidenceLevel: string;
  };
  benefitPoints: string[];
}

const roiMetrics: ROIMetric[] = [
  {
    icon: DollarSign,
    title: "Cost Reduction",
    value: "32%",
    period: "Average monthly savings",
    description: "Comprehensive cost optimization through labor efficiency, waste reduction, and energy management.",
    category: "financial",
    details: {
      baseline: "$15,000/month operational costs",
      improvement: "$4,800/month average savings", 
      timeToROI: "45-60 days",
      confidenceLevel: "98% of clients achieve 25%+ savings"
    },
    benefitPoints: [
      "AI-powered scheduling reduces labor costs by 25%",
      "Predictive maintenance prevents 90% of equipment failures",
      "Energy optimization saves 15-20% on utilities",
      "Waste reduction through better inventory management"
    ]
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    value: "18%",
    period: "Average increase in profitability",
    description: "Improved operations lead to better customer satisfaction, faster service, and higher table turnover.",
    category: "growth",
    details: {
      baseline: "$45,000/month average revenue",
      improvement: "$8,100/month increased revenue",
      timeToROI: "60-90 days", 
      confidenceLevel: "85% of clients see 15%+ revenue growth"
    },
    benefitPoints: [
      "40% faster service times increase table turnover",
      "99% order accuracy improves customer satisfaction",
      "Better staff coordination enhances dining experience",
      "Optimized menu engineering boosts average check size"
    ]
  },
  {
    icon: Shield,
    title: "Compliance Excellence", 
    value: "99.8%",
    period: "Health inspection pass rate",
    description: "Automated HACCP compliance eliminates violations and reduces insurance costs significantly.",
    category: "compliance",
    details: {
      baseline: "85% typical industry pass rate",
      improvement: "99.8% OpsFlow client average",
      timeToROI: "Immediate",
      confidenceLevel: "100% of clients improve compliance scores"
    },
    benefitPoints: [
      "Zero health department violations in 95% of cases",
      "Automated documentation saves 20 hours/week",
      "Reduced insurance premiums by 15-25%",
      "Eliminated compliance-related fines and closures"
    ]
  },
  {
    icon: Clock,
    title: "Operational Efficiency",
    value: "94%",
    period: "Overall efficiency improvement",
    description: "Streamlined workflows, automated processes, and data-driven decisions optimize every operation.",
    category: "efficiency",
    details: {
      baseline: "68% typical restaurant efficiency",
      improvement: "94% with OpsFlow optimization",
      timeToROI: "30-45 days",
      confidenceLevel: "92% of clients exceed 85% efficiency"
    },
    benefitPoints: [
      "Real-time task management reduces prep time by 40%",
      "Predictive analytics optimize inventory by 30%",
      "Automated scheduling eliminates 90% of conflicts",
      "Equipment monitoring prevents 95% of breakdowns"
    ]
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    value: "500+",
    period: "Actionable metrics tracked daily",
    description: "Comprehensive analytics provide unprecedented visibility into restaurant performance.",
    category: "efficiency",
    details: {
      baseline: "Manual reporting takes 10+ hours/week",
      improvement: "Real-time dashboards save 95% of time",
      timeToROI: "Immediate",
      confidenceLevel: "100% of clients get actionable insights"
    },
    benefitPoints: [
      "Real-time performance tracking across all locations",
      "Predictive analytics for demand forecasting",
      "Automated reporting saves management time",
      "Benchmark against industry standards"
    ]
  },
  {
    icon: Users,
    title: "Staff Productivity",
    value: "45%",
    period: "Increase in team efficiency",
    description: "Better training, clearer processes, and performance tracking boost staff satisfaction and output.",
    category: "efficiency", 
    details: {
      baseline: "High turnover and training costs",
      improvement: "45% productivity increase",
      timeToROI: "60-90 days",
      confidenceLevel: "88% of clients see improved retention"
    },
    benefitPoints: [
      "Digital training reduces onboarding time by 50%",
      "Performance tracking improves individual output",
      "Better scheduling increases employee satisfaction", 
      "Skills tracking optimizes team deployment"
    ]
  }
];

interface FeatureShowcase2Props {
  className?: string;
  onGetStartedClick?: () => void;
  variant?: "showcase" | "grid" | "detailed";
}

export function FeatureShowcase2({
  className = "",
  onGetStartedClick,
  variant = "showcase"
}: FeatureShowcase2Props) {
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const handleGetROIAnalysisClick = () => {
    trackFeatureEngagement("cta_click", {
      source: "roi_metrics_showcase",
    });
    onGetStartedClick?.();
  };



  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <div className="container max-w-7xl">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <div className="inline-flex mb-6">
            <Badge variant="outline" className="clerk-inspired-badge">
              <Award className="w-3 h-3 mr-1.5" />
              Feature Showcase
            </Badge>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground lg:text-5xl xl:text-6xl">
            Powerful 
            <span className="block text-primary">Restaurant Features</span>
          </h2>
          <p className="text-lg text-muted-foreground mx-auto max-w-3xl leading-relaxed">
            Comprehensive feature set designed for modern restaurant operations. 
            Each capability is built to drive measurable improvements in efficiency, 
            compliance, and customer satisfaction.
          </p>
        </div>

        {/* ROI Metrics Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {roiMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              
              return (
                <Card
                  key={index}
                  className="group relative p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/50 hover:border-primary/30 bg-background/60 backdrop-blur-sm hover:scale-[1.02] flex flex-col"
                >
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {metric.category}
                    </Badge>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 group-hover:bg-primary/25 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-secondary-500" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {metric.title}
                  </h3>

                  {/* Primary Metric */}
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-primary tabular-nums mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {metric.description}
                  </p>

                  {/* Key Details - Always Visible */}
                  <div className="space-y-4 mt-auto">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-muted/20 rounded-lg border border-border/30">
                        <div className="text-xs font-medium text-primary mb-1">Timeline</div>
                        <div className="text-sm text-foreground font-semibold">{metric.details.timeToROI}</div>
                      </div>
                      <div className="p-3 bg-muted/20 rounded-lg border border-border/30">
                        <div className="text-xs font-medium text-primary mb-1">Success Rate</div>
                        <div className="text-sm text-foreground font-semibold">{metric.details.confidenceLevel.split(' ')[0]}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 min-h-[72px]">
                      {metric.benefitPoints.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs">
                          <div className="enterprise-icon-primary" style={{ width: '12px', height: '12px', marginTop: '2px' }}>
                            <CheckCircle className="w-3 h-3" />
                          </div>
                          <span className="text-muted-foreground leading-tight">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gradient underline accent appears on hover */}
                  <span className="absolute left-6 right-6 bottom-3 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" />
                </Card>
              );
            })}
          </div>
        </div>

        {/* Platform Statistics */}
        <Card className="mb-20 p-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-border/50">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-foreground">Trusted by Industry Leaders</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of restaurants already using these powerful features to 
              streamline operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/15 rounded-xl flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <Users className="h-6 w-6 text-secondary-500" />
              </div>
              <div className="text-3xl font-bold text-primary tabular-nums mb-1">500+</div>
              <div className="text-sm text-muted-foreground font-medium">Active Restaurants</div>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/15 rounded-xl flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <Zap className="h-6 w-6 text-secondary-500" />
              </div>
              <div className="text-3xl font-bold text-primary tabular-nums mb-1">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">System Uptime</div>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/15 rounded-xl flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <Award className="h-6 w-6 text-secondary-500" />
              </div>
              <div className="text-3xl font-bold text-primary tabular-nums mb-1">98%</div>
              <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/15 rounded-xl flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <BarChart3 className="h-6 w-6 text-secondary-500" />
              </div>
              <div className="text-3xl font-bold text-primary tabular-nums mb-1">50+</div>
              <div className="text-sm text-muted-foreground font-medium">Feature Modules</div>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-border/50 max-w-4xl mx-auto">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience these powerful features firsthand. Start your journey toward 
                more efficient, compliant, and profitable restaurant operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" onClick={handleGetROIAnalysisClick} className="stripe-cta-primary px-8 py-4 text-base">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="clerk-cta-secondary px-8 py-4 text-base">
                  Schedule Demo
                  <Target className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="enterprise-icon-primary" style={{ width: '16px', height: '16px' }}>
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  30-day free trial
                </div>
                <div className="flex items-center gap-2">
                  <div className="enterprise-icon-primary" style={{ width: '16px', height: '16px' }}>
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  Expert onboarding support
                </div>
                <div className="flex items-center gap-2">
                  <div className="enterprise-icon-primary" style={{ width: '16px', height: '16px' }}>
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  No setup fees
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export type { ROIMetric, FeatureShowcase2Props };