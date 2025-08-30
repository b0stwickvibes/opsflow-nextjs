"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Thermometer, ClipboardList, Users, BarChart3, Play, ChevronRight, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackInteraction } from '@/lib/analytics';

interface PlatformFeature {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  shortTitle: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaAction: string;
  mockupContent: { title: string; subtitle: string; items: string[] };
  accentBg: string; // bg color util
  borderColor: string; // border color util
  iconColor: string; // icon/text color util
}

interface RestaurantPlatformExplorerProps {
  onNavigate?: (page: string) => void;
  className?: string;
}

const platformFeatures: PlatformFeature[] = [
  {
    id: 'haccp-compliance',
    title: 'HACCP Compliance System',
    shortTitle: 'HACCP Compliance',
    icon: Shield,
    description:
      'Automated food safety monitoring with real-time alerts, digital logs, and FDA-approved compliance tracking for all restaurant operations.',
    features: ['Automated temperature logging', 'Digital food safety checklists', 'HACCP plan management', 'Violation alerts & corrective actions'],
    ctaText: 'Explore HACCP Tools',
    ctaAction: 'product/haccp-compliance',
    mockupContent: { title: 'HACCP Dashboard', subtitle: 'Real-time compliance monitoring', items: ['Critical Control Points', 'Temperature Logs', 'Corrective Actions', 'Compliance Reports', 'Audit Trail', 'Staff Training'] },
    accentBg: 'bg-sky-600',
    borderColor: 'border-sky-200',
    iconColor: 'text-sky-700',
  },
  {
    id: 'temperature-monitoring',
    title: 'Temperature Monitoring',
    shortTitle: 'Temperature Monitoring',
    icon: Thermometer,
    description:
      'Bluetooth-enabled sensors provide 24/7 temperature tracking for refrigeration, freezers, and cooking equipment with instant alerts.',
    features: ['Bluetooth sensor integration', '24/7 automated monitoring', 'Instant alert notifications', 'Historical data tracking'],
    ctaText: 'View Temperature Tools',
    ctaAction: 'product/features',
    mockupContent: { title: 'Temperature Dashboard', subtitle: 'Live sensor monitoring', items: ['Walk-in Cooler: 38°F', 'Freezer Unit: -2°F', 'Hot Hold: 165°F', 'Prep Cooler: 41°F', 'Alert Settings', 'Sensor Status'] },
    accentBg: 'bg-indigo-600',
    borderColor: 'border-indigo-200',
    iconColor: 'text-indigo-700',
  },
  {
    id: 'digital-checklists',
    title: 'Digital Checklists & Tasks',
    shortTitle: 'Digital Checklists',
    icon: ClipboardList,
    description:
      'Streamlined daily operations with customizable task lists, automatic scheduling, and progress tracking for all staff roles.',
    features: ['Customizable task templates', 'Role-based assignments', 'Progress tracking', 'Automated scheduling'],
    ctaText: 'Explore Checklists',
    ctaAction: 'product/audit-tools',
    mockupContent: { title: 'Daily Operations', subtitle: 'Smart task management', items: ['Opening Procedures', 'Closing Tasks', 'Cleaning Schedule', 'Equipment Checks', 'Staff Assignments', 'Progress Status'] },
    accentBg: 'bg-emerald-600',
    borderColor: 'border-emerald-200',
    iconColor: 'text-emerald-700',
  },
  {
    id: 'staff-management',
    title: 'Staff Management',
    shortTitle: 'Staff Management',
    icon: Users,
    description:
      'Integrated scheduling, training modules, task assignments, and performance tracking with role-based access controls.',
    features: ['Smart scheduling system', 'Training module tracking', 'Performance analytics', 'Role-based permissions'],
    ctaText: 'Manage Staff',
    ctaAction: 'product/features',
    mockupContent: { title: 'Team Management', subtitle: 'Staff operations control', items: ['Schedule Planning', 'Training Progress', 'Task Assignments', 'Performance Reviews', 'Shift Coverage', 'Communication Hub'] },
    accentBg: 'bg-orange-600',
    borderColor: 'border-orange-200',
    iconColor: 'text-orange-700',
  },
  {
    id: 'analytics-reporting',
    title: 'Analytics & Reporting',
    shortTitle: 'Analytics & Reporting',
    icon: BarChart3,
    description:
      'Real-time insights into food costs, waste reduction, compliance scores, and operational efficiency across all locations.',
    features: ['Real-time dashboards', 'Cost analysis reports', 'Compliance scoring', 'Multi-location analytics'],
    ctaText: 'View Analytics',
    ctaAction: 'product/reporting',
    mockupContent: { title: 'Operations Analytics', subtitle: 'Data-driven insights', items: ['Food Cost Analysis', 'Waste Tracking', 'Compliance Scores', 'Performance Metrics', 'Trend Analysis', 'ROI Reports'] },
    accentBg: 'bg-violet-600',
    borderColor: 'border-violet-200',
    iconColor: 'text-violet-700',
  },
];

