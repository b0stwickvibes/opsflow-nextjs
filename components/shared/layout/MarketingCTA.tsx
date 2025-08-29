'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface MarketingCTAProps {
  title: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

export function MarketingCTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  className = '',
  onPrimaryClick,
  onSecondaryClick,
}: MarketingCTAProps) {
  return (
    <section className={`py-12 ${className}`}>
      <Card className="bg-primary text-primary-foreground p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100"
            asChild
          >
            <Link href={primaryAction.href} onClick={onPrimaryClick}>
              {primaryAction.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          {secondaryAction && (
            <Button 
              variant="outline" 
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" 
              size="lg"
              asChild
            >
              <Link href={secondaryAction.href} onClick={onSecondaryClick}>
                {secondaryAction.text}
              </Link>
            </Button>
          )}
        </div>
      </Card>
    </section>
  );
}
