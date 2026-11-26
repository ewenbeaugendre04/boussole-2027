// Exporte la matrice des poids (effets des réformes et des choix) en Markdown + CSV,
// avec un barème « 1 point = quantité réelle » et des contrôles de cohérence automatiques.
// Usage : node scripts/matrice.js  → docs/MATRICE_POIDS.md et docs/matrice_poids.csv
const fs = require('fs'), vm = require('vm');
const c = { window: {} }; vm.createContext(c);
vm.runInContext(fs.readFileSync(__dirname + '/../src/data/game_data.js', 'utf8').replace(/^const /m, 'var '), c);
const D = Object.values(c).find(v => v && v.programs) || c.window.GAME_DATA;
const IND = D.indicators.map(i => i.id);
const LAB = Object.fromEntries(D.indicators.map(i => [i.id, i.label]));

/* Barème : ce que vaut 1 point d'indicateur dans la vraie vie (ordre de grandeur, à affiner) */
const BAREME = {
  emploi: { u: 50000, txt: '50 000 emplois', src: "≈ 0,16 % des 30,9 millions d'emplois (Insee 2025). Repère : le report de 62 à 64 ans est estimé à environ +300 000 emplois à terme (COR, DG Trésor), soit 6 points" },
  pouvoir_achat: { u: 1.6, txt: '+0,1 % du revenu disponible des ménages (≈ 1,6 Md€/an)', src: 'Revenu disponible brut des ménages ≈ 1 650 Md€ (Insee, comptes nationaux 2024)' },
  co2: { u: 1, txt: '1 Mt CO₂e par an', src: 'Émissions nationales ≈ 366 Mt CO₂e en 2024 (Citepa, inventaire Secten)' },
  cohesion: { u: 20000, txt: '20 000 personnes qui sortent de la pauvreté (ou équivalent en inégalités)', src: '9,1 millions de personnes sous le seuil de pauvreté (Insee 2022-2023)' },
  souverainete: { u: 1, txt: "1 Md€ de dépendance aux importations en moins (énergie, santé, défense, alimentation)", src: 'Déficit commercial de biens ≈ 80 Md€ en 2024 (Douanes)' },
  services: { u: 1, txt: "1 Md€/an de moyens effectifs en plus pour un service public (≈ 15 000 agents)", src: 'Coût moyen d’un agent public chargé ≈ 65 000 €/an (DGAFP)' }
};
const PROPOS = [
  ['retraite_60', 'Emploi −3', 'Emploi −8', 'Revenir à 60 ans retire plusieurs centaines de milliers d’actifs (le report 62→64 en ajoute ≈ 300 000) : −3 est trop faible face à report_age_65 (+3).'],
  ['report_age_65', 'Cohésion −7', 'Cohésion −4', 'Effet le plus fort de tout le jeu sur la cohésion, alors que retraite_60 ne fait que +3 : asymétrie à corriger.'],
  ['baisse_impots_production', 'Emploi +3', 'Emploi +1', 'Les évaluations de la baisse des impôts de production chiffrent quelques dizaines de milliers d’emplois, pas 150 000.'],
  ['defense_europeenne_emprunt', 'Emploi +3', 'Emploi +1', '+3 (150 000 emplois) pour 1 Md€/an de charge : disproportionné face aux autres dépenses.'],
  ['relance_nucleaire', 'Emploi +4', 'Emploi +2', 'Le programme de nouveaux réacteurs est chiffré à quelques dizaines de milliers d’emplois au pic de chantier.'],
  ['tva_sociale', 'Emploi +3', 'Emploi +2', 'Les simulations de TVA sociale donnent en général 50 000 à 100 000 emplois.'],
  ['prix_planchers_agricoles', 'Emploi +2', 'Emploi +1', 'Effet emploi incertain : maintien d’exploitations plutôt que créations.'],
  ['sortie_nucleaire', 'CO₂ +2', 'CO₂ +5', 'Remplacer une partie du nucléaire par du gaz pendant la transition ajoute plusieurs Mt de CO₂ par an.'],
  ['vols_courts_train', 'CO₂ −2', 'CO₂ −1 (minimum)', 'L’interdiction réelle a économisé environ 0,05 Mt de CO₂ par an : effet symbolique.'],
  ['leasing_electrique', 'CO₂ −2', 'CO₂ −1', 'Quelques dizaines de milliers de voitures par an : moins de 0,5 Mt.'],
  ['regulation_installation_medecins', 'Services +3 sans coût', 'Services +1', 'Mieux répartir les médecins ne crée pas de moyens nouveaux : effet réel mais modeste.'],
  ['non_remplacement_fonctionnaires', 'Services −6', 'Services −4', 'Pour 2 Md€/an d’économie, −6 dépasse l’effet inverse de revalorisation_enseignants (+4 pour 4 Md€).']
];
const reel = (k, v) => { const b = BAREME[k]; if(!b || !v) return ''; const q = v * b.u; return k === 'emploi' || k === 'cohesion' ? (q > 0 ? '+' : '') + Math.round(q).toLocaleString('fr-FR') : (q > 0 ? '+' : '') + (Math.round(q * 10) / 10).toLocaleString('fr-FR'); };
const sum = (o, k) => (o && o[k]) || 0;

