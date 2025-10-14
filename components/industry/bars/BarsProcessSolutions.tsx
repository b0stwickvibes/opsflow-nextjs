"use client";

import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';

/**
 * BarsProcessSolutions Component
 * 
 * Two-column layout showing problem/solution pairs with sticky sidebar.
 * Features clean cards with purple accents and metrics display.
 * Adapts to parent accent theme (radiant galaxy purple for bars via .accent-purple wrapper)
 * 
 * Used in: /app/solutions/bars
 * Domain: Bars & Nightlife Industry  
 * Design: Stripe/Clerk ultra-clean style with adaptive accent theming
 */

export interface Solution {
  problem: string;
  solution: string;
  benefits: string[];
}

export interface ProcessSolution {
  title: string;
  description: string;
  icon: LucideIcon;
  solutions: Solution[];
  timeframe: string;
  complexity: "Low" | "Medium" | "High";
}

export interface BarsProcessSolutionsProps {
  title: string;
  description: string;
  badge: string;
  processSolutions: ProcessSolution[];
  bottomCTA?: {
    title: string;
    description: string;
    action: () => void;
  };
}

export function BarsProcessSolutions({ 
  title, 
  description, 
  badge, 
  processSolutions,
  bottomCTA 
}: BarsProcessSolutionsProps) {
  return (
    <>

        {/* Header */}
        <div className="text-center mb-20 motion-fade-in-up-320">
          <div className="clerk-inspired-badge mb-6">
            {badge}
          </div>
          <h2 className="enterprise-headline mb-6">
            {title}
          </h2>
          <p className="enterprise-body max-w-2xl mx-auto text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column - Process Solutions */}
          <div className="lg:col-span-2 space-y-16">
            {processSolutions.map((process, processIndex) => {
              const IconComponent = process.icon;
              const solution = process.solutions[0];
              
              return (
                <div 
                  key={processIndex} 
                  className={`motion-fade-in-up-320 animation-delay-${(processIndex + 1) * 100}`}
                >
                  
                  {/* Process Header */}
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {process.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {process.description}
                      </p>
                    </div>
                  </div>

                  {/* Problem/Solution Cards */}
                  <div className="space-y-8">
                    
                    {/* Problem Card */}
                    <div className="clerk-glass-card p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs">!</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">
                            The Challenge
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {solution.problem}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Solution Card */}
                    <div className="clerk-glass-card p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">
                            Our Solution
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {solution.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Benefits List */}
                    <div className="clerk-glass-card p-8">
                      <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-primary" />
                        </div>
                        Key Benefits
                      </h4>
                      <div className="grid gap-4">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-muted-foreground leading-relaxed">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {processIndex < processSolutions.length - 1 && (
                    <div className="mt-16 pt-8">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
            
            {/* Metrics Summary Card */}
            <div className="clerk-glass-card p-8">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Expected Results
                </h4>
                <p className="text-sm text-muted-foreground">
                  Average improvements across all areas
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-1">
                    23%
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    Cost Reduction
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Average operational savings
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent mb-1">
                    99.7%
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    Accuracy Rate
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Inventory tracking precision
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">
                    4.8/5
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    Service Rating
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Customer satisfaction score
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Timeline */}
            <div className="clerk-glass-card p-8">
              <h4 className="text-lg font-bold text-foreground mb-6">
                Implementation Timeline
              </h4>
              
              <div className="space-y-4">
                {processSolutions.map((process, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground text-sm">
                        {process.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {process.timeframe} • {process.complexity} complexity
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="clerk-glass-card p-8 text-center">
              <h4 className="text-lg font-bold text-foreground mb-4">
                Ready to Get Started?
              </h4>
              <p className="text-sm text-muted-foreground mb-6">
                See these improvements in your bar within the first month
              </p>
              <button 
                className="w-full px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                onClick={bottomCTA?.action}
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {bottomCTA && (
          <div className="mt-32 motion-fade-in-up-320">
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-12 text-center max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    {bottomCTA.title}
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {bottomCTA.description}
                  </p>
                </div>
                
                <button 
                  className="px-8 py-4 bg-primary text-white rounded-2xl font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                  onClick={bottomCTA.action}
                >
                  <span className="flex items-center gap-2">
                    Get Started Today
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
                
                <div className="pt-6 border-t border-slate-200">
                  <p className="text-sm text-muted-foreground">
                    Trusted by 1,000+ restaurants • HACCP compliant • 99.9% uptime
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
}
