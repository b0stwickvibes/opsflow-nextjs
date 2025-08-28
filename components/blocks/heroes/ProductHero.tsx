'use client';

import { useEffect, ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

interface ActionButton {
  text: string;
  href: string;
  onClick?: () => void;
}

interface ProductHeroProps {
  title: string;
  description?: string;
  subtitle?: string;
  badge?: string;
  children?: ReactNode;
  className?: string;
  productIcon?: ReactNode;
  primaryAction?: ActionButton;
  secondaryAction?: ActionButton;
}

const ProductHero = ({
  title,
  description,
  subtitle,
  badge,
  children,
  className = '',
  productIcon,
  primaryAction = { text: "Try Demo", href: "/product/demo" },
  secondaryAction = { text: "View Features", href: "/product/features" }
}: ProductHeroProps) => {
  useEffect(() => {
    registerComponentLayout('ProductHero', 'product');
  }, []);

  return (
    <section className={`relative py-16 md:py-20 overflow-hidden ${className}`}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-100/40 blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {productIcon && (
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-2xl shadow-lg">
                {productIcon}
              </div>
            </div>
          )}
          
          {badge && (
            <Badge variant="outline" className="mb-4">
              {badge}
            </Badge>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          
          {(description ?? subtitle) && (<p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{description ?? subtitle}</p>)}
          
          {children || (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              {primaryAction && (
                <Button 
                  size="lg" 
                  className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={primaryAction.onClick}
                  asChild
                >
                  <Link href={primaryAction.href}>
                    <Play className="h-5 w-5" />
                    {primaryAction.text}
                  </Link>
                </Button>
              )}
              
              {secondaryAction && (
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                  onClick={secondaryAction.onClick}
                  asChild
                >
                  <Link href={secondaryAction.href}>
                    <ArrowRight className="h-5 w-5" />
                    {secondaryAction.text}
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { ProductHero };