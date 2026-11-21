# Suivi du projet Boussole 2027 (à lire en début de session)

## Vision (Ewen)
- Appli gratuite, strictement neutre, pour aider les électeurs à se situer avant la présidentielle 2027. Web d'abord (GitHub Pages), puis App Store / Play Store.
- 100 % local : aucune donnée collectée, pas de compte, pas de profil. Sécurité forte. Polices à auto-héberger (pas Google Fonts).
- Infos vérifiées et sourcées ; aucune couleur de parti, aucun nom de candidat/parti dans le jeu.
- Modèle : gratuit, pub avant les résultats ; com Insta/TikTok ; usage régulier (habitude).
- Plus tard : onglet Vérif (fact-check 2×/jour, ingérences étrangères), onglet Candidats (fiches neutres, « vient du parti ou du candidat »).

## Le jeu (état actuel)
- Plateau : la France en île, pays voisins estompés, mer et décor jusqu'en haut/bas d'écran derrière les boutons.
- 8 semaines ; événements inspirés de faits réels (époques variées), décisions à la semaine ; budget réel affiché en déficit (convention : budget > 0 = déficit baisse) ; recettes induites (pouvoir d'achat 0,6 Md€/pt, emploi 0,75 Md€/pt).
- Réformes tirées des programmes, dès la semaine 2, 2 max par semaine parmi 5–6 ; étapes sur plusieurs semaines, blocage à l'Assemblée (abandon, 49.3, compromis), résultats différés (référendum la semaine suivante).
- Réponses multiples (urgence + fond), rappels des décisions passées, annonces de résultats, « Mon orientation » par secteur, actu à chaque lancement, sauvegarde locale, bilan mensuel.
- Mode cinéma : animation d'abord, bouton « Répondre à la situation » ensuite ; en fin de carte « Retour au plateau » ou « Situation suivante ».
- Vocabulaire niveau Sciences Po (termes experts expliqués). Vouvoiement (corriger les « tu » restants).

## Préférences graphiques et de travail
- Pas « IA », pas « site gouvernemental », pas enfantin ; texte petit ; ludique façon jeu mobile.
- DA retenue (21/11/2026) : **isométrique vectoriel vif et ludique** (formes rondes, accents dorés, couleurs saturées contrastées). Le style « maquette miniature » a été écarté (trop lourd).
- Objets indépendants (sans socle ni contour), placés par le moteur ; trains sur leurs rails ; bateaux en mer, voitures/grues sur terre (masque terre/mer, `fxAudit` = 0).
- Montrer des propositions AVANT de lancer une grosse génération.
- Économiser les tokens : peu d'agents, petites modifications faites directement.

## Bibliothèque graphique (Recraft)
- Compte Recraft d'Ewen (plan Basic, connecteur MCP). ~760 crédits restants au 21/11. 1 objet vectoriel = 4 crédits.
- Style Recraft validé : `82b1136e-7699-41bc-8102-0ada146dde45` (« Boussole iso vif »).
- `assets/library/manifest.json` : 51 objets (id, catégorie, URL du SVG, prompt). Aperçus WebP dans `assets/library/preview/`. Planche : `planche_51.png` (non versionnée).
- Le domaine `img.recraft.ai` a été autorisé par Ewen dans claude.ai mais restait bloqué dans l'ancienne session.

## Maquette validée (21/11)
- `docs/maquettes/carte_v2.html` : île épaisse (terre/sable/herbe), massifs enneigés, fleuves, voies ferrées, voisins estompés ; monuments + nombreuses maisons ; TGV sans rails qui suit les voies ; jauges légendées (pouvoir d'achat, emploi, climat, cohésion) + pastille déficit/PIB ; carte d'événement et boutons « 3D ». Police Nunito auto-hébergée (`assets/fonts`).
- Retours d'Ewen : afficher les constantes (jauges légendées), trains sans rails qui suivent la voie, des maisons partout (pas que des monuments). Objets retouchés : versions dans `assets/library/svg_final/`.

## Intégration DA dans le jeu (21/11, en ligne)
- Palette vive (base.css), police Nunito auto-hébergée (Google Fonts supprimé), couche `#sprl` (`src/art/sprites.js`) : ~170 sprites (monuments, maisons par région, énergie aux lieux réels, fermes, ports), TGV sprite qui suit les voies (`layers.js`). `src/assets` = lien vers `assets/` ; le build copie sprites et polices dans `dist/assets`.
- Reste : remplacer les objets d'événements (OBJ, `objects.js`) par les sprites (tracteur, avion, cargo…) ; textes encore au « tu » ; panneaux du haut un peu translucides.

## Prochaines étapes
1. FAIT (21/11) : 51 SVG dans `assets/library/svg/` (9,5 Mo, ~190 Ko chacun, avec métadonnées C2PA de provenance IA à conserver). Trop lourds pour le jeu : produire des sprites WebP (~256 px) via Playwright pour le build.
2. Retoucher les couleurs dans les SVG : TGV, vache, toit haussmannien (trop bleus), fumée de l'incendie en gris, crue en marron. Régénérer : cyclone, nuage_neige, fourviere, arc_triomphe.
3. Générer les sprites WebP depuis les SVG (sans retirer la provenance des sources ; mentionner « illustrations générées avec Recraft » dans les crédits), puis les intégrer à `src/art/objects.js` à la place des dessins actuels.
4. Refaire la carte (relief, côtes, mer) dans la même DA, puis les boutons et les cartes de texte. Montrer une maquette avant d'intégrer.
5. Bugs connus : étiquette « Viande importée » coupée à gauche ; « Lancer la semaine » en double ; vérifier l'affichage des choix `requires` ; trop de choix creusent le déficit (28+ / 66−) ; vérifier les estimations restantes.

## Technique
- Dépôt public : github.com/ewenbeaugendre04/boussole-2027 ; site : ewenbeaugendre04.github.io/boussole-2027 (déploiement auto via Actions si les contrôles passent).
- Voir `CLAUDE.md` (où modifier quoi) et `docs/SCHEMA.md` (format des données).
