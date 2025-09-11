"use client";

import { ArrowRight, RefreshCcw } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

import { Button } from "@/components/ui/button";

// Mock NumberFlow component since we don't have the dependency
const NumberFlow = ({ value, prefix = "", suffix = "", className = "" }: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  className?: string; 
}) => (
  <span className={className}>{prefix}{value}{suffix}</span>
);

// Variants and energy to pace visual emphasis
export type StatVariant = 'ambient' | 'outline' | 'ghost' | 'mono';
export type Energy = 'subtle' | 'balanced' | 'bold';

function getTileClasses(variant: StatVariant, energy: Energy) {
  const energyMap = {
    subtle: {
      ring: 'ring-1 ring-border/40',
      blur: 'backdrop-blur-sm',
      shadow: 'shadow-sm',
    },
    balanced: {
      ring: 'ring-1 ring-border/30',
      blur: 'backdrop-blur-md',
      shadow: 'shadow',
    },
    bold: {
      ring: 'ring-1 ring-border/20',
      blur: 'backdrop-blur-md',
      shadow: 'shadow-lg',
    },
  } as const;

  switch (variant) {
    case 'ambient':
      return `bg-brand-gradient text-primary-foreground ${energyMap[energy].shadow} ${energyMap[energy].blur} ring-1 ring-primary/25`;
    case 'outline':
      return `bg-card/60 text-foreground ${energyMap[energy].ring} ${energyMap[energy].blur}`;
    case 'ghost':
      return `bg-transparent text-foreground hover:ring-1 hover:ring-border/30`;
    case 'mono':
      return `bg-transparent text-muted-foreground`;
  }
}

function getValueClasses(variant: StatVariant) {
  switch (variant) {
    case 'ambient':
      return 'text-primary-foreground';
    case 'outline':
    case 'ghost':
      return 'text-primary';
    case 'mono':
      return 'text-muted-foreground';
  }
}

interface KPIShowcaseProps {
  industry?: "restaurants" | "bars" | "coffee" | "hotels";
  variant?: StatVariant; // default look for non-lead items
  energy?: Energy;       // controls blur/shadow intensity
  leadKey?: string;      // the single KPI key to elevate to 'ambient'
}

