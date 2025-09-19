"use client"

import React from "react"
import { Section, SectionContent } from "@/components/shared/layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChefHat,
  Shield,
  Thermometer,
  ClipboardCheck,
  Wine,
  Users,
  BarChart3,
  Coffee,
  Clock,
  TrendingUp,
  Building2,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import { INDUSTRY_THEMES, ROLE_THEMES, IndustryType, RoleType } from "@/lib/themes/industry-role"

interface IndustryRolePageProps {
  industry: IndustryType;
  role: RoleType;
}

export function IndustryRolePage({ industry, role }: IndustryRolePageProps) {
  const industryTheme = INDUSTRY_THEMES[industry];
  const roleTheme = ROLE_THEMES[role];

  const getIcon = (iconName: string) => {
    const icons = {
      ChefHat, Shield, Thermometer, ClipboardCheck,
      Wine, Users, BarChart3, Coffee, Clock,
      TrendingUp, Building2, Star
    };
    return icons[iconName as keyof typeof icons] || ChefHat;
  };

  return (
    <div className={`min-h-screen bg-background enterprise-hero-section section-padding-large overflow-hidden hero-ambient ${industryTheme.accent} ${industryTheme.energy}`}>
      {/* Hero Section */}
      <Section background="none" padding="none">
        <SectionContent maxWidth="full">
          <div className="text-center mb-16 motion-fade-in-up-320">
            {/* Industry + Role Badge */}
            <div className={`clerk-inspired-badge mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border ${roleTheme.badgeColor}`}>
              {React.createElement(getIcon(industryTheme.icons[0]), { className: "h-5 w-5" })}
              <span className="text-sm font-medium capitalize">
                {industry} {role} Experience
              </span>
            </div>

            {/* Dynamic Headline */}
            <h1 className="enterprise-headline heading-brand-gradient text-4xl md:text-6xl font-bold mb-6">
              {industryTheme.terminology[0]} Platform
            </h1>

            <p className="enterprise-body text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Specialized {industry} operations platform designed for {role}s, featuring {industryTheme.terminology[1].toLowerCase()},
              {industryTheme.terminology[2].toLowerCase()}, and {industryTheme.terminology[3].toLowerCase()}.
            </p>

            {/* Role-specific CTA */}
            <Button className={`${roleTheme.ctaStyle} hover-scale-103 cta-equal group`}>
              Get Started as {role.charAt(0).toUpperCase() + role.slice(1)}
              <ArrowRight className="h-4 w-4 ml-2 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
          </div>

          {/* Feature Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {industryTheme.terminology.slice(1).map((feature, index) => {
              const IconComponent = getIcon(industryTheme.icons[index + 1]);
              return (
                <div key={feature} className={`motion-fade-in-up-320 animation-delay-${(index + 1) * 100}`}>
                  <Card className="enterprise-card tile-hover h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <IconComponent className="h-6 w-6 text-primary enterprise-icon-primary" />
                        {feature}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Specialized {industry} {feature.toLowerCase()} tools designed for {role} workflows.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Role-specific Content */}
          <div className="text-center motion-fade-in-up-320 animation-delay-500">
            <div className="enterprise-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">
                Built for {role.charAt(0).toUpperCase() + role.slice(1)}s
              </h3>
              <p className="text-muted-foreground mb-6">
                {role === 'owner' && `Strategic oversight and enterprise-level insights for ${industry} ownership.`}
                {role === 'manager' && `Daily operations management and team coordination for ${industry} managers.`}
                {role === 'staff' && `Practical tools and workflows for ${industry} staff members.`}
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="font-semibold">Industry Specific</div>
                  <div className="text-sm text-muted-foreground">Tailored for {industry}</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="font-semibold">Role Optimized</div>
                  <div className="text-sm text-muted-foreground">Designed for {role}s</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="font-semibold">Premium Experience</div>
                  <div className="text-sm text-muted-foreground">Clerk.com inspired</div>
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>
    </div>
  );
}
