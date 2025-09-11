"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";
import { cn } from "@/lib/utils";

interface CompetitorAnalysisProps {
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  heading?: string;
  modernSolution?: string;
  legacySolution?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

interface DataItem {
  title: string;
  legacy: { value: string; unit?: string; desc: string };
  modern: { value: string; unit?: string; desc: string };
  industrySpecific?: {
    [K in IndustryType]?: {
      title?: string;
      legacy?: { value?: string; unit?: string; desc?: string };
      modern?: { value?: string; unit?: string; desc?: string };
    };
  };
}

export function CompetitorAnalysis({
  industry = 'restaurants',
  role = 'general',
  heading = "Modern Restaurant Operations vs Legacy Systems",
  modernSolution = "OpsFlow Platform",
  legacySolution = "Traditional Setup",
  ctaText = "Get Started",
  onCtaClick,
  className,
}: CompetitorAnalysisProps) {
  const { trackInteraction } = useRestaurantAnalytics();

  const getDefaultData = (): DataItem[] => [
    {
      title: "Implementation Time",
      legacy: {
        value: "18",
        unit: "w",
        desc: "Traditional setup and training cycle"
      },
      modern: {
        value: "3",
        unit: "w",
        desc: "Rapid cloud deployment and onboarding"
      },
      industrySpecific: {
        bars: {
          title: "Setup Timeline",
          legacy: { desc: "Complex bar system integration and staff training" },
          modern: { desc: "Quick deployment for bar operations" }
        },
        coffee: {
          title: "Deployment Speed",
          legacy: { desc: "Extended coffee shop system configuration" },
          modern: { desc: "Fast coffee shop platform setup" }
        },
        hotels: {
          title: "Multi-Venue Setup",
          legacy: { value: "24", desc: "Complex hotel dining system integration" },
          modern: { value: "4", desc: "Unified hotel dining platform deployment" }
        }
      }
    },
    {
      title: "Staff Training Hours",
      legacy: { value: "80", desc: "Extensive training on multiple systems" },
      modern: { value: "12", desc: "Intuitive interface with minimal training" },
      industrySpecific: {
        bars: {
          legacy: { desc: "Complex bartender and server system training" },
          modern: { desc: "Simple bar workflow training" }
        },
        coffee: {
          legacy: { desc: "Multiple barista system certifications" },
          modern: { desc: "Streamlined coffee shop operations training" }
        },
        hotels: {
          legacy: { value: "120", desc: "Multi-department system training" },
          modern: { value: "16", desc: "Unified platform training across venues" }
        }
      }
    },
    {
      title: "Monthly Operating Cost",
      legacy: {
        value: "$2,500",
        desc: "Multiple software licenses and maintenance"
      },
      modern: {
        value: "$450",
        unit: "*",
        desc: "All-in-one platform pricing"
      },
      industrySpecific: {
        bars: {
          legacy: { desc: "Bar management, inventory, and POS systems" },
          modern: { desc: "Comprehensive bar operations platform" }
        },
        coffee: {
          legacy: { value: "$1,800", desc: "Coffee shop management suite" },
          modern: { value: "$350", desc: "Complete coffee operations platform" }
        },
        hotels: {
          legacy: { value: "$4,200", desc: "Multi-venue dining system costs" },
          modern: { value: "$650", desc: "Unified hotel dining platform" }
        }
      }
    },
    {
      title: "System Reliability",
      legacy: { value: "92", unit: "%", desc: "Traditional uptime with maintenance windows" },
      modern: { value: "99.9", unit: "%", desc: "Cloud-native high availability" },
      industrySpecific: {
        bars: {
          legacy: { desc: "Peak hour system strain and downtime" },
          modern: { desc: "Reliable service during busy periods" }
        },
        coffee: {
          legacy: { desc: "Morning rush hour system stress" },
          modern: { desc: "Consistent performance during peak times" }
        },
        hotels: {
          legacy: { value: "89", desc: "Multi-system integration failures" },
          modern: { desc: "Unified platform reliability" }
        }
      }
    },
    {
      title: "ROI Achievement",
      legacy: { value: "18", unit: "m", desc: "Extended payback period" },
      modern: { value: "6", unit: "m", desc: "Rapid return on investment" },
      industrySpecific: {
        bars: {
          legacy: { desc: "Slow efficiency gains in bar operations" },
          modern: { desc: "Quick productivity improvements" }
        },
        coffee: {
          legacy: { value: "15", desc: "Gradual coffee shop optimization" },
          modern: { value: "4", desc: "Fast coffee operation improvements" }
        },
        hotels: {
          legacy: { value: "24", desc: "Complex multi-venue ROI timeline" },
          modern: { value: "8", desc: "Streamlined hotel dining ROI" }
        }
      }
    },
  ];

  const getIndustryData = (item: DataItem): DataItem => {
    if (industry !== 'general' && item.industrySpecific?.[industry as IndustryType]) {
      const specific = item.industrySpecific[industry as IndustryType]!;
      return {
        ...item,
        title: specific.title || item.title,
        legacy: { ...item.legacy, ...specific.legacy },
        modern: { ...item.modern, ...specific.modern },
      };
    }
    return item;
  };

  const handleRowClick = (title: string) => {
    trackInteraction('competitor_analysis_row_click', {
      industry,
      role,
      metric: title,
    });
  };

  const handleCtaClick = () => {
    trackInteraction('competitor_analysis_cta_click', {
      industry,
      role,
      cta_text: ctaText,
    });
    onCtaClick?.();
  };

  const getIndustryColors = () => {
    switch (industry) {
      case 'restaurants': return 'text-orange-600 dark:text-orange-400';
      case 'bars': return 'text-purple-600 dark:text-purple-400';
      case 'coffee': return 'text-amber-600 dark:text-amber-400';
      case 'hotels': return 'text-blue-600 dark:text-blue-400';
      default: return 'text-primary';
    }
  };

  const DATA = getDefaultData().map(getIndustryData);

  return (
    <section className={cn("bg-muted/30 py-32", className)}>
      <div className="container grid grid-cols-4 gap-x-4 gap-y-8 md:grid-cols-8 lg:grid-cols-12">
        {/* Header */}
        <div className="col-span-4 mb-8 max-w-3xl md:col-span-8 md:mb-12 lg:col-span-10 lg:col-start-2 lg:mb-16">
          <h2 
            className="text-display-2xl mb-4 text-center text-3xl font-bold sm:text-left md: lg:text-6xl"
            role="heading"
            aria-level={2}
          >
            {heading}
          </h2>
        </div>

        {/* Column Headers */}
        <div className="col-span-4 px-4 md:col-span-8 lg:col-span-10 lg:col-start-2">
          <div className="grid grid-cols-4 items-center gap-4 md:grid-cols-8">
            <div className="col-span-4 md:col-span-2" aria-hidden="true"></div>
            <div className="col-span-2 ml-0 md:col-span-3 md:ml-32 lg:ml-40 xl:ml-48 2xl:ml-56">
              <h4 className="text-xs font-bold tracking-wider text-muted-foreground uppercase md:text-sm">
                {legacySolution}
              </h4>
            </div>
            <div className="col-span-2 ml-0 md:col-span-3 md:ml-32 lg:ml-40 xl:ml-48 2xl:ml-56">
              <h4 className={cn("text-xs font-bold tracking-wider uppercase md:text-sm", getIndustryColors())}>
                {modernSolution}
              </h4>
            </div>
          </div>
        </div>

        {/* Comparison rows wrapper */}
        <div className="col-span-4 rounded-xl bg-background shadow-sm md:col-span-8 lg:col-span-10 lg:col-start-2">
          {DATA.map((row, index) => (
            <div
              key={index}
              className="group border-t px-4 transition-colors first:rounded-t-xl first:border-t-0 last:rounded-b-xl hover:bg-muted/50 cursor-pointer"
              onClick={() => handleRowClick(row.title)}
              role="row"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleRowClick(row.title);
                }
              }}
            >
              <div className="grid grid-cols-4 items-start gap-4 py-6 md:grid-cols-8 md:py-8">
                <h3 className="enterprise-body col-span-4 mt-2 text-base font-bold md:col-span-2 md:">
                  {row.title}
                </h3>

                {/* Legacy Stat */}
                <div className="col-span-2 flex flex-col md:col-span-3">
                  <div className="ml-0 transition-colors group-hover:text-foreground md:ml-32 lg:ml-40 xl:ml-48 2xl:ml-56">
                    <p className="enterprise-headline mb-1 flex items-baseline text-2xl font-bold text-foreground md:mb-2 md:">
                      {row.legacy.value}
                      {row.legacy.unit && (
                        <sup className="ml-0.5 text-xs text-foreground md:text-sm">
                          {row.legacy.unit}
                        </sup>
                      )}
                    </p>
                    <p className="text-xs leading-tight text-muted-foreground md:text-sm md:leading-normal">
                      {row.legacy.desc}
                    </p>
                  </div>
                </div>

                {/* Modern Stat */}
                <div className="col-span-2 flex flex-col md:col-span-3">
                  <div className={cn("ml-0 transition-colors md:ml-32 lg:ml-40 xl:ml-48 2xl:ml-56", getIndustryColors())}>
                    <p className="enterprise-headline mb-1 flex items-baseline text-2xl font-bold md:mb-2 md:">
                      {row.modern.value}
                      {row.modern.unit && (
                        <sup className="ml-0.5 text-xs md:text-sm">
                          {row.modern.unit}
                        </sup>
                      )}
                    </p>
                    <p className="text-xs leading-tight text-muted-foreground md:text-sm md:leading-normal">
                      {row.modern.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-2">
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground md:text-sm">
                * Pricing varies based on restaurant size and feature requirements
              </p>
              <p className="text-xs text-muted-foreground md:text-sm">
                ^ Implementation timeline may vary depending on current system complexity
              </p>
              <p className="text-xs text-muted-foreground md:text-sm">
                # ROI calculations based on operational efficiency improvements and cost savings
              </p>
            </div>
            <div className="flex justify-end">
              <Button 
                className={cn("rounded-full px-8 transition-transform hover:scale-105", getIndustryColors())}
                onClick={handleCtaClick}
                aria-label={`${ctaText} with ${modernSolution}`}
              >
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}