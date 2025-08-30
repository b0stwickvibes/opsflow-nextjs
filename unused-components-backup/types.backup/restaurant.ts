/**
 * Restaurant-specific TypeScript definitions for OpsFlow
 * These types ensure consistency across the application and provide
 * better type safety for restaurant operations data.
 */

/**
 * Restaurant types that OpsFlow supports
 */
export type RestaurantType = 
  | 'fine-dining'
  | 'fast-casual' 
  | 'bar'
  | 'cafe'
  | 'night-club'
  | 'food-truck'
  | 'other'
  | 'prefer-not-to-specify';

/**
 * Restaurant size by number of locations
 */
export type LocationSize = 
  | 'single'
  | '2-5'
  | '6-15'
  | '16-50'
  | '50+';

/**
 * Types of inquiries for the contact form
 */
export type InquiryType = 
  | 'sales-demo'
  | 'technical-support'
  | 'partnership'
  | 'pos-integration'
  | 'general';

/**
 * Contact form data structure
 */
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  restaurantType: RestaurantType;
  locations: LocationSize;
  pos?: string;
  inquiryType: InquiryType;
  message: string;
  marketingConsent?: boolean;
}

/**
 * Office location information
 */
export interface OfficeLocation {
  city: string;
  address: string;
  phone: string;
  email: string;
  mapUrl?: string;
  timezone?: string;
  hours?: string;
}

/**
 * Contact method information
 */
export interface ContactMethod {
  title: string;
  description: string;
  email?: string;
  phone?: string;
  hours?: string;
  availability?: string;
}

/**
 * Frequently asked question structure
 */
export interface FAQ {
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'billing' | 'security' | 'compliance';
  additionalInfo?: string;
}

/**
 * Success metric data for marketing
 */
export interface SuccessMetric {
  metric: string;
  description: string;
  value: string | number;
  previousValue?: string | number;
  changePercentage?: number;
  isPositive?: boolean;
}

/**
 * Common POS systems we integrate with
 */
export type POSSystem = 
  | 'Toast'
  | 'Square'
  | 'Clover'
  | 'TouchBistro'
  | 'Lightspeed'
  | 'Aloha'
  | 'Breadcrumb'
  | 'Revel'
  | 'Upserve'
  | 'Rezku'
  | 'Other';

/**
 * Feature capability for different plans
 */
export type FeatureAvailability = 
  | 'included'  // Available in this plan
  | 'limited'   // Available with limitations
  | 'add-on'    // Available as a paid add-on
  | 'not-available'; // Not available in this plan

// No default export for types-only module
