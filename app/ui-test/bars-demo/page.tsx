"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Wine, 
  BarChart3, 
  Users, 
  Clock, 
  Target,
  Thermometer,
  Shield,
  TrendingUp,
  CheckCircle,
  Zap,
  DollarSign,
  UserCheck,
  ClipboardList,
  AlertTriangle,
  Settings,
  MessageCircle,
  Phone,
  ExternalLink,
  Calendar,
  FileText,
  Database,
  Smartphone,
  ArrowRight,
  Play,
  ChevronDown,
  ChevronUp,
  Star,
  Award,
  TrendingDown,
  Plus,
  Minus,
  Wrench,
  MapPin,
  Wifi,
  Battery,
  Activity
} from 'lucide-react';

// Showcase components

// Inline UI Components
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
  }
>(({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
  const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };
  
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      ref={ref}
      {...props}
    />
  );
});

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  }
>(({ className = '', variant = 'default', ...props }, ref) => {
  const variants = {
    default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
    secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
    outline: 'text-foreground',
  };
  
  return (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    />
  );
});

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => (
  <div
    ref={ref}
    className={`enterprise-card rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  />
));

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
));

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = '', ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
));

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = '', ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-muted-foreground ${className}`}
    {...props}
  />
));

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
));

const Collapsible = ({ open, onOpenChange, children }: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void; 
  children: React.ReactNode; 
}) => {
  return (
    <div>
      {children}
    </div>
  );
};

const CollapsibleTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className = '', ...props }, ref) => (
  <button
    ref={ref}
    className={`flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline ${className}`}
    {...props}
  />
));

const CollapsibleContent = ({ open, children }: { open: boolean; children: React.ReactNode }) => {
  return (
    <div className={`overflow-hidden transition-all ${open ? 'animate-in slide-in-from-top-2 fade-in-0' : 'animate-out slide-out-to-top-2 fade-out-0 hidden'}`}>
      <div className="pb-4 pt-0">
        {children}
      </div>
    </div>
  );
};

// Industry Hero Component
const IndustryHero = ({
  industry,
  headline,
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  stats,
  backgroundImage
}: {
  industry: string;
  headline: string;
  subheadline: string;
  description: string;
  primaryCTA: { text: string; action: () => void; };
  secondaryCTA: { text: string; action: () => void; };
  badge: { text: string; variant?: "default" | "secondary" | "outline"; };
  stats: { value: string; label: string; }[];
  backgroundImage?: string;
}) => {
  return (
    <section className="section-marketing hero-ambient energy-balanced overflow-hidden">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-12 motion-fade-in-up-320">
            {/* Badge */}
            <div className="inline-flex">
              <div className="clerk-inspired-badge">
                {badge.text}
              </div>
            </div>

            {/* Headlines */}
            <div className="space-y-8">
              <h1 className="enterprise-headline">
                {headline}
                <span className="block heading-brand-gradient mt-4">
                  {subheadline}
                </span>
              </h1>
              
              <p className="enterprise-body max-w-2xl">
                {description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 motion-fade-in-up-320 animation-delay-200">
              <Button 
                size="lg"
                className="clerk-cta-primary cta-shimmer hover-scale-103 cta-equal group"
                onClick={primaryCTA.action}
              >
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="cta-equal group hover-scale-103"
                onClick={secondaryCTA.action}
              >
                <Play className="mr-2 h-4 w-4" />
                {secondaryCTA.text}
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-12 pt-12 border-t border-border/50 motion-fade-in-up-320 animation-delay-300">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="metric-display-medium text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm dashboard-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="lg:pl-8 motion-fade-in-up-320 animation-delay-400">
            <div className="relative">
              {/* Main visual card */}
              <div className="enterprise-card p-8 lg:p-12 tile-hover transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 icon-container-primary rounded-2xl flex items-center justify-center">
                      <Wine className="w-8 h-8 text-white" />
                    </div>
                    <div className="clerk-inspired-badge">
                      Live System
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-display-sm dashboard-text-primary">
                      {industry} Operations
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm dashboard-text-muted">Task Completion</span>
                        <span className="font-semibold">94%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '94%' }} />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="dashboard-metric-cyan p-4 rounded-lg text-center">
                        <div className="text-lg font-bold">18</div>
                        <div className="text-xs dashboard-text-muted">Active Tasks</div>
                      </div>
                      <div className="dashboard-metric-green p-4 rounded-lg text-center">
                        <div className="text-lg font-bold">99.2%</div>
                        <div className="text-xs dashboard-text-muted">Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 icon-container-secondary rounded-2xl flex items-center justify-center shadow-xl">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 enterprise-metric-card p-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Real-time monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Industry Stats Component - Clerk.com Clean Style
const IndustryStats = ({
  title,
  description,
  stats
}: {
  title: string;
  description: string;
  stats: {
    icon: React.ComponentType<{ className?: string }>;
    value: string;
    label: string;
    description: string;
  }[];
}) => {
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Minimal & Clean */}
        <div className="text-center mb-16 motion-fade-in-up-320">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats Grid - Clean Clerk.com Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className={`motion-fade-in-up-320 animation-delay-${(index + 1) * 100}`}
              >
                <div className="bg-white border border-slate-200/60 rounded-2xl p-8 text-center group hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  
                  {/* Icon - Minimal Design */}
                  <div className="w-12 h-12 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Value - Large & Bold */}
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  
                  {/* Label - Clean Typography */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {stat.label}
                  </h3>
                  
                  {/* Description - Subtle */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Note - Minimal */}
        <div className="text-center mt-16 motion-fade-in-up-320 animation-delay-500">
          <p className="text-sm text-muted-foreground">
            Join 1,000+ bars and nightlife venues optimizing operations with OpsFlow
          </p>
        </div>
      </div>
    </section>
  );
};

