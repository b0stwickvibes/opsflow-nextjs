/**
 * Component Style Guards - Prevent style drift and maintain consistency
 * This system monitors and enforces critical styling across all components
 */

import React from 'react';
import { designTokens } from './design-tokens';

// Style conflict detection
export class StyleGuard {
  private observers: MutationObserver[] = [];
  private criticalElements: Map<string, HTMLElement> = new Map();

  constructor() {
    this.initializeGuards();
  }

  // Register critical elements for monitoring
  registerCriticalElement(selector: string, requiredClasses: string[]) {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      this.criticalElements.set(selector, element);
      this.enforceStyles(element, requiredClasses);
      this.watchForChanges(element, requiredClasses);
    }
  }

  // Enforce styles on an element
  private enforceStyles(element: HTMLElement, requiredClasses: string[]) {
    requiredClasses.forEach(className => {
      if (!element.classList.contains(className)) {
        element.classList.add(className);
      }
    });
  }

  // Watch for unauthorized style changes
  private watchForChanges(element: HTMLElement, requiredClasses: string[]) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          this.enforceStyles(element, requiredClasses);
        }
      });
    });

    observer.observe(element, {
      attributes: true,
      attributeFilter: ['class', 'style'],
    });

    this.observers.push(observer);
  }

  // Initialize all style guards
  private initializeGuards() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.setupCriticalElementGuards();
      });
    } else {
      this.setupCriticalElementGuards();
    }
  }

  private setupCriticalElementGuards() {
    // Navbar protection
    this.registerCriticalElement('header[class*="sticky"]', [
      'sticky',
      'top-0',
      'z-50',
      'border-b',
      'backdrop-blur-md'
    ]);

    // Dropdown protection
    document.querySelectorAll('[data-nav-item]').forEach((dropdown, index) => {
      this.registerCriticalElement(`[data-nav-item="${dropdown.getAttribute('data-nav-item')}"]`, [
        'relative'
      ]);
    });
  }

  // Cleanup observers
  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.criticalElements.clear();
  }
}

// CSS Custom Properties Protection
export function protectCSSVariables() {
  const style = document.createElement('style');
  style.textContent = `
    /* Critical CSS Variables - Protected from override */
    :root {
      --primary: 220 14.3% 95.9% !important;
      --primary-foreground: 220 84.8% 4.9% !important;
      --background: 0 0% 100% !important;
      --foreground: 220 84.8% 4.9% !important;
      --muted: 220 14.3% 95.9% !important;
      --muted-foreground: 220 10.4% 40.8% !important;
      --popover: 0 0% 100% !important;
      --popover-foreground: 220 84.8% 4.9% !important;
      --border: 220 13% 91% !important;
      --accent: 220 14.3% 95.9% !important;
      --accent-foreground: 220 84.8% 4.9% !important;
    }

    /* Dark mode protection */
    .dark {
      --primary: 220 14.3% 95.9% !important;
      --primary-foreground: 220 84.8% 4.9% !important;
      --background: 220 84.8% 4.9% !important;
      --foreground: 220 14.3% 95.9% !important;
      --muted: 215 27.9% 16.9% !important;
      --muted-foreground: 217.9 10.6% 64.9% !important;
      --popover: 220 84.8% 4.9% !important;
      --popover-foreground: 220 14.3% 95.9% !important;
      --border: 215 27.9% 16.9% !important;
      --accent: 215 27.9% 16.9% !important;
      --accent-foreground: 220 14.3% 95.9% !important;
    }

    /* Critical component styles that cannot be overridden */
    .ops-navbar {
      position: sticky !important;
      top: 0 !important;
      z-index: 50 !important;
      width: 100% !important;
      border-bottom: 1px solid hsl(var(--border) / 0.4) !important;
      background-color: hsl(var(--background) / 0.95) !important;
      backdrop-filter: blur(12px) !important;
    }

    .ops-dropdown {
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
      border: 1px solid hsl(var(--border) / 0.5) !important;
      border-radius: 1rem !important;
      background-color: hsl(var(--popover)) !important;
      color: hsl(var(--popover-foreground)) !important;
    }

    /* Prevent style inheritance conflicts */
    .ops-navbar * {
      box-sizing: border-box;
    }

    /* Animation protection */
    .ops-dropdown-enter {
      transition: all 100ms ease-out !important;
    }

    /* Hover state protection */
    .ops-nav-item:hover {
      color: hsl(var(--primary)) !important;
      transition: color 200ms !important;
    }

    /* Mobile responsiveness protection */
    @media (max-width: 768px) {
      .ops-navbar .container {
        padding-left: 1rem !important;
        padding-right: 1rem !important;
      }
    }
  `;
  
  document.head.appendChild(style);
  return style;
}

// Component composition helper
export function withStyleProtection<T extends Record<string, any>>(
  Component: React.ComponentType<T>, 
  protectedClasses: string[]
) {
  return React.forwardRef<HTMLElement, T>((props, ref) => {
    const className = `${protectedClasses.join(' ')} ${props.className || ''}`;
    return React.createElement(Component, {
      ...props,
      className,
      ref
    });
  });
}

// Style validation hook
export const useStyleValidation = (elementRef: React.RefObject<HTMLElement>, requiredClasses: string[]) => {
  React.useEffect(() => {
    if (elementRef.current) {
      const missing = requiredClasses.filter(cls => 
        !elementRef.current?.classList.contains(cls)
      );
      
      if (missing.length > 0) {
        console.warn('Missing critical styles:', missing);
        // Auto-fix missing styles
        missing.forEach(cls => elementRef.current?.classList.add(cls));
      }
    }
  }, [elementRef, requiredClasses]);
};

export default StyleGuard;