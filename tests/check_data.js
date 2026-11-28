// Contrôle des données du jeu : node tests/check_data.js
const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'game_data.js'), 'utf8');
const GAME = new Function(src + '; return GAME;')();

const errors = [], warns = [];
const err = m => errors.push(m), warn = m => warns.push(m);
// Bibliothèque v2 (SCHEMA.md, section VERSION 2)
const OBJS = new Set(('char missile chien chat tracteur camion voiture bus train tgv avion cargo ferry bateau_peche velo ambulance voiture_police ' +
  'eolienne eolienne_mer centrale_nucleaire centrale_gaz panneaux_solaires barrage pylone borne_recharge station_service ' +
  'maison immeuble usine usine_fermee chantier_grue ecole hopital cabinet_medical mairie commissariat prison boulangerie commerce supermarche entrepot port aeroport parlement batiment_ue ferme ' +
  'foule manifestants barrage_agricole policiers soignants eleves file_attente personnage ' +
  'champ troupeau foret incendie inondation canicule secheresse neige tempete orage moustique ' +
  'drapeau_ue frontiere douane panneau bulle etiquette pieces euro_flux fleche satellite cyberattaque antenne colis conteneurs cadenas loupe').split(' '));
const ANIMS = new Set('appear fade move flow pulse smoke spin shake blink rise grow close'.split(' '));
const V2 = /^0\.2/.test(GAME.version);
const V21 = /^0\.2\.[1-9]/.test(GAME.version);
const V22 = /^0\.2\.([2-9]|\d\d)/.test(GAME.version);
const V26 = /^0\.2\.([6-9]|\d\d)/.test(GAME.version);
const V27 = /^0\.2\.([7-9]|\d\d)/.test(GAME.version);
// v2.6 : zones de mer (rectangles en % du plateau), tracées d'après le contour des régions côtières dessiné par game.html.
const SEA_ZONES = [
  { id: 'manche_est', x: [24, 41], y: [4, 11] },           // au large des Hauts-de-France (Boulogne) et de la Normandie, côte anglaise au nord
  { id: 'manche_centre', x: [5, 41], y: [8, 11] },         // milieu de la Manche
  { id: 'manche_ouest', x: [0, 20], y: [11, 23] },          // ouest du Cotentin, nord de la Bretagne
  { id: 'iroise', x: [0, 9], y: [36, 40] },                // pointe bretonne
  { id: 'atlantique', x: [0, 17], y: [40, 78] },           // golfe de Gascogne, de la Loire-Atlantique aux Landes (au sud, côte espagnole)
  { id: 'mediterranee', x: [57, 92], y: [84, 100] },       // golfe du Lion et côte provençale, à l'ouest de la Corse
  { id: 'mer_ligure', x: [90, 100], y: [74, 82] },         // entre la Côte d'Azur et le cap Corse
  { id: 'encart_outre_mer', x: [0, 16], y: [84, 100], inset: true } // encart des outre-mer : îles entourées de mer
];
const MARINE = new Set(['cargo', 'ferry', 'bateau_peche', 'eolienne_mer']);
const inZone = (x, y, z) => x >= z.x[0] && x <= z.x[1] && y >= z.y[0] && y <= z.y[1];
const atSea = (x, y) => SEA_ZONES.some(z => inZone(x, y, z));
const atOpenSea = (x, y) => SEA_ZONES.some(z => !z.inset && inZone(x, y, z));
const factYears = [];
// v2.1 : aucune date ni aucun mois dans le déroulé (seulement dans real.date, les sources, le budget et les news).
const DATE_RE = /\b(janvier|février|fevrier|mars|avril|mai|juin|juillet|août|aout|septembre|octobre|novembre|décembre|decembre)\b|\b(19|20)\d{2}\b/i;
function scanDates(obj, where) {
  if (!V21) return;
  (function walk(o, path) {
    if (typeof o === 'string') { const m = o.match(DATE_RE); if (m) err(where + path + ' : date ou mois dans le déroulé « ' + m[0] + ' »'); return; }
    if (!o || typeof o !== 'object') return;
    for (const [k, v] of Object.entries(o)) {
      if (['date', 'sources', 'url', 'fx', 'camera'].includes(k)) continue;
      walk(v, path + '.' + k);
    }
  })(obj, '');
}
// Effet d'un levier sur le solde (sur une année de jeu) : budget annuel + coût ponctuel + suites chiffrées.
const leverChoice = c => (c.budget || 0) + (c.once || 0) + (c.followup_budget || 0);
const leverProg = p => (p.budget || 0) + (p.once || 0) + (p.later || []).reduce((a, l) => a + (l.budget || 0), 0);
// Moins de 10 M€ : effet négligeable sur le budget national, compté neutre.
const sign = v => v >= 0.01 ? 'positif' : v <= -0.01 ? 'negatif' : 'neutre';
function checkFx(list, where, min, max) {
  if (!Array.isArray(list) || list.length < min || list.length > max) { err(where + ' : fx attendu (' + min + ' à ' + max + ' objets)'); return; }
  list.forEach((f, i) => {
    const w = where + ' fx[' + i + ']';
    if (!OBJS.has(f.obj)) err(w + ' : objet hors bibliothèque « ' + f.obj + ' »');
    if (!ANIMS.has(f.anim)) err(w + ' : animation hors bibliothèque « ' + f.anim + ' »');
    if (!(f.x >= 0 && f.x <= 100 && f.y >= 0 && f.y <= 100)) err(w + ' : position hors plateau');
    if ((f.anim === 'move' || f.anim === 'flow') && !(f.to && f.to.x >= 0 && f.to.x <= 100 && f.to.y >= 0 && f.to.y <= 100)) err(w + ' : « to » manquant ou hors plateau');
    if (['panneau', 'bulle', 'etiquette'].includes(f.obj) && !f.label) err(w + ' : label manquant');
    if (V26) {
      const pts = [[f.x, f.y]].concat(f.to ? [[f.to.x, f.to.y]] : []);
      if (MARINE.has(f.obj)) { if (pts.some(p => !atSea(p[0], p[1]))) err(w + ' : objet marin « ' + f.obj + ' » hors des zones de mer (' + pts.map(p => p.join(',')).join(' -> ') + ')'); }
      else if (pts.some(p => atOpenSea(p[0], p[1]))) err(w + ' : objet terrestre « ' + f.obj + ' » placé en mer (' + pts.map(p => p.join(',')).join(' -> ') + ')');
    }
  });
}

