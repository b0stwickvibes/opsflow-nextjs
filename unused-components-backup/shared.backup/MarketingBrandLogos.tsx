import Image from 'next/image';

type LogoItem = { src: string; alt: string; href?: string };

interface Props {
  heading?: string;
  items: LogoItem[];
}

export default function MarketingBrandLogos({ heading, items }: Props) {
  return (
    <section className="py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6">
        {heading && (
          <p className="mb-6 text-center text-sm font-medium text-muted-foreground">{heading}</p>
        )}
        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
          {items.map((logo, i) => {
            const img = (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={48}
                sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 160px"
                className="mx-auto h-8 w-auto opacity-80 grayscale hover:opacity-100"
                priority={false}
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

