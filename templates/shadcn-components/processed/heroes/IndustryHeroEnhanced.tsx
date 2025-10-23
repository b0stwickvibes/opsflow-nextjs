"use client";

import React, { useState, useEffect } from "react";
import { Wine, BarChart3, ArrowRight, Play, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "../../../../components/ui/button";

interface IndustryHeroEnhancedProps {
  industry: string;
  headline: string;
  subheadline: string;
  description: string;
  primaryCTA: { text: string; action: () => void; };
  secondaryCTA: { text: string; action: () => void; };
  badge: { text: string; variant?: "default" | "secondary" | "outline"; };
  stats: { value: string; label: string; }[];
  backgroundImage?: string;
  className?: string;
}

/**
 * IndustryHeroEnhanced - Advanced hero with visual depth and animations
 *
 * ENHANCEMENTS:
 * - Mouse-tracking animated gradient mesh background
 * - 3D layered floating cards with parallax
 * - Diagonal accent elements
 * - Animated SVG illustrations
 * - Micro-interactions throughout
 * - Improved depth with shadows and transforms
 *
 * Maintains BARS-DEMO-DESIGN-STANDARDS compliance
 */
export function IndustryHeroEnhanced({
  industry,
  headline,
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  stats,
  backgroundImage,
  className = ""
}: IndustryHeroEnhancedProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  return (
    <section
      className={`relative section-marketing overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background">
        <div
          className="absolute inset-0 opacity-20 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, oklch(var(--primary) / 0.15), transparent 50%)`
          }}
        />
      </div>

      {/* Diagonal accent element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 50 0 L 100 0 L 100 100 L 0 100 Z"
            fill="url(#diagonalGradient)"
          />
          <defs>
            <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="oklch(var(--secondary))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, oklch(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column - Content */}
          <div className="space-y-12 relative z-10">

            {/* Badge with glow */}
            <div
              className={`inline-flex transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative clerk-inspired-badge">
                  <Sparkles className="w-3.5 h-3.5 mr-2 inline animate-pulse" />
                  {badge.text}
                </div>
              </div>
            </div>

            {/* Headlines */}
            <div
              className={`space-y-8 transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
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

            {/* CTAs with enhanced effects */}
            <div
              className={`flex flex-col sm:flex-row gap-6 transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Button
                size="lg"
                className="relative group clerk-cta-primary cta-shimmer cta-equal overflow-hidden"
                onClick={primaryCTA.action}
              >
                <span className="relative z-10 flex items-center">
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="cta-equal group hover-scale-103 hover:bg-primary/5 hover:border-primary/50 transition-all"
                onClick={secondaryCTA.action}
              >
                <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                {secondaryCTA.text}
              </Button>
            </div>

            {/* Stats Row with icons */}
            <div
              className={`grid grid-cols-3 gap-8 pt-12 border-t border-border/50 transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="group text-center lg:text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="metric-display-medium text-gradient">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm dashboard-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced Visual Elements with 3D depth */}
          <div
            className={`relative h-[600px] transition-all duration-700 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Glow effect */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: '4s' }}
            />

            {/* Main visual card with 3D transform */}
            <div
              className="absolute top-20 left-0 right-12 transition-transform duration-300 hover:scale-105"
              style={{
                transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 10}deg) rotateX(${(mousePosition.y - 0.5) * -10}deg)`
              }}
            >
              <div className="enterprise-card p-8 lg:p-12 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/50">
                      <Wine className="w-8 h-8 text-white" />
                    </div>
                    <div className="clerk-inspired-badge">
                      <span className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Live System
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-display-sm dashboard-text-primary">
                      {industry} Operations
                    </h3>

                    {/* Animated progress bar */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm dashboard-text-muted">Task Completion</span>
                        <span className="font-semibold">94%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isLoaded ? '94%' : '0%',
                            boxShadow: '0 0 10px oklch(var(--primary) / 0.5)'
                          }}
                        />
                      </div>
                    </div>

                    {/* Metric cards with hover effects */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="group dashboard-metric-cyan p-4 rounded-lg text-center hover:scale-105 transition-transform cursor-pointer">
                        <div className="text-lg font-bold group-hover:scale-110 transition-transform">18</div>
                        <div className="text-xs dashboard-text-muted">Active Tasks</div>
                      </div>
                      <div className="group dashboard-metric-green p-4 rounded-lg text-center hover:scale-105 transition-transform cursor-pointer">
                        <div className="text-lg font-bold group-hover:scale-110 transition-transform">99.2%</div>
                        <div className="text-xs dashboard-text-muted">Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements with parallax */}
            <div
              className="absolute top-12 right-0 transition-transform duration-300 hover:scale-110"
              style={{
                transform: `translate(${(mousePosition.x - 0.5) * 30}px, ${(mousePosition.y - 0.5) * 30}px)`
              }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-xl shadow-secondary/30 hover:rotate-12 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Floating metric badge with parallax */}
            <div
              className="absolute bottom-24 left-4 transition-transform duration-300"
              style={{
                transform: `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)`
              }}
            >
              <div className="enterprise-metric-card p-4 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Real-time monitoring</span>
                </div>
              </div>
            </div>

            {/* Decorative animated circles */}
            <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl animate-pulse"
              style={{ animationDuration: '6s', animationDelay: '1s' }}
            />
            <div className="absolute top-32 left-8 w-24 h-24 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-2xl animate-pulse"
              style={{ animationDuration: '5s' }}
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

export default IndustryHeroEnhanced;
export type { IndustryHeroEnhancedProps };
