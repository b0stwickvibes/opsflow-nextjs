"use client";

import React from 'react';
import { RestaurantHero } from './RestaurantHero';
import { RestaurantKPIsComponent } from './RestaurantKPIs';
import { RestaurantWorkflows } from './RestaurantWorkflows';
import { AdvancedOperations } from '@/components/shared/layout';
import { 
  useFeatureFlag, 
  usePageView, 
  usePermission,
  useRestaurantPageConfig
} from '@/lib/hooks/restaurant-pages';
import type { RestaurantPageProps } from '@/types/restaurant-pages';

export function RestaurantPageTemplate({ 
  content, 
  industry, 
  role 
}: RestaurantPageProps) {
  // Feature flags for A/B testing
  const heroVariant = useFeatureFlag(`${industry}HeroVariant`, 'default');
  const showAdvancedOperations = useFeatureFlag(`${industry}AdvancedOps`, true);
  
  // Analytics tracking
  usePageView(`${industry}_${role}_page`, { 
    variant: heroVariant,
    industry,
    role 
  });
  
  // Permission checking for enterprise features
  const canViewAdvanced = usePermission('ADVANCED_FEATURES_VIEW');

  return (
    <main className="min-h-screen">
      {/* Restaurant Hero Section */}
      <RestaurantHero 
        content={content.hero} 
        industry={industry}
        variant={heroVariant}
      />
      
      {/* Restaurant KPIs Section */}
      <RestaurantKPIsComponent 
        metrics={content.kpis}
      />
      
      {/* Restaurant Workflows Section */}
      {content.workflows && (
        <RestaurantWorkflows 
          workflows={content.workflows}
        />
      )}
      
      {/* Advanced Operations Section (Permission-based) */}
      {canViewAdvanced && showAdvancedOperations && (
        <AdvancedOperations 
          className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
        />
      )}
      
      {/* Additional sections can be added here */}
      {/* Social proof, testimonials, CTAs, etc. */}
      
    </main>
  );
}
