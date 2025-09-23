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
    h === 'critical' ? 'border-primary/40' : h === 'high' ? 'border-primary/40' : 'border-border';

  return (
    <section className={cn('py-24', sectionBg, className)}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{title}</h2>}
            {subtitle && <p className="enterprise-body max-w-2xl mx-auto text-muted-foreground">{subtitle}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title} 
                className={cn('clerk-glass-card p-6 hover-scale-103 transition-all duration-300 motion-fade-in-up-320', getBorder(item.highlight))}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

