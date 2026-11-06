import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { type LegalDocument } from "@/data/legal";
import { siteConfig } from "@/data/site";

export function LegalDoc({ doc }: { doc: LegalDocument }) {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(47,111,189,0.25),_transparent_45%)]" />
        <Container className="relative z-10 flex flex-col gap-5">
          <nav aria-label="Breadcrumb" className="text-sm text-white/55">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="px-2">/</span>
            <span className="text-white/80">{doc.title}</span>
          </nav>
          <h1 className="font-display text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {doc.title}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            {doc.intro}
          </p>
          <p className="text-sm text-white/50">Last updated: {doc.updated}</p>
        </Container>
      </section>

      <section className="bg-sand-50 py-16 lg:py-24">
        <Container className="flex flex-col gap-10">
          <div className="mx-auto w-full max-w-3xl rounded-3xl border border-navy-950/8 bg-white p-7 shadow-sm sm:p-10 lg:p-12">
            <div className="flex flex-col gap-10">
              {doc.sections.map((section) => (
                <Reveal key={section.heading} className="flex flex-col gap-3" y={16}>
                  <h2 className="font-display text-xl font-bold tracking-tight text-navy-950 sm:text-2xl">
                    {section.heading}
                  </h2>
                  {section.body?.map((paragraph) => (
                    <p key={paragraph} className="text-[15px] leading-relaxed text-navy-700/80">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="mt-1 flex flex-col gap-2.5">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-[15px] leading-relaxed text-navy-700/80"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mx-auto w-full max-w-3xl" y={16}>
            <div className="flex flex-col items-center gap-5 rounded-3xl border border-navy-950/8 bg-navy-950 p-8 text-center sm:p-10">
              <div className="flex flex-col gap-2">
                <h2 className="font-display text-2xl font-bold text-white">
                  Still have a question?
                </h2>
                <p className="text-sm leading-relaxed text-white/70">
                  Our team is happy to walk you through any part of this policy before you commit
                  to anything.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  💬 Ask us on WhatsApp
                </Button>
                <Button href="/#contact" size="lg" variant="outline">
                  Contact the team
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
