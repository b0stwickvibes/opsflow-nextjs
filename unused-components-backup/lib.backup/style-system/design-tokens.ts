/**
 * OpsFlow Design System - Style Protection Layer
 * Bulletproof styling system to prevent style conflicts and maintain consistency
 */

// Design tokens - these should never be overridden
export const designTokens = {
  colors: {
    primary: {
      DEFAULT: 'hsl(var(--primary))',
      foreground: 'hsl(var(--primary-foreground))',
    },
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    muted: {
      DEFAULT: 'hsl(var(--muted))',
      foreground: 'hsl(var(--muted-foreground))',
    },
    accent: {
      DEFAULT: 'hsl(var(--accent))',
      foreground: 'hsl(var(--accent-foreground))',
    },
    border: 'hsl(var(--border))',
    popover: {
      DEFAULT: 'hsl(var(--popover))',
      foreground: 'hsl(var(--popover-foreground))',
    },
  },
  
  // Critical component styles that must remain consistent
  navbar: {
    height: '4rem', // 16 * 0.25rem = 4rem = 64px
    backdrop: 'bg-background/95 backdrop-blur-md',
    border: 'border-b border-border/40',
    sticky: 'sticky top-0 z-50',
  },
  
  dropdown: {
    shadow: 'shadow-2xl',
    border: 'border border-border/50',
    radius: 'rounded-2xl',
    backdrop: 'bg-popover text-popover-foreground',
    animation: 'transition-all duration-100 ease-out',
  },
  
  animations: {
    hover: 'transition-colors duration-200',
    dropdown: 'transition-all duration-100 ease-out',
    scale: 'transition-transform duration-200',
  },
  
  // Spacing system
  spacing: {
    navbar: {
      container: 'container flex h-16 items-center',
      nav: 'flex items-center space-x-8',
      logo: 'mr-10 flex items-center space-x-2.5',
    },
    dropdown: {
      padding: 'p-6',
      item: 'p-3',
      gap: 'gap-4',
    },
  },
};

// Component class generator with protection
export const createProtectedClasses = (componentName: string, baseClasses: string) => {
  return `ops-${componentName} ${baseClasses}`;
};

// Style validation function
export const validateStyles = (element: HTMLElement, expectedClasses: string[]) => {
  const missing = expectedClasses.filter(cls => !element.classList.contains(cls));
  if (missing.length > 0) {
    console.warn(`Missing critical styles on ${element.tagName}:`, missing);
  }
};

// CSS-in-JS style object for critical components
export const criticalStyles = {
  navbar: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    width: '100%',
    borderBottom: '1px solid hsl(var(--border) / 0.4)',
    backgroundColor: 'hsl(var(--background) / 0.95)',
    backdropFilter: 'blur(12px)',
  },
  
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    zIndex: 50,
    paddingTop: '1rem',
    opacity: 0,
    transform: 'translateY(0.25rem)',
    transition: 'all 100ms ease-out',
    '&.open': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
};

export default designTokens;
