// Ajoute les semaines 21 à 30 (événements récents, sourcés). Usage : node scripts/semaines_21_30.js
const fs = require('fs');
const F = __dirname + '/../src/data/game_data.js';
const S = fs.readFileSync(F, 'utf8'); const A = S.indexOf('{'), B = S.lastIndexOf('}') + 1;
const G = JSON.parse(S.slice(A, B));
if (G.days.length > 20) { console.log('déjà fait'); process.exit(0); }

const f = (obj, x, y, anim, o) => Object.assign({ obj, x, y, anim }, o || {});
const src = (label, url) => ({ label, url });
function ch(id, label, lx, plus, minus, budget, note, axes, ind, fx, once) {
  const c = { id, label, label_expert: lx, plus, minus, budget, axes, ind, fx };
  if (note) c.budget_note = note; if (once) c.once = once; return c;
}
function ev(o) { return o; }

const W = [];
/* ---------------- Semaine 21 ---------------- */
W.push({ season: 'hiver', title: 'Canots dans la Manche, Groenland et timbres', mood: 'tendu', weather: 'vent',
  intro: "Des canots surchargés quittent la côte nord, un allié menace d'annexer une île européenne, et le prix du timbre grimpe encore.",
  events: [
  ev({ id: 'v29_manche', kind: 'majeur', region: 'hauts_de_france', sector: 'immigration',
    title: 'Des canots surchargés quittent les plages du Nord',
    simple: "Chaque nuit, des passeurs entassent des dizaines de personnes sur des canots vers l'Angleterre. Les naufrages se répètent. Londres demande à la France d'agir plus. Que faire ?",
    expert: "Traversées irrégulières de la Manche par « small boats » ; accord franco-britannique « un pour un » (réadmission en France contre admission légale au Royaume-Uni) et coopération policière sur le littoral.",
    context: "Bloquer les départs demande beaucoup de policiers ; les passeurs s'adaptent vite ; la question touche aux droits des personnes et à la relation avec le Royaume-Uni.",
    real: { date: '2025 (accord « un pour un » signé à l\'été 2025)', place: 'Littoral du Nord et du Pas-de-Calais', fact: "Plus de 41 000 personnes ont rejoint le Royaume-Uni par petites embarcations sur l'année, le deuxième chiffre le plus élevé depuis le début de ces traversées. Un accord d'échange de migrants a été signé entre Paris et Londres.", figures: '41 472 traversées réussies sur l\'année, au moins 29 morts en mer selon un comptage AFP.',
      sources: [src('Le Petit Journal (AFP) : arrivées par la Manche, deuxième plus haut niveau', 'https://lepetitjournal.com/londres/actualites/royaume-uni-le-nombre-darrivees-de-migrants-par-la-manche-en-2025-deuxieme-plus-haut-jamais-430707'), src('Blick (AFP) : accord d\'échange de migrants France-Royaume-Uni', 'https://www.blick.ch/fr/monde/france/macron-et-starmer-signent-un-accord-dechange-de-migrants-id21040869.html')] },
    camera: { region: 'hauts_de_france', x: 52, y: 8, zoom: 2.2 },
    fx: [f('bateau_peche', 36, 7, 'move', { to: { x: 30, y: 5 } }), f('policiers', 53, 9, 'appear', { delay: 0.3 }), f('foule', 50, 9, 'pulse', { delay: 0.5 }), f('frontiere', 47, 8, 'blink', { delay: 0.8 })],
    choices: [
      ch('a', 'Plus de policiers et de drones sur les plages', 'Renforcement des forces mobiles et de la surveillance aérienne du littoral', 'Moins de départs réussis.', 'Coûteux, les passeurs se déplacent.', -0.25, 'Effectifs et matériel en plus : le déficit augmente (estimation du jeu).', { soc: 1 }, { cohesion: 1 }, [f('policiers', 54, 9, 'grow'), f('satellite', 52, 7, 'appear')]),
      ch('b', 'Faire payer davantage Londres', 'Hausse de la contribution britannique au contrôle de la frontière', 'Le coût est partagé avec le voisin.', 'Négociation tendue, résultat incertain.', 0.1, 'Contribution britannique en plus : petite recette, le déficit baisse un peu.', { eu: 1 }, { souverainete: 1 }, [f('euro_flux', 50, 7, 'flow', { to: { x: 54, y: 10 } }), f('douane', 53, 9, 'appear')]),
      ch('c', 'Ouvrir des voies légales et des centres d\'accueil', 'Voies d\'admission légales et accueil humanitaire sur le littoral', 'Moins de morts en mer.', 'Peut attirer plus de candidats au départ.', -0.15, 'Centres et accompagnement : coût, le déficit augmente un peu.', { soc: -1 }, { cohesion: 1 }, [f('maison', 55, 10, 'appear'), f('soignants', 54, 10, 'appear')]),
      ch('d', 'Frapper les réseaux de passeurs et leur argent', 'Enquêtes financières et démantèlement des filières de passeurs', 'S\'attaque aux organisateurs du trafic.', 'Résultats lents, réseaux internationaux.', -0.05, 'Enquêteurs spécialisés : faible coût, le déficit augmente très peu.', { soc: 1 }, { services: 1 }, [f('loupe', 53, 9, 'appear'), f('cadenas', 51, 9, 'appear')])
    ] }),
  ev({ id: 'v29_groenland', kind: 'majeur', region: 'national', sector: 'europe',
    title: "Un allié menace d'annexer le Groenland",
    simple: "Le président américain dit vouloir prendre le Groenland, une île liée au Danemark, et menace l'Europe de taxes. Quelle réponse de la France ?",
    expert: "Menaces d'annexion du Groenland (territoire autonome du Danemark) par les États-Unis, assorties de menaces de droits de douane contre plusieurs pays européens.",
    context: "Les États-Unis sont un allié militaire majeur. Céder peut encourager d'autres pressions ; répondre durement peut coûter cher aux exportateurs.",
    real: { date: '2026', place: 'Paris, Copenhague, Nuuk', fact: "La France et plusieurs pays européens ont publié un communiqué commun défendant la souveraineté du Groenland. Des droits de douane ont été brandis contre huit pays européens, dont la France.", figures: 'Huit pays européens visés par des menaces de surtaxes.',
      sources: [src('Public Sénat : les dirigeants européens face aux menaces sur le Groenland', 'https://www.publicsenat.fr/actualites/international/groenland-venezuela-les-dirigeants-europeens-en-quete-dunite-face-aux-menaces-expansionnistes-de-donald-trump'), src('Le Temps : menaces de droits de douane jusqu\'à la vente du Groenland', 'https://www.letemps.ch/monde/donald-trump-accuse-plusieurs-pays-europeens-de-jouer-a-un-jeu-tres-dangereux-au-groenland-et-annonce-de-nouveaux-droits-de-douane')] },
    camera: { region: 'national', x: 52, y: 40, zoom: 1.2 },
    fx: [f('drapeau_ue', 63, 4, 'pulse'), f('bulle', 52, 30, 'appear', { label: 'Groenland', delay: 0.4 }), f('conteneurs', 37, 20, 'shake', { delay: 0.7 })],
    choices: [
      ch('a', 'Front européen uni et ripostes prêtes', 'Coordination européenne et instrument anti-coercition prêt à servir', 'L\'Europe pèse plus à plusieurs.', 'Risque d\'escalade commerciale.', 0, null, { eu: 1 }, { souverainete: 2, emploi: -1 }, [f('drapeau_ue', 63, 4, 'grow'), f('batiment_ue', 64, 5, 'pulse')]),
      ch('b', 'Envoyer des moyens militaires symboliques', 'Déploiement militaire français de solidarité auprès du Danemark', 'Signal clair de solidarité.', 'Coûteux et risque de tension.', -0.2, 'Mission militaire : le déficit augmente un peu.', { eu: 1 }, { souverainete: 2 }, [f('avion', 52, 24, 'move', { to: { x: 63, y: 6 } })]),
      ch('c', 'Négocier discrètement pour éviter les taxes', 'Dialogue bilatéral discret avec Washington pour désamorcer', 'Protège les exportateurs à court terme.', 'Image de faiblesse face à la pression.', 0.1, 'Exportations préservées : recettes en plus, le déficit baisse un peu.', { eu: -1 }, { emploi: 1, souverainete: -1 }, [f('bulle', 50, 28, 'appear', { label: 'Négociation' })]),
      ch('d', 'Rester en retrait, ce n\'est pas notre affaire', 'Neutralité française sur la question du Groenland', 'Évite une crise avec un allié.', 'Isole le Danemark, partenaire européen.', 0, null, { eu: -2 }, { cohesion: -1 }, [f('panneau', 52, 30, 'appear', { label: 'Pas de réaction' })])
    ] }),
  ev({ id: 'v29_timbre', kind: 'banal', region: 'national', sector: 'salaires',
    title: 'Le timbre vert dépasse 1,50 €',
    simple: "Envoyer une lettre coûte encore plus cher : le timbre vert a pris plus de 9 % d'un coup. La Poste dit que le courrier diminue. Que faire ?",
    expert: "Hausse des tarifs du service universel postal (lettre verte à 1,52 €), justifiée par la baisse des volumes de courrier.",
    context: "Moins de lettres, mais des facteurs à payer partout, même à la campagne. Aider La Poste coûte à l'État ; laisser monter les prix pèse sur ceux qui écrivent encore.",
    real: { date: '1er janvier 2026', place: 'Toute la France', fact: 'Le prix de la lettre verte est passé de 1,39 € à 1,52 €, une hausse moyenne de 7,4 % des tarifs postaux.', figures: 'Lettre verte : 1,52 €, soit plus du double en une dizaine d\'années.',
      sources: [src('Europe 1 : hausse du prix du timbre', 'https://www.europe1.fr/node/765859'), src('Assemblée nationale : question écrite sur la hausse du prix du timbre', 'https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE9443.pdf')] },
    camera: { region: 'national', x: 52, y: 45, zoom: 1.2 },
    fx: [f('colis', 52, 45, 'pulse'), f('etiquette', 54, 43, 'appear', { label: '1,52 €', delay: 0.3 }), f('file_attente', 50, 47, 'appear', { delay: 0.5 })],
    choices: [
      ch('a', 'Laisser La Poste fixer ses prix', 'Maintien de la trajectoire tarifaire validée par le régulateur', 'Pas de dépense publique.', 'Les prix continuent de grimper.', 0, null, { eco: 1 }, { pouvoir_achat: -1 }, [f('etiquette', 54, 43, 'grow', { label: '1,52 €' })]),
      ch('b', 'Compenser une partie par l\'État', 'Hausse de la compensation publique du service universel postal', 'Le prix du timbre se stabilise.', 'Coûte chaque année au budget.', -0.1, 'Compensation versée à La Poste : le déficit augmente un peu.', { eco: -1 }, { pouvoir_achat: 1, services: 1 }, [f('euro_flux', 50, 44, 'flow', { to: { x: 52, y: 45 } })]),
      ch('c', 'Moins de tournées, prix gelé', 'Réduction de la fréquence de distribution du courrier', 'Le prix ne bouge plus.', 'Courrier plus lent, surtout à la campagne.', 0.05, 'Économies sur les tournées : petite recette, le déficit baisse un peu.', { eco: 1 }, { services: -1 }, [f('camion', 48, 46, 'fade')])
    ] })
  ] });

