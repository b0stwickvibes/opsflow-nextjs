'use client';

import { useState, useEffect, useCallback } from 'react';
import { Check, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

// Restaurant pricing plans
const RESTAURANT_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Perfect for small restaurants',
    monthlyPrice: 49,
    annualPrice: 490,
    popular: false,
    features: [
      'Up to 5 team members',
      'Basic temperature monitoring',
      'Mobile checklist app',
      'Email support',
      'Basic reporting'
    ],
    limitations: [
      'Limited integrations',
      'No advanced analytics'
    ],
    cta: 'Start Free Trial',
    ctaVariant: 'outline' as const
  },
  {
    id: 'professional',
    name: 'Professional', 
    subtitle: 'Best for growing restaurants',
    monthlyPrice: 149,
    annualPrice: 1490,
    popular: true,
    features: [
      'Up to 25 team members',
      'Advanced temperature sensors',
      'HACCP compliance tools',
      'Priority support',
      'Advanced analytics',
      'POS integrations',
      'Custom reports'
    ],
    limitations: [],
    cta: 'Start Free Trial',
    ctaVariant: 'default' as const
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'For restaurant groups',
    monthlyPrice: 299,
    annualPrice: 2990,
    popular: false,
    features: [
      'Unlimited team members',
      'Multi-location management',
      'Custom integrations',
      'Dedicated support',
      'White-label options',
      'Advanced compliance',
      'Custom training'
    ],
    limitations: [],
    cta: 'Contact Sales',
    ctaVariant: 'outline' as const
  }
];

// Utility functions
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(amount);
}

function calculateAnnualSavings(monthlyPrice: number, annualPrice: number) {
  const yearlyMonthly = monthlyPrice * 12;
  const savings = yearlyMonthly - annualPrice;
  const percentage = Math.round((savings / yearlyMonthly) * 100);
  return { amount: savings, percentage };
}

interface BillingToggleProps {
  isAnnual: boolean;
  onToggle: (isAnnual: boolean) => void;
}

function BillingToggle({ isAnnual, onToggle }: BillingToggleProps) {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center space-x-4 bg-muted rounded-lg p-1">
        <button
          onClick={() => onToggle(false)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            !isAnnual 
              ? 'bg-background text-foreground shadow-sm' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => onToggle(true)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            isAnnual 
              ? 'bg-background text-foreground shadow-sm' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Annual
          <Badge variant="secondary" className="ml-2">Save up to 20%</Badge>
        </button>
      </div>
    </div>
  );
}

interface PricingCardProps {
  plan: typeof RESTAURANT_PLANS[0];
  isAnnual: boolean;
}

function PricingCard({ plan, isAnnual }: PricingCardProps) {
  const savings = calculateAnnualSavings(plan.monthlyPrice, plan.annualPrice);
  const displayPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const priceUnit = isAnnual ? '/year' : '/month';

  const handleCTAClick = useCallback(() => {
    // Simple analytics tracking - can be enhanced later
    console.log(`CTA clicked: ${plan.id} - ${plan.cta}`);
  }, [plan.id, plan.cta]);

  return (
    <Card 
      className={`relative transition-all duration-200 hover:shadow-lg ${
        plan.popular ? 'border-primary shadow-lg scale-105' : ''
      }`}
    >
      {plan.popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
        
        <div className="mt-4">
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold">{formatCurrency(displayPrice)}</span>
            <span className="text-sm text-muted-foreground ml-1">{priceUnit}</span>
          </div>
          {isAnnual && savings.amount > 0 && (
            <p className="text-sm text-green-600 mt-1">
              Save {formatCurrency(savings.amount)} ({savings.percentage}%) annually
            </p>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Features */}
        <div>
          <h4 className="font-medium mb-3">Includes:</h4>
          <ul className="space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Limitations */}
        {plan.limitations.length > 0 && (
          <div>
            <h4 className="font-medium mb-3">Limitations:</h4>
            <ul className="space-y-2">
              {plan.limitations.map((limitation, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <X className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* CTA */}
        <Button 
          variant={plan.ctaVariant} 
          className="w-full" 
          size="lg"
          onClick={handleCTAClick}
        >
          {plan.cta}
        </Button>
      </CardContent>
    </Card>
  );
}

export function RestaurantPricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Register with layout validator
  useEffect(() => {
    registerComponentLayout('RestaurantPricingTable', 'restaurant');
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Restaurant Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select the perfect plan for your restaurant operations. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Billing Toggle */}
        <BillingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />

        {/* Pricing Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {RESTAURANT_PLANS.map((plan) => (
            <PricingCard 
              key={plan.id} 
              plan={plan} 
              isAnnual={isAnnual} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}