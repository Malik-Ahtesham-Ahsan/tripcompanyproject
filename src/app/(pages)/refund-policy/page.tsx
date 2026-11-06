import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { refundPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: refundPolicy.title,
  description: refundPolicy.description,
  alternates: { canonical: `/${refundPolicy.slug}` },
};

export default function RefundPolicyPage() {
  return <LegalDoc doc={refundPolicy} />;
}
