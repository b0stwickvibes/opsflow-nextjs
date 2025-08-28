'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, ArrowRight, Home, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function DocsHomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const mainSections = [
    {
      title: 'No-code',
      items: [
        { title: 'Set up temperature monitoring', desc: 'Configure HACCP sensors without coding', href: '/docs/temperature-monitoring' },
        { title: 'Create compliance checklists', desc: 'Build food safety workflows visually', href: '/docs/compliance-checklists' },
        { title: 'Schedule staff tasks', desc: 'Automate recurring kitchen operations', href: '/docs/staff-scheduling' },
      ]
    },
    {
      title: 'OpsFlow-hosted',
      items: [
        { title: 'Use the restaurant dashboard', desc: 'Complete operations management interface', href: '/docs/dashboard-guide' },
        { title: 'Set up the kitchen portal', desc: 'Touch-friendly staff interface for tablets', href: '/docs/kitchen-portal' },
        { title: 'Configure alert workflows', desc: 'Temperature alerts and corrective actions', href: '/docs/alert-workflows' },
      ]
    },
    {
      title: 'For developers',
      items: [
        { title: 'API reference', badge: 'API', desc: 'Complete restaurant operations API', href: '/docs/api-reference' },
        { title: 'Development quickstart', desc: 'Get started with OpsFlow integrations', href: '/docs/quickstart' },
        { title: 'Browse our sample projects', desc: 'Example restaurant integrations', href: '/docs/samples' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Standalone Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-xl font-bold">
                opsflow <span className="font-normal text-muted-foreground">DOCS</span>
              </div>
              
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  className="h-9 bg-muted/50 pl-10 pr-16"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                  /
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                Ask AI
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm">Create account</Button>
              <Button variant="ghost" size="sm">Sign in</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation tabs */}
      <nav className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex gap-8">
            {[
              'Get started',
              'Operations', 
              'Compliance',
              'Integrations',
              'Analytics',
              'Developer resources',
              'APIs & SDKs',
              'Help'
            ].map((tab) => (
              <button
                key={tab}
                className="border-b-2 border-transparent py-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 first:border-primary first:text-primary"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Hero section */}
            <div className="mb-16">
              <h1 className="mb-4 text-4xl font-semibold tracking-tight">Documentation</h1>
              <p className="mb-8 max-w-2xl text-xl text-muted-foreground">
                Explore our guides and examples to integrate OpsFlow AI into your restaurant operations.
              </p>

              <div className="flex gap-4">
                <Button size="lg">
                  Get started with operations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Explore all products
                </Button>
              </div>
            </div>

            {/* Three columns */}
            <div className="grid gap-12 md:grid-cols-3">
              {mainSections.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-6 text-lg font-semibold">{section.title}</h3>
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group block"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-primary group-hover:underline">
                            {item.title}
                          </span>
                          {item.badge && (
                            <Badge variant="outline" className="text-[10px] px-1.5 py-0.5">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recently viewed */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Recently viewed
              </h3>
              <div className="space-y-3">
                <Link href="/docs/operations" className="block rounded p-2 hover:bg-accent/50">
                  <div className="text-sm font-medium text-primary hover:underline">Operations</div>
                  <div className="text-xs text-muted-foreground">Restaurant management workflows</div>
                </Link>
                <Link href="/docs/pos-integrations" className="block rounded p-2 hover:bg-accent/50">
                  <div className="text-sm font-medium text-primary hover:underline">POS integrations</div>
                  <div className="text-xs text-muted-foreground">Connect Square, Toast, Resy</div>
                </Link>
                <Link href="/docs/developer" className="block rounded p-2 hover:bg-accent/50">
                  <div className="text-sm font-medium text-primary hover:underline">Developer resources</div>
                  <div className="text-xs text-muted-foreground">APIs, SDKs, and technical guides</div>
                </Link>
              </div>
            </div>

            {/* API Keys */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                API Keys
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 text-xs text-muted-foreground">Publishable key</div>
                  <code className="block rounded bg-muted px-2 py-1 text-xs font-mono">
                    pk_test_5jRc3l...
                  </code>
                </div>
                <div>
                  <div className="mb-1 text-xs text-muted-foreground">Secret key</div>
                  <code className="block rounded bg-muted px-2 py-1 text-xs font-mono">
                    sk_test_5jRc3l...
                  </code>
                </div>
              </div>
              
              <div className="mt-4 rounded bg-accent/50 p-3">
                <div className="mb-1 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs font-medium">Sandbox</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Test equipment and sample data available
                </div>
              </div>
            </div>

            {/* Test card visual */}
            <div className="rounded-lg border bg-card p-4">
              <div className="mb-3 flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="text-sm font-medium">Test cards</span>
                <ArrowRight className="h-3 w-3" />
              </div>
              <div className="rounded border bg-background p-2">
                <div className="text-xs font-mono">4242 4242 4242 4242</div>
              </div>
            </div>

            {/* Back to main site */}
            <Link href="/">
              <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                <Home className="h-3 w-3" />
                <span className="text-xs">Back to OpsFlow</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
