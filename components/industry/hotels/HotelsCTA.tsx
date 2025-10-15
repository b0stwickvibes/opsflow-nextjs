"use client";

import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

/**
 * HotelsCTA Component
 *
 * Final conversion-focused CTA with testimonial and trust indicators.
 * Features clean styling with urgency badge and red accents.
 * Adapts to parent accent theme (red for hotels via .accent-red wrapper)
 *
 * Used in: /app/solutions/hotels
 * Domain: Hotels & Hospitality Industry
 * Design: Stripe/Clerk ultra-clean style with adaptive accent theming
 */

export interface HotelsCTAProps {
  headline: string;
  subheadline: string;
  description: string;
  primaryCTA: {
    text: string;
    action: () => void;
  };
  secondaryCTA: {
    text: string;
    action: () => void;
  };
  trustIndicators: {
    icon: LucideIcon;
    text: string;
  }[];
  urgencyBadge?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export function HotelsCTA({
  headline,
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  trustIndicators,
  urgencyBadge,
  testimonial
}: HotelsCTAProps) {
  return (
    <>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Urgency Badge */}
          {urgencyBadge && (
            <div className="motion-fade-in-up-320">
              <div className="clerk-inspired-badge px-4 py-2 text-sm">
                {urgencyBadge}
              </div>
            </div>
          )}

          {/* Headlines */}
          <div className="space-y-6 motion-fade-in-up-320 animation-delay-100">
            <h2 className="enterprise-headline">
              {headline}
            </h2>
            <h3 className="text-display-md heading-brand-gradient">
              {subheadline}
            </h3>
            <p className="enterprise-body max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center motion-fade-in-up-320 animation-delay-200">
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
              className="cta-equal hover-scale-103"
              onClick={secondaryCTA.action}
            >
              {secondaryCTA.text}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <indicator.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium dashboard-text-muted">
                  {indicator.text}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          {testimonial && (
            <Card className="enterprise-card max-w-3xl mx-auto mt-16">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-lg dashboard-text-primary italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold dashboard-text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-sm dashboard-text-muted">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
    </>
  );
}