// Industry Process Component
const IndustryProcess = ({
  title,
  description,
  badge,
  steps
}: {
  title: string;
  description: string;
  badge: string;
  steps: {
    step: number;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    details: string[];
    timeframe: string;
  }[];
}) => {
  return (
    <section className="section-marketing">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="clerk-inspired-badge mb-8">
            {badge}
          </div>
          <h2 className="text-display-lg mb-8">
            {title}
          </h2>
          <p className="enterprise-body max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isCenter = index === 1;
              
              return (
                <div 
                  key={step.step}
                  className={`relative ${
                    isCenter ? 'lg:mt-12' : ''
                  }`}
                >
                  {/* Step indicator */}
                  <div className="relative mb-16">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto relative z-10 ${
                      isCenter 
                        ? 'icon-container-roi' 
                        : index % 2 === 0 
                          ? 'icon-container-primary' 
                          : 'icon-container-secondary'
                    }`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Step number - properly centered below */}
                    <div className="flex justify-center mt-4">
                      <div className="w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-primary">
                          {step.step}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="clerk-glass-card p-10 h-full">
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-display-sm dashboard-text-primary">
                            {step.title}
                          </h3>
                          <div className="clerk-inspired-badge text-xs">
                            {step.timeframe}
                          </div>
                        </div>
                        <p className="enterprise-body">
                          {step.description}
                        </p>
                      </div>

                      {/* Details list */}
                      <div className="space-y-4">
                        {step.details.slice(0, 3).map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm dashboard-text-muted">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Progress indicator */}
                      <div className="pt-6 border-t border-border/50">
                        <div className="flex items-center justify-between text-xs dashboard-text-muted">
                          <span>Step {step.step} of {steps.length}</span>
                          <div className="flex gap-1">
                            {Array.from({ length: steps.length }).map((_, i) => (
                              <div 
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i <= index ? 'bg-primary' : 'bg-muted'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow connector (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8 mb-4">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom summary */}
        <div className="mt-24 text-center">
          <div className="enterprise-metric-card p-12 max-w-2xl mx-auto">
            <h3 className="text-display-sm mb-4">
              Complete Setup in Under 30 Minutes
            </h3>
            <p className="enterprise-body mb-6">
              Our streamlined onboarding process gets your restaurant operations optimized quickly with minimal disruption to your workflow.
            </p>
            <div className="flex justify-center items-center gap-6 text-sm dashboard-text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                No technical expertise required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                White-glove onboarding included
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Industry Feature Deck Alternative Component - Different Layout for Variety
const IndustryFeatureDeckAlternate = ({ 
  title, 
  description, 
  badge, 
  features 
}: IndustryFeatureDeckProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-slate-50/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Ultra Clean */}
        <div className="text-center mb-20 motion-fade-in-up-320">
          {badge && (
            <div className="clerk-inspired-badge mb-8">
              {badge}
            </div>
          )}
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features - Horizontal Cards Layout */}
        <div className="space-y-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <div 
                key={index}
                className={`motion-fade-in-up-320 animation-delay-${(index + 1) * 100}`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isReversed ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  
                  {/* Content Column */}
                  <div className={`space-y-8 ${isReversed ? 'lg:col-start-2' : ''}`}>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <div className="clerk-inspired-badge text-xs">
                          Advanced Feature
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefits Grid */}
                    <div className="grid gap-4">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-purple-100/50 hover:border-purple-200 transition-all duration-300">
                          <div className="w-6 h-6 mt-0.5 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-purple-600" />
                          </div>
                          <span className="text-foreground font-medium leading-relaxed">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Column */}
                  <div className={`${isReversed ? 'lg:col-start-1' : ''}`}>
                    <div className="relative">
                      {/* Main Feature Card */}
                      <div className="bg-gradient-to-br from-white to-purple-50/50 border border-purple-100 rounded-3xl p-8 shadow-lg shadow-purple-100/20">
                        <div className="space-y-6">
                          {/* Mock Interface Elements */}
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-foreground">
                              {feature.title}
                            </div>
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          </div>
                          
                          {/* Data Visualization Mock */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Performance</span>
                              <span className="font-semibold text-foreground">+24%</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2">
                              <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{width: '75%'}} />
                            </div>
                          </div>
                          
                          {/* Mock Metrics */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-purple-50 rounded-xl">
                              <div className="text-lg font-bold text-purple-600">95%</div>
                              <div className="text-xs text-muted-foreground">Accuracy</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 rounded-xl">
                              <div className="text-lg font-bold text-blue-600">$12K</div>
                              <div className="text-xs text-muted-foreground">Monthly</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < features.length - 1 && (
                  <div className="mt-16 pt-8">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - Clean & Minimal */}
        <div className="mt-24 motion-fade-in-up-320 animation-delay-500">
          <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200/60 rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">
                  Ready to Scale Your Analytics?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Advanced analytics and growth tools designed for serious bar operators.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  Explore Advanced Features
                </button>
                
                <button className="px-8 py-4 bg-white border border-purple-200 text-foreground rounded-2xl font-medium hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
                  Schedule Analytics Demo
                </button>
              </div>
              
              {/* Trust indicators - Purple Theme */}
              <div className="flex justify-center items-center gap-8 pt-6 border-t border-purple-200/60 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  Enterprise-grade analytics
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Real-time insights
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Predictive AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Bar Platform Features Grid Component - Following PlatformFeaturesGrid pattern
interface BarPlatformFeature {
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

// Bar Platform features content following BARS-DEMO-DESIGN-STANDARDS
const BAR_FEATURES_CONTENT = {
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
};

const BarPlatformFeaturesGrid = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>("draft-management");
  const content = BAR_FEATURES_CONTENT;
  const currentFeature = content.features.find((f) => f.id === selectedFeature);

  return (
    <section className="section-marketing py-24 bg-gradient-to-b from-slate-50/30 to-white">
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

              {/* Right: Bar Operations Visual */}
              <div className="flex items-center justify-center">
                <div className="relative p-8">
                  {/* Bar Operations Dashboard Mockup */}
                  <svg 
                    width="350" 
                    height="350" 
                    viewBox="0 0 350 350" 
                    className="text-primary/20 transition-all duration-500 hover:text-primary/30"
                    fill="currentColor"
                  >
                    {/* Dashboard Background */}
                    <rect x="25" y="25" width="300" height="300" rx="16" fill="currentColor" />
                    
                    {/* Bar Interface Elements */}
                    <g fill="white" fillOpacity="0.9">
                      {/* Top Navigation */}
                      <rect x="50" y="50" width="250" height="12" rx="6" />
                      
                      {/* Draft System Status */}
                      <rect x="50" y="80" width="70" height="50" rx="8" />
                      <rect x="140" y="80" width="70" height="50" rx="8" />
                      <rect x="230" y="80" width="70" height="50" rx="8" />
                      
                      {/* Inventory Levels */}
                      <rect x="50" y="150" width="70" height="50" rx="8" />
                      <rect x="140" y="150" width="70" height="50" rx="8" />
                      <rect x="230" y="150" width="70" height="50" rx="8" />
                      
                      {/* Analytics Dashboard */}
                      <rect x="50" y="220" width="250" height="80" rx="12" />
                      
                      {/* Status Indicators - Bar themed */}
                      <circle cx="85" cy="105" r="8" fill="#10B981" /> {/* Draft Line 1 */}
                      <circle cx="175" cy="105" r="8" fill="#10B981" /> {/* Draft Line 2 */}
                      <circle cx="265" cy="105" r="8" fill="#F59E0B" /> {/* Draft Line 3 */}
                      <circle cx="85" cy="175" r="8" fill="#10B981" /> {/* Inventory 1 */}
                      <circle cx="175" cy="175" r="8" fill="#EF4444" /> {/* Inventory 2 */}
                      <circle cx="265" cy="175" r="8" fill="#10B981" /> {/* Inventory 3 */}
                      
                      {/* Performance Metrics */}
                      <circle cx="70" cy="260" r="6" fill="#10B981" />
                      <circle cx="90" cy="260" r="6" fill="#10B981" />
                      <circle cx="110" cy="260" r="6" fill="#F59E0B" />
                      <circle cx="130" cy="260" r="6" fill="#10B981" />
                      <circle cx="150" cy="260" r="6" fill="#10B981" />
                      
                      {/* Bar Chart Representation */}
                      <rect x="200" y="240" width="8" height="40" rx="2" fill="#3B82F6" />
                      <rect x="220" y="250" width="8" height="30" rx="2" fill="#8B5CF6" />
                      <rect x="240" y="235" width="8" height="45" rx="2" fill="#10B981" />
                      <rect x="260" y="245" width="8" height="35" rx="2" fill="#F59E0B" />
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
};

// Industry Feature Deck Component
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefits: string[];
  badge?: string;
  link?: {
    text: string;
    action: () => void;
  };
}

interface IndustryFeatureDeckProps {
  title: string;
  description: string;
  badge?: string;
  features: Feature[];
  layout?: "grid" | "carousel";
  ctaSection?: {
    title: string;
    description: string;
    primaryCTA: {
      text: string;
      action: () => void;
    };
    secondaryCTA?: {
      text: string;
      action: () => void;
    };
  };
}

const IndustryFeatureDeck = ({ 
  title, 
  description, 
  badge, 
  features, 
  layout = "grid",
  ctaSection 
}: IndustryFeatureDeckProps) => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50/30 to-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Ultra Clean */}
        <div className="text-center mb-20 motion-fade-in-up-320">
          {badge && (
            <div className="clerk-inspired-badge mb-8">
              {badge}
            </div>
          )}
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features Grid - Clerk.com Clean Style */}
        <div className={`grid gap-8 ${
          layout === "grid" 
            ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" 
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div 
                key={index}
                className={`motion-fade-in-up-320 animation-delay-${(index + 1) * 100}`}
              >
                <div className="bg-white border border-slate-200/60 rounded-3xl p-8 h-full group hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                  
                  {/* Header Section - Clean Layout */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:from-primary/15 group-hover:to-primary/8 transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    
                    {feature.badge && (
                      <div className="clerk-inspired-badge text-xs">
                        {feature.badge}
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4 mb-6">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Benefits - Clean List */}
                  <div className="space-y-3 mb-6">
                    {feature.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-0.5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-purple-600" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Link - Minimal Style */}
                  {feature.link && (
                    <div className="pt-4 border-t border-slate-200/60">
                      <button 
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        onClick={feature.link.action}
                      >
                        {feature.link.text}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section - Ultra Clean */}
        {ctaSection && (
          <div className="mt-20 motion-fade-in-up-320 animation-delay-500">
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 rounded-3xl p-12 text-center max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    {ctaSection.title}
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {ctaSection.description}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="px-8 py-4 bg-primary text-white rounded-2xl font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    onClick={ctaSection.primaryCTA.action}
                  >
                    <span className="flex items-center gap-2">
                      {ctaSection.primaryCTA.text}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                  
                  {ctaSection.secondaryCTA && (
                    <button 
                      className="px-8 py-4 bg-white border border-slate-200 text-foreground rounded-2xl font-medium hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                      onClick={ctaSection.secondaryCTA.action}
                    >
                      <span className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        {ctaSection.secondaryCTA.text}
                      </span>
                    </button>
                  )}
                </div>
                
                {/* Trust indicators - Minimal */}
                <div className="flex justify-center items-center gap-8 pt-6 border-t border-slate-200/60 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    99.9% uptime guarantee
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    HACCP compliant
                    HACCP compliant
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    24/7 support
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Industry Process Solutions Component
interface Solution {
  problem: string;
  solution: string;
  benefits: string[];
  metrics?: {
    label: string;
    value: string;
    improvement: string;
  }[];
}

interface ProcessSolution {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  solutions: Solution[];
  timeframe: string;
  complexity: "Low" | "Medium" | "High";
}

interface IndustryProcessSolutionsProps {
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

const IndustryProcessSolutions = ({ 
  title, 
  description, 
  badge, 
  processSolutions,
  bottomCTA 
}: IndustryProcessSolutionsProps) => {
  return (
    <section className="section-marketing bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Clerk.com clean style */}
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

        {/* Two-Column Layout: Left = Content Cycling, Right = Sticky Sidebar */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column - Process Solutions Cycling */}
          <div className="lg:col-span-2 space-y-16">
            {processSolutions.map((process, processIndex) => {
              const IconComponent = process.icon;
              const solution = process.solutions[0]; // Simplified - take first solution
              
              return (
                <div 
                  key={processIndex} 
                  className={`motion-fade-in-up-320 animation-delay-${(processIndex + 1) * 100}`}
                >
                  
                  {/* Process Header - Clean & Minimal */}
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

                  {/* Problem/Solution Cards - Simplified Layout */}
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
                            {process.solutions[0].problem}
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
                            {process.solutions[0].solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Benefits List - Clean & Simple */}
                    <div className="clerk-glass-card p-8">
                      <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-primary" />
                        </div>
                        Key Benefits
                      </h4>
                      <div className="grid gap-4">
                        {process.solutions[0].benefits.map((benefit, benefitIndex) => (
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
                  </div>                  {/* Divider between processes */}
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

        {/* Bottom CTA - Clean & Minimal */}
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
                
                {/* Trust Line - Minimal */}
                <div className="pt-6 border-t border-slate-200">
                  <p className="text-sm text-muted-foreground">
                    Trusted by 1,000+ restaurants • HACCP compliant • 99.9% uptime
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Industry FAQ Component - Clerk.com Ultra-Clean Style
const IndustryFAQ = ({
  title,
  description,
  badge,
  faqs,
  supportCTA
}: {
  title: string;
  description: string;
  badge: string;
  faqs: {
    question: string;
    answer: string;
    category: 'setup' | 'features' | 'pricing' | 'support';
  }[];
  supportCTA: {
    title: string;
    description: string;
    primaryAction: {
      text: string;
      action: () => void;
    };
    secondaryAction: {
      text: string;
      action: () => void;
    };
  };
}) => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case "setup": return "bg-blue-50 text-blue-700 border-blue-200";
      case "features": return "bg-green-50 text-green-700 border-green-200";
      case "pricing": return "bg-purple-50 text-purple-700 border-purple-200";
      case "support": return "bg-orange-50 text-orange-700 border-orange-200";
      default: return "bg-slate-50 text-slate-600 border-slate-200";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Ultra Clean */}
        <div className="text-center mb-16 motion-fade-in-up-320">
          <div className="clerk-inspired-badge mb-8">
            <MessageCircle className="w-4 h-4 mr-2" />
            {badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* FAQ List - Clean Accordion */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white border border-slate-200/60 rounded-2xl overflow-hidden motion-fade-in-up-320 animation-delay-${(index + 1) * 50} transition-all duration-300 ${
                  openItems.includes(index) ? 'border-primary/20 shadow-lg shadow-primary/5' : 'hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 cursor-pointer hover:bg-slate-50/50 group transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(faq.category)}`}>
                        {faq.category}
                      </div>
                      <h3 className="font-semibold text-foreground text-left group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                      openItems.includes(index) ? 'rotate-180 text-primary' : ''
                    }`} />
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="border-t border-slate-200/60 bg-slate-50/30">
                    <div className="px-6 py-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Support CTA Sidebar - Clean Design */}
          <div className="space-y-6 motion-fade-in-up-320 animation-delay-300">
            <div className="bg-white border border-slate-200/60 rounded-3xl p-8 sticky top-24">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {supportCTA.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {supportCTA.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <button 
                    className="w-full px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    onClick={supportCTA.primaryAction.action}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      {supportCTA.primaryAction.text}
                    </span>
                  </button>
                  
                  <button 
                    className="w-full px-6 py-3 bg-white border border-slate-200 text-foreground rounded-xl font-medium hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                    onClick={supportCTA.secondaryAction.action}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      {supportCTA.secondaryAction.text}
                    </span>
                  </button>
                </div>

                {/* Support features - Clean List */}
                <div className="pt-6 border-t border-slate-200/60 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    24/7 live chat support
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    Average response: 2 minutes
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    Free setup assistance
                  </div>
                </div>
              </div>
            </div>

            {/* Knowledge base card - Clean Resources */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-4">
                Additional Resources
              </h4>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 text-left text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200">
                  <ExternalLink className="w-4 h-4" />
                  Documentation Center
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200">
                  <ExternalLink className="w-4 h-4" />
                  Video Tutorials
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200">
                  <ExternalLink className="w-4 h-4" />
                  Community Forum
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats - Minimal */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 motion-fade-in-up-320 animation-delay-400">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-1">98%</div>
              <div className="text-sm dashboard-text-muted">Questions resolved instantly</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient mb-1">2min</div>
              <div className="text-sm dashboard-text-muted">Average response time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient mb-1">24/7</div>
              <div className="text-sm dashboard-text-muted">Support availability</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient mb-1">1000+</div>
              <div className="text-sm dashboard-text-muted">Satisfied customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Industry CTA Component
const IndustryCTA = ({
  headline,
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  trustIndicators,
  urgencyBadge,
  testimonial
}: {
  headline: string;
  subheadline: string;
  description: string;
  primaryCTA: {
    text: string;
    action: () => void;
  };
  secondaryCTA: {
    text: string;
    action: () => void;
  };
  trustIndicators: {
    icon: React.ComponentType<{ className?: string }>;
    text: string;
  }[];
  urgencyBadge?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}) => {
  return (
    <section className="section-marketing hero-ambient energy-balanced">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Urgency Badge */}
          {urgencyBadge && (
            <div className="motion-fade-in-up-320">
              <div className="clerk-inspired-badge px-4 py-2 text-sm">
                {urgencyBadge}
              </div>
            </div>
          )}

          {/* Headlines */}
          <div className="space-y-6 motion-fade-in-up-320 animation-delay-100">
            <h2 className="enterprise-headline">
              {headline}
            </h2>
            <h3 className="text-display-md heading-brand-gradient">
              {subheadline}
            </h3>
            <p className="enterprise-body max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center motion-fade-in-up-320 animation-delay-200">
            <Button
              size="lg"
              className="clerk-cta-primary cta-shimmer hover-scale-103 cta-equal group"
              onClick={primaryCTA.action}
            >
              {primaryCTA.text}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cta-equal hover-scale-103"
              onClick={secondaryCTA.action}
            >
              {secondaryCTA.text}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <indicator.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium dashboard-text-muted">
                  {indicator.text}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          {testimonial && (
            <Card className="enterprise-card max-w-3xl mx-auto mt-16">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-lg dashboard-text-primary italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold dashboard-text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-sm dashboard-text-muted">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

// Main Bars & Nightlife Page Component with Navigation Wrapper
function BarsDemo() {
  const router = useRouter();

  // Handle navigation using Next.js router
  const handleNavigate = (page: string) => {
    // Default navigation logic
    switch (page) {
      case 'demo':
        router.push('/demo');
        break;
      case 'contact':
        router.push('/contact');
        break;
      case 'features':
        router.push('/features');
        break;
      case 'support':
        router.push('/support');
        break;
      case 'workflow-demo':
        router.push('/workflow-demo');
        break;
      default:
        router.push(`/${page}`);
    }
  };

  // Hero component data
  const heroData = {
    industry: "Bars & Nightlife",
    headline: "Elevate Your Bar Operations",
    subheadline: "From Happy Hour to Last Call",
    description: "Streamline inventory management, optimize staff scheduling, ensure regulatory compliance, and maximize profitability with OpsFlow AI's comprehensive bar management platform.",
    primaryCTA: {
      text: "Start Free Trial",
      action: () => handleNavigate('demo')
    },
    secondaryCTA: {
      text: "Watch Demo",
      action: () => handleNavigate('workflow-demo')
    },
    badge: {
      text: "Bars & Nightlife Solutions",
      variant: "default" as const
    },
    stats: [
      { value: "32%", label: "Avg. cost reduction" },
      { value: "45min", label: "Daily time saved" },
      { value: "99.2%", label: "Compliance rate" }
    ]
    // Removed backgroundImage for clean white background design
  };

  // Stats component data
  const statsData = {
    title: "Industry-Leading Results for Bars & Nightlife",
    description: "See how OpsFlow AI transforms bar operations with measurable improvements in efficiency, compliance, and profitability across all areas of your business.",
    stats: [
      {
        icon: DollarSign,
        value: "32%",
        label: "Cost Reduction",
        description: "Average operational cost savings through optimized inventory management and waste reduction"
      },
      {
        icon: Clock,
        value: "45min",
        label: "Daily Time Saved",
        description: "Per staff member through automated task management and streamlined workflows"
      },
      {
        icon: Target,
        value: "99.2%",
        label: "Compliance Rate",
        description: "TABC, health department, and safety regulation compliance with automated monitoring"
      },
      {
        icon: TrendingUp,
        value: "$18K",
        label: "Monthly Revenue Boost",
        description: "Average increase through optimized pricing, inventory turns, and customer experience"
      }
    ]
  };

  // Process component data
  const processData = {
    title: "Simple Setup, Powerful Results",
    description: "Get your bar operations optimized in under 30 minutes with our streamlined onboarding process.",
    badge: "Quick Implementation",
    steps: [
      {
        step: 1,
        title: "System Integration",
        description: "Connect your existing POS and inventory systems with zero downtime.",
        icon: Settings,
        details: [
          "One-click integration with major POS systems",
          "Import existing inventory and staff data",
          "No disruption to daily operations"
        ],
        timeframe: "10 minutes"
      },
      {
        step: 2,
        title: "Custom Configuration",
        description: "Tailor the platform to your bar's unique needs and regulations.",
        icon: UserCheck,
        details: [
          "Configure drink recipes and portion standards",
          "Set up local compliance requirements",
          "Customize staff roles and permissions"
        ],
        timeframe: "15 minutes"
      },
      {
        step: 3,
        title: "Team Training & Launch",
        description: "Train your team and launch with full support and guidance.",
        icon: Users,
        details: [
          "Interactive staff training sessions",
          "Mobile app walkthrough for all team members",
          "Real-time support during first week"
        ],
        timeframe: "5 minutes"
      }
    ]
  };

  // Feature Deck 1 data
  const featureDeck1Data = {
    title: "Core Bar Management Features",
    description: "Everything you need to run a profitable, compliant, and efficient bar operation.",
    badge: "Essential Features",
    features: [
      {
        icon: Wine,
        title: "Smart Inventory Management",
        description: "Real-time tracking of liquor, beer, wine, and supplies with automated reordering.",
        benefits: [
          "Automated par level maintenance",
          "Real-time pour cost tracking",
          "Theft and spillage detection"
        ],
        link: {
          text: "Learn more about inventory features",
          action: () => handleNavigate('features')
        }
      },
      {
        icon: Users,
        title: "Staff Scheduling & Management",
        description: "Optimize labor costs with intelligent scheduling based on traffic patterns.",
        benefits: [
          "Predictive scheduling based on historical data",
          "Shift swapping and coverage management",
          "Performance tracking and tips reporting"
        ],
        link: {
          text: "Explore scheduling tools",
          action: () => handleNavigate('features')
        }
      },
      {
        icon: Shield,
        title: "Regulatory Compliance",
        description: "Stay compliant with TABC and health regulations through automated monitoring.",
        benefits: [
          "Automated compliance check logging",
          "ID verification and age tracking",
          "Health code violation prevention"
        ],
        link: {
          text: "View compliance features",
          action: () => handleNavigate('features')
        }
      }
    ],
    ctaSection: {
      title: "Ready to Transform Your Bar Operations?",
      description: "Join hundreds of successful bars already using OpsFlow AI to increase profits and ensure compliance.",
      primaryCTA: {
        text: "Start Your Free Trial",
        action: () => handleNavigate('demo')
      },
      secondaryCTA: {
        text: "Schedule a Demo",
        action: () => handleNavigate('contact')
      }
    }
  };

  // Process Solutions data
  const processSolutionsData = {
    title: "Solving Your Biggest Bar Challenges",
    description: "Address the most common operational pain points that cost bars time, money, and compliance issues every day.",
    badge: "Problem Solvers",
    processSolutions: [
      {
        title: "Inventory & Cost Control",
        description: "Eliminate inventory shrinkage and optimize pour costs with intelligent tracking and alerts.",
        icon: BarChart3,
        timeframe: "Immediate impact",
        complexity: "Low" as const,
        solutions: [
          {
            problem: "High liquor costs due to over-pouring, theft, and inaccurate inventory tracking leading to 15-25% profit loss.",
            solution: "Automated pour tracking with smart dispensers, real-time inventory monitoring, and AI-powered theft detection algorithms.",
            benefits: [
              "Reduce liquor costs by 18-25% within first month",
              "Eliminate inventory discrepancies",
              "Automatic alerts for unusual consumption patterns",
              "Integration with existing POS for seamless tracking"
            ],
            metrics: [
              { label: "Cost Reduction", value: "23%", improvement: "+18% vs. manual tracking" },
              { label: "Accuracy", value: "99.7%", improvement: "Eliminates human error" }
            ]
          }
        ]
      },
      {
        title: "Staff Performance & Scheduling",
        description: "Optimize labor costs while maintaining service quality through intelligent scheduling and performance tracking.",
        icon: Users,
        timeframe: "1-2 weeks",
        complexity: "Medium" as const,
        solutions: [
          {
            problem: "Overstaffing during slow periods and understaffing during peak times, leading to 20-30% higher labor costs.",
            solution: "AI-powered predictive scheduling based on historical sales data, weather, events, and local factors.",
            benefits: [
              "Reduce labor costs by 20-25%",
              "Improve customer service during peak times",
              "Automatic shift coverage and swap management",
              "Performance metrics and tip distribution tracking"
            ],
            metrics: [
              { label: "Labor Savings", value: "22%", improvement: "vs. manual scheduling" },
              { label: "Service Rating", value: "4.8/5", improvement: "+0.7 points" }
            ]
          }
        ]
      }
    ],
    bottomCTA: {
      title: "Start Solving Your Bar's Biggest Challenges Today",
      description: "See immediate improvements in cost control, compliance, and customer satisfaction.",
      action: () => handleNavigate('demo')
    }
  };

  // Feature Deck 2 data
  const featureDeck2Data = {
    title: "Advanced Analytics & Growth Tools",
    description: "Take your bar to the next level with advanced analytics, customer insights, and growth optimization features.",
    badge: "Growth & Analytics",
    features: [
      {
        icon: BarChart3,
        title: "Revenue Analytics Dashboard",
        description: "Deep insights into sales patterns, customer preferences, and profitability by drink, time, and staff member.",
        benefits: [
          "Real-time sales performance tracking",
          "Customer preference analytics",
          "Seasonal trend identification",
          "Profit margin optimization recommendations"
        ]
      },
      {
        icon: Smartphone,
        title: "Customer Experience Tools",
        description: "Enhance customer satisfaction with digital ordering, loyalty programs, and personalized service.",
        benefits: [
          "Mobile ordering and payment integration",
          "Automated loyalty program management",
          "Customer feedback collection and analysis",
          "Personalized drink recommendations"
        ]
      },
      {
        icon: TrendingUp,
        title: "Predictive Business Intelligence",
        description: "Make data-driven decisions with AI-powered forecasting for inventory, staffing, and revenue optimization.",
        benefits: [
          "Sales forecasting with 95% accuracy",
          "Seasonal demand prediction",
          "Optimal pricing recommendations",
          "New product introduction guidance"
        ]
      }
    ]
  };

  // FAQ data
  const faqData = {
    title: "Frequently Asked Questions",
    description: "Everything you need to know about implementing OpsFlow AI in your bar.",
    badge: "Support & Setup",
    faqs: [
      {
        question: "How quickly can we get OpsFlow AI up and running?",
        answer: "Most bars are fully operational within 30 minutes. Our system integrates with your existing POS and inventory systems, so there's no disruption to your daily operations.",
        category: "setup" as const
      },
      {
        question: "Does OpsFlow AI integrate with our current POS system?",
        answer: "Yes! We integrate with all major POS systems including Square, Toast, Clover, and 50+ others. Our integration maintains real-time sync without changing your workflows.",
        category: "setup" as const
      },
      {
        question: "How does the inventory tracking work?",
        answer: "Our system uses smart sensors and pour tracking technology to monitor every drink served. You'll get real-time updates on inventory levels and detailed analytics.",
        category: "features" as const
      },
      {
        question: "Can the system help with TABC compliance?",
        answer: "Absolutely. OpsFlow AI automatically logs compliance checks, tracks ID verification, and generates required reports for TABC and health department inspections.",
        category: "features" as const
      },
      {
        question: "What's included in the pricing?",
        answer: "Our plans include the full platform, integrations, mobile apps, training, and 24/7 support. There are no setup fees or hidden costs.",
        category: "pricing" as const
      },
      {
        question: "Do you provide training for our staff?",
        answer: "Yes! We include comprehensive training for your entire team, including managers, bartenders, and support staff. We also provide ongoing support as needed.",
        category: "support" as const
      }
    ],
    supportCTA: {
      title: "Need Help Getting Started?",
      description: "Our bar operations experts are standing by to help you implement OpsFlow AI and start seeing results immediately.",
      primaryAction: {
        text: "Chat with Expert",
        action: () => handleNavigate('contact')
      },
      secondaryAction: {
        text: "Browse Help Center",
        action: () => handleNavigate('support')
      }
    }
  };

  // Final CTA data
  const ctaData = {
    headline: "Ready to Revolutionize Your Bar Operations?",
    subheadline: "Join 1,000+ Bars Already Saving Time and Money",
    description: "Start your 30-day free trial today and see why leading bars choose OpsFlow AI to optimize their operations, ensure compliance, and maximize profitability.",
    primaryCTA: {
      text: "Start Free Trial",
      action: () => handleNavigate('demo')
    },
    secondaryCTA: {
      text: "Schedule Demo",
      action: () => handleNavigate('contact')
    },
    trustIndicators: [
      { icon: Shield, text: "TABC Compliant" },
      { icon: Clock, text: "24/7 Support" },
      { icon: CheckCircle, text: "99.9% Uptime" },
      { icon: Zap, text: "30-Day Free Trial" }
    ],
    urgencyBadge: "Limited Time: Free Setup & Training Worth $500",
    testimonial: {
      quote: "OpsFlow AI transformed our bar operations. We reduced liquor costs by 28% and improved compliance scores to 100%. The ROI was evident within the first month.",
      author: "Marcus Rodriguez",
      role: "Owner",
      company: "Sunset Rooftop Bar"
    }
  };


  // ========================================
  // SHOWCASE SECTION - Ultra-Premium Components
  // ========================================

  const showcaseHeroData = {
    badge: "✨ Next-Gen Bar Management",
    headline: "Transform Your Venue",
    subheadline: "With AI-Powered Intelligence",
    description: "Experience the future of bar operations with real-time analytics, predictive inventory, and automated compliance monitoring. Built for the modern nightlife industry.",
    primaryCTA: {
      text: "Start Free Trial",
      action: () => handleNavigate('demo')
    },
    secondaryCTA: {
      text: "Watch Demo",
      action: () => handleNavigate('contact')
    },
    metrics: [
      { value: "28%", label: "Cost Reduction", change: "+12%" },
      { value: "99.7%", label: "Uptime", change: "+0.2%" },
      { value: "3.2x", label: "ROI", change: "+45%" }
    ]
  };

  const showcaseEssentialFeatures = {
    badge: "🎯 Essential Features",
    title: "Everything You Need",
    subtitle: "Powerful tools designed specifically for bars and nightlife venues. No complexity, just results.",
    features: [
      {
        title: "Real-Time Inventory",
        description: "Track every bottle, keg, and ingredient with precision. Get instant alerts when stock runs low.",
        icon: Wine,
        visual: 'dashboard' as const,
        accent: 'primary' as const,
        size: 'large' as const
      },
      {
        title: "Staff Performance",
        description: "Monitor service quality, sales metrics, and efficiency in real-time.",
        icon: Users,
        visual: 'chart' as const,
        accent: 'secondary' as const
      },
      {
        title: "Compliance Tracking",
        description: "Automated TABC compliance monitoring and reporting.",
        icon: Shield,
        visual: 'pulse' as const,
        accent: 'success' as const
      },
      {
        title: "Peak Hour Analytics",
        description: "Identify busy periods and optimize staffing automatically.",
        icon: Clock,
        visual: 'grid' as const,
        accent: 'primary' as const
      },
      {
        title: "Profit Optimization",
        description: "AI-powered insights to maximize margins on every pour.",
        icon: TrendingUp,
        visual: 'wave' as const,
        accent: 'warning' as const,
        size: 'medium' as const
      }
    ]
  };

  const showcaseAdvancedFeatures = {
    headline: "Advanced Capabilities",
    subheadline: "Unlock enterprise-grade features that scale with your business",
    badge: "🚀 Pro Features",
    panels: [
      {
        title: "Predictive Inventory",
        description: "AI analyzes your sales patterns, events, and seasonality to predict exactly what you'll need, when you'll need it.",
        icon: Target,
        benefits: [
          "Reduce waste by 35% with accurate demand forecasting",
          "Never run out during peak hours",
          "Automatic supplier integration and ordering",
          "Real-time pricing optimization"
        ],
        visual: {
          type: 'dashboard' as const,
          color: '#8b5cf6'
        },
        stat: {
          value: "35%",
          label: "Less Waste"
        }
      },
      {
        title: "Multi-Venue Management",
        description: "Manage multiple locations from a single dashboard. Compare performance, share inventory, and maintain consistency across all venues.",
        icon: MapPin,
        benefits: [
          "Centralized control across all locations",
          "Cross-location inventory transfers",
          "Unified reporting and analytics",
          "Consistent pricing and promotions"
        ],
        visual: {
          type: 'network' as const,
          color: '#3b82f6'
        },
        stat: {
          value: "10+",
          label: "Venues Managed"
        }
      },
      {
        title: "Customer Intelligence",
        description: "Understand your customers like never before. Track preferences, spending patterns, and loyalty metrics automatically.",
        icon: Activity,
        benefits: [
          "Personalized recommendations for regulars",
          "Automated loyalty programs",
          "VIP identification and alerts",
          "Targeted promotions based on behavior"
        ],
        visual: {
          type: 'heatmap' as const,
          color: '#10b981'
        },
        stat: {
          value: "2.3x",
          label: "Repeat Rate"
        }
      },
      {
        title: "Smart Compliance",
        description: "Stay ahead of regulations with automated monitoring, instant alerts, and audit-ready reports.",
        icon: Shield,
        benefits: [
          "Real-time health code compliance",
          "Automatic temperature monitoring",
          "Digital audit trails",
          "Instant violation alerts"
        ],
        visual: {
          type: 'chart' as const,
          color: '#f59e0b'
        },
        stat: {
          value: "100%",
          label: "Compliant"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <IndustryHero {...heroData} />
      <IndustryProcess {...processData} />
      <IndustryFeatureDeck {...featureDeck1Data} />
      <IndustryProcessSolutions {...processSolutionsData} />
      <IndustryStats {...statsData} />
      <BarPlatformFeaturesGrid />
      <IndustryFAQ {...faqData} />
      <IndustryCTA {...ctaData} />
    </div>

  );
}

export default BarsDemo;
