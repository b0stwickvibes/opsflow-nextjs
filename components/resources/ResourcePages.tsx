"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DynamicIcon } from "@/components/ui/dynamic-icon";

// Scalable analytics hook - ready for multiple providers
function usePageTracking(eventName: string, pageTitle: string) {
  // Production: integrate with Mixpanel, PostHog, etc.
  // Development: console logging only
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${eventName}: ${pageTitle}`);
  }
}

// Reusable error boundary ready component
function PageSection({ 
  title, 
  children, 
  subtitle,
  className = "" 
}: { 
  title: string; 
  subtitle?: string; 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 ${className}`}>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">{title}</h2>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

// Scalable search component - ready for Algolia integration
function SearchSection({ 
  badge, 
  title, 
  subtitle, 
  placeholder,
  onSearch 
}: { 
  badge: string; 
  title: string; 
  subtitle?: string; 
  placeholder: string;
  onSearch?: (query: string) => void;
}) {
  const [query, setQuery] = useState("");
  
  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <Badge variant="secondary" className="mb-4">{badge}</Badge>
      <h1 className="text-4xl font-semibold tracking-tight mb-4">{title}</h1>
      {subtitle && <p className="text-muted-foreground text-lg mb-8 max-w-3xl">{subtitle}</p>}
      
      <div className="flex items-center gap-3 max-w-2xl">
        <div className="relative flex-1">
          <DynamicIcon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder={placeholder} 
            className="pl-10 h-12" 
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <Button className="h-12">Search</Button>
      </div>
    </section>
  );
}

// Production-ready loading states
function LoadingCard() {
  return (
    <Card className="animate-pulse">
      <CardContent className="p-6">
        <div className="h-4 bg-muted rounded mb-2"></div>
        <div className="h-3 bg-muted rounded w-2/3"></div>
      </CardContent>
    </Card>
  );
}

// Error boundary component
function ErrorFallback({ error }: { error: Error }) {
  return (
    <Card className="border-destructive">
      <CardContent className="p-6">
        <h3 className="font-semibold text-destructive mb-2">Something went wrong</h3>
        <p className="text-sm text-muted-foreground">
          We're having trouble loading this section. Please try refreshing the page.
        </p>
        <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
          Refresh Page
        </Button>
      </CardContent>
    </Card>
  );
}

