"use client";

import {
  CheckIcon,
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  Users,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface ROIHighlight {
  id: string;
  category: "cost-savings" | "compliance" | "efficiency" | "revenue";
  title: string;
  icon: React.ReactNode;
  benefits: string[];
  roi: {
    primary: string;
    description: string;
    timeframe: string;
  };
  stats: {
    label: string;
    value: string;
    trend: "up" | "down" | "stable";
  }[];
}

const roiHighlights: ROIHighlight[] = [
  {
    id: "cost-optimization",
    category: "cost-savings",
    title: "Labor Cost Optimization",
    icon: <DollarSign className="size-5" />,
    benefits: [
      "AI-powered scheduling reduces overstaffing",
      "Predictive analytics for demand forecasting", 
      "Automated break and overtime management",
      "Skills-based task assignment efficiency",
      "Real-time labor cost tracking and alerts"
    ],
    roi: {
      primary: "32% average labor cost reduction",
      description: "Our clients save an average of $2,400 per location per month through optimized scheduling and improved productivity.",
      timeframe: "ROI achieved within 60 days"
    },
    stats: [
      { label: "Avg Monthly Savings", value: "$2,400", trend: "up" },
      { label: "Payback Period", value: "2 months", trend: "stable" },
      { label: "Efficiency Gain", value: "32%", trend: "up" }
    ]
  },
  {
    id: "compliance-automation",
    category: "compliance", 
    title: "HACCP Compliance Excellence",
    icon: <Shield className="size-5" />,
    benefits: [
      "Automated temperature monitoring and logging",
      "Digital audit trails for health inspections",
      "Real-time alerts for critical control points",
      "Simplified corrective action workflows",
      "Comprehensive compliance reporting"
    ],
    roi: {
      primary: "99.8% compliance rate achieved",
      description: "Eliminate health department violations and reduce compliance-related costs by automating HACCP processes.",
      timeframe: "Immediate compliance improvement"
    },
    stats: [
      { label: "Compliance Score", value: "99.8%", trend: "up" },
      { label: "Violation Reduction", value: "95%", trend: "up" },
      { label: "Audit Time Saved", value: "80%", trend: "up" }
    ]
  },
  {
    id: "operational-efficiency", 
    category: "efficiency",
    title: "Kitchen Operation Streamlining",
    icon: <Clock className="size-5" />,
    benefits: [
      "Real-time task management and tracking",
      "Optimized prep schedules and workflows",
      "Equipment maintenance scheduling",
      "Cross-training and skills development",
      "Performance analytics and coaching insights"
    ],
    roi: {
      primary: "40% faster service times",
      description: "Streamlined operations lead to improved customer satisfaction and higher table turnover rates.",
      timeframe: "Results visible in 30 days"
    },
    stats: [
      { label: "Service Time", value: "8.3 min", trend: "down" },
      { label: "Order Accuracy", value: "99.1%", trend: "up" },
      { label: "Kitchen Efficiency", value: "94%", trend: "up" }
    ]
  }
];

interface FeatureHighlightProps {
  className?: string;
  showStats?: boolean;
  variant?: "spotlight" | "comparison" | "detailed";
}

export function FeatureHighlight({
  className = "",
  showStats = true,
  variant = "spotlight"
}: FeatureHighlightProps) {
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const handleHighlightClick = (highlight: ROIHighlight) => {
    trackFeatureEngagement("roi_highlight_view", {
      highlight_id: highlight.id,
      category: highlight.category,
    });
  };

  const handleGetStartedClick = (highlightId: string) => {
    trackFeatureEngagement("cta_click", {
      source: "roi_highlight",
      highlight_id: highlightId,
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "cost-savings": return "bg-green-100 text-green-800 border-green-200";
      case "compliance": return "bg-red-100 text-red-800 border-red-200";
      case "efficiency": return "bg-blue-100 text-blue-800 border-blue-200";
      case "revenue": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "down": return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />;
      default: return <div className="h-4 w-4" />;
    }
  };

  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-6xl">
            Proven ROI for Restaurant Operations
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Real results from 500+ restaurants using OpsFlow. See how our platform delivers 
            immediate and sustained value across all aspects of your operations.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-16 mb-16">
          {roiHighlights.map((highlight, index) => (
            <div 
              key={highlight.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''
              }`}
            >
              {/* Content Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    {highlight.icon}
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${getCategoryColor(highlight.category)} capitalize text-sm`}
                  >
                    {highlight.category.replace("-", " ")}
                  </Badge>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold mb-4">{highlight.title}</h3>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-primary mb-2">
                      {highlight.roi.primary}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.roi.description}
                    </p>
                    <div className="mt-2 text-sm font-medium text-green-600">
                      {highlight.roi.timeframe}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Key Benefits</h4>
                  <ul className="space-y-3">
                    {highlight.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckIcon className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  size="lg" 
                  onClick={() => handleGetStartedClick(highlight.id)}
                  className="w-full sm:w-auto"
                >
                  Learn More About {highlight.title.split(' ')[0]} ROI
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Stats Section */}
              <div className="space-y-6">
                <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
                  <h4 className="font-semibold text-lg mb-6">Performance Metrics</h4>
                  <div className="grid gap-4">
                    {highlight.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-card rounded-lg border">
                        <div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                          <div className="text-xl font-bold">{stat.value}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          {getTrendIcon(stat.trend)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Story Preview */}
                <div className="p-6 bg-muted/30 rounded-lg border">
                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Client Success Story</h5>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      "Since implementing OpsFlow's {highlight.title.toLowerCase()}, we've seen remarkable 
                      improvements across all our locations. The ROI was even better than promised."
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Regional Manager</div>
                      <div className="text-xs text-muted-foreground">45-location restaurant chain</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center p-8 bg-muted/30 rounded-2xl">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Ready to See Your ROI?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get a personalized ROI analysis for your restaurant operations. Our team will 
              show you exactly how much you can save with OpsFlow.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8">
              Calculate Your ROI
              <BarChart3 className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div>✓ Free ROI consultation</div>
            <div>✓ Custom savings analysis</div>
            <div>✓ 30-day money-back guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export type { ROIHighlight, FeatureHighlightProps };