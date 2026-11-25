'use strict';
/* =========================================================
   Caméra pilotée par le jeu : une seule transformation sur un calque
   ========================================================= */
var CAM = { z:1, tx:0, ty:0 }, camTimer = null;
function camSet(z, tx, ty, dur){
  var br = board.getBoundingClientRect(), wz = Math.max(1, z);
  if(br.width){ var cb = camBounds(wz); tx = clamp(tx, cb.x0, cb.x1); ty = clamp(ty, cb.y0, cb.y1); }
  CAM = { z:z, tx:tx, ty:ty };
  world.style.willChange = 'transform';
  world.style.transition = dur ? 'transform ' + dur + 'ms cubic-bezier(.6,.04,.24,1)' : 'none';
  world.style.transform = 'translate3d(' + F(tx) + 'px,' + F(ty) + 'px,0) scale(' + F(z) + ')';
  board.classList.toggle('zoomed', z > 1.05);
  clearTimeout(camTimer);
  return new Promise(function(res){ camTimer = setTimeout(function(){ world.style.willChange = 'auto'; try{ keepLabelsOnScreen(); }catch(e){} res(); }, (dur || 0) + 40); });
}
function camTo(x, y, z, dur){
  var r = board.getBoundingClientRect(), u = RP(x, y), p = U2P(u[0], u[1]);
  z = clamp(num(z, 2.2), 1, 2.6);
  /* scène guidée : le bandeau et le dock s'effacent, on centre entre la légende (haut) et le bouton « Répondre » (bas) */
  var cy = (90 + r.height - Math.max(FRAME.b, 90) - 110) / 2;
  return camSet(z, r.width / 2 - p[0] * z, cy - p[1] * z, reduceMotion ? 0 : (dur || 1500));
}
function camHome(dur){ return camSet(1, -WM, -WM, reduceMotion ? 0 : (dur || 1200)); }
function evCamera(o){
  var c = o.camera || {}, r = REG[c.region || o.region] || REG[nationalRegion()] || { x:50, y:45 };
  return { x:num(c.x, num(r.x, 50)), y:num(c.y, num(r.y, 45)), zoom:num(c.zoom, 2.2) };
}
function wait(ms){ return new Promise(function(res){ setTimeout(res, reduceMotion ? Math.min(ms, 200) : ms); }); }

