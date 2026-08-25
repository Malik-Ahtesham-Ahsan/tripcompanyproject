import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything for Your Stress-Free Travel"
          description="From visa applications to complete tailor-made holiday packages — TravelVista Ltd handles every detail."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ emoji, title, description, href, badge, cta }, index) => (
            <Reveal key={title} delay={(index % 3) * 0.08}>
              <Link
                href={href}
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-navy-950/8 bg-sand-50/50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/20 hover:shadow-xl"
              >
                {badge ? (
                  <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white">
                    {badge}
                  </span>
                ) : null}
                <span className="text-3xl">{emoji}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/70">{description}</p>
                </div>
                <span className="mt-auto text-sm font-semibold text-blue-600 group-hover:underline">
                  {cta}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
