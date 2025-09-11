"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Shield,
  Thermometer,
  ClipboardCheck,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  FileText,
  Camera,
  Bell,
  BarChart3,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";

interface ComplianceProcedure {
  id: string;
  title: string;
  category: "haccp" | "cleaning" | "staff" | "equipment" | "documentation";
  icon: React.ReactNode;
  description: string;
  frequency: string;
  criticality: "critical" | "high" | "medium";
  steps: {
    id: string;
    step: string;
    details: string;
    checkpoints: string[];
    documentation?: string;
  }[];
  compliance: {
    rate: string;
    lastCompleted: string;
    status: "compliant" | "warning" | "overdue";
  };
  automationLevel: "fully-automated" | "semi-automated" | "manual";
}

const complianceProcedures: ComplianceProcedure[] = [
  {
    id: "temperature-monitoring",
    title: "HACCP Temperature Monitoring",
    category: "haccp",
    icon: <Thermometer className="h-5 w-5" />,
    description: "Critical control point monitoring for all refrigeration and cooking equipment",
    frequency: "Every 2 hours",
    criticality: "critical",
    automationLevel: "fully-automated",
    compliance: {
      rate: "99.8%",
      lastCompleted: "12 minutes ago",
      status: "compliant"
    },
    steps: [
      {
        id: "temp-check-1",
        step: "Automated Sensor Reading",
        details: "IoT sensors automatically record temperatures across all equipment",
        checkpoints: [
          "Walk-in cooler: 35-38°F",
          "Freezer: -10 to 0°F", 
          "Hot holding: 140°F+",
          "Cold prep: Below 41°F"
        ],
        documentation: "Digital timestamp with sensor ID and reading"
      },
      {
        id: "temp-check-2",
        step: "Deviation Alert System",
        details: "Instant notifications when temperatures fall outside safe ranges",
        checkpoints: [
          "SMS/email alerts to management",
          "On-screen notifications to staff",
          "Automatic escalation protocols",
          "Equipment status indicators"
        ],
        documentation: "Alert log with response time tracking"
      },
      {
        id: "temp-check-3",
        step: "Corrective Action Protocol",
        details: "Guided steps for addressing temperature deviations",
        checkpoints: [
          "Immediate equipment inspection",
          "Product temperature verification",
          "Corrective actions documented",
          "Manager approval required"
        ],
        documentation: "Complete corrective action report"
      }
    ]
  },
  {
    id: "cleaning-sanitizing",
    title: "Cleaning & Sanitizing Procedures",
    category: "cleaning",
    icon: <ClipboardCheck className="h-5 w-5" />,
    description: "Daily, weekly, and monthly cleaning schedules with verification",
    frequency: "Multiple daily",
    criticality: "high",
    automationLevel: "semi-automated",
    compliance: {
      rate: "96.5%",
      lastCompleted: "45 minutes ago",
      status: "compliant"
    },
    steps: [
      {
        id: "clean-1",
        step: "Daily Cleaning Schedule",
        details: "Essential daily cleaning tasks with digital verification",
        checkpoints: [
          "Kitchen equipment sanitization",
          "Food contact surfaces",
          "Hand washing stations",
          "Dining area cleaning"
        ],
        documentation: "Photo verification with timestamp"
      },
      {
        id: "clean-2", 
        step: "Deep Cleaning Protocols",
        details: "Weekly and monthly deep cleaning procedures",
        checkpoints: [
          "Equipment disassembly and cleaning",
          "Drain and grease trap maintenance",
          "HVAC system cleaning",
          "Storage area organization"
        ],
        documentation: "Detailed checklist with before/after photos"
      },
      {
        id: "clean-3",
        step: "Sanitizer Testing",
        details: "Regular testing of sanitizer concentration levels",
        checkpoints: [
          "Test strip verification",
          "Concentration recording",
          "Equipment calibration",
          "Chemical inventory check"
        ],
        documentation: "Test results log with readings"
      }
    ]
  },
  {
    id: "staff-training",
    title: "Staff Training & Certification",
    category: "staff",
    icon: <Users className="h-5 w-5" />,
    description: "Comprehensive training programs with competency tracking",
    frequency: "Ongoing",
    criticality: "high",
    automationLevel: "semi-automated",
    compliance: {
      rate: "94.2%",
      lastCompleted: "2 days ago",
      status: "compliant"
    },
    steps: [
      {
        id: "training-1",
        step: "Initial Food Safety Training",
        details: "Mandatory food safety certification for all staff",
        checkpoints: [
          "Food safety fundamentals",
          "Personal hygiene requirements",
          "Cross-contamination prevention",
          "Allergen awareness training"
        ],
        documentation: "Digital certificates and test scores"
      },
      {
        id: "training-2",
        step: "Position-Specific Training",
        details: "Role-based training modules with practical assessments",
        checkpoints: [
          "Equipment operation training",
          "Recipe and portion control",
          "Customer service standards",
          "Emergency procedures"
        ],
        documentation: "Competency assessment records"
      },
      {
        id: "training-3",
        step: "Ongoing Refresher Training",
        details: "Regular updates and skill reinforcement sessions",
        checkpoints: [
          "Quarterly safety refreshers",
          "New procedure updates",
          "Skills gap assessments",
          "Performance coaching"
        ],
        documentation: "Training history and progress tracking"
      }
    ]
  }
];

interface FeatureAccordionProps {
  className?: string;
  showCompliance?: boolean;
  variant?: "procedures" | "compact" | "detailed";
}

