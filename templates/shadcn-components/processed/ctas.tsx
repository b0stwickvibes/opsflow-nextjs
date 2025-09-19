"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, TrendingUp, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface RestaurantCTAProps {
  industry?: 'restaurant' | 'bar' | 'coffee' | 'hotel';
}

const industryContent = {
  restaurant: {
    badge: "Restaurant Operations Platform",
    title: "Ready to streamline your restaurant operations?",
    subtitle: "Join 2,500+ restaurants using OpsFlow to automate HACCP compliance, reduce costs by 32%, and save 15 hours per week on manual tasks.",
    primaryCta: "Start Free Trial",
    secondaryCta: "Schedule Demo",
    benefits: [
      { icon: Shield, text: "HACCP Compliance Automation" },
      { icon: Clock, text: "15+ Hours Saved Weekly" },
      { icon: TrendingUp, text: "32% Average Cost Reduction" },
      { icon: CheckCircle, text: "Health Inspection Ready" }
    ],
    testimonial: {
      quote: "OpsFlow transformed our operations. We went from dreading health inspections to being confident and prepared every single time.",
      author: "Sarah Chen",
      role: "Owner, Milano Bistro",
      metric: "Improved compliance score by 23 points"
    }
  },
  bar: {
    badge: "Bar Operations Platform",
    title: "Ready to optimize your bar operations?",
    subtitle: "Join 850+ bars using OpsFlow to manage liquor inventory, ensure compliance, and maximize profitability during peak hours.",
    primaryCta: "Start Free Trial",
    secondaryCta: "Schedule Demo",
    benefits: [
      { icon: Shield, text: "Age Verification System" },
      { icon: Clock, text: "Peak Hours Optimization" },
      { icon: TrendingUp, text: "28% Cost Savings" },
      { icon: CheckCircle, text: "Inventory Management" }
    ],
    testimonial: {
      quote: "Our liquor inventory is finally under control. No more surprise shortages during busy weekends.",
      author: "Mike Rodriguez",
      role: "Manager, Sunset Lounge",
      metric: "Reduced inventory waste by 40%"
    }
  },
  coffee: {
    badge: "Coffee Operations Platform",
    title: "Ready to perfect your coffee operations?",
    subtitle: "Join 1,200+ coffee shops using OpsFlow to optimize rush hours, track quality metrics, and enhance customer experience.",
    primaryCta: "Start Free Trial",
    secondaryCta: "Schedule Demo",
    benefits: [
      { icon: Shield, text: "Quality Control Tracking" },
      { icon: Clock, text: "Rush Hour Optimization" },
      { icon: TrendingUp, text: "25% Efficiency Gain" },
      { icon: CheckCircle, text: "Bean Inventory Management" }
    ],
    testimonial: {
      quote: "Our morning rush is now smooth and predictable. Customers are happier and our team is less stressed.",
      author: "Emma Thompson",
      role: "Owner, Roasted Perfection",
      metric: "Reduced wait times by 45%"
    }
  },
  hotel: {
    badge: "Hotel Operations Platform",
    title: "Ready to elevate your hotel operations?",
    subtitle: "Join 350+ hotels using OpsFlow to coordinate multi-venue operations, enhance guest experience, and maintain enterprise compliance.",
    primaryCta: "Start Free Trial",
    secondaryCta: "Schedule Demo",
    benefits: [
      { icon: Shield, text: "Enterprise Compliance" },
      { icon: Clock, text: "Multi-Venue Coordination" },
      { icon: TrendingUp, text: "35% Operational Efficiency" },
      { icon: CheckCircle, text: "Guest Experience Tracking" }
    ],
    testimonial: {
      quote: "Managing 5 properties is now seamless. Our guest satisfaction scores have never been higher.",
      author: "David Park",
      role: "Operations Director, Grand Hotels",
      metric: "Guest satisfaction up 18%"
    }
  }
};

export function RestaurantCTA({ industry = 'restaurant' }: RestaurantCTAProps) {
  const content = industryContent[industry];
  
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Main CTA */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="clerk-inspired-badge">
                  {content.badge}
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {content.title}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {content.subtitle}
                </p>
              </div>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4">
                {content.benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/70 backdrop-blur-sm border border-white/50">
                      <div className="enterprise-icon-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
              
              {/* CTA Buttons using global styling */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="clerk-cta-primary cta-shimmer hover-scale-103 px-8 py-4 h-auto"
                >
                  {content.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="hover-scale-103 px-8 py-4 h-auto"
                >
                  {content.secondaryCta}
                </Button>
              </div>
            </div>
            
            {/* Right Column - Social Proof */}
            <div className="space-y-8">
              {/* Testimonial Card */}
              <Card className="enterprise-card p-8 shadow-xl">
                <div className="space-y-6">
                  <blockquote className="text-lg text-gray-700 leading-relaxed">
                    "{content.testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {content.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{content.testimonial.author}</div>
                      <div className="text-gray-600">{content.testimonial.role}</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-sm text-brand-gradient font-medium">
                      {content.testimonial.metric}
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="platform-card-professional text-center p-4">
                  <div className="metric-display-medium text-foreground">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="platform-card-professional text-center p-4">
                  <div className="metric-display-medium text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div className="platform-card-professional text-center p-4">
                  <div className="metric-display-medium text-foreground">30-day</div>
                  <div className="text-sm text-muted-foreground">Free Trial</div>
                </div>
                <div className="platform-card-professional text-center p-4">
                  <div className="metric-display-medium text-foreground">SOC 2</div>
                  <div className="text-sm text-muted-foreground">Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Additional CTA variants for different use cases
export function RestaurantTrialCTA() {
  return (
    <section className="py-16 bg-brand-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Start your free trial today
          </h2>
          <p className="text-xl text-white/80">
            No credit card required. Get up and running in minutes with full access to all restaurant operations features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="clerk-cta-primary px-8 py-4 text-lg rounded-lg inline-flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="clerk-cta-secondary px-8 py-4 text-lg rounded-lg inline-flex items-center justify-center gap-2">
              Schedule Demo
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-white/70 text-sm pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RestaurantDemoCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              See OpsFlow in action
            </h2>
            <p className="text-xl text-gray-600">
              Book a personalized demo and see how restaurants like yours are saving time and improving compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-lg bg-muted">
              <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">15-minute demo</h3>
              <p className="text-muted-foreground text-sm">Quick walkthrough of key features</p>
            </div>
            <div className="p-6 rounded-lg bg-muted">
              <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Compliance focus</h3>
              <p className="text-muted-foreground text-sm">See HACCP automation in action</p>
            </div>
            <div className="p-6 rounded-lg bg-muted">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">ROI calculation</h3>
              <p className="text-muted-foreground text-sm">Estimate your potential savings</p>
            </div>
          </div>
          
          <Button size="lg" className="clerk-cta-primary cta-shimmer px-10 py-4 h-auto">
            Schedule Your Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Export existing CTA components for backward compatibility
export { CallToAction } from "./ctas/CallToAction";
export { DemoRequest } from "./ctas/DemoRequest";
export { TrialSignup } from "./ctas/TrialSignup";
