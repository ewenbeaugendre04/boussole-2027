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

## Prochaines étapes
1. Télécharger les 51 SVG : `node -e` sur le manifeste, puis `curl -o assets/library/svg/<id>.svg <url>`.
2. Retoucher les couleurs dans les SVG : TGV, vache, toit haussmannien (trop bleus), fumée de l'incendie en gris, crue en marron. Régénérer : cyclone, nuage_neige, fourviere, arc_triomphe.
3. Nettoyer et optimiser les SVG (svgo), puis les intégrer à `src/art/objects.js` à la place des dessins actuels.
4. Refaire la carte (relief, côtes, mer) dans la même DA, puis les boutons et les cartes de texte. Montrer une maquette avant d'intégrer.
5. Bugs connus : étiquette « Viande importée » coupée à gauche ; « Lancer la semaine » en double ; vérifier l'affichage des choix `requires` ; trop de choix creusent le déficit (28+ / 66−) ; vérifier les estimations restantes.

## Technique
- Dépôt public : github.com/ewenbeaugendre04/boussole-2027 ; site : ewenbeaugendre04.github.io/boussole-2027 (déploiement auto via Actions si les contrôles passent).
- Voir `CLAUDE.md` (où modifier quoi) et `docs/SCHEMA.md` (format des données).
