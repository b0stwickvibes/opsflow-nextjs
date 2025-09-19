"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Copy, Check, Star, Zap, Shield, Clock, TrendingUp, Activity, BarChart3 } from 'lucide-react';
import Link from 'next/link';

interface VisualTokenProps {
  className: string;
  description: string;
  category: 'color' | 'badge' | 'button' | 'typography' | 'icon' | 'surface';
  children?: React.ReactNode;
}

const VisualToken: React.FC<VisualTokenProps> = ({ className, description, category, children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(className);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const renderVisual = () => {
    switch (category) {
      case 'color':
        return <div className={`w-16 h-16 rounded-lg border ${className}`} />;
      case 'badge':
        return <span className={className}>{children || 'Sample Badge'}</span>;
      case 'button':
        return <button className={`px-4 py-2 rounded-md ${className}`}>{children || 'Button'}</button>;
      case 'typography':
        return <div className={className}>{children || 'Sample Text'}</div>;
      case 'icon':
        return <div className={`p-3 rounded-lg ${className}`}><Zap className="h-5 w-5" /></div>;
      case 'surface':
        return (
          <div className={`w-full h-20 rounded-lg p-4 flex items-center justify-center ${className}`}>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4" />
              <span>Surface</span>
            </div>
          </div>
        );
      default:
        return <div className={`p-2 rounded ${className}`}>{children || 'Preview'}</div>;
    }
  };

  return (
    <div 
      className="group flex flex-col items-center p-4 rounded-lg border hover:bg-muted/50 transition-all cursor-pointer hover:shadow-sm"
      onClick={handleCopy}
    >
      <div className="mb-3 flex items-center justify-center">
        {renderVisual()}
      </div>
      <div className="text-center">
        <code className="text-xs font-mono bg-muted px-2 py-1 rounded block mb-1">{className}</code>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
      </div>
    </div>
  );
};

export default function TokensPage() {
  return (
    <main className="container mx-auto py-8 px-4 max-w-7xl">
      <section className="space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/ui-sink">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to UI Sink
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Design Token System</h1>
            <p className="text-muted-foreground">Click any component to copy its CSS class</p>
          </div>
        </div>

        {/* Color Scales */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-primary to-secondary" />
              Color Scales
            </CardTitle>
            <CardDescription>OKLCH color system with primary and secondary scales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <VisualToken className="bg-primary-50" description="Primary 50" category="color" />
              <VisualToken className="bg-primary-100" description="Primary 100" category="color" />
              <VisualToken className="bg-primary-200" description="Primary 200" category="color" />
              <VisualToken className="bg-primary-300" description="Primary 300" category="color" />
              <VisualToken className="bg-primary-400" description="Primary 400" category="color" />
              <VisualToken className="bg-primary-500" description="Primary 500" category="color" />
              <VisualToken className="bg-primary-600" description="Primary 600" category="color" />
              <VisualToken className="bg-primary-700" description="Primary 700" category="color" />
              <VisualToken className="bg-primary-800" description="Primary 800" category="color" />
              <VisualToken className="bg-primary-900" description="Primary 900" category="color" />
              <VisualToken className="bg-secondary-300" description="Secondary 300" category="color" />
              <VisualToken className="bg-secondary-500" description="Secondary 500" category="color" />
              <VisualToken className="bg-secondary-700" description="Secondary 700" category="color" />
              <VisualToken className="bg-secondary-900" description="Secondary 900" category="color" />
            </div>
          </CardContent>
        </Card>

        {/* Badge System */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Badge System
            </CardTitle>
            <CardDescription>Status indicators and specialty badges with glassmorphism effects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <VisualToken className="badge-default" description="Default Badge" category="badge">
                <Star className="h-3 w-3 mr-1" />
                Default
              </VisualToken>
              <VisualToken className="badge-secondary" description="Secondary Badge" category="badge">
                Secondary
              </VisualToken>
              <VisualToken className="badge-success" description="Success Badge" category="badge">
                <Check className="h-3 w-3 mr-1" />
                Success
              </VisualToken>
              <VisualToken className="badge-warning" description="Warning Badge" category="badge">
                Warning
              </VisualToken>
              <VisualToken className="badge-error" description="Error Badge" category="badge">
                Error
              </VisualToken>
              <VisualToken className="badge-outline" description="Outline Badge" category="badge">
                Outline
              </VisualToken>
              <VisualToken className="badge-gradient" description="Gradient Badge" category="badge">
                <Zap className="h-3 w-3 mr-1" />
                Gradient
              </VisualToken>
              <VisualToken className="badge-premium" description="Premium Badge" category="badge">
                Premium
              </VisualToken>
              <VisualToken className="badge-subtle-active" description="Subtle Active" category="badge">
                <Activity className="h-3 w-3 mr-1" />
                Active
              </VisualToken>
              <VisualToken className="badge-subtle-pending" description="Subtle Pending" category="badge">
                <Clock className="h-3 w-3 mr-1" />
                Pending
              </VisualToken>
              <VisualToken className="badge-subtle-inactive" description="Subtle Inactive" category="badge">
                Inactive
              </VisualToken>
              <VisualToken className="badge-subtle-gradient" description="Subtle Gradient" category="badge">
                <TrendingUp className="h-3 w-3 mr-1" />
                Gradient
              </VisualToken>
              <VisualToken className="dashboard-badge-live" description="Dashboard Live" category="badge">
                Live
              </VisualToken>
              <VisualToken className="dashboard-badge-beta" description="Dashboard Beta" category="badge">
                Beta
              </VisualToken>
              <VisualToken className="dashboard-badge-active" description="Dashboard Active" category="badge">
                Active
              </VisualToken>
              <VisualToken className="dashboard-badge-franchise" description="Dashboard Franchise" category="badge">
                Franchise
              </VisualToken>
              <VisualToken className="dashboard-badge-corporate" description="Dashboard Corporate" category="badge">
                Corporate
              </VisualToken>
              <VisualToken className="clerk-inspired-badge" description="Clerk Inspired" category="badge">
                <Shield className="h-3 w-3 mr-1" />
                Clerk Style
              </VisualToken>
              <VisualToken className="premium-badge" description="Premium Enhanced" category="badge">
                <Star className="h-3 w-3 mr-1" />
                Premium
              </VisualToken>
            </div>
          </CardContent>
        </Card>

        {/* CTA Button System */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              CTA Button System
            </CardTitle>
            <CardDescription>Call-to-action buttons with gradients, shimmer effects, and hover animations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <VisualToken className="clerk-cta-primary" description="Clerk Primary CTA" category="button">
                Get Started
              </VisualToken>
              <VisualToken className="stripe-cta-primary" description="Stripe Primary CTA" category="button">
                Subscribe
              </VisualToken>
              <VisualToken className="btn-classic-primary" description="Classic Primary" category="button">
                Primary
              </VisualToken>
              <VisualToken className="btn-classic-secondary" description="Classic Secondary" category="button">
                Secondary
              </VisualToken>
              <VisualToken className="btn-classic-outline" description="Classic Outline" category="button">
                Outline
              </VisualToken>
              <VisualToken className="btn-classic-ghost" description="Classic Ghost" category="button">
                Ghost
              </VisualToken>
              <VisualToken className="cta-destructive" description="Destructive CTA" category="button">
                Delete
              </VisualToken>
              <VisualToken className="cta-success" description="Success CTA" category="button">
                Confirm
              </VisualToken>
              <VisualToken className="cta-shimmer px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg" description="Shimmer Effect" category="button">
                Shimmer CTA
              </VisualToken>
              <VisualToken className="cta-ultimate px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg" description="Ultimate CTA" category="button">
                Ultimate
              </VisualToken>
            </div>
          </CardContent>
        </Card>

        {/* Typography Scale */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Typography Scale
            </CardTitle>
            <CardDescription>Responsive typography with brand gradients and display classes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <VisualToken className="text-display-2xl" description="Display 2XL" category="typography">
                Display 2XL Heading
              </VisualToken>
              <VisualToken className="text-display-lg" description="Display Large" category="typography">
                Display Large Heading
              </VisualToken>
              <VisualToken className="text-display-md" description="Display Medium" category="typography">
                Display Medium Heading
              </VisualToken>
              <VisualToken className="text-display-sm" description="Display Small" category="typography">
                Display Small Heading
              </VisualToken>
              <VisualToken className="text-gradient" description="Text Gradient" category="typography">
                Gradient Text Effect
              </VisualToken>
              <VisualToken className="text-brand-gradient" description="Brand Gradient" category="typography">
                Brand Gradient Text
              </VisualToken>
              <VisualToken className="heading-brand-gradient" description="Heading Brand Gradient" category="typography">
                Heading with Brand Gradient
              </VisualToken>
              <VisualToken className="metric-display-medium" description="Metric Display" category="typography">
                42.5k
              </VisualToken>
              <VisualToken className="enterprise-headline" description="Enterprise Headline" category="typography">
                Enterprise Headline
              </VisualToken>
              <VisualToken className="enterprise-body" description="Enterprise Body" category="typography">
                Enterprise body text with proper spacing and contrast
              </VisualToken>
            </div>
          </CardContent>
        </Card>

        {/* Icon Containers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Icon Containers
            </CardTitle>
            <CardDescription>Icon containers with various styles and effects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <VisualToken className="icon-container-subtle" description="Subtle Container" category="icon" />
              <VisualToken className="icon-container-primary" description="Primary Container" category="icon" />
              <VisualToken className="icon-container-secondary" description="Secondary Container" category="icon" />
              <VisualToken className="icon-container-accent" description="Accent Container" category="icon" />
              <VisualToken className="icon-container-roi" description="ROI Container" category="icon" />
              <VisualToken className="enterprise-icon-primary p-3 rounded-lg" description="Enterprise Primary" category="icon" />
              <VisualToken className="enterprise-icon-secondary p-3 rounded-lg" description="Enterprise Secondary" category="icon" />
              <VisualToken className="enterprise-icon-accent p-3 rounded-lg" description="Enterprise Accent" category="icon" />
            </div>
          </CardContent>
        </Card>

        {/* Surface Classes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-muted border" />
              Surface Classes
            </CardTitle>
            <CardDescription>Cards, backgrounds, and glassmorphism effects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <VisualToken className="enterprise-card" description="Enterprise Card" category="surface" />
              <VisualToken className="clerk-inspired-card" description="Clerk Inspired Card" category="surface" />
              <VisualToken className="stripe-glass-card" description="Stripe Glass Card" category="surface" />
              <VisualToken className="dashboard-card-white" description="Dashboard White Card" category="surface" />
              <VisualToken className="platform-card-professional" description="Platform Professional" category="surface" />
              <VisualToken className="bg-primary-300 border border-border" description="Primary 300 Surface" category="surface" />
              <VisualToken className="bg-secondary-300 border border-border" description="Secondary 300 Surface" category="surface" />
              <VisualToken className="surface-subtle-muted border border-border" description="Subtle Muted Surface" category="surface" />
              <VisualToken className="bg-primary-100 border border-border" description="Primary 100 Background" category="surface" />
              <VisualToken className="bg-secondary-100 border border-border" description="Secondary 100 Background" category="surface" />
              <VisualToken className="light-bg-brand-gradient border border-border" description="Light Brand Gradient" category="surface" />
              <VisualToken className="clerk-interactive-tile" description="Interactive Tile" category="surface" />
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Metric Cards */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Dashboard Metric Cards
            </CardTitle>
            <CardDescription>Industry-specific dashboard metric styling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <VisualToken className="dashboard-metric-cyan" description="Metric Cyan" category="surface" />
              <VisualToken className="dashboard-metric-green" description="Metric Green" category="surface" />
              <VisualToken className="dashboard-metric-blue" description="Metric Blue" category="surface" />
              <VisualToken className="dashboard-metric-purple" description="Metric Purple" category="surface" />
              <VisualToken className="dashboard-metric-restaurant" description="Restaurant Metric" category="surface" />
              <VisualToken className="dashboard-metric-bar" description="Bar Metric" category="surface" />
              <VisualToken className="dashboard-metric-coffee" description="Coffee Metric" category="surface" />
              <VisualToken className="dashboard-metric-hotel" description="Hotel Metric" category="surface" />
            </div>
          </CardContent>
        </Card>

        {/* Industry Accent Themes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              Industry Accent Themes
            </CardTitle>
            <CardDescription>Industry-specific color themes that override brand gradients</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="accent-blue space-y-4">
                <h4 className="font-semibold text-lg">Restaurant Industry (Blue)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-brand-gradient text-white p-4 rounded-lg text-center">Brand Gradient</div>
                  <button className="industry-secondary-cta px-4 py-2 rounded border">Secondary CTA</button>
                  <div className="industry-card border p-3 rounded-lg">Industry Card</div>
                  <div className="industry-icon p-3 rounded-lg border"><Zap className="h-5 w-5" /></div>
                </div>
              </div>
              
              <div className="accent-purple space-y-4">
                <h4 className="font-semibold text-lg">Bar Industry (Purple)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-brand-gradient text-white p-4 rounded-lg text-center">Brand Gradient</div>
                  <button className="industry-secondary-cta px-4 py-2 rounded border">Secondary CTA</button>
                  <div className="industry-card border p-3 rounded-lg">Industry Card</div>
                  <div className="industry-icon p-3 rounded-lg border"><Zap className="h-5 w-5" /></div>
                </div>
              </div>
              
              <div className="accent-orange space-y-4">
                <h4 className="font-semibold text-lg">Coffee Industry (Orange)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-brand-gradient text-white p-4 rounded-lg text-center">Brand Gradient</div>
                  <button className="industry-secondary-cta px-4 py-2 rounded border">Secondary CTA</button>
                  <div className="industry-card border p-3 rounded-lg">Industry Card</div>
                  <div className="industry-icon p-3 rounded-lg border"><Zap className="h-5 w-5" /></div>
                </div>
              </div>
              
              <div className="accent-red space-y-4">
                <h4 className="font-semibold text-lg">Hotel Industry (Red)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-brand-gradient text-white p-4 rounded-lg text-center">Brand Gradient</div>
                  <button className="industry-secondary-cta px-4 py-2 rounded border">Secondary CTA</button>
                  <div className="industry-card border p-3 rounded-lg">Industry Card</div>
                  <div className="industry-icon p-3 rounded-lg border"><Zap className="h-5 w-5" /></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </section>
    </main>
  );
}
