"use client";

import { Facebook, Linkedin, Twitter, MapPin, Mail } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";
import { cn } from "@/lib/utils";

interface LeadCaptureProps {
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  heading?: string;
  subheading?: string;
  officeTitle?: string;
  officeAddress?: string;
  emailTitle?: string;
  followTitle?: string;
  formTitle?: string;
  submitText?: string;
  onSubmit?: (data: LeadFormData) => void;
  className?: string;
}

interface LeadFormData {
  fullName: string;
  email: string;
  company: string;
  employees: string;
  message: string;
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
}

interface FormField {
  label: string;
  name: keyof LeadFormData;
  placeholder: string;
  type: 'text' | 'email' | 'textarea';
  optional?: boolean;
  options?: string[];
}

export function LeadCapture({
  industry = 'restaurants',
  role = 'general',
  heading = "Get Started with OpsFlow",
  subheading = "Transform your restaurant operations with our comprehensive platform",
  officeTitle = "Headquarters",
  officeAddress = "1 Innovation Drive\nSuite 200, San Francisco, CA 94105",
  emailTitle = "Contact Us",
  followTitle = "Connect",
  formTitle = "Request a Demo",
  submitText = "Submit Request",
  onSubmit,
  className,
}: LeadCaptureProps) {
  const { trackInteraction } = useRestaurantAnalytics();
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    company: '',
    employees: '',
    message: '',
    industry,
    role,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getIndustrySpecificContent = () => {
    const content = {
      restaurants: {
        subheading: "Streamline your restaurant operations with industry-leading technology",
        formTitle: "Restaurant Demo Request",
        emailCategories: [
          { category: "Restaurant Sales", email: "sales@opsflow.com" },
          { category: "Technical Support", email: "support@opsflow.com" }
        ],
        employeeOptions: [
          "1-10 employees",
          "11-50 employees", 
          "51-200 employees",
          "200+ employees"
        ]
      },
      bars: {
        subheading: "Optimize your bar operations with specialized management tools",
        formTitle: "Bar Operations Demo",
        emailCategories: [
          { category: "Bar Solutions", email: "bars@opsflow.com" },
          { category: "Support", email: "support@opsflow.com" }
        ],
        employeeOptions: [
          "1-15 staff",
          "16-40 staff",
          "41-100 staff", 
          "100+ staff"
        ]
      },
      coffee: {
        subheading: "Enhance your coffee shop operations with smart automation",
        formTitle: "Coffee Shop Demo",
        emailCategories: [
          { category: "Coffee Solutions", email: "coffee@opsflow.com" },
          { category: "Support", email: "support@opsflow.com" }
        ],
        employeeOptions: [
          "1-8 baristas",
          "9-25 baristas",
          "26-60 baristas",
          "60+ baristas"
        ]
      },
      hotels: {
        subheading: "Elevate your hotel dining operations with integrated solutions",
        formTitle: "Hotel Dining Demo",
        emailCategories: [
          { category: "Hospitality Sales", email: "hotels@opsflow.com" },
          { category: "Support", email: "support@opsflow.com" }
        ],
        employeeOptions: [
          "Boutique (1-50 rooms)",
          "Mid-scale (51-150 rooms)",
          "Full-service (151-400 rooms)",
          "Resort/Large (400+ rooms)"
        ]
      },
      general: {
        subheading: "Optimize your business operations with our platform",
        formTitle: "Demo Request",
        emailCategories: [
          { category: "Sales", email: "sales@opsflow.com" },
          { category: "Support", email: "support@opsflow.com" }
        ],
        employeeOptions: [
          "1-10 employees",
          "11-50 employees",
          "51-200 employees",
          "200+ employees"
        ]
      }
    };
    return content[industry as keyof typeof content] || content.general;
  };

  const industryContent = getIndustrySpecificContent();

  const getFormFields = (): FormField[] => [
    {
      label: "Full name",
      name: "fullName",
      placeholder: "First and last name",
      type: "text",
    },
    {
      label: "Business email address",
      name: "email",
      placeholder: "me@company.com",
      type: "email",
    },
    {
      label: industry === 'restaurants' ? 'Restaurant name' :
             industry === 'bars' ? 'Bar/Venue name' :
             industry === 'coffee' ? 'Coffee shop name' :
             industry === 'hotels' ? 'Hotel name' : 'Company name',
      name: "company",
      placeholder: industry === 'restaurants' ? 'Restaurant name' :
                   industry === 'bars' ? 'Bar name' :
                   industry === 'coffee' ? 'Coffee shop name' :
                   industry === 'hotels' ? 'Hotel name' : 'Company name',
      type: "text",
      optional: true,
    },
    {
      label: industry === 'hotels' ? 'Property size' : 'Number of employees',
      name: "employees",
      placeholder: industry === 'hotels' ? 'Select property size' : 'Select business size',
      type: "text",
      optional: true,
      options: industryContent.employeeOptions,
    },
    {
      label: "Your message",
      name: "message",
      placeholder: industry === 'restaurants' ? 'Tell us about your restaurant operations needs' :
                   industry === 'bars' ? 'Describe your bar management requirements' :
                   industry === 'coffee' ? 'Share your coffee shop challenges' :
                   industry === 'hotels' ? 'Explain your hotel dining requirements' : 'Write your message',
      type: "textarea",
    },
  ];

  const handleInputChange = (name: keyof LeadFormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackInteraction('lead_capture_submit', {
      industry,
      role,
      company_size: formData.employees,
      has_company: !!formData.company,
      form_type: 'lead_capture',
    });

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default submission logic
        console.log('Lead captured:', formData);
      }
    } catch (error) {
      console.error('Lead capture error:', error);
      trackInteraction('lead_capture_error', {
        industry,
        role,
        error: 'submission_failed',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (platform: string) => {
    trackInteraction('lead_capture_social_click', {
      industry,
      role,
      platform,
    });
  };

  const handleEmailClick = (category: string) => {
    trackInteraction('lead_capture_email_click', {
      industry,
      role,
      category,
    });
  };

  const formFields = getFormFields();

  return (
    <section className={cn("py-32", className)}>
      <div className="container max-w-4xl">
        <h1 
          className="text-display-2xl enterprise-headline text-center  font-semibold tracking-tight sm:"
          role="heading"
          aria-level={1}
        >
          {heading}
        </h1>
        <p className="mt-4 text-center text-muted-foreground">
          {industryContent.subheading}
        </p>

        <div className="mt-8 flex gap-10 max-md:flex-col md:mt-12 md:divide-x">
          {/* Contact Information */}
          <div className="space-y-10 pr-10 md:gap-20">
            <div>
              <h2 className="enterprise-body  font-semibold flex items-center gap-2">
                <MapPin className="size-4" aria-hidden="true" />
                {officeTitle}
              </h2>
              <p className="mt-3 font-medium tracking-tight text-muted-foreground whitespace-pre-line">
                {officeAddress}
              </p>
            </div>

            <div>
              <h2 className="enterprise-body  font-semibold flex items-center gap-2">
                <Mail className="size-4" aria-hidden="true" />
                {emailTitle}
              </h2>
              <div className="mt-3 space-y-2">
                {industryContent.emailCategories.map((category, index) => (
                  <div key={index}>
                    <p className="text-primary font-medium">{category.category}</p>
                    <a
                      href={`mailto:${category.email}`}
                      className="mt-1 block tracking-tight text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => handleEmailClick(category.category)}
                    >
                      {category.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="enterprise-body  font-semibold">{followTitle}</h2>
              <div className="mt-3 flex gap-6">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => handleSocialClick('facebook')}
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="size-6" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => handleSocialClick('twitter')}
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="size-6" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => handleSocialClick('linkedin')}
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="size-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="flex-1 pl-0 md:pl-10">
            <h2 className="enterprise-body  font-semibold">{industryContent.formTitle}</h2>
            <form className="mt-5 space-y-5" onSubmit={handleSubmit}>
              {formFields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <Label htmlFor={field.name}>
                    {field.label}
                    {field.optional && (
                      <span className="text-muted-foreground/60">
                        {" "}
                        (optional)
                      </span>
                    )}
                  </Label>
                  {field.type === "textarea" ? (
                    <Textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="min-h-[120px] resize-none"
                      value={formData[field.name]}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      required={!field.optional}
                    />
                  ) : (
                    <Input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      list={field.options ? `${field.name}-options` : undefined}
                      value={formData[field.name]}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      required={!field.optional}
                    />
                  )}
                  {field.options && (
                    <datalist id={`${field.name}-options`}>
                      {field.options.map((option, index) => (
                        <option key={index} value={option} />
                      ))}
                    </datalist>
                  )}
                </div>
              ))}

              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="min-w-[140px]"
                >
                  {isSubmitting ? 'Submitting...' : submitText}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}