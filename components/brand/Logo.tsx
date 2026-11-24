import { cn } from "@/lib/cn";

/** Mot-symbole « gallery. » en Permanent Marker (comme sur gallery-ai.fr), avec la mention « Formation ». */
export function Logo({ className, compact, tone = "dark" }: { className?: string; compact?: boolean; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <span className={cn("inline-flex items-baseline gap-2.5", className)}>
      <span className={cn("font-marker text-[26px] uppercase leading-none tracking-wide", light ? "text-white" : "text-ink")} aria-hidden>
        {compact ? "g." : "gallery."}
      </span>
      {!compact && (
        <span
          className={cn(
            "rounded-full px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] ring-1",
            light ? "text-white/80 ring-white/30" : "text-ink-muted ring-ink/15",
          )}
          aria-hidden
        >
          Formation
        </span>
      )}
      <span className="sr-only">Gallery Formation</span>
    </span>
  );
}
