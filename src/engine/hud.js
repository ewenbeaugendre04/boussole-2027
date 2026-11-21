'use strict';
/* =========================================================
   HUD : budget, jauges, ruban, dock
   ========================================================= */
var shown = { def:null, debt:null, solde:null };
function animNum(el, from, to, fmt, dur){
  if(from === null || reduceMotion || from === to){ el.textContent = fmt(to); return; }
  var t0 = performance.now(); dur = dur || 900;
  (function step(t){
    var k = clamp((t - t0) / dur, 0, 1), e = 1 - Math.pow(1 - k, 3);
    el.textContent = fmt(from + (to - from) * e);
    if(k < 1) requestAnimationFrame(step);
  })(t0);
}
function flashDelta(id, d, fmt){
  var el = $(id); if(!d || Math.abs(d) < .05){ return; }
  el.textContent = (d > 0 ? '↑ ' : '↓ ') + fmt(Math.abs(d));
  el.classList.add('on'); clearTimeout(el._t); el._t = setTimeout(function(){ el.classList.remove('on'); }, 2600);
}
function renderBudget(){
  var def = curDeficit(), debt = S.dette, solde = S.solde;
  if(shown.def !== null){ flashDelta('dlDef', def - shown.def, f1); flashDelta('dlDebt', debt - shown.debt, f1); flashDelta('dlSolde', solde - shown.solde, f1); }
  animNum($('vDef'), shown.def, def, f1); animNum($('vDebt'), shown.debt, debt, f1, 1200); animNum($('vSolde'), shown.solde, solde, f1);
  shown = { def:def, debt:debt, solde:solde };
  $('uDef').textContent = UNIT + ' par an'; $('uDebt').textContent = UNIT; $('uSolde').textContent = UNIT + ' cumulés';
  $('kSolde').textContent = 'Solde ponctuel';
}
function renderGauges(changed){
  var g = $('gauges');
  g.classList.toggle('many', INDS.length > 5);
  if(!g.children.length || g.children.length !== INDS.length){
    g.innerHTML = INDS.map(function(i){ return '<div class="gauge" data-ind="' + esc(i.id) + '" title="' + esc(i.label || i.id) + '"><div class="gl">' + esc(i.short || i.label || i.id) + '</div><div class="gr"><div class="tr"><div class="fi"></div></div><span class="gv"></span></div><span class="ga"></span></div>'; }).join('');
  }
  INDS.forEach(function(i){
    var el = g.querySelector('[data-ind="' + cssEsc(i.id) + '"]'); if(!el) return;
    var v = S.ind[i.id];
    el.querySelector('.fi').style.width = v + '%';
    el.querySelector('.gv').textContent = Math.round(v);
    el.setAttribute('aria-label', (i.label || i.id) + ' : ' + Math.round(v) + ' sur 100');
    if(changed && changed[i.id]){
      var a = el.querySelector('.ga'); a.textContent = (changed[i.id] > 0 ? '↑' : '↓') + Math.abs(changed[i.id]);
      a.classList.add('on'); clearTimeout(a._t); a._t = setTimeout(function(){ a.classList.remove('on'); }, 3000);
      el.classList.remove('bounce'); void el.offsetWidth; el.classList.add('bounce');
    }
  });
}
var SEASON = { hiver:'Hiver', printemps:'Printemps', ete:'Été', automne:'Automne' };
function weekLabel(dIdx){ return 'Semaine ' + ((dIdx == null ? S.dayIdx : dIdx) + 1); }
function monthLabel(dIdx){ return weekLabel(dIdx); }
function monthLabelOld(dIdx){
  var d = DAYS[dIdx];
  var mi = d ? monthIndex(d.month) : 0;
  if(d && d.month && !mi) return String(d.month);
  return MONTHS[(S.month - 1) % 12] + ' ' + S.year;
}
function renderRibbon(){
  var d = today();
  $('dNum').textContent = Math.min(S.dayIdx + 1, Math.max(1, DAYS.length));
  $('dMon').textContent = 'semaine';
  $('dayToken').setAttribute('aria-label', 'Semaine ' + (S.dayIdx + 1) + ' sur ' + DAYS.length);
  if(!d){ $('ribT').textContent = 'Partie terminée'; $('ribS').textContent = DAYS.length + ' semaines jouées'; $('ribW').innerHTML = weatherSvg('soleil'); return; }
  $('ribT').textContent = d.title || ('Jour ' + (S.dayIdx + 1));
  $('ribS').textContent = weekLabel() + (SEASON[d.season] ? ', ' + SEASON[d.season].toLowerCase() : '') + (WEATHER[d.weather] ? ', ' + WEATHER[d.weather].toLowerCase() : '');
  $('ribW').innerHTML = weatherSvg(d.weather);
}
function renderDock(){
  var rem = remaining().length, mb = $('mainBtn');
  mb.classList.remove('go');
  if(S.finished || !today()){ $('mainT').textContent = 'Voir le bilan'; $('mainS').textContent = 'fin de la partie'; mb.classList.add('go'); }
  else if(RUN.busy){ var evs = todayEvents(), i = RUN.ev ? evs.indexOf(RUN.ev) + 1 : 0; $('mainT').textContent = 'En cours'; $('mainS').textContent = i ? 'événement ' + i + ' sur ' + evs.length : 'à lire'; }
  else if(rem > 0 && !(S.started && S.started[S.dayIdx])){ $('mainT').textContent = 'Lancer la semaine ' + (S.dayIdx + 1); $('mainS').textContent = rem + (rem > 1 ? ' événements' : ' événement'); mb.classList.add('go'); }
  else if(rem > 0){ var tot = todayEvents().length; $('mainT').textContent = 'Continuer'; $('mainS').textContent = 'événement ' + (tot - rem + 1) + ' sur ' + tot; mb.classList.add('go'); }
  else { $('mainT').textContent = S.dayIdx + 1 >= DAYS.length ? 'Finir la partie' : 'Semaine suivante'; $('mainS').textContent = 'tout est décidé'; mb.classList.add('go'); }
  var avail = reformsLeft();
  $('deckBadge').textContent = avail ? nPossible(avail) : ''; $('deckBadge').style.display = avail ? '' : 'none';
  $('deckBtn').classList.toggle('can', !!avail && !RUN.busy); $('deckBtn').setAttribute('aria-label', 'Propositions' + (avail ? ', ' + nPossible(avail) + ' cette semaine' : ''));
}
function renderLaunch(){
  var l = $('launch'); if(!l) return;
  var show = S && !S._preview && !S.finished && today() && !RUN.busy && !(S.started && S.started[S.dayIdx]) && remaining().length > 0;
  l.classList.toggle('on', !!show);
  if(show) l.innerHTML = '<span class="ln-k">Prêt quand tu veux</span><b>Lancer la semaine ' + (S.dayIdx + 1) + '</b><small>' + remaining().length + ' événements à suivre, la caméra te guide</small>';
}
function unlockDay(){ for(var i = 0; i < DAYS.length; i++){ if(DAYS[i] && DAYS[i].unlock) return i; } return -1; }
function maybeUnlock(){
  var d = today(); if(!d || !d.unlock || S.unlockSeen[S.dayIdx]) return;
  S.unlockSeen[S.dayIdx] = true; save();
  var u = d.unlock;
  setTimeout(function(){
    var card = openCard('<div class="chead"><div class="medal major"><svg viewBox="-2.6 -2.6 5.2 5.2">' + ICON.social + '</svg></div><div class="meta"><b>Nouveau</b><br>À partir de cette semaine</div></div><h2 class="ctitle">' + esc(u.title || 'Les réformes sont ouvertes') + '</h2><p class="ctext">' + esc(u.text || '') + '</p>',
      { label:u.title || 'Réformes', cls:'sheet unlock', anim:'flipin', footer:'<div class="confirm-row" style="margin:0"><button class="btn pressable" data-close>Plus tard</button><button class="btn brass pressable" id="ulGo">Voir les propositions</button></div>' });
    $('deckBtn').classList.add('hint');
    card.querySelector('#ulGo').addEventListener('click', function(){ closeCard(true); $('deckBtn').classList.remove('hint'); openDeck(); });
  }, 250);
}
function placeOverlays(){ var f0 = FRAME, f1 = measureFrame(); if(f0.W && (Math.abs(f0.t - f1.t) > 4 || Math.abs(f0.b - f1.b) > 4) && !RUN.busy){ clearTimeout(refitT); refitT = setTimeout(refitBoard, 60); } else FRAME = f0.W ? f0 : f1;
  var b = $('hud').getBoundingClientRect().bottom; document.documentElement.style.setProperty('--hudb', b + 'px'); $('dayIntro').style.top = (b + 4) + 'px'; $('toasts').style.top = (b + 52) + 'px'; }
