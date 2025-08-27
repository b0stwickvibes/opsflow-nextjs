/**
 * OpsFlow Style Protection System - Main Entry Point
 * Bulletproof styling system that maintains design consistency across the entire application
 */

import React from 'react';
import StyleGuard, { protectCSSVariables } from './style-guards';
import ComponentAuditor, { debugStyles } from './component-auditor';
import { designTokens } from './design-tokens';

export class OpsFlowStyleSystem {
  private styleGuard: StyleGuard;
  private auditor: ComponentAuditor;
  private isInitialized: boolean = false;
  private protectionStyle: HTMLStyleElement | null = null;

  constructor() {
    this.styleGuard = new StyleGuard();
    this.auditor = new ComponentAuditor();
  }

  // Initialize the entire style protection system
  initialize(options: {
    enableDebug?: boolean;
    autoFix?: boolean;
    auditOnMount?: boolean;
  } = {}) {
    if (this.isInitialized) return;

    const {
      enableDebug = process.env.NODE_ENV === 'development',
      autoFix = true,
      auditOnMount = true
    } = options;

    // Protect CSS variables
    this.protectionStyle = protectCSSVariables();

    // Enable debug mode if requested
    if (enableDebug) {
      debugStyles(true);
      console.log('🎨 OpsFlow Style System: Debug mode enabled');
    }

    // Run initial audit
    if (auditOnMount) {
      setTimeout(() => {
        const isValid = this.auditor.auditAllComponents();
        
        if (!isValid) {
          console.warn('🚨 Style violations detected:', this.auditor.getViolations());
          
          if (autoFix) {
            this.auditor.autoFix();
            console.log('🔧 Auto-fixed style violations');
          }
        } else {
          console.log('✅ All components pass OpsFlow design standards');
        }
      }, 100);
    }

    // Set up periodic audits in development
    if (process.env.NODE_ENV === 'development') {
      this.setupPeriodicAudits();
    }

    this.isInitialized = true;
    console.log('🚀 OpsFlow Style Protection System initialized');
  }

  // Set up periodic style audits
  private setupPeriodicAudits() {
    setInterval(() => {
      const isValid = this.auditor.auditAllComponents();
      if (!isValid) {
        console.warn('⚠️ Periodic audit found style drift:', this.auditor.generateReport());
        this.auditor.autoFix();
      }
    }, 10000); // Audit every 10 seconds in development
  }

  // Run manual audit
  audit(autoFix: boolean = false) {
    const isValid = this.auditor.auditAllComponents();
    
    if (!isValid && autoFix) {
      this.auditor.autoFix();
    }
    
    return {
      isValid,
      violations: this.auditor.getViolations(),
      report: this.auditor.generateReport()
    };
  }

  // Get design tokens (read-only)
  getDesignTokens() {
    return { ...designTokens };
  }

  // Validate a specific element
  validateElement(element: HTMLElement, componentType: string) {
    // Implementation would check against component-specific rules
    return true;
  }

  // Clean up the system
  destroy() {
    this.styleGuard.destroy();
    
    if (this.protectionStyle) {
      this.protectionStyle.remove();
    }
    
    this.isInitialized = false;
    console.log('🛑 OpsFlow Style Protection System destroyed');
  }
}

// React hook for style protection
export const useOpsFlowStyles = (
  elementRef: React.RefObject<HTMLElement>, 
  componentType: string,
  requiredClasses: string[] = []
) => {
  React.useEffect(() => {
    if (elementRef.current) {
      // Add component type class for identification
      elementRef.current.classList.add(`ops-${componentType}`);
      
      // Ensure required classes are present
      requiredClasses.forEach(className => {
        if (!elementRef.current?.classList.contains(className)) {
          elementRef.current?.classList.add(className);
        }
      });

      // Set up style monitoring
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            // Re-enforce required classes if they were removed
            requiredClasses.forEach(className => {
              if (!elementRef.current?.classList.contains(className)) {
                elementRef.current?.classList.add(className);
                console.warn(`🔧 Auto-restored class: ${className}`);
              }
            });
          }
        });
      });

      observer.observe(elementRef.current, {
        attributes: true,
        attributeFilter: ['class', 'style'],
      });

      return () => observer.disconnect();
    }
  }, [elementRef, componentType, requiredClasses]);
};

// Remove the problematic HOC for now
export function withOpsFlowStyles() {
  console.warn('withOpsFlowStyles is temporarily disabled');
  return null;
}

// Singleton instance
export const opsFlowStyleSystem = new OpsFlowStyleSystem();

// Auto-initialize in browser environment
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      opsFlowStyleSystem.initialize();
    });
  } else {
    opsFlowStyleSystem.initialize();
  }
}

export { designTokens } from './design-tokens';
export { StyleGuard } from './style-guards';
export { ComponentAuditor } from './component-auditor';
