// app/ui-sink/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { PaletteSelect } from "@/components/ui/palette-select";
import { CheckCircle, AlertCircle, Settings, Home } from "lucide-react";
import UITestPage from "@/components/pages/UITestPage";

export default function UISink() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">UI Component Sink</h1>
              <Badge variant="secondary">Testing Ground</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="/ui-sink/templates">
                <Button variant="outline" size="sm">Open Template Catalog</Button>
              </Link>
              <PaletteSelect />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-12">
        <UITestPage />

        {/* Public assets gallery */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Public Assets Preview</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-sm text-muted-foreground">Hero Placeholders (16:9)</h3>
              <div className="grid gap-4">
                <img src="/images/marketing/heroes/opsflow-abstract-hero-01.svg" alt="Hero 01" className="w-full rounded-lg border" />
                <img src="/images/marketing/heroes/opsflow-abstract-hero-02.svg" alt="Hero 02" className="w-full rounded-lg border" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm text-muted-foreground">Card Placeholders (1:1)</h3>
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/marketing/cards/opsflow-abstract-card-01.svg" alt="Card 01" className="w-full rounded-lg border" />
                <img src="/images/marketing/cards/opsflow-abstract-card-02.svg" alt="Card 02" className="w-full rounded-lg border" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
