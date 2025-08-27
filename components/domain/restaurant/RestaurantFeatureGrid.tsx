"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeatureGrid() {
  const features = [
    {
      badge: "Food Safety",
      title: "Temperature Monitoring",
      description: "Automated temperature tracking for all food storage units",
      content: "Real-time alerts when temperatures fall outside of safe ranges, with historical logging for compliance."
    },
    {
      badge: "Compliance",
      title: "HACCP Automation",
      description: "Digital HACCP compliance with paperless record-keeping",
      content: "Track critical control points automatically and generate compliance reports in seconds."
    },
    {
      badge: "Operations",
      title: "Inventory Management",
      description: "Smart inventory tracking and ordering",
      content: "Reduce waste and optimize ordering with AI-powered inventory predictions and automatic reordering."
    },
    {
      badge: "Staff",
      title: "Training Management",
      description: "Digital training records and certifications",
      content: "Track employee training status, certifications, and schedule automated refresher courses."
    },
    {
      badge: "Analytics",
      title: "Performance Insights",
      description: "Data-driven operational intelligence",
      content: "Visualize trends, identify problem areas, and optimize operations with powerful dashboards."
    },
    {
      badge: "Mobile",
      title: "On-the-Go Access",
      description: "Complete restaurant control from anywhere",
      content: "Access your restaurant data, receive alerts, and manage operations from any device."
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {features.map((feature, index) => (
        <Card key={index}>
          <CardHeader>
            <Badge className="w-fit mb-2">{feature.badge}</Badge>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>
              {feature.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {feature.content}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
