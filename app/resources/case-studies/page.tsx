import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Restaurant Case Studies — OpsFlow AI",
  description: "Real success stories from restaurants using OpsFlow for HACCP compliance, inventory management, and operational efficiency.",
};

const CaseStudiesPage = dynamic(() => import("@/components/resources/ResourcePages").then(m => m.CaseStudiesPage), {
  ssr: false,
  loading: () => <div className="p-8">Loading case studies…</div>,
});

export default function CaseStudiesPageRoute() {
  return <CaseStudiesPage />;
}
