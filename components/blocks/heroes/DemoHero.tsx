'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight } from 'lucide-react';
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

export function DemoHero({
  title,
  subtitle,
  badge = 'Interactive Demo',
  primaryAction = { text: 'Start Interactive Demo', href: '#demo-features' },
  secondaryAction = { text: 'Book Live Demo', href: '#demo-booking' },
}: DemoHeroProps) {
  useEffect(() => {
    // Ensure layout family tracked for bulletproof styling
    registerComponentLayout('DemoHero', 'product' as any);
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Subtle background gradient + blobs (stripe-like) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" />
      <div className="absolute -top-40 -right-32 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-3xl opacity-60" />
      <div className="absolute -bottom-40 -left-32 w-[30rem] h-[30rem] rounded-full bg-blue-400/10 dark:bg-blue-900/20 blur-3xl opacity-50" />
      <div className="absolute inset-0 bg-grid-primary/10 opacity-20" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {badge && (
            <Badge variant="secondary" className="mb-4 inline-flex">
              {badge}
            </Badge>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl" asChild>
              <Link href={primaryAction.href}>
                <Play className="h-5 w-5" />
                {primaryAction.text}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href={secondaryAction.href}>
                <ArrowRight className="h-5 w-5" />
                {secondaryAction.text}
              </Link>
            </Button>
          </div>

          {/* Demo preview panel */}
          <div className="mt-12 md:mt-16">
            <div className="relative mx-auto bg-muted/60 dark:bg-slate-800 rounded-2xl border shadow-sm overflow-hidden max-w-5xl">
              {/* Top bar */}
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/70 border-b">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-muted-foreground">opsflow-demo.tsx — Restaurant Dashboard</span>
              </div>
              {/* Aspect-ratio frame */}
              <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
                <div className="absolute inset-0 grid place-items-center">
                  <Button size="lg" className="gap-2">
                    <Play className="h-5 w-5" />
                    Watch 60s product tour
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-primary font-bold text-2xl">99.8%</p>
              <p className="text-sm text-muted-foreground">HACCP compliance</p>
            </div>
            <div>
              <p className="text-primary font-bold text-2xl">15 hrs</p>
              <p className="text-sm text-muted-foreground">Saved per week</p>
            </div>
            <div>
              <p className="text-primary font-bold text-2xl">32%</p>
              <p className="text-sm text-muted-foreground">Waste reduction</p>
            </div>
            <div>
              <p className="text-primary font-bold text-2xl">5k+</p>
              <p className="text-sm text-muted-foreground">Restaurants</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoHero;

