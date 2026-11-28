'use strict';
/* =========================================================
   Calques animés : bateaux, trains, nuages, phares
   Chaque objet est un petit calque déplacé par transform (composition seule).
   ========================================================= */
var MV = { boats:[], trains:[], clouds:[], beams:[] }, LH = [], VBK = 3.6, VBX = 0, VBY = 0;
function U2P(ux, uy){ return [(ux - VBX) * VBK, (uy - VBY) * VBK]; }
function samplePath(el, n){ var L = el.getTotalLength(), pts = []; for(var i = 0; i <= n; i++){ var p = el.getPointAtLength(L * i / n); pts.push([p.x, p.y]); } return { pts:pts, len:L }; }
function ptAt(s, t){
  var n = s.pts.length - 1, f = clamp(t, 0, 1) * n, i = Math.min(n - 1, Math.floor(f)), r = f - i, a = s.pts[i], b = s.pts[i + 1];
  return [a[0] + (b[0] - a[0]) * r, a[1] + (b[1] - a[1]) * r, Math.atan2(b[1] - a[1], b[0] - a[0])];
}
var BOAT_SVG = '<svg viewBox="-2.6 -3.2 5.2 4.6"><path d="M-2.2,1.1q1,-.4 2,0t2,0" fill="none" stroke="var(--foam)" stroke-width=".25" opacity=".8"/><path d="M-1.6,0h3.2l-.6,.8h-2z" fill="var(--boat)" stroke="var(--roof-d)" stroke-width=".18"/><path d="M0,-.1V-2.8L1.3,-.4Z" fill="var(--sail)" stroke="var(--roof-d)" stroke-width=".15"/><path d="M-.15,-.1V-2.2L-1.1,-.4Z" fill="var(--sail)" stroke="var(--roof-d)" stroke-width=".15"/></svg>';
function buildMovers(){
  var ml = $('movers'); ml.innerHTML = '';
  var routes = [[[-5.4,49.3],[-3.5,49.6],[-1.5,50.1],[0.6,50.3]], [[-5.0,46.4],[-4.2,45.5]], [[3.9,42.1],[5.4,41.8]], [[5.3,42.75],[6.6,42.2],[7.9,42.0],[8.4,41.75]]], tailles = [.85, 1, .7, .65], sens = [-1, 1, 1, -1];
  var kinds = routes.map(function(){ return 'voilier'; });
  /* les bateaux du décor deviennent des bateaux qui bougent (petit aller-retour) */
  if(typeof sprItems === 'function' && SPR_READY) sprItems().filter(function(it){ return /^bateau_peche$/.test(it.id); }).forEach(function(it){ routes.push([[it.x0 - .35, it.y0 + .05], [it.x0 + .35, it.y0 - .05]]); kinds.push(it.id); tailles.push(.55); sens.push(1); });
  /* contrôle : route en mer, loin des côtes et des îlots, et loin des autres routes (pas de collision) */
  var ILOTS = [[-3.5, 47.08], [6.25, 42.6], [-5.45, 47.98], [-5.2, 48.55], [-3.9, 47.35]].map(function(q){ return P(q[0], q[1]); });
  var ok = [], kept = [], keptK = [];
  routes.forEach(function(r, i){
    var pts = [], seg = L(r); for(var k = 0; k < seg.length - 1; k++) for(var u = 0; u <= 10; u++) pts.push([seg[k][0] + (seg[k + 1][0] - seg[k][0]) * u / 10, seg[k][1] + (seg[k + 1][1] - seg[k][1]) * u / 10]);
    var enMer = pts.every(function(p){ return [[0, 0], [1.5, 0], [-1.5, 0], [0, 1], [0, -1.2], [-1.2, -1], [1.2, -1]].every(function(o){ return typeof terrainU !== 'function' || terrainU(p[0] + o[0], p[1] + o[1]) === 0; }) && ILOTS.every(function(c){ return Math.hypot(p[0] - c[0], p[1] - c[1]) > 4.5; }); });
    var loin = ok.every(function(q){ return pts.every(function(p){ return q.every(function(o){ return Math.hypot(p[0] - o[0], p[1] - o[1]) > 4.5; }); }); });
    if(enMer && loin){ ok.push(pts); kept.push(r); keptK.push([kinds[i], tailles[i], sens[i]]); }
  });
  routes = kept; tailles = keptK.map(function(k){ return k[1]; }); sens = keptK.map(function(k){ return k[2]; }); kinds = keptK.map(function(k){ return k[0]; });

  var tmp = document.createElementNS(NS, 'path'); svg.appendChild(tmp);
  MV.boats = routes.map(function(r, i){
    tmp.setAttribute('d', smooth(L(r), false));
    var el = document.createElement('div'); el.className = 'mv boat'; el.innerHTML = '<img src="' + SPR_DIR + kinds[i] + '.webp" alt="" style="width:100%;height:100%;object-fit:contain;object-position:50% 100%">';
    var bk = tailles[i] || 1; el.style.width = F(5.2 * bk * VBK) + 'px'; el.style.height = F(4.6 * bk * VBK) + 'px'; el.style.marginLeft = F(-2.6 * bk * VBK) + 'px'; el.style.marginTop = F(-3.2 * bk * VBK) + 'px';
    ml.appendChild(el);
    return { el:el, s:samplePath(tmp, 60), t:(i * .29) % 1, sp:.012 + i * .002, dir:sens[i] || 1 };
  });
  svg.removeChild(tmp);
  MV.trains = [];
  for(var j = 0; j < 4; j++){
    continue; /* trains retirés (demande d'Ewen, 21/11) */
    var rp = $('rail' + j); if(!rp) break;
    var cars = [];
    var tw = 7.2 * VBK, car = document.createElement('img'); car.className = 'mv tgv'; car.src = SPR_DIR + 'tgv_seul.webp'; car.alt = ''; car.decoding = 'async'; car.style.width = F(tw) + 'px'; car.style.marginLeft = F(-tw / 2) + 'px'; car.style.marginTop = F(-tw * (SPR_AR.tgv_seul || .45) * .62) + 'px'; ml.appendChild(car); cars.push(car);
    var s = samplePath(rp, 220);
    MV.trains.push({ cars:cars, s:s, t:j * .23, sp:.018 + j * .003, dir:1 });
  }
  MV.beams = LH.map(function(p, i){
    var b = document.createElement('i'); b.className = 'mv beam';
    var q = U2P(p[0], p[1]);
    b.style.cssText = 'left:' + F(q[0]) + 'px;top:' + F(q[1] - 2.2 * VBK) + 'px;width:' + F(16 * VBK) + 'px;height:' + F(4.4 * VBK) + 'px;animation-delay:-' + (i * 1.3) + 's';
    ml.appendChild(b); return b;
  });
}
/* nuage plus naturel : silhouette irrégulière (bosses de tailles variées), base plate, ombre douce dessous, bords légèrement flous */
var CLOUD_N = 0;
function cloudSvg(R, fill){
  var id = 'cb' + (CLOUD_N++), n = 6 + Math.floor(R() * 4), top = '', base = '', x = -12;
  for(var j = 0; j < n; j++){
    var t = j / (n - 1), r = (1.6 + Math.sin(t * Math.PI) * 3.4) * (.75 + R() * .5), cy = -r * .55 + (R() - .5) * 1.2;
    top += '<circle cx="' + F(x) + '" cy="' + F(cy) + '" r="' + F(r) + '"/>'; x += 24 / (n - 1) * (.8 + R() * .4);
  }
  base = '<ellipse cx="0" cy="1.2" rx="13.5" ry="2.2"/>';
  return '<svg viewBox="-34 -18 68 30" overflow="visible" style="width:100%;display:block"><defs><filter id="' + id + '" x="-20%" y="-30%" width="140%" height="160%"><feGaussianBlur stdDeviation=".35"/></filter></defs>'
    + '<g filter="url(#' + id + ')"><g fill="#3A5A6A" opacity=".10" transform="translate(1.5,3.2)">' + top + base + '</g>'
    + '<g fill="#DCE6EE">' + top + base + '</g><g fill="' + fill + '" transform="translate(-.5,-.7) scale(.97)">' + top + '</g></g></svg>';
}
function buildClouds(weather){
  var R = rng(hash('c' + (S ? S.dayIdx : 0) + weather));
  var n = { soleil:3, pluie:6, neige:5, canicule:1, vent:4 }[weather] || 3;
  var dark = weather === 'pluie', cl = $('cloudl'), h = [];
  cl.innerHTML = '';
  MV.clouds = [];
  for(var i = 0; i < n; i++){
    var s = .8 + R() * .9;
    var el = document.createElement('div'); el.className = 'mv cloud';
    el.innerHTML = '<div style="opacity:var(--cloud-o);transform:scale(' + F(s) + ')">' + cloudSvg(R, dark ? '#C9D3DB' : '#FFFFFF') + '</div>';
    el.style.width = F(40 * VBK) + 'px'; el.style.height = F(26 * VBK) + 'px'; el.style.marginLeft = F(-16 * VBK) + 'px'; el.style.marginTop = F(-8 * VBK) + 'px';
    cl.appendChild(el);
    MV.clouds.push({ el:el, x:VBX + WM / VBK - 30 + R() * ((WW - 2 * WM) / VBK + 40), y:VBY + WM / VBK - 10 + R() * ((WH - 2 * WM) / VBK), sp:(weather === 'vent' ? 3 : 1) * (.6 + R() * .7) });
  }
}
var lastT = 0, FRAMES = [];
function tick(t){
  var dt = Math.min(.1, (t - lastT) / 1000 || 0); lastT = t;
  FRAMES.push(t); if(FRAMES.length > 240) FRAMES.shift();
  if(!document.hidden && !reduceMotion){
    MV.boats.forEach(function(m){
      m.t += m.sp * dt * m.dir; if(m.t > 1){ m.t = 1; m.dir = -1; } if(m.t < 0){ m.t = 0; m.dir = 1; }
      var p = ptAt(m.s, m.t), q = U2P(p[0], p[1] + Math.sin(t / 600 + m.sp * 900) * .3);
      m.el.style.transform = 'translate3d(' + F(q[0]) + 'px,' + F(q[1]) + 'px,0) scaleX(' + m.dir + ')';
    });
    MV.trains.forEach(function(m){
      m.t += m.sp * dt * m.dir * 40 / m.s.len; if(m.t > 1){ m.t = 1; m.dir = -1; } if(m.t < 0){ m.t = 0; m.dir = 1; }
      // TGV (sprite isométrique, nez vers le bas-gauche) : on choisit la face et on corrige l'angle pour suivre la voie
      var p = ptAt(m.s, m.t), q = U2P(p[0], p[1]), ang = p[2] * 180 / Math.PI + (m.dir < 0 ? 180 : 0), rot = ang - 153, sx = 1;
      rot = ((rot + 540) % 360) - 180; if(rot > 90 || rot < -90){ sx = -1; rot = ((ang - 27 + 540) % 360) - 180; }
      rot = Math.max(-28, Math.min(28, rot));
      m.cars[0].style.transform = 'translate3d(' + F(q[0]) + 'px,' + F(q[1]) + 'px,0) rotate(' + F(rot) + 'deg) scaleX(' + sx + ')';
    });
    MV.clouds.forEach(function(c){
      c.x += c.sp * dt; if(c.x > VBX + (WW - WM) / VBK + 20) c.x = VBX + WM / VBK - 50;
      var q = U2P(c.x, c.y); c.el.style.transform = 'translate3d(' + F(q[0]) + 'px,' + F(q[1]) + 'px,0)';
    });
    drawWeather(dt);
  }
  requestAnimationFrame(tick);
}
function measureFps(ms){
  return new Promise(function(res){
    var start = performance.now(), ts = [];
    (function f(t){ ts.push(t); if(t - start < ms) requestAnimationFrame(f); else {
      var d = []; for(var i = 1; i < ts.length; i++) d.push(ts[i] - ts[i - 1]);
      d.sort(function(a, b){ return a - b; });
      res({ fps:Math.round((ts.length - 1) / ((ts[ts.length - 1] - ts[0]) / 1000) * 10) / 10, worst:Math.round(d[d.length - 1] * 10) / 10, p95:Math.round(d[Math.floor(d.length * .95)] * 10) / 10, frames:ts.length });
    } })(start);
  });
}
/* ---------- Météo (canvas) ---------- */
var wx = $('wx'), wctx = wx.getContext('2d'), parts = [], wxKind = 'soleil';
function sizeWx(){ var r = board.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1); wx.width = r.width * dpr; wx.height = r.height * dpr; wctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
function setWeather(w){
  wxKind = w || 'soleil'; board.setAttribute('data-weather', wxKind); parts = []; if($('frTop')) bakeDecor();
  var r = board.getBoundingClientRect(), W = r.width, H = r.height;
  var n = { pluie:90, neige:70, vent:16, canicule:8, soleil:0 }[wxKind] || 0;
  if(reduceMotion) n = Math.round(n / 3);
  for(var i = 0; i < n; i++) parts.push({ x:Math.random() * W, y:Math.random() * H, v:.6 + Math.random() * .8, s:Math.random() });
  wctx.clearRect(0, 0, W, H);
  if(reduceMotion) drawWeather(0);
}
function drawWeather(dt){
  var W = wx.width / Math.min(2, window.devicePixelRatio || 1), H = wx.height / Math.min(2, window.devicePixelRatio || 1);
  wctx.clearRect(0, 0, W, H);
  if(!parts.length) return;
  var dark = document.documentElement.getAttribute('data-theme') === 'dark';
  parts.forEach(function(p){
    if(wxKind === 'pluie'){
      p.y += 520 * p.v * dt; p.x -= 90 * p.v * dt; if(p.y > H){ p.y = -10; p.x = Math.random() * W * 1.2; }
      wctx.strokeStyle = dark ? 'rgba(200,196,230,.35)' : 'rgba(70,80,100,.32)'; wctx.lineWidth = 1.2;
      wctx.beginPath(); wctx.moveTo(p.x, p.y); wctx.lineTo(p.x + 3.4, p.y - 13 * p.v); wctx.stroke();
    } else if(wxKind === 'neige'){
      p.y += 34 * p.v * dt; p.x += Math.sin((p.y + p.s * 100) / 30) * 12 * dt; if(p.y > H){ p.y = -6; p.x = Math.random() * W; }
      wctx.fillStyle = 'rgba(255,255,255,.9)'; wctx.beginPath(); wctx.arc(p.x, p.y, 1.4 + p.s * 1.8, 0, 6.3); wctx.fill();
    } else if(wxKind === 'vent'){
      p.x += 260 * p.v * dt; if(p.x > W + 80){ p.x = -120; p.y = Math.random() * H; }
      wctx.strokeStyle = dark ? 'rgba(220,214,240,.35)' : 'rgba(255,255,255,.75)'; wctx.lineWidth = 1.6; wctx.lineCap = 'round';
      wctx.beginPath(); wctx.moveTo(p.x, p.y); wctx.quadraticCurveTo(p.x + 30, p.y - 6 * p.s, p.x + 64 * p.v, p.y); wctx.stroke();
    } else if(wxKind === 'canicule'){
      p.y -= 16 * p.v * dt; if(p.y < -20){ p.y = H + 10; p.x = Math.random() * W; }
      wctx.strokeStyle = 'rgba(255,220,160,.28)'; wctx.lineWidth = 1.2;
      wctx.beginPath(); for(var k = 0; k <= 50; k += 5){ var yy = p.y + Math.sin((k + p.y) / 6) * 2.2; if(k === 0) wctx.moveTo(p.x + k, yy); else wctx.lineTo(p.x + k, yy); } wctx.stroke();
    }
  });
}

