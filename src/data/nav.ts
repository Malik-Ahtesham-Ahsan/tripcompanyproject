import { siteConfig } from "@/data/site";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", icon: "🏠" },
  { label: "Schengen Visa", href: "#schengen-visa", icon: "🛂" },
  { label: "Canada Visa", href: "#canada-visa", icon: "🍁" },
  { label: "USA Visa", href: "#usa-visa", icon: "🗽" },
  { label: "Turkey Visa", href: "#turkey-visa", icon: "🕌" },
  { label: "All Services", href: "#services", icon: "✈️" },
  { label: "Contact Us", href: siteConfig.whatsappHref, external: true, icon: "💬" },
];

