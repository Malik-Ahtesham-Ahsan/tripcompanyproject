export type VisaService = {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  image: string;
  cta: string;
};

export const visaServices: VisaService[] = [
  {
    id: "schengen-visa",
    emoji: "🇪🇺",
    title: "Schengen Visa – 29 Countries",
    subtitle: "Most Popular",
    description:
      "One visa. 29 breathtaking European destinations. Expert documentation, 98% approval rate.",
    badge: "Most Popular",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
    cta: "Apply Now →",
  },
  {
    id: "canada-visa",
    emoji: "🇨🇦",
    title: "Canada Visitor Visa",
    subtitle: "Visitor & Super Visa",
    description:
      "Niagara Falls, Toronto, Vancouver and the Rockies await. Full Visitor & Super Visa support.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    cta: "Apply Now →",
  },
  {
    id: "usa-visa",
    emoji: "🇺🇸",
    title: "USA B1/B2 Visitor Visa",
    subtitle: "B1 / B2 Visa",
    description:
      "New York, Las Vegas, Florida and beyond. Expert DS-160 support & interview preparation.",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop",
    cta: "Apply Now →",
  },
  {
    id: "turkey-visa",
    emoji: "🇹🇷",
    title: "Turkey e-Visa",
    subtitle: "e-Visa & Sticker",
    description:
      "Istanbul's grand bazaars, Cappadocia's balloons and turquoise coasts — quick visa processing.",
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1200&auto=format&fit=crop",
    cta: "Apply Now →",
  },
];
