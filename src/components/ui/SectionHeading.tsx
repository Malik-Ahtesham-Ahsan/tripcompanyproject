import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
          light
            ? "border-white/25 bg-white/10 text-gold-400"
            : "border-blue-600/15 bg-blue-600/5 text-blue-600"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "font-display text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-balance text-base leading-relaxed sm:text-lg",
            light ? "text-white/70" : "text-navy-700/70"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
