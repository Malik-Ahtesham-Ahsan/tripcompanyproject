import Link from "next/link";
import { Mail, PlaneTakeoff } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

const quickLinks = [
  { label: "🏠 Home", href: "#home" },
  { label: "⭐ Why TravelVista", href: "#why-us" },
  { label: "📋 How It Works", href: "#how-it-works" },
  { label: "🌍 Countries", href: "#schengen-visa" },
  { label: "❓ FAQ", href: "#faq" },
  { label: "📞 Contact Us", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/70">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Link href="#home" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
              <PlaneTakeoff className="h-5 w-5 text-white" strokeWidth={2.25} />
            </span>
            <span className="font-display text-lg font-bold text-white">{siteConfig.name}</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed">
            UK&apos;s most trusted Schengen visa consultants and European holiday specialists.
            Expert guidance, proven results, outstanding service.
          </p>
          <div className="mt-2 flex flex-col gap-2 text-sm">
            <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-white">
              📞 {siteConfig.phone}
            </a>
            <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              💬 {siteConfig.whatsapp} (WhatsApp)
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white">
              ✉️ {siteConfig.email}
            </a>
            <p className="flex items-start gap-2">
              📍 {siteConfig.address}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="text-sm transition-colors hover:text-white">
              {service.emoji} {service.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Contact Hours</h3>
          <p className="text-sm">{siteConfig.hours.weekday}</p>
          <p className="text-sm">{siteConfig.hours.saturday}</p>
          <p className="text-sm">{siteConfig.hours.sunday}</p>
          <p className="text-sm font-medium text-blue-400">{siteConfig.hours.whatsapp}</p>
          <div className="mt-2 flex gap-3">
            <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-xl hover:scale-110 transition-transform" aria-label="WhatsApp">💬</a>
            <a href={`mailto:${siteConfig.email}`} className="text-xl hover:scale-110 transition-transform" aria-label="Email">✉️</a>
            <a href={siteConfig.phoneHref} className="text-xl hover:scale-110 transition-transform" aria-label="Phone">📞</a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved. | {siteConfig.address}
          </p>
          <p className="max-w-xl sm:text-right">
            Crafted with ❤️ for UK&apos;s Schengen Visa Seekers — Visa assistance is guidance-only;
            final approval rests solely with the relevant embassy or consulate.
          </p>
        </Container>
      </div>
    </footer>
  );
}
