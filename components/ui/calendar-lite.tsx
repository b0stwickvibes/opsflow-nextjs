"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CalendarLiteProps {
  value?: Date | null;
  onChange?: (date: Date) => void;
  className?: string;
}

export function CalendarLite({ value, onChange, className }: CalendarLiteProps) {
  const [anchor, setAnchor] = useState<Date>(value ?? new Date());

  const year = anchor.getFullYear();
  const month = anchor.getMonth();
  const first = new Date(year, month, 1);
  const start = new Date(first);
  start.setDate(first.getDate() - ((first.getDay() + 6) % 7)); // Monday as first
  const days = useMemo(() => Array.from({ length: 42 }, (_, i) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)), [start.getTime()]);

  const isSameDay = (a: Date, b?: Date | null) => !!b && a.toDateString() === b.toDateString();

  return (
    <div className={cn("w-full rounded-lg border p-3 bg-card", className)}>
      <div className="flex items-center justify-between mb-2">
        <Button size="sm" variant="outline" onClick={() => setAnchor(new Date(year, month - 1, 1))}>Prev</Button>
        <div className="text-sm font-medium">{anchor.toLocaleString(undefined, { month: 'long', year: 'numeric' })}</div>
        <Button size="sm" variant="outline" onClick={() => setAnchor(new Date(year, month + 1, 1))}>Next</Button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs text-muted-foreground mb-1">
        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (<div key={d} className="text-center py-1">{d}</div>))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => {
          const inMonth = d.getMonth() === month;
          const selected = isSameDay(d, value ?? null);
          return (
            <button
              key={i}
              onClick={() => onChange?.(d)}
              className={cn(
                "h-8 rounded-md text-xs flex items-center justify-center border",
                selected ? "bg-primary text-primary-foreground border-transparent" : inMonth ? "bg-muted/40 border-border" : "bg-background border-border/50 text-muted-foreground"
              )}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