/* ---------- Caméra libre : seulement hors du déroulé guidé ---------- */
function freeOK(){ return S && !S._preview && !RUN.busy && !layer.classList.contains('on') && !$('dayTitle').classList.contains('on') && !$('result').classList.contains('on') && !document.querySelector('.screen'); }
function freeApply(){
  var z = clamp(CAM.z, 1, 2.6), cb = camBounds(z, true);
  CAM.z = z; CAM.tx = clamp(CAM.tx, cb.x0, cb.x1); CAM.ty = clamp(CAM.ty, cb.y0, cb.y1);
  world.style.transform = 'translate3d(' + F(CAM.tx) + 'px,' + F(CAM.ty) + 'px,0) scale(' + F(z) + ')';
}
var FREE = { ptr:{}, moved:false, sup:false, vx:0, vy:0, lt:0, inert:0 };
(function freeCam(){
  function pts(){ return Object.keys(FREE.ptr).map(function(k){ return FREE.ptr[k]; }); }
  board.addEventListener('pointerdown', function(e){
    if(!freeOK() || e.target.closest('#launch,#zoomBtns,#tray,#reforms,button.tk')) return;
    cancelAnimationFrame(FREE.inert);
    FREE.ptr[e.pointerId] = { x:e.clientX, y:e.clientY };
    var p = pts(); FREE.moved = false; FREE.sup = false;
    world.style.transition = 'none'; world.style.willChange = 'transform';
    FREE.st = { tx:CAM.tx, ty:CAM.ty, z:CAM.z, p:p.map(function(q){ return { x:q.x, y:q.y }; }) };
    FREE.vx = FREE.vy = 0; FREE.lt = performance.now();
  });
  board.addEventListener('pointermove', function(e){
    if(!FREE.ptr[e.pointerId] || !FREE.st) return;
    var prev = FREE.ptr[e.pointerId]; FREE.ptr[e.pointerId] = { x:e.clientX, y:e.clientY };
    var p = pts(), st = FREE.st, r = board.getBoundingClientRect(), now = performance.now();
    if(p.length === 1 && st.p.length === 1){
      var dx = p[0].x - st.p[0].x, dy = p[0].y - st.p[0].y;
      if(!FREE.moved && Math.hypot(dx, dy) < 8) return;
      FREE.moved = true; CAM.tx = st.tx + dx; CAM.ty = st.ty + dy;
      var dt = Math.max(8, now - FREE.lt); FREE.vx = (e.clientX - prev.x) / dt; FREE.vy = (e.clientY - prev.y) / dt; FREE.lt = now;
    } else if(p.length >= 2){
      if(st.p.length < 2){ FREE.st = { tx:CAM.tx, ty:CAM.ty, z:CAM.z, p:p.map(function(q){ return { x:q.x, y:q.y }; }) }; return; }
      FREE.moved = true;
      var d0 = Math.hypot(st.p[0].x - st.p[1].x, st.p[0].y - st.p[1].y) || 1, d1 = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
      var m0x = (st.p[0].x + st.p[1].x) / 2 - r.left, m0y = (st.p[0].y + st.p[1].y) / 2 - r.top, m1x = (p[0].x + p[1].x) / 2 - r.left, m1y = (p[0].y + p[1].y) / 2 - r.top;
      var z = clamp(st.z * d1 / d0, 1, 2.6), wx = (m0x - st.tx) / st.z, wy = (m0y - st.ty) / st.z;
      CAM.z = z; CAM.tx = m1x - wx * z; CAM.ty = m1y - wy * z; FREE.vx = FREE.vy = 0;
    }
    freeApply();
  });
  function up(e){
    if(!FREE.ptr[e.pointerId]) return;
    delete FREE.ptr[e.pointerId];
    if(pts().length) { FREE.st = { tx:CAM.tx, ty:CAM.ty, z:CAM.z, p:pts().map(function(q){ return { x:q.x, y:q.y }; }) }; return; }
    if(FREE.moved){ FREE.sup = true; setTimeout(function(){ FREE.sup = false; }, 60); }
    FREE.st = null;
    var vx = FREE.vx * 16, vy = FREE.vy * 16;
    if(FREE.moved && !reduceMotion && Math.hypot(vx, vy) > 1){
      (function glide(){ vx *= .5; vy *= .5; CAM.tx += vx; CAM.ty += vy; freeApply(); if(Math.hypot(vx, vy) > 1) FREE.inert = requestAnimationFrame(glide); else world.style.willChange = 'auto'; })();
    } else world.style.willChange = 'auto';
  }
  board.addEventListener('pointerup', up); board.addEventListener('pointercancel', up);
  board.addEventListener('wheel', function(e){
    if(!freeOK()) return; e.preventDefault();
    var r = board.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top, z0 = CAM.z, z = clamp(z0 * (e.deltaY > 0 ? .9 : 1.1), 1, 2.6);
    var wx = (mx - CAM.tx) / z0, wy = (my - CAM.ty) / z0; world.style.transition = 'transform .12s ease-out';
    CAM.z = z; CAM.tx = mx - wx * z; CAM.ty = my - wy * z; freeApply();
  }, { passive:false });
  board.addEventListener('click', function(e){ if(FREE.sup){ e.stopPropagation(); e.preventDefault(); FREE.sup = false; } }, true);
  board.addEventListener('click', function(e){
    if(!freeOK() || RUN.pending || e.target.closest('button,a,.pin')) return;
    var r = board.getBoundingClientRect(), wx = (e.clientX - r.left - CAM.tx) / CAM.z, wy = (e.clientY - r.top - CAM.ty) / CAM.z;
    tapInfo(wx, wy);
  });
})();
function stayInfo(key){
  var m = String(key).split(':'), em = EVMAP[m[1]]; if(!em) return null;
  var ev = em.ev, t = '<b>Semaine ' + (em.day + 1) + ' : ' + esc(ev.title) + '</b>';
  var ch = chosen(ev);
  return t + (ch ? '<br>Ton choix : ' + esc(choiceLabel(ch)) : '');
}
function tapInfo(wx, wy){
  return; /* plus de notification au toucher d'une région, d'un pays ou d'un objet (demande d'Ewen) */
  var hit = null;
  Array.prototype.forEach.call($('stayl').children, function(el){ var rc = el._rc; if(rc && el._stay && wx > rc.l - 4 && wx < rc.r + 4 && wy > rc.t - 4 && wy < rc.b + 4) hit = el; });
  if(hit){ var t = stayInfo(hit._stay.key); if(t){ toast(t, 3200); return; } }
  var best = null, bd = 1e9;
  REGIONS.forEach(function(rg){ if(rg.national) return; var u = RP(rg.x, rg.y), q = U2P(u[0], u[1]), d = Math.hypot(q[0] - wx, q[1] - wy); if(d < bd){ bd = d; best = rg; } });
  if(!best || bd > 9 * VBK) return;
  var list = Object.keys(S.decided).map(function(id){ return EVMAP[id]; }).filter(function(m){ return m && m.ev.region === best.id; });
  var html = '<b>' + esc(best.label) + '</b><br>' + (list.length ? list.slice(-3).map(function(m){ var ch = chosen(m.ev); return 'Semaine ' + (m.day + 1) + ' : ' + esc(m.ev.title) + (ch ? ' (' + esc(choiceLabel(ch)) + ')' : ''); }).join('<br>') : 'Aucune décision prise ici pour l\'instant.');
  toast(html, 3400);
}

