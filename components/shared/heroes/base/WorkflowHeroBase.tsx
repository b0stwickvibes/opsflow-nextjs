"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type WorkflowHeroFeature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export type WorkflowHeroContent = {
  title: string;
  subtitle: string;
  features: WorkflowHeroFeature[];
  cta: string;
  color?: 'orange' | 'purple' | 'amber';
};

export type WorkflowHeroBaseProps = {
  content: WorkflowHeroContent;
  energy?: 'subtle' | 'balanced' | 'bold';
  canClick?: boolean;
  onCtaClick?: () => void;
};

export function WorkflowHeroBase({ content, energy = 'balanced', canClick = true, onCtaClick }: WorkflowHeroBaseProps) {
  // Normalize to brand primary to keep a consistent accessible palette
  const colorClass = 'text-primary';
  const buttonClass = 'bg-primary hover:bg-primary/90';

  const sectionBg =
    energy === 'subtle'
      ? 'bg-gradient-to-br from-background to-muted/10'
      : energy === 'bold'
      ? 'bg-gradient-to-br from-background to-muted/30'
      : 'bg-gradient-to-br from-background to-muted/20';

  return (
    <section className={cn('relative overflow-hidden py-20', sectionBg)}>
      <div className="container">
        <div className="mx-auto max-w-4xl text-center space-y-12">
          <div className="space-y-6">
            <div className={cn('inline-flex items-center gap-2 px-3 py-1 rounded-full border', colorClass)}>
              <span className="text-sm font-medium">Smart Workflows</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {content.title}
            </h1>

            <p className="text-muted-foreground text-xl font-medium lg:text-2xl max-w-2xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {content.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="space-y-4 text-center p-6 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="flex justify-center">
                    <Icon className={cn('size-8', colorClass)} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{feature.title}</h2>
                    <p className="text-muted-foreground mt-2 text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <Button
              size="lg"
              className={cn('shadow-lg hover:shadow-xl transition-all duration-200', buttonClass, !canClick && 'opacity-75 cursor-not-allowed')}
              asChild
              disabled={!canClick}
            >
              <a href="#" aria-label={content.cta} onClick={(e) => { if (!canClick) e.preventDefault(); else onCtaClick?.(); }}>
                <span className="flex items-center gap-2">
                  {content.cta}
                  <ArrowRight className="size-4" />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

