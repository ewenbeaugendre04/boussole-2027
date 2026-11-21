'use strict';
/* =========================================================
   Sprites (bibliothèque Recraft, assets/sprites/*.webp)
   Couche HTML #sprl au-dessus du décor cuit : monuments, maisons,
   énergie, fermes, ports. Positions en lon/lat ; vérif terre/mer.
   ========================================================= */
var SPR_DIR = 'assets/sprites/';
var SPR_AR = {"ambulance":0.71,"antenne":1.954,"arbre":1.5,"arc_triomphe":1.246,"avion":0.646,"avion_militaire":0.676,"barrage":0.801,"basilique_marseille":1.51,"bateau_migrants":0.8,"bateau_peche":0.88,"beffroi_lille":2.989,"billets":1.008,"ble":0.696,"boulangerie":1.087,"bourse_bordeaux":0.774,"bus":0.877,"caddie":1.044,"camion":0.882,"camion_citerne":0.868,"camping_car":0.836,"canadair":0.819,"cathedrale_strasbourg":2.068,"centrale_charbon":1.132,"centrale_gaz":1.341,"centrale_nucleaire":1.109,"chantier_epr":1.462,"char":0.814,"colline":1.201,"colza":0.611,"commissariat":0.974,"conteneurs":1.593,"creche":0.649,"cyberattaque":1.098,"cyclone":1.029,"drone":0.744,"eclair":2.102,"ecole":1.196,"ehpad":0.926,"entrepot":0.759,"eolien_mer":2.294,"eolienne":2.349,"facture":1.92,"ferme":0.899,"ferry":0.941,"feu":0.946,"foule":1.007,"fourviere":1.018,"fregate":0.705,"gare":0.81,"goutte":1.399,"grue_chantier":1.04,"grue_portuaire":1.196,"haussmann":1.848,"hemicycle":1.036,"hopital":1.401,"immeuble":1.587,"lac":0.781,"logo":0.795,"mairie":0.962,"maison_bretonne":1.278,"maison_isolation":1.101,"maison_pierre":1.143,"manifestation":0.867,"maree_noire":0.704,"metro":0.863,"mine":0.941,"moissonneuse":0.781,"mont_saint_michel":1.465,"montagne":1.357,"montagnes":1.13,"nuage_neige":1.477,"nuage_orage":1.181,"parasols":0.899,"pavillon":1.014,"peniche":0.808,"petit_immeuble":1.515,"phare":1.403,"pharmacie":1.0,"pieces":0.76,"piscine":0.632,"pluie":1.299,"pompiers":0.924,"porte_conteneurs":0.783,"poste_frontiere":1.096,"prison":0.989,"puits_petrole":1.111,"pylone_ht":2.166,"sapins":1.051,"satellite":0.925,"segment_rails":1.136,"serre":0.891,"smog":0.874,"solaire":0.668,"soldats":1.059,"soleil_canicule":0.69,"stade":0.891,"supermarche":0.921,"tente_camping":0.848,"terminal_gnl":0.848,"tgv":1.169,"tgv_seul":1.384,"thermometre":2.905,"tour_bureaux":1.728,"tour_eiffel":1.883,"tracteur":0.869,"train_fret":1.447,"tram":0.87,"tribunal":1.022,"universite":1.057,"urne":1.237,"usine":0.965,"vache":0.866,"vague_crue":0.845,"valise":1.59,"velo":0.924,"velodrome":0.747,"vignes":0.689,"voilier":1.237,"voiture":0.858,"voiture_police":0.772};
/* objets d'événement (OBJ) dessinés par un sprite de la bibliothèque */
var OBJ_SPR = { tracteur:'tracteur', camion:'camion', voiture:'voiture', train:'train_fret', tgv:'tgv_seul', avion:'avion', cargo:'porte_conteneurs', bateau_peche:'bateau_peche',
  eolienne:'eolienne', eolienne_mer:'eolien_mer', centrale_nucleaire:'centrale_nucleaire', centrale_gaz:'centrale_gaz', panneaux_solaires:'solaire', barrage:'barrage', pylone:'pylone_ht',
  maison:'pavillon', immeuble:'immeuble', usine:'usine', chantier_grue:'grue_chantier', ecole:'ecole', hopital:'hopital', mairie:'mairie', parlement:'hemicycle', port:'grue_portuaire',
  ambulance:'ambulance', voiture_police:'voiture_police', bus:'bus', velo:'velo', ferry:'ferry', foule:'foule', manifestants:'manifestation', commissariat:'commissariat', prison:'prison', boulangerie:'boulangerie', commerce:'boulangerie', supermarche:'supermarche', entrepot:'entrepot', aeroport:'avion', ferme:'ferme', cabinet_medical:'pharmacie', antenne:'antenne', satellite:'satellite', cyberattaque:'cyberattaque', conteneurs:'conteneurs', secheresse:'thermometre',
  champ:'ble', troupeau:'vache', foret:'arbre', incendie:'feu', inondation:'vague_crue', canicule:'soleil_canicule', neige:'nuage_neige', orage:'nuage_orage', tempete:'nuage_orage', pieces:'pieces' };
