import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  alternates: { canonical: `/${privacyPolicy.slug}` },
};

export default function PrivacyPolicyPage() {
  return <LegalDoc doc={privacyPolicy} />;
}
