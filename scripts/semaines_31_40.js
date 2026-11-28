// Ajoute 10 semaines (31 à 40) : 31 situations sourcées. La répartition finale est faite ensuite par scripts/redistribuer.js.
// Usage : node scripts/semaines_31_40.js   (refuse de tourner si les semaines existent déjà)
const fs = require('fs'), F = __dirname + '/../src/data/game_data.js';
const S = fs.readFileSync(F, 'utf8'), A = S.indexOf('{'), B = S.lastIndexOf('}') + 1, G = JSON.parse(S.slice(A, B));
if (G.days.length > 30) { console.log('Déjà fait (' + G.days.length + ' semaines).'); process.exit(0); }

const POS = { hauts_de_france:[56,9], normandie:[37,19], ile_de_france:[52,24], grand_est:[75,22], bretagne:[15,30], pays_de_la_loire:[30,39], centre_val_de_loire:[46,38], bourgogne_franche_comte:[69,40], nouvelle_aquitaine:[35,62], auvergne_rhone_alpes:[67,60], occitanie:[50,80], paca:[79,77], corse:[93,90], national:[52,45] };
const src = (label, url) => ({ label, url });
const note = b => b > 0 ? 'Recette ou économie d\'environ ' + b + ' Md€ par an : le déficit baisse.' : 'Coût d\'environ ' + (-b) + ' Md€ par an : le déficit augmente.';
const ANIM = { chantier_grue:'grow', usine:'smoke', usine_fermee:'fade', centrale_gaz:'smoke', centrale_nucleaire:'smoke', barrage:'pulse', foule:'pulse', manifestants:'shake', eleves:'pulse', policiers:'pulse', voiture:'move', voiture_police:'move', camion:'move', avion:'move', train:'move', pieces:'rise', euro_flux:'rise', colis:'rise', missile:'rise', cyberattaque:'blink', cadenas:'pulse', loupe:'pulse', antenne:'pulse', parlement:'pulse', mairie:'pulse', ecole:'pulse', hopital:'pulse', commerce:'pulse', immeuble:'grow', maison:'grow', supermarche:'pulse', char:'move', personnage:'pulse', file_attente:'pulse', bulle:'appear', panneau:'appear', etiquette:'appear', drapeau_ue:'pulse', incendie:'smoke', foret:'pulse', champ:'pulse' };
const OFF = [[0,0],[3,1.5],[-3,1],[1.5,-2.5],[-1.5,2.5]];
function fx(obj, x, y, delay, label){ const a = ANIM[obj] || 'appear'; const o = { obj, x:+x.toFixed(1), y:+y.toFixed(1), anim:a }; if(a === 'move') o.to = { x:+(x + 4).toFixed(1), y:+(y + .6).toFixed(1) }; if(delay) o.delay = delay; if(label) o.label = label; return o; }
function E(o){
  const [cx, cy] = POS[o.region], nat = o.region === 'national';
  const e = { id:o.id, kind:o.kind || 'banal', region:o.region, sector:o.sector, title:o.title, simple:o.simple, expert:o.expert, context:o.context,
    real:{ date:o.date, place:o.place, fact:o.fact, figures:o.figures, sources:o.sources },
    camera:{ region:o.region, x:cx, y:cy, zoom: nat ? 1.2 : 2 },
    fx:o.objs.map((ob, i) => { const [obj, label] = Array.isArray(ob) ? ob : [ob]; const k = nat ? 2.2 : 1; return fx(obj, cx + OFF[i][0] * k, cy + OFF[i][1] * k, i * .3, label); }),
    choices:o.choices.map((c, i) => { const [label, lx, plus, minus, budget, axes, ind, ob] = c; const [obj, lab] = Array.isArray(ob) ? ob : [ob];
      const r = { id:'abcd'[i], label, label_expert:lx, plus, minus, budget, axes, ind, fx:[fx(obj, cx + (i - 1) * 2, cy - 1.5, 0, lab)] };
      if(budget) r.budget_note = note(budget); if(r.fx[0].anim === 'appear' && !lab) r.fx[0].anim = 'pulse'; return r; }) };
  return e;
}
const L = [];
// ---------- Économie, fiscalité ----------
L.push(E({ id:'v41_ia_emploi', kind:'majeur', region:'ile_de_france', sector:'salaires', title:'L\'IA va-t-elle prendre nos emplois ?',
  simple:"Les embauches de jeunes en CDI chutent dans les métiers où l'intelligence artificielle travaille déjà vite : rédaction, traduction, programmation. Que faire ?",
  expert:"Effets de l'IA générative sur l'emploi : recul des embauches dans les métiers exposés, débat sur la formation, la taxation des usages et le partage des gains de productivité.",
  context:"L'IA peut créer de la richesse et de nouveaux métiers, mais elle touche d'abord les premiers emplois des jeunes diplômés.",
  date:'Note de l\'Insee du 24 mars 2026 ; étude HEC - Banque de France', place:'France entière', fact:"Les embauches de jeunes en CDI dans les métiers les plus exposés à l'IA ont baissé de près de 30 % selon une étude d'HEC Paris et de la Banque de France.", figures:'Près de −30 % d\'embauches en CDI de jeunes dans les métiers les plus exposés.',
  sources:[src('HEC Paris : les embauches des jeunes dans les métiers exposés à l\'IA reculent', 'https://www.hec.edu/en/node/18834801'), src('Direction générale du Trésor : l\'IA, quels effets sur l\'emploi ?', 'https://www.tresor.economie.gouv.fr/Articles/2026/06/30/l-intelligence-artificielle-quels-effets-sur-l-emploi')],
  objs:['immeuble', 'antenne', 'file_attente'],
  choices:[
    ['Grand plan de formation aux métiers de l\'IA', 'Plan national de reconversion et de formation à l\'IA', 'Les salariés s\'adaptent.', 'Coûteux, résultats lents.', -1, { eco:-1 }, { emploi:1, services:1 }, 'ecole'],
    ['Taxer les entreprises qui remplacent des salariés par l\'IA', 'Contribution sur les gains de productivité liés à l\'automatisation', 'Finance la protection sociale.', 'Peut freiner l\'innovation.', 1, { eco:-2 }, { emploi:0, cohesion:1, souverainete:-1 }, 'pieces'],
    ['Laisser le marché s\'adapter', 'Pas d\'intervention publique spécifique sur l\'IA', 'Innovation rapide.', 'Les jeunes paient la transition.', 0, { eco:2 }, { emploi:-1, souverainete:1 }, 'antenne']
  ] }));
L.push(E({ id:'v41_holdings', kind:'majeur', region:'national', sector:'fiscalite', title:'Taxer les yachts et bijoux rangés dans des holdings',
  simple:"Certains très riches placent leurs bateaux, voitures de collection ou bijoux dans une société pour payer moins d'impôts. Une nouvelle taxe vise ces biens. Faut-il aller plus loin ?",
  expert:"Taxe de 20 % sur les actifs non professionnels (yachts, véhicules de collection, bijoux, vins) des holdings patrimoniales détenant au moins 5 M€ d'actifs.",
  context:"Pour les uns, une mesure de justice contre l'optimisation ; pour les autres, un impôt symbolique qui rapporte peu et fait fuir les capitaux.",
  date:'Loi de finances promulguée le 19 février 2026', place:'Parlement', fact:"La loi de finances a instauré une taxe de 20 % sur les biens somptuaires des holdings patrimoniales, bien plus étroite que le projet initial.", figures:'Projet initial : 1 à 1,5 Md€ de recettes attendues ; version finale restreinte.',
  sources:[src('Vie publique : ce que contient la loi de finances', 'https://www.vie-publique.fr/loi/300444-budget-de-letat-2026-projet-de-loi-de-finances-plf-2026'), src('Actu-Juridique : tout comprendre sur la taxe sur les holdings', 'https://www.actu-juridique.fr/fiscalite/fiscal-finances/tout-comprendre-sur-la-nouvelle-taxe-sur-les-holdings-patrimoniales/')],
  objs:['pieces', 'immeuble', ['etiquette', 'Holding']],
  choices:[
    ['Élargir la taxe aux placements financiers', 'Extension de la taxe aux actifs financiers des holdings', 'Rapporte nettement plus.', 'Risque de départs de capitaux.', 1.2, { eco:-2 }, { cohesion:1, souverainete:-1 }, 'pieces'],
    ['Garder la taxe telle qu\'elle est', 'Maintien de la taxe sur les seuls biens somptuaires', 'Stabilité fiscale.', 'Recette modeste.', 0.1, { eco:0 }, { cohesion:0 }, ['etiquette', '20 %']],
    ['Supprimer la taxe', 'Abrogation de la taxe sur les holdings patrimoniales', 'Rassure les investisseurs.', 'Message d\'injustice.', -0.1, { eco:2 }, { cohesion:-1 }, 'immeuble']
  ] }));
