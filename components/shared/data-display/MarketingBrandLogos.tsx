export interface LogoItem {
  src: string;
  alt: string;
  href?: string;
}

export interface MarketingBrandLogosProps {
  heading?: string;
  items: LogoItem[];
}

/**
 * MarketingBrandLogos
 * Purpose: Simple logo grid for partner/brand trust.
 * Used in: Marketing pages (home, product, about)
 */
export function MarketingBrandLogos({ heading, items }: MarketingBrandLogosProps) {
  return (
    <section className="py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6">
        {heading && (
          <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
            {heading}
          </p>
        )}
        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
          {items.map((logo, i) => {
            const img = (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                className="mx-auto h-8 w-auto opacity-80 grayscale hover:opacity-100"
              />
            );
            return (
              <div key={i} className="flex items-center justify-center">
                {logo.href ? (
                  <a href={logo.href} target="_blank" rel="noreferrer" aria-label={logo.alt}>
                    {img}
                  </a>
                ) : (
                  img
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
