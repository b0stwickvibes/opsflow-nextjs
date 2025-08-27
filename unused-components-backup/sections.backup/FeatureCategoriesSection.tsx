'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { 
  FEATURE_CATEGORIES, 
  type FeatureCategory 
} from '@/lib/data/features';
import { 
  trackEvent,
  trackFeatureUsage,
  filterByPlan,
  loadIcon 
} from '@/lib/utils/features';
import { FeatureCategorySkeleton } from '@/components/ui/error-boundary';

interface FeatureCategoriesSectionProps {
  userPlan?: 'starter' | 'professional' | 'enterprise';
  userId?: string;
}

export default function FeatureCategoriesSection({ 
  userPlan = 'starter',
  userId 
}: FeatureCategoriesSectionProps) {
  const [categories, setCategories] = useState<FeatureCategory[]>([]);
  const [icons, setIcons] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  // Load data and icons
  useEffect(() => {
    async function loadData() {
      try {
        // Filter features by user plan (monetization)
        const filteredCategories = filterByPlan(FEATURE_CATEGORIES, userPlan);
        
        // Load all icons asynchronously for performance
        const iconPromises = filteredCategories.map(async (category) => ({
          id: category.id,
          icon: await loadIcon(category.icon)
        }));
        
        const iconResults = await Promise.all(iconPromises);
        const iconMap = iconResults.reduce((acc, { id, icon }) => {
          acc[id] = icon;
          return acc;
        }, {} as Record<string, any>);
        
        setCategories(filteredCategories);
        setIcons(iconMap);
        setLoading(false);

        // Track section view
        trackEvent('FEATURE_VIEW', { 
          section: 'categories',
          plan: userPlan,
          visible_features: filteredCategories.length
        });
      } catch (error) {
        console.error('Failed to load feature categories:', error);
        setLoading(false);
        // Could trigger error boundary here if needed
      }
    }

    loadData();
  }, [userPlan]);

  // Track individual feature interactions
  const handleFeatureHover = (categoryId: string) => {
    trackFeatureUsage(categoryId, userId);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map(i => <FeatureCategorySkeleton key={i} />)}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, index) => {
        const IconComponent = icons[category.id];
        
        return (
          <Card 
            key={category.id}
            className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 shadow-md cursor-pointer" 
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => handleFeatureHover(category.id)}
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  {IconComponent ? (
                    <IconComponent className="h-6 w-6 text-primary" />
                  ) : (
                    <div className="h-6 w-6 bg-primary rounded animate-pulse" />
                  )}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    {category.title}
                    {category.planRequirement && userPlan !== category.planRequirement && (
                      <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full font-medium">
                        Pro
                      </span>
                    )}
                  </CardTitle>
                </div>
              </div>
              <CardDescription className="text-base leading-relaxed">
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}