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
    about: 'bg-gradient-to-br from-slate-50 to-gray-100',
    contact: 'bg-gradient-to-br from-blue-50 to-indigo-100',
    careers: 'bg-gradient-to-br from-green-50 to-teal-100',
    team: 'bg-gradient-to-br from-purple-50 to-pink-100'
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