import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Permanent_Marker } from "next/font/google";
import { ToastProvider } from "@/components/ui/Toast";
import { DemoBanner } from "@/components/shell/DemoBanner";
import "./globals.css";

// Polices de gallery-ai.fr : JetBrains Mono pour tout le texte, Permanent Marker pour le logo.
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-mono", display: "swap" });
const marker = Permanent_Marker({ subsets: ["latin"], weight: "400", variable: "--font-marker", display: "swap" });

// Toutes les pages dépendent de la session : aucun pré-rendu statique.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { default: "Gallery Formation", template: "%s · Gallery Formation" },
  description: "L'espace de formation des boutiques équipées de gallery. : prendre en main l'app, du questionnaire au comptoir jusqu'à la vente.",
  robots: { index: false, follow: false },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#FBFBFA",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${mono.variable} ${marker.variable}`}>
      <body>
        <a href="#contenu" className="sr-only z-[100] rounded-full bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Aller au contenu
        </a>
        <ToastProvider>
          <DemoBanner />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