const AXES = ['eco', 'soc', 'eu', 'env'];

['version', 'axes', 'sectors', 'regions', 'indicators', 'budget', 'levels', 'days', 'programs']
  .forEach(k => { if (GAME[k] === undefined) err('champ racine manquant : ' + k); });

AXES.forEach(a => { if (!GAME.axes[a] || !GAME.axes[a].neg || !GAME.axes[a].pos) err('axe incomplet : ' + a); });

const sectors = new Set(GAME.sectors.map(s => s.id));
const regions = new Set(GAME.regions.map(r => r.id));
const inds = new Set(GAME.indicators.map(i => i.id));
if (GAME.sectors.length < 10 || GAME.sectors.length > 14) err('10 à 14 secteurs attendus');
GAME.regions.forEach(r => { if (!(r.x >= 0 && r.x <= 100 && r.y >= 0 && r.y <= 100)) err('position hors plateau : ' + r.id); });
['pouvoir_achat', 'emploi', 'co2', 'cohesion', 'souverainete'].forEach(i => { if (!inds.has(i)) err('indicateur manquant : ' + i); });

const b = GAME.budget;
['annee', 'unite', 'recettes', 'depenses', 'deficit', 'dette', 'postes', 'sources', 'note']
  .forEach(k => { if (b[k] === undefined) err('budget.' + k + ' manquant'); });
