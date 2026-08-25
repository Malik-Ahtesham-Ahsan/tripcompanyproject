import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function CtaSection() {
  return (
    <section className="bg-blue-600 py-20 lg:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-balance text-3xl font-bold text-white sm:text-4xl">
          Ready to Start Your European Adventure?
        </h2>
        <p className="max-w-xl text-lg text-white/85">
          Contact us today for a free consultation — our expert team responds within 2 hours.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#contact" size="lg" variant="secondary">
            ✈ Book Free Consultation
          </Button>
          <Button href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" size="lg" variant="outline">
            💬 Chat on WhatsApp
          </Button>
          <Button href={siteConfig.phoneHref} size="lg" variant="outline">
            📞 Call Us Now
          </Button>
        </div>
      </Container>
    </section>
  );
}
