import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Help Center — OpsFlow AI",
  description: "Get help with restaurant operations management. Search guides, templates, troubleshooting, and contact support.",
};

const HelpCenterPage = dynamic(() => import("@/components/resources/ResourcePages").then(m => m.HelpCenterPage), {
  ssr: false,
  loading: () => <div className="p-8">Loading help center…</div>,
});

export default function HelpCenterPageRoute() {
  return <HelpCenterPage />;
}