if (Math.abs(b.depenses - b.recettes - b.deficit) > 2) warn('dépenses - recettes ≠ déficit');
if (b.jours_par_an === undefined && b.periodes_par_an === undefined) err('budget : jours_par_an ou periodes_par_an manquant');
if (V21 && b.periodes_par_an !== 52) err('v2.1 : budget.periodes_par_an doit valoir 52 (semaines)');
b.sources.forEach(s => { if (!/^https:\/\//.test(s.url)) err('source sans url https : ' + s.label); });

(GAME.news || []).forEach((n, i) => {
  if (!['faux', 'trompeur', 'ingerence', 'vrai'].includes(n.tag)) err('news ' + i + ' : tag invalide');
  ['title', 'text', 'src'].forEach(k => { if (!n[k]) err('news ' + i + ' : ' + k + ' manquant'); });
});

function wordCount(t) { return String(t).trim().split(/\s+/).filter(x => /[\wÀ-ÿ0-9]/.test(x)).length; }
function checkExpert(c, where, seen) {
  if (!c.label_expert) { err(where + ' : label_expert manquant'); return; }
  const n = wordCount(c.label_expert);
  if (n < 4 || n > 12) err(where + ' : label_expert de ' + n + ' mots (4 à 12 attendus)');
  if (c.label_expert === c.label) err(where + ' : label_expert identique au label');
  if (seen) { for (const k of [c.label.toLowerCase(), 'x:' + c.label_expert.toLowerCase()]) { if (seen.has(k)) err(where + ' : libellé en double dans l\'événement'); seen.add(k); } }
}
// La phrase doit dire le sens : « baisse » pour un effet positif, « augmente / remonte » pour un effet négatif.
function checkNote(note, v, where) {
  if (v >= 0.01 && !/baisse|recette|rapporte/i.test(note)) warn(where + ' : budget_note sans « baisse » alors que le solde s\'améliore');
  if (v <= -0.01 && !/augmente|remonte|coût|perte/i.test(note)) warn(where + ' : budget_note sans « augmente » alors que le solde se dégrade');
}
function checkAxes(o, where) {
  if (!o || typeof o !== 'object' || !Object.keys(o).length) { err(where + ' : axes manquants'); return; }
  for (const [k, v] of Object.entries(o)) {
    if (!AXES.includes(k)) err(where + ' : axe inconnu ' + k);
    if (!(Number.isInteger(v) && v >= -2 && v <= 2)) err(where + ' : valeur d\'axe invalide ' + k + '=' + v);
  }
}
function checkInd(o, where) {
  if (!o) return;
  for (const k of Object.keys(o)) if (!inds.has(k)) err(where + ' : indicateur inconnu ' + k);
}

const eventIds = new Set();
const lastOffer = {};
const offered = new Set();
const evIndex = {}; let evOrder = 0;
const levChoices = { positif: 0, negatif: 0, neutre: 0 };
let nEvents = 0, nChoices = 0, nFollow = 0, lenGap = [];
const sectorCount = {}, regionCount = {};
GAME.days.forEach((d, di) => {
  if (d.day !== di + 1) err('jour ' + di + ' : numéro attendu ' + (di + 1));
  if (!Array.isArray(d.events)) { err('jour ' + d.day + ' : events manquant'); return; }
  if (!['calme', 'tendu'].includes(d.mood)) err('jour ' + d.day + ' : mood invalide');
  if (!['soleil', 'pluie', 'neige', 'canicule', 'vent'].includes(d.weather)) err('jour ' + d.day + ' : weather invalide');
  if (d.events.length < 3 || d.events.length > 5) err('jour ' + d.day + ' : 3 à 5 événements attendus');
  if (!d.events.some(e => e.kind === 'banal')) err('jour ' + d.day + ' : aucun événement banal');
  if (V21) {
    if (!d.title || !d.intro) err('semaine ' + d.day + ' : title et intro attendus');
    if (d.season && !['hiver', 'printemps', 'ete', 'automne'].includes(d.season)) err('semaine ' + d.day + ' : season invalide');
    if (V22 && di === 0) { if (!Array.isArray(d.offer) || d.offer.length !== 0) err('v2.2 : la semaine 1 doit avoir offer = []'); }
    else if (V27) { if (!Array.isArray(d.offer) || d.offer.length < 5 || d.offer.length > 6) err('v2.7 : semaine ' + d.day + ' : offer doit lister 5 ou 6 propositions'); }
    else if (!Array.isArray(d.offer) || d.offer.length < 2 || d.offer.length > 4) err('semaine ' + d.day + ' : offer doit lister 2 à 4 propositions');
    if (V22 && di === 1 && !(d.unlock && d.unlock.title && d.unlock.text)) err('v2.2 : la semaine 2 doit avoir unlock { title, text }');
    if (Array.isArray(d.offer)) d.offer.forEach(id => {
      if (!GAME.programs.some(p => p.id === id)) err('semaine ' + d.day + ' : offer inconnue ' + id);
      // v2.9 (16 semaines) : une proposition peut revenir, mais au moins 6 semaines après sa dernière offre.
      if (offered.has(id) && d.day - lastOffer[id] < 6) err('semaine ' + d.day + ' : proposition déjà offerte il y a moins de 6 semaines ' + id);
      offered.add(id); lastOffer[id] = d.day;
    });
    scanDates({ title: d.title, intro: d.intro }, 'semaine ' + d.day);
  }
  d.events.forEach(e => {
    nEvents++;
    const w = 'événement ' + e.id;
    if (eventIds.has(e.id)) err(w + ' : id en double'); eventIds.add(e.id);
    ['id', 'kind', 'region', 'sector', 'title', 'simple', 'expert', 'context', 'choices'].forEach(k => { if (!e[k]) err(w + ' : ' + k + ' manquant'); });
    if (!['banal', 'majeur'].includes(e.kind)) err(w + ' : kind invalide');
    if (!sectors.has(e.sector)) err(w + ' : secteur inconnu ' + e.sector);
    if (!regions.has(e.region)) err(w + ' : région inconnue ' + e.region);
    if (e.sequel_of && !eventIds.has(e.sequel_of)) err(w + ' : sequel_of pointe vers un événement absent ou postérieur');
    if (V2) {
      const r = e.real;
      if (!r || !r.date || !r.place || !r.fact) err(w + ' : real incomplet (date, place, fact)');
      else if (!Array.isArray(r.sources) || !r.sources.length || r.sources.some(x => !x.label || !/^https:\/\//.test(x.url))) err(w + ' : real.sources manquantes ou sans url https');
      if (r && r.date) { const ys = (String(r.date).match(/\b(19|20)\d{2}\b/g) || []).map(Number); if (!ys.length) err(w + ' : real.date sans année'); else factYears.push({ id: e.id, y: Math.min(...ys) }); }
      const c = e.camera;
      if (!c || !regions.has(c.region) || !(c.x >= 0 && c.x <= 100 && c.y >= 0 && c.y <= 100) || !(c.zoom >= 1 && c.zoom <= 3)) err(w + ' : camera invalide');
      else {
        const reg = GAME.regions.find(x => x.id === c.region);
        const large = reg.national || reg.abroad;
        if (large && c.zoom > 1.3) warn(w + ' : zoom > 1,3 pour un sujet national ou européen');
        if (!large && (c.zoom < 1.6 || c.zoom > 2.8)) warn(w + ' : zoom hors 1,6-2,8 pour un lieu précis');
      }
      checkFx(e.fx, w, 3, 6);
      scanDates(e, w);
      if (V21 && e.kind === 'majeur' && !e.choices.some(c => leverChoice(c) >= 0.01)) (V22 ? err : warn)(w + ' : aucun choix qui améliore le solde');
      const n = e.choices.map(ch => (ch.fx || []).length);
      if (Math.max(...n) - Math.min(...n) > 1) warn(w + ' : nombre d\'objets fx inégal entre les choix (' + n.join('/') + ')');
    }
    sectorCount[e.sector] = (sectorCount[e.sector] || 0) + 1;
    regionCount[e.region] = (regionCount[e.region] || 0) + 1;
    if (e.choices.length < 3 || e.choices.length > 5) err(w + ' : 3 à 5 choix attendus');
    if (V27) evIndex[e.id] = { week: d.day, order: evOrder++, choices: new Set(e.choices.map(c => c.id)), ev: e };
    const cids = new Set(); const labelsSeen = new Set();
    e.choices.forEach(c => {
      nChoices++;
      const wc = w + '/' + c.id;
      if (cids.has(c.id)) err(wc + ' : id de choix en double'); cids.add(c.id);
      ['label', 'plus', 'minus'].forEach(k => { if (!c[k]) err(wc + ' : ' + k + ' manquant'); });
      if (typeof c.budget !== 'number') err(wc + ' : budget manquant');
      if (V26) checkExpert(c, wc, labelsSeen);
      if (V26 && ((c.budget || 0) !== 0 || (c.once || 0) !== 0) && !c.budget_note) err(wc + ' : budget_note manquant (effet budgétaire non nul)');
      if (V26 && c.budget_note) checkNote(c.budget_note, leverChoice(c), wc);
      if (c.once !== undefined && typeof c.once !== 'number') err(wc + ' : once non numérique');
      checkAxes(c.axes, wc); checkInd(c.ind, wc); checkInd(c.followup_ind, wc + ' followup');
      if (V2) checkFx(c.fx, wc, 1, 6);
      levChoices[sign(leverChoice(c))]++;
      if (c.followup) { nFollow++; if (!(c.followup_in >= 1 && c.followup_in <= 2)) err(wc + ' : followup_in doit valoir 1 ou 2'); }
      if (c.plus && c.minus) {
        const gap = Math.abs(c.plus.length - c.minus.length);
        lenGap.push(gap);
        if (gap > 12) warn(wc + ' : plus/moins de longueurs inégales (' + c.plus.length + '/' + c.minus.length + ')');
      }
    });
  });
});

// v2.7 : deux réponses compatibles (multi), rappel des décisions passées (recall), choix conditionnels (requires), règle des réformes.
if (V27) {
  if (!GAME.rules || GAME.rules.reforms_per_week !== 2) err('v2.7 : GAME.rules.reforms_per_week doit valoir 2');
  const past = (ref, cur, where) => {
    const p = ref && evIndex[ref.event];
    if (!p) { err(where + ' : événement passé inconnu ' + (ref && ref.event)); return false; }
    if (!(p.order < cur.order)) err(where + ' : ' + ref.event + ' n\'est pas antérieur');
    else if (p.week >= cur.week) warn(where + ' : ' + ref.event + ' est dans la même semaine');
    if (!p.choices.has(ref.choice)) { err(where + ' : choix ' + ref.choice + ' absent de ' + ref.event); return false; }
    return true;
  };
  let nMulti = 0; const recallWeeks = new Set(); const recallList = [];
  Object.entries(evIndex).forEach(([id, cur]) => {
    const e = cur.ev, w = 'événement ' + id;
    if (e.multi) {
      nMulti++;
      const m = e.multi;
      if (m.max !== 2) err(w + ' : multi.max doit valoir 2');
      if (!m.hint || m.hint.length > 120) err(w + ' : multi.hint manquant ou trop long');
      if (!Array.isArray(m.pairs) || !m.pairs.length) err(w + ' : multi.pairs vide');
      else { const seen = new Set(); m.pairs.forEach(pr => {
        if (!Array.isArray(pr) || pr.length !== 2 || pr[0] === pr[1]) { err(w + ' : paire multi invalide ' + JSON.stringify(pr)); return; }
        pr.forEach(c => { if (!cur.choices.has(c)) err(w + ' : paire multi avec choix inconnu ' + c); });
        const k = [...pr].sort().join('+'); if (seen.has(k)) err(w + ' : paire multi en double ' + k); seen.add(k);
      }); }
      scanDates({ hint: m.hint }, w + ' multi');
    }
    if (e.recall) {
      if (!Array.isArray(e.recall) || !e.recall.length) { err(w + ' : recall vide'); return; }
      const evs = new Set();
      e.recall.forEach((r, i) => {
        const wr = w + ' recall[' + i + ']';
        if (!r.text) err(wr + ' : text manquant');
        past(r, cur, wr); evs.add(r.event);
        checkInd(r.ind, wr);
        if ((r.budget || 0) !== 0 && !r.budget_note) err(wr + ' : budget_note manquant');
        if (r.budget_note) checkNote(r.budget_note, r.budget || 0, wr);
        if (r.budget !== undefined && Math.abs(r.budget) > 1) warn(wr + ' : effet budgétaire d\'un rappel trop fort');
        scanDates({ text: r.text }, wr);
      });
      evs.forEach(pe => { const p = evIndex[pe]; if (p) p.choices.forEach(c => { if (!e.recall.some(r => r.event === pe && r.choice === c)) warn(w + ' : recall sans texte pour ' + pe + '/' + c); }); });
      recallWeeks.add(cur.week); recallList.push(id + ' <- ' + [...evs].join(','));
    }
    e.choices.forEach(c => { if (c.requires) past(c.requires, cur, w + '/' + c.id + ' requires'); });
    if (e.choices.filter(c => !c.requires).length < 3) err(w + ' : au moins 3 choix sans condition attendus');
  });
  const nEv = Object.keys(evIndex).length;
  console.log('v2.7 : événements avec multi :', nMulti, '/', nEv, '| avec recall :', recallList.length, '—', recallList.join(' ; '));

  if (recallList.length < 6) err('v2.7 : au moins 6 événements avec recall attendus');
  for (let wk = 2; wk <= GAME.days.length; wk++) if (!recallWeeks.has(wk)) err('v2.7 : semaine ' + wk + ' sans événement avec recall');
  console.log('v2.7 : offres par semaine :', GAME.days.map(d => (d.offer || []).length).join(' / '));
}

const progIds = new Set();
let nBlock = 0, nResult = 0;
const levProgs = { positif: [], negatif: [], neutre: [] };
const axSum = { eco: 0, soc: 0, eu: 0, env: 0 };
GAME.programs.forEach(p => {
  const w = 'proposition ' + p.id;
  if (progIds.has(p.id)) err(w + ' : id en double'); progIds.add(p.id);
  if (eventIds.has(p.id)) err(w + ' : id partagé avec un événement');
  ['id', 'label', 'sector', 'origin', 'benefits', 'problems', 'later'].forEach(k => { if (!p[k]) err(w + ' : ' + k + ' manquant'); });
  if (!sectors.has(p.sector)) err(w + ' : secteur inconnu ' + p.sector);
  if (typeof p.budget !== 'number') err(w + ' : budget manquant');
  if (V26 && !p.budget_note) err(w + ' : budget_note manquant');
  if (!Array.isArray(p.sources) || !p.sources.length || p.sources.some(x => !x.label || !/^https:\/\//.test(x.url))) err(w + ' : sources manquantes ou sans url https');
  if (V26 && p.budget_note) checkNote(p.budget_note, (p.budget || 0) + (p.once || 0), w);
  if (V26 && p.fx) checkFx(p.fx, w, 0, 8);
  checkAxes(p.axes, w); checkInd(p.ind, w);
  if (p.benefits.length !== p.problems.length) warn(w + ' : autant de bénéfices que de problèmes attendu');
  p.later.forEach((l, i) => {
    if (!(l.in >= 1) || !l.text) err(w + ' : later[' + i + '] incomplet');
    if (V21 && l.in > 3) warn(w + ' : later[' + i + '] au-delà de 3 semaines, invisible dans le prototype');
    checkInd(l.ind, w + ' later');
  });
  if (V21) {
    if (!p.why_cost || !p.why_gain) err(w + ' : why_cost et why_gain attendus');
    if (!Array.isArray(p.steps) || p.steps.length < 2 || p.steps.length > 4) err(w + ' : 2 à 4 étapes attendues');
    else p.steps.forEach((st, i) => { if (!st.label || !(st.weeks >= 1)) err(w + ' : étape ' + i + ' incomplète'); });
    const hasBlockStep = (p.steps || []).some(st => st.block);
    if (hasBlockStep !== !!p.block) err(w + ' : block présent sans étape block:true, ou l\'inverse');
    if (p.block) {
      nBlock++;
      const bl = p.block;
      if (!bl.title || !bl.text) err(w + ' : block.title et block.text attendus');
      if (!Array.isArray(bl.choices) || bl.choices.length < 3 || bl.choices.length > 4) err(w + ' : block doit avoir 3 ou 4 sorties');
      else {
        const ids = new Set();
        bl.choices.forEach(c => {
          const wb = w + ' block/' + c.id;
          if (ids.has(c.id)) err(wb + ' : id en double'); ids.add(c.id);
          if (!['pass', 'amend', 'abandon'].includes(c.outcome)) err(wb + ' : outcome invalide');
          if (c.outcome === 'amend' && !(c.factor >= 0.5 && c.factor <= 0.7)) err(wb + ' : factor attendu entre 0,5 et 0,7');
          if (!c.label || !c.plus || !c.minus) err(wb + ' : label, plus, minus attendus');
          if (V26) checkExpert(c, wb, null);
          if (V26 && ((c.budget || 0) !== 0 || (c.once || 0) !== 0) && !c.budget_note) err(wb + ' : budget_note manquant');
          if (c.plus && c.minus && Math.abs(c.plus.length - c.minus.length) > 12) warn(wb + ' : plus/moins de longueurs inégales');
          if (c.axes && Object.keys(c.axes).length) checkAxes(c.axes, wb);
          checkInd(c.ind, wb);
        });
        if (!bl.choices.some(c => c.outcome === 'abandon')) err(w + ' : block sans sortie « abandon »');
        if (!bl.choices.some(c => c.outcome === 'amend')) err(w + ' : block sans version de compromis');
      }
    }
    if (p.result) {
      nResult++;
      const rs = p.result;
      if (!(rs.in >= 1) || !rs.title) err(w + ' : result.in et result.title attendus');
      if (!Array.isArray(rs.outcomes) || rs.outcomes.length < 2) err(w + ' : result doit avoir au moins 2 issues');
      else {
        const sum = rs.outcomes.reduce((a, o) => a + (o.weight || 0), 0);
        if (Math.abs(sum - 1) > 1e-6) err(w + ' : poids des issues dont la somme ≠ 1');
        const ids = new Set();
        rs.outcomes.forEach(o => {
          const wo = w + ' result/' + o.id;
          if (ids.has(o.id)) err(wo + ' : id en double'); ids.add(o.id);
          ['id', 'label', 'text', 'plus', 'minus'].forEach(k => { if (!o[k]) err(wo + ' : ' + k + ' manquant'); });
          if (!(o.weight > 0 && o.weight < 1)) err(wo + ' : weight entre 0 et 1 attendu');
          if (V26 && ((o.budget || 0) !== 0 || (o.once || 0) !== 0) && !o.budget_note) err(wo + ' : budget_note manquant');
          if (V26 && o.budget_note) checkNote(o.budget_note, (o.budget || 0) + (o.once || 0), wo);
          if (V26 && o.fx) checkFx(o.fx, wo, 0, 8);
          if (o.plus && o.minus && Math.abs(o.plus.length - o.minus.length) > 12) warn(wo + ' : plus/moins de longueurs inégales');
          if (o.axes && Object.keys(o.axes).length) checkAxes(o.axes, wo);
          checkInd(o.ind, wo);
          (o.later || []).forEach((l, i) => { if (!(l.in >= 1) || !l.text) err(wo + ' : later[' + i + '] incomplet'); checkInd(l.ind, wo + ' later'); });
        });
      }
    }
    // Issue incertaine (référendum, négociation, appel d'offres, vote européen) : un résultat différé est attendu.
    if (V22 && !p.result && ((p.steps || []).some(st => /campagne|négociation|appel d'offres|appels d'offres|conseil de l'ue/i.test(st.label)) || /référendum|referendum/i.test(p.label))) err(w + ' : issue incertaine sans result');
    if (p.long_term) { if (!p.long_term.text || !p.long_term.horizon) err(w + ' : long_term incomplet'); checkInd(p.long_term.ind, w + ' long_term'); }
    scanDates(p, w);
    levProgs[sign(leverProg(p))].push(p.id);
  }
  for (const a of AXES) axSum[a] += (p.axes[a] || 0);
});
if (GAME.programs.length < 20 || (!V21 && GAME.programs.length > 25)) err('nombre de propositions inattendu');

// Neutralité : recherche de noms de partis ou de personnalités (liste indicative).
const banned = /\b(LFI|insoumis|Renaissance|RN\b|Rassemblement national|Républicains|PS\b|Parti socialiste|EELV|Écologistes|Reconquête|Horizons|MoDem|PCF|Mélenchon|Le Pen|Bardella|Macron|Zemmour|Retailleau|Philippe|Attal|Glucksmann|Ruffin|Tondelier|Wauquiez|Roussel|Lecornu)\b/i;
// Les adresses des sources (url) sont exclues : leur texte n'est pas affiché tel quel.
const all = JSON.stringify(GAME, (k, v) => k === 'url' ? undefined : v);
const m = all.match(banned); if (m) err('neutralité : terme sensible trouvé « ' + m[0] + ' »');

// Équilibre politique : classement interne des propositions (non publié dans le jeu).
const FAMILLES = {
  gauche: ['smic_hausse', 'retraite_60', 'taxe_hauts_patrimoines', 'regularisation_metiers_tension', 'encadrement_loyers'],
  droite: ['baisse_impots_production', 'report_age_65', 'non_remplacement_fonctionnaires', 'peines_planchers', 'baisse_cotisations_net'],
  centre: ['relance_nucleaire', 'defense_europeenne_emprunt', 'reseaux_sociaux_15', 'regulation_installation_medecins', 'revalorisation_enseignants'],
  ecologiste: ['sortie_nucleaire', 'renovation_massive', 'taxe_kerosene_train', 'sortie_pesticides', 'leasing_electrique'],
  souverainiste: ['sortie_marche_electricite', 'referendum_immigration', 'service_militaire', 'prix_planchers_agricoles', 'tva_energie_5_5']
};
if (V21) {
  FAMILLES.gauche.push('surtaxe_grandes_entreprises', 'plafonner_allegements');
  FAMILLES.droite.push('assurance_chomage', 'cessions_actifs');
  FAMILLES.centre.push('lutte_fraude', 'fusion_agences');
  FAMILLES.ecologiste.push('niches_brunes', 'taxe_billets_premium');
  FAMILLES.souverainiste.push('contribution_ue', 'controle_prestations');
  /* propositions 2027 ajoutées le 26/11/2026 */
  FAMILLES.gauche.push('ir_14_tranches', 'recrutements_publics'); FAMILLES.centre.push('reduction_impot_familles', 'recrutement_justice'); FAMILLES.droite.push('interets_emprunt_deductibles', 'rsa_suspendu_condamnes'); FAMILLES.souverainiste.push('tva_premiere_necessite', 'sortie_otan'); FAMILLES.ecologiste.push('requisition_logements_vacants');
}
/* 30 propositions 2027 ajoutées le 27/11/2026 */
{ const F30 = JSON.parse(require('fs').readFileSync(__dirname + '/familles_30.json', 'utf8')); Object.entries(F30).forEach(([id, f]) => FAMILLES[f].push(id)); }
if (V27) {
  FAMILLES.gauche.push('rsa_jeunes');
  FAMILLES.droite.push('jour_ferie_travaille');
  FAMILLES.centre.push('tva_sociale');
  FAMILLES.ecologiste.push('vols_courts_train');

}
const classes = Object.values(FAMILLES).flat();
classes.forEach(id => { if (!progIds.has(id)) err('famille : proposition inconnue ' + id); });
progIds.forEach(id => { if (!classes.includes(id)) warn('famille : proposition non classée ' + id); });

// Axes cumulés de tous les choix d'événements (pour vérifier qu'aucun camp n'est favorisé en moyenne).
const chAx = { eco: 0, soc: 0, eu: 0, env: 0 }; const chAxAbs = { eco: 0, soc: 0, eu: 0, env: 0 };
GAME.days.forEach(d => d.events.forEach(e => e.choices.forEach(c => AXES.forEach(a => { chAx[a] += (c.axes[a] || 0); chAxAbs[a] += Math.abs(c.axes[a] || 0); }))));

if (V2 && !V26 && ![4, 6].includes(GAME.days.length)) err('v2 : 4 ou 6 semaines attendues');
if (V26) {
  if (GAME.days.length !== 40) err('v3.1 : 40 semaines attendues');
  GAME.days.forEach(d => { if (d.events.filter(e => e.kind === 'majeur').length < 2 && d.day >= 7) err('semaine ' + d.day + ' : 2 grandes décisions attendues'); });
  const last = GAME.days[GAME.days.length - 1];
  if (last && !(last.offer || []).some(id => (GAME.programs.find(p => p.id === id) || {}).intensity === 'forte')) warn('dernière semaine : aucune proposition « forte » offerte');
}
if (V21) {
  const famOf = id => Object.keys(FAMILLES).find(f => FAMILLES[f].includes(id));
  if (process.env.DUMP_FAM) require('fs').writeFileSync(process.env.DUMP_FAM, JSON.stringify(FAMILLES));
  const offFam = {}; offered.forEach(id => offFam[famOf(id)] = (offFam[famOf(id)] || 0) + 1);
  const blkFam = {}; GAME.programs.filter(p => p.block).forEach(p => blkFam[famOf(p.id)] = (blkFam[famOf(p.id)] || 0) + 1);
  const levFam = {}; Object.keys(FAMILLES).forEach(f => levFam[f] = { positif: 0, negatif: 0, neutre: 0 });
  for (const [sg, ids] of Object.entries(levProgs)) ids.forEach(id => levFam[famOf(id)][sg]++);
  console.log('Semaines (v2.1) : propositions offertes', offered.size, '| par famille :', JSON.stringify(offFam));
  if (V22) {
    const ys = factYears.map(f => f.y);
    const span = Math.max(...ys) - Math.min(...ys);
    console.log('Années des faits réels :', factYears.map(f => f.y).sort().join(', '), '| étendue :', span, 'ans');
    if (span < 15) err('v2.2 : les faits réels doivent couvrir au moins 15 ans');
    console.log('Propositions avec résultat différé :', nResult, '—', GAME.programs.filter(p => p.result).map(p => p.id).join(', '));
  }
  console.log('Propositions avec blocage :', nBlock, '/', GAME.programs.length, '| par famille :', JSON.stringify(blkFam));
  console.log('Leviers sur le solde, choix d\'événements :', JSON.stringify(levChoices));
  console.log('Leviers sur le solde, propositions : positif', levProgs.positif.length, '| négatif', levProgs.negatif.length, '| neutre', levProgs.neutre.length);
  console.log('Leviers par famille :', JSON.stringify(levFam));
  const offLev = { positif: 0, negatif: 0, neutre: 0 }; offered.forEach(id => offLev[sign(leverProg(GAME.programs.find(p => p.id === id)))]++);
  console.log('Leviers parmi les propositions offertes :', JSON.stringify(offLev));
  if (Math.abs(levProgs.positif.length - levProgs.negatif.length) > 3) warn('propositions : leviers positifs et négatifs déséquilibrés');
  if (nBlock < GAME.programs.length / 4 || nBlock > GAME.programs.length / 2.5) warn('environ un tiers des propositions devraient avoir un blocage');
}
console.log('Version :', GAME.version, '| Jours :', GAME.days.length, '| événements :', nEvents, '| choix :', nChoices, '| suites (followup) :', nFollow, '| propositions :', GAME.programs.length);
console.log('Banals / majeurs :', GAME.days.flatMap(d => d.events).filter(e => e.kind === 'banal').length, '/', GAME.days.flatMap(d => d.events).filter(e => e.kind === 'majeur').length);
console.log('Événements par secteur :', JSON.stringify(sectorCount));
console.log('Événements par région :', JSON.stringify(regionCount));
console.log('Familles de propositions :', Object.entries(FAMILLES).map(([k, v]) => k + '=' + v.length).join(', '));
console.log('Somme des axes des propositions :', JSON.stringify(axSum));
console.log('Somme des axes des choix (signée) :', JSON.stringify(chAx), '| (absolue) :', JSON.stringify(chAxAbs));
const secProg = {}; GAME.programs.forEach(p => secProg[p.sector] = (secProg[p.sector] || 0) + 1);
console.log('Propositions par secteur :', JSON.stringify(secProg));
console.log('Écart moyen de longueur plus/moins :', (lenGap.reduce((a, b) => a + b, 0) / lenGap.length).toFixed(1), 'caractères');
warns.forEach(w => console.log('AVERTISSEMENT :', w));
errors.forEach(e => console.log('ERREUR :', e));
console.log(errors.length ? `${errors.length} erreur(s).` : 'OK : aucune erreur.');
process.exit(errors.length ? 1 : 0);
