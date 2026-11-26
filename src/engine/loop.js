'use strict';
/* =========================================================
   Boucle des jours
   ========================================================= */
function enterGame(isNew){
  delete S._preview;
  shown = { def:null, debt:null, solde:null };
  if(S.finished || S.dayIdx >= DAYS.length){ S.finished = true; startDayView(false); setTimeout(showEnd, 300); return; }
  startDayView(true);
}
function startDayView(intro){
  var d = today();
  if(d && (!S.wk || S.wk.day !== S.dayIdx)){ S.wk = weekSnapshot(); save(); }
  var fresh = revealNotes(); revealEchos();
  buildClouds(d ? d.weather : 'soleil'); setWeather(d ? d.weather : 'soleil');
  renderAll(fresh.changed);
  var pop = todayEvents().map(function(e){ return e.id; }).concat(fresh.ids);
  restoreStays(); camHome(0);
  renderPins(pop);
  if(!d) return;
  showDayTitle(fresh.ids.length, function(){ S.introShown = S.dayIdx;
    var rn = arr(S.reformNews); S.reformNews = [];
    rn.forEach(function(x, i){ setTimeout(function(){ if(typeof x === 'string') toast('<b>Réforme adoptée :</b>&nbsp;' + esc(x), 3200); else announce('Réforme adoptée', x.label, x, 4400); }, 200 + i * 4700); });
    save(); renderDock(); renderLaunch(); maybeUnlock(); });
}
function revealNotes(){
  var ids = [], changed = {};
  S.notes.forEach(function(n){
    if(n.due <= S.dayIdx && !n.shown){
      n.shown = true; ids.push(n.id);
      var c = applyInd(n.ind); Object.keys(c).forEach(function(k){ changed[k] = (changed[k] || 0) + c[k]; });
      S.annual += num(n.budget);
      if(num(n.once)){ S.dette -= num(n.once); S.solde += num(n.once); S.onceTotal += num(n.once); }
    }
  });
  if(ids.length) save();
  return { ids:ids, changed:changed };
}
function showDayTitle(nNotes, cb){
  var d = today(), el = $('dayTitle'), evs = todayEvents();
  $('dtK').textContent = S.dayIdx === 0 ? 'Le jeu commence' : (SEASON[d.season] || 'Nouvelle semaine');
  $('dtBig').innerHTML = '<span>Semaine</span> <b>' + (S.dayIdx + 1) + '</b>';
  $('dtSub').innerHTML = esc(d.title || '') + (d.intro ? '<small>' + esc(d.intro) + '</small>' : '');
  $('dtW').innerHTML = weatherSvg(d.weather); $('dtWx').textContent = WEATHER[d.weather] || '';
  $('dtQ').innerHTML = '<span>' + evs.length + (evs.length > 1 ? ' événements' : ' événement') + ' cette semaine' + (nNotes ? ', ' + nNotes + (nNotes > 1 ? ' conséquences' : ' conséquence') : '') + '</span><span class="dt-tok">' +
    evs.map(function(e, i){ return '<i class="' + (e.kind === 'majeur' ? 'maj' : '') + '" style="animation-delay:' + (1 + i * .12) + 's"><svg viewBox="-2.6 -2.6 5.2 5.2">' + iconSvg(e.sector) + '</svg></i>'; }).join('') + '</span>';
  el.classList.remove('out'); void el.offsetWidth; el.classList.add('on');
  snd('day');
  var done = false;
  function fin(){ if(done) return; done = true; el.classList.add('out'); setTimeout(function(){ el.classList.remove('on', 'out'); cb && cb(); }, reduceMotion ? 0 : 450); }
  el.onclick = fin;
  setTimeout(fin, reduceMotion ? 600 : 3000);
}
function showDayIntro(nNotes, quiet){
  var d = today(); if(!d) return;
  var evs = todayEvents(), maj = evs.filter(function(e){ return e.kind === 'majeur'; }).length;
  $('diW').innerHTML = weatherSvg(d.weather);
  $('diA').textContent = 'Semaine ' + (S.dayIdx + 1) + ' sur ' + DAYS.length;
  $('diB').textContent = d.title || ('Jour ' + (S.dayIdx + 1));
  var parts = [];
  parts.push(evs.length + (evs.length > 1 ? ' événements' : ' événement') + (maj ? ' dont ' + maj + ' majeur' + (maj > 1 ? 's' : '') : ''));
  if(nNotes) parts.push(nNotes + (nNotes > 1 ? ' conséquences arrivent' : ' conséquence arrive'));
  if(d.mood === 'tendu') parts.push('semaine chargée');
  $('diC').textContent = parts.join(', ') + '.';
  var el = $('dayIntro'); el.classList.remove('out'); el.classList.add('on');
  clearTimeout(el._t);
  el._t = setTimeout(function(){ el.classList.add('out'); setTimeout(function(){ el.classList.remove('on', 'out'); }, 360); }, quiet ? 1800 : 3200);
  if(!quiet) snd('day');
}
$('dayIntro').addEventListener('click', function(){ var el = $('dayIntro'); el.classList.add('out'); setTimeout(function(){ el.classList.remove('on', 'out'); }, 360); });

