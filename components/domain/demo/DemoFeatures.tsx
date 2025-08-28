"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";

const Thermometer = dynamic(() => import('lucide-react').then(m => ({ default: m.Thermometer })));
const Shield = dynamic(() => import('lucide-react').then(m => ({ default: m.Shield })));
const Package = dynamic(() => import('lucide-react').then(m => ({ default: m.Package })));
const GraduationCap = dynamic(() => import('lucide-react').then(m => ({ default: m.GraduationCap })));
const BarChart3 = dynamic(() => import('lucide-react').then(m => ({ default: m.BarChart3 })));
const Play = dynamic(() => import('lucide-react').then(m => ({ default: m.Play })));
const CheckCircle = dynamic(() => import('lucide-react').then(m => ({ default: m.CheckCircle })));
const AlertTriangle = dynamic(() => import('lucide-react').then(m => ({ default: m.AlertTriangle })));
const Clock = dynamic(() => import('lucide-react').then(m => ({ default: m.Clock })));

export function DemoFeatures() {
  const [activeDemo, setActiveDemo] = useState("temperature");

  const demoFeatures = [
    {
      id: "temperature",
      title: "Temperature Monitoring",
      description: "Real-time temperature tracking across all storage units",
      icon: Thermometer,
      badge: "Live Demo",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: "haccp",
      title: "HACCP Compliance",
      description: "Automated compliance tracking and reporting",
      icon: Shield,
      badge: "Compliance",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: "inventory",
      title: "Inventory Management",
      description: "Smart tracking with predictive ordering",
      icon: Package,
      badge: "Smart AI",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: "training",
      title: "Staff Training",
      description: "Digital certification and progress tracking",
      icon: GraduationCap,
      badge: "Team Management",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    }
  ];

  const demoScreenshots = {
    temperature: {
      title: "Live Temperature Dashboard",
      description: "Monitor all refrigeration units in real-time with instant alerts",
      metrics: [
        { label: "Units Monitored", value: "12", icon: Thermometer },
        { label: "Average Temp", value: "38°F", icon: CheckCircle },
        { label: "Alerts Today", value: "0", icon: CheckCircle },
        { label: "Compliance", value: "100%", icon: CheckCircle }
      ]
    },
    haccp: {
      title: "HACCP Control Points",
      description: "Automated tracking of critical control points with digital logs",
      metrics: [
        { label: "Control Points", value: "8", icon: Shield },
        { label: "Daily Checks", value: "24", icon: CheckCircle },
        { label: "Compliance Rate", value: "99.8%", icon: CheckCircle },
        { label: "Time Saved", value: "3hrs", icon: Clock }
      ]
    },
    inventory: {
      title: "Smart Inventory Tracking",
      description: "AI-powered inventory management with automated reordering",
      metrics: [
        { label: "Items Tracked", value: "847", icon: Package },
        { label: "Auto-Orders", value: "12", icon: CheckCircle },
        { label: "Waste Reduction", value: "31%", icon: CheckCircle },
        { label: "Cost Savings", value: "$2,847", icon: BarChart3 }
      ]
    },
    training: {
      title: "Staff Certification Hub",
      description: "Track employee training progress and certifications",
      metrics: [
        { label: "Staff Members", value: "24", icon: GraduationCap },
        { label: "Certifications", value: "47", icon: CheckCircle },
        { label: "Completion Rate", value: "94%", icon: CheckCircle },
        { label: "Due Soon", value: "3", icon: AlertTriangle }
      ]
    }
  };

  const currentDemo = demoScreenshots[activeDemo as keyof typeof demoScreenshots];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Interactive Feature Demonstrations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore OpsFlow's key features with live demos showing real restaurant data and workflows.
          </p>
        </div>

        <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            {demoFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <TabsTrigger key={feature.id} value={feature.id} className="flex items-center gap-2">
                  <IconComponent className="h-4 w-4" />
                  <span className="hidden sm:inline">{feature.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {demoFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <TabsContent key={feature.id} value={feature.id} className="space-y-6">
                {/* Feature Header */}
                <div className="text-center space-y-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor}`}>
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {feature.badge}
                    </Badge>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>

                {/* Demo Screenshot Area */}
                <Card className="max-w-5xl mx-auto">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{currentDemo.title}</CardTitle>
                        <CardDescription>{currentDemo.description}</CardDescription>
                      </div>
                      <Button size="sm" className="gap-2">
                        <Play className="h-4 w-4" />
                        Play Demo
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Mock Dashboard */}
                    <div className="aspect-video bg-muted/50 rounded-lg p-6 border-2 border-dashed border-muted-foreground/20">
                      <div className="h-full flex flex-col">
                        {/* Dashboard Header */}
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="font-semibold text-lg">{currentDemo.title}</h4>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-muted-foreground">Live</span>
                          </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                          {currentDemo.metrics.map((metric, index) => {
                            const MetricIcon = metric.icon;
                            return (
                              <div key={index} className="bg-background rounded-lg p-4 border">
                                <div className="flex items-center justify-between mb-2">
                                  <MetricIcon className={`h-5 w-5 ${
                                    metric.icon === AlertTriangle ? 'text-orange-500' : 'text-green-500'
                                  }`} />
                                </div>
                                <div className="text-2xl font-bold">{metric.value}</div>
                                <div className="text-sm text-muted-foreground">{metric.label}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Demo Actions */}
                    <div className="flex justify-center space-x-4 mt-6">
                      <Button variant="outline" size="sm">
                        View Full Demo
                      </Button>
                      <Button size="sm">
                        Try This Feature
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
