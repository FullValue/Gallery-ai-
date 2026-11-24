import { Logo } from "@/components/brand/Logo";

const STEPS = [
  ["01", "Le client scanne"],
  ["02", "Il répond en trois minutes"],
  ["03", "L'IA écrit son profil"],
  ["04", "Le vendeur sait quoi proposer"],
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main id="contenu" className="grid min-h-dvh lg:grid-cols-[1.05fr_1fr]">
      {/* Panneau de marque (ordinateur) : la carte noire de l'app gallery. */}
      <section className="relative hidden overflow-hidden bg-ink lg:block" aria-hidden>
        <div className="bg-grain absolute inset-0 opacity-30 [filter:invert(1)]" />
        <div className="relative flex h-full flex-col justify-between p-12 text-white">
          <Logo tone="light" />
          <div className="max-w-lg">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 ring-1 ring-white/25">
              <span className="size-1.5 rounded-full bg-white" /> Espace formation
            </span>
            <h2 className="mt-6 text-[40px] font-extrabold uppercase leading-[1.02] tracking-tight text-white">
              Prendre en main gallery., geste par geste.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">
              Des vidéos courtes pour toute l&apos;équipe de la boutique : du questionnaire au comptoir jusqu&apos;à la vente, puis les relances et les mails.
            </p>
            <ol className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {STEPS.map(([n, t]) => (
                <li key={n} className="flex items-center gap-5 py-3.5 text-[13px] uppercase tracking-[0.08em] text-white/80">
                  <span className="text-white/40">{n}</span>
                  {t}
                </li>
              ))}
            </ol>
          </div>
          <p className="text-xs uppercase tracking-[0.12em] text-white/40">© {new Date().getFullYear()} gallery. — la boutique augmentée</p>
        </div>
      </section>

      {/* Formulaire */}
      <section className="relative flex flex-col bg-violet-50">
        <div className="relative flex flex-1 items-center justify-center px-5 py-10 sm:px-10">
          <div className="w-full max-w-[440px] animate-fade-up">
            <div className="mb-8 lg:hidden"><Logo /></div>
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
