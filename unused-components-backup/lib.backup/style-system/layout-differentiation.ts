/**
 * Enhanced OpsFlow Style System - Layout Differentiation Module
 * Prevents template-itis by enforcing visual variety across page types
 */

// Layout family definitions to prevent visual monotony
export const LAYOUT_FAMILIES = {
  marketing: ['hero-marketing', 'cta-premium', 'stats-animated'],
  product: ['hero-demo', 'features-detailed', 'screenshots-interactive'],
  solution: ['hero-industry', 'features-industry', 'testimonials-industry'],
  company: ['hero-human', 'team-focused', 'story-driven']
} as const;

// Page differentiation rules
export const PAGE_DIFFERENTIATION_RULES = {
  // Page type to layout family mapping
  pageTypeRules: {
    'homepage': 'marketing',
    'pricing': 'marketing', 
    'product': 'product',
    'solutions': 'solution',
    'company': 'company'
  },
  
  // Visual requirements for each page type
  visualRequirements: {
    marketing: {
      elements: ['premium-animations', 'stats-display', 'social-proof'],
      style: 'gradient-backgrounds'
    },
    product: {
      elements: ['screenshots', 'interactive-demos', 'feature-callouts'],
      style: 'demo-focused'
    },
    solution: {
      elements: ['industry-imagery', 'use-cases', 'customer-testimonials'],
      style: 'industry-specific'
    },
    company: {
      elements: ['team-photos', 'story-content', 'human-connection'],
      style: 'personal-authentic'
    }
  },
  
  // Anti-patterns to avoid
  avoidPatterns: [
    'same-hero-consecutive-pages',
    'identical-cta-placement',
    'repeated-visual-hierarchy'
  ]
} as const;

// Layout variety validator
export class LayoutVarietyValidator {
  private pageLayouts: Map<string, string> = new Map();
  private violations: string[] = [];

  // Register a page's layout family
  registerPage(pathname: string, layoutFamily: keyof typeof LAYOUT_FAMILIES) {
    this.pageLayouts.set(pathname, layoutFamily);
    this.validatePageLayout(pathname, layoutFamily);
  }

  // Validate layout choice for a page
  private validatePageLayout(pathname: string, layoutFamily: string) {
    const pageType = this.getPageType(pathname);
    const expectedFamily = PAGE_DIFFERENTIATION_RULES.pageTypeRules[pageType];
    
    if (expectedFamily && expectedFamily !== layoutFamily) {
      this.violations.push(
        `Page ${pathname} uses ${layoutFamily} layout but should use ${expectedFamily}`
      );
    }
  }

  // Determine page type from pathname
  private getPageType(pathname: string): string {
    if (pathname === '/') return 'homepage';
    if (pathname === '/pricing') return 'pricing';
    if (pathname.startsWith('/product')) return 'product';
    if (pathname.startsWith('/solutions')) return 'solutions';
    if (pathname.startsWith('/company')) return 'company';
    return 'other';
  }

  // Check for layout overuse
  auditLayoutVariety() {
    const familyUsage = new Map<string, number>();
    
    this.pageLayouts.forEach((family) => {
      familyUsage.set(family, (familyUsage.get(family) || 0) + 1);
    });
    
    const overused = Array.from(familyUsage.entries())
      .filter(([_, count]) => count > 3)
      .map(([family, count]) => `${family} (${count} times)`);
    
    return {
      isValid: this.violations.length === 0 && overused.length === 0,
      violations: this.violations,
      overusedLayouts: overused,
      recommendations: this.generateRecommendations()
    };
  }

  private generateRecommendations() {
    return [
      'Use marketing layouts for homepage and pricing (premium feel)',
      'Use product layouts for feature/demo pages (functional focus)', 
      'Use solution layouts for industry pages (customer-specific)',
      'Use company layouts for about/team pages (human connection)',
      'Avoid same layout type on consecutive pages in user journey'
    ];
  }

  // Clear violations (for testing)
  clearViolations() {
    this.violations = [];
  }
}

// Create singleton instance
export const layoutValidator = new LayoutVarietyValidator();

// Component registration helper
export const registerComponentLayout = (
  componentType: string,
  layoutFamily: keyof typeof LAYOUT_FAMILIES
) => {
  if (typeof window !== 'undefined') {
    layoutValidator.registerPage(window.location.pathname, layoutFamily);
    
    // Add visual debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Registered ${componentType} with ${layoutFamily} layout on ${window.location.pathname}`);
    }
  }
};

export default LayoutVarietyValidator;