L.push(E({ id:'v41_cerveaux', region:'auvergne_rhone_alpes', sector:'ecole', title:'Nos chercheurs et ingénieurs partent à l\'étranger',
  simple:"De plus en plus de chercheurs et d'ingénieurs formés en France vont travailler ailleurs, où les salaires sont plus hauts. Que faire ?",
  expert:"Expatriation des talents : salaires de la recherche publique peu attractifs, concurrence internationale, retour sur investissement de la formation.",
  context:"Retenir les talents coûte cher ; les laisser partir, c'est financer leur formation pour d'autres pays.",
  date:'Rapport du Sénat ; questions écrites au printemps 2026', place:'Universités et grandes écoles', fact:"Près de 12 000 chercheurs français travaillaient à l'étranger, en hausse de plus de 15 % en dix ans.", figures:'Environ 40 000 ingénieurs partis après leurs études en dix ans.',
  sources:[src('Assemblée nationale : question écrite sur la fuite des cerveaux', 'https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE14749'), src('Ifri : mobilité des chercheurs et restrictions américaines', 'https://www.ifri.org/fr/notes/mobilite-des-chercheurs-et-restrictions-americaines-un-levier-pour-la-recherche-technologique')],
  objs:['ecole', 'avion', 'personnage'],
  choices:[
    ['Augmenter les salaires des chercheurs', 'Revalorisation des carrières de la recherche publique', 'Les talents restent.', 'Coût durable.', -0.8, { eco:-1 }, { souverainete:1, emploi:1 }, 'ecole'],
    ['Attirer les chercheurs étrangers', 'Programme d\'accueil de chercheurs internationaux', 'Profite de la concurrence mondiale.', 'Ne retient pas les nôtres.', -0.3, { eu:1 }, { souverainete:1 }, 'avion'],
    ['Avantage fiscal pour ceux qui reviennent', 'Régime fiscal favorable aux talents de retour', 'Peu coûteux.', 'Injuste pour ceux restés.', -0.1, { eco:1 }, { souverainete:1, cohesion:-1 }, 'pieces']
  ] }));
L.push(E({ id:'v41_exil', kind:'majeur', region:'national', sector:'fiscalite', title:'Faire payer ceux qui partent pour moins d\'impôts',
  simple:"Quand un très riche part vivre à l'étranger, il peut éviter l'impôt sur ses actions. Certains veulent une taxe de départ bien plus dure. Que faire ?",
  expert:"Durcissement de l'« exit tax » sur les plus-values latentes en cas de transfert du domicile fiscal à l'étranger (durée de conservation portée de 2 à 15 ans).",
  context:"Pour les uns, c'est une question de justice ; pour les autres, une taxe qui décourage l'installation des entrepreneurs.",
  date:'Amendements au budget, automne 2025', place:'Assemblée nationale', fact:"Un amendement restaurant l'ancienne version, plus dure, de l'exit tax a été adopté puis retiré du texte final.", figures:'Délai de surveillance : 2 ans aujourd\'hui, 15 ans proposés.',
  sources:[src('Légifiscal : le retour de l\'exit tax dans le débat budgétaire', 'https://www.legifiscal.fr/actualites-fiscales/4307-plf-2026-retour-exit-tax.html'), src('Euronews : pourquoi les hauts revenus quittent la France', 'https://fr.euronews.com/business/2026/07/24/pourquoi-les-hauts-revenus-quittent-la-france-et-ou-sinstallent-ils')],
  objs:['avion', 'pieces', ['bulle', 'Exil ?']],
  choices:[
    ['Durcir la taxe de départ (15 ans)', 'Rétablissement de l\'ancienne exit tax plus stricte', 'Moins d\'exil fiscal.', 'Entrepreneurs découragés.', 0.4, { eco:-2 }, { cohesion:1, souverainete:0 }, 'pieces'],
    ['Négocier un impôt minimum européen', 'Harmonisation fiscale européenne des grandes fortunes', 'Évite la concurrence entre voisins.', 'Long et incertain.', 0.05, { eu:2 }, { cohesion:1 }, 'drapeau_ue'],
    ['Ne rien changer', 'Maintien du régime actuel de l\'exit tax', 'Attractivité préservée.', 'Les départs continuent.', 0, { eco:2 }, { cohesion:-1 }, 'avion']
  ] }));
L.push(E({ id:'v41_alternants', region:'pays_de_la_loire', sector:'salaires', title:'Le salaire des apprentis baisse',
  simple:"Les apprentis paient désormais des cotisations sur une partie de leur salaire. Leur paie nette baisse, mais l'État économise. Que faire ?",
  expert:"Fin progressive des exonérations de cotisations et de CSG-CRDS sur la rémunération des apprentis au-delà de 50 % du Smic.",
  context:"L'apprentissage a explosé grâce aux aides, mais son coût public est élevé ; les jeunes concernés y perdent chaque mois.",
  date:'Depuis le 1er mars 2025 ; budget suivant', place:'France entière', fact:"Désormais, la part du salaire des apprentis au-delà de 50 % du Smic est soumise à la CSG-CRDS ; le budget suivant prévoyait d'aller plus loin.", figures:'Baisse estimée de 101 à 187 € net par mois pour les nouveaux contrats.',
  sources:[src('Assemblée nationale : question sur la CSG des apprentis', 'https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE10377'), src('L\'Étudiant : ce que prévoit le budget pour les apprentis', 'https://www.letudiant.fr/etudes/alternance/des-salaires-plus-bas-la-fin-de-laide-au-permis-de-conduire-ce-que-prevoit-le-projet-de-budget-pour-les-apprentis.html')],
  objs:['usine', 'eleves', 'pieces'],
  choices:[
    ['Rétablir l\'exonération totale', 'Rétablissement des exonérations sur le salaire des apprentis', 'Pouvoir d\'achat des jeunes.', 'Coût pour la Sécurité sociale.', -0.4, { eco:-1 }, { pouvoir_achat:1, emploi:1 }, 'eleves'],
    ['Garder les règles actuelles', 'Maintien du plafond d\'exonération à 50 % du Smic', 'Économies déjà votées.', 'Apprentis moins payés.', 0, { eco:1 }, { pouvoir_achat:-1 }, 'pieces'],
    ['Aller plus loin et supprimer l\'exonération', 'Suppression complète de l\'exonération pour les nouveaux contrats', 'Économies en plus.', 'Moins d\'attrait pour l\'apprentissage.', 0.3, { eco:2 }, { pouvoir_achat:-1, emploi:-1 }, 'usine']
  ] }));
L.push(E({ id:'v41_flat_tax', region:'national', sector:'fiscalite', title:'L\'impôt sur l\'épargne augmente',
  simple:"L'impôt unique sur les dividendes, les intérêts et les plus-values passe de 30 % à 31,4 %. Faut-il aller plus loin ou revenir en arrière ?",
  expert:"Hausse de 1,4 point de la CSG sur les revenus du capital, portant le prélèvement forfaitaire unique (« flat tax ») à 31,4 %.",
  context:"Taxer davantage le capital finance la Sécurité sociale ; mais l'épargne pourrait partir vers des placements moins taxés.",
  date:'Depuis le 1er janvier 2026', place:'France entière', fact:"La loi de financement de la Sécurité sociale a relevé la CSG sur les revenus du capital : la flat tax passe de 30 % à 31,4 %.", figures:'12,8 % d\'impôt + 18,6 % de prélèvements sociaux.',
  sources:[src('Service public : le prélèvement forfaitaire unique passe à 31,4 %', 'https://entreprendre.service-public.gouv.fr/actualites/A18796'), src('Actu-Juridique : la CSG en hausse sur les revenus du capital', 'https://www.actu-juridique.fr/fiscalite/fiscal-finances/la-csg-en-hausse-sur-les-revenus-du-capital/')],
  objs:['pieces', 'immeuble', ['etiquette', '31,4 %']],
  choices:[
    ['Monter la flat tax à 35 %', 'Relèvement du prélèvement forfaitaire unique à 35 %', 'Recettes en plus.', 'Épargnants pénalisés.', 1.5, { eco:-2 }, { cohesion:1, emploi:-1 }, 'pieces'],
    ['Revenir à 30 %', 'Retour du prélèvement forfaitaire unique à 30 %', 'Épargne encouragée.', 'Recette perdue.', -0.8, { eco:2 }, { pouvoir_achat:1, cohesion:-1 }, 'immeuble'],
    ['Garder 31,4 %', 'Maintien du taux actuel', 'Stabilité.', 'Débat non tranché.', 0, { eco:0 }, {}, ['etiquette', 'Stable']]
  ] }));
