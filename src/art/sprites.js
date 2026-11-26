'use strict';
/* =========================================================
   Sprites (bibliothèque Recraft, assets/sprites/*.webp)
   Couche HTML #sprl au-dessus du décor cuit : monuments, maisons,
   énergie, fermes, ports. Positions en lon/lat ; vérif terre/mer.
   ========================================================= */
var SPR_DIR = 'assets/sprites/';
var SPR_AR = {"mt_neige":0.494,"massif_alpes_b":0.803,"massif_alpes_a":0.871,"massif_central":0.609,"aeroport":0.926,"ambulance":0.71,"antenne":1.954,"arbre":1.5,"arbre_automne":1.322,"arbre_jaune":1.322,"arc_triomphe":1.246,"arete":0.887,"avion":0.646,"avion_militaire":0.676,"barrage":0.801,"barriere":0.629,"basilique_marseille":1.51,"bateau_migrants":0.8,"bateau_peche":0.88,"beffroi_lille":2.989,"billets":1.008,"ble":0.696,"boulangerie":1.087,"bourse_bordeaux":0.774,"bus":0.877,"caddie":1.044,"cadenas":1.292,"camion":0.882,"camion_citerne":0.868,"camping_car":0.836,"canadair":0.819,"cathedrale_strasbourg":2.068,"centrale_charbon":1.132,"centrale_gaz":1.341,"centrale_nucleaire":1.109,"chaine_alpes":3.258,"chaine_iso":0.5,"chaine_pyrenees":0.292,"chantier_epr":1.462,"chantier_naval":0.975,"char":0.814,"colis":1.117,"colline":1.201,"colza":0.611,"commissariat":0.974,"conteneurs":1.593,"creche":0.649,"cyberattaque":1.098,"cyclone":1.029,"drapeau":2.296,"drone":0.744,"dune":0.747,"eclair":2.102,"ecole":1.196,"ehpad":0.926,"entrepot":0.759,"eolien_mer":2.294,"eolienne":2.349,"facture":1.92,"ferme":0.899,"ferry":0.941,"feu":0.946,"foule":1.007,"fourviere":1.018,"fregate":0.705,"gare":0.81,"goutte":1.399,"grue_chantier":1.04,"grue_portuaire":1.196,"haussmann":1.848,"hemicycle":1.036,"hopital":1.401,"immeuble":1.587,"lac":0.781,"logo":0.795,"loupe":1.352,"mairie":0.962,"maison_bretonne":1.278,"maison_isolation":1.101,"maison_pierre":1.143,"manifestation":0.867,"maree_noire":0.704,"mascotte":1.22,"massif":0.73,"massif_alpes_nord":0.895,"massif_alpes_sud":0.706,"massif_brun":0.73,"massif_iso":0.691,"massif_pics":1.127,"massif_pyrenees":0.628,"metro":0.863,"mine":0.941,"moissonneuse":0.781,"mont_saint_michel":1.465,"montagne":1.357,"montagnes":1.13,"montagnes_douces":0.946,"mt_basse":0.494,"mt_haute":1.03,"nuage_neige":1.477,"nuage_orage":1.181,"panneau":1.593,"parasols":0.899,"pavillon":1.014,"peniche":0.808,"personnage":3.169,"petit_immeuble":1.515,"phare":1.403,"pharmacie":1.0,"pic_alpin":0.865,"pic_brun":1.028,"pic_neige":1.029,"pic_sapins":0.894,"pieces":0.76,"pin":1.857,"piscine":0.632,"pluie":1.299,"pompiers":0.924,"port":1.0,"porte_conteneurs":0.783,"poste_frontiere":1.096,"prison":0.989,"puits_petrole":1.111,"pylone_ht":2.166,"sapins":1.051,"satellite":0.925,"segment_rails":0.568,"serre":0.891,"smog":0.874,"soignants":1.596,"solaire":0.668,"soldats":1.059,"soleil_canicule":0.69,"stade":0.891,"station_service":0.953,"supermarche":0.921,"tente_camping":0.848,"terminal_gnl":0.848,"tgv":0.586,"tgv_seul":0.692,"thermometre":2.905,"tour_bureaux":1.728,"tour_eiffel":1.883,"tracteur":0.869,"train_fret":0.724,"tram":0.87,"tribunal":1.022,"universite":1.057,"urne":1.237,"usine":0.965,"usine_aero":0.891,"usine_fermee":1.1,"vache":0.866,"vague_crue":0.845,"valise":1.59,"velo":0.924,"velodrome":0.747,"vignes":0.689,"voilier":1.192,"voiture":0.858,"voiture_police":0.772};
/* objets d'événement (OBJ) dessinés par un sprite de la bibliothèque */
var OBJ_SPR = { tracteur:'tracteur', camion:'camion', voiture:'voiture', train:'tgv_seul', tgv:'tgv_seul', avion:'avion', cargo:'porte_conteneurs', bateau_peche:'bateau_peche',
  eolienne:'eolienne', eolienne_mer:'eolien_mer', centrale_nucleaire:'centrale_nucleaire', centrale_gaz:'centrale_gaz', panneaux_solaires:'solaire', barrage:'barrage', pylone:'pylone_ht',
  maison:'pavillon', immeuble:'immeuble', usine:'usine', chantier_grue:'grue_chantier', ecole:'ecole', hopital:'hopital', mairie:'mairie', parlement:'hemicycle', port:'grue_portuaire',
  ambulance:'ambulance', voiture_police:'voiture_police', bus:'bus', velo:'velo', ferry:'ferry', foule:'foule', manifestants:'manifestation', commissariat:'commissariat', prison:'prison', boulangerie:'boulangerie', commerce:'boulangerie', supermarche:'supermarche', entrepot:'entrepot', aeroport:'avion', ferme:'ferme', cabinet_medical:'pharmacie', antenne:'antenne', satellite:'satellite', cyberattaque:'cyberattaque', conteneurs:'conteneurs', secheresse:'thermometre',
  champ:'ble', troupeau:'vache', foret:'arbre', incendie:'feu', inondation:'vague_crue', canicule:'soleil_canicule', neige:'nuage_neige', orage:'nuage_orage', tempete:'nuage_orage', pieces:'pieces',
  colis:'colis', usine_fermee:'usine_fermee', station_service:'station_service', douane:'poste_frontiere', frontiere:'poste_frontiere', barrage_agricole:'barriere', barriere:'barriere', personnage:'personnage', file_attente:'foule', soignants:'soignants', policiers:'voiture_police', eleves:'ecole', batiment_ue:'hemicycle', loupe:'loupe', cadenas:'cadenas' };
