"use client";

import React, { useState } from "react";
import { Target, Link2, Diamond, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  detailTitle: string;
  detailDescription: string;
  detailContent: string;
  benefits: string[];
  integrations?: string[];
}

// Restaurant workflow data following BARS-DEMO-DESIGN-STANDARDS
const WORKFLOW_FEATURES: Feature[] = [
  {
    id: "workflows",
    title: "Tailored Workflows",
    description: "Track progress across custom operational flows designed specifically for restaurant teams.",
    icon: Target,
    detailTitle: "Track progress across custom operational flows for your restaurant team",
    detailDescription: "Simple, robust, and blazingly fast workflow management designed with restaurant operations in mind. It's the first workflow system your team will actually enjoy using.",
    detailContent: "Built on the habits that make the best restaurant teams successful: staying focused on service, moving quickly during peak hours, and always aiming for operational excellence.",
    benefits: [
      "Reduce operational errors by 75%",
      "Custom workflows for FOH and BOH teams",
      "Real-time progress tracking across shifts",
      "Automated task prioritization during rush",
      "Seamless handoff protocols between teams"
    ],
    integrations: ["Toast POS", "Square", "Resy", "OpenTable", "Deputy"]
  },
  {
    id: "projects",
    title: "Cross-Team Projects",
    description: "Collaborate seamlessly across kitchen, service, and management teams for unified operations.",
    icon: Link2,
    detailTitle: "Collaborate seamlessly across kitchen, service, and management teams",
    detailDescription: "Break down silos between FOH and BOH operations. Our platform connects all restaurant teams, aligns service goals, and ensures everyone stays synchronized during service.",
    detailContent: "Built for modern restaurants where the best service happens when kitchen, floor, and management teams work in perfect harmony.",
    benefits: [
      "Eliminate communication gaps between teams",
      "Unified project management for events and specials",
      "Cross-training coordination and scheduling",
      "Real-time collaboration during service hours",
      "Centralized goal alignment across all departments"
    ],
    integrations: ["Slack", "Microsoft Teams", "WhatsApp Business", "SMS Systems", "Kitchen Display Systems"]
  },
  {
    id: "milestones",
    title: "Service Milestones",
    description: "Break complex restaurant projects into concrete, achievable operational phases.",
    icon: Diamond,
    detailTitle: "Break restaurant projects into concrete, achievable operational phases",
    detailDescription: "Transform overwhelming restaurant initiatives into manageable milestones. Set clear service checkpoints, track operational progress, and celebrate team wins along the way.",
    detailContent: "Every great restaurant improvement is just a series of smaller operational victories. Our milestone system helps you plan, execute, and deliver exceptional service with confidence.",
    benefits: [
      "Achieve 95% milestone completion rates",
      "Clear operational checkpoints and goals",
      "Team celebration and recognition tracking",
      "Progressive skill development milestones",
      "Revenue and efficiency milestone tracking"
    ],
    integrations: ["Performance Trackers", "Training Systems", "Goal Management", "Recognition Platforms", "Analytics Tools"]
  },
  {
    id: "insights",
    title: "Progress Insights",
    description: "Track operational scope, service velocity, and team progress over time with restaurant-focused analytics.",
    icon: BarChart3,
    detailTitle: "Track operational scope, service velocity, and team progress over time",
    detailDescription: "Get deep insights into your restaurant team's performance with comprehensive operational analytics. Understand service patterns, identify bottlenecks, and optimize your workflow for peak efficiency.",
    detailContent: "Data-driven decisions lead to better service outcomes. Our insights help you understand what's working in your operations and what needs improvement for maximum efficiency.",
    benefits: [
      "Increase service efficiency by 40%",
      "Real-time operational performance tracking",
      "Predictive analytics for busy periods",
      "Team performance optimization insights",
      "Custom dashboard for different management levels"
    ],
    integrations: ["Google Analytics", "Toast Analytics", "Square Analytics", "Yelp Insights", "Social Media APIs"]
  }
];

export interface FeatureShowcaseProps {
  industry?: 'restaurant' | 'retail' | 'healthcare';
  className?: string;
}

/**
 * FeatureShowcase - Interactive Workflow Selection following BARS-DEMO-DESIGN-STANDARDS
 * 
 * GOLD STANDARD COMPLIANCE + CLERK/STRIPE ENHANCEMENTS:
 * - Interactive card selection with state management
 * - clerk-inspired-badge for all badge elements
 * - clerk-glass-card for main content cards
 * - Purple checkboxes (bg-purple-100, text-purple-600) for benefits
 * - Primary/secondary color tokens throughout
 * - Restaurant operations focus with workflow management
 * - Enhanced interactivity with hover states and selection indicators
 * - Professional integration badges
 */
