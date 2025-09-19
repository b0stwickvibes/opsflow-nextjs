"use client";

import { ArrowRight, TrendingUp, Clock, DollarSign, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CompetitorAnalysisProps {
  industry?: 'restaurants' | 'bars' | 'coffee' | 'hotels' | 'general';
  variant?: 'default' | 'compact' | 'detailed';
  energy?: 'subtle' | 'balanced' | 'bold';
  className?: string;
}

interface ComparisonMetric {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  legacy: {
    value: string;
    unit?: string;
    status: 'poor' | 'fair' | 'good';
    description: string;
  };
  modern: {
    value: string;
    unit?: string;
    status: 'excellent' | 'superior';
    description: string;
  };
}

/**
 * Clean Competitor Analysis - Restaurant Operations Focused
 * Design: Stripe.com-inspired minimal styling with clean cards and consistent spacing
 * No ambient elements, gradients, or busy visual effects - just clean, readable comparison
 */
export function CompetitorAnalysis({ 
  industry = 'restaurants',
  variant = 'default',
  energy = 'balanced',
  className 
}: CompetitorAnalysisProps) {
  
  const getIndustryData = (): ComparisonMetric[] => {
    const baseMetrics: ComparisonMetric[] = [
      {
        icon: Clock,
        title: "Implementation Timeline",
        legacy: {
          value: "18-24",
          unit: "weeks",
          status: 'poor',
          description: "Complex multi-vendor setup, extensive staff training, and system integration delays"
        },
        modern: {
          value: "2-3",
          unit: "weeks",
          status: 'excellent',
          description: "Cloud-native deployment with guided onboarding and automated integrations"
        }
      },
      {
        icon: DollarSign,
        title: "Total Cost of Ownership",
        legacy: {
          value: "$4,200",
          unit: "/month",
          status: 'poor',
          description: "Multiple software licenses, hardware maintenance, IT support, and compliance costs"
        },
        modern: {
          value: "$680",
          unit: "/month",
          status: 'excellent',
          description: "All-inclusive platform with built-in compliance, support, and automatic updates"
        }
      },
      {
        icon: TrendingUp,
        title: "Operational Efficiency Gain",
        legacy: {
          value: "8-12",
          unit: "%",
          status: 'fair',
          description: "Marginal improvements through disconnected point solutions"
        },
        modern: {
          value: "35-45",
          unit: "%",
          status: 'superior',
          description: "Unified workflow automation, predictive analytics, and real-time optimization"
        }
      },
      {
        icon: Shield,
        title: "Compliance Automation",
        legacy: {
          value: "Manual",
          status: 'poor',
          description: "Paper-based tracking, manual reporting, reactive compliance management"
        },
        modern: {
          value: "99.9%",
          unit: "automated",
          status: 'excellent',
          description: "Real-time HACCP monitoring, automated reporting, proactive compliance alerts"
        }
      },
      {
        icon: Zap,
        title: "System Reliability",
        legacy: {
          value: "92-95",
          unit: "%",
          status: 'fair',
          description: "Frequent downtimes during peak hours, manual failover processes"
        },
        modern: {
          value: "99.95",
          unit: "%",
          status: 'excellent',
          description: "Enterprise-grade infrastructure with automatic failover and 24/7 monitoring"
        }
      }
    ];

    // Industry-specific customizations
    if (industry === 'bars') {
      baseMetrics[0].legacy.description = "Complex bar management system setup with inventory integration challenges";
      baseMetrics[0].modern.description = "Rapid bar operations deployment with automated inventory tracking";
    } else if (industry === 'coffee') {
      baseMetrics[1].legacy.value = "$2,800";
      baseMetrics[1].modern.value = "$420";
      baseMetrics[0].legacy.description = "Coffee shop POS and inventory system configuration complexity";
    } else if (industry === 'hotels') {
      baseMetrics[1].legacy.value = "$6,500";
      baseMetrics[1].modern.value = "$980";
      baseMetrics[0].legacy.description = "Multi-venue dining system integration across hotel properties";
    }

    return baseMetrics;
  };

  const metrics = getIndustryData();

  return (
    <section className={cn(
      "py-20 lg:py-28 bg-background",
      energy === 'subtle' && "py-16",
      energy === 'balanced' && "py-20 lg:py-28", 
      energy === 'bold' && "py-24 lg:py-32",
      className
    )}>
      <div className="container relative overflow-visible">
        <div className="text-center space-y-8 mb-16 overflow-visible">
          {/* Simple badge - no ambient styling */}
          <Badge variant="outline" className="text-sm">
            Competitive Analysis
          </Badge>
          
          {/* Stripe-style heading with SOP-compliant brand gradient */}
          <div className="space-y-4 overflow-visible">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight leading-tight">
              Stop Losing Money to
            </h2>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-brand-gradient">
                Outdated Restaurant Systems
              </span>
            </h2>
          </div>
          
          {/* Compelling subheading */}
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            See exactly how much <span className="font-semibold text-foreground">time, money, and stress</span> you're wasting with legacy restaurant management systems—and what <span className="font-semibold text-primary">modern operators are doing instead.</span>
          </p>
        </div>

        {/* Comparison Table */}
        <div className="space-y-8">
          {/* Column Headers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div></div>
            <div className="text-center">
              <h3 className="enterprise-headline text-xl font-semibold text-muted-foreground mb-2">
                Traditional Setup
              </h3>
              <p className="text-sm text-muted-foreground">
                Multiple vendors, manual processes
              </p>
            </div>
            <div className="text-center">
              <h3 className="enterprise-headline text-xl font-semibold text-primary mb-2">
                OpsFlow Platform
              </h3>
              <p className="text-sm text-muted-foreground">
                Unified, automated, intelligent
              </p>
            </div>
          </div>

          {/* Metrics Rows */}
          <div className="space-y-4">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              
              return (
                <div 
                  key={index}
                  className="bg-background border border-border rounded-lg p-6 hover:border-border-hover transition-colors"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Metric Title */}
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg border border-border bg-muted/50 flex items-center justify-center text-muted-foreground">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {metric.title}
                        </h4>
                      </div>
                    </div>

                    {/* Legacy Solution */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-baseline space-x-1">
                          <span className="text-2xl font-bold text-foreground">
                            {metric.legacy.value}
                          </span>
                          {metric.legacy.unit && (
                            <span className="text-sm text-muted-foreground">
                              {metric.legacy.unit}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {metric.legacy.description}
                      </p>
                    </div>

                    {/* Modern Solution */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-baseline space-x-1">
                          <span className="text-2xl font-bold text-primary">
                            {metric.modern.value}
                          </span>
                          {metric.modern.unit && (
                            <span className="text-sm text-muted-foreground">
                              {metric.modern.unit}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {metric.modern.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Modernize Your Operations?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of restaurants already saving time, reducing costs, 
              and improving compliance with our integrated platform.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground">
            No credit card required • 14-day free trial • Setup in minutes
          </p>
        </div>
      </div>
    </section>
  );
}