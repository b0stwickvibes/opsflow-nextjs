"use client";

import React from "react";
import { 
  Shield, 
  FileCheck, 
  Clock, 
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Users,
  BarChart3,
  ArrowRight
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface AuditMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  category: "compliance" | "documentation" | "efficiency" | "savings";
  trend: "up" | "down" | "stable";
  icon: React.ReactNode;
}

// Updated metrics to reflect actual audit/compliance KPIs instead of generic feature copy
const auditMetrics: AuditMetric[] = [
  {
    id: "compliance-rate",
    label: "Compliance Rate",
    value: "99.8%",
    description: "Active health code & HACCP item compliance maintained across all logged checklists.",
    category: "compliance",
    trend: "up",
    icon: <Shield className="h-5 w-5" />
  },
  {
    id: "prep-time",
    label: "Prep Time Reduction",
    value: "-80%",
    description: "Average reduction in audit preparation time using automated documentation workflows.",
    category: "efficiency", 
    trend: "up",
    icon: <Clock className="h-5 w-5" />
  },
  {
    id: "digital-records",
    label: "Digital Records",
    value: "10K+",
    description: "Structured temperature logs, task sign‑offs & corrective actions stored & searchable.",
    category: "documentation",
    trend: "up",
    icon: <FileCheck className="h-5 w-5" />
  },
  {
    id: "monthly-savings",
    label: "Monthly Savings",
    value: "$2.4K",
    description: "Avoided violation penalties & labor hours saved through proactive monitoring.",
    category: "savings",
    trend: "up",
    icon: <TrendingUp className="h-5 w-5" />
  }
];

interface FeatureSplitProps {
  className?: string;
  onGetStartedClick?: () => void;
}