L.push(E({ id:'v41_or_bitcoin', region:'national', sector:'fiscalite', title:'Des bitcoins dans les réserves de l\'État ?',
  simple:"Des députés proposent que l'État achète des bitcoins, comme il garde de l'or. D'autres trouvent cela trop risqué. Que faire ?",
  expert:"Proposition de loi créant une réserve stratégique de bitcoins (2 % de l'offre mondiale en sept à huit ans) aux côtés des réserves d'or de la Banque de France.",
  context:"Pour les uns, un « or numérique » qui protège de l'inflation ; pour les autres, un actif très instable et énergivore.",
  date:'Proposition de loi déposée en 2025', place:'Assemblée nationale', fact:"Une proposition de loi vise à créer un établissement public chargé d'acquérir 2 % de tous les bitcoins existants.", figures:'Réserves d\'or de la Banque de France : environ 2 400 tonnes.',
  sources:[src('Assemblée nationale : proposition de loi sur une réserve de bitcoins', 'https://www.assemblee-nationale.fr/dyn/17/textes/l17b2022_proposition-loi.pdf'), src('Cryptoast : ce que prévoit la proposition de loi', 'https://cryptoast.fr/reserve-francaise-bitcoins-cryptos-pea-stablecoins-euro-eric-ciotti-presente-proposition-loi-largement-pro-crypto/')],
  objs:['cadenas', 'pieces', ['bulle', 'Bitcoin ?']],
  choices:[
    ['Créer une petite réserve de bitcoins', 'Constitution progressive d\'une réserve publique de bitcoins', 'Pari sur un actif en hausse.', 'Risque de pertes fortes.', -0.5, { eco:2 }, { souverainete:1, co2:1 }, 'cadenas'],
    ['Garder seulement de l\'or', 'Maintien des réserves en or et devises classiques', 'Prudence.', 'Rate une éventuelle hausse.', 0, { eco:0 }, { souverainete:0 }, 'pieces'],
    ['Encadrer plutôt les cryptomonnaies', 'Renforcement de la régulation des crypto-actifs', 'Protège les épargnants.', 'Secteur freiné.', 0, { eu:1 }, { cohesion:1 }, 'loupe']
  ] }));
L.push(E({ id:'v41_convention_fp', region:'ile_de_france', sector:'fiscalite', title:'150 citoyens tirés au sort pour réduire le déficit',
  simple:"Une convention de 150 citoyens tirés au sort va réfléchir à la façon de réduire le déficit et la dette. Faut-il suivre leurs propositions ?",
  expert:"Convention citoyenne sur les finances publiques organisée par le CESE en autosaisine : priorités de dépenses, recettes et trajectoire de la dette.",
  context:"Faire participer les citoyens peut rendre les efforts plus acceptables ; mais le dernier mot revient au Parlement élu.",
  date:'Tirage au sort lancé le 23 octobre 2026 ; travaux jusqu\'en mars 2027', place:'Conseil économique, social et environnemental', fact:"Pour la première fois, le CESE organise de lui-même une Convention citoyenne sur les finances publiques, avec 150 citoyens tirés au sort.", figures:'150 participants, plusieurs week-ends de travail.',
  sources:[src('Vie publique : la Convention citoyenne sur les finances publiques se prépare', 'https://www.vie-publique.fr/en-bref/305180-la-convention-citoyenne-sur-les-finances-publiques-se-prepare'), src('CESE : lancement de la Convention citoyenne sur les finances publiques', 'https://www.lecese.fr/print/pdf/node/20817')],
  objs:['parlement', 'foule', ['bulle', 'Budget']],
  choices:[
    ['S\'engager à soumettre leurs idées au vote', 'Engagement à soumettre les propositions au Parlement', 'Démocratie renforcée.', 'Promesse difficile à tenir.', 0, { soc:-1 }, { cohesion:2 }, 'parlement'],
    ['Les écouter, sans engagement', 'Prise en compte consultative des recommandations', 'Liberté du gouvernement.', 'Déception possible.', 0, { soc:0 }, { cohesion:0 }, ['bulle', 'Avis']],
    ['Préférer les experts', 'Confier la trajectoire budgétaire à des experts', 'Décisions techniques.', 'Moins d\'adhésion.', 0, { soc:1 }, { cohesion:-1 }, 'loupe']
  ] }));
// ---------- Numérique, industrie, défense ----------
L.push(E({ id:'v41_usbc', region:'national', sector:'numerique', title:'Un seul chargeur pour tous les ordinateurs',
  simple:"Les ordinateurs portables neufs doivent maintenant se recharger avec un câble USB-C, comme les téléphones. Faut-il aller plus loin ?",
  expert:"Extension aux ordinateurs portables du chargeur universel européen (USB-C et protocole commun), avec vente possible sans bloc secteur.",
  context:"Moins de déchets et d'argent dépensé en chargeurs ; mais les règles européennes peuvent freiner l'innovation.",
  date:'Depuis le 28 avril 2026', place:'Union européenne', fact:"Désormais, tout ordinateur portable neuf vendu dans l'Union doit pouvoir se recharger en USB-C.", figures:'Obligation déjà en vigueur pour téléphones, tablettes et écouteurs.',
  sources:[src('Service public : appareils devant utiliser le chargeur universel', 'https://entreprendre.service-public.gouv.fr/vosdroits/F38511'), src('Que Choisir : le chargeur universel désormais obligatoire', 'https://www.quechoisir.org/actualite-ordinateurs-portables-le-chargeur-universel-desormais-obligatoire-n176022/')],
  objs:['drapeau_ue', 'commerce', 'colis'],
  choices:[
    ['Étendre aux autres appareils', 'Extension du chargeur commun à d\'autres équipements', 'Encore moins de déchets.', 'Contraintes pour les fabricants.', 0, { eu:2, env:1 }, { co2:-1, pouvoir_achat:1 }, 'drapeau_ue'],
    ['Imposer aussi des batteries remplaçables', 'Obligation de batteries amovibles et réparables', 'Appareils plus durables.', 'Appareils plus épais.', 0, { env:2 }, { co2:-1 }, 'colis'],
    ['S\'en tenir à la règle actuelle', 'Pas d\'extension du chargeur universel', 'Stabilité pour l\'industrie.', 'Gaspillage restant.', 0, { eu:-1 }, {}, 'commerce']
  ] }));
L.push(E({ id:'v41_mistral', region:'ile_de_france', sector:'numerique', title:'Une IA française pour rester indépendants ?',
  simple:"Une entreprise française d'IA vient de lever 3 milliards d'euros. Faut-il que l'État l'aide et utilise ses outils plutôt que ceux des géants américains ?",
  expert:"Souveraineté numérique : commande publique, centres de calcul et participation de l'État au développement d'un modèle d'IA européen.",
  context:"Préférer une IA nationale protège nos données ; mais l'État ne doit pas favoriser une entreprise au détriment de la concurrence.",
  date:'Levée de fonds du 8 septembre 2026', place:'Paris et Bruyères-le-Châtel (Essonne)', fact:"Mistral AI a levé 3 milliards d'euros, la plus grosse levée de l'histoire de la tech européenne, et vise 1 GW de calcul.", figures:'Valorisation de plus de 21 Md€.',
  sources:[src('Mistral AI : annonce de la levée de fonds', 'https://mistral.ai/fr/news/mistral-makes-sovereign-open-weight-ai-to-frontier/'), src('Clubic : Mistral AI, souveraine jusqu\'à quel point ?', 'https://www.clubic.com/dossier-608152-mistral-ai-souverainete.html')],
  objs:['antenne', 'immeuble', 'cadenas'],
  choices:[
    ['Réserver les marchés publics à l\'IA européenne', 'Préférence européenne dans la commande publique d\'IA', 'Données protégées.', 'Moins de choix, prix plus hauts.', -0.1, { eu:2 }, { souverainete:2 }, 'drapeau_ue'],
    ['Financer de grands centres de calcul', 'Investissement public dans les infrastructures de calcul', 'Capacité nationale.', 'Électricité et coût.', -1, { eco:-1 }, { souverainete:1, emploi:1, co2:1 }, 'centrale_nucleaire'],
    ['Laisser jouer la concurrence', 'Neutralité de l\'État entre fournisseurs d\'IA', 'Meilleur prix.', 'Dépendance aux géants étrangers.', 0, { eco:2 }, { souverainete:-1 }, 'antenne']
  ] }));
