/**
 * Coffee Platform Features Grid Component
 *
 * Technical platform capabilities showcase for coffee shops.
 * Enterprise infrastructure features with detailed modals.
 */

"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureDetail {
  title: string;
  description: string;
  benefits: string[];
  integrations?: string[];
}

interface Feature {
  id: string;
  type: "infrastructure" | "security" | "connectivity" | "scalability" | "reliability";
  icon: LucideIcon;
  title: string;
  description: string;
  stats: {
    primary: string;
    label: string;
  };
  details: FeatureDetail;
}

interface CoffeePlatformFeaturesGridProps {
  badge?: string;
  title: string;
  subtitle: string;
  features: Feature[];
}

export function CoffeePlatformFeaturesGrid({
  badge,
  title,
  subtitle,
  features
}: CoffeePlatformFeaturesGridProps) {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

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
          {subtitle}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <button
              key={feature.id}
              onClick={() => setSelectedFeature(feature)}
              className="enterprise-card group relative overflow-hidden rounded-xl border p-6 text-left transition-all hover:border-orange-200 hover:shadow-lg dark:hover:border-orange-800"
            >
              {/* Icon & Stats */}
              <div className="mb-4 flex items-start justify-between">
                <div className="enterprise-icon-primary flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
                    {feature.stats.primary}
                  </div>
                  <div className="dashboard-text-muted text-xs">
                    {feature.stats.label}
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="dashboard-text-primary mb-2 text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="dashboard-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Indicator */}
              <div className="mt-4 text-sm font-medium text-orange-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-orange-400">
                Learn more →
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="enterprise-card relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border p-8">
            {/* Close Button */}
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute right-4 top-4 rounded-lg p-2 transition-colors hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Icon */}
            <div className="enterprise-icon-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400">
              {(() => {
                const Icon = selectedFeature.icon;
                return <Icon className="h-8 w-8" />;
              })()}
            </div>

            {/* Title & Description */}
            <h3 className="enterprise-headline mb-4 text-2xl font-bold">
              {selectedFeature.details.title}
            </h3>
            <p className="dashboard-text-secondary mb-6 text-lg leading-relaxed">
              {selectedFeature.details.description}
            </p>

            {/* Benefits */}
            <div className="mb-6">
              <h4 className="dashboard-text-primary mb-4 text-sm font-semibold uppercase tracking-wider">
                Key Benefits
              </h4>
              <ul className="space-y-3">
                {selectedFeature.details.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="dashboard-text-secondary flex items-start gap-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-600 dark:bg-orange-400" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Integrations */}
            {selectedFeature.details.integrations && (
              <div>
                <h4 className="dashboard-text-primary mb-4 text-sm font-semibold uppercase tracking-wider">
                  Integrations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedFeature.details.integrations.map((integration, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {integration}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Close Button */}
            <div className="mt-8">
              <Button
                onClick={() => setSelectedFeature(null)}
                variant="outline"
                className="w-full"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
