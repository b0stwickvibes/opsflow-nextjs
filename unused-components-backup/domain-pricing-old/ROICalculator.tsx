'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Calculator, ChevronDown, ChevronUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';
import { trackInteraction } from '@/lib/analytics';

// Types
interface ROIInputs {
  employees: number;
  locations: number;
  currentHourlyRate: number;
  tasksPerWeek: number;
  minutesPerTask: number;
  auditFrequency: number;
  hoursPerAudit: number;
}

interface ROIOutputs {
  currentWeeklyCost: number;
  weeklySavings: number;
  annualSavings: number;
  annualCost: number;
  roiPercentage: number;
  paybackMonths: number;
}

// Utility functions
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(amount);
}

function calculateROI(inputs: ROIInputs): ROIOutputs {
  const professionalPlanPrice = 149; // Monthly price per location
  const efficiencyGain = 0.4; // 40% efficiency improvement
  
  // Calculate current costs
  const weeklyTaskCost = (inputs.tasksPerWeek * inputs.minutesPerTask / 60) * inputs.currentHourlyRate;
  const weeklyAuditCost = (inputs.auditFrequency * inputs.hoursPerAudit / 4) * inputs.currentHourlyRate;
  const currentWeeklyCost = (weeklyTaskCost + weeklyAuditCost) * inputs.locations;
  
  // Calculate savings
  const weeklySavings = currentWeeklyCost * efficiencyGain;
  const annualSavings = weeklySavings * 52;
  
  // Calculate costs and ROI
  const annualCost = professionalPlanPrice * 12 * inputs.locations;
  const netAnnualBenefit = annualSavings - annualCost;
  const roiPercentage = (netAnnualBenefit / annualCost) * 100;
  const paybackMonths = annualCost / (weeklySavings * 4.33);
  
  return {
    currentWeeklyCost,
    weeklySavings,
    annualSavings,
    annualCost,
    roiPercentage,
    paybackMonths
  };
}

// Default values with realistic restaurant scenarios
const DEFAULT_INPUTS: ROIInputs = {
  employees: 25,
  locations: 2,
  currentHourlyRate: 18,
  tasksPerWeek: 50,
  minutesPerTask: 15,
  auditFrequency: 2,
  hoursPerAudit: 8
};

interface InputFieldProps {
  id: keyof ROIInputs;
  label: string;
  value: number;
  onChange: (field: keyof ROIInputs, value: number) => void;
  step?: number;
  suffix?: string;
}

function InputField({ id, label, value, onChange, step = 1, suffix }: InputFieldProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    onChange(id, newValue);
  }, [id, onChange]);

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
        {suffix && <span className="text-gray-500 ml-1">{suffix}</span>}
      </Label>
      <Input
        id={id}
        type="number"
        value={value}
        onChange={handleChange}
        min="0"
        step={step}
        className="bg-white border-gray-300 text-gray-900"
      />
    </div>
  );
}

interface ResultCardProps {
  title: string;
  value: string;
  colorTheme: 'red' | 'green' | 'blue' | 'purple';
  description?: string;
}

function ResultCard({ title, value, colorTheme, description }: ResultCardProps) {
  const colorClasses = {
    red: 'bg-red-50 border-red-200 text-red-800',
    green: 'bg-green-50 border-green-200 text-green-800', 
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800'
  };

  return (
    <div className={`p-6 rounded-lg border-2 ${colorClasses[colorTheme]} bg-opacity-50`}>
      <div className="text-center">
        <div className="text-3xl font-bold mb-2">
          {value}
        </div>
        <div className="text-sm font-semibold mb-1">
          {title}
        </div>
        {description && (
          <div className="text-xs opacity-75">
            {description}
          </div>
        )}
      </div>
    </div>
  );
}

