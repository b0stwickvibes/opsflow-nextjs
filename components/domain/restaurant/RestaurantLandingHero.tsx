"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Thermometer, BarChart3 } from "lucide-react";

/**
 * RestaurantLandingHero
 * Purpose: Figma-based marketing hero for the landing page.
 * Used in: /landing (and optionally / via feature flag)
 */
export function RestaurantLandingHero() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="mb-6 animate-fade-in-up">
            <Badge className="status-indicator-success px-4 py-2 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              HACCP Certified Platform
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-display-2xl mb-6 animate-fade-in-up animation-delay-100">
            Restaurant Operations Excellence
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Professional HACCP compliance, temperature monitoring, and operational analytics
            for modern restaurant management.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-300">
            <Button size="lg" className="px-8 py-3">Start Free Trial</Button>
            <Button variant="outline" size="lg" className="px-8 py-3">Schedule Demo</Button>
          </div>

          {/* Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* HACCP Status */}
            <div className="platform-card-professional p-4 rounded-lg animate-scale-in animation-delay-400">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-1">HACCP Compliant</h3>
              <p className="text-sm text-muted-foreground">All critical points monitored</p>
            </div>
            {/* Temperature Status */}
            <div className="platform-card-professional p-4 rounded-lg animate-scale-in animation-delay-500">
              <div className="flex items-center justify-center mb-2">
                <Thermometer className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-1">Temperature Control</h3>
              <p className="text-sm text-muted-foreground">24/7 monitoring active</p>
            </div>
            {/* Analytics Status */}
            <div className="platform-card-professional p-4 rounded-lg animate-scale-in animation-delay-600">
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-1">Performance Analytics</h3>
              <p className="text-sm text-muted-foreground">Real-time insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

