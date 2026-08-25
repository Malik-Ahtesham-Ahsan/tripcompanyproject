import { trustBadges } from "@/data/trustBadges";

export function TrustBadges() {
  const items = [...trustBadges, ...trustBadges];

  return (
    <section className="overflow-hidden border-y border-navy-950/8 bg-white py-4">
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {items.map((badge, index) => (
          <span key={`${badge}-${index}`} className="text-sm font-medium text-navy-800">
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
