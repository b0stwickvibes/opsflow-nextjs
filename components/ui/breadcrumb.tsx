"use client";

import * as React from "react";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

export default function Breadcrumb({ 
  items, 
  showHome = true, 
  className 
}: BreadcrumbProps) {
  const allItems = showHome 
    ? [{ label: "Home", href: "/" }, ...items]
    : items;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
    >
      <ol className="flex items-center space-x-1">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isHome = showHome && index === 0;

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight 
                  className="h-4 w-4 mx-2 text-muted-foreground/60" 
                  aria-hidden="true"
                />
              )}
              
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors font-medium"
                >
                  <span className="flex items-center gap-1">
                    {isHome && <Home className="h-3 w-3" />}
                    {item.label}
                  </span>
                </Link>
              ) : (
                <span 
                  className={cn(
                    "flex items-center gap-1",
                    isLast ? "text-foreground font-medium" : "text-muted-foreground"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {isHome && <Home className="h-3 w-3" />}
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}