/* largeur naturelle des sprites, en unités du plateau (cohérente avec le décor) */
var SPR_W = { tracteur:1.7, camion:2.2, voiture:1.5, train_fret:4, tgv_seul:5, avion:3, porte_conteneurs:4.6, bateau_peche:2.4, eolienne:2.2, eolien_mer:2.4, centrale_nucleaire:3.4, centrale_gaz:2.8,
  solaire:3, barrage:3.4, pylone_ht:2, pavillon:2, immeuble:2.2, usine:2.8, grue_chantier:2.6, ecole:2.6, hopital:2.8, mairie:2.6, hemicycle:3.2, grue_portuaire:2.6, ble:3.2, vache:1.5, arbre:1.5,
  feu:2.6, vague_crue:3, soleil_canicule:2.8, nuage_neige:2.8, nuage_orage:2.8, pieces:1.8, ambulance:1.7, pompiers:2, voiture_police:1.5, bus:2.4, manifestation:3, foule:2.6, char:2.2, fregate:4,
  bateau_migrants:2.4, maree_noire:4.4, centrale_charbon:3, phare:1.6, voilier:1.8, ferry:4 };
var SPR_MARINE = { eolien_mer:1, porte_conteneurs:1, bateau_peche:1, voilier:1, ferry:1, fregate:1, bateau_migrants:1, maree_noire:1 };
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
  // relief et littoral (sprites Recraft)
  [[6.6,45.3,3.6],[6.9,44.7,3.2],[6.3,45.8,3],[7.0,44.2,2.8],[0.6,42.85,3.6],[-0.4,42.95,3],[1.6,42.75,3.2],[2.4,42.6,2.6],[9.1,42.3,2.2]].forEach(function(m){ put('montagnes', m[0], m[1], m[2] * 1.6); });
  [[2.8,45.4],[3.0,44.9],[3.6,44.5],[2.5,45.8],[7.0,48.1],[5.9,46.6]].forEach(function(c){ put('colline', c[0], c[1], 2.2); });
  [[-4.78,48.42],[-1.9,49.65],[1.6,50.7],[-1.45,43.5],[-2.2,47.28]].forEach(function(l){ put('phare', l[0], l[1], 1.4); });
  put('parasols', 3.5, 43.45, 2.4); put('parasols', -1.3, 44.6, 2.2); put('parasols', 6.9, 43.55, 2.2); put('voilier', -2.6, 46.5, 1.8); put('voilier', 5.6, 42.9, 1.8); put('voilier', -1.9, 49.95, 1.8);
  put('gare', 2.45, 48.95, 2.2); put('stade', 2.3, 48.7, 2.6); put('universite', 4.95, 45.68, 2.2); put('hopital', 1.5, 43.55, 2.4); put('ferme', 0.2, 46.9, 2.4); put('ferme', 3.9, 48.1, 2.3); put('colza', 0.9, 48.65, 3); put('colza', 4.6, 49.55, 3);
  // forêts (Landes, Sologne, Vosges, Ardennes, Morvan, Bretagne, Massif central, Jura)
  [[-0.85,44.3,10,.6],[-0.6,43.95,5,.4],[2.0,47.55,5,.4],[7.0,48.4,5,.35],[4.75,49.85,4,.3],[4.05,47.15,4,.3],[-3.3,48.15,4,.35],[2.6,45.0,4,.4],[6.0,46.6,3,.3],[1.4,45.1,4,.4],[5.75,44.2,3,.3],[9.15,42.0,3,.25],[0.6,48.6,3,.3],[3.0,48.4,3,.3]].forEach(function(f){ cluster(f[0], f[1], f[2], f[3], ['arbre'], 1.5); });
  // plus de champs et de vignes
  put('ble', 2.5, 48.35, 3.4); put('ble', 1.0, 49.2, 3.2); put('ble', 4.3, 48.5, 3.2); put('ble', -0.3, 46.6, 3); put('ble', 1.6, 43.85, 3); put('ble', 2.9, 49.75, 3);
  put('vignes', -0.6, 45.25, 3); put('vignes', 4.85, 44.5, 3); put('vignes', 3.2, 43.35, 3.2); put('vignes', 7.3, 48.15, 2.6); put('vignes', 0.4, 47.3, 2.6);
  put('vache', -1.3, 48.4, 1.6); put('vache', 3.4, 46.7, 1.6); put('serre', 4.9, 43.75, 2); put('tracteur', 3.0, 49.5, 1.6);
  return out;
}
/* positions calculées une fois le masque terre/mer prêt (unités du plateau) */
function sprItems(){
  var items = [];
  sprList().forEach(function(s){
    var p = P(s[1], s[2]), t = terrainU(p[0], p[1]), marine = !!SPR_MARINE[s[0]];
    if(MASK && (marine ? t !== 0 : t !== 1)) return;
    items.push({ id:s[0], x:p[0], y:p[1], w:s[3], h:s[3] * (SPR_AR[s[0]] || 1) });
  });
  items.sort(function(a, b){ return a.y - b.y; });
  return items;
}
/* Performance : les sprites sont « cuits » dans l'image du décor (une seule image au lieu de ~250 balises).
   Il faut leurs données (data URI) car une image SVG ne charge pas de fichiers externes.
   Si le chargement échoue (ex. page ouverte en file://), on garde la couche HTML #sprl. */
