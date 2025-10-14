"use client";

import React, { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * CoffeePlatformFeaturesGrid Component
 *
 * Interactive feature grid with selectable cards and detailed showcase.
 * Features orange checkbox accents and coffee shop operations dashboard mockup.
 * Adapts to parent accent theme (radiant galaxy orange for coffee via .accent-orange wrapper)
 *
 * Used in: /app/solutions/coffee
 * Domain: Coffee & Coffee Shop Industry
 * Design: Stripe/Clerk ultra-clean style with adaptive accent theming
 */

export interface CoffeePlatformFeature {
  id: string;
  type: string;
  title: string;
  description: string;
  icon: LucideIcon;
  stats: { primary: string; label: string };
  details: {
    title: string;
    description: string;
    benefits: string[];
    integrations?: string[];
  };
}

export interface CoffeePlatformFeaturesGridProps {
  badge: string;
  title: string;
  subtitle: string;
  features: CoffeePlatformFeature[];
}

export function CoffeePlatformFeaturesGrid({
  badge,
  title,
  subtitle,
  features
}: CoffeePlatformFeaturesGridProps) {
  const [selectedFeature, setSelectedFeature] = useState<string>(features[0]?.id || '');
  const currentFeature = features.find((f) => f.id === selectedFeature);

  return (
    <>
        
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="clerk-inspired-badge motion-fade-in-up-320">
            <CheckCircle className="w-4 h-4" />
            <span>{badge}</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight motion-fade-in-up-320 animation-delay-100">
            {title}
          </h2>
          
          <p className="enterprise-body max-w-2xl mx-auto text-muted-foreground motion-fade-in-up-320 animation-delay-200">
            {subtitle}
          </p>
        </div>

        {/* Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12 motion-fade-in-up-320 animation-delay-300">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isSelected = selectedFeature === feature.id;
            
            return (
              <div
                key={feature.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl p-6 rounded-lg border ${
                  isSelected 
                    ? "ring-2 ring-primary shadow-xl bg-primary/5 border-primary" 
                    : "hover:shadow-lg clerk-glass-card border-border"
                }`}
                onClick={() => setSelectedFeature(feature.id)}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className={`mx-auto w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isSelected 
                      ? "bg-primary text-primary-foreground shadow-lg" 
                      : "bg-primary/10 text-primary"
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      isSelected ? "text-primary" : "text-foreground"
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="text-xl font-bold text-primary">{feature.stats.primary}</div>
                    <div className="text-xs text-muted-foreground">{feature.stats.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Showcase */}
        {currentFeature && (
          <div className="clerk-glass-card min-h-[500px] motion-fade-in-up-320 animation-delay-700 p-8 lg:p-12 rounded-lg border">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    {currentFeature.details.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {currentFeature.details.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">Key Benefits</h4>
                  <div className="space-y-3">
                    {currentFeature.details.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-orange-600" />
                        </div>
                        <span className="text-foreground font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {currentFeature.details.integrations && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-foreground">Platform Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentFeature.details.integrations.map((integration) => (
                        <div key={integration} className="clerk-inspired-badge text-xs">
                          {integration}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <Button className="clerk-cta-primary group">
                    Explore {currentFeature.title}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="flex items-center justify-center">
                <div className="relative p-8">
                  <svg 
                    width="350" 
                    height="350" 
                    viewBox="0 0 350 350" 
                    className="text-primary/20 transition-all duration-500 hover:text-primary/30"
                    fill="currentColor"
                  >
                    <rect x="25" y="25" width="300" height="300" rx="16" fill="currentColor" />
                    <g fill="white" fillOpacity="0.9">
                      <rect x="50" y="50" width="250" height="12" rx="6" />
                      <rect x="50" y="80" width="70" height="50" rx="8" />
                      <rect x="140" y="80" width="70" height="50" rx="8" />
                      <rect x="230" y="80" width="70" height="50" rx="8" />
                      <rect x="50" y="150" width="70" height="50" rx="8" />
                      <rect x="140" y="150" width="70" height="50" rx="8" />
                      <rect x="230" y="150" width="70" height="50" rx="8" />
                      <rect x="50" y="220" width="250" height="80" rx="12" />
                      <circle cx="85" cy="105" r="8" fill="#10B981" />
                      <circle cx="175" cy="105" r="8" fill="#10B981" />
                      <circle cx="265" cy="105" r="8" fill="#F59E0B" />
                      <circle cx="85" cy="175" r="8" fill="#10B981" />
                      <circle cx="175" cy="175" r="8" fill="#EF4444" />
                      <circle cx="265" cy="175" r="8" fill="#10B981" />
                      <circle cx="70" cy="260" r="6" fill="#10B981" />
                      <circle cx="90" cy="260" r="6" fill="#10B981" />
                      <circle cx="110" cy="260" r="6" fill="#F59E0B" />
                      <circle cx="130" cy="260" r="6" fill="#10B981" />
                      <circle cx="150" cy="260" r="6" fill="#10B981" />
                      <rect x="200" y="240" width="8" height="40" rx="2" fill="#3B82F6" />
                      <rect x="220" y="250" width="8" height="30" rx="2" fill="#8B5CF6" />
                      <rect x="240" y="235" width="8" height="45" rx="2" fill="#10B981" />
                      <rect x="260" y="245" width="8" height="35" rx="2" fill="#F59E0B" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
}
