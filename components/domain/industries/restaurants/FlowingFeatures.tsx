'use client';

import React from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { 
  Thermometer, 
  Shield, 
  Package, 
  GraduationCap, 
  BarChart3, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  Zap,
  Eye,
  DollarSign
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Number animation component
const NumberTicker = ({ 
  value, 
  suffix = '', 
  prefix = '', 
  className = '',
  delay = 0 
}: {
  value: string;
  suffix?: string;
  prefix?: string;
  className?: string;
  delay?: number;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const target = parseFloat(value.replace(/[^0-9.]/g, ''));
        let current = 0;
        const increment = target / 60;
        const animationTimer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setDisplayValue(target);
            clearInterval(animationTimer);
          } else {
            setDisplayValue(current);
          }
        }, 25);
        return () => clearInterval(animationTimer);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, value, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}{value.includes('.') ? displayValue.toFixed(1) : Math.round(displayValue)}{suffix}
    </span>
  );
};

// Floating elements background
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${50 + Math.random() * 50}%`,
          }}
        />
      ))}
    </div>
  );
};

// Interactive feature cards with hover effects
const FeatureCard = ({ 
  feature, 
  index, 
  isActive, 
  onClick 
}: {
  feature: any;
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const IconComponent = feature.icon;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="cursor-pointer"
      onClick={() => onClick(index)}
    >
      <Card 
        className={cn(
          "clerk-interactive-tile transition-all duration-300 group",
          isActive ? "is-active scale-[1.02]" : ""
        )}
      >
        <CardContent className="relative p-6 z-10">
          <div className="flex items-start gap-4">
            <motion.div 
              className={cn(
                "clerk-inspired-icon transition-transform",
                isActive ? "scale-110" : ""
              )}
            >
              <IconComponent className="h-6 w-6 relative z-10" />
            </motion.div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge 
                  variant={isActive ? "default" : "secondary"} 
                  className={cn(
                    "text-xs transition-all duration-300",
                    isActive ? "bg-blue-600 text-white" : ""
                  )}
                >
                  {feature.badge}
                </Badge>
                {isActive && (
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </div>
              
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 font-medium">
                {feature.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: isActive ? 'auto' : 0,
                  opacity: isActive ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        <NumberTicker value={feature.metrics.primary} />
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {feature.metrics.primaryLabel}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        <NumberTicker value={feature.metrics.secondary} delay={200} />
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {feature.metrics.secondaryLabel}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit: string, i: number) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Main features data
const MAIN_FEATURES = [
  {
    icon: Thermometer,
    badge: 'Food Safety',
    title: 'Temperature Monitoring',
    subtitle: 'Never lose product to temperature violations again',
    description: 'Automated temperature tracking with instant alerts when anything goes outside safe ranges. Complete audit trail for health inspections.',
    metrics: {
      primary: '99.9%',
      primaryLabel: 'Compliance Rate',
      secondary: '47min',
      secondaryLabel: 'Avg Response Time'
    },
    benefits: [
      'Real-time temperature monitoring across all units',
      'Instant SMS/email alerts for violations',
      'Automated compliance reports for health dept',
      'Historical data logging with audit trails'
    ]
  },
  {
    icon: Shield,
    badge: 'Compliance',
    title: 'HACCP Automation',
    subtitle: 'Bulletproof compliance, zero paperwork',
    description: 'Digital HACCP management that automatically tracks critical control points and generates compliance reports in seconds, not hours.',
    metrics: {
      primary: '15min',
      primaryLabel: 'Report Generation',
      secondary: '100%',
      secondaryLabel: 'Health Dept Pass Rate'
    },
    benefits: [
      'Paperless record-keeping system',
      'Automated critical control point tracking',
      'One-click health department reports',
      'Risk assessment and corrective action automation'
    ]
  },
  {
    icon: Package,
    badge: 'Operations',
    title: 'Smart Inventory',
    subtitle: 'Cut waste by 40%, never run out of bestsellers',
    description: 'AI-powered inventory predictions that know your patterns better than you do. Automatic reordering keeps you stocked without overordering.',
    metrics: {
      primary: '$2.3K',
      primaryLabel: 'Monthly Savings',
      secondary: '40%',
      secondaryLabel: 'Waste Reduction'
    },
    benefits: [
      'Predictive ordering based on sales patterns',
      'Waste reduction analytics and alerts',
      'Automatic vendor coordination and reordering',
      'Cost optimization insights and recommendations'
    ]
  }
];

export default function FlowingFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  // Auto-rotate features disabled - manual interaction only

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-950 dark:via-gray-900/30 dark:to-gray-950">
      <FloatingElements />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header */}
        <motion.div 
          ref={heroRef}
          className="text-center mb-20 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="clerk-inspired-badge mb-6 px-6 py-2 text-sm font-medium">
              <Eye className="w-4 h-4 mr-2" />
              Complete Restaurant Operations Suite
            </Badge>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-5xl mx-auto leading-tight">
              Stop fighting fires.
              <br />
              <span className="text-gradient">
                Start preventing them.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your restaurant operations with intelligent automation that keeps you compliant, profitable, and stress-free.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Features Section */}
        <motion.div 
          ref={sectionRef}
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Feature Cards */}
            <div className="space-y-6">
              {MAIN_FEATURES.map((feature, index) => (
                <FeatureCard
                  key={index}
                  feature={feature}
                  index={index}
                  isActive={activeFeature === index}
                  onClick={setActiveFeature}
                />
              ))}
            </div>
            
            {/* Interactive Visualization */}
            <motion.div 
              className="lg:sticky lg:top-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="clerk-inspired-card">
                <CardContent className="p-8">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-6"
                  >
                    {/* Feature Icon */}
              <motion.div 
                className="icon-badge-ambient mx-auto w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {(() => {
                  const IconComponent = MAIN_FEATURES[activeFeature].icon;
                  return <IconComponent className="h-10 w-10 text-white" />;
                })()}
              </motion.div>
                    
                    <div>
                      <h4 className="text-2xl font-bold mb-2">
                        {MAIN_FEATURES[activeFeature].title} Dashboard
                      </h4>
                      <p className="text-muted-foreground mb-6">
                        Real-time insights and control
                      </p>
                    </div>
                    
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-center">
                        <motion.div 
                          className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <NumberTicker value={MAIN_FEATURES[activeFeature].metrics.primary} />
                        </motion.div>
                        <div className="text-sm text-muted-foreground font-medium">
                          {MAIN_FEATURES[activeFeature].metrics.primaryLabel}
                        </div>
                      </div>
                      <div className="text-center">
                        <motion.div 
                          className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <NumberTicker value={MAIN_FEATURES[activeFeature].metrics.secondary} delay={200} />
                        </motion.div>
                        <div className="text-sm text-muted-foreground font-medium">
                          {MAIN_FEATURES[activeFeature].metrics.secondaryLabel}
                        </div>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="enterprise-status-indicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium text-sm">All Systems Operational</span>
                    </motion.div>
                  </motion.div>
                </CardContent>
                
                {/* Progress indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {MAIN_FEATURES.map((_, index) => (
                    <motion.button
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        activeFeature === index 
                          ? "bg-blue-600 w-8" 
                          : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                      )}
                      onClick={() => setActiveFeature(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* ROI Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <Card className="clerk-inspired-card">
            <CardContent className="p-8 lg:p-12 relative z-10">
                <div className="text-center mb-12">
                  <motion.h3 
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    ROI that speaks for itself
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    Real results from restaurants just like yours
                  </motion.p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
                  {[
                    { value: '35%', label: 'Cost Reduction', icon: TrendingUp },
                    { value: '18hrs', label: 'Weekly Time Savings', icon: Clock },
                    { value: '99.9%', label: 'Compliance Rate', icon: Shield },
                    { value: '47min', label: 'Issue Response Time', icon: Zap }
                  ].map((stat, index) => {
                    const IconComponent = stat.icon as any;
                    const toneClass = 'roi-icon-brand';
                    return (
                      <motion.div 
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                      >
                        <motion.div 
                          className={`${toneClass} mx-auto w-16 h-16 rounded-2xl mb-4 flex items-center justify-center`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <IconComponent className="h-8 w-8" />
                        </motion.div>
                        <motion.div 
                          className="metric-display-large"
                          whileInView={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 0.5 }}
                        >
                          <NumberTicker value={stat.value} delay={index * 100} />
                        </motion.div>
                        <div className="text-muted-foreground font-medium">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
                
                <Separator className="my-8" />
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <p className="text-lg font-medium mb-6">Ready to transform your restaurant operations?</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="clerk-cta-primary text-base px-8 py-3 h-auto cta-equal" asChild>
                        <Link href="/pricing">
                          Start Free Trial
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="lg" className="text-base px-8 py-3 h-auto border-2 cta-equal" asChild>
                        <Link href="/product/demo?industry=restaurants">Schedule Demo</Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
        </motion.div>
      </div>
    </section>
  );
}
