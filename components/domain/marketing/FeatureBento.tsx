"use client";

import { Shield, Users, BarChart3, CheckCircle, Clock, Thermometer, AlertTriangle, TrendingUp, Zap, Calendar, ChefHat, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export type Industry = 'restaurant' | 'bar' | 'coffee' | 'hotel';

interface FeatureBentoProps {
  industry?: Industry;
  className?: string;
}

/**
 * Feature Bento Component (Clean)
 * Professional bento grid layout with restaurant operations focus
 * Uses enterprise styling system following DEVELOPMENT-SOP.md standards
 * Domain: Marketing sections with interactive dashboard mockups
 */
export function FeatureBento({ industry = 'restaurant', className }: FeatureBentoProps) {
  const [activeMetric, setActiveMetric] = useState(0);

  // Cycling metrics for interactive dashboard mockup
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const restaurantMetrics = [
    { value: '98.4%', label: 'Task Completion', progress: 98 },
    { value: '100%', label: 'HACCP Compliance', progress: 100 },
    { value: '1.2s', label: 'Avg Response', progress: 85 },
    { value: '$2.4K', label: 'Daily Savings', progress: 76 }
  ];

  const getIndustryContent = () => {
    const content = {
      restaurant: {
        hero: {
          title: "Complete Restaurant Operations Platform",
          subtitle: "HACCP compliance, temperature monitoring, and staff management automation to help you focus on serving great food.",
          cta: "Explore Restaurant Features",
          badgeText: "Restaurant Operations"
        },
        grid: [
          {
            size: "large", // 2x2
            title: "HACCP Compliance Dashboard",
            subtitle: "Real-time compliance monitoring with automated checklists and documentation.",
            preview: (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-lg">Daily Compliance</h4>
                  <Badge className="clerk-inspired-badge">
                    <CheckCircle className="h-3 w-3" />
                    94% Complete
                  </Badge>
                </div>
                
                {/* Interactive dashboard mockup using SOP classes */}
                <div className="enterprise-metric-card p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-sm">Live Restaurant Metrics</h5>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-xs text-muted-foreground">Live</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {restaurantMetrics.map((metric, index) => (
                      <div 
                        key={index}
                        className={cn(
                          "p-3 rounded-xl transition-all duration-500",
                          activeMetric === index 
                            ? "surface-subtle-primary border-primary-200 shadow-md" 
                            : "bg-background/60 border border-border/30"
                        )}
                      >
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                        <Progress value={metric.progress} className="h-1.5 mt-2" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Next audit: Health Dept (Jan 15)</span>
                  </div>
                </div>
              </div>
            )
          },
          {
            size: "medium", // 1x2
            title: "Live Temperature Monitoring",
            subtitle: "Real-time alerts for all refrigeration units with automated logging.",
            preview: (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl enterprise-card">
                  <div className="flex items-center gap-3">
                    <div className="enterprise-icon-primary">
                      <Thermometer className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold">Walk-in Cooler</span>
                      <div className="text-xs text-muted-foreground">Zone A</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">38°F</div>
                    <div className="text-xs font-medium text-muted-foreground">Normal</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-xl surface-subtle-destructive">
                  <div className="flex items-center gap-3">
                    <div className="enterprise-icon-muted">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold">Freezer Unit</span>
                      <div className="text-xs text-muted-foreground">Zone B</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">12°F</div>
                    <div className="text-xs font-medium">Alert</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-xl surface-subtle-primary">
                  <div className="flex items-center gap-3">
                    <div className="enterprise-icon-primary">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold">Hot Hold Station</span>
                      <div className="text-xs text-muted-foreground">Kitchen</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">165°F</div>
                    <div className="text-xs font-medium text-muted-foreground">Optimal</div>
                  </div>
                </div>
              </div>
            )
          },
          {
            size: "small", // 1x1
            title: "Staff Certifications",
            subtitle: "Track food safety certifications and training completion.",
            preview: (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">JD</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate">John Doe</div>
                    <div className="text-xs text-primary">ServeNet Certified</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-sm font-bold text-secondary-foreground">MS</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate">Maria Smith</div>
                    <div className="text-xs text-secondary">Expires Soon</div>
                  </div>
                </div>
              </div>
            )
          },
          {
            size: "medium", // 2x1 
            title: "Performance Analytics",
            subtitle: "Track efficiency metrics, cost savings, and operational improvements.",
            preview: (
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="enterprise-icon-primary w-12 h-12 rounded-xl mx-auto mb-2">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-primary">32%</div>
                  <div className="text-xs font-medium text-muted-foreground">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="enterprise-icon-secondary w-12 h-12 rounded-xl mx-auto mb-2">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-secondary">15</div>
                  <div className="text-xs font-medium text-muted-foreground">hrs/week saved</div>
                </div>
                <div className="text-center">
                  <div className="enterprise-icon-accent w-12 h-12 rounded-xl mx-auto mb-2">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs font-medium text-muted-foreground">Compliance</div>
                </div>
              </div>
            )
          },
          {
            size: "small", // 1x1
            title: "Quick Actions",
            subtitle: "One-click access to common tasks.",
            preview: (
              <div className="space-y-3">
                <Button size="sm" className="w-full clerk-cta-primary">
                  Start Health Check
                </Button>
                <Button size="sm" variant="outline" className="w-full">
                  View Reports
                </Button>
              </div>
            )
          }
        ]
      }
      // Additional industries follow same pattern...
    };

    return content[industry] || content.restaurant;
  };

  const content = getIndustryContent();

  const getGridClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2'; // 2x2
      case 'medium':
        return 'md:col-span-2'; // 2x1 
      case 'small':
        return 'md:col-span-1'; // 1x1
      default:
        return 'md:col-span-1';
    }
  };

  return (
    <section className={cn("section-marketing", className)}>
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with coordinated entrance animations */}
        <div className="text-center mb-16">
          <Badge className="clerk-inspired-badge mb-4 motion-fade-in-up-320 animation-delay-100">
            <ChefHat className="h-4 w-4" />
            <span>{content.hero.badgeText}</span>
          </Badge>
          
          <h2 className="enterprise-headline mb-4 motion-fade-in-up-320 animation-delay-200">
            <span className="text-brand-gradient">{content.hero.title}</span>
          </h2>
          
          <p className="enterprise-body max-w-3xl mx-auto mb-8 motion-fade-in-up-320 animation-delay-300">
            {content.hero.subtitle}
          </p>
          
          <Button className="clerk-cta-primary cta-equal cta-shimmer px-6 motion-fade-in-up-320 animation-delay-400">
            {content.hero.cta}
          </Button>
        </div>

        {/* Bento Grid with SOP tile-hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">
          {content.grid.map((feature, index) => (
            <Card
              key={index}
              className={cn(
                getGridClasses(feature.size),
                "enterprise-card p-6 tile-hover motion-fade-in-up-320",
                `animation-delay-${(index + 5) * 100}`
              )}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.subtitle}</p>
                </div>
                <div className="pt-4 border-t">
                  {feature.preview}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}