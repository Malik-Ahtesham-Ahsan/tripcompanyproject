import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyFeatures } from "@/data/whyChooseUs";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-sand-50 py-24 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why TravelVista"
          title="Built on Expertise & Proven Results"
          description="Thousands of families and professionals have trusted TravelVista Ltd to turn their European travel dreams into reality."
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyFeatures.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={(index % 3) * 0.08} className="flex flex-col gap-4 rounded-2xl border border-navy-950/8 bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-navy-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/70">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