export function FeatureShowcase({ 
  industry = 'restaurant',
  className = ""
}: FeatureShowcaseProps) {
  const [selectedFeature, setSelectedFeature] = useState<string>("workflows");
  const currentFeature = WORKFLOW_FEATURES.find((f) => f.id === selectedFeature) || WORKFLOW_FEATURES[0];

  return (
    <section className={cn("section-marketing", className)}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Following BARS-DEMO patterns */}
        <div className="text-center space-y-6 mb-16">
          {/* Badge - BARS-DEMO standard clerk-inspired-badge */}
          <div className="clerk-inspired-badge motion-fade-in-up-320">
            <CheckCircle className="w-4 h-4" />
            <span>Restaurant Workflows</span>
          </div>
          
          {/* Headline - Following BARS typography standards */}
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight motion-fade-in-up-320 animation-delay-100">
            Streamline your restaurant operations and execution
          </h2>
          
          {/* Description - Using enterprise-body class */}
          <p className="enterprise-body max-w-2xl mx-auto text-muted-foreground motion-fade-in-up-320 animation-delay-200">
            Achieve seamless service delivery with intelligent workflows,
            cross-team collaboration, and comprehensive progress tracking.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 motion-fade-in-up-320 animation-delay-300">
          
          {/* Left sidebar with interactive feature cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              {WORKFLOW_FEATURES.map((feature, index) => {
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
                    <CardHeader className="space-y-4 p-6">
                      <div className="flex items-start gap-4">
                        {/* Icon with BARS-DEMO styling */}
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0",
                          isSelected 
                            ? "bg-primary text-primary-foreground shadow-lg" 
                            : "bg-primary/10 text-primary"
                        )}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        
                        <div className="flex-1 min-w-0 space-y-2">
                          <CardTitle className={cn(
                            "text-lg transition-colors duration-300 text-balance leading-tight",
                            isSelected ? "text-primary" : "text-foreground"
                          )}>
                            {feature.title}
                          </CardTitle>
                          <CardDescription className="text-sm leading-relaxed text-pretty">
                            {feature.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right main showcase area - Enhanced with BARS-DEMO styling */}
          <div className="lg:col-span-8">
            <Card className="clerk-glass-card min-h-[600px] motion-fade-in-up-320 animation-delay-700">
              <CardContent className="p-8 lg:p-12 h-full">
                <div className="flex flex-col h-full">
                  
                  {/* Content Section */}
                  <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-foreground text-balance leading-tight">
                        {currentFeature.detailTitle}
                      </h3>
                      <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                        {currentFeature.detailDescription}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <p className="text-foreground/90 text-pretty leading-relaxed">
                        {currentFeature.detailContent}
                      </p>

                      {/* Benefits with BARS-DEMO purple checkboxes */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-foreground">Key Benefits</h4>
                        <div className="space-y-3">
                          {currentFeature.benefits.map((benefit, index) => (
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
                      {currentFeature.integrations && (
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-foreground">Platform Integrations</h4>
                          <div className="flex flex-wrap gap-2">
                            {currentFeature.integrations.map((integration) => (
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
                  </div>

                  {/* Enhanced Restaurant Operations Visual */}
                  <div className="flex items-center justify-center pt-8">
                    <div className="relative">
                      <div className="w-40 h-40 relative">
                        {/* Restaurant Operations Hexagonal Logo */}
                        <svg viewBox="0 0 120 120" className="w-full h-full text-primary/20 transition-all duration-500 hover:text-primary/30" fill="currentColor">
                          {/* Outer hexagon - Restaurant Operations Hub */}
                          <path d="M60 10 L95 30 L95 70 L60 90 L25 70 L25 30 Z" />

                          {/* Inner operational flow lines */}
                          <g className="text-primary/40">
                            <rect x="35" y="25" width="2" height="50" />
                            <rect x="42" y="20" width="2" height="60" />
                            <rect x="49" y="15" width="2" height="70" />
                            <rect x="56" y="10" width="2" height="80" />
                            <rect x="63" y="10" width="2" height="80" />
                            <rect x="70" y="15" width="2" height="70" />
                            <rect x="77" y="20" width="2" height="60" />
                            <rect x="84" y="25" width="2" height="50" />
                          </g>

                          {/* Central workflow indicator */}
                          <circle cx="60" cy="60" r="8" fill="white" fillOpacity="0.9" />
                          <circle cx="60" cy="60" r="4" className="text-primary" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
