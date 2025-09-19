"use client";

import { ArrowRight, Check, TrendingUp, DollarSign, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Restaurant operations earning focus
const INDUSTRY_CONTENT = {
  restaurant: {
    badge: "Revenue Growth",
    title: "Increase restaurant profit",
    highlight: "without expanding locations",
    subtitle: "Optimize operations, reduce waste, and boost revenue with AI-powered restaurant management that delivers measurable results.",
    metrics: [
      { value: "23%", label: "Average profit increase", icon: TrendingUp },
      { value: "2.5hrs", label: "Time saved daily", icon: Users },
      { value: "$180K", label: "Annual savings", icon: DollarSign },
    ],
    features: [
      "Real-time cost tracking",
      "Automated inventory optimization", 
      "Staff productivity insights",
    ],
    ctaText: "Start Free Trial",
    ctaSecondary: "View Demo",
  },
  bar: {
    badge: "Profit Optimization",
    title: "Maximize bar revenue",
    highlight: "without adding locations",
    subtitle: "Smart inventory management and dynamic pricing strategies that increase profit margins while reducing operational complexity.",
    metrics: [
      { value: "31%", label: "Revenue increase", icon: BarChart3 },
      { value: "40%", label: "Waste reduction", icon: TrendingUp },
      { value: "$95K", label: "Annual profit boost", icon: DollarSign },
    ],
    features: [
      "Dynamic pricing optimization",
      "Pour cost analysis",
      "Peak hour management",
    ],
    ctaText: "Start Optimizing",
    ctaSecondary: "Bar Demo",
  },
  cafe: {
    badge: "Growth Strategy",
    title: "Scale café profits",
    highlight: "without new storefronts",
    subtitle: "Streamline operations and enhance customer experience with data-driven insights that drive sustainable growth.",
    metrics: [
      { value: "18%", label: "Profit improvement", icon: TrendingUp },
      { value: "35%", label: "Order efficiency", icon: Users },
      { value: "$65K", label: "Cost savings", icon: DollarSign },
    ],
    features: [
      "Quality consistency tracking",
      "Customer flow optimization",
      "Menu performance analytics",
    ],
    ctaText: "Start Growing",
    ctaSecondary: "Café Demo",
  },
};

export interface EarningHeroProps {
  industry?: 'restaurant' | 'bar' | 'cafe';
  variant?: 'default' | 'compact' | 'metrics';
  className?: string;
}

export function EarningHero({ 
  industry = 'restaurant', 
  variant = 'default',
  className
}: EarningHeroProps) {
  const content = INDUSTRY_CONTENT[industry];

  return (
    <section className={cn(
      "relative overflow-hidden",
      "bg-gradient-to-br from-background via-background to-muted/30",
      className
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-30" />
      
      <div className="container relative py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Badge with subtle glow - only 1 ambient element */}
            <div className="flex">
              <Badge className="clerk-inspired-badge bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                {content.badge}
              </Badge>
            </div>

            {/* Heading with text gradient */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                {content.title}{" "}
                <br className="hidden sm:block" />
                <span className="text-brand-gradient">
                  {content.highlight}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {content.subtitle}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="clerk-cta-primary cta-equal" size="lg">
                {content.ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="cta-equal" size="lg">
                {content.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Metrics Column */}
          <div className="space-y-6">
            {/* Metrics Cards */}
            <div className="grid gap-4">
              {content.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="enterprise-metric-card p-6 rounded-xl border bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-foreground">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                    <div className="enterprise-icon-primary">
                      <metric.icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Success Story */}
            <div className="rounded-xl border bg-card/30 backdrop-blur-sm p-6">
              <div className="space-y-3">
                <div className="text-sm font-medium text-muted-foreground">
                  Customer Success
                </div>
                <blockquote className="text-foreground">
                  "OpsFlow transformed our operations completely. We're seeing {content.metrics[0].value} more profit while our staff loves the streamlined workflows."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  — Sarah Chen, Restaurant Owner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}