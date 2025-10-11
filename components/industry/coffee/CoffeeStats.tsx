/**
 * Coffee Stats Component
 *
 * Industry-specific statistics for coffee shop operations.
 * Professional metric presentation following Stripe standards.
 */

"use client";

import { LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

interface CoffeeStatsProps {
  title: string;
  description: string;
  stats: Stat[];
}

export function CoffeeStats({
  title,
  description,
  stats
}: CoffeeStatsProps) {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="enterprise-headline mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="dashboard-text-secondary mx-auto max-w-2xl text-lg">
          {description}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="enterprise-card group relative overflow-hidden rounded-xl border p-6 transition-all hover:border-orange-200 dark:hover:border-orange-800"
            >
              {/* Icon Container - Professional styling, no glow */}
              <div className="enterprise-icon-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400">
                <Icon className="h-6 w-6" />
              </div>

              {/* Value - Large, high contrast */}
              <div className="metric-display-medium mb-2 text-orange-600 dark:text-orange-400">
                {stat.value}
              </div>

              {/* Label - Medium emphasis */}
              <h3 className="dashboard-text-primary mb-2 text-base font-semibold">
                {stat.label}
              </h3>

              {/* Description - Lower emphasis */}
              <p className="dashboard-text-muted text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
