import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

interface ActionButton {
  text: string;
  href: string;
  onClick?: () => void;
}

interface ProductHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  primaryAction?: ActionButton;
  secondaryAction?: ActionButton;
  className?: string;
}

export function ProductHero({
  title,
  subtitle,
  badge,
  primaryAction,
  secondaryAction,
  className = ""
}: ProductHeroProps) {
  return (
    <section className={`relative py-20 overflow-hidden ${className}`}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-50/50 dark:from-primary/10 dark:to-blue-950/20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-60 animate-pulse-subtle" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-100/40 dark:bg-blue-900/20 blur-3xl opacity-50 animate-pulse-subtle" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {badge && (
            <Badge variant="outline" className="mb-6 animate-fade-in">
              {badge}
            </Badge>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-slide-down">
            {title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            {primaryAction && (
              <Button 
                size="lg" 
                className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={primaryAction.onClick}
                asChild
              >
                <Link href={primaryAction.href}>
                  <Play className="h-5 w-5" />
                  {primaryAction.text}
                </Link>
              </Button>
            )}
            
            {secondaryAction && (
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2"
                onClick={secondaryAction.onClick}
                asChild
              >
                <Link href={secondaryAction.href}>
                  <ArrowRight className="h-5 w-5" />
                  {secondaryAction.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}