export function ROICalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState<ROIInputs>(DEFAULT_INPUTS);

  // Register with layout validator
  useEffect(() => {
    registerComponentLayout('ROICalculator', 'marketing');
  }, []);

  // Track calculator usage
  useEffect(() => {
    if (isOpen) {
      trackInteraction('roi_calculator_opened', { inputs });
    }
  }, [isOpen, inputs]);

  // Memoized ROI calculation for performance
  const results = useMemo(() => {
    return calculateROI(inputs);
  }, [inputs]);

  const handleInputChange = useCallback((field: keyof ROIInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const toggleCalculator = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Restaurant Operations ROI Calculator</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how much your restaurant can save with OpsFlow's automated operations management
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-white shadow-lg">
          <CardHeader 
            className="cursor-pointer hover:bg-gray-50 transition-colors border-b"
            onClick={toggleCalculator}
          >
            <CardTitle className="flex items-center justify-between text-gray-900">
              <div className="flex items-center gap-3">
                <Calculator className="h-6 w-6 text-blue-600" />
                Calculate Your Restaurant's ROI
              </div>
              {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </CardTitle>
          </CardHeader>

          {/* Enhanced collapsible content */}
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <CardContent className="space-y-8 bg-white">
              
              {/* Input Fields Grid */}
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6">
                <InputField
                  id="employees"
                  label="Number of Employees"
                  value={inputs.employees}
                  onChange={handleInputChange}
                />
                
                <InputField
                  id="locations"
                  label="Number of Locations"
                  value={inputs.locations}
                  onChange={handleInputChange}
                />
                
                <InputField
                  id="currentHourlyRate"
                  label="Average Hourly Rate"
                  value={inputs.currentHourlyRate}
                  onChange={handleInputChange}
                  step={0.5}
                  suffix="($)"
                />
                
                <InputField
                  id="tasksPerWeek"
                  label="Compliance Tasks/Week"
                  value={inputs.tasksPerWeek}
                  onChange={handleInputChange}
                />
                
                <InputField
                  id="minutesPerTask"
                  label="Minutes per Task"
                  value={inputs.minutesPerTask}
                  onChange={handleInputChange}
                />
                
                <InputField
                  id="auditFrequency"
                  label="Health Audits/Month"
                  value={inputs.auditFrequency}
                  onChange={handleInputChange}
                />
                
                <div className="md:col-span-2 lg:col-span-1">
                  <InputField
                    id="hoursPerAudit"
                    label="Hours per Audit"
                    value={inputs.hoursPerAudit}
                    onChange={handleInputChange}
                    step={0.5}
                  />
                </div>
              </div>

              {/* Results Section */}
              <div className="border-t pt-8 border-gray-200">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Your Restaurant ROI Results</h3>
                
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  <ResultCard
                    title="Current Weekly Cost"
                    value={formatCurrency(results.currentWeeklyCost)}
                    colorTheme="red"
                    description="Operations labor costs"
                  />
                  
                  <ResultCard
                    title="Weekly Savings"
                    value={formatCurrency(results.weeklySavings)}
                    colorTheme="green"
                    description="With OpsFlow automation"
                  />
                  
                  <ResultCard
                    title="Annual Savings"
                    value={formatCurrency(results.annualSavings)}
                    colorTheme="blue"
                    description="Total yearly benefit"
                  />
                  
                  <ResultCard
                    title="Annual ROI"
                    value={`${results.roiPercentage.toFixed(0)}%`}
                    colorTheme="purple"
                    description="Return on investment"
                  />
                </div>
                
                {/* Financial Summary */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">OpsFlow Professional Annual Cost:</span>
                      <span className="font-bold text-gray-900">{formatCurrency(results.annualCost)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Payback Period:</span>
                      <span className="font-bold text-green-600">
                        {results.paybackMonths.toFixed(1)} months
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Calculation Assumptions */}
                <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">Calculation Assumptions:</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• 40% time reduction on compliance tasks through automation</li>
                    <li>• 40% faster audit preparation with digital checklists</li>
                    <li>• Professional plan pricing used for calculations ($149/month per location)</li>
                    <li>• Savings based on reduced labor hours for operations management</li>
                  </ul>
                </div>

                {/* CTA for high ROI results */}
                {results.roiPercentage > 100 && (
                  <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg text-center">
                    <p className="text-green-800 font-semibold mb-4 text-lg">
                      Outstanding ROI potential! Your restaurant could save significantly with OpsFlow.
                    </p>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
                      onClick={() => trackInteraction('roi_calculator_cta_clicked', { roiPercentage: results.roiPercentage })}
                    >
                      Start Your Free Trial
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}