"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialItem {
  quote: string;
  author?: string;
}

interface TestimonialsProps {
  items?: TestimonialItem[];
  title?: string;
  description?: string;
  className?: string;
}

export function Testimonials({ 
  items = [], 
  title = "What Restaurant Owners Say",
  description = "Real success stories from restaurants using OpsFlow to improve operations",
  className = ""
}: TestimonialsProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        {items.length === 0 ? (
          <div className="text-center text-muted-foreground">
            <Quote className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Customer testimonials will appear here</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <blockquote className="text-lg mb-4 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  {testimonial.author && (
                    <footer className="text-sm text-muted-foreground font-medium">
                      — {testimonial.author}
                    </footer>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
