import Link from "next/link";

interface CTAProps {
  title: string;
  description?: string;
  href: string;
  buttonText: string;
}

export function CTA({ title, description, href, buttonText }: CTAProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 rounded-xl border bg-muted/40 px-6 py-8 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
            {description && (
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          <Link
            href={href}
            className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow hover:opacity-90"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

