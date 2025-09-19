import { Metadata } from 'next';

// Heroes
import { WorkflowHero } from '@/components/domain/industries/coffee/heroes/WorkflowHero';

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
 * Coffee Solutions Page - Simplified Implementation
 *
 * Stripped down to only the hero component for clean focus
 */
export default function CoffeeSolutionsPage() {
  return (
    <>
      {/* Industry-specific Hero (café) */}
      <WorkflowHero />
    </>
  );
}
