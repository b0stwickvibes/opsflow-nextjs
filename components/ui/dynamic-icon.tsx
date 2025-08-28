import dynamic from 'next/dynamic';
import { LucideIcon } from 'lucide-react';
import { Loader2 } from 'lucide-react';

// Lazy-loaded icon mapping with proper typing
const iconMap = {
  Search: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Search }))),
  ArrowRight: dynamic(() => import('lucide-react').then(mod => ({ default: mod.ArrowRight }))),
  BookOpen: dynamic(() => import('lucide-react').then(mod => ({ default: mod.BookOpen }))),
  HeadphonesIcon: dynamic(() => import('lucide-react').then(mod => ({ default: mod.HeadphonesIcon }))),
  FileText: dynamic(() => import('lucide-react').then(mod => ({ default: mod.FileText }))),
  MessageSquare: dynamic(() => import('lucide-react').then(mod => ({ default: mod.MessageSquare }))),
  Users: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Users }))),
  Shield: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Shield }))),
  Play: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Play }))),
  GraduationCap: dynamic(() => import('lucide-react').then(mod => ({ default: mod.GraduationCap }))),
  Activity: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Activity }))),
  Calendar: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Calendar }))),
  Star: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Star }))),
  CheckCircle: dynamic(() => import('lucide-react').then(mod => ({ default: mod.CheckCircle }))),
  Eye: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Eye }))),
  Download: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Download }))),
  Building2: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Building2 }))),
  Target: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Target }))),
  Zap: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Zap }))),
  Globe: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Globe }))),
  TrendingUp: dynamic(() => import('lucide-react').then(mod => ({ default: mod.TrendingUp }))),
  Award: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Award }))),
  Copy: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Copy }))),
  Check: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Check }))),
  Loader2: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Loader2 })))
} as const;

interface DynamicIconProps {
  name: keyof typeof iconMap;
  className?: string;
  size?: number;
}

// High-performance icon component with fallback
export function DynamicIcon({ name, className = "h-4 w-4", size }: DynamicIconProps) {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    return <Loader2 className={`${className} animate-spin`} />;
  }

  return (
    <IconComponent 
      className={className} 
      size={size}
    />
  );
}

// Export for direct use in performance-critical components
export const icons = iconMap;