function renderAll(changed){ placeOverlays(); renderBudget(); renderGauges(changed); renderRibbon(); renderDock(); renderQuests(); renderReforms(); }

/* ---------- Pièces qui tombent dans le budget ---------- */
function coins(fromRect, n, target){
  var tgt = (target ? $(target) : $('plate')).getBoundingClientRect();
  var sx = fromRect ? fromRect.left + fromRect.width / 2 : window.innerWidth / 2, sy = fromRect ? fromRect.top + fromRect.height / 2 : window.innerHeight / 2;
  var tx = tgt.left + tgt.width / 2, ty = tgt.top + tgt.height / 2;
  n = clamp(n, 0, 9);
  if(reduceMotion || !n){ $('plate').classList.remove('bump'); void $('plate').offsetWidth; $('plate').classList.add('bump'); return; }
  for(var i = 0; i < n; i++){
    (function(i){
      var c = document.createElement('div'); c.className = 'coin'; document.body.appendChild(c);
      var ox = (Math.random() - .5) * 70, mx = (sx + tx) / 2 + ox, my = Math.min(sy, ty) - 60 - Math.random() * 60;
      var an = c.animate([
        { transform:'translate(' + sx + 'px,' + sy + 'px) scale(.6) rotateY(0deg)', opacity:0 },
        { transform:'translate(' + (sx + ox * .4) + 'px,' + (sy - 30) + 'px) scale(1) rotateY(180deg)', opacity:1, offset:.2 },
        { transform:'translate(' + mx + 'px,' + my + 'px) scale(1) rotateY(540deg)', opacity:1, offset:.55 },
        { transform:'translate(' + tx + 'px,' + ty + 'px) scale(.5) rotateY(900deg)', opacity:.9 }
      ], { duration:900 + i * 70, delay:i * 60, easing:'cubic-bezier(.4,0,.6,1)', fill:'forwards' });
      c.style.left = '0px'; c.style.top = '0px';
      an.onfinish = function(){ c.remove(); if(i === n - 1){ var p = $('plate'); p.classList.remove('bump'); void p.offsetWidth; p.classList.add('bump'); } if(i % 2 === 0) snd('coin'); };
    })(i);
  }
  vibe([8, 30, 8]);
}

/* ---------- Toasts ---------- */
function toast(html, ms){
  var t = document.createElement('div'); t.className = 'toast'; t.innerHTML = '<span>' + html + '</span>'; $('toasts').appendChild(t);
  setTimeout(function(){ t.classList.add('out'); setTimeout(function(){ t.remove(); }, 400); }, ms || 2600);
}