/* ---------- Décor statique mis en cache : rendu une fois en image ---------- */
var BAKE = { cache:{}, key:'', job:null };
var BAKE_PROPS = ['fill', 'stroke', 'opacity', 'stroke-width', 'fill-opacity', 'stroke-opacity', 'stop-color', 'stop-opacity', 'display'];
function decorKey(){
  var r = board.getBoundingClientRect();
  return (typeof carteSig === 'function' ? carteSig() : '') + document.documentElement.getAttribute('data-theme') + ($('app').classList.contains('is-night') ? 'N' : '') + (board.getAttribute('data-weather') === 'neige' ? 'S' : '') + Math.round(r.width) + 'x' + Math.round(r.height) + '@' + F(VBX) + ',' + F(VBY) + ',' + F(VBK);
}
function bakeDecor(){
  var key = decorKey(), img = $('decorImg');
  if(key === BAKE.key) return;
  BAKE.key = key;
  if(BAKE.cache[key]){ img.src = BAKE.cache[key]; if(typeof sprBigRefresh === 'function') sprBigRefresh(); return; } /* les grands reliefs (calque à part) suivent aussi le jour/la nuit */
  try{
    var src = $('map'), r0 = board.getBoundingClientRect(), r = { width:WW || r0.width, height:WH || r0.height }, dpr = window.devicePixelRatio || 1;
    var sc = Math.min(2 * dpr, 4, 8192 / Math.max(r.width, r.height), Math.sqrt(24e6 / (r.width * r.height))); /* au maximum de ce que l'iPhone accepte */
    $('app').classList.add('notrans'); void src.getBoundingClientRect();
    var clone = src.cloneNode(true), a = src.querySelectorAll('*'), b = clone.querySelectorAll('*');
    for(var i = 0; i < a.length; i++){
      var tag = a[i].tagName.toLowerCase();
      if(tag === 'defs' || tag === 'filter' || tag === 'fegaussianblur' || tag === 'clippath' || tag === 'lineargradient' || tag === 'radialgradient') continue;
      var cs = getComputedStyle(a[i]), st = '', props = tag === 'text' ? BAKE_PROPS.concat(['font-size', 'font-weight', 'font-family', 'font-style', 'paint-order', 'stroke-linejoin', 'letter-spacing']) : BAKE_PROPS;
      for(var j = 0; j < props.length; j++){ var v = cs.getPropertyValue(props[j]); if(v) st += props[j] + ':' + v + ';'; }
      b[i].setAttribute('style', st); b[i].removeAttribute('class');
    }
    $('app').classList.remove('notrans');
    if(typeof sprSvg === 'function' && SPR_READY) clone.insertAdjacentHTML('beforeend', sprSvg());
    clone.setAttribute('width', Math.round(r.width * sc)); clone.setAttribute('height', Math.round(r.height * sc));
    clone.setAttribute('xmlns', NS); clone.removeAttribute('id'); clone.removeAttribute('style');
    var url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(clone)], { type:'image/svg+xml' }));
    BAKE.cache[key] = url;
    img.onload = function(){ src.style.visibility = 'hidden'; img.style.visibility = 'visible'; };
    img.onerror = function(){ src.style.visibility = 'visible'; img.style.visibility = 'hidden'; };
    img.src = url;
  }catch(e){ $('map').style.visibility = 'visible'; }
}

