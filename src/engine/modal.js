'use strict';
/* =========================================================
   Couche modale (cartes)
   ========================================================= */
var layer = $('layer'), cardWrap = $('cardWrap'), onClose = null, lastFocus = null;
function openCard(html, opts){
  opts = opts || {};
  lastFocus = document.activeElement; placeOverlays();
  cardWrap.innerHTML = '<div class="card ' + (opts.anim || 'risein') + ' ' + (opts.cls || '') + '" role="dialog" aria-modal="true" aria-label="' + esc(opts.label || '') + '">' +
    '<div class="ctop">' + (opts.grab !== false ? '<div class="grab" aria-hidden="true"></div>' : '') +
    (opts.close !== false ? '<button class="xbtn pressable" data-close aria-label="Fermer">' + XICON + '</button>' : '') + '</div>' +
    '<div class="cbody">' + html + '</div>' + (opts.footer ? '<div class="cfoot">' + opts.footer + '</div>' : '') + '</div>';
  layer.classList.add('on'); layer.setAttribute('aria-hidden', 'false');
  onClose = opts.onClose || null;
  var card = cardWrap.firstChild;
  card.addEventListener('click', function(e){ if(e.target.closest('[data-close]')) closeCard(); });
  swipeToClose(card);
  card.addEventListener('toggle', function(e){ var d = e.target; if(d.open) setTimeout(function(){ revealIn(card, d); }, 60); }, true);
  if(opts.anim === 'flipin') snd('flip');
  setTimeout(function(){ var f = card.querySelector('[data-autofocus]') || card.querySelector('.xbtn') || card; try{ f.focus({ preventScroll:true }); }catch(e){} }, 60);
  return card;
}
function revealIn(card, el){
  var bd = card.querySelector('.cbody'); if(!bd || !el) return;
  var br = bd.getBoundingClientRect(), r = el.getBoundingClientRect(), d = 0;
  if(r.bottom > br.bottom - 8) d = Math.min(r.bottom - br.bottom + 16, r.top - br.top - 8);
  else if(r.top < br.top) d = r.top - br.top - 8;
  if(d) bd.scrollBy({ top:d, behavior:reduceMotion ? 'auto' : 'smooth' });
}
function closeCard(instant){
  var card = cardWrap.firstChild;
  var done = function(){ layer.classList.remove('on'); layer.setAttribute('aria-hidden', 'true'); cardWrap.innerHTML = ''; var cb = onClose; onClose = null; if(cb) cb(); try{ if(lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll:true }); }catch(e){} };
  if(!card){ done(); return; }
  if(instant || reduceMotion){ done(); return; }
  card.classList.remove('risein', 'flipin'); card.classList.add('leave');
  setTimeout(done, 340);
}
function swipeToClose(card){
  var sy = null, dy = 0;
  card.addEventListener('pointerdown', function(e){ var bd = card.querySelector('.cbody'); if((bd && bd.scrollTop > 2) || e.target.closest('button,a,summary,input')) return; sy = e.clientY; dy = 0; });
  card.addEventListener('pointermove', function(e){ if(sy === null) return; dy = Math.max(0, e.clientY - sy); if(dy > 4){ card.style.transform = 'translateY(' + dy + 'px)'; card.style.transition = 'none'; } });
  function end(){ if(sy === null) return; sy = null; card.style.transition = 'transform .25s'; if(dy > 90){ closeCard(); } else { card.style.transform = ''; } }
  card.addEventListener('pointerup', end); card.addEventListener('pointercancel', end);
}
$('scrim').addEventListener('click', function(){ if(cardWrap.firstChild && !cardWrap.firstChild.hasAttribute('data-locked')) closeCard(); });
document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && layer.classList.contains('on')) closeCard(); });