export function RestaurantPlatformExplorer({ onNavigate, className }: RestaurantPlatformExplorerProps) {
  const [activeTab, setActiveTab] = useState(platformFeatures[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const [loadStartTime] = useState(Date.now());
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for animations and performance tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const loadTime = Date.now() - loadStartTime;
          trackInteraction('platform_explorer_loaded', { ms: loadTime });
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [loadStartTime]);

  const activeFeature = platformFeatures.find((f) => f.id === activeTab) || platformFeatures[0];

  const handleTabChange = useCallback(
    (tabId: string) => {
      const feature = platformFeatures.find((f) => f.id === tabId);
      if (!feature) return;
      setActiveTab(tabId);
      trackInteraction('tab_change', { from: activeTab, to: tabId, feature: feature.title });
    },
    [activeTab]
  );

  const handleCTAClick = useCallback(() => {
    trackInteraction('cta_click', { section: 'platform_explorer', feature: activeFeature.title, action: activeFeature.ctaAction });
    onNavigate?.(activeFeature.ctaAction);
  }, [activeFeature, onNavigate]);

  const handleDemoClick = useCallback(() => {
    trackInteraction('demo_click', { section: 'platform_explorer', feature: activeFeature.title });
    onNavigate?.('demo');
  }, [activeFeature, onNavigate]);

  return (
    <section ref={sectionRef} className={cn('py-16 lg:py-24 bg-background relative', className)}>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={cn('text-center mb-16 space-y-6 transition-all duration-1000', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <div className="space-y-4">
            <Badge variant="outline" className="px-4 py-2 bg-background border-border text-muted-foreground">Restaurant Operations Platform</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Explore Our Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Discover how OpsFlow AI streamlines every aspect of restaurant operations with integrated tools designed for the hospitality industry.</p>
          </div>
        </div>

        <div className={cn('transition-all duration-1000 delay-300', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full" aria-label="Restaurant platform features">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto p-1 bg-muted/50 border border-border">
              {platformFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <TabsTrigger key={feature.id} value={feature.id} className="flex flex-col items-center gap-2 p-4 text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:border-border">
                    <Icon className={cn('h-5 w-5', activeTab === feature.id ? feature.iconColor : 'text-muted-foreground')} />
                    <span className={cn('hidden sm:block text-sm', activeTab === feature.id ? 'text-foreground font-medium' : 'text-muted-foreground')}>{feature.shortTitle}</span>
                    <span className={cn('block sm:hidden text-xs', activeTab === feature.id ? 'text-foreground font-medium' : 'text-muted-foreground')}>{feature.shortTitle.split(' ')[0]}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {platformFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <TabsContent key={feature.id} value={feature.id} className="mt-12 data-[state=active]:animate-fade-in-up">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className={cn('flex h-12 w-12 items-center justify-center rounded-lg shrink-0 text-white', feature.accentBg)}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="space-y-2">
                            <Badge variant="outline" className={cn('text-xs px-2 py-1 bg-background border', feature.borderColor, feature.iconColor)}>
                              {feature.shortTitle}
                            </Badge>
                            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground leading-tight">{feature.title}</h3>
                          </div>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {feature.features.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className={cn('flex h-5 w-5 items-center justify-center rounded-full shrink-0 text-white', feature.accentBg)}>
                                <CheckCircle className="h-3 w-3" />
                              </div>
                              <span className="text-sm font-medium text-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button onClick={handleCTAClick} className={cn(feature.accentBg, 'text-white hover:opacity-90 shadow-sm')}>{feature.ctaText}<ChevronRight className="ml-2 h-4 w-4" /></Button>
                        <Button variant="outline" onClick={handleDemoClick} className="border-border text-muted-foreground hover:text-foreground hover:bg-muted/50"><Play className="mr-2 h-4 w-4" />Watch Demo</Button>
                      </div>
                    </div>
                    <div className="relative">
                      <Card className="border border-border shadow-lg bg-background">
                        <CardHeader className="pb-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={cn('flex h-8 w-8 items-center justify-center rounded-lg text-white', feature.accentBg)}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground text-sm">{feature.mockupContent.title}</h4>
                              <p className="text-xs text-muted-foreground">{feature.mockupContent.subtitle}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-2">
                            {feature.mockupContent.items.map((item, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors duration-200">
                                <div className={cn('flex h-4 w-4 items-center justify-center rounded-full shrink-0 text-white', feature.accentBg)}>
                                  <CheckCircle className="h-2.5 w-2.5" />
                                </div>
                                <span className="text-sm font-medium text-foreground flex-1">{item}</span>
                              </div>
                            ))}
                          </div>
                          <Button className={cn('w-full mt-4 text-white text-sm h-9', feature.accentBg)} size="sm">View Details</Button>
                        </CardContent>
                      </Card>
                      <div className={cn('absolute -top-2 -right-2 text-white px-2 py-1 rounded-full text-xs shadow', feature.accentBg)}>Live</div>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>

        <div className={cn('text-center mt-16 transition-all duration-1000 delay-600', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <Card className="max-w-2xl mx-auto border border-border bg-background shadow-sm">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Ready to streamline your operations?</h3>
                  <p className="text-muted-foreground">Join 5,000+ restaurants using OpsFlow AI</p>
                </div>
                <Button onClick={() => onNavigate?.('pricing')} className="bg-sky-700 hover:bg-sky-800 text-white shadow-sm">Start Free Trial</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

