"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Package, Wine, GraduationCap, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackInteraction } from '@/lib/analytics';

interface RollingBlock {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaAction: string;
  icon: React.ComponentType<any>;
  accentColor: string;
  bgGradient: string;
  borderColor: string;
}

interface MarketingRollingBlocksProps { onNavigate?: (page: string) => void; className?: string; }

const rollingBlocks: RollingBlock[] = [
  { id: 'inventory', title: 'Inventory Management', subtitle: 'Smarter Stock Control', description: 'Automated ordering, waste reduction, and supplier integration.', features: ['Auto-ordering with supplier sync','Waste tracking + reporting','Real-time cost optimization','Stock-level alerts'], ctaText: 'Learn More', ctaAction: 'features', icon: Package, accentColor: 'text-blue-600', bgGradient: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20', borderColor: 'border-blue-200 dark:border-blue-800' },
  { id: 'bar', title: 'Bar & Beverage Management', subtitle: 'Elevate Your Bar Program', description: 'Track cocktails, bottle service, and pour costs with menu management tools.', features: ['Seasonal & signature cocktail tracking','Bottle service workflows','Pour cost analytics','Recipe/spec database'], ctaText: 'Learn More', ctaAction: 'features', icon: Wine, accentColor: 'text-purple-600', bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20', borderColor: 'border-purple-200 dark:border-purple-800' },
  { id: 'training', title: 'Staff Training & Compliance', subtitle: 'Empower Your Team', description: 'Onboard, train, and monitor performance with built-in role-based tools.', features: ['Role-based onboarding checklists','Digital training modules','Progress dashboards','Integrated service standards'], ctaText: 'Learn More', ctaAction: 'features', icon: GraduationCap, accentColor: 'text-green-600', bgGradient: 'from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20', borderColor: 'border-green-200 dark:border-green-800' },
  { id: 'guest', title: 'Guest Experience & Service Flow', subtitle: 'Hospitality First', description: 'Enhance the guest journey with smarter FOH tools.', features: ['Reservations + guest notes','VIP table tracking','Upselling prompts','Service timing benchmarks'], ctaText: 'Learn More', ctaAction: 'features', icon: Users, accentColor: 'text-orange-600', bgGradient: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20', borderColor: 'border-orange-200 dark:border-orange-800' },
];

export function MarketingRollingBlocks({ onNavigate, className }: MarketingRollingBlocksProps) {
  const [visibleBlocks, setVisibleBlocks] = useState<Set<string>>(new Set());
  const [activeBlock, setActiveBlock] = useState<string | null>(null);
  const blockRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    rollingBlocks.forEach((block) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleBlocks((prev) => new Set([...prev, block.id]));
            const rect = entry.boundingClientRect;
            const viewportCenter = window.innerHeight / 2;
            const elementCenter = rect.top + rect.height / 2;
            if (Math.abs(elementCenter - viewportCenter) < rect.height / 2) setActiveBlock(block.id);
          }
        },
        { threshold: [0.1, 0.5, 0.9], rootMargin: '-10% 0px' }
      );
      const el = blockRefs.current[block.id];
      if (el) { observer.observe(el); observers.push(observer); }
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleCTAClick = (block: RollingBlock) => {
    trackInteraction('cta_click', { block: block.id, title: block.title, action: block.ctaAction });
    onNavigate?.(block.ctaAction);
  };

  return (
    <section className={cn('relative bg-background', className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="relative">
        {rollingBlocks.map((block, index) => {
          const Icon = block.icon;
          const isVisible = visibleBlocks.has(block.id);
          const isActive = activeBlock === block.id;
          const isLast = index === rollingBlocks.length - 1;
          return (
            <div key={block.id} ref={(el) => { blockRefs.current[block.id] = el; }} className={cn('min-h-screen flex items-center py-24', !isLast && 'border-b border-border/20')}>
              <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className={cn('space-y-8 transition-all duration-1000 ease-out', isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12')}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className={cn('p-3 rounded-xl border transition-all duration-300', isActive ? `bg-gradient-to-br ${block.bgGradient} ${block.borderColor} shadow-lg` : 'bg-muted border-border')}>
                          <Icon className={cn('h-8 w-8 transition-colors duration-300', isActive ? block.accentColor : 'text-muted-foreground')} />
                        </div>
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-none">{block.title}</h2>
                          <p className={cn('text-lg font-medium transition-colors duration-300', isActive ? block.accentColor : 'text-muted-foreground')}>{block.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">{block.description}</p>
                    </div>
                    <div className="space-y-4">
                      {block.features.map((feature, i) => (
                        <div key={i} className={cn('flex items-center gap-4 transition-all duration-500', isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4')} style={{ transitionDelay: `${(i + 1) * 100}ms` }}>
                          <div className={cn('flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300', isActive ? `bg-gradient-to-br ${block.bgGradient}` : 'bg-muted')}>
                            <CheckCircle className={cn('w-4 h-4 transition-colors duration-300', isActive ? block.accentColor : 'text-muted-foreground')} />
                          </div>
                          <span className="text-base font-medium text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className={cn('transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
                      <Button onClick={() => handleCTAClick(block)} variant="outline" size="lg" className={cn('group px-8 py-3 transition-all duration-300 hover:shadow-lg', isActive ? `${block.borderColor} hover:bg-gradient-to-br hover:${block.bgGradient}` : 'border-border hover:bg-muted')}>
                        <span className={cn('transition-colors duration-300', isActive ? block.accentColor : 'text-muted-foreground')}>{block.ctaText}</span>
                        <ArrowRight className={cn('ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1', isActive ? block.accentColor : 'text-muted-foreground')} />
                      </Button>
                    </div>
                  </div>
                  <div className={cn('relative transition-all duration-1000 ease-out', isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12')}>
                    <Card className={cn('border transition-all duration-500 overflow-hidden', isActive ? `${block.borderColor} shadow-2xl` : 'border-border shadow-lg')}>
                      <CardContent className="p-0">
                        <div className={cn('h-96 bg-gradient-to-br transition-all duration-500', isActive ? block.bgGradient : 'from-muted/50 to-background')}>
                          <div className="h-full flex flex-col items-center justify-center p-8 space-y-6">
                            <div className={cn('p-6 rounded-2xl bg-background/90 backdrop-blur-sm border transition-all duration-300', isActive ? block.borderColor : 'border-border')}>
                              <Icon className={cn('h-16 w-16 transition-colors duration-300', isActive ? block.accentColor : 'text-muted-foreground')} />
                            </div>
                            <div className="text-center space-y-2">
                              <h4 className="text-xl font-semibold text-foreground">{block.title}</h4>
                              <p className="text-sm text-muted-foreground">Professional {block.subtitle.toLowerCase()}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                              {[...Array(4)].map((_, i) => (
                                <div key={i} className={cn('h-8 rounded-lg transition-all duration-500', isActive ? 'bg-background/70 animate-pulse' : 'bg-muted/50')} style={{ animationDelay: `${i * 200}ms` }} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <div className={cn('absolute -top-4 -right-4 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300', isActive ? `bg-gradient-to-r ${block.bgGradient} ${block.accentColor} border ${block.borderColor}` : 'bg-muted text-muted-foreground border border-border')}>
                      {isActive ? 'Active' : 'Available'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
