import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, HelpCircle, Code2, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionContent } from "@/components/shared/layout";

export const metadata: Metadata = {
  title: "Documentation — OpsFlow AI",
  description: "Complete documentation for restaurant operations management with OpsFlow AI. Get started with guides, API references, and support resources.",
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function DocsHomePage() {
  const quickStartSections = [
    {
      title: "Getting Started",
      description: "Set up your restaurant operations in 15 minutes",
      href: "/docs/getting-started/introduction",
      icon: Zap,
      badge: "Start Here",
      color: "bg-green-500/10 text-green-600 dark:text-green-400"
    },
    {
      title: "API Reference",
      description: "Complete REST API documentation for developers",
      href: "/docs/api/authentication",
      icon: Code2,
      badge: "Technical",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    },
    {
      title: "Operations Guide",
      description: "HACCP compliance and restaurant management workflows",
      href: "/docs/operations/dashboard",
      icon: Shield,
      badge: "Popular",
      color: "bg-primary/10 text-primary"
    }
  ];

  const supportResources = [
    {
      title: "Support Center",
      description: "Get help from our restaurant operations experts",
      href: "/docs/support/help-center",
      icon: HelpCircle
    },
    {
      title: "Contact Support",
      description: "24/7 assistance with implementation and troubleshooting",
      href: "/docs/support/contact",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header - matches your unified docs system */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <Section padding="none">
          <SectionContent>
            <div className="flex h-16 items-center justify-between">
              <div className="text-xl font-bold">
                opsflow <span className="font-normal text-muted-foreground">DOCS</span>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm">Create account</Button>
                <Button variant="ghost" size="sm">Sign in</Button>
              </div>
            </div>
          </SectionContent>
        </Section>
      </header>

      <Section padding="xl">
        <SectionContent maxWidth="6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Documentation Hub</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl mb-6">
              OpsFlow Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Everything you need to implement restaurant operations management with OpsFlow AI. 
              From quick setup guides to comprehensive API documentation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/docs/getting-started/introduction">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs/api/authentication">
                View API Docs
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Start Sections */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
            Choose Your Path
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {quickStartSections.map((section) => (
              <Card key={section.href} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${section.color}`}>
                      <section.icon className="h-8 w-8" />
                    </div>
                    <Badge variant="outline">{section.badge}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {section.description}
                  </p>
                  <Button asChild className="w-full">
                    <Link href={section.href}>
                      Explore {section.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
            Need Help?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {supportResources.map((resource) => (
              <Card key={resource.href} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      <resource.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {resource.description}
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={resource.href}>
                          Access Support
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Topics */}
        <section>
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10">
            <CardContent className="p-12 text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Explore All Documentation</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Browse our complete library of guides, tutorials, and references organized by topic and experience level.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "HACCP Compliance",
                  "Temperature Monitoring", 
                  "API Integration",
                  "Staff Management",
                  "Inventory Control",
                  "Compliance Reporting"
                ].map((topic) => (
                  <Badge key={topic} variant="secondary" className="text-sm px-3 py-1">
                    {topic}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
        </SectionContent>
      </Section>
    </div>
  );
}
