export type TravelOffer = {
  id: string;
  country: string;
  flag: string;
  title: string;
  badge: string;
  duration: string;
  priceLabel: string;
  description: string;
  includes: string[];
  image: string;
};

export const travelOffers: TravelOffer[] = [
  {
    id: "paris-escape",
    country: "France",
    flag: "🇫🇷",
    title: "Paris City Escape",
    badge: "Most Popular",
    duration: "5 days / 4 nights",
    priceLabel: "Tailored quote",
    description:
      "Experience the Eiffel Tower, charming cafés and the best of Paris with a carefully planned city break.",
    includes: ["Schengen visa guidance", "Return flight options", "Central hotel options", "Personalised itinerary"],
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "italy-discovery",
    country: "Italy",
    flag: "🇮🇹",
    title: "Rome & Venice Discovery",
    badge: "Best Seller",
    duration: "7 days / 6 nights",
    priceLabel: "Tailored quote",
    description:
      "Combine ancient history and romantic canals across two of Italy's most unforgettable cities.",
    includes: ["Visa document checklist", "Multi-city flight planning", "Hotel recommendations", "Route planning"],
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "greece-getaway",
    country: "Greece",
    flag: "🇬🇷",
    title: "Santorini Island Getaway",
    badge: "Summer Favourite",
    duration: "6 days / 5 nights",
    priceLabel: "Tailored quote",
    description:
      "Whitewashed villages, blue-domed views and sunset dining in a relaxed Greek island escape.",
    includes: ["Schengen visa support", "Flights and transfers", "Resort options", "Island activity ideas"],
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "swiss-adventure",
    country: "Switzerland",
    flag: "🇨🇭",
    title: "Swiss Alps Adventure",
    badge: "Family Favourite",
    duration: "8 days / 7 nights",
    priceLabel: "Tailored quote",
    description:
      "Discover alpine villages, mountain railways and breathtaking scenery with a flexible family itinerary.",
    includes: ["Visa application guidance", "Scenic route planning", "Family-friendly stays", "Travel insurance guidance"],
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "spain-break",
    country: "Spain",
    flag: "🇪🇸",
    title: "Barcelona Culture Break",
    badge: "New Offer",
    duration: "5 days / 4 nights",
    priceLabel: "Tailored quote",
    description:
      "Explore Gaudí's masterpieces, local food and Mediterranean beaches on a perfectly paced break.",
    includes: ["Schengen visa checklist", "Flight search and booking", "Hotel selection", "City highlights plan"],
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "netherlands-break",
    country: "Netherlands",
    flag: "🇳🇱",
    title: "Amsterdam Canal Break",
    badge: "Limited Spaces",
    duration: "4 days / 3 nights",
    priceLabel: "Tailored quote",
    description:
      "Enjoy canals, museums and cycling routes with a compact European break designed around your interests.",
    includes: ["Visa preparation guidance", "Flexible flight options", "Central hotel choices", "Local experience ideas"],
    image:
      "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "uk-escape",
    country: "United Kingdom",
    flag: "🇬🇧",
    title: "London & UK Escape",
    badge: "UK Favourite",
    duration: "4 days / 3 nights",
    priceLabel: "Tailored quote",
    description:
      "Discover London's landmarks, royal heritage and vibrant neighbourhoods with a flexible UK holiday plan.",
    includes: ["UK travel consultation", "Flight and rail options", "Central hotel choices", "Personalised itinerary"],
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "usa-adventure",
    country: "United States",
    flag: "🇺🇸",
    title: "New York City Adventure",
    badge: "Long Haul",
    duration: "7 days / 6 nights",
    priceLabel: "Tailored quote",
    description:
      "See the skyline, museums and famous neighbourhoods with complete USA visa and holiday planning support.",
    includes: ["USA visa guidance", "Return flight options", "Hotel recommendations", "City experience plan"],
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "canada-discovery",
    country: "Canada",
    flag: "🇨🇦",
    title: "Canada Nature Discovery",
    badge: "New Offer",
    duration: "8 days / 7 nights",
    priceLabel: "Tailored quote",
    description:
      "Combine city highlights and unforgettable natural scenery with a Canada visitor visa and holiday package.",
    includes: ["Canada visa assistance", "Flight search and booking", "Hotel options", "Route and activity planning"],
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop",
  },
];
