"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  content: string
  author: {
    name: string
    title: string
    company: string
    avatar?: string
  }
}

interface TestimonialsProps {
  title?: string
  description?: string
  testimonials: Testimonial[]
  className?: string
}

export function Testimonials({
  title = "What Our Customers Say",
  description,
  testimonials,
  className = ""
}: TestimonialsProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        {description && (
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="relative">
            <CardContent className="pt-6">
              <div className="mb-4">
                <svg
                  className="h-8 w-8 text-primary/30"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <p className="text-muted-foreground mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  {testimonial.author.avatar ? (
                    <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
                  ) : (
                    <AvatarFallback>
                      {testimonial.author.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  )}
                </Avatar>
                
                <div>
                  <p className="font-semibold">{testimonial.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.author.title}, {testimonial.author.company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
