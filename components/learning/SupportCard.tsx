import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { env } from "@/lib/env";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function SupportCard({ className }: { className?: string }) {
  return (
    <section aria-labelledby="support-title" className={cn("relative overflow-hidden rounded-[28px] bg-ink p-6 text-white sm:p-8", className)}>
      <span className="pointer-events-none absolute -bottom-6 -right-2 hidden select-none font-marker text-[120px] uppercase leading-none text-white/[.06] sm:block" aria-hidden>gallery.</span>
      <div className="relative max-w-sm">
        <p className="font-reading text-[13px] font-semibold uppercase tracking-[0.1em] text-white/50">Besoin d&apos;aide ?</p>
        <h2 id="support-title" className="mt-2 font-display text-2xl font-bold text-white">L&apos;équipe Gallery vous accompagne.</h2>
        <p className="mt-2 text-[15px] text-white/75">Une question sur la plateforme ou une formation ? Écrivez-nous, nous vous répondons par e-mail.</p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link href="/support" className={buttonClass("secondary", "md")}>
            <Mail className="size-4" /> Contacter le support
          </Link>
          <a href={`mailto:${env.supportEmail}`} className="inline-flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-white">
            {env.supportEmail} <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