var SPR_DATA = {}, SPR_READY = false, SPR_LOADING = false;
function loadSprData(){
  if(SPR_LOADING || SPR_READY || !window.fetch || !window.FileReader) return; SPR_LOADING = true;
  var ids = []; sprList().forEach(function(s){ if(ids.indexOf(s[0]) < 0) ids.push(s[0]); });
  Promise.all(ids.map(function(id){
    return fetch(SPR_DIR + id + '.webp').then(function(r){ if(!r.ok) throw new Error(id); return r.blob(); }).then(function(b){
      return new Promise(function(ok, ko){ var fr = new FileReader(); fr.onload = function(){ SPR_DATA[id] = fr.result; ok(); }; fr.onerror = ko; fr.readAsDataURL(b); });
    });
  })).then(function(){ SPR_READY = true; var l = $('sprl'); if(l) l.innerHTML = ''; BAKE.key = ''; BAKE.cache = {}; bakeDecor(); }).catch(function(){ SPR_LOADING = false; });
}
function sprSvg(){
  if(!SPR_READY) return '';
  var used = {}, items = sprItems(), defs = '', uses = '';
  items.forEach(function(it){
    if(!used[it.id]){ used[it.id] = 1; defs += '<image id="sp_' + it.id + '" href="' + SPR_DATA[it.id] + '" width="1" height="' + (SPR_AR[it.id] || 1) + '" preserveAspectRatio="none"/>'; }
    uses += '<use href="#sp_' + it.id + '" transform="translate(' + F(it.x - it.w / 2) + ',' + F(it.y - it.h * .86) + ') scale(' + F(it.w) + ')"/>';
  });
  return '<defs>' + defs + '</defs><g>' + uses + '</g>';
}
function buildSprites(){
  var l = $('sprl'); if(!l) return;
  if(SPR_READY){ l.innerHTML = ''; return; }
  loadSprData();
  l.innerHTML = sprItems().map(function(it){
    var w = it.w * VBK, h = it.h * VBK, q = U2P(it.x, it.y);
    return '<img src="' + SPR_DIR + it.id + '.webp" alt="" decoding="async" loading="lazy" style="left:' + F(q[0] - w / 2) + 'px;top:' + F(q[1] - h * .86) + 'px;width:' + F(w) + 'px">';
  }).join('');
}
