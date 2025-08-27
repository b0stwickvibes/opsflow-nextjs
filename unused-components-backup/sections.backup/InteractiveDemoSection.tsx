'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, Monitor } from "lucide-react";
import { trackEvent } from "@/lib/utils/features";

export default function InteractiveDemoSection() {
  return (
    <section className="relative py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-100/30 dark:bg-blue-900/10 blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-100/40 dark:bg-indigo-900/10 blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Live Interactive Demo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience OpsFlow AI in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Click through a real restaurant workflow. No registration required. See how our platform transforms daily operations in under 2 minutes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => trackEvent('CTA_CLICKED', { cta: 'start_demo', location: 'demo_section' })}
          >
            <PlayCircle className="h-5 w-5" />
            Start Live Demo
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2"
            onClick={() => trackEvent('CTA_CLICKED', { cta: 'watch_overview', location: 'demo_section' })}
          >
            <Monitor className="h-5 w-5" />
            Watch Overview
          </Button>
        </div>
      </div>
    </section>
  );
}