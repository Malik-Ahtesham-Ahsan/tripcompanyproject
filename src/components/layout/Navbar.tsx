"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, PlaneTakeoff, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TopBanner } from "@/components/layout/TopBanner";
import { navLinks } from "@/data/nav";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <TopBanner />
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled || open
            ? "bg-white/95 shadow-sm shadow-navy-950/5 backdrop-blur-md"
            : "bg-white shadow-sm shadow-navy-950/5"
        )}
      >
        <Container className="flex h-18 items-center justify-between py-3">
          <Link href="#home" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
              <PlaneTakeoff className="h-5 w-5 text-white" strokeWidth={2.25} />
            </span>
            <span className="font-display whitespace-nowrap text-lg font-bold tracking-tight text-navy-950">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-navy-800 transition-colors hover:bg-navy-950/5 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={siteConfig.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-navy-900 xl:flex"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Button
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="whitespace-nowrap"
            >
              ✈ Free Consultation
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-950 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>

        <div
          className={cn(
            "grid overflow-hidden bg-white transition-[grid-template-rows] duration-300 ease-out lg:hidden",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <Container className="flex flex-col gap-1 pb-6 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-navy-900 hover:bg-navy-950/5"
                >
                  {link.icon ? `${link.icon} ` : ""}
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 px-3 text-sm font-semibold text-navy-900"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <Button
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                className="mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                ✈ Free Consultation
              </Button>
            </Container>
          </div>
        </div>
      </header>
    </>
  );
}