function advanceDay(){
  if(remaining().length || S.finished) return;
  var d0 = S.dayIdx, monthly = curDeficit() / JPA, oldMonth = S.dayIdx + 1;
  S.dette += monthly; S.solde -= monthly;
  S.week = (S.week || 0) + 1; var newYear = false;
  if(S.week % JPA === 0){ S.year++; S.solde = 0; newYear = true; }
  S.dayIdx++;
  var adv = advanceReforms(); S.reformNews = adv.finished;
  S.hist.push({ d:S.dayIdx, def:curDeficit(), dette:S.dette });
  if(S.dayIdx >= DAYS.length) S.finished = true;
  save();
  dayTransition(d0, oldMonth, monthly, newYear, function(){
    if(S.finished){ renderAll(); renderPins(); setWeather('soleil'); showEnd(); }
    else startDayView(true);
  });
}
function dayTransition(d0, oldMonth, monthly, newYear, cb){
  var du = $('dusk'), sun = $('sun'), moon = $('moon');
  var next = DAYS[S.dayIdx];
  $('duA').textContent = 'Fin de la semaine ' + oldMonth;
  $('duB').textContent = next ? 'Bonne nuit' : 'Fin de la partie';
  $('duC').textContent = 'La dette a pris ' + f1(monthly) + ' ' + UNIT + ' cette semaine.' + (newYear ? ' Nouvelle année budgétaire.' : '');
  if(!$('stars').children.length){ var st = ''; for(var i = 0; i < 40; i++) st += '<i style="left:' + (Math.random()*100) + '%;top:' + (Math.random()*45) + '%;opacity:' + (.3 + Math.random()*.7) + '"></i>'; $('stars').innerHTML = st; }
  du.classList.add('on');
  snd('day');
  if(reduceMotion){
    du.style.opacity = 1; renderBudget();
    setTimeout(function(){ du.style.opacity = 0; du.classList.remove('on'); cb(); }, 900); return;
  }
  var H = window.innerHeight;
  du.animate([{ opacity:0 }, { opacity:.94, offset:.3 }, { opacity:.94, offset:.72 }, { opacity:.0 }], { duration:3300, easing:'ease-in-out', fill:'forwards' });
  sun.animate([{ transform:'translate(-60px,' + (H*.14) + 'px)' }, { transform:'translate(40px,' + (H*.1) + 'px)', offset:.15 }, { transform:'translate(150px,' + (H*.3) + 'px)', offset:.4 }, { transform:'translate(170px,' + (H*.95) + 'px)' }], { duration:3300, fill:'forwards' });
  moon.animate([{ transform:'translate(-170px,' + (H*.7) + 'px)', opacity:0 }, { transform:'translate(-120px,' + (H*.25) + 'px)', opacity:1, offset:.35 }, { transform:'translate(0px,' + (H*.12) + 'px)', opacity:1, offset:.62 }, { transform:'translate(130px,' + (H*.2) + 'px)', opacity:0 }], { duration:3300, fill:'forwards' });
  document.querySelector('#app').classList.add('is-night'); bakeDecor();
  setTimeout(function(){ renderBudget(); coins(null, 4, 'vDebt'); }, 900);
  setTimeout(function(){ document.querySelector('#app').classList.remove('is-night'); if(next){ buildClouds(next.weather); setWeather(next.weather); } bakeDecor(); }, 2300);
  setTimeout(function(){ du.classList.remove('on'); du.getAnimations().forEach(function(a){ a.cancel(); }); du.style.opacity = 0; cb(); }, 3300);
}

