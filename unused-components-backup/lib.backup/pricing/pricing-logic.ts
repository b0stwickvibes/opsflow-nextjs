/**
 * Pricing Business Logic & Data Layer
 * Separates business logic from presentation for better maintainability
 */

export interface PricingPlan {
  id: 'starter' | 'professional' | 'enterprise';
  name: string;
  subtitle: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  limitations: string[];
  cta: string;
  ctaVariant: 'default' | 'outline';
  popular: boolean;
}

export interface ROIInputs {
  employees: number;
  locations: number;
  currentHourlyRate: number;
  tasksPerWeek: number;
  minutesPerTask: number;
  auditFrequency: number;
  hoursPerAudit: number;
}

export interface ROIOutputs {
  currentWeeklyCost: number;
  improvedWeeklyCost: number;
  weeklySavings: number;
  annualSavings: number;
  annualCost: number;
  roiPercentage: number;
  paybackMonths: number;
}

// Validation rules for user inputs
export const VALIDATION_RULES = {
  employees: { min: 1, max: 10000, label: 'Number of employees' },
  locations: { min: 1, max: 1000, label: 'Number of locations' },
  currentHourlyRate: { min: 5, max: 200, label: 'Hourly rate' },
  tasksPerWeek: { min: 1, max: 500, label: 'Tasks per week' },
  minutesPerTask: { min: 1, max: 480, label: 'Minutes per task' },
  auditFrequency: { min: 0, max: 30, label: 'Audit frequency' },
  hoursPerAudit: { min: 0.5, max: 40, label: 'Hours per audit' }
};

// Business configuration that can be updated without code changes
export const BUSINESS_CONFIG = {
  efficiencyImprovement: 0.4, // 40% improvement
  professionalPlanAnnualPrice: 2490,
  annualDiscountPercentage: 20
};

// Restaurant-focused pricing plans
export const RESTAURANT_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Perfect for small restaurants getting started',
    monthlyPrice: 99,
    annualPrice: 990,
    features: [
      'Up to 5 temperature sensors',
      'Basic HACCP compliance tracking',
      'Standard digital checklists',
      'Email support',
      'Mobile app access',
      'Basic reporting dashboard',
      '25 GB cloud storage'
    ],
    limitations: [
      'Limited POS integrations',
      'No custom compliance workflows',
      'No API access'
    ],
    cta: 'Start Free Trial',
    ctaVariant: 'outline',
    popular: false
  },
  {
    id: 'professional',
    name: 'Professional',
    subtitle: 'Best for growing restaurant operations',
    monthlyPrice: 249,
    annualPrice: 2490,
    features: [
      'Up to 20 temperature sensors',
      'Advanced HACCP automation',
      'Custom digital checklists',
      'Priority support',
      'Mobile & web dashboard access',
      'Advanced analytics & reporting',
      'Unlimited cloud storage',
      'Custom staff roles & permissions',
      'Full API access',
      'POS & inventory integrations',
      'Automated audit workflows',
      'Multi-location management'
    ],
    limitations: [],
    cta: 'Start Free Trial',
    ctaVariant: 'default',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'For restaurant groups with complex needs',
    monthlyPrice: 499,
    annualPrice: 4990,
    features: [
      'Unlimited temperature sensors',
      'Enterprise HACCP management',
      'Custom workflow development',
      'Dedicated account manager',
      'Enterprise-grade reporting',
      'Unlimited cloud storage',
      'Advanced security controls',
      'Custom integrations',
      'White-label options',
      'Advanced compliance workflows',
      'Custom analytics dashboards',
      '99.9% SLA guarantee',
      'Training & onboarding included'
    ],
    limitations: [],
    cta: 'Contact Sales',
    ctaVariant: 'outline',
    popular: false
  }
];

// Input validation with user-friendly messages
export interface ValidationError {
  field: keyof ROIInputs;
  message: string;
}

export function validateROIInput(field: keyof ROIInputs, value: number): ValidationError | null {
  const rule = VALIDATION_RULES[field];
  
  if (value < rule.min) {
    return {
      field,
      message: `${rule.label} must be at least ${rule.min}`
    };
  }
  
  if (value > rule.max) {
    return {
      field,
      message: `${rule.label} cannot exceed ${rule.max}`
    };
  }
  
  return null;
}

export function validateAllROIInputs(inputs: ROIInputs): ValidationError[] {
  const errors: ValidationError[] = [];
  
  Object.entries(inputs).forEach(([field, value]) => {
    const error = validateROIInput(field as keyof ROIInputs, value);
    if (error) {
      errors.push(error);
    }
  });
  
  return errors;
}

// ROI calculation with memoization-ready pure function
export function calculateROI(inputs: ROIInputs): ROIOutputs {
  const { efficiencyImprovement, professionalPlanAnnualPrice } = BUSINESS_CONFIG;
  
  // Current costs
  const taskHoursPerWeek = (inputs.tasksPerWeek * inputs.minutesPerTask) / 60;
  const auditHoursPerMonth = inputs.auditFrequency * inputs.hoursPerAudit;
  const auditHoursPerWeek = (auditHoursPerMonth * 12) / 52;
  
  const currentWeeklyTaskCost = taskHoursPerWeek * inputs.currentHourlyRate;
  const currentWeeklyAuditCost = auditHoursPerWeek * inputs.currentHourlyRate;
  const currentWeeklyCost = (currentWeeklyTaskCost + currentWeeklyAuditCost) * inputs.locations;

  // Improved costs with efficiency gains
  const improvedTaskHoursPerWeek = taskHoursPerWeek * (1 - efficiencyImprovement);
  const improvedAuditHoursPerWeek = auditHoursPerWeek * (1 - efficiencyImprovement);
  
  const improvedWeeklyTaskCost = improvedTaskHoursPerWeek * inputs.currentHourlyRate;
  const improvedWeeklyAuditCost = improvedAuditHoursPerWeek * inputs.currentHourlyRate;
  const improvedWeeklyCost = (improvedWeeklyTaskCost + improvedWeeklyAuditCost) * inputs.locations;

  // Savings calculations
  const weeklySavings = Math.max(0, currentWeeklyCost - improvedWeeklyCost);
  const annualSavings = weeklySavings * 52;
  
  // Professional plan cost
  const annualCost = professionalPlanAnnualPrice * inputs.locations;
  
  // ROI calculations with safety checks
  const netAnnualBenefit = annualSavings - annualCost;
  const roiPercentage = annualCost > 0 ? (netAnnualBenefit / annualCost) * 100 : 0;
  const paybackMonths = weeklySavings > 0 ? annualCost / (weeklySavings * 4.33) : 0;

  return {
    currentWeeklyCost,
    improvedWeeklyCost,
    weeklySavings,
    annualSavings,
    annualCost,
    roiPercentage,
    paybackMonths: Math.max(0, paybackMonths)
  };
}

// Analytics tracking interface
export interface AnalyticsEvent {
  action: string;
  plan?: string;
  value?: number;
  properties?: Record<string, any>;
}

// Pricing savings calculation
export function calculateAnnualSavings(monthlyPrice: number, annualPrice: number) {
  const annualFromMonthly = monthlyPrice * 12;
  const savings = annualFromMonthly - annualPrice;
  const percentage = Math.round((savings / annualFromMonthly) * 100);
  return { amount: savings, percentage };
}

// Currency formatting utility
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(Math.abs(amount));
}