L.push(E({ id:'v41_rafale', kind:'majeur', region:'nouvelle_aquitaine', sector:'defense', title:'Pas assez d\'avions de chasse pour nos armées ?',
  simple:"Les usines de Rafale tournent à plein pour l'étranger, mais l'armée de l'Air n'a plus assez d'avions. Faut-il en commander davantage ?",
  expert:"Format de l'aviation de chasse sous la cible de la loi de programmation, livraisons prioritaires à l'export, avenir du successeur du Rafale.",
  context:"Commander des avions coûte des milliards ; vendre à l'étranger rapporte et fait vivre l'industrie.",
  date:'Débats budgétaires de l\'automne 2026', place:'Mérignac (Gironde) et bases aériennes', fact:"L'armée de l'Air devrait compter 182 avions de combat en fin d'année, sous le plancher de 185 fixé par la loi.", figures:'Cible : 225 avions de chasse (Air et Marine).',
  sources:[src('L\'Essentiel de l\'éco : l\'export d\'abord, l\'armée de l\'Air ensuite', 'https://lessentieldeleco.fr/9330-rafale-lexport-dabord-larmee-de-lair-ensuite/'), src('Assemblée nationale : amendement sur le format de la chasse', 'https://www.assemblee-nationale.fr/dyn/17/amendements/1906C/CION_FIN/CF855.rtf')],
  objs:['avion', 'usine', 'pieces'],
  choices:[
    ['Commander 30 Rafale de plus', 'Commande supplémentaire de 30 Rafale pour les armées', 'Armée renforcée.', 'Plus de 3 Md€.', -0.8, { soc:1 }, { souverainete:2, emploi:1 }, 'avion'],
    ['Donner la priorité à l\'export', 'Priorité aux livraisons à l\'exportation', 'Recettes et emplois.', 'Armée en attente.', 0.3, { eco:1 }, { emploi:1, souverainete:-1 }, 'pieces'],
    ['Lancer seul l\'avion du futur', 'Programme national de chasseur de nouvelle génération', 'Indépendance.', 'Très coûteux.', -1, { eu:-1 }, { souverainete:2 }, 'usine']
  ] }));
L.push(E({ id:'v41_minerai', region:'auvergne_rhone_alpes', sector:'energie', title:'Ouvrir une mine de lithium en France ?',
  simple:"Une grande mine de lithium, métal des batteries, pourrait ouvrir dans l'Allier. Elle créerait des emplois, mais des habitants craignent pour l'eau et la nature. Que faire ?",
  expert:"Projet minier d'intérêt national majeur : extraction souterraine de mica lithinifère, usine de conversion, impacts sur l'eau et après-mine.",
  context:"Produire en France réduit la dépendance à la Chine ; mais une mine reste une industrie lourde pour un territoire.",
  date:'Débat public de 2024 ; décret d\'intérêt national majeur', place:'Échassières (Allier)', fact:"La mine de lithium d'Échassières a été classée « d'intérêt national majeur » ; elle pourrait être exploitée pendant 50 ans.", figures:'34 000 tonnes d\'hydroxyde de lithium par an visées.',
  sources:[src('Banque des territoires : l\'État appelé à clarifier sa stratégie minière', 'https://www.banquedesterritoires.fr/mine-de-lithium-dans-lallier-letat-appele-clarifier-sa-strategie-nationale'), src('CNDP : bilan du débat public sur la mine de lithium', 'https://debatpublic.fr/sites/default/files/2024-09/CNDP-Lithium-Bilan.pdf')],
  objs:['chantier_grue', 'camion', 'foret'],
  choices:[
    ['Accélérer la mine', 'Accélération des autorisations du projet minier', 'Souveraineté industrielle.', 'Craintes locales.', -0.05, { eco:1, env:-1 }, { souverainete:2, emploi:1, co2:-1 }, 'chantier_grue'],
    ['Conditionner à des garanties sur l\'eau', 'Autorisation sous conditions environnementales strictes', 'Compromis.', 'Retards et surcoûts.', -0.05, { env:1 }, { souverainete:1, cohesion:1 }, 'loupe'],
    ['Renoncer et importer', 'Abandon du projet au profit des importations', 'Nature préservée ici.', 'Dépendance à l\'étranger.', 0, { env:1 }, { souverainete:-2 }, 'camion']
  ] }));
L.push(E({ id:'v41_cyber_auchan', region:'hauts_de_france', sector:'numerique', title:'Encore une enseigne piratée',
  simple:"Une grande enseigne de supermarchés est piratée pour la deuxième fois en moins d'un an : les données de centaines de milliers de clients circulent. Que faire ?",
  expert:"Multiplication des fuites de données dans le commerce : obligations de sécurité, sanctions de la CNIL, risque d'hameçonnage pour les clients.",
  context:"Sanctionner pousse les entreprises à se protéger ; mais les petites structures n'ont pas les moyens des grands groupes.",
  date:'Attaques de novembre 2024 et août 2025', place:'Villeneuve-d\'Ascq (Nord) et toute la France', fact:"Auchan a annoncé une nouvelle cyberattaque touchant les comptes de fidélité de centaines de milliers de clients.", figures:'Plus de 500 000 clients touchés lors de la première attaque.',
  sources:[src('Presse-citron : le groupe Auchan victime d\'une cyberattaque massive', 'https://www.presse-citron.net/le-groupe-auchan-victime-dune-cyberattaque-massive-des-centaines-de-milliers-de-clients-touches-quelles-donnees-ont-ete-volees/'), src('La Libre (AFP) : 500 000 clients concernés par une fuite', 'https://www.lalibre.be/belgique/societe/2024/11/19/attention-si-vous-avez-fait-vos-courses-en-france-recemment-500000-clients-concernes-par-une-fuite-de-donnees-personnelles-P4BRXRZ65BBNXDDUL6W7FEMOGI/')],
  objs:['supermarche', 'cyberattaque', 'cadenas'],
  choices:[
    ['Amendes beaucoup plus lourdes', 'Renforcement des sanctions en cas de fuite de données', 'Entreprises responsabilisées.', 'Coût pour elles.', 0.05, { soc:1 }, { cohesion:1 }, 'cadenas'],
    ['Aider les PME à se protéger', 'Aide publique à la cybersécurité des petites entreprises', 'Protège tout le tissu économique.', 'Coût public.', -0.2, { eco:-1 }, { souverainete:1, emploi:1 }, 'antenne'],
    ['Indemniser automatiquement les clients', 'Indemnisation forfaitaire des victimes de fuites', 'Justice pour les clients.', 'Risque de recours en masse.', 0, { eco:-1 }, { pouvoir_achat:1 }, 'pieces']
  ] }));
// ---------- Sécurité, justice ----------
L.push(E({ id:'v41_legitime', kind:'majeur', region:'ile_de_france', sector:'securite', title:'Présumer légal l\'usage de l\'arme par les policiers ?',
  simple:"Une proposition de loi veut qu'un policier qui tire soit présumé avoir agi légalement, sauf preuve contraire. Plus de 700 000 personnes ont signé contre. Que faire ?",
  expert:"Présomption d'usage légal des armes par les forces de l'ordre dans les cinq cas déjà prévus par la loi, renversable par toute preuve contraire.",
  context:"Pour les uns, une protection pour des agents exposés ; pour les autres, une inversion de la charge de la preuve et un risque pour la confiance.",
  date:'Adoptée par l\'Assemblée le 7 juillet 2026 ; au Sénat', place:'Parlement', fact:"L'Assemblée a adopté une présomption d'usage légal des armes ; une pétition contre a recueilli plus de 700 000 signatures.", figures:'717 627 signatures recueillies par la pétition.',
  sources:[src('Sénat : rapport sur la proposition de loi', 'https://www.senat.fr/rap/l26-167/l26-1671.pdf'), src('Le Club des juristes : ce que changerait la présomption', 'https://www.leclubdesjuristes.com/societe/ce-que-changerait-la-presomption-de-legitime-defense-pour-les-forces-de-lordre-16913/')],
  objs:['policiers', 'parlement', 'manifestants'],
  choices:[
    ['Adopter la présomption', 'Instauration de la présomption d\'usage légal des armes', 'Agents mieux protégés.', 'Défiance d\'une partie de la population.', 0, { soc:2 }, { cohesion:-1, services:1 }, 'policiers'],
    ['Mieux former et équiper plutôt', 'Formation au tir et caméras-piétons généralisées', 'Sécurité pour tous.', 'Coût.', -0.2, { soc:0 }, { cohesion:1, services:1 }, 'voiture_police'],
    ['Garder le droit actuel', 'Maintien du cadre légal actuel', 'Équilibre existant.', 'Policiers inquiets.', 0, { soc:-1 }, { cohesion:0 }, 'parlement'],
    ['Limiter le vote à un an d\'essai', 'Expérimentation d\'un an avec évaluation', 'On mesure les effets.', 'Débat repoussé.', 0.01, { soc:1 }, { cohesion:0 }, 'loupe']
  ] }));