/* ---------- FX : calque des animations du moment, calque des objets qui restent ---------- */
function playFxList(list, key, live, opts){
  opts = opts || {};
  var t = 0;
  arr(list).forEach(function(fx, j){
    if(!fx || !fx.obj) return;
    var k = key + ':' + j;
    if(opts.reuse && !fx.stay){ var r = reuseFx(fx); if(r){ t = Math.max(t, r.t); return; } }
    if(fx.stay){
      if(S.stays.some(function(s){ return s.key === k; })) return;
      var kk = fxK();
      if(live) S.stays.push({ key:k, fx:fx, day:S.dayIdx, k:kk });
      var rs = spawnFx(fx, $('stayl'), { delayScale:opts.delayScale, k:kk }); rs.els.forEach(function(el){ el._stay = { key:k }; }); t = Math.max(t, rs.t);
    } else t = Math.max(t, spawnFx(fx, $('fxl'), { delayScale:opts.delayScale }).t);
  });
  if(live) save();
  return t;
}
/* nouvelle scène : les objets « stay » anciens sont atténués et la place qu'ils occupent est réservée */
function beginScene(){
  SCENE = { occ:[], labs:[], live:[] };
  Array.prototype.forEach.call($('stayl').children, function(el){ if(el._rc) SCENE.occ.push(el._rc); });
  Array.prototype.forEach.call($('labl').querySelectorAll('[data-stay]'), function(l){ var x = parseFloat(l.style.left), y = parseFloat(l.style.top), w = l.offsetWidth, h = l.offsetHeight; SCENE.labs.push({ l:x - w / 2, r:x + w / 2, t:y - h, b:y }); });
  $('stayl').classList.add('dim'); $('labl').classList.add('dim');
}
function endScene(){ $('stayl').classList.remove('dim'); $('labl').classList.remove('dim'); Array.prototype.forEach.call(document.querySelectorAll('.fx.fresh,.fxlab.fresh'), function(e){ e.classList.remove('fresh'); }); }
function clearFx(){
  Array.prototype.slice.call($('fxl').children).concat(Array.prototype.slice.call($('labl').querySelectorAll('.fxlab:not([data-stay])'))).forEach(function(el){
    el.classList.add('gone'); setTimeout(function(){ el.remove(); }, 500);
  });
  SCENE = { occ:[], labs:[], live:[] };
}
function restoreStays(){
  var l = $('stayl'); l.innerHTML = ''; $('labl').innerHTML = '';
  SCENE = { occ:[], labs:[], live:[] };
  var saveCam = CAM; CAM = { z:1, tx:0, ty:0 };
  arr(S && S.stays).forEach(function(s){ spawnFx(s.fx, l, { still:true, k:s.k || VBK * 1.2 * 1.45, labPx:12 }).els.forEach(function(el){ el._stay = s; }); });
  CAM = saveCam;
  SCENE = { occ:[], labs:[], live:[] };
}

