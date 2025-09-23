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
import { CanvasRevealEffect } from "@/components/aceternity/canvas-reveal-effect";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface AuditMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  category: "compliance" | "documentation" | "efficiency" | "savings";
  animationSpeed: number;
  colors: number[][];
  containerClassName: string;
  icon: React.ReactNode;
}

const auditMetrics: AuditMetric[] = [
  {
    id: "compliance-rate",
    label: "Compliance Rate",
    value: "99.8%",
    description: "Health department audit ready",
    category: "compliance",
    animationSpeed: 5.1,
    colors: [[34, 197, 94]], 
    containerClassName: "bg-green-600",
    icon: <Shield className="h-5 w-5" />
  },
  {
    id: "audit-time-saved",
    label: "Audit Time",
    value: "80%",
    description: "Faster audit preparation",
    category: "efficiency", 
    animationSpeed: 4.2,
    colors: [[236, 72, 153], [232, 121, 249]],
    containerClassName: "bg-pink-600",
    icon: <Clock className="h-5 w-5" />
  },
  {
    id: "digital-docs",
    label: "Digital Records",
    value: "10K+",
    description: "Automatically generated daily",
    category: "documentation",
    animationSpeed: 3.8,
    colors: [[59, 130, 246]],
    containerClassName: "bg-blue-600", 
    icon: <FileCheck className="h-5 w-5" />
  },
  {
    id: "cost-savings",
    label: "Cost Savings",
    value: "$2.4K",
    description: "Monthly compliance savings",
    category: "savings",
    animationSpeed: 4.5,
    colors: [[249, 115, 22]],
    containerClassName: "bg-orange-600",
    icon: <TrendingUp className="h-5 w-5" />
  }
];

interface FeatureSplitProps {
  className?: string;
  showAnimations?: boolean;
  variant?: "metrics" | "split" | "detailed";
}

