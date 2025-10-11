/**
 * Coffee Hero Component
 *
 * Industry-specific hero for coffee shop operations management.
 * Orange accent theming for coffee vertical.
 *
 * Follows Stripe/Clerk design standards:
 * - Professional typography hierarchy
 * - Subtle badge styling (no excessive glow)
 * - High-contrast accessible text
 * - Mobile-responsive layout
 */

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Coffee } from "lucide-react";

interface CoffeeHeroProps {
  industry?: string;
  headline: string;
  subheadline: string;
  description: string;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "outline";
  };
  primaryCTA: {
    text: string;
    action: () => void;
  };
  secondaryCTA?: {
    text: string;
    action: () => void;
  };
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export function CoffeeHero({
  industry = "Coffee Shops",
  headline,
  subheadline,
  description,
  badge,
  primaryCTA,
  secondaryCTA,
  stats = []
}: CoffeeHeroProps) {
  return (
    <div className="relative w-full">
      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Industry Badge - Subtle, professional styling */}
          {badge && (
            <div className="mb-6 flex justify-center">
              <Badge
                variant={badge.variant || "default"}
                className="clerk-inspired-badge px-4 py-1.5 text-sm font-medium"
              >
                <Coffee className="mr-1.5 h-4 w-4" />
                {badge.text}
              </Badge>
            </div>
          )}

          {/* Subheadline - Professional context */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
            {subheadline}
          </p>

          {/* Headline - Enterprise typography */}
          <h1 className="enterprise-headline mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {headline}
          </h1>

          {/* Description - High contrast, readable */}
          <p className="dashboard-text-secondary mx-auto mb-10 max-w-2xl text-lg leading-relaxed">
            {description}
          </p>

          {/* CTA Buttons - Clerk-inspired styling */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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

          {/* Stats - Subtle presentation */}
          {stats.length > 0 && (
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    <span className="metric-display-medium text-orange-600 dark:text-orange-400">
                      {stat.value}
                    </span>
                  </div>
                  <p className="dashboard-text-muted text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
