'use strict';
/* =========================================================
   v2.6 : placement logique terre / mer
   Masque précalculé (canvas) : 0 = mer, 1 = France (île + Corse), 2 = pays voisins, 3 = falaise
   ========================================================= */
var MASK = null, PLACE_ON = true;
var MARINE = { cargo:1, ferry:1, bateau_peche:1, eolienne_mer:1 };
var FREEOBJ = { drapeau_ue:1, batiment_ue:1, frontiere:1, douane:1, euro_flux:1, fleche:1, flow:1, etiquette:1, bulle:1, satellite:1 };
function buildMask(){
  try{
    var res = 4, x0 = -45, y0 = -35, w = 210, h = 180, c = document.createElement('canvas');
    c.width = w * res; c.height = h * res;
    var ctx = c.getContext('2d');
    ctx.setTransform(res, 0, 0, res, -x0 * res, -y0 * res);
    ctx.fillStyle = '#ff0000'; NEIGH.forEach(function(n){ ctx.fill(new Path2D(smooth(n, true))); });
    var fr = new Path2D(smooth(FRANCE, true)), co = new Path2D(smooth(CORSE, true));
    ctx.fillStyle = '#0000ff';
    [2.6, 1.3].forEach(function(dy){ ctx.save(); ctx.translate(0, dy); ctx.fill(fr); ctx.fill(co); ctx.restore(); });
    ctx.fillStyle = '#00ff00'; ctx.fill(fr); ctx.fill(co);
    var d = ctx.getImageData(0, 0, c.width, c.height).data, m = new Uint8Array(c.width * c.height);
    for(var i = 0; i < m.length; i++){ var r = d[i * 4], g = d[i * 4 + 1], bl = d[i * 4 + 2]; m[i] = g > 140 ? 1 : bl > 140 ? 3 : r > 140 ? 2 : (g > 40 || bl > 40 || r > 40) ? 3 : 0; }
    MASK = { res:res, x0:x0, y0:y0, W:c.width, H:c.height, m:m };
  }catch(e){ MASK = null; }
}
/* type de terrain en unités du plateau (viewBox) */
function terrainU(ux, uy){
  if(!MASK) return -1;
  var i = Math.floor((ux - MASK.x0) * MASK.res), j = Math.floor((uy - MASK.y0) * MASK.res);
  if(i < 0 || j < 0 || i >= MASK.W || j >= MASK.H) return 0;
  return MASK.m[j * MASK.W + i];
}
function terrainPx(px, py){ return terrainU(px / VBK + VBX, py / VBK + VBY); }
/* règle d'un fx : 'sea', 'land' ou null (libre) */
function placeRule(fx){
  if(!PLACE_ON || !MASK || !fx) return null;
  var o = fx.obj;
  if(FREEOBJ[o] || fx.anim === 'flow') return null;
  var u = RP(fx.x, fx.y), t = terrainU(u[0], u[1]);
  if(MARINE[o]) return 'sea';
  if(o === 'conteneurs') return t === 0 ? 'sea' : 'land';
  if(t === 2) return null;          /* position explicitement hors de France (Bruxelles, pays voisins) */
  return 'land';
}
/* l'objet posé au point (x,y) (pied de l'objet, px du calque) respecte-t-il la règle ? */
function footOK(rule, x, y, hw, hh){
  if(!rule) return true;
  var pts = [[0, 0], [-hw * .8, 0], [hw * .8, 0], [0, -hh * .3]], need = rule === 'sea' ? 0 : 1;
  if(rule === 'land') pts = [[0, 0], [-hw * .6, 0], [hw * .6, 0], [0, .9 * VBK]];
  for(var i = 0; i < pts.length; i++){ if(terrainPx(x + pts[i][0], y + pts[i][1]) !== need) return false; }
  return true;
}
function validFor(rule, el){
  if(!rule) return null;
  var hw = (el && el._pw ? el._pw / 2 : 2 * VBK), hh = (el && el._ph ? el._ph : 4 * VBK);
  var f = function(x, y){ return footOK(rule, x, y, hw, hh); };
  f.rule = rule; return f;
}
/* point valide le plus proche (anneaux de plus en plus larges) */
function nearestValid(x, y, valid){
  if(!valid || valid(x, y)) return [x, y];
  var st = .5 * VBK;
  for(var r = st; r < 90 * VBK; r += st){
    var n = Math.max(12, Math.round(2 * Math.PI * r / st)), best = null, bd = 1e9;
    for(var a = 0; a < n; a++){
      var an = a / n * Math.PI * 2, cx = x + Math.cos(an) * r, cy = y + Math.sin(an) * r;
      if(valid(cx, cy)){ var dd = Math.abs(an - Math.PI / 2); if(dd < bd){ bd = dd; best = [cx, cy]; } }
    }
    if(best){
      /* en mer : on s'écarte un peu du rivage pour que la coque ne touche pas la falaise */
      if(valid.rule === 'sea'){ var ux = (best[0] - x) / r, uy = (best[1] - y) / r, q = [best[0] + ux * 1.2 * VBK, best[1] + uy * 1.2 * VBK]; if(valid(q[0], q[1])) best = q; }
      return best;
    }
  }
  return [x, y];
}
/* scène trop serrée : on zoome un peu plus pour écarter les points d'ancrage distincts */
function crowdZoom(list, z){
  var pts = [];
  arr(list).forEach(function(fx){ if(!fx || !fx.obj || FREEOBJ[fx.obj]) return; var d = OBJ[fx.obj] || OBJ.etiquette, u = RP(fx.x, fx.y); pts.push({ x:u[0], y:u[1], w:(d.w || 24) * LOCAL * (d.s || 1) * Math.max(1, Math.sqrt(clamp(num(fx.count, 1), 1, 12))) }); });
  if(pts.length < 2) return z;
  function clashes(zz){
    var k = 1.2 * clamp(2.4 / zz, .8, 1.45), c = 0;
    for(var i = 0; i < pts.length; i++) for(var j = i + 1; j < pts.length; j++){
      var dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, dist = Math.hypot(dx, dy * 1.6);
      if(dist > .3 && dist < (pts[i].w + pts[j].w) / 2 * k * .9) c++;
    }
    return c;
  }
  var r = board.getBoundingClientRect(), xs = pts.map(function(p){ return p.x; }), ys = pts.map(function(p){ return p.y; });
  var spanX = Math.max.apply(null, xs) - Math.min.apply(null, xs), spanY = Math.max.apply(null, ys) - Math.min.apply(null, ys);
  var best = z, c0 = clashes(z);
  for(var zz = z + .2; zz <= Math.min(3, z + .8) + 1e-6 && c0 > 0; zz += .2){
    var visW = r.width / VBK / zz, visH = (r.height - FRAME.t - FRAME.b - 250) / VBK / zz;
    if(spanX > visW * .8 || spanY > Math.max(10, visH) * .9) break;
    var c = clashes(zz); if(c < c0){ c0 = c; best = zz; }
  }
  return F(best);
}
function fxDuration(fx, n, ds){
  ds = ds == null ? 1 : ds;
  var d = num(fx.delay) * ds, a = fx.anim || 'appear';
  var t = { appear:.6, fade:1.2, move:2.6, flow:2.2, pulse:1.4, smoke:1.6, spin:1.4, shake:1.6, blink:1.4, rise:1.7, grow:1.2, close:1.5 }[a] || .6;
  if(a === 'move') t += (n - 1) * .3; if(a === 'rise' || a === 'grow' || a === 'appear') t += (n - 1) * .14;
  return d + t;
}
/* taille : les objets restent lisibles quel que soit le zoom de la caméra */
function fxK(){ return VBK * 1.2 * clamp(2.4 / (CAM.z || 1), .8, 1.45); }
function labPx(){ return F(13.5 / (CAM.z || 1)); }
/* zone visible et libre de l'écran, en coordonnées du calque monde */
function safeRect(){
  var r = board.getBoundingClientRect(), top = 8 + (document.body.classList.contains('cinema') ? 0 : FRAME.t), bottom = r.height - 8;
  ['caption', 'quests', 'ribbon'].forEach(function(id){
    var el = $(id); if(!el || (id === 'caption' && !el.classList.contains('on'))) return;
    var b = el.getBoundingClientRect(); if(b.height) top = Math.max(top, b.bottom - r.top + 6);
  });
  bottom = Math.max(top + 140, r.height - FRAME.b - 250);
  var z = CAM.z || 1;
  return { l:(8 - CAM.tx) / z, r:(r.width - 8 - CAM.tx) / z, t:(top - CAM.ty) / z, b:(bottom - CAM.ty) / z };
}
function ovl(a, b){ var w = Math.min(a.r, b.r) - Math.max(a.l, b.l), h = Math.min(a.b, b.b) - Math.max(a.t, b.t); return w > 0 && h > 0 ? w * h : 0; }
function shrink(rc, f){ var dw = (rc.r - rc.l) * f / 2, dh = (rc.b - rc.t) * f / 2; return { l:rc.l + dw, r:rc.r - dw, t:rc.t + dh, b:rc.b - dh }; }
function outside(rc, sf){ if(!sf) return 0; var o = 0; o += Math.max(0, sf.l - rc.l) + Math.max(0, rc.r - sf.r) + Math.max(0, sf.t - rc.t) + Math.max(0, rc.b - sf.b); return o; }
/* cherche une place libre autour du point voulu (anneaux, priorité à l'horizontale) */
function findSpot(x, y, w, h, up, occ, sf, ignore, rel, valid, again){
  rel = rel || { l:-w / 2, r:w / 2, t:-up, b:-up + h };
  var W = rel.r - rel.l, Hh = rel.b - rel.t, best = null, step = Math.max(Math.min(W, 60), Hh * .8, 8);
  var obs = occ.concat(SCENE.labs.map(function(l){ return { l:l.l, r:l.r, t:l.t, b:l.b, lab:1 }; }));
  var rings = [0, .45, .8, 1.2, 1.7, 2.3, 3, 3.8, 4.8];
  for(var ri = 0; ri < rings.length; ri++){
    var rr = rings[ri] * step, na = ri === 0 ? 1 : 14;
    for(var ai = 0; ai < na; ai++){
      var ang = ai / na * Math.PI * 2 + (ri % 2 ? Math.PI / na : 0);
      var cx = x + Math.cos(ang) * rr, cy = y + Math.sin(ang) * rr * .62;
      if(valid && !valid(cx, cy)) continue;
      var rc = { l:cx + rel.l, r:cx + rel.r, t:cy + rel.t, b:cy + rel.b }, test = shrink(rc, .12), sc = 0;
      for(var i = 0; i < obs.length; i++){ var o = obs[i]; if(ignore && ignore.indexOf(o) >= 0) continue; sc += ovl(test, o) * (o.lab ? 6 : 4); }
      sc += outside(rc, sf) * 400;
      if(sc === 0) return { x:cx, y:cy, rc:rc, dx:cx - x, dy:cy - y };
      sc += rr * .25;
      if(!best || sc < best.s) best = { x:cx, y:cy, rc:rc, s:sc, dx:cx - x, dy:cy - y };
    }
  }
  if(!best && valid){
    /* aucun emplacement valide autour : on repart du point valide le plus proche */
    var q = nearestValid(x, y, valid);
    if(!again && (q[0] !== x || q[1] !== y)){ var r2 = findSpot(q[0], q[1], w, h, up, occ, sf, ignore, rel, valid, true); if(r2){ r2.dx = r2.x - x; r2.dy = r2.y - y; return r2; } }
    return { x:q[0], y:q[1], rc:{ l:q[0] + rel.l, r:q[0] + rel.r, t:q[1] + rel.t, b:q[1] + rel.b }, s:1e9, dx:q[0] - x, dy:q[1] - y };
  }
  return best;
}
function objEl(name, k, label, flip){
  var def = OBJ[name] || OBJ.etiquette;
  if(!OBJ[name]) label = label || String(name).replace(/_/g, ' ');
  var w = def.w || 24, h = def.h || 24, sc = LOCAL * k * (def.s || 1);
  var pw = w * sc, ph = h * sc;
  var spr0 = OBJ_SPR[name];
  if(spr0 && SPR_AR[spr0] && typeof VBK === 'number'){ var sw_ = Math.min(SPR_W[spr0] || 2.4, 3); pw = sw_ * VBK * (sw_ >= 2.6 ? 1.25 : 2); /* plafond : aucun objet animé géant */ ph = pw * SPR_AR[spr0]; sc = pw / w; } /* même échelle que le décor (x2 pour la lisibilité) */
  var el = document.createElement('div'); el.className = 'fx o-' + name;
  var b = document.createElement('div'); b.className = 'fxb';
  b.style.cssText = 'width:' + F(pw) + 'px;height:' + F(ph) + 'px;left:' + F(-pw / 2) + 'px;top:' + F(-ph + 2 * sc) + 'px';
  var sp = OBJ_SPR[name];
  if(sp && SPR_AR[sp]){ b.classList.add('fxspr'); b.innerHTML = '<img src="' + SPR_DIR + sp + '.webp" alt="" decoding="async"' + (flip ? ' class="flip"' : '') + '>'; }
  else b.innerHTML = def.d ? '<svg viewBox="' + (-w / 2) + ' ' + (-h + 2) + ' ' + w + ' ' + h + '"' + (flip ? ' class="flip"' : '') + '>' + def.d + '</svg>' : '';
  el.appendChild(b);
  el._def = def; el._sc = sc; el._w = w; el._h = h; el._pw = pw; el._ph = ph;
  var lt = def.lab || (label ? 'etiquette' : null);
  if(lt && label){
    var lab = document.createElement('div'); lab.className = 'fxlab l-' + lt; lab.textContent = label; lab._owner = el; el.dataset.o = lab.dataset.o = String(++FXID);
    el._lab = lab; el._labType = lt;
  }
  return el;
}
function objRect(el, x, y){ var sc = el._sc; if(!el._def.d) return null; return { l:x - el._pw / 2, r:x + el._pw / 2, t:y - el._ph + 2 * sc, b:y + 2 * sc }; }
function placeLabel(el, x, y, labLayer, sf, ownRc, fontPx, inPlanche){
  var lab = el._lab; if(!lab) return null;
  lab.style.fontSize = fontPx + 'px';
  var ay = el._labType === 'panneau' ? y - 8.6 * el._sc : (el._def.lab ? y : y - el._ph + 2 * el._sc - 2);
  lab.style.left = F(x) + 'px'; lab.style.top = F(ay) + 'px';
  if(lab._rc){ var ix = SCENE.labs.indexOf(lab._rc); if(ix >= 0) SCENE.labs.splice(ix, 1); }
  if(!lab.isConnected) labLayer.appendChild(lab);
  if(inPlanche) return null;
  var lw = lab.offsetWidth + 4, lh = lab.offsetHeight + 4;
  var cands = [[0, 0], [-.55, 0], [.55, 0], [0, -1], [-.9, -.5], [.9, -.5], [-1.1, 0], [1.1, 0], [0, -2], [-.6, -1.6], [.6, -1.6], [0, 1.4], [-1.7, 0], [1.7, 0], [-1.2, -2.4], [1.2, -2.4], [0, -3.2], [-1.8, -1.6], [1.8, -1.6], [0, 2.6], [-1.2, 2], [1.2, 2]];
  var best = null;
  for(var i = 0; i < cands.length; i++){
    var cx = x + cands[i][0] * lw, cy = ay + cands[i][1] * lh;
    if(cands[i][1] > 1) cy = (ownRc ? ownRc.b : y) + lh * (cands[i][1] - .4) + 4;
    if(sf){ cx = clamp(cx, sf.l + lw / 2, Math.max(sf.l + lw / 2, sf.r - lw / 2)); cy = clamp(cy, sf.t + lh, Math.max(sf.t + lh, sf.b)); }
    var rc = { l:cx - lw / 2, r:cx + lw / 2, t:cy - lh, b:cy }, s = 0;
    SCENE.labs.forEach(function(o){ s += ovl(rc, o) * 6; });
    SCENE.occ.forEach(function(o){ if(o !== ownRc) s += ovl(rc, shrink(o, .1)) * 3; });
    if(s === 0){ best = { x:cx, y:cy, rc:rc }; break; }
    s += i * 2;
    if(!best || s < best.s) best = { x:cx, y:cy, rc:rc, s:s };
  }
  lab.style.left = F(best.x) + 'px'; lab.style.top = F(best.y) + 'px';
  SCENE.labs.push(best.rc); lab._rc = best.rc;
  return best;
}
/* véhicules dont le dessin regarde vers la gauche (les autres regardent à droite) */
var VEH_LEFT = { char:1, tracteur:1, camion:1, voiture:1, bus:1, tgv:1, ferry:1, voiture_police:1 };
function spawnFx(fx, layer, opts){
  opts = opts || {};
  var k = opts.k || fxK(), n = clamp(Math.round(num(fx.count, 1)), 1, 12), def = OBJ[fx.obj] || OBJ.etiquette;
  var ds = opts.delayScale == null ? 1 : opts.delayScale;
  var a = opts.still ? (fx.anim === 'close' ? 'closed' : 'still') : (fx.anim || 'appear');
  var planche = !!opts.px;
  var u0 = planche ? null : RP(fx.x, fx.y), p0 = opts.px || U2P(u0[0], u0[1]);
  var to = opts.toPx || (fx.to ? U2P(RP(fx.to.x, fx.to.y)[0], RP(fx.to.x, fx.to.y)[1]) : null);
  var rule = planche ? null : placeRule(fx), probe = rule ? objEl(fx.obj, k, null, false) : null, valid = validFor(rule, probe);
  if(valid){ p0 = nearestValid(p0[0], p0[1], valid); if(to && fx.anim === 'move') to = nearestValid(to[0], to[1], valid); }
  if(opts.still && a !== 'closed' && to && fx.anim === 'move'){ p0 = to; to = null; }
  var moving = a === 'move' && to;
  var dx = to ? to[0] - p0[0] : 0, dy = to ? to[1] - p0[1] : 0, dist = Math.hypot(dx, dy) || 1;
  var spread = (def.spread || (def.w > 24 ? 1.8 : 1)) * k;
  var labLayer = opts.labLayer || (planche ? layer : $('labl'));
  var sf = planche ? null : safeRect();
  var els = [], delay = num(fx.delay) * ds, groupOff = null;
  for(var i = 0; i < n; i++){
    var el = objEl(fx.obj, k, i === 0 ? fx.label : null, moving && def.veh && (VEH_LEFT[fx.obj] ? dx > 0 : dx < 0)); /* le véhicule regarde toujours vers où il roule */
    var x, y, rc = null;
    if(moving){
      /* convoi compact : rangées de 3 au plus (une longue file finissait poussée le long des côtes) */
      var per = n > 3 ? 3 : n, row = Math.floor(i / per), col = i % per - (Math.min(per, n - row * per) - 1) / 2;
      var gap = (def.w || 20) * LOCAL * k * 1.08, back = gap * row, side = gap * .8 * col;
      x = to[0] - dx / dist * back - dy / dist * side; y = to[1] - dy / dist * back + dx / dist * side * .62;
      if(!planche){
        if(i === 0){
          var ux = -dx / dist, uy = -dy / dist, L = (def.w || 20) * LOCAL * k * 1.08 * (Math.ceil(n / (n > 3 ? 3 : n)) - 1) + 1;
          var ex = n > 1 ? gap * .8 * (Math.min(per, n) - 1) / 2 : 0, rel = { l:Math.min(0, ux * L) - el._pw / 2 - ex, r:Math.max(0, ux * L) + el._pw / 2 + ex, t:Math.min(0, uy * L) - el._ph + 2 * el._sc, b:Math.max(0, uy * L) + 2 * el._sc };
          var cv = valid ? (function(L2, ux2, uy2){ var f = function(cx, cy){ return valid(cx, cy) && valid(cx + ux2 * L2, cy + uy2 * L2) && valid(cx + ux2 * L2 / 2, cy + uy2 * L2 / 2); }; f.rule = valid.rule; return f; })(L, ux, uy) : null;
          var sp = findSpot(x, y, 0, 0, 0, SCENE.occ, sf, null, rel, cv); groupOff = [sp.dx, sp.dy];
        }
        x += groupOff[0]; y += groupOff[1];
      }
    } else {
      var c = CLUSTER[i % CLUSTER.length]; x = p0[0] + c[0] * spread; y = p0[1] + c[1] * spread * .8;
      if(!planche && def.d){
        var rel2 = { l:-el._pw / 2, r:el._pw / 2, t:-el._ph + 2 * el._sc, b:2 * el._sc };
        if(el._lab){ var fp = labPx(), lw2 = el._lab.textContent.length * fp * .56 + 18; rel2.t -= fp * 1.5 + 10; rel2.l = Math.min(rel2.l, -lw2 / 2); rel2.r = Math.max(rel2.r, lw2 / 2); }
        var sp2 = findSpot(x, y, 0, 0, 0, SCENE.occ, sf, null, rel2, valid); x = sp2.x; y = sp2.y;
      } else if(valid && !valid(x, y)){ var q2 = nearestValid(x, y, valid); x = q2[0]; y = q2[1]; }
    }
    rc = objRect(el, x, y);
    if(rc && !planche) SCENE.occ.push(rc);
    el._rc = rc; el._pos = [x, y]; el._valid = valid; el._rule = rule;
    el.style.left = F(x) + 'px'; el.style.top = F(y) + 'px'; el.style.zIndex = 1000 + Math.round(y);
    /* garde-fou : un sprite terrestre jamais en mer ni chez un voisin ; un sprite marin jamais sur terre */
    if(!planche && OBJ_SPR[fx.obj] && SPR_AR[OBJ_SPR[fx.obj]]){ var tt = terrainPx(x, y), mar = !!SPR_MARINE[OBJ_SPR[fx.obj]]; if(mar ? tt !== 0 : tt !== 1) el.style.display = 'none'; }
    if(fx.stay){ el.setAttribute('data-stay', '1'); if(!opts.still) el.classList.add('fresh'); }
    layer.appendChild(el);
    var b = el.firstChild, dl = delay + (moving ? i * .3 : (a === 'rise' || a === 'grow' || a === 'appear') ? i * .14 : 0);
    b.style.animationDelay = F(dl) + 's';
    var lp = placeLabel(el, x, y, labLayer, sf, rc, opts.labPx || (planche ? 11 : labPx()), planche);
    if(el._lab){ el._lab.style.animationDelay = F(dl + .15) + 's'; if(fx.stay) el._lab.setAttribute('data-stay', '1'); if(fx.stay && !opts.still) el._lab.classList.add('fresh'); }
    if(a === 'still'){ }
    else if(a === 'closed'){ b.classList.add('a-closed'); }
    else if(moving){
      b.classList.add('a-appear'); if(def.veh) b.classList.add('rolling');
      var kf = [{ transform:'translate3d(' + F(-dx) + 'px,' + F(-dy) + 'px,0)' }, { transform:'translate3d(0,0,0)' }], op = { duration:2300, delay:dl * 1000 + 150, easing:'cubic-bezier(.45,.05,.35,1)', fill:'both' };
      el.animate(kf, op); if(el._lab) el._lab.animate([{ transform:'translate(-50%,-100%) translate3d(' + F(-dx) + 'px,' + F(-dy) + 'px,0)' }, { transform:'translate(-50%,-100%)' }], op);
    } else if(a === 'flow' && to && i === 0){ b.classList.add('a-appear'); flowParticles(el, fx, dx, dy, k, dl); }
    else if(a === 'smoke'){ b.classList.add('a-appear'); addSmoke(el, 4); }
    else if(a === 'pulse'){ b.classList.add('a-pulse'); addRing(el); }
    else b.classList.add('a-' + (a === 'flow' ? 'appear' : a));
    if(a === 'spin' && !b.querySelector('.rot')) b.classList.add('norot');
    if(def.smk && !def.steam && a !== 'smoke' && a !== 'close' && a !== 'closed' && /usine$|centrale_gaz|incendie/.test(fx.obj)) addSmoke(el, 3);
    if(def.steam && a !== 'smoke') addSmoke(el, 3);
    if(!planche) SCENE.live.push({ obj:fx.obj, ux:num(fx.x), uy:num(fx.y), el:el, layer:layer });
    els.push(el);
  }
  return { els:els, t:fxDuration(fx, n, ds) };
}
/* passe de rangement : écarte ce qui se chevauche encore une fois les animations posées */
function settleScene(){
  if(!$('board').classList.contains('zoomed')) return;
  keepLabelsOnScreen();
  var sf = safeRect();
  var objs = SCENE.live.map(function(o){ return o.el; }).filter(function(el){ return el.isConnected && el._rc && !el.classList.contains('gone') && !el.getAnimations().some(function(a){ return a.playState === 'running'; }); });
  objs.forEach(function(el, i){
    var me = shrink(el._rc, .14), hit = false;
    for(var j = 0; j < i; j++){ if(ovl(me, shrink(objs[j]._rc, .14)) > 9) { hit = true; break; } }
    if(!hit) return;
    var others = SCENE.occ.filter(function(o){ return o !== el._rc; });
    var rel = { l:el._rc.l - el._pos[0], r:el._rc.r - el._pos[0], t:el._rc.t - el._pos[1], b:el._rc.b - el._pos[1] };
    var sp = findSpot(el._pos[0], el._pos[1], 0, 0, 0, others, sf, el._lab && el._lab._rc ? [el._lab._rc] : null, rel, el._valid || null);
    if(sp && el._valid && !el._valid(sp.x, sp.y)) return;
    if(!sp || (Math.abs(sp.dx) < 1 && Math.abs(sp.dy) < 1)) return;
    el._rc.l += sp.dx; el._rc.r += sp.dx; el._rc.t += sp.dy; el._rc.b += sp.dy;
    el._pos = [sp.x, sp.y]; el.style.left = F(sp.x) + 'px'; el.style.top = F(sp.y) + 'px'; el.style.zIndex = 1000 + Math.round(sp.y);
    if(el._lab) el._lab._dirty = true;
  });
  Array.prototype.forEach.call($('labl').querySelectorAll('.fxlab:not(.gone)'), function(l){
    if(l.hasAttribute('data-stay') && !l.classList.contains('fresh')) return;
    var el = l._owner; if(!el || !l._rc) return;
    if(l.getAnimations().some(function(a){ return a.playState === 'running' && a.effect && a.effect.getKeyframes().length === 2; })) return;
    var lx = parseFloat(l.style.left), ly = parseFloat(l.style.top), lw = l.offsetWidth + 4, lh = l.offsetHeight + 4, ix = SCENE.labs.indexOf(l._rc);
    l._rc = { l:lx - lw / 2, r:lx + lw / 2, t:ly - lh, b:ly }; if(ix >= 0) SCENE.labs[ix] = l._rc;
    var bad = l._dirty;
    if(!bad) SCENE.occ.forEach(function(o){ if(o !== el._rc && ovl(l._rc, shrink(o, .1)) > 9) bad = true; });
    if(!bad) SCENE.labs.forEach(function(o){ if(o !== l._rc && ovl(l._rc, o) > 9) bad = true; });
    if(!bad) bad = outside(l._rc, sf) > 2;
    if(bad){ l._dirty = false; placeLabel(el, el._pos[0], el._pos[1], $('labl'), sf, el._rc, parseFloat(l.style.fontSize)); }
  });
  keepLabelsOnScreen();
}
/* garde-fou final : chaque étiquette reste dans la zone visible, mesurée à l'écran */
function keepLabelsOnScreen(){
  var bd = board.getBoundingClientRect(), z = CAM.z || 1, top = bd.top + 6 + (document.body.classList.contains('cinema') ? 0 : FRAME.t);
  var cap = $('caption'); if(cap.classList.contains('on')){ var cr = cap.getBoundingClientRect(); if(cr.height) top = Math.max(top, cr.bottom + 4); }
  Array.prototype.forEach.call($('labl').querySelectorAll('.fxlab:not(.gone)'), function(l){
    if(l.hasAttribute('data-stay') && !l.classList.contains('fresh') && $('labl').classList.contains('dim')) return;
    if(l.getAnimations().some(function(a){ return a.playState === 'running' && a.effect && a.effect.getKeyframes().length === 2; })) return;
    var r0 = l.getBoundingClientRect(), cx = bd.left + CAM.tx + parseFloat(l.style.left) * z, by = bd.top + CAM.ty + parseFloat(l.style.top) * z, lw = l.offsetWidth * z, lh = l.offsetHeight * z;
    var r = { left:cx - lw / 2, right:cx + lw / 2, top:by - lh, bottom:by }, dx = 0, dy = 0;
    if(r.left < bd.left + 6) dx = bd.left + 6 - r.left; else if(r.right > bd.right - 6) dx = bd.right - 6 - r.right;
    if(r.top < top) dy = top - r.top;
    if(dx || dy){ l.style.left = F(parseFloat(l.style.left) + dx / z) + 'px'; l.style.top = F(parseFloat(l.style.top) + dy / z) + 'px'; if(l._rc){ l._rc.l += dx / z; l._rc.r += dx / z; l._rc.t += dy / z; l._rc.b += dy / z; } }
  });
}
function addRing(el){ var ring = document.createElement('i'); ring.className = 'ring'; ring.style.width = ring.style.height = F(el._def.w * el._sc * .9) + 'px'; el.insertBefore(ring, el.firstChild); }
/* une conséquence qui vise un objet déjà présent l'anime au lieu d'en dessiner un second */
function reuseFx(fx){
  var a = fx.anim || 'appear', n = clamp(Math.round(num(fx.count, 1)), 1, 12);
  var hits = SCENE.live.filter(function(o){ return o.obj === fx.obj && o.el.isConnected && Math.hypot(o.ux - num(fx.x), o.uy - num(fx.y)) < 4; });
  if(!hits.length || a === 'flow' || a === 'rise' || a === 'grow') return null;
  hits = hits.slice(0, n);
  var mvOff = [0, 0];
  if(a === 'move' && fx.to){
    var t0 = U2P(RP(fx.to.x, fx.to.y)[0], RP(fx.to.x, fx.to.y)[1]), e0 = hits[0].el, L0 = (e0._def.w || 20) * e0._sc * 1.08 * (hits.length - 1);
    var vx = t0[0] - e0._pos[0], vy = t0[1] - e0._pos[1], vd = Math.hypot(vx, vy) || 1; vx = -vx / vd; vy = -vy / vd;
    var rel0 = { l:Math.min(0, vx * L0) - e0._pw / 2, r:Math.max(0, vx * L0) + e0._pw / 2, t:Math.min(0, vy * L0) - e0._ph + 2 * e0._sc, b:Math.max(0, vy * L0) + 2 * e0._sc };
    var ign = hits.map(function(o){ return o.el._rc; }).concat(hits.map(function(o){ return o.el._lab && o.el._lab._rc; }));
    var sp0 = findSpot(t0[0], t0[1], 0, 0, 0, SCENE.occ, safeRect(), ign, rel0); mvOff = [sp0.dx, sp0.dy];
  }
  hits.forEach(function(o, i){
    var el = o.el, b = el.firstChild, dl = num(fx.delay) * .7 + i * .2;
    b.className = 'fxb'; void b.offsetWidth; b.style.animationDelay = F(dl) + 's';
    if(a === 'move' && fx.to){
      var t = U2P(RP(fx.to.x, fx.to.y)[0], RP(fx.to.x, fx.to.y)[1]), back = (el._def.w || 20) * LOCAL * (el._sc / LOCAL) * 1.08 * i;
      var ddx = t[0] - el._pos[0], ddy = t[1] - el._pos[1], dd = Math.hypot(ddx, ddy) || 1;
      var nx = t[0] - ddx / dd * back + mvOff[0], ny = t[1] - ddy / dd * back + mvOff[1], ox = nx - el._pos[0], oy = ny - el._pos[1];
      el.getAnimations().forEach(function(x){ x.cancel(); });
      var svgEl = b.querySelector('svg'); if(svgEl && el._def.veh) svgEl.classList.toggle('flip', ox < 0);
      el.style.left = F(nx) + 'px'; el.style.top = F(ny) + 'px'; el.style.zIndex = 1000 + Math.round(ny);
      if(el._rc){ el._rc.l += ox; el._rc.r += ox; el._rc.t += oy; el._rc.b += oy; }
      el._pos = [nx, ny];
      var kf = [{ transform:'translate3d(' + F(-ox) + 'px,' + F(-oy) + 'px,0)' }, { transform:'translate3d(0,0,0)' }], op = { duration:2300, delay:dl * 1000, easing:'cubic-bezier(.45,.05,.35,1)', fill:'both' };
      el.animate(kf, op); if(el._def.veh) b.classList.add('rolling');
      if(el._lab){ var olx = parseFloat(el._lab.style.left), oly = parseFloat(el._lab.style.top); placeLabel(el, nx, ny, $('labl'), safeRect(), el._rc, parseFloat(el._lab.style.fontSize)); var lx = parseFloat(el._lab.style.left) - olx, ly = parseFloat(el._lab.style.top) - oly; el._lab.animate([{ transform:'translate(-50%,-100%) translate3d(' + F(-lx) + 'px,' + F(-ly) + 'px,0)' }, { transform:'translate(-50%,-100%)' }], op); }
    }
    else if(a === 'smoke') addSmoke(el, 4);
    else if(a === 'pulse'){ b.classList.add('a-pulse'); if(!el.querySelector('.ring')) addRing(el); }
    else if(a === 'appear') b.classList.add('a-pulse');
    else b.classList.add('a-' + a);
    if(fx.label && el._lab && el._lab.textContent !== fx.label){ el._lab.textContent = fx.label; placeLabel(el, el._pos[0], el._pos[1], $('labl'), safeRect(), el._rc, parseFloat(el._lab.style.fontSize)); }
  });
  return { t:fxDuration(fx, hits.length, .7) };
}
function addSmoke(el, n){
  var def = el._def, sc = el._sc, pts = def.smk || [[0, -(def.h || 24) + 4]];
  pts.forEach(function(p){
    for(var i = 0; i < (n || 4); i++){
      var s = document.createElement('i'); s.className = 'puff' + (def.steam ? ' steam' : '') + (def.dark ? ' dark' : '');
      var size = 3.2 * sc * 4;
      s.style.cssText = 'left:' + F((p[0] + el._w / 2) * sc - size / 2) + 'px;top:' + F((p[1] + el._h - 2) * sc - size / 2) + 'px;width:' + F(size) + 'px;height:' + F(size) + 'px;animation-delay:' + F(i * 2.6 / (n || 4)) + 's';
      el.firstChild.appendChild(s);
    }
  });
}

