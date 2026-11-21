'use strict';
/* =========================================================
   Construction du plateau (SVG)
   ========================================================= */
var svg = $('map'), board = $('board');
var NS = 'http://www.w3.org/2000/svg';
var franceEl, corseEl;

function buildBoard(){
  var R = rng(2027);
  var fr = smooth(FRANCE, true), co = smooth(CORSE, true);
  var h = [];
  h.push('<defs>' +
    '<filter id="blur1" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation=".7"/></filter>' +
    '<filter id="blur3" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.6"/></filter>' +
    '<radialGradient id="fog" cx="50%" cy="46%" r="62%"><stop offset="55%" stop-color="var(--mist)" stop-opacity="0"/><stop offset="100%" stop-color="var(--mist)" stop-opacity=".85"/></radialGradient>' +
    '<radialGradient id="landlight" cx="40%" cy="30%" r="80%"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".06"/></radialGradient>' +
    '<linearGradient id="beamg" x1="0" x2="1"><stop offset="0" stop-color="#FFE3A0" stop-opacity=".55"/><stop offset="1" stop-color="#FFE3A0" stop-opacity="0"/></linearGradient>' +
    '<clipPath id="clipFr"><path d="' + fr + '"/><path d="' + co + '"/></clipPath>' +
    '</defs>');
  h.push('<rect class="sea-rect" x="-500" y="-500" width="1100" height="1100"/>');
  // voisins dans la brume
  h.push('<g filter="url(#blur1)" opacity=".75">' + NEIGH.map(function(n){ return '<path d="' + smooth(n, true) + '" fill="var(--mist-land)"/>'; }).join('') + '</g>');
  // chenal autour de l'île
  h.push('<path d="' + fr + '" fill="none" stroke="var(--sea)" stroke-width="5.5" stroke-linejoin="round"/>');
  h.push('<rect x="-500" y="-500" width="1100" height="1100" fill="url(#fog)" pointer-events="none"/>');
  // ressac
  $('foamsvg').innerHTML = [fr, co].map(function(d){ return '<path class="foam" d="' + d + '" transform="translate(0,1.6)"/>'; }).join('');
  // falaise (épaisseur du plateau)
  [fr, co].forEach(function(d){
    h.push('<path d="' + d + '" transform="translate(0,2.6)" fill="var(--cliff)"/>');
    h.push('<path d="' + d + '" transform="translate(0,1.3)" fill="var(--cliff-2)"/>');
  });
  h.push('<path id="frTop" class="land-top" d="' + fr + '"/><path id="coTop" class="land-top" d="' + co + '"/>');
  // décor intérieur, découpé sur l'île
  h.push('<g clip-path="url(#clipFr)">');
  h.push('<rect x="-10" y="-10" width="130" height="120" fill="url(#landlight)"/>');
  // champs
  var fields = [[1.5,48.3,9],[2.6,49.7,8],[4.2,48.9,7],[0.4,46.5,6],[-0.5,47.8,5],[1.2,44.0,5],[3.5,47.3,4],[-1.2,46.5,4]];
  fields.forEach(function(f){
    var c = P(f[0], f[1]);
    for(var i = 0; i < f[2]; i++){
      var x = c[0] + (R() - .5) * 9, y = c[1] + (R() - .5) * 6, w = 2 + R() * 2.6, hh = 1.4 + R() * 1.6;
      var fill = ['var(--field-a)','var(--field-b)','var(--field-c)'][Math.floor(R() * 3)];
      h.push('<rect x="' + F(x) + '" y="' + F(y) + '" width="' + F(w) + '" height="' + F(hh) + '" rx=".3" fill="' + fill + '" opacity=".85" transform="rotate(' + F((R() - .5) * 24) + ' ' + F(x) + ' ' + F(y) + ')"/>');
    }
  });
  // rivières
  var rivers = [
    [[4.4,48.3],[3.4,48.5],[2.7,48.6],[2.35,48.85],[1.9,49.0],[1.2,49.3],[0.3,49.45]],
    [[4.0,45.0],[4.0,46.5],[3.1,47.1],[2.9,47.7],[1.9,47.9],[1.0,47.4],[0.0,47.25],[-1.0,47.25],[-2.1,47.25]],
    [[6.0,46.2],[4.85,45.75],[4.8,44.9],[4.7,44.0],[4.6,43.55]],
    [[0.7,42.9],[1.4,43.6],[0.6,44.2],[-0.55,44.85],[-0.9,45.4]]
  ];
  rivers.forEach(function(r){ h.push('<path d="' + smooth(L(r), false) + '" fill="none" stroke="var(--river)" stroke-width=".6" stroke-linecap="round"/>'); });
  h.push('</g>');
  // rails
  var C = { paris:[2.35,48.85], lille:[3.07,50.63], lyon:[4.84,45.76], marseille:[5.37,43.3], bordeaux:[-0.58,44.84], rennes:[-1.68,48.11], brest:[-4.45,48.39],
            strasbourg:[7.75,48.58], toulouse:[1.44,43.6], nantes:[-1.55,47.22], nice:[7.26,43.7], montpellier:[3.88,43.6], tours:[0.69,47.39], dijon:[5.04,47.32] };
  var lines = [['lille','paris','dijon','lyon','marseille','nice'],['brest','rennes','paris','strasbourg'],['nantes','tours','paris'],['paris','tours','bordeaux','toulouse','montpellier','marseille']];
  h.push('<g id="rails">');
  var railPaths = [];
  lines.forEach(function(l, i){
    var d = smooth(L(l.map(function(k){ return C[k]; })), false);
    railPaths.push(d);
    h.push('<path d="' + d + '" fill="none" stroke="var(--rail)" stroke-width="1.05" stroke-dasharray=".14 .5" opacity=".55"/>');
    h.push('<path id="rail' + i + '" d="' + d + '" fill="none" stroke="var(--rail)" stroke-width=".32" opacity=".85"/>');
  });
  h.push('</g>');
  // objets debout, triés par profondeur
  var up = [];
  function mountain(lon, lat, s, cap){ var p = P(lon, lat); up.push({ y:p[1], s:mountainSvg(p[0], p[1], s, cap) }); }
  function hill(lon, lat, s){ var p = P(lon, lat); up.push({ y:p[1], s:hillSvg(p[0], p[1], s) }); }
  function tree(x, y, s){ up.push({ y:y, s:treeSvg(x, y, s) }); }
  function forest(lon, lat, n, spread){ var c = P(lon, lat); for(var i = 0; i < n; i++){ tree(c[0] + (R() - .5) * spread, c[1] + (R() - .5) * spread * .6, .8 + R() * .4); } }
  var glows = [];
  function city(lon, lat, n, tall){
    var c = P(lon, lat);
    for(var i = 0; i < n; i++){
      var a = i * 2.4, r = i === 0 ? 0 : .9 + Math.sqrt(i) * .9;
      var x = c[0] + Math.cos(a) * r * 1.3, y = c[1] + Math.sin(a) * r * .7;
      up.push({ y:y, s:houseSvg(x, y, tall && i < 2 ? 1.6 : 1, R) });
      glows.push('<circle cx="' + F(x) + '" cy="' + F(y - .8) + '" r="1.9"/>');
    }
  }
  [[6.9,45.9,1.15,1],[6.55,45.45,1.3,1],[6.3,45.1,1,1],[6.65,44.8,1.1,1],[6.8,44.4,.95,1],[6.15,44.6,.8,0],[6.1,45.7,.8,1],[7.1,44.15,.75,0],
   [-1.0,43.0,.8,0],[-0.4,42.95,1,1],[0.2,42.85,1.15,1],[0.8,42.82,1.05,1],[1.4,42.72,.95,1],[2.0,42.62,.85,0],[2.5,42.56,.75,0],
   [9.05,42.25,.8,1],[9.15,42.45,.65,0]].forEach(function(m){ mountain(m[0], m[1], m[2], m[3]); });
  [[2.8,45.5,1.1],[3.0,45.0,1.3],[2.5,44.85,.9],[3.6,44.5,1],[2.95,45.9,.9],[3.9,45.25,.8],[7.0,48.25,.9],[6.9,47.9,1],[5.9,46.6,.8],[6.2,46.9,.75],[5.7,46.3,.7],[4.1,47.2,.7],[4.6,49.8,.6]].forEach(function(m){ hill(m[0], m[1], m[2]); });
  forest(-0.85,44.3,14,7); forest(-0.6,44.0,6,5); forest(2.0,47.55,6,5); forest(4.75,49.85,5,4); forest(4.0,47.15,6,4); forest(7.05,48.45,6,3); forest(-3.3,48.15,5,5);
  forest(2.7,48.4,4,3); forest(-0.6,48.8,4,4); forest(5.7,44.2,4,4); forest(1.4,45.1,5,6); forest(9.15,41.85,3,2);
  city(2.35,48.85,8,true); city(4.84,45.76,5); city(5.37,43.3,5); city(3.07,50.63,4); city(1.44,43.6,4); city(-0.58,44.84,4); city(-1.55,47.22,3); city(7.75,48.58,3);
  city(-1.68,48.11,3); city(7.26,43.7,3); city(3.88,43.6,3); city(-4.48,48.39,2); city(3.08,45.78,2); city(5.04,47.32,2); city(1.1,49.44,2); city(8.74,41.92,2); city(9.45,42.7,1); city(1.9,47.9,2); city(1.26,45.83,2); city(6.18,48.69,2); city(0.1,49.5,2); city(-0.37,49.18,2);
  // tour de Paris
  var tp = P(2.29, 48.86); up.push({ y:tp[1] + .3, s:'<path d="M' + F(tp[0]-1) + ',' + F(tp[1]+.3) + 'L' + F(tp[0]) + ',' + F(tp[1]-5.2) + 'L' + F(tp[0]+1) + ',' + F(tp[1]+.3) + 'M' + F(tp[0]-.6) + ',' + F(tp[1]-1.4) + 'H' + F(tp[0]+.6) + '" fill="none" stroke="var(--roof-d)" stroke-width=".38" stroke-linejoin="round"/>' });
  // phares
  var beams = [];
  [[-4.78,48.42],[-1.9,49.72],[1.6,50.75],[-1.55,43.5],[5.25,43.2],[-2.2,47.25]].forEach(function(l){
    var p = P(l[0], l[1]);
    up.push({ y:p[1], s:'<g><rect x="' + F(p[0]-.45) + '" y="' + F(p[1]-3) + '" width=".9" height="3" fill="var(--house)" stroke="var(--roof-d)" stroke-width=".18"/><rect x="' + F(p[0]-.45) + '" y="' + F(p[1]-2) + '" width=".9" height=".6" fill="var(--roof)"/><rect x="' + F(p[0]-.5) + '" y="' + F(p[1]-3.7) + '" width="1" height=".7" fill="var(--win)"/></g>' });
    LH.push([p[0], p[1] - 3.35]); beams.push('<g class="beam" style="transform-origin:' + F(p[0]) + 'px ' + F(p[1]-3.35) + 'px;animation-delay:-' + F(R()*6) + 's"><path d="M' + F(p[0]) + ',' + F(p[1]-3.35) + 'l16,-2.2v4.4z" fill="url(#beamg)"/></g>');
  });
  up.sort(function(a, b){ return a.y - b.y; });
  h.push('<g class="glows" filter="url(#blur3)" fill="#FFC86B" opacity=".55">' + glows.join('') + '</g>');
  h.push('<g id="upright">' + up.map(function(u){ return u.s; }).join('') + '</g>');
  // noms de régions
  h.push(insetSvg());
  $('labelsvg').innerHTML = ('<g id="rlabels">' + REGIONS.filter(function(r){ return !r.national && !r.inset; }).map(function(r){ var p = RP(r.x, r.y); return '<text class="rlabel' + (r.abroad ? ' abroad' : '') + '" x="' + F(p[0]) + '" y="' + F(p[1] + (r.abroad ? -1.8 : 3.6)) + '" text-anchor="middle">' + esc(shortRegion(r.label)) + '</text>'; }).join('') + '</g>');
  svg.innerHTML = h.join('');
  franceEl = $('frTop'); corseEl = $('coTop'); buildMask();
  buildWaves(R);
}
function insetSvg(){
  var r = REGIONS.filter(function(r){ return r.inset; })[0]; if(!r) return '';
  var p = RP(r.x, r.y), x = p[0], y = p[1], o = '<g class="inset">';
  o += '<rect x="' + F(x - 9) + '" y="' + F(y - 7.5) + '" width="18" height="13" rx="2.2" fill="var(--sea-deep)" opacity=".55" stroke="var(--foam)" stroke-width=".35" stroke-dasharray="1 .8"/>';
  [[-5.5,-2.5,1.6],[-1,1.5,1.2],[4,-3,1.9],[5.5,2,1],[-5,2.5,.8]].forEach(function(i){
    o += '<ellipse cx="' + F(x + i[0]) + '" cy="' + F(y + i[1] + .5) + '" rx="' + F(i[2] * 1.3) + '" ry="' + F(i[2] * .8) + '" fill="var(--cliff)"/><ellipse cx="' + F(x + i[0]) + '" cy="' + F(y + i[1]) + '" rx="' + F(i[2] * 1.3) + '" ry="' + F(i[2] * .8) + '" fill="var(--land)"/>';
    o += '<circle cx="' + F(x + i[0] + .2) + '" cy="' + F(y + i[1] - .6) + '" r="' + F(i[2] * .45) + '" fill="var(--forest)"/>';
  });
  o += '<text class="rlabel" x="' + F(x) + '" y="' + F(y + 8.6) + '" text-anchor="middle" style="stroke:var(--sea)">' + esc(r.label || 'Outre-mer') + '</text></g>';
  return o;
}
function shortRegion(l){ l = String(l || ''); return l.length > 22 ? l.split(/[- ]/)[0] : l; }
function mountainSvg(x, y, s, cap){
  var w = 2.6 * s, hgt = 3.8 * s;
  var o = '<path d="M' + F(x-w) + ',' + F(y) + 'L' + F(x) + ',' + F(y-hgt) + 'L' + F(x+.25*w) + ',' + F(y) + 'Z" fill="var(--mount-l)"/>' +
          '<path d="M' + F(x) + ',' + F(y-hgt) + 'L' + F(x+w) + ',' + F(y) + 'L' + F(x+.25*w) + ',' + F(y) + 'Z" fill="var(--mount-r)"/>';
  var cy = y - hgt, k = .36;
  var capd = 'M' + F(x - w*k) + ',' + F(cy + hgt*k) + 'L' + F(x) + ',' + F(cy) + 'L' + F(x + w*k) + ',' + F(cy + hgt*k) + 'L' + F(x + w*.15) + ',' + F(cy + hgt*k*.75) + 'L' + F(x) + ',' + F(cy + hgt*k*1.05) + 'L' + F(x - w*.17) + ',' + F(cy + hgt*k*.8) + 'Z';
  o += '<path class="' + (cap ? '' : 'snowx') + '" d="' + capd + '" fill="var(--snow)"/>';
  return o;
}
function hillSvg(x, y, s){
  var w = 3.4 * s, hg = 2.1 * s;
  return '<path d="M' + F(x-w) + ',' + F(y) + 'Q' + F(x-w*.15) + ',' + F(y-hg*2) + ' ' + F(x+w) + ',' + F(y) + 'Z" fill="var(--hill)"/>' +
         '<path d="M' + F(x+w*.05) + ',' + F(y-hg*.98) + 'Q' + F(x+w*.6) + ',' + F(y-hg*.6) + ' ' + F(x+w) + ',' + F(y) + 'L' + F(x+w*.2) + ',' + F(y) + 'Z" fill="var(--hill-d)"/>' +
         '<path class="snowx" d="M' + F(x-w*.45) + ',' + F(y-hg*.75) + 'Q' + F(x-w*.1) + ',' + F(y-hg*1.15) + ' ' + F(x+w*.3) + ',' + F(y-hg*.82) + 'Q' + F(x-w*.05) + ',' + F(y-hg*.65) + ' ' + F(x-w*.45) + ',' + F(y-hg*.75) + 'Z" fill="var(--snow)"/>';
}
function treeSvg(x, y, s){
  return '<ellipse cx="' + F(x+.3) + '" cy="' + F(y) + '" rx="' + F(.9*s) + '" ry="' + F(.3*s) + '" fill="var(--shadow)" opacity=".12"/>' +
         '<path d="M' + F(x) + ',' + F(y) + 'v' + F(-.7*s) + '" stroke="var(--cliff)" stroke-width=".25"/>' +
         '<circle cx="' + F(x) + '" cy="' + F(y-1.3*s) + '" r="' + F(.85*s) + '" fill="var(--forest)"/>' +
         '<circle cx="' + F(x+.28*s) + '" cy="' + F(y-1.15*s) + '" r="' + F(.5*s) + '" fill="var(--forest-d)"/>';
}
function houseSvg(x, y, s, R){
  var w = .8 * s, bh = 1.15 * s * (s > 1 ? 1.5 : 1), d = .55 * s;
  var o = '<ellipse cx="' + F(x+.5) + '" cy="' + F(y+.05) + '" rx="' + F(w*1.6) + '" ry=".35" fill="var(--shadow)" opacity=".12"/>';
  o += '<path d="M' + F(x+w) + ',' + F(y) + 'l' + F(d) + ',' + F(-d*.6) + 'v' + F(-bh) + 'l' + F(-d) + ',' + F(d*.6) + 'Z" fill="var(--house-side)"/>';
  o += '<rect x="' + F(x-w) + '" y="' + F(y-bh) + '" width="' + F(2*w) + '" height="' + F(bh) + '" fill="var(--house)"/>';
  o += '<path d="M' + F(x-w-.12) + ',' + F(y-bh) + 'L' + F(x) + ',' + F(y-bh-.95*s) + 'L' + F(x+w+.12) + ',' + F(y-bh) + 'Z" fill="var(--roof)"/>';
  o += '<path d="M' + F(x) + ',' + F(y-bh-.95*s) + 'l' + F(d) + ',' + F(-d*.6) + 'L' + F(x+w+d+.1) + ',' + F(y-bh-d*.6) + 'L' + F(x+w+.12) + ',' + F(y-bh) + 'Z" fill="var(--roof-d)"/>';
  o += '<rect x="' + F(x-.28*s) + '" y="' + F(y-bh*.62) + '" width="' + F(.56*s) + '" height="' + F(.42*s) + '" fill="var(--win)"/>';
  return o;
}
