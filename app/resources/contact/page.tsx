import type { Metadata } from "next";
import { ContactSupportPage } from "@/components/resources/ResourcePages";

export const metadata: Metadata = {
  title: "Contact Support — OpsFlow AI",
  description: "Get help with restaurant operations management. Chat with experts, schedule consultations, or email our support team.",
};

export default function ContactSupportPageRoute() {
  return <ContactSupportPage />;
}