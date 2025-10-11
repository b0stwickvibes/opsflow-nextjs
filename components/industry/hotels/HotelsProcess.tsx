"use client";

import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, CheckCircle } from 'lucide-react';

/**
 * HotelsProcess Component
 *
 * Displays the 3-step implementation process for hotel & hospitality operations.
 * Features stepped progression with clean Clerk.com styling and RED checkboxes.
 *
 * ENTERPRISE DESIGN STANDARDS:
 * - Section-compatible: No internal section/container wrappers
 * - Uses OKLCH color tokens + red checkboxes for hotels theme
 * - Icon containers: primary (cyan), roi (red center), secondary (cyan)
 * - Adapts to parent accent theme (red for hotels via .accent-red)
 *
 * USAGE:
 * <Section background="default" padding="lg">
 *   <SectionContent maxWidth="6xl">
 *     <HotelsProcess {...props} />
 *   </SectionContent>
 * </Section>
 */

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
  timeframe: string;
}

export interface HotelsProcessProps {
  title: string;
  description: string;
  badge: string;
  steps: ProcessStep[];
  className?: string;
}

export function HotelsProcess({
  title,
  description,
  badge,
  steps,
  className = ""
}: HotelsProcessProps) {
  return (
    <div className={className}>
      {/* Header */}
      <div className="text-center mb-20">
        <div className="clerk-inspired-badge mb-8">
          {badge}
        </div>
        <h2 className="text-display-lg mb-8">
          {title}
        </h2>
        <p className="enterprise-body max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Process Steps */}
      <div className="relative">
        {/* Connection line for desktop */}
        <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <div className="h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isCenter = index === 1;

            return (
              <div
                key={step.step}
                className={`relative ${
                  isCenter ? 'lg:mt-12' : ''
                }`}
              >
                {/* Step indicator with proper icon-container classes */}
                <div className="relative mb-16">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto relative z-10 ${
                    isCenter
                      ? 'icon-container-roi'
                      : index % 2 === 0
                        ? 'icon-container-primary'
                        : 'icon-container-secondary'
                  }`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Step number - properly centered below */}
                  <div className="flex justify-center mt-4">
                    <div className="w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-primary">
                        {step.step}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="clerk-glass-card p-10 h-full">
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-display-sm dashboard-text-primary">
                          {step.title}
                        </h3>
                        <div className="clerk-inspired-badge text-xs">
                          {step.timeframe}
                        </div>
                      </div>
                      <p className="enterprise-body">
                        {step.description}
                      </p>
                    </div>

                    {/* Details list with RED checkboxes (hotels theme) */}
                    <div className="space-y-4">
                      {step.details.slice(0, 3).map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3">
                          {/* RED checkbox - signature hotels theme element */}
                          <div className="w-5 h-5 mt-0.5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-red-600" />
                          </div>
                          <span className="text-sm dashboard-text-muted">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Progress indicator */}
                    <div className="pt-6 border-t border-border/50">
                      <div className="flex items-center justify-between text-xs dashboard-text-muted">
                        <span>Step {step.step} of {steps.length}</span>
                        <div className="flex gap-1">
                          {Array.from({ length: steps.length }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i <= index ? 'bg-primary' : 'bg-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow connector (mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-4">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom summary */}
      <div className="mt-24 text-center">
        <div className="enterprise-metric-card p-12 max-w-2xl mx-auto">
          <h3 className="text-display-sm mb-4">
            Complete Setup in Under 30 Minutes
          </h3>
          <p className="enterprise-body mb-6">
            Our streamlined onboarding process gets your hotel operations optimized quickly with minimal disruption to your workflow.
          </p>
          <div className="flex justify-center items-center gap-6 text-sm dashboard-text-muted">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              No technical expertise required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              White-glove onboarding included
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
