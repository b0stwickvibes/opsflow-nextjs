"use client";

import { cn } from "@/lib/utils";

interface Item {
  icon: React.ElementType;
  title: string;
  description?: string;
}

type Energy = "subtle" | "balanced" | "bold";

interface OpsFeatureGridProps {
  items: Item[];
  columns?: 2 | 3 | 4;
  className?: string;
  highlightIndex?: number; // Marketing Playbook: one ambient tile per section
  energy?: Energy; // Controls ambient intensity
}

export function OpsFeatureGrid({ items, columns = 4, className, highlightIndex = -1, energy = "balanced" }: OpsFeatureGridProps) {
  const colClass = columns === 2 ? "md:grid-cols-2" : columns === 3 ? "md:grid-cols-3" : "md:grid-cols-4";

  const ambientMap: Record<Energy, string> = {
    subtle: "bg-primary/5 border-primary/20 shadow-sm",
    balanced: "bg-primary/7 border-primary/30 shadow-[0_10px_30px_-15px_rgb(0_0_0_/_0.35)]",
    bold: "bg-primary/10 border-primary/40 shadow-[0_18px_60px_-25px_rgb(0_0_0_/_0.45)]",
  } as const;

  return (
    <div className={cn("grid gap-6", colClass, className)}>
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isAmbient = idx === highlightIndex;
        return (
          <div
            key={item.title}
            className={cn(
              "rounded-xl border p-5 transition-transform duration-200 ease-out focus-within:ring-2 focus-within:ring-primary/60",
              "hover:scale-[1.02]",
              isAmbient ? ambientMap[energy] : "bg-background border-border"
            )}
          >
            <div className="flex items-start gap-3">
              <div className={cn("flex size-8 items-center justify-center rounded-md", isAmbient ? "bg-primary text-primary-foreground/90" : "bg-primary/10 text-primary")}>                
                <Icon className="size-4" />
              </div>
              <div>
                <h3 className="font-semibold leading-tight">{item.title}</h3>
                {item.description ? (
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{item.description}</p>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

