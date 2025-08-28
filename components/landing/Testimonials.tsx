interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

interface TestimonialsProps {
  heading?: string;
  items: Testimonial[];
}

export function Testimonials({ heading, items }: TestimonialsProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {heading && <h2 className="mb-8 text-center text-2xl font-semibold md:text-3xl">{heading}</h2>}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure key={i} className="rounded-lg border bg-background p-6 shadow-sm">
              <blockquote className="text-sm text-muted-foreground">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium">
                {t.author}
                {t.role && <span className="text-muted-foreground"> — {t.role}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