function indChips(ind){
  return Object.keys(ind || {}).filter(function(k){ return num(ind[k]) && INDL[k]; }).map(function(k){ var v = num(ind[k]); return '<span class="chip">' + esc(INDL[k]) + ' ' + (v > 0 ? '↑' : '↓') + Math.abs(v) + '</span>'; }).join('');
}
/* v2.6 : effet budgétaire toujours exprimé en DÉFICIT. Convention : budget > 0 = le déficit baisse ; budget < 0 = le déficit augmente. */
function deficitText(b){
  b = num(b);
  if(Math.abs(b) < .05) return 'Déficit inchangé';
  return 'Déficit : ' + (b > 0 ? '−' : '+') + f1(Math.abs(b)) + ' ' + UNIT + ' par an (' + (b > 0 ? 'le déficit baisse' : 'le déficit augmente') + ')';
}
function onceText(once){
  once = num(once);
  if(Math.abs(once) < .05) return '';
  return 'Une fois : dette ' + (once > 0 ? '−' : '+') + f1(Math.abs(once)) + ' ' + UNIT + ' (' + (once > 0 ? 'recette ponctuelle' : 'dépense ponctuelle') + ')';
}
function budgetChips(b, once, note, short){
  var o = '';
  b = num(b); once = num(once);
  if(short) return '<span class="chip money">' + (Math.abs(b) < .05 ? 'Déficit inchangé' : 'Déficit ' + (b > 0 ? '−' : '+') + f1(Math.abs(b)) + ' ' + esc(UNIT) + '/an') + '</span>';
  o += '<span class="chip money" data-def="' + (b > 0 ? 'baisse' : b < 0 ? 'hausse' : 'stable') + '">' + esc(deficitText(b)) + '</span>';
  if(Math.abs(once) >= .05) o += '<span class="chip money">' + esc(onceText(once)) + '</span>';
  if(note) o += '<small class="bnote">' + esc(note) + '</small>';
  return o;
}

