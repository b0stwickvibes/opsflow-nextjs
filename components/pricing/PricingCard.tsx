'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';
import { trackPricingEvent, type PricingTier } from '@/lib/pricing/config';
// Temporarily comment out analytics import to fix build
// import { useAnalytics } from '@/lib/analytics/RestaurantAnalytics';
import { PricingCardSkeleton } from '@/components/shared/feedback/LoadingSkeletons';

interface PricingCardProps {
  tier: PricingTier;
  isAnnual: boolean;
  onCtaClick: (tierId: string) => void;
  experimentId?: string;
  isLoading?: boolean;
}

export default function PricingCard({ tier, isAnnual, onCtaClick, experimentId, isLoading = false }: PricingCardProps) {
  const [isClicked, setIsClicked] = useState(false);
  // Temporarily disabled analytics to fix build
  // const { trackPricing } = useAnalytics();
  const trackPricing = (action: string, data: any) => console.log('Track pricing:', action, data);
  
  const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
  const monthlyEquivalent = isAnnual ? Math.round(tier.annualPrice / 12) : tier.monthlyPrice;

  const handleCtaClick = async () => {
    if (isClicked) return; // Prevent double-clicks
    
    setIsClicked(true);
    
    try {
      // Analytics tracking
      trackPricing('cta_click', {
        tier: tier.id,
        billingPeriod: isAnnual ? 'annual' : 'monthly',
        price,
        popular: tier.popular,
        experiment_id: experimentId
      });

      // Legacy tracking for backwards compatibility
      trackPricingEvent({
        event: 'cta_click',
        tier: tier.id,
        billingPeriod: isAnnual ? 'annual' : 'monthly',
        experimentId,
        metadata: { price, popular: tier.popular }
      });
      
      await onCtaClick(tier.id);
    } catch (error) {
      console.error('CTA click failed:', error);
    } finally {
      // Reset after delay to prevent spam
      setTimeout(() => setIsClicked(false), 1000);
    }
  };

  const handleCardClick = () => {
    trackPricing('tier_click', {
      tier: tier.id,
      billingPeriod: isAnnual ? 'annual' : 'monthly',
      experiment_id: experimentId
    });
  };

  if (isLoading) {
    return <PricingCardSkeleton />;
  }

  return (
    <Card
      className={`relative transition-all duration-300 hover:shadow-lg cursor-pointer ${
        tier.popular ? 'ring-2 ring-primary scale-105' : ''
      }`}
      onClick={handleCardClick}
      role="article"
      aria-labelledby={`tier-${tier.id}-title`}
      aria-describedby={`tier-${tier.id}-description`}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="px-3 py-1">Most Popular</Badge>
        </div>
      )}

      <CardHeader className="text-center pb-6">
        <CardTitle id={`tier-${tier.id}-title`} className="text-xl">
          {tier.name}
        </CardTitle>
        <CardDescription id={`tier-${tier.id}-description`} className="text-base">
          {tier.description}
        </CardDescription>

        <div className="pt-4">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold" aria-label={`${price} dollars`}>${price}</span>
            <span className="text-muted-foreground">/{isAnnual ? 'year' : 'month'}</span>
          </div>
          {isAnnual && (
            <p className="text-sm text-muted-foreground mt-1">${monthlyEquivalent}/month billed annually</p>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3" role="list" aria-label={`${tier.name} features`}>
          {tier.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3" role="listitem">
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
          {tier.limitations.map((limitation, i) => (
            <div key={i} className="flex items-start gap-3" role="listitem">
              <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">{limitation}</span>
            </div>
          ))}
        </div>

        <Button 
          className="w-full" 
          variant={tier.popular ? 'default' : 'outline'} 
          onClick={handleCtaClick}
          disabled={isClicked}
        >
          {isClicked ? 'Processing...' : tier.cta}
        </Button>
      </CardContent>
    </Card>
  );
}