/* ---------------- Semaine 22 ---------------- */
W.push({ season: 'hiver', title: 'Mercosur, garanties pour l\'Ukraine et prix du café', mood: 'tendu', weather: 'neige',
  intro: "L'Europe signe un grand accord commercial malgré la colère des agriculteurs, la France promet des troupes après un cessez-le-feu en Ukraine, et le café flambe.",
  events: [
  ev({ id: 'v30_mercosur', kind: 'majeur', region: 'bruxelles', sector: 'agriculture',
    title: "L'Europe signe l'accord avec l'Amérique du Sud",
    simple: "L'Europe a validé un accord de libre-échange avec quatre pays d'Amérique du Sud, malgré le vote contre de la France. Les agriculteurs bloquent routes et ports. Que faire ?",
    expert: "Accord de partenariat UE-Mercosur signé, la France ayant voté contre ; ratification en attente au Parlement européen ; quotas d'importation de bœuf, volaille et sucre.",
    context: "L'accord ouvre des marchés aux industriels européens mais met les éleveurs en concurrence avec des produits moins chers, aux normes différentes.",
    real: { date: '17 janvier 2026 (signature)', place: 'Bruxelles, Strasbourg, routes et ports français', fact: "L'Union européenne a validé l'accord avec le Mercosur sans la France ; les agriculteurs ont manifesté sur les autoroutes et dans les ports.", figures: 'Gain estimé par la Commission : environ +0,05 % de PIB européen à long terme.',
      sources: [src('Élysée : la France vote contre la signature de l\'accord UE-Mercosur', 'https://www.elysee.fr/emmanuel-macron/2026/01/08/la-france-a-decide-de-voter-contre-la-signature-de-laccord-entre-lunion-europeenne-et-les-pays-du-mercosur'), src('Réussir : accord signé, prochaines échéances pour l\'agriculture', 'https://www.reussir.fr/ue-mercosur-laccord-commercial-signe-au-paraguay-quelles-sont-les-prochaines-echeances-pour')] },
    camera: { region: 'bruxelles', x: 62, y: 6, zoom: 1.2 },
    fx: [f('barrage_agricole', 56, 9, 'appear'), f('tracteur', 52, 12, 'move', { to: { x: 60, y: 6 } }), f('batiment_ue', 63, 4, 'pulse', { delay: 0.4 }), f('conteneurs', 40, 18, 'appear', { delay: 0.7 })],
    choices: [
      ch('a', 'Saisir la justice européenne contre l\'accord', 'Recours devant la Cour de justice de l\'Union européenne', 'Retarde l\'application de l\'accord.', 'Procédure longue, issue incertaine.', 0, null, { eu: -1 }, { souverainete: 1 }, [f('batiment_ue', 63, 4, 'shake')]),
      ch('b', 'Clauses miroirs et contrôles aux frontières', 'Contrôles sanitaires renforcés et mesures miroirs sur les importations', 'Mêmes règles pour les produits importés.', 'Coût des contrôles, efficacité discutée.', -0.1, 'Contrôles en plus : le déficit augmente un peu.', { eu: 1 }, { souverainete: 1, cohesion: 1 }, [f('douane', 40, 18, 'appear'), f('loupe', 41, 17, 'appear')]),
      ch('c', 'Aides directes aux éleveurs touchés', 'Fonds de compensation pour les filières agricoles exposées', 'Soulage les exploitations fragiles.', 'Coûteux, ne règle pas la concurrence.', -0.5, 'Aides aux éleveurs : le déficit augmente.', { eco: -1 }, { cohesion: 1, emploi: 1 }, [f('ferme', 45, 30, 'grow'), f('euro_flux', 50, 25, 'flow', { to: { x: 45, y: 30 } })]),
      ch('d', 'Accepter l\'accord et viser l\'export', 'Accompagnement des filières exportatrices vers les marchés sud-américains', 'Débouchés pour vins, fromages, industrie.', 'Colère durable des éleveurs.', 0.1, 'Plus d\'exportations : recettes en plus, le déficit baisse un peu.', { eco: 2 }, { emploi: 1, cohesion: -2 }, [f('cargo', 30, 6, 'move', { to: { x: 20, y: 9 } })])
    ] }),
  ev({ id: 'v30_ukraine', kind: 'majeur', region: 'national', sector: 'defense',
    title: 'Des soldats français pour garantir la paix en Ukraine ?',
    simple: "Une coalition de pays menée par la France et le Royaume-Uni prépare une force pour protéger l'Ukraine après un cessez-le-feu. Faut-il s'engager ?",
    expert: "Coalition des volontaires : garanties de sécurité, surveillance du cessez-le-feu et force multinationale de réassurance déployée après la fin des combats.",
    context: "Protéger l'Ukraine peut éviter une nouvelle guerre, mais expose des soldats et coûte cher, au moment où le budget est serré.",
    real: { date: '6 janvier 2026 (déclaration de Paris)', place: 'Paris', fact: "La coalition des volontaires, l'Ukraine et les États-Unis ont adopté une déclaration sur des garanties de sécurité, avec une force multinationale prévue après un cessez-le-feu.", figures: 'Coalition d\'environ 35 pays co-présidée par la France et le Royaume-Uni.',
      sources: [src('Élysée : des garanties de sécurité robustes pour l\'Ukraine', 'https://www.elysee.fr/emmanuel-macron/2026/01/06/des-garanties-de-securite-robustes-pour-une-paix-solide-et-durable-en-ukraine'), src('Diplomatie : la coalition des volontaires, qu\'est-ce que c\'est ?', 'https://www.diplomatie.gouv.fr/fr/le-ministere-en-action/promouvoir-une-europe-souveraine/dossiers-europeens/guerre-en-ukraine-l-action-diplomatique-de-la-france/ukraine-la-coalition-des-volontaires-qu-est-ce-que-c-est')] },
    camera: { region: 'national', x: 60, y: 30, zoom: 1.2 },
    fx: [f('drapeau_ue', 63, 4, 'pulse'), f('avion', 60, 25, 'move', { to: { x: 95, y: 10 } }), f('bulle', 52, 25, 'appear', { label: 'Cessez-le-feu', delay: 0.5 })],
    choices: [
      ch('a', 'Engager des soldats français dans la force', 'Contribution française à la force multinationale de réassurance', 'Rend la paix plus solide.', 'Soldats exposés, coût élevé.', -1, 'Déploiement militaire durable : le déficit augmente.', { eu: 1 }, { souverainete: 2, cohesion: -1 }, [f('avion', 60, 25, 'grow'), f('policiers', 70, 20, 'appear')]),
      ch('b', 'Aider seulement en armes et en formation', 'Soutien matériel et formation des forces ukrainiennes', 'Pas de soldats sur place.', 'Garanties jugées plus faibles.', -0.6, 'Matériel et formation : le déficit augmente.', { eu: 1 }, { souverainete: 1 }, [f('camion', 70, 18, 'move', { to: { x: 95, y: 8 } })]),
      ch('c', 'Surveillance du cessez-le-feu uniquement', 'Participation au mécanisme de surveillance par satellites et drones', 'Risque limité pour nos soldats.', 'Rôle moins dissuasif.', -0.2, 'Moyens de surveillance : le déficit augmente un peu.', { eu: 1 }, { souverainete: 1 }, [f('satellite', 75, 12, 'appear')]),
      ch('d', 'Ne pas s\'engager, priorité au budget', 'Refus de toute contribution militaire au dispositif', 'Aucune dépense ni risque militaire.', 'Affaiblit le poids de la France en Europe.', 0.05, 'Aucun déploiement : petite économie, le déficit baisse un peu.', { eu: -2 }, { souverainete: -2 }, [f('panneau', 52, 30, 'appear', { label: 'Pas d\'engagement' })])
    ] }),
  ev({ id: 'v30_cafe', kind: 'banal', region: 'national', sector: 'salaires',
    title: 'Le paquet de café a pris un quart en plus',
    simple: "Au supermarché, le café et le chocolat coûtent beaucoup plus cher qu'il y a un an, à cause des récoltes mondiales. L'État doit-il agir ?",
    expert: "Hausse des prix à la consommation du café torréfié et du chocolat, liée à l'envolée des cours mondiaux des denrées tropicales.",
    context: "Les prix viennent des marchés mondiaux : l'État a peu de prise directe, mais peut jouer sur les taxes ou la transparence des marges.",
    real: { date: '2025', place: 'Supermarchés de toute la France', fact: 'Le café torréfié a pris environ un quart en un an et les tablettes de chocolat plus de 20 %, alors que l\'inflation alimentaire globale restait faible.', figures: 'Café torréfié : environ +27 % sur un an dans les relevés de distributeurs.',
      sources: [src('LSA : café, chocolat, les produits qui tirent les prix à la hausse', 'https://www.lsa-conso.fr/cafe-chocolat-ces-produits-qui-tirent-les-prix-de-l-alimentaire-a-la-hausse-en-aout-barometre-exclusif,461848'), src('Insee : l\'envolée du cacao et du café se transmet aux prix', 'https://www.insee.fr/fr/statistiques/fichier/8594926/ndc-juin-2025-ecl2-Cafe-cacao.pdf')] },
    camera: { region: 'national', x: 52, y: 45, zoom: 1.2 },
    fx: [f('supermarche', 52, 45, 'pulse'), f('etiquette', 54, 43, 'appear', { label: 'Café +25 %', delay: 0.3 }), f('file_attente', 50, 47, 'appear', { delay: 0.5 })],
    choices: [
      ch('a', 'Ne rien faire, c\'est le marché mondial', 'Absence d\'intervention publique sur des prix mondiaux', 'Pas de dépense publique.', 'Les ménages paient plus cher.', 0, null, { eco: 1 }, { pouvoir_achat: -1 }, [f('etiquette', 54, 43, 'grow', { label: 'Café +25 %' })]),
      ch('b', 'Publier les marges des distributeurs', 'Transparence obligatoire des marges sur les produits concernés', 'Vérifie que la hausse est justifiée.', 'Effet sur les prix limité.', 0, null, { eco: -1 }, { cohesion: 1 }, [f('loupe', 52, 44, 'appear')]),
      ch('c', 'Baisser la TVA sur le café et le cacao', 'Réduction temporaire du taux de TVA sur café et cacao', 'Prix un peu plus bas en caisse.', 'Perte de recettes pour l\'État.', -0.3, 'Moins de TVA encaissée : le déficit augmente.', { eco: -1 }, { pouvoir_achat: 1 }, [f('pieces', 52, 45, 'flow', { to: { x: 50, y: 47 } })])
    ] })
  ] });

