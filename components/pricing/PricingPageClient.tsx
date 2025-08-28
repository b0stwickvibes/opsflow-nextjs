'use client';

import { useState } from 'react';
import PricingHero from './PricingHero';
import PricingCard from './PricingCard';
import FeatureComparison from './FeatureComparison';
import AddOnsSection from './AddOnsSection';
import PricingFAQ from './PricingFAQ';
import ROICalculator from './ROICalculator';
import { type PricingTier, type AddOn } from '@/lib/pricing/config';

interface PricingPageClientProps {
  tiers: PricingTier[];
  addOns: AddOn[];
  features: Array<{
    name: string;
    starter: boolean | string;
    professional: boolean | string;
    enterprise: boolean | string;
  }>;
  faq: Array<{ question: string; answer: string; category?: string }>;
}

export default function PricingPageClient({ tiers, addOns, features, faq }: PricingPageClientProps) {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleCtaClick = (tierId: string) => {
    // Route to signup/trial or open contact modal
    console.log(`CTA clicked for tier: ${tierId}`);
    
    if (tierId === 'enterprise') {
      // Open contact sales modal or route to contact page
      window.location.href = '/company/contact';
    } else {
      // Route to trial signup
      window.location.href = '/pricing'; // Would be actual signup/trial URL
    }
  };

  return (
    <>
      <PricingHero 
        isAnnual={isAnnual} 
        onBillingToggle={setIsAnnual} 
        annualDiscount={0.2} 
      />
      
      <section className="pb-16">
        <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <PricingCard 
              key={tier.id} 
              tier={tier} 
              isAnnual={isAnnual} 
              onCtaClick={handleCtaClick} 
            />
          ))}
        </div>
      </section>
      
      <FeatureComparison features={features} />
      <ROICalculator />
      <AddOnsSection addOns={addOns} isAnnual={isAnnual} />
      <PricingFAQ faqItems={faq} />
    </>
  );
}