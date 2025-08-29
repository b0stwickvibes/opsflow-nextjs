import type { FeatureItem } from '@/components/shared/data-display/MarketingFeaturesGrid';
import type { LogoItem } from '@/components/shared/data-display/MarketingBrandLogos';

export type TestimonialItem = { quote: string; author: string; role?: string };

export const landingContent = {
  hero: {
    title: 'Your New Landing Page',
    description:
      "Paste Figma copy and assets into these sections. We'll swap this into / when approved.",
    badge: 'Preview',
    eyebrow: 'New',
    align: 'left' as const,
    // mediaSrc: '/landing/hero.png', // drop your hero image here to enable
  },
  logos: [
    { src: '/logos/toast.svg', alt: 'Toast' },
    { src: '/logos/quickbooks.svg', alt: 'QuickBooks' },
    { src: '/logos/square.svg', alt: 'Square' },
    { src: '/logos/marginedge.svg', alt: 'MarginEdge' },
    { src: '/logos/7shifts.svg', alt: '7shifts' },
    { src: '/logos/doordash.svg', alt: 'DoorDash' },
  ] as LogoItem[],
  features: [
    { title: 'Feature One', description: 'Short supporting copy.' },
    { title: 'Feature Two', description: 'Short supporting copy.' },
    { title: 'Feature Three', description: 'Short supporting copy.' },
    { title: 'Feature Four', description: 'Short supporting copy.' },
    { title: 'Feature Five', description: 'Short supporting copy.' },
    { title: 'Feature Six', description: 'Short supporting copy.' },
  ] as FeatureItem[],
  testimonials: [
    { quote: 'Great product — super fast to implement.', author: 'Jordan P.', role: 'Ops Director' },
    { quote: 'Beautiful UI and excellent support.', author: 'Samira K.', role: 'GM' },
    { quote: 'Clear ROI in the first month.', author: 'Diego R.', role: 'Owner' },
  ],
  cta: {
    title: 'Ready to go live?',
    description: 'Once this looks right, we’ll replace the homepage (/) with this layout.',
    primary: { text: 'Start Free Trial', href: '/pricing' },
    secondary: { text: 'Schedule Demo', href: '/product/demo' },
  },
};