/* ---------------- Semaine 23 ---------------- */
W.push({ season: 'hiver', title: 'Payer sans Visa, frais de carte et portables', mood: 'calme', weather: 'pluie',
  intro: "L'Europe veut se passer des cartes américaines, les commerçants râlent contre les frais, et les collégiens rangent leur téléphone.",
  events: [
  ev({ id: 'v31_wero', kind: 'majeur', region: 'national', sector: 'numerique',
    title: 'Payer sans passer par des entreprises américaines',
    simple: "Presque tous les paiements par carte en Europe passent par deux sociétés américaines. Une solution européenne arrive. Faut-il la pousser, au risque de bousculer les habitudes ?",
    expert: "Souveraineté des paiements : portefeuille européen Wero (EPI) fondé sur les virements instantanés, et projet d'euro numérique de la Banque centrale européenne.",
    context: "Si ces réseaux coupaient l'accès, cartes et paiements en ligne seraient bloqués. Changer coûte aux banques et aux commerçants, et l'usage dépend des consommateurs.",
    real: { date: '2026', place: 'Europe et France', fact: "Wero, lancé par des banques européennes, permet déjà des virements instantanés entre particuliers et s'étend au paiement en ligne en France.", figures: 'Visa et Mastercard traitent environ deux tiers des paiements par carte en zone euro.',
      sources: [src('Euronews : l\'UE peut-elle s\'affranchir de Visa et Mastercard ?', 'https://fr.euronews.com/2026/03/03/lue-est-elle-sur-le-point-de-saffranchir-de-lemprise-de-visa-et-mastercard'), src('MoneyVox : une solution de paiement souveraine reste à construire', 'https://www.moneyvox.fr/actu/106652/une-solution-numerique-de-paiement-paneuropeenne-et-souveraine-reste-a-construire')] },
    camera: { region: 'national', x: 52, y: 40, zoom: 1.2 },
    fx: [f('antenne', 52, 35, 'pulse'), f('euro_flux', 45, 30, 'flow', { to: { x: 60, y: 30 } }), f('cadenas', 55, 33, 'appear', { delay: 0.5 }), f('drapeau_ue', 63, 4, 'blink', { delay: 0.7 })],
    choices: [
      ch('a', 'Rendre Wero obligatoire chez les commerçants', 'Obligation d\'acceptation d\'une solution de paiement européenne', 'Adoption rapide, moins de dépendance.', 'Contrainte et coût pour les commerces.', 0.1, 'Frais versés à l\'étranger en moins : recettes, le déficit baisse un peu.', { eu: 2, eco: -1 }, { souverainete: 3, emploi: -1 }, [f('commerce', 50, 38, 'grow'), f('cadenas', 55, 33, 'grow')]),
      ch('b', 'Payer impôts et aides via la solution européenne', 'Intégration de Wero aux paiements publics et aux aides sociales', 'L\'État montre l\'exemple.', 'Investissement informatique public.', -0.05, 'Adaptation des systèmes publics : faible coût, le déficit augmente très peu.', { eu: 1 }, { souverainete: 2 }, [f('mairie', 52, 40, 'appear')]),
      ch('c', 'Soutenir l\'euro numérique de la BCE', 'Soutien français au projet d\'euro numérique européen', 'Base publique solide à long terme.', 'Craintes sur la vie privée, délai long.', 0, null, { eu: 2 }, { souverainete: 2, cohesion: -1 }, [f('batiment_ue', 63, 4, 'pulse')]),
      ch('d', 'Laisser le marché choisir', 'Neutralité publique entre les réseaux de paiement', 'Pas de contrainte ni de dépense.', 'La dépendance reste entière.', 0, null, { eco: 1, eu: -1 }, { souverainete: -1 }, [f('panneau', 52, 38, 'appear', { label: 'Statu quo' })])
    ] }),
  ev({ id: 'v31_cartes', kind: 'majeur', region: 'occitanie', sector: 'numerique',
    title: 'Une boulangère refuse la carte sous 5 €',
    simple: "Dans un village du Sud, une boulangère affiche « carte à partir de 5 € » : chaque paiement lui coûte des frais. Les clients râlent. Que faire ?",
    expert: "Commissions d'interchange et frais d'acceptation des cartes bancaires pour les petits commerçants ; montant minimum de paiement par carte.",
    context: "Les frais sont modestes mais pèsent sur les petits paniers. Les plafonner touche les banques ; ne rien faire gêne les clients sans espèces.",
    real: { date: '2026', place: 'Commerces de proximité', fact: 'Les réseaux internationaux de cartes prélèvent des frais sur chaque paiement ; une partie des commerçants fixe un montant minimum pour la carte.', figures: 'Visa et Mastercard : 69 % des transactions par carte en zone euro selon la Banque de France.',
      sources: [src('MoneyVox : paiements, Visa et Mastercard et coût pour les commerçants', 'https://www.moneyvox.fr/actu/106652/une-solution-numerique-de-paiement-paneuropeenne-et-souveraine-reste-a-construire'), src('Paperjam : frais d\'interchange et alternative européenne', 'https://paperjam.lu/article/visa-muscle-son-infrastructure-europeenne-face-aux-ambitions-de-souverainete-de-bruxelles')] },
    camera: { region: 'occitanie', x: 50, y: 78, zoom: 2 },
    fx: [f('boulangerie', 50, 78, 'pulse'), f('panneau', 52, 77, 'appear', { label: 'Carte dès 5 €', delay: 0.3 }), f('personnage', 48, 79, 'appear', { delay: 0.5 })],
    choices: [
      ch('a', 'Plafonner les frais bancaires des petits paiements', 'Plafonnement des commissions sur les paiements de faible montant', 'Plus de carte refusée pour une baguette.', 'Les banques compenseront ailleurs.', 0.05, 'Commerces plus rentables : impôts en plus, le déficit baisse un peu.', { eco: -1 }, { pouvoir_achat: 1 }, [f('pieces', 50, 78, 'appear')]),
      ch('b', 'Laisser chaque commerçant fixer son minimum', 'Liberté de fixer un montant minimum d\'acceptation de carte', 'Pas de contrainte pour les commerces.', 'Gêne les clients sans espèces.', 0, null, { eco: 1 }, { cohesion: -1 }, [f('panneau', 52, 77, 'grow', { label: 'Carte dès 5 €' })]),
      ch('c', 'Aider les commerces à passer au paiement européen', 'Subvention à l\'équipement des commerçants en paiement par virement instantané', 'Moins de frais et moins de dépendance.', 'Coût public, adoption lente.', -0.05, 'Aide à l\'équipement : faible coût, le déficit augmente très peu.', { eu: 1 }, { souverainete: 1 }, [f('antenne', 51, 77, 'appear')])
    ] }),
  ev({ id: 'v31_portable', kind: 'banal', region: 'pays_de_la_loire', sector: 'ecole',
    title: 'Les téléphones rangés dans des casiers au collège',
    simple: "Dans un collège, les élèves déposent leur portable dans un casier en arrivant. Moins de disputes, disent les profs ; des parents s'inquiètent de ne plus joindre leur enfant. Faut-il généraliser ?",
    expert: "Généralisation du dispositif « Portable en pause » au collège : téléphone éteint et rangé pendant toute la journée scolaire.",
    context: "Les casiers et pochettes coûtent aux établissements. L'effet sur l'attention et le harcèlement est encourageant mais encore discuté.",
    real: { date: 'Rentrée 2025', place: 'Collèges de toute la France', fact: "Après une expérimentation, le dispositif « Portable en pause » a été généralisé à l'ensemble des collèges.", figures: 'Expérimentation menée auprès d\'environ 32 000 collégiens avant la généralisation.',
      sources: [src('Info.gouv : un usage raisonné du téléphone portable au collège', 'https://www.info.gouv.fr/actualite/telephone-portable-au-college-une-mise-a-l-ecart-benefique-generalisee-des-la-rentree'), src('Éducation nationale : interdiction du portable et pause numérique', 'https://www.education.gouv.fr/interdiction-du-telephone-portable-dans-les-ecoles-et-les-colleges-et-pause-numerique-455181')] },
    camera: { region: 'pays_de_la_loire', x: 30, y: 39, zoom: 2 },
    fx: [f('ecole', 30, 39, 'pulse'), f('eleves', 32, 40, 'appear', { delay: 0.3 }), f('cadenas', 31, 38, 'appear', { delay: 0.5 })],
    choices: [
      ch('a', 'Généraliser avec des casiers payés par l\'État', 'Financement national des casiers et pochettes dans tous les collèges', 'Mesure appliquée partout pareil.', 'Coût d\'équipement pour l\'État.', -0.05, 'Équipement des collèges : faible coût, le déficit augmente très peu.', { soc: 1 }, { services: 1, cohesion: 1 }, [f('cadenas', 31, 38, 'grow')]),
      ch('b', 'Laisser chaque collège décider', 'Mise en œuvre au choix de chaque chef d\'établissement', 'S\'adapte au terrain.', 'Règles différentes d\'un collège à l\'autre.', 0, null, { soc: 0, eco: 1 }, { services: 0, cohesion: -1 }, [f('ecole', 30, 39, 'blink')]),
      ch('c', 'Interdire aussi le portable au lycée', 'Extension de l\'interdiction du téléphone aux lycées', 'Va plus loin contre les écrans.', 'Lycéens plus âgés, contestation probable.', -0.05, 'Équipement des lycées : faible coût, le déficit augmente très peu.', { soc: 1 }, { cohesion: -1, services: 1 }, [f('eleves', 33, 41, 'grow')])
    ] })
  ] });

/* ---------------- Semaine 24 ---------------- */
W.push({ season: 'hiver', title: 'Frais d\'université, droit du sol à Mayotte et Parcoursup', mood: 'tendu', weather: 'pluie',
  intro: "Un rapport propose de multiplier par cinq les frais d'inscription à l'université, Mayotte resserre le droit du sol, et Parcoursup fait débat.",
  events: [
  ev({ id: 'v32_universite', kind: 'majeur', region: 'ile_de_france', sector: 'ecole',
    title: 'Faut-il faire payer plus cher l\'université ?',
    simple: "Les universités manquent d'argent. Un rapport propose de passer les frais d'inscription d'environ 180 € à 900 € par an en licence, avec des aides pour les plus modestes. Que faire ?",
    expert: "Proposition des Assises du financement des universités : hausse des droits d'inscription (900 € en licence, 1 300 € en master) avec exonérations pour les boursiers.",
    context: "Plus de frais aident les universités mais peuvent décourager des étudiants. Plus d'argent public pèse sur le budget de l'État.",
    real: { date: 'Juin 2026 (rapport remis au gouvernement)', place: 'Universités de toute la France', fact: "Un rapport commandé par le gouvernement propose de multiplier par cinq les frais d'inscription des étudiants français, en gardant des exonérations pour les plus modestes.", figures: 'Licence : 178 € aujourd\'hui, 900 € proposés ; master : 254 €, 1 300 € proposés.',
      sources: [src('Public Sénat : universités, vers une hausse des frais d\'inscription ?', 'https://www.publicsenat.fr/actualites/education/universites-vers-une-hausse-des-frais-dinscription'), src('L\'Étudiant : rapport final des Assises du financement des universités', 'https://www.letudiant.fr/educpros/actualite/assises-du-financement-des-universites-un-rapport-final-qui-prone-une-diversification-accrue-des-recettes.html')] },
    camera: { region: 'ile_de_france', x: 52, y: 24, zoom: 2.2 },
    fx: [f('ecole', 52, 24, 'pulse'), f('eleves', 54, 25, 'appear', { delay: 0.3 }), f('manifestants', 50, 25, 'appear', { delay: 0.6 }), f('etiquette', 53, 22, 'appear', { label: '900 € ?', delay: 0.8 })],
    choices: [
      ch('a', 'Hausse forte avec exonération des boursiers', 'Droits à 900 et 1 300 euros, boursiers exonérés', 'Plus de moyens pour les universités.', 'Frein pour les classes moyennes.', 1.5, 'Environ 1,5 Md€ de recettes en plus : le déficit baisse.', { eco: 1 }, { services: 2, cohesion: -2 }, [f('ecole', 52, 24, 'grow'), f('euro_flux', 54, 25, 'flow', { to: { x: 52, y: 24 } })]),
      ch('b', 'Hausse modérée et progressive', 'Augmentation limitée des droits d\'inscription sur plusieurs années', 'Compromis plus acceptable.', 'Gain financier plus faible.', 0.5, 'Recettes en plus : le déficit baisse un peu.', { eco: 1 }, { services: 1, cohesion: -1 }, [f('etiquette', 53, 22, 'appear', { label: '+ modéré' })]),
      ch('c', 'Garder des frais bas, l\'État paie', 'Maintien des droits actuels et hausse de la dotation publique', 'L\'université reste quasi gratuite.', 'Coûte cher au budget de l\'État.', -1.5, 'Dotation publique en plus : le déficit augmente.', { eco: -2 }, { services: 2, cohesion: 1 }, [f('euro_flux', 50, 26, 'flow', { to: { x: 52, y: 24 } })]),
      ch('d', 'Faire payer surtout les étudiants étrangers', 'Hausse ciblée des droits pour les étudiants extra-européens', 'Épargne les étudiants français.', 'Moins d\'étudiants étrangers attirés.', 0.4, 'Recettes en plus : le déficit baisse un peu.', { soc: 1 }, { services: 1, souverainete: 0, cohesion: -1 }, [f('avion', 50, 22, 'fade')])
    ] }),
  ev({ id: 'v32_mayotte', kind: 'majeur', region: 'outre_mer', sector: 'immigration',
    title: 'Mayotte : faut-il aller plus loin sur le droit du sol ?',
    simple: "À Mayotte, beaucoup de personnes arrivent des Comores voisines. La loi exige désormais que les deux parents vivent légalement sur l'île depuis un an pour que l'enfant devienne français. Et ensuite ?",
    expert: "Loi renforçant les conditions d'accès à la nationalité à Mayotte : séjour régulier d'au moins un an des deux parents à la naissance de l'enfant.",
    context: "L'île est très pauvre et saturée. Les uns veulent supprimer le droit du sol, ce qui demanderait de changer la Constitution ; les autres veulent surtout investir sur place.",
    real: { date: '12 mai 2025 (loi promulguée)', place: 'Mayotte', fact: "La loi a durci une seconde fois le droit du sol à Mayotte, après une première restriction quelques années plus tôt.", figures: 'Mayotte est à environ 70 km d\'Anjouan ; PIB par habitant huit fois supérieur à celui des Comores.',
      sources: [src('Vie publique : loi renforçant l\'accès à la nationalité à Mayotte', 'https://www.vie-publique.fr/loi/297235-droit-du-sol-mayotte-proposition-de-loi-acces-la-nationalite-francaise'), src('Sénat : débat sur la nationalité à Mayotte', 'https://www.senat.fr/cra/s20250325/s20250325_5.html')] },
    camera: { region: 'outre_mer', x: 8, y: 90, zoom: 2.2 },
    fx: [f('bateau_peche', 4, 92, 'move', { to: { x: 8, y: 90 } }), f('policiers', 9, 89, 'appear', { delay: 0.3 }), f('maison', 10, 91, 'pulse', { delay: 0.6 })],
    choices: [
      ch('a', 'Supprimer le droit du sol à Mayotte', 'Révision constitutionnelle supprimant le droit du sol à Mayotte', 'Retire un motif de venue sur l\'île.', 'Changement de Constitution, rupture d\'égalité.', 0.05, 'Moins de prestations à verser à terme : le déficit baisse un peu (estimation du jeu).', { soc: 2 }, { souverainete: 1, cohesion: -2 }, [f('panneau', 9, 88, 'appear', { label: 'Droit du sol ?' })]),
      ch('b', 'Plus de moyens en mer contre les traversées', 'Renforcement de la surveillance maritime autour de l\'île', 'Moins d\'arrivées irrégulières.', 'Coûteux, traversées dangereuses.', -0.2, 'Bateaux et radars : le déficit augmente un peu.', { soc: 1 }, { souverainete: 1 }, [f('satellite', 6, 88, 'appear')]),
      ch('c', 'Investir dans les écoles, l\'eau et les hôpitaux', 'Plan d\'investissement massif dans les services publics de Mayotte', 'Améliore la vie de tous les habitants.', 'Très coûteux, effet lent.', -0.6, 'Investissements publics : le déficit augmente.', { soc: -1, eco: -1 }, { services: 2, cohesion: 1 }, [f('ecole', 10, 90, 'appear'), f('hopital', 7, 91, 'appear')]),
      ch('d', 'Coopérer avec les Comores contre les départs', 'Accord de coopération et d\'aide au développement avec les Comores', 'Agit sur les causes des départs.', 'Dépend de la bonne volonté voisine.', -0.1, 'Aide au développement : le déficit augmente un peu.', { eu: 0, soc: -1 }, { cohesion: 1 }, [f('bulle', 6, 89, 'appear', { label: 'Accord' })])
    ] }),
  ev({ id: 'v32_parcoursup', kind: 'banal', region: 'national', sector: 'ecole',
    title: 'Sans affectation, une lycéenne attend une place',
    simple: "Une lycéenne n'a reçu aucune proposition sur Parcoursup. Le recteur peut aujourd'hui imposer son inscription. Des sénateurs veulent supprimer ce pouvoir. Que faire ?",
    expert: "Proposition sénatoriale de supprimer le pouvoir du recteur d'imposer l'inscription des candidats restés sans affectation sur Parcoursup.",
    context: "Les universités veulent choisir leurs étudiants pour les faire réussir ; sans ce pouvoir, des jeunes risquent de rester sans formation.",
    real: { date: 'Septembre 2026', place: 'Sénat', fact: 'Une commission d\'enquête du Sénat recommande plus de sélection à l\'université et la fin du pouvoir du recteur d\'imposer une inscription.', figures: 'Proposition issue d\'une commission d\'enquête sénatoriale.',
      sources: [src('Banque des territoires : le Sénat propose une réforme de rupture des universités', 'https://www.banquedesterritoires.fr/universites-selection-droits-dinscription-gouvernance-le-senat-propose-une-reforme-de-rupture')] },
    camera: { region: 'national', x: 52, y: 40, zoom: 1.2 },
    fx: [f('eleves', 52, 40, 'pulse'), f('file_attente', 54, 41, 'appear', { delay: 0.3 }), f('panneau', 50, 39, 'appear', { label: 'En attente', delay: 0.5 })],
    choices: [
      ch('a', 'Garder le pouvoir du recteur', 'Maintien de l\'affectation imposée par le recteur', 'Aucun bachelier laissé sans place.', 'Étudiants placés dans des filières non choisies.', 0, null, { soc: -1 }, { cohesion: 1 }, [f('ecole', 52, 40, 'appear')]),
      ch('b', 'Laisser les universités choisir', 'Suppression du pouvoir d\'affectation du recteur', 'Universités maîtresses de leur recrutement.', 'Plus de jeunes sans formation.', 0, null, { eco: 1 }, { cohesion: -1, services: 1 }, [f('cadenas', 52, 40, 'appear')]),
      ch('c', 'Créer des places en plus dans les filières demandées', 'Ouverture de places supplémentaires dans les filières en tension', 'Plus de jeunes satisfaits.', 'Coûte au budget de l\'enseignement supérieur.', -0.15, 'Places en plus : le déficit augmente un peu.', { eco: -1 }, { services: 1, cohesion: 1 }, [f('ecole', 54, 41, 'grow')])
    ] })
  ] });

