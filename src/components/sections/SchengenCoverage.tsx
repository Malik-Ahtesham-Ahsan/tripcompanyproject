import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { schengenCountries } from "@/data/schengenCountries";

export function SchengenCoverage() {
  return (
    <section id="schengen-visa" className="bg-white py-24 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Coverage"
          title="All 29 Schengen Countries Covered"
          description="One Schengen visa lets you travel freely across all these incredible European nations."
        />

        <Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {schengenCountries.map(({ flag, name }) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-xl border border-navy-950/8 bg-sand-50/60 px-4 py-3 text-sm font-medium text-navy-900"
              >
                <span className="text-lg">{flag}</span>
                {name}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
