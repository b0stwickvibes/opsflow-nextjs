'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';
import dynamic from 'next/dynamic';

const Play = dynamic(() => import('lucide-react').then(m => ({ default: m.Play })));
const Video = dynamic(() => import('lucide-react').then(m => ({ default: m.Video })));

export default function InteractiveDemoCTA() {
  useEffect(() => {
    registerComponentLayout('InteractiveDemoCTA', 'product' as any);
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <Badge variant="secondary" className="mb-2">Live Interactive Demo</Badge>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Experience OpsFlow AI in action</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Click through a real restaurant workflow. No registration required. See how our platform transforms daily operations in under 2 minutes.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/product/demo">
              <Play className="h-5 w-5 mr-2" />
              Start Live Demo
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/product/demo#demo-features">
              <Video className="h-5 w-5 mr-2" />
              Watch Overview
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

