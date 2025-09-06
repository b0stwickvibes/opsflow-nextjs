"use client";

import {
  Check,
  X,
  Shield,
  Zap,
  BarChart3,
  Users,
  Clock,
  DollarSign,
} from "lucide-react";
import { useRef } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface CompetitorFeature {
  feature: string;
  opsflow: boolean | string;
  jolt: boolean | string;
  xenia: boolean | string;
  category: "core" | "advanced" | "enterprise";
}

interface CompetitionCard {
  id: string;
  name: string;
  logo: string;
  tagline: string;
  strengths: string[];
  weaknesses: string[];
  pricing: string;
  marketPosition: "leader" | "challenger" | "niche";
}

const competitorFeatures: CompetitorFeature[] = [
  {
    feature: "HACCP Compliance Automation",
    opsflow: "Full automation with AI",
    jolt: "Basic logging",
    xenia: "Manual entry required",
    category: "core"
  },
  {
    feature: "Real-time Temperature Monitoring",
    opsflow: "IoT sensors + alerts",
    jolt: "Limited sensors",
    xenia: false,
    category: "core"
  },
  {
    feature: "Predictive Analytics",
    opsflow: "AI-powered forecasting",
    jolt: "Basic reporting",
    xenia: "Historical data only",
    category: "advanced"
  },
  {
    feature: "Multi-location Management",
    opsflow: "Unlimited locations",
    jolt: "Up to 50 locations",
    xenia: "Up to 10 locations",
    category: "enterprise"
  },
  {
    feature: "Staff Performance Analytics",
    opsflow: "Individual + team insights",
    jolt: "Basic time tracking",
    xenia: "Schedule management only",
    category: "advanced"
  },
  {
    feature: "Automated Audit Trails",
    opsflow: "Complete digital records",
    jolt: "Partial documentation",
    xenia: "Manual documentation",
    category: "core"
  },
  {
    feature: "Cost Optimization Engine",
    opsflow: "AI-driven recommendations",
    jolt: false,
    xenia: false,
    category: "enterprise"
  },
  {
    feature: "Mobile-first Design",
    opsflow: "Tablet + phone optimized",
    jolt: "Basic mobile app",
    xenia: "Desktop focused",
    category: "core"
  }
];

const competitors: CompetitionCard[] = [
  {
    id: "jolt",
    name: "JOLT",
    logo: "/competitors/jolt-logo.svg",
    tagline: "Task management focused",
    strengths: ["Simple task creation", "Basic compliance logging", "Established brand"],
    weaknesses: ["Limited analytics", "No predictive features", "Expensive scaling"],
    pricing: "$3-8/location/month",
    marketPosition: "challenger"
  },
  {
    id: "xenia",
    name: "Xenia.Teams",
    logo: "/competitors/xenia-logo.svg",
    tagline: "Traditional operations focus",
    strengths: ["Scheduling tools", "Basic reporting", "Integration options"],
    weaknesses: ["Manual processes", "No AI capabilities", "Limited mobile support"],
    pricing: "$5-12/location/month",
    marketPosition: "niche"
  },
  {
    id: "opsflow",
    name: "OpsFlow",
    logo: "/logo.svg",
    tagline: "AI-powered restaurant operations",
    strengths: ["Complete automation", "Predictive analytics", "HACCP compliance", "Cost optimization"],
    weaknesses: ["Newer to market"],
    pricing: "$4-15/location/month",
    marketPosition: "leader"
  }
];

interface FeatureComparisonProps {
  className?: string;
  showPricing?: boolean;
  variant?: "table" | "cards" | "detailed";
}

