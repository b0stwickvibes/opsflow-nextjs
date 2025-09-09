import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/magicui/shimmer-button";

export function HeroSection() {
  return (
    <section className="enterprise-hero-section section-padding-large">
      <div className="container">
        <div className="max-w-4xl">
          <div className="clerk-inspired-badge mb-4">
            <span>OpsFlow Test</span>
          </div>
          <h1 className="enterprise-headline">
            Clean, enterprise-ready feature layout
          </h1>
          <p className="enterprise-body mt-3">
            This is a sandbox page for rapid design/dev iteration from Figma to Next.js. We’ll keep
            styling aligned with our global tokens and Clerk-inspired polish, then elevate the content
            for OpsFlow’s positioning versus Xenia.Teams.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ShimmerButton size="lg" className="px-6">
              <Link href="/pricing">Start Free Trial</Link>
            </ShimmerButton>
            <Button variant="outline" size="lg" className="px-6" asChild>
              <Link href="/product/demo">Watch Demo</Link>
            </Button>
          </div>

          {/* Brand strip */}
          <div className="mt-6 flex flex-wrap items-center gap-6 opacity-80">
            {[
              { src: "/logos/toast.svg", alt: "Toast" },
              { src: "/logos/square.svg", alt: "Square" },
              { src: "/logos/quickbooks.svg", alt: "QuickBooks" },
              { src: "/logos/slack.svg", alt: "Slack" },
              { src: "/logos/zapier.svg", alt: "Zapier" },
            ].map((logo) => (
              <div key={logo.alt} className="h-6 w-auto grayscale opacity-70 hover:opacity-100 transition">
                <Image src={logo.src} alt={`${logo.alt} logo`} width={100} height={24} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
