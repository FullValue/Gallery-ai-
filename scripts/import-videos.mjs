// Copie les vidéos rendues par le moteur dans public/videos et met à jour lib/seed/catalog.json
// (chemin + durée de chaque chapitre), puis régénère supabase/seed.sql.
//   node scripts/import-videos.mjs [dossier des mp4]
import { readFileSync, writeFileSync, copyFileSync, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { homedir } from "node:os";

const src = process.argv[2] ?? join(homedir(), "Gallery Formation Videos/engine/out");
const catalogPath = new URL("../lib/seed/catalog.json", import.meta.url);
const catalog = JSON.parse(readFileSync(catalogPath, "utf8"));
mkdirSync(new URL("../public/videos/", import.meta.url), { recursive: true });

for (const m of catalog.modules) {
  for (const l of m.lessons) {
    const file = join(src, `${l._id}.mp4`);
    if (!existsSync(file)) { console.log("manquante :", l._id); continue; }
    copyFileSync(file, new URL(`../public/videos/${l._id}.mp4`, import.meta.url));
    const d = Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file]).toString());
    l.video = `/videos/${l._id}.mp4`;
    l.duration = Math.round(d);
    console.log(l._id, l.duration + " s", l.title);
  }
}
writeFileSync(catalogPath, JSON.stringify(catalog, null, 2) + "\n");
execFileSync("node", [new URL("./generate-seed.mjs", import.meta.url).pathname], { stdio: "inherit" });
