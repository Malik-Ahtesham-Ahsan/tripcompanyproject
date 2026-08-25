import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { visaServices } from "@/data/visaServices";

export function VisaServices() {
  return (
    <section className="bg-navy-950 py-24 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Visa Services"
          title="Apply for Your Dream Destination"
          description="Expert visa assistance for the world's most popular destinations — from a single UK-based team."
          light
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {visaServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.08}>
              <Link
                href={`#${service.id}`}
                id={service.id}
                className="group relative flex min-h-64 flex-col justify-end overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
                <div className="relative flex flex-col gap-2 p-6 sm:p-8">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{service.emoji}</span>
                    {service.badge ? (
                      <span className="rounded-full bg-gold-500 px-3 py-0.5 text-xs font-semibold text-navy-950">
                        {service.badge}
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-white/60">{service.subtitle}</span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{service.title}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-white/75">{service.description}</p>
                  <span className="mt-2 text-sm font-semibold text-gold-400 group-hover:underline">
                    {service.cta}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
