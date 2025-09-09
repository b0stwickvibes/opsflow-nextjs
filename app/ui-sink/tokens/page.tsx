"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ShimmerButton from "@/components/magicui/shimmer-button";
import AnimatedBeam from "@/components/magicui/animated-beam";

const SHADES = ["50","100","200","300","400","500","600","700","800","900","950"] as const;

function Swatch({ name, varName }: { name: string; varName: string }) {
  return (
    <div className="rounded-lg p-3 text-xs border" style={{ backgroundColor: `var(--${varName})` }}>
      <div className="font-medium text-foreground/80">{name}</div>
      <div className="opacity-70">--{varName}</div>
    </div>
  );
}

export default function TokensPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fromRef = useRef<HTMLDivElement | null>(null);
  const toRef = useRef<HTMLDivElement | null>(null);
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding-large">
        <div className="container space-y-12">
          <div>
            <div className="clerk-inspired-badge"><span>Tokens</span></div>
            <h1 className="enterprise-headline">Design Tokens</h1>
            <p className="enterprise-body">Active tokens and primitives used across OpsFlow — colors, surfaces, typography, and UI components.</p>
          </div>

          {/* Color scales */}
          <div className="space-y-6">
            <h2 className="text-display-sm">Color Scales</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Base */}
              <div className="space-y-3">
                <div className="text-sm font-medium">Base/Gray</div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {SHADES.map((s) => (
                    <Swatch key={s} name={s} varName={`base-${s}`} />
                  ))}
                </div>
              </div>
              {/* Primary (Blue) */}
              <div className="space-y-3">
                <div className="text-sm font-medium">Primary (Brand Blue)</div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {SHADES.map((s) => (
                    <Swatch key={s} name={s} varName={`primary-${s}`} />
                  ))}
                </div>
              </div>
              {/* Secondary */}
              <div className="space-y-3">
                <div className="text-sm font-medium">Secondary</div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {SHADES.map((s) => (
                    <Swatch key={s} name={s} varName={`secondary-${s}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Surfaces */}
          <div className="space-y-4">
            <h2 className="text-display-sm">Semantic Surfaces</h2>
            <div className="grid md:grid-cols-6 gap-3 text-sm">
              <div className="p-4 border rounded" style={{ backgroundColor: `var(--background)` }}>background</div>
              <div className="p-4 border rounded" style={{ backgroundColor: `var(--card)` }}>card</div>
              <div className="p-4 border rounded" style={{ backgroundColor: `var(--muted)` }}>muted</div>
              <div className="p-4 border rounded" style={{ backgroundColor: `var(--accent)` }}>accent</div>
              <div className="p-4 border rounded" style={{ backgroundColor: `var(--destructive)` }}>destructive</div>
              <div className="p-4 border rounded" style={{ backgroundColor: `var(--popover)` }}>popover</div>
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-4">
            <h2 className="text-display-sm">Typography</h2>
            <div className="space-y-3">
              <div className="enterprise-headline">enterprise-headline (responsive)</div>
              <div className="text-display-2xl">text-display-2xl</div>
              <div className="text-display-md">text-display-md</div>
              <div className="text-display-sm">text-display-sm</div>
              <p className="enterprise-body">enterprise-body — paragraph copy that pairs with the headline scale.</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <h2 className="text-display-sm">Buttons</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Variants</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sizes</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Badges */}
          <div className="space-y-4">
            <h2 className="text-display-sm">Badges</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            <h2 className="text-display-sm">Inputs</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader><CardTitle>Text Inputs</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <Input placeholder="Email" />
                  <Input placeholder="Search" />
                  <Textarea placeholder="Message" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Card Surface</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Use Card for grouped content and surface elevation.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* MagicUI */}
          <div className="space-y-4">
            <h2 className="text-display-sm">MagicUI</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader><CardTitle>Shimmer Button</CardTitle></CardHeader>
                <CardContent>
                  <ShimmerButton className="px-6">Shimmer CTA</ShimmerButton>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Animated Beam</CardTitle></CardHeader>
                <CardContent>
                  <div
                    ref={containerRef}
                    className="relative h-28 rounded-md border bg-muted/30"
                  >
                    {/* Endpoints */}
                    <div ref={fromRef} className="absolute left-4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary" />
                    <div ref={toRef} className="absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-secondary" />
                    <AnimatedBeam fromRef={fromRef} toRef={toRef} containerRef={containerRef} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
