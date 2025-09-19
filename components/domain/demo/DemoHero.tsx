'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, MonitorPlay } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

interface Action {
  text: string;
  href: string;
  onClick?: () => void;
}

interface DemoHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  primaryAction?: Action;
  secondaryAction?: Action;
}

/**
 * Demo Hero - Clerk.com-inspired premium demo experience
 * Used in: /product/demo page
 * Domain: Interactive product demonstrations
 * Design: Enterprise styling with glassmorphism and restaurant operations context
 */
export function DemoHero({
  title,
  subtitle,
  badge = 'Interactive Demo Experience',
  primaryAction = { text: 'Start Interactive Demo', href: '#demo-features' },
  secondaryAction = { text: 'Book Live Demo', href: '#demo-booking' },
}: DemoHeroProps) {
  useEffect(() => {
    // Ensure layout family tracked for bulletproof styling
    registerComponentLayout('DemoHero', 'product' as any);
  }, []);

  const demoMetrics = [
    { value: "99.8%", label: "HACCP Compliance", icon: "shield" },
    { value: "15 hrs", label: "Saved per week", icon: "clock" },
    { value: "32%", label: "Waste Reduction", icon: "trending-down" },
    { value: "5k+", label: "Restaurants", icon: "building" }
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Clerk-inspired badge */}
          <div className="mb-6 inline-block motion-fade-in-up-320">
            <div className="clerk-inspired-badge">
              <MonitorPlay className="h-4 w-4" />
              <span>{badge}</span>
            </div>
          </div>

          {/* Premium typography with brand gradient */}
          <h1 className="enterprise-headline mb-6 motion-fade-in-up-320 animation-delay-100">
            {title.split(' ').slice(0, -2).join(' ')}
            <br />
            <span className="heading-brand-gradient">
              {title.split(' ').slice(-2).join(' ')}
            </span>
          </h1>

          <p className="enterprise-body mb-8 max-w-3xl mx-auto motion-fade-in-up-320 animation-delay-200">
            {subtitle}
          </p>

          {/* Enhanced CTA system */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 motion-fade-in-up-320 animation-delay-300">
            <Button size="lg" className="clerk-cta-primary cta-shimmer hover-scale-103 text-base px-8 py-3 h-auto cta-equal" asChild>
              <Link href={primaryAction.href}>
                <Play className="mr-2 h-5 w-5" />
                {primaryAction.text}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="hover-scale-103 text-base px-8 py-3 h-auto cta-equal" asChild>
              <Link href={secondaryAction.href}>
                <ArrowRight className="mr-2 h-5 w-5" />
                {secondaryAction.text}
              </Link>
            </Button>
          </div>

          {/* Premium demo preview with glassmorphism */}
          <div className="mt-12 md:mt-16 motion-fade-in-up-320 animation-delay-400">
            <Card className="enterprise-card relative mx-auto overflow-hidden max-w-5xl tile-hover">
              {/* Enhanced top bar with restaurant context */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/70 border-b backdrop-filter backdrop-blur-sm">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-sm font-medium text-muted-foreground">
                  OpsFlow Dashboard — Restaurant Operations Live Demo
                </span>
              </div>
              
              {/* Demo content area with restaurant branding */}
              <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                <div className="absolute inset-0 bg-brand-surface opacity-30" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center space-y-4">
                    <div className="enterprise-icon-primary mx-auto w-16 h-16">
                      <Play className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Restaurant Operations Demo</h3>
                      <p className="text-muted-foreground mb-4">
                        See HACCP compliance, staff management, and inventory tracking in action
                      </p>
                      <Button size="lg" className="clerk-cta-primary hover-scale-103">
                        <Play className="mr-2 h-5 w-5" />
                        Watch 60s Product Tour
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Enhanced metrics with glassmorphism cards */}
          <div className="mt-16 motion-fade-in-up-320 animation-delay-500">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {demoMetrics.map((metric, index) => (
                <Card key={index} className="enterprise-metric-card tile-hover p-6 text-center">
                  <div className="metric-display-medium text-gradient mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Restaurant industry social proof */}
          <div className="mt-12 text-center motion-fade-in-up-320 animation-delay-600">
            <p className="text-muted-foreground mb-4">
              Trusted by restaurant operations teams from single locations to 100+ chain operations
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-medium">Fast Casual</div>
              <div className="w-px h-4 bg-border" />
              <div className="text-sm font-medium">Fine Dining</div>
              <div className="w-px h-4 bg-border" />
              <div className="text-sm font-medium">Ghost Kitchens</div>
              <div className="w-px h-4 bg-border" />
              <div className="text-sm font-medium">Hotel F&B</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoHero;
