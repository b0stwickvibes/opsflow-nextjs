"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * DiagonalSplitHero - Ultra-Modern Diagonal Split Hero
 *
 * Features:
 * - Diagonal split layout with angled divider
 * - Animated gradient mesh background
 * - Floating metric cards with parallax
 * - Interactive 3D-transform effects
 * - Pulsing glow accents
 * - Staggered content reveals
 *
 * Design inspiration: Linear, Vercel, Apple
 * Visual signature: Bold diagonals, depth, premium animations
 */

export interface DiagonalSplitHeroProps {
  badge?: string;
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
  metrics: Array<{
    value: string;
    label: string;
    change: string;
  }>;
}

export function DiagonalSplitHero({
  badge,
  headline,
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  metrics
}: DiagonalSplitHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  return (
    <div
      className="relative min-h-[90vh] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(139, 92, 246, 0.15), transparent 50%)`
          }}
        />
      </div>

      {/* Diagonal split overlay */}
      <div className="absolute inset-0">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(var(--primary))" stopOpacity="0.05" />
              <stop offset="100%" stopColor="oklch(var(--secondary))" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path
            d="M 0 0 L 100 0 L 100 85 L 0 100 Z"
            fill="url(#diagonalGradient)"
            className="animate-pulse"
            style={{ animationDuration: '8s' }}
          />
        </svg>
      </div>

      {/* Grid pattern overlay */}
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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Content */}
          <div className="space-y-8">

            {/* Badge */}
            {badge && (
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm transition-all duration-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">{badge}</span>
              </div>
            )}

            {/* Headline with gradient */}
            <div
              className={`space-y-4 transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="block bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  {headline}
                </span>
              </h1>

              <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                {subheadline}
              </h2>
            </div>

            {/* Description */}
            <p
              className={`text-xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {description}
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Button
                size="lg"
                onClick={primaryCTA.action}
                className="relative group bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {primaryCTA.text}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={secondaryCTA.action}
                className="group hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
              >
                <Play className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                {secondaryCTA.text}
              </Button>
            </div>

            {/* Trust indicators */}
            <div
              className={`flex flex-wrap items-center gap-6 pt-8 border-t border-border/50 transition-all duration-700 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                99.9% Uptime
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-primary" />
                Lightning Setup
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                23% Avg Savings
              </div>
            </div>
          </div>

          {/* Right Column - Floating Metric Cards */}
          <div className="relative h-[600px] hidden lg:block">

            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: '4s' }}
            />

            {/* Floating cards with parallax */}
            {metrics.map((metric, index) => {
              const delay = index * 150;
              const offsetX = (mousePosition.x - 0.5) * (20 + index * 10);
              const offsetY = (mousePosition.y - 0.5) * (20 + index * 10);

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 hover:scale-105 hover:z-50`}
                  style={{
                    top: `${15 + index * 25}%`,
                    left: `${10 + (index % 2) * 40}%`,
                    transform: `translate(${offsetX}px, ${offsetY}px)`,
                    transitionDelay: `${delay}ms`,
                    opacity: isLoaded ? 1 : 0
                  }}
                >
                  <div className="relative group">
                    {/* Card glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Card content */}
                    <div className="relative bg-background/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-2xl min-w-[220px]">
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          backgroundSize: '200% 200%',
                          animation: 'gradient 3s ease infinite'
                        }}
                      />

                      <div className="relative space-y-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                            {metric.value}
                          </span>
                          <span className="text-xs text-green-500 font-semibold flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {metric.change}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">
                          {metric.label}
                        </p>
                      </div>

                      {/* Sparkle decoration */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Decorative elements */}
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl animate-pulse"
              style={{ animationDuration: '6s', animationDelay: '1s' }}
            />
            <div className="absolute top-10 right-20 w-24 h-24 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-2xl animate-pulse"
              style={{ animationDuration: '5s' }}
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
