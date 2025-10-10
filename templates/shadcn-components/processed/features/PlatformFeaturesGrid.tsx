"use client";

import React, { useState } from "react";
import { Shield, Users, Zap, BarChart3, Building, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlatformFeature {
  id: string;
  type: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  stats: { primary: string; label: string };
  details: {
    title: string;
    description: string;
    benefits: string[];
    integrations?: string[];
  };
}

interface PlatformFeaturesGridProps {
  variant?: 'restaurant' | 'bar' | 'cafe';
  className?: string;
}

// Platform features content following BARS-DEMO-DESIGN-STANDARDS
const FEATURES_CONTENT = {
  restaurant: {
    badge: "Restaurant Operations Platform",
    title: "Complete Restaurant Control", 
    subtitle: "Transform your restaurant operations with intelligent automation, comprehensive compliance, and seamless team coordination.",
    features: [
      {
        id: "smart-automation",
        type: "automation",
        title: "Smart Automation",
        description: "AI-powered workflows that adapt to your restaurant's unique needs and peak service hours.",
        icon: Zap,
        stats: { primary: "85%", label: "Faster Task Completion" },
        details: {
          title: "Intelligent Process Automation",
          description: "Transform your restaurant operations with AI-powered automation that learns your patterns, optimizes workflows, and reduces manual tasks by up to 85%.",
          benefits: [
            "Reduce manual tasks by 85%",
            "AI-powered demand forecasting",
            "Automated priority sorting and scheduling",
            "Smart notification routing to right staff",
            "Self-optimizing workflows that improve over time"
          ],
          integrations: ["Toast POS", "Square", "Resy", "OpenTable", "Deputy", "7shifts"]
        }
      },
      {
        id: "compliance-hub",
        type: "compliance", 
        title: "Compliance Hub",
        description: "Stay ahead of health, safety, and regulatory requirements with automated monitoring and alerts.",
        icon: Shield,
        stats: { primary: "99.8%", label: "Compliance Rate" },
        details: {
          title: "Comprehensive Compliance Management",
          description: "Maintain perfect compliance scores with automated monitoring, real-time alerts, and comprehensive audit trails that keep you ahead of regulations.",
          benefits: [
            "Achieve 99.8% compliance rates consistently",
            "Real-time health code violation alerts",
            "Automated digital checklists and documentation",
            "Complete audit trails for inspections",
            "Proactive regulatory change notifications"
          ],
          integrations: ["ServSafe", "Health Dept APIs", "OSHA Connect", "Local Inspectors", "Certification Trackers"]
        }
      },
      {
        id: "performance-insights",
        type: "analytics",
        title: "Performance Insights", 
        description: "Data-driven decisions with comprehensive analytics and predictive intelligence for operations.",
        icon: BarChart3,
        stats: { primary: "94", label: "Operational Score" },
        details: {
          title: "Advanced Restaurant Analytics",
          description: "Unlock hidden operational insights with comprehensive analytics that predict trends, optimize performance, and drive profitability across all locations.",
          benefits: [
            "Increase operational score to 94+ average",
            "Predictive analytics for demand planning",
            "Custom performance dashboards by role",
            "Real-time trend analysis and alerts", 
            "ROI tracking for all operational improvements"
          ],
          integrations: ["Google Analytics", "Toast Analytics", "Square Analytics", "Yelp Insights", "Social Media APIs"]
        }
      },
      {
        id: "team-coordination",
        type: "coordination",
        title: "Team Coordination",
        description: "Seamless communication and task management across all roles and shifts in real-time.",
        icon: Users,
        stats: { primary: "156", label: "Active Team Members" },
        details: {
          title: "Unified Team Management",
          description: "Coordinate your entire restaurant team with role-based task management, seamless shift handoffs, and real-time communication across FOH and BOH.",
          benefits: [
            "Manage 150+ team members efficiently",
            "Role-based task assignment and tracking",
            "Seamless shift handoff protocols",
            "Real-time team communication channels",
            "Performance tracking by individual and team"
          ],
          integrations: ["Slack", "Microsoft Teams", "WhatsApp Business", "SMS Gateways", "Email Systems"]
        }
      },
      {
        id: "multi-location-scale",
        type: "scaling",
        title: "Multi-Location Scale",
        description: "Centralized management for restaurant groups with location-specific customization options.",
        icon: Building,
        stats: { primary: "24", label: "Locations Managed" },
        details: {
          title: "Enterprise Restaurant Management",
          description: "Scale your restaurant group seamlessly with centralized oversight, location-specific customization, and unified reporting across all properties.",
          benefits: [
            "Manage 20+ locations from single dashboard",
            "Location-specific customization and branding",
            "Unified reporting and analytics across sites",
            "Standardized processes with local flexibility",
            "Centralized training and compliance management"
          ],
          integrations: ["Multi-POS Systems", "Regional APIs", "Corporate Systems", "Franchise Platforms", "ERP Integration"]
        }
      }
    ]
  },
  bar: {
    badge: "Bar Operations Platform",
    title: "Complete Bar Control",
    subtitle: "Transform your bar operations with intelligent monitoring, automated compliance, and seamless team coordination.",
    features: [
      {
        id: "draft-management",
        type: "beverage",
        title: "Draft System Control",
        description: "Real-time monitoring and automated control of your draft beer systems for optimal quality and efficiency.",
        icon: ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12V7a1 1 0 0 1 1-1h4v10H6a1 1 0 0 1-1-1Z"/><path d="M19 12V7a1 1 0 0 0-1-1h-4v10h4a1 1 0 0 0 1-1Z"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>,
        stats: { primary: "96%", label: "System Uptime" },
        details: {
          title: "Intelligent Draft System Management",
          description: "Monitor temperature, pressure, and flow rates across all tap lines with automated alerts and predictive maintenance scheduling.",
          benefits: [
            "Maintain perfect 34°F temperature across all lines",
            "Automated pressure regulation and CO2 monitoring",
            "Real-time keg level tracking and reorder alerts",
            "Quality control with automated line cleaning schedules",
            "Waste reduction through optimal pour monitoring"
          ],
          integrations: ["Micro Matic", "Perlick Systems", "KegID", "Draft Quality Solutions", "BeerBoard"]
        }
      },
      {
        id: "inventory-automation",
        type: "inventory", 
        title: "Smart Inventory",
        description: "AI-powered inventory management with automated reordering and real-time stock level monitoring.",
        icon: BarChart3,
        stats: { primary: "87%", label: "Waste Reduction" },
        details: {
          title: "Automated Bar Inventory Control",
          description: "Reduce waste and optimize profitability with intelligent inventory tracking, automated reordering, and predictive demand forecasting.",
          benefits: [
            "Reduce inventory waste by 87% with smart tracking",
            "Automated reorder points based on consumption patterns",
            "Real-time cost analysis and profit margin tracking",
            "Integration with POS for accurate pour cost calculations",
            "Predictive ordering for seasonal and event-based demand"
          ],
          integrations: ["BevSpot", "AccuBar", "BarHQ", "Toast Inventory", "Sculpture Hospitality"]
        }
      },
      {
        id: "pos-integration",
        type: "technology",
        title: "POS Integration", 
        description: "Seamless integration with your point-of-sale system for unified operations and reporting.",
        icon: ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M8 12h8"/><path d="M8 16h6"/></svg>,
        stats: { primary: "99.8%", label: "Transaction Accuracy" },
        details: {
          title: "Unified POS Operations",
          description: "Integrate all bar operations through your POS system with real-time inventory updates, automated pricing, and comprehensive reporting.",
          benefits: [
            "Achieve 99.8% transaction accuracy with automated systems",
            "Real-time inventory updates with every sale",
            "Dynamic pricing based on supply and demand",
            "Comprehensive sales analytics and profit tracking",
            "Seamless integration with loyalty and rewards programs"
          ],
          integrations: ["Toast POS", "Square", "Resy", "TouchBistro", "Lightspeed", "Clover"]
        }
      },
      {
        id: "team-coordination",
        type: "coordination",
        title: "Team Management",
        description: "Coordinate your bar staff with role-based task management and real-time communication.",
        icon: Users,
        stats: { primary: "45", label: "Staff Members" },
        details: {
          title: "Unified Bar Team Management",
          description: "Streamline your bar operations with intelligent staff coordination, automated task assignments, and performance tracking.",
          benefits: [
            "Manage 40+ staff members across multiple shifts",
            "Role-based task assignment and completion tracking",
            "Real-time communication between bartenders and servers",
            "Performance analytics and tip distribution management",
            "Automated scheduling based on projected demand"
          ],
          integrations: ["7shifts", "Deputy", "When I Work", "Slack", "Microsoft Teams"]
        }
      },
      {
        id: "compliance-monitoring",
        type: "compliance",
        title: "Compliance & Safety",
        description: "Automated compliance monitoring for health codes, liquor licensing, and safety regulations.",
        icon: Shield,
        stats: { primary: "100%", label: "Compliance Rate" },
        details: {
          title: "Comprehensive Bar Compliance",
          description: "Maintain perfect compliance with automated monitoring of health codes, liquor licensing requirements, and safety protocols.",
          benefits: [
            "Maintain 100% compliance with liquor licensing requirements",
            "Automated health code monitoring and documentation",
            "Real-time safety protocol enforcement and training",
            "Digital audit trails for all compliance activities",
            "Proactive alerts for license renewals and inspections"
          ],
          integrations: ["ServSafe", "TIPS Certification", "State Liquor Boards", "Health Departments", "OSHA Connect"]
        }
      }
    ]
  }
};

/**
 * Platform Features Grid - Interactive Feature Selection following BARS-DEMO-DESIGN-STANDARDS
 * 
 * GOLD STANDARD COMPLIANCE + CLERK/STRIPE ENHANCEMENTS:
 * - Interactive card selection with state management
 * - clerk-inspired-badge for all badge elements
 * - clerk-glass-card for main content cards
 * - Purple checkboxes (bg-purple-100, text-purple-600) for benefits
 * - Primary/secondary color tokens throughout
 * - Industry-specific content variants (restaurant, bar, cafe)
 * - Enhanced interactivity with hover states and selection rings
 * - Professional integration badges
 */
export function PlatformFeaturesGrid({   
  variant = 'restaurant',
  className
}: PlatformFeaturesGridProps) {
  const [selectedFeature, setSelectedFeature] = useState<string>(
    variant === 'bar' ? 'draft-management' : 'smart-automation'
  );
  const content = FEATURES_CONTENT[variant];
  const currentFeature = content.features.find((f) => f.id === selectedFeature);

  return (
    <section className={`section-marketing py-24 bg-gradient-to-b from-slate-50/30 to-white ${className || ''}`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Following BARS-DEMO patterns */}
        <div className="text-center space-y-6 mb-16">
          {/* Badge - BARS-DEMO standard clerk-inspired-badge */}
          <div className="clerk-inspired-badge motion-fade-in-up-320">
            <CheckCircle className="w-4 h-4" />
            <span>{content.badge}</span>
          </div>
          
          {/* Headline - Following BARS typography standards */}
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight motion-fade-in-up-320 animation-delay-100">
            {content.title}
          </h2>
          
          {/* Description - Using enterprise-body class */}
          <p className="enterprise-body max-w-2xl mx-auto text-muted-foreground motion-fade-in-up-320 animation-delay-200">
            {content.subtitle}
          </p>
        </div>

        {/* Interactive Feature Cards - Clerk/Stripe style selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12 motion-fade-in-up-320 animation-delay-300">
          {content.features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isSelected = selectedFeature === feature.id;
            
            return (
              <div
                key={feature.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl p-6 rounded-lg border ${
                  isSelected 
                    ? "ring-2 ring-primary shadow-xl bg-primary/5 border-primary" 
                    : "hover:shadow-lg clerk-glass-card border-border"
                }`}
                onClick={() => setSelectedFeature(feature.id)}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="text-center space-y-4">
                  {/* Icon with BARS-DEMO styling */}
                  <div className={`mx-auto w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isSelected 
                      ? "bg-primary text-primary-foreground shadow-lg" 
                      : "bg-primary/10 text-primary"
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      isSelected ? "text-primary" : "text-foreground"
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  {/* Stats Display */}
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="text-xl font-bold text-primary">{feature.stats.primary}</div>
                    <div className="text-xs text-muted-foreground">{feature.stats.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Showcase - Enhanced with BARS-DEMO styling */}
        {currentFeature && (
          <div className="clerk-glass-card min-h-[500px] motion-fade-in-up-320 animation-delay-700 p-8 lg:p-12 rounded-lg border">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left: Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    {currentFeature.details.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {currentFeature.details.description}
                  </p>
                </div>

                {/* Benefits with BARS-DEMO purple checkboxes */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">Key Benefits</h4>
                  <div className="space-y-3">
                    {currentFeature.details.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        {/* Purple checkbox - BARS-DEMO standard */}
                        <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-purple-600" />
                        </div>
                        <span className="text-foreground font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integration badges */}
                {currentFeature.details.integrations && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-foreground">Platform Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentFeature.details.integrations.map((integration) => (
                        <div key={integration} className="clerk-inspired-badge text-xs">
                          {integration}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA - BARS-DEMO standard */}
                <div className="pt-4">
                  <Button className="clerk-cta-primary group">
                    Explore {currentFeature.title}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              {/* Right: Platform Dashboard Mockup */}
              <div className="flex items-center justify-center">
                <div className="relative p-8">
                  {/* Platform Operations Visual */}
                  <svg 
                    width="350" 
                    height="350" 
                    viewBox="0 0 350 350" 
                    className="text-primary/20 transition-all duration-500 hover:text-primary/30"
                    fill="currentColor"
                  >
                    {/* Platform Background */}
                    <rect x="25" y="25" width="300" height="300" rx="16" fill="currentColor" />
                    
                    {/* Platform Interface Elements */}
                    <g fill="white" fillOpacity="0.9">
                      {/* Top Navigation */}
                      <rect x="50" y="50" width="250" height="12" rx="6" />
                      
                      {/* Feature Grid Layout */}
                      <rect x="50" y="80" width="70" height="50" rx="8" />
                      <rect x="140" y="80" width="70" height="50" rx="8" />
                      <rect x="230" y="80" width="70" height="50" rx="8" />
                      
                      <rect x="50" y="150" width="70" height="50" rx="8" />
                      <rect x="140" y="150" width="70" height="50" rx="8" />
                      <rect x="230" y="150" width="70" height="50" rx="8" />
                      
                      {/* Main Content Area */}
                      <rect x="50" y="220" width="250" height="80" rx="12" />
                      
                      {/* Feature Icons */}
                      <circle cx="85" cy="105" r="8" fill="#10B981" />
                      <circle cx="175" cy="105" r="8" fill="#3B82F6" />
                      <circle cx="265" cy="105" r="8" fill="#8B5CF6" />
                      <circle cx="85" cy="175" r="8" fill="#F59E0B" />
                      <circle cx="175" cy="175" r="8" fill="#EF4444" />
                      <circle cx="265" cy="175" r="8" fill="#06B6D4" />
                      
                      {/* Status Indicators */}
                      <circle cx="70" cy="290" r="6" fill="#10B981" />
                      <circle cx="90" cy="290" r="6" fill="#10B981" />
                      <circle cx="110" cy="290" r="6" fill="#F59E0B" />
                      <circle cx="130" cy="290" r="6" fill="#10B981" />
                      <circle cx="150" cy="290" r="6" fill="#10B981" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PlatformFeaturesGrid;
export type { PlatformFeature, PlatformFeaturesGridProps };
