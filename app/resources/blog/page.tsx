import type { Metadata } from "next";
import { BlogPage } from "@/components/resources/ResourcePages";

export const metadata: Metadata = {
  title: "Restaurant Operations Blog — OpsFlow AI", 
  description: "Restaurant industry insights on HACCP compliance, inventory management, staff training, and operational excellence.",
};

export default function BlogPageRoute() {
  return <BlogPage />;
}