'use client';

import { motion, useInView } from 'framer-motion';
import { 
  GraduationCap, 
  BarChart3, 
  Smartphone,
  Zap,
  Users,
  FileCheck,
  Bell,
  TrendingUp,
  Clock,
  DollarSign,
  ArrowRight
} from 'lucide-react';
import { useRef, useState, useCallback, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Secondary features that complement the main ones
const SECONDARY_FEATURES = [
  {
    icon: GraduationCap,
    title: 'Training Management',
    description: 'Digital training records and automated certification tracking for your entire team.',
    benefits: [
      'Automated certification reminders',
      'Progress tracking dashboards', 
      'Compliance documentation'
    ],
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Real-time dashboards showing what matters most to your bottom line.',
    benefits: [
      'Revenue trend analysis',
      'Cost optimization insights',
      'Efficiency benchmarking'
    ],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile Control',
    description: 'Complete restaurant oversight from anywhere, anytime on any device.',
    benefits: [
      'Real-time notifications',
      'Remote monitoring',
      'Mobile-first design'
    ],
    color: 'from-purple-500 to-violet-600'
  },
  {
    icon: Zap,
    title: 'Integration Hub',
    description: 'Works seamlessly with Toast, MarginEdge, and all your existing systems.',
    benefits: [
      'No workflow disruption',
      'Data synchronization',
      'Unified platform'
    ],
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Users,
    title: 'Team Coordination',
    description: 'Keep your entire team synchronized with automated workflows.',
    benefits: [
      'Task assignment automation',
      'Shift change notifications',
      'Team performance tracking'
    ],
    color: 'from-pink-500 to-rose-600'
  },
  {
    icon: FileCheck,
    title: 'Audit Readiness',
    description: 'Always inspection-ready with automated documentation and reporting.',
    benefits: [
      'Instant report generation',
      'Historical data access',
      'Compliance verification'
    ],
    color: 'from-teal-500 to-cyan-600'
  }
];

// Floating particles effect
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 60 - 30, 0],
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function SecondaryFeatures() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-scroll effect
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      const nextIndex = (current + 1) % count;
      api.scrollTo(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [api, current, count]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 dark:from-gray-900/30 dark:via-gray-950 dark:to-gray-900/30"
    >
      <FloatingParticles />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 border-indigo-200 px-4 py-2">
            <BarChart3 className="w-4 h-4 mr-2" />
            Complete Operational Control
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Everything else you need to{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              run like clockwork
            </span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond the core features, get the complete toolkit for restaurant excellence
          </p>
        </motion.div>

        {/* Features Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm text-muted-foreground">
                  {current + 1} of {count} features
                </p>
              </div>
              <div className="flex gap-2">
                <CarouselPrevious className="relative top-0 left-0 translate-y-0 border-2 hover:bg-indigo-50 dark:hover:bg-indigo-950/20" />
                <CarouselNext className="relative top-0 left-0 translate-y-0 border-2 hover:bg-indigo-50 dark:hover:bg-indigo-950/20" />
              </div>
            </div>
            
            <CarouselContent className="-ml-2 md:-ml-4">
              {SECONDARY_FEATURES.map((feature, index) => {
                const IconComponent = feature.icon;
                const isActive = index === current;
                
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <motion.div
                      className="h-full"
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className={cn(
                        "h-full border-0 transition-all duration-500 relative overflow-hidden group",
                        "bg-gradient-to-br hover:shadow-xl",
                        isActive 
                          ? "from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 shadow-lg scale-105 ring-2 ring-indigo-200 dark:ring-indigo-800"
                          : "from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 hover:from-indigo-50/40 hover:to-purple-50/40 dark:hover:from-indigo-950/20 dark:hover:to-purple-950/20"
                      )}>
                        {/* Animated background shimmer */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            animate={{ x: [-100, 300] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        )}
                        
                        <CardContent className="p-6 h-full flex flex-col relative z-10">
                          {/* Icon */}
                          <motion.div 
                            className={cn(
                              "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500",
                              `bg-gradient-to-br ${feature.color} shadow-lg`
                            )}
                            animate={isActive ? { 
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0]
                            } : {}}
                            transition={{ duration: 2, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                          >
                            <IconComponent className="h-7 w-7 text-white" />
                          </motion.div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                              {feature.description}
                            </p>
                            
                            {/* Benefits List */}
                            <div className="space-y-2 mb-4">
                              {feature.benefits.map((benefit, i) => (
                                <motion.div 
                                  key={i}
                                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                                  transition={{ delay: 0.1 * i }}
                                >
                                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                                  <span>{benefit}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          
                          {/* CTA */}
                          <div className="mt-auto">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="group p-0 h-auto text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                            >
                              Learn more
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Progress Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <motion.button
                  key={index}
                  className={cn(
                    "transition-all duration-300",
                    index === current 
                      ? "w-8 h-2 bg-indigo-600 rounded-full" 
                      : "w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500"
                  )}
                  onClick={() => api?.scrollTo(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </Carousel>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg font-medium mb-6 text-muted-foreground">
            Ready to experience the complete platform?
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            whileHover={{ scale: 1.02 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg"
            >
              <Clock className="w-5 h-5 mr-2" />
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2">
              <DollarSign className="w-5 h-5 mr-2" />
              View Pricing
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
