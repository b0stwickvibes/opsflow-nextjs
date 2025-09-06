import type { Metadata } from "next";
import { CaseStudiesPage } from "@/components/shared/data-display/ResourcePages";

export const metadata: Metadata = {
  title: "Restaurant Case Studies — OpsFlow AI",
  description: "Real success stories from restaurants using OpsFlow for HACCP compliance, inventory management, and operational efficiency.",
};

export default function CaseStudiesPageRoute() {
  return <CaseStudiesPage />;
}
