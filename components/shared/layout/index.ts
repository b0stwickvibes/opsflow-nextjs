// Layout components barrel
export { Navbar } from './Navbar';
export { Footer } from './Footer';

// Marketing/layout sections
export { MarketingCTA } from './MarketingCTA';
export { MarketingHero } from './MarketingHero';
export { CallToAction } from './CallToAction';
export { FinalCTA } from './FinalCTA';

// Bento utilities
export { BentoGrid } from './BentoGrid';
export { BentoLayout } from './BentoLayout';

// Optional helpers (available for pages/components)
export { DemoRequest } from './DemoRequest';
export { TrialSignup } from './TrialSignup';
export { AdvancedOperations } from './AdvancedOperations';

// New section system for clean backgrounds
export { Section, SectionContent, SectionDivider, RadialBackground } from './Section';

// Re-export types for convenience
export type {
  IndustryType,
  RoleType
} from '@/types/restaurant-pages';
