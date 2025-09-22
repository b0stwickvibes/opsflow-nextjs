"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, TrendingUp, Activity, Star, Circle, Square, Zap, Copy, Eye, Users, BarChart3, Target, Award, Sparkles, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface CopyableTokenProps {
  token: string;
  description: string;
  example: string;
}

function CopyableToken({ token, description, example }: CopyableTokenProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <code className="text-sm font-mono bg-background px-2 py-1 rounded border">{token}</code>
          {copied && <span className="text-xs text-green-600">Copied!</span>}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        <p className="text-xs text-muted-foreground/70 mt-1">Use: {example}</p>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={copyToClipboard}
        className="ml-2 h-8 w-8 p-0"
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default function TokensPage() {
  return (
    <main className="container mx-auto py-8 px-4 max-w-6xl">
      <section className="space-y-8">
        {/* Back Navigation */}
        <div className="flex items-center gap-4">
          <Link 
            href="/ui-sink" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to UI Sink</span>
          </Link>
        </div>

        <div className="text-center space-y-4">
          <div className="bg-green-500 text-white p-2 rounded mb-4">
            🚀 COMPREHENSIVE TOKEN SYSTEM - RESTORED VERSION 🚀
          </div>
          <h1 className="enterprise-headline">Design Token System</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive design tokens organized by component type for consistent styling across the platform.
          </p>
        </div>

        <div className="space-y-12">
          {/* Quick Reference - MOST IMPORTANT */}
          <Card className="bg-primary-50/50 border-primary-200">
            <CardHeader>
              <CardTitle className="text-primary-800">Quick Reference - Most Used Tokens</CardTitle>
              <p className="text-sm text-muted-foreground">Copy these tokens for 90% of your styling needs</p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Primary CTAs & Buttons</h4>
                <CopyableToken token="clerk-cta-primary" description="Premium gradient button with shadow" example="Main conversion buttons" />
                <CopyableToken token="hover-scale-103" description="Scale on hover (1.03x)" example="Interactive elements" />
                
                <h4 className="font-semibold text-sm mt-4">Cards & Containers</h4>
                <CopyableToken token="enterprise-card" description="Professional glassmorphism card" example="Feature cards, testimonials" />
                <CopyableToken token="dashboard-card-white" description="Clean white dashboard card" example="Dashboard panels, metrics" />
                <CopyableToken token="platform-card-professional" description="Muted professional card" example="Metrics, stats" />
                
                <h4 className="font-semibold text-sm mt-4">Dashboard Metrics</h4>
                <CopyableToken token="dashboard-metric-cyan" description="Cyan metric card background" example="Primary dashboard metrics" />
                <CopyableToken token="dashboard-metric-green" description="Green metric card background" example="Success/completion metrics" />
                <CopyableToken token="dashboard-badge-live" description="Live status badge" example="Real-time indicators" />
                <CopyableToken token="dashboard-badge-active" description="Active status badge (cyan/teal)" example="Flagship stores, active features" />
                <CopyableToken token="dashboard-badge-franchise" description="Franchise badge (purple)" example="Franchise locations" />
                <CopyableToken token="dashboard-badge-corporate" description="Corporate badge (blue)" example="Corporate locations" />
                
                <h4 className="font-semibold text-sm mt-4">Backgrounds</h4>
                <CopyableToken token="bg-brand-gradient" description="Teal → Purple gradient" example="Hero sections, premium CTAs" />
                <CopyableToken token="bg-primary" description="Teal background" example="Primary buttons, main CTAs" />
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Typography</h4>
                <CopyableToken token="enterprise-headline" description="Responsive main headlines" example="Page titles, hero text" />
                <CopyableToken token="text-display-md" description="Section headers" example="Feature section titles" />
                <CopyableToken token="metric-display-medium" description="Large metric numbers" example="KPIs, percentages" />
                
                <h4 className="font-semibold text-sm mt-4">Colors & Text</h4>
                <CopyableToken token="text-primary" description="Teal brand text (NOT blue!)" example="Links, accents" />
                <CopyableToken token="text-muted-foreground" description="Secondary text" example="Descriptions, captions" />
                <CopyableToken token="text-brand-gradient" description="Gradient text effect" example="Special headlines" />
                
                <h4 className="font-semibold text-sm mt-4">Icons</h4>
                <CopyableToken token="enterprise-icon-primary" description="Primary icon container" example="Feature icons" />
              </div>
            </CardContent>
          </Card>

          {/* BADGES & STATUS INDICATORS */}
          <div className="space-y-6">
            <h2 className="text-display-md">Badges & Status Indicators</h2>
            <p className="text-muted-foreground">Clean, purposeful badge system organized by use case.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dashboard Status Badges</CardTitle>
                  <p className="text-sm text-muted-foreground">Real-time status indicators for dashboard use</p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap mb-6">
                    <div className="dashboard-badge-live flex items-center gap-1">
                      <Activity className="size-3" />
                      Live
                    </div>
                    <div className="dashboard-badge-active">Active</div>
                    <div className="dashboard-badge-franchise">Franchise</div>
                    <div className="dashboard-badge-corporate">Corporate</div>
                  </div>
                  <div className="space-y-3">
                    <CopyableToken token="dashboard-badge-live" description="Live status badge with pulse animation" example="Real-time data indicators, live connections" />
                    <CopyableToken token="dashboard-badge-active" description="Active status badge (cyan/teal)" example="Active connections, flagship stores" />
                    <CopyableToken token="dashboard-badge-franchise" description="Franchise badge (purple)" example="Franchise locations" />
                    <CopyableToken token="dashboard-badge-corporate" description="Corporate badge (blue)" example="Corporate locations" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Specialty Components</CardTitle>
                  <p className="text-sm text-muted-foreground">Advanced components for specific use cases</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <CopyableToken token="restaurant-hero-gradient" description="Warm restaurant hero gradient" example="Restaurant landing pages, food service" />
                    <CopyableToken token="industry-professional" description="Professional industry styling" example="Corporate, B2B, consulting" />
                    <CopyableToken token="performance-excellent" description="Excellent performance indicator" example="High-performing metrics, success states" />
                    <CopyableToken token="analytics-highlight" description="Analytics highlight styling" example="Key insights, important data points" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* DASHBOARD SYSTEM */}
          <div className="space-y-6">
            <h2 className="text-display-md">Dashboard Design System</h2>
            <p className="text-muted-foreground">Complete dashboard styling tokens inspired by Figma designs.</p>

            <Card>
              <CardHeader>
                <CardTitle>Dashboard Metrics & Backgrounds</CardTitle>
                <p className="text-sm text-muted-foreground">Colored metric cards and dashboard-specific styling</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {/* Metric Cards */}
                  <div className="dashboard-metric-cyan p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <Shield className="h-4 w-4 text-cyan-600" />
                      <span className="text-xs font-medium text-cyan-600">+12%</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-900 mb-1">847</div>
                    <div className="text-xs dashboard-text-muted">Tasks Completed</div>
                  </div>
                  
                  <div className="dashboard-metric-green p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-xs font-medium text-green-600">+8%</span>
                    </div>
                    <div className="text-2xl font-bold text-green-900 mb-1">98.5%</div>
                    <div className="text-xs dashboard-text-muted">Compliance Score</div>
                  </div>

                  <div className="dashboard-metric-blue p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <TrendingUp className="h-4 w-4 text-cyan-700" />
                      <span className="text-xs font-medium text-cyan-700">+5%</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-800 mb-1">1,247</div>
                    <div className="text-xs dashboard-text-muted">Active Users</div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-sm">All Dashboard Tokens</h4>
                  <div className="space-y-3">
                    <CopyableToken token="dashboard-metric-cyan" description="Cyan metric card background (uses primary color)" example="Tasks completed, performance metrics" />
                    <CopyableToken token="dashboard-metric-green" description="Green metric card background (success metrics)" example="Completion rates, compliance scores" />
                    <CopyableToken token="dashboard-metric-blue" description="Light teal metric card background (info metrics)" example="Status indicators, information displays" />
                    <CopyableToken token="dashboard-metric-purple" description="Purple metric card background (system metrics)" example="Integration status, system metrics" />
                    <CopyableToken token="dashboard-text-primary" description="Primary dashboard text (headings, important text)" example="Dashboard titles, metric labels" />
                    <CopyableToken token="dashboard-text-secondary" description="Secondary dashboard text (body text, labels)" example="Descriptions, metric values" />
                    <CopyableToken token="dashboard-text-muted" description="Muted dashboard text (supporting text)" example="Timestamps, helper text" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ALL OTHER TOKEN CATEGORIES */}
          <Card>
            <CardHeader>
              <CardTitle>Complete Token Reference</CardTitle>
              <p className="text-sm text-muted-foreground">All available design tokens in the system</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Buttons & CTAs</h4>
                  <div className="space-y-2">
                    <CopyableToken token="clerk-cta-primary" description="Premium gradient CTA with white text and shadow" example="Main conversion buttons, hero CTAs" />
                    <CopyableToken token="clerk-cta-secondary" description="Outline CTA with muted background" example="Secondary actions, less prominent CTAs" />
                    <CopyableToken token="cta-shimmer" description="Subtle shimmer animation overlay" example="High-priority CTAs, special offers" />
                    <CopyableToken token="hover-scale-103" description="Scale on hover (1.03x)" example="Any interactive elements" />
                  </div>

                  <h4 className="font-semibold mt-6">Cards & Containers</h4>
                  <div className="space-y-2">
                    <CopyableToken token="enterprise-card" description="Glassmorphism card with gradient border" example="Feature cards, testimonials, premium content" />
                    <CopyableToken token="dashboard-card-white" description="Clean white dashboard card with subtle shadows" example="Dashboard panels, metrics, content cards" />
                    <CopyableToken token="platform-card-professional" description="Professional muted card" example="Metrics, stats, data displays" />
                  </div>

                  <h4 className="font-semibold mt-6">Typography</h4>
                  <div className="space-y-2">
                    <CopyableToken token="enterprise-headline" description="Responsive main headlines with optimized spacing" example="Hero titles, page headers" />
                    <CopyableToken token="text-display-md" description="Medium display text for section headers" example="Feature sections, content blocks" />
                    <CopyableToken token="metric-display-medium" description="Large metric and number display" example="KPIs, statistics, percentages" />
                    <CopyableToken token="text-brand-gradient" description="Gradient text effect using brand colors" example="Special headlines, premium features" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Icons & Graphics</h4>
                  <div className="space-y-2">
                    <CopyableToken token="enterprise-icon-primary" description="Primary brand icon container" example="Feature icons, main actions" />
                    <CopyableToken token="icon-container-primary" description="Primary icon container (filled)" example="Feature icons, main CTAs" />
                    <CopyableToken token="icon-container-roi" description="ROI-style premium icon container with glow effect" example="Stats, metrics, ROI displays" />
                  </div>

                  <h4 className="font-semibold mt-6">Colors & Backgrounds</h4>
                  <div className="space-y-2">
                    <CopyableToken token="bg-brand-gradient" description="Teal to purple gradient background" example="Hero sections, premium features" />
                    <CopyableToken token="bg-primary" description="Solid primary (teal) background" example="CTAs, highlights" />
                    <CopyableToken token="text-primary" description="Primary brand color text (teal)" example="Links, accents, highlights" />
                  </div>

                  <h4 className="font-semibold mt-6">Specialty Badges</h4>
                  <div className="space-y-2">
                    <CopyableToken token="badge-gradient" description="Brand gradient badge with strong visual impact" example="Premium features, paid plans, highlights" />
                    <CopyableToken token="badge-success" description="Success state badge (solid green)" example="Completed tasks, approved items" />
                    <CopyableToken token="badge-warning" description="Warning state badge (solid yellow)" example="Pending items, attention needed" />
                    <CopyableToken token="badge-error" description="Error state badge (solid red)" example="Failed processes, critical issues" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
