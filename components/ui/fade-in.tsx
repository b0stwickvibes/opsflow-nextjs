"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 600,
  direction = "up",
  distance = 30,
  threshold = 0.1,
  triggerOnce = true,
}: FadeInProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasTriggered, setHasTriggered] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce && !hasTriggered) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, triggerOnce, hasTriggered]);

  const getTransform = () => {
    if (direction === "none") return "";
    
    const transforms: Record<string, string> = {
      up: `translateY(${distance}px)`,
      down: `translateY(-${distance}px)`,
      left: `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`,
    };
    
    return transforms[direction];
  };

  const initialTransform = getTransform();

  return (
    <div
      ref={ref}
      className={cn("transition-all ease-out", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0)" : initialTransform,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}