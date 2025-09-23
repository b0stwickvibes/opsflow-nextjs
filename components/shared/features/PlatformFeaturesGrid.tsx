"use client";

import React, { useState } from "react";
import { Shield, Users, Zap, BarChart3, Building, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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

// Platform features content following BARS-DEMO-DESIGN-STANDARDS
const FEATURES_CONTENT = {
  restaurant: {
    badge: "Restaurant Operations",
    title: "Complete Platform Control",
    subtitle: "Achieve seamless operations with intelligent automation, comprehensive compliance, and effortless coordination.",
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
  }
  // ... Additional variants for bar and cafe can be added later
};

export interface PlatformFeaturesGridProps {
  variant?: 'restaurant';
  className?: string;
}

/**
 * Platform Features Grid - Interactive Feature Selection following BARS-DEMO-DESIGN-STANDARDS
 * 
 * GOLD STANDARD COMPLIANCE + CLERK/STRIPE ENHANCEMENTS:
 * - Interactive card selection with state management
 * - clerk-inspired-badge for all badge elements
 * - clerk-glass-card for main content cards
 * - Purple checkboxes (bg-purple-100, text-purple-600) for benefits
 * - Primary/secondary color tokens throughout
 * - Restaurant operations focus with platform integrations
 * - Enhanced interactivity with hover states and selection rings
 * - Professional integration badges
 */
export function PlatformFeaturesGrid({   
  variant = 'restaurant',
  className
}: PlatformFeaturesGridProps) {
  const [selectedFeature, setSelectedFeature] = useState<string>("smart-automation");
  const content = FEATURES_CONTENT[variant];
  const currentFeature = content.features.find((f) => f.id === selectedFeature);

  return (
    <section className={cn("section-marketing", className)}>
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
              <Card
                key={feature.id}
                className={cn(
                  "cursor-pointer transition-all duration-300 hover:shadow-xl hover-scale-103",
                  isSelected 
                    ? "ring-2 ring-primary shadow-xl bg-primary/5" 
                    : "hover:shadow-lg clerk-glass-card"
                )}
                onClick={() => setSelectedFeature(feature.id)}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <CardHeader className="text-center space-y-4 p-6">
                  {/* Icon with BARS-DEMO styling */}
                  <div className={cn(
                    "mx-auto w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300",
                    isSelected 
                      ? "bg-primary text-primary-foreground shadow-lg" 
                      : "bg-primary/10 text-primary"
                  )}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <CardTitle className={cn(
                      "text-lg transition-colors duration-300",
                      isSelected ? "text-primary" : "text-foreground"
                    )}>
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </div>

                  {/* Stats Display */}
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="text-xl font-bold text-primary">{feature.stats.primary}</div>
                    <div className="text-xs text-muted-foreground">{feature.stats.label}</div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Feature Showcase - Enhanced with BARS-DEMO styling */}
        {currentFeature && (
          <Card className="clerk-glass-card min-h-[500px] motion-fade-in-up-320 animation-delay-700">
            <CardContent className="p-8 lg:p-12">
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
                    <Button className="clerk-cta-primary cta-shimmer hover-scale-103">
                      Explore {currentFeature.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
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
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}

export default PlatformFeaturesGrid;