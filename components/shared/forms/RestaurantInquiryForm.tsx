'use client';
import { useEffect, useState } from 'react';
import { registerComponentLayout } from '@/lib/style-system/layout-differentiation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useCallback } from 'react';
import { z } from 'zod';

// Define analytics tracking function
const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // This would connect to your actual analytics provider
  console.log(`[Analytics] ${eventName}`, properties);
  // Example: posthog.capture(eventName, properties);
};

// Form validation schema
const inquiryFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  phone: z.string().optional(),
  restaurantType: z.string(),
  locations: z.string(),
  pos: z.string().optional(),
  inquiryType: z.string(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type InquiryFormData = z.infer<typeof inquiryFormSchema>;

// Error component for form fields
const FormFieldError = ({ message }: { message: string }) => (
  <div className="text-destructive text-xs mt-1 flex items-center">
    <AlertCircle className="h-3 w-3 mr-1" />
    {message}
  </div>
);

// Form options with proper typing
interface FormOption {
  value: string;
  label: string;
}

const restaurantTypes: FormOption[] = [
  { value: "fine-dining", label: "Fine Dining" },
  { value: "fast-casual", label: "Fast Casual" },
  { value: "bar", label: "Bar" },
  { value: "cafe", label: "Café" },
  { value: "night-club", label: "Night Club" },
  { value: "food-truck", label: "Food Truck" },
  { value: "other", label: "Other" },
  { value: "prefer-not-to-specify", label: "Prefer not to specify" }
];

const locationOptions: FormOption[] = [
  { value: "single", label: "Single" },
  { value: "2-5", label: "2-5" },
  { value: "6-15", label: "6-15" },
  { value: "16-50", label: "16-50" },
  { value: "50+", label: "50+" }
];

const inquiryTypes: FormOption[] = [
  { value: "sales-demo", label: "Sales & Demo" },
  { value: "technical-support", label: "Technical Support" },
  { value: "partnership", label: "Partnership" },
  { value: "pos-integration", label: "POS Integration" },
  { value: "general", label: "General" }
];

export function RestaurantInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<InquiryFormData>>({
    restaurantType: "fine-dining",
    inquiryType: "sales-demo",
    locations: "single"
  });
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  
  useEffect(() => {
    registerComponentLayout('RestaurantInquiryForm', 'marketing');
  }, []);
  
  // Update form data with proper type checking
  const updateFormField = useCallback(<K extends keyof InquiryFormData>(field: K, value: InquiryFormData[K]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear the error for this field when it's updated
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [errors]);

  const validateForm = useCallback(() => {
    try {
      inquiryFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path.length > 0) {
            const field = err.path[0] as keyof InquiryFormData;
            newErrors[field] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  }, [formData]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Alert the user instead of using toast
      alert("Please correct the errors in the form");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Track form submission attempt
      trackEvent('contact_form_submit_attempt', {
        inquiryType: formData.inquiryType,
        restaurantType: formData.restaurantType,
        locationSize: formData.locations
      });
      
      // Simulate API call with random success/failure
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would submit to your API here
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // 
      // if (!response.ok) throw new Error('Failed to submit form');
      
      // Success tracking
      trackEvent('contact_form_submit_success', {
        inquiryType: formData.inquiryType,
        restaurantType: formData.restaurantType
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      // Alert the user instead of using toast
      alert("Failed to submit form. Please try again.");
      
      // Error tracking
      trackEvent('contact_form_submit_error', {
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  // Success state with improved a11y
  if (submitted) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center" aria-hidden="true">
                <CheckCircle className="h-16 w-16 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4" tabIndex={0}>Thank You for Reaching Out!</h2>
              <p className="text-muted-foreground mb-6">
                We've received your inquiry and will get back to you within 24 hours.
              </p>
              <Button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    restaurantType: "fine-dining",
                    inquiryType: "sales-demo",
                    locations: "single"
                  });
                  trackEvent('contact_form_restart');
                }} 
                variant="outline"
                aria-label="Send another inquiry"
              >
                Send Another Inquiry
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell us about your restaurant operations needs and we'll get back to you promptly
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* GDPR consent notice */}
              <div className="bg-muted p-3 rounded-md text-xs text-muted-foreground mb-4">
                <p>We collect and process your data to respond to your inquiry and provide relevant information about OpsFlow. See our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> for details on how we safeguard your information.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    value={formData.name || ''}
                    onChange={(e) => updateFormField('name', e.target.value)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <FormFieldError message={errors.name} />}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email || ''}
                    onChange={(e) => updateFormField('email', e.target.value)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <FormFieldError message={errors.email} />}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company <span className="text-destructive">*</span></Label>
                  <Input 
                    id="company" 
                    placeholder="Restaurant name" 
                    value={formData.company || ''}
                    onChange={(e) => updateFormField('company', e.target.value)}
                    aria-describedby={errors.company ? "company-error" : undefined}
                    aria-invalid={!!errors.company}
                  />
                  {errors.company && <FormFieldError message={errors.company} />}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    placeholder="(555) 123-4567" 
                    value={formData.phone || ''}
                    onChange={(e) => updateFormField('phone', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Restaurant Type <span className="text-destructive">*</span></Label>
                <RadioGroup 
                  value={formData.restaurantType} 
                  onValueChange={(value) => updateFormField('restaurantType', value)}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-2"
                >
                  {restaurantTypes.map((type) => (
                    <div key={type.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={type.value} id={type.value} />
                      <Label htmlFor={type.value} className="text-sm cursor-pointer">{type.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.restaurantType && <FormFieldError message={errors.restaurantType} />}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="locations">Number of Locations <span className="text-destructive">*</span></Label>
                  <Select value={formData.locations} onValueChange={(value) => updateFormField('locations', value)}>
                    <SelectTrigger id="locations">
                      <SelectValue placeholder="Select number of locations" />
                    </SelectTrigger>
                    <SelectContent>
                      {locationOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.locations && <FormFieldError message={errors.locations} />}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="pos">Current POS (optional)</Label>
                  <Input 
                    id="pos" 
                    placeholder="e.g., Toast, Square, Clover" 
                    value={formData.pos || ''}
                    onChange={(e) => updateFormField('pos', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Inquiry Type <span className="text-destructive">*</span></Label>
                <RadioGroup 
                  value={formData.inquiryType} 
                  onValueChange={(value) => updateFormField('inquiryType', value)}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2"
                >
                  {inquiryTypes.map((type) => (
                    <div key={type.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={type.value} id={type.value} />
                      <Label htmlFor={type.value} className="text-sm cursor-pointer">{type.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.inquiryType && <FormFieldError message={errors.inquiryType} />}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your restaurant operations needs..."
                  className="min-h-[120px]"
                  value={formData.message || ''}
                  onChange={(e) => updateFormField('message', e.target.value)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <FormFieldError message={errors.message} />}
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <p className="text-xs text-muted-foreground"><span className="text-destructive">*</span> Required fields</p>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
