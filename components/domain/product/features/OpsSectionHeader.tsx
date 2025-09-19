"use client";

import { cn } from "@/lib/utils";

interface OpsSectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function OpsSectionHeader({ eyebrow, title, description, align = "left", className }: OpsSectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div className={cn("mb-6", isCenter ? "text-center mx-auto" : "text-left", className)}>
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className={cn("mt-3 text-3xl font-semibold tracking-tight", isCenter && "mx-auto max-w-3xl")}>{title}</h2>
      {description ? (
        <p className={cn("text-muted-foreground mt-2", isCenter ? "mx-auto max-w-2xl" : "max-w-2xl")}>{description}</p>
      ) : null}
    </div>
  );
}

