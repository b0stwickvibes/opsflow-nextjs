"use client";

import { CheckCircle2, CircleMinus } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";
import { cn } from "@/lib/utils";

interface ComparisonTableProps {
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  heading?: string;
  subheading?: string;
  ourProduct?: string;
  competitorProduct?: string;
  className?: string;
}

interface ComparisonItem {
  feature: string;
  ourProduct: boolean;
  competitor: boolean;
  industrySpecific?: {
    [K in IndustryType]?: {
      feature?: string;
      description?: string;
    };
  };
}

export function ComparisonTable({
  industry = 'restaurants',
  role = 'general',
  heading = "OpsFlow vs Traditional Systems: The Clear Choice",
  subheading = "OpsFlow isn't just an alternative to legacy restaurant management systems. It offers enhanced features and capabilities, making it easier to achieve operational excellence with a modern, intuitive interface designed for today's restaurant industry needs.",
  ourProduct = "OpsFlow",
  competitorProduct = "Legacy Systems",
  className,
}: ComparisonTableProps) {
  const { trackInteraction } = useRestaurantAnalytics();

  const getDefaultFeatures = (): ComparisonItem[] => {
    const baseFeatures = [
      {
        feature: "Basic POS Integration",
        ourProduct: true,
        competitor: true,
      },
      {
        feature: "Multi-Location Management",
        ourProduct: true,
        competitor: true,
      },
      {
        feature: "Advanced Kitchen Display",
        ourProduct: true,
        competitor: false,
        industrySpecific: {
          bars: { feature: "Smart Bar Display System" },
          coffee: { feature: "Barista Workflow Display" },
          hotels: { feature: "Multi-Venue Order Display" },
        },
      },
      {
        feature: "Real-time HACCP Monitoring",
        ourProduct: true,
        competitor: false,
        industrySpecific: {
          bars: { feature: "Safety & Sanitation Tracking" },
          coffee: { feature: "Quality Control Monitoring" },
          hotels: { feature: "Food Safety Compliance" },
        },
      },
      {
        feature: "Predictive Analytics",
        ourProduct: true,
        competitor: false,
        industrySpecific: {
          bars: { feature: "Demand Forecasting" },
          coffee: { feature: "Sales Trend Analysis" },
          hotels: { feature: "Guest Preference Analytics" },
        },
      },
      {
        feature: "Mobile Staff Communication",
        ourProduct: true,
        competitor: false,
        industrySpecific: {
          bars: { feature: "Floor-to-Bar Messaging" },
          coffee: { feature: "Team Coordination Hub" },
          hotels: { feature: "Multi-Department Communication" },
        },
      },
      {
        feature: "AI-Powered Scheduling",
        ourProduct: true,
        competitor: false,
        industrySpecific: {
          bars: { feature: "Peak Hour Optimization" },
          coffee: { feature: "Rush Hour Staffing" },
          hotels: { feature: "Cross-Venue Scheduling" },
        },
      },
    ];

    return baseFeatures.map(item => ({
      ...item,
      feature: getIndustryFeature(item),
    }));
  };

  const getIndustryFeature = (item: ComparisonItem): string => {
    if (industry !== 'general' && item.industrySpecific?.[industry as IndustryType]) {
      return item.industrySpecific[industry as IndustryType]!.feature || item.feature;
    }
    return item.feature;
  };

  const getIndustryColors = () => {
    switch (industry) {
      case 'restaurants': return 'border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/20';
      case 'bars': return 'border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-950/20';
      case 'coffee': return 'border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20';
      case 'hotels': return 'border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/20';
      default: return 'border-border bg-muted/50 dark:border-gray-800 dark:bg-gray-950/20';
    }
  };

  const getCompetitorDescription = () => {
    const descriptions = {
      restaurants: "Legacy restaurant management systems are reliable solutions designed for basic operations and smaller establishments. They provide essential functionality for those getting started or requiring fundamental features. While they offer straightforward interfaces, they may lack advanced capabilities needed for scaling operations or handling complex multi-location workflows.",
      bars: "Traditional bar management systems provide basic functionality for simple operations. They cover essential point-of-sale and inventory needs but often lack the sophisticated features required for high-volume establishments, event management, or advanced beverage program optimization.",
      coffee: "Standard coffee shop systems handle basic transactions and simple inventory tracking. However, they typically miss advanced features like brew quality monitoring, rush hour optimization, or sophisticated customer preference analytics that modern coffee operations need.",
      hotels: "Basic hospitality management systems cover fundamental operations but often lack integration across dining venues, room service coordination, and the comprehensive guest experience management that modern hotels require for competitive advantage.",
      general: "Legacy systems provide reliable solutions designed for basic needs and smaller operations. They offer essential functionality for those getting started but may lack advanced capabilities needed for scaling or complex workflows.",
    };
    return descriptions[industry as keyof typeof descriptions] || descriptions.general;
  };

  const features = getDefaultFeatures();

  const handleFeatureView = (feature: string, hasFeature: boolean) => {
    trackInteraction('comparison_feature_view', {
      industry,
      role,
      feature,
      has_feature: hasFeature,
      our_product: ourProduct,
    });
  };

  return (
    <section className={cn("bg-muted/50 py-32", className)}>
      <div className="container">
        <div className="text-center">
          <h1 
            className="text-display-2xl mb-6  font-semibold md:text-7xl"
            role="heading"
            aria-level={1}
          >
            {heading}
          </h1>
          <p className="enterprise-body mx-auto max-w-4xl text-muted-foreground md:">
            {subheading}
          </p>
        </div>
        
        <div className="mt-28">
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            {/* Our Product */}
            <div 
              className={cn(
                "rounded-xl border shadow",
                getIndustryColors()
              )}
            >
              <div className="p-6">
                <span className="flex items-center justify-center gap-2 font-medium">
                  <div className="flex size-7 items-center justify-center rounded bg-primary text-primary-foreground text-sm font-bold">
                    O
                  </div>
                  {ourProduct}
                </span>
                <Separator className="my-6" />
                <ul className="space-y-2" role="list">
                  {features.map((item, index) => (
                    <li 
                      key={index} 
                      className="flex items-center gap-2"
                      onClick={() => handleFeatureView(item.feature, item.ourProduct)}
                    >
                      <CheckCircle2 
                        className="h-5 w-5 shrink-0 text-emerald-700" 
                        aria-hidden="true"
                      />
                      <span className="text-sm">{item.feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Competitor Product */}
            <div className="rounded-xl bg-border/40 p-6">
              <span className="flex items-center justify-center gap-2 font-medium">
                <div className="flex size-7 items-center justify-center rounded bg-muted-foreground text-muted text-sm font-bold">
                  L
                </div>
                {competitorProduct}
              </span>
              <Separator className="my-6" />
              <ul className="space-y-2" role="list">
                {features.map((item, index) => (
                  <li 
                    key={index} 
                    className={cn(
                      "flex items-center gap-2",
                      !item.competitor && "text-muted-foreground line-through"
                    )}
                    onClick={() => handleFeatureView(item.feature, item.competitor)}
                  >
                    {item.competitor ? (
                      <CheckCircle2 
                        className="h-5 w-5 shrink-0 text-emerald-700" 
                        aria-hidden="true"
                      />
                    ) : (
                      <CircleMinus 
                        className="h-5 w-5 shrink-0 opacity-50" 
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-sm">{item.feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 
            className="mb-4 text-3xl font-semibold"
            role="heading"
            aria-level={2}
          >
            Who are {competitorProduct} suitable for?
          </h2>
          <p className="enterprise-body leading-6 text-muted-foreground md:">
            {getCompetitorDescription()}
          </p>
          
          <h2 
            className="mt-16 mb-4 text-3xl font-semibold"
            role="heading"
            aria-level={2}
          >
            Key Differences and Considerations
          </h2>
          <p className="enterprise-body leading-6 text-muted-foreground md:">
            When choosing between {ourProduct} and {competitorProduct}, consider your 
            long-term operational needs and growth plans. {ourProduct} offers advanced 
            restaurant-specific features, better scalability, and comprehensive support 
            options. While {competitorProduct} might be suitable for basic use cases, 
            {ourProduct} provides a more comprehensive solution for teams looking to 
            optimize their {industry === 'general' ? 'operations' : 
              industry === 'restaurants' ? 'restaurant operations' :
              industry === 'bars' ? 'bar operations' :
              industry === 'coffee' ? 'coffee shop operations' :
              'hospitality operations'} and enhance customer experience.
          </p>
        </div>
      </div>
    </section>
  );
}