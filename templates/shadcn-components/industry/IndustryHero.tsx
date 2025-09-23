import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight, Play } from "lucide-react";
import { unsplash_tool } from "../../utils/unsplash";

interface IndustryHeroProps {
  industry: string;
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
  badge: {
    text: string;
    variant?: "default" | "secondary" | "outline";
  };
  stats: {
    value: string;
    label: string;
  }[];
  backgroundImage?: string;
}

export function IndustryHero({
  industry,
  headline,
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  stats,
  backgroundImage
}: IndustryHeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
            backgroundColor: !backgroundImage ? 'var(--background)' : undefined
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75" />
        
        {/* Ambient background effects */}
        <div className="hero-ambient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[80vh]">
            
            {/* Left Column - Content */}
            <div className="space-y-12">
              {/* Badge */}
              <div className="inline-flex">
                <Badge 
                  variant={badge.variant || "default"}
                  className="clerk-inspired-badge px-4 py-2 text-sm font-medium"
                >
                  {badge.text}
                </Badge>
              </div>

              {/* Headlines */}
              <div className="space-y-8">
                <h1 className="text-display-2xl">
                  {headline}
                  <span className="block text-gradient mt-4">
                    {subheadline}
                  </span>
                </h1>
                
                <p className="enterprise-body max-w-2xl">
                  {description}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg"
                  className="clerk-cta-primary cta-equal group"
                  onClick={primaryCTA.action}
                >
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="cta-equal group"
                  onClick={secondaryCTA.action}
                >
                  <Play className="mr-2 h-4 w-4" />
                  {secondaryCTA.text}
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-12 pt-12 border-t border-border/50">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
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
            <div className="lg:pl-8">
              <div className="relative">
                {/* Main visual card */}
                <div className="enterprise-card p-8 lg:p-12 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 icon-container-primary rounded-xl flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded" />
                      </div>
                      <Badge className="badge-subtle-active">
                        Live System
                      </Badge>
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
                  <div className="w-8 h-8 bg-white rounded-lg" />
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
      </div>
    </section>
  );
}