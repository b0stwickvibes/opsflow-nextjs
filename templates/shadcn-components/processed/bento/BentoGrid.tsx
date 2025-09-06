"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChefHat,
  Clock,
  Shield,
  Users,
  Calendar,
  TrendingUp,
} from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";

interface BentoGridProps {
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  heading?: string;
  subheading?: string;
  badgeText?: string;
  className?: string;
}

interface GridItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  industrySpecific?: {
    [K in IndustryType]?: {
      title?: string;
      description?: string;
    };
  };
}

export function BentoGrid({
  industry = 'restaurants',
  role = 'general',
  heading = "Complete Restaurant Operations Suite",
  subheading = "Streamlined solutions for modern foodservice management",
  badgeText = "Operations Hub",
  className,
}: BentoGridProps) {
  const { trackInteraction } = useRestaurantAnalytics();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const defaultItems: GridItem[] = [
    {
      title: "HACCP Compliance",
      description: "Automated food safety protocols and real-time compliance monitoring for health inspections",
      icon: Shield,
      industrySpecific: {
        bars: { title: "Safety Protocols", description: "Automated safety and sanitation tracking for bar operations" },
        coffee: { title: "Quality Control", description: "Coffee quality standards and health compliance monitoring" },
        hotels: { title: "Guest Safety", description: "Comprehensive safety protocols for dining operations" },
      },
    },
    {
      title: "Kitchen Coordination",
      description: "Real-time kitchen display systems with order prioritization and timing optimization",
      icon: ChefHat,
      industrySpecific: {
        bars: { title: "Service Coordination", description: "Streamlined drink preparation and service timing" },
        coffee: { title: "Brew Management", description: "Coordinated espresso and brewing station workflows" },
        hotels: { title: "Multi-Outlet Coordination", description: "Synchronized operations across dining venues" },
      },
    },
    {
      title: "Shift Management",
      description: "Smart scheduling with labor cost optimization and compliance tracking",
      icon: Clock,
      industrySpecific: {
        bars: { title: "Bar Scheduling", description: "Peak hour staffing optimization for bars and nightlife" },
        coffee: { title: "Barista Scheduling", description: "Rush hour coverage and skill-based shift assignments" },
        hotels: { title: "Hospitality Scheduling", description: "Multi-department coordination and coverage" },
      },
    },
    {
      title: "Team Communication",
      description: "Integrated messaging and task management for seamless front-of-house coordination",
      icon: Users,
      industrySpecific: {
        bars: { title: "Floor Communication", description: "Real-time coordination between bar, servers, and security" },
        coffee: { title: "Crew Messaging", description: "Quick communication for busy coffee shop operations" },
        hotels: { title: "Guest Service Coordination", description: "Seamless communication across all service touchpoints" },
      },
    },
    {
      title: "Inventory Control",
      description: "Real-time stock tracking with automated reordering and waste reduction analytics",
      icon: TrendingUp,
      industrySpecific: {
        bars: { title: "Liquor Management", description: "Precision tracking for high-value beverage inventory" },
        coffee: { title: "Bean & Supply Tracking", description: "Fresh inventory rotation and supplier management" },
        hotels: { title: "Multi-Venue Inventory", description: "Centralized inventory across restaurant and room service" },
      },
    },
    {
      title: "Event Planning",
      description: "Comprehensive event management with capacity planning and special menu coordination",
      icon: Calendar,
      industrySpecific: {
        bars: { title: "Event Coordination", description: "Private parties, live music, and special event management" },
        coffee: { title: "Catering Management", description: "Corporate orders and special event coordination" },
        hotels: { title: "Function Management", description: "Banquet coordination and special dining events" },
      },
    },
  ];

  const getIndustryItem = (item: GridItem) => {
    if (industry !== 'general' && item.industrySpecific?.[industry as IndustryType]) {
      const specific = item.industrySpecific[industry as IndustryType]!;
      return {
        ...item,
        title: specific.title || item.title,
        description: specific.description || item.description,
      };
    }
    return item;
  };

  const handleItemHover = (idx: number | null) => {
    setHoveredIndex(idx);
    if (idx !== null) {
      trackInteraction('bento_grid_hover', {
        industry,
        role,
        item_index: idx,
        item_title: getIndustryItem(defaultItems[idx]).title,
      });
    }
  };

  const getIndustryColors = () => {
    switch (industry) {
      case 'restaurants': return 'from-orange-500/10 to-red-500/10 text-orange-600 dark:text-orange-400';
      case 'bars': return 'from-purple-500/10 to-indigo-500/10 text-purple-600 dark:text-purple-400';
      case 'coffee': return 'from-amber-500/10 to-yellow-500/10 text-amber-700 dark:text-amber-400';
      case 'hotels': return 'from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400';
      default: return 'from-slate-500/10 to-gray-500/10 text-slate-600 dark:text-slate-400';
    }
  };

  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <p className="bg-muted rounded-full px-4 py-1 text-xs uppercase tracking-wide">
          {badgeText}
        </p>
        <h2 
          className="relative z-20 py-2 text-center font-sans text-5xl font-semibold tracking-tighter md:py-7 lg:text-6xl"
          role="heading"
          aria-level={2}
        >
          {heading}
        </h2>
        <p className="text-md text-muted-foreground mx-auto max-w-xl text-center lg:text-lg">
          {subheading}
        </p>

        <div className="relative mt-10 grid w-full max-w-4xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {defaultItems.map((item, idx) => {
            const industryItem = getIndustryItem(item);
            return (
              <div
                key={idx}
                className="group relative block h-full w-full p-2"
                onMouseEnter={() => handleItemHover(idx)}
                onMouseLeave={() => handleItemHover(null)}
                role="presentation"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {hoveredIndex === idx && (
                    <motion.span
                      className={cn(
                        "absolute inset-0 block h-full w-full rounded-2xl bg-gradient-to-br",
                        getIndustryColors()
                      )}
                      layoutId="hoverBackground"
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>

                <BentoCard
                  title={industryItem.title}
                  description={industryItem.description}
                  icon={industryItem.icon}
                  className="flex flex-col items-center justify-center"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const BentoCard = ({
  className,
  title,
  description,
  icon: Icon,
}: {
  className?: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <div
      className={cn(
        "bg-muted relative z-20 flex h-full flex-col items-center justify-center gap-4 rounded-2xl p-5 text-center transition-colors hover:bg-muted/80",
        className,
      )}
      role="article"
      aria-labelledby={`bento-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <Icon 
        className="text-muted-foreground mt-3 size-8 stroke-1" 
        aria-hidden="true"
      />
      <h1 
        id={`bento-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="text-2xl font-semibold tracking-tight"
      >
        {title}
      </h1>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};