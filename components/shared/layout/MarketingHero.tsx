'use client';

import { useEffect, ReactNode } from 'react';
import Image from 'next/image';
import { ArrowRight, ChefHat, Shield, BarChart3, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

// Restaurant operations stats
const restaurantStats = [
  { icon: ChefHat, label: 'Restaurants', value: '2,500+', description: 'Using OpsFlow daily' },
  { icon: Shield, label: 'HACCP Compliance', value: '99.8%', description: 'Average success rate' },
  { icon: BarChart3, label: 'Labor Costs', value: '32%', description: 'Average reduction' },
  { icon: Clock, label: 'Time Saved', value: '15hrs/wk', description: 'Per manager' },
];

interface MarketingHeroProps {
  title?: string;
  description?: string;
  badge?: string;
  children?: ReactNode;
  className?: string;
  showStats?: boolean;
  showDashboardPreview?: boolean;
  eyebrow?: string;
  align?: 'center' | 'left';
  mediaSrc?: string;
  mediaAlt?: string;
}

export function MarketingHero({
  title = "Restaurant Operations Reimagined",
  description = "The premium platform that transforms how restaurants manage operations, safety compliance, and staff accountability with enterprise-grade tools.",
  badge = "Live Temperature Monitoring",
  children,
  className = '',
  showStats = true,
  showDashboardPreview = true,
  eyebrow,
  align = 'center',
  mediaSrc,
  mediaAlt = 'Product preview'
}: MarketingHeroProps) {
  useEffect(() => {
    registerComponentLayout('MarketingHero', 'marketing');
  }, []);

  return (
    <section className={`relative py-16 md:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`mx-auto max-w-4xl ${align === 'left' ? 'text-left md:max-w-5xl' : 'text-center'}`}>
          {/* Eyebrow */}
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`mb-4 ${align === 'left' ? '' : 'flex justify-center'}`}
            >
              <span className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {eyebrow}
              </span>
            </motion.div>
          )}
          {/* Status Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link
                href="/product/features"
                className="inline-flex items-center rounded-full border bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                {badge}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          )}

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mb-8 space-y-4 ${align === 'left' ? 'md:max-w-3xl' : ''}`}
          >
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              {title}
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              {description}
            </p>
          </motion.div>

          {/* CTA Buttons or Custom Children */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`mb-12 flex flex-wrap items-center ${align === 'left' ? 'justify-start' : 'justify-center'} gap-4`}
          >
            {children || (
              <>
                <Button asChild size="lg">
                  <Link href="/pricing">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <Link href="/product/demo">
                    Watch Demo
                  </Link>
                </Button>
              </>
            )}
          </motion.div>
        </div>

        {/* Dashboard Preview (legacy) or custom media */}
        {mediaSrc ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto max-w-5xl mb-16"
          >
            <div className="rounded-xl border bg-muted/50 p-4 shadow-lg">
              <div className="aspect-video overflow-hidden rounded-lg border bg-background">
                <Image
                  src={mediaSrc}
                  alt={mediaAlt}
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        ) : showDashboardPreview && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto max-w-5xl mb-16"
          >
            <div className="rounded-xl border bg-muted/50 p-4 shadow-lg">
              <div className="aspect-video rounded-lg border bg-background p-6">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <ChefHat className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">Restaurant Operations Dashboard</h3>
                    <p className="text-muted-foreground">Real-time monitoring and analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Restaurant Stats */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border-t pt-12"
          >
            <div className="text-center mb-8">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Trusted by Restaurant Professionals
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {restaurantStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="rounded-full border bg-muted p-3">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold md:text-3xl">{stat.value}</div>
                  <div className="text-sm font-medium text-primary">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
