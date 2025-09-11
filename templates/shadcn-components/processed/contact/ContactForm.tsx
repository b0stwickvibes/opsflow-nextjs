"use client";

import { Facebook, Linkedin, Twitter, MapPin, Mail, Phone } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { useRestaurantAnalytics } from "@/lib/hooks/restaurant-pages";
import type { IndustryType, RoleType } from "@/types/restaurant-pages";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
  heading?: string;
  subheading?: string;
  officeTitle?: string;
  officeAddress?: string;
  emailTitle?: string;
  followTitle?: string;
  inquiriesTitle?: string;
  submitText?: string;
  onSubmit?: (data: FormData) => void;
  className?: string;
}

interface FormData {
  fullName: string;
  email: string;
  company: string;
  businessSize: string;
  message: string;
  industry?: IndustryType | 'general';
  role?: RoleType | 'general';
}

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function ContactForm({
  industry = 'restaurants',
  role = 'general',
  heading = "Contact OpsFlow",
  subheading = "Get in touch with our restaurant operations specialists",
  officeTitle = "Corporate Office",
  officeAddress = "1 Innovation Drive\nSuite 200, San Francisco, CA 94105",
  emailTitle = "Email Us",
  followTitle = "Follow Us",
  inquiriesTitle = "Restaurant Inquiries",
  submitText = "Send Message",
  onSubmit,
  className,
}: ContactFormProps) {
  const { trackInteraction } = useRestaurantAnalytics();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    businessSize: '',
    message: '',
    industry,
    role,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getIndustrySpecificContent = () => {
    const content = {
      restaurants: {
        subheading: "Connect with our restaurant operations experts",
        inquiriesTitle: "Restaurant Solutions",
        businessSizeOptions: ["1-5 locations", "6-20 locations", "21-50 locations", "50+ locations"],
        emailCategories: [
          { category: "Restaurant Operations", email: "restaurants@opsflow.com" },
          { category: "Multi-Location Support", email: "enterprise@opsflow.com" }
        ]
      },
      bars: {
        subheading: "Connect with our bar and nightlife specialists",
        inquiriesTitle: "Bar Operations",
        businessSizeOptions: ["Single venue", "2-5 venues", "6-15 venues", "15+ venues"],
        emailCategories: [
          { category: "Bar Operations", email: "bars@opsflow.com" },
          { category: "Nightlife Management", email: "nightlife@opsflow.com" }
        ]
      },
      coffee: {
        subheading: "Connect with our coffee shop operations team",
        inquiriesTitle: "Coffee Shop Solutions",
        businessSizeOptions: ["Single shop", "2-5 shops", "6-20 shops", "Chain operations"],
        emailCategories: [
          { category: "Coffee Operations", email: "coffee@opsflow.com" },
          { category: "Franchise Support", email: "franchise@opsflow.com" }
        ]
      },
      hotels: {
        subheading: "Connect with our hospitality dining specialists",
        inquiriesTitle: "Hotel Dining Solutions",
        businessSizeOptions: ["Boutique hotel", "Mid-scale hotel", "Full-service hotel", "Resort operations"],
        emailCategories: [
          { category: "Hotel Dining", email: "hotels@opsflow.com" },
          { category: "Resort Operations", email: "resorts@opsflow.com" }
        ]
      },
      general: {
        subheading: "Connect with our operations specialists",
        inquiriesTitle: "Business Inquiries",
        businessSizeOptions: ["Small business", "Medium business", "Large business", "Enterprise"],
        emailCategories: [
          { category: "General Inquiries", email: "info@opsflow.com" },
          { category: "Support", email: "support@opsflow.com" }
        ]
      }
    };
    return content[industry as keyof typeof content] || content.general;
  };

  const industryContent = getIndustrySpecificContent();

  const getIndustryColors = () => {
    switch (industry) {
      case 'restaurants': return 'from-orange-50 via-background to-background dark:from-orange-950';
      case 'bars': return 'from-purple-50 via-background to-background dark:from-purple-950';
      case 'coffee': return 'from-amber-50 via-background to-background dark:from-amber-950';
      case 'hotels': return 'from-blue-50 via-background to-background dark:from-blue-950';
      default: return 'from-gray-50 via-background to-background dark:from-gray-950';
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackInteraction('contact_form_submit', {
      industry,
      role,
      company_size: formData.businessSize,
      has_company: !!formData.company,
    });

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default form submission logic
        console.log('Form submitted:', formData);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      trackInteraction('contact_form_error', {
        industry,
        role,
        error: 'submission_failed',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (platform: string) => {
    trackInteraction('contact_social_click', {
      industry,
      role,
      platform,
    });
  };

  return (
    <section className={cn(
      "relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-gradient-to-b py-32 lg:mx-4",
      getIndustryColors(),
      className
    )}>
      <div className="container max-w-2xl">
        <h1 
          className="text-display-2xl enterprise-headline text-center  font-semibold tracking-tight lg:"
          role="heading"
          aria-level={1}
        >
          {heading}
        </h1>
        <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
          {industryContent.subheading}
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          <div>
            <h2 className="font-semibold flex items-center gap-2">
              <MapPin className="size-4" aria-hidden="true" />
              {officeTitle}
            </h2>
            <p className="mt-3 text-muted-foreground whitespace-pre-line">
              {officeAddress}
            </p>
          </div>

          <div>
            <h2 className="font-semibold flex items-center gap-2">
              <Mail className="size-4" aria-hidden="true" />
              {emailTitle}
            </h2>
            <div className="mt-3 space-y-2">
              {industryContent.emailCategories.map((category, index) => (
                <div key={index}>
                  <p className="text-primary text-sm font-medium">{category.category}</p>
                  <a
                    href={`mailto:${category.email}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    onClick={() => trackInteraction('contact_email_click', { industry, role, category: category.category })}
                  >
                    {category.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold">{followTitle}</h2>
            <div className="mt-3 flex gap-6 lg:gap-10">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => handleSocialClick('facebook')}
                aria-label="Follow us on Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => handleSocialClick('twitter')}
                aria-label="Follow us on Twitter"
              >
                <Twitter className="size-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => handleSocialClick('linkedin')}
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="enterprise-body  font-semibold">{industryContent.inquiriesTitle}</h2>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name</Label>
              <Input 
                id="fullName"
                placeholder="First and last name" 
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                required
                aria-describedby="fullName-error"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Business email address</Label>
              <Input 
                id="email"
                placeholder="me@company.com" 
                type="email" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                aria-describedby="email-error"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">
                {industry === 'restaurants' ? 'Restaurant/Chain name' :
                 industry === 'bars' ? 'Bar/Venue name' :
                 industry === 'coffee' ? 'Coffee shop name' :
                 industry === 'hotels' ? 'Hotel name' : 'Company name'}{" "}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input 
                id="company"
                placeholder={
                  industry === 'restaurants' ? 'Restaurant name' :
                  industry === 'bars' ? 'Bar name' :
                  industry === 'coffee' ? 'Coffee shop name' :
                  industry === 'hotels' ? 'Hotel name' : 'Company name'
                }
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessSize">
                Business size{" "}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input 
                id="businessSize"
                placeholder="Select your business size"
                list="businessSizes"
                value={formData.businessSize}
                onChange={(e) => handleInputChange('businessSize', e.target.value)}
              />
              <datalist id="businessSizes">
                {industryContent.businessSizeOptions.map((option, index) => (
                  <option key={index} value={option} />
                ))}
              </datalist>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your message</Label>
              <Textarea
                id="message"
                placeholder={
                  industry === 'restaurants' ? 'Tell us about your restaurant operations needs' :
                  industry === 'bars' ? 'Describe your bar management challenges' :
                  industry === 'coffee' ? 'Share your coffee shop requirements' :
                  industry === 'hotels' ? 'Explain your hotel dining needs' : 'Write your message'
                }
                className="min-h-[120px] resize-none"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
              />
            </div>

            <div className="flex justify-end">
              <Button 
                size="lg" 
                type="submit" 
                disabled={isSubmitting}
                className="min-w-[120px]"
              >
                {isSubmitting ? 'Sending...' : submitText}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className,
      )}
      role="separator"
      aria-orientation={orientation}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ],
        )}
      />
    </div>
  );
};