function flowParticles(el, fx, dx, dy, k, dl){
  var n = 5, len = Math.hypot(dx, dy);
  var track = document.createElement('i'); track.className = 'track';
  track.style.width = F(len) + 'px'; track.style.transform = 'rotate(' + F(Math.atan2(dy, dx) * 180 / Math.PI) + 'deg)';
  el.insertBefore(track, el.firstChild);
  for(var i = 0; i < n; i++){
    var p = objEl(fx.obj, k * .45, null, dx < 0 && (OBJ[fx.obj] || {}).veh); p.className += ' part'; p.style.left = '0px'; p.style.top = '0px';
    el.appendChild(p);
    p.animate([{ transform:'translate3d(0,0,0)', opacity:0 }, { opacity:1, offset:.15 }, { opacity:1, offset:.85 }, { transform:'translate3d(' + F(dx) + 'px,' + F(dy) + 'px,0)', opacity:0 }],
      { duration:3000, delay:(dl + .4) * 1000 + i * 600, iterations:Infinity, easing:'linear', fill:'backwards' });
  }
}

/* ---------- Vagues : deux calques qui se relaient en fondu (aucune peinture par image) ---------- */
function buildWaves(R){
  var a = [], b = [], n = 0, tries = 0;
  while(n < 150 && tries < 2000){
    tries++;
    var x = -120 + R() * 340, y = -150 + R() * 380;
    if(insideLand(x, y)) continue;
    var w = 1.6 + R() * 1.6;
    (n % 2 ? a : b).push('<path d="M' + F(x) + ',' + F(y) + 'q' + F(w / 2) + ',-.8 ' + F(w) + ',0"/>');
    n++;
  }
  $('wavesA').innerHTML = a.join(''); $('wavesB').innerHTML = b.join('');
}

function insideLand(x, y){
  try{
    var pt = svg.createSVGPoint(); pt.x = x; pt.y = y;
    if(franceEl && franceEl.isPointInFill(pt)) return true;
    if(corseEl && corseEl.isPointInFill(pt)) return true;
    var all = svg.querySelectorAll('[filter="url(#blur1)"] path');
    for(var i = 0; i < all.length; i++){ if(all[i].isPointInFill(pt)) return true; }
  }catch(e){}
  return false;
}
