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
import Image from "next/image";
import { marketingAssets, getAllAssets } from "@/lib/assets/marketing";

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

        {/* Public assets gallery (dynamic from manifest) */}
        <section className="space-y-8">
          <h2 className="text-xl font-semibold">Public Assets Preview (from manifest)</h2>

          {/* Heroes */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">Heroes</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {Object.values(marketingAssets.heroes).map((a, i) => (
                <div key={`hero-${i}`} className="rounded-lg border overflow-hidden">
                  <Image src={a.src} alt={a.alt} width={a.width} height={a.height} className="w-full h-auto object-cover" />
                  <div className="p-3 text-xs text-muted-foreground">{a.alt}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">Cards</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {Object.values(marketingAssets.cards).map((a, i) => (
                <div key={`card-${i}`} className="rounded-lg border overflow-hidden">
                  <Image src={a.src} alt={a.alt} width={a.width} height={a.height} className="w-full h-auto object-cover" />
                  <div className="p-3 text-xs text-muted-foreground">{a.alt}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">Features</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {Object.values(marketingAssets.features).map((a, i) => (
                <div key={`feature-${i}`} className="rounded-lg border overflow-hidden">
                  <Image src={a.src} alt={a.alt} width={a.width} height={a.height} className="w-full h-auto object-cover" />
                  <div className="p-3 text-xs text-muted-foreground">{a.alt}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">Industries</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Object.values(marketingAssets.industries).flatMap((grp:any) => Object.values(grp)).map((a:any, i:number) => (
                <div key={`industry-${i}`} className="rounded-lg border overflow-hidden">
                  <Image src={a.src} alt={a.alt} width={a.width} height={a.height} className="w-full h-auto object-cover" />
                  <div className="p-3 text-xs text-muted-foreground">{a.alt}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
