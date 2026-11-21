'use strict';
/* =========================================================
   Boussole 2027 : moteur du plateau
   Lit la constante globale GAME (voir SCHEMA.md).
   ========================================================= */
var G = (typeof GAME !== 'undefined' && GAME) ? GAME : null;
if(!G){ document.body.innerHTML = '<p style="padding:24px;font-family:sans-serif">Le contenu du jeu est introuvable (constante GAME absente).</p>'; throw new Error('GAME absent'); }

/* ---------- Données normalisées ---------- */
function num(v, d){ v = Number(v); return isFinite(v) ? v : (d || 0); }
function arr(v){ return Array.isArray(v) ? v : []; }
var DAYS = arr(G.days);
var REGIONS = arr(G.regions);
var REG = {}; REGIONS.forEach(function(r){ REG[r.id] = r; });
var SECT = {}; arr(G.sectors).forEach(function(s){ SECT[s.id] = s; });
var AXES = G.axes || {};
var AXK = Object.keys(AXES);
var AXNAME = { eco:'Économie', soc:'Société', eu:'Europe', env:'Environnement' };
function axName(k){ return (AXES[k] && AXES[k].label) || AXNAME[k] || k; }
var INDS = arr(G.indicators);
var INDL = {}; INDS.forEach(function(i){ INDL[i.id] = i.label || i.id; });
var B = G.budget || {};
var JPA = Math.max(1, num(B.periodes_par_an, num(B.jours_par_an, 52)));
var UNIT = B.unite || 'Md€';
var BASE_DEF = (function(){
  if(B.deficit !== undefined && B.deficit !== null && num(B.deficit) !== 0) return Math.abs(num(B.deficit));
  if(B.depenses !== undefined && B.recettes !== undefined) return num(B.depenses) - num(B.recettes);
  return 0;
})();
function monthIndex(m){ if(m == null) return 0; var t = String(m).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim(); var names = ['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre']; for(var i = 0; i < 12; i++){ if(t.indexOf(names[i]) === 0) return i + 1; } return 0; }
var START_MONTH = Math.min(12, Math.max(1, monthIndex(DAYS[0] && DAYS[0].month) || num(B.mois_depart || G.mois_depart, 9)));
var START_YEAR = num(B.annee, 2026);
var PROGS = arr(G.programs);
var NEWS = arr(G.news);
var EVMAP = {};
DAYS.forEach(function(d, i){ arr(d.events).forEach(function(e){ EVMAP[e.id] = { ev:e, day:i }; }); });
var MONTHS = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
var MONTHS_S = ['janv.','févr.','mars','avril','mai','juin','juil.','août','sept.','oct.','nov.','déc.'];
var WEATHER = { soleil:'Soleil', pluie:'Pluie', neige:'Neige', canicule:'Canicule', vent:'Vent fort' };
var KEY = 'boussole2027_partie_v1', PKEY = 'boussole2027_prefs_v1';
var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Outils ---------- */
function $(id){ return document.getElementById(id); }
function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }).replace(/ ([:;!?»%€])/g, '\u00A0$1').replace(/(\d) (\d{3})/g, '$1\u202F$2').replace(/« /g, '«\u00A0'); }
var NF1 = new Intl.NumberFormat('fr-FR', { minimumFractionDigits:1, maximumFractionDigits:1 });
var NF0 = new Intl.NumberFormat('fr-FR', { maximumFractionDigits:0 });
function f1(v){ if(Math.abs(v) < .05) v = 0; return NF1.format(v).replace('-', '−'); }
function f0(v){ return NF0.format(v).replace('-', '−'); }
function signed1(v){ return (v > 0 ? '+' : '') + f1(v); }
function clamp(v, a, b){ return Math.max(a, Math.min(b, v)); }
function hash(s){ var h = 2166136261; s = String(s); for(var i=0;i<s.length;i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function rng(seed){ var s = seed >>> 0; return function(){ s = (s + 0x6D2B79F5) >>> 0; var t = s; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function store(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); return true; }catch(e){ return false; } }
function fetchStore(k){ try{ var s = localStorage.getItem(k); return s ? JSON.parse(s) : null; }catch(e){ return null; } }
function dropStore(k){ try{ localStorage.removeItem(k); }catch(e){} }
function sectorLabel(id){ return (SECT[id] && SECT[id].label) || id || 'Divers'; }
function regionLabel(id){ return (REG[id] && REG[id].label) || ''; }
function levelMode(){ var m = G.levels && (G.levels[S.level] || G.levels[String(S.level)]); return m || (S.level >= 3 ? 'expert' : 'simple'); }
function evText(ev){ return levelMode() === 'expert' ? (ev.expert || ev.simple || ev.text || '') : (ev.simple || ev.expert || ev.text || ''); }
function choiceLabel(ch){ if(ch && ch.parts) return ch.parts.map(choiceLabel).join(' + '); var m = levelMode(); return (m === 'expert' ? (ch.label_expert || ch.label) : (ch.label_simple || ch.label)) || ''; }
function termLine(o, cls){ if(!o.term) return ''; return levelMode() === 'expert' ? '<span class="term ' + (cls || '') + '">' + esc(o.term) + '</span>' : ''; }
function termDetail(o){ if(!o.term || levelMode() === 'expert') return ''; return '<p class="muted" style="margin:2px 0 6px">Le terme exact : <i>' + esc(o.term) + '</i></p>'; }

/* ---------- Préférences ---------- */
var PREF = Object.assign({ theme:null, sound:false, vib:false }, fetchStore(PKEY) || {});
function savePrefs(){ store(PKEY, PREF); }
function applyTheme(){
  var t = PREF.theme || 'light';
  document.documentElement.setAttribute('data-theme', t);
  if(typeof bakeDecor === 'function' && document.getElementById('frTop')) setTimeout(bakeDecor, 30);
  var m = document.querySelector('meta[name="theme-color"]'); if(m) m.setAttribute('content', t === 'dark' ? '#2D2B46' : '#86AEB0');
}
applyTheme();

/* ---------- Sons et vibrations (désactivés par défaut) ---------- */
var AC = null;
function tone(freq, t0, dur, type, vol){
  var o = AC.createOscillator(), g = AC.createGain();
  o.type = type || 'sine'; o.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, AC.currentTime + t0);
  g.gain.exponentialRampToValueAtTime(vol || 0.08, AC.currentTime + t0 + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, AC.currentTime + t0 + dur);
  o.connect(g); g.connect(AC.destination); o.start(AC.currentTime + t0); o.stop(AC.currentTime + t0 + dur + 0.05);
}
function snd(kind){
  if(!PREF.sound) return;
  try{
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    if(kind === 'tap') tone(620, 0, .07, 'sine', .05);
    else if(kind === 'coin'){ tone(1320, 0, .12, 'triangle', .05); tone(1760, .07, .16, 'triangle', .04); }
    else if(kind === 'flip'){ tone(300, 0, .06, 'square', .015); tone(520, .04, .08, 'sine', .04); }
    else if(kind === 'stamp'){ tone(160, 0, .14, 'sine', .12); }
    else if(kind === 'day'){ tone(523, 0, .4, 'sine', .05); tone(659, .15, .4, 'sine', .05); tone(784, .3, .6, 'sine', .05); }
    else if(kind === 'note'){ tone(880, 0, .15, 'sine', .05); tone(660, .12, .2, 'sine', .04); }
  }catch(e){}
}
function vibe(p){ if(!PREF.vib) return; try{ if(navigator.vibrate) navigator.vibrate(p); }catch(e){} }

/* ---------- État de la partie ---------- */
var S = null;
function freshState(level){
  var ind = {}; INDS.forEach(function(i){ ind[i.id] = clamp(num(i.start, 50), 0, 100); });
  return {
    v:1, gv:G.version || '', level:level || 1, dayIdx:0,
    decided:{}, decidedDay:{}, applied:{}, notes:[], ind:ind, last:{},
    annual:0, onceTotal:0, dette:num(B.dette, 0), year:START_YEAR, month:START_MONTH,
    solde: 0, week:0, reforms:{}, weekApplied:{}, impact:[], recallDone:{}, nudged:{},
    finished:false, introShown:-1, stays:[], blockLog:[], reformNews:[], started:{}, unlockSeen:{}, results:[], start:{ ind:JSON.parse(JSON.stringify(ind)), def:BASE_DEF, dette:num(B.dette, 0) }, hist:[{ d:0, def:BASE_DEF, dette:num(B.dette,0) }]
  };
}
function save(){ if(S) store(KEY, S); }
function loadSave(){
  var s = fetchStore(KEY);
  if(!s || typeof s !== 'object' || s.v !== 1 || typeof s.dayIdx !== 'number') return null;
  s.stays = arr(s.stays); s.started = s.started || {}; s.unlockSeen = s.unlockSeen || {}; s.results = arr(s.results); s.start = s.start || { ind:{}, def:BASE_DEF, dette:num(B.dette, 0) }; s.reforms = s.reforms || {}; s.weekApplied = s.weekApplied || {}; s.impact = arr(s.impact); s.recallDone = s.recallDone || {}; s.nudged = s.nudged || {}; s.blockLog = arr(s.blockLog); s.decided = s.decided || {}; s.decidedDay = s.decidedDay || {}; s.applied = s.applied || {}; s.notes = arr(s.notes); s.ind = s.ind || {}; s.last = s.last || {};
  INDS.forEach(function(i){ if(typeof s.ind[i.id] !== 'number') s.ind[i.id] = clamp(num(i.start, 50), 0, 100); });
  s.dayIdx = clamp(s.dayIdx, 0, Math.max(0, DAYS.length));
  return s;
}
/* Recettes induites : plus de pouvoir d'achat et d'emplois = plus de consommation, d'impôts et de cotisations, moins d'allocations.
   Hypothèses du jeu (modifiables dans GAME.scales.induced) : 1 point de pouvoir d'achat = 2 Md€ de revenus des ménages, dont environ 30 % reviennent
   à l'État (TVA, impôts) ; 1 point d'emploi = 25 000 emplois, chacun rapportant environ 30 000 € par an (cotisations, impôts, allocations chômage évitées). */
function inducedCfg(){ var c = (G.scales && G.scales.induced) || {}; return { pa:num(c.pa_md, 0.6), em:num(c.emploi_md, 0.75) }; }
function induced(){
  var c = inducedCfg(), st = (S.start && S.start.ind) || {}, d = function(k){ return num(S.ind[k], 50) - num(st[k], 50); };
  return { pa:d('pouvoir_achat') * c.pa, em:d('emploi') * c.em, total:d('pouvoir_achat') * c.pa + d('emploi') * c.em };
}
function curDeficit(){ return BASE_DEF - S.annual - induced().total; }
function today(){ return DAYS[S.dayIdx] || null; }
function todayEvents(){ var d = today(); return d ? arr(d.events) : []; }
function remaining(){ return todayEvents().filter(function(e){ return !S.decided[e.id]; }); }
function nationalRegion(){
  var r = REGIONS.filter(function(r){ return /idf|ile|paris/i.test(r.id + ' ' + (r.label || '')); })[0];
  return r ? r.id : (REGIONS[0] && REGIONS[0].id);
}
function applyInd(ind){
  var changed = {};
  Object.keys(ind || {}).forEach(function(k){
    if(!(k in S.ind)) return;
    var d = num(ind[k]); if(!d) return;
    S.ind[k] = clamp(S.ind[k] + d, 0, 100); S.last[k] = d; changed[k] = d;
  });
  return changed;
}

/* #########################################################################
   ##  DESSIN : DÉBUT  (zone réservée au dessin du décor et des objets)    ##
   ##  Tout ce qui se voit sur le plateau est défini entre ce bandeau et   ##
   ##  le bandeau « DESSIN : FIN ». Le reste du fichier ne dessine rien,   ##
   ##  il place, anime et pilote.                                          ##
   ##  1. Géographie (FRANCE, CORSE, NEIGH) en lon/lat -> unités plateau   ##
   ##  2. Icônes de secteur (ICON) et météo (weatherSvg)                   ##
   ##  3. Décor statique : buildBoard() -> <svg id="map">, puis cuit en    ##
   ##     image (bakeDecor) ; mountainSvg, hillSvg, treeSvg, houseSvg      ##
   ##  4. Bibliothèque d'objets animés : OBJ { nom: {cat, w, h, d, ...} }   ##
   #########################################################################
   Géographie stylisée (tracée à la main, simplifiée)
   ========================================================= */
var TILT = 0.94;
function X(lon){ return (lon + 4.8) / 14.4 * 100; }
function Y(lat){ return (51.1 - lat) / 9.7 * 100 * TILT; }
function P(lon, lat){ return [X(lon), Y(lat)]; }
function RP(x, y){ return [num(x, 50), num(y, 45) * TILT]; }
function F(v){ return Math.round(v * 100) / 100; }
function smooth(pts, closed){
  var n = pts.length; if(n < 2) return '';
  function g(i){ return closed ? pts[(i + n) % n] : pts[clamp(i, 0, n - 1)]; }
  var d = 'M' + F(pts[0][0]) + ',' + F(pts[0][1]);
  var segs = closed ? n : n - 1;
  for(var i = 0; i < segs; i++){
    var p0 = g(i - 1), p1 = g(i), p2 = g(i + 1), p3 = g(i + 2);
    d += 'C' + F(p1[0] + (p2[0] - p0[0]) / 6) + ',' + F(p1[1] + (p2[1] - p0[1]) / 6) + ' ' + F(p2[0] - (p3[0] - p1[0]) / 6) + ',' + F(p2[1] - (p3[1] - p1[1]) / 6) + ' ' + F(p2[0]) + ',' + F(p2[1]);
  }
  return d + (closed ? 'Z' : '');
}
function L(list){ return list.map(function(p){ return P(p[0], p[1]); }); }

var FRANCE = L([[2.37,51.05],[2.55,51.08],[3.0,50.78],[3.6,50.48],[4.2,49.98],[4.85,50.15],[4.95,49.8],[5.8,49.55],[6.4,49.47],[7.0,49.15],[7.6,49.05],[8.2,48.97],
 [7.8,48.6],[7.55,48.1],[7.6,47.6],[7.0,47.5],[6.9,47.35],[6.1,46.6],[6.1,46.25],[5.95,46.13],[6.8,46.0],[7.0,45.6],[6.65,45.1],[7.0,44.85],[6.9,44.35],[7.7,44.1],[7.5,43.78],
 [7.2,43.65],[6.9,43.45],[6.6,43.17],[6.0,43.08],[5.4,43.2],[4.85,43.4],[4.5,43.45],[4.0,43.55],[3.5,43.3],[3.05,43.0],[3.05,42.55],[3.15,42.43],
 [2.6,42.35],[1.75,42.5],[1.4,42.6],[0.7,42.85],[0.0,42.7],[-0.7,42.9],[-1.4,43.05],[-1.78,43.37],
 [-1.5,43.55],[-1.25,44.2],[-1.2,44.65],[-1.25,45.3],[-1.1,45.6],[-1.2,46.0],[-1.5,46.3],[-2.1,46.8],[-2.2,47.15],[-2.5,47.3],[-3.0,47.5],[-3.6,47.75],[-4.35,47.8],[-4.7,48.05],[-4.45,48.2],[-4.78,48.4],
 [-4.6,48.6],[-3.9,48.72],[-3.2,48.86],[-2.6,48.55],[-2.0,48.65],[-1.55,48.66],[-1.6,49.2],[-1.85,49.7],[-1.3,49.68],[-1.15,49.35],[-0.4,49.33],[0.1,49.45],[0.2,49.7],[1.0,49.92],[1.55,50.2],[1.6,50.7],[1.85,50.95]]);
var CORSE = L([[9.4,43.02],[9.5,42.75],[9.55,42.1],[9.3,41.6],[9.2,41.38],[8.85,41.52],[8.6,41.9],[8.6,42.3],[8.75,42.6],[9.28,42.7],[9.33,42.98]]);
var NEIGH = [
  L([[-5.7,50.05],[-5.0,50.0],[-4.2,50.35],[-3.5,50.35],[-3.0,50.7],[-2.0,50.6],[-1.0,50.78],[0.3,50.75],[1.0,50.95],[1.4,51.15],[1.45,51.4],[0.9,51.55],[1.75,52.0],[1.75,52.8],[0.5,53.5],[-1.8,55.8],[-1.8,57.7],[-3.2,58.6],[-3.0,72],[-6.5,72],[-6.2,57.8],[-5,57],[-4.6,51.75],[-5.3,51.75],[-3.0,51.25],[-4.2,51.15],[-5.0,50.6]]),
  L([[2.0,50.9],[3.4,51.38],[4.0,51.6],[4.3,52.1],[4.8,52.9],[6.5,53.5],[9,54],[8.3,55.5],[8.2,56.6],[8.6,57.1],[10.6,57.7],[10.4,56.4],[12.4,56],[12,58.5],[11,59.5],[11.2,72],[25,72],[19,40.2],[18.5,40.2],[17.2,39.0],[16.5,38.4],[15.8,38.0],[15.6,40.0],[14.2,40.8],[13,41.25],[12.2,41.7],[11.1,42.4],[10.5,43.3],[10.2,43.9],[9.6,44.1],[8.9,44.42],[8.2,43.95],[7.4,43.8],[6.4,44.6],[5.6,47.0],[4.2,49.6]]),
  L([[3.0,42.5],[3.3,42.2],[3.2,41.9],[2.2,41.35],[1.0,41.05],[0.8,40.7],[-0.3,39.5],[0.2,38.8],[-0.8,37.6],[-2,36.7],[-9,36.5],[-9.5,39],[-8.8,42],[-9.3,43.2],[-8,43.7],[-6,43.6],[-4.5,43.42],[-3.0,43.45],[-1.7,43.3],[-0.6,42.8],[1.5,42.4]]),
  L([[8.4,41.1],[9.2,41.25],[9.8,40.9],[9.65,40.0],[9.6,39.2],[9.0,39.0],[8.4,39.0],[8.4,40.0],[8.15,40.6]]),
  L([[2.4,39.55],[3.1,39.95],[3.45,39.7],[3.2,39.3],[2.7,39.45]])
];

/* ---------- Icônes de secteur (traits, 4×4 unités) ---------- */
var ICON = {
  energie:'<path class="icof" d="M.5,-2.1 -1.3,.3H-.1L-.6,2.1 1.3,-.4H.1Z"/>',
  argent:'<circle class="ico" cx="0" cy="0" r="1.7"/><path class="ico" d="M.8,-.9C.2,-1.3-.9,-1-.9,0S.2,1.3.8,.9M-1.3,-.3H.3M-1.3,.3H.3"/>',
  sante:'<path class="icof" d="M-.55,-1.8H.55V-.55H1.8V.55H.55V1.8H-.55V.55H-1.8V-.55H-.55Z"/>',
  logement:'<path class="ico" d="M-1.9,.1 0,-1.7 1.9,.1M-1.25,-.5V1.7H1.25V-.5M-.4,1.7V.6H.4V1.7"/>',
  transports:'<rect class="ico" x="-1.3" y="-1.8" width="2.6" height="3" rx=".6"/><path class="ico" d="M-1.3,-.4H1.3M-.9,1.9-1.4,2.4M.9,1.9 1.4,2.4"/><circle class="icof" cx="-.6" cy=".6" r=".25"/><circle class="icof" cx=".6" cy=".6" r=".25"/>',
  agriculture:'<path class="ico" d="M0,2V-1.9M0,-1C-.8,-1.3-.9,-1.9-.9,-1.9S-.1,-1.8 0,-1.1M0,-1C.8,-1.3.9,-1.9.9,-1.9S.1,-1.8 0,-1.1M0,.1C-.8,-.2-.9,-.8-.9,-.8S-.1,-.7 0,0M0,.1C.8,-.2.9,-.8.9,-.8S.1,-.7 0,0"/>',
  securite:'<path class="ico" d="M0,-1.9 1.6,-1.2V.2C1.6,1.2.8,1.7 0,2-.8,1.7-1.6,1.2-1.6,.2V-1.2Z"/>',
  justice:'<path class="ico" d="M0,-1.9V1.8M-1,1.8H1M-1.7,-1.2H1.7M-1.7,-1.2-2.1,.2H-1.3ZM1.7,-1.2 1.3,.2H2.1Z"/>',
  europe:'<g class="icof"><circle cx="0" cy="-1.6" r=".3"/><circle cx="1.52" cy="-.5" r=".3"/><circle cx=".94" cy="1.3" r=".3"/><circle cx="-.94" cy="1.3" r=".3"/><circle cx="-1.52" cy="-.5" r=".3"/></g>',
  education:'<path class="ico" d="M-1.9,-1.2Q-.9,-1.6 0,-1 .9,-1.6 1.9,-1.2V1.4Q.9,1 0,1.6-.9,1-1.9,1.4ZM0,-1V1.6"/>',
  fiscalite:'<circle class="ico" cx="-1" cy="-1" r=".6"/><circle class="ico" cx="1" cy="1" r=".6"/><path class="ico" d="M1.4,-1.6-1.4,1.6"/>',
  environnement:'<path class="ico" d="M-1.5,1.6C-1.6,-.6-.3,-1.8 1.7,-1.8 1.7,.4.4,1.6-1.5,1.6ZM-1.5,1.6 .6,-.5"/>',
  numerique:'<rect class="ico" x="-1.2" y="-1.2" width="2.4" height="2.4" rx=".3"/><path class="ico" d="M-.5,-1.2V-1.9M.5,-1.2V-1.9M-.5,1.2V1.9M.5,1.2V1.9M-1.2,-.5H-1.9M-1.2,.5H-1.9M1.2,-.5H1.9M1.2,.5H1.9"/>',
  retraites:'<path class="ico" d="M-1.3,-1.9H1.3M-1.3,1.9H1.3M-1,-1.9C-1,-.6 1,-.6 1,0S-1,.6-1,1.9M1,-1.9C1,-.6-1,-.6-1,0S1,.6 1,1.9"/>',
  industrie:'<circle class="ico" cx="0" cy="0" r="1.15"/><circle class="ico" cx="0" cy="0" r="1.75" stroke-dasharray=".55 .55" stroke-width=".7"/>',
  culture:'<path class="ico" d="M-.6,1.3V-1.6L1.5,-2V.9"/><circle class="icof" cx="-1.1" cy="1.4" r=".6"/><circle class="icof" cx="1" cy="1" r=".6"/>',
  frontiere:'<circle class="ico" cx="0" cy="0" r="1.8"/><path class="ico" d="M0,-1.8V1.8M-1.8,0H1.8M-1.3,-1.2C-.4,-.6.4,-.6 1.3,-1.2M-1.3,1.2C-.4,.6.4,.6 1.3,1.2"/>',
  social:'<circle class="ico" cx="-.8" cy="-.9" r=".7"/><circle class="ico" cx=".9" cy="-.9" r=".7"/><path class="ico" d="M-2,1.7C-2,.4-1.4,-.1-.8,-.1S.4,.4.4,1.7M-.1,.3C.2,0 .5,-.1.9,-.1 1.5,-.1 2,.4 2,1.7"/>',
  defense:'<path class="ico" d="M-1.8,1.8 1.6,-1.6M1.6,-1.6 1.9,-1.9M.6,-1.9 1.9,-.6M-1.1,.4-.4,1.1"/>'
};
function iconKey(id, label){
  var s = (String(id || '') + ' ' + String(label || '')).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  var rules = [
    ['energie',/energ|electri|nucle|carbur/],['sante',/sante|hopital|medec|soin/],['logement',/logement|loyer|habitat|immobil/],
    ['transports',/transport|train|rail|mobilit|route/],['agriculture',/agri|paysan|ferme|aliment/],['justice',/justice|tribunal|prison/],
    ['defense',/defense|armee|militaire/],['securite',/secur|police|ordre/],['europe',/europe|ue\b|international|diploma/],
    ['education',/educ|ecole|enseign|universit|jeunesse/],['retraites',/retraite|pension/],['fiscalite',/impot|fiscal|taxe|budget|dette|financ/],
    ['environnement',/environ|climat|ecolog|eau|biodiv/],['numerique',/numer|tech|ia\b|internet|donnee/],['industrie',/industr|usine|commerce|entreprise/],
    ['culture',/cultur|media|sport|patrimoine/],['frontiere',/immigr|frontiere|migra|asile/],['argent',/salaire|travail|emploi|pouvoir|revenu|smic|prix|chomage/],
    ['social',/social|solidar|famil|handicap|cohesion|democrat|institution|territ/]
  ];
  for(var i = 0; i < rules.length; i++){ if(rules[i][1].test(s)) return rules[i][0]; }
  return null;
}
function iconSvg(sector, label){
  var k = iconKey(sector, label || sectorLabel(sector));
  if(k) return ICON[k];
  var l = esc((sectorLabel(sector) || '?').charAt(0).toUpperCase());
  return '<text class="icof" x="0" y="1.15" font-size="3.4" text-anchor="middle" font-family="Bricolage Grotesque, sans-serif" font-weight="800">' + l + '</text>';
}
function medal(sector, cls){ return '<div class="medal ' + (cls || '') + '"><svg viewBox="-2.6 -2.6 5.2 5.2">' + iconSvg(sector) + '</svg></div>'; }

/* ---------- Icônes météo ---------- */
function weatherSvg(w){
  var sun = '<circle cx="20" cy="20" r="7.5" fill="#F2B95A" stroke="var(--line)" stroke-width="2"/><g stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round"><path d="M20 4v4M20 32v4M4 20h4M32 20h4M8.7 8.7l2.8 2.8M28.5 28.5l2.8 2.8M8.7 31.3l2.8-2.8M28.5 11.5l2.8-2.8"/></g>';
  var cloud = function(fill){ return '<path d="M11 29h18a6 6 0 0 0 0-12 8 8 0 0 0-15.4-1.8A6.2 6.2 0 0 0 11 29z" fill="' + fill + '" stroke="var(--line)" stroke-width="2" stroke-linejoin="round"/>'; };
  if(w === 'pluie') return cloud('var(--paper-3)') + '<g stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round"><path d="M14 32l-2 4M21 32l-2 4M28 32l-2 4"/></g>';
  if(w === 'neige') return cloud('var(--paper)') + '<g fill="var(--ink)"><circle cx="13" cy="34" r="1.6"/><circle cx="20" cy="36" r="1.6"/><circle cx="27" cy="34" r="1.6"/></g>';
  if(w === 'canicule') return '<circle cx="20" cy="17" r="9" fill="#F2B95A" stroke="var(--line)" stroke-width="2"/><g fill="none" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round"><path d="M7 31c3-2 5 2 8 0s5 2 8 0 5 2 8 0"/><path d="M9 36c3-2 5 2 8 0s5 2 8 0 5 2 6 0"/></g>';
  if(w === 'vent') return '<g fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round"><path d="M5 15h20a4.5 4.5 0 1 0-4.5-4.5"/><path d="M5 22h27a4.5 4.5 0 1 1-4.5 4.5"/><path d="M5 29h14"/></g>';
  return sun;
}
var COMPASS = '<svg viewBox="0 0 66 66"><circle cx="33" cy="33" r="29" fill="var(--paper)" stroke="var(--line)" stroke-width="3"/><circle cx="33" cy="33" r="22" fill="none" stroke="var(--paper-3)" stroke-width="2" stroke-dasharray="2 4"/><path d="M33 9l6 24-6 24-6-24z" fill="var(--ink)"/><path d="M33 9l6 24H27z" fill="var(--brass)"/><path d="M9 33l24-5 24 5-24 5z" fill="var(--ink-3)" opacity=".55"/><circle cx="33" cy="33" r="3.2" fill="var(--paper)" stroke="var(--line)" stroke-width="2"/></svg>';
var XICON = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M3 3l10 10M13 3L3 13"/></svg>';

