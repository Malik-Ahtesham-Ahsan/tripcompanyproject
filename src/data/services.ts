import {
  StampIcon,
  Plane,
  Palmtree,
  MapPin,
  Building2,
  Globe2,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  emoji: string;
  title: string;
  description: string;
  href: string;
  badge?: string;
  cta: string;
};

export const services: Service[] = [
  {
    icon: StampIcon,
    emoji: "🛂",
    title: "Schengen Visa Services",
    description:
      "Full documentation support, application submission and embassy tracking for all 29 Schengen countries. 98% success rate.",
    href: "#schengen-visa",
    badge: "Most Popular",
    cta: "Learn More →",
  },
  {
    icon: Plane,
    emoji: "✈️",
    title: "Flights & Hotel Bookings",
    description:
      "Best-price flights and hotel packages across Europe. We find the deals so you can focus on the adventure.",
    href: "#contact",
    cta: "Book Now →",
  },
  {
    icon: Palmtree,
    emoji: "🏖️",
    title: "European Holiday Packages",
    description:
      "All-inclusive tailored packages — visa, flights, hotel and itinerary. Just pack your bags.",
    href: "#destinations",
    cta: "View Packages →",
  },
  {
    icon: MapPin,
    emoji: "🍁",
    title: "Canada Visa",
    description:
      "Expert assistance for Canadian visitor, study and work visa applications from the UK.",
    href: "#canada-visa",
    cta: "Enquire Now →",
  },
  {
    icon: Building2,
    emoji: "🗽",
    title: "USA Visa",
    description:
      "B1/B2 tourist and business visa applications handled professionally from start to finish.",
    href: "#usa-visa",
    cta: "Enquire Now →",
  },
  {
    icon: Globe2,
    emoji: "🕌",
    title: "Turkey & Dubai Visas",
    description:
      "Hassle-free Turkey and UAE visa assistance — perfect for short breaks and family holidays.",
    href: "#turkey-visa",
    cta: "Enquire Now →",
  },
];
