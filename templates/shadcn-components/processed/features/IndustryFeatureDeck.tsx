"use client";

import React from "react";
import { CheckCircle, ArrowRight, ExternalLink } from "lucide-react";

interface FeatureBenefit {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  benefits: string[];
  badge?: string;
  link?: {
    text: string;
    action: () => void;
  };
}

interface CTASection {
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
}

interface IndustryFeatureDeckProps {
  title: string;
  description: string;
  badge?: string;
  features: FeatureBenefit[];
  layout?: "grid" | "masonry";
  ctaSection?: CTASection;
  className?: string;
}

/**
 * Industry Feature Deck Component - Professional feature showcase with benefits
 * 
 * BARS-DEMO-DESIGN-STANDARDS COMPLIANCE:
 * - clerk-inspired-badge for badge elements
 * - Clean Clerk.com styling with proper spacing
 * - Purple checkboxes for benefits lists
 * - Hover states with proper transitions
 * - Clean CTA section with trust indicators
 * - Proper OKLCH color token usage
 * - Animated entrance effects
 */
export function IndustryFeatureDeck({
  title,
  description,
  badge,
  features,
  layout = "grid",
  ctaSection,
  className = ""
}: IndustryFeatureDeckProps) {
  return (
    <section className={`py-24 bg-gradient-to-b from-slate-50/30 to-white ${className}`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* Features Grid - Clerk.com Clean Style */}
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
                <div className="bg-white border border-slate-200/60 rounded-3xl p-8 h-full group hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                  
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

                  {/* Benefits - Clean List */}
                  <div className="space-y-3 mb-6">
                    {feature.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-0.5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-purple-600" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Link - Minimal Style */}
                  {feature.link && (
                    <div className="pt-4 border-t border-slate-200/60">
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
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 rounded-3xl p-12 text-center max-w-4xl mx-auto">
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
                    className="px-8 py-4 bg-primary text-white rounded-2xl font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    onClick={ctaSection.primaryCTA.action}
                  >
                    <span className="flex items-center gap-2">
                      {ctaSection.primaryCTA.text}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                  
                  {ctaSection.secondaryCTA && (
                    <button 
                      className="px-8 py-4 bg-white border border-slate-200 text-foreground rounded-2xl font-medium hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
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
                <div className="flex justify-center items-center gap-8 pt-6 border-t border-slate-200/60 text-sm text-muted-foreground">
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
    </section>
  );
}

export default IndustryFeatureDeck;
export type { IndustryFeatureDeckProps, FeatureBenefit, CTASection };
