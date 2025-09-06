'use client';

import { useEffect, ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

interface CompanyHeroProps {
  title: string;
  description?: string;
  badge?: string;
  children?: ReactNode;
  className?: string;
  variant?: 'about' | 'contact' | 'careers' | 'team';
}

export function CompanyHero({
  title,
  description,
  badge,
  children,
  className = '',
  variant = 'about'
}: CompanyHeroProps) {
  // Register component layout
  useEffect(() => {
    registerComponentLayout('CompanyHero', 'site');
  }, []);

  const backgroundStyles = {
    about: 'bg-gradient-to-br from-base-50 to-base-100',
    contact: 'bg-gradient-to-br from-primary-50 to-primary-100',
    careers: 'bg-gradient-to-br from-secondary-50 to-secondary-100',
    team: 'bg-gradient-to-br from-primary-50 to-secondary-50'
  };

  return (
    <section className={`py-16 md:py-20 ${backgroundStyles[variant]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {badge && (
            <Badge variant="secondary" className="inline-flex mb-4">
              {badge}
            </Badge>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
