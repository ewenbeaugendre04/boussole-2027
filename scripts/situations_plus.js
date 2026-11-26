// Ajoute une 4e situation à quelques semaines (A13, CSE, périscolaire, incendies). Usage : node scripts/situations_plus.js
const fs = require('fs'); const F = __dirname + '/../src/data/game_data.js';
const S = fs.readFileSync(F, 'utf8'); const A = S.indexOf('{'), B = S.lastIndexOf('}') + 1; const G = JSON.parse(S.slice(A, B));
const f = (obj, x, y, anim, o) => Object.assign({ obj, x, y, anim }, o || {});
const src = (label, url) => ({ label, url });
function ch(id, label, lx, plus, minus, budget, note, axes, ind, fx) { const c = { id, label, label_expert: lx, plus, minus, budget, axes, ind, fx }; if (note) c.budget_note = note; return c; }
const ADD = {
21: { id: 'v29_a13', kind: 'banal', region: 'ile_de_france', sector: 'transports',
  title: 'Le tunnel de l\'A13 fermé neuf mois',
  simple: "Un vieux tunnel de l'autoroute vers la Normandie ferme pour travaux pendant neuf mois. Bouchons, péages en plus pour le détour : les automobilistes râlent. Que faire ?",
  expert: "Fermeture du tube nord du tunnel de Saint-Cloud (A13), sens Paris-province, pour des travaux de confortement ; reports de trafic vers l'A14 à péage.",
  context: "Le tunnel a près d'un siècle : réparer est indispensable. Compenser les usagers coûte ; ne rien faire reporte les bouchons dans les petites rues.",
  real: { date: 'Du 16 novembre 2026 à fin août 2027', place: 'Saint-Cloud (Hauts-de-Seine)', fact: "Le tunnel de Saint-Cloud est fermé dans le sens Paris-province pour plus de neuf mois de travaux de confortement.", figures: 'Tube nord vieux de près d'un siècle.',
    sources: [src('Préfecture d\'Île-de-France : fermeture du tunnel de Saint-Cloud pour 9 mois', 'https://www.prefectures-regions.gouv.fr/ile-de-france/Actualites/Fermeture-du-tunnel-de-Saint-Cloud-sur-l-autoroute-A13-a-partir-du-16-novembre-pour-9-mois'), src('Assemblée nationale : question sur les péages du détour par l\'A14', 'https://questions.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE17635.pdf')] },
  camera: { region: 'ile_de_france', x: 50, y: 24, zoom: 2.2 },
  fx: [f('chantier_grue', 50, 24, 'pulse'), f('voiture', 47, 25, 'move', { to: { x: 49, y: 24 }, delay: 0.2 }), f('panneau', 51, 23, 'appear', { label: 'Tunnel fermé', delay: 0.5 })],
  choices: [
    ch('a', 'Péage gratuit sur le détour pendant les travaux', 'Gratuité temporaire du péage de l\'itinéraire de déviation', 'Les automobilistes ne paient pas plus.', 'L\'État compense le concessionnaire.', -0.05, 'Compensation du péage : faible coût, le déficit augmente très peu.', { eco: -1 }, { pouvoir_achat: 1 }, [f('pieces', 48, 23, 'appear')]),
    ch('b', 'Plus de trains et de bus pendant le chantier', 'Renfort temporaire des transports en commun vers l\'ouest', 'Moins de voitures sur la route.', 'Coûte aux finances publiques.', -0.05, 'Trains et bus en plus : faible coût, le déficit augmente très peu.', { env: 1 }, { co2: -1, services: 1 }, [f('train', 46, 24, 'move', { to: { x: 52, y: 24 } })]),
    ch('c', 'Travailler jour et nuit pour finir plus tôt', 'Chantier en continu pour réduire la durée de fermeture', 'Fermeture raccourcie.', 'Surcoût et nuisances pour les riverains.', -0.03, 'Travaux de nuit : surcoût, le déficit augmente très peu.', { eco: 0 }, { emploi: 1 }, [f('chantier_grue', 50, 24, 'grow')])
  ] },
24: { id: 'v32_cse', kind: 'banal', region: 'auvergne_rhone_alpes', sector: 'salaires',
  title: 'Plus d\'heures pour les élus du personnel ?',
  simple: "Dans une PME, l'élue du personnel dit manquer de temps pour défendre ses collègues. Une proposition de loi veut augmenter les heures qu'on lui accorde. Le patron craint pour la production. Que faire ?",
  expert: "Proposition de loi relevant le crédit d'heures de délégation des élus du comité social et économique (CSE), notamment de 10 à 16 heures par mois dans les entreprises de moins de 50 salariés.",
  context: "Des élus mieux armés améliorent le dialogue social ; mais ces heures sont payées par l'entreprise, ce qui pèse sur les petites structures.",
  real: { date: 'Mars 2026 (proposition de loi déposée)', place: 'Assemblée nationale', fact: "Une proposition de loi prévoit de relever les heures de délégation des élus du CSE, dans le cadre de la lutte contre les violences au travail.", figures: 'Minimum porté de 10 à 16 heures par mois dans les entreprises de moins de 50 salariés.',
    sources: [src('Éditions Tissot : vers de nouveaux leviers pour les représentants du personnel', 'https://www.editions-tissot.fr/actualite/representants-du-personnel-ce/violences-sexistes-et-sexuelles-au-travail-vers-de-nouveaux-leviers-pour-les-representants-du-personnel')] },
  camera: { region: 'auvergne_rhone_alpes', x: 66, y: 58, zoom: 2 },
  fx: [f('usine', 66, 58, 'pulse'), f('personnage', 68, 59, 'appear', { delay: 0.3 }), f('bulle', 65, 56, 'appear', { label: 'CSE', delay: 0.5 })],
  choices: [
    ch('a', 'Augmenter les heures de délégation', 'Relèvement légal du crédit d\'heures des élus du CSE', 'Élus mieux armés pour les salariés.', 'Coût pour les petites entreprises.', 0, null, { eco: -1 }, { cohesion: 1, emploi: -1 }, [f('bulle', 65, 56, 'grow', { label: 'CSE' })]),
    ch('b', 'Ne rien changer', 'Maintien du crédit d\'heures actuel', 'Pas de charge en plus.', 'Élus débordés dans certaines entreprises.', 0, null, { eco: 1 }, { cohesion: -1 }, [f('usine', 66, 58, 'blink')]),
    ch('c', 'Laisser chaque entreprise négocier', 'Crédit d\'heures fixé par accord d\'entreprise', 'S\'adapte à chaque situation.', 'Inégalités entre salariés.', 0, null, { eco: 1 }, { cohesion: 0, emploi: 1 }, [f('personnage', 68, 59, 'grow')])
  ] },
26: { id: 'v34_periscolaire', kind: 'banal', region: 'centre_val_de_loire', sector: 'ecole',
  title: 'Cours le matin, sport et ateliers l\'après-midi ?',
  simple: "Une convention de citoyens tirés au sort propose les matières classiques le matin et des activités pratiques, sportives et culturelles l'après-midi. Les parents sont partagés. Que faire ?",
  expert: "Propositions de la Convention citoyenne sur les temps de l'enfant : apprentissages théoriques le matin, pratiques l'après-midi, devoirs faits à l'école, activités gratuites.",
  context: "Les spécialistes du sommeil y sont favorables ; mais encadrer des activités l'après-midi coûte cher aux communes et demande du personnel.",
  real: { date: '23 novembre 2025 (rapport final)', place: 'Conseil économique, social et environnemental', fact: "La Convention citoyenne a adopté vingt propositions, dont une journée avec la théorie le matin et des activités pratiques, artistiques et sportives l'après-midi.", figures: 'Début des cours à 9 h, fin des cours vers 15 h 30, puis devoirs à l\'école et activités gratuites.',
    sources: [src('Vie publique : rapport de la Convention citoyenne sur les temps de l\'enfant', 'https://www.vie-publique.fr/rapport/301032-rapport-de-la-convention-citoyenne-sur-les-temps-de-lenfant-cese'), src('Banque des territoires : la convention veut bousculer l\'organisation scolaire', 'https://www.banquedesterritoires.fr/la-convention-citoyenne-sur-les-temps-de-lenfant-veut-bousculer-lorganisation-scolaire')] },
  camera: { region: 'centre_val_de_loire', x: 46, y: 38, zoom: 2 },
  fx: [f('ecole', 46, 38, 'pulse'), f('eleves', 48, 39, 'appear', { delay: 0.3 }), f('panneau', 44, 37, 'appear', { label: 'Après-midi : ateliers', delay: 0.5 })],
  choices: [
    ch('a', 'Généraliser avec des activités gratuites', 'Généralisation des activités périscolaires gratuites l\'après-midi', 'Égalité d\'accès au sport et à la culture.', 'Coût élevé pour l\'État et les communes.', -0.6, 'Animateurs et activités : le déficit augmente.', { soc: -1, eco: -1 }, { cohesion: 2, services: 1, emploi: 1 }, [f('eleves', 48, 39, 'grow')]),
    ch('b', 'Tester dans quelques villes volontaires', 'Expérimentation dans des communes volontaires', 'On mesure avant de généraliser.', 'Inégalités entre territoires.', -0.05, 'Expérimentation : faible coût, le déficit augmente très peu.', { soc: 0 }, { services: 1 }, [f('ecole', 46, 38, 'grow')]),
    ch('c', 'Garder les horaires actuels', 'Maintien de l\'organisation actuelle de la journée scolaire', 'Pas de chamboulement pour les familles.', 'Rythmes jugés inadaptés aux enfants.', 0, null, { soc: 1 }, { cohesion: -1 }, [f('panneau', 44, 37, 'appear', { label: 'Inchangé' })])
  ] },
30: { id: 'v38_incendies', kind: 'banal', region: 'paca', sector: 'securite',
  title: 'Des feux de forêt allumés volontairement',
  simple: "Pendant la canicule, des milliers d'hectares brûlent. Parmi les centaines de personnes interpellées, beaucoup sont soupçonnées d'avoir mis le feu exprès, dont des mineurs. Que faire ?",
  expert: "Vague d'incendies estivaux : interpellations pour mises à feu volontaires, débat sur les peines, la prévention et la surveillance des massifs.",
  context: "Neuf départs de feu sur dix sont d'origine humaine. Punir plus fort dissuade-t-il ? Surveiller les massifs et débroussailler coûte cher.",
  real: { date: 'Été 2026', place: 'Var, forêt de Fontainebleau et toute la France', fact: "Plus de 300 personnes ont été interpellées dans des enquêtes sur des départs de feu, dont deux tiers pour des mises à feu volontaires selon le ministre de l'Intérieur.", figures: '308 interpellations ; neuf départs de feu sur dix d\'origine humaine.',
    sources: [src('La Libre (AFP) : incendies en France, 308 interpellations', 'https://www.lalibre.be/dernieres-depeches/2026/07/31/feux-de-foret-incendies-en-france-308-interpellations-selon-le-ministre-de-linterieur-IUHY3L66VRCR3PKNAGLX2GOS3E/'), src('Europe 1 : un tiers des personnes interpellées sont mineures', 'https://www.europe1.fr/node/970473')] },
  camera: { region: 'paca', x: 77, y: 76, zoom: 2.2 },
  fx: [f('incendie', 77, 76, 'smoke'), f('foret', 75, 75, 'shake', { delay: 0.3 }), f('policiers', 79, 77, 'appear', { delay: 0.6 })],
  choices: [
    ch('a', 'Peines beaucoup plus lourdes pour les incendiaires', 'Aggravation des peines pour les incendies volontaires', 'Message dissuasif fort.', 'Effet incertain sur les pyromanes malades.', 0, null, { soc: 2 }, { cohesion: 1 }, [f('policiers', 79, 77, 'grow')]),
    ch('b', 'Drones et guetteurs dans les massifs', 'Surveillance renforcée des massifs en période à risque', 'Feux repérés plus tôt.', 'Coût chaque été.', -0.1, 'Surveillance : le déficit augmente un peu.', { soc: 1 }, { services: 1, co2: -1 }, [f('satellite', 76, 73, 'appear')]),
    ch('c', 'Débroussaillage et prévention auprès des jeunes', 'Obligations de débroussaillement et prévention scolaire', 'Agit sur les causes.', 'Résultats lents.', -0.05, 'Prévention : faible coût, le déficit augmente très peu.', { env: 1 }, { co2: -1, cohesion: 1 }, [f('foret', 75, 75, 'grow')])
  ] }
};
let n = 0;
for (const [day, e] of Object.entries(ADD)) { const d = G.days[+day - 1]; if (!d || d.events.some(x => x.id === e.id)) continue; d.events.push(e); n++; }
fs.writeFileSync(F, S.slice(0, A) + JSON.stringify(G, null, 1) + S.slice(B)); console.log(n + ' situations ajoutées');