/* ---------------- Semaine 25 ---------------- */
W.push({ season: 'printemps', title: 'Squats, Venezuela et titres-restaurant', mood: 'tendu', weather: 'soleil',
  intro: "Un propriétaire retrouve sa maison occupée, les États-Unis capturent un président étranger, et les salariés tiennent à leurs titres-restaurant.",
  events: [
  ev({ id: 'v33_squat', kind: 'majeur', region: 'pays_de_la_loire', sector: 'logement',
    title: 'De retour de vacances, sa maison est occupée',
    simple: "Un retraité découvre des inconnus installés chez lui. La loi anti-squat a accéléré les expulsions, mais les procédures restent longues pour certains logements. Que faire ?",
    expert: "Application de la loi anti-squat (sanctions alourdies, expulsion administrative accélérée, fin de la trêve hivernale pour les squatteurs) ; nouvelles propositions de durcissement.",
    context: "Le droit de propriété est fondamental ; le mal-logement aussi est réel. Aller plus vite contre les squats peut toucher des personnes très précaires.",
    real: { date: '2025-2026', place: 'Toute la France', fact: "La loi anti-squat a triplé les sanctions et accéléré les procédures ; des députés jugent qu'elle reste trop lente dans certains cas et réclament de nouvelles mesures.", figures: 'Selon le ministère du logement, trois fois plus d\'expulsions de squats qu\'avant la loi.',
      sources: [src('Assemblée nationale : question écrite sur l\'efficacité de la loi contre les squatteurs', 'https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11808'), src('Assemblée nationale : débat en séance sur les squats', 'https://www.assemblee-nationale.fr/dyn/17/comptes-rendus/seance/session-ordinaire-de-2025-2026/premiere-seance-du-jeudi-30-avril-2026')] },
    camera: { region: 'pays_de_la_loire', x: 30, y: 39, zoom: 2.2 },
    fx: [f('maison', 30, 39, 'pulse'), f('cadenas', 31, 38, 'blink', { delay: 0.3 }), f('policiers', 28, 40, 'appear', { delay: 0.6 }), f('personnage', 32, 40, 'appear', { delay: 0.8 })],
    choices: [
      ch('a', 'Expulsion sous 48 heures dans tous les cas', 'Procédure administrative d\'expulsion en 48 heures pour tout logement', 'Propriétaires protégés rapidement.', 'Risque d\'erreurs et de personnes à la rue.', -0.05, 'Mobilisation des forces de l\'ordre : faible coût, le déficit augmente très peu.', { soc: 2 }, { cohesion: -1, souverainete: 0 }, [f('policiers', 29, 40, 'grow')]),
      ch('b', 'Indemniser vite les propriétaires lésés', 'Fonds d\'indemnisation rapide des propriétaires victimes de squat', 'Le propriétaire ne perd pas d\'argent.', 'Coûte à l\'État sans régler le squat.', -0.05, 'Indemnisations : faible coût, le déficit augmente très peu.', { soc: 1 }, { cohesion: 1 }, [f('euro_flux', 29, 38, 'flow', { to: { x: 30, y: 39 } })]),
      ch('c', 'Expulser et proposer un hébergement', 'Expulsion accélérée assortie d\'une solution d\'hébergement d\'urgence', 'Protège le propriétaire et la personne.', 'Places d\'hébergement à financer.', -0.15, 'Hébergement d\'urgence : le déficit augmente un peu.', { soc: 0 }, { cohesion: 2 }, [f('maison', 33, 41, 'appear')]),
      ch('d', 'Taxer les logements vides pour qu\'ils soient loués', 'Taxe renforcée sur les logements vacants pour pousser à louer', 'Moins de logements vides à occuper.', 'Effet lent, propriétaires réticents.', 0.15, 'Taxe sur les logements vides : recettes, le déficit baisse un peu.', { eco: -1 }, { pouvoir_achat: 1 }, [f('immeuble', 31, 41, 'appear')])
    ] }),
  ev({ id: 'v33_venezuela', kind: 'majeur', region: 'national', sector: 'europe',
    title: 'Les États-Unis capturent le président du Venezuela',
    simple: "Des forces spéciales américaines ont capturé le dirigeant du Venezuela, accusé de diriger un régime autoritaire. L'Europe hésite à réagir. Quelle position pour la France ?",
    expert: "Intervention militaire américaine au Venezuela et capture de son président ; débat sur le respect du droit international et la souveraineté des États.",
    context: "Le régime vénézuélien était très critiqué ; mais une intervention militaire sans mandat de l'ONU inquiète beaucoup de pays, d'autant que des Français vivent dans la région.",
    real: { date: 'Janvier 2026', place: 'Caracas, Paris, Bruxelles', fact: "Après la capture du président vénézuélien par des forces spéciales américaines, les réactions européennes ont été partagées.", figures: 'Intervention suivie peu après de menaces américaines sur le Groenland.',
      sources: [src('Public Sénat : Groenland, Venezuela, les Européens en quête d\'unité', 'https://www.publicsenat.fr/actualites/international/groenland-venezuela-les-dirigeants-europeens-en-quete-dunite-face-aux-menaces-expansionnistes-de-donald-trump'), src('NPR : l\'Europe inquiète après l\'intervention au Venezuela', 'https://www.npr.org/2026/01/10/nx-s1-5673112/europe-alarmed-by-trumps-greenland-push')] },
    camera: { region: 'national', x: 30, y: 60, zoom: 1.2 },
    fx: [f('avion', 35, 55, 'move', { to: { x: 25, y: 45 } }), f('bulle', 30, 55, 'appear', { label: 'Droit international ?', delay: 0.4 }), f('drapeau_ue', 63, 4, 'blink', { delay: 0.6 })],
    choices: [
      ch('a', 'Condamner l\'intervention au nom du droit', 'Condamnation officielle au nom du droit international', 'Défend la règle pour tous les pays.', 'Tension avec un allié majeur.', 0, null, { eu: 1 }, { souverainete: 1, emploi: -1 }, [f('bulle', 30, 55, 'grow', { label: 'Condamnation' })]),
      ch('b', 'Saluer la fin d\'un régime autoritaire', 'Soutien politique à la chute du régime vénézuélien', 'Proximité avec Washington.', 'Accepte un précédent dangereux.', 0, null, { eu: -1 }, { souverainete: -1 }, [f('panneau', 30, 55, 'appear', { label: 'Soutien' })]),
      ch('c', 'Appeler à des élections sous contrôle de l\'ONU', 'Proposition d\'une transition électorale supervisée par l\'ONU', 'Position équilibrée et constructive.', 'Peu de moyens d\'action réels.', 0.02, 'Pas de dépense et commerce préservé : le déficit baisse très peu.', { eu: 1 }, { cohesion: 1 }, [f('bulle', 32, 56, 'appear', { label: 'Élections' })]),
      ch('d', 'Rapatrier les Français et aider les réfugiés', 'Évacuation des ressortissants et aide humanitaire régionale', 'Protège nos ressortissants.', 'Coût humanitaire et logistique.', -0.1, 'Évacuation et aide : le déficit augmente un peu.', { soc: -1 }, { cohesion: 1 }, [f('avion', 25, 45, 'move', { to: { x: 45, y: 40 } })])
    ] }),
  ev({ id: 'v33_titres', kind: 'banal', region: 'national', sector: 'salaires',
    title: 'Payer ses pâtes avec un titre-restaurant',
    simple: "Des millions de salariés utilisent leurs titres-restaurant pour faire les courses au supermarché. Les restaurateurs y perdent des clients. Faut-il garder cette possibilité pour de bon ?",
    expert: "Pérennisation de l'usage des titres-restaurant pour tous les produits alimentaires en supermarché, dématérialisation et usage le dimanche.",
    context: "Pour les salariés, c'est du pouvoir d'achat ; pour les restaurants, une perte de clientèle. Ces titres bénéficient d'avantages fiscaux.",
    real: { date: 'Octobre 2026', place: 'Assemblée nationale', fact: "Les députés ont adopté à l'unanimité un texte pérennisant l'usage des titres-restaurant pour les courses alimentaires, avec dématérialisation.", figures: 'Plus de cinq millions de salariés utilisent des titres-restaurant.',
      sources: [src('Journal de l\'économie : pérennisation des titres-restaurant en supermarché', 'https://www.journaldeleconomie.fr/?p=49784'), src('Europe 1 : la réforme des titres-restaurant', 'https://www.europe1.fr/node/761104')] },
    camera: { region: 'national', x: 52, y: 45, zoom: 1.2 },
    fx: [f('supermarche', 52, 45, 'pulse'), f('commerce', 55, 44, 'appear', { delay: 0.3 }), f('pieces', 53, 46, 'flow', { to: { x: 52, y: 45 }, delay: 0.5 })],
    choices: [
      ch('a', 'Garder les courses au supermarché pour de bon', 'Pérennisation de l\'usage des titres pour toutes les courses', 'Pouvoir d\'achat préservé.', 'Les restaurateurs perdent des clients.', 0, null, { eco: 0 }, { pouvoir_achat: 1 }, [f('supermarche', 52, 45, 'grow')]),
      ch('b', 'Revenir aux seuls repas au restaurant', 'Retour à l\'usage limité aux repas prêts à consommer', 'Soutient les restaurants.', 'Moins de liberté pour les salariés.', 0, null, { eco: 1 }, { pouvoir_achat: -1, emploi: 1 }, [f('commerce', 55, 44, 'grow')]),
      ch('c', 'Deux plafonds : un pour les courses, un pour le resto', 'Double plafond d\'utilisation entre courses et restauration', 'Compromis entre les deux camps.', 'Système plus compliqué à comprendre.', 0, null, { eco: 0 }, { pouvoir_achat: 0, cohesion: 1 }, [f('etiquette', 54, 43, 'appear', { label: '2 plafonds' })])
    ] })
  ] });

