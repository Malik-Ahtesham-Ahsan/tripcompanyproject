import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { europeanDestinations, popularPlaces } from "@/data/destinations";

export function Destinations() {
  return (
    <>
      <section className="bg-sand-50 py-24 lg:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Popular Places"
            title="Discover the World's Most Beautiful Destinations"
            description="Let's take a moment to enjoy these incredible places. We handle your visa — you enjoy the journey."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popularPlaces.map((place, index) => (
              <Reveal key={place.name} delay={(index % 3) * 0.08}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                  {place.badge ? (
                    <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-950">
                      {place.badge}
                    </span>
                  ) : null}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-xl font-bold text-white">{place.name}</h3>
                    <p className="mt-1 text-sm text-white/75">{place.location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="destinations" className="bg-white py-24 lg:py-32">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Explore Europe"
            title="Top European Destinations"
            description="From the Amalfi Coast to the Scottish Highlands — one Schengen visa unlocks it all."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {europeanDestinations.map((destination, index) => (
              <Reveal key={destination.name} delay={(index % 5) * 0.06}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={destination.image}
                    alt={`${destination.name}, ${destination.country}`}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 text-center">
                    <p className="text-lg">{destination.flag}</p>
                    <h3 className="font-display text-sm font-bold text-white">{destination.name}</h3>
                    <p className="text-xs text-white/70">{destination.country}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
