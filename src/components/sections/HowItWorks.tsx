import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { howItWorksSteps } from "@/data/howItWorks";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-sand-50 py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="How It Works"
          title="Your Visa in 4 Simple Steps"
          description="We make the entire process transparent, simple and stress-free — from enquiry to approved stamp."
        />

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute top-8 hidden h-px w-full bg-gradient-to-r from-transparent via-navy-950/12 to-transparent lg:block" />
          {howItWorksSteps.map(({ icon: Icon, number, title, description }, index) => (
            <Reveal key={number} delay={index * 0.1} className="relative flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="font-display text-3xl font-extrabold text-navy-950/10">{number}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-navy-950">{title}</h3>
              <p className="text-sm leading-relaxed text-navy-700/70">{description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