/* ---------------- Semaine 26 ---------------- */
W.push({ season: 'printemps', title: 'Vins taxés en Amérique, œufs et cigarette à la plage', mood: 'calme', weather: 'soleil',
  intro: "Les vins français paient des droits de douane aux États-Unis, la canicule a décimé des poules pondeuses, et la cigarette est bannie des plages.",
  events: [
  ev({ id: 'v34_douanes', kind: 'majeur', region: 'nouvelle_aquitaine', sector: 'agriculture',
    title: 'Les vins de Bordeaux taxés à 15 % aux États-Unis',
    simple: "Les États-Unis taxent désormais la plupart des produits européens à 15 %, vins et cognac compris. Pour beaucoup de domaines, c'est leur premier client. Que faire ?",
    expert: "Accord commercial UE-États-Unis plafonnant à 15 % les droits de douane sur la plupart des exportations européennes, sans exemption pour les vins et spiritueux.",
    context: "Riposter peut aggraver la guerre commerciale ; aider la filière coûte au budget ; chercher d'autres marchés prend du temps.",
    real: { date: '2025-2026', place: 'Bordeaux, Cognac et vignobles français', fact: "L'accord commercial a fixé à 15 % les droits sur la majorité des produits européens ; les vins et spiritueux n'ont pas obtenu d'exemption.", figures: 'Exportations vers les États-Unis : environ 2,4 Md€ de vin et 1,5 Md€ de spiritueux par an.',
      sources: [src('Public Sénat : droits de douane à 15 %, coup de massue pour les vins', 'https://www.publicsenat.fr/actualites/economie/droits-de-douane-americains-a-15-le-coup-de-massue-pour-les-vins-francais'), src('Vie publique : l\'accord commercial UE-États-Unis', 'https://www.vie-publique.fr/node/299692')] },
    camera: { region: 'nouvelle_aquitaine', x: 33, y: 60, zoom: 2.2 },
    fx: [f('ferme', 33, 60, 'pulse'), f('conteneurs', 30, 58, 'shake', { delay: 0.3 }), f('cargo', 14, 58, 'move', { to: { x: 5, y: 55 }, delay: 0.5 }), f('etiquette', 34, 58, 'appear', { label: '+15 %', delay: 0.7 })],
    choices: [
      ch('a', 'Riposte européenne sur des produits américains', 'Droits de douane européens en représailles sur des produits américains', 'Montre que l\'Europe se défend.', 'Risque d\'escalade et de hausse des prix.', 0.3, 'Droits de douane perçus : recettes en plus, le déficit baisse un peu.', { eu: 1 }, { souverainete: 1, pouvoir_achat: -1 }, [f('douane', 30, 58, 'appear')]),
      ch('b', 'Aides et prêts aux viticulteurs touchés', 'Plan de soutien financier à la filière viticole exportatrice', 'Évite des faillites de domaines.', 'Coûte au budget, problème non réglé.', -0.4, 'Aides à la filière : le déficit augmente.', { eco: -1 }, { emploi: 1, cohesion: 1 }, [f('euro_flux', 35, 58, 'flow', { to: { x: 33, y: 60 } })]),
      ch('c', 'Conquérir l\'Asie et l\'Amérique du Sud', 'Promotion à l\'export vers de nouveaux marchés', 'Moins de dépendance aux États-Unis.', 'Effet lent, concurrence forte.', -0.05, 'Promotion à l\'export : faible coût, le déficit augmente très peu.', { eco: 1 }, { emploi: 1, souverainete: 1 }, [f('cargo', 12, 60, 'move', { to: { x: 2, y: 70 } })]),
      ch('d', 'Négocier une exemption pour le vin', 'Négociation européenne d\'une exemption pour les vins et spiritueux', 'Règle le problème à la source.', 'Concessions à faire en échange.', 0, null, { eu: 1 }, { emploi: 1, souverainete: -1 }, [f('bulle', 35, 57, 'appear', { label: 'Exemption ?' })])
    ] }),
  ev({ id: 'v34_oeufs', kind: 'banal', region: 'bretagne', sector: 'agriculture',
    title: 'La canicule a tué des centaines de milliers de poules',
    simple: "En Bretagne, des éleveurs ont perdu une partie de leurs poules pondeuses pendant la canicule. Le prix des œufs grimpe. Que faire ?",
    expert: "Pertes de poules pondeuses lors d'épisodes de canicule et tensions sur le marché des œufs.",
    context: "Adapter les poulaillers à la chaleur coûte cher aux éleveurs ; importer des œufs fait baisser les prix mais concurrence la production locale.",
    real: { date: 'Été 2026', place: 'Élevages de l\'Ouest', fact: 'Plusieurs centaines de milliers de poules pondeuses ont été perdues pendant une canicule, avec des conséquences attendues sur l\'offre d\'œufs.', figures: '500 000 à 700 000 poules pondeuses perdues selon la presse agricole.',
      sources: [src('Réussir : à quoi s\'attendre pour l\'agriculture (pertes de poules en canicule)', 'https://www.reussir.fr/fruits-legumes/l-ue-et-le-mercosur-signent-l-accord-a-quoi-s-attendre-pour-l-agriculture')] },
    camera: { region: 'bretagne', x: 15, y: 30, zoom: 2 },
    fx: [f('ferme', 16, 30, 'pulse'), f('canicule', 18, 28, 'appear', { delay: 0.3 }), f('etiquette', 14, 29, 'appear', { label: 'Œufs +', delay: 0.5 })],
    choices: [
      ch('a', 'Aider à climatiser et ventiler les poulaillers', 'Subvention à l\'adaptation des élevages aux fortes chaleurs', 'Moins de pertes aux prochaines canicules.', 'Coût public et énergie consommée.', -0.05, 'Subventions aux éleveurs : faible coût, le déficit augmente très peu.', { env: 0, eco: -1 }, { emploi: 1, co2: 1 }, [f('ferme', 16, 30, 'grow')]),
      ch('b', 'Importer des œufs pour faire baisser les prix', 'Ouverture temporaire aux importations d\'œufs', 'Prix plus bas rapidement.', 'Concurrence pour les éleveurs français.', 0, null, { eco: 1 }, { pouvoir_achat: 1, souverainete: -1 }, [f('camion', 20, 32, 'move', { to: { x: 16, y: 30 } })]),
      ch('c', 'Laisser le marché s\'ajuster', 'Absence d\'intervention sur le marché des œufs', 'Pas de dépense publique.', 'Prix élevés plusieurs mois.', 0, null, { eco: 1 }, { pouvoir_achat: -1 }, [f('etiquette', 14, 29, 'grow', { label: 'Œufs +' })])
    ] }),
  ev({ id: 'v34_tabac', kind: 'majeur', region: 'paca', sector: 'sante',
    title: 'Plus de cigarette sur la plage',
    simple: "Depuis peu, fumer est interdit sur les plages, dans les parcs et sous les abribus. Sur une plage du Sud, des fumeurs protestent, des parents applaudissent. Que faire ?",
    expert: "Extension des espaces sans tabac aux plages, parcs, abribus et abords des écoles ; amende forfaitaire de 135 €.",
    context: "Protéger les enfants du tabac et réduire les mégots, ou respecter la liberté des fumeurs en plein air : faire appliquer la règle demande des contrôles.",
    real: { date: '29 juin 2025 (entrée en vigueur)', place: 'Plages, parcs et abribus de France', fact: 'Un décret a étendu l\'interdiction de fumer aux plages, parcs et jardins publics, abribus et abords des écoles, sous peine d\'amende.', figures: 'Amende forfaitaire de 135 € ; 90 % des fumeurs commencent avant 18 ans.',
      sources: [src('Info.gouv : l\'interdiction de fumer à la plage entre en vigueur', 'https://www.info.gouv.fr/actualite/interdiction-de-fumer-de-nouveaux-lieux-concernes-cet-ete')] },
    camera: { region: 'paca', x: 77, y: 80, zoom: 2.2 },
    fx: [f('panneau', 78, 81, 'appear', { label: 'Espace sans tabac' }), f('foule', 76, 80, 'pulse', { delay: 0.3 }), f('policiers', 79, 79, 'appear', { delay: 0.6 })],
    choices: [
      ch('a', 'Contrôler et verbaliser vraiment', 'Contrôles renforcés et verbalisation des infractions', 'La règle est respectée.', 'Mobilise les policiers municipaux.', 0.05, 'Amendes perçues : petite recette, le déficit baisse un peu.', { soc: 1 }, { services: 0, cohesion: 1 }, [f('policiers', 79, 79, 'grow')]),
      ch('b', 'Miser sur la prévention sans amende', 'Campagnes de prévention et signalétique sans verbalisation', 'Moins de tensions.', 'Règle souvent ignorée.', -0.05, 'Campagnes : faible coût, le déficit augmente très peu.', { soc: -1 }, { cohesion: 0, services: 1 }, [f('panneau', 78, 81, 'grow', { label: 'Espace sans tabac' })]),
      ch('c', 'Créer des coins fumeurs sur les plages', 'Aménagement de zones fumeurs délimitées sur les plages', 'Compromis entre les deux camps.', 'Affaiblit le message de santé.', -0.05, 'Aménagements : faible coût, le déficit augmente très peu.', { soc: -1 }, { cohesion: 1 }, [f('etiquette', 76, 79, 'appear', { label: 'Coin fumeurs' })])
    ] })
  ] });

