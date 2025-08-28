import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Contact Support — OpsFlow AI",
  description: "Get help with restaurant operations management. Chat with experts, schedule consultations, or email our support team.",
};

const ContactSupportPage = dynamic(() => import("@/components/resources/ResourcePages").then(m => m.ContactSupportPage), {
  ssr: false,
  loading: () => <div className="p-8">Loading support…</div>,
});

export default function ContactSupportPageRoute() {
  return <ContactSupportPage />;
}
