'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';

const TEMPLATES = [
  { title: 'Opening Checklist', count: 23 },
  { title: 'Closing Checklist', count: 31 },
  { title: 'Food Safety Audit', count: 47 },
  { title: 'Kitchen Deep Clean', count: 38 },
  { title: 'Incident Report', count: 15 },
  { title: 'Equipment Inspection', count: 29 },
];

export function TemplatesPromo() {
  useEffect(() => {
    registerComponentLayout('TemplatesPromo', 'product' as any);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-2">Ready-to-Use Templates</Badge>
          <h2 className="text-3xl font-bold">Restaurant Templates Library</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-2">
            Get started fast with a comprehensive library of restaurant-specific checklists, SOPs, and workflow templates—100% customizable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEMPLATES.map((t) => (
            <Card key={t.title}>
              <CardHeader>
                <CardTitle className="text-lg">{t.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{t.count} tasks</CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>50+ templates</span>
            <span>•</span>
            <span>100% customizable</span>
            <span>•</span>
            <span>5min setup</span>
            <span>•</span>
            <span>24/7 support</span>
          </div>
          <Button asChild>
            <Link href="/resources/templates">Browse All Templates</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default TemplatesPromo;