const rows = [];
D.programs.forEach(p => {
  const ind = Object.assign({}, p.ind || {});
  (p.later || []).forEach(l => Object.entries(l.ind || {}).forEach(([k, v]) => { ind[k] = (ind[k] || 0) + v; }));
  rows.push({ type: 'réforme', id: p.id, titre: p.label, secteur: p.sector, budget: p.budget || 0, once: p.once || 0, ind, direct: p.ind || {} });
});
D.days.forEach(d => (d.events || []).forEach(e => (e.choices || []).forEach(ch => {
  const ind = Object.assign({}, ch.ind || {});
  (ch.later || []).forEach(l => Object.entries(l.ind || {}).forEach(([k, v]) => { ind[k] = (ind[k] || 0) + v; }));
  rows.push({ type: 'choix', id: e.id + '/' + ch.id, titre: e.title + ' → ' + (ch.label || ch.id), secteur: e.sector, budget: ch.budget || 0, once: ch.once || 0, ind, kind: e.kind, semaine: d.day });
})));

/* Contrôles automatiques */
const alerts = [];
rows.forEach(r => {
  const tot = IND.reduce((a, k) => a + Math.abs(sum(r.ind, k)), 0);
  if(r.type === 'choix' && r.kind !== 'majeur' && tot > 10) alerts.push(['Effet très fort pour un événement mineur', r.id, tot + ' points au total']);
  IND.forEach(k => { if(Math.abs(sum(r.ind, k)) >= 8) alerts.push(['Effet isolé très fort', r.id, LAB[k] + ' ' + sum(r.ind, k) + ' ≈ ' + reel(k, sum(r.ind, k)) + ' (' + BAREME[k].txt.split(' (')[0] + ' par point)']); });
  if(Math.abs(r.budget) >= 15 && tot <= 2) alerts.push(['Gros budget, presque aucun effet', r.id, r.budget + ' Md€/an pour ' + tot + ' point(s)']);
  if(Math.abs(r.budget) <= .3 && Math.abs(r.once) <= .3 && tot >= 8 && r.type === 'réforme') alerts.push(['Presque gratuit mais très efficace', r.id, tot + ' points pour ' + r.budget + ' Md€/an']);
  if(sum(r.ind, 'services') >= 3 && r.budget > -1 && r.type === 'réforme') alerts.push(['Services publics en hausse sans dépense', r.id, 'services ' + sum(r.ind, 'services') + ', budget ' + r.budget]);
});
/* paires opposées : leurs effets doivent être de même ampleur, de signe contraire */
[['sortie_nucleaire', 'relance_nucleaire']].forEach(([a, b]) => {
  const A = rows.find(r => r.id === a), B = rows.find(r => r.id === b); if(!A || !B) return;
  IND.forEach(k => { const x = sum(A.ind, k), y = sum(B.ind, k); if(x && y && Math.sign(x) === Math.sign(y)) alerts.push(['Paire opposée de même sens', a + ' / ' + b, LAB[k] + ' : ' + x + ' et ' + y]); });
});

