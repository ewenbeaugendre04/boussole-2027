# Suivi du projet Boussole 2027 (à lire en début de session)

## Vision (Ewen)
- Appli gratuite, strictement neutre, pour aider les électeurs à se situer avant la présidentielle 2027. Web d'abord (GitHub Pages), puis App Store / Play Store.
- 100 % local : aucune donnée collectée, pas de compte, pas de profil. Sécurité forte. Polices à auto-héberger (pas Google Fonts).
- Infos vérifiées et sourcées ; aucune couleur de parti, aucun nom de candidat/parti dans le jeu.
- Modèle : gratuit, pub avant les résultats ; com Insta/TikTok ; usage régulier (habitude).
- Plus tard : onglet Vérif (fact-check 2×/jour, ingérences étrangères), onglet Candidats (fiches neutres, « vient du parti ou du candidat »).

## Le jeu (état actuel)
- Plateau : la France en île, pays voisins estompés, mer et décor jusqu'en haut/bas d'écran derrière les boutons.
- 16 semaines ; événements inspirés de faits réels (époques variées), décisions à la semaine ; budget réel affiché en déficit (convention : budget > 0 = déficit baisse) ; recettes induites (pouvoir d'achat 0,6 Md€/pt, emploi 0,75 Md€/pt).
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
- 2e passe (retours d'Ewen) : surcouche `src/styles/da.css` (panneaux crème pleins, jauges colorées, boutons sarcelle, pastille semaine dorée, étiquettes) ; rails épais à traverses ; plages (liseré sable) ; zones de couleur, forêts et champs en sprites ; voisins nets ; objets d'événement remplacés par les sprites via `OBJ_SPR` (`sprites.js`) ; trains retirés ; 2 lignes de rails fines et discrètes ; plus de bande d'eau ni d'écume le long des frontières terrestres ; carte « Lancer la semaine » en double masquée.
- Reste : textes au « tu » à passer au « vous » ; taille du texte des fiches (Ewen veut petit) ; objets OBJ sans sprite (drapeau UE, bâtiment UE, phares…).

## Lot du 21/11 midi
- Dette à jour : 3 595,5 Md€ (Insee, fin T2 2026, publié le 29/09/2026 ; prochain chiffre T3 fin décembre) avec `dette_source`.
- Web app : `src/manifest.webmanifest` + icônes `assets/icons/` (logo Recraft : île + rose des vents).
- Grande-Bretagne redessinée ; plus de noms de régions françaises (pays voisins seulement).
- Réponses : une seule, sauf événements `multi` = une au court terme + une au long terme (`choice.terme`), validation possible avec une seule des deux.
- FPS : sprites cuits dans l'image du décor (data URI + `<use>`), zoom max 2,6 ; repli sur la couche HTML si le chargement échoue (file://).
- Déploiement Pages en 2 jobs (assemblage puis déploiement) pour éviter l'erreur d'artefact.
- Lot contenu (21/11 soir) : 31 choix ajoutés, tirés de positions réelles des programmes (sans nom), 1 par événement à 4 choix, 2 pour Seine, médicaments, Louvre (160 choix) ; 11 réduisent le déficit, 10 l'augmentent, 10 neutres ; rappels (`recall`) complétés en « vous ».
- `multi` gardé sur 6 événements seulement (canicule, émeutes, Nouvelle-Calédonie, Xynthia, bouclier énergie, Lothar) ; retiré ailleurs avec les `terme`.
- Chiffres sourcés dans `budget_note` : EPR2 ~73 Md€ (EDF), ISF 4,2 Md€ / IFI 2,4 Md€, franchise doublée ~0,75 Md€ (Les Echos) ; les autres petits montants sont des « estimations du jeu » à vérifier.

## Lot du 21/11 après-midi
- 31 choix ajoutés depuis les programmes (sans noms), `multi` gardé sur 6 événements ; 66 objets Recraft ajoutés (120 au total) ; ~384 crédits restants (Ewen veut garder ~50 générations).
- Échelle des objets d'événement alignée sur le décor (`SPR_W`, x2) ; montagnes, collines, phares, voiliers, plages en sprites ; hôpital à croix rouge ; silhouettes d'outre-mer.
- À faire : rappels encore au « tu » ; vérifier les petits montants notés « estimation du jeu » ; objets faibles (montagne seule, métro, marée noire, conteneurs).

## Lot du 21/11 : candidats
- `src/data/candidats.js` (généré par un script, 29 candidats du dossier du 20/11/2026) : tri par baromètre Ifop-Fiducial du 18/11/2026 puis familles d'idées ; positions -2..+2 par axe et par secteur (axe principal du secteur dans `secteur_axe`), `null` si inconnu ; `matrice` choix/propositions → candidats (clé absente = non documenté) ; `programme_origine` parti/candidat.
- `src/engine/candidats.js` + styles `da.css` : icône discrète par secteur dans « Mon orientation », « Dossier candidats » dans le menu, bloc « Où vous vous situez » + lien dans le bilan du mois. Branché par enveloppe des fonctions existantes (aucun changement des événements).
- À vérifier : positions estimées à la main depuis le dossier (relecture humaine conseillée) ; Riner sans position ; matrice partielle (non branchée à l'interface pour l'instant).

## Lot du 21/11 soir (16 semaines)
- 16 semaines : 25 événements ajoutés (semaines 9-16, hiver → été, faits de 1999 à 2023 sourcés, dont 4 outre-mer), `multi` sur Ciarán et Mayotte seulement ; offres des semaines 9-16 = celles des semaines 2-8 (règle : retour possible après 6 semaines, `check_data`) ; choix nouveaux 44 positifs / 46 négatifs.
- Bug corrigé : les convois `move` avec `count` > 3 (tracteurs Mercosur) formaient une longue file poussée vers la côte ; désormais rangées de 3 (`spawnFx`, `placement.js`).
- À vérifier : petits montants « estimation du jeu » des nouveaux choix ; textes `real` à relire par Ewen.

## 22/11
- Montagnes réalistes (sprite `massif`), 3 aéroports et 3 petits ports ; mode nuit : zones de couleur et plages adaptées, panneaux sombres.
- Guide de départ (5 écrans, mascotte « Cap » = boussole, neutralité, données locales) + pages Conditions, Confidentialité, Publicité (pas de pub politique ni ciblée sur les réponses), À propos (`src/engine/guide.js`). À compléter avant les stores : éditeur, contact, hébergeur.

## Prochaines étapes
1. FAIT (21/11) : 51 SVG dans `assets/library/svg/` (9,5 Mo, ~190 Ko chacun, avec métadonnées C2PA de provenance IA à conserver). Trop lourds pour le jeu : produire des sprites WebP (~256 px) via Playwright pour le build.
2. Retoucher les couleurs dans les SVG : TGV, vache, toit haussmannien (trop bleus), fumée de l'incendie en gris, crue en marron. Régénérer : cyclone, nuage_neige, fourviere, arc_triomphe.
3. Générer les sprites WebP depuis les SVG (sans retirer la provenance des sources ; mentionner « illustrations générées avec Recraft » dans les crédits), puis les intégrer à `src/art/objects.js` à la place des dessins actuels.
4. Refaire la carte (relief, côtes, mer) dans la même DA, puis les boutons et les cartes de texte. Montrer une maquette avant d'intégrer.
5. Bugs connus : étiquette « Viande importée » coupée à gauche ; « Lancer la semaine » en double ; vérifier l'affichage des choix `requires` ; trop de choix creusent le déficit (28+ / 66−) ; vérifier les estimations restantes.

## Technique
- Dépôt public : github.com/ewenbeaugendre04/boussole-2027 ; site : ewenbeaugendre04.github.io/boussole-2027 (déploiement auto via Actions si les contrôles passent).
- Voir `CLAUDE.md` (où modifier quoi) et `docs/SCHEMA.md` (format des données).

## Lot du 21/11 nuit (20 semaines)
- 20 semaines : 12 événements récents ajoutés (semaines 17-20, 2024-2025 : sabotage TGV, vie chère Martinique, France Travail, crue de Rennes, ArcelorMittal, loi pesticide, EPR, contrôles allemands, ZFE, A69, narcotrafic, Brandt) ; 4 anciens remplacés (vache folle → dermatose 2025, Lothar → crues Pas-de-Calais, Erika → pêche golfe de Gascogne, chikungunya → Réunion 2025) ; choix nouveaux 32 + / 32 − ; offres 17-20 = semaines 10-13 ; bilan mensuel en semaine 20 (4 bilans + final).

## 26/11/2026 : carte vivante
- Carte allégée : densité des villes et villages réduite (`DENS = .65` dans `src/art/sprites.js`).
- Réformes qui modifient la carte : table `CARTE_REF` (sprites.js). Pendant le chantier, barre d'avancement sur chaque site (centrales à retirer, grues sur les sites à construire) ; une fois adoptée, les bâtiments disparaissent ou apparaissent (décor recuit via `carteSig()`).
  Réformes branchées : sortie_nucleaire, relance_nucleaire, peines_planchers, renovation_massive, vols_courts_train, taxe_kerosene_train.
- Barre de réforme compacte (icône du domaine + jauge), ouvre la fiche au toucher. Plus de drapeaux après les missions, plus de notifications au toucher de la carte.
- Grands reliefs affichés à part (`#sprl`, nets au zoom) avec embase verte ; sapins du pied devant les massifs.

## 26/11/2026 (soir)
- Actualités retirées (G.news supprimé, showNews = passage direct, le guide s'y insère toujours).
- Barre d'avancement de la partie : écran d'accueil (Continuer) et menu Réglages.
- Indicateur CO₂ affiché « Climat » (inversé au chargement dans core.js ; anciennes parties converties via `S.climat`).
- Notifications en file avec bouton Suivant ; flèche retour dans les menus (pile de cartes dans modal.js).
- Fiche « Décision prise » : déficit = coût direct + recettes induites (même calcul que le compteur).
- À faire : 10 semaines de plus (21 à 30), beaucoup de propositions 2027 en plus, dessins manquants (garder 15-20 crédits Recraft).

## 27/11/2026 : semaines 21 à 30
- 30 événements ajoutés par `scripts/semaines_21_30.js` (sources vérifiées par recherche web) : Manche (un pour un, Sandhurst), Groenland, Mercosur, Ukraine (coalition), Wero, frais de carte, université (frais ×5), Mayotte, Parcoursup, squats, Venezuela, titres-restaurant, droits de douane US sur les vins, œufs/canicule, tabac à la plage, drones/mur anti-drones, Palestine, drone d'aéroport, fast fashion, petits colis, impôts via Wero, Sénégal/Afrique, médicaments, Nouvelle-Calédonie, expulsions, sodas, timbre, café.
- 2 grandes décisions + au moins 1 banale par semaine, rappel (recall) automatique d'une décision passée du même secteur, 6 propositions par semaine.
- tests/check_data.js : 30 semaines attendues.
- Reste : dessins dédiés (Recraft, garder 15-20 crédits), propositions 2027 supplémentaires.

### 27/11/2026 (suite)
- 7 situations ajoutées (A13, CSE, activités l'après-midi, incendies volontaires, vidéosurveillance algorithmique, permis de conduire, travail le dimanche) : semaines 21-26 et 30 à 4 situations.
- `scripts/audit_fx.js [--fix]` : écarte les objets qui se chevauchent (distance mini 2,6), rallonge les déplacements trop courts (< 4), recentre la caméra sur les objets. Environ 1 300 chevauchements corrigés.
- smoke.py attend 30 semaines.
- Préférence d'Ewen : les chevauchements qui servent le décor (feu sur forêt, sapin au pied d'une montagne, foule devant un bâtiment, météo sur un lieu) sont voulus et ne doivent pas être écartés. `audit_fx.js` les ignore (liste DECOR) ; `restaure_decor.js` a rendu 632 positions d'origine.
- Décor : une maison qui touche un arbre est toujours placée derrière lui (sprites.js, 3 passes) ; contrôle en jeu : 0 maison devant un arbre.
- 30 propositions 2027 ajoutées (6 par famille, `scripts/propositions_30.js`, familles dans `tests/familles_30.json`) : 78 au total, 5 nouvelles avec blocage (Sécu à 100 %, fin des 35 h, AME, retraite par points, plan de 200 Md€). Sources : comparateurs iFRAP, République 2027, Qui propose quoi, Programmes 2027, presse.
- `scripts/offres.js` : redistribue les offres des semaines 2 à 30 (une par famille + une liée aux situations, 6 semaines d'écart). Les 78 propositions sont offertes au moins une fois, 15-16 par famille.
- Recraft (27/11) : 17 dessins générés (~68 crédits, il en reste ~44) : policiers, écoliers (+ 4 enfants découpés), bâtiment UE, commerce, cabinet médical, file d'attente, drapeau UE, maisons alsacienne / provençale / chalet / basque, usine moderne, palais du Parlement, caserne, char, missile, chien, chat. Branchés sur les objets animés et sur la carte (Strasbourg, Marseille, Nice, Provence, Nord, Champagne, Bourgogne). Chalets et maisons basques encore rejetés par l'anti-chevauchement (à replacer).
- Préférence d'Ewen : générer les personnes une par une (pas de groupes en « brochette »), pour pouvoir les réutiliser. La file d'attente n'a pas pu être découpée proprement (peau = couleur du socle).
- Nouveaux objets : char, missile, chien, chat (objects.js + check_data).
- 3 situations : dissuasion nucléaire avancée (S27), réarmement / LPM +36 Md€ (S28), animaux abandonnés (S29). Toutes les semaines 21-30 ont 4 situations ; les semaines 1 et 9-20 en ont encore 3.
- Semaines : 5 situations déplacées des semaines 21-30 vers 10-18 (alternance 3/4 situations). Vérification en images : carte jour/nuit, 6 cartes de situation, aucune erreur JS ni dessin manquant.
- Robustesse : un dessin qui ne se charge pas est ignoré (le reste du décor s'affiche) ; `tests/check_assets.js` vérifie fichiers, ratios, largeurs et objets ; toutes les propositions ont des sources (contrôle ajouté).
- Villes : cœur en îlots d'immeubles rangés en grille décalée (sans chevauchement, un immeuble peut en masquer un autre derrière lui), puis une couronne de maisons, puis des champs pour les grandes villes. Éoliennes d'Île-de-France déplacées en Beauce.
- Niveau avancé : vocabulaire politique et économique gardé ; sigles et termes très spécialisés expliqués entre parenthèses à la 1re occurrence (`scripts/glossaire.js`, idempotent, à relancer après ajout de contenu).
- 2 situations internationales : nucléaire iranien et sanctions (S19), Gaza après le cessez-le-feu (S21). Ukraine (S8, S22) et Palestine (S27) déjà couvertes.
- Ambiance (27/11 soir) : vagues qui avancent le long du rivage (2 trains de crêtes), plages claires (Landes, Vendée, Languedoc, Opale, Normandie), falaises de craie (Étretat, Opale, Calanques) et granit rose (Bretagne), grain très léger sur terre et mer (image calculée une fois), fumée vivante sur les centrales et usines du décor, animations plus vivantes (tombe-écrase-rebondit, croissance depuis le sol), sens corrigé pour le train et le porte-conteneurs. Respect de « réduire les animations ».
- Préférence d'Ewen : garder la vue actuelle, légèrement isométrique (ni vue de dessus plate, ni isométrie complète). Tout nouvel élément doit respecter cet angle.
- Netteté : caméra arrêtée → transformation 2D simple (camNet) pour que le navigateur, Safari surtout, redessine au zoom réel ; pendant les mouvements, calque 3D fluide. Résolution du décor cuit portée au maximum iPhone (16 Mpx). Vérifié net sous Chromium ; WebKit non installable ici → à confirmer sur iPhone par Ewen.
- Côte v2 (préférence d'Ewen : pas de « brouillard » ni de tirets qui défilent) : trait d'écume net à la limite eau/terre (falaise comprise, masque `horsTerre`), ondes fines = copie du contour qui grandit depuis le centre du pays puis s'efface (pas de bande de masquage), petites vagues blanches au large (crête qui se dessine, avance, s'efface ; 190 autour du pays), bord de sable plus marqué, rochers sur les côtes rocheuses. Grain retiré de la mer (gardé sur la terre).
- Côte v3 (préférences d'Ewen) : pas de sable sur les côtes nord (invisible en perspective) — liseré de sable = forme de la terre décalée vers le bas, visible seulement sur les bords tournés vers le sud ; plages (Landes, Vendée, Languedoc, Camargue, Côte d'Azur) dessinées côté terre, au-dessus du dessus de la terre ; l'eau (écume, ondes) commence au bord du sable. Éléments marins juste derrière une côte masqués par la terre (`derriereTerre`). Forêt des Landes recentrée (ne déborde plus à Arcachon). Champs jamais sous un bâtiment (Lille). Bandeau : cellules centrées (solde ponctuel). Brume de nuit assombrie. 81 scènes statiques animées (`scripts/animer.js`).

### 28/11/2026 — 40 semaines
- `scripts/semaines_31_40.js` : 29 situations sourcées (IA et emploi, holdings, fuite des cerveaux, exit tax, apprentis, flat tax, bitcoin/or, convention finances publiques, USB-C, Mistral, Rafale, lithium de l'Allier, cyberattaques Auchan, usage légal des armes, refus d'obtempérer, jobbeurs mineurs, protoxyde, prud'hommes, justice des mineurs, bureaux en logements, Takata, charbon, hydroélectricité, fraudes aux aides, IVG, aide à mourir, mobilisation lycéenne, librairies, fin du SCAF).
- `scripts/redistribuer.js` : redistribution de toutes les situations (semaine 1 gardée) — alternance 3/4 par semaine, 2 grandes décisions dès la semaine 7, un rappel par semaine, rappel/condition toujours après l'événement visé, pas deux fois le même thème dans une semaine, thèmes/régions/années variés d'une semaine à l'autre. Titres et intros des semaines régénérés. Puis `glossaire.js` et `offres.js`.
- Doublons retirés : accord Mercosur (déjà en semaine 1), « payer ses impôts avec une appli européenne » (proche du paiement sans entreprises américaines).
- Tests : 40 semaines attendues (check_data, smoke).
- Recraft : plus de crédits (tribunal et mine non générés ; mairie et chantier utilisés à la place).
- Recraft (28/11) : tribunal et mine générés et branchés (objets `tribunal`, `mine`) dans les situations prud'hommes, justice des mineurs et lithium.

## Dessins ajoutés (Recraft, 32 crédits)
- personne_1 à 4 (employée, retraité, ouvrier, agricultrice) : l'objet `personnage` alterne entre 5 dessins (PERS_SPR dans placement.js).
- aeroport, secheresse (terre craquelée), barrage_agricole (tracteurs + bottes de paille), tempete : remplacent les dessins de substitution.
- Écume/ressac masqués au-dessus des côtes nord (masque horsTerre décalé vers le haut) : cachés derrière les falaises.
- Côtes nord : écume masquée au-dessus du rivage + fondu sur tout le nord (au-dessus de 48° N), éoliennes en mer et Mont-Saint-Michel sans écume par-dessus.
- EPR de Flamanville ajouté (sprite `epr`). Strasbourg dégagé (pas d'arbres ni de petites montagnes autour).
- Situation provisoire `v42_fessenheim` (semaine 8) : à retirer si besoin (supprimer l'événement ; script scripts/fessenheim.js).
- V2 montagnes (aperçu ?v2) : sprites mt2_* calés sur le modèle d'Ewen (recalage silhouette + ajustement local près des frontières, pas de déformation, ×0,85 ; Pyrénées ramenées entre les deux mers). Version normale inchangée. Si validé : rendre MT_V2 vrai par défaut.
- V2 : générateur scripts/montagnes_v2.py (massifs + arbres au pied espacés). Pins dans le sud, forêts de sapins dans l'est, Lyon densifié, arbres du pied sans collision avec les bâtiments (tout derrière ?v2).
- V2 : maisons régionales (bretonnes, basques, mas, alsaciennes, chalets) selon la zone ; bâtiments/éoliennes jamais dans les arbres ; forêts dessinées en code supprimées (sprites à la place). Règle d'Ewen : ce qui est devant est vu en entier, ce qui est derrière est caché.
