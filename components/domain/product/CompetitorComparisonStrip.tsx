"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { registerComponentLayout } from "@/lib/style-system/layout-differentiation";

export default function CompetitorComparisonStrip() {
  useEffect(() => {
    registerComponentLayout("CompetitorComparisonStrip", "product" as any);
  }, []);

  const rows = [
    {
      title: "Traditional GPS (JOLT)",
      desc: "GPS‑only, poor indoor, spoofable",
    },
    {
      title: "Basic geofencing",
      desc: "Single method, limited indoor, no audit",
    },
    {
      title: "OpsFlow AI",
      desc: "Multi‑layered, anti‑spoofing, confidence scoring, full audit",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 grid gap-4 md:grid-cols-3">
        {rows.map(r => (
          <Card key={r.title} className="bg-muted/20">
            <CardHeader>
              <CardTitle className="text-base">{r.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{r.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

