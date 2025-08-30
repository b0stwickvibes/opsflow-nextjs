"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Thermometer, 
  Shield, 
  ClipboardCheck, 
  MessageSquare, 
  BarChart3, 
  Users,
  CheckCircle,
  Clock,
  TrendingUp,
  Zap,
  Eye,
  ArrowRight,
  Activity
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ImageFrame from "@/components/shared/data-display/ImageFrame";
import { cn } from "@/lib/utils";

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
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${30 + Math.random() * 40}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function FeatureBoard() {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Auto-rotate features disabled - manual interaction only

  const features = [
    { 
      icon: Thermometer, 
      title: "Automated temperature monitoring", 
      desc: "Monitor walk‑ins, low‑boys, and hot‑holding in real time. Alerts create corrective actions and log entries automatically.",
      badge: "Live",
      metrics: { value: "99.9%", label: "Compliance Rate" }
    },
    { 
      icon: Shield, 
      title: "HACCP & audits", 
      desc: "Critical control points with digital sign‑off, inspection prep, and exportable PDF/CSV reports.",
      badge: "Compliant",
      metrics: { value: "15min", label: "Report Time" }
    },
    { 
      icon: ClipboardCheck, 
      title: "Smart work orders", 
      desc: "Assign, prioritize, and track maintenance with photos and mobile inspections.",
      badge: "Efficient",
      metrics: { value: "47min", label: "Response Time" }
    },
    { 
      icon: MessageSquare, 
      title: "Team communication", 
      desc: "Announcements, @mentions, and channel routing—keep FOH and BOH in sync.",
      badge: "Connected",
      metrics: { value: "100%", label: "Team Sync" }
    },
    { 
      icon: BarChart3, 
      title: "Real‑time analytics", 
      desc: "KPIs for owners, managers, and leads with drill‑downs and exports.",
      badge: "Insights",
      metrics: { value: "35%", label: "Cost Reduction" }
    },
    { 
      icon: Users, 
      title: "Staff & training", 
      desc: "Role‑based checklists, micro‑training, and certification reminders.",
      badge: "Learning",
      metrics: { value: "18hrs", label: "Weekly Savings" }
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 dark:from-gray-900/30 dark:via-gray-950 dark:to-gray-900/30">
      <FloatingElements />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 px-4 py-2">
            <Activity className="w-4 h-4 mr-2" />
            Complete Operations Suite
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything your restaurant needs,
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              beautifully integrated
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From temperature monitoring to staff training—one platform that handles it all
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 auto-rows-fr">
          {/* Main featured card - Temperature Monitoring */}
          <motion.div
            className="md:col-span-2 md:row-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className={cn(
              "relative overflow-hidden transition-all duration-500 group h-full",
              "bg-gradient-to-br hover:shadow-2xl border-0",
              activeFeature === 0 
                ? "from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/50 dark:via-indigo-950/30 dark:to-purple-950/50 shadow-xl ring-2 ring-blue-200 dark:ring-blue-800" 
                : "from-gray-50/50 to-white/80 dark:from-gray-900/50 dark:to-gray-800/80 hover:from-blue-50/30 hover:to-indigo-50/30"
            )} data-capture="feature-temp-board">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="flex items-center justify-between pb-4 relative z-10">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className={cn(
                      "p-3 rounded-xl transition-all duration-500",
                      activeFeature === 0 
                        ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg" 
                        : "bg-gray-100 dark:bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:text-white"
                    )}
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <Thermometer className="h-6 w-6" />
                  </motion.div>
                  <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {features[0].title}
                  </CardTitle>
                </div>
                <motion.div
                  animate={{ scale: activeFeature === 0 ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Badge className={cn(
                    "transition-all duration-300",
                    activeFeature === 0 ? "bg-green-100 text-green-800 border-green-200" : "bg-gray-100 text-gray-600"
                  )}>
                    <Activity className="w-3 h-3 mr-1" />
                    {features[0].badge}
                  </Badge>
                </motion.div>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <p className="text-base text-muted-foreground leading-relaxed font-medium">
                  {features[0].desc}
                </p>
                
                <div className="grid grid-cols-2 gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/50">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      <NumberTicker value={features[0].metrics.value} />
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {features[0].metrics.label}
                    </div>
                  </div>
                  <div className="text-center flex items-center justify-center">
                    <motion.div 
                      className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-950/20 rounded-full px-3 py-2"
                      animate={{ scale: activeFeature === 0 ? [1, 1.05, 1] : 1 }}
                      transition={{ duration: 1.5, repeat: activeFeature === 0 ? Infinity : 0 }}
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span className="font-medium text-sm">Live</span>
                    </motion.div>
                  </div>
                </div>
                
                <ImageFrame
                  src="/images/features/temp-board.png"
                  alt="Temperature dashboard preview"
                  caption="Real-time temperature monitoring"
                  aspect="16/9"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Small feature tiles */}
          {features.slice(1).map((feature, index) => {
            const IconComponent = feature.icon;
            const featureIndex = index + 1;
            return (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className={cn(
                  "relative overflow-hidden transition-all duration-500 group h-full cursor-pointer",
                  "bg-gradient-to-br hover:shadow-xl border-0",
                  activeFeature === featureIndex
                    ? "from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/50 dark:via-indigo-950/30 dark:to-purple-950/50 shadow-lg ring-1 ring-blue-200 dark:ring-blue-800"
                    : "from-gray-50/50 to-white/80 dark:from-gray-900/50 dark:to-gray-800/80 hover:from-blue-50/30 hover:to-indigo-50/30"
                )}
                onClick={() => setActiveFeature(featureIndex)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="flex items-center gap-3 pb-3 relative z-10">
                    <motion.div 
                      className={cn(
                        "p-2.5 rounded-lg transition-all duration-500",
                        activeFeature === featureIndex
                          ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md"
                          : "bg-gray-100 dark:bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:text-white"
                      )}
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className="h-5 w-5" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <CardTitle className="text-base font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {feature.title}
                        </CardTitle>
                        <Badge className={cn(
                          "text-xs transition-all duration-300",
                          activeFeature === featureIndex ? "bg-blue-100 text-blue-800 border-blue-200" : "bg-gray-100 text-gray-600"
                        )}>
                          {feature.badge}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="text-sm text-muted-foreground leading-relaxed relative z-10">
                    <p className="mb-4">{feature.desc}</p>
                    
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: activeFeature === featureIndex ? 'auto' : 0,
                        opacity: activeFeature === featureIndex ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="text-center">
                          <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                            <NumberTicker value={feature.metrics.value} delay={100} />
                          </div>
                          <div className="text-xs text-muted-foreground font-medium">
                            {feature.metrics.label}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom CTA section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg font-medium mb-6">Ready to see it all in action?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="border-2">
                Schedule Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
