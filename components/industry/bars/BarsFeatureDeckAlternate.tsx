"use client";

import React, { useState, useRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import { CheckCircle, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * BarsFeatureDeckAlternate Component - Stripe-Style Carousel
 * 
 * Premium carousel showcasing advanced bar features with smooth horizontal scrolling.
 * Inspired by Stripe.com carousel patterns with Clerk.com styling.
 * Adapts to parent accent theme (radiant galaxy purple for bars via .accent-purple wrapper)
 * 
 * Used in: /app/solutions/bars
 * Domain: Bars & Nightlife Industry  
 * Design: Stripe carousel + Clerk ultra-clean style with adaptive accent theming
 */

export interface AlternateFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  link?: {
    text: string;
    action: () => void;
  };
}

export interface BarsFeatureDeckAlternateProps {
  title: string;
  description: string;
  badge?: string;
  features: AlternateFeature[];
}

export function BarsFeatureDeckAlternate({ 
  title, 
  description, 
  badge, 
  features 
}: BarsFeatureDeckAlternateProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const cardWidth = 420;
  const gap = 24;
  const maxScroll = features.length * (cardWidth + gap) - cardWidth * 2.5;

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = cardWidth + gap;
    const newPosition =
      direction === "left"
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(maxScroll, scrollPosition + scrollAmount);

    setScrollPosition(newPosition);

    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>

        {/* Header */}
        <div className="space-y-6 mb-16 motion-fade-in-up-320">
          {badge && (
            <div className="clerk-inspired-badge">
              {badge}
            </div>
          )}
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground max-w-3xl">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Carousel Navigation */}
        <div className="flex items-center justify-end mb-6 gap-2 motion-fade-in-up-320 animation-delay-100">
          <Button
            variant="outline"
            size="sm"
            onClick={() => scroll("left")}
            className="h-10 w-10 p-0 rounded-full border-border hover:border-primary/50 hover-scale-103 transition-all"
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => scroll("right")}
            className="h-10 w-10 p-0 rounded-full border-border hover:border-primary/50 hover-scale-103 transition-all"
            disabled={scrollPosition >= maxScroll}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="relative overflow-hidden motion-fade-in-up-320 animation-delay-200">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Spacer for visual balance */}
            <div className="flex-shrink-0 w-0" />

            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: `${cardWidth}px`,
                    scrollSnapAlign: "start",
                  }}
                >
                  {/* Premium Clerk Glass Card */}
                  <div className="clerk-glass-card h-full rounded-2xl overflow-hidden hover-lift">
                    {/* Top Accent Bar with Purple Gradient */}
                    <div className="h-1 bg-gradient-to-r from-primary to-primary/80" />
                    
                    {/* Card Content */}
                    <div className="p-8 space-y-6">
                      {/* Icon & Title Section */}
                      <div className="space-y-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-7 h-7 text-primary" />
                        </div>
                        
                        <h3 className="text-[19px] font-semibold text-foreground leading-[1.3] tracking-[-0.01em]">
                          {feature.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-[14px] text-muted-foreground leading-[1.6] tracking-[-0.005em]">
                        {feature.description}
                      </p>

                      {/* Benefits List */}
                      <div className="space-y-3 pt-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-[13px] text-muted-foreground leading-relaxed">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Link with Enhanced Hover */}
                      {feature.link && (
                        <div className="pt-4">
                          <button 
                            onClick={feature.link.action}
                            className="text-primary text-[14px] font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all group"
                          >
                            {feature.link.text}
                            <ArrowRight className="h-3.5 w-3.5 transition-all group-hover:translate-x-0.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Spacer for visual balance */}
            <div className="flex-shrink-0 w-0" />
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-10 motion-fade-in-up-320 animation-delay-300">
          {features.map((_, idx) => {
            const isActive = Math.round(scrollPosition / (cardWidth + gap)) === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  const newPos = idx * (cardWidth + gap);
                  setScrollPosition(newPos);
                  trackRef.current?.scrollTo({ left: newPos, behavior: "smooth" });
                }}
                className={`h-1.5 rounded-full transition-all hover:opacity-80 ${
                  isActive ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 motion-fade-in-up-320 animation-delay-400">
          <div className="clerk-glass-card rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">
                  Ready to Scale Your Analytics?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Advanced analytics and growth tools designed for serious bar operators.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="clerk-cta-primary cta-shimmer hover-scale-103 group">
                  Explore Advanced Features
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button variant="outline" className="hover-scale-103">
                  Schedule Analytics Demo
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex justify-center items-center gap-8 pt-6 border-t border-border text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Enterprise-grade analytics
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Real-time insights
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Predictive AI
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
