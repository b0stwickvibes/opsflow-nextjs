/**
 * Coffee Process Component
 *
 * Onboarding process visualization for coffee shop setup.
 * Clean, professional step-by-step presentation.
 */

"use client";

import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
  timeframe: string;
}

interface CoffeeProcessProps {
  title: string;
  description: string;
  badge?: string;
  steps: ProcessStep[];
}

export function CoffeeProcess({
  title,
  description,
  badge,
  steps
}: CoffeeProcessProps) {
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

      {/* Process Steps */}
      <div className="relative">
        {/* Connection Line - Subtle visual guide */}
        <div className="absolute left-8 top-16 hidden h-[calc(100%-8rem)] w-0.5 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200 dark:from-orange-800 dark:via-orange-700 dark:to-orange-800 lg:block" />

        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col gap-6 lg:flex-row lg:items-start"
              >
                {/* Step Number & Icon */}
                <div className="flex items-start gap-4 lg:w-64">
                  <div className="enterprise-icon-primary relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="lg:hidden">
                    <span className="dashboard-text-muted text-sm font-medium">
                      Step {step.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="enterprise-card flex-1 rounded-xl border p-8">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <span className="dashboard-text-muted mb-2 block text-sm font-medium">
                        Step {step.step}
                      </span>
                      <h3 className="dashboard-text-primary mb-2 text-xl font-semibold">
                        {step.title}
                      </h3>
                    </div>
                    <Badge
                      variant="secondary"
                      className="ml-4 flex-shrink-0 px-3 py-1"
                    >
                      {step.timeframe}
                    </Badge>
                  </div>

                  <p className="dashboard-text-secondary mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="dashboard-text-muted flex items-start gap-3 text-sm"
                      >
                        <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-600 dark:bg-orange-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