// ----------------------------
// SaaS-READY HELP CENTER
// ----------------------------
export function HelpCenterPage() {
  usePageTracking('resources_help_center', 'Restaurant Operations Help Center');
  
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const quickActions = [
    { 
      title: "Search Knowledge Base", 
      desc: "Find HACCP guides instantly",
      icon: "Search",
      href: "/resources/help/search"
    },
    { 
      title: "Contact Support", 
      desc: "Chat with operations experts",
      icon: "MessageSquare",
      href: "/resources/contact"
    },
    { 
      title: "Video Tutorials", 
      desc: "Step-by-step walkthroughs",
      icon: "Play",
      href: "/resources/help/videos"
    },
    { 
      title: "System Status", 
      desc: "Check service health",
      icon: "Activity",
      href: "/status"
    }
  ];

  const resourceCategories = [
    {
      title: "HACCP Compliance Templates",
      desc: "Complete food safety SOPs, temperature monitoring logs, and audit preparation checklists for full compliance.",
      icon: "Shield",
      badge: "150+ Templates",
      href: "/resources/templates"
    },
    {
      title: "Operations Guides", 
      desc: "In-depth articles on inventory optimization, staff scheduling, compliance best practices, and efficiency improvements.",
      icon: "BookOpen",
      badge: "127+ Articles",
      href: "/resources/blog"
    },
    {
      title: "Staff Training Center",
      desc: "Comprehensive training programs covering food safety, customer service, leadership, and operational excellence.",
      icon: "GraduationCap",
      badge: "45+ Courses", 
      href: "/resources/help/training"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <SearchSection
        badge="Help & Resources"
        title="Restaurant Operations Support Center"
        subtitle="Everything you need to master restaurant operations with OpsFlow—HACCP guides, staff training, inventory templates, and expert support."
        placeholder="Search HACCP compliance, temperature logs, staff scheduling..."
      />
      
      <PageSection title="Quick actions">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Card key={action.title} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit mx-auto mb-4">
                  <DynamicIcon name={action.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">{action.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{action.desc}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={action.href}>
                    View
                    <DynamicIcon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageSection>
      
      <PageSection title="Restaurant resource categories">
        <div className="grid gap-6 lg:grid-cols-3">
          {resourceCategories.map((category) => (
            <Card key={category.title} className="group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <DynamicIcon name={category.icon} className="h-8 w-8" />
                  </div>
                  <Badge variant="outline">{category.badge}</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-6">{category.desc}</p>
                <Button asChild>
                  <Link href={category.href}>
                    Learn More
                    <DynamicIcon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection title="Get expert support">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="p-4 bg-primary-foreground/10 rounded-2xl w-fit mx-auto mb-6">
                <DynamicIcon name="HeadphonesIcon" className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Need help with restaurant operations?</h3>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Get personalized guidance from our restaurant operations specialists and HACCP compliance experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <DynamicIcon name="MessageSquare" className="h-5 w-5 mr-2" />
                  Chat with Operations Expert
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <DynamicIcon name="Calendar" className="h-5 w-5 mr-2" />
                  Schedule HACCP Consultation
                </Button>
              </div>
              <div className="mt-6 text-sm text-primary-foreground/70">
                Available Monday–Sunday, 6 AM–12 AM EST • Average response: 3 minutes
              </div>
            </div>
          </CardContent>
        </Card>
      </PageSection>
    </main>
  );
}

// ----------------------------
// SaaS-READY DOCUMENTATION
// ----------------------------
export function DocumentationPage() {
  usePageTracking('resources_documentation', 'Restaurant Operations Documentation');
  
  const [copied, setCopied] = useState<string | null>(null);
  
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeExample = `// Initialize OpsFlow client
import { OpsFlow } from '@opsflow/node';

const opsflow = new OpsFlow({
  apiKey: 'sk_test_5jRc3l...',
  environment: 'sandbox'
});

// Create temperature reading
const reading = await opsflow.temperatures.create({
  restaurant_id: 'rest_12345',
  equipment_id: 'eq_cooler_01', 
  temperature: 38.2,
  unit: 'fahrenheit',
  location: 'walk-in-cooler',
  recorded_at: new Date().toISOString()
});`;

  return (
    <main className="min-h-screen bg-background">
      <SearchSection
        badge="Technical Documentation"
        title="Restaurant Operations Documentation"
        subtitle="Complete technical guides, API references, and implementation guides for restaurant operations management with OpsFlow."
        placeholder="Search API endpoints, HACCP templates, integration guides..."
      />
      
      <PageSection title="Get started">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <Badge variant="secondary" className="mb-4">15 min setup</Badge>
                <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-foreground/20 rounded-lg">
                  <DynamicIcon name="Zap" className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Quick Start Guide</h3>
                  <p className="text-primary-foreground/90">Set up temperature monitoring and HACCP compliance in 15 minutes</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <DynamicIcon name="CheckCircle" className="h-5 w-5" />
                  <span className="text-sm">Install temperature sensors</span>
                </div>
                <div className="flex items-center gap-3">
                  <DynamicIcon name="CheckCircle" className="h-5 w-5" />
                  <span className="text-sm">Configure HACCP workflows</span>
                </div>
                <div className="flex items-center gap-3">
                  <DynamicIcon name="CheckCircle" className="h-5 w-5" />
                  <span className="text-sm">Connect POS system</span>
                </div>
              </div>
              
              <Button variant="secondary" asChild>
                <Link href="/resources/docs/quickstart">
                  Start Setup Guide
                  <DynamicIcon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="relative">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Temperature monitoring example</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy(codeExample)}
                className="h-8 w-8 p-0"
              >
                {copied === codeExample ? <DynamicIcon name="Check" className="h-4 w-4" /> : <DynamicIcon name="Copy" className="h-4 w-4" />}
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <pre className="overflow-x-auto bg-muted p-4 text-xs font-mono">
                <code>{codeExample}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </PageSection>
      
      <PageSection title="API reference">
        <Card>
          <CardContent className="p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary text-primary-foreground rounded-lg">
                    <DynamicIcon name="FileText" className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold">Complete API Reference</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Comprehensive REST API documentation for integrating restaurant operations data, 
                  temperature monitoring, and compliance reporting into your existing systems.
                </p>
                
                <div className="grid gap-4 sm:grid-cols-2 mb-6">
                  {[
                    { icon: "Globe", title: "REST Endpoints", desc: "47 endpoints" },
                    { icon: "Zap", title: "Webhook Events", desc: "Real-time alerts" },
                    { icon: "Shield", title: "Authentication", desc: "API key & OAuth" },
                    { icon: "Building2", title: "SDK Support", desc: "Node, Python, PHP" }
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <DynamicIcon name={item.icon} className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button asChild>
                    <Link href="/resources/docs/api">
                      Browse API Docs
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resources/docs/webhooks">
                      Webhook Guide
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-muted rounded-lg p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="ml-2 text-muted-foreground">Terminal</span>
                </div>
                <div className="space-y-2">
                  <div><span className="text-primary">$</span> curl https://api.opsflow.com/v1/temperatures</div>
                  <div className="text-muted-foreground"># Get temperature readings</div>
                  <div><span className="text-primary">$</span> curl -X POST https://api.opsflow.com/v1/haccp/logs</div>
                  <div className="text-muted-foreground"># Create compliance log entry</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </PageSection>
    </main>
  );
}

// Simple blog/case studies/templates - following same pattern
export function BlogPage() {
  usePageTracking('resources_blog', 'Restaurant Operations Blog');
  return (
    <main className="min-h-screen bg-background">
      <SearchSection
        badge="Industry Insights"
        title="Restaurant Operations Blog"
        subtitle="Expert insights on food safety, efficiency optimization, and industry trends from restaurant operations specialists."
        placeholder="Search articles on HACCP, inventory, staff management..."
      />
      {/* Content sections following same pattern */}
    </main>
  );
}

export function CaseStudiesPage() {
  usePageTracking('resources_case_studies', 'Restaurant Success Stories');
  return (
    <main className="min-h-screen bg-background">
      <SearchSection
        badge="Customer Success"
        title="Restaurant Success Stories"
        subtitle="Real results from restaurants using OpsFlow to improve operations, ensure compliance, and increase profitability."
        placeholder="Search by restaurant type, challenge, or outcome..."
      />
    </main>
  );
}

export function TemplatesPage() {
  usePageTracking('resources_templates', 'Restaurant Operations Templates');
  
  // Sample template data - in production this would come from API
  const templates = [
    {
      id: "haccp-temp-log",
      title: "HACCP Temperature Monitoring Log",
      description: "Complete temperature tracking system for all equipment with automatic compliance alerts.",
      category: "HACCP",
      industry: "All",
      format: "Excel",
      downloads: 2847,
      rating: 4.9,
      lastUpdated: "2024-08-15",
      premium: false,
      featured: true,
      tags: ["Temperature", "Compliance", "Audit", "FDA"],
      href: "/templates/haccp-temperature-log"
    },
    {
      id: "kitchen-safety-checklist",
      title: "Kitchen Safety & Sanitation Checklist",
      description: "Daily, weekly, and monthly kitchen safety protocols with visual inspection guides.",
      category: "Safety",
      industry: "Restaurant",
      format: "PDF",
      downloads: 3291,
      rating: 4.8,
      lastUpdated: "2024-08-20",
      premium: false,
      featured: true,
      tags: ["Safety", "Sanitation", "Daily Tasks", "Kitchen"],
      href: "/templates/kitchen-safety-checklist"
    },
    {
      id: "inventory-management",
      title: "Restaurant Inventory Management System",
      description: "Complete inventory tracking with cost analysis, waste reduction metrics, and automated reorder points.",
      category: "Inventory",
      industry: "Restaurant",
      format: "Excel",
      downloads: 1923,
      rating: 4.7,
      lastUpdated: "2024-08-18",
      premium: true,
      featured: false,
      tags: ["Inventory", "Cost Control", "Waste", "Ordering"],
      href: "/templates/inventory-management"
    }
  ];
  
  return (
    <main className="min-h-screen bg-background">
      <SearchSection
        badge="Templates & SOPs"
        title="Restaurant Operations Templates"
        subtitle="150+ ready-to-use HACCP templates, SOPs, and checklists designed by compliance experts for immediate implementation."
        placeholder="Search templates by category, compliance type, or equipment..."
      />
      
      <PageSection title="Popular Templates" className="pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.id} className="group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <DynamicIcon name="FileText" className="h-6 w-6" />
                  </div>
                  <Badge variant="outline">{template.format}</Badge>
                  {template.featured && (
                    <Badge variant="secondary" className="text-xs">
                      <DynamicIcon name="Star" className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{template.title}</h3>
                <p className="text-muted-foreground mb-4">{template.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {template.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <DynamicIcon name="Download" className="h-3 w-3" />
                      <span>{template.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DynamicIcon name="Star" className="h-3 w-3" />
                      <span>{template.rating}</span>
                    </div>
                  </div>
                  <Button size="sm" asChild>
                    <Link href={template.href}>
                      Download
                      <DynamicIcon name="Download" className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageSection>
      
      <PageSection title="All Categories">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "HACCP Compliance", count: 45, icon: "Shield", href: "/resources/templates?category=HACCP" },
            { name: "Safety Protocols", count: 38, icon: "CheckCircle", href: "/resources/templates?category=Safety" },
            { name: "Training Materials", count: 27, icon: "GraduationCap", href: "/resources/templates?category=Training" },
            { name: "Inventory Management", count: 22, icon: "Activity", href: "/resources/templates?category=Inventory" }
          ].map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-primary/10 text-primary rounded-2xl w-fit mx-auto mb-4">
                  <DynamicIcon name={category.icon} className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{category.count} templates</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={category.href}>Browse Category</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageSection>
    </main>
  );
}

export function ContactSupportPage() {
  usePageTracking('resources_contact_support', 'Contact Restaurant Operations Support');
  return (
    <main className="min-h-screen bg-background">
      <SearchSection
        badge="Support"
        title="Contact Restaurant Operations Support"
        subtitle="Get help from our restaurant operations experts—choose the support channel that matches your urgency and needs."
        placeholder="Search support topics..."
      />
    </main>
  );
}
