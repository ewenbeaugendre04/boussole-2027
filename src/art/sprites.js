'use strict';
/* =========================================================
   Sprites (bibliothèque Recraft, assets/sprites/*.webp)
   Couche HTML #sprl au-dessus du décor cuit : monuments, maisons,
   énergie, fermes, ports. Positions en lon/lat ; vérif terre/mer.
   ========================================================= */
var SPR_DIR = 'assets/sprites/';
var SPR_AR = {"arbre":1.5,"arc_triomphe":1.246,"avion":0.646,"barrage":0.801,"basilique_marseille":1.51,"bateau_peche":0.88,"beffroi_lille":2.989,"ble":0.696,"bourse_bordeaux":0.774,"camion":0.882,"canadair":0.819,"cathedrale_strasbourg":2.068,"centrale_gaz":1.341,"centrale_nucleaire":1.109,"chantier_epr":1.462,"cyclone":0.771,"ecole":1.196,"eolien_mer":2.294,"eolienne":2.349,"feu":0.946,"fourviere":1.018,"grue_chantier":1.04,"grue_portuaire":1.196,"haussmann":1.848,"hemicycle":1.036,"hopital":1.253,"immeuble":1.587,"mairie":0.962,"maison_bretonne":1.278,"maison_pierre":1.143,"mont_saint_michel":1.465,"nuage_neige":1.477,"nuage_orage":1.181,"pavillon":1.014,"petit_immeuble":1.515,"pieces":0.76,"porte_conteneurs":0.783,"pylone_ht":2.166,"segment_rails":1.136,"serre":0.891,"smog":0.874,"solaire":0.668,"soleil_canicule":0.69,"tgv":1.169,"tgv_seul":1.384,"tour_bureaux":1.728,"tour_eiffel":1.883,"tracteur":0.869,"train_fret":1.447,"urne":1.237,"usine":0.965,"vache":0.866,"vague_crue":0.845,"vignes":0.689,"voiture":0.858};
var SPR_MARINE = { eolien_mer:1, porte_conteneurs:1, bateau_peche:1 };
function sprList(){
  var R = rng(1789), out = [];
  function put(id, lon, lat, w){ out.push([id, lon, lat, w]); }
  function cluster(lon, lat, n, sp, kinds, w){
    for(var i = 0; i < n; i++){ var k = kinds[Math.floor(R() * kinds.length)]; put(k, lon + (R() - .5) * 2 * sp * 1.3, lat + (R() - .5) * 2 * sp * .8, (w || 2) * (k === 'petit_immeuble' || k === 'haussmann' || k === 'immeuble' ? 1.08 : 1)); }
  }
  // monuments des grandes villes
  put('tour_eiffel', 2.29, 48.92, 2.6); put('arc_triomphe', 2.52, 48.74, 2.6); put('fourviere', 4.78, 45.8, 3.4); put('basilique_marseille', 5.37, 43.36, 3); put('cathedrale_strasbourg', 7.72, 48.62, 2.5);
  put('beffroi_lille', 3.07, 50.62, 2); put('bourse_bordeaux', -0.57, 44.86, 3.8); put('mont_saint_michel', -1.51, 48.66, 3.2);
  // villes et villages : des maisons partout
  var big = ['petit_immeuble', 'immeuble', 'haussmann'], town = ['petit_immeuble', 'maison_pierre', 'pavillon'], vil = ['maison_pierre', 'pavillon'], bzh = ['maison_bretonne', 'maison_bretonne', 'pavillon'];
  cluster(2.35, 48.84, 9, .55, big); cluster(4.86, 45.74, 6, .45, town); cluster(5.4, 43.32, 6, .4, town); cluster(-0.56, 44.83, 5, .4, town); cluster(1.45, 43.6, 6, .45, town); put('tour_bureaux', 2.2, 48.9, 1.9);
  cluster(3.07, 50.6, 4, .35, town); cluster(7.75, 48.56, 4, .35, town); cluster(-1.55, 47.22, 5, .4, town); cluster(7.26, 43.72, 4, .3, town); cluster(3.88, 43.62, 4, .35, town);
  cluster(-1.68, 48.11, 4, .35, bzh); cluster(-4.45, 48.39, 3, .3, bzh); cluster(-3.4, 47.78, 3, .35, bzh); cluster(-2.75, 48.5, 3, .3, bzh); cluster(-3.0, 48.0, 2, .3, bzh);
  [[0.69,47.39],[5.04,47.32],[1.1,49.44],[1.9,47.9],[3.08,45.78],[4.03,49.26],[6.18,48.69],[0.34,46.58],[-0.36,49.18],[2.3,47.08],[4.4,44.05],[6.12,43.95],[-0.37,43.3],[2.52,44.35],[1.26,45.83],[5.92,45.57],[4.9,46.3],[2.8,49.9],[0.1,45.65],[-1.15,46.16],[3.0,47.0],[5.7,47.9],[-0.55,47.47]].forEach(function(v){ cluster(v[0], v[1], 3, .3, vil); });
  [[8.74,41.92],[9.45,42.7]].forEach(function(v){ cluster(v[0], v[1], 2, .2, vil); });
  // énergie, ports, campagne (lieux réels)
  put('centrale_nucleaire', 1.58, 47.72, 3.4); put('centrale_nucleaire', 6.22, 49.41, 3.2); put('centrale_nucleaire', 4.73, 44.33, 3.2); put('centrale_nucleaire', 5.27, 45.8, 3);
  put('eolienne', 1.75, 48.25, 2.2); put('eolienne', 2.1, 48.15, 2.2); put('eolienne', 2.9, 50.2, 2.2); put('eolienne', 3.3, 50.05, 2.2); put('eolienne', -3.2, 48.25, 2.1);
  put('eolien_mer', -2.62, 47.05, 2.4); put('eolien_mer', -2.4, 46.9, 2.4); put('eolien_mer', 0.25, 49.98, 2.4);
  put('solaire', 5.25, 43.95, 3.2); put('barrage', 6.35, 44.53, 3.4); put('grue_portuaire', 0.12, 49.47, 2.6); put('grue_portuaire', 4.88, 43.42, 2.4);
  put('porte_conteneurs', -0.25, 49.75, 4.6); put('bateau_peche', -4.9, 47.7, 2.6);
  put('ble', 1.6, 48.05, 4.2); put('ble', 3.5, 49.3, 3.8); put('ble', 0.6, 46.3, 3.4); put('vignes', -0.25, 44.98, 3.4); put('vignes', 4.75, 47.05, 3.2); put('vignes', 4.0, 49.05, 3.2);
  put('vache', -0.7, 49.0, 1.8); put('vache', 2.75, 45.35, 1.8); put('tracteur', 1.3, 48.3, 1.7); put('serre', -1.4, 47.0, 2.2); put('usine', 6.05, 48.05, 2.8); put('usine', 3.2, 50.4, 2.6);
  return out;
}
function buildSprites(){
  var l = $('sprl'); if(!l) return; var items = [];
  sprList().forEach(function(s){
    var p = P(s[1], s[2]), t = terrainU(p[0], p[1]), marine = !!SPR_MARINE[s[0]];
    if(MASK && (marine ? t !== 0 : t !== 1)) return;
    var w = s[3] * VBK, h = w * (SPR_AR[s[0]] || 1), q = U2P(p[0], p[1]);
    items.push({ y:q[1], h:'<img src="' + SPR_DIR + s[0] + '.webp" alt="" decoding="async" loading="lazy" style="left:' + F(q[0] - w / 2) + 'px;top:' + F(q[1] - h * .86) + 'px;width:' + F(w) + 'px">' });
  });
  items.sort(function(a, b){ return a.y - b.y; });
  l.innerHTML = items.map(function(i){ return i.h; }).join('');
}
