'use strict';
/* =========================================================
   Pastilles sur le plateau (vue d'ensemble)
   ========================================================= */
function regionPoint(id){ var r = REG[id] || REG[nationalRegion()]; return r ? RP(r.x, r.y) : RP(50, 45); }
var PIN_SCALE = 1.35;
var SLOTS = [[0,0],[8,1.8],[-8,1.8],[0,7.5],[8,-6],[-8,-6],[16,.4],[-16,.4],[8,9.5],[-8,9.5]];
var pinsG = null;
function renderPins(popIds){
  pinsG = $('pinl');
  var items = [], slot = {};
  function pos(region){
    var base = regionPoint(region), k = slot[region] = (slot[region] || 0) + 1;
    var o = SLOTS[k - 1];
    if(!o){ var a = k * 2.35, r = 6.5 * Math.sqrt(k - 1); o = [Math.cos(a) * r, Math.sin(a) * r * .8]; }
    return [base[0] + o[0], base[1] + o[1]];
  }
  Object.keys(S.decided).forEach(function(id){
    var m = EVMAP[id]; if(!m || m.day === S.dayIdx) return;
    var p = pos(m.ev.region); items.push({ y:p[1], s:pinHtml('past', id, 'done', p, m.ev) });
  });
  todayEvents().forEach(function(ev){
    var p = pos(ev.region), done = !!S.decided[ev.id];
    items.push({ y:p[1], s:pinHtml(done ? 'done' : (ev.kind === 'majeur' ? 'major' : 'banal'), ev.id, done ? 'done' : 'event', p, ev) });
  });
  S.notes.forEach(function(n){
    if(n.due > S.dayIdx || n.read || !n.shown) return;
    var p = pos(n.region); items.push({ y:p[1], s:pinHtml('note', n.id, 'note', p, n) });
  });
  items.sort(function(a, b){ return a.y - b.y; });
  pinsG.innerHTML = items.map(function(i){ return i.s; }).join('');
  if(popIds) popIds.forEach(function(id, k){ var el = pinsG.querySelector('[data-id="' + cssEsc(id) + '"]'); if(el){ el.classList.add('pop'); el.style.animationDelay = (k * .12) + 's'; } });
  renderTray(); renderQuests();
}
function renderTray(){
  var t = $('tray'), h = [];
  if(S && !S._preview && !RUN.busy){
    S.notes.forEach(function(n){ if(n.due <= S.dayIdx && n.shown && !n.read) h.push('<button class="tk pressable" data-id="' + esc(n.id) + '" data-type="note">' + medal(n.sector || '', 'note') + '<span><b>' + esc(n.title) + '</b><small>' + (n.from === 'prop' ? 'effet d\'une proposition' : 'conséquence') + '</small></span></button>'); });
  }
  t.innerHTML = h.join('');
}
$('tray').addEventListener('click', function(e){ var b = e.target.closest('.tk'); if(b) onPin(b.getAttribute('data-id'), b.getAttribute('data-type')); });
function cssEsc(s){ return String(s).replace(/["\\]/g, '\\$&'); }
function pinHtml(kind, id, type, p, obj){
  var q = U2P(p[0], p[1]), sz = 12 * PIN_SCALE * VBK, hh = 14 * PIN_SCALE * VBK;
  var label = { major:'Événement majeur', banal:'Événement', note:'Conséquence', done:'Décision prise', past:'Décision passée' }[kind] + ' : ' + (obj.title || '') + (obj.region ? ', ' + regionLabel(obj.region) : '');
  var o = '<button class="pin ' + kind + (kind === 'past' ? ' done' : '') + '" data-id="' + esc(id) + '" data-type="' + type + '" aria-label="' + esc(label) + '" style="left:' + F(q[0] - sz / 2) + 'px;top:' + F(q[1] - hh * 12.5 / 14) + 'px;width:' + F(sz) + 'px;height:' + F(hh) + 'px;z-index:' + (1000 + Math.round(q[1])) + '"><svg viewBox="-6 -12.5 12 14">';
  if(kind === 'major'){
    o += '<ellipse class="ring" cx="0" cy="0" rx="2.4" ry="1.1"/><ellipse class="ring" cx="0" cy="0" rx="2.4" ry="1.1" style="animation-delay:-1.1s"/>';
    o += '<ellipse cx="0" cy=".1" rx="2.2" ry=".7" fill="var(--shadow)" opacity=".22"/>';
    o += '<g class="bob"><path d="M0,0V-6.2" stroke="var(--line)" stroke-width=".5"/><path class="tok" d="M-3.2,-10.6h6.4a.8.8 0 0 1 .8.8v4.2a.8.8 0 0 1-.8.8h-2.4L0,-3.4-.8,-4.8h-2.4a.8.8 0 0 1-.8-.8v-4.2a.8.8 0 0 1 .8-.8z"/><g transform="translate(0,-7.7) scale(.78)">' + iconSvg(obj.sector) + '</g>' +
         '<circle cx="3.6" cy="-10.6" r="1.25" fill="var(--paper)" stroke="var(--line)" stroke-width=".35"/><text class="pt" x="3.6" y="-9.65" font-size="2.1" style="fill:var(--ink)">!</text></g>';
  } else if(kind === 'banal'){
    o += '<ellipse cx="0" cy=".1" rx="1.8" ry=".6" fill="var(--shadow)" opacity=".2"/><g class="bob"><circle class="tok" cx="0" cy="-3.8" r="2.7"/><g transform="translate(0,-3.8) scale(.68)">' + iconSvg(obj.sector) + '</g></g>';
  } else if(kind === 'note'){
    o += '<ellipse cx="0" cy=".1" rx="1.8" ry=".6" fill="var(--shadow)" opacity=".2"/><g class="bob" style="animation-duration:3.2s"><path class="tok" d="M-2.8,-6.4h5.6v4.1h-5.6z"/><path d="M-2.8,-6.4 0,-4.2 2.8,-6.4" fill="none" stroke="var(--line)" stroke-width=".4" stroke-linejoin="round"/><circle cx="2.8" cy="-6.6" r=".9" fill="var(--brass)" stroke="var(--line)" stroke-width=".3"/></g>';
  } else {
    var sm = kind === 'past' ? .75 : 1;
    o += '<g transform="scale(' + sm + ')"><ellipse cx="0" cy=".1" rx="1.2" ry=".4" fill="var(--shadow)" opacity=".25"/><path d="M0,0V-4.6" stroke="var(--line)" stroke-width=".4"/><path class="flag" d="M0,-4.6h2.6l-.7,.9.7,.9H0z"/></g>';
  }
  return o + '</svg></button>';
}
function pinRect(id){ var el = $('pinl').querySelector('[data-id="' + cssEsc(id) + '"]'); return el ? el.getBoundingClientRect() : null; }
$('pinl').addEventListener('click', function(e){ var p = e.target.closest('.pin'); if(p) onPin(p.getAttribute('data-id'), p.getAttribute('data-type')); });
function onPin(id, type){
  if(RUN.busy) return;
  snd('tap');
  if(type === 'event'){ var m = EVMAP[id]; if(m) playEvent(m.ev); }
  else if(type === 'note'){ var n = S.notes.filter(function(n){ return n.id === id; })[0]; if(n) playNote(n); }
  else if(type === 'done'){ var mm = EVMAP[id]; if(mm) openRecap(mm.ev); }
}

/* ---------- Compteur d'événements du jour, façon quêtes ---------- */
function renderQuests(){
  var q = $('quests'); if(!S || S._preview || !today()){ q.innerHTML = ''; q.style.display = 'none'; return; }
  var evs = todayEvents(), done = evs.filter(function(e){ return S.decided[e.id]; }).length, cur = RUN.ev && RUN.ev.id;
  q.style.display = '';
  q.innerHTML = '<span class="qt">Cette semaine <b>' + done + '/' + evs.length + '</b></span><span class="qd">' + evs.map(function(e){
    var st = S.decided[e.id] ? 'ok' : (e.id === cur ? 'cur' : '');
    return '<i class="q ' + st + (e.kind === 'majeur' ? ' maj' : '') + '" title="' + esc(e.title) + '"><svg viewBox="-2.6 -2.6 5.2 5.2">' + iconSvg(e.sector) + '</svg></i>';
  }).join('') + '</span>';
  q.setAttribute('aria-label', done + ' événements traités sur ' + evs.length + ' cette semaine');
}