export function FeatureSplit({
  className = "",
  showAnimations = false,
  variant = "split"
}: FeatureSplitProps) {
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const handleMetricHover = (metric: AuditMetric) => {
    trackFeatureEngagement("audit_metric_hover", {
      metric_id: metric.id,
      category: metric.category,
    });
  };

  const handleGetStartedClick = () => {
    trackFeatureEngagement("cta_click", {
      source: "audit_documentation_split",
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "compliance": return "bg-primary-100 text-primary border-primary-200";
      case "documentation": return "bg-secondary-100 text-secondary border-secondary-200";
      case "efficiency": return "bg-primary-100 text-primary border-primary-200";
      case "savings": return "bg-secondary-100 text-secondary border-secondary-200";
      default: return "bg-muted text-foreground border-border";
    }
  };

  return (
    <section className={`overflow-hidden py-24 lg:py-32 ${className}`}>
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex mb-6">
            <div className="badge-subtle-gradient">
              Audit & Documentation Excellence
            </div>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Audit-Ready Documentation
          </h2>
          <p className="text-lg text-muted-foreground mx-auto max-w-3xl leading-relaxed">
            Comprehensive digital audit trails and automated compliance documentation 
            that keeps your restaurant inspection-ready 24/7.
          </p>
        </div>

        {/* Split Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Streamlined Audit Process</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our automated documentation system generates comprehensive audit trails 
                in real-time, making health inspections stress-free and ensuring 
                100% compliance readiness.
              </p>
            </div>

            <div className="space-y-3">
              <div className="clerk-glass-card p-4 flex items-start gap-4">
                <div className="p-2 bg-primary-100 rounded-lg flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Automated Compliance Logging</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    All temperature checks, cleaning schedules, and safety procedures 
                    automatically documented with timestamps and staff verification.
                  </p>
                </div>
              </div>

              <div className="clerk-glass-card p-4 flex items-start gap-4">
                <div className="p-2 bg-secondary-100 rounded-lg flex-shrink-0">
                  <FileCheck className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Digital Audit Trails</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Complete historical records with search functionality, 
                    corrective action tracking, and instant report generation.
                  </p>
                </div>
              </div>

              <div className="clerk-glass-card p-4 flex items-start gap-4">
                <div className="p-2 bg-primary-100 rounded-lg flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Proactive Issue Resolution</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Instant alerts for potential violations with guided corrective 
                    actions and automatic follow-up documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Comprehensive Documentation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every aspect of your restaurant operations is documented automatically, 
                creating an unbreakable chain of compliance evidence that inspectors trust.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="clerk-glass-card p-4 text-center">
                <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Staff Training</div>
                <div className="text-xs text-muted-foreground">Digital certificates</div>
              </div>
              
              <div className="clerk-glass-card p-4 text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-secondary" />
                <div className="text-sm font-medium">HACCP Logs</div>
                <div className="text-xs text-muted-foreground">Real-time monitoring</div>
              </div>
              
              <div className="clerk-glass-card p-4 text-center">
                <BarChart3 className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Compliance Reports</div>
                <div className="text-xs text-muted-foreground">Automated generation</div>
              </div>
              
              <div className="clerk-glass-card p-4 text-center">
                <FileCheck className="h-6 w-6 mx-auto mb-2 text-secondary" />
                <div className="text-sm font-medium">Corrective Actions</div>
                <div className="text-xs text-muted-foreground">Full audit trail</div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Cards - Completely Rewritten */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Audit Performance Metrics</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {auditMetrics.map((metric) => (
              <SimpleMetricCard
                key={metric.id}
                metric={metric}
                onHover={() => handleMetricHover(metric)}
                getCategoryColor={getCategoryColor}
              />
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16 clerk-glass-card p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4">Client Success Story</h3>
              <blockquote className="text-muted-foreground leading-relaxed mb-4">
                "OpsFlow's audit documentation saved us during our surprise health inspection. 
                The inspector was impressed with our digital records and we passed with a 
                perfect score. The system paid for itself in that one inspection."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Maria Rodriguez</div>
                  <div className="text-xs text-muted-foreground">Operations Manager, Fresh Eats Chain</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-4 bg-white border border-slate-200/60 rounded-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">100%</div>
                <div className="text-xs text-muted-foreground">Inspection Pass Rate</div>
              </div>
              <div className="text-center p-4 bg-white border border-slate-200/60 rounded-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">15 min</div>
                <div className="text-xs text-muted-foreground">Audit Prep Time</div>
              </div>
              <div className="text-center p-4 bg-white border border-slate-200/60 rounded-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Zero</div>
                <div className="text-xs text-muted-foreground">Violations Found</div>
              </div>
              <div className="text-center p-4 bg-white border border-slate-200/60 rounded-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">$3.2K</div>
                <div className="text-xs text-muted-foreground">Monthly Savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 light-bg-brand-gradient rounded-2xl">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready for Your Next Audit?</h3>
              <p className="text-muted-foreground max-w-2xl">
                Join 500+ restaurants that never worry about health inspections again. 
                Get comprehensive audit documentation that inspectors trust.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleGetStartedClick} className="stripe-cta-primary px-8 py-4">
                Start Audit Documentation Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="clerk-cta-secondary">
                Schedule Compliance Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-primary" />
                30-day free trial
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-primary" />
                100% audit ready guarantee
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-primary" />
                Expert setup support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple metric card using clerk-glass-card on hover
const SimpleMetricCard: React.FC<{
  metric: AuditMetric;
  onHover?: () => void;
  getCategoryColor: (category: string) => string;
}> = ({ metric, onHover, getCategoryColor }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        onHover?.();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className={`h-64 w-full rounded-xl p-6 cursor-pointer transition-all duration-300 ${
        isHovered ? 'clerk-glass-card' : 'bg-white border border-slate-200/60 hover:border-primary/30 hover:shadow-lg'
      }`}
    >
      {/* Content */}
      <div className="h-full flex flex-col items-center justify-center text-center">
        {/* Icon and Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-muted rounded-lg">
            {metric.icon}
          </div>
          <Badge variant="outline" className={`text-xs capitalize ${getCategoryColor(metric.category)}`}>
            {metric.category}
          </Badge>
        </div>

        {/* Value */}
        <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {metric.value}
        </div>

        {/* Label */}
        <div className="text-sm font-medium text-muted-foreground">
          {metric.label}
        </div>

        {/* Description - only show on hover */}
        {isHovered && (
          <div className="text-xs mt-3 px-4 leading-relaxed text-muted-foreground">
            {metric.description}
          </div>
        )}
      </div>
    </div>
  );
};

export type { AuditMetric, FeatureSplitProps };
