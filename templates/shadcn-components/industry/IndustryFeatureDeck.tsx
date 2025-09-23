import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

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

export function IndustryFeatureDeck({ 
  title, 
  description, 
  badge, 
  features, 
  layout = "grid",
  ctaSection 
}: IndustryFeatureDeckProps) {
  return (
    <section className="section-marketing bg-surface-subtle-secondary/20">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          {badge && (
            <Badge variant="outline" className="mb-8 clerk-inspired-badge">
              {badge}
            </Badge>
          )}
          <h2 className="text-display-lg mb-8">
            {title}
          </h2>
          <p className="enterprise-body max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid gap-12 ${
          layout === "grid" 
            ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" 
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className="enterprise-card p-10 hover-scale-103 group relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 space-y-8">
                  {/* Header */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        isEven ? 'icon-container-primary' : 'icon-container-secondary'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      {feature.badge && (
                        <Badge variant="outline" className="text-xs">
                          {feature.badge}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-display-sm dashboard-text-primary group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="enterprise-body">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-4">
                    {feature.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-3 flex-shrink-0" />
                        <span className="text-sm dashboard-text-muted">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  {feature.link && (
                    <div className="pt-6 border-t border-border/50">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="group/link p-0 h-auto font-medium text-primary hover:text-primary/80"
                        onClick={feature.link.action}
                      >
                        {feature.link.text}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        {ctaSection && (
          <div className="mt-32">
            <div className="enterprise-card p-16 text-center max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-display-md">
                    {ctaSection.title}
                  </h3>
                  <p className="enterprise-body max-w-2xl mx-auto">
                    {ctaSection.description}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="clerk-cta-primary cta-equal"
                    onClick={ctaSection.primaryCTA.action}
                  >
                    {ctaSection.primaryCTA.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  {ctaSection.secondaryCTA && (
                    <Button 
                      size="lg"
                      variant="outline"
                      className="cta-equal"
                      onClick={ctaSection.secondaryCTA.action}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {ctaSection.secondaryCTA.text}
                    </Button>
                  )}
                </div>
                
                {/* Trust indicators */}
                <div className="flex justify-center items-center gap-8 pt-6 border-t border-border/50 text-sm dashboard-text-muted">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    99.9% uptime guarantee
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
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
}