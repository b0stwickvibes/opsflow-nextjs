"use client";

import { Facebook, Linkedin, Twitter, MapPin, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type LeadCaptureProps = {
  industry?: 'restaurants' | 'bars' | 'coffee' | 'hotels';
  heading?: string;
  subheading?: string;
  badgeText?: string;
  onSubmit?: (data: LeadFormData) => void;
  className?: string;
};

interface LeadFormData {
  fullName: string;
  email: string;
  company: string;
  employees: string;
  message: string;
}

/**
 * Lead Capture Component
 * Clean lead generation form with restaurant operations focus
 * Uses enterprise styling system with OKLCH token system
 */
export function LeadCapture({
  industry = 'restaurants',
  heading = "Start Your Restaurant Operations Transformation",
  subheading = "Join hundreds of restaurants using OpsFlow to streamline operations, ensure compliance, and reduce costs. Get started with a personalized demo.",
  badgeText = "Get Started",
  onSubmit,
  className,
}: LeadCaptureProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    company: '',
    employees: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getIndustryContent = () => {
    const content = {
      restaurants: {
        employeeOptions: [
          "1-10 employees",
          "11-50 employees", 
          "51-200 employees",
          "200+ employees"
        ],
        companyLabel: "Restaurant Name",
        companyPlaceholder: "Your restaurant name",
        messagePlaceholder: "Tell us about your restaurant operations needs - HACCP compliance, staff management, temperature monitoring, etc."
      },
      bars: {
        employeeOptions: [
          "1-15 staff",
          "16-40 staff",
          "41-100 staff", 
          "100+ staff"
        ],
        companyLabel: "Bar/Venue Name",
        companyPlaceholder: "Your bar name",
        messagePlaceholder: "Describe your bar management requirements - inventory control, staff scheduling, compliance tracking, etc."
      },
      coffee: {
        employeeOptions: [
          "1-8 baristas",
          "9-25 baristas",
          "26-60 baristas",
          "60+ baristas"
        ],
        companyLabel: "Coffee Shop Name",
        companyPlaceholder: "Your coffee shop name",
        messagePlaceholder: "Share your coffee shop challenges - quality control, equipment monitoring, peak hour management, etc."
      },
      hotels: {
        employeeOptions: [
          "Boutique (1-50 rooms)",
          "Mid-scale (51-150 rooms)",
          "Full-service (151-400 rooms)",
          "Resort/Large (400+ rooms)"
        ],
        companyLabel: "Hotel Name",
        companyPlaceholder: "Your hotel name",
        messagePlaceholder: "Explain your hotel dining requirements - multi-venue management, guest experience, compliance coordination, etc."
      },
    };
    return content[industry] || content.restaurants;
  };

  const industryContent = getIndustryContent();

  const handleInputChange = (name: keyof LeadFormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        console.log('Lead captured:', formData);
      }
    } catch (error) {
      console.error('Lead capture error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("max-w-6xl mx-auto px-4 py-16 space-y-16", className)}>
      {/* Header Section */}
      <div className="text-center space-y-6">
        <Badge className="clerk-inspired-badge">
          <ArrowRight className="size-4" />
          {badgeText}
        </Badge>

        <h1 className="enterprise-headline">
          <span className="text-brand-gradient">{heading}</span>
        </h1>

        <p className="enterprise-body max-w-3xl mx-auto">
          {subheading}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-5 gap-12">
        
        {/* Left Column - Benefits & Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Key Benefits */}
          <div className="enterprise-card p-6">
            <h2 className="text-display-sm font-semibold mb-4">
              Why Choose OpsFlow?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">HACCP Compliance Made Easy</p>
                  <p className="text-sm text-muted-foreground">Automated temperature logs and audit trails</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Reduce Labor Costs by 25%</p>
                  <p className="text-sm text-muted-foreground">Smart scheduling and task automation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">99.8% Health Inspection Pass Rate</p>
                  <p className="text-sm text-muted-foreground">Real-time monitoring and alerts</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Setup in Under 48 Hours</p>
                  <p className="text-sm text-muted-foreground">White-glove onboarding and training</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="enterprise-card p-6">
            <h3 className="font-semibold mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">San Francisco HQ</p>
                  <p className="text-sm text-muted-foreground">1 Innovation Drive, Suite 200</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Sales Team</p>
                  <a 
                    href="mailto:sales@opsflow.com" 
                    className="text-sm text-primary hover:text-primary-600"
                  >
                    sales@opsflow.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t">
              <p className="text-sm font-medium mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary-50 hover:text-primary transition-colors"
                >
                  <Linkedin className="size-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary-50 hover:text-primary transition-colors"
                >
                  <Twitter className="size-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary-50 hover:text-primary transition-colors"
                >
                  <Facebook className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Lead Form */}
        <div className="lg:col-span-3">
          <div className="enterprise-card p-8">
            <div className="mb-6">
              <h2 className="text-display-sm font-semibold mb-2">
                Get Your Personalized Demo
              </h2>
              <p className="text-muted-foreground">
                See how OpsFlow can transform your restaurant operations in just 30 minutes.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    Full Name *
                  </Label>
                  <Input 
                    id="fullName"
                    placeholder="Your full name" 
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Business Email *
                  </Label>
                  <Input 
                    id="email"
                    placeholder="you@restaurant.com" 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">
                    {industryContent.companyLabel}
                  </Label>
                  <Input 
                    id="company"
                    placeholder={industryContent.companyPlaceholder}
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employees">
                    {industry === 'hotels' ? 'Property Size' : 'Team Size'}
                  </Label>
                  <select 
                    id="employees"
                    value={formData.employees}
                    onChange={(e) => handleInputChange('employees', e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-md focus:border-primary focus:ring-1 focus:ring-primary bg-background"
                  >
                    <option value="">Select size</option>
                    {industryContent.employeeOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Tell Us About Your Needs
                </Label>
                <Textarea
                  id="message"
                  placeholder={industryContent.messagePlaceholder}
                  className="min-h-[100px] resize-none"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
              </div>

              <Button 
                size="lg" 
                type="submit" 
                disabled={isSubmitting}
                className="w-full clerk-cta-primary"
              >
                {isSubmitting ? 'Requesting Demo...' : 'Request Demo'}
                <ArrowRight className="size-4 ml-2" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to receive communications from OpsFlow. 
                We respect your privacy and will never sell your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}