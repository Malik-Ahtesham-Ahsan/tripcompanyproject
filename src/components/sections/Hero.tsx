"use client";

import Image from "next/image";
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

const backgroundViews = [
  {
    name: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    position: "left-[4%] top-[10%]",
    rotate: -7,
    delay: 0,
  },
  {
    name: "Paris",
    country: "France",
    flag: "🇫🇷",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
    position: "right-[8%] top-[8%]",
    rotate: 6,
    delay: 0.8,
  },
  {
    name: "Venice",
    country: "Italy",
    flag: "🇮🇹",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800&auto=format&fit=crop",
    position: "right-[34%] top-[25%]",
    rotate: -4,
    delay: 1.5,
  },
  {
    name: "Santorini",
    country: "Greece",
    flag: "🇬🇷",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
    position: "right-[2%] bottom-[14%]",
    rotate: -6,
    delay: 2.2,
  },
  {
    name: "Prague",
    country: "Czech Republic",
    flag: "🇨🇿",
    image:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=800&auto=format&fit=crop",
    position: "left-[24%] bottom-[8%]",
    rotate: 5,
    delay: 2.8,
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    flag: "🇨🇭",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    position: "right-[24%] bottom-[4%]",
    rotate: 4,
    delay: 3.5,
  },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950 pt-28 pb-20 lg:pt-32 lg:pb-28">
      <Image
        src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2400&auto=format&fit=crop"
        alt="London skyline representing UK travel"
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/55 to-navy-950/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/45 via-transparent to-navy-950/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,_rgba(30,109,224,0.18),_transparent_38%)]" />

      <div className="pointer-events-none absolute inset-0 hidden [perspective:1400px] lg:block" aria-hidden="true">
        <div
          className="absolute right-[-8%] top-[-8%] grid h-[116%] w-[68%] grid-cols-3 gap-2 opacity-45 [transform:rotateY(-10deg)_rotateX(3deg)_scale(1.08)] [transform-style:preserve-3d]"
        >
          {backgroundViews.map((view) => (
            <div key={`mosaic-${view.name}`} className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image src={view.image} alt="" fill sizes="22vw" className="object-cover" />
              <div className="absolute inset-0 bg-navy-950/20" />
            </div>
          ))}
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          className="absolute right-[8%] top-[5%] h-[34rem] w-[34rem] rounded-full border border-blue-400/15 border-dashed shadow-[0_0_100px_rgba(30,109,224,0.15)]"
        />
        <div className="absolute right-[24%] top-[28%] h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        {backgroundViews.map((view) => (
          <motion.div
            key={view.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 0.82,
              scale: 1,
              y: [0, -16, 0],
              rotateZ: [view.rotate, view.rotate + 2, view.rotate],
            }}
            transition={{
              opacity: { duration: 0.8, delay: view.delay },
              scale: { duration: 0.8, delay: view.delay },
              y: { duration: 7 + view.delay, repeat: Infinity, ease: "easeInOut", delay: view.delay },
              rotateZ: { duration: 8 + view.delay, repeat: Infinity, ease: "easeInOut", delay: view.delay },
            }}
            className={`absolute ${view.position} w-40 overflow-hidden rounded-2xl border border-white/35 bg-white/15 p-1.5 shadow-2xl shadow-black/30 [transform-style:preserve-3d]`}
          >
            <div className="relative h-28 overflow-hidden rounded-xl">
              <Image
                src={view.image}
                alt=""
                fill
                sizes="160px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
              <div className="absolute inset-x-2 bottom-2">
                <p className="text-xs font-bold text-white">
                  {view.flag} {view.name}
                </p>
                <p className="text-[10px] text-white/65">{view.country}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

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
              <Button
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
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