/* ---------- Bilan ---------- */
function showEnd(){
  var o = orientation();
  var html = '<h2 class="ctitle" style="margin-top:2px">Votre partie est bouclée</h2><p class="ctext">' + DAYS.length + (DAYS.length > 1 ? ' semaines' : ' semaine') + ' de décisions. Voici où en est le pays.</p>' +
    '<div class="kv"><span>Déficit annuel</span><b>' + f1(BASE_DEF) + ' → ' + f1(curDeficit()) + ' ' + esc(UNIT) + '</b><span>Dette</span><b>' + f0(num(B.dette)) + ' → ' + f0(S.dette) + ' ' + esc(UNIT) + '</b></div>' +
    '<div class="sec-h">Les indicateurs</div><div class="kv">' + INDS.map(function(i){ var a = num(i.start, 50), b = S.ind[i.id], d = Math.round(b - a); return '<span>' + esc(i.label) + '</span><b>' + Math.round(a) + ' → ' + Math.round(b) + (d ? ' (' + (d > 0 ? '↑' : '↓') + Math.abs(d) + ')' : '') + '</b>'; }).join('') + '</div>' +
    '<div class="sec-h">Votre boussole</div><div class="summary">' + AXK.map(function(k){ return '<p><b>' + esc(axName(k)) + '</b> : ' + esc(leanText(k, o.glob[k])) + '.</p>'; }).join('') + '</div>';
  var best = arr(S.impact).filter(function(o){ return impactScore(o) > 0; }).sort(function(a, b){ return impactScore(b) - impactScore(a); }).slice(0, 5);
  if(best.length) html += '<div class="sec-h">Vos décisions les plus marquantes</div><ol class="rc-top">' + best.map(function(o, i){ return '<li><span class="rk">' + (i + 1) + '</span><div><b>' + esc(o.title) + '</b><small>' + esc(o.label || '') + ' · semaine ' + (o.day + 1) + '</small>' + effHtml(o, 2, false) + '</div></li>'; }).join('') + '</ol>';
  var combos = Object.keys(S.decided).filter(function(id){ return String(S.decided[id]).indexOf('+') > 0 && EVMAP[id]; });
  if(combos.length) html += '<div class="sec-h">Vos réponses combinées</div><ul class="lst">' + combos.map(function(id){ var ch = chosen(EVMAP[id].ev); return ch ? '<li><span class="sg">+</span><span><b>' + esc(EVMAP[id].ev.title) + '</b> : ' + ch.parts.map(function(c){ return esc(choiceLabel(c)); }).join(' et ') + '</span></li>' : ''; }).join('') + '</ul>';
  var rids = Object.keys(S.reforms || {});
  if(rids.length) html += '<div class="sec-h">Vos réformes</div><ul class="lst">' + rids.map(function(id){ var p = progById(id); return p ? '<li><span class="sg">' + ({ done:'✓', abandon:'×', en_cours:'…', bloque:'!' }[S.reforms[id].status] || '·') + '</span><span><b>' + esc(p.label) + '</b> : ' + reformStateText(p) + '</span></li>' : ''; }).join('') + '</ul>';
  var pend = S.notes.filter(function(n){ return n.due >= DAYS.length; });
  if(pend.length) html += '<div class="sec-h">Ce qui arrivera après</div><ul class="lst">' + pend.map(function(n){ return '<li><span class="sg">…</span><span>' + esc(n.text) + '</span></li>'; }).join('') + '</ul>';
  html += '<div style="margin-top:16px"><button class="btn wide pressable" id="eOrient">Voir mon orientation détaillée</button><button class="btn wide brass pressable" id="eNew">Nouvelle partie</button></div>';
  var card = openCard(html, { label:'Bilan' }); runEff(card);
  card.querySelector('#eOrient').addEventListener('click', function(){ closeCard(true); openOrientation(); });
  card.querySelector('#eNew').addEventListener('click', function(){ closeCard(true); dropStore(KEY); S = null; showTitle(); });
}

/* ---------- Boutons ---------- */
$('reforms').addEventListener('click', function(e){ var b = e.target.closest('.rf-chip'); if(b && !RUN.busy){ snd('tap'); openReform(b.getAttribute('data-pid')); } });
$('mainBtn').addEventListener('click', function(){
  if(!S || S._preview) return;
  snd('tap');
  if(S.finished || !today()){ showEnd(); return; }
  if(RUN.busy){ if(RUN.ev && !layer.classList.contains('on') && !$('result').classList.contains('on')) openEvent(RUN.ev); return; }
  if(nextInQueue()) playNext(); else if(isMonthEnd()) showRecap(); else nudgeReforms(advanceDay);
});
$('deckBtn').addEventListener('click', function(){ if(S && !S._preview){ snd('tap'); $('deckBtn').classList.remove('hint'); openDeck(); } });
$('ann').addEventListener('click', function(){ clearTimeout(ANN_T); hideAnn(); });
$('launch').addEventListener('click', function(){ snd('tap'); vibe(10); playNext(); });
$('orientBtn').addEventListener('click', function(){ if(S && !S._preview){ snd('tap'); openOrientation(); } });
$('menuBtn').addEventListener('click', function(){ snd('tap'); openMenu(); });
$('plate').addEventListener('click', function(){ if(S && !S._preview){ snd('tap'); openBudget(); } });
$('dayToken').addEventListener('click', function(){ if(S && !S._preview && !RUN.busy) showDayIntro(0, true); });


