"use client";

import React from "react";
import { Building2, BarChart3, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HotelsHeroProps {
  industry: string;
  headline: string;
  subheadline: string;
  description: string;
  primaryCTA: { text: string; action: () => void; };
  secondaryCTA: { text: string; action: () => void; };
  badge: { text: string; variant?: "default" | "secondary" | "outline"; };
  stats: { value: string; label: string; }[];
  backgroundImage?: string;
  className?: string;
}

/**
 * HotelsHero Component - Industry-specific hero section for hotels and hospitality
 *
 * ENTERPRISE DESIGN STANDARDS:
 * - Section-compatible: No internal section/container wrappers
 * - Uses OKLCH color tokens exclusively (no hardcoded colors)
 * - Red accent theme inherited from parent .accent-red
 * - Hotel-specific terminology and metrics
 * - Enterprise-grade accessibility and responsive design
 * - Professional motion animations and interactions
 *
 * USAGE:
 * <Section background="gradient" padding="xl" className="hero-ambient">
 *   <SectionContent maxWidth="6xl">
 *     <HotelsHero {...props} />
 *   </SectionContent>
 * </Section>
 */
export function HotelsHero({
  industry,
  headline,
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  stats,
  backgroundImage,
  className = ""
}: HotelsHeroProps) {
  return (
    <div className={className}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left Column - Content */}
        <div className="space-y-12 motion-fade-in-up-320">
          {/* Badge */}
          <div className="inline-flex">
            <div className="clerk-inspired-badge">
              {badge.text}
            </div>
          </div>

          {/* Headlines */}
          <div className="space-y-8">
            <h1 className="enterprise-headline break-words">
              {headline}
              <span className="block heading-brand-gradient mt-4 break-words">
                {subheadline}
              </span>
            </h1>

            <p className="enterprise-body max-w-2xl">
              {description}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 motion-fade-in-up-320 animation-delay-200">
            <Button
              size="lg"
              className="clerk-cta-primary cta-shimmer hover-scale-103 cta-equal group"
              onClick={primaryCTA.action}
            >
              {primaryCTA.text}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="cta-equal group hover-scale-103"
              onClick={secondaryCTA.action}
            >
              <Play className="mr-2 h-4 w-4" />
              {secondaryCTA.text}
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-12 pt-12 border-t border-border/50 motion-fade-in-up-320 animation-delay-300">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="metric-display-medium text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm dashboard-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Visual Elements */}
        <div className="lg:pl-8 motion-fade-in-up-320 animation-delay-400">
          <div className="relative">
            {/* Main visual card */}
            <div className="enterprise-card p-8 lg:p-12 tile-hover transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 icon-container-primary rounded-2xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="clerk-inspired-badge">
                    Live System
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-display-sm dashboard-text-primary">
                    {industry} Operations
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm dashboard-text-muted">Task Completion</span>
                      <span className="font-semibold">96%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '96%' }} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="dashboard-metric-cyan p-4 rounded-lg text-center">
                      <div className="text-lg font-bold">24</div>
                      <div className="text-xs dashboard-text-muted">Active Tasks</div>
                    </div>
                    <div className="dashboard-metric-green p-4 rounded-lg text-center">
                      <div className="text-lg font-bold">99.4%</div>
                      <div className="text-xs dashboard-text-muted">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 icon-container-secondary rounded-2xl flex items-center justify-center shadow-xl">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>

            <div className="absolute -bottom-4 -left-4 enterprise-metric-card p-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium">Real-time monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelsHero;
export type { HotelsHeroProps };