/* ---------------- Semaine 27 ---------------- */
W.push({ season: 'printemps', title: 'Drones au-dessus de l\'Europe et Palestine', mood: 'tendu', weather: 'vent',
  intro: "Des drones survolent bases et aéroports européens, la France a reconnu l'État de Palestine, et un aéroport régional ferme une heure à cause d'un drone.",
  events: [
  ev({ id: 'v35_drones', kind: 'majeur', region: 'grand_est', sector: 'defense',
    title: 'Des drones inconnus survolent une base militaire',
    simple: "Des drones non identifiés survolent bases militaires et aéroports en Europe, y compris en France. Beaucoup y voient la main de la Russie. Faut-il bâtir un « mur anti-drones » ?",
    expert: "Incursions de drones au-dessus d'infrastructures critiques européennes ; projet européen de « mur anti-drones » combinant détection et interception.",
    context: "Abattre un drone coûte souvent plus cher que le drone ; détecter partout demande des radars et des équipes ; ignorer la menace peut encourager d'autres tests.",
    real: { date: 'Septembre 2025 et après', place: 'Base de Mourmelon (Marne), aéroports européens', fact: "Des drones ont survolé des bases militaires et des aéroports européens ; l'Union européenne a lancé l'idée d'un mur anti-drones sur son flanc est.", figures: 'Incidents de drones près d\'infrastructures critiques multipliés par quatre en un an selon une étude européenne.',
      sources: [src('Public Sénat : l\'Europe planche sur un mur anti-drones', 'https://www.publicsenat.fr/actualites/international/incursions-russes-leurope-planche-sur-un-mur-anti-drones'), src('Euronews : l\'UE demande un mur antidrones', 'https://fr.euronews.com/2025/09/23/lue-demande-un-mur-antidrones-apres-lalerte-a-copenhague')] },
    camera: { region: 'grand_est', x: 70, y: 22, zoom: 2.2 },
    fx: [f('satellite', 72, 18, 'blink'), f('antenne', 70, 22, 'pulse', { delay: 0.3 }), f('cyberattaque', 74, 20, 'appear', { delay: 0.5 }), f('policiers', 68, 23, 'appear', { delay: 0.7 })],
    choices: [
      ch('a', 'Financer un mur anti-drones européen', 'Programme européen commun de détection et d\'interception de drones', 'Protection coordonnée et partagée.', 'Coûteux et long à déployer.', -0.6, 'Contribution au programme : le déficit augmente.', { eu: 2 }, { souverainete: 2 }, [f('antenne', 70, 22, 'grow'), f('drapeau_ue', 63, 4, 'pulse')]),
      ch('b', 'Équiper d\'abord nos propres sites sensibles', 'Déploiement national de radars et brouilleurs anti-drones', 'Protection rapide de nos bases.', 'Pas de protection commune en Europe.', -0.4, 'Matériel national : le déficit augmente.', { eu: -1 }, { souverainete: 2, emploi: 1 }, [f('antenne', 72, 23, 'appear')]),
      ch('c', 'Autoriser à abattre tout drone suspect', 'Extension des règles d\'engagement contre les drones intrusifs', 'Dissuasion forte.', 'Risque d\'erreur et d\'escalade.', -0.1, 'Moyens d\'interception : le déficit augmente un peu.', { soc: 1 }, { souverainete: 1, cohesion: -1 }, [f('cyberattaque', 74, 20, 'fade')]),
      ch('d', 'Enquêter avant d\'accuser et de dépenser', 'Enquête et attribution avant toute réponse militaire', 'Évite une escalade injustifiée.', 'Lenteur face à la menace.', 0.05, 'Dépenses militaires reportées : le déficit baisse un peu.', { eu: 0, soc: -1 }, { souverainete: -1 }, [f('loupe', 70, 21, 'appear')])
    ] }),
  ev({ id: 'v35_palestine', kind: 'majeur', region: 'national', sector: 'europe',
    title: 'La France a reconnu l\'État de Palestine : et maintenant ?',
    simple: "À l'ONU, la France a reconnu l'État de Palestine pour relancer une solution à deux États. Les avis sont très partagés. Quelle suite donner ?",
    expert: "Reconnaissance de l'État de Palestine par la France à l'Assemblée générale des Nations unies, dans le cadre de la déclaration de New York pour une solution à deux États.",
    context: "Les uns y voient un pas vers la paix, les autres une récompense pour le terrorisme. Chaque décision pèse sur les relations avec Israël, les pays arabes et la cohésion en France.",
    real: { date: '22 septembre 2025', place: 'New York, Assemblée générale de l\'ONU', fact: "Le président de la République a annoncé à l'ONU que la France reconnaissait l'État de Palestine, aux côtés d'autres pays.", figures: 'Environ 150 des 193 États membres de l\'ONU reconnaissent l\'État de Palestine.',
      sources: [src('Vie publique : la France a reconnu l\'État de Palestine', 'https://www.vie-publique.fr/en-bref/299680-une-reconnaissance-prochaine-par-la-france-de-letat-de-palestine'), src('Diplomatie : comprendre la reconnaissance de l\'État de Palestine', 'https://www.diplomatie.gouv.fr/fr/le-ministere-en-action/agir-pour-la-paix-et-le-respect-des-droits-de-l-homme/agir-pour-la-securite-le-desarmement-et-la-non-proliferation/crises-et-conflits/comprendre-la-reconnaissance-par-la-france-de-l-etat-de-palestine')] },
    camera: { region: 'national', x: 60, y: 60, zoom: 1.2 },
    fx: [f('bulle', 60, 55, 'appear', { label: 'Deux États' }), f('parlement', 52, 24, 'pulse', { delay: 0.3 }), f('manifestants', 54, 26, 'appear', { delay: 0.6 })],
    choices: [
      ch('a', 'Ouvrir une ambassade après libération des otages', 'Ambassade conditionnée à la libération des otages', 'Fermeté et cohérence.', 'Peu de changements concrets.', 0, null, { eu: 1 }, { cohesion: 1 }, [f('bulle', 60, 55, 'grow', { label: 'Conditions' })]),
      ch('b', 'Financer la reconstruction de Gaza', 'Contribution française à la reconstruction et à l\'aide humanitaire', 'Aide concrète aux civils.', 'Coût et risque de détournement.', -0.2, 'Aide humanitaire : le déficit augmente un peu.', { soc: -1 }, { cohesion: 1 }, [f('euro_flux', 60, 60, 'flow', { to: { x: 78, y: 74 } })]),
      ch('c', 'Sanctions européennes contre la colonisation', 'Sanctions ciblées européennes liées à la colonisation en Cisjordanie', 'Pression pour la solution à deux États.', 'Crise diplomatique avec Israël.', 0, null, { eu: 1, soc: -1 }, { cohesion: -1 }, [f('drapeau_ue', 63, 4, 'shake')]),
      ch('d', 'Geler la démarche et apaiser Israël', 'Suspension des suites de la reconnaissance française', 'Apaise la relation avec Israël.', 'Perte de crédibilité auprès d\'autres pays.', 0.02, 'Pas d\'aide versée : le déficit baisse très peu.', { soc: 1 }, { cohesion: -1 }, [f('panneau', 60, 55, 'appear', { label: 'Pause' })])
    ] }),
  ev({ id: 'v35_aeroport', kind: 'banal', region: 'auvergne_rhone_alpes', sector: 'transports',
    title: 'Un drone de loisir bloque un aéroport régional',
    simple: "Un drone de loisir a survolé les pistes d'un aéroport : les vols ont été suspendus une heure. Faut-il durcir les règles pour les particuliers ?",
    expert: "Survols non autorisés de zones aéroportuaires par des drones de loisir ; signalements recensés par la gendarmerie des transports aériens.",
    context: "La plupart des pilotes sont de bonne foi ; mais un seul drone peut bloquer des milliers de passagers. Contrôler demande des moyens.",
    real: { date: '2025', place: 'Aéroports français', fact: 'La gendarmerie des transports aériens a recensé des centaines de signalements de drones sur l\'année, autorisés ou non.', figures: 'Plus de 700 signalements de vols de drones recensés en France sur l\'année.',
      sources: [src('Next : face aux incursions de drones, la meilleure réponse', 'https://next.ink/216098/face-aux-incursions-de-drones-les-pays-europeens-cherchent-la-meilleure-reponse/')] },
    camera: { region: 'auvergne_rhone_alpes', x: 66, y: 58, zoom: 2 },
    fx: [f('aeroport', 66, 58, 'pulse'), f('avion', 64, 57, 'blink', { delay: 0.3 }), f('panneau', 68, 57, 'appear', { label: 'Vols suspendus', delay: 0.5 })],
    choices: [
      ch('a', 'Amendes lourdes et immatriculation des drones', 'Immatriculation obligatoire et sanctions renforcées pour les drones', 'Pilotes identifiables et responsables.', 'Contraintes pour les amateurs.', 0.02, 'Amendes et frais d\'immatriculation : petite recette, le déficit baisse un peu.', { soc: 1 }, { services: 1 }, [f('etiquette', 67, 56, 'appear', { label: 'Immatriculé' })]),
      ch('b', 'Brouilleurs autour des aéroports', 'Installation de brouilleurs anti-drones autour des aéroports', 'Protection technique directe.', 'Coût d\'installation.', -0.05, 'Équipements : faible coût, le déficit augmente très peu.', { soc: 1 }, { services: 1, souverainete: 1 }, [f('antenne', 67, 59, 'appear')]),
      ch('c', 'Former les pilotes plutôt que punir', 'Formation obligatoire en ligne pour les pilotes de loisir', 'Moins d\'erreurs par ignorance.', 'N\'arrête pas les malveillants.', 0, null, { soc: -1 }, { cohesion: 1 }, [f('personnage', 65, 59, 'appear')])
    ] })
  ] });

/* ---------------- Semaine 28 ---------------- */
W.push({ season: 'printemps', title: 'Mode jetable, petits colis et impôts par virement', mood: 'calme', weather: 'pluie',
  intro: "La loi contre la mode jetable vise les plateformes asiatiques, les petits colis venus de loin vont être taxés, et payer ses impôts pourrait passer par une appli européenne.",
  events: [
  ev({ id: 'v36_fastfashion', kind: 'majeur', region: 'hauts_de_france', sector: 'numerique',
    title: 'Une loi contre la mode à tout petit prix',
    simple: "Des plateformes vendent des milliers de vêtements neufs chaque jour, très peu chers. Une loi crée une pénalité sur ces produits. Jusqu'où aller ?",
    expert: "Loi visant à réduire l'impact environnemental de l'industrie textile : définition de l'« ultra fast-fashion », malus progressif jusqu'à 50 % du prix, interdiction de publicité.",
    context: "Ces vêtements polluent et concurrencent le textile français ; mais ils permettent à des ménages modestes de s'habiller pour pas cher.",
    real: { date: '29 juin 2026 (adoption définitive)', place: 'Parlement', fact: "Le Parlement a adopté définitivement la loi contre l'ultra fast-fashion, qui vise surtout les grandes plateformes asiatiques.", figures: 'Pénalité plafonnée à 50 % du prix hors taxes du produit.',
      sources: [src('Euronews : le Parlement adopte la loi contre la mode jetable', 'https://fr.euronews.com/2026/06/29/france-le-parlement-adopte-definitivement-la-loi-qui-sattaque-a-la-mode-jetable'), src('Le Club des juristes : loi fast-fashion définitivement adoptée', 'https://www.leclubdesjuristes.com/en-bref/lutte-contre-la-fast-fashion-la-proposition-de-loi-definitivement-adoptee-par-le-parlement-16646/')] },
    camera: { region: 'hauts_de_france', x: 56, y: 10, zoom: 2.2 },
    fx: [f('colis', 56, 10, 'pulse'), f('entrepot', 58, 11, 'appear', { delay: 0.3 }), f('avion', 70, 8, 'move', { to: { x: 57, y: 10 }, delay: 0.5 }), f('etiquette', 55, 9, 'appear', { label: 'Malus', delay: 0.7 })],
    choices: [
      ch('a', 'Malus maximal sur la mode jetable', 'Application du malus au plafond dès l\'entrée en vigueur', 'Freine fortement la mode jetable.', 'Vêtements plus chers pour les modestes.', 0.5, 'Malus perçu : recettes en plus, le déficit baisse.', { env: 2 }, { co2: -1, pouvoir_achat: -1, emploi: 1 }, [f('etiquette', 55, 9, 'grow', { label: 'Malus' })]),
      ch('b', 'Malus progressif jusqu\'à la fin de la décennie', 'Montée progressive du malus selon le calendrier de la loi', 'Laisse le temps de s\'adapter.', 'Effet lent sur la pollution.', 0.2, 'Malus progressif : recettes en plus, le déficit baisse un peu.', { env: 1 }, { co2: -1 }, [f('fleche', 56, 9, 'rise')]),
      ch('c', 'Aider le textile français à produire moins cher', 'Soutien à la relocalisation de la production textile', 'Emplois et vêtements durables.', 'Coûteux, prix restent plus élevés.', -0.2, 'Aides à l\'industrie : le déficit augmente un peu.', { eco: -1 }, { emploi: 1, souverainete: 1 }, [f('usine', 58, 12, 'appear')]),
      ch('d', 'Ne pas pénaliser, informer les acheteurs', 'Étiquetage environnemental sans pénalité financière', 'Liberté de choix préservée.', 'Peu d\'effet sur les achats.', 0, null, { eco: 1 }, { pouvoir_achat: 1, co2: 0 }, [f('loupe', 56, 10, 'appear')])
    ] }),
  ev({ id: 'v36_colis', kind: 'majeur', region: 'ile_de_france', sector: 'salaires',
    title: 'Une taxe de quelques euros sur les petits colis',
    simple: "Des millions de petits colis arrivent chaque jour de l'étranger, souvent sans droits de douane. Une taxe de 2 à 4 € par colis est prévue. Bonne idée ?",
    expert: "Taxe forfaitaire sur les petits colis expédiés par des entreprises établies hors de l'Union européenne.",
    context: "La taxe rééquilibre la concurrence avec les commerces français ; mais elle renchérit les petits achats en ligne, souvent faits par des ménages modestes.",
    real: { date: '2025-2026', place: 'Toute la France', fact: 'La loi contre la mode jetable prévoit une taxe sur les petits colis venus d\'entreprises hors de l\'Union européenne.', figures: 'Taxe de 2 à 4 € par petit colis.',
      sources: [src('Nss Magazine : bonus-malus, écoscore et taxe colis', 'https://www.nssmag.com/fr/fashion/41511/loi-anti-fast-fashion-approuvee-france')] },
    camera: { region: 'ile_de_france', x: 52, y: 24, zoom: 2 },
    fx: [f('colis', 52, 24, 'pulse'), f('camion', 50, 25, 'move', { to: { x: 54, y: 24 }, delay: 0.3 }), f('etiquette', 53, 22, 'appear', { label: '+2 €', delay: 0.5 })],
    choices: [
      ch('a', 'Taxer chaque petit colis venu de loin', 'Taxe forfaitaire sur chaque colis importé hors Union européenne', 'Concurrence plus juste pour nos commerces.', 'Petits achats en ligne plus chers.', 0.4, 'Taxe perçue : recettes en plus, le déficit baisse.', { eco: -1 }, { pouvoir_achat: -1, emploi: 1 }, [f('etiquette', 53, 22, 'grow', { label: '+2 €' })]),
      ch('b', 'Plus de contrôles douaniers à la place', 'Renforcement des contrôles douaniers sur les colis', 'Vise les produits dangereux ou illégaux.', 'Moyens humains limités.', -0.05, 'Douaniers en plus : faible coût, le déficit augmente très peu.', { soc: 1 }, { services: 1 }, [f('douane', 51, 23, 'appear')]),
      ch('c', 'Ne rien changer', 'Maintien du régime actuel des petits colis', 'Achats en ligne restent bon marché.', 'Commerces français désavantagés.', 0, null, { eco: 1 }, { pouvoir_achat: 1, emploi: -1 }, [f('colis', 52, 24, 'grow')])
    ] }),
  ev({ id: 'v36_impots', kind: 'banal', region: 'national', sector: 'numerique',
    title: 'Payer ses impôts avec une appli européenne',
    simple: "L'administration fiscale veut permettre de payer ses impôts par virement instantané via une solution européenne. Faut-il l'imposer, le proposer ou attendre ?",
    expert: "Intégration de la solution de paiement européenne Wero aux paiements de la Direction générale des Finances publiques.",
    context: "L'État peut accélérer l'adoption d'un outil européen ; mais tous les contribuables ne sont pas à l'aise avec les applis.",
    real: { date: '2026', place: 'Direction générale des Finances publiques', fact: 'L\'administration fiscale a annoncé son intérêt pour intégrer la solution de paiement européenne à ses services.', figures: 'Premier opérateur public européen à envisager cette intégration.',
      sources: [src('Clubic : la souveraineté des paiements, entretien Wero', 'https://clubic.com//dossier-611377-la-souverainete-des-paiements-n-a-jamais-ete-aussi-cruciale-wero-a-deja-double-paylib---interview.html')] },
    camera: { region: 'national', x: 52, y: 40, zoom: 1.2 },
    fx: [f('mairie', 52, 40, 'pulse'), f('antenne', 54, 38, 'appear', { delay: 0.3 }), f('euro_flux', 50, 42, 'flow', { to: { x: 52, y: 40 }, delay: 0.5 })],
    choices: [
      ch('a', 'Proposer l\'option, sans obligation', 'Ajout du paiement européen comme option facultative', 'Liberté pour chacun.', 'Adoption lente.', -0.02, 'Adaptation informatique : faible coût, le déficit augmente très peu.', { eu: 1 }, { souverainete: 1 }, [f('antenne', 54, 38, 'grow')]),
      ch('b', 'En faire le moyen de paiement par défaut', 'Paiement européen par défaut pour les impôts', 'Adoption massive et rapide.', 'Gêne les personnes peu à l\'aise.', -0.02, 'Adaptation informatique : faible coût, le déficit augmente très peu.', { eu: 2 }, { souverainete: 2, cohesion: -1 }, [f('euro_flux', 50, 42, 'flow', { to: { x: 52, y: 40 } })]),
      ch('c', 'Attendre que le système ait fait ses preuves', 'Report de toute intégration au paiement public', 'Aucun risque technique.', 'L\'État ne montre pas l\'exemple.', 0, null, { eu: -1 }, { souverainete: -1 }, [f('panneau', 52, 38, 'appear', { label: 'Plus tard' })])
    ] })
  ] });

