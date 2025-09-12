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
} from "lucide-react";
import React, { useState } from "react";

import { SparklesCore } from "@/components/aceternity/sparkles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  showSparkles?: boolean;
  variant?: "showcase" | "grid" | "detailed";
}

export function FeatureShowcase2({
  className = "",
  showSparkles = false,
  variant = "showcase"
}: FeatureShowcase2Props) {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const handleMetricClick = (metric: ROIMetric, index: number) => {
    setSelectedMetric(selectedMetric === metric.title ? null : metric.title);
    trackFeatureEngagement("roi_metric_click", {
      metric_title: metric.title,
      category: metric.category,
      position: index,
    });
  };

  const handleGetROIAnalysisClick = () => {
    trackFeatureEngagement("cta_click", {
      source: "roi_metrics_showcase",
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "financial": return "bg-green-100 text-green-800 border-green-200";
      case "efficiency": return "bg-blue-100 text-blue-800 border-blue-200";
      case "compliance": return "bg-red-100 text-red-800 border-red-200";
      case "growth": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-muted text-foreground border-border";
    }
  };

  return (
    <section className={`section-marketing relative w-full overflow-hidden ${className}`}>
      <div className="container relative flex flex-col items-center justify-center">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            Proven ROI Metrics
          </Badge>
<h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Restaurant Operations ROI
          </h1>
          <p className="enterprise-body text-muted-foreground/70 mx-auto max-w-3xl ">
            Real results from 500+ restaurants using OpsFlow. See the measurable impact 
            on your bottom line, operations, and customer satisfaction.
          </p>
        </div>

        {/* Sparkles Animation */}
        {showSparkles && (
          <div className="relative mb-12 h-40 w-full max-w-2xl">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
            <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-sm" />
            <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            {/* Sparkles */}
<SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={120}
              className="h-full w-full"
              particleColor="hsl(var(--primary))"
            />

            {/* Radial Gradient */}
            <div className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(350px_130px_at_top,transparent_20%,white)]"></div>
          </div>
        )}

        {/* ROI Metrics Grid */}
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roiMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            const isSelected = selectedMetric === metric.title;
            
            return (
              <div
                key={index}
                className={cn(
                  "group cursor-pointer rounded-2xl border bg-card p-6 transition-all duration-200 tile-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isSelected ? "border-primary shadow-lg" : ""
                )}
                onClick={() => handleMetricClick(metric, index)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="enterprise-body  font-semibold group-hover:text-primary transition-colors">
                        {metric.title}
                      </h4>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getCategoryColor(metric.category)} capitalize`}
                      >
                        {metric.category}
                      </Badge>
                    </div>
                    
                    <div className="mb-3">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.period}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {metric.description}
                    </p>

                    {/* Expanded Details */}
                    {isSelected && (
                      <div className="space-y-4 pt-4 border-t">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-medium text-primary mb-1">Baseline</div>
                            <div className="text-muted-foreground">{metric.details.baseline}</div>
                          </div>
                          <div>
                            <div className="font-medium text-primary mb-1">Improvement</div>
                            <div className="text-muted-foreground">{metric.details.improvement}</div>
                          </div>
                          <div>
                            <div className="font-medium text-primary mb-1">Time to ROI</div>
                            <div className="text-muted-foreground">{metric.details.timeToROI}</div>
                          </div>
                          <div>
                            <div className="font-medium text-primary mb-1">Success Rate</div>
                            <div className="text-muted-foreground">{metric.details.confidenceLevel}</div>
                          </div>
                        </div>

                        <div>
                          <div className="font-medium text-primary mb-2">Key Benefits:</div>
                          <div className="space-y-2">
                            {metric.benefitPoints.map((benefit, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-4">
                      <div className="text-xs text-muted-foreground">
                        Click for details
                      </div>
                      <ArrowRight className={cn(
                        "h-4 w-4 transition-transform",
                        isSelected ? "rotate-90" : "group-hover:translate-x-1"
                      )} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Summary */}
        <div className="mt-16 w-full max-w-4xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Average Client Results</h3>
            <p className="text-muted-foreground">
              Based on analysis of 500+ restaurants using OpsFlow for 12+ months
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <Trophy className="h-8 w-8 mx-auto text-primary mb-2" />
              <div className="text-2xl font-bold text-primary">$2.4K</div>
              <div className="text-sm text-muted-foreground">Monthly Savings</div>
            </div>
            
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <Target className="h-8 w-8 mx-auto text-green-600 mb-2" />
              <div className="text-2xl font-bold text-green-600">60 Days</div>
              <div className="text-sm text-muted-foreground">Average Payback</div>
            </div>
            
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <Zap className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-600">94%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <BarChart3 className="h-8 w-8 mx-auto text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-purple-600">500+</div>
              <div className="text-sm text-muted-foreground">Success Stories</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl max-w-4xl">
            <h3 className="text-2xl font-bold mb-4">Calculate Your Restaurant's ROI</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get a personalized ROI analysis based on your restaurant's current operations. 
              See exactly how much you could save with OpsFlow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<Button size="lg" onClick={handleGetROIAnalysisClick}>
                Get Free ROI Analysis
                <DollarSign className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Client Case Studies
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                No obligation assessment
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Personalized recommendations
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Implementation roadmap
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export type { ROIMetric, FeatureShowcase2Props };