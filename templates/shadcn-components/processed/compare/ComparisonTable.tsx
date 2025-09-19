"use client";

import { CheckCircle2, CircleMinus, Users, Building, BarChart3, Shield, TrendingUp, MapPin, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
        feature: "Multi-Location POS Integration",
        ourProduct: true,
        competitor: true,
        industrySpecific: {
          bars: { feature: "Bar POS & Inventory System" },
          coffee: { feature: "Coffee Shop POS Integration" },
          hotels: { feature: "Hotel F&B POS Integration" },
        },
      },
      {
        feature: "Kitchen Display Systems",
        ourProduct: true,
        competitor: false,
        industrySpecific: {
          bars: { feature: "Bar Display Systems" },
          coffee: { feature: "Barista Workflow Display" },
          hotels: { feature: "Multi-Venue Kitchen Display" },
        },
      },
      {
        feature: "Real-time HACCP Monitoring",
        ourProduct: true,
        competitor: false,
        industrySpecific: {
          bars: { feature: "Safety & Sanitation Tracking" },
          coffee: { feature: "Food Safety Compliance" },
          hotels: { feature: "Multi-Venue Safety Monitoring" },
        },
      },
      {
        feature: "Staff Scheduling & Communication",
        ourProduct: true,
        competitor: false,
        industrySpecific: {
          bars: { feature: "Bar Staff Coordination" },
          coffee: { feature: "Shift Management System" },
          hotels: { feature: "Hotel Staff Communication" },
        },
      },
      {
        feature: "Advanced Analytics & Reporting",
        ourProduct: true,
        competitor: false,
        industrySpecific: {
          bars: { feature: "Bar Performance Analytics" },
          coffee: { feature: "Coffee Shop Metrics" },
          hotels: { feature: "Hotel F&B Analytics" },
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
    <section className={cn("py-24 bg-gradient-to-b from-background to-muted/20", className)}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6">
            Comparison
          </Badge>
          <h1 className="heading-brand-gradient text-display-2xl font-bold tracking-tight mb-6">
            See how {ourProduct} stacks up<br />against traditional restaurant systems
          </h1>
          <p className="text-xl text-muted-foreground mx-auto max-w-2xl leading-relaxed">
            Discover why restaurant operators choose {ourProduct} over legacy {industry === 'restaurants' ? 'restaurant management' : 'hospitality management'} solutions
          </p>
        </div>
        
        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border/50 rounded-3xl shadow-xl overflow-hidden">
            
            {/* Header Row */}
            <div className="grid grid-cols-3 border-b border-border/50">
              <div className="p-6"></div>
              
              {/* Our Product Header */}
              <div className="p-6 text-center border-l border-border/50 bg-muted/30">
                <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-primary flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{ourProduct}</h3>
                <p className="text-sm text-muted-foreground">Modern restaurant operations platform</p>
              </div>
              
              {/* Competitor Header */}
              <div className="p-6 text-center border-l border-border/50">
                <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-muted-foreground/20 flex items-center justify-center">
                  <Building className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-muted-foreground mb-1">{competitorProduct}</h3>
                <p className="text-sm text-muted-foreground">Traditional restaurant systems</p>
              </div>
            </div>

            {/* Feature Rows */}
            {features.map((item, index) => (
              <div 
                key={index} 
                className={cn(
                  "grid grid-cols-3 border-b border-border/50 last:border-b-0 hover:bg-muted/20 transition-colors group",
                  index % 2 === 0 && "bg-muted/10"
                )}
              >
                {/* Feature Name */}
                <div className="p-6 flex items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {index === 0 && <Building className="w-3 h-3 text-primary" />}
                      {index === 1 && <BarChart3 className="w-3 h-3 text-primary" />}
                      {index === 2 && <Shield className="w-3 h-3 text-primary" />}
                      {index === 3 && <Users className="w-3 h-3 text-primary" />}
                      {index === 4 && <TrendingUp className="w-3 h-3 text-primary" />}
                    </div>
                    <span className="font-medium text-foreground">{item.feature}</span>
                  </div>
                </div>
                
                {/* Our Product Status */}
                <div className="p-6 flex items-center justify-center border-l border-border/50 bg-muted/30">
                  {item.ourProduct ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-primary">
                        {item.feature === "Real-time HACCP Monitoring" ? "Automated temperature logs & alerts" :
                         item.feature === "Kitchen Display Systems" ? "Full KDS with order tracking" :
                         item.feature === "Staff Scheduling & Communication" ? "AI-powered scheduling + team chat" :
                         item.feature === "Advanced Analytics & Reporting" ? "Real-time P&L, food costs, labor metrics" :
                         "Seamless integration"}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                        <CircleMinus className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground">Coming soon</span>
                    </div>
                  )}
                </div>
                
                {/* Competitor Status */}
                <div className="p-6 flex items-center justify-center border-l border-border/50">
                  {item.competitor ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {item.feature === "Multi-Location POS Integration" ? "Basic POS connectivity only" :
                         "Manual processes"}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                        <CircleMinus className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {item.feature === "Kitchen Display Systems" ? "Limited KDS options" :
                         item.feature === "Real-time HACCP Monitoring" ? "Manual compliance tracking" :
                         item.feature === "Staff Scheduling & Communication" ? "Basic scheduling only" :
                         item.feature === "Advanced Analytics & Reporting" ? "Basic reports only" :
                         "Not available"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* CTA Row */}
            <div className="grid grid-cols-3 bg-muted/30">
              <div className="p-6"></div>
              
              {/* Our Product CTA */}
              <div className="p-6 text-center border-l border-border/50 bg-primary/5">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  onClick={() => handleFeatureView("cta_click", true)}
                >
                  Try {ourProduct} today
                </Button>
              </div>
              
              {/* Competitor CTA */}
              <div className="p-6 text-center border-l border-border/50">
                <Button 
                  variant="outline" 
                  className="w-full text-muted-foreground border-muted-foreground/30"
                  disabled
                >
                  Contact sales
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Restaurant locations managed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99.2%</div>
              <div className="text-sm text-muted-foreground">Average HACCP compliance</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">30%</div>
              <div className="text-sm text-muted-foreground">Reduction in operational costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}