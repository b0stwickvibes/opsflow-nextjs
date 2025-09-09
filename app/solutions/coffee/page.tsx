import { Metadata } from 'next';

// Heroes
import { WorkflowHero } from '@/templates/shadcn-components/processed/heroes';
// Features
import { FeatureBento, FeatureTimeline } from '@/templates/shadcn-components/processed/features';
// Stats
import { KPIShowcase } from '@/templates/shadcn-components/processed/stats';
// CTAs
import { CallToAction } from '@/templates/shadcn-components/processed/ctas';
// Shared
import { FAQSection } from '@/components/shared/data-display';

export const metadata: Metadata = {
  title: 'Coffee Shop Solutions | OpsFlow - Coffee Operations Management',
  description: 'Optimize barista workflows, maintain quality consistency, and master peak-hour operations with OpsFlow for coffee shops.',
  keywords: 'coffee shop operations, barista workflow, quality control, queue management, coffee POS integrations',
  openGraph: {
    title: 'Coffee Shop Solutions | OpsFlow - Coffee Operations Management',
    description: 'Optimize barista workflows, maintain quality, and master the morning rush.',
    images: '/images/og/coffee-solutions.png',
  },
};

/**
 * Coffee Solutions Page - Production Implementation
 *
 * Diversity vs. Restaurant (Clerk/Stripe-grade differentiation):
 * - Hero: WorkflowHero (café variant) instead of a custom restaurant hero
 * - Features: Dashboard-style FeatureBento + industry timeline (rush-hour focus)
 * - Stats: KPIShowcase with coffee-specific metrics
 * - FAQ: coffee-focused
 * - CTA: Demo-style with coffee industry theme
 */
export default function CoffeeSolutionsPage() {
  return (
    <>
      {/* Industry-specific Hero (café) */}
      <WorkflowHero industry="cafe" role="manager" variant="default" />

      {/* Dashboard Bento for operations preview */}
      <FeatureBento className="pt-8" variant="dashboard" />

      {/* Implementation timeline adapted for coffee (morning rush narrative) */}
      <FeatureTimeline className="pt-0" variant="horizontal" showProgress />

      {/* Coffee industry KPIs */}
      <KPIShowcase industry="coffee" />

      {/* Coffee-specific FAQ */}
      <FAQSection 
        industry="coffee"
        role="general"
        heading="Coffee Shop Operations FAQ"
        className="py-16 md:py-24"
      />

      {/* CTA tuned for demo flow */}
      <CallToAction 
        industry="coffee"
        variant="demo"
        customTitle="Ready to Master Your Morning Rush?"
        customSubtitle="Join leading coffee shops optimizing consistency and speed with OpsFlow"
      />
    </>
  );
}
