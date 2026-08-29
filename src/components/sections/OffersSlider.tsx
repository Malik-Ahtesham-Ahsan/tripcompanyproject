"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, Check, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { travelOffers } from "@/data/offers";
import { siteConfig } from "@/data/site";

export function OffersSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeOffer = travelOffers[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % travelOffers.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  function move(direction: 1 | -1) {
    setActiveIndex(
      (current) => (current + direction + travelOffers.length) % travelOffers.length
    );
  }

  return (
    <section id="offers" className="bg-sand-50 py-24 lg:py-32">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
              ✨ Special Offers
            </span>
            <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl lg:text-[2.75rem]">
              Flights, hotels &amp; holiday offers
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-navy-700/70 sm:text-lg">
              Handpicked flight, hotel and holiday packages for the destinations
              our travellers love most. Every offer can be tailored to your dates
              and budget.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous offer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-950/10 bg-white text-navy-800 shadow-sm transition-all duration-300 hover:-translate-x-0.5 hover:border-blue-600 hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next offer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-950/10 bg-white text-navy-800 shadow-sm transition-all duration-300 hover:translate-x-0.5 hover:border-blue-600 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 shadow-2xl shadow-navy-950/15">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeOffer.id}
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid min-h-[27rem] grid-cols-1 lg:grid-cols-2"
              aria-live="polite"
            >
              <div className="relative min-h-72 overflow-hidden lg:min-h-full">
                <motion.div
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeOffer.image}
                    alt={`${activeOffer.title} in ${activeOffer.country}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-navy-950/80" />
                <span className="absolute left-6 top-6 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg sm:left-8 sm:top-8">
                  {activeOffer.badge}
                </span>
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                  <p className="text-sm font-medium text-white/75">
                    {activeOffer.flag} {activeOffer.country}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                    {activeOffer.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/65">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-gold-400" />
                    {activeOffer.duration}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold-400" />
                    {activeOffer.priceLabel}
                  </span>
                </div>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80">
                  {activeOffer.description}
                </p>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {activeOffer.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-white/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={siteConfig.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    variant="secondary"
                  >
                    Enquire on WhatsApp
                  </Button>
                  <Button href="#contact" size="lg" variant="outline">
                    Get a Free Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2">
          {travelOffers.map((offer, index) => (
            <button
              key={offer.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${offer.title}`}
              aria-current={index === activeIndex}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-8 bg-gold-500" : "w-2 bg-navy-950/20 hover:bg-navy-950/40"
              }`}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}
