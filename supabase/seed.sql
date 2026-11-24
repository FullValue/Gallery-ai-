-- Généré par scripts/generate-seed.mjs depuis lib/seed/catalog.json — ne pas éditer à la main.
-- Catalogue de départ : modules publiés, chapitres avec leurs vidéos (public/videos).
begin;
insert into public.organizations (name, kind, city)
select 'Gallery', 'Autre', null
where not exists (select 1 from public.organizations where name = 'Gallery');

insert into public.modules (slug, title, summary, objective, icon, color, position, status)
values ('prise-en-main', 'Bienvenue dans gallery.', 'Ouvrir sa session, passer le parcours d''accueil et se repérer dans l''app en une minute.', 'Savoir se connecter et retrouver chaque espace de l''app.', 'compass', 'violet', 0, 'published')
on conflict (slug) do nothing;
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Se connecter à sa boutique', 'file', null, null, 0, 'published' from public.modules where slug = 'prise-en-main'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'prise-en-main' and l.title = 'Se connecter à sa boutique');
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Le parcours d''accueil', 'file', null, null, 1, 'published' from public.modules where slug = 'prise-en-main'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'prise-en-main' and l.title = 'Le parcours d''accueil');
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Se repérer dans l''app', 'file', null, null, 2, 'published' from public.modules where slug = 'prise-en-main'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'prise-en-main' and l.title = 'Se repérer dans l''app');

insert into public.modules (slug, title, summary, objective, icon, color, position, status)
values ('accueil-du-jour', 'L''accueil du jour', 'Lire l''écran d''accueil : les passages en direct, les nouveaux clients et le chiffre du jour.', 'Savoir ce qui s''est passé aujourd''hui en boutique d''un coup d''œil.', 'store', 'jaune', 1, 'published')
on conflict (slug) do nothing;
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Les passages en direct', 'file', null, null, 0, 'published' from public.modules where slug = 'accueil-du-jour'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'accueil-du-jour' and l.title = 'Les passages en direct');

insert into public.modules (slug, title, summary, objective, icon, color, position, status)
values ('questionnaire-client', 'Le questionnaire client', 'La plaquette NFC sur le comptoir, le questionnaire que remplit le client et les questions que vous choisissez.', 'Comprendre ce que vit le client quand il scanne, et adapter le questionnaire à la boutique.', 'nfc', 'encre', 2, 'published')
on conflict (slug) do nothing;
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'La plaquette NFC et le lien', 'file', null, null, 0, 'published' from public.modules where slug = 'questionnaire-client'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'questionnaire-client' and l.title = 'La plaquette NFC et le lien');
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Ce que voit le client', 'file', null, null, 1, 'published' from public.modules where slug = 'questionnaire-client'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'questionnaire-client' and l.title = 'Ce que voit le client');
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Personnaliser ses questions', 'file', null, null, 2, 'published' from public.modules where slug = 'questionnaire-client'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'questionnaire-client' and l.title = 'Personnaliser ses questions');

insert into public.modules (slug, title, summary, objective, icon, color, position, status)
values ('conseiller-un-client', 'Conseiller un client', 'De la fiche « Trouver son parfum » à la vente : le profil olfactif écrit par l''IA, les propositions tirées du stock et la clôture de la consultation.', 'Savoir quoi proposer, pourquoi, et enregistrer l''issue de chaque consultation.', 'scan', 'bleu', 3, 'published')
on conflict (slug) do nothing;
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Lancer « Trouver son parfum »', 'file', null, null, 0, 'published' from public.modules where slug = 'conseiller-un-client'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'conseiller-un-client' and l.title = 'Lancer « Trouver son parfum »');
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Lire le profil et les propositions', 'file', null, null, 1, 'published' from public.modules where slug = 'conseiller-un-client'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'conseiller-un-client' and l.title = 'Lire le profil et les propositions');
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Clore : vendu ou pas vendu', 'file', null, null, 2, 'published' from public.modules where slug = 'conseiller-un-client'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'conseiller-un-client' and l.title = 'Clore : vendu ou pas vendu');

insert into public.modules (slug, title, summary, objective, icon, color, position, status)
values ('fichier-clients', 'Le fichier clients', 'L''annuaire de la boutique : rechercher, filtrer et ouvrir une fiche client.', 'Retrouver n''importe quel client et ce qu''il aime en quelques secondes.', 'client', 'rose', 4, 'published')
on conflict (slug) do nothing;
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Retrouver un client', 'file', null, null, 0, 'published' from public.modules where slug = 'fichier-clients'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'fichier-clients' and l.title = 'Retrouver un client');
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'La fiche client', 'file', null, null, 1, 'published' from public.modules where slug = 'fichier-clients'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'fichier-clients' and l.title = 'La fiche client');

insert into public.modules (slug, title, summary, objective, icon, color, position, status)
values ('relances', 'Les relances', 'Les clients pas vus depuis un moment et les anniversaires qui approchent, avec le bon mot au bon moment.', 'Faire revenir les clients sans y penser.', 'relance', 'menthe', 5, 'published')
on conflict (slug) do nothing;
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Les clients à recontacter', 'file', null, null, 0, 'published' from public.modules where slug = 'relances'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'relances' and l.title = 'Les clients à recontacter');

insert into public.modules (slug, title, summary, objective, icon, color, position, status)
values ('mails', 'Les mails à vos clients', 'Un mail construit sur votre stock réel et sur ce que chaque client a dit aimer, puis le suivi des envois.', 'Écrire, cibler et suivre une campagne mail.', 'mail', 'violet', 6, 'published')
on conflict (slug) do nothing;
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Écrire un mail ciblé', 'file', null, null, 0, 'published' from public.modules where slug = 'mails'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'mails' and l.title = 'Écrire un mail ciblé');
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Suivre ses envois', 'file', null, null, 1, 'published' from public.modules where slug = 'mails'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'mails' and l.title = 'Suivre ses envois');

insert into public.modules (slug, title, summary, objective, icon, color, position, status)
values ('ma-boutique', 'Ma boutique', 'Le stock qui nourrit l''IA, les ventes traçables et les réglages de la boutique.', 'Tenir son catalogue à jour, lire ses ventes et régler sa boutique.', 'stock', 'encre', 7, 'published')
on conflict (slug) do nothing;
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Mes parfums', 'file', null, null, 0, 'published' from public.modules where slug = 'ma-boutique'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'ma-boutique' and l.title = 'Mes parfums');
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Mes ventes', 'file', null, null, 1, 'published' from public.modules where slug = 'ma-boutique'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'ma-boutique' and l.title = 'Mes ventes');
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Les réglages', 'file', null, null, 2, 'published' from public.modules where slug = 'ma-boutique'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'ma-boutique' and l.title = 'Les réglages');

insert into public.modules (slug, title, summary, objective, icon, color, position, status)
values ('gallery-ai', 'Gallery AI', 'L''assistant de la boutique : posez vos questions sur le chiffre d''affaires, les meilleurs clients, le stock ou les relances.', 'Obtenir une réponse chiffrée sur sa boutique en une question.', 'assistant', 'bleu', 8, 'published')
on conflict (slug) do nothing;
insert into public.lessons (module_id, title, video_provider, video_ref, duration_seconds, position, status)
select id, 'Interroger Gallery AI', 'file', null, null, 0, 'published' from public.modules where slug = 'gallery-ai'
  and not exists (select 1 from public.lessons l join public.modules mm on mm.id = l.module_id where mm.slug = 'gallery-ai' and l.title = 'Interroger Gallery AI');
commit;
