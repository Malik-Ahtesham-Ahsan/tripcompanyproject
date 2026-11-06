import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { termsAndConditions } from "@/data/legal";

export const metadata: Metadata = {
  title: termsAndConditions.title,
  description: termsAndConditions.description,
  alternates: { canonical: `/${termsAndConditions.slug}` },
};

export default function TermsAndConditionsPage() {
  return <LegalDoc doc={termsAndConditions} />;
}
