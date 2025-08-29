import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface HeroChip {
  text: string;
  variant?: 'default' | 'success';
}

interface FeatureItem {
  icon?: ReactNode;
  title: string;
  description?: string;
}

interface MarketingHeroSplitProps {
  eyebrow?: string;
  chips?: HeroChip[];
  title: string;
  description?: string;
  primary?: { href: string; text: string };
  secondary?: { href: string; text: string };
  features?: FeatureItem[];
}

export function MarketingHeroSplit({
  eyebrow,
  chips = [],
  title,
  description,
  primary,
  secondary,
  features = []
}: MarketingHeroSplitProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_minmax(0,_1px)_1fr] items-start">
          {/* Left: Copy */}
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {eyebrow && (
                <span className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {eyebrow}
                </span>
              )}
              {chips.map((c, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                    c.variant === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {c.text}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-sky-700 to-indigo-600 bg-clip-text text-transparent">
              {title}
            </h1>
            {description && (
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">{description}</p>
            )}
            {(primary || secondary) && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {primary && (
                  <Link
                    href={primary.href}
                    className="inline-flex items-center rounded-md bg-teal-700 px-5 py-3 text-sm font-medium text-white shadow hover:bg-teal-800"
                  >
                    {primary.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
                {secondary && (
                  <Link
                    href={secondary.href}
                    className="inline-flex items-center rounded-md border px-5 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    {secondary.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden md:block h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          {/* Right: Feature list */}
          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-sky-700 border border-sky-100">
                  {f.icon}
                </div>
                <div>
                  <div className="font-semibold">{f.title}</div>
                  {f.description && (
                    <div className="text-muted-foreground text-sm">{f.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

