"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Badge } from "@/components/ui/badge";
import {
  CheckSquare,
  Thermometer,
  FileCheck,
  Users,
  BarChart3,
  Shield,
  Wrench,
  Bell,
  Globe,
  Smartphone,
  Zap,
  Lock,
  ArrowRight,
  X,
  Check,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

/**
 * StripePlatformOverviewEnhanced - Advanced feature grid with visual depth
 *
 * ENHANCEMENTS OVER ORIGINAL:
 * - Diagonal composition with angled cards
 * - 3D depth with layered shadows and perspective
 * - Mouse-tracking gradient spotlight effect
 * - Animated grid pattern background
 * - Staggered card reveals with slide-in animations
 * - Icon float animation on hover
 * - Broken grid layout (asymmetric sizing)
 * - Glow effects on hover
 * - Animated connection lines between cards
 *
 * DESIGN STANDARDS:
 * - OKLCH color tokens
 * - Section-compatible (no internal wrappers)
 * - Mobile responsive
 * - Accessibility compliant
 */

const platformFeatures = [
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Smart checklists with automated scheduling and mobile tracking",
    iconBg: "bg-pink-100 dark:bg-pink-900/30",
    iconColor: "text-pink-600 dark:text-pink-400",
    accentColor: "#ec4899",
    size: "large", // 2x2
    details: {
      overview: "Streamline your daily operations with intelligent task management that adapts to your workflow.",
      benefits: [
        "50+ pre-built templates for common restaurant tasks",
        "Automated task routing based on roles and schedules",
        "Photo verification and digital signatures",
        "Real-time task completion tracking",
        "Smart recurring schedules with holiday adjustments"
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
    icon: Thermometer,
    title: "Temperature Monitoring",
    description: "Bluetooth sensors with 24/7 continuous monitoring and alerts",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
    accentColor: "#10b981",
    size: "default",
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
    icon: FileCheck,
    title: "HACCP Compliance",
    description: "Digital audits with automated corrective actions",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    accentColor: "#3b82f6",
    size: "default",
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
    icon: Users,
    title: "Team Management",
    description: "Scheduling, training tracking, and real-time communication",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    accentColor: "#059669",
    size: "medium", // 2x1
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
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Live dashboards with custom reports and AI insights",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    accentColor: "#a855f7",
    size: "large", // 2x2
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
    icon: Shield,
    title: "Safety & Incidents",
    description: "Incident tracking with photo evidence and audit trails",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
    accentColor: "#f97316",
    size: "default",
    details: {
      overview: "Document and track safety incidents with comprehensive photo evidence and audit trails. Ensure workplace safety and maintain compliance with detailed incident reports.",
      benefits: [
        "Reduce incident response time",
        "Complete documentation for insurance",
        "Identify safety trends and patterns",
        "Improve workplace safety culture"
      ],
      useCases: [
        "Instant incident reporting",
        "Photo and video evidence",
        "Automated notifications",
        "Root cause analysis tools"
      ]
    }
  },
  {
    icon: Wrench,
    title: "Equipment Maintenance",
    description: "Work orders and preventive maintenance schedules",
    iconBg: "bg-cyan-100 dark:bg-cyan-900/30",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    accentColor: "#06b6d4",
    size: "default",
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
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Multi-channel notifications with escalation rules",
    iconBg: "bg-amber-100 dark:bg-amber-900/30",
    iconColor: "text-amber-600 dark:text-amber-400",
    accentColor: "#f59e0b",
    size: "medium", // 2x1
    details: {
      overview: "Never miss critical issues with intelligent alert routing and escalation. Our system sends notifications through multiple channels and automatically escalates unresolved issues.",
      benefits: [
        "Instant notification of critical issues",
        "Reduce response time by 75%",
        "Customizable alert preferences",
        "Automatic escalation workflows"
      ],
      useCases: [
        "SMS, email, and push notifications",
        "Custom alert rules",
        "Escalation workflows",
        "Alert acknowledgment tracking"
      ]
    }
  },
  {
    icon: Globe,
    title: "Multi-Location",
    description: "Centralized oversight with location-specific controls",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    accentColor: "#6366f1",
    size: "default",
    details: {
      overview: "Manage multiple locations from a single dashboard while maintaining location-specific controls. Get enterprise-wide visibility with local customization.",
      benefits: [
        "Centralized management dashboard",
        "Location-specific customization",
        "Cross-location reporting",
        "Standardize best practices"
      ],
      useCases: [
        "Multi-location dashboard",
        "Location-specific settings",
        "Cross-location analytics",
        "Centralized user management"
      ]
    }
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native iOS & Android with offline mode",
    iconBg: "bg-rose-100 dark:bg-rose-900/30",
    iconColor: "text-rose-600 dark:text-rose-400",
    accentColor: "#f43f5e",
    size: "default",
    details: {
      overview: "Work anywhere with our native mobile apps. Full offline functionality ensures your team stays productive even without internet connectivity.",
      benefits: [
        "Work without internet connection",
        "Native performance on iOS and Android",
        "Automatic sync when online",
        "Mobile-optimized workflows"
      ],
      useCases: [
        "Native iOS and Android apps",
        "Full offline functionality",
        "Automatic background sync",
        "Push notifications"
      ]
    }
  },
  {
    icon: Zap,
    title: "Integrations",
    description: "POS, inventory, HR, and accounting system connections",
    iconBg: "bg-violet-100 dark:bg-violet-900/30",
    iconColor: "text-violet-600 dark:text-violet-400",
    accentColor: "#8b5cf6",
    size: "default",
    details: {
      overview: "Connect with your existing systems seamlessly. Our platform integrates with popular POS, inventory, HR, and accounting software to create a unified ecosystem.",
      benefits: [
        "Eliminate manual data entry",
        "Real-time data synchronization",
        "Unified reporting across systems",
        "Streamlined workflows"
      ],
      useCases: [
        "POS system integration",
        "Inventory management sync",
        "HR system connections",
        "Accounting software integration"
      ]
    }
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Role-based access, SSO, and SOC 2 compliance",
    iconBg: "bg-fuchsia-100 dark:bg-fuchsia-900/30",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
    accentColor: "#d946ef",
    size: "default",
    details: {
      overview: "Enterprise-grade security with role-based access control, single sign-on, and SOC 2 compliance. Your data is protected with bank-level encryption and security protocols.",
      benefits: [
        "Bank-level data encryption",
        "SOC 2 Type II certified",
        "Granular access controls",
        "Audit trail for all actions"
      ],
      useCases: [
        "Role-based access control",
        "Single sign-on (SSO)",
        "Two-factor authentication",
        "SOC 2 compliance"
      ]
    }
  }
];

export function StripePlatformOverviewEnhanced() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [hoveredArrow, setHoveredArrow] = useState<'prev' | 'next' | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (selectedFeature !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedFeature]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  const navigateFeature = (direction: 'prev' | 'next') => {
    if (selectedFeature === null) return;

    if (direction === 'prev') {
      setSelectedFeature(selectedFeature > 0 ? selectedFeature - 1 : platformFeatures.length - 1);
    } else {
      setSelectedFeature(selectedFeature < platformFeatures.length - 1 ? selectedFeature + 1 : 0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedFeature === null) return;

      if (e.key === 'Escape') {
        setSelectedFeature(null);
      } else if (e.key === 'ArrowLeft') {
        navigateFeature('prev');
      } else if (e.key === 'ArrowRight') {
        navigateFeature('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedFeature]);

  return (
    <div
      className="relative space-y-12"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 transition-all duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, oklch(var(--primary) / 0.2), transparent 40%)`
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(oklch(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, oklch(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Diagonal accent element */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 60 0 L 100 0 L 100 100 L 20 100 Z"
              fill="url(#platformGradient)"
            />
            <defs>
              <linearGradient id="platformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="oklch(var(--primary))" stopOpacity="0.4" />
                <stop offset="100%" stopColor="oklch(var(--secondary))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Header with enhanced styling */}
      <div className={`relative text-center space-y-4 max-w-3xl mx-auto transition-all duration-700 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="inline-flex">
          <Badge variant="secondary" className="badge-subtle-gradient group">
            <Zap className="w-3.5 h-3.5 mr-2 inline group-hover:animate-pulse" />
            Platform Capabilities
          </Badge>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="text-foreground">Features That Speak for</span>
          <br />
          <span className="heading-brand-gradient">Themselves</span>
        </h2>

        <p className="enterprise-body max-w-2xl mx-auto">
          Everything you need to run world-class restaurant operations,
          all in one powerful platform.
        </p>
      </div>

      {/* Enhanced Feature Grid - Broken Grid Layout */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {platformFeatures.map((feature, index) => {
          const Icon = feature.icon;
          const isHovered = hoveredIndex === index;

          // Calculate staggered animation delay
          const delay = index * 50;

          // Determine card size classes for broken grid
          const sizeClasses = {
            large: "lg:col-span-2 lg:row-span-2",
            medium: "lg:col-span-2",
            default: "lg:col-span-1"
          };

          return (
            <div
              key={index}
              className={`
                group relative
                transition-all duration-700
                ${sizeClasses[feature.size as keyof typeof sizeClasses]}
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${delay}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background: `radial-gradient(circle at center, ${feature.accentColor}20, transparent 70%)`
                }}
              />

              {/* Main card */}
              <div className="relative h-full p-6 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-border hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-[1.02]">

                {/* Diagonal stripe accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${feature.accentColor}10, transparent)`,
                    transform: 'rotate(45deg) translateX(50%)'
                  }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon with enhanced animation */}
                  <div className="mb-4">
                    <div className={`
                      inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.iconBg}
                      transition-all duration-500
                      group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg
                      ${isHovered ? 'animate-float' : ''}
                    `}>
                      <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover action indicator */}
                  <button
                    onClick={() => setSelectedFeature(index)}
                    className="mt-4 flex items-center gap-2 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1 hover:gap-3"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none">
                  <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom stats bar */}
      <div className={`relative transition-all duration-700 delay-500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="enterprise-metric-card p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="metric-display-medium text-gradient">12+</div>
              <div className="text-sm text-muted-foreground">Core Features</div>
            </div>
            <div className="space-y-2">
              <div className="metric-display-medium text-gradient">50+</div>
              <div className="text-sm text-muted-foreground">Integrations</div>
            </div>
            <div className="space-y-2">
              <div className="metric-display-medium text-gradient">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Modern Modal - Clerk.com Style (V.2) - Rendered via Portal */}
      {selectedFeature !== null && createPortal(
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center p-4" onClick={() => setSelectedFeature(null)}>
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl border border-border" onClick={(e) => e.stopPropagation()}>

              {/* Sticky Header */}
              <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
                {(() => {
                  const feature = platformFeatures[selectedFeature];
                  const Icon = feature.icon;
                  return (
                    <>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${feature.iconBg}`}>
                          <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold text-foreground">
                            {feature.title}
                          </h2>
                          <p className="text-xs text-muted-foreground">
                            {selectedFeature + 1} / {platformFeatures.length}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <button
                            onClick={() => navigateFeature('prev')}
                            onMouseEnter={() => setHoveredArrow('prev')}
                            onMouseLeave={() => setHoveredArrow(null)}
                            disabled={selectedFeature === 0}
                            className="w-9 h-9 rounded-full hover:bg-muted flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Previous"
                          >
                            <ChevronLeft className="w-5 h-5 text-foreground" />
                          </button>
                          {hoveredArrow === 'prev' && selectedFeature > 0 && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap pointer-events-none shadow-xl z-20">
                              {platformFeatures[selectedFeature - 1].title}
                              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                            </div>
                          )}
                        </div>

                        <div className="relative">
                          <button
                            onClick={() => navigateFeature('next')}
                            onMouseEnter={() => setHoveredArrow('next')}
                            onMouseLeave={() => setHoveredArrow(null)}
                            disabled={selectedFeature === platformFeatures.length - 1}
                            className="w-9 h-9 rounded-full hover:bg-muted flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Next"
                          >
                            <ChevronRight className="w-5 h-5 text-foreground" />
                          </button>
                          {hoveredArrow === 'next' && selectedFeature < platformFeatures.length - 1 && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap pointer-events-none shadow-xl z-20">
                              {platformFeatures[selectedFeature + 1].title}
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
                  const feature = platformFeatures[selectedFeature];

                  if (!feature.details) {
                    return (
                      <div className="py-16 text-center">
                        <p className="text-sm text-muted-foreground">
                          Detailed information coming soon...
                        </p>
                      </div>
                    );
                  }

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
                        <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
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

      {/* Apple-style animations */}
      <style jsx>{`
        /* Apple backdrop animation */}
        @keyframes appleBackdropFade {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(40px) saturate(180%);
          }
        }

        /* Apple scale animation */}
        @keyframes appleScale {
          from {
            opacity: 0;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Apple slide up */}
        @keyframes appleSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Apple float - subtle */}
        @keyframes appleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        /* Legacy animations */}
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(6deg) scale(1.1); }
          50% { transform: translateY(-10px) rotate(6deg) scale(1.1); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Smooth scroll */}
        .overscroll-contain {
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
