"use client";

import { useState, useEffect } from "react";
import {
  ChefHat,
  ClipboardCheck,
  CheckCircle,
  Clock,
  Timer,
  Eye,
  ArrowRight,
  Shield,
  Thermometer,
  Award,
  Network,
  Database,
  BarChart,
  Smartphone,
  Utensils,
  Users,
  Settings,
  Bell,
  PlayCircle,
  Activity,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PremiumBentoSectionProps = {
  onNavigate?: (page: string) => void;
  className?: string;
  industry?: 'restaurants' | 'bars' | 'coffee' | 'hotels';
  heading?: string;
  subheading?: string;
  badgeText?: string;
};

/**
 * Restaurant Task Management Platform Section
 * 
 * A premium bento-style section showcasing task management features for restaurants.
 * Clean design matching Figma specification with live metrics dashboard.
 * 
 * Features:
 * - Kitchen Task Automation with interactive dashboard mockup
 * - Food Safety Compliance with HACCP status indicators  
 * - POS Integration with system connection status
 * - Customizable Solutions with task builder interface
 * - Live Restaurant Performance metrics dashboard with recent activity
 * 
 * @param onNavigate - Optional navigation handler for internal routing
 * @param industry - Restaurant industry type for customization
 * @param heading - Main section heading
 * @param subheading - Descriptive text below heading
 * @param badgeText - Badge text for section identifier
 */
export function PremiumBentoSection({
  onNavigate,
  className,
  industry = 'restaurants',
  heading = "Streamline Restaurant Operations with Smart Task Management",
  subheading = "Generic task tools won't cut it. Our platform is purpose-built to provide exceptional task management solutions for your restaurant's unique operational needs.",
  badgeText = "Restaurant Task Management Platform",
}: PremiumBentoSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Default navigation handler for Next.js router
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      // Fallback for Next.js router
      if (typeof window !== 'undefined') {
        window.location.href = `/${page}`;
      }
    }
  };

  return (
    <section className="dashboard-section-bg section-padding-xl">
      <div className={cn("content-container", className)}>
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge className="dashboard-badge-beta">
            <ClipboardCheck className="size-4" />
            {badgeText}
          </Badge>

          <h1 className="text-display-lg text-foreground">
            {heading}
          </h1>

          <p className="text-xl text-muted-foreground content-max-lg mx-auto">
            {subheading}
          </p>
        </div>

        {/* Three Feature Cards */}
        <div className="dashboard-grid-3 mb-16">
          {/* Kitchen Workflows Card */}
          <div className="dashboard-card-white p-8 dashboard-hover-lift motion-fade-in-up-320">
            <div className="space-y-6">
              {/* Icon */}
              <div className="enterprise-icon-primary">
                <ChefHat className="size-8" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-display-sm text-foreground mb-3">
                  Advanced Kitchen Workflows
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our platform utilizes cutting-edge task automation to provide accurate and efficient solutions for your restaurant's daily kitchen operations and workflow management.
                </p>

                {/* Kitchen Tasks Dashboard */}
                <div className="dashboard-card-white p-4 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="dashboard-text-primary text-sm">Kitchen Tasks</span>
                      <Badge className="dashboard-badge-active text-xs">
                        On Track
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 dashboard-metric-green rounded-lg">
                        <CheckCircle className="size-4 text-green-600" />
                        <span className="text-xs dashboard-text-secondary flex-1">Prep station setup complete</span>
                        <span className="text-xs text-green-600">✓</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 dashboard-metric-blue rounded-lg">
                        <Clock className="size-4 text-cyan-700" />
                        <span className="text-xs dashboard-text-secondary flex-1">Inventory count in progress</span>
                        <span className="text-xs text-cyan-700">2 min</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 bg-muted rounded-lg border border-border">
                        <Timer className="size-4 text-muted-foreground" />
                        <span className="text-xs dashboard-text-muted flex-1">Equipment sanitization pending</span>
                        <span className="text-xs dashboard-text-muted">Queue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant="outline"
                className="cta-equal w-full group"
                onClick={() => handleNavigation("kitchen-staff")}
              >
                <Eye className="size-4 mr-2" />
                View Kitchen Dashboard
                <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* HACCP Compliance Card */}
          <div className="dashboard-card-white p-8 dashboard-hover-lift motion-fade-in-up-320 animation-delay-200">
            <div className="space-y-6">
              {/* Icon */}
              <div className="enterprise-icon-secondary">
                <Shield className="size-8" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-display-sm text-foreground mb-3">
                  Secure Data Handling
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We prioritize your restaurant's security with comprehensive HACCP compliance, strict privacy protocols, ensuring your information remains confidential and protected.
                </p>

                {/* HACCP Status Dashboard */}
                <div className="dashboard-card-white p-4 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="dashboard-text-primary text-sm">HACCP Status</span>
                      <Badge className="dashboard-badge-active text-xs">
                        100% Compliant
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 dashboard-metric-cyan rounded-lg">
                        <div className="flex items-center gap-2">
                          <Thermometer className="size-4 text-cyan-600" />
                          <span className="text-xs dashboard-text-secondary">Temperature Logs</span>
                        </div>
                        <span className="text-xs font-medium text-cyan-600">Current</span>
                      </div>
                      <div className="flex items-center justify-between p-2 dashboard-metric-green rounded-lg">
                        <div className="flex items-center gap-2">
                          <ClipboardCheck className="size-4 text-green-600" />
                          <span className="text-xs dashboard-text-secondary">Safety Checklists</span>
                        </div>
                        <span className="text-xs font-medium text-green-600">Complete</span>
                      </div>
                      <div className="flex items-center justify-between p-2 dashboard-metric-blue rounded-lg">
                        <div className="flex items-center gap-2">
                          <Award className="size-4 text-cyan-700" />
                          <span className="text-xs dashboard-text-secondary">Audit Trail</span>
                        </div>
                        <span className="text-xs font-medium text-cyan-700">Secured</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant="outline"
                className="cta-equal w-full group"
                onClick={() => handleNavigation("haccp-compliance")}
              >
                <Shield className="size-4 mr-2" />
                View Compliance Dashboard
                <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Integration Card */}
          <div className="dashboard-card-white p-8 dashboard-hover-lift motion-fade-in-up-320 animation-delay-400">
            <div className="space-y-6">
              {/* Icon */}
              <div className="enterprise-icon-accent">
                <Network className="size-8" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-display-sm text-foreground mb-3">
                  Seamless Integration
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Easily integrate our task solutions into your existing POS workflows and systems for a smooth and efficient operation that works with your current setup.
                </p>

                {/* System Connections */}
                <div className="dashboard-card-white p-4 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="dashboard-text-primary text-sm">System Connections</span>
                      <Badge className="dashboard-badge-live text-xs">
                        Active
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 dashboard-metric-purple rounded-lg">
                        <div className="flex items-center gap-2">
                          <Database className="size-4 text-purple-600" />
                          <span className="text-xs dashboard-text-secondary">POS System</span>
                        </div>
                        <div className="dashboard-activity-green w-2 h-2 rounded-full" />
                      </div>
                      <div className="flex items-center justify-between p-2 dashboard-metric-blue rounded-lg">
                        <div className="flex items-center gap-2">
                          <BarChart className="size-4 text-cyan-700" />
                          <span className="text-xs dashboard-text-secondary">Analytics Dashboard</span>
                        </div>
                        <div className="dashboard-activity-green w-2 h-2 rounded-full" />
                      </div>
                      <div className="flex items-center justify-between p-2 dashboard-metric-cyan rounded-lg">
                        <div className="flex items-center gap-2">
                          <Smartphone className="size-4 text-cyan-600" />
                          <span className="text-xs dashboard-text-secondary">Mobile Apps</span>
                        </div>
                        <div className="dashboard-activity-green w-2 h-2 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant="outline"
                className="cta-equal w-full group"
                onClick={() => handleNavigation("features")}
              >
                <Network className="size-4 mr-2" />
                View Integrations
                <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Customizable Solutions */}
          <div className="space-y-8">
            <div>
              <h2 className="text-display-md text-foreground mb-4">
                Customizable Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tailor our task management services to your restaurant's specific needs with flexible customization options, allowing you to get the most out of our platform and optimize your daily operations.
              </p>
            </div>

            {/* Custom Task Builder */}
            <div className="dashboard-card-white p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="dashboard-text-primary">Custom Task Builder</h3>
                  <Badge className="dashboard-badge-beta text-xs">
                    Beta
                  </Badge>
                </div>

                <div className="dashboard-grid-2 gap-4">
                  <div className="space-y-3">
                    <div className="dashboard-text-primary text-sm">Task Categories</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 dashboard-metric-green rounded-lg">
                        <Utensils className="size-4 text-green-600" />
                        <span className="text-xs dashboard-text-secondary">Kitchen Operations</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 dashboard-metric-purple rounded-lg">
                        <Users className="size-4 text-purple-600" />
                        <span className="text-xs dashboard-text-secondary">Front of House</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 dashboard-metric-blue rounded-lg">
                        <Settings className="size-4 text-cyan-700" />
                        <span className="text-xs dashboard-text-secondary">Maintenance</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="dashboard-text-primary text-sm">Automation Rules</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 dashboard-metric-cyan rounded-lg">
                        <Clock className="size-4 text-cyan-600" />
                        <span className="text-xs dashboard-text-secondary">Time-based triggers</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 dashboard-metric-blue rounded-lg">
                        <Bell className="size-4 text-cyan-700" />
                        <span className="text-xs dashboard-text-secondary">Smart notifications</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 dashboard-metric-green rounded-lg">
                        <CheckCircle className="size-4 text-green-600" />
                        <span className="text-xs dashboard-text-secondary">Auto-completion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="clerk-cta-primary cta-equal cta-shimmer"
                size="lg"
                onClick={() => handleNavigation("features")}
              >
                Explore Customization
                <ArrowRight className="size-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="cta-equal"
                onClick={() => handleNavigation("demo")}
              >
                <PlayCircle className="size-4 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>

        {/* Right Column - Restaurant Performance Dashboard */}
        <div className="dashboard-card-white p-6 dashboard-performance-bg">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="dashboard-text-primary">Restaurant Performance</h3>
              <div className="flex items-center gap-1 dashboard-badge-live">
                <Activity className="size-3" />
                Live
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="dashboard-grid-2 gap-4">
              {[
                {
                  label: "Tasks Completed",
                  value: "847",
                  trend: "+12%",
                  icon: CheckCircle,
                  active: activeMetric === 0,
                },
                {
                  label: "Compliance Score",
                  value: "98.5%",
                  trend: "+2.3%",
                  icon: Shield,
                  active: activeMetric === 1,
                },
                {
                  label: "Efficiency Rating",
                  value: "94%",
                  trend: "+8%",
                  icon: TrendingUp,
                  active: activeMetric === 2,
                },
                {
                  label: "Temperature Logs",
                  value: "152",
                  trend: "Today",
                  icon: Thermometer,
                  active: activeMetric === 3,
                },
              ].map((metric, index) => {
                const getMetricStyles = (index: number, active: boolean) => {
                  const styles = [
                    { bg: "dashboard-metric-cyan", icon: "text-cyan-600", text: "text-cyan-900", trend: "text-cyan-600" },
                    { bg: "dashboard-metric-green", icon: "text-green-600", text: "text-green-900", trend: "text-green-600" },
                    { bg: "dashboard-metric-blue", icon: "text-cyan-700", text: "text-cyan-900", trend: "text-cyan-700" },
                    { bg: "dashboard-metric-purple", icon: "text-purple-600", text: "text-purple-900", trend: "text-purple-600" }
                  ];
                  return active ? styles[index] : { bg: "bg-muted", icon: "text-muted-foreground", text: "text-muted-foreground", trend: "text-muted-foreground" };
                };
                
                const style = getMetricStyles(index, metric.active);
                
                return (
                <div
                  key={metric.label}
                  className={cn(
                    "dashboard-card-white p-4 rounded-xl transition-all duration-500",
                    metric.active
                      ? `${style.bg} dashboard-hover-lift`
                      : "bg-muted border-border hover:bg-muted/80"
                  )}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <metric.icon className={cn("size-4", style.icon)} />
                      <span className={cn("text-xs font-medium", style.trend)}>
                        {metric.trend}
                      </span>
                    </div>
                    <div>
                      <div className={cn("text-2xl font-bold mb-1", style.text)}>
                        {metric.value}
                      </div>
                      <div className="text-xs dashboard-text-muted">{metric.label}</div>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>

            {/* Recent Activity - Enhanced from Figma version */}
            <div className="space-y-3">
              <div className="dashboard-text-primary text-sm">Recent Activity</div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 dashboard-card-white rounded-lg">
                  <div className="dashboard-activity-green w-2 h-2 rounded-full" />
                  <span className="text-xs dashboard-text-secondary flex-1">Kitchen prep completed</span>
                  <span className="text-xs dashboard-text-muted">2m ago</span>
                </div>
                <div className="flex items-center gap-3 p-2 dashboard-card-white rounded-lg">
                  <div className="dashboard-activity-blue w-2 h-2 rounded-full" />
                  <span className="text-xs dashboard-text-secondary flex-1">Temperature check logged</span>
                  <span className="text-xs dashboard-text-muted">5m ago</span>
                </div>
                <div className="flex items-center gap-3 p-2 dashboard-card-white rounded-lg">
                  <div className="dashboard-activity-green w-2 h-2 rounded-full" />
                  <span className="text-xs dashboard-text-secondary flex-1">Opening checklist done</span>
                  <span className="text-xs dashboard-text-muted">1h ago</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="dashboard-text-muted text-sm">
              Monitoring <span className="dashboard-text-primary">12 locations</span>{" "}
              across <span className="dashboard-text-primary">4 cities</span> in real-time
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default PremiumBentoSection;