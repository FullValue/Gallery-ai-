import {
  BarChart3, BookOpen, Compass, Mail, MessagesSquare, Nfc, Package, ScanLine, Store, UserRound, BellRing, Bot, GraduationCap, HandHeart, Layers, Library, Lightbulb, MessageCircleQuestionMark, MonitorPlay,
  MousePointerClick, Puzzle, Rocket, ShieldCheck, Sparkles, Target, Users, type LucideIcon,
} from "lucide-react";

export const MODULE_ICONS: Record<string, { icon: LucideIcon; label: string }> = {
  compass: { icon: Compass, label: "Boussole" },
  "mouse-pointer-click": { icon: MousePointerClick, label: "Prise en main" },
  "hand-heart": { icon: HandHeart, label: "Accompagnement" },
  library: { icon: Library, label: "Bibliothèque" },
  sparkles: { icon: Sparkles, label: "Nouveauté" },
  "graduation-cap": { icon: GraduationCap, label: "Diplôme" },
  "book-open": { icon: BookOpen, label: "Livre" },
  lightbulb: { icon: Lightbulb, label: "Idée" },
  users: { icon: Users, label: "Équipe" },
  question: { icon: MessageCircleQuestionMark, label: "Questions" },
  "monitor-play": { icon: MonitorPlay, label: "Démonstration" },
  puzzle: { icon: Puzzle, label: "Méthode" },
  rocket: { icon: Rocket, label: "Lancement" },
  target: { icon: Target, label: "Objectif" },
  "shield-check": { icon: ShieldCheck, label: "Sécurité" },
  layers: { icon: Layers, label: "Ressources" },
  nfc: { icon: Nfc, label: "Plaquette NFC" },
  scan: { icon: ScanLine, label: "Questionnaire" },
  client: { icon: UserRound, label: "Client" },
  relance: { icon: BellRing, label: "Relances" },
  mail: { icon: Mail, label: "Mails" },
  stock: { icon: Package, label: "Stock" },
  stats: { icon: BarChart3, label: "Ventes" },
  boutique: { icon: Store, label: "Boutique" },
  assistant: { icon: Bot, label: "Gallery AI" },
  conversation: { icon: MessagesSquare, label: "Conversation" },
};

export function ModuleIcon({ name, className }: { name: string; className?: string }) {
  const Icon = MODULE_ICONS[name]?.icon ?? Sparkles;
  return <Icon className={className} aria-hidden />;
}

/** Palettes de couverture des modules : variations du noir et blanc de gallery-ai.fr.
 *  Les clés historiques sont gardées (elles sont enregistrées en base). */
export const MODULE_COLORS: Record<string, { label: string; from: string; to: string; accent: string; soft: string; text: string; ink: string }> = {
  violet: { label: "Encre", from: "#141414", to: "#2B2B2B", accent: "#FBFBFA", soft: "#F2F2F0", text: "#141414", ink: "#FBFBFA" },
  encre: { label: "Noir profond", from: "#0A0A0A", to: "#141414", accent: "#FBFBFA", soft: "#F2F2F0", text: "#141414", ink: "#FBFBFA" },
  bleu: { label: "Graphite", from: "#2B2B2B", to: "#3A3C3C", accent: "#FBFBFA", soft: "#F2F2F0", text: "#2B2B2B", ink: "#FBFBFA" },
  rose: { label: "Papier", from: "#F2F2F0", to: "#E8E8E5", accent: "#141414", soft: "#F2F2F0", text: "#141414", ink: "#141414" },
  jaune: { label: "Craie", from: "#FBFBFA", to: "#F2F2F0", accent: "#141414", soft: "#F2F2F0", text: "#141414", ink: "#141414" },
  menthe: { label: "Pierre", from: "#E2E2E2", to: "#CFCFCB", accent: "#141414", soft: "#F2F2F0", text: "#141414", ink: "#141414" },
};

export const colorOf = (key: string) => MODULE_COLORS[key] ?? MODULE_COLORS.violet;
