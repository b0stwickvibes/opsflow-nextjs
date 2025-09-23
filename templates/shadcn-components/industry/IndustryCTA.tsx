import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight, Zap, Shield, Clock, CheckCircle } from "lucide-react";

interface TrustIndicator {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface IndustryCTAProps {
  headline: string;
  subheadline?: string;
  description: string;
  primaryCTA: {
    text: string;
    action: () => void;
  };
  secondaryCTA?: {
    text: string;
    action: () => void;
  };
  trustIndicators: TrustIndicator[];
  urgencyBadge?: string;
  backgroundPattern?: "gradient" | "minimal" | "ambient";
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export function IndustryCTA({ 
  headline, 
  subheadline, 
  description, 
  primaryCTA, 
  secondaryCTA,
  trustIndicators,
  urgencyBadge,
  backgroundPattern = "ambient",
  testimonial
}: IndustryCTAProps) {
  const getBackgroundClass = () => {
    switch (backgroundPattern) {
      case "gradient":
        return "bg-gradient-to-br from-primary/10 via-background to-secondary/10";
      case "minimal":
        return "bg-surface-subtle-primary/30";
      case "ambient":
      default:
        return "hero-ambient";
    }
  };

  return (
    <section className={`section-padding-xl relative overflow-hidden ${getBackgroundClass()}`}>
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Urgency badge */}
          {urgencyBadge && (
            <div className="mb-8">
              <Badge className="clerk-inspired-badge px-6 py-3 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                {urgencyBadge}
              </Badge>
            </div>
          )}

          {/* Headlines */}
          <div className="space-y-6 mb-8">
            <h2 className="text-display-xl">
              {headline}
              {subheadline && (
                <span className="block text-gradient mt-3">
                  {subheadline}
                </span>
              )}
            </h2>
            
            <p className="enterprise-body max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="clerk-cta-primary cta-equal group text-lg px-8 py-4"
              onClick={primaryCTA.action}
            >
              {primaryCTA.text}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            {secondaryCTA && (
              <Button 
                size="lg"
                variant="outline"
                className="cta-equal text-lg px-8 py-4"
                onClick={secondaryCTA.action}
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {trustIndicators.map((indicator, index) => {
              const IconComponent = indicator.icon;
              return (
                <div key={index} className="flex items-center justify-center gap-3 text-sm dashboard-text-muted">
                  <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-center">{indicator.text}</span>
                </div>
              );
            })}
          </div>

          {/* Testimonial */}
          {testimonial && (
            <div className="enterprise-card p-8 lg:p-12 max-w-3xl mx-auto mb-12">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl text-primary/20 mb-4">"</div>
                  <blockquote className="enterprise-body text-lg italic">
                    {testimonial.quote}
                  </blockquote>
                </div>
                
                <div className="flex items-center justify-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold dashboard-text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-sm dashboard-text-muted">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Final trust line */}
          <div className="text-center">
            <p className="text-sm dashboard-text-muted">
              Join 1,000+ restaurants already using OpsFlow AI • HACCP compliant • 30-day free trial
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 icon-container-primary rounded-3xl opacity-10 rotate-12 hidden lg:block" />
        <div className="absolute bottom-20 right-10 w-16 h-16 icon-container-secondary rounded-2xl opacity-10 -rotate-12 hidden lg:block" />
        <div className="absolute top-1/2 right-20 w-12 h-12 icon-container-accent rounded-xl opacity-10 rotate-45 hidden xl:block" />
        
        {/* Ambient particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
          <div className="absolute top-3/4 left-3/4 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </section>
  );
}