/* ---------- v2.8 : réponses combinées, rappels, effets annoncés ---------- */
var RPW = Math.max(1, Math.round(num(G.rules && G.rules.reforms_per_week, 2)));
function sumObj(list, key){ var o = {}; list.forEach(function(c){ var x = c[key] || {}; Object.keys(x).forEach(function(k){ o[k] = (o[k] || 0) + num(x[k]); }); }); return o; }
function mergeChoices(parts){
  if(parts.length === 1) return parts[0];
  function j(k){ return parts.map(function(c){ return c[k]; }).filter(Boolean).join(' '); }
  return { id:parts.map(function(c){ return c.id; }).join('+'), parts:parts, label:parts.map(function(c){ return c.label; }).join(' + '),
    budget:parts.reduce(function(a, c){ return a + num(c.budget); }, 0), once:parts.reduce(function(a, c){ return a + num(c.once); }, 0),
    ind:sumObj(parts, 'ind'), axes:sumObj(parts, 'axes'), fx:parts.reduce(function(a, c){ return a.concat(arr(c.fx)); }, []),
    plus:j('plus'), minus:j('minus'), real_note:j('real_note'), budget_note:j('budget_note') };
}
/* choix réellement fait (fusionné si le joueur a coché deux réponses compatibles) */
function chosen(ev, val){
  if(val === undefined) val = S.decided[ev.id]; if(!val) return null;
  var parts = String(val).split('+').map(function(id){ return arr(ev.choices).filter(function(c){ return c.id === id; })[0]; }).filter(Boolean);
  return parts.length ? mergeChoices(parts) : null;
}
function madeChoice(evId, chId){ var v = S.decided[evId]; return !!v && String(v).split('+').indexOf(String(chId)) >= 0; }
function reqOK(r){ if(!r) return true; return (Array.isArray(r) ? r : [r]).every(function(q){ return q && q.event && (q.choice == null ? !!S.decided[q.event] : madeChoice(q.event, q.choice)); }); }
function visibleChoices(ev){ return arr(ev.choices).filter(function(c){ return reqOK(c.requires); }); }
function activeRecall(ev){ return arr(ev.recall).filter(function(r){ return r && r.event && madeChoice(r.event, r.choice); })[0] || null; }
function multiOf(ev){ var m = ev.multi; if(!m || !arr(m.pairs).length) return null; return { max:Math.max(2, Math.round(num(m.max, 2))), pairs:arr(m.pairs).map(arr), hint:m.hint || '' }; }
function comboOK(m, ids){ if(ids.length < 2) return true; if(ids.length > m.max) return false; return m.pairs.some(function(p){ return ids.every(function(i){ return p.indexOf(i) >= 0; }); }); }
function recallHtml(ev){
  var r = activeRecall(ev); if(!r) return '';
  var em = EVMAP[r.event], d = S.decidedDay && S.decidedDay[r.event] != null ? S.decidedDay[r.event] : em ? em.day : null;
  var past = em ? chosen(em.ev) : null, eff = (num(r.budget) || Object.keys(r.ind || {}).length) ? '<div class="chips">' + (num(r.budget) ? budgetChips(r.budget, 0, null, true) : '') + indChips(r.ind) + '</div>' : '';
  return '<aside class="recall"><div class="rcl-h"><span class="rcl-k">Ta décision passée</span>' + (d != null ? '<span class="rcl-d">Semaine ' + (d + 1) + '</span>' : '') + '</div>' +
    (past ? '<div class="rcl-c">« ' + esc(choiceLabel(past)) + ' »</div>' : '') + '<p>' + esc(r.text || '') + '</p>' + eff + '</aside>';
}
/* petit effet du rappel : appliqué une seule fois, à la première ouverture de la carte */
function applyRecall(ev){
  var r = activeRecall(ev); S.recallDone = S.recallDone || {};
  if(!r || S.recallDone[ev.id]) return;
  S.recallDone[ev.id] = r.choice || true;
  var b = num(r.budget), ch = applyInd(r.ind);
  if(b) S.annual += b;
  if(b || Object.keys(ch).length){ logImpact({ kind:'recall', title:ev.title, label:'Suite de ta décision passée', ind:ch, budget:b, once:0 }); save(); setTimeout(function(){ renderAll(ch); }, 500); }
  else save();
}
/* journal des effets : sert aux annonces, au récap mensuel et au bilan */
function logImpact(o){ S.impact = arr(S.impact); o.day = S.dayIdx; S.impact.push(o); return o; }
function impactScore(o){ return Object.keys(o.ind || {}).reduce(function(a, k){ return a + Math.abs(num(o.ind[k])); }, 0) + Math.abs(num(o.budget)) * 4 + Math.abs(num(o.once)) * .6; }
function effRows(o, max){
  var rows = [];
  Object.keys(o.ind || {}).forEach(function(k){ var v = Math.round(num(o.ind[k])); if(v && INDL[k]) rows.push({ k:'ind', id:k, v:v, w:Math.abs(v) }); });
  if(Math.abs(num(o.budget)) >= .05) rows.push({ k:'def', v:num(o.budget), w:Math.abs(num(o.budget)) * 4 + 1 });
  if(Math.abs(num(o.once)) >= .05) rows.push({ k:'once', v:num(o.once), w:Math.abs(num(o.once)) * .6 });
  rows.sort(function(a, b){ return b.w - a.w; });
  return rows.slice(0, max || 4);
}
function effText(r){
  if(r.k === 'ind') return esc(INDL[r.id]) + (r.v > 0 ? ' en hausse' : ' en baisse');
  if(r.k === 'def') return 'Le déficit ' + (r.v > 0 ? 'baisse' : 'augmente') + ' de ' + f1(Math.abs(r.v)) + ' ' + esc(UNIT) + ' par an';
  return 'Une fois : la dette ' + (r.v > 0 ? 'baisse' : 'augmente') + ' de ' + f1(Math.abs(r.v)) + ' ' + esc(UNIT);
}
var ARW = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3 17 11H12.5V17H7.5V11H3Z"/></svg>';
function effHtml(o, max, big){
  var rows = effRows(o, max);
  if(!rows.length) return '<div class="eff-none">Pas d\'effet chiffré tout de suite' + (o.later ? ' : la suite arrive dans les semaines qui viennent.' : '.') + '</div>';
  return '<div class="effs' + (big ? ' big' : '') + '">' + rows.map(function(r, i){
    var up = r.k === 'ind' ? r.v > 0 : r.k === 'def' ? r.v < 0 : r.v < 0, g = '';
    if(r.k === 'ind'){ var b = clamp(num(S.ind[r.id], 50), 0, 100), a = clamp(b - r.v, 0, 100); g = '<div class="eff-g"><i style="--a:' + F(a) + '%;--b:' + F(b) + '%"></i><em style="left:' + F(b) + '%"></em></div>'; }
    var n = r.k === 'ind' ? (r.v > 0 ? '+' : '−') + Math.abs(r.v) : (r.k === 'def' ? (r.v > 0 ? '−' : '+') : (r.v > 0 ? '−' : '+')) + f1(Math.abs(r.v));
    return '<div class="eff" style="--d:' + (i * 260) + 'ms"><span class="eff-ar ' + (up ? 'up' : 'dn') + '">' + ARW + '</span><div class="eff-m"><b>' + effText(r) + '</b>' + g + '</div>' +
      '<span class="eff-n" data-v="' + (r.k === 'ind' ? Math.abs(r.v) : F(Math.abs(r.v))) + '" data-s="' + n.charAt(0) + '" data-f="' + (r.k === 'ind' ? 0 : 1) + '">' + esc(n) + '</span></div>';
  }).join('') + '</div>';
}
/* chiffres qui comptent, jauges qui se remplissent */
function runEff(root){
  if(!root) return;
  root.querySelectorAll('.eff-n').forEach(function(el, i){
    var v = parseFloat(el.getAttribute('data-v')) || 0, sg = el.getAttribute('data-s'), f = el.getAttribute('data-f') === '1';
    var fmt = function(x){ return sg + (f ? f1(x) : Math.round(x)); };
    if(reduceMotion) return;
    el.textContent = fmt(0);
    setTimeout(function(){ animNum(el, 0, v, fmt, 700); }, 220 + i * 260);
  });
}
var ANN_T = 0;
function announce(kicker, title, o, ms){
  var el = $('ann'); if(!el) return;
  el.innerHTML = '<div class="ann-k">' + esc(kicker) + '</div><div class="ann-t">' + esc(title) + '</div>' + effHtml(o, 4, true) + '<div class="ann-x">Toucher pour fermer</div>';
  el.classList.remove('on'); void el.offsetWidth; el.classList.add('on'); snd('flip'); vibe(10);
  runEff(el);
  clearTimeout(ANN_T); ANN_T = setTimeout(hideAnn, ms || 4600);
}
function hideAnn(){ var el = $('ann'); if(el && el.classList.contains('on')){ el.classList.add('out'); setTimeout(function(){ el.classList.remove('on', 'out'); }, 300); } }
function weekList(){ var w = S.weekApplied && S.weekApplied[S.dayIdx]; return w ? (Array.isArray(w) ? w : [w]) : []; }
function reformsLeft(){ if(!S || S.finished) return 0; var avail = weekOffer().filter(function(p){ return !(p.id in S.applied); }).length; return Math.min(avail, Math.max(0, RPW - weekList().length)); }
function nPossible(n){ return n + (n > 1 ? ' possibles' : ' possible'); }
/* avant la semaine suivante : rappel unique s'il reste des réformes à lancer et qu'aucune ne l'a été */
function nudgeReforms(go){
  var n = reformsLeft();
  S.nudged = S.nudged || {};
  if(!n || weekList().length || S.nudged[S.dayIdx]){ go(); return; }
  S.nudged[S.dayIdx] = true; save();
  var card = openCard('<div class="chead"><div class="medal major"><svg viewBox="-2.6 -2.6 5.2 5.2">' + ICON.social + '</svg></div><div class="meta"><b>Avant de tourner la page</b><br>Semaine ' + (S.dayIdx + 1) + '</div></div>' +
    '<h2 class="ctitle">Tu peux encore lancer ' + n + (n > 1 ? ' réformes' : ' réforme') + ' cette semaine</h2><p class="ctext">Les propositions de la semaine disparaissent quand elle se termine. Une réforme met souvent plusieurs semaines à produire ses effets.</p>',
    { label:'Réformes possibles', cls:'sheet nudge', anim:'flipin', footer:'<div class="confirm-row" style="margin:0"><button class="btn pressable" id="ndSkip">Passer</button><button class="btn brass pressable" id="ndGo">Voir les propositions</button></div>' });
  card.querySelector('#ndSkip').addEventListener('click', function(){ closeCard(true); go(); });
  card.querySelector('#ndGo').addEventListener('click', function(){ closeCard(true); openDeck(); });
}

