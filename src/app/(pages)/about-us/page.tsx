import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyFeatures } from "@/data/whyChooseUs";
import { aboutStory, aboutValues } from "@/data/about";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet ${siteConfig.name} — UK-based Schengen visa consultants helping travellers reach Europe with confidence.`,
  alternates: { canonical: "/about-us" },
};

const stats = [
  { value: siteConfig.stats.approvalRate, label: "Approval Rate" },
  { value: siteConfig.stats.visasProcessed, label: "Visas Processed" },
  { value: siteConfig.stats.countries, label: "Countries Covered" },
  { value: siteConfig.stats.rating, label: "Client Rating" },
];

export default function AboutUsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-16 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,_rgba(47,111,189,0.28),_transparent_48%)]" />
        <Container className="relative z-10 flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="text-sm text-white/55">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="px-2">/</span>
            <span className="text-white/80">About us</span>
          </nav>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
            🇬🇧 About {siteConfig.name}
          </span>
          <h1 className="max-w-4xl font-display text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            We take the stress out of getting your visa
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            {siteConfig.name} is a UK-based travel and visa consultancy. We guide travellers
            through Schengen, USA, Canada and Turkey visa applications — and handle the flights,
            hotels and holiday planning once the visa is in hand.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-bold text-gold-400">{value}</p>
                <p className="mt-1 text-xs text-white/65">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="📖 Our Story"
            title="Built by people who have queued at the embassy"
            description="We started TravelVista because applying for a Schengen visa in the UK is far harder than it needs to be."
            align="left"
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {aboutStory.map((block, index) => (
              <Reveal key={block.heading} delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-navy-950/8 bg-sand-50 p-7">
                  <span className="font-display text-sm font-bold uppercase tracking-wider text-blue-600">
                    {block.heading}
                  </span>
                  <p className="text-[15px] leading-relaxed text-navy-700/80">{block.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand-50 py-20 lg:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="🧭 What We Stand For"
            title="The promises we hold ourselves to"
            description="Visa consultancy attracts its share of bad actors. These are the lines we do not cross."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-navy-950/8 bg-white p-7 shadow-sm">
                  <span className="text-2xl">{value.emoji}</span>
                  <h3 className="font-display text-lg font-bold text-navy-950">{value.title}</h3>
                  <p className="text-[15px] leading-relaxed text-navy-700/80">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="⭐ Why Travellers Choose Us"
            title="What you get when you work with TravelVista"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyFeatures.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.06} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-navy-950/8 bg-sand-50 p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-navy-950">{title}</h3>
                  <p className="text-[15px] leading-relaxed text-navy-700/80">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 lg:py-24">
        <Container>
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-2xl font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your application?
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white/70">
              Book a free consultation — we will review your documents and tell you honestly where
              you stand, with no obligation to proceed.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                ✈ Get a Free Consultation
              </Button>
              <Button href="/#contact" size="lg" variant="outline">
                Contact the team
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