/* ---------- Planche de test de la bibliothèque (game.html#planche) ---------- */
function showPlanche(){
  document.documentElement.style.overflow = 'auto'; document.body.style.overflow = 'auto'; document.body.style.height = 'auto'; $('app').style.display = 'none';
  var d = document.createElement('section'); d.id = 'planche';
  var h = '<h1>Bibliothèque d\'objets</h1><p class="muted" style="margin:0">' + Object.keys(OBJ).length + ' objets, ' + FX_ANIMS.length + ' animations. Chaque objet est dessiné dans le style du plateau.</p>';
  OBJ_CATS.forEach(function(c){
    h += '<h2>' + c[1] + '</h2><div class="pl-grid">' + Object.keys(OBJ).filter(function(k){ return OBJ[k].cat === c[0]; }).map(function(k){
      return '<div class="pl-cell' + (OBJ[k].sea ? ' sea' : '') + '" data-o="' + k + '"><div class="stage"></div><span>' + k + '</span></div>'; }).join('') + '</div>';
  });
  h += '<h2>Animations</h2><div class="pl-grid">' + FX_ANIMS.map(function(a){ return '<div class="pl-cell" data-a="' + a + '"><div class="stage"></div><span>' + a + '</span></div>'; }).join('') + '</div>';
  d.innerHTML = h; document.body.appendChild(d);
  d.querySelectorAll('[data-o]').forEach(function(cell){
    var k = cell.getAttribute('data-o'), def = OBJ[k], kk = Math.min(7.5, 300 / ((def.w || 24) * LOCAL * 4.2) / 4.2 * 4.2 / ((def.w || 24) > 26 ? 1.35 : 1));
    var label = def.lab ? (k === 'panneau' ? 'Route fermée' : k === 'bulle' ? 'On négocie' : 'Prix +12 %') : null;
    var anim = /usine$|centrale|incendie/.test(k) ? 'smoke' : 'still';
    spawnFx({ obj:k, anim:anim, label:label }, cell.querySelector('.stage'), { px:[0, 0], k:Math.min(74 / ((def.w || 24) * LOCAL), 62 / ((def.h || 24) * LOCAL)), still:anim === 'still' });
  });
  d.querySelectorAll('.fxlab').forEach(function(l){ l.style.fontSize = '11px'; });
  var demo = { appear:'maison', fade:'voiture', move:'tracteur', flow:'camion', pulse:'hopital', smoke:'usine', spin:'eolienne', shake:'cadenas', blink:'cyberattaque', rise:'pieces', grow:'chantier_grue', close:'commerce' };
  function runAnims(){
    d.querySelectorAll('[data-a]').forEach(function(cell){
      var a = cell.getAttribute('data-a'), st = cell.querySelector('.stage'); st.innerHTML = '';
      var o = demo[a], def = OBJ[o], k = Math.min(60 / ((def.w || 24) * LOCAL), 56 / ((def.h || 24) * LOCAL));
      var fx = { obj:o, anim:a, count:a === 'move' ? 2 : a === 'rise' ? 2 : 1 };
      var px = [0, 0];
      if(a === 'move' || a === 'flow'){ px = [-30, 0]; }
      var r = spawnFx(fx, st, { px:px, k:a === 'move' ? k * .6 : k, toPx:(a === 'move' || a === 'flow') ? [34, -8] : null });
    });
  }
  runAnims(); setInterval(runAnims, 4200);
}

