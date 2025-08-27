'use client';

import { useEffect, ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

interface RestaurantHeroProps {
  title: string;
  description?: string;
  badge?: string;
  children?: ReactNode;
  className?: string;
  restaurantType?: 'restaurant' | 'bar' | 'coffee-shop' | 'hotel';
}

export function RestaurantHero({
  title,
  description,
  badge,
  children,
  className = '',
  restaurantType = 'restaurant'
}: RestaurantHeroProps) {
  // Register component layout
  useEffect(() => {
    registerComponentLayout('RestaurantHero', 'restaurant');
  }, []);

  const backgroundStyles = {
    restaurant: 'bg-gradient-to-br from-green-50 to-emerald-100',
    bar: 'bg-gradient-to-br from-purple-50 to-violet-100',
    'coffee-shop': 'bg-gradient-to-br from-amber-50 to-orange-100',
    hotel: 'bg-gradient-to-br from-blue-50 to-cyan-100'
  };

  return (
    <section className={`py-16 md:py-20 ${backgroundStyles[restaurantType]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {badge && (
            <Badge variant="secondary" className="inline-flex mb-4">
              {badge}
            </Badge>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          
          {children && (
            <div className="pt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}