/* Markdown */
const md = [];
md.push('# Matrice des poids de Boussole 2027', '', 'Fichier généré par `node scripts/matrice.js` à partir de `src/data/game_data.js`. Ne pas modifier à la main : corriger les données puis relancer le script.', '');
md.push('## Barème : ce que vaut 1 point', '', '| Indicateur | 1 point ≈ | Base de calcul |', '|---|---|---|');
IND.forEach(k => md.push('| ' + LAB[k] + ' | ' + BAREME[k].txt + ' | ' + BAREME[k].src + ' |'));
md.push('', 'Le budget est déjà en milliards d’euros par an (`budget`) et en coût ponctuel (`once`). Les indicateurs comptent les effets directs et les effets différés (`later`).', '');
md.push('## Propositions de correction (à valider)', '', 'Comparaison des réformes entre elles avec le barème ci-dessus. Les ordres de grandeur réels sont des estimations publiques connues, à confirmer avec une source précise avant d’appliquer.', '', '| Réforme | Actuel | Proposé | Pourquoi |', '|---|---|---|---|');
PROPOS.forEach(x => md.push('| `' + x[0] + '` | ' + x[1] + ' | ' + x[2] + ' | ' + x[3] + ' |'));
md.push('');
md.push('## Contrôles automatiques (' + alerts.length + ')', '', '| Problème | Élément | Détail |', '|---|---|---|');
alerts.forEach(a => md.push('| ' + a.join(' | ') + ' |'));
md.push('', '## Réformes (' + rows.filter(r => r.type === 'réforme').length + ')', '', '| Réforme | Budget Md€/an | Ponctuel Md€ | ' + IND.map(k => LAB[k]).join(' | ') + ' |', '|---|---|---|' + IND.map(() => '---').join('|') + '|');
rows.filter(r => r.type === 'réforme').forEach(r => md.push('| ' + r.titre + ' (`' + r.id + '`) | ' + r.budget + ' | ' + r.once + ' | ' + IND.map(k => sum(r.ind, k) ? sum(r.ind, k) + ' (' + reel(k, sum(r.ind, k)) + ')' : '').join(' | ') + ' |'));
md.push('', '## Classements par indicateur (réformes)', '');
IND.forEach(k => {
  const l = rows.filter(r => r.type === 'réforme' && sum(r.ind, k)).sort((a, b) => sum(b.ind, k) - sum(a.ind, k));
  md.push('**' + LAB[k] + '** : ' + l.map(r => r.id + ' ' + (sum(r.ind, k) > 0 ? '+' : '') + sum(r.ind, k)).join(', ') + '.', '');
});
md.push('## Choix des événements (' + rows.filter(r => r.type === 'choix').length + ')', '', '| Semaine | Choix | Budget | Ponctuel | ' + IND.map(k => LAB[k]).join(' | ') + ' |', '|---|---|---|---|' + IND.map(() => '---').join('|') + '|');
rows.filter(r => r.type === 'choix').forEach(r => md.push('| ' + r.semaine + ' | ' + r.titre.replace(/\|/g, '/') + ' | ' + r.budget + ' | ' + r.once + ' | ' + IND.map(k => sum(r.ind, k) || '').join(' | ') + ' |'));
fs.writeFileSync(__dirname + '/../docs/MATRICE_POIDS.md', md.join('\n') + '\n');

const csv = [['type', 'id', 'titre', 'secteur', 'budget', 'once'].concat(IND).join(';')];
rows.forEach(r => csv.push([r.type, r.id, '"' + r.titre.replace(/"/g, "'") + '"', r.secteur, r.budget, r.once].concat(IND.map(k => sum(r.ind, k))).join(';')));
fs.writeFileSync(__dirname + '/../docs/matrice_poids.csv', csv.join('\n') + '\n');
console.log(rows.length + ' lignes, ' + alerts.length + ' alertes');
