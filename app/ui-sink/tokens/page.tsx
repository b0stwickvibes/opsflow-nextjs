"use client";
import React from "react";

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
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding-large">
        <div className="container space-y-10">
          <div>
            <div className="clerk-inspired-badge"><span>Tokens</span></div>
            <h1 className="enterprise-headline">Design Tokens</h1>
            <p className="enterprise-body">Color scales, semantic surfaces, and typography examples.</p>
          </div>

          {/* Color scales */}
          <div className="space-y-6">
            <h2 className="text-display-sm">Color Scales</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Base */}
              <div className="space-y-3">
                <div className="text-sm font-medium">Base</div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {SHADES.map((s) => (
                    <Swatch key={s} name={s} varName={`base-${s}`} />
                  ))}
                </div>
              </div>
              {/* Primary */}
              <div className="space-y-3">
                <div className="text-sm font-medium">Primary</div>
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
            <div className="grid md:grid-cols-5 gap-3 text-sm">
              <div className="p-4 border rounded" style={{ backgroundColor: `var(--background)` }}>background</div>
              <div className="p-4 border rounded" style={{ backgroundColor: `var(--card)` }}>card</div>
              <div className="p-4 border rounded" style={{ backgroundColor: `var(--muted)` }}>muted</div>
              <div className="p-4 border rounded" style={{ backgroundColor: `var(--accent)` }}>accent</div>
              <div className="p-4 border rounded" style={{ backgroundColor: `var(--destructive)` }}>destructive</div>
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
        </div>
      </section>
    </main>
  );
}