/* ---------------- Semaine 29 ---------------- */
W.push({ season: 'printemps', title: 'Frontière avec Londres, départ d\'Afrique et pharmacies', mood: 'tendu', weather: 'soleil',
  intro: "Paris et Londres renégocient le financement de la frontière, l'armée française a quitté le Sénégal, et des médicaments manquent en pharmacie.",
  events: [
  ev({ id: 'v37_sandhurst', kind: 'majeur', region: 'hauts_de_france', sector: 'immigration',
    title: 'Londres paie, Paris surveille : à quel prix ?',
    simple: "Le Royaume-Uni finance une partie de la surveillance de la côte française. L'accord est renouvelé pour trois ans, avec plus d'argent et plus d'agents. Que négocier ?",
    expert: "Renouvellement pour trois ans du traité de Sandhurst : contribution britannique accrue, dont une part variable selon les résultats, et renfort d'agents sur le littoral.",
    context: "L'argent britannique aide, mais une part dépend des résultats ; certains jugent que la France fait la police des frontières pour le compte d'un autre pays.",
    real: { date: 'Avril 2026', place: 'Dunkerque et littoral du Nord', fact: "Paris et Londres ont renouvelé pour trois ans le traité de Sandhurst, avec une enveloppe britannique en hausse et plus d'agents sur la côte.", figures: 'Enveloppe britannique pouvant atteindre 766 millions d\'euros ; 1 400 agents visés sur le littoral.',
      sources: [src('Euronews : la France et le Royaume-Uni reconduisent le traité de Sandhurst', 'https://fr.euronews.com/2026/04/23/traversees-de-la-manche-la-france-et-le-royaume-uni-reconduisent-le-traite-de-sandhurst'), src('La Gazette France : Londres augmente sa contribution', 'https://www.lagazettefrance.fr/article/frontiere-franco-britannique-londres-augmente-sa-contribution-avec-une-part-flexible')] },
    camera: { region: 'hauts_de_france', x: 50, y: 8, zoom: 2.2 },
    fx: [f('euro_flux', 47, 12, 'flow', { to: { x: 52, y: 9 } }), f('policiers', 52, 9, 'appear', { delay: 0.3 }), f('port', 55, 8, 'pulse', { delay: 0.5 }), f('frontiere', 48, 8, 'blink', { delay: 0.7 })],
    choices: [
      ch('a', 'Accepter l\'accord et ses objectifs', 'Signature du traité avec part variable liée aux résultats', 'Plus de moyens payés par Londres.', 'Dépendance aux objectifs britanniques.', 0.2, 'Contribution britannique : recettes en plus, le déficit baisse un peu.', { eu: 0, soc: 1 }, { souverainete: -1, cohesion: 1 }, [f('euro_flux', 47, 12, 'grow')]),
      ch('b', 'Exiger plus d\'argent sans condition', 'Contribution fixe plus élevée sans part conditionnelle', 'Ressource stable pour la France.', 'Négociation longue et tendue.', 0.3, 'Contribution plus forte : recettes en plus, le déficit baisse.', { soc: 1 }, { souverainete: 1 }, [f('bulle', 52, 7, 'appear', { label: 'Plus d\'argent' })]),
      ch('c', 'Ne plus faire la police pour Londres', 'Fin de la coopération de surveillance au profit du Royaume-Uni', 'Affirme l\'indépendance française.', 'Perte de financements, plus de départs.', -0.1, 'Perte de la contribution : le déficit augmente un peu.', { soc: -1, eu: -1 }, { souverainete: 1, cohesion: -1 }, [f('frontiere', 48, 8, 'fade')]),
      ch('d', 'Une réponse européenne commune', 'Accord migratoire entre l\'Union européenne et le Royaume-Uni', 'Partage la charge entre pays européens.', 'Très long à négocier.', 0, null, { eu: 2 }, { cohesion: 1 }, [f('drapeau_ue', 63, 4, 'pulse')])
    ] }),
  ev({ id: 'v37_afrique', kind: 'majeur', region: 'national', sector: 'defense',
    title: 'L\'armée française a quitté l\'Afrique de l\'Ouest',
    simple: "Après le Mali, le Niger, le Tchad ou la Côte d'Ivoire, l'armée française a quitté le Sénégal. Quelle place pour la France en Afrique désormais ?",
    expert: "Fin de la présence militaire permanente française en Afrique de l'Ouest et centrale, après la restitution des dernières installations au Sénégal.",
    context: "Certains pays ne veulent plus de bases étrangères ; d'autres puissances s'installent. Coopérer autrement coûte moins cher mais donne moins d'influence.",
    real: { date: '17 juillet 2025', place: 'Dakar', fact: "L'armée française a restitué ses dernières installations au Sénégal, mettant fin à sa présence permanente en Afrique de l'Ouest et centrale.", figures: 'Environ 350 militaires français ont quitté le Sénégal ; il reste une base à Djibouti.',
      sources: [src('Le Temps : l\'armée française quitte le Sénégal', 'https://www.letemps.ch/articles/l-armee-francaise-quitte-le-senegal-et-signe-la-fin-de-sa-presence-permanente-en-afrique-de-l-ouest-et-centrale'), src('Ifri : cinq minutes pour comprendre le départ des soldats français', 'https://www.ifri.org/fr/presse-contenus-repris-sur-le-site/la-france-quitte-le-senegal-cinq-minutes-pour-comprendre-le')] },
    camera: { region: 'national', x: 40, y: 80, zoom: 1.2 },
    fx: [f('avion', 30, 95, 'move', { to: { x: 45, y: 60 } }), f('drapeau_ue', 63, 4, 'blink', { delay: 0.3 }), f('bulle', 40, 85, 'appear', { label: 'Afrique', delay: 0.5 })],
    choices: [
      ch('a', 'Partenariats d\'égal à égal, sans bases', 'Coopération civile, économique et de formation sans présence militaire', 'Relation plus équilibrée.', 'Moins d\'influence face aux rivaux.', 0.3, 'Bases fermées : économies, le déficit baisse un peu.', { eu: 0, soc: -1 }, { cohesion: 1, souverainete: -1 }, [f('bulle', 40, 85, 'grow', { label: 'Partenariat' })]),
      ch('b', 'Recentrer l\'armée sur l\'Europe', 'Réaffectation des moyens militaires vers le flanc est européen', 'Priorité à la menace la plus proche.', 'Abandon d\'une zone stratégique.', 0.2, 'Moins de déploiements lointains : le déficit baisse un peu.', { eu: 1 }, { souverainete: 1 }, [f('avion', 45, 60, 'move', { to: { x: 80, y: 15 } })]),
      ch('c', 'Garder une capacité d\'intervention rapide', 'Force d\'intervention prépositionnée hors d\'Afrique', 'Protège les Français sur place.', 'Coûte cher à maintenir.', -0.2, 'Moyens d\'intervention : le déficit augmente un peu.', { soc: 1 }, { souverainete: 1 }, [f('policiers', 42, 80, 'appear')]),
      ch('d', 'Augmenter l\'aide au développement', 'Hausse de l\'aide publique au développement en Afrique', 'Agit sur la pauvreté et les crises.', 'Coût budgétaire, effet lent.', -0.3, 'Aide en plus : le déficit augmente.', { soc: -1, eco: -1 }, { cohesion: 1 }, [f('euro_flux', 50, 50, 'flow', { to: { x: 40, y: 85 } })])
    ] }),
  ev({ id: 'v37_medicaments', kind: 'banal', region: 'centre_val_de_loire', sector: 'sante',
    title: 'Rupture de stock à la pharmacie du village',
    simple: "Le pharmacien n'a plus un médicament courant depuis des semaines. Beaucoup sont fabriqués en Asie. Que faire ?",
    expert: "Ruptures et tensions d'approvisionnement de médicaments en officine ; relocalisation de la production de médicaments essentiels.",
    context: "Produire en France coûte plus cher ; constituer des stocks aussi ; laisser faire expose à de nouvelles pénuries.",
    real: { date: '2025', place: 'Pharmacies de toute la France', fact: 'Les signalements de ruptures et de risques de rupture de médicaments se comptent par milliers ; l\'État soutient la relocalisation de médicaments essentiels.', figures: 'Plus de 5 000 signalements de ruptures ou de risques de rupture.',
      sources: [src('Assemblée nationale : question écrite sur la pénurie de médicaments', 'https://questions.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE12644.pdf'), src('ANSM : plan hivernal contre les pénuries', 'https://ansm.sante.fr/actualites/lutte-contre-les-penuries-de-medicaments-de-lhiver-le-plan-hivernal-2025-2026-est-en-preparation')] },
    camera: { region: 'centre_val_de_loire', x: 46, y: 38, zoom: 2 },
    fx: [f('cabinet_medical', 46, 38, 'pulse'), f('file_attente', 48, 39, 'appear', { delay: 0.3 }), f('panneau', 44, 37, 'appear', { label: 'Rupture', delay: 0.5 })],
    choices: [
      ch('a', 'Relocaliser la production en France', 'Aides à la relocalisation des médicaments essentiels', 'Moins de dépendance à l\'Asie.', 'Coûteux et long.', -0.15, 'Aides industrielles : le déficit augmente un peu.', { eco: -1 }, { souverainete: 2, emploi: 1 }, [f('usine', 47, 40, 'appear')]),
      ch('b', 'Obliger les labos à garder des stocks', 'Obligation de stocks de sécurité pour les laboratoires', 'Moins de ruptures soudaines.', 'Prix des médicaments en hausse.', 0, null, { eco: -1 }, { services: 1, pouvoir_achat: -1 }, [f('entrepot', 45, 39, 'appear')]),
      ch('c', 'Laisser les pharmaciens préparer des substituts', 'Préparations et substitutions autorisées en officine en cas de rupture', 'Solution rapide pour les patients.', 'Charge en plus pour les pharmaciens.', 0, null, { eco: 0 }, { services: 1 }, [f('cabinet_medical', 46, 38, 'grow')])
    ] })
  ] });

