"use client";

import React from "react";
import { Check, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * Enhanced Feature Section - Stripe/Clerk Style
 * 
 * DESIGN STANDARDS:
 * - Stripe.com inspired clean layouts
 * - Clerk.com professional glassmorphism
 * - Uses primary/secondary tokens exclusively
 * - Subtle gradients and borders
 * - Professional spacing and typography
 */

interface FeatureItem {
  title: string;
  description: string;
}

interface StripeFeatureSectionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  features: FeatureItem[];
  visualElement?: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

export function StripeFeatureSection({
  badge,
  title,
  subtitle,
  description,
  features,
  visualElement,
  reverse = false,
  className
}: StripeFeatureSectionProps) {
  return (
    <div className={cn("space-y-16", className)}>
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        {badge && (
          <div className="inline-flex">
            <Badge 
              variant="secondary" 
              className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15"
            >
              {badge}
            </Badge>
          </div>
        )}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Content Grid */}
      <div className={cn(
        "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
        reverse && "lg:grid-flow-col-dense"
      )}>
        {/* Features List */}
        <div className={cn("space-y-6", reverse && "lg:col-start-2")}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              {/* Connector Line (except last item) */}
              {idx < features.length - 1 && (
                <div className="absolute left-[11px] top-12 bottom-0 w-px bg-gradient-to-b from-border via-border/50 to-transparent" />
              )}
              
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-1 pt-0.5">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Element */}
        <div className={cn("relative", reverse && "lg:col-start-1 lg:row-start-1")}>
          {visualElement || (
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-muted/30 to-muted/10 backdrop-blur-sm">
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5" />
              
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20" />
              
              {/* Mock interface elements */}
              <div className="absolute inset-0 p-8 flex flex-col gap-4">
                {/* Mock card 1 */}
                <div className="h-24 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 shadow-sm" />
                {/* Mock card 2 */}
                <div className="h-32 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 shadow-sm" />
                {/* Mock card 3 */}
                <div className="h-20 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 shadow-sm" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Compact Feature List - For smaller sections
 */
interface CompactFeature {
  icon?: React.ReactNode;
  label: string;
}

interface CompactFeatureListProps {
  features: CompactFeature[];
  columns?: 1 | 2 | 3;
  className?: string;
}

export function CompactFeatureList({ 
  features, 
  columns = 2,
  className 
}: CompactFeatureListProps) {
  return (
    <div className={cn(
      "grid gap-4",
      columns === 1 && "grid-cols-1",
      columns === 2 && "grid-cols-1 md:grid-cols-2",
      columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      className
    )}>
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 hover:border-border transition-all group"
        >
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            {feature.icon || <Check className="w-3 h-3 text-primary" />}
          </div>
          <span className="text-sm font-medium text-foreground leading-relaxed">
            {feature.label}
          </span>
        </div>
      ))}
    </div>
  );
}