/* largeur naturelle des sprites, en unités du plateau (cohérente avec le décor) */
var SPR_W = { tracteur:1.7, camion:2.2, voiture:1.5, train_fret:4, tgv_seul:5, avion:3, porte_conteneurs:4.6, bateau_peche:2.4, eolienne:2.2, eolien_mer:2.4, centrale_nucleaire:3.4, centrale_gaz:2.8,
  solaire:3, barrage:3.4, pylone_ht:2, pavillon:2, immeuble:2.2, usine:2.8, grue_chantier:2.6, ecole:2.6, hopital:2.8, mairie:2.6, hemicycle:3.2, grue_portuaire:2.6, ble:3.2, vache:1.5, arbre:1.5,
  feu:2.6, vague_crue:3, soleil_canicule:2.8, nuage_neige:2.8, nuage_orage:2.8, pieces:1.8, ambulance:1.7, pompiers:2, voiture_police:1.5, bus:2.4, manifestation:3, foule:2.6, char:2.2, fregate:4,
  bateau_migrants:2.4, maree_noire:4.4, centrale_charbon:3, phare:1.6, voilier:1.8, ferry:4, drapeau:1.4, panneau:1.6, loupe:1.6, cadenas:1.3, colis:1.3, usine_fermee:2.8, station_service:2.4, barriere:2.2, personnage:0.9, soignants:1.4, poste_frontiere:2.4, gare:3, urne:1.4, supermarche:2.8, entrepot:2.8, boulangerie:2, ferme:2.6, pharmacie:2, antenne:1.6, satellite:2, cyberattaque:2, conteneurs:2.6, thermometre:1.4, commissariat:2.6, prison:3, velo:1.2 };
