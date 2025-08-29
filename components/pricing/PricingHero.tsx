'use client';

import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

interface PricingHeroProps {
  isAnnual: boolean;
  onBillingToggle: (isAnnual: boolean) => void;
  annualDiscount: number;
}

export default function PricingHero({ isAnnual, onBillingToggle, annualDiscount }: PricingHeroProps) {
  return (
    <section className="py-20 lg:py-32">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your restaurant operations. All plans include a 14-day free trial with no credit card required.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm transition-colors ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`} id="billing-monthly-label">
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={onBillingToggle}
              aria-labelledby="billing-monthly-label billing-annual-label"
              aria-describedby="billing-discount-info"
            />
            <span className={`text-sm transition-colors ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`} id="billing-annual-label">
              Annual
            </span>
            <Badge variant="secondary" className="ml-2" id="billing-discount-info">
              Save {Math.round(annualDiscount * 100)}%
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">Annual billing shows the total per year; monthly shows per month.</p>
        </div>
      </div>
    </section>
  );
}
