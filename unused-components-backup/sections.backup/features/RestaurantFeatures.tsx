'use client';

/**
 * RestaurantFeatures - Fixed for all screen sizes
 * Properly responsive grid layout that works on mobile
 */

import { ThermometerSnowflake, Users2, ClipboardCheck, BarChart3 } from 'lucide-react';
import { useEffect } from 'react';

import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

// Restaurant operations features - simplified for better layout
const features = [
  {
    icon: ThermometerSnowflake,
    title: 'HACCP Compliance',
    description: 'Automate temperature monitoring and food safety.',
    subDescription:
      'Bluetooth sensors automatically log temperatures for walk-ins, reach-ins and line equipment. Receive alerts when temperatures fall outside safe ranges and document corrective actions digitally.',
  },
  {
    icon: Users2,
    title: 'Staff Management', 
    description: 'Optimize your restaurant team.',
    subDescription:
      'Schedule shifts, track performance, and manage training all in one place. Digital checklists ensure consistent execution across all shifts and locations with real-time visibility.',
  },
  {
    icon: ClipboardCheck,
    title: 'Operations Checklists',
    description: 'Consistent execution every time.',
    subDescription:
      'Digital opening, closing, and shift checklists ensure nothing falls through the cracks. Managers get real-time visibility into task completion status across all locations.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Data-driven restaurant management.',
    subDescription:
      'Track key metrics like labor costs, compliance rates, and operational efficiency. Identify trends and opportunities to optimize your restaurant operations with comprehensive reporting.',
  },
];

export function RestaurantFeatures() {
  // Register with layout validator
  useEffect(() => {
    registerComponentLayout('RestaurantFeatures', 'marketing');
  }, []);

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">Premium Restaurant Operations</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade tools designed specifically for restaurants, bars, and hospitality businesses
          </p>
        </div>

        {/* Features Grid - Fixed responsive layout */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border bg-background p-6 shadow-sm w-full"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <h4 className="text-foreground font-medium text-base">{feature.description}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.subDescription}
                </p>
              </div>

              {/* Placeholder for dashboard screenshot */}
              <div className="mt-4 aspect-video bg-muted rounded-lg flex items-center justify-center border">
                <feature.icon className="size-8 text-primary/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}