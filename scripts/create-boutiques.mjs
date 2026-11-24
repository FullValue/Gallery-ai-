// Crée les boutiques (organismes) et leur compte de connexion dans Supabase.
// Le mot de passe n'est JAMAIS écrit dans le dépôt : il est lu à l'exécution.
//   BOUTIQUE_PASSWORD='…' node --env-file=.env.local scripts/create-boutiques.mjs
// Idempotent : un compte existant est mis à jour (mot de passe, organisme), pas dupliqué.
import { createClient } from "@supabase/supabase-js";

const BOUTIQUES = [
  { id: "SECRET-GARDEN", name: "Secret Garden", city: "Villefranche-sur-Saône" },
  { id: "DSB", name: "DSB Parfums", city: "Bonneuil-sur-Marne" },
  { id: "REDDINGTON", name: "Reddington", city: "Île-de-France" },
  { id: "VANORA", name: "Vanora", city: "Nanterre" },
];
const DOMAIN = "boutiques.gallery-ai.fr";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
const password = process.env.BOUTIQUE_PASSWORD;
if (!url || !key || !password) {
  console.error("Variables requises : NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, BOUTIQUE_PASSWORD");
  process.exit(1);
}
const admin = createClient(url, key, { auth: { persistSession: false } });
const { data: list, error: listErr } = await admin.auth.admin.listUsers({ perPage: 1000 });
if (listErr) throw listErr;

for (const b of BOUTIQUES) {
  const email = `${b.id.toLowerCase()}@${DOMAIN}`;
  let { data: org } = await admin.from("organizations").select("id").eq("name", b.name).maybeSingle();
  if (!org) {
    const ins = await admin.from("organizations").insert({ name: b.name, kind: "Parfumerie de niche", city: b.city }).select("id").single();
    if (ins.error) throw ins.error;
    org = ins.data;
  }
  const meta = { role: "partner", organization_id: org.id };
  const existing = list.users.find((u) => u.email?.toLowerCase() === email);
  let userId = existing?.id;
  if (!existing) {
    const { data, error } = await admin.auth.admin.createUser({ email, password, email_confirm: true, app_metadata: meta });
    if (error) throw error;
    userId = data.user.id;
  } else {
    const { error } = await admin.auth.admin.updateUserById(userId, { password, app_metadata: meta });
    if (error) throw error;
  }
  const { error } = await admin.from("profiles").update({
    full_name: b.name, job_title: "Boutique", role: "partner", organization_id: org.id, status: "active",
  }).eq("id", userId);
  if (error) throw error;
  console.log(`${b.id.padEnd(14)} → ${b.name} (${email})`);
}
console.log("Terminé. Identifiant = nom en majuscules ; mot de passe = BOUTIQUE_PASSWORD.");
