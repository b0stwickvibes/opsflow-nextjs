"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface CoffeeStatsProps {
  title: string;
  description: string;
  stats: {
    icon: LucideIcon;
    value: string;
    label: string;
    description: string;
  }[];
  className?: string;
}

/**
 * CoffeeStats Component - Clean stats display for coffee and coffee shop venues
 *
 * ENTERPRISE DESIGN STANDARDS:
 * - Section-compatible: No internal section/container wrappers
 * - Uses OKLCH color tokens exclusively (bg-background, border-border, text-foreground)
 * - Follows Clerk.com clean style with minimal borders
 * - Purple accent theme inherited from parent .accent-orange
 * - 4-column grid layout for key metrics
 * - Subtle hover effects and animations
 * - Professional glassmorphism cards
 * 
 * USAGE:
 * <Section background="muted" padding="lg">
 *   <SectionContent maxWidth="4xl">
 *     <CoffeeStats {...props} />
 *   </SectionContent>
 * </Section>
 */
export function CoffeeStats({
  title,
  description,
  stats,
  className = ""
}: CoffeeStatsProps) {
  return (
    <div className={className}>
      {/* Header - Minimal & Clean */}
      <div className="text-center mb-16 motion-fade-in-up-320">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Stats Grid - Clean Clerk.com Style with OKLCH tokens */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div 
              key={index} 
              className={`motion-fade-in-up-320 animation-delay-${(index + 1) * 100}`}
            >
              <div className="bg-background border border-border rounded-2xl p-8 text-center group hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                
                {/* Icon - Minimal Design with OKLCH tokens */}
                <div className="w-12 h-12 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                
                {/* Value - Large & Bold */}
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                
                {/* Label - Clean Typography */}
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {stat.label}
                </h3>
                
                {/* Description - Subtle */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Bottom Note - Minimal */}
      <div className="text-center mt-16 motion-fade-in-up-320 animation-delay-500">
        <p className="text-sm text-muted-foreground">
          Join 1,000+ coffee and coffee shop venues optimizing operations with OpsFlow
        </p>
      </div>
    </div>
  );
}

export default CoffeeStats;
export type { CoffeeStatsProps };
