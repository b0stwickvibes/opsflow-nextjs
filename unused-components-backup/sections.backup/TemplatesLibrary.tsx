'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";
import { trackEvent } from "@/lib/utils/features";

const templates = [
  { name: "Opening Checklist", tasks: 23 },
  { name: "Closing Checklist", tasks: 31 },
  { name: "Food Safety Audit", tasks: 47 },
  { name: "Kitchen Deep Clean", tasks: 38 },
  { name: "Incident Report", tasks: 15 },
  { name: "Equipment Inspection", tasks: 29 }
];

export default function TemplatesLibrary() {
  const handleTemplateDownload = (templateName: string) => {
    trackEvent('TEMPLATE_DOWNLOADED', { template_name: templateName });
  };

  return (
    <section className="relative py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-green-100/30 dark:bg-green-900/10 blur-3xl opacity-40" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Ready-to-Use Templates
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Restaurant Templates Library
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started fast with a comprehensive library of restaurant-specific checklists, SOPs, and workflow templates—100% customizable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {templates.map((template, index) => (
            <Card key={template.name} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md" style={{ animationDelay: `${index * 0.05}s` }}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="group-hover:text-primary transition-colors duration-300">
                    {template.name}
                  </span>
                  <Badge variant="secondary">{template.tasks} tasks</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start gap-2 group-hover:bg-primary/10 transition-colors duration-300"
                  onClick={() => handleTemplateDownload(template.name)}
                >
                  <Download className="h-4 w-4" />
                  Use Template
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Templates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Customizable</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5min</div>
            <div className="text-sm text-muted-foreground">Setup</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => trackEvent('CTA_CLICKED', { cta: 'browse_templates', location: 'templates_section' })}
          >
            <ExternalLink className="h-5 w-5" />
            Browse All Templates
          </Button>
        </div>
      </div>
    </section>
  );
}