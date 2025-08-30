"use client";

import ImageFrame from "@/components/shared/data-display/ImageFrame";

interface SplitFeatureProps {
  title: string;
  subtitle: string;
  bullets: string[];
  image: { src: string; alt: string; caption?: string };
  reverse?: boolean;
  captureId?: string;
}

export default function SplitFeature({ title, subtitle, bullets, image, reverse, captureId }: SplitFeatureProps) {
  return (
    <section className="py-12" data-capture={captureId}
    >
      <div className="container mx-auto px-4 sm:px-6 grid gap-8 md:grid-cols-2 items-center">
        <div className={reverse ? "order-2" : ""}>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 md:text-lg">{subtitle}</p>
          <ul className="space-y-2 text-sm md:text-base">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={reverse ? "order-1" : ""}>
          <ImageFrame src={image.src} alt={image.alt} caption={image.caption} />
        </div>
      </div>
    </section>
  );
}