export function FeatureComparison({ 
  className = "", 
  showPricing = true,
  variant = "cards"
}: FeatureComparisonProps) {
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const handleCompetitorClick = (competitor: CompetitionCard) => {
    trackFeatureEngagement("competitor_comparison_view", {
      competitor_id: competitor.id,
      market_position: competitor.marketPosition,
    });
  };

  const getFeatureValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-600" />
      ) : (
        <X className="h-5 w-5 text-red-500" />
      );
    }
    return <span className="text-sm font-medium">{value}</span>;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "core": return <Shield className="h-4 w-4" />;
      case "advanced": return <BarChart3 className="h-4 w-4" />;
      case "enterprise": return <Zap className="h-4 w-4" />;
      default: return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "core": return "bg-blue-100 text-blue-800 border-blue-200";
      case "advanced": return "bg-purple-100 text-purple-800 border-purple-200";
      case "enterprise": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getMarketPositionColor = (position: string) => {
    switch (position) {
      case "leader": return "bg-green-100 text-green-800 border-green-200";
      case "challenger": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "niche": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  if (variant === "cards") {
    return (
      <section className={`py-24 lg:py-32 ${className}`}>
        <div className="container">
          <div className="mx-auto mb-16 flex max-w-4xl flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold lg:text-5xl">
              Why Leading Restaurants Choose OpsFlow
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive comparison with leading restaurant operations platforms. 
              See why we're the smart choice for modern restaurant chains.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 mb-16">
            {competitors.map((competitor) => (
              <CompetitorCard key={competitor.id} competitor={competitor} onClick={() => handleCompetitorClick(competitor)} />
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Feature Comparison</h3>
                <p className="text-muted-foreground">
                  Detailed side-by-side comparison of key restaurant operations features
                </p>
              </div>
              
              <div className="bg-card border rounded-lg overflow-hidden">
                <div className="grid grid-cols-4 gap-4 p-4 bg-muted border-b font-semibold">
                  <div>Feature</div>
                  <div className="text-center">OpsFlow</div>
                  <div className="text-center">JOLT</div>
                  <div className="text-center">Xenia.Teams</div>
                </div>
                
                {competitorFeatures.map((feature, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b last:border-b-0 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getCategoryColor(feature.category)}`}
                      >
                        {getCategoryIcon(feature.category)}
                        <span className="ml-1 capitalize">{feature.category}</span>
                      </Badge>
                      <span className="font-medium">{feature.feature}</span>
                    </div>
                    <div className="flex justify-center items-center">
                      {getFeatureValue(feature.opsflow)}
                    </div>
                    <div className="flex justify-center items-center">
                      {getFeatureValue(feature.jolt)}
                    </div>
                    <div className="flex justify-center items-center">
                      {getFeatureValue(feature.xenia)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

const CompetitorCard: React.FC<{ 
  competitor: CompetitionCard; 
  onClick?: () => void; 
}> = ({ competitor, onClick }) => {
  const isOpsFlow = competitor.id === "opsflow";
  
  return (
    <Card 
      className={`h-full transition-all duration-200 hover:shadow-lg cursor-pointer ${
        isOpsFlow ? "ring-2 ring-primary border-primary" : "hover:border-primary/20"
      }`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-muted">
              <img src={competitor.logo} alt={competitor.name} className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">{competitor.name}</CardTitle>
              {isOpsFlow && (
                <Badge className="mt-1 text-xs bg-primary/10 text-primary border-primary/20">
                  Recommended
                </Badge>
              )}
            </div>
          </div>
          <Badge 
            variant="outline" 
            className={`text-xs ${getMarketPositionColor(competitor.marketPosition)} capitalize`}
          >
            {competitor.marketPosition}
          </Badge>
        </div>
        
        <CardDescription className="mb-4 text-sm">
          {competitor.tagline}
        </CardDescription>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-green-600 mb-2">Strengths</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              {competitor.strengths.map((strength, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-green-500" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-orange-600 mb-2">Considerations</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              {competitor.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-orange-200" />
                  {weakness}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-2 border-t">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Starting at</span>
              <span className="text-sm font-semibold">{competitor.pricing}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

function getMarketPositionColor(position: string) {
  switch (position) {
    case "leader": return "bg-green-100 text-green-800 border-green-200";
    case "challenger": return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "niche": return "bg-gray-100 text-gray-800 border-gray-200";
    default: return "bg-gray-100 text-gray-800 border-gray-200";
  }
}

export type { CompetitorFeature, CompetitionCard, FeatureComparisonProps };