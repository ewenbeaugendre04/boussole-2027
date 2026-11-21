'use strict';
/* =========================================================
   Candidats : proximité indicative, fiches neutres
   (données : data/candidats.js ; tout est local)
   ========================================================= */
var CAND = (typeof CANDIDATS !== 'undefined' && CANDIDATS) ? CANDIDATS : null;
var CAND_ICO = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M4 21c1-4.5 4.4-6.5 8-6.5s7 2 8 6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>';
function candById(id){ return CAND ? CAND.liste.filter(function(c){ return c.id === id; })[0] : null; }
function candNote(){ return '<p class="cd-note">' + esc(CAND.avertissement) + ' Mise à jour : ' + esc(candDate(CAND.maj)) + '.</p>'; }
function candDate(d){ var p = String(d || '').split('-'); return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : d; }
/* Position du candidat sur un axe, pour un secteur donné (le secteur prime sur l'axe général). */
function candVal(c, sector, k){
  if(sector && CAND.secteur_axe[sector] === k && c.secteurs[sector]) return c.secteurs[sector].v;
  return c.axes[k] ? c.axes[k].v : null;
}
/* Distance moyenne sur les axes où le joueur a une position. null si rien de comparable. */
function candDist(c, ax, sector){
  var s = 0, n = 0;
  AXK.forEach(function(k){
    var a = ax[k]; if(!a || !a.n) return;
    if(sector && CAND.secteur_axe[sector] === k && !c.secteurs[sector]) return;
    var v = candVal(c, sector, k); if(v == null) return;
    s += Math.abs(a.s / a.n - v); n++;
  });
  return n ? { d:s / n, n:n } : null;
}
function candProches(ax, sector, max){
  return CAND.liste.map(function(c){ var r = candDist(c, ax, sector); return r ? { c:c, d:r.d, n:r.n } : null; })
    .filter(Boolean).sort(function(a, b){ return a.d - b.d || a.c.nom.localeCompare(b.c.nom); }).slice(0, max || 5);
}
function candProxText(d){ return d < .5 ? 'très proche' : d < 1 ? 'proche' : d < 1.6 ? 'assez éloigné' : 'éloigné'; }
function candListHtml(list){
  if(!list.length) return '<p class="muted">Pas encore assez de choix, ou pas de position connue des candidats ici.</p>';
  return '<ul class="cd-list">' + list.map(function(r){
    return '<li><button class="cd-row pressable" data-cand="' + esc(r.c.id) + '"><b>' + esc(r.c.nom) + '</b><small>' + esc(candProxText(r.d)) + ' · écart ' + (Math.round(r.d * 10) / 10).toString().replace('.', ',') + ' sur 4</small></button></li>';
  }).join('') + '</ul>';
}
function candBindRows(card){
  card.addEventListener('click', function(e){
    var b = e.target.closest('[data-cand]'); if(b){ closeCard(true); openCandFiche(b.getAttribute('data-cand')); }
    if(e.target.closest('[data-cand-all]')){ closeCard(true); openCandidats(); }
  });
}
function openCandSecteur(sector){
  var o = orientation(), d = o.per[sector];
  var html = '<h2 class="ctitle" style="margin-top:2px">' + esc(sectorLabel(sector)) + ' : candidats proches</h2>' +
    '<p class="muted" style="margin:0 0 8px">Comparaison entre vos choix sur ce secteur et les positions publiées des candidats.</p>' +
    candListHtml(d ? candProches(d.ax, sector, 5) : []) + candNote() +
    '<button class="btn wide pressable" data-cand-all>Voir toutes les fiches candidats</button>';
  candBindRows(openCard(html, { label:'Candidats proches' }));
}
function openCandGlobal(){
  var o = orientation();
  var html = '<h2 class="ctitle" style="margin-top:2px">Candidats proches de vos choix</h2>' +
    '<p class="muted" style="margin:0 0 8px">Sur l\'ensemble des axes, d\'après toutes vos décisions.</p>' +
    candListHtml(candProches(o.glob, null, 5)) + candNote() +
    '<button class="btn wide pressable" data-cand-all>Voir toutes les fiches candidats</button>';
  candBindRows(openCard(html, { label:'Candidats proches' }));
}
function candTrack(label, ax, p){
  var v = p ? p.v : null, pct = v == null ? 50 : 50 + v / 2 * 50;
  return '<div class="axis"><div class="an">' + esc(label) + (p ? '<small>' + esc(p.note) + '</small>' : '<small>position non connue</small>') + '</div>' +
    '<div class="track sm cd-track" role="img" aria-label="' + esc(label + ' : ' + (v == null ? 'non connue' : v)) + '"><span class="knob' + (v == null ? ' none' : '') + '" style="left:' + F(pct) + '%"></span></div>' +
    '<div class="ends"><span>' + esc(ax.neg || '') + '</span><span>' + esc(ax.pos || '') + '</span></div></div>';
}
function openCandFiche(id){
  var c = candById(id); if(!c) return;
  var src = CAND.sources;
  var sects = arr(G.sectors).filter(function(s){ return c.secteurs[s.id]; });
  var html = '<h2 class="ctitle" style="margin-top:2px">' + esc(c.nom) + '</h2>' +
    '<div class="meta">' + esc(c.parti) + ' · ' + (c.statut === 'declare' ? 'candidature déclarée' : 'candidature pressentie') + '</div>' +
    '<p class="cd-orig">Contenu tiré du ' + esc(CAND.origine[c.programme_origine] || '') + '.' +
    (c.sondage ? ' Baromètre du 18/11/2026 : ' + esc(c.sondage[0] === c.sondage[1] ? c.sondage[0] + ' %' : c.sondage[0] + ' à ' + c.sondage[1] + ' %') + '.' : '') + '</p>' +
    '<div class="sec-h">Idées clés</div><ul class="cd-idees">' + c.idees.map(function(i){ return '<li>' + esc(i.texte) + ' <small>(' + esc(i.secteur_dossier) + ')</small></li>'; }).join('') + '</ul>' +
    '<div class="sec-h">Sur les axes du jeu</div>' + AXK.map(function(k){ return candTrack(axName(k), AXES[k] || {}, c.axes[k]); }).join('') +
    (sects.length ? '<div class="sec-h">Par secteur</div>' + sects.map(function(s){ var k = CAND.secteur_axe[s.id]; return candTrack(s.label + ' · ' + axName(k), AXES[k] || {}, c.secteurs[s.id]); }).join('') : '') +
    '<div class="sec-h">Sources</div><p class="cd-src">' + esc(src.dossier) + (c.sondage ? '<br>' + esc(src.ifop) : '') + '</p>' + candNote() +
    '<button class="btn wide pressable" data-cand-all>Toutes les fiches</button>';
  candBindRows(openCard(html, { label:'Fiche candidat' }));
}
function openCandidats(){
  var fam = CAND.familles, mes = CAND.liste.filter(function(c){ return c.sondage; }), autres = CAND.liste.filter(function(c){ return !c.sondage; });
  function row(c){ return '<li><button class="cd-row pressable" data-cand="' + esc(c.id) + '"><b>' + esc(c.nom) + '</b><small>' + esc(c.parti) + (c.statut === 'declare' ? '' : ' · pressenti') + '</small></button></li>'; }
  var groups = Object.keys(fam).map(function(f){ var l = autres.filter(function(c){ return c.famille === f; }); return l.length ? '<div class="cd-fam">' + esc(fam[f]) + '</div><ul class="cd-list">' + l.map(row).join('') + '</ul>' : ''; }).join('');
  var html = '<h2 class="ctitle" style="margin-top:2px">Candidats</h2>' +
    '<p class="muted" style="margin:0 0 6px">' + esc(CAND.tri) + '</p>' +
    '<div class="sec-h">Mesurés dans le baromètre du 18/11/2026</div><ul class="cd-list">' + mes.map(row).join('') + '</ul>' +
    '<div class="sec-h">Autres candidatures</div>' + groups +
    '<p class="cd-src">Sondage : ' + esc(CAND.sources.ifop) + '.</p>' + candNote();
  candBindRows(openCard(html, { label:'Candidats' }));
}
/* ---------- Branchements discrets ---------- */
function candHook(){
  if(!CAND || typeof openMenu !== 'function') return;
  var _candOrient = openOrientation;
  openOrientation = function(){
    _candOrient.apply(this, arguments);
    document.querySelectorAll('.sect[data-sec]').forEach(function(el){
      var h = el.querySelector('h4'); if(!h) return;
      var b = document.createElement('button');
      b.className = 'cd-ico pressable'; b.setAttribute('aria-label', 'Candidats proches sur ce secteur'); b.title = 'Candidats proches';
      b.innerHTML = CAND_ICO; b.setAttribute('data-csec', el.getAttribute('data-sec'));
      h.appendChild(b);
    });
    var body = document.querySelector('.card .cbody');
    if(body) body.addEventListener('click', function(e){ var b = e.target.closest('[data-csec]'); if(b){ e.stopPropagation(); var s = b.getAttribute('data-csec'); closeCard(true); openCandSecteur(s); } });
  };
  var _candMenu = openMenu;
  openMenu = function(){
    _candMenu.apply(this, arguments);
    var ref = document.getElementById('mBudget'); if(!ref) return;
    var b = document.createElement('button');
    b.className = 'btn wide pressable'; b.id = 'mCand'; b.textContent = 'Dossier candidats';
    ref.parentNode.insertBefore(b, ref.nextSibling);
    b.addEventListener('click', function(){ closeCard(true); openCandidats(); });
  };
  var _candRecap = showRecap;
  showRecap = function(){
    _candRecap.apply(this, arguments);
    var body = document.querySelector('.card.recap .cbody'); if(!body) return;
    var o = orientation(), any = AXK.some(function(k){ return o.glob[k].n; });
    var box = document.createElement('div'); box.className = 'cd-recap';
    box.innerHTML = '<div class="rc-sec">Où vous vous situez depuis le début</div>' + AXK.map(function(k){ return axisRow(k, o.glob[k]); }).join('') +
      (any ? '<button class="cd-link pressable" data-cglob>' + CAND_ICO + '<span>Voir les candidats proches de vos choix</span></button>' : '');
    var last = body.lastElementChild; body.insertBefore(box, last);
    box.addEventListener('click', function(e){ if(e.target.closest('[data-cglob]')){ closeCard(true); openCandGlobal(); } });
  };
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', candHook); else setTimeout(candHook, 0);
