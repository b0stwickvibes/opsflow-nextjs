'use client';

/**
 * Restaurant Operations Feature Grid
 * Following OpsFlow Claude Protocol - Global styling only
 */

import React from 'react';
import { BarChart3, ThermometerSnowflake, Users2, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';

import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

// Restaurant-focused features
const features = [
  {
    icon: ThermometerSnowflake,
    title: 'HACCP Compliance',
    description: 'Automate temperature monitoring and food safety compliance with Bluetooth sensors and digital logging.',
  },
  {
    icon: Users2,
    title: 'Staff Management',
    description: 'Schedule shifts, track performance, and manage training with digital checklists and real-time visibility.',
  },
  {
    icon: ClipboardCheck,
    title: 'Operations Checklists',
    description: 'Digital opening, closing, and shift checklists ensure consistent execution across all locations.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track labor costs, compliance rates, and operational efficiency with comprehensive reporting.',
  },
];

export function FeatureHighlights() {
  // Register with layout validator
  React.useEffect(() => {
    registerComponentLayout('FeatureHighlights', 'marketing');
  }, []);

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">Premium Restaurant Operations</h2>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade tools designed specifically for restaurants, bars, and hospitality businesses
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-lg border bg-background p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureHighlights;