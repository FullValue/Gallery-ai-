/** Les boutiques se connectent avec un identifiant (« SECRET-GARDEN »), pas une adresse e-mail.
 *  Côté Supabase Auth, l'identifiant est stocké sous la forme d'une adresse technique :
 *  secret-garden@boutiques.gallery-ai.fr (le domaine n'a pas besoin de recevoir de courrier). */
export const BOUTIQUE_DOMAIN = "boutiques.gallery-ai.fr";

export function identifierToEmail(input: string): string {
  const v = input.trim().toLowerCase();
  if (v.includes("@")) return v;
  return `${v.replace(/[^a-z0-9-]/g, "")}@${BOUTIQUE_DOMAIN}`;
}

export const isBoutiqueEmail = (email: string) => email.toLowerCase().endsWith(`@${BOUTIQUE_DOMAIN}`);
