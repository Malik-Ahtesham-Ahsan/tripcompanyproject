import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons/SocialIcons";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import logo from "@/logo.jpeg";

const quickLinks = [
  { label: "🏠 Home", href: "#home" },
  { label: "⭐ Why TravelVista", href: "#why-us" },
  { label: "📋 How It Works", href: "#how-it-works" },
  { label: "🌍 Countries", href: "#schengen-visa" },
  { label: "❓ FAQ", href: "#faq" },
  { label: "💬 Contact Us", href: siteConfig.whatsappHref, external: true },
];

const socialLinks = [
  { href: siteConfig.social.facebook, label: "Facebook", icon: FacebookIcon },
  { href: siteConfig.social.instagram, label: "Instagram", icon: InstagramIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/70">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Link href="#home" className="flex items-center gap-2.5">
            <span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white">
              <Image src={logo} alt="TravelVista Ltd logo" fill sizes="64px" className="object-contain" />
            </span>
            <span className="font-display text-lg font-bold text-white">{siteConfig.name}</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed">
            UK&apos;s most trusted Schengen visa consultants and European holiday specialists.
            Expert guidance, proven results, outstanding service.
          </p>
          <div className="mt-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/55">
              Follow us
            </p>
            <div className="mt-3 flex items-center gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-2 text-sm">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
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
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm transition-colors hover:text-white"
            >
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
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition-transform hover:scale-110"
              aria-label="WhatsApp"
            >
              💬
            </a>
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
