"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { 
  Shield, 
  FileCheck, 
  Clock, 
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Users,
  BarChart3
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
    colors: [[34, 197, 94]], // green
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
    colors: [[236, 72, 153], [232, 121, 249]], // pink to purple
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
    colors: [[59, 130, 246]], // blue
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
    colors: [[249, 115, 22]], // orange
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
      case "compliance": return "bg-green-100 text-green-800 border-green-200";
      case "documentation": return "bg-blue-100 text-blue-800 border-blue-200";
      case "efficiency": return "bg-purple-100 text-purple-800 border-purple-200";
      case "savings": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-muted text-foreground border-border";
    }
  };

  return (
    <section className={`overflow-hidden py-24 lg:py-32 ${className}`}>
      <div className="container">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            Audit & Documentation Excellence
          </Badge>
<h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Audit-Ready Documentation
          </h2>
          <p className="enterprise-body text-muted-foreground mx-auto max-w-3xl ">
            Comprehensive digital audit trails and automated compliance documentation 
            that keeps your restaurant inspection-ready 24/7.
          </p>
        </div>

        {/* Split Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side: Audit Process */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Streamlined Audit Process</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our automated documentation system generates comprehensive audit trails 
                in real-time, making health inspections stress-free and ensuring 
                100% compliance readiness.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Automated Compliance Logging</h4>
                  <p className="text-sm text-muted-foreground">
                    All temperature checks, cleaning schedules, and safety procedures 
                    automatically documented with timestamps and staff verification.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileCheck className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Digital Audit Trails</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete historical records with search functionality, 
                    corrective action tracking, and instant report generation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Proactive Issue Resolution</h4>
                  <p className="text-sm text-muted-foreground">
                    Instant alerts for potential violations with guided corrective 
                    actions and automatic follow-up documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Documentation Features */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Comprehensive Documentation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every aspect of your restaurant operations is documented automatically, 
                creating an unbreakable chain of compliance evidence that inspectors trust.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card border rounded-lg text-center">
                <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Staff Training</div>
                <div className="text-xs text-muted-foreground">Digital certificates</div>
              </div>
              
              <div className="p-4 bg-card border rounded-lg text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">HACCP Logs</div>
                <div className="text-xs text-muted-foreground">Real-time monitoring</div>
              </div>
              
              <div className="p-4 bg-card border rounded-lg text-center">
                <BarChart3 className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Compliance Reports</div>
                <div className="text-xs text-muted-foreground">Automated generation</div>
              </div>
              
              <div className="p-4 bg-card border rounded-lg text-center">
                <FileCheck className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Corrective Actions</div>
                <div className="text-xs text-muted-foreground">Full audit trail</div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Audit Performance Metrics</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {auditMetrics.map((metric) => (
              <MetricCard
                key={metric.id}
                metric={metric}
                onHover={() => handleMetricHover(metric)}
                showAnimations={showAnimations}
              />
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16 p-8 bg-muted/30 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="enterprise-body  font-bold mb-4">Client Success Story</h3>
              <blockquote className="text-muted-foreground leading-relaxed mb-4">
                "OpsFlow's audit documentation saved us during our surprise health inspection. 
                The inspector was impressed with our digital records and we passed with a 
                perfect score. The system paid for itself in that one inspection."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Maria Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Operations Manager, Fresh Eats Chain</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border">
<div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Inspection Pass Rate</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
<div className="text-2xl font-bold text-primary">15 min</div>
                <div className="text-sm text-muted-foreground">Audit Prep Time</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
<div className="text-2xl font-bold text-primary">Zero</div>
                <div className="text-sm text-muted-foreground">Violations Found</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
<div className="text-2xl font-bold text-primary">$3.2K</div>
                <div className="text-sm text-muted-foreground">Monthly Savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready for Your Next Audit?</h3>
              <p className="text-muted-foreground max-w-2xl">
                Join 500+ restaurants that never worry about health inspections again. 
                Get comprehensive audit documentation that inspectors trust.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleGetStartedClick}>
                Start Audit Documentation Trial
              </Button>
              <Button variant="outline" size="lg">
                Schedule Compliance Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                30-day free trial
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                100% audit ready guarantee
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Expert setup support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MetricCard: React.FC<{
  metric: AuditMetric;
  onHover?: () => void;
  showAnimations?: boolean;
}> = ({ metric, onHover, showAnimations = true }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    onHover?.();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card border-border relative mx-auto flex h-[20rem] w-full items-center justify-center border rounded-lg p-4 cursor-pointer"
    >
      <BorderIllustration className="text-foreground absolute -left-1 -top-1 h-4 w-4" />
      <BorderIllustration className="text-foreground absolute -bottom-1 -left-1 h-4 w-4" />
      <BorderIllustration className="text-foreground absolute -right-1 -top-1 h-4 w-4" />
      <BorderIllustration className="text-foreground absolute -bottom-1 -right-1 h-4 w-4" />

      {showAnimations && (
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 h-full w-full rounded-lg"
            >
              <CanvasRevealEffect
                animationSpeed={metric.animationSpeed}
                containerClassName={metric.containerClassName}
                colors={metric.colors}
                dotSize={2}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <div className="relative z-20 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="p-2 bg-muted rounded-lg">
            {metric.icon}
          </div>
          <Badge variant="outline" className={`text-xs ${getCategoryColor(metric.category)} capitalize`}>
            {metric.category}
          </Badge>
        </div>

        <div className="absolute mx-auto flex w-full flex-col items-center justify-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          <div className="text-display-2xl  font-bold tracking-tight mb-2">
            {metric.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {metric.label}
          </div>
        </div>

        <div className="text-foreground absolute relative z-10 mt-4 text-center opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100">
          <div className="text-2xl font-bold tracking-tight mb-2">
            {metric.value}
          </div>
          <div className="text-sm font-medium">
            {metric.label}
          </div>
          <div className="text-xs opacity-90 mt-1">
            {metric.description}
          </div>
        </div>
      </div>
    </div>
  );
};

function getCategoryColor(category: string) {
  switch (category) {
    case "compliance": return "bg-green-100 text-green-800 border-green-200";
    case "documentation": return "bg-blue-100 text-blue-800 border-blue-200";
    case "efficiency": return "bg-purple-100 text-purple-800 border-purple-200";
    case "savings": return "bg-orange-100 text-orange-800 border-orange-200";
    default: return "bg-muted text-foreground border-border";
  }
}

export const BorderIllustration = ({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export type { AuditMetric, FeatureSplitProps };