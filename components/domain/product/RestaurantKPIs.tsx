"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus, Activity } from 'lucide-react';
import { NumberTicker } from '@/components/shared/enhanced';
import { cn } from '@/lib/utils';
import type { RestaurantKPIs } from '@/types/restaurant-pages';

interface RestaurantKPIsProps {
  metrics: RestaurantKPIs;
  className?: string;
}

const trendIcons = {
  up: TrendingUp,
  down: TrendingDown,
  stable: Minus
};

const trendColors = {
  up: 'text-green-500',
  down: 'text-red-500',
  stable: 'text-gray-500'
};

export function RestaurantKPIsComponent({ 
  metrics, 
  className 
}: RestaurantKPIsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className={cn("py-24 bg-gray-50/50 dark:bg-gray-900/50", className)}>
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Activity className="h-5 w-5 text-orange-500" />
            <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
              {metrics.realTime ? 'Live Metrics' : 'Performance Metrics'}
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Restaurant Operations at Scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time insights from thousands of restaurants using OpsFlow to streamline operations, 
            ensure compliance, and drive efficiency.
          </p>
        </div>

        {/* Metrics Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.metrics.map((metric, index) => {
            const TrendIcon = metric.trend ? trendIcons[metric.trend] : null;
            const trendColorClass = metric.trend ? trendColors[metric.trend] : '';
            
            // Extract numeric value for NumberTicker
            const numericValue = metric.value.match(/[\d,]+/)?.[0];
            const unit = metric.value.replace(/[\d,]+/, '');
            const displayValue = numericValue ? parseInt(numericValue.replace(/,/g, '')) : 0;

            return (
              <motion.div key={metric.label} variants={item}>
                <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    
                    {/* Trend Indicator */}
                    {TrendIcon && (
                      <div className={cn("absolute top-4 right-4", trendColorClass)}>
                        <TrendIcon className="h-4 w-4" />
                      </div>
                    )}

                    {/* Metric Value */}
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-1">
                        {numericValue ? (
                          <>
                            <NumberTicker
                              value={displayValue}
                              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100"
                            />
                            <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                              {unit}
                            </span>
                          </>
                        ) : (
                          <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                            {metric.value}
                          </span>
                        )}
                      </div>
                      
                      {/* Metric Label */}
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                        {metric.label}
                      </h3>
                      
                      {/* Metric Description */}
                      <p className="text-xs text-muted-foreground">
                        {metric.description}
                      </p>
                    </div>

                    {/* Live Indicator for Real-time Metrics */}
                    {metrics.realTime && (
                      <div className="absolute bottom-2 right-2 flex items-center gap-1 text-xs text-muted-foreground">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span>Live</span>
                      </div>
                    )}

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500 rounded-full transform translate-x-8 -translate-y-8" />
                    </div>
                    
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Context */}
        {metrics.realTime && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12 p-6 bg-orange-50 dark:bg-orange-950/20 rounded-2xl border border-orange-100 dark:border-orange-800/50"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-orange-900 dark:text-orange-100">
                Live Data from Active Restaurant Locations
              </span>
            </div>
            <p className="text-sm text-orange-700 dark:text-orange-300">
              These metrics update in real-time from restaurants currently using OpsFlow 
              for daily operations, food safety compliance, and staff coordination.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}