export function KPIShowcase({ industry = "restaurants", variant = 'outline', energy = 'balanced', leadKey }: KPIShowcaseProps) {
  const [showMonthlyStats, setShowMonthlyStats] = useState(false);
  const [stats, setStats] = useState({
    monthly: {
      Revenue: 0,
      Locations: 0,
      Efficiency: 0,
      Compliance: 0,
      Savings: 0,
    },
    yearly: {
      Revenue: 0,
      Locations: 0,
      Efficiency: 0,
      Compliance: 0,
      Savings: 0,
    },
  });

  const { trackEvent } = useRestaurantAnalytics();
  const ref = useRef(null);

  const industryConfig = {
    restaurants: {
      title: "We don't just talk, we deliver restaurant results",
      subtitle: "Real performance improvements from restaurant operations using OpsFlow to optimize their daily workflows and compliance.",
      color: "oklch(0.70 0.15 25)",
      finalStats: {
        monthly: {
          Revenue: 2.1,
          Locations: 0.2,
          Efficiency: 35,
          Compliance: 99,
          Savings: 15,
        },
        yearly: {
          Revenue: 24.5,
          Locations: 2.5,
          Efficiency: 42,
          Compliance: 99.8,
          Savings: 180,
        },
      },
      kpis: [
        { key: "Locations", label: "Restaurant Locations", suffix: "k+" },
        { key: "Efficiency", label: "Efficiency Improvement", suffix: "%" },
        { key: "Compliance", label: "HACCP Compliance Rate", suffix: "%" },
        { key: "Savings", label: "Cost Savings", prefix: "$", suffix: "K" },
      ]
    },
    bars: {
      title: "Proven results in bar operations excellence",
      subtitle: "Real data from bar operations using OpsFlow to streamline inventory, compliance, and staff coordination.",
      color: "oklch(0.60 0.20 270)",
      finalStats: {
        monthly: {
          Revenue: 1.8,
          Locations: 0.15,
          Efficiency: 28,
          Compliance: 97,
          Savings: 12,
        },
        yearly: {
          Revenue: 19.2,
          Locations: 1.8,
          Efficiency: 35,
          Compliance: 98.5,
          Savings: 144,
        },
      },
      kpis: [
        { key: "Locations", label: "Bar Locations", suffix: "k+" },
        { key: "Efficiency", label: "Service Efficiency", suffix: "%" },
        { key: "Compliance", label: "Alcohol Compliance", suffix: "%" },
        { key: "Savings", label: "Inventory Savings", prefix: "$", suffix: "K" },
      ]
    },
    coffee: {
      title: "Real results from coffee shop optimization",
      subtitle: "Performance data from coffee shops using OpsFlow to maintain quality standards and operational efficiency.",
      color: "oklch(0.65 0.18 80)",
      finalStats: {
        monthly: {
          Revenue: 1.2,
          Locations: 0.08,
          Efficiency: 25,
          Compliance: 95,
          Savings: 8,
        },
        yearly: {
          Revenue: 14.4,
          Locations: 0.8,
          Efficiency: 30,
          Compliance: 97.5,
          Savings: 96,
        },
      },
      kpis: [
        { key: "Locations", label: "Coffee Shops", suffix: "k+" },
        { key: "Efficiency", label: "Equipment Efficiency", suffix: "%" },
        { key: "Compliance", label: "Quality Standards", suffix: "%" },
        { key: "Savings", label: "Waste Reduction", prefix: "$", suffix: "K" },
      ]
    },
    hotels: {
      title: "Exceptional hotel operations performance",
      subtitle: "Real metrics from hotel properties using OpsFlow to coordinate departments and enhance guest satisfaction.",
      color: "oklch(0.55 0.15 210)",
      finalStats: {
        monthly: {
          Revenue: 3.2,
          Locations: 0.04,
          Efficiency: 32,
          Compliance: 96,
          Savings: 25,
        },
        yearly: {
          Revenue: 38.4,
          Locations: 0.4,
          Efficiency: 38,
          Compliance: 97.2,
          Savings: 300,
        },
      },
      kpis: [
        { key: "Locations", label: "Hotel Properties", suffix: "+" },
        { key: "Efficiency", label: "Operational Efficiency", suffix: "%" },
        { key: "Compliance", label: "Guest Satisfaction", suffix: "%" },
        { key: "Savings", label: "Operational Savings", prefix: "$", suffix: "K" },
      ]
    }
  };

  const config = industryConfig[industry];
  const finalStats = useMemo(() => config.finalStats, [config]);

  useEffect(() => {
    // Simulate intersection observer
    setStats(finalStats);
  }, [finalStats]);

  const handleStatsToggle = () => {
    setShowMonthlyStats(!showMonthlyStats);
    trackEvent("kpi_stats_toggle", {
      industry,
      view: showMonthlyStats ? "yearly" : "monthly"
    });
  };

  const handleGetStarted = () => {
    trackEvent("kpi_get_started_click", { industry });
    window.location.href = `/start-trial?industry=${industry}`;
  };

  return (
    <section className="section-marketing">
      <div className="container flex justify-center">
        <div className="flex w-full flex-col justify-between gap-8 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <h1 className="heading-brand-gradient w-full text-4xl font-bold lg:text-6xl">
              {config.title}
            </h1>
            <p className="my-4 text-lg tracking-tight text-muted-foreground">
              {config.subtitle}
            </p>
            <Button
              onClick={handleGetStarted}
              className="cta-shimmer group text-md mt-10 flex w-fit items-center justify-center gap-2 rounded-full px-6 py-3 tracking-tight bg-primary text-primary-foreground hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span>Get Started With OpsFlow</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
            <div className="mt-10 lg:w-[115%]">
              {/* Simplified Graph Component */}
              <div className="h-48 rounded-lg border p-4 bg-muted/30">
                <div className="h-full flex items-end justify-between">
                  {[65, 78, 85, 92, 88, 95].map((height, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div 
                        className="w-8 rounded-t bg-primary"
                        style={{ 
                          height: `${height}%`
                        }}
                      />
                      <span className="text-xs text-muted-foreground mt-2">
                        Q{i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div ref={ref} className="flex w-full flex-col items-end lg:w-1/2">
            <h1 className="text-6xl leading-none lg:text-8xl font-bold">
              <NumberFlow
                value={
                  showMonthlyStats
                    ? stats.monthly.Revenue
                    : stats.yearly.Revenue
                }
                prefix="$"
                suffix="M"
                className="font-bold"
              />
            </h1>
            <div className="mb-6 flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-8">
              <p className="text-muted-foreground">
                {showMonthlyStats ? "Monthly" : "Annual"} revenue impact
              </p>
              <Button
                variant="secondary"
                className="group text-sm flex w-fit items-center justify-center gap-2 rounded-full px-6 py-2 tracking-tight shadow-none transition-all duration-300 ease-out active:scale-95"
                onClick={handleStatsToggle}
              >
                <span>Show {showMonthlyStats ? "Yearly" : "Monthly"} Stats</span>
                <RefreshCcw className="size-4 transition-all ease-out group-hover:rotate-180" />
              </Button>
            </div>
            
            <div className="mt-auto mb-10 grid w-full grid-cols-2 gap-8">
              {config.kpis.map((kpi, index) => {
                const isLead = leadKey ? kpi.key === leadKey : false;
                const appliedVariant: StatVariant = isLead ? 'ambient' : variant;
                return (
                  <div 
                    key={kpi.key}
                    className={`${index % 2 === 0 ? "text-left" : "text-right"} tile-hover group cursor-pointer rounded-xl p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-200 hover:scale-105 ${getTileClasses(appliedVariant, energy)}`}
                    onClick={() => trackEvent("kpi_metric_clicked", {
                      industry,
                      metric: kpi.label,
                      value: showMonthlyStats ? stats.monthly[kpi.key as keyof typeof stats.monthly] : stats.yearly[kpi.key as keyof typeof stats.yearly]
                    })}
                  >
                    <h2 
                      className={`text-3xl font-bold lg:text-5xl ${getValueClasses(appliedVariant)}`}
                    >
                      <NumberFlow
                        value={
                          showMonthlyStats
                            ? stats.monthly[kpi.key as keyof typeof stats.monthly]
                            : stats.yearly[kpi.key as keyof typeof stats.yearly]
                        }
                        prefix={kpi.prefix}
                        suffix={kpi.suffix}
                      />
                    </h2>
                    <p className="text-muted-foreground/70 text-sm lg:text-base">
                      {kpi.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

