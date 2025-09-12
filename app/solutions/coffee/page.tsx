import { Metadata } from 'next';

// Heroes
import { WorkflowHero } from '@/components/domain/industries/coffee/heroes/WorkflowHero';
// Features
import { FeatureBento, FeatureTimeline } from '@/components/domain/product/features';
// Stats
import { KPIShowcase } from '@/components/shared/data-display';
// CTAs
import { CallToAction } from '@/components/shared/layout';
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
      <WorkflowHero />

      {/* Dashboard Bento for operations preview */}
      <FeatureBento className="pt-8" variant="dashboard" />

      {/* Implementation timeline adapted for coffee (morning rush narrative) */}
      <FeatureTimeline className="pt-0" variant="horizontal" showProgress />

      {/* Coffee industry KPIs */}
      <KPIShowcase industry="coffee" variant="outline" energy="balanced" leadKey="Compliance" />

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
