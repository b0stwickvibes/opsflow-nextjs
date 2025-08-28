'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { trackPricingEvent, type AddOn } from '@/lib/pricing/config';

interface AddOnsSectionProps {
  addOns: AddOn[];
  isAnnual: boolean;
  experimentId?: string;
}

export default function AddOnsSection({ addOns, isAnnual, experimentId }: AddOnsSectionProps) {
  const handleAddOnClick = (addOn: AddOn) => {
    trackPricingEvent({
      event: 'tier_click',
      tier: addOn.id,
      billingPeriod: isAnnual ? 'annual' : 'monthly',
      experimentId,
      metadata: { category: addOn.category, oneTime: addOn.oneTime }
    });
  };

  return (
    <section className="py-16" aria-labelledby="addons-heading">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="addons-heading" className="text-3xl font-bold mb-4">Restaurant Add-Ons</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enhance your restaurant operations plan with additional features and specialized support options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOns.map((addOn) => (
            <Card
              key={addOn.id}
              className="text-center cursor-pointer transition-all duration-200 hover:shadow-lg"
              onClick={() => handleAddOnClick(addOn)}
              role="button"
              tabIndex={0}
              aria-label={`${addOn.name} add-on`}
            >
              <CardHeader>
                <CardTitle className="text-lg">{addOn.name}</CardTitle>
                <CardDescription>{addOn.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {addOn.oneTime ? (
                  <div className="text-2xl font-bold" aria-label={`${addOn.annualPrice} dollars one time`}>
                    ${addOn.annualPrice}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">
                      ${isAnnual ? addOn.annualPrice : addOn.monthlyPrice}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      /{isAnnual ? 'year' : 'month'}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}