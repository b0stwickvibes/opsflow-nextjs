/**
 * Coffee CTA Component
 *
 * Final call-to-action section for coffee shop solution page.
 * Professional conversion-focused design.
 */

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface TrustIndicator {
  icon: LucideIcon;
  text: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface CoffeeCTAProps {
  urgencyBadge?: string;
  headline: string;
  subheadline: string;
  description: string;
  primaryCTA: {
    text: string;
    action: () => void;
  };
  secondaryCTA?: {
    text: string;
    action: () => void;
  };
  trustIndicators?: TrustIndicator[];
  testimonial?: Testimonial;
}

export function CoffeeCTA({
  urgencyBadge,
  headline,
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  trustIndicators,
  testimonial
}: CoffeeCTAProps) {
  return (
    <div className="w-full">
      <div className="enterprise-card relative overflow-hidden rounded-2xl border p-8 sm:p-12 lg:p-16">
        {/* Optional Urgency Badge */}
        {urgencyBadge && (
          <div className="mb-6 flex justify-center">
            <Badge
              variant="secondary"
              className="bg-orange-600/10 px-4 py-1.5 text-sm font-medium text-orange-600 dark:bg-orange-400/10 dark:text-orange-400"
            >
              {urgencyBadge}
            </Badge>
          </div>
        )}

        {/* Main Content */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
            {subheadline}
          </p>

          <h2 className="enterprise-headline mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {headline}
          </h2>

          <p className="dashboard-text-secondary mx-auto mb-10 max-w-2xl text-lg leading-relaxed">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={primaryCTA.action}
              size="lg"
              className="clerk-cta-primary min-w-[200px] px-8 py-6 text-base font-semibold"
            >
              {primaryCTA.text}
            </Button>
            {secondaryCTA && (
              <Button
                onClick={secondaryCTA.action}
                variant="outline"
                size="lg"
                className="clerk-cta-ghost min-w-[200px] px-8 py-6 text-base font-semibold"
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>

          {/* Trust Indicators */}
          {trustIndicators && trustIndicators.length > 0 && (
            <div className="mb-12 flex flex-wrap items-center justify-center gap-6">
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Icon className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    <span>{indicator.text}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Testimonial */}
          {testimonial && (
            <div className="mx-auto max-w-2xl rounded-xl border bg-muted/30 p-8">
              <blockquote className="dashboard-text-secondary mb-6 text-base italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex flex-col items-center">
                <div className="dashboard-text-primary font-semibold">
                  {testimonial.author}
                </div>
                <div className="dashboard-text-muted text-sm">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