L.push(E({ id:'v41_obtemperer', region:'paca', sector:'securite', title:'Refus d\'obtempérer et rodéos filmés pour les réseaux',
  simple:"Des conducteurs refusent de s'arrêter aux contrôles et des rodéos à moto sont filmés pour les réseaux sociaux. Les refus d'obtempérer repartent à la hausse. Que faire ?",
  expert:"Hausse des refus d'obtempérer routiers et des rodéos motorisés : peines planchers, confiscation des véhicules, surveillance des réseaux sociaux.",
  context:"Punir plus dissuade-t-il ? Les poursuites à grande vitesse sont aussi dangereuses pour les passants.",
  date:'Bilan statistique de l\'année 2025', place:'Bouches-du-Rhône et toute la France', fact:"Les refus d'obtempérer routiers ont augmenté de 11 % en un an, avec 28 200 cas enregistrés.", figures:'Environ 77 refus d\'obtempérer par jour ; 22 % aggravés.',
  sources:[src('Caradisiac : forte progression des refus d\'obtempérer', 'https://www.caradisiac.com/le-nombre-de-refus-d-obtemperer-progresse-fortement-en-2025-sur-les-routes-francaises-220147.htm'), src('Banque des territoires : les refus de contrôle routier en forte hausse', 'https://www.banquedesterritoires.fr/les-refus-de-controle-routier-en-forte-augmentation')],
  objs:['voiture', 'voiture_police', 'antenne'],
  choices:[
    ['Confisquer et détruire les véhicules', 'Confiscation systématique des véhicules utilisés', 'Sanction concrète.', 'Contentieux nombreux.', 0.02, { soc:2 }, { cohesion:0 }, 'voiture_police'],
    ['Surveiller et retirer les vidéos', 'Retrait des vidéos et poursuite de leurs auteurs', 'Coupe l\'effet vitrine.', 'Moyens limités.', -0.05, { soc:1 }, { cohesion:1 }, 'loupe'],
    ['Prévention et terrains de moto encadrés', 'Création de circuits et actions de prévention', 'Agit sur les causes.', 'Résultats lents.', -0.05, { soc:-1 }, { cohesion:1 }, 'personnage']
  ] }));
L.push(E({ id:'v41_narco_jobbeurs', kind:'majeur', region:'paca', sector:'securite', title:'Des mineurs recrutés sur les messageries par les trafiquants',
  simple:"Des réseaux de drogue recrutent des adolescents sur les messageries pour faire le guet ou vendre, parfois loin de chez eux. Que faire ?",
  expert:"Recrutement de « jobbeurs » mineurs via les messageries chiffrées : nouveau délit de recrutement en ligne, parquet national anticriminalité organisée, prise en charge éducative.",
  context:"Il faut frapper les réseaux, mais ces adolescents sont aussi des victimes à sortir de l'emprise.",
  date:'Loi du 13 juin 2025 ; nouveau parquet ouvert le 5 janvier 2026', place:'Marseille, Toulon, Nice', fact:"Désormais, recruter des mineurs en ligne pour le trafic est puni ; un parquet national spécialisé suit déjà des centaines de dossiers.", figures:'200 000 personnes impliquées dans le narcotrafic, dont environ 10 000 mineurs selon le Sénat.',
  sources:[src('Ministère de la Justice : protocole contre le narcotrafic de mineurs', 'https://www.justice.gouv.fr/node/19073'), src('Gendarmerie : comment les réseaux recrutent des jeunes en ligne', 'https://www.gendarmerie.interieur.gouv.fr/unpj/actualites/cryptorapts-comment-les-reseaux-criminels-recrutent-des-jeunes-sur-les-reseaux-sociaux')],
  objs:['personnage', 'antenne', 'policiers'],
  choices:[
    ['Obliger les messageries à coopérer', 'Obligations de coopération judiciaire des messageries chiffrées', 'Réseaux démantelés plus vite.', 'Atteinte possible à la vie privée.', 0, { soc:1 }, { cohesion:1, souverainete:1 }, 'antenne'],
    ['Plus d\'éducateurs pour sortir les jeunes', 'Renfort de la protection judiciaire de la jeunesse', 'Moins de récidive.', 'Coût.', -0.2, { soc:-1 }, { cohesion:1, services:1 }, 'personnage'],
    ['Saisir les biens des trafiquants', 'Saisies et confiscations des avoirs criminels', 'Frappe le portefeuille.', 'Procédures longues.', 0.3, { soc:1 }, { cohesion:1 }, 'pieces']
  ] }));
L.push(E({ id:'v41_proto', region:'hauts_de_france', sector:'sante', title:'Le gaz hilarant au volant',
  simple:"Des jeunes inhalent du protoxyde d'azote, parfois en conduisant. Les accidents graves explosent. Faut-il en faire un délit ?",
  expert:"Usage détourné du protoxyde d'azote : interdiction de vente aux particuliers, délit d'inhalation hors cadre médical, délit de conduite sous son emprise.",
  context:"Interdire protège la santé et la route ; mais criminaliser des jeunes consommateurs ne règle pas l'addiction.",
  date:'Projet de loi présenté le 25 mars 2026', place:'Lille, Nord et Île-de-France', fact:"Plus de 450 accidents routiers graves liés au protoxyde d'azote ont été recensés en un an, quarante fois plus qu'il y a six ans.", figures:'Inhalation : 1 an de prison et 3 750 € d\'amende proposés.',
  sources:[src('Info.gouv : protoxyde d\'azote, quels dangers et que dit la loi ?', 'https://www.info.gouv.fr/actualite/protoxyde-d-azote-quels-dangers-et-que-dit-la-loi'), src('Maire-info : une nouvelle tentative des sénateurs', 'https://maire-info.com/protoxyde-dazote-une-nouvelle-tentative-des-senateurs-pour-venir-au-secours-des-maires-article2-30525')],
  objs:['voiture', 'ambulance', ['panneau', 'Danger']],
  choices:[
    ['Créer un délit de conduite sous gaz', 'Délit spécifique de conduite sous protoxyde d\'azote', 'Routes plus sûres.', 'Contrôle difficile.', 0.01, { soc:1 }, { services:1 }, 'voiture_police'],
    ['Interdire toute vente aux particuliers', 'Vente réservée aux seuls professionnels', 'Coupe l\'accès.', 'Marché noir possible.', 0, { soc:1 }, { cohesion:1 }, 'cadenas'],
    ['Prévention dans les lycées', 'Campagnes de prévention et de soins', 'Agit sur l\'usage.', 'Effet lent.', -0.05, { soc:-1 }, { services:1 }, 'ecole']
  ] }));
