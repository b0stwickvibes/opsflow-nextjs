"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

// Types following BARS-DEMO standards
interface AuditMetric {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface FeatureSplitProps {
  className?: string;
  onGetStartedClick?: () => void;
}

// Clean metric data matching screenshot style
const auditMetrics: AuditMetric[] = [
  {
    id: "1",
    number: "01",
    title: "Automated Documentation",
    description: "Digital audit trails generated automatically for every process, ensuring complete compliance tracking."
  },
  {
    id: "2", 
    number: "02",
    title: "Real-time Monitoring",
    description: "Continuous surveillance of critical control points with instant alerts for potential violations."
  },
  {
    id: "3",
    number: "03", 
    title: "Compliance Reporting",
    description: "Comprehensive reports generated instantly for health inspections and regulatory requirements."
  },
  {
    id: "4",
    number: "04",
    title: "Corrective Actions",
    description: "Guided remediation workflows with automatic documentation of all corrective measures taken."
  }
];

export function FeatureSplit({ className = "", onGetStartedClick }: FeatureSplitProps) {
  const { trackFeatureEngagement } = useRestaurantAnalytics();
  const [selectedMetric, setSelectedMetric] = React.useState<string | null>(null);

  const handleMetricClick = (metric: AuditMetric) => {
    trackFeatureEngagement("audit_metric_selected", {
      metric_id: metric.id,
      title: metric.title,
    });
    setSelectedMetric(selectedMetric === metric.id ? null : metric.id);
  };

  const handleGetStartedClick = () => {
    trackFeatureEngagement("cta_click", {
      source: "audit_documentation_split",
    });
    onGetStartedClick?.();
  };

  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <div className="container max-w-7xl">
        {/* Header - Clean and Minimal */}
        <div className="mb-20 text-center">
          <Badge variant="outline" className="clerk-inspired-badge mb-6">
            <Shield className="w-3 h-3 mr-1.5" />
            Audit Excellence
          </Badge>
          <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl">
            Inspection-Ready
            <span className="block text-primary">Documentation</span>
          </h2>
          <p className="text-lg text-muted-foreground mx-auto max-w-3xl leading-relaxed">
            Comprehensive digital audit trails and automated compliance documentation 
            that keeps your restaurant inspection-ready 24/7.
          </p>
        </div>

        {/* Clean Metrics Grid - Matching Screenshot */}
        <div className="mb-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {auditMetrics.map((metric) => (
              <div
                key={metric.id}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedMetric === metric.id ? 'opacity-100' : 'hover:opacity-90'
                }`}
                onClick={() => handleMetricClick(metric)}
              >
                {/* Large Background Number */}
                <div className="relative">
                  <div className="text-8xl font-bold text-muted-foreground/10 absolute -top-6 -left-4 select-none">
                    {metric.number}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 pt-8">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {metric.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {metric.description}
                    </p>
                    
                    {/* Expanded Content for Selected */}
                    {selectedMetric === metric.id && (
                      <div className="mt-4 pt-4 border-t border-border/50 motion-fade-in-up-320">
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <CheckCircle className="h-4 w-4" />
                          <span>Active compliance monitoring</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story - Clean Design */}
        <div className="mb-20 p-8 bg-muted/30 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 bg-green-50 text-green-600 border-green-200">
                Success Story
              </Badge>
              <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6">
                "OpsFlow's documentation system saved us during our surprise inspection. 
                Perfect score achieved with complete digital records."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Maria Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Operations Manager</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Pass Rate</div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-3xl font-bold text-primary mb-1">15min</div>
                <div className="text-sm text-muted-foreground">Prep Time</div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-3xl font-bold text-primary mb-1">Zero</div>
                <div className="text-sm text-muted-foreground">Violations</div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-3xl font-bold text-primary mb-1">$3.2K</div>
                <div className="text-sm text-muted-foreground">Savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Professional */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto p-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready for Your Next Audit?</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join 500+ restaurants with perfect inspection scores.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                onClick={handleGetStartedClick} 
                className="stripe-cta-primary px-8 py-4 text-base"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="clerk-cta-secondary px-8 py-4 text-base"
              >
                Schedule Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                30-day free trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Setup support included
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export type { AuditMetric, FeatureSplitProps };
