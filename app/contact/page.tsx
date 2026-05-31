import { ContactPageContent } from "@/components/contact/contact-page";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Le Cong Nghia for Shopify and full-stack development work.",
  path: "/contact",
});

export default function ContactPage(): ReactNode {
  return <ContactPageContent />;
}