L.push(E({ id:'v41_prudhommes', region:'ile_de_france', sector:'securite', title:'Deux ans d\'attente pour être jugé aux prud\'hommes',
  simple:"Un salarié licencié peut attendre deux ans un jugement aux prud'hommes, cinq ans avec l'appel. La justice manque de greffiers et de juges. Que faire ?",
  expert:"Engorgement des juridictions civiles et prud'homales : délais de jugement excessifs, manque de greffiers, recours à la médiation et au numérique.",
  context:"Recruter coûte ; simplifier les procédures peut réduire les droits des justiciables.",
  date:'Plan d\'action de la Chancellerie, circulaire du 31 décembre 2025', place:'Créteil et Île-de-France', fact:"Au conseil de prud'hommes de Créteil, une affaire prend environ deux ans en première instance et jusqu'à cinq ans avec l'appel.", figures:'Environ 100 000 affaires par an pour 211 conseils de prud\'hommes.',
  sources:[src('Assemblée nationale : question sur les délais aux prud\'hommes', 'https://questions.assemblee-nationale.fr/q17/17-10575QE.htm'), src('Ministère de la Justice : circulaire sur les délais prud\'homaux', 'https://www.justice.gouv.fr/node/19467')],
  objs:['mairie', 'file_attente', 'personnage'],
  choices:[
    ['Recruter greffiers et juges', 'Recrutement massif de greffiers et de magistrats', 'Délais réduits.', 'Coût durable.', -0.3, { eco:-1 }, { services:2 }, 'personnage'],
    ['Médiation obligatoire avant le procès', 'Tentative de médiation préalable obligatoire', 'Désengorge vite.', 'Pression sur les salariés.', 0, { eco:1 }, { services:1, cohesion:-1 }, ['bulle', 'Médiation']],
    ['Audiences et dossiers numériques', 'Dématérialisation des procédures judiciaires', 'Gain de temps.', 'Fracture numérique.', -0.1, { eco:0 }, { services:1 }, 'antenne']
  ] }));
L.push(E({ id:'v41_mineurs', kind:'majeur', region:'occitanie', sector:'securite', title:'Juger plus vite et plus durement les mineurs ?',
  simple:"Une loi voulait juger les mineurs récidivistes de 16 ans en comparution immédiate. Le Conseil constitutionnel l'a largement censurée. Faut-il y revenir ?",
  expert:"Justice pénale des mineurs : comparution immédiate dès 16 ans, atténuation de l'excuse de minorité, responsabilité des parents, primauté de l'éducatif.",
  context:"Pour les uns, une réponse rapide aux violences ; pour les autres, la prison des jeunes nourrit la récidive.",
  date:'Loi du 23 juin 2025, censurée en partie le 19 juin 2025', place:'Conseil constitutionnel', fact:"Le Conseil constitutionnel a censuré la comparution immédiate des mineurs et la dérogation à l'excuse de minorité.", figures:'Comparution immédiate visée : mineurs de 16 ans et plus encourant 3 ans de prison.',
  sources:[src('Vie publique : loi visant à renforcer l\'autorité de la justice à l\'égard des mineurs', 'https://www.vie-publique.fr/loi/297360-justice-penale-des-mineurs-loi-attal-du-23-juin-2025'), src('Banque des territoires : une loi grandement amputée par le Conseil constitutionnel', 'https://www.banquedesterritoires.fr/publication-dune-loi-attal-sur-la-justice-des-mineurs-grandement-amputee-par-le-conseil')],
  objs:['mairie', 'policiers', 'eleves'],
  choices:[
    ['Réviser la Constitution pour durcir', 'Révision constitutionnelle permettant la comparution immédiate', 'Réponse plus rapide.', 'Rupture avec la tradition éducative.', 0, { soc:2 }, { cohesion:-1 }, 'parlement'],
    ['Plus de centres éducatifs fermés', 'Création de places en centres éducatifs fermés', 'Encadrement strict.', 'Coût élevé.', -0.3, { soc:1 }, { cohesion:1 }, 'immeuble'],
    ['Miser sur la prévention et les familles', 'Renforcement de la prévention et du soutien parental', 'Agit en amont.', 'Effets lents.', -0.2, { soc:-1 }, { cohesion:1, services:1 }, 'eleves'],
    ['Juger plus vite sans changer les règles', 'Audiences accélérées avec juges des enfants renforcés', 'Rapide et légal.', 'Besoin de magistrats.', 0.01, { soc:0 }, { services:1 }, 'personnage']
  ] }));
// ---------- Logement, transports, énergie ----------
L.push(E({ id:'v41_bureaux', region:'ile_de_france', sector:'logement', title:'Transformer les bureaux vides en logements',
  simple:"Avec le télétravail, des millions de mètres carrés de bureaux sont vides, alors que les logements manquent. Une loi facilite leur transformation. Faut-il aller plus loin ?",
  expert:"Loi facilitant la transformation des bureaux en logements : dérogations au PLU, permis réversible, vote simplifié en copropriété, incitations fiscales.",
  context:"Transformer coûte cher et prend du temps ; obliger les propriétaires peut décourager l'investissement.",
  date:'Loi du 16 juin 2025', place:'Île-de-France et grandes métropoles', fact:"La loi permet aux maires de déroger aux règles d'urbanisme pour transformer bureaux et locaux vides en logements.", figures:'4,5 millions de m² de bureaux vacants en Île-de-France.',
  sources:[src('Vie publique : loi du 16 juin 2025 sur la transformation des bureaux', 'https://www.vie-publique.fr/loi/292874-proposition-de-loi-faciliter-transformation-de-bureaux-en-logements'), src('Banque des territoires : présentation de la loi', 'https://www.banquedesterritoires.fr/transformation-des-bureaux-en-logements-presentation-de-la-loi-du-16-juin-2025')],
  objs:['immeuble', 'chantier_grue', 'maison'],
  choices:[
    ['Taxer les bureaux vides', 'Taxe renforcée sur les bureaux vacants', 'Incite à transformer.', 'Pression sur les propriétaires.', 0.2, { eco:-1 }, { cohesion:1 }, 'pieces'],
    ['Subventionner les transformations', 'Aide publique aux opérations de transformation', 'Logements plus vite.', 'Coût public.', -0.4, { eco:-1 }, { pouvoir_achat:1, emploi:1 }, 'chantier_grue'],
    ['Laisser faire la loi actuelle', 'Application de la loi sans mesure nouvelle', 'Stabilité.', 'Rythme lent.', 0, { eco:1 }, {}, 'immeuble']
  ] }));
L.push(E({ id:'v41_takata', kind:'majeur', region:'national', sector:'transports', title:'Des airbags dangereux : 1,7 million de voitures à l\'arrêt',
  simple:"Des airbags défectueux peuvent exploser et blesser gravement. Près de 2 millions de voitures sont rappelées, beaucoup interdites de rouler. Qui doit payer ?",
  expert:"Rappel des airbags Takata au nitrate d'ammonium : procédures « stop drive », véhicules de remplacement, contrôle technique, responsabilité des constructeurs.",
  context:"Imposer des voitures de prêt protège les familles ; mais cela coûte cher aux constructeurs et aux garages.",
  date:'Mesures de juin et juillet 2025', place:'France entière, outre-mer en tête', fact:"Les airbags Takata ont fait 18 morts en France ; 2,5 millions de véhicules ont été rappelés, dont 1,7 million interdits de rouler.", figures:'1,75 million de véhicules déjà réparés en un peu plus d\'un an.',
  sources:[src('Ministère des Transports : nouvelles mesures sur les airbags Takata', 'https://www.ecologie.gouv.fr/presse/airbags-takata-defectueux-nouvelles-mesures'), src('Préfecture de Normandie : rappel des airbags Takata', 'https://www.prefectures-regions.gouv.fr/normandie/Actualites/Rappel-airbags-Takata-un-danger-reel')],
  objs:['voiture', 'chantier_grue', ['panneau', 'Rappel']],
  choices:[
    ['Voiture de prêt gratuite pour tous', 'Mobilité de remplacement obligatoire aux frais des constructeurs', 'Familles protégées.', 'Coût pour les constructeurs.', 0, { eco:-1 }, { pouvoir_achat:1, services:1 }, 'voiture'],
    ['Amendes contre les constructeurs en retard', 'Sanctions financières en cas de réparation tardive', 'Accélère les réparations.', 'Contentieux.', 0.1, { soc:1 }, { services:1 }, 'pieces'],
    ['Vérifier au contrôle technique', 'Contre-visite obligatoire pour les airbags dangereux', 'Aucun véhicule oublié.', 'Contraintes pour les propriétaires.', 0, { soc:1 }, { services:1, pouvoir_achat:-1 }, 'loupe']
  ] }));
