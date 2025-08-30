"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';

const RestaurantHomeHero = dynamic<any>(() => import('@/components/domain/restaurant').then(m => m.RestaurantHomeHero), { ssr: false });
const RestaurantPlatformExplorer = dynamic<any>(() => import('@/components/domain/restaurant').then(m => m.RestaurantPlatformExplorer), { ssr: false });
const MarketingRollingBlocks = dynamic<any>(() => import('@/components/domain/marketing').then(m => m.MarketingRollingBlocks), { ssr: false });

function SectionLoading({ message = 'Loading section...' }: { message?: string }) {
  return (
    <div className="py-16 flex justify-center text-sm text-muted-foreground">{message}</div>
  );
}

export default function HomePage() {
  const onNavigate = (page: string) => {
    if (page.startsWith('/')) window.location.href = page; else window.location.href = `/${page}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<SectionLoading message="Loading hero..." /> }>
        <RestaurantHomeHero onNavigate={onNavigate} />
      </Suspense>
      <Suspense fallback={<SectionLoading message="Loading platform explorer..." /> }>
        <RestaurantPlatformExplorer onNavigate={onNavigate} />
      </Suspense>
      <Suspense fallback={<SectionLoading message="Loading features..." /> }>
        <MarketingRollingBlocks onNavigate={onNavigate} />
      </Suspense>
      <div className="container mx-auto px-4 sm:px-6 py-16 text-center">
        <h3 className="text-2xl font-semibold mb-2">Ready to get started?</h3>
        <p className="text-muted-foreground mb-6">Join restaurants using OpsFlow AI to streamline operations.</p>
        <Button onClick={() => onNavigate('pricing')}>Start Free Trial</Button>
      </div>
    </div>
  );
}
