"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Thermometer, Shield, Package, GraduationCap, BarChart3, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function FeatureGrid() {
  const features = [
    {
      icon: Thermometer,
      badge: "Food Safety",
      title: "Temperature Monitoring",
      description: "Automated temperature tracking for all food storage units",
      content: "Real-time alerts when temperatures fall outside of safe ranges, with historical logging for compliance.",
      iconStyle: "primary" as const
    },
    {
      icon: Shield,
      badge: "Compliance",
      title: "HACCP Automation",
      description: "Digital HACCP compliance with paperless record-keeping",
      content: "Track critical control points automatically and generate compliance reports in seconds.",
      iconStyle: "secondary" as const
    },
    {
      icon: Package,
      badge: "Operations",
      title: "Inventory Management",
      description: "Smart inventory tracking and ordering",
      content: "Reduce waste and optimize ordering with AI-powered inventory predictions and automatic reordering.",
      iconStyle: "accent" as const
    },
    {
      icon: GraduationCap,
      badge: "Staff",
      title: "Training Management",
      description: "Digital training records and certifications",
      content: "Track employee training status, certifications, and schedule automated refresher courses.",
      iconStyle: "muted" as const
    },
    {
      icon: BarChart3,
      badge: "Analytics",
      title: "Performance Insights",
      description: "Data-driven operational intelligence",
      content: "Visualize trends, identify problem areas, and optimize operations with powerful dashboards.",
      iconStyle: "primary" as const
    },
    {
      icon: Smartphone,
      badge: "Mobile",
      title: "On-the-Go Access",
      description: "Complete restaurant control from anywhere",
      content: "Access your restaurant data, receive alerts, and manage operations from any device.",
      iconStyle: "secondary" as const
    }
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 motion-fade-in-up-320">Complete Restaurant Operations Suite</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto motion-fade-in-up-320 animation-delay-100">
          Everything you need to run efficient, compliant, and profitable restaurant operations in one integrated platform.
        </p>
      </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="enterprise-card tile-hover motion-fade-in-up-320" style={{ animationDelay: `${index * 80}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn(
                      feature.iconStyle === 'primary' && "enterprise-icon-primary",
                      feature.iconStyle === 'secondary' && "enterprise-icon-secondary",
                      feature.iconStyle === 'accent' && "enterprise-icon-accent",
                      feature.iconStyle === 'muted' && "enterprise-icon-muted"
                    )}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{feature.content}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full group hover-scale-103">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
    </div>
  )
}