var SPR_MARINE = { chantier_naval:2, mont_saint_michel:2, eolien_mer:1, porte_conteneurs:1, bateau_peche:1, voilier:1, ferry:1, fregate:1, bateau_migrants:1, maree_noire:1 };
function sprList(){
  var R = rng(1789), out = [];
  function put(id, lon, lat, w, flip, sy, rot, pied){ out.push([id, lon, lat, w, flip ? 1 : 0, sy || 1, rot || 0, pied ? 1 : 0]); }
  function cluster(lon, lat, n, sp, kinds, w){
    n = Math.max(1, Math.round(n * DENS));
    for(var i = 0; i < n; i++){ var k = kinds[Math.floor(R() * kinds.length)]; put(k, lon + (R() - .5) * 2 * sp * 1.3, lat + (R() - .5) * 2 * sp * .8, (w || 2) * (k === 'petit_immeuble' || k === 'haussmann' || k === 'immeuble' ? 1.08 : 1)); }
  }
  // monuments des grandes villes
  put('tour_eiffel', 2.29, 48.92, 2.6); put('arc_triomphe', 2.52, 48.74, 2.6); put('fourviere', 4.78, 45.8, 3.4); put('basilique_marseille', 5.37, 43.36, 3); put('cathedrale_strasbourg', 7.72, 48.62, 2.5);
  put('beffroi_lille', 3.07, 50.62, 2); put('bourse_bordeaux', -0.57, 44.86, 3.8); put('mont_saint_michel', -1.75, 48.82, 3);
  // villes et villages : des maisons partout
  /* ville structurée : centre (haussmann, commerces), couronne (immeubles), périphérie (pavillons) ; quartier d'affaires optionnel */
  function city(lon, lat, r, o){
    o = o || {}; var core = o.core || ['haussmann', 'haussmann', 'boulangerie'], mid = o.mid || ['petit_immeuble', 'immeuble'], out2 = o.out || ['pavillon', 'pavillon', 'maison_pierre'];
    function ring(rad, n, kinds, w){ n = Math.max(1, Math.round(n * DENS)); for(var i = 0; i < n; i++){ var a = i / n * 6.283 + R() * .5, d = rad * (.75 + R() * .5); put(kinds[Math.floor(R() * kinds.length)], lon + Math.cos(a) * d * 1.35, lat + Math.sin(a) * d * .85, w); } }
    ring(r * .18, Math.max(2, Math.round(4 * r)), core, 1.7); ring(r * .5, Math.round(7 * r), mid, 1.8); ring(r, Math.round(10 * r), out2, 1.5);
    if(o.affaires) for(var k = 0; k < 4; k++) put('tour_bureaux', o.affaires[0] + (k % 2) * .16, o.affaires[1] + Math.floor(k / 2) * .1, 1.6);
  }
  city(2.35, 48.85, 1.25, { affaires:[2.02, 49.0] }); /* Paris : La Défense en haut à gauche */
  city(4.85, 45.76, .8, {}); city(5.38, 43.31, .8, { core:['petit_immeuble', 'boulangerie', 'maison_pierre'] }); city(-0.57, 44.84, .7, {}); city(1.44, 43.6, .7, { core:['maison_pierre', 'petit_immeuble', 'boulangerie'] });
  city(3.07, 50.62, .55, { core:['petit_immeuble', 'boulangerie'] }); city(7.75, 48.57, .55, { core:['maison_pierre', 'boulangerie'] }); city(-1.55, 47.22, .55, {}); city(7.26, 43.71, .5, { core:['petit_immeuble', 'boulangerie'] }); city(3.88, 43.61, .5, {});
  city(-1.68, 48.11, .5, { core:['petit_immeuble', 'boulangerie'], out:['maison_bretonne', 'pavillon'] });
  var bzh = ['maison_bretonne', 'maison_bretonne', 'pavillon'], vil = ['maison_pierre', 'pavillon'];
  cluster(-4.45, 48.39, 3, .3, bzh); cluster(-3.4, 47.78, 3, .35, bzh); cluster(-2.75, 48.5, 3, .3, bzh); cluster(-3.0, 48.0, 2, .3, bzh);
  [[0.69,47.39],[5.04,47.32],[1.1,49.44],[1.9,47.9],[3.08,45.78],[4.03,49.26],[6.18,48.69],[0.34,46.58],[-0.36,49.18],[2.3,47.08],[4.4,44.05],[6.12,43.95],[-0.37,43.3],[1.26,45.83],[5.92,45.57],[4.9,46.3],[2.8,49.9],[0.1,45.65],[-1.15,46.16],[3.0,47.0],[5.7,47.9],[-0.55,47.47]].forEach(function(v){ cluster(v[0], v[1], 3, .3, vil); });
  [[8.74,41.92],[9.45,42.7]].forEach(function(v){ cluster(v[0], v[1], 2, .2, vil); });
  // énergie, ports, campagne (lieux réels)
  put('centrale_nucleaire', 1.58, 47.72, 3.4); put('centrale_nucleaire', 6.22, 49.41, 3.2); put('centrale_nucleaire', 4.73, 44.33, 3.2); put('centrale_nucleaire', 5.27, 45.8, 3);
  put('eolienne', 1.75, 48.25, 2.2); put('eolienne', 2.1, 48.15, 2.2); put('eolienne', 2.9, 50.2, 2.2); put('eolienne', 3.3, 50.05, 2.2); put('eolienne', -3.2, 48.25, 2.1);
  put('eolien_mer', -2.62, 47.05, 2.4); put('eolien_mer', -2.4, 46.9, 2.4); put('eolien_mer', 0.25, 49.98, 2.4);
  put('solaire', 5.25, 43.95, 3.2); put('barrage', 4.78, 44.72, 3); put('grue_portuaire', 0.12, 49.47, 2.6); put('grue_portuaire', 4.88, 43.42, 2.4);
  put('porte_conteneurs', -0.25, 49.75, 4.6); put('bateau_peche', -4.9, 47.7, 2.6);
  put('ble', 1.6, 48.05, 4.2); put('ble', 3.5, 49.3, 3.8); put('ble', 0.6, 46.3, 3.4); put('vignes', -0.25, 44.98, 3.4); put('vignes', 4.75, 47.05, 3.2); put('vignes', 4.0, 49.05, 3.2);
  put('vache', -0.7, 49.0, 1.8); put('vache', 2.75, 45.35, 1.8); put('tracteur', 1.3, 48.3, 1.7); put('serre', -1.4, 47.0, 2.2); put('usine', 6.05, 48.05, 2.8); put('usine', 3.2, 50.4, 2.6);
  // relief et littoral (sprites Recraft)
  // montagnes : massifs en vue isométrique du dessus, sans socle ; chacun placé une fois
  /* Massif central, Jura, Vosges : quelques montagnes basses sans neige, tailles variées */
  put('mt_basse', 3.65, 44.45, 2.7, 1); put('montagnes_douces', 2.2, 45.7, 2.2);
  put('mt_basse', 5.95, 46.45, 2.8); put('mt_basse', 6.35, 46.95, 2.4, 1); /* Jura */
  put('mt_basse', 7.0, 48.35, 2.8, 1); put('mt_basse', 6.9, 47.95, 2.4); /* Vosges */
  put('montagnes_douces', 5.7, 46.15, 2.1, 1); put('mt_basse', 6.6, 47.25, 2.2); /* Jura (suite) */
  put('mt_basse', 6.1, 46.7, 2.2); put('montagnes_douces', 5.85, 46.6, 2, 1); put('mt_basse', 6.45, 47.1, 2.1, 1); /* Jura (plus) */
  put('mt_neige', 9.05, 42.25, 3.4); put('mt_basse', 9.15, 41.9, 2.8, 1); put('mt_basse', 8.95, 42.55, 2.6); put('sapins', 9.3, 42.05, 1.6, 0, 1, 0, 1); /* Corse */
  put('montagnes_douces', 7.1, 48.65, 2.1); put('mt_basse', 6.75, 48.15, 2.1, 1); /* Vosges (suite) */
  put('lac', 6.17, 45.86, 1.9); /* lac d'Annecy */
  put('massif_alpes_a', 6.5, 45.0, 15); put('mt_neige', 6.85, 44.42, 3.4); put('mt_basse', 6.45, 44.3, 2.9, 1); put('mt_basse', 7.15, 44.2, 2.7); put('mt_basse', 6.2, 44.62, 2.9); put('montagnes_douces', 6.6, 44.45, 2.6, 1); put('mt_basse', 5.9, 44.8, 2.6, 1); put('mt_basse', 6.55, 44.78, 2.8); /* sous les Alpes */ put('pavillon', 2.56, 44.42, 2); put('maison_pierre', 2.4, 44.32, 2); put('pavillon', 2.62, 44.27, 2, 1); /* Rodez */ put('montagnes_douces', 6.55, 44.15, 2.6); put('mt_basse', 6.3, 44.55, 2.6, 1); /* Alpes du Sud, le long de la frontière */ put('massif_central', 2.9, 45.15, 11); /* Alpes : chaîne nord-sud le long de la frontière */
  put('chaine_pyrenees', -0.35, 42.72, 21, 1, 1.2, 3); put('chaine_pyrenees', 1.85, 42.45, 20, 1, 1.2, 3); /* Pyrénées : une chaîne sur toute la frontière */
  [[-4.78,48.42],[-1.9,49.65],[1.6,50.7],[-1.45,43.5],[-2.2,47.28]].forEach(function(l){ put('phare', l[0], l[1], 1.4); });
  put('parasols', 3.5, 43.45, 2.4); put('parasols', -1.3, 44.6, 2.2); put('parasols', 6.9, 43.55, 2.2); put('voilier', -2.6, 46.5, 1.8); put('voilier', 5.6, 42.9, 1.8); put('voilier', -1.9, 49.95, 1.8);
  put('gare', 2.45, 48.95, 2.2); put('stade', 2.3, 48.7, 2.6); put('universite', 4.95, 45.68, 2.2); put('hopital', 1.5, 43.55, 2.4); put('ferme', 0.2, 46.9, 2.4); put('ferme', 3.9, 48.1, 2.3); put('colza', 0.9, 48.65, 3); put('colza', 4.6, 49.55, 3);
  // quelques aéroports et ports (petits)
  put('aeroport', 2.55, 49.0, 3.8); put('aeroport', 1.37, 43.63, 3.4); put('aeroport', -1.61, 47.15, 3.2); put('aeroport', 5.22, 43.44, 3.2); /* Roissy, Toulouse, Nantes, Marseille */
  put('port', 0.15, 49.47, 3.6); put('porte_conteneurs', 0.0, 49.55, 3.6); put('grue_portuaire', 0.3, 49.45, 2.6); put('port', -1.48, 43.5, 3.2); put('port', 3.7, 43.4, 3.2); put('port', 2.35, 51.03, 3.4);
  put('usine_aero', 1.3, 43.66, 3.4); put('chantier_naval', -2.22, 47.27, 4.4); /* grands sites : aéronautique (Toulouse), chantiers navals (Saint-Nazaire) */
  put('dune', -0.98, 44.4, 2.8); /* petite dune du Pilat */
  for(var pi = 0; pi < 22; pi++) put('pin', -0.8 + R() * .5, 43.85 + R() * .8, 1.5 + R() * .4, R() < .5); /* pins des Landes */
  // forêts (Landes, Sologne, Vosges, Ardennes, Morvan, Bretagne, Massif central, Jura)
  [[2.0,47.55,5,.4],[7.0,48.4,5,.35],[4.75,49.85,4,.3],[4.05,47.15,4,.3],[-3.3,48.15,4,.35],[2.6,45.0,4,.4],[6.0,46.6,3,.3],[1.4,45.1,4,.4],[9.15,42.0,3,.25],[0.6,48.6,3,.3],[3.0,48.4,3,.3]].forEach(function(f){ cluster(f[0], f[1], Math.round(f[2] * 1.8), f[3] * 1.1, f[1] > 47.5 || f[0] > 5.5 ? ['arbre', 'sapins', 'arbre_automne', 'arbre', 'sapins', 'arbre_jaune'] : ['arbre', 'arbre_automne', 'arbre', 'arbre_jaune', 'sapins'], 1.4); });
  put('arbre', 5.0, 44.3, 1.7); put('arbre_jaune', 5.95, 44.5, 1.7); put('arbre_automne', 5.5, 43.75, 1.7, 1); /* Provence : arbres espacés */
  [[5.3,45.0],[5.4,45.3],[2.35,45.12],[3.45,45.1],[2.85,44.98],[-0.9,43.3],[0.2,43.22],[1.3,43.08],[2.3,42.95]].forEach(function(f, i){ put('sapins', f[0], f[1], 2, i % 2, 1, 0, 1); }); /* sapins au pied des montagnes */
  // sapins à l'est (Alsace, Lorraine, Vosges, Jura, Ardennes)
  [[7.1,48.3],[6.9,48.6],[6.6,48.0],[7.3,47.9],[6.2,46.9],[5.9,46.4],[4.7,49.8],[6.8,49.0]].forEach(function(f){ cluster(f[0], f[1], 6, .22, ['sapins', 'sapins', 'arbre'], 1.4); });
  // plus de champs et de vignes
  put('ble', 2.5, 48.35, 3.4); put('ble', 1.0, 49.2, 3.2); put('ble', 4.3, 48.5, 3.2); put('ble', -0.3, 46.6, 3); put('ble', 1.6, 43.85, 3); put('ble', 2.9, 49.75, 3);
  put('vignes', -0.6, 45.25, 3); put('vignes', 4.85, 44.5, 3); put('vignes', 3.2, 43.35, 3.2); put('vignes', 7.3, 48.15, 2.6); put('vignes', 0.4, 47.3, 2.6);
  put('vache', -1.3, 48.4, 1.6); put('vache', 3.4, 46.7, 1.6); put('serre', 4.9, 43.75, 2); put('tracteur', 3.0, 49.5, 1.6);
  /* réformes qui changent la carte : une fois adoptées, des bâtiments disparaissent ou apparaissent ; pendant le chantier, une grue sur les sites à construire */
  Object.keys(CARTE_REF).forEach(function(id){
    var c = CARTE_REF[id], st = carteEtat(id); if(!st) return;
    if(st === 'done'){ if(c.retirer) out = out.filter(function(o){ return c.retirer.indexOf(o[0]) < 0; }); (c.ajouter || []).forEach(function(a){ put(a[0], a[1], a[2], a[3] || SPR_W[a[0]] || 2.4); }); }
    else (c.ajouter || []).forEach(function(a){ put('grue_chantier', a[1], a[2], 2.2); });
  });
  return out;
}
var DENS = .65; /* densité des villes et villages (carte moins chargée) */
var CARTE_REF = {
  sortie_nucleaire: { retirer:['centrale_nucleaire'], ajouter:[['eolienne', 1.95, 47.95], ['eolienne', 5.05, 45.55], ['solaire', 4.35, 44.6, 2.4]] },
  relance_nucleaire: { ajouter:[['centrale_nucleaire', 0.75, 49.8], ['centrale_nucleaire', 4.85, 45.95]] },
  peines_planchers: { ajouter:[['prison', 2.85, 48.55], ['prison', 5.05, 43.65]] },
  renovation_massive: { ajouter:[['maison_isolation', 3.15, 50.35], ['maison_isolation', -1.35, 47.25], ['maison_isolation', 4.95, 46.85]] },
  vols_courts_train: { ajouter:[['gare', 2.6, 46.6, 2.6]] },
  taxe_kerosene_train: { ajouter:[['gare', 0.35, 46.2, 2.6]] },
  /* ajouts plus symboliques */
  service_militaire: { ajouter:[['soldats', 2.1, 48.2, 2.2], ['soldats', 5.6, 47.3, 2.2]] },
  sortie_pesticides: { ajouter:[['ferme', 0.9, 47.6, 2.4], ['ferme', 3.6, 49.1, 2.4]] },
  leasing_electrique: { ajouter:[['voiture', 1.9, 47.0, 1.5], ['voiture', 4.3, 45.4, 1.5]] },
  regulation_installation_medecins: { ajouter:[['pharmacie', 2.2, 46.1, 1.8], ['pharmacie', 0.2, 45.4, 1.8]] },
  revalorisation_enseignants: { ajouter:[['ecole', 3.4, 47.6, 2.2], ['ecole', -0.8, 47.9, 2.2]] },
  sortie_marche_electricite: { ajouter:[['pylone_ht', 2.9, 47.2, 2.4], ['pylone_ht', 5.4, 46.3, 2.4]] },
  tva_energie_5_5: { ajouter:[['solaire', 1.2, 45.1, 2.2]] }
};
function carteEtat(id){ var r = (typeof S !== 'undefined' && S && S.reforms) ? S.reforms[id] : null; return r && (r.status === 'done' || r.status === 'en_cours') ? r.status : ''; }
function carteSig(){ return Object.keys(CARTE_REF).map(carteEtat).join(''); }
/* positions calculées une fois le masque terre/mer prêt (unités du plateau) */
function sprItems(){
  var items = [];
  sprList().forEach(function(s){
    var p = P(s[1], s[2]), t = terrainU(p[0], p[1]), marine = !!SPR_MARINE[s[0]];
    if(MASK && SPR_MARINE[s[0]] !== 2 && !/^(chaine|lac)/.test(s[0]) && (marine ? t !== 0 : t !== 1)) return;
    items.push({ id:s[0], x0:s[1], y0:s[2], x:p[0], y:p[1], w:s[3], h:s[3] * (SPR_AR[s[0]] || 1) * (s[5] || 1), f:s[4], sy:s[5] || 1, r:s[6] || 0, pied:s[7] || 0 });
  });
  /* pas de superposition : les éléments placés d'abord (monuments, villes, relief) gardent leur place */
  var PRIO = { lac:0, massif_alpes_a:-1, massif_alpes_b:-1, mt_neige:0, massif_central:-1, chaine_alpes:0, chaine_pyrenees:0, mt_haute:0, mt_basse:0, arete:0, pic_sapins:0, massif_iso:0, chaine_iso:0, massif_alpes_nord:0, massif_alpes_sud:0, massif_pyrenees:0, pic_alpin:0, massif_pics:0, massif:0, pic_neige:0, massif_brun:0, pic_brun:0, montagnes_douces:0, colline:0, tour_eiffel:0, arc_triomphe:0, fourviere:0, basilique_marseille:0, cathedrale_strasbourg:0, beffroi_lille:0, bourse_bordeaux:0, mont_saint_michel:0, aeroport:0, port:0, usine_aero:0, chantier_naval:0, dune:0 };
  items = items.map(function(it, k){ it.k = k; return it; }).sort(function(a, b){ return ((PRIO[a.id] !== undefined ? PRIO[a.id] : 1) - (PRIO[b.id] !== undefined ? PRIO[b.id] : 1)) || a.k - b.k; });
  var kept = [];
  items.forEach(function(it){
    var bx = [it.x - it.w * .42, it.y - it.h * .55, it.x + it.w * .42, it.y + it.h * .08];
    if([[2.54, 51.01], [-4.2, 48.27]].some(function(q){ return /pavillon|maison/.test(it.id) && Math.abs(it.x0 - q[0]) < .08 && Math.abs(it.y0 - q[1]) < .08; })) return; /* maisons sur le rivage (Dunkerque, Finistère) */
    if(!SPR_MARINE[it.id] && it.id !== 'dune' && ((it.x0 > -1.3 && it.x0 < -0.95 && it.y0 > 44.55 && it.y0 < 44.78) || (it.x0 > -1.05 && it.x0 < -0.55 && it.y0 > 45.05 && it.y0 < 45.65))) return;
    if(MASK && !SPR_MARINE[it.id] && !/^(chaine|dune)/.test(it.id) && (terrainU(bx[0] - it.w * .3, it.y) === 0 || terrainU(bx[2] + it.w * .3, it.y) === 0 || terrainU(it.x, it.y + it.h * .35) === 0 || terrainU(it.x, it.y - it.h * .3) === 0)) return; /* marge : ni pieds dans l'eau ni collé au rivage */ /* pieds dans l'eau : non */
    var MTN = false;
    var clash = !it.pied && kept.some(function(k){ if(BIG_SPR.test(k.id) && !BIG_SPR.test(it.id)){ var m = (k.b[2] - k.b[0]) * .3; /* rien sous un grand massif : sa vraie image déborde largement de sa boîte */ if(bx[2] > k.b[0] - m && bx[0] < k.b[2] + m && bx[3] > k.b[1] - m && bx[1] < k.b[3] + m) return true; } if(MTN && /massif|pic|montagne|colline/.test(k.id)) return false; var ix = Math.min(bx[2], k.b[2]) - Math.max(bx[0], k.b[0]), iy = Math.min(bx[3], k.b[3]) - Math.max(bx[1], k.b[1]);
      return ix > 0 && iy > 0 && ((BIG_SPR.test(k.id) !== BIG_SPR.test(it.id)) || ix * iy > .35 * Math.min((bx[2] - bx[0]) * (bx[3] - bx[1]), (k.b[2] - k.b[0]) * (k.b[3] - k.b[1]))); });
    if(!clash && !it.pied && /^(pin|arbre|sapins)/.test(it.id)) clash = kept.some(function(k){ if(!/^(mt_|montagnes|massif|chaine|pin|arbre|sapins)/.test(k.id)) return false; var ix = Math.min(bx[2], k.b[2]) - Math.max(bx[0], k.b[0]), iy = Math.min(bx[3], k.b[3]) - Math.max(bx[1], k.b[1]); return ix > 0 && iy > 0 && ix * iy > (/^(pin|arbre|sapins)/.test(k.id) ? .15 : it.id === 'sapins' ? .3 : 0) * (bx[2] - bx[0]) * (bx[3] - bx[1]); });
    if(!clash && MASK && /pavillon|maison|immeuble|boulangerie|haussmann|ferme/.test(it.id)){ var mx = it.w * 1.3, my = it.h * 1.1; if(terrainU(it.x - mx, it.y) === 0 || terrainU(it.x + mx, it.y) === 0 || terrainU(it.x, it.y + my) === 0 || terrainU(it.x, it.y - my) === 0) clash = true; } /* maisons : loin du rivage */
    if(!clash){ it.b = bx; kept.push(it); }
  });
  /* maison qui touche un arbre : toujours derrière (sa base au-dessus du pied de l'arbre, l'arbre dessiné devant) */
  for(var pass = 0; pass < 3; pass++) kept.forEach(function(h){ if(!/pavillon|maison|immeuble|boulangerie|haussmann|ferme/.test(h.id)) return;
    kept.forEach(function(t){ if(!/^(pin|arbre|sapins)/.test(t.id)) return; var b = h.b, c = t.b;
      if(b[0] < c[2] && b[2] > c[0] && b[1] < c[3] && b[3] > c[1] && h.y > t.y - t.h * .3){ var d = t.y - t.h * .35 - h.y; h.y += d; h.b = [b[0], b[1] + d, b[2], b[3] + d]; } }); });
  items = kept;
  items.sort(function(a, b){ return a.y - b.y; });
  return items;
}
/* Performance : les sprites sont « cuits » dans l'image du décor (une seule image au lieu de ~250 balises).
   Il faut leurs données (data URI) car une image SVG ne charge pas de fichiers externes.
   Si le chargement échoue (ex. page ouverte en file://), on garde la couche HTML #sprl. */
