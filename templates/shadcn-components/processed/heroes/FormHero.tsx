"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Calendar,
  ChefHat,
  BarChart3,
  Clock,
  Mail,
  Phone,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  useFeatureFlag, 
  usePageView, 
  usePermission 
} from '@/lib/hooks/restaurant-pages';
import { cn } from "@/lib/utils";

// Industry-specific form content
const INDUSTRY_FORM_CONTENT = {
  restaurant: {
    badge: "Restaurant Operations Consultation",
    title: "Ready to Transform Your Restaurant?",
    subtitle: "Get a personalized consultation to optimize your kitchen operations, reduce food waste, and boost profitability.",
    formFields: {
      name: "Restaurant Owner/Manager Name",
      email: "Business Email",
      phone: "Restaurant Phone", 
      restaurant: "Restaurant Name",
      message: "Tell us about your current challenges (food costs, staff coordination, customer wait times, etc.)"
    },
    cta: "Schedule Restaurant Consultation",
    icon: ChefHat,
    color: "orange",
  },
  bar: {
    badge: "Bar Operations Consultation", 
    title: "Ready to Maximize Your Bar Revenue?",
    subtitle: "Get a personalized consultation to optimize your inventory management, increase per-customer revenue, and streamline bar operations.",
    formFields: {
      name: "Bar Owner/Manager Name",
      email: "Business Email",
      phone: "Bar Phone",
      restaurant: "Bar/Venue Name",
      message: "Tell us about your current challenges (inventory waste, peak hour staffing, revenue optimization, etc.)"
    },
    cta: "Schedule Bar Consultation",
    icon: BarChart3,
    color: "purple",
  },
  cafe: {
    badge: "Café Operations Consultation",
    title: "Ready to Perfect Your Café Operations?", 
    subtitle: "Get a personalized consultation to optimize your coffee preparation workflow, enhance customer experience, and improve efficiency.",
    formFields: {
      name: "Café Owner/Manager Name",
      email: "Business Email", 
      phone: "Café Phone",
      restaurant: "Café Name",
      message: "Tell us about your current challenges (order queue management, quality consistency, peak hour service, etc.)"
    },
    cta: "Schedule Café Consultation",
    icon: Clock,
    color: "amber",
  },
};

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"), 
  phone: z.string().min(10, "Please enter a valid phone number"),
  restaurant: z.string().min(2, "Business name must be at least 2 characters"),
  message: z.string().min(10, "Please provide more details about your needs"),
});

export interface FormHeroProps {
  industry: 'restaurant' | 'bar' | 'cafe';
  role?: 'owner' | 'manager' | 'staff';
  variant?: 'default' | 'compact' | 'detailed';
}

const FormHero = ({ 
  industry = 'restaurant', 
  role = 'owner',
  variant = 'default'
}: FormHeroProps) => {
  const showConsultationForm = useFeatureFlag('formHeroConsultation', true);
  
  usePageView(`${industry}_form_hero`, { variant, industry, role });
  
  const canScheduleConsultation = usePermission('CONSULTATION_BOOKING_ACCESS');
  const content = INDUSTRY_FORM_CONTENT[industry];
  const Icon = content.icon;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      restaurant: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
  }

  const colorClasses = {
    orange: {
      primary: 'text-primary dark:text-primary',
      bg: 'bg-primary hover:bg-primary',
      badge: 'bg-primary text-primary dark:bg-primary dark:text-primary',
      border: 'focus:border-primary0 focus:ring-orange-500',
    },
    purple: {
      primary: 'text-primary dark:text-primary',
      bg: 'bg-primary hover:bg-primary',
      badge: 'bg-primary text-primary dark:bg-primary dark:text-primary',
      border: 'focus:border-primary0 focus:ring-purple-500',
    },
    amber: {
      primary: 'text-primary dark:text-primary',
      bg: 'bg-primary hover:bg-primary', 
      badge: 'bg-primary text-primary dark:bg-primary dark:text-primary',
      border: 'focus:border-primary0 focus:ring-amber-500',
    },
  };

  const colors = colorClasses[content.color as keyof typeof colorClasses];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Content Section */}
          <div className="space-y-8 animate-fade-in-up">
            <Badge className={cn("w-fit", colors.badge)}>
              <Icon className="size-3 mr-2" />
              {content.badge}
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-display-2xl enterprise-headline  font-bold md: lg:text-6xl leading-tight">
                {content.title}
              </h1>
              <p className="enterprise-body text-muted-foreground  leading-relaxed">
                {content.subtitle}
              </p>
            </div>
          </div>

          {/* Form Section */}
          {showConsultationForm && (
            <div className="animate-fade-in-up animation-delay-200">
              <div className="rounded-2xl border bg-card p-8 shadow-lg">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{content.formFields.name}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
                              {...field} 
                              className={cn("transition-colors", colors.border)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{content.formFields.email}</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="you@business.com" 
                                {...field} 
                                className={cn("transition-colors", colors.border)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{content.formFields.phone}</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel"
                                placeholder="(555) 123-4567" 
                                {...field} 
                                className={cn("transition-colors", colors.border)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="restaurant"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{content.formFields.restaurant}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={`Your ${industry} name`}
                              {...field} 
                              className={cn("transition-colors", colors.border)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Challenges</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={content.formFields.message}
                              rows={4}
                              {...field} 
                              className={cn("transition-colors", colors.border)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className={cn(
                        "w-full shadow-lg hover:shadow-xl transition-all duration-200",
                        colors.bg,
                        !canScheduleConsultation && "opacity-75 cursor-not-allowed"
                      )}
                      size="lg"
                      disabled={!canScheduleConsultation}
                    >
                      <span className="flex items-center gap-2">
                        {content.cta}
                        <ArrowRight className="size-4" />
                      </span>
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { FormHero };