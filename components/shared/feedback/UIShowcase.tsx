"use client";

import React from "react";
import { Zap, Clock, Pause, CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

const UIShowcase = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto p-6 relative">
      {/* Glassmorphism background elements to show backdrop-blur effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-secondary-400 to-primary-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-gradient-to-br from-secondary-400 to-primary-500 rounded-full blur-xl"></div>
      </div>
      
      {/* Content with relative positioning to sit above background */}
      <div className="relative z-10 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">UI Components Showcase</h1>
        <p className="text-muted-foreground">
          Demonstrating subtle status badges and theme-aware alerts with proper dark mode support
        </p>
      </div>

      {/* Subtle Status Badges */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Subtle Status Badges</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Default Status Indicators</h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="subtle-primary">
                <Zap className="w-3 h-3 mr-1" />
                Active
              </Badge>
              <Badge variant="subtle-secondary">
                <Clock className="w-3 h-3 mr-1" />
                Pending
              </Badge>
              <Badge variant="subtle-muted">
                <Pause className="w-3 h-3 mr-1" />
                Inactive
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">HACCP Compliance Status</h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="subtle-primary">
                <CheckCircle className="w-3 h-3 mr-1" />
                HACCP Compliant
              </Badge>
              <Badge variant="subtle-secondary">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Temperature Check Due
              </Badge>
              <Badge variant="subtle-destructive">
                <XCircle className="w-3 h-3 mr-1" />
                Compliance Violation
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">All Subtle Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="subtle-primary">Subtle Primary</Badge>
              <Badge variant="subtle-secondary">Subtle Secondary</Badge>
              <Badge variant="subtle-destructive">Subtle Destructive</Badge>
              <Badge variant="subtle-muted">Subtle Muted</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Theme-Aware Alerts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Theme-Aware Alerts</h2>
        
        <div className="space-y-4">
          <Alert variant="info">
            <Info className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational alert with theme-aware colors that adapts to both light and dark modes.
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              This is a warning alert with subtle background colors that work well in both themes.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              This is an error alert with proper destructive colors that properly supports dark mode.
            </AlertDescription>
          </Alert>

          <Alert variant="success">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              This is a success alert with very subtle theme colors that maintain readability.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Combined Example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Real-World Example</h2>
        
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Restaurant Kitchen Status</h3>
              <div className="flex gap-2">
                <Badge variant="subtle-primary">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Online
                </Badge>
                <Badge variant="subtle-secondary">
                  <Clock className="w-3 h-3 mr-1" />
                  2 Pending Tasks
                </Badge>
              </div>
            </div>
            
            <Alert variant="warning">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Temperature Check Required</AlertTitle>
              <AlertDescription>
                Freezer Unit #2 temperature check is overdue. Please verify temperature readings within the next 15 minutes to maintain HACCP compliance.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium">Equipment Status</span>
                <div className="flex gap-2">
                  <Badge variant="subtle-primary">3 Active</Badge>
                  <Badge variant="subtle-muted">1 Offline</Badge>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium">Compliance</span>
                <Badge variant="subtle-destructive">
                  <XCircle className="w-3 h-3 mr-1" />
                  1 Violation
                </Badge>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium">Tasks</span>
                <Badge variant="subtle-secondary">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  2 Due Soon
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default UIShowcase;
