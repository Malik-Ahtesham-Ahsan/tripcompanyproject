import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/data/faqs";

export function Faq() {
  return (
    <section id="faq" className="bg-sand-50 py-24 lg:py-32">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Can't find what you're looking for? Send us an enquiry and a consultant will get back to you directly."
        />

        <div className="flex w-full max-w-3xl flex-col gap-3.5">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={(index % 6) * 0.05}>
              <details className="group rounded-2xl border border-navy-950/8 bg-white px-6 py-1 open:shadow-md open:shadow-navy-950/5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-navy-950 marker:content-none">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-navy-700/75 sm:text-base">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