L.push(E({ id:'v41_charbon', kind:'majeur', region:'grand_est', sector:'energie', title:'Les deux dernières centrales à charbon',
  simple:"Il reste deux centrales à charbon en France. L'une doit passer au gaz pour sauver des emplois, l'autre va fermer. Que faire ?",
  expert:"Conversion des dernières centrales à charbon vers des combustibles moins émetteurs : gaz et biogaz à Saint-Avold, fermeture à Cordemais.",
  context:"Convertir garde des emplois et une production pilotable ; fermer réduit les émissions mais frappe les territoires.",
  date:'Loi du 14 avril 2025', place:'Saint-Avold (Moselle) et Cordemais (Loire-Atlantique)', fact:"La loi a permis la conversion au gaz de la centrale de Saint-Avold ; EDF a renoncé à convertir Cordemais, qui fermera.", figures:'Saint-Avold : environ 150 emplois directs et 500 indirects.',
  sources:[src('Vie publique : loi visant à convertir les centrales à charbon', 'https://www.vie-publique.fr/loi/297888-proposition-de-loi-saint-avold-conversion-des-centrales-charbon'), src('Banque des territoires : conversion des centrales à charbon', 'https://www.banquedesterritoires.fr/conversion-des-centrales-charbon-la-loi-est-parue')],
  objs:['centrale_gaz', 'usine', 'pylone'],
  choices:[
    ['Convertir les deux au gaz et biogaz', 'Conversion des deux sites vers le gaz et le biogaz', 'Emplois et électricité garantis.', 'Émissions encore présentes.', -0.2, { env:-1 }, { emploi:1, souverainete:1, co2:1 }, 'centrale_gaz'],
    ['Fermer et reconvertir les sites', 'Fermeture et reconversion industrielle des deux sites', 'Fin du charbon.', 'Territoires touchés.', 0.1, { env:2 }, { emploi:-1, co2:-1 }, 'chantier_grue'],
    ['Les garder en secours l\'hiver', 'Maintien en réserve pour les pics de consommation', 'Sécurité électrique.', 'Très polluant.', -0.1, { env:-2 }, { souverainete:1, co2:1 }, 'usine']
  ] }));
L.push(E({ id:'v41_hydro', region:'auvergne_rhone_alpes', sector:'energie', title:'Relancer les barrages hydroélectriques',
  simple:"Après des années de conflit avec Bruxelles, une loi permet de relancer les investissements dans nos barrages. Faut-il y mettre beaucoup d'argent ?",
  expert:"Passage du régime des concessions à un régime d'autorisation pour les installations de plus de 4,5 MW, relance des investissements et stations de pompage.",
  context:"L'hydroélectricité est la première énergie renouvelable du pays ; mais construire touche aux rivières et aux vallées.",
  date:'Loi du 29 juin 2026', place:'Alpes du Nord et vallées', fact:"La loi met fin à un conflit de plus de vingt ans avec la Commission européenne sur les concessions hydroélectriques.", figures:'L\'hydroélectricité est la deuxième source d\'électricité du pays.',
  sources:[src('Vie publique : loi visant à relancer l\'hydroélectricité', 'https://www.vie-publique.fr/node/301971'), src('Ministère de l\'Économie : promulgation de la loi', 'https://www.economie.gouv.fr/node/3241296')],
  objs:['barrage', 'pylone', 'foret'],
  choices:[
    ['Grand plan de stations de pompage', 'Investissement massif dans le stockage hydraulique', 'Électricité stockée et renouvelable.', 'Travaux lourds.', -0.5, { env:1 }, { co2:-1, souverainete:2, emploi:1 }, 'barrage'],
    ['Moderniser sans nouveaux ouvrages', 'Rénovation des barrages existants uniquement', 'Nature préservée.', 'Gain limité.', -0.1, { env:2 }, { co2:-1 }, 'chantier_grue'],
    ['Laisser investir les exploitants', 'Investissements laissés aux exploitants privés et publics', 'Pas de dépense publique.', 'Rythme incertain.', 0, { eco:2 }, { souverainete:0 }, 'pylone']
  ] }));
L.push(E({ id:'v41_fraude_cpf', kind:'majeur', region:'national', sector:'fiscalite', title:'Fraudes aux aides à la rénovation et à la formation',
  simple:"Des escrocs détournent les aides à la rénovation des logements et au compte formation. L'État a même suspendu une aide. Que faire ?",
  expert:"Fraude aux aides publiques (MaPrimeRénov', certificats d'économies d'énergie, compte personnel de formation) : contrôles, sanctions, démarchage.",
  context:"Contrôler plus réduit la fraude mais ralentit les dossiers honnêtes ; supprimer les aides pénalise les ménages.",
  date:'Loi du 30 juin 2025 contre toutes les fraudes aux aides publiques', place:'France entière', fact:"Les contrôles ont évité 229 millions d'euros de fraude à MaPrimeRénov' ; une partie de l'aide a été suspendue face à un pic de fraude.", figures:'44 172 dossiers frauduleux détectés avant paiement.',
  sources:[src('Ministère de l\'Économie : fraudes aux aides publiques, nouvelles mesures', 'https://www.economie.gouv.fr/actualites/fraudes-aux-aides-publiques-de-nouvelles-mesures-pour-lutter-efficacement'), src('Ministère du Logement : lutte contre la fraude à MaPrimeRénov\'', 'https://www.ecologie.gouv.fr/presse/maprimerenov-valerie-letard-soutient-lutte-efficace-renforcee-contre-fraude-afin-proteger')],
  objs:['maison', 'loupe', 'pieces'],
  choices:[
    ['Contrôles renforcés avant paiement', 'Contrôle systématique des dossiers avant versement', 'Fraude réduite.', 'Délais plus longs.', 0.3, { soc:1 }, { services:-1, cohesion:1 }, 'loupe'],
    ['Interdire le démarchage pour ces aides', 'Interdiction du démarchage commercial sur les aides', 'Coupe les escrocs.', 'Artisans honnêtes touchés.', 0.1, { soc:1 }, { cohesion:1 }, 'cadenas'],
    ['Supprimer les aides les plus fraudées', 'Suppression des dispositifs les plus exposés', 'Économie immédiate.', 'Rénovations freinées.', 1, { eco:2 }, { co2:1, emploi:-1 }, 'pieces']
  ] }));
// ---------- Société, santé ----------
L.push(E({ id:'v41_ivg', region:'occitanie', sector:'sante', title:'IVG : un droit inscrit dans la Constitution mais difficile d\'accès',
  simple:"L'IVG est garantie par la Constitution, mais les délais pour obtenir un rendez-vous s'allongent et des centres ferment. Que faire ?",
  expert:"Effectivité du droit à l'IVG : délais de prise en charge, fermetures de maternités, pratique de l'IVG instrumentale par les sages-femmes.",
  context:"Ouvrir des centres coûte ; confier plus d'actes aux sages-femmes fait débat chez certains médecins.",
  date:'Baromètre du Planning familial, automne 2026', place:'Territoires ruraux et outre-mer', fact:"72 % des femmes ayant avorté en établissement ont attendu plus de 7 jours pour un rendez-vous, contre 54 % deux ans plus tôt.", figures:'Environ 250 000 IVG par an.',
  sources:[src('Pourquoi Docteur : pourquoi l\'accès à l\'IVG reste semé d\'embûches', 'https://www.pourquoidocteur.fr/Articles/Question-d-actu/55896-Pourquoi-l-acces-l-IVG-reste-seme-d-embuches'), src('Vie publique : accès à l\'IVG, des obstacles persistent', 'https://www.vie-publique.fr/en-bref/295928-acces-livg-des-obstacles-persistent')],
  objs:['hopital', 'cabinet_medical', 'file_attente'],
  choices:[
    ['Un centre dans chaque département', 'Garantie d\'au moins une structure IVG par département', 'Égalité territoriale.', 'Coût.', -0.1, { soc:-1 }, { services:2, cohesion:1 }, 'hopital'],
    ['Élargir le rôle des sages-femmes', 'IVG instrumentale ouverte aux sages-femmes', 'Plus de professionnels.', 'Réticences de médecins.', 0, { soc:-1 }, { services:1 }, 'cabinet_medical'],
    ['Garder l\'organisation actuelle', 'Maintien de l\'organisation des soins actuelle', 'Pas de chamboulement.', 'Délais persistants.', 0, { soc:1 }, { services:-1 }, 'file_attente']
  ] }));
