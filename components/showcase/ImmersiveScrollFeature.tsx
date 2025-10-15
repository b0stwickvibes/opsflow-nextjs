"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * ImmersiveScrollFeature - Scroll-Activated Cinematic Feature Showcase
 *
 * Features:
 * - Sticky scroll container with layered panels
 * - Parallax depth effects with multiple layers
 * - Scroll-progress indicator with morphing shapes
 * - Cinematic fade transitions between states
 * - 3D perspective transforms
 * - Animated data visualizations
 *
 * Design inspiration: Apple product pages, Stripe, Awwwards winners
 * Visual signature: Depth, cinematic timing, immersive storytelling
 */

export interface ImmersiveFeaturePanel {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  visual: {
    type: 'dashboard' | 'chart' | 'network' | 'heatmap';
    color: string;
  };
  stat?: {
    value: string;
    label: string;
  };
}

export interface ImmersiveScrollFeatureProps {
  headline: string;
  subheadline: string;
  badge?: string;
  panels: ImmersiveFeaturePanel[];
}

export function ImmersiveScrollFeature({
  headline,
  subheadline,
  badge,
  panels
}: ImmersiveScrollFeatureProps) {
  const [activePanel, setActivePanel] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const scrollStart = Math.max(0, -rect.top);
      const scrollRange = rect.height - viewportHeight;
      const progress = Math.min(1, Math.max(0, scrollStart / scrollRange));

      setScrollProgress(progress);

      // Update active panel based on scroll position
      const panelIndex = Math.floor(progress * panels.length);
      setActivePanel(Math.min(panelIndex, panels.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [panels.length]);

  const renderDashboardVisual = (color: string) => (
    <svg className="w-full h-full" viewBox="0 0 400 300">
      <defs>
        <linearGradient id={`dash-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Dashboard mockup */}
      <rect x="20" y="20" width="360" height="260" rx="12" fill={`url(#dash-${color})`} />
      <rect x="40" y="40" width="150" height="80" rx="8" fill={color} opacity="0.2" />
      <rect x="210" y="40" width="150" height="80" rx="8" fill={color} opacity="0.3" />
      <rect x="40" y="140" width="320" height="120" rx="8" fill={color} opacity="0.15" />

      {/* Animated elements */}
      {[0, 1, 2, 3].map((i) => (
        <circle
          key={i}
          cx={60 + i * 80}
          cy={190}
          r="4"
          fill={color}
          className="animate-pulse"
          style={{ animationDelay: `${i * 200}ms` }}
        />
      ))}
    </svg>
  );

  const renderChartVisual = (color: string) => (
    <svg className="w-full h-full" viewBox="0 0 400 300">
      <defs>
        <linearGradient id={`chart-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Animated bar chart */}
      {[40, 65, 45, 80, 55, 75, 90].map((height, i) => (
        <rect
          key={i}
          x={40 + i * 50}
          y={250 - height * 2}
          width="35"
          height={height * 2}
          rx="4"
          fill={`url(#chart-${color})`}
          className="animate-pulse"
          style={{
            animationDelay: `${i * 150}ms`,
            animationDuration: '2s'
          }}
        />
      ))}

      {/* Trend line */}
      <path
        d={`M 40 ${250 - 80} ${[40, 65, 45, 80, 55, 75, 90].map((h, i) => `L ${58 + i * 50} ${250 - h * 2}`).join(' ')}`}
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );

  const renderNetworkVisual = (color: string) => (
    <svg className="w-full h-full" viewBox="0 0 400 300">
      {/* Network nodes */}
      {[
        { x: 200, y: 150, r: 30 },
        { x: 100, y: 80, r: 20 },
        { x: 300, y: 80, r: 20 },
        { x: 80, y: 220, r: 15 },
        { x: 200, y: 250, r: 15 },
        { x: 320, y: 220, r: 15 }
      ].map((node, i) => (
        <g key={i}>
          {/* Connection lines */}
          {i > 0 && (
            <line
              x1={node.x}
              y1={node.y}
              x2={200}
              y2={150}
              stroke={color}
              strokeWidth="2"
              opacity="0.3"
              className="animate-pulse"
              style={{ animationDelay: `${i * 200}ms`, animationDuration: '3s' }}
            />
          )}

          {/* Node circles */}
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={color}
            opacity="0.2"
            className="animate-pulse"
            style={{ animationDelay: `${i * 200}ms`, animationDuration: '2s' }}
          />
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r / 2}
            fill={color}
            opacity="0.6"
          />
        </g>
      ))}
    </svg>
  );

  const renderHeatmapVisual = (color: string) => (
    <svg className="w-full h-full" viewBox="0 0 400 300">
      {/* Heatmap grid */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => {
          const opacity = Math.random();
          return (
            <rect
              key={`${row}-${col}`}
              x={40 + col * 32}
              y={40 + row * 30}
              width="28"
              height="26"
              rx="4"
              fill={color}
              opacity={opacity * 0.6}
              className="animate-pulse"
              style={{
                animationDelay: `${(row * 10 + col) * 50}ms`,
                animationDuration: '3s'
              }}
            />
          );
        })
      )}
    </svg>
  );

  const renderVisual = (visual: ImmersiveFeaturePanel['visual']) => {
    switch (visual.type) {
      case 'dashboard':
        return renderDashboardVisual(visual.color);
      case 'chart':
        return renderChartVisual(visual.color);
      case 'network':
        return renderNetworkVisual(visual.color);
      case 'heatmap':
        return renderHeatmapVisual(visual.color);
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-[300vh] bg-gradient-to-b from-background via-background to-primary/5">

      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Background layers with parallax */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
          style={{
            transform: `translateY(${scrollProgress * 50}px)`
          }}
        />

        <div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollProgress * 100}px, ${scrollProgress * -50}px) scale(${1 + scrollProgress * 0.5})`
          }}
        />

        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollProgress * -100}px, ${scrollProgress * 50}px) scale(${1 + scrollProgress * 0.5})`
          }}
        />

        {/* Main content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left - Text content */}
              <div className="space-y-8 z-10">

                {/* Header (fades out on scroll) */}
                <div
                  className="space-y-6 transition-all duration-500"
                  style={{
                    opacity: 1 - scrollProgress * 2,
                    transform: `translateY(${scrollProgress * -50}px)`
                  }}
                >
                  {badge && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">{badge}</span>
                    </div>
                  )}

                  <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
                    <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {headline}
                    </span>
                  </h2>

                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {subheadline}
                  </p>
                </div>

                {/* Active panel content */}
                {panels.map((panel, index) => {
                  const IconComponent = panel.icon;
                  const isActive = index === activePanel;
                  const isPast = index < activePanel;

                  return (
                    <div
                      key={index}
                      className="absolute inset-0 transition-all duration-700"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? 'translateX(0)'
                          : isPast
                          ? 'translateX(-100px)'
                          : 'translateX(100px)',
                        pointerEvents: isActive ? 'auto' : 'none'
                      }}
                    >
                      <div className="space-y-8 pt-32">

                        {/* Icon */}
                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-2xl shadow-primary/50">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="text-4xl font-bold text-foreground">
                          {panel.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                          {panel.description}
                        </p>

                        {/* Benefits */}
                        <div className="space-y-3">
                          {panel.benefits.map((benefit, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 transition-all duration-500"
                              style={{
                                transitionDelay: `${i * 100}ms`,
                                opacity: isActive ? 1 : 0,
                                transform: isActive ? 'translateX(0)' : 'translateX(-20px)'
                              }}
                            >
                              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-foreground font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        {/* Stat */}
                        {panel.stat && (
                          <div className="inline-flex items-baseline gap-2 px-6 py-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
                            <span className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                              {panel.stat.value}
                            </span>
                            <span className="text-sm text-muted-foreground font-medium">
                              {panel.stat.label}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right - Visual showcase */}
              <div className="relative h-[600px] hidden lg:block">

                {/* Glowing background */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl blur-3xl transition-all duration-1000"
                  style={{
                    transform: `scale(${0.8 + scrollProgress * 0.4}) rotate(${scrollProgress * 45}deg)`
                  }}
                />

                {/* Visual panels */}
                {panels.map((panel, index) => {
                  const isActive = index === activePanel;

                  return (
                    <div
                      key={index}
                      className="absolute inset-0 transition-all duration-700"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? 'perspective(1000px) rotateY(0deg) scale(1)'
                          : index < activePanel
                          ? 'perspective(1000px) rotateY(-20deg) scale(0.95)'
                          : 'perspective(1000px) rotateY(20deg) scale(0.95)',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <div className="relative h-full bg-background/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 shadow-2xl">
                        {renderVisual(panel.visual)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-50">
          <div className="flex gap-2">
            {panels.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index <= activePanel ? 'bg-primary w-8' : 'bg-border w-2'
                }`}
              />
            ))}
          </div>
          <div className="text-xs text-muted-foreground font-medium">
            {activePanel + 1} / {panels.length}
          </div>
        </div>
      </div>
    </div>
  );
}
