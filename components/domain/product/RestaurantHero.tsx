"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, ChefHat, Thermometer } from 'lucide-react';
import { AuroraText, NumberTicker, Spotlight } from '@/components/shared/enhanced';
import { useRestaurantAnalytics } from '@/lib/hooks/restaurant-pages';
import { cn } from '@/lib/utils';
import type { RestaurantHeroContent, IndustryType } from '@/types/restaurant-pages';

interface RestaurantHeroProps {
  content: RestaurantHeroContent;
  industry: IndustryType | 'general';
  variant?: 'default' | 'pro' | 'compact';
  className?: string;
}

const industryIcons = {
  restaurants: ChefHat,
  bars: ChefHat,
  coffee: ChefHat,
  hotels: ChefHat,
  general: ChefHat
};

const industryColors = {
  restaurants: '#FF6B35',
  bars: '#6366F1',
  coffee: '#8B5CF6',
  hotels: '#10B981',
  general: '#FF6B35'
};

export function RestaurantHero({ 
  content, 
  industry, 
  variant = 'default',
  className 
}: RestaurantHeroProps) {
  const Icon = (industryIcons as Record<string, any>)[industry] ?? industryIcons.general;
  const primaryColor = (industryColors as Record<string, string>)[industry] ?? industryColors.general;
  const { trackHeroCTA } = useRestaurantAnalytics();
  
  const handlePrimaryClick = () => {
    trackHeroCTA(industry, variant, content.ctas.primary);
  };

  const handleSecondaryClick = () => {
    trackHeroCTA(industry, variant, content.ctas.secondary);
  };

  return (
    <section className={cn(
      "relative min-h-screen flex items-center justify-center overflow-hidden",
      className
    )}>
      {/* Background Elements */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-orange-950/20 dark:via-background dark:to-blue-950/20" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge 
              variant="outline" 
              className="px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm border-orange-200"
            >
              <Icon className="w-4 h-4 mr-2" style={{ color: primaryColor }} />
              {content.badge}
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {content.headline[0]}{' '}
              <AuroraText 
                colors={[primaryColor, primaryColor, "#6366F1", "#8B5CF6"]}
                className="inline-block"
              >
                {content.headline[1] || "operations"}
              </AuroraText>
              {content.headline[2] && (
                <span className="block mt-2">
                  {content.headline[2]}
                </span>
              )}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            {content.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              size="lg"
              onClick={handlePrimaryClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {content.ctas.primary}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleSecondaryClick}
              className="px-8 py-6 text-lg font-semibold bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-gray-300 transition-all duration-200"
            >
              <Play className="mr-2 h-5 w-5" />
              {content.ctas.secondary}
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-orange-500" />
              <span>HACCP Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              <span>Live Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <NumberTicker 
                value={2500} 
                className="text-orange-600 font-semibold"
              />
              <span>+ Active Restaurants</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
