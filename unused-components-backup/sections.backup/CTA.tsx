/**
 * Premium CTA component with sophisticated animations
 * Used on marketing pages to drive conversions
 */

"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { useOpsFlowStyles } from '@/lib/style-system';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';
import { EnhancedButton } from '@/components/enhanced/EnhancedButton';

interface PremiumCTAProps {
  title: string;
  description: string;
  primaryCta: string;
  primaryCtaLink: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
}

export function PremiumCTA({
  title,
  description,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  secondaryCtaLink
}: PremiumCTAProps) {
  const ctaRef = useRef<HTMLDivElement>(null);

  // Register with layout validator
  React.useEffect(() => {
    registerComponentLayout('PremiumCTA', 'marketing');
  }, []);
  
  // Apply OpsFlowStyles for bulletproof styling
  useOpsFlowStyles(
    ctaRef,
    'cta',
    ['relative', 'overflow-hidden', 'bg-background']
  );

  return (
    <section
      ref={ctaRef}
      className="ops-cta relative py-24 overflow-hidden bg-gradient-to-b from-background to-primary/5"
    >
      {/* Background pattern - inspired by Stripe but restaurant-themed */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-grid-primary/10" />
        
        {/* Animated circle elements */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${10 + (i * 15)}%`,
              top: `${20 + ((i % 3) * 20)}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <EnhancedButton size="lg" asChild className="group">
              <Link href={primaryCtaLink}>
                <span className="flex items-center">
                  {primaryCta}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </EnhancedButton>
            
            {secondaryCta && secondaryCtaLink && (
              <EnhancedButton variant="outline" size="lg" asChild>
                <Link href={secondaryCtaLink}>
                  {secondaryCta}
                </Link>
              </EnhancedButton>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PremiumCTA;