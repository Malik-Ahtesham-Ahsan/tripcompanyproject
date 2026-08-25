"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { siteConfig } from "@/data/site";

const stats = [
  { value: siteConfig.stats.approvalRate, label: "Approval Rate" },
  { value: siteConfig.stats.visasProcessed, label: "Visas Processed" },
  { value: siteConfig.stats.countries, label: "Countries" },
  { value: siteConfig.stats.rating, label: "Client Rating" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950 pt-28 pb-20 lg:pt-32 lg:pb-28">
      <Image
        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2400&auto=format&fit=crop"
        alt="European travel destination"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/75 to-navy-950" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
              🇬🇧 UK&apos;s #1 Schengen Visa Specialists
            </span>
            <h1 className="font-display text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Your European
              <br />
              <span className="text-gold-400">Dream Journey</span>
              <br />
              Starts Today
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/80">
              Expert Schengen visa consultancy with a <strong className="text-white">98% approval rate</strong>.
              We handle everything — documents, applications, and follow-ups — so you can focus on planning your trip.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-sm">
                  <p className="font-display text-2xl font-bold text-gold-400">{value}</p>
                  <p className="mt-1 text-xs text-white/65">{label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg">
                ✈ Apply Now – It&apos;s Free
              </Button>
              <Button href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" size="lg" variant="outline">
                💬 WhatsApp Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-white/15 bg-white p-6 shadow-2xl shadow-black/20 sm:p-8"
          >
            <h3 className="font-display text-xl font-bold text-navy-950">🚀 Get a Free Consultation</h3>
            <p className="mt-1 text-sm text-navy-700/70">Fill in below — we&apos;ll call you back within 2 hours.</p>
            <div className="mt-6">
              <ConsultationForm variant="hero" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
