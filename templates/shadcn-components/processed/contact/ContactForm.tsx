"use client";

import { Facebook, Linkedin, Twitter, MapPin, Mail, Phone } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export type ContactFormProps = {
  industry?: 'restaurants' | 'bars' | 'coffee' | 'hotels';
  heading?: string;
  subheading?: string;
  badgeText?: string;
  onSubmit?: (data: FormData) => void;
  className?: string;
};

interface FormData {
  fullName: string;
  email: string;
  company: string;
  businessSize: string;
  message: string;
}

/**
 * Contact Form Component
 * Professional contact form with restaurant operations focus
 * Uses enterprise styling system with OKLCH token system
 */
export function ContactForm({
  industry = 'restaurants',
  heading = "Get in Touch with Restaurant Operations Experts",
  subheading = "Connect with our team to discuss how OpsFlow can streamline your restaurant operations, improve compliance, and reduce costs.",
  badgeText = "Contact Sales",
  onSubmit,
  className,
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    businessSize: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getIndustryContent = () => {
    const content = {
      restaurants: {
        businessSizeOptions: ["1-5 locations", "6-20 locations", "21-50 locations", "50+ locations"],
        companyLabel: "Restaurant/Chain name",
        companyPlaceholder: "Restaurant name",
        messagePlaceholder: "Tell us about your restaurant operations needs - HACCP compliance, staff management, temperature monitoring, etc."
      },
      bars: {
        businessSizeOptions: ["Single venue", "2-5 venues", "6-15 venues", "15+ venues"], 
        companyLabel: "Bar/Venue name",
        companyPlaceholder: "Bar name",
        messagePlaceholder: "Describe your bar management challenges - inventory control, staff scheduling, compliance tracking, etc."
      },
      coffee: {
        businessSizeOptions: ["Single shop", "2-5 shops", "6-20 shops", "Chain operations"],
        companyLabel: "Coffee shop name", 
        companyPlaceholder: "Coffee shop name",
        messagePlaceholder: "Share your coffee shop requirements - quality control, equipment monitoring, peak hour management, etc."
      },
      hotels: {
        businessSizeOptions: ["Boutique hotel", "Mid-scale hotel", "Full-service hotel", "Resort operations"],
        companyLabel: "Hotel name",
        companyPlaceholder: "Hotel name", 
        messagePlaceholder: "Explain your hotel dining needs - multi-venue management, guest experience, compliance coordination, etc."
      },
    };
    return content[industry] || content.restaurants;
  };

  const industryContent = getIndustryContent();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        console.log('Form submitted:', formData);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={cn("py-20 lg:py-28 bg-background", className)}>
      <div className="container max-w-6xl">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge className="clerk-inspired-badge">
            <Mail className="size-4" />
            {badgeText}
          </Badge>

          <h1 className="enterprise-headline">
            <span className="text-brand-gradient">{heading}</span>
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Contact Information
              </h2>
              
              <div className="space-y-4">
                {/* Office Location */}
                <div className="clerk-inspired-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="enterprise-icon-primary">
                      <MapPin className="size-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">Corporate Office</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    1 Innovation Drive<br/>
                    Suite 200<br/>
                    San Francisco, CA 94105
                  </p>
                </div>

                {/* Email Contact */}
                <div className="clerk-inspired-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="enterprise-icon-secondary">
                      <Mail className="size-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">Email Support</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">Sales Inquiries</p>
                      <a 
                        href="mailto:sales@opsflow.com" 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        sales@opsflow.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Technical Support</p>
                      <a 
                        href="mailto:support@opsflow.com" 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        support@opsflow.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Contact */}
                <div className="clerk-inspired-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="enterprise-icon-accent">
                      <Phone className="size-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">Phone Support</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Sales:</span> (415) 555-0123
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Support:</span> (415) 555-0124
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday, 8:00 AM - 6:00 PM PST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="enterprise-icon-muted hover:text-primary transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="size-5" />
                </a>
                <a
                  href="#"
                  className="enterprise-icon-muted hover:text-primary transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="size-5" />
                </a>
                <a
                  href="#"
                  className="enterprise-icon-muted hover:text-primary transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="size-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="clerk-inspired-card p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Send us a Message
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground font-medium">
                  Full Name *
                </Label>
                <Input 
                  id="fullName"
                  placeholder="First and last name" 
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  required
                  className="border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Business Email *
                </Label>
                <Input 
                  id="email"
                  placeholder="you@company.com" 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground font-medium">
                  {industryContent.companyLabel}{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input 
                  id="company"
                  placeholder={industryContent.companyPlaceholder}
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessSize" className="text-foreground font-medium">
                  Business Size{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </Label>
                <select 
                  id="businessSize"
                  value={formData.businessSize}
                  onChange={(e) => handleInputChange('businessSize', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground"
                >
                  <option value="">Select business size</option>
                  {industryContent.businessSizeOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder={industryContent.messagePlaceholder}
                  className="min-h-[120px] resize-none border-border focus:border-primary"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                />
              </div>

              <Button 
                size="lg" 
                type="submit" 
                disabled={isSubmitting}
                className="w-full clerk-cta-primary"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}