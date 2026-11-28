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
  /* texture : grain très léger, calculé une fois (image), pas de filtre coûteux pendant les déplacements de caméra */
  var grain = '';
  try{ var cv = document.createElement('canvas'); cv.width = cv.height = 96; var cx = cv.getContext('2d'), im = cx.createImageData(96, 96), g = rng(7);
    for(var gi = 0; gi < im.data.length; gi += 4){ var v = g() < .5 ? 0 : 255; im.data[gi] = im.data[gi + 1] = im.data[gi + 2] = v; im.data[gi + 3] = Math.floor(g() * 34); }
    cx.putImageData(im, 0, 0); grain = cv.toDataURL('image/png'); }catch(e){}
  if(grain) h.push('<defs><pattern id="grain" patternUnits="userSpaceOnUse" width="6" height="6"><image href="' + grain + '" width="6" height="6"/></pattern></defs><rect class="grain-sea" x="-500" y="-500" width="1100" height="1100" fill="url(#grain)" pointer-events="none"/>');
  // chenal autour de l'île (sous les voisins : pas de bande d'eau le long des frontières terrestres)
  h.push('<path d="' + fr + '" fill="none" stroke="var(--sea)" stroke-width="5.5" stroke-linejoin="round"/>');
  // voisins
  h.push('<g opacity=".8" transform="translate(0,1.2)">' + NEIGH.map(function(n){ return '<path d="' + smooth(n, true) + '" fill="#C9E6DE"/>'; }).join('') + '</g><g opacity=".9">' + NEIGH.map(function(n){ return '<path d="' + smooth(n, true) + '" fill="var(--mist-land)"/>'; }).join('') + '</g>');
  if(typeof MT_V2 !== 'undefined' && MT_V2) h.push('<path d="' + smooth(L([[-1.75,43.32],[0.0,43.0],[1.5,42.75],[2.75,42.5],[2.7,42.15],[1.5,42.2],[-1.75,42.8]]), true) + '" fill="var(--mist-land)" opacity=".9"/>'); /* V2 : bouche le jour entre la France et l'Espagne */
  h.push('<rect x="-500" y="-500" width="1100" height="1100" fill="url(#fog)" pointer-events="none"/>');
  // ressac
  $('foamsvg').innerHTML = '<defs><mask id="horsTerre" maskUnits="userSpaceOnUse" x="-500" y="-500" width="1100" height="1100"><rect x="-500" y="-500" width="1100" height="1100" fill="#fff"/>' + [-2.6, -2.2, -1.8, -1.3, -.8, -.4, 0, .4, .8, 1.3, 1.8, 2.2, 2.6].map(function(t){ /* négatif : côtes nord, l'écume est cachée derrière la falaise */ return '<path d="' + fr + '" transform="translate(0,' + t + ')" fill="#000"/><path d="' + co + '" transform="translate(0,' + t + ')" fill="#000"/>'; }).join('') + (typeof sprList === 'function' ? sprList().filter(function(o){ return o[0] === 'eolien_mer' || o[0] === 'mont_saint_michel'; }).map(function(o){ var q = P(o[1], o[2]), w = o[3], h = w * ((typeof SPR_AR !== 'undefined' && SPR_AR[o[0]]) || 1); return '<ellipse cx="' + F(q[0]) + '" cy="' + F(q[1] - h * .35) + '" rx="' + F(w * .42) + '" ry="' + F(h * .55) + '" fill="#000"/>'; }).join('') : '') /* pas d’écume sur les éoliennes en mer ni le Mont-Saint-Michel */ + '<linearGradient id="nordFade" gradientUnits="userSpaceOnUse" x1="0" y1="' + F(Y(48.15)) + '" x2="0" y2="' + F(Y(47.95)) + '"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient><rect x="-500" y="-500" width="1100" height="' + F(500 + Y(48.25)) + '" fill="url(#nordFade)"/></mask><mask id="noLandFoam" maskUnits="userSpaceOnUse" x="-500" y="-500" width="1100" height="1100"><rect x="-500" y="-500" width="1100" height="1100" fill="#fff"/>' + NEIGH.map(function(n){ return '<path d="' + smooth(n, true) + '" fill="#000" stroke="#000" stroke-width="3"/>'; }).join('') + '</mask></defs><g mask="url(#noLandFoam)">' + [[fr, P(2.4, 46.7)], [co, P(9.1, 42.15)]].map(function(v){ var d = ' d="' + v[0] + '"', o = 'transform-origin:' + F(v[1][0]) + 'px ' + F(v[1][1]) + 'px'; return '<g mask="url(#horsTerre)"><path class="ressac r1" style="' + o + '"' + d + '/><path class="ressac r2" style="' + o + '"' + d + '/><path class="ecume"' + d + '/><path class="ecume" transform="translate(0,2.6)"' + d + '/></g>'; }).join('') + '</g>';
  // falaise (épaisseur du plateau)
  [fr, co].forEach(function(d){
    h.push('<path d="' + d + '" transform="translate(0,2.6)" fill="var(--cliff)"/>');
    h.push('<path d="' + d + '" transform="translate(0,1.3)" fill="var(--cliff-2)"/>');
  });
  /* falaises claires (craie normande, calanques) et granit rose breton : on recolore l'épaisseur du plateau localement */
  function zones(id, list){ return '<clipPath id="' + id + '">' + list.map(function(z){ var c = P(z[0], z[1]); return '<ellipse cx="' + F(c[0]) + '" cy="' + F(c[1]) + '" rx="' + F(z[2] * 7) + '" ry="' + F(z[2] * 5) + '"/>'; }).join('') + '</clipPath>'; }
  h.push('<defs>' + zones('zCraie', [[0.75, 49.85, .75], [1.45, 50.75, .3]].concat(typeof MT_V2 !== 'undefined' && MT_V2 ? [] : [[5.5, 43.2, .35]])) + zones('zGranit', [[-3.6, 48.75, .7], [-4.6, 48.35, .4]]) + zones('zPlage', (typeof MT_V2 !== 'undefined' && MT_V2 ? [[8.72, 41.9, .22], [9.52, 42.1, .3]] : []).concat([[-1.25, 44.3, 1.25], [-1.25, 45.4, .5], [-1.9, 46.6, .5], [3.55, 43.35, .75], [4.2, 43.5, .3], [-1.5, 43.5, .2], [6.95, 43.55, .3], [7.2, 43.66, .2], [6.6, 43.27, .25], [6.2, 43.12, .25]])) + '</defs>');
  h.push('<g clip-path="url(#zCraie)"><path d="' + fr + '" transform="translate(0,2.6)" fill="var(--craie-2,#D9D2C2)"/><path d="' + fr + '" transform="translate(0,1.3)" fill="var(--craie,#F3EEE2)"/><path d="' + fr + '" transform="translate(0,2.0)" fill="none" stroke="var(--craie-2,#D9D2C2)" stroke-width=".25" stroke-dasharray=".5 .9"/></g>');
  h.push('<g clip-path="url(#zGranit)"><path d="' + fr + '" transform="translate(0,2.6)" fill="var(--granit-2,#B9806B)"/><path d="' + fr + '" transform="translate(0,1.3)" fill="var(--granit,#DCA48C)"/></g>');
  h.push('<path class="sable-bord" d="' + fr + '" transform="translate(0,.8)"/><path class="sable-bord" d="' + co + '" transform="translate(0,.8)"/>'); /* sable : visible seulement sur les bords tournés vers le sud (perspective) */
  if(typeof MT_V2 !== 'undefined' && MT_V2){ /* V2 : îlots au large (Ouessant, Sein, Groix, Belle-Île, Bréhat) avec ressac, et le phare d'Ar-Men */
    [[-3.5, 47.08, 1.6, .7], [6.25, 42.6, 1.3, .45]].forEach(function(q){ var c = P(q[0], q[1]), rx = q[2], ry = q[3];
      h.push('<g class="ilot"><ellipse class="ilot-ecume" cx="' + F(c[0]) + '" cy="' + F(c[1] + .5) + '" rx="' + F(rx + .9) + '" ry="' + F(ry + .6) + '" fill="none" stroke="#fff" stroke-width=".25"/><ellipse cx="' + F(c[0]) + '" cy="' + F(c[1] + .55) + '" rx="' + F(rx) + '" ry="' + F(ry) + '" fill="#A86F3C"/><ellipse cx="' + F(c[0]) + '" cy="' + F(c[1] + .15) + '" rx="' + F(rx) + '" ry="' + F(ry) + '" fill="#F2D59A"/><ellipse cx="' + F(c[0]) + '" cy="' + F(c[1]) + '" rx="' + F(rx * .9) + '" ry="' + F(ry * .85) + '" fill="var(--land)"/></g>'); });
    [[-5.2, 48.55], [-3.9, 47.35]].forEach(function(q){ var c = P(q[0], q[1]); h.push('<g transform="translate(' + F(c[0]) + ',' + F(c[1]) + ')"><ellipse class="ilot-ecume" cx="0" cy=".25" rx="1" ry=".55" fill="none" stroke="#fff" stroke-width=".22"/><path d="M-.6,.25 L-.35,-.35 L-.05,-.55 L.3,-.3 L.55,.25 Z" fill="#8C8C8C"/><path d="M-.05,-.55 L.3,-.3 L.55,.25 L.05,.25 Z" fill="#6E6E6E"/><path d="M.4,.25 L.6,-.05 L.85,.25 Z" fill="#7A7A7A"/></g>'); }); /* deux petits rochers au large */
    var am = P(-5.45, 47.98); h.push('<g class="phare-mer" transform="translate(' + F(am[0]) + ',' + F(am[1]) + ')"><ellipse class="ilot-ecume" cx="0" cy=".3" rx=".9" ry=".5" fill="none" stroke="#fff" stroke-width=".22"/><ellipse cx="0" cy=".2" rx=".4" ry=".22" fill="#8D8D8D"/><rect x="-.18" y="-1.6" width=".36" height="1.8" fill="#fff"/><rect x="-.18" y="-1.1" width=".36" height=".3" fill="#D9473B"/><rect x="-.18" y="-.4" width=".36" height=".3" fill="#D9473B"/><rect x="-.24" y="-1.85" width=".48" height=".28" fill="#3B4A5A"/><circle class="phare-lum" cx="0" cy="-1.72" r="1.6" fill="#FFE9A0"/></g>'); }
  /* quelques rochers au ras de l'eau (côtes rocheuses réelles) */
  [[-4.75, 48.45], [-4.6, 48.62], [-3.45, 48.86], [-3.1, 48.88], [-2.1, 48.68], [-4.5, 47.85], [-3.0, 47.45], [5.42, 43.19], [5.55, 43.2], [7.0, 43.5], [-1.8, 49.7], [0.25, 49.73]].filter(function(){ return typeof MT_V2 === 'undefined' || !MT_V2; }).forEach(function(q, i){
    var c = P(q[0], q[1]); h.push('<g class="rocher" transform="translate(' + F(c[0] + (i % 2 ? .9 : -.7)) + ',' + F(c[1] + 1.9) + ')"><ellipse rx=".55" ry=".32" class="r-o"/><ellipse cx="-.1" cy="-.12" rx=".38" ry=".2" class="r-h"/></g>');
  });
  h.push('<path id="frTop" class="land-top" d="' + fr + '"/><path id="coTop" class="land-top" d="' + co + '"/>');
  h.push('<g clip-path="url(#zPlage)"><g clip-path="url(#clipFr)"><path class="plage" d="' + fr + '" fill="none" stroke-width="3.4" stroke-linejoin="round"/></g></g>'); /* la plage reste sur la terre : l'eau commence à son bord */
  // décor intérieur, découpé sur l'île
  h.push('<g clip-path="url(#clipFr)">');
  h.push('<rect x="-10" y="-10" width="130" height="120" fill="url(#landlight)"/>');
  h.push('<rect class="grain-land" x="-10" y="-10" width="130" height="120" fill="url(#grain)" pointer-events="none"/>');
  // champs
  var fields = [[1.5,48.3,9],[2.6,49.7,8],[4.2,48.9,7],[0.4,46.5,6],[-0.5,47.8,5],[1.2,44.0,5],[3.5,47.3,4],[-1.2,46.5,4]];
  fields.forEach(function(f){
    var c = P(f[0], f[1]);
    for(var i = 0; i < f[2]; i++){
      var x = c[0] + (R() - .5) * 9, y = c[1] + (R() - .5) * 6, w = 2 + R() * 2.6, hh = 1.4 + R() * 1.6;
      var fill = ['var(--field-a)','var(--field-b)','var(--field-c)'][Math.floor(R() * 3)];
      h.push('<rect x="' + F(x) + '" y="' + F(y) + '" width="' + F(w * 1.3) + '" height="' + F(hh * 1.2) + '" rx=".6" fill="' + fill + '" opacity=".6" transform="rotate(' + F((R() - .5) * 24) + ' ' + F(x) + ' ' + F(y) + ')"/>');
    }
  });
  // grandes zones de couleur (bocage, forêts, plaines)
  [[-0.9,44.3,7,'var(--forest)'],[2.6,47.0,6,'var(--field-b)'],[5.5,48.3,5,'var(--hill)'],[1.0,45.6,6,'var(--hill)'],[3.8,49.3,6,'var(--field-b)'],[-2.5,48.1,6,'var(--land-2)'],[0.2,47.6,5,'var(--field-b)'],[4.6,46.4,5,'var(--land-2)']].forEach(function(z){ var c = P(z[0], z[1]); h.push('<ellipse cx="' + F(c[0]) + '" cy="' + F(c[1]) + '" rx="' + z[2] + '" ry="' + F(z[2] * .55) + '" fill="' + z[3] + '" opacity=".5"/>'); });
  // rivières
  var rivers = [
    [[4.4,48.3],[3.4,48.5],[2.7,48.6],[2.35,48.85],[1.9,49.0],[1.2,49.3],[0.3,49.45]],
    [[4.0,45.0],[4.0,46.5],[3.1,47.1],[2.9,47.7],[1.9,47.9],[1.0,47.4],[0.0,47.25],[-1.0,47.25],[-2.1,47.25]],
    [[6.0,46.2],[4.85,45.75],[4.8,44.9],[4.7,44.0],[4.6,43.55]],
    [[0.7,42.9],[1.4,43.6],[0.6,44.2],[-0.55,44.85],[-0.9,45.4]]
  ];
  if(typeof MT_V2 !== 'undefined' && MT_V2){ rivers[1][0] = [4.1, 45.6]; rivers[2].push([4.63, 43.42]); rivers[3].push([-1.25, 45.63]); rivers[3][0] = [0.8, 43.2]; } /* V2 : la Loire part après le Massif central, le Rhône rejoint la mer */
  window.RIVERS_LL = rivers;
  rivers.forEach(function(r){ h.push('<path d="' + smooth(L(r), false) + '" fill="none" stroke="var(--river)" stroke-width=".7" stroke-linecap="round"/>'); });
  if(typeof MT_V2 !== 'undefined' && MT_V2) h.push('<path d="' + smooth(L([[-0.62,44.98],[-0.9,45.4],[-1.25,45.63]]), false) + '" fill="none" stroke="var(--river)" stroke-width="1.6" stroke-linecap="round"/>'); /* V2 : estuaire de la Gironde */ if(typeof MT_V2 !== 'undefined' && MT_V2) h.push('<path d="' + smooth(L([[0.75,49.4],[0.4,49.45],[0.05,49.48]]), false) + '" fill="none" stroke="var(--river)" stroke-width="1.3" stroke-linecap="round"/>'); /* V2 : estuaire de la Seine */ if(typeof MT_V2 !== 'undefined' && MT_V2){ h.push('<path d="' + smooth(L([[-1.3,47.25],[-1.8,47.26],[-2.15,47.27]]), false) + '" fill="none" stroke="var(--river)" stroke-width="1.4" stroke-linecap="round"/>'); h.push('<path d="' + smooth(L([[4.63,43.68],[4.4,43.5],[4.33,43.42]]), false) + '" fill="none" stroke="var(--river)" stroke-width=".6" stroke-linecap="round"/>'); h.push('<path d="' + smooth(L([[4.65,43.62],[4.64,43.5],[4.63,43.4]]), false) + '" fill="none" stroke="var(--river)" stroke-width="1.3" stroke-linecap="round"/>'); } /* V2 : estuaire de la Loire, delta du Rhône */
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
    if(i > 1) return; /* 2 lignes seulement, discrètes */
    h.push('<path id="rail' + i + '" d="' + d + '" fill="none" stroke="var(--rail)" stroke-width=".42" stroke-dasharray=".16 .42" stroke-linejoin="round" opacity=".38"/>');
  });
  h.push('</g>');
  // objets debout, triés par profondeur
  var up = [];
  function mountain(){ /* montagnes : sprites */ }
  function hill(){ /* collines : sprites */ }
  function tree(x, y, s){ up.push({ y:y, s:treeSvg(x, y, s) }); }
  function forest(lon, lat, n, spread){ var c = P(lon, lat); for(var i = 0; i < n; i++){ tree(c[0] + (R() - .5) * spread, c[1] + (R() - .5) * spread * .6, .8 + R() * .4); } }
  var glows = [];
  function city(lon, lat, n, tall){
    var c = P(lon, lat);
    for(var i = 0; i < n; i++){
      var a = i * 2.4, r = i === 0 ? 0 : .9 + Math.sqrt(i) * .9;
      var x = c[0] + Math.cos(a) * r * 1.3, y = c[1] + Math.sin(a) * r * .7;
      R(); /* maisons : sprites (art/sprites.js) */
      glows.push('<circle cx="' + F(x) + '" cy="' + F(y - .8) + '" r="1.9"/>');
    }
  }
  [[6.9,45.9,1.15,1],[6.55,45.45,1.3,1],[6.3,45.1,1,1],[6.65,44.8,1.1,1],[6.8,44.4,.95,1],[6.15,44.6,.8,0],[6.1,45.7,.8,1],[7.1,44.15,.75,0],
   [-1.0,43.0,.8,0],[-0.4,42.95,1,1],[0.2,42.85,1.15,1],[0.8,42.82,1.05,1],[1.4,42.72,.95,1],[2.0,42.62,.85,0],[2.5,42.56,.75,0],
   [9.05,42.25,.8,1],[9.15,42.45,.65,0]].forEach(function(m){ mountain(m[0], m[1], m[2], m[3]); });
  [[2.8,45.5,1.1],[3.0,45.0,1.3],[2.5,44.85,.9],[3.6,44.5,1],[2.95,45.9,.9],[3.9,45.25,.8],[6.9,47.9,1],[5.9,46.6,.8],[6.2,46.9,.75],[5.7,46.3,.7],[4.1,47.2,.7],[4.6,49.8,.6]].forEach(function(m){ if(typeof MT_V2 === 'undefined' || !MT_V2) hill(m[0], m[1], m[2]); });
  var forest0 = forest; if(typeof MT_V2 !== 'undefined' && MT_V2) forest = function(){}; /* V2 : pas de feuillus dessinés dans le sud (pins à la place) */
  forest(-0.5,44.3,14,5); forest(-0.35,44.0,6,4); /* Landes : assez loin du rivage */ forest(2.0,47.55,6,5); forest(4.75,49.85,5,4); forest(4.0,47.15,6,4); forest(-3.3,48.15,5,5);
  forest(2.7,48.4,4,3); forest(-0.6,48.8,4,4); forest(5.7,44.2,4,4); forest(1.4,45.1,5,6); forest(9.15,41.85,3,2);
  city(2.35,48.85,8,true); city(4.84,45.76,5); city(5.37,43.3,5); city(3.07,50.63,4); city(1.44,43.6,4); city(-0.58,44.84,4); city(-1.55,47.22,3); city(7.75,48.58,3);
  city(-1.68,48.11,3); city(7.26,43.7,3); city(3.88,43.6,3); city(-4.48,48.39,2); city(3.08,45.78,2); city(5.04,47.32,2); city(1.1,49.44,2); city(8.74,41.92,2); city(9.45,42.7,1); city(1.9,47.9,2); city(1.26,45.83,2); city(6.18,48.69,2); city(0.1,49.5,2); city(-0.37,49.18,2);
  // tour de Paris : sprite tour_eiffel
  // phares
  var beams = [];
  [[-4.78,48.42],[-1.9,49.72],[1.6,50.75],[-1.55,43.5],[5.25,43.2],[-2.2,47.25]].forEach(function(l){
    var p = P(l[0], l[1]);
    /* phare : sprite (art/sprites.js) */
    R(); /* faisceaux supprimés (ils ne tombaient pas sur les phares) */
  });
  up.sort(function(a, b){ return a.y - b.y; });
  h.push('<g class="glows" filter="url(#blur3)" fill="#FFC86B" opacity=".55">' + glows.join('') + '</g>');
  h.push('<g id="upright">' + up.map(function(u){ return u.s; }).join('') + '</g>');
  // noms de régions
  h.push(insetSvg());
  $('labelsvg').innerHTML = ('<g id="rlabels">' + REGIONS.filter(function(r){ return !r.national && !r.inset && r.abroad && r.id !== 'frontiere_est'; /* pas de noms de régions françaises (demande d'Ewen) */ }).map(function(r){ var p = RP(r.x, r.y); return '<text class="rlabel' + (r.abroad ? ' abroad' : '') + '" x="' + F(p[0]) + '" y="' + F(p[1] + (r.abroad ? -1.8 : 3.6)) + '" text-anchor="middle">' + esc(shortRegion(r.label)) + '</text>'; }).join('') + [['Royaume-Uni', 22, 4], ['Suisse', 94, 46], ['Italie', 99, 66], ['Belgique', 72, 6]].map(function(c){ var p = RP(c[1], c[2]); return '<text class="rlabel abroad" x="' + F(p[0]) + '" y="' + F(p[1]) + '" text-anchor="middle">' + c[0] + '</text>'; }).join('') + '</g>'); /* pays voisins (étiquettes seules) */
  svg.innerHTML = h.join('');
  franceEl = $('frTop'); corseEl = $('coTop'); buildMask();
  buildWaves(R);
}
function insetSvg(){
  var r = REGIONS.filter(function(r){ return r.inset; })[0]; if(!r) return '';
  var p = RP(r.x, r.y), x = p[0], y = p[1], o = '<g class="inset">';
  o += '<rect x="' + F(x - 9) + '" y="' + F(y - 7.5) + '" width="18" height="13" rx="2.2" fill="var(--sea-deep)" opacity=".55" stroke="var(--foam)" stroke-width=".35" stroke-dasharray="1 .8"/>';
  /* territoires d'outre-mer : silhouettes simplifiées mais reconnaissables (échelles non respectées) */
  var OM = [
    ['Guadeloupe', -5.6, -3.2, [[-1.4,-.9],[-.9,-1.5],[-.4,-1.2],[-.05,-.3],[-.1,.3],[-.6,1.3],[-1.3,1.1],[-1.6,.2]], [[-.3,-.45],[.4,-1.3],[1.1,-1.5],[1.6,-1.0],[1.0,-.5],[.5,-.05],[-.1,.15]]],
    ['Martinique', -1.6, -3.6, [[-.7,-1.3],[-.1,-1.6],[.4,-1],[.9,-.4],[1,.5],[.6,1.3],[.1,1],[-.4,.6],[-.9,.4],[-.6,-.3]]],
    ['Guyane', 3.4, -2.6, [[-1.6,-1.6],[.2,-1.9],[1.6,-1.1],[2.1,.1],[1.4,1.4],[.2,2.1],[-.9,1.9],[-1.5,.8],[-1.9,-.4]]],
    ['La Réunion', -5.4, 2.4, [[-1.2,-.5],[-.5,-1.1],[.5,-1],[1.2,-.4],[1.1,.5],[.4,1],[-.6,.9],[-1.2,.3]]],
    ['Mayotte', -2.2, 1.6, [[-.3,-.9],[.3,-.8],[.4,0],[.1,.8],[-.3,.6],[-.5,-.1]]],
    ['Nouvelle-Calédonie', 1.6, 2.6, [[-2.4,-1.2],[-1.6,-1.2],[.4,0],[2.4,1],[2.2,1.4],[1.2,1.2],[-.6,.2],[-2.3,-.8]]],
    ['Polynésie', 6.1, 2.2, [[-.3,-.3],[.3,-.3],[.3,.3],[-.3,.3]], [[.8,.5],[1.2,.5],[1.2,.9],[.8,.9]], [[-.9,.8],[-.5,.8],[-.5,1.2],[-.9,1.2]]]
  ];
  if(typeof MT_V2 !== 'undefined' && MT_V2){ /* V2 : cadre plus grand, plages, palmiers, reliefs, lagons */
    var K = 1.45, palm = function(px, py, k){ k = k || 1; return '<g transform="translate(' + F(px) + ',' + F(py) + ') scale(' + k + ')"><path d="M0,0 Q.15,-.6 .05,-1.2" stroke="#8B5A2B" stroke-width=".14" fill="none"/><path d="M.05,-1.2 q.45,-.15 .7,.15 M.05,-1.2 q-.45,-.15 -.7,.15 M.05,-1.2 q.3,-.4 .55,-.35 M.05,-1.2 q-.3,-.4 -.55,-.35" stroke="#2E9E4F" stroke-width=".16" fill="none" stroke-linecap="round"/></g>'; },
      relief = function(px, py, k, neige){ return '<path d="M' + F(px - .9 * k) + ',' + F(py) + 'L' + F(px) + ',' + F(py - 1.3 * k) + 'L' + F(px + .9 * k) + ',' + F(py) + 'Z" fill="#7C8B5A"/><path d="M' + F(px) + ',' + F(py - 1.3 * k) + 'L' + F(px + .9 * k) + ',' + F(py) + 'L' + F(px + .2 * k) + ',' + F(py) + 'Z" fill="#5E6D44"/>' + (neige ? '<path d="M' + F(px - .25 * k) + ',' + F(py - .95 * k) + 'L' + F(px) + ',' + F(py - 1.3 * k) + 'L' + F(px + .25 * k) + ',' + F(py - .95 * k) + 'Z" fill="#9AA27A"/>' : ''); };
    o = '<g class="inset"><g transform="translate(' + F(x - 2) + ',' + F(y + 1) + ') scale(' + K + ') translate(' + F(-x) + ',' + F(-y) + ')">';
    o += '<rect x="' + F(x - 9.4) + '" y="' + F(y - 7.6) + '" width="18.8" height="13.4" rx="2.2" fill="var(--sea-deep)" opacity=".6" stroke="var(--foam)" stroke-width=".3" stroke-dasharray="1 .8"/>';
    var LAG = { 'Nouvelle-Calédonie':1, 'Polynésie':1, 'Mayotte':1 };
    OM.forEach(function(t){
      var cx = x + t[1], cy = y + t[2];
      if(LAG[t[0]]) t.slice(3).forEach(function(pts){ o += '<path d="' + smooth(pts.map(function(q){ return [cx + q[0] * 1.25, cy + q[1] * 1.35]; }), true) + '" fill="#8FE3DA" opacity=".55"/>'; }); /* lagon */
      var ds = t.slice(3).map(function(pts){ return smooth(pts.map(function(q){ return [cx + q[0], cy + q[1]]; }), true); }); /* une seule île même en plusieurs morceaux : bords sous les terres */
      ds.forEach(function(d){ o += '<path d="' + d + '" transform="translate(0,.5)" fill="var(--cliff)"/>'; });
      ds.forEach(function(d){ o += '<path d="' + d + '" fill="#F6E3A4" stroke="#F6E3A4" stroke-width=".55"/>'; });
      ds.forEach(function(d){ o += '<path d="' + d + '" fill="var(--land)"/>'; });
      if(t[0] === 'Guadeloupe') o += relief(cx - 1.1, cy + .3, .7, 1) + palm(cx + 1.0, cy - .7, .7) + palm(cx - 1.5, cy + 1.0, .6);
      if(t[0] === 'Martinique') o += relief(cx - .1, cy - .2, .75, 1) + palm(cx + .5, cy + 1.0, .6);
      if(t[0] === 'Guyane') o += '<circle cx="' + F(cx - .6) + '" cy="' + F(cy + .2) + '" r=".55" fill="#1F7A3E"/><circle cx="' + F(cx + .3) + '" cy="' + F(cy + .7) + '" r=".6" fill="#23864A"/><circle cx="' + F(cx + .4) + '" cy="' + F(cy - .4) + '" r=".5" fill="#1F7A3E"/><circle cx="' + F(cx - .2) + '" cy="' + F(cy + 1.3) + '" r=".45" fill="#2A9455"/><path d="M' + F(cx + 1.2) + ',' + F(cy - .6) + 'l.12,-.9 .12,.9z" fill="#fff" stroke="#9AA" stroke-width=".05"/>'; /* forêt et fusée de Kourou */
      if(t[0] === 'La Réunion') o += relief(cx - .1, cy + .3, .85, 1) + relief(cx + .6, cy + .5, .5) + palm(cx - .9, cy + .7, .55);
      if(t[0] === 'Mayotte') o += palm(cx, cy + .3, .5);
      if(t[0] === 'Nouvelle-Calédonie') o += relief(cx - .6, cy - .1, .5) + relief(cx + .4, cy + .45, .45) + palm(cx + 1.8, cy + 1.2, .5);
      if(t[0] === 'Polynésie') o += palm(cx, cy, .45) + palm(cx + 1, cy + .7, .4);
      o += '<text x="' + F(cx) + '" y="' + F(cy + 2.5) + '" text-anchor="middle" font-size=".75" fill="#fff" opacity=".85" style="font-family:var(--f-display)">' + esc(t[0]) + '</text>';
    });
    o += '</g><text class="rlabel" x="' + F(x - 2) + '" y="' + F(y + 1 + 8.6 * K) + '" text-anchor="middle" style="stroke:var(--sea)">' + esc(r.label || 'Outre-mer') + '</text></g>';
    return o;
  }
  OM.forEach(function(t){
    t.slice(3).forEach(function(pts){
      var d = smooth(pts.map(function(q){ return [x + t[1] + q[0], y + t[2] + q[1]]; }), true);
      o += '<path d="' + d + '" transform="translate(0,.55)" fill="var(--cliff)"/><path d="' + d + '" fill="var(--land)" stroke="#F6E3A4" stroke-width=".35" paint-order="stroke"/>';
    });
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
