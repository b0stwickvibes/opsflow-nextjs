"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check } from "lucide-react";

interface TabSpec {
  key: string;
  label: string;
  features: string[];
}

interface MarketingExploreTabsProps {
  heading?: string;
  subheading?: string;
  tabs: TabSpec[];
}

export function MarketingExploreTabs({ heading, subheading, tabs }: MarketingExploreTabsProps) {
  const first = tabs[0]?.key;
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {(heading || subheading) && (
          <div className="mb-10 text-center">
            {heading && <h2 className="text-3xl font-bold">{heading}</h2>}
            {subheading && <p className="mt-2 text-muted-foreground">{subheading}</p>}
          </div>
        )}
        <Tabs defaultValue={first} className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto">
            {tabs.map((t) => (
              <TabsTrigger key={t.key} value={t.key} className="whitespace-nowrap">
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((t) => (
            <TabsContent key={t.key} value={t.key} className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold">{t.label}</h3>
                <ul className="space-y-3">
                  {t.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 text-teal-700" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border bg-muted/30 p-6 h-72 grid place-items-center text-muted-foreground">
                {/* Replace with image/screenshot later */}
                <span>{t.label} preview</span>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

