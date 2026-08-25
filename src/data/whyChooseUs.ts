import {
  ClipboardCheck,
  GraduationCap,
  Scale,
  Video,
  ListChecks,
  Radar,
  type LucideIcon,
} from "lucide-react";

export type WhyFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyFeatures: WhyFeature[] = [
  {
    icon: Radar,
    title: "Fast & Reliable Execution",
    description:
      "We process your application quickly and accurately — no unnecessary delays, no back-and-forth.",
  },
  {
    icon: GraduationCap,
    title: "Certified Expert Advice",
    description:
      "Our specialist consultants guide you step-by-step with personalised, country-specific support.",
  },
  {
    icon: Scale,
    title: "Legal Immigration Success",
    description:
      "Every application is fully compliant with embassy requirements and UK immigration regulations.",
  },
  {
    icon: Video,
    title: "Online Interview Prep",
    description:
      "We prepare you thoroughly for embassy appointments — online or in person.",
  },
  {
    icon: ListChecks,
    title: "Complete Document Checklist",
    description:
      "Country-specific checklists ensure your application is embassy-ready from day one.",
  },
  {
    icon: ClipboardCheck,
    title: "Real-Time Application Tracking",
    description:
      "We keep you updated at every stage — no waiting in the dark for your visa status.",
  },
];
