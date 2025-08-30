import { z } from 'zod';

// Restaurant operations validation schemas for security
export const RestaurantROISchema = z.object({
  employees: z.number().int().min(1).max(100000),
  locations: z.number().int().min(1).max(10000),
  currentCostPerHour: z.number().min(1).max(1000),
  tasksPerWeek: z.number().int().min(1).max(10000),
  timePerTask: z.number().min(1).max(480),
  auditFrequency: z.number().int().min(0).max(100)
});

export const ContactFormSchema = z.object({
  firstName: z.string().min(1).max(50).regex(/^[a-zA-Z\s]+$/, 'Only letters and spaces allowed'),
  lastName: z.string().min(1).max(50).regex(/^[a-zA-Z\s]+$/, 'Only letters and spaces allowed'),
  email: z.string().email('Invalid email address').max(254),
  phone: z.string().regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number').optional(),
  restaurant: z.string().min(1).max(100),
  restaurantType: z.enum(['full-service', 'quick-service', 'fast-casual', 'coffee-shop', 'bar-nightlife', 'hotel', 'other']).optional(),
  locations: z.enum(['1', '2-5', '6-15', '16+']).optional(),
  preferredTime: z.string().optional(),
  notes: z.string().max(500).optional()
});

export const PricingEventSchema = z.object({
  event: z.enum(['tier_click', 'cta_click', 'faq_expand', 'calculator_use']),
  tier: z.string().optional(),
  billingPeriod: z.enum(['monthly', 'annual']).optional(),
  experimentId: z.string().optional(),
  metadata: z.record(z.any()).optional()
});

// Sanitization functions
export function sanitizeInput(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .trim()
    .substring(0, 1000); // Limit length
}

export function sanitizeNumericInput(input: string | number): number | null {
  const num = typeof input === 'string' ? parseFloat(input) : input;
  if (isNaN(num) || !isFinite(num)) return null;
  return num;
}

// Rate limiting utilities
interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  keyGenerator?: () => string;
}

class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  isAllowed(key: string, config: RateLimitConfig): boolean {
    const now = Date.now();
    const windowStart = now - config.windowMs;
    
    // Get existing requests for this key
    const existing = this.requests.get(key) || [];
    
    // Filter out old requests
    const recent = existing.filter(time => time > windowStart);
    
    if (recent.length >= config.maxRequests) {
      return false;
    }

    // Add current request
    recent.push(now);
    this.requests.set(key, recent);
    
    // Clean up old entries periodically
    if (Math.random() < 0.01) {
      this.cleanup(windowStart);
    }
    
    return true;
  }

  private cleanup(cutoff: number) {
    for (const [key, times] of this.requests.entries()) {
      const filtered = times.filter(time => time > cutoff);
      if (filtered.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, filtered);
      }
    }
  }
}

export const rateLimiter = new RateLimiter();

// Security headers for API routes
export const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

// CSRF protection
export function generateCSRFToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function validateCSRFToken(token: string, storedToken: string): boolean {
  return token === storedToken && token.length > 0;
}