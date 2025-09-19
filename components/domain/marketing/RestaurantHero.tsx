'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ChefHat, Shield, Eye, Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface RestaurantHeroProps {
  onNavigate?: (page: string) => void;
}

interface RestaurantMetric {
  value: string;
  label: string;
  progress: number;
}

export function RestaurantHero({ onNavigate }: RestaurantHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  // Enhanced restaurant metrics for cycling display
  const restaurantMetrics: RestaurantMetric[] = [
    { value: '98.4%', label: 'Task Completion', progress: 98.4 },
    { value: '100%', label: 'HACCP Compliance', progress: 100 },
    { value: '1.2s', label: 'Avg Response', progress: 85 },
    { value: '$2.4K', label: 'Daily Savings', progress: 92 }
  ];

  // Trigger entrance animations
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-cycling metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % restaurantMetrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [restaurantMetrics.length]);

  return (
    <section className="hero-ambient energy-balanced section-marketing relative min-h-screen overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      </div>

      <div className="relative container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-24 lg:py-32">
          {/* Coordinated entrance sequence with staggered delays */}
          <div className="max-w-6xl space-y-8 text-center">
            
            {/* Premium Badge - Animation Delay 100ms */}
            <div className={cn(
              'motion-fade-in-up-320 animation-delay-100',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}>
              <Badge className="clerk-inspired-badge px-6 py-3 bg-primary-50/80 text-primary-700 border-primary-200/50">
                <Shield className="size-4 mr-2" />
                Restaurant Operations Platform
              </Badge>
            </div>

            {/* Hero Title - Animation Delay 200ms */}
            <div className={cn(
              'motion-fade-in-up-320 animation-delay-200',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}>
              <h1 className="text-display-2xl font-bold leading-tight tracking-tighter">
                Transform Your{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Restaurant Operations
                </span>
                <span className="block">with Intelligent Automation</span>
              </h1>
            </div>

            {/* Description - Animation Delay 300ms */}
            <div className={cn(
              'motion-fade-in-up-320 animation-delay-300',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Streamline kitchen workflows, ensure HACCP compliance, and boost operational efficiency with our 
                enterprise-grade platform. Save 15 hours per week while maintaining 100% compliance standards.
              </p>
            </div>

            {/* Premium CTA System - Animation Delay 400ms */}
            <div className={cn(
              'motion-fade-in-up-320 animation-delay-400',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <Button 
                  className="clerk-cta-primary cta-equal cta-shimmer"
                  size="lg"
                  onClick={() => onNavigate?.('trial')}
                >
                  Start Free Trial
                  <ArrowRight className="size-4 ml-2" />
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="cta-equal"
                  onClick={() => onNavigate?.('demo')}
                >
                  <Play className="size-4 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Interactive Dashboard Mockup - Animation Delay 500ms */}
          <div className={cn(
            'mt-16 w-full max-w-5xl motion-fade-in-up-320 animation-delay-500',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}>
            
            {/* Dashboard Preview Container */}
            <div className="enterprise-card p-8 tile-hover">
              <div className="space-y-6">
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="enterprise-icon-primary">
                      <ChefHat className="size-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-display-sm text-foreground">Live Restaurant Dashboard</h3>
                      <p className="text-sm text-muted-foreground">Real-time operational metrics</p>
                    </div>
                  </div>
                  
                  {/* Live indicator */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-muted-foreground">Live</span>
                  </div>
                </div>

                {/* Interactive Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {restaurantMetrics.map((metric, index) => (
                    <div 
                      key={index}
                      className={cn(
                        'enterprise-metric-card p-6 rounded-xl transition-all duration-500',
                        activeMetric === index 
                          ? 'bg-gradient-to-br from-primary-50 to-primary-100/50 border-primary-200 shadow-md hover-scale-103' 
                          : 'bg-white/60 border-border/30 hover:bg-white/80'
                      )}
                    >
                      <div className="space-y-3">
                        <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                        <Progress 
                          value={metric.progress} 
                          className="h-2" 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dashboard Action Button */}
                <div className="flex justify-center pt-4">
                  <Button 
                    variant="outline" 
                    className="cta-equal group"
                    onClick={() => onNavigate?.('dashboard')}
                  >
                    <Eye className="size-4 mr-2" />
                    View Full Dashboard
                    <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Messaging - Animation Delay 600ms */}
          <div className={cn(
            'mt-12 motion-fade-in-up-320 animation-delay-600',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>15 hours saved per week</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>100% HACCP compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>30% efficiency increase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
