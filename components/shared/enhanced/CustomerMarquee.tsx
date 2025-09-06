'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { Marquee } from './Marquee';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { MarqueeSkeleton } from '@/components/shared/feedback/LoadingSkeletons';

// Performance-optimized marquee with intersection observer
export function CustomerMarquee() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Restaurant industry customers and partners
  const restaurantPartners = [
    { name: "Toast POS", type: "Integration Partner" },
    { name: "MarginEdge", type: "Integration Partner" },
    { name: "The Oak Tavern", type: "Customer" },
    { name: "Bella Vista Group", type: "Customer" },
    { name: "Urban Grind Coffee", type: "Customer" },
    { name: "Cantina Añejo", type: "Customer" },
    { name: "Range Restaurant", type: "Customer" },
    { name: "Hospitality First", type: "Customer" },
    { name: "Metro Bistro", type: "Customer" },
    { name: "Coastal Kitchen", type: "Customer" },
  ];

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Simulate loading delay for smooth UX
          setTimeout(() => setIsLoaded(true), 100);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px' // Start loading before fully visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Cleanup animations on unmount
  useEffect(() => {
    return () => {
      // Cleanup any running animations
      const animations = document.getAnimations();
      animations.forEach(animation => {
        if ((animation as any).animationName?.includes('marquee')) {
          animation.cancel();
        }
      });
    };
  }, []);

  if (!isVisible) {
    return (
      <div ref={ref} style={{ height: '200px' }}>
        <MarqueeSkeleton />
      </div>
    );
  }

  if (!isLoaded) {
    return <MarqueeSkeleton />;
  }

  return (
    <section ref={ref} className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Trusted by Leading Restaurants
            </span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join over 2,500 restaurants already using OpsFlow to streamline operations and ensure compliance.
          </p>
        </div>

        <div className="relative">
          {/* First row - moving right */}
          <Marquee 
            className="[--gap:6rem] mb-4 [--duration:30s]" 
            pauseOnHover={true}
          >
            {restaurantPartners.slice(0, 5).map((partner, index) => (
              <PartnerCard key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </Marquee>

          {/* Second row - moving left */}
          <Marquee 
            className="[--gap:6rem] [--duration:35s]" 
            reverse={true}
            pauseOnHover={true}
          >
            {restaurantPartners.slice(5).map((partner, index) => (
              <PartnerCard key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </Marquee>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Seamlessly integrates with your existing restaurant technology stack
          </p>
        </div>
      </div>
    </section>
  );
}

// Memoized partner card for performance
const PartnerCard = React.memo(({ partner }: { partner: { name: string; type: string } }) => (
  <div className="flex flex-col items-center min-w-[200px]">
    <div className="bg-background rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="text-center">
        <h3 className="font-semibold text-lg mb-2">{partner.name}</h3>
        <Badge variant={partner.type === 'Integration Partner' ? 'default' : 'secondary'}>
          {partner.type}
        </Badge>
      </div>
    </div>
  </div>
));

PartnerCard.displayName = 'PartnerCard';

import React from 'react';