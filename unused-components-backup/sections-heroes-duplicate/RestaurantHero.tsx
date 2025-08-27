'use client';

/**
 * RestaurantHero - Fixed for OpsFlow layout system
 * Simplified Scaler adaptation that works with existing container structure
 */

import { ArrowRight, ChefHat, Shield, BarChart3, Clock } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { MovingBorder } from '@/components/ui/moving-border';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

// Restaurant stats for professional credibility
const restaurantStats = [
  { icon: ChefHat, label: 'Restaurants', value: '2,500+', description: 'Using OpsFlow daily' },
  { icon: Shield, label: 'HACCP Compliance', value: '99.8%', description: 'Average success rate' },
  { icon: BarChart3, label: 'Labor Costs', value: '32%', description: 'Average reduction' },
  { icon: Clock, label: 'Time Saved', value: '15hrs/wk', description: 'Per manager' },
];

export function RestaurantHero() {
  // Register with layout validator
  useEffect(() => {
    registerComponentLayout('RestaurantHero', 'marketing');
  }, []);

  return (
    <section className="py-16 md:py-24">
      {/* Hero Content */}
      <div className="text-center space-y-8 mb-16">
        {/* Status Banner with Moving Border */}
        <div className="flex justify-center">
          <Link
            href="/product/features"
            className="relative inline-flex items-center overflow-hidden rounded-sm p-[1px]"
          >
            <MovingBorder duration={4000}>
              <div className="h-8 w-32 bg-[radial-gradient(#0055FF_40%,transparent_60%)] opacity-[0.8]" />
            </MovingBorder>
            <Button
              variant="outline"
              size="sm"
              className="relative border-none bg-background/95"
            >
              <div className="mr-2 h-2 w-2 rounded-full bg-green-500" />
              Live Temperature Monitoring
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Restaurant Operations{' '}
            <span className="block">Reimagined</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The premium platform that transforms how restaurants manage operations, 
            safety compliance, and staff accountability with enterprise-grade tools.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/pricing">Start Free Trial</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/product/demo">Watch Demo</Link>
          </Button>
        </div>
      </div>
      
      {/* Dashboard Preview */}
      <div className="mb-16">
        <div className="rounded-xl border bg-muted/50 p-4 shadow-lg max-w-5xl mx-auto">
          <div className="aspect-video rounded-lg border bg-background p-6">
            <div className="flex h-full items-center justify-center">
              <div className="text-center space-y-4">
                <ChefHat className="mx-auto h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Restaurant Operations Dashboard</h3>
                <p className="text-muted-foreground">Real-time monitoring and analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Stats Section */}
      <div className="border-t pt-12">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by Restaurant Professionals
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {restaurantStats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="rounded-full border bg-muted p-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl font-bold md:text-3xl">{stat.value}</div>
              <div className="text-sm font-medium text-primary">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}