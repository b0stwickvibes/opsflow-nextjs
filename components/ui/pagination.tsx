"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export function Pagination({ page, totalPages, onPageChange, className }: PaginationProps) {
  const canPrev = page > 1;
  const canNext = page < totalPages;
  const go = (p: number) => onPageChange?.(Math.min(Math.max(1, p), totalPages));

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 5);

  return (
    <div className={cn("flex items-center justify-between gap-2", className)}>
      <Button size="sm" variant="outline" disabled={!canPrev} onClick={() => go(page - 1)}>Previous</Button>
      <div className="flex items-center gap-1">
        {pages.map((p) => (
          <Button
            key={p}
            size="sm"
            variant={p === page ? "default" : "outline"}
            onClick={() => go(p)}
          >
            {p}
          </Button>
        ))}
        {totalPages > pages.length && <span className="px-2 text-muted-foreground">…</span>}
      </div>
      <Button size="sm" variant="outline" disabled={!canNext} onClick={() => go(page + 1)}>Next</Button>
    </div>
  );
}

