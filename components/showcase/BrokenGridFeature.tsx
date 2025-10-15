"use client";

import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle, ArrowUpRight, Sparkles, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * BrokenGridFeature - Asymmetric Bento-Style Feature Showcase
 *
 * Features:
 * - Broken grid layout (asymmetric, overlapping elements)
 * - Isometric 3D card transforms on hover
 * - Animated SVG illustrations
 * - Scroll-triggered reveals
 * - Gradient borders with rotation
 * - Micro-interactions on every element
 *
 * Design inspiration: Bento grids, Apple, Figma
 * Visual signature: Asymmetry, depth, playful interactions
 */

export interface BrokenGridFeature {
  title: string;
  description: string;
  icon: LucideIcon;
  visual?: 'chart' | 'pulse' | 'grid' | 'wave';
  accent?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
}

export interface BrokenGridFeatureProps {
  badge?: string;
  title: string;
  subtitle: string;
  features: BrokenGridFeature[];
}

export function BrokenGridFeature({
  badge,
  title,
  subtitle,
  features
}: BrokenGridFeatureProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAccentColor = (accent?: string) => {
    switch (accent) {
      case 'secondary': return 'from-secondary to-secondary/80';
      case 'success': return 'from-green-500 to-emerald-500';
      case 'warning': return 'from-amber-500 to-orange-500';
      default: return 'from-primary to-primary/80';
    }
  };

  const getGridPosition = (index: number, size?: string) => {
    // Create intentionally broken grid with overlaps
    const positions = [
      { row: 'span 2', col: 'span 2' }, // Large top-left
      { row: 'span 1', col: 'span 1' }, // Small top-right
      { row: 'span 1', col: 'span 2' }, // Wide middle
      { row: 'span 2', col: 'span 1' }, // Tall right
      { row: 'span 1', col: 'span 1' }, // Small bottom
      { row: 'span 1', col: 'span 2' }, // Wide bottom
    ];

    return positions[index % positions.length];
  };

  const renderVisual = (visual?: string) => {
    switch (visual) {
      case 'chart':
        return (
          <svg className="w-full h-32 opacity-20" viewBox="0 0 100 60">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="oklch(var(--primary))" stopOpacity="0.8" />
                <stop offset="100%" stopColor="oklch(var(--primary))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {[20, 35, 28, 45, 38, 52].map((height, i) => (
              <rect
                key={i}
                x={i * 16 + 2}
                y={60 - height}
                width="12"
                height={height}
                fill="url(#chartGradient)"
                rx="2"
                className="animate-pulse"
                style={{ animationDelay: `${i * 100}ms`, animationDuration: '2s' }}
              />
            ))}
          </svg>
        );
      case 'pulse':
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute w-20 h-20 bg-primary/10 rounded-full animate-ping"
                style={{
                  animationDelay: `${i * 600}ms`,
                  animationDuration: '2s'
                }}
              />
            ))}
            <div className="relative w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full" />
          </div>
        );
      case 'grid':
        return (
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 p-4 opacity-10">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className="bg-primary rounded animate-pulse"
                style={{
                  animationDelay: `${i * 50}ms`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        );
      case 'wave':
        return (
          <svg className="absolute bottom-0 w-full h-24 opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z"
              fill="oklch(var(--primary))"
              className="animate-pulse"
              style={{ animationDuration: '3s' }}
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={sectionRef} className="py-24 relative overflow-hidden">

      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          {badge && (
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">{badge}</span>
            </div>
          )}

          <div
            className={`space-y-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Broken Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isHovered = hoveredIndex === index;
            const delay = index * 100;
            const gridPos = getGridPosition(index, feature.size);

            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${delay}ms`,
                  gridRow: gridPos.row,
                  gridColumn: gridPos.col
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Rotating gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                  style={{
                    backgroundSize: '200% 200%',
                    animation: isHovered ? 'gradient 3s ease infinite' : 'none'
                  }}
                />

                {/* Card */}
                <div
                  className="relative h-full bg-gradient-to-br from-background to-background/95 backdrop-blur-xl border border-border/50 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl"
                  style={{
                    transform: isHovered
                      ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(10px)'
                      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
                  }}
                >
                  {/* Background visual */}
                  {renderVisual(feature.visual)}

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">

                    {/* Icon with gradient background */}
                    <div className="mb-6">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${getAccentColor(feature.accent)} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover reveal button */}
                    <div
                      className={`flex items-center gap-2 text-primary font-semibold mt-6 transition-all duration-300 ${
                        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                    >
                      <span>Explore feature</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-primary animate-pulse" />
                  </div>

                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
            <span>See all features</span>
            <Zap className="w-4 h-4 transition-transform group-hover:rotate-12" />
          </button>
        </div>
      </div>

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
