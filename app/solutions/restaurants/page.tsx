import { Metadata } from 'next';
import {
  RestaurantSolutionsHero,
  RestaurantFeatureGrid,
  FlowingFeatures,
  SecondaryFeatures
} from '@/components/domain/industries/restaurants';

import { MarketingCTA } from '@/components/shared/layout';
import { FAQSection } from '@/components/shared/data-display';

export const metadata: Metadata = {
  title: 'Restaurant Solutions | OpsFlow - Restaurant Operations Management',
  description: 'Streamline kitchen execution, staff coordination, audits, and HACCP logging with OpsFlow. Built for full-service and casual dining restaurants.',
  keywords: 'restaurant operations, HACCP compliance, kitchen management, food safety, restaurant software',
  openGraph: {
    title: 'Restaurant Solutions | OpsFlow - Restaurant Operations Management',
    description: 'Streamline kitchen execution, staff coordination, audits, and HACCP logging with OpsFlow.',
    images: '/images/og/restaurant-solutions.png',
  },
};

/**
 * Restaurant Solutions Page - Production Implementation
 * 
 * Uses high-quality production components following SYSTEMATIC-PAGE-DEVELOPMENT-GUIDE.md:
 * - RestaurantHomeHero: Advanced hero with HACCP badges, dashboard preview, interactive features
 * - RestaurantSuccessMetrics: Animated marquee with real restaurant success stories
 * - RestaurantFeatureGrid: Professional feature grid with detailed content and CTAs
 * - FlowingFeatures: Interactive feature showcase with framer-motion animations
 * - RestaurantPlatformExplorer: Full platform exploration interface
 * - SecondaryFeatures: Additional feature presentations
 * - FAQSection: Restaurant-specific FAQ with analytics tracking
 * - MarketingCTA: Professional CTA section with conversion tracking
 */
export default function RestaurantSolutionsPage() {
  return (
    <>
      {/* Solutions Hero - DIFFERENTIATED from home page */}
      <RestaurantSolutionsHero 
        className="restaurant-solutions-hero"
      />
      
      {/* Feature Grid - Professional feature presentation */}
      <RestaurantFeatureGrid />
      
      {/* Interactive Features Showcase - Advanced animations and interactions */}
      <FlowingFeatures />
      
      {/* Removed RestaurantPlatformExplorer to avoid duplication with home page */}
      
      {/* Additional Features - Secondary feature presentations */}
      <SecondaryFeatures />
      
      {/* Restaurant-Specific FAQ */}
      <FAQSection 
        industry="restaurants"
        role="general"
        heading="Restaurant Operations FAQ"
        className="py-16 md:py-24"
      />
      
      {/* Final CTA - Professional conversion section */}
      <MarketingCTA
        variant="clerk"
        title="Ready to Transform Your Restaurant Operations?"
        description="Join thousands of restaurants using OpsFlow to streamline operations, ensure compliance, and boost profitability."
        primaryAction={{
          text: "Start Free Restaurant Demo",
          href: "/product/demo?industry=restaurants"
        }}
        secondaryAction={{
          text: "Talk to Restaurant Expert", 
          href: "/contact?speciality=restaurants"
        }}
        className="bg-gradient-to-br from-background to-background/80"
      />
    </>
  );
}