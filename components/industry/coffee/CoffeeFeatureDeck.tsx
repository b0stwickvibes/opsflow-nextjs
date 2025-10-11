"use client";

import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

/**
 * CoffeeFeatureDeck Component
 * 
 * Displays core bar management features in a 3-column grid layout.
 * Features clean Clerk.com styling with PURPLE checkbox accents (coffee theme).
 * 
 * ENTERPRISE DESIGN STANDARDS:
 * - Section-compatible: No internal section/container wrappers
 * - Uses OKLCH color tokens with orange checkboxes for coffee theme
 * - Beautiful hover effects with shadow transitions
 * - Adapts to parent accent theme (galaxy orange for coffee via .accent-orange)
 * 
 * USAGE:
 * <Section background="muted" padding="lg">
 *   <SectionContent maxWidth="5xl">
 *     <CoffeeFeatureDeck {...props} />
 *   </SectionContent>
 * </Section>
 */

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  badge?: string;
  link?: {
    text: string;
    action: () => void;
  };
}

export interface CoffeeFeatureDeckProps {
  title: string;
  description: string;
  badge?: string;
  features: Feature[];
  layout?: "grid" | "carousel";
  ctaSection?: {
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
  };
  className?: string;
}

export function CoffeeFeatureDeck({ 
  title, 
  description, 
  badge, 
  features, 
  layout = "grid",
  ctaSection,
  className = ""
}: CoffeeFeatureDeckProps) {
  return (
    <div className={className}>
      {/* Header - Ultra Clean */}
      <div className="text-center mb-20 motion-fade-in-up-320">
        {badge && (
          <div className="clerk-inspired-badge mb-8">
            {badge}
          </div>
        )}
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
          {title}
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Features Grid - Clerk.com Clean Style with PURPLE checkboxes */}
      <div className={`grid gap-8 ${
        layout === "grid" 
          ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" 
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }`}>
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          
          return (
            <div 
              key={index}
              className={`motion-fade-in-up-320 animation-delay-${(index + 1) * 100}`}
            >
              <div className="bg-background border border-border rounded-3xl p-8 h-full group hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                
                {/* Header Section - Clean Layout */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:from-primary/15 group-hover:to-primary/8 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  
                  {feature.badge && (
                    <div className="clerk-inspired-badge text-xs">
                      {feature.badge}
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Benefits - Clean List with PURPLE checkboxes (coffee theme) */}
                <div className="space-y-3 mb-6">
                  {feature.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      {/* PURPLE checkbox - signature coffee theme element */}
                      <div className="w-5 h-5 mt-0.5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-orange-600" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Link - Minimal Style */}
                {feature.link && (
                  <div className="pt-4 border-t border-border">
                    <button 
                      className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      onClick={feature.link.action}
                    >
                      {feature.link.text}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Section - Ultra Clean */}
      {ctaSection && (
        <div className="mt-20 motion-fade-in-up-320 animation-delay-500">
          <div className="bg-gradient-to-br from-muted to-background border border-border rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">
                  {ctaSection.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {ctaSection.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                  onClick={ctaSection.primaryCTA.action}
                >
                  <span className="flex items-center gap-2">
                    {ctaSection.primaryCTA.text}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
                
                {ctaSection.secondaryCTA && (
                  <button 
                    className="px-8 py-4 bg-background border border-border text-foreground rounded-2xl font-medium hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                    onClick={ctaSection.secondaryCTA.action}
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      {ctaSection.secondaryCTA.text}
                    </span>
                  </button>
                )}
              </div>
              
              {/* Trust indicators - Minimal */}
              <div className="flex justify-center items-center gap-8 pt-6 border-t border-border text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  99.9% uptime guarantee
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  HACCP compliant
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  24/7 support
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