var SPR_DATA = {}, SPR_NUIT = {}, SPR_READY = false, SPR_LOADING = false, MT_NUIT = /^(mt_|chaine|massif|montagnes|arbre|pin|sapins|ble|colza|vignes|serre|ferme|dune|lac|vache|tracteur|solaire|parasols)/;
/* nuit : copie assombrie des reliefs, pleine résolution (un filtre SVG rendait l'image floue) */
function sprNuit(id){
  return new Promise(function(ok){ var im = new Image(); im.onload = function(){ try{
    var c = document.createElement('canvas'); c.width = im.naturalWidth; c.height = im.naturalHeight; var x = c.getContext('2d');
    x.drawImage(im, 0, 0); x.globalCompositeOperation = 'source-atop'; x.fillStyle = 'rgba(20,24,58,.42)'; x.fillRect(0, 0, c.width, c.height);
    SPR_NUIT[id] = c.toDataURL('image/webp', .9); }catch(e){} ok(); }; im.onerror = ok; im.src = SPR_DATA[id]; });
}
function loadSprData(){
  if(SPR_LOADING || SPR_READY || !window.fetch || !window.FileReader) return; SPR_LOADING = true;
  var ids = []; sprList().forEach(function(s){ if(ids.indexOf(s[0]) < 0) ids.push(s[0]); });
  Promise.all(ids.map(function(id){
    return fetch(SPR_DIR + id + '.webp').then(function(r){ if(!r.ok) throw new Error(id); return r.blob(); }).then(function(b){
      return new Promise(function(ok, ko){ var fr = new FileReader(); fr.onload = function(){ SPR_DATA[id] = fr.result; ok(); }; fr.onerror = ko; fr.readAsDataURL(b); });
    });
  })).then(function(){ return Promise.all(ids.filter(function(id){ return MT_NUIT.test(id); }).map(sprNuit)).catch(function(){}); }).then(function(){ SPR_READY = true; var l = $('sprl'); if(l) l.innerHTML = ''; BAKE.key = ''; BAKE.cache = {}; bakeDecor(); }).catch(function(){ SPR_LOADING = false; });
}
function sprSvg(){
  if(!SPR_READY) return '';
  var used = {}, items = sprItems(), defs = '', uses = '';
  var nuit = document.documentElement.getAttribute('data-theme') === 'dark' || ($('app') && $('app').classList.contains('is-night'));
  var big = [];
  items = items.filter(function(it){ if(BIG_SPR.test(it.id) || it.pied){ big.push(it); return false; } return true; });
  big.sort(function(a, b){ return a.y - b.y; });
  sprBig(big, nuit);
  items.forEach(function(it){
    if(!used[it.id]){ used[it.id] = 1; defs += '<image id="sp_' + it.id + '" href="' + (nuit && SPR_NUIT[it.id] || SPR_DATA[it.id]) + '" width="1" height="' + (SPR_AR[it.id] || 1) + '" preserveAspectRatio="none"/>'; }
    uses += '<use href="#sp_' + it.id + '" transform="' + (it.r ? 'rotate(' + it.r + ' ' + F(it.x) + ' ' + F(it.y) + ') ' : '') + 'translate(' + F(it.f ? it.x + it.w / 2 : it.x - it.w / 2) + ',' + F(it.y - it.h * .86) + ') scale(' + (it.f ? '-' : '') + F(it.w) + ',' + F(it.w * (it.sy || 1)) + ')"/>';
  });
  return '<defs>' + defs + '</defs><g>' + uses + '</g>';
}
/* grands reliefs : images à part (pas cuites dans le décor) pour rester nets au zoom */
var BIG_SPR = /^(massif_alpes|massif_central|chaine_pyrenees)/;
function sprNuitActive(){ return document.documentElement.getAttribute('data-theme') === 'dark' || ($('app') && $('app').classList.contains('is-night')); }
function sprBigRefresh(){ if(!SPR_READY) return; sprBig(sprItems().filter(function(it){ return BIG_SPR.test(it.id) || it.pied; }).sort(function(a, b){ return a.y - b.y; }), sprNuitActive()); }
function sprBig(list, nuit){
  var l = $('sprl'); if(!l || typeof U2P !== 'function') return;
  l.innerHTML = list.map(function(it){
    var w = it.w * VBK, h = it.h * VBK, q = U2P(it.x, it.y), src = nuit && SPR_NUIT[it.id] || SPR_DIR + it.id + '.webp';
    if(it.pied) return '<img src="' + src + '" alt="" decoding="async" style="left:' + F(q[0] - w / 2) + 'px;top:' + F(q[1] - h * .86) + 'px;width:' + F(w) + 'px;height:' + F(h) + 'px;' + (it.f ? 'transform:scaleX(-1)' : '') + '">'; /* sapins du pied : devant le massif */
    var ombre = /^chaine/.test(it.id) ? '' : '<i class="relief-pied" style="left:' + F(q[0] - w * .4) + 'px;top:' + F(q[1] - h * .2) + 'px;width:' + F(w * .8) + 'px;height:' + F(h * .26) + 'px"></i>'; /* embase verte (pas sous les Pyrénées, posées sur la côte) */ /* embase verte */
    return ombre + '<img src="' + src + '" alt="" decoding="async" style="left:' + F(q[0] - w / 2) + 'px;top:' + F(q[1] - h * .86) + 'px;width:' + F(w) + 'px;height:' + F(h) + 'px;transform-origin:50% 86%;transform:' + (it.r ? 'rotate(' + it.r + 'deg) ' : '') + (it.f ? 'scaleX(-1)' : 'none') + '">';
  }).join('');
}
function buildSprites(){
  var l = $('sprl'); if(!l) return; try{ buildBirds(); }catch(e){}
  if(SPR_READY) return;
  loadSprData();
  l.innerHTML = sprItems().map(function(it){
    var w = it.w * VBK, h = it.h * VBK, q = U2P(it.x, it.y);
    return '<img src="' + SPR_DIR + it.id + '.webp" alt="" decoding="async" loading="lazy" style="left:' + F(q[0] - w / 2) + 'px;top:' + F(q[1] - h * .86) + 'px;width:' + F(w) + 'px;height:' + F(h) + 'px' + (it.f ? ';transform:scaleX(-1)' : '') + '">';
  }).join('');
}
/* Animation sur la terre : de petits vols d'oiseaux traversent la carte de temps en temps (trajectoire droite, battement d'ailes). */
function buildBirds(){
  var ml = $('movers'); if(!ml || typeof U2P !== 'function') return;
  ml.querySelectorAll('.birds,.nuage').forEach(function(e){ e.remove(); });
  /* petits nuages qui passent lentement, d'ouest en est */
  [[[-6, 49.2], [10, 48.4], 0, 1.2], [[-6, 46.2], [10, 45.6], 22, .9], [[-6, 43.8], [10, 44.6], 45, 1]].forEach(function(v){
    var a = P(v[0][0], v[0][1]), b = P(v[1][0], v[1][1]), qa = U2P(a[0], a[1]), qb = U2P(b[0], b[1]), w = VBK * 14 * v[3];
    var el = document.createElement('div'); el.className = 'nuage';
    el.style.setProperty('--x0', F(qa[0]) + 'px'); el.style.setProperty('--y0', F(qa[1]) + 'px'); el.style.setProperty('--x1', F(qb[0]) + 'px'); el.style.setProperty('--y1', F(qb[1]) + 'px');
    el.style.animationDelay = '-' + v[2] + 's'; el.style.width = F(w) + 'px';
    el.innerHTML = cloudSvg(rng(hash('n' + v[2])), '#FFFFFF');
    ml.appendChild(el);
  });
  [[[-2, 47.5], [8, 49.5], 0], [[6, 43.5], [-1, 46.8], 14], [[1, 50.5], [4.5, 44.5], 27]].forEach(function(v){
    var a = P(v[0][0], v[0][1]), b = P(v[1][0], v[1][1]), qa = U2P(a[0], a[1]), qb = U2P(b[0], b[1]), s = VBK * .9;
    var el = document.createElement('div'); el.className = 'birds';
    el.style.setProperty('--x0', F(qa[0]) + 'px'); el.style.setProperty('--y0', F(qa[1]) + 'px'); el.style.setProperty('--x1', F(qb[0]) + 'px'); el.style.setProperty('--y1', F(qb[1]) + 'px');
    el.style.animationDelay = v[2] + 's'; el.style.width = F(s * 5) + 'px';
    var flip = qb[0] < qa[0] ? ' style="transform:scaleX(-1)"' : '';
    el.innerHTML = '<svg viewBox="0 0 50 24"' + flip + '>' + [[4, 12], [16, 6], [16, 18], [28, 0], [28, 22]].map(function(p, i){ return '<path class="wing" style="animation-delay:-' + (i * .13) + 's" d="M' + p[0] + ',' + (p[1] + 1) + 'q3,-3 6,0q3,-3 6,0" fill="none" stroke="#2F4A52" stroke-width="1.6" stroke-linecap="round"/>'; }).join('') + '</svg>';
    ml.appendChild(el);
  });
}
/* garde-fou : dès que le thème ou la nuit change, les grands reliefs se remettent à jour (jour ⇄ nuit) */
(function(){
  var last = null;
  function chk(){ var n = sprNuitActive(); if(n !== last){ last = n; sprBigRefresh(); } }
  try{
    var mo = new MutationObserver(chk);
    mo.observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] });
    if($('app')) mo.observe($('app'), { attributes:true, attributeFilter:['class'] });
  }catch(e){}
})();
