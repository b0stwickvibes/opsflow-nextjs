"use client";

import {
  ArrowRight,
  ChefHat,
  Thermometer,
  CheckSquare,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";

interface SplitScreenHeroFeature {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface SplitScreenHeroProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  features?: SplitScreenHeroFeature[];
  heroImage?: string;
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  energy?: 'subtle' | 'balanced' | 'bold';
  className?: string;
}

const defaultRestaurantFeatures: SplitScreenHeroFeature[] = [
  {
    title: "Kitchen Workflows",
    description: "Streamline prep tasks, cooking schedules, and equipment maintenance.",
    icon: ChefHat,
  },
  {
    title: "HACCP Monitoring",
    description: "Real-time temperature tracking and food safety compliance.",
    icon: Thermometer,
  },
  {
    title: "Task Automation",
    description: "Automated checklists and staff assignment optimization.",
    icon: CheckSquare,
  },
  {
    title: "Performance Metrics",
    description: "Live dashboards showing efficiency and compliance scores.",
    icon: BarChart3,
  },
];

export function SplitScreenHero({
  title = "Restaurant Operations Built for Excellence",
  subtitle = "Complete operational control with HACCP compliance, task automation, and real-time analytics designed specifically for restaurant environments.",
  primaryCTA = "Start Restaurant Trial",
  secondaryCTA = "Schedule Demo",
  features = defaultRestaurantFeatures,
  heroImage = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop",
  industry = 'restaurants',
  role = 'general',
  energy = 'balanced',
  className
}: SplitScreenHeroProps) {
  const { trackHeroCTA } = useRestaurantAnalytics();

  const handlePrimaryClick = () => {
    trackHeroCTA(industry, 'split-screen', primaryCTA);
  };

  const handleSecondaryClick = () => {
    trackHeroCTA(industry, 'split-screen', secondaryCTA);
  };

  const energySectionClass = energy === 'subtle'
    ? "relative mx-2.5 mt-2.5 rounded-b-[36px] rounded-t-2xl lg:mx-4 bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-orange-950/10 dark:via-background dark:to-blue-950/10"
    : energy === 'bold'
      ? "relative mx-2.5 mt-2.5 rounded-b-[36px] rounded-t-2xl lg:mx-4 bg-gradient-to-br from-orange-100 via-white to-blue-100 dark:from-orange-900/30 dark:via-background dark:to-blue-900/30"
      : "relative mx-2.5 mt-2.5 rounded-b-[36px] rounded-t-2xl lg:mx-4 bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-orange-950/20 dark:via-background dark:to-blue-950/20";
  return (
    <section className={cn(
      energySectionClass,
      className
    )}>
      <div className="py-16 md:py-24 lg:py-32">
        <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:items-center">
          {/* Left side - Main content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <h1 className="text-display-2xl text-gray-900 dark:text-gray-100">
                {title}
              </h1>

              <p className="text-muted-foreground text-xl leading-relaxed lg:text-2xl">
                {subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg"
                onClick={handlePrimaryClick}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {primaryCTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleSecondaryClick}
                className="px-8 py-6 text-lg font-semibold bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-gray-300 transition-all duration-200"
              >
                {secondaryCTA}
              </Button>
            </div>

            {/* Restaurant Features Grid */}
            <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30">
                      <Icon className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="flex-1 lg:pl-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-900/20 dark:to-blue-900/20">
              <img
                src={heroImage}
                alt="Restaurant operations dashboard showing real-time metrics and task management"
                className="h-[400px] w-full object-cover lg:h-[600px]"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              
              {/* Floating elements for visual interest */}
              <div className="absolute top-4 right-4 rounded-lg bg-green-500 px-3 py-1 text-white text-sm font-medium shadow-lg">
                99.8% HACCP Compliant
              </div>
              <div className="absolute bottom-4 left-4 rounded-lg bg-blue-500 px-3 py-1 text-white text-sm font-medium shadow-lg">
                Real-time Monitoring
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}