/**
 * Coffee Feature Deck Component
 *
 * Core coffee shop management features presentation.
 * Professional feature cards with benefits and CTAs.
 */

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, ArrowRight } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  link?: {
    text: string;
    action: () => void;
  };
}

interface CTASection {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    action: () => void;
  };
  secondaryCTA?: {
    text: string;
    action: () => void;
  };
}

interface CoffeeFeatureDeckProps {
  title: string;
  description: string;
  badge?: string;
  features: Feature[];
  ctaSection?: CTASection;
}

export function CoffeeFeatureDeck({
  title,
  description,
  badge,
  features,
  ctaSection
}: CoffeeFeatureDeckProps) {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-16 text-center">
        {badge && (
          <Badge variant="outline" className="clerk-inspired-badge mb-4 px-3 py-1">
            {badge}
          </Badge>
        )}
        <h2 className="enterprise-headline mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="dashboard-text-secondary mx-auto max-w-2xl text-lg">
          {description}
        </p>
      </div>

      {/* Features Grid */}
      <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="enterprise-card group relative overflow-hidden rounded-xl border p-8 transition-all hover:border-orange-200 dark:hover:border-orange-800"
            >
              {/* Icon */}
              <div className="enterprise-icon-primary mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400">
                <Icon className="h-6 w-6" />
              </div>

              {/* Title */}
              <h3 className="dashboard-text-primary mb-3 text-xl font-semibold">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="dashboard-text-secondary mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="mb-6 space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li
                    key={benefitIndex}
                    className="dashboard-text-muted flex items-start gap-3 text-sm"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-600 dark:bg-orange-400" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Optional Link */}
              {feature.link && (
                <button
                  onClick={feature.link.action}
                  className="group/link flex items-center gap-2 text-sm font-medium text-orange-600 transition-colors hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                >
                  {feature.link.text}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      {ctaSection && (
        <div className="enterprise-card rounded-2xl border p-8 text-center sm:p-12">
          <h3 className="enterprise-headline mb-4 text-2xl font-bold sm:text-3xl">
            {ctaSection.title}
          </h3>
          <p className="dashboard-text-secondary mx-auto mb-8 max-w-2xl text-lg">
            {ctaSection.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={ctaSection.primaryCTA.action}
              size="lg"
              className="clerk-cta-primary min-w-[200px] px-8 py-6"
            >
              {ctaSection.primaryCTA.text}
            </Button>
            {ctaSection.secondaryCTA && (
              <Button
                onClick={ctaSection.secondaryCTA.action}
                variant="outline"
                size="lg"
                className="clerk-cta-ghost min-w-[200px] px-8 py-6"
              >
                {ctaSection.secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
