'use strict';
/* =========================================================
   Déroulé guidé : un événement après l'autre
   ========================================================= */
var RUN = { busy:false, ev:null, auto:true };
function fmtDate(d){
  d = String(d || ''); var m = d.match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/);
  if(!m) return d;
  var mo = MONTHS[+m[2] - 1] || '';
  return (m[3] ? (+m[3] === 1 ? '1er' : String(+m[3])) + ' ' : '') + mo + ' ' + m[1];
}
function showCaption(ev){
  var c = $('caption'), r = ev.real;
  if(!r){ c.classList.remove('on'); return; }
  c.innerHTML = '<span class="cap-k">Inspiré d\'un fait réel</span><span class="cap-v"><span class="cv">' + esc(r.place || '') + '</span></span>';
  c.classList.remove('on'); void c.offsetWidth; c.classList.add('on');
}
function hideCaption(){ $('caption').classList.remove('on'); }
function nextInQueue(){
  var n = S.notes.filter(function(n){ return n.due <= S.dayIdx && n.shown && !n.read; })[0];
  if(n) return { note:n };
  var rs = dueResult(); if(rs) return { result:rs };
  var bl = blockedReform(); if(bl) return { block:bl };
  var ev = remaining()[0];
  return ev ? { ev:ev } : null;
}
function playNext(){
  if(!S || S._preview || RUN.busy || S.finished || layer.classList.contains('on')) return;
  if(!S.started[S.dayIdx]){ S.started[S.dayIdx] = true; save(); }
  renderLaunch();
  var q = nextInQueue();
  if(!q){ dayDone(); return; }
  if(q.note) playNote(q.note); else if(q.result) playResult(q.result); else if(q.block) playEvent(blockEvent(q.block)); else playEvent(q.ev);
}
function setBusy(b, ev){ RUN.busy = b; RUN.ev = b ? ev : null; renderDock(); renderTray(); renderQuests(); renderLaunch(); }
var OPEN_T = null;
/* v2.6 : zoom de l'événement, un peu plus serré si ses objets (et ceux du choix le plus chargé) se marchent dessus */
function eventZoom(ev, z){
  var best = crowdZoom(ev.fx, z);
  arr(ev.choices).forEach(function(ch){ if(arr(ch.fx).length) best = Math.max(best, crowdZoom(arr(ev.fx).concat(ch.fx), z)); });
  return clamp(best, 1, 3);
}
function playEvent(ev){
  if(RUN.busy) return;
  setBusy(true, ev);
  $('dayIntro').classList.remove('on');
  var c = evCamera(ev);
  showCaption(ev);
  snd('flip');
  c.zoom = eventZoom(ev, c.zoom);
  camTo(c.x, c.y, c.zoom, 850);
  beginScene();
  var tEv = playFxList(ev.fx, 'ev:' + ev.id, true, { delayScale:.5 });
  setTimeout(settleScene, Math.min(3200, tEv * 1000 + 250)); setTimeout(keepLabelsOnScreen, 120); setTimeout(keepLabelsOnScreen, 1300);
  RUN.pending = ev; document.body.classList.add('cinema');
  clearTimeout(OPEN_T);
  OPEN_T = setTimeout(function(){ if(RUN.pending === ev) showAnswerBtn(true); }, reduceMotion ? 200 : 900);
}
function showAnswerBtn(on){
  document.body.classList.toggle('cinema', !!on || !!RUN.pending);
  var b = $('answerBtn');
  if(!b){ b = document.createElement('button'); b.id = 'answerBtn'; b.className = 'btn brass pressable'; b.textContent = 'Répondre à la situation';
    b.addEventListener('click', function(e){ e.stopPropagation(); snd('tap'); openPending(); }); document.body.appendChild(b); }
  b.classList.toggle('on', !!on);
}
function openPending(){
  clearTimeout(OPEN_T);
  var ev = RUN.pending; RUN.pending = null; showAnswerBtn(false);
  if(!ev || !RUN.busy || RUN.ev !== ev || layer.classList.contains('on')) return;
  openEvent(ev);
}
/* toucher la carte ne lance plus la question : on laisse le temps de lire, le bouton « Répondre » ouvre la carte */
function abortEvent(){
  RUN.pending = null; showAnswerBtn(false); hideCaption(); clearFx(); endScene(); camHome(800);
  setBusy(false); renderPins();
}
function afterDecision(ev, ch, from){
  hideCaption();
  var t = playFxList(ch.fx, 'ch:' + ev.id + ':' + ch.id, true, { reuse:true, delayScale:.6 });
  setTimeout(settleScene, Math.min(3400, t * 1000 + 250)); setTimeout(settleScene, 900);
  renderQuests();
  var money = Math.abs(num(ch.budget)) + Math.abs(num(ch.once));
  coins(from, money ? Math.ceil(Math.min(8, 2 + money)) : 0);
  setTimeout(function(){ showResult(ev, ch); }, Math.min(1500, Math.max(700, t * 1000 * .55)));
}
/* phrases d'explication concrètes, tirées des écarts d'indicateurs et des recettes induites (neutre : on décrit, on ne juge pas) */
function whyHtml(imp){
  var ind = (imp && imp.ind) || {}, c = inducedCfg(), out = [], g = function(k){ return num(ind[k], 0); };
  var pa = g('pouvoir_achat'), em = g('emploi'), co = g('co2'), b = num(imp && imp.budget, 0), on = num(imp && imp.once, 0);
  if(em >= 1) out.push(['up', 'Plus d\'emplois : environ ' + fmt1(em * 25000 / 1000) + ' 000 postes, soit ' + fmt1(em * c.em) + ' Md€ de recettes en plus par an (cotisations, impôts, chômage évité).']);
  if(em <= -1) out.push(['down', 'Des emplois en moins : environ ' + fmt1(-em * c.em) + ' Md€ de recettes perdues par an.']);
  if(pa >= 1) out.push(['up', 'Le pouvoir d\'achat monte : plus de consommation, donc environ ' + fmt1(pa * c.pa) + ' Md€ de TVA et d\'impôts en plus par an.']);
  if(pa <= -1) out.push(['down', 'Le pouvoir d\'achat baisse : la consommation recule, environ ' + fmt1(-pa * c.pa) + ' Md€ de recettes en moins par an.']);
  if(b >= .1) out.push(['up', 'Le déficit baisse de ' + fmt1(b) + ' Md€ par an grâce à cette décision.']);
  if(b <= -.1) out.push(['down', 'Cette décision coûte ' + fmt1(-b) + ' Md€ par an : le déficit se creuse d\'autant.']);
  if(on <= -.1) out.push(['down', 'Dépense ponctuelle de ' + fmt1(-on) + ' Md€, ajoutée à la dette.']);
  if(on >= .1) out.push(['up', 'Rentrée ponctuelle de ' + fmt1(on) + ' Md€.']);
  if(co <= -1) out.push(['up', 'Moins d\'émissions de CO₂ : la France se rapproche de ses objectifs climat.']);
  if(co >= 1) out.push(['down', 'Plus d\'émissions de CO₂ : la France s\'éloigne de ses objectifs climat.']);
  return out;
}
/* Prévision tout de suite ; le résultat réel (un peu meilleur ou pire que prévu) arrive en alerte 1 à 2 semaines plus tard */
function forecastHtml(imp, ev, ch){
  var out = whyHtml(imp); if(!out.length) return '';
  if(Math.random() < .6){
    var f = Math.round((.6 + Math.random() * .8) * 10) / 10;
    (S.echos = S.echos || []).push({ due:S.dayIdx + 1 + (Math.random() < .5 ? 0 : 1), t:choiceLabel(ch), f:f, ind:imp.ind || {}, budget:num(imp.budget, 0) });
  }
  return '<div class="rp-why"><div class="rp-ek">Prévision</div><p class="fc">' + esc(out[0][1]) + '</p><small>Le résultat réel sera connu dans les prochaines semaines.</small></div>';
}
function revealEchos(){
  var due = (S.echos || []).filter(function(e){ return e.due <= S.dayIdx; }); if(!due.length) return;
  S.echos = S.echos.filter(function(e){ return e.due > S.dayIdx; });
  due.slice(0, 2).forEach(function(e, i){
    var d = e.f - 1, ind = {}; Object.keys(e.ind).forEach(function(k){ var v = Math.round(num(e.ind[k]) * d); if(v) ind[k] = v; });
    applyInd(ind); if(e.budget) S.annual += e.budget * d;
    var better = d >= .15, worse = d <= -.15;
    var msg = better ? 'Mieux que prévu : « ' + esc(e.t) + ' » a eu plus d\'effet qu\'annoncé.' : worse ? 'Moins bien que prévu : « ' + esc(e.t) + ' » a eu moins d\'effet qu\'annoncé.' : 'Comme prévu : « ' + esc(e.t) + ' » a produit l\'effet annoncé.';
    var det = whyHtml({ ind:e.ind, budget:e.budget * e.f })[0];
    setTimeout(function(){ toast('<b>' + msg + '</b>' + (det ? '<br>' + esc(det[1]) : ''), 5200); }, 1400 + i * 5600);
  });
  save();
}
function fmt1(v){ return (Math.round(Math.abs(v) * 10) / 10).toLocaleString('fr-FR'); }
function showResult(ev, ch){
  var evs = todayEvents(), done = evs.filter(function(e){ return S.decided[e.id]; }).length;
  var total = Object.keys(S.decided).length;
  var last = done >= evs.length;
  var imp = RUN.lastImpact && RUN.lastImpact.id === ev.id ? RUN.lastImpact : { ind:ch.ind, budget:ch.budget, once:ch.once };
  var html = '<div class="rp-head"><span class="seal" aria-hidden="true">' + total + '</span><div><b>Décision prise</b><small>' + (ch.parts ? ch.parts.map(function(c){ return '« ' + esc(choiceLabel(c)) + ' »'; }).join(' + ') : esc(choiceLabel(ch))) + '</small></div></div>' +
    '<div class="rp-eff"><div class="rp-ek">Ce que ça change</div>' + effHtml(imp, 3, false) + '</div>' +
    forecastHtml(imp, ev, ch) +
    '<div class="qbar" aria-label="' + done + ' sur ' + evs.length + '"><i style="width:' + F(done / Math.max(1, evs.length) * 100) + '%"></i></div><div class="qtxt">' + (last ? 'Tous les événements de la semaine sont traités.' : done + ' sur ' + evs.length + ' cette semaine') + '</div>' +
    (ch.real_note ? '<div class="envrai"><span class="ev-k">En vrai, à l\'époque</span><p>' + esc(ch.real_note) + '</p></div>' : '') +
    (last ? '<button class="btn wide brass pressable" id="rpGo">Voir le plateau</button>'
          : '<div class="confirm-row" style="margin:0"><button class="btn pressable" id="rpBoard">Retour au plateau</button><button class="btn brass pressable" id="rpGo">Situation suivante</button></div>');
  var p = $('result'); p.innerHTML = html; p.classList.add('on'); runEff(p);
  var go = p.querySelector('#rpGo'); try{ go.focus({ preventScroll:true }); }catch(e){}
  function leave(cont){
    snd('tap');
    p.classList.remove('on'); hideCaption(); clearFx(); endScene();
    camHome(900).then(function(){
      setBusy(false); renderPins();
      if(cont && RUN.auto && nextInQueue()) setTimeout(playNext, 350); else dayDone();
    });
  }
  go.addEventListener('click', function(){ leave(true); });
  var bb = p.querySelector('#rpBoard'); if(bb) bb.addEventListener('click', function(){ leave(false); });
}
function playNote(n){
  if(RUN.busy) return;
  setBusy(true, null);
  var r = REG[n.region] || REG[nationalRegion()] || { x:50, y:45 };
  beginScene();
  camTo(r.x, r.y, 2, 800).then(function(){
    var fxl = $('fxl');
    spawnFx({ obj:'bulle', x:r.x, y:r.y - 3, anim:'appear', label:n.from === 'prop' ? 'Effet d\'une proposition' : 'Conséquence' }, fxl);
    return wait(450);
  }).then(function(){ openNote(n); });
}
function isMonthEnd(){ return (S.dayIdx + 1) % 4 === 0 || S.dayIdx >= DAYS.length - 1; }
function dayDone(){
  renderDock(); renderQuests();
  if(today() && !remaining().length && !S.finished){
    var mb = $('mainBtn'); mb.classList.remove('bump'); void mb.offsetWidth; mb.classList.add('bump');
    if(isMonthEnd() && S.recapShown !== S.dayIdx && S.started[S.dayIdx] && !layer.classList.contains('on') && !nextInQueue()){ S.recapShown = S.dayIdx; save(); setTimeout(showRecap, 350); }
  }
}
/* ---------- Récap de fin de semaine ---------- */
function globAvg(){ var o = orientation(), g = {}; AXK.forEach(function(k){ var a = o.glob[k]; g[k] = a.n ? a.s / a.n : null; }); return g; }
function weekSnapshot(){ var ind = {}; Object.keys(S.ind).forEach(function(k){ ind[k] = S.ind[k]; }); return { day:S.dayIdx, ind:ind, def:curDeficit(), dette:S.dette, glob:globAvg() }; }
function progressHtml(){
  var st = S.start || { ind:{}, def:BASE_DEF, dette:num(B.dette, 0) };
  var dots = DAYS.map(function(d, i){ return '<i class="' + (i < S.dayIdx ? 'ok' : i === S.dayIdx ? 'cur' : '') + '"></i>'; }).join('');
  var inds = INDS.map(function(i){
    var a = num(st.ind[i.id], num(i.start, 50)), b = S.ind[i.id], d = Math.round(b - a);
    return '<div class="pg-i"><div class="pg-l"><span>' + esc(i.label) + '</span><b>' + (d ? (d > 0 ? '↑' : '↓') + Math.abs(d) : '=') + '</b></div><div class="pg-t"><i class="pg-f" style="width:' + F(b) + '%"></i><i class="pg-s" style="left:' + F(a) + '%"></i></div></div>';
  }).join('');
  var nd = Object.keys(S.decided).length, nr = Object.keys(S.reforms || {}).filter(function(id){ return S.reforms[id].status === 'done'; }).length;
  var o = orientation();
  return '<div class="rc-sec">Depuis le début de la partie</div><div class="pg-week"><span>Semaine ' + (S.dayIdx + 1) + ' sur ' + DAYS.length + '</span><span class="pg-dots">' + dots + '</span></div>' +
    '<div class="pg-grid">' + inds + '</div>' +
    '<div class="kv rc-kv" style="margin-top:8px"><span>Déficit annuel</span><b>' + f1(st.def) + ' → ' + f1(curDeficit()) + ' ' + esc(UNIT) + '</b><span>Dette</span><b>' + f0(st.dette) + ' → ' + f0(S.dette) + ' ' + esc(UNIT) + '</b><span>Décisions, réformes adoptées</span><b>' + nd + ', ' + nr + '</b></div>' +
    '<div class="pg-ax">' + AXK.map(function(k){ return '<span><b>' + esc(axName(k)) + '</b> : ' + esc(leanText(k, o.glob[k])) + '</span>'; }).join('') + '</div>' +
    '<p class="muted" style="margin:6px 0 0">Le petit trait marque la valeur au départ.</p>';
}
function showRecap(){
  if(!S || S.finished || !today()) return;
  var wk = S.wk && S.wk.day === S.dayIdx ? S.wk : weekSnapshot();
  var evs = todayEvents(), now = globAvg();
  var dec = evs.filter(function(e){ return S.decided[e.id]; }).map(function(e){
    var ch = chosen(e);
    return '<li><span class="rc-ico">' + '<svg viewBox="-2.6 -2.6 5.2 5.2">' + iconSvg(e.sector) + '</svg></span><span><b>' + esc(e.title) + '</b><small>' + esc(ch ? choiceLabel(ch) : '') + '</small></span></li>';
  });
  var pps = weekList().map(progById).filter(Boolean);
  pps.forEach(function(pp){ dec.push('<li><span class="rc-ico rc-prop"><svg viewBox="-2.6 -2.6 5.2 5.2">' + iconSvg(pp.sector) + '</svg></span><span><b>' + esc(pp.label) + '</b><small>Proposition lancée</small></span></li>'); });
  var secs = []; evs.forEach(function(e){ if(S.decided[e.id] && secs.indexOf(e.sector) < 0) secs.push(e.sector); }); pps.forEach(function(pp){ if(secs.indexOf(pp.sector) < 0) secs.push(pp.sector); });
  var m0 = S.dayIdx - S.dayIdx % 4, top = arr(S.impact).filter(function(o){ return o.day >= m0 && o.day <= S.dayIdx && impactScore(o) > 0; }).sort(function(a, b){ return impactScore(b) - impactScore(a); }).slice(0, 3);
  var axes = AXK.map(function(k){
    var b = wk.glob ? wk.glob[k] : null, a = now[k], ax = AXES[k] || {};
    var pb = 50 + (b == null ? 0 : b) / 2 * 50, pa = 50 + (a == null ? 0 : a) / 2 * 50, d = (a == null ? 0 : a) - (b == null ? 0 : b);
    var txt = a == null ? 'pas encore de position' : Math.abs(d) < .05 ? 'n\'a pas bougé cette semaine' : 's\'est déplacé vers « ' + (d < 0 ? ax.neg : ax.pos) + ' »';
    return '<div class="rc-ax"><div class="rc-an"><b>' + esc(axName(k)) + '</b><small>' + esc(txt) + '</small></div><div class="track sm">' +
      (b != null && Math.abs(d) >= .05 ? '<span class="knob ghost" style="left:' + F(pb) + '%"></span>' : '') + '<span class="knob' + (a == null ? ' none' : '') + '" style="left:' + F(pa) + '%"></span></div>' +
      '<div class="ends"><span>' + esc(ax.neg || '') + '</span><span>' + esc(ax.pos || '') + '</span></div></div>';
  }).join('');
  var inds = INDS.filter(function(i){ return Math.round(S.ind[i.id]) !== Math.round(wk.ind[i.id] == null ? S.ind[i.id] : wk.ind[i.id]); }).map(function(i){
    var a = Math.round(wk.ind[i.id]), b = Math.round(S.ind[i.id]); return '<span class="chip">' + esc(i.label) + ' ' + a + ' → ' + b + ' ' + (b > a ? '↑' : '↓') + '</span>'; }).join('');
  var weekly = curDeficit() / JPA;
  var refs = Object.keys(S.reforms || {}).filter(function(id){ var r = S.reforms[id]; return r.status === 'en_cours' || r.status === 'bloque'; }).map(function(id){ var p = progById(id); return p ? '<li><span class="rc-ico rc-prop">…</span><span><b>' + esc(p.label) + '</b><small>' + reformStateText(p) + '</small></span></li>' : ''; }).join('');
  var html = '<div class="rp-head"><span class="seal" aria-hidden="true">' + (S.dayIdx + 1) + '</span><div><b>Fin de la semaine ' + (S.dayIdx + 1) + '</b><small>' + esc(today().title || '') + '</small></div></div>' +
    '<div class="rc-sec">Tes décisions</div><ul class="rc-list">' + (dec.join('') || '<li><span></span><span class="muted">Aucune décision cette semaine.</span></li>') + '</ul>' +
    (top.length ? '<div class="rc-sec">' + (top.length === 3 ? 'Tes 3 décisions qui ont le plus changé le pays' : 'Tes décisions qui ont le plus changé le pays') + '</div><ol class="rc-top">' + top.map(function(o, i){ return '<li style="--d:' + (i * 160) + 'ms"><span class="rk">' + (i + 1) + '</span><div><b>' + esc(o.title) + '</b><small>' + esc(o.label || '') + ' · semaine ' + (o.day + 1) + '</small>' + effHtml(o, 2, false) + '</div></li>'; }).join('') + '</ol>' : '') +
    '<div class="rc-sec">Ta boussole cette semaine</div>' + axes +
    (secs.length ? '<div class="chips" style="margin:2px 0 0"><span class="muted" style="margin-right:2px">Secteurs touchés :</span>' + secs.map(function(x){ return '<span class="chip">' + esc(sectorLabel(x)) + '</span>'; }).join('') + '</div>' : '') +
    '<div class="rc-sec">Budget et indicateurs</div><div class="kv rc-kv"><span>Déficit annuel</span><b>' + f1(wk.def) + ' → ' + f1(curDeficit()) + ' ' + esc(UNIT) + '</b><span>Dette</span><b>' + f1(wk.dette) + ' → ' + f1(S.dette) + ' ' + esc(UNIT) + '</b><span>À la clôture de la semaine</span><b>+' + f1(weekly) + ' ' + esc(UNIT) + ' de dette</b></div>' +
    (inds ? '<div class="chips">' + inds + '</div>' : '<p class="muted" style="margin:6px 0 0">Les indicateurs n\'ont pas bougé cette semaine.</p>') +
    (refs ? '<div class="rc-sec">Réforme en cours</div><ul class="rc-list">' + refs + '</ul>' : '') + progressHtml() +
    '<p class="muted" style="margin:10px 0 0">Un résumé de vos choix, sans note : aucune direction n\'est meilleure qu\'une autre.</p>';
  var last = S.dayIdx + 1 >= DAYS.length;
  var card = openCard(html, { label:'Bilan du mois', cls:'sheet recap', anim:'flipin', footer:'<div class="confirm-row" style="margin:0"><button class="btn pressable" data-close>Rester</button><button class="btn brass pressable" id="rcNext">' + (last ? 'Voir le bilan final' : 'Semaine suivante') + '</button></div>' });
  runEff(card);
  card.querySelector('#rcNext').addEventListener('click', function(){ closeCard(true); nudgeReforms(advanceDay); });
}

