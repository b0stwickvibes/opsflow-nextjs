/**
 * Coffee Process Solutions Component
 *
 * Problem-solving approach presentation for coffee shop operations.
 * Shows common pain points with OpsFlow solutions.
 */

"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface Solution {
  problem: string;
  solution: string;
  benefits: string[];
}

interface ProcessSolution {
  title: string;
  description: string;
  icon: LucideIcon;
  timeframe: string;
  complexity: "Low" | "Medium" | "High";
  solutions: Solution[];
}

interface CoffeeProcessSolutionsProps {
  title: string;
  description: string;
  badge?: string;
  processSolutions: ProcessSolution[];
  bottomCTA?: {
    title: string;
    description: string;
    action: () => void;
  };
}

export function CoffeeProcessSolutions({
  title,
  description,
  badge,
  processSolutions,
  bottomCTA
}: CoffeeProcessSolutionsProps) {
  const complexityColors = {
    Low: "bg-green-600/10 text-green-600 dark:bg-green-400/10 dark:text-green-400",
    Medium: "bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400",
    High: "bg-red-600/10 text-red-600 dark:bg-red-400/10 dark:text-red-400"
  };

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

      {/* Process Solutions */}
      <div className="space-y-8">
        {processSolutions.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="enterprise-card overflow-hidden rounded-xl border"
            >
              {/* Header */}
              <div className="border-b bg-muted/50 p-6">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4">
                    <div className="enterprise-icon-primary flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="dashboard-text-primary text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="dashboard-text-muted text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="px-3 py-1">
                      {item.timeframe}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className={`px-3 py-1 ${complexityColors[item.complexity]}`}
                    >
                      {item.complexity}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="p-6">
                {item.solutions.map((solution, solutionIndex) => (
                  <div key={solutionIndex} className="mb-8 last:mb-0">
                    {/* Problem */}
                    <div className="mb-4 rounded-lg bg-red-600/5 p-4 dark:bg-red-400/5">
                      <p className="dashboard-text-muted text-sm font-medium uppercase tracking-wider">
                        Problem
                      </p>
                      <p className="dashboard-text-secondary mt-2 leading-relaxed">
                        {solution.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-4 rounded-lg bg-orange-600/5 p-4 dark:bg-orange-400/5">
                      <p className="dashboard-text-muted text-sm font-medium uppercase tracking-wider">
                        OpsFlow Solution
                      </p>
                      <p className="dashboard-text-secondary mt-2 leading-relaxed">
                        {solution.solution}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="ml-4">
                      <p className="dashboard-text-muted mb-3 text-sm font-medium uppercase tracking-wider">
                        Key Benefits
                      </p>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="dashboard-text-muted flex items-start gap-3 text-sm"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-600 dark:bg-orange-400" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      {bottomCTA && (
        <div className="enterprise-card mt-12 rounded-2xl border p-8 text-center sm:p-12">
          <h3 className="enterprise-headline mb-4 text-2xl font-bold sm:text-3xl">
            {bottomCTA.title}
          </h3>
          <p className="dashboard-text-secondary mx-auto mb-8 max-w-2xl text-lg">
            {bottomCTA.description}
          </p>
          <Button
            onClick={bottomCTA.action}
            size="lg"
            className="clerk-cta-primary min-w-[200px] px-8 py-6"
          >
            Start Free Trial
          </Button>
        </div>
      )}
    </div>
  );
}
