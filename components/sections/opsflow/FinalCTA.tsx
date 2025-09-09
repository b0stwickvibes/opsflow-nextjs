import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/magicui/shimmer-button";

export function FinalCTASection() {
  return (
    <section className="py-16">
      <div className="container">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-10 text-center">
            <div className="clerk-inspired-badge mb-4">
              <span>Ready to elevate OpsFlow</span>
            </div>
            <h3 className="enterprise-headline mb-3">Let’s build the definitive restaurant ops platform</h3>
            <p className="enterprise-body max-w-2xl mx-auto mb-6">We’ll keep the build crisp, accessible, and enterprise-grade to outclass Xenia.Teams.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ShimmerButton size="lg" className="px-8"><Link href="/product/demo">Book a Demo</Link></ShimmerButton>
              <Button variant="outline" size="lg" className="px-8" asChild>
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default FinalCTASection;
