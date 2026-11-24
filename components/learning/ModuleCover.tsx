/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/cn";
import { colorOf, ModuleIcon } from "./icons";

/** Couverture d'un module : miniature fournie, ou carte typographique noir et blanc façon gallery-ai.fr. */
export function ModuleCover({ module, index, className, size = "md" }: {
  module: { title: string; icon: string; color: string; thumbnail_url: string | null };
  index?: number; className?: string; size?: "sm" | "md" | "lg";
}) {
  const c = colorOf(module.color);
  if (module.thumbnail_url) {
    return (
      <div className={cn("relative overflow-hidden bg-violet-100", className)}>
        <img src={module.thumbnail_url} alt="" className="absolute inset-0 size-full object-cover" loading="lazy" />
      </div>
    );
  }
  const dark = c.ink !== "#141414";
  const icon = size === "lg" ? "size-16 [&>svg]:size-7" : size === "sm" ? "size-10 [&>svg]:size-5" : "size-12 [&>svg]:size-6";
  return (
    <div
      className={cn("relative isolate overflow-hidden", className)}
      style={{ background: `linear-gradient(160deg, ${c.from}, ${c.to})`, color: c.ink }}
      aria-hidden
    >
      {/* trame de points discrète, comme le fond de la landing */}
      <div
        className="absolute inset-0 opacity-[.16]"
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, ${c.ink} 1px, transparent 0)`, backgroundSize: "18px 18px" }}
      />
      {index != null && size !== "sm" && (
        <span className="absolute -bottom-6 -right-1 select-none font-sans text-[120px] font-extrabold leading-none tracking-tighter opacity-[.12]">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      {index != null && size !== "sm" && (
        <span
          className={cn(
            "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] ring-1",
            dark ? "ring-white/30" : "ring-ink/20",
          )}
        >
          <span className="size-1.5 rounded-full" style={{ background: c.ink }} />
          Module {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <div className={cn("absolute", size === "sm" ? "inset-0 grid place-items-center" : "bottom-4 left-4")}>
        <div
          className={cn(
            "grid place-items-center rounded-full ring-1 transition-transform duration-500 group-hover:-translate-y-1",
            dark ? "bg-white/10 ring-white/30" : "bg-white ring-ink/15",
            icon,
          )}
        >
          <ModuleIcon name={module.icon} />
        </div>
      </div>
      {size !== "sm" && <span className="absolute right-4 top-4 font-marker text-lg uppercase leading-none opacity-80">g.</span>}
    </div>
  );
}