L.push(E({ id:'v41_fin_vie', region:'national', sector:'sante', title:'L\'aide à mourir devient légale',
  simple:"La loi sur l'aide à mourir est promulguée. Il faut maintenant décider comment l'appliquer, et quels moyens donner aux soins palliatifs. Que faire ?",
  expert:"Mise en œuvre du droit à l'aide à mourir : décrets d'application, clause de conscience, développement des soins palliatifs, contrôle de la procédure.",
  context:"Pour les uns, une liberté nouvelle ; pour les autres, un risque de pression sur les plus fragiles sans accès réel aux soins palliatifs.",
  date:'Loi promulguée le 18 août 2026, publiée le 19 août', place:'Parlement et Conseil constitutionnel', fact:"Adoptée par 291 voix contre 241, la loi crée un droit à l'aide à mourir, validé avec trois réserves par le Conseil constitutionnel.", figures:'Frais intégralement pris en charge par l\'Assurance maladie.',
  sources:[src('Info.gouv : aide à mourir, ce que dit la loi', 'https://www.info.gouv.fr/actualite/aide-a-mourir-ce-que-dit-la-loi'), src('Vie publique : loi relative au droit à l\'aide à mourir', 'https://www.vie-publique.fr/loi/298544-fin-de-vie-droit-laide-mourir-proposition-de-loi-falorni')],
  objs:['hopital', 'soignants', 'parlement'],
  choices:[
    ['Appliquer vite et largement', 'Publication rapide des décrets d\'application', 'Droit effectif rapidement.', 'Inquiétudes éthiques.', 0, { soc:-2 }, { cohesion:-1 }, 'parlement'],
    ['D\'abord des soins palliatifs partout', 'Plan massif pour les soins palliatifs avant l\'application', 'Accompagnement garanti.', 'Coût, droit retardé.', -0.4, { soc:1 }, { services:2, cohesion:1 }, 'soignants'],
    ['Encadrer très strictement', 'Contrôle renforcé et commission d\'évaluation', 'Protège les plus fragiles.', 'Procédure lourde.', -0.05, { soc:1 }, { cohesion:1 }, 'loupe']
  ] }));
L.push(E({ id:'v41_lyceens', kind:'majeur', region:'hauts_de_france', sector:'ecole', title:'Lycéens et étudiants dans la rue contre la vie chère',
  simple:"Des centaines de lycées sont bloqués. Lycéens et étudiants réclament des moyens pour l'école et dénoncent la vie chère. Que répondre ?",
  expert:"Mouvement lycéen et étudiant : manque d'enseignants remplaçants, Parcoursup, précarité étudiante, convergence avec les mobilisations contre la vie chère.",
  context:"Céder vite coûte cher ; laisser durer le mouvement risque des violences et une année scolaire perturbée.",
  date:'Mobilisation de mi-septembre à octobre 2026', place:'Lille, Paris, Rennes et toute la France', fact:"Plus de 250 000 manifestants ont défilé lors du pic de la mobilisation ; 800 établissements ont été perturbés.", figures:'3 000 professeurs remplaçants supplémentaires annoncés par le gouvernement.',
  sources:[src('L\'Étudiant : la mobilisation lycéenne gagne les étudiants', 'https://www.letudiant.fr/educpros/actualite/la-mobilisation-lyceenne-gagne-la-communaute-etudiante.html'), src('Banque des territoires : le mouvement lycéen prend de l\'ampleur', 'https://www.banquedesterritoires.fr/rejoint-par-les-etudiants-le-mouvement-lyceen-prend-de-lampleur-et-le-premier-ministre-convoque-une')],
  objs:['manifestants', 'ecole', 'policiers'],
  choices:[
    ['Plan d\'urgence pour l\'école', 'Recrutement d\'enseignants et repas étudiants à 1 €', 'Apaise la colère.', 'Plus de 1 Md€.', -1.2, { soc:-1 }, { services:2, cohesion:2 }, 'ecole'],
    ['Négocier mesure par mesure', 'Concertation avec les organisations lycéennes', 'Dialogue.', 'Mouvement qui dure.', -0.2, { soc:0 }, { cohesion:1 }, ['bulle', 'Dialogue']],
    ['Faire respecter l\'ordre dans les lycées', 'Levée des blocages par les forces de l\'ordre', 'Cours qui reprennent.', 'Risque d\'escalade.', 0.01, { soc:2 }, { cohesion:-2 }, 'policiers']
  ] }));
L.push(E({ id:'v41_librairies', region:'bretagne', sector:'logement', title:'Librairies et cinémas indépendants ferment',
  simple:"Loyers et énergie flambent, les ventes baissent : des librairies et des petits cinémas ferment, surtout dans les petites villes. Faut-il les aider ?",
  expert:"Fragilité des commerces culturels indépendants : effet ciseau entre charges (loyers, énergie) et recettes, encadrement des loyers commerciaux, aides publiques.",
  context:"Ces lieux font vivre les centres-villes ; mais aider un secteur pose la question de l'équité avec les autres commerces.",
  date:'Bilan de la librairie indépendante, 2025-2026', place:'Petites villes et centres-villes', fact:"Pour la première fois, les fermetures de librairies ont dépassé les ouvertures ; le premier libraire indépendant a demandé son redressement judiciaire.", figures:'83 ouvertures contre 85 fermetures sur un an ; ventes en baisse de 2,9 %.',
  sources:[src('Assemblée nationale : question sur la situation des librairies indépendantes', 'https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE16988'), src('Sénat : question sur la fragilité des librairies', 'https://www.senat.fr/questions/base/2026/qSEQ26051104S.html')],
  objs:['commerce', 'personnage', ['etiquette', 'Fermé']],
  choices:[
    ['Encadrer les loyers commerciaux', 'Encadrement expérimental des loyers commerciaux', 'Charges allégées.', 'Propriétaires opposés.', 0, { eco:-1 }, { cohesion:1, emploi:1 }, 'commerce'],
    ['Aide d\'urgence aux lieux culturels', 'Fonds de soutien aux librairies et cinémas indépendants', 'Sauve des lieux.', 'Coût public.', -0.1, { eco:-1 }, { cohesion:1, services:1 }, 'pieces'],
    ['Laisser le marché décider', 'Pas d\'aide spécifique au secteur', 'Égalité entre commerces.', 'Centres-villes appauvris.', 0, { eco:2 }, { cohesion:-1 }, 'personnage']
  ] }));
L.push(E({ id:'v41_scaf', region:'occitanie', sector:'defense', title:'Fin de l\'avion de combat commun avec l\'Allemagne',
  simple:"La France et l'Allemagne arrêtent le projet d'avion de chasse commun. Faut-il le construire seuls ou trouver d'autres partenaires ?",
  expert:"Abandon du volet avion de combat habité du système de combat aérien du futur ; alternatives nationales ou partenariats européens.",
  context:"Faire seul coûte très cher ; coopérer oblige à partager les décisions et les emplois.",
  date:'Décision de juin 2026', place:'Paris, Berlin, Toulouse', fact:"Paris et Berlin ont mis fin au volet avion de combat habité du programme commun de chasseur du futur.", figures:'Programme initialement partagé entre France, Allemagne et Espagne.',
  sources:[src('L\'Essentiel de l\'éco : ce que prépare Dassault après le SCAF', 'https://lessentieldeleco.fr/8171-rafale-f5-simple-evolution-ou-super-rafale-ce-que-prepare-vraiment-dassault/'), src('L\'Essentiel de l\'éco : le Rafale est-il le meilleur avion du monde ?', 'https://lessentieldeleco.fr/8099-le-rafale-est-il-vraiment-le-meilleur-avion-du-monde/')],
  objs:['avion', 'usine', 'drapeau_ue'],
  choices:[
    ['Construire seuls le successeur', 'Programme national d\'avion de combat', 'Indépendance totale.', 'Coût énorme.', -0.6, { eu:-1 }, { souverainete:2, emploi:1 }, 'usine'],
    ['Chercher d\'autres partenaires', 'Coopération avec d\'autres pays européens', 'Coûts partagés.', 'Négociations longues.', -0.2, { eu:2 }, { souverainete:1 }, 'drapeau_ue'],
    ['Moderniser le Rafale', 'Évolutions successives du Rafale existant', 'Moins cher.', 'Retard technologique possible.', 0, { eu:0 }, { souverainete:0, emploi:1 }, 'avion']
  ] }));
// ---------- Répartition provisoire en 10 semaines (la redistribution intelligente suit) ----------
const SEASONS = Array(10).fill('printemps');
const W = [];
for(let i = 0; i < 10; i++) W.push({ day:31 + i, season:SEASONS[i], title:'', mood:'calme', weather:'soleil', intro:'', offer:[], events:[] });
L.forEach((e, i) => W[i % 10].events.push(e));
G.days.push(...W);
fs.writeFileSync(F, S.slice(0, A) + JSON.stringify(G, null, 1) + S.slice(B));
console.log(L.length + ' situations ajoutées en ' + W.length + ' semaines');
