import { siteConfig } from "@/data/site";

export function TopBanner() {
  return (
    <div className="bg-blue-600 py-2.5 text-center text-sm text-white">
      <p className="px-4">
        🎉 {siteConfig.promo.text}{" "}
        <strong>{siteConfig.promo.highlight}</strong> {siteConfig.promo.suffix} — WhatsApp Now:{" "}
        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2 hover:text-gold-300"
        >
          {siteConfig.phone}
        </a>
      </p>
    </div>
  );
}
