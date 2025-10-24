"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { CheckSquare, Thermometer, FileCheck, Users, BarChart3, Wrench, Check, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

/**
 * InteractiveFeatureShowcase - Tabbed feature demonstration with live previews
 *
 * DESIGN STANDARDS:
 * - Uses OKLCH color tokens exclusively
 * - Professional metric card system with 8% opacity
 * - BARS-DEMO sticky sidebar pattern
 * - Follows enterprise glassmorphism standards
 * - Restaurant-specific terminology
 * - Modal popups similar to Platform Capabilities
 */

const featureTabs = [
  {
    id: "tasks",
    icon: CheckSquare,
    title: "Task Management",
    description: "Smart checklists with automated routing, role-based assignments, and mobile tracking",
    iconBg: "bg-pink-100 dark:bg-pink-900/30",
    iconColor: "text-pink-600 dark:text-pink-400",
    accentColor: "#ec4899",
    metrics: [
      { label: "Tasks Completed Today", value: "127", progress: 85, status: "active" },
      { label: "On-Time Completion", value: "94%", progress: 94, status: "success" },
      { label: "Pending Tasks", value: "23", progress: 15, status: "warning" },
      { label: "Average Completion Time", value: "12min", progress: 88, status: "info" }
    ],
    features: [
      "50+ customizable templates",
      "Smart recurring schedules",
      "Photo verification required",
      "Automated escalation rules"
    ],
    details: {
      overview: "Streamline your daily operations with intelligent task management that adapts to your workflow. Our system automatically routes tasks, tracks completion, and provides real-time visibility into your operations.",
      benefits: [
        "50+ pre-built templates for common restaurant tasks",
        "Automated task routing based on roles and schedules",
        "Photo verification and digital signatures",
        "Real-time task completion tracking"
      ],
      useCases: [
        "Opening and closing checklists",
        "Line cook prep tasks",
        "Cleaning and sanitation schedules",
        "Equipment inspection rounds"
      ]
    }
  },
  {
    id: "temperature",
    icon: Thermometer,
    title: "Temperature Monitoring",
    description: "Continuous monitoring with Bluetooth sensors, automated alerts, and compliance logging",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
    accentColor: "#10b981",
    metrics: [
      { label: "Cooler Temperature", value: "38°F", progress: 95, status: "success" },
      { label: "Freezer Temperature", value: "-2°F", progress: 98, status: "success" },
      { label: "Hot Line Temperature", value: "152°F", progress: 92, status: "active" },
      { label: "Compliance Rate", value: "99.8%", progress: 99, status: "success" }
    ],
    features: [
      "Bluetooth probe integration",
      "24/7 continuous monitoring",
      "Instant SMS/email alerts",
      "Automatic HACCP logs"
    ],
    details: {
      overview: "Ensure food safety with 24/7 automated temperature monitoring using Bluetooth sensors that eliminate manual logs and provide instant alerts when temperatures drift out of safe zones.",
      benefits: [
        "100% HACCP compliance guaranteed",
        "Instant alerts for temperature violations",
        "Automated digital record keeping",
        "Reduce food waste by 30%"
      ],
      useCases: [
        "Walk-in cooler and freezer monitoring",
        "Hot holding equipment tracking",
        "Cook temperature verification",
        "Receiving temperature checks"
      ]
    }
  },
  {
    id: "compliance",
    icon: FileCheck,
    title: "HACCP Compliance",
    description: "Digital audits, corrective action workflows, and regulatory-ready reporting",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    accentColor: "#3b82f6",
    metrics: [
      { label: "Compliance Score", value: "98.5%", progress: 98, status: "success" },
      { label: "Audits This Month", value: "12", progress: 100, status: "active" },
      { label: "Open Corrective Actions", value: "3", progress: 25, status: "warning" },
      { label: "Days Since Last Incident", value: "45", progress: 90, status: "info" }
    ],
    features: [
      "HACCP & FSMA ready",
      "Digital audit templates",
      "Photo documentation",
      "Corrective action tracking"
    ],
    details: {
      overview: "Simplify food safety compliance with digital audit trails and automated corrective action workflows. Stay audit-ready at all times with comprehensive documentation.",
      benefits: [
        "Pass health inspections with confidence",
        "Reduce audit preparation time by 70%",
        "Automated corrective action tracking",
        "Complete digital documentation"
      ],
      useCases: [
        "Digital audit checklists",
        "Photo evidence capture",
        "Automated corrective actions",
        "Compliance reporting dashboard"
      ]
    }
  },
  {
    id: "team",
    icon: Users,
    title: "Team Management",
    description: "Staff scheduling, training tracking, performance monitoring, and real-time communication",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    accentColor: "#059669",
    metrics: [
      { label: "Staff On Duty", value: "18", progress: 90, status: "active" },
      { label: "Training Compliance", value: "96%", progress: 96, status: "success" },
      { label: "Labor Cost %", value: "28.5%", progress: 71, status: "info" },
      { label: "Team Response Time", value: "3min", progress: 85, status: "success" }
    ],
    features: [
      "Smart scheduling automation",
      "Digital training tracking",
      "Real-time team chat",
      "Performance analytics"
    ],
    details: {
      overview: "Empower your team with intelligent scheduling, training management, and seamless communication tools. Keep everyone connected and informed in real-time.",
      benefits: [
        "Reduce scheduling conflicts by 85%",
        "Track training certifications automatically",
        "Improve team communication",
        "Optimize labor costs"
      ],
      useCases: [
        "Smart shift scheduling",
        "Training certification tracking",
        "In-app team messaging",
        "Time-off request management"
      ]
    }
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Real-time dashboards, custom reports, predictive insights, and KPI tracking",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    accentColor: "#a855f7",
    metrics: [
      { label: "Overall Efficiency", value: "87%", progress: 87, status: "success" },
      { label: "Cost Savings MTD", value: "$4,280", progress: 75, status: "active" },
      { label: "Task Completion Rate", value: "91%", progress: 91, status: "success" },
      { label: "Compliance Score", value: "98%", progress: 98, status: "success" }
    ],
    features: [
      "Live operations dashboard",
      "Custom report builder",
      "Predictive AI insights",
      "Export to Excel/PDF"
    ],
    details: {
      overview: "Make data-driven decisions with powerful analytics and customizable reporting. Our AI-powered insights help you identify trends and optimize operations.",
      benefits: [
        "Identify cost-saving opportunities",
        "Real-time operational visibility",
        "Predictive analytics for planning",
        "Custom reports in seconds"
      ],
      useCases: [
        "Real-time dashboards",
        "Custom report builder",
        "AI-powered insights",
        "Trend analysis and forecasting"
      ]
    }
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Equipment & Maintenance",
    description: "Work orders, preventive maintenance schedules, and equipment lifecycle tracking",
    iconBg: "bg-cyan-100 dark:bg-cyan-900/30",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    accentColor: "#06b6d4",
    metrics: [
      { label: "Active Work Orders", value: "7", progress: 35, status: "warning" },
      { label: "PM Completion Rate", value: "94%", progress: 94, status: "success" },
      { label: "Equipment Uptime", value: "98.2%", progress: 98, status: "success" },
      { label: "Avg Resolution Time", value: "4.2hrs", progress: 82, status: "info" }
    ],
    features: [
      "Digital work order system",
      "Preventive maintenance",
      "Equipment asset tracking",
      "Vendor management"
    ],
    details: {
      overview: "Prevent costly breakdowns with proactive equipment maintenance. Our system schedules preventive maintenance and tracks work orders to keep your operations running smoothly.",
      benefits: [
        "Reduce equipment downtime by 60%",
        "Lower maintenance costs",
        "Extend equipment lifespan",
        "Prevent unexpected failures"
      ],
      useCases: [
        "Preventive maintenance scheduling",
        "Work order management",
        "Equipment history tracking",
        "Vendor management"
      ]
    }
  }
];

