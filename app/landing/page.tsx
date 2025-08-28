import { CTA, Features, Hero, Logos, Testimonials } from "@/components/landing";

export const metadata = {
  title: "Landing Preview",
  description: "Staging route for new homepage content.",
};

export default function LandingPreviewPage() {
  return (
    <div className="-mt-12 -mx-6 overflow-x-hidden">
      <Hero
        eyebrow="New"
        title="Your New Landing Page"
        subtitle="Paste Figma copy and assets into these sections. We'll swap this into / when approved."
        primaryCta={{ href: "/pricing", text: "Get Started" }}
        secondaryCta={{ href: "/product/demo", text: "Watch Demo" }}
      />

      <Logos
        heading="Trusted by forward-thinking teams"
        items={[
          { src: "/logos/toast.svg", alt: "Toast" },
          { src: "/logos/quickbooks.svg", alt: "QuickBooks" },
          { src: "/logos/square.svg", alt: "Square" },
          { src: "/logos/marginedge.svg", alt: "MarginEdge" },
          { src: "/logos/7shifts.svg", alt: "7shifts" },
          { src: "/logos/doordash.svg", alt: "DoorDash" },
        ]}
      />

      <Features
        heading="What’s included"
        subheading="Replace with feature blocks from Figma"
        items={[
          { title: "Feature One", description: "Short supporting copy." },
          { title: "Feature Two", description: "Short supporting copy." },
          { title: "Feature Three", description: "Short supporting copy." },
          { title: "Feature Four", description: "Short supporting copy." },
          { title: "Feature Five", description: "Short supporting copy." },
          { title: "Feature Six", description: "Short supporting copy." },
        ]}
      />

      <Testimonials
        heading="What customers say"
        items={[
          { quote: "Great product — super fast to implement.", author: "Jordan P.", role: "Ops Director" },
          { quote: "Beautiful UI and excellent support.", author: "Samira K.", role: "GM" },
          { quote: "Clear ROI in the first month.", author: "Diego R.", role: "Owner" },
        ]}
      />

      <CTA
        title="Ready to go live?"
        description="Once this looks right, we’ll replace the homepage (/) with this layout."
        href="/pricing"
        buttonText="Start Free Trial"
      />
    </div>
  );
}