/* ---------- Démarrage ---------- */
function refitBoard(){ fitView(); buildMovers(); buildSprites(); buildClouds(wxKind); sizeWx(); setWeather(wxKind); bakeDecor(); if(S && !S._preview){ restoreStays(); renderPins(); if(!RUN.busy) camHome(0); } placeOverlays(); }
var refitT = null;
function boot(){
  fitView();
  buildBoard();
  buildMovers(); buildSprites(); sizeWx(); bakeDecor();
  var rt = null;
  window.addEventListener('resize', function(){ clearTimeout(rt); rt = setTimeout(refitBoard, 200); });
  if(/planche/.test(location.hash)){ showPlanche(); requestAnimationFrame(tick); return; }
  showTitle();
  requestAnimationFrame(tick);
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();

// accès pour les tests automatisés (lecture seule)
/* v2.6 : audit automatique terre / mer (tests) : place tous les fx de toutes les semaines et compte les objets mal placés */
function fxAudit(on, only){
  var keep = PLACE_ON, tot = 0, bad = 0, det = [], byObj = {};
  PLACE_ON = on !== false;
  function scene(list, cx, cy, z, tag){
    if(only && (only.done || tag.indexOf(only.tag) < 0)) return;
    if(only) only.done = true;
    $('fxl').innerHTML = ''; $('stayl').innerHTML = ''; $('labl').innerHTML = '';
    SCENE = { occ:[], labs:[], live:[] };
    var r = board.getBoundingClientRect(), u = RP(cx, cy), pp = U2P(u[0], u[1]), cyy = (90 + r.height - Math.max(FRAME.b, 90) - 110) / 2;
    var zz = clamp(z, 1, 3), tx = r.width / 2 - pp[0] * zz, ty = cyy - pp[1] * zz;
    var cb = camBounds(zz); tx = clamp(tx, cb.x0, cb.x1); ty = clamp(ty, cb.y0, cb.y1); CAM = { z:zz, tx:tx, ty:ty };
    list.forEach(function(fx){
      if(!fx || !fx.obj) return;
      var res = spawnFx(fx, $('fxl'), {});
      var save = PLACE_ON; PLACE_ON = true; var rule = placeRule(fx); PLACE_ON = save;
      if(!rule) return;
      res.els.forEach(function(el){
        tot++;
        var ok = footOK(rule, el._pos[0], el._pos[1], (el._pw || 4 * VBK) / 2, el._ph || 4 * VBK);
        if(!ok){ bad++; byObj[fx.obj] = (byObj[fx.obj] || 0) + 1; if(det.length < 25) det.push(tag + ' ' + fx.obj + ' (' + rule + ') x=' + fx.x + ' y=' + fx.y); }
      });
    });
  }
  DAYS.forEach(function(d, di){
    arr(d.events).forEach(function(ev){
      var c = evCamera(ev), z = eventZoom(ev, c.zoom);
      if(!arr(ev.choices).length) scene(arr(ev.fx), c.x, c.y, z, 'S' + (di + 1) + ' ' + ev.id);
      arr(ev.choices).forEach(function(ch){ scene(arr(ev.fx).concat(arr(ch.fx)), c.x, c.y, z, 'S' + (di + 1) + ' ' + ev.id + '/' + ch.id); });
    });
  });
  PROGS.forEach(function(p){
    var R = p.result; if(!R) return; var rg = REG[p.region] || null, pt = rg ? { x:num(rg.x), y:num(rg.y) } : parisXY();
    arr(R.outcomes).forEach(function(o){ var l = arr(o.fx).length ? o.fx : arr(R.fx); scene(l, pt.x, pt.y, crowdZoom(l, 2.4), 'prop ' + p.id + '/' + o.id); });
  });
  if(only){ PLACE_ON = keep; camSet(CAM.z, CAM.tx, CAM.ty, 0); return { total:tot, bad:bad, details:det }; }
  $('fxl').innerHTML = ''; $('labl').innerHTML = ''; SCENE = { occ:[], labs:[], live:[] };
  PLACE_ON = keep; camHome(0); restoreStays();
  return { total:tot, bad:bad, byObj:byObj, details:det };
}
window.__boussole = { fxAudit:fxAudit, terrain:function(x, y){ var u = RP(x, y); return terrainU(u[0], u[1]); }, frame:function(){ return FRAME; }, ui:{ eventCard:function(i){ openEvent(todayEvents()[i || 0]); }, recap:showRecap, news:function(){ showNews(); }, unlock:function(){ var d = DAYS[unlockDay()]; if(!d) return; S.unlockSeen = {}; var keep = S.dayIdx; S.dayIdx = unlockDay(); maybeUnlock(); S.dayIdx = keep; }, result:function(){ var p = PROGS.filter(function(x){ return x.result; })[0]; if(!p) return; openResult({ pid:p.id, oid:p.result.outcomes[0].id, factor:1, shown:true }, p, p.result.outcomes[0]); }, showEnd:showEnd, openOrientation:openOrientation, openBudget:openBudget, openDeck:openDeck, openReform:openReform, openMenu:openMenu, closeCard:closeCard, blockCard:function(id){ openEvent(blockEvent(id)); }, note:function(){ openNote({ id:'t', title:'Suite : test de conséquence', text:'Les barrages se lèvent un à un. Les agriculteurs restent vigilants.', region:'occitanie', from:'choix', src:'Annoncer une aide d\'urgence', ind:{ cohesion:2 }, budget:0 }); } }, state:function(){ return S; }, fps:measureFps, cam:function(){ return CAM; }, run:function(){ return RUN; } };