export function FeatureAccordion({
  className = "",
  showCompliance = true,
  variant = "procedures"
}: FeatureAccordionProps) {
  // Allow multiple open and allow all collapsed (collapsible behavior)
  const [openItems, setOpenItems] = useState<string[]>([]);
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => {
      const isOpen = prev.includes(itemId);
      const next = isOpen ? prev.filter((id) => id !== itemId) : [...prev, itemId];
      trackFeatureEngagement("compliance_procedure_toggle", {
        procedure_id: itemId,
        action: isOpen ? "close" : "open",
      });
      return next;
    });
  };

  const handleStartComplianceClick = () => {
    trackFeatureEngagement("cta_click", {
      source: "compliance_procedures_accordion",
    });
  };

const getCategoryColor = (_category: string) => {
  // Standardize to brand tokens for consistency
  return "bg-primary/10 text-primary border-primary/20";
};

const getCriticalityColor = (_criticality: string) => {
  // Use a single, subtle indicator color to avoid rainbow noise
  return "bg-primary";
};

const getStatusColor = (_status: string) => {
  // Tone down status color; keep emphasis on the numeric rate
  return "text-muted-foreground";
};

  const getAutomationBadge = (level: string) => {
    switch (level) {
      case "fully-automated": 
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Fully Automated</Badge>;
      case "semi-automated":
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Semi-Automated</Badge>;
      case "manual":
        return <Badge variant="outline" className="bg-muted text-foreground border-border">Manual Process</Badge>;
      default:
        return null;
    }
  };

  return (
    <section className={`section-marketing ${className}`}>
      <div className="container">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Compliance Procedures
          </Badge>
<h2 className="heading-brand-gradient text-display-2xl mb-4  font-bold tracking-tight lg:text-6xl">
            Streamlined Compliance Management
          </h2>
          <p className="enterprise-body text-muted-foreground mx-auto max-w-3xl ">
            Comprehensive digital procedures that guide your team through every compliance requirement. 
            From HACCP protocols to staff training, everything is automated and audit-ready.
          </p>
        </div>

        {/* Procedure Overview Stats */}
<div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-muted/30 rounded-lg tile-hover">
            <Shield className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold text-primary">99.2%</div>
            <div className="text-sm text-muted-foreground">Avg Compliance Rate</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg tile-hover">
            <CheckCircle className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Active Procedures</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg tile-hover">
            <Clock className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold text-primary">80%</div>
            <div className="text-sm text-muted-foreground">Time Savings</div>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg tile-hover">
            <BarChart3 className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Monitoring</div>
          </div>
        </div>

        {/* Compliance Procedures Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
{complianceProcedures.map((procedure) => {
            const isOpen = openItems.includes(procedure.id);
            
            return (
              <div
                key={procedure.id}
                className="border border-border rounded-lg bg-card overflow-hidden tile-hover"
              >
                {/* Accordion Header */}
<button
                  onClick={() => toggleItem(procedure.id)}
                  className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${procedure.id}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-2 bg-muted rounded-lg">
                        {procedure.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="enterprise-body  font-semibold">{procedure.title}</h3>
                          <div className={cn("w-2 h-2 rounded-full", getCriticalityColor(procedure.criticality))} />
<Badge 
                            variant="outline" 
                            className={`text-xs ${getCategoryColor(procedure.category)} capitalize`}
                          >
                            {procedure.category}
                          </Badge>
                          {getAutomationBadge(procedure.automationLevel)}
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-2">
                          {procedure.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-muted-foreground">
                            Frequency: <span className="font-medium">{procedure.frequency}</span>
                          </span>
{showCompliance && (
                            <>
                              <span className="text-primary font-medium">
                                {procedure.compliance.rate} compliant
                              </span>
                              <span className="text-muted-foreground">
                                Last: {procedure.compliance.lastCompleted}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <ChevronDown 
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        isOpen ? "rotate-180" : "rotate-0"
                      )} 
                    />
                  </div>
                </button>

                {/* Accordion Content */}
<div
                  id={`accordion-panel-${procedure.id}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-out",
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
<div className="p-6 pt-0 border-t bg-muted/20">
                    <div className="space-y-6">
                      {procedure.steps.map((step, index) => (
                        <div key={step.id} className="border border-border rounded-lg p-4 bg-card">
                          <div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            
                            <div className="flex-1">
                              <h4 className="font-medium mb-2">{step.step}</h4>
                              <p className="text-sm text-muted-foreground mb-3">{step.details}</p>
                              
                              <div className="space-y-2">
                                <h5 className="text-sm font-medium">Key Checkpoints:</h5>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {step.checkpoints.map((checkpoint, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm">
                                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                                      {checkpoint}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {step.documentation && (
                                <div className="mt-3 p-3 bg-card/60 rounded-lg border border-primary/20">
                                  <div className="flex items-center gap-2 text-sm">
                                    <FileText className="h-4 w-4 text-primary" />
                                    <span className="font-medium">Documentation:</span>
                                    <span className="text-muted-foreground">{step.documentation}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
<div className="mt-16 text-center">
          <div className="p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Streamline Your Compliance?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Transform your compliance management with automated procedures, real-time monitoring, 
              and comprehensive documentation that keeps you audit-ready 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="cta-shimmer" onClick={handleStartComplianceClick}>
                Start Compliance Automation
                <Shield className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Compliance Demo
              </Button>
            </div>
            
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                50+ automated procedures
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                Real-time compliance tracking
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                Audit-ready documentation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export type { ComplianceProcedure, FeatureAccordionProps };