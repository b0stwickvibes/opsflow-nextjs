"use client";

import { ArrowRight, DollarSign, Medal, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Restaurant startup focus content
const STARTUP_CONTENT = {
  restaurant: {
    badge: "New Launch",
    version: "v2.2 restaurant operations suite",
    title: "Fast setup for restaurant startups",
    subtitle: "We implement powerful restaurant operations systems to accelerate your startup's growth from day one.",
    primaryCta: "Start your free trial",
    secondaryCta: "Schedule a demo",
    features: [
      {
        icon: Zap,
        title: "2-4 week implementation",
        description: "Complete operations setup"
      },
      {
        icon: DollarSign,
        title: "Upfront, no hidden fees",
        description: "Transparent pricing model"
      },
      {
        icon: Medal,
        title: "Full refund if not satisfied",
        description: "Risk-free restaurant launch"
      }
    ]
  },
  bar: {
    badge: "Bar Launch",
    version: "v2.2 bar management platform",
    title: "Fast setup for bar startups",
    subtitle: "We implement comprehensive bar management systems to accelerate your startup's profitability from opening day.",
    primaryCta: "Start bar trial",
    secondaryCta: "Bar startup demo",
    features: [
      {
        icon: Zap,
        title: "1-3 week implementation",
        description: "Complete bar operations setup"
      },
      {
        icon: DollarSign,
        title: "Transparent pricing",
        description: "No surprises or hidden costs"
      },
      {
        icon: Medal,
        title: "Success guarantee",
        description: "Full refund if targets not met"
      }
    ]
  },
  cafe: {
    badge: "Café Launch",
    version: "v2.2 café operations suite",
    title: "Fast setup for café startups",
    subtitle: "We implement streamlined café operations to accelerate your startup's customer satisfaction and growth.",
    primaryCta: "Start café trial",
    secondaryCta: "Café demo",
    features: [
      {
        icon: Zap,
        title: "1-2 week implementation",
        description: "Rapid café operations launch"
      },
      {
        icon: DollarSign,
        title: "Fixed pricing",
        description: "Predictable startup costs"
      },
      {
        icon: Medal,
        title: "Quality guarantee",
        description: "Excellence or money back"
      }
    ]
  }
};

export interface MarketingStartupHeroProps {
  industry?: 'restaurant' | 'bar' | 'cafe';
  variant?: 'default' | 'compact' | 'bordered';
  showFeatures?: boolean;
  className?: string;
}

/**
 * Marketing hero for restaurant startup acceleration
 * Used in: Landing pages, startup-focused marketing
 * Domain: Marketing + Restaurant Operations
 * Design: SOP-compliant with single ambient element and enterprise styling
 */
export function MarketingStartupHero({ 
  industry = 'restaurant',
  variant = 'default',
  showFeatures = true,
  className
}: MarketingStartupHeroProps) {
  const content = STARTUP_CONTENT[industry];

  return (
    <section className={cn(
      "relative overflow-hidden",
      "bg-gradient-to-br from-background via-background to-muted/30",
      className
    )}>
      {/* Background Pattern - SOP compliant */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-30" />
      
      <div className="container relative py-20 lg:py-32">
        <div className={cn(
          "relative",
          variant === 'bordered' && "border-x border-t border-dashed px-4 py-20 md:px-16"
        )}>
          <div className="mx-auto max-w-3xl text-center space-y-8">
            {/* Version badge with proper SOP styling */}
            <div className="flex justify-center">
              <a
                href="#"
                className="flex items-center gap-2 rounded-full bg-muted/50 hover:bg-muted px-4 py-2 text-sm transition-colors border border-border/50"
              >
                <Badge variant="secondary" className="text-xs">New</Badge>
                {content.version}
                <ArrowRight className="inline size-4" />
              </a>
            </div>

            {/* Hero heading with proper SOP text classes */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                <span className="text-brand-gradient">{content.title}</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {content.subtitle}
              </p>
            </div>

            {/* CTA buttons using proper SOP classes */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="clerk-cta-primary cta-equal" size="lg">
                {content.primaryCta}
              </Button>
              <Button
                variant="outline"
                className="cta-equal"
                size="lg"
              >
                {content.secondaryCta}
              </Button>
            </div>
          </div>
        </div>

        {/* Features section with proper SOP styling */}
        {showFeatures && (
          <div className={cn(
            "relative grid md:grid-cols-3 gap-0",
            variant === 'bordered' ? "mt-0 border-x border-dashed" : "mt-16"
          )}>
            {content.features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "feature-tile p-6 lg:p-10",
                  "border-t border-dashed",
                  index === 1 && "md:border-x border-dashed",
                  "flex items-center gap-6 md:justify-center text-center md:text-left"
                )}
              >
                <div className="enterprise-icon-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">{feature.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
