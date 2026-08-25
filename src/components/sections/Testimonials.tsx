import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Client Reviews"
          title="What Our Clients Say"
          description="Real experiences from real travellers who trusted TravelVista Ltd with their visa journey."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={(index % 5) * 0.06}>
              <article className="flex h-full flex-col gap-4 rounded-2xl border border-navy-950/8 bg-sand-50/60 p-6">
                <div className="flex gap-0.5 text-gold-500">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-navy-700/80 sm:text-[13px]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="font-semibold text-navy-950">{testimonial.name}</p>
                    <p className="text-xs text-navy-700/60">{testimonial.location}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
