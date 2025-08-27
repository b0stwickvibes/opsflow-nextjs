/**
 * Enhanced Component Auditor with Scaler Integration Safety
 * Prevents layout disasters by validating container usage and responsive design
 */

interface ComponentValidationRule {
  name: string;
  selector: string;
  validate: (element: HTMLElement) => { isValid: boolean; message?: string };
  severity: 'error' | 'warning';
  autoFix?: (element: HTMLElement) => void;
}

export class ComponentAuditor {
  private violations: string[] = [];
  private rules: ComponentValidationRule[] = [];

  constructor() {
    this.setupValidationRules();
  }

  private setupValidationRules() {
    this.rules = [
      // Scaler Integration Safety Rules
      {
        name: 'Container Containment',
        selector: '[class*="ops-"], section, .restaurant-',
        validate: (element) => {
          const hasContainer = element.closest('.container') || element.querySelector('.container');
          const hasResponsivePadding = element.classList.contains('px-4') || 
                                      element.classList.contains('px-6') ||
                                      element.querySelector('[class*="px-"]');
          
          if (!hasContainer && !hasResponsivePadding) {
            return { 
              isValid: false, 
              message: 'Component must be within container or have responsive padding' 
            };
          }
          return { isValid: true };
        },
        severity: 'error',
        autoFix: (element) => {
          if (!element.closest('.container')) {
            element.classList.add('container', 'mx-auto', 'px-4', 'sm:px-6');
          }
        }
      },

      // Horizontal Scroll Prevention
      {
        name: 'Horizontal Scroll Prevention',
        selector: '*',
        validate: (element) => {
          const hasOverflowX = getComputedStyle(element).overflowX;
          const rect = element.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          
          if (rect.right > viewportWidth && hasOverflowX !== 'hidden') {
            return { 
              isValid: false, 
              message: 'Element extends beyond viewport width' 
            };
          }
          return { isValid: true };
        },
        severity: 'error'
      },

      // Mobile Responsiveness Check
      {
        name: 'Mobile Grid Responsiveness',
        selector: '[class*="grid-cols-"]',
        validate: (element) => {
          const classes = Array.from(element.classList);
          const hasBaseGrid = classes.some(cls => cls.match(/^grid-cols-\d+$/));
          const hasResponsiveGrid = classes.some(cls => cls.match(/^(sm|md|lg|xl):grid-cols-\d+$/));
          
          if (hasBaseGrid && !hasResponsiveGrid) {
            return { 
              isValid: false, 
              message: 'Grid must have responsive breakpoints for mobile' 
            };
          }
          return { isValid: true };
        },
        severity: 'warning',
        autoFix: (element) => {
          const classes = Array.from(element.classList);
          const baseGridClass = classes.find(cls => cls.match(/^grid-cols-\d+$/));
          if (baseGridClass) {
            element.classList.remove(baseGridClass);
            element.classList.add('grid-cols-1', 'md:grid-cols-2', `xl:${baseGridClass}`);
          }
        }
      },

      // Button Styling Compliance
      {
        name: 'Button Component Usage',
        selector: 'button, [role="button"]',
        validate: (element) => {
          const isCustomButton = element.classList.contains('btn') || 
                                element.style.backgroundColor ||
                                element.style.color;
          
          if (isCustomButton && !element.classList.contains('Button_button')) {
            return { 
              isValid: false, 
              message: 'Use Button component instead of custom button styling' 
            };
          }
          return { isValid: true };
        },
        severity: 'warning'
      },

      // Global Token Usage
      {
        name: 'Global Design Token Usage',
        selector: '*',
        validate: (element) => {
          const style = element.getAttribute('style');
          if (style && (style.includes('color:') || style.includes('background'))) {
            const hasCustomColor = style.match(/#[0-9a-f]{6}|rgb\(|hsl\(/i);
            if (hasCustomColor) {
              return { 
                isValid: false, 
                message: 'Use global design tokens instead of custom colors' 
              };
            }
          }
          return { isValid: true };
        },
        severity: 'warning'
      },

      // Restaurant Content Validation
      {
        name: 'Restaurant Operations Focus',
        selector: 'h1, h2, h3, .restaurant-content',
        validate: (element) => {
          const text = element.textContent?.toLowerCase() || '';
          const restaurantTerms = [
            'restaurant', 'haccp', 'temperature', 'compliance', 'kitchen',
            'staff', 'operations', 'food safety', 'inventory', 'pos'
          ];
          
          const hasRestaurantFocus = restaurantTerms.some(term => text.includes(term));
          
          if (element.tagName.match(/H[1-3]/) && !hasRestaurantFocus) {
            return { 
              isValid: false, 
              message: 'Headings should focus on restaurant operations terminology' 
            };
          }
          return { isValid: true };
        },
        severity: 'warning'
      }
    ];
  }

  // Enhanced audit with detailed reporting
  auditAllComponents(): boolean {
    this.violations = [];
    let hasErrors = false;

    this.rules.forEach(rule => {
      const elements = document.querySelectorAll(rule.selector);
      
      elements.forEach((element, index) => {
        const result = rule.validate(element as HTMLElement);
        
        if (!result.isValid) {
          const violation = `${rule.severity.toUpperCase()}: ${rule.name} - ${result.message} (Element: ${element.tagName}#${element.id || index})`;
          this.violations.push(violation);
          
          if (rule.severity === 'error') {
            hasErrors = true;
          }
          
          // Auto-fix if available
          if (rule.autoFix) {
            rule.autoFix(element as HTMLElement);
            console.log(`🔧 Auto-fixed: ${rule.name} on ${element.tagName}`);
          }
        }
      });
    });

    return !hasErrors;
  }

  // Generate detailed safety report
  generateSafetyReport(): string {
    const errors = this.violations.filter(v => v.startsWith('ERROR'));
    const warnings = this.violations.filter(v => v.startsWith('WARNING'));
    
    return `
COMPONENT SAFETY AUDIT REPORT
============================

🚨 ERRORS (${errors.length}):
${errors.map(e => `  - ${e}`).join('\n')}

⚠️  WARNINGS (${warnings.length}):
${warnings.map(w => `  - ${w}`).join('\n')}

📱 MOBILE RESPONSIVENESS:
- Test viewport: 375px width
- Check for horizontal scroll
- Verify touch targets (44px minimum)

🎨 STYLING COMPLIANCE:
- Use global design tokens only
- No inline styles or custom CSS
- Button component for all interactive elements

🍽️ RESTAURANT FOCUS:
- Industry-specific terminology used
- HACCP compliance mentioned
- Real restaurant pain points addressed

${errors.length === 0 ? '✅ SAFE TO DEPLOY' : '❌ FIX ERRORS BEFORE DEPLOYMENT'}
    `.trim();
  }

  // Test specific component safety
  testComponentSafety(componentName: string): boolean {
    const component = document.querySelector(`[class*="${componentName}"], .ops-${componentName.toLowerCase()}`);
    
    if (!component) {
      console.warn(`Component ${componentName} not found for safety testing`);
      return false;
    }

    // Simulate mobile viewport
    const originalWidth = window.innerWidth;
    Object.defineProperty(window, 'innerWidth', { value: 375, writable: true });
    
    const isSafe = this.auditAllComponents();
    
    // Restore viewport
    Object.defineProperty(window, 'innerWidth', { value: originalWidth, writable: true });
    
    console.log(`🧪 Safety test for ${componentName}: ${isSafe ? 'PASS' : 'FAIL'}`);
    
    return isSafe;
  }

  getViolations() {
    return this.violations;
  }

  autoFix() {
    // Re-run audit with auto-fixes
    this.auditAllComponents();
  }
}

export { ComponentAuditor };
export default ComponentAuditor;