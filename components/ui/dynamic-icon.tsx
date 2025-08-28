"use client";

import dynamic from "next/dynamic";

// Lazy-loaded icon mapping
const iconMap = {
  Search: dynamic(() => import("lucide-react").then((m) => ({ default: m.Search }))),
  ArrowRight: dynamic(() => import("lucide-react").then((m) => ({ default: m.ArrowRight }))),
  BookOpen: dynamic(() => import("lucide-react").then((m) => ({ default: m.BookOpen }))),
  HeadphonesIcon: dynamic(() => import("lucide-react").then((m) => ({ default: m.HeadphonesIcon }))),
  FileText: dynamic(() => import("lucide-react").then((m) => ({ default: m.FileText }))),
  MessageSquare: dynamic(() => import("lucide-react").then((m) => ({ default: m.MessageSquare }))),
  Users: dynamic(() => import("lucide-react").then((m) => ({ default: m.Users }))),
  Shield: dynamic(() => import("lucide-react").then((m) => ({ default: m.Shield }))),
  Play: dynamic(() => import("lucide-react").then((m) => ({ default: m.Play }))),
  GraduationCap: dynamic(() => import("lucide-react").then((m) => ({ default: m.GraduationCap }))),
  Activity: dynamic(() => import("lucide-react").then((m) => ({ default: m.Activity }))),
  Calendar: dynamic(() => import("lucide-react").then((m) => ({ default: m.Calendar }))),
  Star: dynamic(() => import("lucide-react").then((m) => ({ default: m.Star }))),
  CheckCircle: dynamic(() => import("lucide-react").then((m) => ({ default: m.CheckCircle }))),
  Eye: dynamic(() => import("lucide-react").then((m) => ({ default: m.Eye }))),
  Download: dynamic(() => import("lucide-react").then((m) => ({ default: m.Download }))),
  Building2: dynamic(() => import("lucide-react").then((m) => ({ default: m.Building2 }))),
  Target: dynamic(() => import("lucide-react").then((m) => ({ default: m.Target }))),
  Zap: dynamic(() => import("lucide-react").then((m) => ({ default: m.Zap }))),
  Globe: dynamic(() => import("lucide-react").then((m) => ({ default: m.Globe }))),
  TrendingUp: dynamic(() => import("lucide-react").then((m) => ({ default: m.TrendingUp }))),
  Award: dynamic(() => import("lucide-react").then((m) => ({ default: m.Award }))),
  Copy: dynamic(() => import("lucide-react").then((m) => ({ default: m.Copy }))),
  Check: dynamic(() => import("lucide-react").then((m) => ({ default: m.Check }))),
} as const;

export type IconName = keyof typeof iconMap;

interface DynamicIconProps {
  name: IconName | (string & {});
  className?: string;
  size?: number;
}

export function DynamicIcon({ name, className, size }: DynamicIconProps) {
  const Comp = (iconMap as Record<string, any>)[name];
  if (!Comp) return null;
  return <Comp className={className} size={size} />;
}

