"use client";

import React from "react";

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  description: string;
}

interface IndustryStatsProps {
  title: string;
  description: string;
  stats: StatItem[];
  bottomNote?: string;
  className?: string;
}

/**
 * Industry Stats Component - Clean statistical showcase
 * 
 * BARS-DEMO-DESIGN-STANDARDS COMPLIANCE:
 * - Clean Clerk.com styling with minimal design
 * - Gradient text for stat values
 * - Proper hover states with transitions
 * - Centered layout with clean typography
 * - Animated entrance effects
 * - Professional card styling with subtle borders
 */
export function IndustryStats({
  title,
  description,
  stats,
  bottomNote = "Join 1,000+ bars and nightlife venues optimizing operations with OpsFlow",
  className = ""
}: IndustryStatsProps) {
  return (
    <section className={`py-20 bg-slate-50/50 ${className}`}>
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Minimal & Clean */}
        <div className="text-center mb-16 motion-fade-in-up-320">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats Grid - Clean Clerk.com Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className={`motion-fade-in-up-320 animation-delay-${(index + 1) * 100}`}
              >
                <div className="bg-white border border-slate-200/60 rounded-2xl p-8 text-center group hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  
                  {/* Icon - Minimal Design */}
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
            {bottomNote}
          </p>
        </div>
      </div>
    </section>
  );
}

export default IndustryStats;
export type { IndustryStatsProps, StatItem };
