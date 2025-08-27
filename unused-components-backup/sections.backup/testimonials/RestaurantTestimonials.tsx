'use client';

/**
 * RestaurantTestimonials - Fixed for OpsFlow layout system
 * Simplified testimonials section with restaurant focus
 */

import { Shield } from 'lucide-react';
import { useEffect } from 'react';

import { Marquee } from '@/components/magicui/marquee';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

// Restaurant technology partners - using text logos for now
const restaurantPartners = [
  { name: 'Toast' },
  { name: 'Square' },
  { name: 'MarginEdge' },
  { name: '7shifts' },
  { name: 'QuickBooks' },
  { name: 'DoorDash' },
];

export function RestaurantTestimonials() {
  // Register with layout validator
  useEffect(() => {
    registerComponentLayout('RestaurantTestimonials', 'marketing');
  }, []);

  return (
    <section className="py-16 md:py-24">
      {/* Trusted by section */}
      <div className="border-t border-b py-12">
        <div className="text-center mb-8">
          <h2 className="text-muted-foreground flex items-center justify-center gap-2 text-sm leading-snug font-medium md:text-base">
            <Shield className="size-5" />
            Trusted by Restaurant Professionals
          </h2>
        </div>

        {/* Restaurant partner logos */}
        <Marquee className="[--gap:4rem]" pauseOnHover>
          {restaurantPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center min-w-[120px] py-4"
            >
              <span className="font-semibold text-muted-foreground text-lg">{partner.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
      
      {/* Main testimonial */}
      <div className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <blockquote className="md:col-span-2">
            <p className="text-2xl font-bold leading-snug tracking-tight md:text-3xl lg:text-4xl">
              "OpsFlow's temperature monitoring alone saved us from a potential health 
              violation. The alerts caught us before a walk-in cooler failed overnight."
            </p>
          </blockquote>

          <footer className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="font-semibold text-primary">MR</span>
            </div>
            <div>
              <cite className="font-medium not-italic text-foreground">
                Maria Rodriguez
              </cite>
              <p className="text-sm text-muted-foreground">
                Director of Operations, Fresh Bistro Group
              </p>
            </div>
          </footer>
        </div>
      </div>
      
      {/* Restaurant stats */}
      <div className="border-t pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">99.8%</div>
            <div className="text-sm text-muted-foreground">HACCP Compliance Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">32%</div>
            <div className="text-sm text-muted-foreground">Average Cost Reduction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">15hrs</div>
            <div className="text-sm text-muted-foreground">Manager Time Saved/Week</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">$37K</div>
            <div className="text-sm text-muted-foreground">Annual Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
}