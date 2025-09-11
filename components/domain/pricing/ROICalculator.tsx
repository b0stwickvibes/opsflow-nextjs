'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Calculator, ChevronDown, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { usePricingForm, useRateLimit } from '@/hooks/usePricingForm';
import { trackPricingEvent } from '@/lib/pricing/config';

interface ROICalculatorProps {
  experimentId?: string;
}

export default function ROICalculator({ experimentId }: ROICalculatorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { roiData, errors, updateROIData, calculateROI } = usePricingForm();
  const { isAllowed } = useRateLimit(20, 60000);

  const roiResults = calculateROI(roiData);

  const handleInputChange = (field: keyof typeof roiData, value: string) => {
    const numValue = parseFloat(value) || 0;
    if (!isAllowed()) return;

    updateROIData(field, numValue);
    trackPricingEvent({
      event: 'calculator_use',
      experimentId,
      metadata: { field, value: numValue, hasErrors: Object.keys(errors).length > 0 }
    });
  };

  const handleToggle = (open: boolean) => {
    setIsOpen(open);
    if (open) trackPricingEvent({ event: 'calculator_use', experimentId, metadata: { action: 'open' } });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Collapsible open={isOpen} onOpenChange={handleToggle}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="lg" className="w-full mb-8 hover:bg-accent transition-colors cta-shimmer" aria-expanded={isOpen} aria-controls="roi-calculator-content">
              <Calculator className="w-5 h-5 mr-2" aria-hidden="true" />
              Calculate Your Restaurant ROI
              <ChevronDown className={`w-5 h-5 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent id="roi-calculator-content">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" aria-hidden="true" />
                  Restaurant Operations ROI Calculator
                </CardTitle>
                <CardDescription>
                  See how much your restaurant could save with OpsFlow Professional plan. All calculations are estimates based on restaurant industry averages and operational efficiency improvements.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { key: 'employees' as const, label: 'Number of Employees', min: 1, max: 100000 },
                    { key: 'locations' as const, label: 'Number of Locations', min: 1, max: 10000 },
                    { key: 'currentCostPerHour' as const, label: 'Current Cost per Hour ($)', min: 1, max: 1000 },
                    { key: 'tasksPerWeek' as const, label: 'Tasks per Week', min: 1, max: 10000 },
                    { key: 'timePerTask' as const, label: 'Time per Task (minutes)', min: 1, max: 480 },
                    { key: 'auditFrequency' as const, label: 'Audits per Month', min: 0, max: 100 }
                  ].map(({ key, label, min, max }) => (
                    <div key={key} className="space-y-2">
                      <Label htmlFor={key} className="text-sm font-medium">{label}</Label>
                      <Input
                        id={key}
                        type="number"
                        min={min}
                        max={max}
                        value={roiData[key]}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                        className={errors[key] ? 'border-destructive focus:ring-destructive' : ''}
                        aria-describedby={errors[key] ? `${key}-error` : undefined}
                        aria-invalid={!!errors[key]}
                      />
                      {errors[key] && (
                        <p id={`${key}-error`} className="text-sm text-destructive flex items-center gap-1" role="alert">
                          <AlertCircle className="w-4 h-4" aria-hidden="true" />
                          {errors[key]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {roiResults.isValid ? (
                  <div className="border-t pt-8">
                    <h3 className="text-lg font-semibold mb-4">Projected Restaurant Operations Results</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-destructive" aria-label={`Current weekly cost: ${roiResults.currentWeeklyCost} dollars`}>
                          ${roiResults.currentWeeklyCost.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">Current Weekly Cost</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary" aria-label={`Improved weekly cost: ${roiResults.improvedWeeklyCost} dollars`}>
                          ${roiResults.improvedWeeklyCost.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">Improved Weekly Cost</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary" aria-label={`Annual savings: ${roiResults.annualSavings} dollars`}>
                          ${roiResults.annualSavings.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">Annual Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary" aria-label={`Payback period: ${roiResults.paybackMonths} months`}>
                          {roiResults.paybackMonths} mo
                        </div>
                        <div className="text-sm text-muted-foreground">Payback Period</div>
                      </div>
                    </div>

                    <Alert className="mt-6">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Restaurant Operations Methodology:</strong> Calculations assume 40% efficiency improvements in task completion and audit processes through HACCP automation, temperature monitoring, and streamlined staff management workflows. Results may vary based on your specific restaurant operations.
                      </AlertDescription>
                    </Alert>
                  </div>
                ) : (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>Please correct the errors above to see your restaurant ROI calculation.</AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
}