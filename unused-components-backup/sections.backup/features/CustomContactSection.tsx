"use client";

import { useEffect, FormEvent, useState } from "react";
import { Facebook, Linkedin, Twitter, ChefHat } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { registerComponentLayout } from "@/lib/style-system/layout-differentiation";

export function CustomContactSection() {
  useEffect(() => {
    registerComponentLayout("CustomContactSection", "site");
  }, []);
  
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    company: "",
    restaurantType: "",
    locations: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="rounded-t-2xl rounded-b-[36px] bg-linear-to-b from-blue-50 via-background to-background p-6 md:p-10 dark:from-blue-950">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <ChefHat className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">Thank You!</h2>
              <p className="mt-4 text-muted-foreground">
                We've received your inquiry and will get back to you within 24 hours.
              </p>
              <Button 
                className="mt-8" 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
              >
                Send Another Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="rounded-t-2xl rounded-b-[36px] bg-linear-to-b from-blue-50 via-background to-background p-6 md:p-10 dark:from-blue-950">
          <h2 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl">
            Get in touch
          </h2>
          <p className="mt-4 text-center font-medium leading-snug text-muted-foreground">
            Our restaurant operations experts are ready to help
          </p>

          <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
            <div>
              <h3 className="font-semibold">San Francisco</h3>
              <p className="mt-3 text-muted-foreground">
                123 Innovation Drive<br />Suite 400, San Francisco, CA 94105
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Contact us</h3>
              <div className="mt-3">
                <p className="text-primary">Support</p>
                <a href="mailto:support@opsflow.ai" className="text-muted-foreground hover:text-foreground">
                  support@opsflow.ai
                </a>
              </div>
              <div className="mt-3">
                <p className="text-primary">Sales</p>
                <a href="mailto:sales@opsflow.ai" className="text-muted-foreground hover:text-foreground">
                  sales@opsflow.ai
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Follow us</h3>
              <div className="mt-3 flex gap-6 lg:gap-10">
                <a href="#" className="text-muted-foreground hover:text-foreground" aria-label="Facebook">
                  <Facebook className="size-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground" aria-label="Twitter / X">
                  <Twitter className="size-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
                  <Linkedin className="size-5" />
                </a>
              </div>
            </div>
          </div>

          <DashedLine className="my-12" />

          {/* Restaurant-specific Inquiry Form */}
          <div className="mx-auto max-w-2xl">
            <h3 className="text-lg font-semibold">Restaurant Inquiry</h3>
            <form className="mt-8 space-y-5" onSubmit={onSubmit}>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input 
                  id="fullName" 
                  name="fullName" 
                  placeholder="First and last name" 
                  value={formState.fullName}
                  onChange={(e) => setFormState({...formState, fullName: e.target.value})}
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Work email address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="me@restaurant.com"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})} 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Restaurant name</Label>
                <Input 
                  id="company" 
                  name="company" 
                  placeholder="Restaurant name" 
                  value={formState.company}
                  onChange={(e) => setFormState({...formState, company: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="restaurantType">Restaurant type</Label>
                <RadioGroup 
                  value={formState.restaurantType}
                  onValueChange={(value) => setFormState({...formState, restaurantType: value})}
                  className="grid grid-cols-2 gap-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fine-dining" id="fine-dining" />
                    <Label htmlFor="fine-dining" className="cursor-pointer">Fine Dining</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fast-casual" id="fast-casual" />
                    <Label htmlFor="fast-casual" className="cursor-pointer">Fast Casual</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bar" id="bar" />
                    <Label htmlFor="bar" className="cursor-pointer">Bar</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cafe" id="cafe" />
                    <Label htmlFor="cafe" className="cursor-pointer">Café</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="food-truck" id="food-truck" />
                    <Label htmlFor="food-truck" className="cursor-pointer">Food Truck</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="cursor-pointer">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="locations">Number of locations</Label>
                <Select 
                  value={formState.locations}
                  onValueChange={(value) => setFormState({...formState, locations: value})}
                >
                  <SelectTrigger id="locations">
                    <SelectValue placeholder="Select number of locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="2-5">2-5</SelectItem>
                    <SelectItem value="6-15">6-15</SelectItem>
                    <SelectItem value="16-50">16-50</SelectItem>
                    <SelectItem value="50+">50+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Your message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about your restaurant operations needs..." 
                  className="min-h-[120px] resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})} 
                  required 
                />
              </div>

              <div className="text-xs text-muted-foreground">
                By submitting this form, you agree to our <a href="/privacy" className="underline">Privacy Policy</a> and consent to OpsFlow processing your information.
              </div>

              <div className="flex justify-end">
                <Button 
                  size="lg" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashedLine({
  orientation = "horizontal",
  className,
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
}) {
  const isHorizontal = orientation === "horizontal";
  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className
      )}
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
              ]
        )}
      />
    </div>
  );
}
