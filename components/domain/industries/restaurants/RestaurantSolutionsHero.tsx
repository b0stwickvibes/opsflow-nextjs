"use client";

import { ArrowRight, Shield, ChefHat, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * Restaurant Solutions Hero - DIFFERENTIATED from RestaurantHomeHero
 * 
 * Key Differences from Home Page Hero:
 * - Solution-focused messaging (vs. general platform intro)
 * - Specific restaurant operational benefits
 * - Industry statistics and proof points
 * - Solution-specific CTAs
 * - More detailed feature callouts
 */

interface SolutionFeature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  metric: string;
  iconStyle: 'primary' | 'secondary' | 'muted' | 'accent';
}

const solutionFeatures: SolutionFeature[] = [
  { 
    title: "HACCP Compliance", 
    description: "Automated temperature monitoring with real-time alerts for critical control points.", 
    icon: Shield,
    metric: "99.8% compliance rate",
    iconStyle: "primary"
  },
  { 
    title: "Kitchen Efficiency", 
    description: "Streamlined prep, cooking, and service workflows with digital task management.", 
    icon: ChefHat,
    metric: "40% faster coordination",
    iconStyle: "secondary"
  },
  { 
    title: "Staff Management", 
    description: "Role-based task assignment, training tracking, and performance analytics.", 
    icon: Users,
    metric: "32% labor savings",
    iconStyle: "accent"
  },
  { 
    title: "Operational Analytics", 
    description: "Real-time dashboards showing compliance scores, efficiency metrics, and trends.", 
    icon: BarChart3,
    metric: "15hrs/week saved",
    iconStyle: "muted"
  },
];

const industryStats = [
  { label: "Restaurants Using OpsFlow", value: "2,500+" },
  { label: "Average Cost Savings", value: "32%" },
  { label: "Compliance Score Improvement", value: "18 points" },
  { label: "Manager Time Saved", value: "15 hrs/wk" }
];

interface RestaurantSolutionsHeroProps {
  className?: string;
}

export function RestaurantSolutionsHero({ className }: RestaurantSolutionsHeroProps) {
  return (
    <section className={cn(
      "relative overflow-hidden py-20 lg:py-32",
      className
    )}>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Clerk.com-Inspired Badge */}
          <div className="mb-6 inline-block motion-fade-in-up-320">
            <div className="clerk-inspired-badge">
              <Shield className="h-4 w-4" />
              <span>Restaurant Operations Solution</span>
            </div>
          </div>
          
          {/* Solution-Focused Headlines */}
          <h1 className="enterprise-headline mb-6 motion-fade-in-up-320 animation-delay-100">
            Complete Restaurant
            <br />
            <span className="heading-brand-gradient">Operations Platform</span>
          </h1>
          
          <p className="enterprise-body mb-8 max-w-3xl mx-auto motion-fade-in-up-320 animation-delay-200">
            From HACCP compliance to staff management, streamline every aspect of your restaurant operations. 
            Built specifically for full-service, fast-casual, and fine dining establishments.
          </p>
          
          {/* Solution-Specific CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 motion-fade-in-up-320 animation-delay-300">
            <Link href="/product/demo?industry=restaurants">
              <Button size="lg" className="clerk-cta-primary cta-shimmer hover-scale-103 text-base px-8 py-3 h-auto cta-equal">
                Start free demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact?solution=restaurants">
              <Button variant="outline" size="lg" className="hover-scale-103 text-base px-8 py-3 h-auto cta-equal">
                Talk to Restaurant Expert
              </Button>
            </Link>
          </div>
          
          {/* Industry Statistics - Different from home page */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 motion-fade-in-up-320 animation-delay-400">
            {industryStats.map((stat, index) => (
              <Card key={index} className="enterprise-metric-card tile-hover feature-tile--static p-6 text-center">
                <div className="metric-display-medium text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Solution Features Grid - Clerk-inspired individual card styling */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8 motion-fade-in-up-320">
            Everything You Need for Restaurant Operations
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionFeatures.map((feature, index) => (
              <div key={index} className="clerk-interactive-tile feature-tile p-6 text-center motion-fade-in-up-320" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="mx-auto mb-4 enterprise-icon-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                <div className="mt-3 text-sm font-medium text-primary">{feature.metric}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Social Proof Banner - Restaurant-specific */}
        <div className="mt-16 text-center motion-fade-in-up-320 animation-delay-200">
          <p className="text-muted-foreground mb-4">
            Trusted by restaurants from single locations to 50+ chain operations
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-sm font-medium">Pizza Chains</div>
            <div className="w-px h-4 bg-border" />
            <div className="text-sm font-medium">Fine Dining</div>
            <div className="w-px h-4 bg-border" />
            <div className="text-sm font-medium">Fast Casual</div>
            <div className="w-px h-4 bg-border" />
            <div className="text-sm font-medium">Ghost Kitchens</div>
          </div>
        </div>
      </div>
    </section>
  );
}