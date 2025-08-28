'use client';

import { useState, useCallback } from 'react';

// Restaurant operations ROI calculation data
interface ROIData {
  employees: number;
  locations: number;
  currentCostPerHour: number;
  tasksPerWeek: number;
  timePerTask: number;
  auditFrequency: number;
}

interface ROIResults {
  currentWeeklyCost: number;
  improvedWeeklyCost: number;
  annualSavings: number;
  paybackMonths: number;
  isValid: boolean;
}

export function usePricingForm() {
  const [roiData, setROIData] = useState<ROIData>({
    employees: 10,
    locations: 1,
    currentCostPerHour: 15,
    tasksPerWeek: 20,
    timePerTask: 30,
    auditFrequency: 4
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ROIData, string>>>({});

  const validateField = (field: keyof ROIData, value: number): string | null => {
    const validations: Record<keyof ROIData, { min: number; max: number; message: string }> = {
      employees: { min: 1, max: 100000, message: 'Must be between 1 and 100,000' },
      locations: { min: 1, max: 10000, message: 'Must be between 1 and 10,000' },
      currentCostPerHour: { min: 1, max: 1000, message: 'Must be between $1 and $1,000' },
      tasksPerWeek: { min: 1, max: 10000, message: 'Must be between 1 and 10,000' },
      timePerTask: { min: 1, max: 480, message: 'Must be between 1 and 480 minutes' },
      auditFrequency: { min: 0, max: 100, message: 'Must be between 0 and 100' }
    };

    const validation = validations[field];
    if (value < validation.min || value > validation.max) {
      return validation.message;
    }
    return null;
  };

  const updateROIData = useCallback((field: keyof ROIData, value: number) => {
    setROIData(prev => ({ ...prev, [field]: value }));
    
    const error = validateField(field, value);
    setErrors(prev => ({
      ...prev,
      [field]: error || undefined
    }));
  }, []);

  const calculateROI = useCallback((data: ROIData): ROIResults => {
    const hasErrors = Object.values(errors).some(error => error);
    
    if (hasErrors) {
      return {
        currentWeeklyCost: 0,
        improvedWeeklyCost: 0,
        annualSavings: 0,
        paybackMonths: 0,
        isValid: false
      };
    }

    // Restaurant operations efficiency calculations
    const hoursPerTask = data.timePerTask / 60;
    const weeklyTaskHours = data.tasksPerWeek * hoursPerTask;
    const weeklyAuditHours = (data.auditFrequency / 4.33) * 2; // 2 hours per audit
    
    const currentWeeklyCost = Math.round((weeklyTaskHours + weeklyAuditHours) * data.currentCostPerHour);
    
    // Assume 40% efficiency improvement with OpsFlow automation
    const efficiencyImprovement = 0.40;
    const improvedWeeklyCost = Math.round(currentWeeklyCost * (1 - efficiencyImprovement));
    
    const weeklySavings = currentWeeklyCost - improvedWeeklyCost;
    const annualSavings = Math.round(weeklySavings * 52);
    
    // Professional plan cost for calculation
    const annualPlatformCost = 1440; // Professional plan
    const paybackMonths = Math.round(annualPlatformCost / (weeklySavings * 4.33));

    return {
      currentWeeklyCost,
      improvedWeeklyCost,
      annualSavings,
      paybackMonths: Math.max(1, paybackMonths),
      isValid: true
    };
  }, [errors]);

  return {
    roiData,
    errors,
    updateROIData,
    calculateROI
  };
}

// Rate limiting for form interactions
export function useRateLimit(maxRequests: number, windowMs: number) {
  const [requests, setRequests] = useState<number[]>([]);

  const isAllowed = useCallback(() => {
    const now = Date.now();
    const windowStart = now - windowMs;
    
    // Clean old requests
    const recentRequests = requests.filter(time => time > windowStart);
    
    if (recentRequests.length >= maxRequests) {
      return false;
    }

    setRequests([...recentRequests, now]);
    return true;
  }, [requests, maxRequests, windowMs]);

  return { isAllowed };
}