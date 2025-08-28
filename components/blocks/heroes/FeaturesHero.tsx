'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';
import dynamic from 'next/dynamic';

const ArrowRight = dynamic(() => import('lucide-react').then(m => ({ default: m.ArrowRight })));

interface FeaturesHeroProps {
  featuresCount?: number;
}

export function FeaturesHero({ featuresCount = 50 }: FeaturesHeroProps) {
  useEffect(() => {
    registerComponentLayout('FeaturesHero', 'product' as any);
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" />
      <div className="absolute -top-40 -right-32 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-3xl opacity-60" />
      <div className="absolute -bottom-40 -left-32 w-[30rem] h-[30rem] rounded-full bg-blue-400/10 dark:bg-blue-900/20 blur-3xl opacity-50" />
      <div className="absolute inset-0 bg-grid-primary/10 opacity-20" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 inline-flex">
            {featuresCount}+ powerful features
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Hospitality
            <span className="block">features</span>
            <span className="block">built for restaurants</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how our restaurant-first platform streamlines kitchen operations, controls food costs,
            manages staff scheduling, and ensures compliance with health regulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/product/demo">Try restaurant demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="/pricing">
                Restaurant pricing
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesHero;