/* ---------- Carte de décision ---------- */
function realHtml(r){
  if(!r || !(r.fact || r.date)) return '';
  var src = arr(r.sources).filter(function(x){ return x && (x.url || x.label); });
  return '<aside class="real"><div class="real-h"><span class="real-st">Fait réel</span><span class="real-d">' + esc([fmtDate(r.date), r.place].filter(Boolean).join(', ')) + '</span></div>' +
    (r.fact ? '<p>' + esc(r.fact) + '</p>' : '') + (r.figures ? '<div class="real-f">' + esc(r.figures) + '</div>' : '') +
    (src.length ? '<div class="real-s">' + src.map(function(x){ return x.url ? '<a href="' + esc(x.url) + '" target="_blank" rel="noopener noreferrer">' + esc(x.label || x.url) + '</a>' : esc(x.label); }).join('') + '</div>' : '') + '</aside>';
}
function openEvent(ev){
  if(S.decided[ev.id]){ openRecap(ev); return; }
  var major = ev.kind === 'majeur', vis = visibleChoices(ev), M = multiOf(ev);
  if(M) M.pairs = M.pairs.map(function(p){ return p.filter(function(id){ return vis.some(function(c){ return c.id === id; }); }); }).filter(function(p){ return p.length >= 2; });
  if(M && !M.pairs.length) M = null;
  /* une seule réponse, sauf événements « multi » : une réponse à court terme + une à long terme */
  var G = null;
  if(M){
    var cIds = [], lIds = [];
    M.pairs.forEach(function(p){ if(cIds.indexOf(p[0]) < 0) cIds.push(p[0]); p.slice(1).forEach(function(id){ if(lIds.indexOf(id) < 0) lIds.push(id); }); });
    lIds = lIds.filter(function(id){ return cIds.indexOf(id) < 0; });
    var tagged = vis.some(function(c){ return c.terme; });
    var inL = tagged ? function(c){ return c.terme === 'long'; } : function(c){ return lIds.indexOf(c.id) >= 0; };
    var inC = function(c){ return !inL(c); };
    vis = vis.filter(inC).concat(vis.filter(inL));
    G = { grp:function(c){ return inL(c) ? 'long' : 'court'; } };
  }
  applyRecall(ev);
  var html = '<div class="chead">' + medal(ev.sector, major ? 'major' : '') + '<div class="meta"><b>' + (major ? 'Événement majeur' : 'Au quotidien') + '</b><br>' + esc(regionLabel(ev.region) || 'Tout le pays') + ', ' + esc(sectorLabel(ev.sector)) + '</div></div>' + recallHtml(ev) +
    '<h2 class="ctitle">' + esc(ev.title) + '</h2><p class="ctext">' + esc(evText(ev)) + '</p>' + realHtml(ev.real) +
    (ev.context ? '<details class="ctx"><summary>Ce qu\'il faut savoir</summary><p>' + esc(ev.context) + '</p></details>' : '') +
    (G ? '<div class="mhint"><span class="mh-k">Deux décisions</span>Choisissez une réponse pour le court terme, puis une pour le long terme.</div>' : '') +
    '<div class="choices" role="list">' + vis.map(function(ch, i){
      var pk = false, gh = '';
      if(G){ var g = G.grp(ch), pg = i ? G.grp(vis[i - 1]) : ''; if(g !== pg) gh = '<div class="mgrp">' + (g === 'long' ? 'Long terme : une réponse' : 'Court terme : une réponse') + '</div>'; }
      return gh + '<button class="choice" role="listitem" aria-expanded="false" data-i="' + i + '" data-cid="' + esc(ch.id) + '"' + (G ? ' data-g="' + G.grp(ch) + '"' : '') + '>' + '<span class="cl">' + esc(choiceLabel(ch)) + '</span>' + termLine(ch) + '<div class="det">' + termDetail(ch) +
        '<div class="pm"><span class="sg" aria-hidden="true">+</span><div><div class="pl">Ce que ça peut apporter</div>' + esc(ch.plus || '') + '</div></div>' +
        '<div class="pm"><span class="sg" aria-hidden="true">−</span><div><div class="pl">Ce que ça peut coûter</div>' + esc(ch.minus || '') + '</div></div>' +
        '<div class="chips">' + budgetChips(ch.budget, ch.once, ch.budget_note) + indChips(ch.ind) + '</div>' +
        '<div class="confirm-row"><span class="btn brass pressable confirm" role="button" tabindex="0" data-ok="' + i + '">' + (G ? (G.grp(ch) === 'long' ? 'Retenir pour le long terme' : 'Retenir pour le court terme') : 'Choisir ceci') + '</span></div>' +
        '</div></button>';
    }).join('') + '</div>' + (G ? '<div class="mbar" aria-live="polite"><span class="mmsg"></span><button class="btn brass pressable" id="mGo" disabled>Valider mes 2 décisions</button></div>' : '');
  if(!vis.length) html += '<button class="btn wide brass pressable" id="evAck">Compris</button>';
  var card = openCard(html, { anim:'flipin', label:ev.title, cls:'evcard', onClose:function(){ if(!S.decided[ev.id] && RUN.ev === ev) abortEvent(); } });
  var ack = card.querySelector('#evAck'); if(ack) ack.addEventListener('click', function(){ decide(ev, { id:'_', label:'Pris en compte' }, card); });
  card.querySelectorAll('.choice').forEach(function(btn){
    btn.addEventListener('click', function(e){
      var ok = e.target.closest('[data-ok]');
      if(ok){ e.stopPropagation(); if(G) pickIn(btn); else decide(ev, vis[+ok.getAttribute('data-ok')], card); return; }
      var open = btn.getAttribute('aria-expanded') === 'true';
      card.querySelectorAll('.choice').forEach(function(b){ b.setAttribute('aria-expanded', 'false'); });
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      snd('tap'); vibe(6);
      if(!open) setTimeout(function(){ revealIn(card, btn); }, 40);
    });
    btn.addEventListener('keydown', function(e){ var ok = e.target.closest && e.target.closest('[data-ok]'); if(ok && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); e.stopPropagation(); if(G) pickIn(btn); else decide(ev, vis[+ok.getAttribute('data-ok')], card); } });
  });
  /* événement multi : une réponse par groupe (court terme, long terme), puis validation */
  var sel = { court:null, long:null };
  function say(t){ var m = card.querySelector('.mmsg'); if(m) m.textContent = t; }
  function syncBar(){
    var go = card.querySelector('#mGo'); if(!go) return; var n = (sel.court ? 1 : 0) + (sel.long ? 1 : 0);
    go.disabled = n < 1; go.textContent = n === 2 ? 'Valider mes 2 décisions' : 'Valider ma décision';
    say(n === 0 ? 'Aucune réponse choisie.' : !sel.court ? 'Vous pouvez aussi choisir pour le court terme.' : !sel.long ? 'Vous pouvez aussi choisir pour le long terme.' : 'Les effets des deux décisions s\'additionnent.');
    card.querySelector('.mbar').classList.toggle('ready', n >= 1);
  }
  function pickIn(btn){
    var g = btn.getAttribute('data-g') || 'court', id = btn.getAttribute('data-cid');
    card.querySelectorAll('.choice[data-g="' + g + '"]').forEach(function(b){ b.classList.remove('picked'); });
    sel[g] = sel[g] === id ? null : id; if(sel[g]) btn.classList.add('picked');
    btn.setAttribute('aria-expanded', 'false'); snd('tap'); vibe(8); syncBar();
  }
  if(G){ syncBar(); card.querySelector('#mGo').addEventListener('click', function(){
    if(!sel.court && !sel.long) return;
    var order = vis.filter(function(c){ return c.id === sel.court || c.id === sel.long; });
    decide(ev, order.length > 1 ? mergeChoices(order) : order[0], card);
  }); }
}
function decide(ev, ch, card){
  if(!ch || S.decided[ev.id]) return;
  S.decided[ev.id] = ch.id; S.decidedDay[ev.id] = S.dayIdx;
  S.annual += num(ch.budget);
  var once = num(ch.once);
  if(once){ S.dette -= once; S.solde += once; S.onceTotal += once; }
  var changed = applyInd(ch.ind);
  RUN.lastImpact = logImpact({ kind:'ev', id:ev.id, title:ev.title, label:choiceLabel(ch), ind:changed, budget:num(ch.budget), once:once, later:(ch.parts || [ch]).some(function(c){ return c.followup; }) });
  if(ev._block){ S.blockLog = S.blockLog || []; S.blockLog.push({ sector:ev.sector, axes:ch.axes || {} }); resolveBlock(ev._block, ch); }
  (ch.parts || [ch]).forEach(function(c, j){ if(!c.followup) return;
    S.notes.push({ id:'f_' + ev.id + (j ? '_' + c.id : ''), due:S.dayIdx + Math.max(1, num(c.followup_in, 1)), region:ev.region, sector:ev.sector, title:c.followup_title || ('Suite : ' + ev.title),
      text:c.followup, ind:c.followup_ind || {}, budget:num(c.followup_budget), once:0, from:'choix', src:choiceLabel(c), shown:false, read:false });
  });
  save();
  // tampon puis envol vers la pastille
  var stamp = document.createElement('div'); stamp.className = 'stamp'; stamp.textContent = 'Décidé'; card.appendChild(stamp);
  card.setAttribute('data-locked', '');
  snd('stamp'); vibe(18);
  var from = card.getBoundingClientRect();
  from = { left:from.left + from.width / 2 - 20, top:from.top + 40, width:40, height:40 };
  setTimeout(function(){
    closeCard();
    setTimeout(function(){
      var money = Math.abs(num(ch.budget)) + Math.abs(once);
      setTimeout(function(){ renderAll(changed); }, money && !reduceMotion ? 700 : 0);
      if(RUN.ev === ev) afterDecision(ev, ch, from);
      else { renderPins(); coins(from, money ? Math.ceil(Math.min(8, 2 + money)) : 0); }
    }, 360);
  }, reduceMotion ? 50 : 520);
}
function openRecap(ev){
  var ch = chosen(ev);
  var html = '<div class="chead">' + medal(ev.sector, ev.kind === 'majeur' ? 'major' : '') + '<div class="meta"><b>Décision prise</b><br>' + esc(regionLabel(ev.region)) + ', ' + esc(sectorLabel(ev.sector)) + '</div></div>' +
    '<h2 class="ctitle">' + esc(ev.title) + '</h2>' +
    (ch ? '<p class="ctext">' + (ch.parts ? 'Tes deux réponses : <b>' + ch.parts.map(function(c){ return esc(choiceLabel(c)); }).join('</b> et <b>') + '</b>' : 'Ton choix : <b>' + esc(choiceLabel(ch)) + '</b>') + '</p><div class="pm"><span class="sg">+</span><div>' + esc(ch.plus || '') + '</div></div><div class="pm"><span class="sg">−</span><div>' + esc(ch.minus || '') + '</div></div><div class="chips">' + budgetChips(ch.budget, ch.once, ch.budget_note) + indChips(ch.ind) + '</div>' : '') +
    '<button class="btn wide pressable" data-close style="margin-top:14px">Fermer</button>';
  openCard(html, { label:ev.title });
}
function openNote(n){
  var html = '<div class="chead">' + medal(n.sector || '', 'note') + '<div class="meta"><b>' + (n.from === 'prop' ? 'Effet d\'une proposition' : 'Conséquence d\'un choix') + '</b><br>' + esc(regionLabel(n.region) || 'Tout le pays') + '</div></div>' +
    '<h2 class="ctitle">' + esc(n.title) + '</h2><p class="ctext">' + esc(n.text) + '</p>' +
    (n.src ? '<p class="muted">' + (n.from === 'prop' ? 'Proposition appliquée : ' : 'Ton choix : ') + '« ' + esc(n.src) + ' »</p>' : '') +
    ((num(n.budget) || num(n.once) || Object.keys(n.ind || {}).length) ? '<div class="chips">' + (num(n.budget) || num(n.once) ? budgetChips(n.budget, n.once, n.budget_note) : '') + indChips(n.ind) + '</div>' : '') +
    '<button class="btn wide brass pressable" data-close data-autofocus style="margin-top:14px">Compris</button>';
  openCard(html, { anim:'flipin', label:n.title, onClose:function(){ n.read = true; save(); clearFx(); endScene();
    camHome(1000).then(function(){ setBusy(false); renderPins(); if(RUN.auto && nextInQueue()) setTimeout(playNext, 300); else dayDone(); }); } });
}

