import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { siteConfig } from "@/data/site";

const infoItems = [
  { icon: Phone, label: "Call Us", value: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.whatsapp, href: siteConfig.whatsappHref },
  { icon: Mail, label: "Email Us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Visit Us", value: siteConfig.address, href: undefined },
  { icon: Clock, label: "Office Hours", value: siteConfig.hours.weekday, href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Tell us about your next trip"
          description="Fill in the enquiry form and a TravelVista Ltd consultant will be in touch within 2 hours."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          <Reveal className="flex flex-col gap-5 lg:col-span-2">
            {infoItems.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-navy-950/8 bg-sand-50/60 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-700/50">{label}</p>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-navy-950">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="block transition-transform hover:-translate-y-0.5">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
            <div className="rounded-2xl border border-navy-950/8 bg-sand-50/60 p-5 text-sm text-navy-700/70">
              <p>{siteConfig.hours.saturday}</p>
              <p className="mt-1">{siteConfig.hours.sunday}</p>
              <p className="mt-1 font-medium text-blue-600">{siteConfig.hours.whatsapp}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-3xl border border-navy-950/8 bg-sand-50/40 p-6 shadow-lg shadow-navy-950/5 sm:p-8">
              <ConsultationForm variant="contact" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
