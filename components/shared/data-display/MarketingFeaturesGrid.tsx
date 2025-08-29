import type { ReactNode } from 'react';

export interface FeatureItem {
  title: string;
  description?: string;
  icon?: ReactNode;
}

export interface MarketingFeaturesGridProps {
  heading?: string;
  subheading?: string;
  items: FeatureItem[];
}

/**
 * MarketingFeaturesGrid
 * Purpose: Generic features grid for marketing pages.
 * Used in: Homepage, generic product/solution pages
 */
export function MarketingFeaturesGrid({ heading, subheading, items }: MarketingFeaturesGridProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {(heading || subheading) && (
          <div className="mb-10 text-center">
            {heading && <h2 className="text-2xl font-semibold md:text-3xl">{heading}</h2>}
            {subheading && (
              <p className="mt-2 text-muted-foreground">{subheading}</p>
            )}
          </div>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <div key={i} className="rounded-lg border bg-background p-6 shadow-sm">
              {f.icon && <div className="mb-4 text-primary">{f.icon}</div>}
              <h3 className="text-lg font-semibold">{f.title}</h3>
              {f.description && (
                <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