export function FeatureSplit({
  className = "",
  onGetStartedClick,
}: FeatureSplitProps) {
  const { trackFeatureEngagement } = useRestaurantAnalytics();
  const [hoveredMetric, setHoveredMetric] = React.useState<string | null>(null);

  const handleGetStartedClick = () => {
    trackFeatureEngagement("cta_click", {
      source: "audit_documentation_split",
    });
    onGetStartedClick?.();
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "compliance": return "bg-primary/10 text-primary";
      case "documentation": return "bg-secondary/10 text-secondary";
      case "efficiency": return "bg-primary/10 text-primary";
      case "savings": return "bg-secondary/10 text-secondary";
      default: return "bg-primary/10 text-primary";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "compliance": return "Compliance";
      case "documentation": return "Documentation";
      case "efficiency": return "Efficiency";
      case "savings": return "Savings";
      default: return "Feature";
    }
  };

  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex mb-6">
            <Badge variant="outline" className="clerk-inspired-badge">
              <Shield className="w-3 h-3 mr-1.5" />
              Audit & Documentation Excellence
            </Badge>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground lg:text-5xl xl:text-6xl">
            Inspection-Ready
            <span className="block text-primary">Documentation</span>
          </h2>
          <p className="text-lg text-muted-foreground mx-auto max-w-3xl leading-relaxed">
            Comprehensive digital audit trails and automated compliance documentation 
            that keeps your restaurant inspection-ready 24/7, with real-time monitoring 
            and instant report generation.
          </p>
        </div>

        {/* Split Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Streamlined Audit Process</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Our automated documentation system generates comprehensive audit trails 
                in real-time, making health inspections stress-free and ensuring 
                100% compliance readiness.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-primary/5 hover:bg-primary/10 rounded-xl transition-all duration-300 hover:scale-103">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-xl flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-2">Automated Compliance Logging</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      All temperature checks, cleaning schedules, and safety procedures 
                      automatically documented with timestamps and staff verification.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-secondary/5 hover:bg-secondary/10 rounded-xl transition-all duration-300 hover:scale-103">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-xl flex-shrink-0">
                    <FileCheck className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-2">Digital Audit Trails</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Complete historical records with search functionality, 
                      corrective action tracking, and instant report generation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary/5 hover:bg-primary/10 rounded-xl transition-all duration-300 hover:scale-103">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-xl flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-2">Proactive Issue Resolution</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Instant alerts for potential violations with guided corrective 
                      actions and automatic follow-up documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Comprehensive Documentation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Every aspect of your restaurant operations is documented automatically, 
                creating an unbreakable chain of compliance evidence that inspectors trust.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-5 text-center border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-semibold mb-1">Staff Training</div>
                <div className="text-xs text-muted-foreground">Digital certificates & tracking</div>
              </Card>
              
              <Card className="p-5 text-center border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                <div className="p-3 bg-secondary/10 rounded-xl w-fit mx-auto mb-3 group-hover:bg-secondary/20 transition-colors">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-sm font-semibold mb-1">HACCP Logs</div>
                <div className="text-xs text-muted-foreground">Real-time monitoring</div>
              </Card>
              
              <Card className="p-5 text-center border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-semibold mb-1">Compliance Reports</div>
                <div className="text-xs text-muted-foreground">Automated generation</div>
              </Card>
              
              <Card className="p-5 text-center border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                <div className="p-3 bg-secondary/10 rounded-xl w-fit mx-auto mb-3 group-hover:bg-secondary/20 transition-colors">
                  <FileCheck className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-sm font-semibold mb-1">Corrective Actions</div>
                <div className="text-xs text-muted-foreground">Full audit trail</div>
              </Card>
            </div>
          </div>
        </div>

        {/* Feature Cards - Modern Enterprise SaaS Design */}
        <div className="mb-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {auditMetrics.map((metric) => (
              <div
                key={metric.id}
                onMouseEnter={() => {
                  setHoveredMetric(metric.id);
                  trackFeatureEngagement("audit_metric_hover", { metric_id: metric.id });
                }}
                onMouseLeave={() => setHoveredMetric((prev) => (prev === metric.id ? null : prev))}
                className="group relative rounded-xl bg-background/60 backdrop-blur-sm p-5 transition-all duration-300 hover:bg-primary/5 hover:shadow-md focus-within:ring-2 focus-within:ring-primary/40"
              >
                {/* Icon */}
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 ${
                  metric.category === 'documentation' || metric.category === 'savings'
                    ? 'bg-secondary/15 text-secondary group-hover:bg-secondary/25'
                    : 'bg-primary/15 text-primary group-hover:bg-primary/25'
                }`}>
                  {metric.icon}
                </div>
                {/* Title */}
                <h3 className="mb-1 text-sm font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {metric.label}
                </h3>
                {/* Stat Value */}
                <div className="text-lg font-bold text-primary tabular-nums mb-2">
                  {metric.value}
                </div>
                {/* Hover Reveal Description - reserved space to prevent layout shift */}
                <div className="min-h-[48px] relative">
                  <p
                    className={`text-xs leading-relaxed text-muted-foreground transition-all duration-300 ease-out ${
                      hoveredMetric === metric.id
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                  >
                    {metric.description}
                  </p>
                </div>
                {/* Gradient underline accent appears on hover */}
                <span className="absolute left-5 right-5 bottom-3 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <Card className="mb-20 p-8 border-border/50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 bg-green-50 text-green-600 border-green-200">
                Customer Success
              </Badge>
              <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6">
                "OpsFlow's audit documentation saved us during our surprise health inspection. 
                The inspector was impressed with our digital records and we passed with a 
                perfect score. The system paid for itself in that one inspection."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-base">Maria Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Operations Manager, Fresh Eats Chain</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-5 border-border/30">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Inspection Pass Rate</div>
              </Card>
              <Card className="text-center p-5 border-border/30">
                <div className="text-3xl font-bold text-primary mb-1">15 min</div>
                <div className="text-sm text-muted-foreground">Audit Prep Time</div>
              </Card>
              <Card className="text-center p-5 border-border/30">
                <div className="text-3xl font-bold text-primary mb-1">Zero</div>
                <div className="text-sm text-muted-foreground">Violations Found</div>
              </Card>
              <Card className="text-center p-5 border-border/30">
                <div className="text-3xl font-bold text-primary mb-1">$3.2K</div>
                <div className="text-sm text-muted-foreground">Monthly Savings</div>
              </Card>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-border/50">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Ready for Your Next Audit?</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join 500+ restaurants that never worry about health inspections again. 
                Get comprehensive audit documentation that inspectors trust.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" onClick={handleGetStartedClick} className="stripe-cta-primary px-8 py-4 text-base">
                  Start Audit Documentation Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="clerk-cta-secondary px-8 py-4 text-base">
                  Schedule Compliance Demo
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  30-day free trial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  100% audit ready guarantee
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Expert setup support
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export type { AuditMetric, FeatureSplitProps };
