'use client';
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { registerComponentLayout } from "@/lib/style-system/layout-differentiation";
import { trackInteraction } from "@/lib/analytics";

export function OriginalContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    registerComponentLayout('RestaurantContactForm', 'marketing');
    
    // Track component view
    trackInteraction('contact_form', { action: 'view' });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Track field interaction
    trackInteraction('contact_form_field', { action: 'change', field: id });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Track form submission
    trackInteraction('contact_form', { 
      action: 'submit',
      hasName: !!formData.name.trim(),
      hasEmail: !!formData.email.trim(),
      messageLength: formData.message.length
    });
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Show success alert
      alert("Message sent! Thank you for contacting us. We'll get back to you soon.");
      
      // Track successful submission
      trackInteraction('contact_form', { action: 'submit_success' });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/50 to-transparent dark:from-primary-950/30 dark:to-transparent -z-10" />
      <div className="absolute top-1/4 left-0 w-1/4 h-1/2 bg-gradient-to-r from-secondary-50/50 to-transparent dark:from-secondary-950/30 dark:to-transparent -z-10" />
      <div className="absolute bottom-0 left-1/3 right-1/3 h-1/3 bg-gradient-to-t from-base-50/50 to-transparent dark:from-base-950/30 dark:to-transparent -z-10" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 animate-fade-in">
      {/* Contact Form */}
      <Card className="p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              placeholder="Your name" 
              value={formData.name}
              onChange={handleChange}
              required
              className="focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your.email@example.com" 
              value={formData.email}
              onChange={handleChange}
              required
              className="focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input 
              id="subject" 
              placeholder="How can we help with your restaurant operations?" 
              value={formData.subject}
              onChange={handleChange}
              required
              className="focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us about your restaurant operations needs..." 
              className="min-h-[150px] focus:border-primary"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="text-xs text-muted-foreground mb-4">
            By submitting this form, you agree to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
          </div>
          
          <Button 
            type="submit" 
            className="w-full transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Card>
      
      {/* Contact Info */}
      <div className="space-y-8">
        <div className="animate-slide-down" style={{animationDelay: "100ms"}}>
          <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
          <p className="text-muted-foreground mb-6">
            Our restaurant operations experts are here to help you with any questions about our platform, pricing, or implementation.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start animate-slide-up" style={{animationDelay: "200ms"}}>
            <Mail className="h-6 w-6 text-primary mt-1 mr-3" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-muted-foreground">
                <a href="mailto:support@opsflow.ai" className="hover:text-primary transition-colors">
                  support@opsflow.ai
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start animate-slide-up" style={{animationDelay: "300ms"}}>
            <Phone className="h-6 w-6 text-primary mt-1 mr-3" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-muted-foreground">
                <a href="tel:8001234567" className="hover:text-primary transition-colors">
                  (800) 123-4567
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start animate-slide-up" style={{animationDelay: "400ms"}}>
            <MapPin className="h-6 w-6 text-primary mt-1 mr-3" />
            <div>
              <h4 className="font-semibold">Office</h4>
              <p className="text-muted-foreground">
                123 Restaurant Row<br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>
        
        <div className="animate-slide-up" style={{animationDelay: "500ms"}}>
          <h4 className="font-semibold mb-2">Hours</h4>
          <p className="text-muted-foreground">
            Monday - Friday: 9am - 6pm PST<br />
            Saturday - Sunday: Closed
          </p>
        </div>
        
        <div className="bg-primary-50 dark:bg-primary-950 p-6 rounded-lg mt-8 animate-fade-in" style={{animationDelay: "600ms"}}>
          <h4 className="font-semibold mb-2 flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            Need immediate assistance?
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            Our support team is available 24/7 for urgent restaurant operations issues.
          </p>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => trackInteraction('priority_support', { action: 'click' })}
          >
            Contact Priority Support
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}
