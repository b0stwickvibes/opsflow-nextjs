"use client"

import { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Shield, Zap, Clock, Heart, Users, Target, LifeBuoy, AlertCircle, BarChart3 } from "lucide-react"

// Define a map of icon names to components
const iconMap = {
  Shield,
  Zap,
  Clock,
  Heart,
  Users,
  Target,
  LifeBuoy,
  AlertCircle,
  BarChart3,
  ArrowRight
}

type IconName = keyof typeof iconMap

interface FeatureCardProps {
  iconName: IconName
  title: string
  description: string
  link?: string
  linkText?: string
  className?: string
}

export function FeatureCard({
  iconName,
  title,
  description,
  link,
  linkText = "Learn more",
  className = ""
}: FeatureCardProps) {
  const Icon = iconMap[iconName]
  
  return (
    <Card className={`border-border ${className}`}>
      <CardContent className="pt-6">
        <Icon className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        {link && (
          <Link href={link} className="text-primary hover:underline inline-flex items-center">
            {linkText}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </CardContent>
    </Card>
  )
}
