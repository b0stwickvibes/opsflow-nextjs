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
  category: "haccp" | "cleaning" | "staff" | "equipment" | "documentation" | "task";
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
    id: "opening-bartender",
    title: "Opening Bartender Tasks",
    category: "task",
    icon: <Users className="h-5 w-5" />,
    description: "Quick start checklist to prep the bar for service.",
    frequency: "Daily",
    criticality: "medium",
    automationLevel: "manual",
    compliance: { rate: "—", lastCompleted: "—", status: "compliant" },
    steps: [
      {
        id: "bartender-1",
        step: "Stock and Prep",
        details: "Verify inventory and prepare essentials.",
        checkpoints: [
          "Restock beer, wine, and spirits",
          "Prep garnish (citrus, herbs)",
          "Fill ice wells and clean tools",
        ],
      },
      {
        id: "bartender-2",
        step: "Station Setup",
        details: "Ready the workstation and POS.",
        checkpoints: [
          "Sanitize surfaces and bar mats",
          "Calibrate POS and cash drawer",
          "Check glassware and dish station",
        ],
      },
    ],
  },
  {
    id: "opening-server",
    title: "Opening Server Tasks",
    category: "task",
    icon: <ClipboardCheck className="h-5 w-5" />,
    description: "Dining room and service flow preparation.",
    frequency: "Daily",
    criticality: "medium",
    automationLevel: "manual",
    compliance: { rate: "—", lastCompleted: "—", status: "compliant" },
    steps: [
      {
        id: "server-1",
        step: "Dining Room Setup",
        details: "Get the floor ready for guests.",
        checkpoints: [
          "Set tables (menus, roll-ups)",
          "Check section assignments",
          "Reset stations and water service",
        ],
      },
      {
        id: "server-2",
        step: "Menu and Specials",
        details: "Confirm daily offerings.",
        checkpoints: [
          "Verify 86'd items",
          "Review specials and allergens",
          "Note promos and upsells",
        ],
      },
    ],
  },
  {
    id: "opening-host",
    title: "Opening Host Tasks",
    category: "task",
    icon: <Clock className="h-5 w-5" />,
    description: "Front desk readiness and guest flow planning.",
    frequency: "Daily",
    criticality: "medium",
    automationLevel: "manual",
    compliance: { rate: "—", lastCompleted: "—", status: "compliant" },
    steps: [
      {
        id: "host-1",
        step: "Front Desk Setup",
        details: "Prepare guest greeting and seating tools.",
        checkpoints: [
          "Turn on reservation/queue system",
          "Sync floor plan and waitlist",
          "Test phone and paging devices",
        ],
      },
      {
        id: "host-2",
        step: "Guest Flow Plan",
        details: "Anticipate service and manage pacing.",
        checkpoints: [
          "Assign server rotation",
          "Mark large parties and notes",
          "Set table readiness priorities",
        ],
      },
    ],
  },
];

interface FeatureAccordionProps {
  className?: string;
  showCompliance?: boolean;
  variant?: "procedures" | "compact" | "detailed";
}

export function FeatureAccordion({
  className = "",
  showCompliance = false,
  variant = "compact",
}: FeatureAccordionProps) {
  // Single-open behavior (at most one open at a time)
  const [openItem, setOpenItem] = useState<string | null>(null);
  const { trackFeatureEngagement } = useRestaurantAnalytics();

  const toggleItem = (itemId: string) => {
    setOpenItem((prev) => {
      const willOpen = prev !== itemId;
      trackFeatureEngagement("task_accordion_toggle", {
        task_id: itemId,
        action: willOpen ? "open" : "close",
      });
      return willOpen ? itemId : null;
    });
  };

  const handleStartComplianceClick = () => {
    trackFeatureEngagement("cta_click", {
      source: "task_management_accordion",
    });
  };

  const getCategoryColor = (_category: string) => {
    return "bg-primary/10 text-primary border-primary/20";
  };

  const getCriticalityColor = (_criticality: string) => {
    return "bg-primary";
  };

  const getStatusColor = (_status: string) => {
    return "text-muted-foreground";
  };

  return (
    <section className={`section-marketing ${className}`}>
      <div className="container">
        <div className="mb-8 text-center">
          <Badge variant="outline" className="mb-4">
            Task Management
          </Badge>
          <h2 className="heading-brand-gradient text-display-2xl mb-3 font-bold tracking-tight lg:text-5xl">
            Simple Opening Checklists
          </h2>
          <p className="enterprise-body text-muted-foreground mx-auto max-w-2xl">
            Standardized, role-based opening tasks for smooth service starts.
          </p>
        </div>

        {/* Compact: removed heavy overview stats */}

        {/* Task Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {complianceProcedures.map((procedure) => {
            const isOpen = openItem === procedure.id;
            return (
              <div
                key={procedure.id}
                className="border border-border rounded-lg bg-card overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleItem(procedure.id)}
                  className="w-full p-4 text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${procedure.id}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="p-2 bg-muted rounded-lg">
                        {procedure.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="enterprise-body font-semibold">
                            {procedure.title}
                          </h3>
                          <div
                            className={cn(
                              "w-2 h-2 rounded-full",
                              getCriticalityColor(procedure.criticality)
                            )}
                          />
                          <span className="clerk-inspired-badge text-xs capitalize">
                            {procedure.category.charAt(0).toUpperCase() + procedure.category.slice(1)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {procedure.description}
                        </p>
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
                    isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="mt-2 p-4 pt-3 border-t bg-muted/20 rounded-t-none">
                    <div className="space-y-4">
                      {procedure.steps.map((step, index) => (
                        <div key={step.id} className="border border-border rounded-lg p-3 bg-card">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium mb-1">{step.step}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{step.details}</p>
                              <div className="space-y-1">
                                <h5 className="text-sm font-medium">Checklist:</h5>
                                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                  {step.checkpoints.map((cp, i) => (
                                    <li key={i}>{cp}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {showCompliance && (
                      <div className="mt-4 text-xs text-muted-foreground">
                        Last completed: {procedure.compliance.lastCompleted}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export type { ComplianceProcedure, FeatureAccordionProps };