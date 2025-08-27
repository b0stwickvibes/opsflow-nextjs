'use client';
import { useEffect, useState } from 'react';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';
import { Card, CardContent } from '@/components/ui/card';
import { trackInteraction } from '@/lib/analytics';

interface SuccessMetric {
  metric: string;
  description: string;
  value: string | number;
  previousValue?: string | number;
  changePercentage?: number;
  isPositive?: boolean;
}

const successMetrics: SuccessMetric[] = [
  { 
    metric: "37%", 
    description: "Reduction in audit prep time",
    value: 37,
    previousValue: 0,
    changePercentage: 37,
    isPositive: true
  },
  { 
    metric: "2.8 hrs", 
    description: "Weekly time savings per location",
    value: "2.8 hrs",
    previousValue: "0 hrs",
    changePercentage: 100,
    isPositive: true
  },
  { 
    metric: "99.7%", 
    description: "HACCP compliance rate",
    value: 99.7,
    previousValue: 85,
    changePercentage: 14.7,
    isPositive: true
  },
  { 
    metric: "3.5x", 
    description: "Faster temperature logging",
    value: "3.5x",
    previousValue: "1x",
    changePercentage: 250,
    isPositive: true
  },
  { 
    metric: "24%", 
    description: "Reduction in food waste",
    value: 24,
    previousValue: 0,
    changePercentage: 24,
    isPositive: true
  },
  { 
    metric: "48 min", 
    description: "Daily manager time saved",
    value: "48 min",
    previousValue: "0 min",
    changePercentage: 100,
    isPositive: true
  },
  { 
    metric: "4.9/5", 
    description: "Customer satisfaction",
    value: 4.9,
    previousValue: 4.3,
    changePercentage: 14,
    isPositive: true
  },
  { 
    metric: "14%", 
    description: "Improved staff retention",
    value: 14,
    previousValue: 0,
    changePercentage: 14,
    isPositive: true
  },
];

export function RestaurantSuccessMetrics() {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    registerComponentLayout('RestaurantSuccessMetrics', 'marketing');
    
    // Track component view
    trackInteraction('success_metrics', 'view');
    
    // Detect when component is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          trackInteraction('success_metrics', 'in_view');
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );
    
    const element = document.getElementById('success-metrics');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div id="success-metrics" className="py-12">
      <div className="text-center mb-8">
        <h3 
          className="text-2xl font-semibold mb-2 animate-slide-down"
        >
          Real Results from Real Restaurants
        </h3>
        <p 
          className="text-slate-600 dark:text-slate-400 animate-fade-in"
        >
          Join hundreds of restaurants improving operations with OpsFlow
        </p>
      </div>
      
      <div className="overflow-hidden">
        <div className="flex w-full flex-nowrap overflow-hidden [--duration:40s] [--gap:1rem]">
          <div className="flex w-max animate-marquee items-stretch gap-[--gap]">
            {successMetrics.map((item, index) => (
              <div
                key={index}
                className="mx-4 animate-fade-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <Card className="min-w-[220px] border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-6">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{item.metric}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex w-max animate-marquee items-stretch gap-[--gap]" aria-hidden="true">
            {successMetrics.map((item, index) => (
              <div
                key={`duplicate-${index}`}
                className="mx-4 animate-fade-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <Card className="min-w-[220px] border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-6">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{item.metric}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