/* ---------- Cadrage : le plateau occupe le calque « world » ---------- */
var world = $('world');
var FRAME = { t:0, b:0, W:0, H:0 }, VBW = 104, VBH = 104, WM = 0, WW = 0, WH = 0;
/* v2.6 : zone utile = entre le bandeau du haut et les boutons du bas (le décor, lui, remplit tout l'écran) */
function measureFrame(){
  var r = board.getBoundingClientRect(), hu = $('hud'), dk = $('dock');
  /* offsetTop/offsetHeight : insensibles aux translations du mode « cinéma » */
  var t = clamp(hu.offsetTop + hu.offsetHeight, 0, r.height * .45), b = clamp(r.height - dk.offsetTop, 0, r.height * .35);
  if(r.height - t - b < 160){ var k = (r.height - 160) / Math.max(1, t + b); t *= Math.max(0, k); b *= Math.max(0, k); }
  FRAME = { t:t, b:b, W:r.width, H:r.height };
  document.documentElement.style.setProperty('--uT', Math.round(t) + 'px');
  document.documentElement.style.setProperty('--uB', Math.round(b) + 'px');
  return FRAME;
}
function fitView(){
  var r = board.getBoundingClientRect(); if(!r.width) return;
  var fr = measureFrame(), uh = Math.max(120, r.height - fr.t - fr.b);
  /* la France (≈103 × 104 unités autour de 49.5, 47) tient entière dans la zone utile, centrée */
  var K = Math.min((r.width - 8) / 103, (uh - 8) / 104);
  /* le calque monde déborde de l'écran d'une marge WM de chaque côté : la caméra peut centrer une côte sans jamais montrer de bord */
  WM = Math.round(.3 * Math.max(r.width, r.height)); WW = r.width + 2 * WM; WH = r.height + 2 * WM;
  var w = WW / K, h = WH / K;
  VBK = K; VBW = w; VBH = h;
  VBX = 49.5 - (WM + r.width / 2) / K; VBY = 47 - (WM + fr.t + uh / 2) / K;
  var vb = F(VBX) + ' ' + F(VBY) + ' ' + F(w) + ' ' + F(h);
  ['map', 'wavesA', 'wavesB', 'foamsvg', 'labelsvg'].forEach(function(id){ $(id).setAttribute('viewBox', vb); });
  world.style.width = WW + 'px'; world.style.height = WH + 'px';
  if(typeof RUN === 'undefined' || !RUN || !RUN.busy) camSet(1, -WM, -WM, 0);
}
/* bornes de la caméra : le calque (WW × WH) couvre toujours tout l'écran */
function camBounds(z, free){
  var r = board.getBoundingClientRect(), W = r.width, H = r.height, b = { x0:W - (WW || W) * z, x1:0, y0:H - (WH || H) * z, y1:0 };
  if(free){ /* balade au doigt : la France reste à portée (±30 % de l'écran) */
    b.x0 = Math.max(b.x0, W - z * (WM + W) - .12 * W); b.x1 = Math.min(b.x1, -z * WM + .12 * W);
    b.y0 = Math.max(b.y0, H - z * (WM + H) - .12 * H); b.y1 = Math.min(b.y1, -z * WM + .12 * H);
  }
  return b;
}

