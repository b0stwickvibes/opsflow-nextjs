/**
 * Coffee Feature Deck Alternate Component
 *
 * Alternative feature presentation for premium/advanced features.
 * Uses different layout pattern from primary feature deck.
 */

"use client";

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

interface CoffeeFeatureDeckAlternateProps {
  title: string;
  description: string;
  badge?: string;
  features: Feature[];
}

export function CoffeeFeatureDeckAlternate({
  title,
  description,
  badge,
  features
}: CoffeeFeatureDeckAlternateProps) {
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
        <p className="dashboard-text-secondary mx-auto max-w-3xl text-lg">
          {description}
        </p>
      </div>

      {/* Features Grid - 2 Column Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="enterprise-card group relative overflow-hidden rounded-xl border p-8 transition-all hover:border-orange-200 dark:hover:border-orange-800"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="enterprise-icon-primary flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="dashboard-text-primary mb-3 text-xl font-semibold">
                    {feature.title}
                  </h3>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
