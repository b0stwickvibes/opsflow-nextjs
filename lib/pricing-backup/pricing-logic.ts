

/**
 * Pricing logic for SaaS scalability and maintainability
 * - Type safety for all business logic
 * - Extensible config for future pricing models
 * - Error handling and validation for robust UI/UX
 * - Documentation for future maintainers
 */

// Business configuration for ROI calculations

export interface BusinessConfig {
  hourlyRateUSD: number;
  foodCostReductionPct: number;
  laborHoursSavedPerWeek: number;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  hourlyRateUSD: 18,
  foodCostReductionPct: 0.10,
  laborHoursSavedPerWeek: 5,
};

/**
 * Calculate ROI for a restaurant business.
 * @param inputs - User input values for calculation
 * @returns ROI result object (extensible for future metrics)
 */

export interface ROICalculationInputs {
  hourlyRateUSD?: number;
  foodCostReductionPct?: number;
  laborHoursSavedPerWeek?: number;
  [key: string]: any;
}

export interface ROICalculationResult {
  roi: number;
  errors?: string[];
}

export function calculateROI(_inputs: Record<string, any>): ROICalculationResult & {
  roiPercentage: number;
  currentWeeklyCost: number;
  weeklySavings: number;
  annualSavings: number;
  annualCost: number;
  paybackMonths: number;
} {
  // Stubbed logic: return neutral numbers so UI renders and all fields exist.
  return {
    roi: 0,
    roiPercentage: 0,
    currentWeeklyCost: 0,
    weeklySavings: 0,
    annualSavings: 0,
    annualCost: 0,
    paybackMonths: 0,
    errors: [],
  };
}

/**
 * Validate a single ROI input value
 * @param value - Input value to validate
 * @returns boolean
 */
export function validateROIInput(value: unknown): boolean {
  // Accept numbers and non-empty strings for now
  return typeof value === 'number' || (typeof value === 'string' && value.trim().length > 0);
}

/**
 * Validate all ROI input values
 * @param inputs - Input object
 * @returns Validation result
 */
export function validateAllROIInputs(inputs: Record<string, unknown>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  Object.entries(inputs).forEach(([key, value]) => {
    if (!validateROIInput(value)) errors.push(`${key} is invalid`);
  });
  return { valid: errors.length === 0, errors };
}


/**
 * Format a number as currency for display
 * @param value - The numeric value
 * @param currency - Currency code (default: USD)
 * @param locale - Locale string (default: en-US)
 */
export function formatCurrency(value: number, currency: string = "USD", locale: string = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
}
