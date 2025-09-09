"use client";
import React from "react";
import { OPSFLOW_SECTIONS } from "@/components/sections/opsflow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TemplateCatalogPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding-large">
        <div className="container space-y-8">
          <div>
            <div className="clerk-inspired-badge mb-2"><span>Template Catalog</span></div>
            <h1 className="enterprise-headline">OpsFlow Section Library</h1>
            <p className="enterprise-body mt-2">Preview and copy standardized sections. Click into a card to see the live section below.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {OPSFLOW_SECTIONS.map(({ key, title, component: Section }) => (
              <Card key={key} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-display-sm">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <Section />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
