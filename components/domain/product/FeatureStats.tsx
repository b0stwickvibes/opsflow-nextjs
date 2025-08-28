"use client";

import NumberTicker from "@/components/enhanced/NumberTicker";
import { useEffect } from "react";
import { registerComponentLayout } from "@/lib/style-system/layout-differentiation";

export default function FeatureStats() {
  useEffect(() => {
    registerComponentLayout("FeatureStats", "product" as any);
  }, []);

  const items = [
    { label: "HACCP compliance", value: 99.8, suffix: "%", decimals: 1 },
    { label: "Time saved / week", value: 15, suffix: " hrs" },
    { label: "Waste reduction", value: 32, suffix: "%" },
    { label: "Restaurants", value: 5000, suffix: "+" },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((it) => (
            <div key={it.label} className="space-y-1">
              <NumberTicker
                value={it.value}
                suffix={it.suffix}
                decimals={(it as any).decimals || 0}
                className="text-primary font-bold text-3xl"
              />
              <div className="text-sm text-muted-foreground">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

