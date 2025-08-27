'use client';

/**
 * MarketingHero - Clean restaurant operations homepage hero
 * Following OpsFlow Claude Protocol - Global styling only, no custom overrides
 */

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChefHat, Shield, BarChart3, Clock } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

// Restaurant operations stats
const restaurantStats = [
  { icon: ChefHat, label: 'Restaurants', value: '2,500+', description: 'Using OpsFlow daily' },
  { icon: Shield, label: 'HACCP Compliance', value: '99.8%', description: 'Average success rate' },
  { icon: BarChart3, label: 'Labor Costs', value: '32%', description: 'Average reduction' },
  { icon: Clock, label: 'Time Saved', value: '15hrs/wk', description: 'Per manager' },
];

export function MarketingHero() {
  // Register with layout validator
  useEffect(() => {
    registerComponentLayout('MarketingHero', 'marketing');
  }, []);

  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Status Badge */}
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
              <div className="mr-2 h-2 w-2 rounded-full bg-green-500" />
              Live Temperature Monitoring
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Restaurant Operations Reimagined
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              The premium platform that transforms how restaurants manage operations, safety compliance, and staff accountability with enterprise-grade tools.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 flex flex-wrap items-center justify-center gap-4"
          >
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
          </motion.div>

          {/* Restaurant Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-t pt-12"
          >
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {restaurantStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
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
        </div>
      </div>

      {/* Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="container mt-16"
      >
        <div className="mx-auto max-w-5xl">
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
        </div>
      </motion.div>
    </section>
  );
}

export default MarketingHero;