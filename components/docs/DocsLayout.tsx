'use client';

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import navigation from '../../docs/navigation.json';
import ChatWidget from '@/components/shared/ai/ChatWidget';

function AskAIContainer() {
  return (
    <ChatWidget onClose={() => {
      const el = document.getElementById('docs-ask-ai');
      if (el) el.classList.add('hidden');
    }} />
  );
}

interface DocsLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  slug?: string[];
}

interface NavigationSection {
  title: string;
  path: string;
  pages: Array<{
    title: string;
    path: string;
    file: string;
  }>;
}

export function DocsLayout({ children, title, description, slug }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const currentPath = pathname || '/docs';
  
  // Determine header title based on current section
  const getHeaderTitle = () => {
    if (currentPath.includes('/support')) {
      return <>opsflow <span className="font-normal text-primary">SUPPORT</span></>;
    }
    return <>opsflow <span className="font-normal text-muted-foreground">DOCS</span></>;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Exact match to resources/docs */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-xl font-bold">
                {getHeaderTitle()}
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
              <Button variant="outline" size="sm" onClick={() => setSidebarOpen(false)} asChild>
                <a href="#ask-ai" onClick={(e) => { e.preventDefault(); const el = document.getElementById('docs-ask-ai'); if (el) el.classList.toggle('hidden'); }}>
                  Ask AI
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </Button>
              <Button variant="ghost" size="sm">Create account</Button>
              <Button variant="ghost" size="sm">Sign in</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu button for sidebar */}
      <div className="lg:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed top-4 left-4 z-50 p-2 text-muted-foreground hover:text-foreground bg-background/80 backdrop-blur rounded-md border border-border"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-30 w-80 transform border-r border-border/60 
          bg-card/95 backdrop-blur-xl transition-transform lg:relative lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex h-full flex-col">
            {/* Sidebar header */}
            <div className="flex h-16 items-center gap-3 border-b border-border/40 px-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm">
                <span className="text-xs font-bold text-primary">📚</span>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-foreground">Documentation</h2>
                <p className="text-xs text-muted-foreground">v2.1.0</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-6">
              <div className="space-y-8">
                {navigation.sections.map((section: NavigationSection) => (
                  <div key={section.path}>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.pages.map((page) => {
                        const isActive = currentPath === page.path;
                        return (
                          <li key={page.path}>
                            <Link
                              href={page.path}
                              className={`
                                group flex items-center rounded-lg px-3 py-2 text-sm font-medium 
                                transition-all duration-200 hover:translate-x-1
                                ${isActive 
                                  ? 'bg-gradient-to-r from-primary/15 to-secondary/10 text-primary border-l-2 border-primary' 
                                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                                }
                              `}
                              onClick={() => setSidebarOpen(false)}
                            >
                              {page.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </nav>

            {/* Sidebar footer */}
            <div className="border-t border-border/40 p-6">
              <div className="rounded-lg bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 p-4 backdrop-blur-sm">
                <h4 className="text-sm font-semibold text-foreground mb-1">Need Help?</h4>
                <p className="text-xs text-muted-foreground mb-3">
                  Get support from our team
                </p>
                <Link
                  href="/docs/support/contact"
                  className="inline-flex items-center text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Contact Support
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 lg:pl-0">
          {/* Ask AI flyout */}
          <div id="docs-ask-ai" className="hidden fixed bottom-4 right-4 z-50">
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            {/* Chat widget */}
            {/* Using dynamic import would be overkill here; component is light. */}
            <div className="relative">
              <AskAIContainer />
            </div>
          </div>

          <div className="mx-auto max-w-4xl p-6 lg:p-8">
            {/* Breadcrumbs */}
            {slug && slug.length > 0 && (
              <nav className="mb-8 flex items-center space-x-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/docs" className="hover:text-primary transition-colors">
                  Documentation
                </Link>
                {slug.map((segment, index) => (
                  <React.Fragment key={index}>
                    <span>/</span>
                    <span className={index === slug.length - 1 ? 'text-foreground font-medium' : 'hover:text-primary transition-colors'}>
                      {segment.replace('-', ' ')}
                    </span>
                  </React.Fragment>
                ))}
              </nav>
            )}

            {/* Page header */}
            {(title || description) && (
              <div className="mb-12">
                {title && (
                  <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                    {title}
                  </h1>
                )}
                {description && (
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
            )}

            {/* Content */}
            <div className="prose prose-gray max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border">
              {children}
            </div>

            {/* Page footer */}
            <footer className="mt-16 border-t border-border/40 pt-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <div className="flex gap-4 text-sm">
                  <Link
                    href="https://github.com/opsflow/docs"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Edit on GitHub
                  </Link>
                  <Link
                    href="/docs/support/contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Report an Issue
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
