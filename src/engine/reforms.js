'use strict';
/* =========================================================
   Propositions de la semaine et réformes en plusieurs étapes (v2.1)
   ========================================================= */
function progById(id){ return PROGS.filter(function(x){ return x.id === id; })[0]; }
function weekOffer(){
  var d = today(); if(!d) return [];
  var u = unlockDay(); if(u > 0 && S.dayIdx < u) return [];
  if(Array.isArray(d.offer)) return d.offer.map(progById).filter(Boolean);
  return PROGS;
}
function appliedThisWeek(){ return weekList().length >= RPW; }
function progWeeks(p){ return arr(p.steps).reduce(function(a, s){ return a + Math.max(1, num(s.weeks, 1)); }, 0); }
function progStatus(id){
  if(!(id in S.applied)) return null;
  var r = S.reforms && S.reforms[id];
  return r ? r.status : 'done';
}
function laterChips(p){
  return arr(p.later).map(function(l){
    var b = num(l.budget), bits = [];
    if(Math.abs(b) >= .05) bits.push(deficitText(b).replace(/^Déficit/, 'déficit'));
    Object.keys(l.ind || {}).forEach(function(k){ var v = num(l.ind[k]); if(v && INDL[k]) bits.push(INDL[k] + ' ' + (v > 0 ? '↑' : '↓') + Math.abs(v)); });
    return '<li><span class="sg">' + (num(l.in, 1)) + '</span><span>' + esc(l.text || '') + (bits.length ? ' <i class="muted">(' + esc(bits.join(', ')) + ')</i>' : '') + '</span></li>';
  }).join('');
}
function openDeck(){
  var offer = weekOffer(), nUsed = weekList().length, left = Math.max(0, RPW - nUsed);
  var html = '<h2 class="ctitle" style="margin:2px 0 4px">Propositions de la semaine</h2><p class="muted" style="margin:0 0 6px">Des mesures présentes dans des programmes, sans nom ni parti.</p>' +
    (offer.length ? '<div class="quota"><span class="q-dots">' + Array.apply(null, Array(RPW)).map(function(_, i){ return '<i class="' + (i < nUsed ? 'ok' : '') + '"></i>'; }).join('') + '</span><b>' + (left ? 'Encore ' + left + (left > 1 ? ' réformes possibles' : ' réforme possible') + ' cette semaine' : 'Quota de la semaine atteint : ' + RPW + ' réformes lancées') + '</b></div>' : '');
  if(!offer.length) html += '<p class="ctext">' + (unlockDay() > S.dayIdx ? 'Les réformes arrivent la semaine prochaine. Concentre-toi sur les événements de cette semaine.' : 'Aucune proposition cette semaine.') + '</p>';
  html += '<div class="plist">' + offer.map(function(p){
    var st = progStatus(p.id), w = progWeeks(p);
    return '<button class="prow pressable" data-pid="' + esc(p.id) + '">' + medal(p.sector) + '<span class="pr-t"><b>' + esc(p.label) + '</b><span class="chips">' +
      budgetChips(p.budget, p.once, null, true) + (w ? '<span class="chip">' + w + (w > 1 ? ' semaines' : ' semaine') + '</span>' : '<span class="chip">Effet immédiat</span>') + '</span>' +
      (st ? '<small class="pr-st">' + ({ en_cours:'En cours', bloque:'Bloquée', done:'Appliquée', abandon:'Abandonnée' }[st] || st) + '</small>' : '') + '</span></button>';
  }).join('') + '</div>';
  html += reformsListHtml();
  var card = openCard(html, { label:'Propositions de la semaine', cls:'sheet' });
  card.addEventListener('click', function(e){ var r = e.target.closest('.prow'); if(r){ snd('tap'); openReform(r.getAttribute('data-pid')); } });
}
function clampList(list, n){ return arr(list).slice(0, n).map(function(b){ return '<li>' + esc(b) + '</li>'; }).join(''); }
function openReform(id){
  var p = progById(id); if(!p) return;
  var st = progStatus(id), used = appliedThisWeek(), w = progWeeks(p), steps = arr(p.steps);
  var html = '<div class="chead">' + medal(p.sector) + '<div class="meta"><b>' + esc(sectorLabel(p.sector)) + '</b><br>' + esc(p.origin || '') + '</div></div>' +
    '<h2 class="ctitle" style="font-size:20px;margin:8px 0 4px">' + esc(p.label) + '</h2>' + termLine(p, 'pt') +
    ((p.simple || p.expert || p.text) ? '<p class="rf-txt">' + esc(evText(p)) + '</p>' : '') +
    '<div class="chips" style="margin:0 0 8px">' + budgetChips(p.budget, p.once, p.budget_note) + (w ? '<span class="chip">Durée : ' + w + (w > 1 ? ' semaines' : ' semaine') + '</span>' : '<span class="chip">Effet immédiat</span>') + (steps.some(function(s){ return s.block; }) ? '<span class="chip">Vote incertain</span>' : '') + '</div>' +
    '<div class="rf-pm"><div><div class="pl"><span class="sg">+</span> Ce que ça apporte</div><ul>' + clampList(p.benefits, 3) + '</ul></div>' +
    '<div><div class="pl"><span class="sg">−</span> Ce qui peut coincer</div><ul>' + clampList(p.problems, 3) + '</ul></div></div>' +
    '<details class="ctx rf-more"><summary>Voir le détail</summary><div class="rf-d">' +
      (p.why_cost ? '<p><b>Pourquoi ça coûte :</b> ' + esc(p.why_cost) + '</p>' : '') +
      (p.why_gain ? '<p><b>Ce que ça rapporte, et quand :</b> ' + esc(p.why_gain) + '</p>' : '') +
      (indChips(p.ind) ? '<div class="chips" style="margin-bottom:8px">' + indChips(p.ind) + '</div>' : '') +
      (steps.length ? '<p style="margin-bottom:2px"><b>Les étapes</b></p><ol class="rf-steps">' + steps.map(function(s){ return '<li>' + esc(s.label) + ' <span class="muted">(' + Math.max(1, num(s.weeks, 1)) + ' sem.' + (s.block ? ', blocage possible' : '') + ')</span></li>'; }).join('') + '</ol>' : '') +
      (arr(p.later).length ? '<p style="margin-bottom:2px"><b>Ensuite, semaine après semaine</b></p><ul class="lst rf-later">' + laterChips(p) + '</ul>' : '') +
      (arr(p.benefits).length > 3 || arr(p.problems).length > 3 ? '<p class="muted">' + esc(arr(p.benefits).slice(3).concat(arr(p.problems).slice(3)).join(' ')) + '</p>' : '') +
    '</div></details>';
  var foot;
  if(st) foot = '<p class="rf-state">' + reformStateText(p) + '</p><button class="btn wide pressable" data-close>Fermer</button>';
  else if(used) foot = '<p class="rf-state">Tu as déjà lancé ' + RPW + ' réformes cette semaine. Reviens la semaine prochaine.</p><button class="btn wide pressable" data-close>Fermer</button>';
  else if(S.finished) foot = '<button class="btn wide pressable" data-close>Fermer</button>';
  else foot = '<div class="confirm-row" style="margin:0"><button class="btn pressable" data-back>Retour</button><button class="btn brass pressable prog-yes" data-yes="' + esc(p.id) + '">' + (w ? 'Lancer la réforme' : 'Appliquer') + '</button></div>';
  var card = openCard(html, { label:p.label, cls:'sheet rfsheet', footer:foot });
  card.addEventListener('click', function(e){
    if(e.target.closest('[data-back]')){ closeCard(true); openDeck(); return; }
    var y = e.target.closest('[data-yes]'); if(y) applyProgram(y.getAttribute('data-yes'), card);
  });
}
function reformStateText(p){
  var st = progStatus(p.id), r = S.reforms && S.reforms[p.id];
  if(st === 'done') return 'Réforme appliquée à la semaine ' + ((r && r.doneDay != null ? r.doneDay : S.applied[p.id]) + 1) + (r && r.factor && r.factor !== 1 ? ', dans une version réduite.' : '.');
  if(st === 'abandon') return 'Réforme abandonnée.';
  if(st === 'bloque') return 'Bloquée à l\'Assemblée : à toi de décider.';
  if(r){ var s = arr(p.steps)[r.step] || {}; return 'En cours : ' + esc(s.label || '') + ', encore ' + r.left + (r.left > 1 ? ' semaines' : ' semaine') + ' pour cette étape.'; }
  return '';
}
function reformsListHtml(){
  var ids = Object.keys(S.reforms || {}).filter(function(id){ var r = S.reforms[id]; return r.status === 'en_cours' || r.status === 'bloque'; });
  if(!ids.length) return '';
  return '<div class="sec-h" style="font-size:15px">Réformes en cours</div>' + ids.map(function(id){ var p = progById(id); return p ? '<p class="rf-state" style="margin:4px 0">' + esc(p.label) + ' : ' + reformStateText(p) + '</p>' : ''; }).join('');
}
function applyEffects(p, factor, keyPrefix){
  factor = factor == null ? 1 : factor;
  S.annual += num(p.budget) * factor;
  var once = num(p.once) * factor; if(once){ S.dette -= once; S.solde += once; S.onceTotal += once; }
  var ind = {}; Object.keys(p.ind || {}).forEach(function(k){ ind[k] = Math.round(num(p.ind[k]) * factor); });
  var changed = applyInd(ind);
  var reg = p.region || nationalRegion();
  arr(p.later).forEach(function(l, k){
    var li = {}; Object.keys(l.ind || {}).forEach(function(x){ li[x] = Math.round(num(l.ind[x]) * factor); });
    S.notes.push({ id:'p_' + p.id + '_' + k, due:S.dayIdx + Math.max(1, num(l.in, 1)), region:l.region || reg, sector:p.sector, title:l.title || p.label, text:l.text || '',
      ind:li, budget:num(l.budget) * factor, once:num(l.once) * factor, from:'prop', src:p.label, shown:false, read:false });
  });
  return changed;
}
/* résultat différé : l'issue est tirée une seule fois et sauvegardée */
function scheduleResult(p, factor){
  var R = p.result; if(!R || !arr(R.outcomes).length || S.results.some(function(r){ return r.pid === p.id; })) return;
  var tot = arr(R.outcomes).reduce(function(a, o){ return a + Math.max(0, num(o.weight, 1)); }, 0) || 1, x = Math.random() * tot, pick = R.outcomes[0];
  for(var i = 0; i < R.outcomes.length; i++){ x -= Math.max(0, num(R.outcomes[i].weight, 1)); if(x <= 0){ pick = R.outcomes[i]; break; } }
  S.results.push({ pid:p.id, oid:pick.id, due:S.dayIdx + Math.max(1, num(R['in'], 1)), factor:factor == null ? 1 : factor, shown:false });
}
function dueResult(){ return S.results.filter(function(r){ return !r.shown && r.due <= S.dayIdx && progById(r.pid); })[0]; }
function playResult(r){
  if(RUN.busy) return;
  var p = progById(r.pid), R = p.result, o = arr(R.outcomes).filter(function(x){ return x.id === r.oid; })[0] || R.outcomes[0];
  setBusy(true, null);
  var rg = REG[p.region] || null, pt = rg ? { x:num(rg.x), y:num(rg.y) } : parisXY();
  beginScene();
  var oo = arr(o.fx).length ? o.fx : arr(R.fx);
  camTo(pt.x, pt.y, crowdZoom(oo, 2.4), 850);
  var fx = arr(o.fx).length ? o.fx : arr(R.fx).length ? R.fx : [ { obj:'parlement', x:pt.x, y:pt.y, anim:'pulse' }, { obj:'bulle', x:pt.x, y:pt.y - 5, anim:'appear', label:o.label, delay:.4 } ].concat(num(o.budget) > 0 ? [ { obj:'pieces', x:pt.x + 4, y:pt.y + 2, anim:'rise', count:3, delay:.6 } ] : []);
  playFxList(fx, 'res:' + p.id, false, { delayScale:.5 });
  clearTimeout(OPEN_T);
  OPEN_T = setTimeout(function(){ openResult(r, p, o); }, reduceMotion ? 300 : 1300);
}
function openResult(r, p, o){
  var R = p.result, f = r.factor == null ? 1 : r.factor;
  var html = '<div class="chead">' + medal(p.sector, 'major') + '<div class="meta"><b>Résultat</b><br>' + esc(p.label) + '</div></div>' +
    '<h2 class="ctitle">' + esc(R.title || 'Le résultat est tombé') + '</h2><div class="res-stamp">' + esc(o.label || '') + '</div>' +
    (o.text ? '<p class="ctext">' + esc(o.text) + '</p>' : '') +
    '<div class="pm"><span class="sg">+</span><div><div class="pl">Ce que ça apporte</div>' + esc(o.plus || '') + '</div></div>' +
    '<div class="pm"><span class="sg">−</span><div><div class="pl">Ce que ça coûte</div>' + esc(o.minus || '') + '</div></div>' +
    '<div class="chips">' + budgetChips(num(o.budget) * f, num(o.once) * f, o.budget_note || R.budget_note) + indChips(o.ind) + '</div>' +
    (arr(o.later).length ? '<div class="sec-h" style="font-size:15px">Les semaines suivantes</div><ul class="lst rf-later">' + laterChips(o) + '</ul>' : '') +
    '<p class="muted" style="margin-top:10px">Issue tirée au sort selon sa probabilité, sauvegardée dans votre partie.</p>';
  openCard(html, { anim:'flipin', label:R.title || 'Résultat', cls:'rescard', footer:'<button class="btn wide brass pressable" data-close data-autofocus>Compris</button>', onClose:function(){
    if(r.shown) return;
    r.shown = true;
    S.annual += num(o.budget) * f; var once = num(o.once) * f; if(once){ S.dette -= once; S.solde += once; S.onceTotal += once; }
    var ind = {}; Object.keys(o.ind || {}).forEach(function(k){ ind[k] = Math.round(num(o.ind[k]) * f); }); var changed = applyInd(ind);
    if(o.axes && Object.keys(o.axes).length){ S.blockLog = S.blockLog || []; S.blockLog.push({ sector:p.sector, axes:o.axes }); }
    var reg = p.region || nationalRegion();
    arr(o.later).forEach(function(l, k){ var li = {}; Object.keys(l.ind || {}).forEach(function(x){ li[x] = Math.round(num(l.ind[x]) * f); });
      S.notes.push({ id:'r_' + p.id + '_' + k, due:S.dayIdx + Math.max(1, num(l['in'], 1)), region:l.region || reg, sector:p.sector, title:l.title || (R.title || p.label), text:l.text || '', ind:li, budget:num(l.budget) * f, once:num(l.once) * f, from:'prop', src:p.label, shown:false, read:false }); });
    var imp = logImpact({ kind:'res', id:p.id, title:p.label, label:o.label || 'Résultat', ind:changed, budget:num(o.budget) * f, once:once });
    save(); renderAll(changed); setTimeout(function(){ announce('Résultat : ' + (o.label || ''), p.label, imp, 4000); }, 300);
    var money = Math.abs(num(o.budget)) + Math.abs(once); if(money) coins(null, Math.ceil(Math.min(6, 2 + money)));
    clearFx(); endScene();
    camHome(900).then(function(){ setBusy(false); renderPins(); if(RUN.auto && nextInQueue()) setTimeout(playNext, 300); else dayDone(); });
  } });
}
function applyProgram(id, card){
  var p = progById(id); if(!p || (id in S.applied) || appliedThisWeek() || S.finished) return;
  S.applied[id] = S.dayIdx; S.weekApplied = S.weekApplied || {}; S.weekApplied[S.dayIdx] = weekList().concat([id]);
  S.reforms = S.reforms || {};
  var changed = {}, steps = arr(p.steps);
  if(steps.length){
    S.reforms[id] = { status:'en_cours', step:0, left:Math.max(1, num(steps[0].weeks, 1)), factor:1, start:S.dayIdx };
    var lft = reformsLeft();
    setTimeout(function(){ announce('Réforme lancée', p.label, { ind:p.ind, budget:p.budget, once:p.once, later:true }, 4200);
      var k = $('ann').querySelector('.ann-k'); if(k) k.textContent = 'Réforme lancée : effets attendus dans ' + progWeeks(p) + (progWeeks(p) > 1 ? ' semaines' : ' semaine'); }, 650);
    if(lft) setTimeout(function(){ toast('<b>' + esc(nPossible(lft)) + '</b>&nbsp;encore cette semaine.', 2400); }, 5200);
  } else {
    S.reforms[id] = { status:'done', step:0, left:0, factor:1, start:S.dayIdx, doneDay:S.dayIdx };
    changed = applyEffects(p, 1); scheduleResult(p, 1);
    var imp = logImpact({ kind:'prog', id:id, title:p.label, label:'Réforme appliquée', ind:changed, budget:num(p.budget), once:num(p.once), later:arr(p.later).length > 0 });
    setTimeout(function(){ announce('Réforme appliquée', p.label, imp); }, 650);
  }
  save();
  snd('flip'); vibe(14);
  var r = card.getBoundingClientRect();
  closeCard();
  var money = Math.abs(num(p.budget)) + Math.abs(num(p.once));
  if(!steps.length) coins({ left:r.left + r.width / 2 - 20, top:r.top + 30, width:40, height:40 }, money ? Math.ceil(Math.min(8, 2 + money / 2)) : 0);
  setTimeout(function(){ renderAll(changed); renderReforms(); }, 600);
}
/* avancement des réformes à chaque nouvelle semaine */
function advanceReforms(){
  var finished = [], changed = {};
  Object.keys(S.reforms || {}).forEach(function(id){
    var r = S.reforms[id], p = progById(id); if(!p || r.status !== 'en_cours') return;
    var steps = arr(p.steps);
    r.left--;
    if(r.left > 0) return;
    r.step++;
    if(r.step >= steps.length){ r.status = 'done'; r.doneDay = S.dayIdx; scheduleResult(p, r.factor); var c = applyEffects(p, r.factor); Object.keys(c).forEach(function(k){ changed[k] = (changed[k] || 0) + c[k]; });
      logImpact({ kind:'prog', id:id, title:p.label, label:'Réforme adoptée', ind:c, budget:num(p.budget) * r.factor, once:num(p.once) * r.factor });
      finished.push({ label:p.label, ind:c, budget:num(p.budget) * r.factor, once:num(p.once) * r.factor }); return; }
    r.left = Math.max(1, num(steps[r.step].weeks, 1));
    if(steps[r.step].block && p.block && arr(p.block.choices).length) r.status = 'bloque';
  });
  return { finished:finished, changed:changed };
}
function renderReforms(){
  var el = $('reforms'); if(!el) return;
  if(!S || S._preview){ el.innerHTML = ''; return; }
  var ids = Object.keys(S.reforms || {}).filter(function(id){ var r = S.reforms[id]; return r.status === 'en_cours' || r.status === 'bloque'; });
  el.innerHTML = ids.map(function(id){
    var p = progById(id), r = S.reforms[id]; if(!p) return '';
    var steps = arr(p.steps), n = steps.length;
    return '<button class="rf-chip pressable' + (r.status === 'bloque' ? ' blk' : '') + '" data-pid="' + esc(id) + '"><span class="rf-dots">' + steps.map(function(s, i){ return '<i class="' + (i < r.step ? 'ok' : i === r.step ? 'cur' : '') + (s.block ? ' vote' : '') + '"></i>'; }).join('') + '</span>' +
      '<span class="rf-l"><b>' + esc(p.label) + '</b><small>' + (r.status === 'bloque' ? 'Blocage à l\'Assemblée' : 'Étape ' + (r.step + 1) + '/' + n + ', ' + r.left + ' sem.') + '</small></span></button>';
  }).join('');
}
/* blocage à l'Assemblée : joué comme un événement guidé */
function blockedReform(){ return Object.keys(S.reforms || {}).filter(function(id){ return S.reforms[id].status === 'bloque' && progById(id); })[0]; }
function parisXY(){ var r = REGIONS.filter(function(r){ return /idf|ile_de|paris/i.test(r.id); })[0]; return r ? { x:num(r.x, 50), y:num(r.y, 23) } : { x:50, y:23 }; }
function blockEvent(id){
  var p = progById(id), b = p.block || {}, pa = parisXY();
  return { id:'blk_' + id, _block:id, kind:'majeur', region:(REGIONS.filter(function(r){ return /idf|ile_de|paris/i.test(r.id); })[0] || {}).id, sector:p.sector,
    title:b.title || 'Blocage à l\'Assemblée', simple:(b.text || '') , expert:(b.expert || b.text || ''), context:'Réforme concernée : ' + p.label + '.',
    real:b.real, camera:{ x:pa.x, y:pa.y, zoom:2.6 },
    fx:b.fx || [ { obj:'parlement', x:pa.x, y:pa.y, anim:'pulse' }, { obj:'bulle', x:pa.x + 1, y:pa.y - 6, anim:'appear', label:'Pas de majorité', delay:.5 }, { obj:'manifestants', x:pa.x - 6, y:pa.y + 3, anim:'shake', delay:.8 } ],
    choices:arr(b.choices).map(function(c){ return Object.assign({ fx:c.fx || (c.outcome === 'abandon' ? [ { obj:'parlement', x:pa.x, y:pa.y, anim:'close' } ] : c.outcome === 'amend' ? [ { obj:'bulle', x:pa.x, y:pa.y - 6, anim:'appear', label:'Compromis' } ] : [ { obj:'parlement', x:pa.x, y:pa.y, anim:'appear' }, { obj:'etiquette', x:pa.x + 4, y:pa.y - 4, anim:'appear', label:'Adoptée' } ]) }, c); }) };
}
function resolveBlock(id, ch){
  var r = S.reforms[id]; if(!r) return;
  var o = ch.outcome || 'pass';
  if(o === 'abandon'){ r.status = 'abandon'; }
  else { r.status = 'en_cours'; if(o === 'amend') r.factor = clamp(num(ch.factor, .5), 0, 1); }
  if(r.status === 'en_cours' && r.left <= 0){ r.left = 1; }
  save(); renderReforms();
}