/* ---------------- Semaine 30 ---------------- */
W.push({ season: 'printemps', title: 'Nouvelle-Calédonie, expulsions et sodas', mood: 'tendu', weather: 'soleil',
  intro: "L'avenir de la Nouvelle-Calédonie se joue, les expulsions locatives battent un record, et la taxe sur les sodas fait grimper leurs prix.",
  events: [
  ev({ id: 'v38_caledonie', kind: 'majeur', region: 'outre_mer', sector: 'securite',
    title: 'Un « État de Nouvelle-Calédonie » dans la République ?',
    simple: "Après de graves émeutes, un accord propose de créer un « État de Nouvelle-Calédonie » dans la France, avec une nationalité calédonienne. Une partie des indépendantistes le rejette. Que faire ?",
    expert: "Accord de Bougival complété par l'accord Élysée-Oudinot : État de Nouvelle-Calédonie inscrit dans la Constitution, nationalité calédonienne, transfert possible de compétences, corps électoral provincial.",
    context: "Le statut divise profondément l'archipel. Imposer un accord peut raviver les violences ; attendre prolonge l'incertitude et la crise économique.",
    real: { date: '12 juillet 2025 (Bougival) et janvier 2026 (accord complémentaire)', place: 'Bougival, Paris, Nouméa', fact: "Un accord signé à Bougival prévoit un « État de Nouvelle-Calédonie » au sein de la République ; il a été complété par un second accord, tandis qu'un mouvement indépendantiste l'a rejeté.", figures: 'Subvention exceptionnelle de l\'État de 60 millions d\'euros annoncée lors de l\'accord complémentaire.',
      sources: [src('Info.gouv : un accord pour l\'avenir de la Nouvelle-Calédonie', 'https://www.info.gouv.fr/actualite/un-accord-pour-lavenir-de-la-nouvelle-caledonie'), src('Vie publique : la Nouvelle-Calédonie et l\'accord de Bougival', 'https://www.vie-publique.fr/node/289664')] },
    camera: { region: 'outre_mer', x: 8, y: 92, zoom: 2.2 },
    fx: [f('mairie', 8, 92, 'pulse'), f('manifestants', 10, 91, 'appear', { delay: 0.3 }), f('policiers', 6, 93, 'appear', { delay: 0.5 }), f('bulle', 9, 89, 'appear', { label: 'Accord ?', delay: 0.7 })],
    choices: [
      ch('a', 'Organiser vite le vote sur l\'accord', 'Consultation rapide des Calédoniens sur l\'accord', 'Sort de l\'incertitude.', 'Risque de tensions si une partie boycotte.', -0.05, 'Organisation du scrutin : faible coût, le déficit augmente très peu.', { soc: 1 }, { cohesion: -1, souverainete: 1 }, [f('mairie', 8, 92, 'grow')]),
      ch('b', 'Rouvrir la négociation avec tous', 'Reprise des discussions avec l\'ensemble des forces politiques', 'Recherche d\'un consensus plus large.', 'Prolonge l\'incertitude.', 0.02, 'Aides différées : le déficit baisse très peu.', { soc: -1 }, { cohesion: 1 }, [f('bulle', 9, 89, 'grow', { label: 'Dialogue' })]),
      ch('c', 'Plan de relance économique massif', 'Plan de reconstruction économique et de soutien à l\'emploi local', 'Répond à la crise sociale.', 'Coûte cher à l\'État.', -0.4, 'Aides à la reconstruction : le déficit augmente.', { eco: -1 }, { emploi: 1, cohesion: 1 }, [f('euro_flux', 30, 60, 'flow', { to: { x: 8, y: 92 } })]),
      ch('d', 'Renforcer l\'ordre public d\'abord', 'Renfort durable des forces de sécurité dans l\'archipel', 'Évite de nouvelles violences.', 'Peut être vu comme une provocation.', -0.15, 'Renforts de sécurité : le déficit augmente un peu.', { soc: 1 }, { services: 1, cohesion: -1 }, [f('policiers', 6, 93, 'grow')])
    ] }),
  ev({ id: 'v38_expulsions', kind: 'majeur', region: 'grand_est', sector: 'logement',
    title: 'Une famille expulsée pour loyers impayés',
    simple: "Dans une ville de l'Est, une famille est expulsée après des mois d'impayés. Les expulsions locatives atteignent un record. Faut-il changer les règles ?",
    expert: "Hausse des expulsions locatives avec concours de la force publique après la réforme dite anti-squat, qui a raccourci les délais de procédure.",
    context: "Les propriétaires doivent être payés ; mais une expulsion coûte aussi cher à la société (hébergement d'urgence, santé, école des enfants).",
    real: { date: '2025', place: 'Toute la France', fact: 'Les expulsions locatives avec intervention de la force publique ont atteint un niveau record, en hausse de plus d\'un quart sur un an.', figures: 'Environ 30 500 ménages expulsés avec la force publique sur l\'année.',
      sources: [src('Weka : les expulsions ont atteint un niveau record', 'https://www.weka.fr/actualite/logement/article/logement-les-expulsions-ont-atteint-un-niveau-record-en-2025-211929/'), src('Banque des territoires : expulsions record liées à la réforme', 'https://www.banquedesterritoires.fr/logement-les-expulsions-ont-atteint-un-niveau-record-en-2025-lie-la-reforme-kasbarian-berge')] },
    camera: { region: 'grand_est', x: 74, y: 22, zoom: 2 },
    fx: [f('immeuble', 74, 22, 'pulse'), f('policiers', 76, 23, 'appear', { delay: 0.3 }), f('personnage', 72, 23, 'appear', { delay: 0.5 })],
    choices: [
      ch('a', 'Fonds pour payer les impayés avant l\'expulsion', 'Fonds de solidarité logement renforcé pour prévenir les expulsions', 'Le propriétaire est payé, la famille reste.', 'Coûte au budget public.', -0.1, 'Fonds de prévention : le déficit augmente un peu.', { soc: -1 }, { cohesion: 2 }, [f('euro_flux', 73, 21, 'flow', { to: { x: 74, y: 22 } })]),
      ch('b', 'Garder les règles actuelles', 'Maintien des délais de procédure issus de la réforme', 'Propriétaires protégés.', 'Plus de familles à la rue.', 0.02, 'Aucune dépense nouvelle : le déficit baisse très peu.', { soc: 1 }, { cohesion: -1 }, [f('policiers', 76, 23, 'grow')]),
      ch('c', 'Relogement obligatoire avant toute expulsion', 'Obligation de proposer un relogement avant l\'expulsion', 'Plus personne à la rue.', 'Procédures plus longues pour les bailleurs.', -0.15, 'Places de relogement : le déficit augmente un peu.', { soc: -1 }, { cohesion: 1, services: 1 }, [f('maison', 72, 24, 'appear')])
    ] }),
  ev({ id: 'v38_sodas', kind: 'banal', region: 'national', sector: 'sante',
    title: 'Les sodas plus chers à cause de la taxe sucre',
    simple: "La taxe sur les boissons sucrées a augmenté : les sodas coûtent plus cher en rayon. Bonne mesure de santé ou impôt de plus ?",
    expert: "Relèvement de la taxe sur les boissons sucrées, répercutée sur les prix des sodas en grande surface.",
    context: "Moins de sucre, c'est moins d'obésité et de diabète ; mais la taxe pèse sur les petits budgets et les industriels réduisent parfois juste les quantités.",
    real: { date: '2025', place: 'Supermarchés de toute la France', fact: 'La hausse de la taxe sur les boissons sucrées a entraîné une hausse sensible des prix des sodas en rayon.', figures: 'Hausse des prix nettement supérieure à l\'inflation alimentaire moyenne.',
      sources: [src('LSA : la taxe sur les boissons sucrées fait monter les prix', 'https://www.lsa-conso.fr/cafe-chocolat-ces-produits-qui-tirent-les-prix-de-l-alimentaire-a-la-hausse-en-aout-barometre-exclusif,461848')] },
    camera: { region: 'national', x: 52, y: 45, zoom: 1.2 },
    fx: [f('supermarche', 52, 45, 'pulse'), f('etiquette', 54, 43, 'appear', { label: 'Soda +', delay: 0.3 }), f('personnage', 50, 46, 'appear', { delay: 0.5 })],
    choices: [
      ch('a', 'Augmenter encore la taxe', 'Nouveau relèvement de la taxe sur les boissons sucrées', 'Moins de sucre consommé.', 'Pèse sur les petits budgets.', 0.2, 'Taxe en plus : recettes, le déficit baisse un peu.', { soc: 1, eco: -1 }, { pouvoir_achat: -1, services: 1 }, [f('etiquette', 54, 43, 'grow', { label: 'Soda +' })]),
      ch('b', 'Garder la taxe telle quelle', 'Maintien du niveau actuel de la taxe', 'Stabilité pour tous.', 'Effet santé limité.', 0, null, { eco: 0 }, { cohesion: 0, services: 0 }, [f('supermarche', 52, 45, 'blink')]),
      ch('c', 'Supprimer la taxe, miser sur l\'éducation', 'Suppression de la taxe et campagnes d\'éducation nutritionnelle', 'Prix plus bas en rayon.', 'Moins de recettes, effet santé incertain.', -0.3, 'Recette supprimée : le déficit augmente.', { eco: 1 }, { pouvoir_achat: 1 }, [f('pieces', 52, 45, 'flow', { to: { x: 50, y: 46 } })])
    ] })
  ] });

/* ---------- Rappel d'une décision passée : un événement par semaine renvoie au dernier sujet proche déjà traité ---------- */
const past = G.days.flatMap(d => d.events.map(e => ({ e, day: d.day })));
W.forEach(w => {
  for (const e of w.events) {
    const p = [...past].reverse().find(x => x.e.sector === e.sector && x.e.kind === 'majeur');
    if (!p) continue;
    e.recall = p.e.choices.map(c => ({ event: p.e.id, choice: c.id, text: 'Sur un sujet proche (« ' + p.e.title + ' »), vous aviez choisi : ' + c.label + '.', ind: {}, budget: 0 }));
    break;
  }
  w.events.forEach(e => past.push({ e, day: 0 }));
});

/* ---------- Propositions de la semaine : 6 par semaine, jamais reproposées à moins de 6 semaines ---------- */
const last = {}; G.days.forEach(d => (d.offer || []).forEach(id => { last[id] = d.day; }));
const ids = G.programs.map(p => p.id);
W.forEach((w, i) => {
  const day = 21 + i, offer = [];
  const pool = ids.filter(id => !(last[id] && day - last[id] < 6)).sort((a, b) => (last[a] || 0) - (last[b] || 0));
  for(const id of pool){ if(offer.length >= 6) break; offer.push(id); last[id] = day; }
  w.day = day; w.offer = offer;
  G.days.push(Object.assign({ day }, w, { events: w.events }));
});
fs.writeFileSync(F, S.slice(0, A) + JSON.stringify(G, null, 1) + S.slice(B));
console.log('semaines :', G.days.length);
