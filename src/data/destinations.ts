export type PopularPlace = {
  name: string;
  location: string;
  image: string;
  badge?: string;
};

export const popularPlaces: PopularPlace[] = [
  {
    name: "Paris, France",
    location: "📍 Champ de Mars, Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    badge: "🇫🇷 Most Popular",
  },
  {
    name: "Rome, Italy",
    location: "📍 Colosseum, Rome",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Switzerland",
    location: "📍 Interlaken, Swiss Alps",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Amsterdam",
    location: "📍 Canal Ring, Netherlands",
    image:
      "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Barcelona",
    location: "📍 Sagrada Família, Spain",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Santorini, Greece",
    location: "📍 Oia, Santorini",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
  },
];

export type EuropeanDestination = {
  name: string;
  country: string;
  flag: string;
  image: string;
};

export const europeanDestinations: EuropeanDestination[] = [
  {
    name: "Paris",
    country: "France",
    flag: "🇫🇷",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Venice",
    country: "Italy",
    flag: "🇮🇹",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Santorini",
    country: "Greece",
    flag: "🇬🇷",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Prague",
    country: "Czech Republic",
    flag: "🇨🇿",
    image:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dubrovnik",
    country: "Croatia",
    flag: "🇭🇷",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Vienna",
    country: "Austria",
    flag: "🇦🇹",
    image:
      "https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Amsterdam",
    country: "Netherlands",
    flag: "🇳🇱",
    image:
      "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Barcelona",
    country: "Spain",
    flag: "🇪🇸",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    flag: "🇨🇭",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Fjords",
    country: "Norway",
    flag: "🇳🇴",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=800&auto=format&fit=crop",
  },
];
