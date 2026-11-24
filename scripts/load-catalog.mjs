// Charge le catalogue (lib/seed/catalog.json) dans Supabase via l'API, avec la clé service_role.
// Utile quand on ne peut pas exécuter supabase/seed.sql. Idempotent : met à jour par slug, recrée les leçons.
//   node --env-file=.env.local scripts/load-catalog.mjs           charge le catalogue
//   node --env-file=.env.local scripts/load-catalog.mjs --purge-yoovi   supprime d'abord les anciennes données Yoovi
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) { console.error("Variables requises : NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY"); process.exit(1); }
const sb = createClient(url, key, { auth: { persistSession: false } });
const ok = (r, what) => { if (r.error) { console.error(what, "→", r.error.message); process.exit(1); } return r.data; };
const catalog = JSON.parse(readFileSync(new URL("../lib/seed/catalog.json", import.meta.url), "utf8"));

if (process.argv.includes("--purge-yoovi")) {
  const OLD = ["tour-de-la-plateforme", "une-salle-en-action", "espace-parent", "reviser-avec-yoovi", "salle-guidee", "parcours-de-revision", "partage-d-ecran"];
  const mods = ok(await sb.from("modules").select("id, slug").in("slug", OLD), "lecture modules Yoovi");
  const ids = mods.map((m) => m.id);
  if (ids.length) {
    ok(await sb.from("lessons").delete().in("module_id", ids), "suppression leçons Yoovi");
    ok(await sb.from("modules").delete().in("id", ids), "suppression modules Yoovi");
  }
  ok(await sb.from("organizations").delete().eq("name", "Yoovi"), "suppression organisme Yoovi");
  console.log(`Yoovi supprimé : ${ids.length} modules (leçons incluses) et l'organisme.`);
}

for (const [i, m] of catalog.modules.entries()) {
  const row = { slug: m.slug, title: m.title, summary: m.summary, objective: m.objective, icon: m.icon, color: m.color, position: i, status: "published" };
  const mod = ok(await sb.from("modules").upsert(row, { onConflict: "slug" }).select("id").single(), `module ${m.slug}`);
  ok(await sb.from("lessons").delete().eq("module_id", mod.id), `reset leçons ${m.slug}`);
  const lessons = m.lessons.map((l, j) => ({ module_id: mod.id, title: l.title, video_provider: l.video ? "file" : "none", video_ref: l.video, duration_seconds: l.duration, position: j, status: "published" }));
  ok(await sb.from("lessons").insert(lessons), `leçons ${m.slug}`);
  console.log(`${String(i + 1).padStart(2, "0")} ${m.title} — ${lessons.length} vidéo(s)`);
}
console.log("Catalogue Gallery chargé.");
