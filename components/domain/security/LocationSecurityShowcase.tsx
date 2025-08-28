'use client';

import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

export function LocationSecurityShowcase() {
  useEffect(() => {
    registerComponentLayout('LocationSecurityShowcase', 'product' as any);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-2">Enterprise Security Innovation</Badge>
          <h2 className="text-3xl font-bold">Advanced Location-Based Access Control</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-2">
            Revolutionary multi-layered location verification beyond traditional geofencing. Restrict checklists and sensitive operations to authorized locations.
          </p>
          <div className="mt-2 text-xs text-primary">Superior to JOLT and traditional GPS-only solutions.</div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Multi-Factor Location Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>GPS Geofencing</li>
                <li>WiFi Fingerprinting</li>
                <li>Bluetooth Beacons</li>
                <li>Network Analysis</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Anti-Spoofing & Fraud Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Movement Analysis</li>
                <li>Confidence Scoring</li>
                <li>Audit Trails</li>
                <li>Real-time Alerts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Smart Configuration & Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Location Wizard</li>
                <li>Auto-Discovery</li>
                <li>Flexible Methods</li>
                <li>Role-Based Rules</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Mini-Comparison */}
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Traditional GPS (JOLT)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">GPS-only, poor indoor, spoofable</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Basic Geofencing</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Single method, limited indoor, no audit</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">OpsFlow AI</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Multi-layered, anti-spoofing, confidence scoring, full audit</CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default LocationSecurityShowcase;

