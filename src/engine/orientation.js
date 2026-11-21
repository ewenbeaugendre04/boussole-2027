'use strict';
/* =========================================================
   Mon orientation
   ========================================================= */
function orientation(){
  var per = {}, glob = {}, count = { choices:0, progs:0 };
  AXK.forEach(function(k){ glob[k] = { s:0, n:0 }; });
  function add(sector, axes){
    sector = sector || '_';
    if(!per[sector]){ per[sector] = { n:0, ax:{} }; AXK.forEach(function(k){ per[sector].ax[k] = { s:0, n:0 }; }); }
    per[sector].n++;
    Object.keys(axes || {}).forEach(function(k){
      if(!(k in glob)) return;
      var v = clamp(num(axes[k]), -2, 2);
      per[sector].ax[k].s += v; per[sector].ax[k].n++; glob[k].s += v; glob[k].n++;
    });
  }
  Object.keys(S.decided).forEach(function(id){
    var m = EVMAP[id]; if(!m) return;
    var ch = chosen(m.ev); if(!ch) return;
    (ch.parts || [ch]).forEach(function(c){ add(m.ev.sector, c.axes); }); count.choices++;
  });
  Object.keys(S.applied).forEach(function(id){ var p = PROGS.filter(function(x){ return x.id === id; })[0]; if(p && progStatus(id) !== 'abandon'){ add(p.sector, p.axes); count.progs++; } });
  arr(S.blockLog).forEach(function(b){ add(b.sector, b.axes); count.choices++; });
  return { per:per, glob:glob, count:count };
}
function axisRow(k, a, compact){
  var v = a.n ? a.s / a.n : 0, pct = 50 + v / 2 * 50;
  var ax = AXES[k] || {};
  return '<div class="axis">' + (compact ? '' : '<div class="an">' + esc(axName(k)) + '<small>' + (a.n ? a.n + (a.n > 1 ? ' choix comptés' : ' choix compté') : 'pas encore de choix') + '</small></div>') +
    '<div class="track" role="img" aria-label="' + esc(axName(k) + ' : ' + leanText(k, a)) + '"><span class="knob' + (a.n ? '' : ' none') + '" style="left:' + F(pct) + '%"></span></div>' +
    '<div class="ends"><span>' + esc(ax.neg || '') + '</span><span>' + esc(ax.pos || '') + '</span></div></div>';
}
function leanText(k, a){
  if(!a.n) return 'pas encore de position';
  var v = a.s / a.n, ax = AXES[k] || {}, side = v < 0 ? ax.neg : ax.pos, m = Math.abs(v);
  if(m < .35) return 'au milieu, entre « ' + (ax.neg || '') + ' » et « ' + (ax.pos || '') + ' »';
  return (m < 1 ? 'légèrement' : m < 1.5 ? 'plutôt' : 'nettement') + ' vers « ' + (side || '') + ' »';
}
function openOrientation(){
  var o = orientation();
  var total = o.count.choices + o.count.progs;
  var summ = '<div class="summary">' + (total ? '<p>D\'après ' + o.count.choices + (o.count.choices > 1 ? ' décisions' : ' décision') + (o.count.progs ? ' et ' + o.count.progs + (o.count.progs > 1 ? ' propositions appliquées' : ' proposition appliquée') : '') + '\u00A0:</p>' +
      AXK.map(function(k){ return '<p><b>' + esc(axName(k)) + '</b> : ' + esc(leanText(k, o.glob[k])) + '.</p>'; }).join('')
      : '<p>Prends tes premières décisions sur le plateau : ta boussole se remplira au fil des semaines.</p>') + '</div>';
  var sectors = arr(G.sectors).slice();
  Object.keys(o.per).forEach(function(s){ if(!SECT[s]) sectors.push({ id:s, label:s === '_' ? 'Divers' : s }); });
  sectors.sort(function(a, b){ return (o.per[b.id] ? o.per[b.id].n : 0) - (o.per[a.id] ? o.per[a.id].n : 0); });
  var secHtml = sectors.map(function(s){
    var d = o.per[s.id];
    if(!d) return '<div class="sect"><h4>' + esc(s.label) + '<small>pas encore de décision</small></h4><div style="height:8px"></div></div>';
    var axes = AXK.filter(function(k){ return d.ax[k].n; });
    return '<div class="sect"><h4>' + esc(s.label) + '<small>' + d.n + (d.n > 1 ? ' décisions' : ' décision') + '</small></h4>' +
      (axes.length ? axes.map(function(k){ return '<div class="muted" style="margin-top:8px;font-weight:700;color:var(--ink)">' + esc(axName(k)) + '</div>' + axisRow(k, d.ax[k], true); }).join('') : '<p class="muted" style="margin:6px 0 10px">Ces choix ne penchent sur aucun axe.</p>') + '</div>';
  }).join('');
  var html = '<div class="chead"><div class="medal" style="background:var(--paper)">' + COMPASS.replace('<svg ', '<svg style="width:46px;height:46px" ') + '</div><div><h2 class="ctitle" style="margin:0">Mon orientation</h2><div class="meta">Où te placent tes choix, secteur par secteur.</div></div></div>' +
    summ + '<div class="sec-h">Dans l\'ensemble</div>' + AXK.map(function(k){ return axisRow(k, o.glob[k]); }).join('') +
    '<div class="sec-h">Par secteur</div>' + secHtml +
    '<p class="muted" style="margin-top:14px">Calculé à partir de tes choix et des propositions que tu as appliquées. Aucune position n\'est meilleure qu\'une autre : la boussole montre une direction, pas une note.</p>';
  openCard(html, { label:'Mon orientation' });
}

