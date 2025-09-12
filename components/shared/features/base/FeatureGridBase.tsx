"use client";

import { cn } from "@/lib/utils";

export type FeatureGridItem = {
  title: string;
  description: string;
  icon: React.ElementType;
  highlight?: 'critical' | 'high' | 'standard';
};

export type FeatureGridBaseProps = {
  title?: string;
  subtitle?: string;
  items: FeatureGridItem[];
  energy?: 'subtle' | 'balanced' | 'bold';
  className?: string;
};

export function FeatureGridBase({ title, subtitle, items, energy = 'balanced', className }: FeatureGridBaseProps) {
  const sectionBg =
    energy === 'subtle'
      ? 'bg-transparent'
      : energy === 'bold'
      ? 'bg-gradient-to-br from-muted/40 to-muted/20'
      : 'bg-gradient-to-br from-muted/30 to-muted/10';

  const getBorder = (h?: FeatureGridItem['highlight']) =>
    h === 'critical' ? 'border-destructive/40' : h === 'high' ? 'border-primary/40' : 'border-border';

  return (
    <section className={cn('py-24', sectionBg, className)}>
      <div className="container">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">{title}</h2>}
            {subtitle && <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={cn('rounded-xl border p-6 transition hover:shadow-md', getBorder(item.highlight))}>
                <div className="mb-4 flex items-center justify-center">
                  <Icon className="size-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

