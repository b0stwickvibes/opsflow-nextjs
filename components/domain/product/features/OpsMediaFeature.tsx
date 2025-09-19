"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface Media {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface OpsMediaFeatureProps {
  media: Media;
  items: Array<{ icon: React.ElementType; label: string }>;
  reverse?: boolean;
  className?: string;
}

export function OpsMediaFeature({ media, items, reverse = false, className }: OpsMediaFeatureProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2", className)}>
      <div className={cn("relative aspect-[4/3] overflow-hidden rounded-lg border", reverse ? "md:order-2" : "")}>
        <Image src={media.src} alt={media.alt} fill className="object-cover" />
      </div>
      <ul className={cn("space-y-3 text-sm", reverse ? "md:order-1" : "")}>        
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-start gap-2">
            <Icon className="mt-0.5 h-4 w-4 text-primary" />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

