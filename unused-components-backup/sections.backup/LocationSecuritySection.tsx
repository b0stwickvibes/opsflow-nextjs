'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, MapPin, Shield, Zap } from "lucide-react";

export default function LocationSecuritySection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-900 dark:to-blue-950/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary/5 opacity-50" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Enterprise Security Innovation
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced Location-Based Access Control
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Revolutionary multi-layered location verification beyond traditional geofencing. Restrict checklists and sensitive operations to authorized locations.
          </p>
          <Badge variant="secondary" className="text-sm font-medium">
            Superior to JOLT and traditional GPS-only solutions
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Multi-Factor Verification
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                GPS Geofencing
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                WiFi Fingerprinting
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Bluetooth Beacons
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Network Analysis
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Anti-Spoofing Detection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Movement Analysis
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Confidence Scoring
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Audit Trails
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Real-time Alerts
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Smart Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Location Wizard
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Auto-Discovery
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Flexible Methods
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Role-Based Rules
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Security Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="font-medium text-red-600 dark:text-red-400">Traditional GPS (JOLT)</div>
                <div className="text-sm text-muted-foreground">GPS-only, poor indoor, spoofable</div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-yellow-600 dark:text-yellow-400">Basic Geofencing</div>
                <div className="text-sm text-muted-foreground">Single method, limited indoor, no audit</div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-green-600 dark:text-green-400">OpsFlow AI</div>
                <div className="text-sm text-muted-foreground">Multi-layered, anti-spoofing, confidence scoring, full audit</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}