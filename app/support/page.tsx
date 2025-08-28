'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Home, HelpCircle, MessageSquare, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const popularArticles = [
    {
      title: 'Trouble with temperature sensors?',
      description: 'Your sensors connect to the equipment monitoring system. Reset your connection if needed and verify two-step authentication is configured...',
      tags: ['HACCP', 'Equipment', 'Dashboard']
    },
    {
      title: 'Setting up your first compliance check? What you need to know',
      description: 'This guide helped 95% of restaurant managers set up their HACCP workflow. There is a 7-14 day waiting period for the first audit. This delay is necessary for compliance...',
      tags: ['Compliance', 'HACCP']
    },
    {
      title: 'Add staff accounts for kitchen operations',
      description: 'This guide helped 93% of restaurant managers solve their issue. To give kitchen staff access, you must have staff accounts linked to your OpsFlow account through the...',
      tags: ['Staff', 'Getting started', 'Operations']
    },
    {
      title: 'Late or missing temperature readings',
      description: 'If a temperature reading hasn\'t arrived according to its expected schedule, there can be several reasons. Check both your Dashboard and email to see...',
      tags: ['Temperature', 'HACCP']
    },
    {
      title: 'Can\'t complete compliance authentication?',
      description: 'Try authenticating with your backup code or removing two-step authentication from your account. Lost your phone, changed your phone number, or having...',
      tags: ['Compliance', 'Authentication']
    }
  ];

  const popularTopics = [
    'HACCP', 'Staff accounts', 'Multi-location', 'Billing', 'POS integration', 'Inspections',
    'Getting started', 'Reports', 'Equipment', 'Compliance', 'Privacy',
    'Corrections', 'Health codes', 'Third-party integrations', 'Certification'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Standalone Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold">
              opsflow <span className="font-normal text-primary">SUPPORT</span>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/resources/docs">
                <Button variant="ghost" size="sm">Docs</Button>
              </Link>
              <Button variant="outline" size="sm">APIs & SDKs</Button>
              <Button variant="ghost" size="sm">Create account</Button>
              <Button variant="ghost" size="sm">Sign in</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Hero section */}
            <div className="mb-12">
              <h1 className="mb-8 text-4xl font-semibold">How can we help?</h1>
              
              <div className="relative max-w-2xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search help articles..."
                  className="h-14 pl-12 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Popular articles */}
            <div>
              <h2 className="mb-6 text-lg font-semibold">Popular articles</h2>
              <div className="space-y-6">
                {popularArticles.map((article, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <HelpCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Link href="#" className="group">
                        <h3 className="mb-2 text-base font-medium group-hover:text-primary">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                        {article.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, tagIndex) => (
                          <Link
                            key={tagIndex}
                            href="#"
                            className="text-xs text-primary hover:underline"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Popular topics */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
                Popular topics
              </h3>
              <div className="space-y-2">
                {popularTopics.map((topic, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="block text-sm text-primary hover:underline"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact support */}
            <div className="rounded-lg border bg-card p-4">
              <h3 className="mb-3 text-sm font-semibold">Contact support</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                24×7 help from our restaurant operations support staff
              </p>
              
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <MessageSquare className="h-3 w-3" />
                  <span className="text-xs">Live chat</span>
                </Button>
                
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Phone className="h-3 w-3" />
                  <span className="text-xs">Schedule call</span>
                </Button>
                
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Mail className="h-3 w-3" />
                  <span className="text-xs">Email support</span>
                </Button>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>Average response: 3 minutes</span>
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
