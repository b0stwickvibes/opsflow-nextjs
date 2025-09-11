"use client";

import { ArrowRight, Shield, Thermometer, ClipboardList, BarChart3, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RestaurantFeature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface RestaurantHomeHeroProps {
  onNavigate?: (page: string) => void;
  className?: string;
}

const restaurantFeatures: RestaurantFeature[] = [
  { title: "HACCP Compliance", description: "Automated food safety monitoring with FDA-approved systems.", icon: Shield },
  { title: "Temperature Monitoring", description: "Real-time temperature tracking across all equipment.", icon: Thermometer },
  { title: "Digital Checklists", description: "Streamlined daily operations with smart task management.", icon: ClipboardList },
  { title: "Analytics Dashboard", description: "Real-time insights for better operational decisions.", icon: BarChart3 },
];

function DashedLine({ orientation = "horizontal", className }: { orientation?: "horizontal" | "vertical"; className?: string }) {
  const isHorizontal = orientation === "horizontal";
  return (
    <div className={cn("text-muted-foreground relative", isHorizontal ? "h-px w-full" : "h-full w-px", className)}>
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ]
        )}
      />
    </div>
  );
}

export function RestaurantHomeHero({ onNavigate, className }: RestaurantHomeHeroProps) {
  const handleGetStarted = () => onNavigate?.("pricing");
  const handleDocumentation = () => onNavigate?.("docs");

  return (
    <section className={cn("enterprise-hero-section hero-ambient section-grid-overlay section-vignette-bottom energy-balanced relative mx-2.5 mt-2.5 rounded-b-[36px] rounded-t-2xl lg:mx-4", className)}>
      <div className="py-20 lg:py-32">
        <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:gap-14 lg:flex-row">
            {/* Left side - Main content */}
            <div className="flex-1 space-y-8">
              {/* HACCP Badge */}
              <div className="inline-flex items-center gap-2 rounded-lg bg-background border border-border px-4 py-2 text-sm font-medium shadow-sm">
                <Shield className="size-4 text-green-600" />
                <span className="text-foreground">HACCP Compliant System</span>
                <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                  FDA Approved
                </Badge>
              </div>

              <div className="space-y-6 motion-fade-in-up-320">
                <h1 className="text-display-2xl tracking-tight">Restaurant operations made simple</h1>
                <p className="text-muted-foreground text-xl lg:text-2xl max-w-2xl">
                  OpsFlow AI streamlines food safety, compliance, and staff management for restaurants, bars, and hospitality businesses.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 motion-fade-in-up-320 animation-delay-100">
                <Button size="lg" onClick={handleGetStarted} className="clerk-cta-primary cta-shimmer hover-scale-103 px-8 py-3">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" onClick={handleDocumentation} className="hover-scale-103 px-8 py-3 border-2">
                  <span className="flex items-center gap-2 whitespace-pre-wrap">Documentation <ArrowRight className="h-4 w-4" /></span>
                </Button>
              </div>
            </div>

            {/* Right side - Features */}
            <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:ps-10">
              <DashedLine orientation="vertical" className="absolute left-0 top-0 max-lg:hidden" />
              <DashedLine orientation="horizontal" className="absolute top-0 lg:hidden" />
              {restaurantFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-2.5 lg:gap-5 group">
                    <div className="mt-1 shrink-0">
                      <div className="enterprise-icon-primary w-10 h-10 transition-colors group-hover:opacity-80">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dashboard Preview placeholder */}
          <div className="mt-12 md:mt-20 lg:mt-24">
            <div className="relative">
              <div className="w-full rounded-2xl border border-border shadow-2xl sm:h-[500px] lg:h-[600px] bg-muted/40 grid place-items-center">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <ChefHat className="h-6 w-6" />
                  <span>Restaurant Dashboard Preview</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
              <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-border shadow-lg">
                <div className="flex items-center gap-3">
                  <ChefHat className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">99.5%</div>
                    <div className="text-sm text-muted-foreground">Compliance Rate</div>
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
