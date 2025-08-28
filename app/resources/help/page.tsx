import type { Metadata } from "next";
import { HelpCenterPage } from "@/components/resources/ResourcePages";

export const metadata: Metadata = {
  title: "Help Center — OpsFlow AI",
  description: "Get help with restaurant operations management. Search guides, templates, troubleshooting, and contact support.",
};

export default function HelpCenterPageRoute() {
  return <HelpCenterPage />;
}
