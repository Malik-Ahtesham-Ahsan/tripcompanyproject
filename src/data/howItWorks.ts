import { MessageSquare, ClipboardList, Send, CheckCircle2, type LucideIcon } from "lucide-react";

export type HowItWorksStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    description:
      "Contact us via phone, WhatsApp or email. We assess your eligibility and advise on the best strategy.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Document Preparation",
    description:
      "We provide a tailored checklist and review every document to ensure it meets embassy standards.",
  },
  {
    number: "03",
    icon: Send,
    title: "Application Submitted",
    description:
      "We submit your application and liaise directly with the embassy — you don't have to do a thing.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Visa Approved!",
    description:
      "Track in real time. Once approved, you're all set. Time to book those flights!",
  },
];