// Dynamic status colors - will be overridden by feature-specific colors
const getStatusColors = (accentColor: string, iconBg: string) => ({
  active: `${iconBg} border-opacity-20 text-foreground`,
  success: `${iconBg} border-opacity-20 text-foreground`,
  warning: `${iconBg} border-opacity-20 text-foreground`,
  info: `${iconBg} border-opacity-20 text-foreground`
});

export function InteractiveFeatureShowcase() {
  const [activeTab, setActiveTab] = useState(featureTabs[0].id);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [hoveredArrow, setHoveredArrow] = useState<'prev' | 'next' | null>(null);

  const currentFeature = featureTabs.find(tab => tab.id === activeTab) || featureTabs[0];
  const currentFeatureIndex = featureTabs.findIndex(tab => tab.id === activeTab);
  const Icon = currentFeature.icon;

  const navigateFeature = (direction: 'prev' | 'next') => {
    if (selectedFeature === null) return;

    if (direction === 'prev') {
      setSelectedFeature(selectedFeature > 0 ? selectedFeature - 1 : featureTabs.length - 1);
    } else {
      setSelectedFeature(selectedFeature < featureTabs.length - 1 ? selectedFeature + 1 : 0);
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex">
          <Badge variant="secondary" className="badge-subtle-gradient">
            Interactive Demo
          </Badge>
        </div>
        <h2 className="enterprise-headline">
          See Features in Action
          <span className="block heading-brand-gradient mt-2">
            Real-time Operations Dashboard
          </span>
        </h2>
        <p className="enterprise-body">
          Click through different operational areas to see live metrics,
          automated workflows, and real-time monitoring in action.
        </p>
      </div>

      {/* Interactive Content */}
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Tab Navigation - Left Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          {featureTabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  w-full text-left p-4 rounded-xl border transition-all duration-300
                  ${isActive
                    ? 'bg-primary/8 border-primary/20 shadow-sm'
                    : 'bg-background/60 border-border/50 hover:bg-muted/50 hover:border-border'}
                `}
              >
                <div className="flex items-start gap-3">
                  <div className={`
                    flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                    ${isActive ? tab.iconBg : 'bg-background/50 border border-border/50'}
                  `}>
                    <TabIcon className={`w-5 h-5 ${isActive ? tab.iconColor : 'text-muted-foreground'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm ${isActive ? 'text-foreground' : 'text-foreground/80'}`}>
                      {tab.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {tab.description}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Content Area - Right Side */}
        <div className="lg:col-span-8 space-y-6">
          {/* Feature Header */}
          <div className="clerk-glass-card p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${currentFeature.iconBg} flex items-center justify-center`}>
                <Icon className={`w-7 h-7 ${currentFeature.iconColor}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {currentFeature.title}
                </h3>
                <p className="text-muted-foreground">
                  {currentFeature.description}
                </p>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap gap-2 pt-2">
              {currentFeature.features.map((feature, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className={`text-xs ${currentFeature.iconBg} ${currentFeature.iconColor} border-0`}
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Live Metrics Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentFeature.metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`
                  p-5 rounded-xl border border-border/50 bg-background/60 backdrop-blur-sm
                  transition-all duration-300 hover:border-border hover:shadow-md
                  motion-fade-in-up-320
                `}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {metric.label}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-[10px] text-muted-foreground">Live</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {metric.value}
                  </div>
                  <div className="relative h-1.5 bg-muted/30 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${metric.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setSelectedFeature(currentFeatureIndex)}
              className="clerk-cta-primary group"
              size="lg"
            >
              Learn More About {currentFeature.title}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Feature Detail Modal */}
      {selectedFeature !== null && createPortal(
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-0 flex items-center justify-center p-4" onClick={() => setSelectedFeature(null)}>
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl border border-border" onClick={(e) => e.stopPropagation()}>

              {/* Sticky Header */}
              <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
                {(() => {
                  const feature = featureTabs[selectedFeature];
                  const FeatureIcon = feature.icon;
                  return (
                    <>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${feature.iconBg}`}>
                          <FeatureIcon className={`w-5 h-5 ${feature.iconColor}`} />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold text-foreground">
                            {feature.title}
                          </h2>
                          <p className="text-xs text-muted-foreground">
                            {selectedFeature + 1} / {featureTabs.length}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <button
                            onClick={() => navigateFeature('prev')}
                            onMouseEnter={() => setHoveredArrow('prev')}
                            onMouseLeave={() => setHoveredArrow(null)}
                            className="w-9 h-9 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                            aria-label="Previous"
                          >
                            <ChevronLeft className="w-5 h-5 text-foreground" />
                          </button>
                          {hoveredArrow === 'prev' && selectedFeature > 0 && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap pointer-events-none shadow-xl z-20">
                              {featureTabs[selectedFeature - 1].title}
                              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                            </div>
                          )}
                        </div>

                        <div className="relative">
                          <button
                            onClick={() => navigateFeature('next')}
                            onMouseEnter={() => setHoveredArrow('next')}
                            onMouseLeave={() => setHoveredArrow(null)}
                            className="w-9 h-9 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                            aria-label="Next"
                          >
                            <ChevronRight className="w-5 h-5 text-foreground" />
                          </button>
                          {hoveredArrow === 'next' && selectedFeature < featureTabs.length - 1 && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap pointer-events-none shadow-xl z-20">
                              {featureTabs[selectedFeature + 1].title}
                              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                            </div>
                          )}
                        </div>

                        <button
                          onClick={() => setSelectedFeature(null)}
                          className="w-9 h-9 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                          aria-label="Close"
                        >
                          <X className="w-5 h-5 text-foreground" />
                        </button>
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {(() => {
                  const feature = featureTabs[selectedFeature];

                  return (
                    <>
                      {/* Overview */}
                      <div>
                        <p className="text-foreground/90 leading-relaxed">
                          {feature.details.overview}
                        </p>
                      </div>

                      {/* Key Benefits */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          Key Benefits
                        </h3>
                        <div className="space-y-2">
                          {feature.details.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className={`mt-0.5 p-1 rounded ${feature.iconBg}`}>
                                <Check className={`w-4 h-4 ${feature.iconColor}`} strokeWidth={2.5} />
                              </div>
                              <p className="text-sm text-foreground/90 leading-relaxed">{benefit}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {feature.details.useCases.map((useCase, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-foreground/90">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {useCase}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4 border-t border-border">
                        <button className="w-full clerk-cta-primary px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                          Get Started with {feature.title}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
