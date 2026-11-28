var MT_V2 = typeof location !== 'undefined' && /[?&]v2\b/.test(location.search); /* aperçu des nouvelles montagnes : ?v2 */
'use strict';
/* =========================================================
   Sprites (bibliothèque Recraft, assets/sprites/*.webp)
   Couche HTML #sprl au-dessus du décor cuit : monuments, maisons,
   énergie, fermes, ports. Positions en lon/lat ; vérif terre/mer.
   ========================================================= */
var SPR_DIR = 'assets/sprites/';
var SPR_AR = {"rocher_cote":0.946,"mt2_vosges":0.991,"mt2_jura":1.009,"mt2_alpes":1.474,"mt2_central":0.831,"mt2_pyrenees":0.402,"mt2_corse":1.228,"epr":0.785,"personne_1":2.871,"personne_2":2.027,"personne_3":2.542,"personne_4":3.297,"aeroport":0.968,"secheresse":0.628,"barrage_agricole":0.743,"tempete":0.998,"tribunal":0.948,"mine":1.132,"enfant_1":2.484,"enfant_2":3.15,"enfant_3":2.614,"enfant_4":2.174,"char_combat":0.782,"missile":1.01,"chien":1.24,"chat":0.913,"policiers":1.307,"eleves":1.012,"batiment_ue":1.266,"commerce":0.952,"maison_alsace":1.156,"mas_provence":0.845,"chalet":1.017,"maison_basque":1.141,"usine_moderne":1.181,"palais_parlement":1.258,"caserne":0.925,"file_attente":0.995,"cabinet_medical":0.833,"drapeau_ue":1.887,"mt_neige":0.494,"massif_alpes_b":0.803,"massif_alpes_a":0.871,"massif_central":0.609,"aeroport":0.926,"ambulance":0.71,"antenne":1.954,"arbre":1.5,"arbre_automne":1.322,"arbre_jaune":1.322,"arc_triomphe":1.246,"arete":0.887,"avion":0.646,"avion_militaire":0.676,"barrage":0.801,"barriere":0.629,"basilique_marseille":1.51,"bateau_migrants":0.8,"bateau_peche":0.88,"beffroi_lille":2.989,"billets":1.008,"ble":0.696,"boulangerie":1.087,"bourse_bordeaux":0.774,"bus":0.877,"caddie":1.044,"cadenas":1.292,"camion":0.882,"camion_citerne":0.868,"camping_car":0.836,"canadair":0.819,"cathedrale_strasbourg":2.068,"centrale_charbon":1.132,"centrale_gaz":1.341,"centrale_nucleaire":1.109,"chaine_alpes":3.258,"chaine_iso":0.5,"chaine_pyrenees":0.292,"chantier_epr":1.462,"chantier_naval":0.975,"char":0.814,"colis":1.117,"colline":1.201,"colza":0.611,"commissariat":0.974,"conteneurs":1.593,"creche":0.649,"cyberattaque":1.098,"cyclone":1.029,"drapeau":2.296,"drone":0.744,"dune":0.747,"eclair":2.102,"ecole":1.196,"ehpad":0.926,"entrepot":0.759,"eolien_mer":2.294,"eolienne":2.349,"facture":1.92,"ferme":0.899,"ferry":0.941,"feu":0.946,"foule":1.007,"fourviere":1.018,"fregate":0.705,"gare":0.81,"goutte":1.399,"grue_chantier":1.04,"grue_portuaire":1.196,"haussmann":1.848,"hemicycle":1.036,"hopital":1.401,"immeuble":1.587,"lac":0.781,"logo":0.795,"loupe":1.352,"mairie":0.962,"maison_bretonne":1.278,"maison_isolation":1.101,"maison_pierre":1.143,"manifestation":0.867,"maree_noire":0.704,"mascotte":1.22,"massif":0.73,"massif_alpes_nord":0.895,"massif_alpes_sud":0.706,"massif_brun":0.73,"massif_iso":0.691,"massif_pics":1.127,"massif_pyrenees":0.628,"metro":0.863,"mine":0.941,"moissonneuse":0.781,"mont_saint_michel":1.465,"montagne":1.357,"montagnes":1.13,"montagnes_douces":0.946,"mt_basse":0.494,"mt_haute":1.03,"nuage_neige":1.477,"nuage_orage":1.181,"panneau":1.593,"parasols":0.899,"pavillon":1.014,"peniche":0.808,"personnage":3.169,"petit_immeuble":1.515,"phare":1.403,"pharmacie":1.0,"pic_alpin":0.865,"pic_brun":1.028,"pic_neige":1.029,"pic_sapins":0.894,"pieces":0.76,"pin":1.857,"piscine":0.632,"pluie":1.299,"pompiers":0.924,"port":1.0,"porte_conteneurs":0.783,"poste_frontiere":1.096,"prison":0.989,"puits_petrole":1.111,"pylone_ht":2.166,"sapins":1.051,"satellite":0.925,"segment_rails":0.568,"serre":0.891,"smog":0.874,"soignants":1.596,"solaire":0.668,"soldats":1.059,"soleil_canicule":0.69,"stade":0.891,"station_service":0.953,"supermarche":0.921,"tente_camping":0.848,"terminal_gnl":0.848,"tgv":0.586,"tgv_seul":0.692,"thermometre":2.905,"tour_bureaux":1.728,"tour_eiffel":1.883,"tracteur":0.869,"train_fret":0.724,"tram":0.87,"tribunal":1.022,"universite":1.057,"urne":1.237,"usine":0.965,"usine_aero":0.891,"usine_fermee":1.1,"vache":0.866,"vague_crue":0.845,"valise":1.59,"velo":0.924,"velodrome":0.747,"vignes":0.689,"voilier":1.192,"voiture":0.858,"voiture_police":0.772};
/* objets d'événement (OBJ) dessinés par un sprite de la bibliothèque */
var OBJ_SPR = { tracteur:'tracteur', camion:'camion', voiture:'voiture', train:'tgv_seul', tgv:'tgv_seul', avion:'avion', cargo:'porte_conteneurs', bateau_peche:'bateau_peche',
  eolienne:'eolienne', eolienne_mer:'eolien_mer', centrale_nucleaire:'centrale_nucleaire', centrale_gaz:'centrale_gaz', panneaux_solaires:'solaire', barrage:'barrage', pylone:'pylone_ht',
  maison:'pavillon', immeuble:'immeuble', usine:'usine', chantier_grue:'grue_chantier', ecole:'ecole', hopital:'hopital', mairie:'mairie', parlement:'palais_parlement', port:'grue_portuaire',
  ambulance:'ambulance', voiture_police:'voiture_police', bus:'bus', velo:'velo', ferry:'ferry', foule:'foule', manifestants:'manifestation', commissariat:'commissariat', prison:'prison', boulangerie:'boulangerie', commerce:'commerce', supermarche:'supermarche', entrepot:'entrepot', aeroport:'aeroport', ferme:'ferme', cabinet_medical:'cabinet_medical', antenne:'antenne', satellite:'satellite', cyberattaque:'cyberattaque', conteneurs:'conteneurs', secheresse:'secheresse',
  champ:'ble', troupeau:'vache', foret:'arbre', incendie:'feu', inondation:'vague_crue', canicule:'soleil_canicule', neige:'nuage_neige', orage:'nuage_orage', tempete:'tempete', pieces:'pieces',
  colis:'colis', usine_fermee:'usine_fermee', station_service:'station_service', douane:'poste_frontiere', frontiere:'poste_frontiere', barrage_agricole:'barrage_agricole', barriere:'barriere', personnage:'personnage', file_attente:'file_attente', soignants:'soignants', policiers:'policiers', eleves:'eleves', batiment_ue:'batiment_ue', drapeau_ue:'drapeau_ue', char:'char_combat', missile:'missile', chien:'chien', chat:'chat', tribunal:'tribunal', mine:'mine', loupe:'loupe', cadenas:'cadenas' };
/* largeur naturelle des sprites, en unités du plateau (cohérente avec le décor) */
var SPR_W = { tracteur:1.7, camion:2.2, voiture:1.5, train_fret:4, tgv_seul:5, avion:3, porte_conteneurs:4.6, bateau_peche:2.4, eolienne:2.2, eolien_mer:2.4, centrale_nucleaire:3.4, centrale_gaz:2.8,
  solaire:3, barrage:3.4, pylone_ht:2, pavillon:2, immeuble:2.2, usine:2.8, grue_chantier:2.6, ecole:2.6, hopital:2.8, mairie:2.6, hemicycle:3.2, grue_portuaire:2.6, ble:3.2, vache:1.5, arbre:1.5,
  feu:2.6, vague_crue:3, soleil_canicule:2.8, nuage_neige:2.8, nuage_orage:2.8, pieces:1.8, ambulance:1.7, pompiers:2, voiture_police:1.5, bus:2.4, manifestation:3, foule:2.6, char:2.2, fregate:4,
  bateau_migrants:2.4, maree_noire:4.4, centrale_charbon:3, phare:1.6, voilier:1.8, ferry:4, drapeau:1.4, panneau:1.6, loupe:1.6, cadenas:1.3, colis:1.3, usine_fermee:2.8, station_service:2.4, barriere:2.2, personnage:0.9, soignants:1.4, poste_frontiere:2.4, gare:3, urne:1.4, supermarche:2.8, entrepot:2.8, boulangerie:2, ferme:2.6, pharmacie:2, antenne:1.6, satellite:2, cyberattaque:2, conteneurs:2.6, thermometre:1.4, commissariat:2.6, prison:3, velo:1.2, policiers:1.5, eleves:1.7, batiment_ue:2.8, commerce:2, maison_alsace:2, mas_provence:2.3, chalet:2, maison_basque:2, usine_moderne:2.8, palais_parlement:3.2, caserne:3.2, file_attente:2.2, cabinet_medical:2, drapeau_ue:1.3, char_combat:2.2, missile:1.8, chien:1.1, chat:1, tribunal:2.6, mine:2.6, personne_1:1, personne_2:1, personne_3:1, personne_4:1, aeroport:2.8, secheresse:2.4, barrage_agricole:2.6, tempete:2.2 };
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
  put('beffroi_lille', 3.07, 50.62, 2); put('bourse_bordeaux', -0.57, 44.86, 3.8); put('mont_saint_michel', MT_V2 ? -2.15 : -1.75, MT_V2 ? 48.76 : 48.82, 3);
  // villes et villages : des maisons partout
  /* ville structurée : centre (haussmann, commerces), couronne (immeubles), périphérie (pavillons) ; quartier d'affaires optionnel */
  function city(lon, lat, r, o){
    o = o || {}; var core = o.core || ['haussmann', 'haussmann', 'boulangerie'], mid = o.mid || ['petit_immeuble', 'immeuble'], out2 = o.out || ['pavillon', 'pavillon', 'maison_pierre'];
    function ring(rad, n, kinds, w){ n = Math.max(1, Math.round(n * DENS)); for(var i = 0; i < n; i++){ var a = i / n * 6.283 + R() * .5, d = rad * (.75 + R() * .5); put(kinds[Math.floor(R() * kinds.length)], lon + Math.cos(a) * d * 1.35, lat + Math.sin(a) * d * .85, w); } }
    /* cœur : îlots d'immeubles rangés en grille décalée (sans chevauchement), quelques cours vides ; puis une couronne de maisons, puis les champs */
    var N = Math.max(2, Math.round(2.4 * r)), DX = .26, DY = .15;
    for(var j = -N; j <= N; j++) for(var i = -N; i <= N; i++){
      var q = (i * i + j * j) / (N * N + .01); if(q > 1 || (q > .15 && R() < .15)) continue;
      var kinds = q < .35 ? core.concat(mid) : mid.concat(['boulangerie']);
      put(kinds[Math.floor(R() * kinds.length)], lon + (i + (j & 1) * .5) * DX, lat + j * DY, 1.5);
    }
    ring(r * .62, Math.round(7 * r), out2, 1.4);
    if(r >= .5) ring(r * 1.05, Math.round(6 * r), ['ble', 'colza', 'ble'], 2.4);
    if(o.affaires) for(var k = 0; k < 4; k++) put('tour_bureaux', o.affaires[0] + (k % 2) * .16, o.affaires[1] + Math.floor(k / 2) * .1, 1.6);
  }
  city(2.35, 48.85, 1.25, { affaires:[2.02, 49.0] }); /* Paris : La Défense en haut à gauche */
  city(4.85, 45.76, .8, {}); city(5.38, 43.31, .8, { core:['petit_immeuble', 'boulangerie', 'maison_pierre'], out:['mas_provence', 'pavillon', 'mas_provence'] }); city(-0.57, 44.84, .7, {}); city(1.44, 43.6, .7, { core:['maison_pierre', 'petit_immeuble', 'boulangerie'] });
  city(3.07, 50.62, .55, { core:['petit_immeuble', 'boulangerie'] }); city(7.75, 48.57, .55, { core:['maison_alsace', 'boulangerie'], out:['maison_alsace', 'pavillon'] }); city(-1.55, 47.22, .55, {}); city(7.26, 43.71, .5, { core:['petit_immeuble', 'boulangerie'], out:['mas_provence', 'pavillon'] }); city(3.88, 43.61, .5, {});
  city(-1.68, 48.11, .5, { core:['petit_immeuble', 'boulangerie'], out:['maison_bretonne', 'pavillon'] });
  var bzh = ['maison_bretonne', 'maison_bretonne', 'pavillon'], vil = ['maison_pierre', 'pavillon'];
  cluster(-4.45, 48.39, 3, .3, bzh); cluster(-3.4, 47.78, 3, .35, bzh); cluster(-2.75, 48.5, 3, .3, bzh); cluster(-3.0, 48.0, 2, .3, bzh);
  [[0.69,47.39],[5.04,47.32],[1.1,49.44],[1.9,47.9],[3.08,45.78],[4.03,49.26],[6.18,48.69],[0.34,46.58],[-0.36,49.18],[2.3,47.08],[4.4,44.05],[6.12,43.95],[-0.37,43.3],[1.26,45.83],[5.92,45.57],[4.9,46.3],[2.8,49.9],[0.1,45.65],[-1.15,46.16],[3.0,47.0],[5.7,47.9],[-0.55,47.47]].forEach(function(v){ cluster(v[0], v[1], 3, .3, vil); });
  [[8.74,41.92],[9.45,42.7]].forEach(function(v){ cluster(v[0], v[1], 2, .2, vil); });
  cluster(-1.2, 43.3, 3, .2, ['maison_basque', 'maison_basque', 'pavillon']); /* Pays basque */ put('chalet', 6.15, 46.1, 2); put('chalet', 5.75, 45.25, 2, 1); put('chalet', 6.9, 46.3, 2); cluster(7.0, 48.25, 2, .2, ['maison_alsace']); /* Savoie, Alsace */ put('mas_provence', 4.6, 43.7, 2.2); put('mas_provence', 5.6, 43.55, 2.2, 1); /* Provence */
  put('palais_parlement', 3.0, 48.5, 3); put('caserne', 4.35, 49.05, 3); put('usine_moderne', 5.2, 46.2, 2.6); /* institutions, défense, industrie */
  // énergie, ports, campagne (lieux réels)
  put('epr', -1.6, 49.47, 2.8); /* EPR de Flamanville */ put('centrale_nucleaire', 1.58, 47.72, 3.4); put('centrale_nucleaire', 6.22, 49.41, 3.2); put('centrale_nucleaire', 4.73, 44.33, 3.2); put('centrale_nucleaire', 5.27, 45.8, 3);
  put('eolienne', 1.45, 48.0, 2.2); put('eolienne', 1.8, 47.9, 2.2); put('eolienne', 2.9, 50.2, 2.2); put('eolienne', 3.3, 50.05, 2.2); put('eolienne', -3.2, 48.25, 2.1);
  put('eolien_mer', -2.62, 47.05, 2.4); put('eolien_mer', -2.4, 46.9, 2.4); put('eolien_mer', 0.25, 49.98, 2.4);
  put('solaire', 5.25, 43.95, 3.2); put('barrage', 4.78, 44.72, 3); put('grue_portuaire', 0.12, 49.47, 2.6); put('grue_portuaire', 4.88, 43.42, 2.4);
  put('porte_conteneurs', -0.25, 49.75, 4.6); put('bateau_peche', -4.9, 47.7, 2.6);
  put('ble', 1.6, 48.05, 4.2); put('ble', 3.5, 49.3, 3.8); put('ble', 0.6, 46.3, 3.4); put('vignes', -0.25, 44.98, 3.4); put('vignes', 4.75, 47.05, 3.2); put('vignes', 4.0, 49.05, 3.2);
  put('vache', -0.7, 49.0, 1.8); put('vache', 2.75, 45.35, 1.8); put('tracteur', 1.3, 48.3, 1.7); put('serre', -1.4, 47.0, 2.2); put('usine', 6.05, 48.05, 2.8); put('usine_moderne', 3.2, 50.4, 2.6);
  // relief et littoral (sprites Recraft)
  // montagnes : massifs en vue isométrique du dessus, sans socle ; chacun placé une fois
  /* Massif central, Jura, Vosges : quelques montagnes basses sans neige, tailles variées */
  if(!MT_V2){ put('mt_basse', 3.65, 44.45, 2.7, 1); put('montagnes_douces', 2.2, 45.7, 2.2); }
  if(!MT_V2){ put('mt_basse', 5.95, 46.45, 2.8); put('mt_basse', 6.35, 46.95, 2.4, 1); /* Jura */ }
  if(!MT_V2){ put('mt_basse', 7.0, 48.35, 2.8, 1); put('mt_basse', 6.9, 47.95, 2.4); /* Vosges */ }
  if(!MT_V2){ put('montagnes_douces', 5.7, 46.15, 2.1, 1); put('mt_basse', 6.6, 47.25, 2.2); /* Jura (suite) */ }
  if(!MT_V2){ put('mt_basse', 6.1, 46.7, 2.2); put('montagnes_douces', 5.85, 46.6, 2, 1); put('mt_basse', 6.45, 47.1, 2.1, 1); /* Jura (plus) */ }
  if(!MT_V2){ put('mt_neige', 9.05, 42.25, 3.4); put('mt_basse', 9.15, 41.9, 2.8, 1); put('mt_basse', 8.95, 42.55, 2.6); } put('sapins', 9.3, 42.05, 1.6, 0, 1, 0, 1); /* Corse */
  if(!MT_V2){ put('montagnes_douces', 7.1, 48.65, 2.1); put('mt_basse', 6.75, 48.15, 2.1, 1); /* Vosges (suite) */ }
  put('lac', 6.17, 45.86, 1.9); /* lac d'Annecy */
  if(!MT_V2){ put('massif_alpes_a', 6.5, 45.0, 15); put('mt_neige', 6.85, 44.42, 3.4); put('mt_basse', 6.45, 44.3, 2.9, 1); put('mt_basse', 7.15, 44.2, 2.7); put('mt_basse', 6.2, 44.62, 2.9); put('montagnes_douces', 6.6, 44.45, 2.6, 1); put('mt_basse', 5.9, 44.8, 2.6, 1); put('mt_basse', 6.55, 44.78, 2.8); /* sous les Alpes */ } put('pavillon', 2.56, 44.42, 2); put('maison_pierre', 2.4, 44.32, 2); put('pavillon', 2.62, 44.27, 2, 1); /* Rodez */ put('montagnes_douces', 6.55, 44.15, 2.6); put('mt_basse', 6.3, 44.55, 2.6, 1); /* Alpes du Sud, le long de la frontière */ if(!MT_V2) put('massif_central', 2.9, 45.15, 11); /* Alpes : chaîne nord-sud le long de la frontière */
  if(!MT_V2){ put('chaine_pyrenees', -0.35, 42.72, 21, 1, 1.2, 3); put('chaine_pyrenees', 1.85, 42.45, 20, 1, 1.2, 3); /* Pyrénées : une chaîne sur toute la frontière */ }
  if(MT_V2){ put('mt2_vosges', 6.3, 47.83, 8.5); put('sapins', 5.761, 47.701, 1.8, 0, 1, 0, 1); put('sapins', 6.031, 47.673, 1.8, 0, 1, 0, 1); put('sapins', 6.300, 47.727, 1.8, 0, 1, 0, 1); put('sapins', 6.435, 47.806, 1.8, 1, 1, 0, 1); put('sapins', 6.704, 47.952, 1.8, 1, 1, 0, 1); put('sapins', 6.839, 48.103, 1.8, 0, 1, 0, 1); put('sapins', 5.884, 47.587, 1.6, 1, 1, 0, 1); put('sapins', 6.153, 47.559, 1.6, 0, 1, 0, 1); put('sapins', 6.422, 47.613, 1.6, 1, 1, 0, 1); put('sapins', 6.692, 47.747, 1.6, 0, 1, 0, 1); put('sapins', 6.961, 47.989, 1.6, 1, 1, 0, 1); put('mt2_jura', 5.74, 46.42, 10.3); put('sapins', 5.086, 46.286, 1.8, 0, 1, 0, 1); put('sapins', 5.248, 46.220, 1.8, 1, 1, 0, 1); put('sapins', 5.575, 46.237, 1.8, 1, 1, 0, 1); put('sapins', 5.740, 46.289, 1.8, 0, 1, 0, 1); put('sapins', 5.902, 46.364, 1.8, 1, 1, 0, 1); put('sapins', 6.065, 46.751, 1.8, 0, 1, 0, 1); put('sapins', 6.229, 46.921, 1.8, 1, 1, 0, 1); put('sapins', 6.392, 47.013, 1.8, 0, 1, 0, 1); put('sapins', 5.561, 46.122, 1.6, 0, 1, 0, 1); put('sapins', 5.888, 46.175, 1.6, 1, 1, 0, 1); put('sapins', 6.213, 46.638, 1.6, 0, 1, 0, 1); put('sapins', 6.540, 46.900, 1.6, 1, 1, 0, 1); put('mt2_alpes', 6.05, 44.78, 12); put('sapins', 5.288, 45.119, 1.8, 0, 1, 0, 1); put('sapins', 5.441, 44.635, 1.8, 1, 1, 0, 1); put('sapins', 5.743, 44.538, 1.8, 1, 1, 0, 1); put('sapins', 6.048, 44.541, 1.8, 1, 1, 0, 1); put('sapins', 6.201, 44.483, 1.8, 0, 1, 0, 1); put('sapins', 6.503, 44.504, 1.8, 0, 1, 0, 1); put('sapins', 6.809, 44.593, 1.8, 0, 1, 0, 1); put('sapins', 5.432, 45.006, 1.6, 1, 1, 0, 1); put('sapins', 6.039, 44.399, 1.6, 1, 1, 0, 1); put('sapins', 6.345, 44.370, 1.6, 0, 1, 0, 1); put('sapins', 6.647, 44.391, 1.6, 1, 1, 0, 1); put('sapins', 6.953, 44.479, 1.6, 0, 1, 0, 1); put('sapins', 5.393, 44.889, 1.5, 0, 1, 0, 1); put('sapins', 6.741, 44.889, 1.5, 1, 1, 0, 1); put('mt2_central', 2.9, 44.75, 16); put('arbre', 1.886, 45.285, 1.9, 0, 1, 0, 1); put('arbre_jaune', 2.222, 45.178, 1.9, 0, 1, 0, 1); put('arbre', 2.561, 44.973, 1.9, 0, 1, 0, 1); put('arbre_jaune', 2.900, 44.794, 1.9, 0, 1, 0, 1); put('arbre', 3.236, 44.754, 1.9, 0, 1, 0, 1); put('arbre_automne', 3.407, 44.558, 1.9, 1, 1, 0, 1); put('arbre', 3.743, 44.509, 1.9, 1, 1, 0, 1); put('arbre_automne', 2.387, 45.065, 1.7, 0, 1, 0, 1); put('arbre_automne', 3.739, 44.395, 1.7, 0, 1, 0, 1); put('arbre_jaune', 4.078, 44.442, 1.7, 1, 1, 0, 1); put('mt2_pyrenees', 0.75, 42.74, 29, 0, 0.8); put('sapins', -1.087, 43.155, 1.8, 0, 1, 0, 1); put('sapins', -0.843, 43.111, 1.8, 1, 1, 0, 1); put('sapins', -0.598, 43.053, 1.8, 0, 1, 0, 1); put('sapins', -0.354, 42.964, 1.8, 1, 1, 0, 1); put('sapins', -0.109, 42.926, 1.8, 0, 1, 0, 1); put('sapins', 0.136, 42.902, 1.8, 1, 1, 0, 1); put('sapins', 0.380, 42.803, 1.8, 0, 1, 0, 1); put('sapins', 0.625, 42.772, 1.8, 1, 1, 0, 1); put('sapins', 0.869, 42.738, 1.8, 0, 1, 0, 1); put('sapins', 1.114, 42.693, 1.8, 1, 1, 0, 1); put('sapins', 1.359, 42.663, 1.8, 0, 1, 0, 1); put('sapins', 1.603, 42.615, 1.8, 1, 1, 0, 1); put('sapins', 1.848, 42.526, 1.8, 0, 1, 0, 1); put('sapins', 2.092, 42.499, 1.8, 1, 1, 0, 1); put('sapins', 2.337, 42.454, 1.8, 0, 1, 0, 1); put('sapins', 2.587, 42.485, 1.8, 1, 1, 0, 1); put('sapins', 0.063, 42.830, 1.6, 1, 1, 0, 1); put('sapins', 1.441, 42.587, 1.6, 0, 1, 0, 1); put('sapins', 2.819, 42.382, 1.6, 1, 1, 0, 1); put('sapins', -1.087, 42.959, 1.6, 0, 1, 0, 1); put('sapins', -0.843, 42.915, 1.6, 1, 1, 0, 1); put('sapins', -0.598, 42.857, 1.6, 0, 1, 0, 1); put('sapins', -0.354, 42.768, 1.6, 1, 1, 0, 1); put('sapins', -0.109, 42.730, 1.6, 0, 1, 0, 1); put('sapins', 0.136, 42.706, 1.6, 1, 1, 0, 1); put('sapins', 0.380, 42.607, 1.6, 0, 1, 0, 1); put('sapins', 0.625, 42.576, 1.6, 1, 1, 0, 1); put('sapins', 0.869, 42.542, 1.6, 0, 1, 0, 1); put('sapins', 1.114, 42.497, 1.6, 1, 1, 0, 1); put('sapins', 1.359, 42.467, 1.6, 0, 1, 0, 1); put('sapins', 1.603, 42.419, 1.6, 1, 1, 0, 1); put('sapins', 1.848, 42.330, 1.6, 0, 1, 0, 1); put('sapins', 2.092, 42.302, 1.6, 1, 1, 0, 1); put('sapins', 2.337, 42.258, 1.6, 0, 1, 0, 1); put('sapins', 2.587, 42.289, 1.6, 1, 1, 0, 1); put('mt2_corse', 9.05, 41.95, 5.6); put('sapins', 8.695, 41.915, 1.8, 0, 1, 0, 1); put('sapins', 8.872, 41.821, 1.8, 1, 1, 0, 1); put('sapins', 9.227, 41.863, 1.8, 1, 1, 0, 1); put('sapins', 9.404, 42.180, 1.8, 0, 1, 0, 1); put('sapins', 9.184, 41.692, 1.6, 0, 1, 0, 1); put('sapins', 9.538, 42.067, 1.6, 1, 1, 0, 1); put('chalet', 6.6, 45.0, 1.9, 0, 1, 0, 0); put('chalet', 5.5, 45.1, 1.8, 1, 1, 0, 0); put('maison_basque', -0.9, 43.2, 1.9, 0, 1, 0, 0); put('chalet', 1.6, 42.95, 1.8, 1, 1, 0, 0); put('maison_pierre', 2.35, 45.0, 1.8, 0, 1, 0, 0); put('chalet', 6.95, 47.9, 1.7, 0, 1, 0, 0); } /* V2 : massifs d'un bloc + sapins, arbres et chalets au pied */ if(MT_V2){ put('parasols', 3.25, 43.29, 2); put('parasols', 4.25, 43.61, 2); put('parasols', 6.55, 43.22, 2); put('parasols', -1.1, 44.95, 2); put('parasols', -1.62, 46.5, 2); put('voilier', 3.6, 42.95, 1.6); put('voilier', 6.35, 42.85, 1.6, 1); put('voilier', -1.6, 44.7, 1.6, 1); put('parasols', 3.75, 43.53, 1.9); put('parasols', 7.05, 43.58, 1.9); put('parasols', -1.28, 43.75, 1.9); put('tente_camping', 3.05, 43.14, 1.6); put('piscine', 6.9, 43.65, 1.7); put('mas_provence', 6.2, 43.35, 1.9); put('bateau_peche', 3.45, 43.02, 1.5, 1); } /* V2 : plages animées */
  if(MT_V2){ var sap = ['sapins']; [[7.3,48.25],[6.95,47.7],[6.55,48.55],[7.45,47.85],[6.25,46.95],[5.95,46.05],[6.6,48.05],[5.6,47.6],[6.9,48.9]].forEach(function(f){ cluster(f[0], f[1], 4, .18, sap, 1.6); }); } /* V2 : petites forêts de sapins dans l'est */
  if(MT_V2){ put('tour_bureaux', 5.06, 45.5, 2); put('immeuble', 4.6, 45.84, 2); put('haussmann', 4.55, 45.68, 2); put('petit_immeuble', 4.52, 45.57, 2); put('petit_immeuble', 4.45, 45.72, 2); } /* V2 : Lyon plus dense */
  if(MT_V2){ [[3.6,43.75],[4.15,43.85],[3.2,43.55],[5.2,43.62],[6.3,43.5],[2.8,43.3],[6.75,43.75]].forEach(function(f){ cluster(f[0], f[1], 3, .15, ['pin'], 1.6); }); [[-0.3,44.95],[-0.55,45.15],[-0.2,44.72],[-0.75,45.05]].forEach(function(f){ put('vignes', f[0], f[1], 2.2); }); } /* V2 : pins du Midi, vignes du Bordelais */
  if(MT_V2) put('port', 1.09, 49.43, 2.4); /* V2 : petit port de Rouen */
  if(MT_V2){ [[-0.1,44.9],[0.0,44.82],[-0.45,44.6],[-0.95,45.18],[-0.85,45.05],[0.25,44.95],[-0.2,44.7],[0.1,44.7],[-0.3,45.05],[-1.0,45.35],[0.3,44.8],[4.0,49.05],[4.2,48.95],[3.85,48.95],[4.8,47.1],[4.72,46.95],[4.92,47.25],[4.6,47.05],[4.85,46.8],[5.0,47.15]].forEach(function(v, i){ put('vignes', v[0], v[1], 2.1, i % 2); }); cluster(6.95, 44.0, 3, .15, ['sapins'], 1.7); cluster(7.25, 43.95, 3, .15, ['sapins'], 1.7); } /* V2 : vignes (Bordelais, Champagne, Bourgogne), sapins de l'arrière-pays niçois */
  if(MT_V2){ [[-0.6,44.35],[-0.9,44.0],[-0.4,44.0],[-0.75,43.75],[5.6,43.45],[5.85,43.55],[6.1,43.65],[6.45,43.6],[6.8,43.85],[7.05,43.85],[5.25,43.45],[3.4,43.55]].forEach(function(f){ cluster(f[0], f[1], 3, .14, ['pin'], 1.6); }); put('aeroport', 1.2, 43.75, 3.2); put('usine_aero', 1.5, 43.82, 2.8); } /* V2 : pins des Landes et de Provence, aéroport et usine de Toulouse */
  if(MT_V2){ var feu = ['arbre', 'arbre', 'arbre_automne', 'arbre_jaune']; [[1.6,47.55,'f'],[2.65,48.35,'f'],[0.6,48.2,'f'],[3.1,46.6,'f'],[4.65,49.7,'s'],[-1.1,48.3,'f'],[5.25,47.75,'f'],[1.2,46.2,'f'],[3.7,47.6,'f'],[6.2,49.1,'s']].forEach(function(f){ cluster(f[0], f[1], 6, .22, f[2] === 's' ? ['sapins'] : feu, 1.8); }); } /* V2 : quelques forêts */
  if(MT_V2){ put('rocher_cote', 7.43, 43.8, 1.5); put('rocher_cote', 5.47, 43.24, 1.4, 1); } /* V2 : rochers façon calanques (Menton, Marseille) */
  [[-4.78,48.42],[-1.9,49.65],[1.6,50.7],[-1.45,43.5],[-2.2,47.28]].forEach(function(l){ put('phare', l[0], l[1], 1.4); });
  put('parasols', 3.5, 43.45, 2.4); put('parasols', -1.3, 44.6, 2.2); put('parasols', 6.9, 43.55, 2.2); put('voilier', -2.6, 46.5, 1.8); put('voilier', 5.6, 42.9, 1.8); put('voilier', -1.9, 49.95, 1.8);
  put('gare', 2.45, 48.95, 2.2); put('stade', 2.3, 48.7, 2.6); put('universite', 4.95, 45.68, 2.2); put('hopital', 1.5, 43.55, 2.4); put('ferme', 0.2, 46.9, 2.4); put('ferme', 3.9, 48.1, 2.3); put('colza', 0.9, 48.65, 3); put('colza', 4.6, 49.55, 3);
  // quelques aéroports et ports (petits)
  put('aeroport', 2.55, 49.0, 3.8); put('aeroport', 1.37, 43.63, 3.4); put('aeroport', -1.61, 47.15, 3.2); put('aeroport', 5.22, 43.44, 3.2); /* Roissy, Toulouse, Nantes, Marseille */
  put('port', MT_V2 ? 0.3 : 0.15, MT_V2 ? 49.38 : 49.47, 3.6); put('porte_conteneurs', 0.0, 49.55, 3.6); put('grue_portuaire', 0.3, 49.45, 2.6); put('port', -1.48, 43.5, 3.2); put('port', 3.7, 43.4, 3.2); put('port', 2.35, 51.03, 3.4);
  put('usine_aero', 1.3, 43.66, 3.4); put('chantier_naval', -2.22, 47.27, 4.4); /* grands sites : aéronautique (Toulouse), chantiers navals (Saint-Nazaire) */
  put('dune', -0.98, 44.4, 2.8); /* petite dune du Pilat */
  for(var pi = 0; pi < 22; pi++) put('pin', -0.8 + R() * .5, 43.85 + R() * .8, 1.5 + R() * .4, R() < .5); /* pins des Landes */
  // forêts (Landes, Sologne, Vosges, Ardennes, Morvan, Bretagne, Massif central, Jura)
  [[2.0,47.55,5,.4],[7.0,48.4,5,.35],[4.75,49.85,4,.3],[4.05,47.15,4,.3],[-3.3,48.15,4,.35],[2.6,45.0,4,.4],[6.0,46.6,3,.3],[1.4,45.1,4,.4],[9.15,42.0,3,.25],[0.6,48.6,3,.3],[3.0,48.4,3,.3]].forEach(function(f){ cluster(f[0], f[1], Math.round(f[2] * 1.8), f[3] * 1.1, f[1] > 47.5 || f[0] > 5.5 ? ['arbre', 'sapins', 'arbre_automne', 'arbre', 'sapins', 'arbre_jaune'] : ['arbre', 'arbre_automne', 'arbre', 'arbre_jaune', 'sapins'], 1.4); });
  put('arbre', 5.0, 44.3, 1.7); put('arbre_jaune', 5.95, 44.5, 1.7); put('arbre_automne', 5.5, 43.75, 1.7, 1); /* Provence : arbres espacés */
  if(!MT_V2){ [[5.3,45.0],[5.4,45.3],[2.35,45.12],[3.45,45.1],[2.85,44.98],[-0.9,43.3],[0.2,43.22],[1.3,43.08],[2.3,42.95]].forEach(function(f, i){ put('sapins', f[0], f[1], 2, i % 2, 1, 0, 1); }); /* sapins au pied des montagnes */ }
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
function rivDist(x, y){ var d = 1e9; (window.RIVERS_LL || []).forEach(function(r){ for(var i = 1; i < r.length; i++){ var a = P(r[i - 1][0], r[i - 1][1]), b = P(r[i][0], r[i][1]), vx = b[0] - a[0], vy = b[1] - a[1], t = Math.max(0, Math.min(1, ((x - a[0]) * vx + (y - a[1]) * vy) / (vx * vx + vy * vy))), dx = a[0] + t * vx - x, dy = a[1] + t * vy - y; d = Math.min(d, Math.sqrt(dx * dx + dy * dy)); } }); return d; }
function sprItems(){
  var items = [];
  sprList().forEach(function(s){
    if(MT_V2 && /^arbre/.test(s[0]) && !s[7] && (s[2] < 44.6 || (s[1] > 4.5 && s[2] < 44.7))){ s = s.slice(); s[0] = 'pin'; if(s[1] > 4.5 && s[2] > 44.1) s[2] -= .35; } /* V2 : pins dans le sud, arbres sous les Alpes descendus */
    var p = P(s[1], s[2]), t = terrainU(p[0], p[1]), marine = !!SPR_MARINE[s[0]];
    if(MASK && SPR_MARINE[s[0]] !== 2 && !/^(chaine|lac|mt2_)/.test(s[0]) && (marine ? t !== 0 : t !== 1)) return;
    items.push({ id:s[0], x0:s[1], y0:s[2], x:p[0], y:p[1], w:s[3], h:s[3] * (SPR_AR[s[0]] || 1) * (s[5] || 1), f:s[4], sy:s[5] || 1, r:s[6] || 0, pied:s[7] || 0 });
  });
  /* pas de superposition : les éléments placés d'abord (monuments, villes, relief) gardent leur place */
  var PRIO = { lac:0, mt2_vosges:-1, mt2_jura:-1, mt2_alpes:-1, mt2_central:-1, mt2_pyrenees:-1, mt2_corse:-1, massif_alpes_a:-1, massif_alpes_b:-1, mt_neige:0, massif_central:-1, chaine_alpes:0, chaine_pyrenees:0, mt_haute:0, mt_basse:0, arete:0, pic_sapins:0, massif_iso:0, chaine_iso:0, massif_alpes_nord:0, massif_alpes_sud:0, massif_pyrenees:0, pic_alpin:0, massif_pics:0, massif:0, pic_neige:0, massif_brun:0, pic_brun:0, montagnes_douces:0, colline:0, tour_eiffel:0, arc_triomphe:0, fourviere:0, basilique_marseille:0, cathedrale_strasbourg:0, beffroi_lille:0, bourse_bordeaux:0, mont_saint_michel:0, aeroport:0, port:0, usine_aero:0, chantier_naval:0, dune:0 };
  items = items.map(function(it, k){ it.k = k; return it; }).sort(function(a, b){ return ((PRIO[a.id] !== undefined ? PRIO[a.id] : 1) - (PRIO[b.id] !== undefined ? PRIO[b.id] : 1)) || a.k - b.k; });
  var kept = [];
  items.forEach(function(it){
    var bx = [it.x - it.w * .42, it.y - it.h * .55, it.x + it.w * .42, it.y + it.h * .08]; if(/^mt2_/.test(it.id)){ bx[1] = it.y - it.h * .9; bx[0] = it.x - it.w * .45; bx[2] = it.x + it.w * .45; } /* massifs V2 : rien derrière les sommets */
    if([[2.54, 51.01], [-4.2, 48.27]].some(function(q){ return /pavillon|maison|chalet|mas_/.test(it.id) && Math.abs(it.x0 - q[0]) < .08 && Math.abs(it.y0 - q[1]) < .08; })) return; /* maisons sur le rivage (Dunkerque, Finistère) */
    if(!SPR_MARINE[it.id] && it.id !== 'dune' && ((it.x0 > -1.3 && it.x0 < -0.95 && it.y0 > 44.55 && it.y0 < 44.78) || (it.x0 > -1.05 && it.x0 < -0.55 && it.y0 > 45.05 && it.y0 < 45.65))) return;
    if(MASK && !SPR_MARINE[it.id] && !/^(chaine|dune|epr|mt2_|parasols|tente_camping|camping_car|rocher_cote)/.test(it.id) && (terrainU(bx[0] - it.w * .3, it.y) === 0 || terrainU(bx[2] + it.w * .3, it.y) === 0 || terrainU(it.x, it.y + it.h * .35) === 0 || terrainU(it.x, it.y - it.h * .3) === 0)) return; /* marge : ni pieds dans l'eau ni collé au rivage */ /* pieds dans l'eau : non */
    if(/^(arbre|sapins|pin|mt_|montagnes)/.test(it.id) && Math.abs(it.x0 - 7.45) < .5 && Math.abs(it.y0 - 48.5) < .3) return; /* Strasbourg dégagé */
    if(MT_V2 && /^arbre/.test(it.id) && !it.pied && it.x0 > 4.5 && it.x0 < 7.3 && it.y0 > 43.5 && it.y0 < 45.2) return; /* V2 : pas d'arbres ordinaires sous les Alpes */
    if(MT_V2 && window.RIVERS_LL && !(it.x0 > 1.9 && it.x0 < 2.8 && it.y0 > 48.6 && it.y0 < 49.1) && /^(pavillon|maison|ferme|ble|colza|vignes|serre|champ|immeuble|petit_immeuble|haussmann|boulangerie|mas_|chalet|tour_|universite|hopital|gare|stade|usine)/.test(it.id) && [it.y, it.y - it.h * .35].some(function(yy){ return rivDist(it.x, yy) < it.w * .3 + .4; })) return; /* V2 : rien sur les fleuves */
    var MTN = false;
    var clash = !it.pied && kept.some(function(k){ if(BIG_SPR.test(k.id) && !BIG_SPR.test(it.id)){ var m = (k.b[2] - k.b[0]) * (/^mt2_/.test(k.id) ? .03 : .3); /* rien sous un grand massif : sa vraie image déborde largement de sa boîte */ if(bx[2] > k.b[0] - m && bx[0] < k.b[2] + m && bx[3] > k.b[1] - m && bx[1] < k.b[3] + m) return true; } if(MTN && /massif|pic|montagne|colline/.test(k.id)) return false; var ix = Math.min(bx[2], k.b[2]) - Math.max(bx[0], k.b[0]), iy = Math.min(bx[3], k.b[3]) - Math.max(bx[1], k.b[1]);
      var CH = /^(ble|colza|vignes|serre|solaire|champ)/, BAT = /pavillon|maison|chalet|mas_|immeuble|haussmann|boulangerie|ferme|usine|gare|hopital|universite|stade|caserne|tour_|beffroi|cathedrale|palais/; if(ix > 0 && iy > 0 && ((CH.test(it.id) && BAT.test(k.id)) || (CH.test(k.id) && BAT.test(it.id))) && ix * iy > .04 * Math.min((bx[2] - bx[0]) * (bx[3] - bx[1]), (k.b[2] - k.b[0]) * (k.b[3] - k.b[1]))) return true; /* pas de champ sous une maison */
      var urb = /immeuble|haussmann|boulangerie|tour_bureaux/; var lim = urb.test(it.id) && urb.test(k.id) && Math.abs(it.y - k.y) > it.h * .12 ? (MT_V2 ? .4 : .55) : (MT_V2 ? .25 : .35); /* centre-ville : un immeuble peut en masquer un autre derrière lui */
      return ix > 0 && iy > 0 && ((BIG_SPR.test(k.id) !== BIG_SPR.test(it.id)) || ix * iy > lim * Math.min((bx[2] - bx[0]) * (bx[3] - bx[1]), (k.b[2] - k.b[0]) * (k.b[3] - k.b[1]))); });
    if(!clash && it.pied && MT_V2) clash = kept.some(function(k){ if(!/pavillon|maison|chalet|mas_|immeuble|haussmann|boulangerie|ferme|usine|gare|hopital|universite|stade|tour_|beffroi|cathedrale|palais|fourviere|basilique|centrale|epr|piscine/.test(k.id)) return false; var ix = Math.min(bx[2], k.b[2]) - Math.max(bx[0], k.b[0]), iy = Math.min(bx[3], k.b[3]) - Math.max(bx[1], k.b[1]); return ix > 0 && iy > 0 && ix * iy > .25 * Math.min((bx[2] - bx[0]) * (bx[3] - bx[1]), (k.b[2] - k.b[0]) * (k.b[3] - k.b[1])); }); /* V2 : arbres du pied sans collision */
    if(!clash && MT_V2 && /pavillon|maison|chalet|mas_|immeuble|haussmann|boulangerie|ferme|usine|gare|hopital|universite|stade|tour_|eolienne|solaire|piscine|centrale|epr/.test(it.id)) clash = kept.some(function(k){ if(!/^(pin|arbre|sapins)/.test(k.id)) return false; var ix = Math.min(bx[2], k.b[2]) - Math.max(bx[0], k.b[0]), iy = Math.min(bx[3], k.b[3]) - Math.max(bx[1], k.b[1]); return ix > 0 && iy > 0 && ix * iy > .12 * Math.min((bx[2] - bx[0]) * (bx[3] - bx[1]), (k.b[2] - k.b[0]) * (k.b[3] - k.b[1])); }); /* V2 : bâtiments et éoliennes jamais dans les arbres */
    if(!clash && MT_V2 && /^(pin|arbre|sapins)/.test(it.id)) clash = kept.some(function(k){ if(!/pavillon|maison|chalet|mas_|immeuble|haussmann|boulangerie|ferme|usine|gare|hopital|universite|stade|tour_|beffroi|cathedrale|palais|eiffel|arc_|port|piscine|eolienne|solaire/.test(k.id)) return false; var ix = Math.min(bx[2], k.b[2]) - Math.max(bx[0], k.b[0]), iy = Math.min(bx[3], k.b[3]) - Math.max(bx[1], k.b[1]); return ix > 0 && iy > 0 && ix * iy > .15 * Math.min((bx[2] - bx[0]) * (bx[3] - bx[1]), (k.b[2] - k.b[0]) * (k.b[3] - k.b[1])); }); /* V2 : arbres et bâtiments sans chevauchement */
    if(!clash && !it.pied && /^(pin|arbre|sapins)/.test(it.id)) clash = kept.some(function(k){ if(!/^(mt_|montagnes|massif|chaine|pin|arbre|sapins)/.test(k.id)) return false; var ix = Math.min(bx[2], k.b[2]) - Math.max(bx[0], k.b[0]), iy = Math.min(bx[3], k.b[3]) - Math.max(bx[1], k.b[1]); return ix > 0 && iy > 0 && ix * iy > (/^(pin|arbre|sapins)/.test(k.id) ? .15 : it.id === 'sapins' ? .3 : 0) * (bx[2] - bx[0]) * (bx[3] - bx[1]); });
    if(!clash && MASK && (/pavillon|maison|chalet|mas_|immeuble|boulangerie|haussmann|ferme/.test(it.id) || (MT_V2 && /tour_|piscine|universite|hopital/.test(it.id)))){ var mx = it.w * 1.3, my = it.h * 1.1; if(terrainU(it.x - mx, it.y) === 0 || terrainU(it.x + mx, it.y) === 0 || terrainU(it.x, it.y + my) === 0 || terrainU(it.x, it.y - my) === 0) clash = true; } /* maisons : loin du rivage */
    if(!clash){ it.b = bx; kept.push(it); }
  });
  /* maison qui touche un arbre : toujours derrière (sa base au-dessus du pied de l'arbre, l'arbre dessiné devant) */
  for(var pass = 0; pass < 3; pass++) kept.forEach(function(h){ if(!/pavillon|maison|chalet|mas_|immeuble|boulangerie|haussmann|ferme/.test(h.id)) return;
    kept.forEach(function(t){ if(!/^(pin|arbre|sapins)/.test(t.id)) return; var b = h.b, c = t.b;
      if(b[0] < c[2] && b[2] > c[0] && b[1] < c[3] && b[3] > c[1] && h.y > t.y - t.h * .3){ var d = t.y - t.h * .35 - h.y; h.y += d; h.b = [b[0], b[1] + d, b[2], b[3] + d]; } }); });
  items = kept;
  items.sort(function(a, b){ return a.y - b.y; });
  return items;
}
/* Performance : les sprites sont « cuits » dans l'image du décor (une seule image au lieu de ~250 balises).
   Il faut leurs données (data URI) car une image SVG ne charge pas de fichiers externes.
   Si le chargement échoue (ex. page ouverte en file://), on garde la couche HTML #sprl. */
var SPR_DATA = {}, SPR_NUIT = {}, SPR_READY = false, SPR_LOADING = false, MT_NUIT = /^(mt_|mt2_|chaine|massif|montagnes|arbre|pin|sapins|ble|colza|vignes|serre|ferme|dune|lac|vache|tracteur|solaire|parasols)/;
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
      return new Promise(function(ok){ var fr = new FileReader(); fr.onload = function(){ SPR_DATA[id] = fr.result; ok(); }; fr.onerror = function(){ ok(); }; fr.readAsDataURL(b); });
    }).catch(function(){ /* un dessin manquant ne doit pas bloquer les autres */ });
  })).then(function(){ return Promise.all(ids.filter(function(id){ return MT_NUIT.test(id) && SPR_DATA[id]; }).map(sprNuit)).catch(function(){}); }).then(function(){ SPR_READY = true; var l = $('sprl'); if(l) l.innerHTML = ''; BAKE.key = ''; BAKE.cache = {}; bakeDecor(); }).catch(function(){ SPR_LOADING = false; });
}
function sprSvg(){
  if(!SPR_READY) return '';
  var used = {}, items = sprItems(), defs = '', uses = '';
  var nuit = document.documentElement.getAttribute('data-theme') === 'dark' || ($('app') && $('app').classList.contains('is-night'));
  var big = [];
  items = items.filter(function(it){ return !!SPR_DATA[it.id]; }); /* dessin non chargé : ignoré */
  items = items.filter(function(it){ if(BIG_SPR.test(it.id) || it.pied){ big.push(it); return false; } return true; });
  big.sort(function(a, b){ return (MT_V2 ? (a.pied ? 1 : 0) - (b.pied ? 1 : 0) : 0) || a.y - b.y; }); /* V2 : arbres du pied devant les massifs */
  sprBig(big, nuit);
  /* perspective : un élément marin juste derrière une côte (terre juste au sud) est caché par la terre et sa falaise */
  var frD = $('frTop') ? $('frTop').getAttribute('d') : '', coD = $('coTop') ? $('coTop').getAttribute('d') : '';
  if(frD) defs += '<mask id="derriereTerre" maskUnits="userSpaceOnUse" x="-500" y="-500" width="1100" height="1100"><rect x="-500" y="-500" width="1100" height="1100" fill="#fff"/>' + [0, 1.3, 2.6].map(function(t){ return '<path d="' + frD + '" transform="translate(0,' + t + ')"/><path d="' + coD + '" transform="translate(0,' + t + ')"/>'; }).join('') + '</mask>';
  items.forEach(function(it){
    if(!used[it.id]){ used[it.id] = 1; defs += '<image id="sp_' + it.id + '" href="' + (nuit && SPR_NUIT[it.id] || SPR_DATA[it.id]) + '" width="1" height="' + (SPR_AR[it.id] || 1) + '" preserveAspectRatio="none"/>'; }
    var derriere = frD && SPR_MARINE[it.id] && MASK && [1.2, 2.4, 3.6].some(function(d){ return terrainU(it.x, it.y + d) === 1; });
    uses += '<use' + (derriere ? ' mask="url(#derriereTerre)"' : '') + ' href="#sp_' + it.id + '" transform="' + (it.r ? 'rotate(' + it.r + ' ' + F(it.x) + ' ' + F(it.y) + ') ' : '') + 'translate(' + F(it.f ? it.x + it.w / 2 : it.x - it.w / 2) + ',' + F(it.y - it.h * .86) + ') scale(' + (it.f ? '-' : '') + F(it.w) + ',' + F(it.w * (it.sy || 1)) + ')"/>';
  });
  return '<defs>' + defs + '</defs><g>' + uses + '</g>';
}
/* grands reliefs : images à part (pas cuites dans le décor) pour rester nets au zoom */
var MT2_PIED = {"vosges": [0.1, 0.1009], "jura": [0.1009, 0.1], "alpes": [0.1474, 0.1], "central": [0.1, 0.1203], "pyrenees": [0.1, 0.2491], "corse": [0.1228, 0.1]};
var BIG_SPR = /^(massif_alpes|massif_central|chaine_pyrenees|mt2_)/;
function sprNuitActive(){ return document.documentElement.getAttribute('data-theme') === 'dark' || ($('app') && $('app').classList.contains('is-night')); }
function sprBigRefresh(){ if(!SPR_READY) return; sprBig(sprItems().filter(function(it){ return BIG_SPR.test(it.id) || it.pied; }).sort(function(a, b){ return (MT_V2 ? (a.pied ? 1 : 0) - (b.pied ? 1 : 0) : 0) || a.y - b.y; }), sprNuitActive()); }
function sprBig(list, nuit){
  var l = $('sprl'); if(!l || typeof U2P !== 'function') return;
  l.innerHTML = list.map(function(it){
    var w = it.w * VBK, h = it.h * VBK, q = U2P(it.x, it.y), src = nuit && SPR_NUIT[it.id] || SPR_DIR + it.id + '.webp';
    if(it.pied) return '<img src="' + src + '" alt="" decoding="async" style="left:' + F(q[0] - w / 2) + 'px;top:' + F(q[1] - h * .86) + 'px;width:' + F(w) + 'px;height:' + F(h) + 'px;' + (it.f ? 'transform:scaleX(-1)' : '') + '">'; /* sapins du pied : devant le massif */
    var mp = /^mt2_/.test(it.id) && MT2_PIED[it.id.slice(4)]; if(mp){ var pw = w * (1 + 2 * mp[0]), ph = h * (1 + 2 * mp[1]); var ombre = '<img class="mt-pied" src="' + SPR_DIR + it.id + '_pied.png" alt="" decoding="async" onerror="this.remove()" style="left:' + F(q[0] - pw / 2) + 'px;top:' + F(q[1] - h * .86 - h * mp[1]) + 'px;width:' + F(pw) + 'px;height:' + F(ph) + 'px">'; } else /* liseré vert qui suit la forme du massif */
    var ombre = /^chaine/.test(it.id) ? '' : '<i class="relief-pied" style="left:' + F(q[0] - w * .4) + 'px;top:' + F(q[1] - h * .2) + 'px;width:' + F(w * .8) + 'px;height:' + F(h * .26) + 'px"></i>'; /* embase verte (pas sous les Pyrénées, posées sur la côte) */ /* embase verte */
    return ombre + '<img src="' + src + '" alt="" decoding="async"' + (/^mt2_/.test(it.id) ? '' : '') + ' style="left:' + F(q[0] - w / 2) + 'px;top:' + F(q[1] - h * .86) + 'px;width:' + F(w) + 'px;height:' + F(h) + 'px;transform-origin:50% 86%;transform:' + (it.r ? 'rotate(' + it.r + 'deg) ' : '') + (it.f ? 'scaleX(-1)' : 'none') + '">';
  }).join('') + decorSmoke();
}
/* Fumée vivante des centrales et usines du décor (le décor est cuit en image, la fumée reste animée par-dessus) */
var SMK_SRC = { centrale_nucleaire:[[-.2, .78], [.12, .8]], usine:[[.18, .92]], usine_moderne:[[.18, .95], [.3, .9]], centrale_gaz:[[.1, .9]], usine_aero:[[.25, .7]] }, SMK_CACHE = null;
function decorSmoke(){
  if(typeof U2P !== 'function') return '';
  if(!SMK_CACHE) SMK_CACHE = sprItems().filter(function(it){ return SMK_SRC[it.id]; });
  return SMK_CACHE.map(function(it){
    var w = it.w * VBK, h = it.h * VBK, q = U2P(it.x, it.y), sz = w * .5, steam = it.id === 'centrale_nucleaire';
    return SMK_SRC[it.id].map(function(p, j){
      var out = '';
      for(var i = 0; i < 3; i++) out += '<i class="puff decor' + (steam ? ' steam' : '') + '" style="left:' + F(q[0] + (it.f ? -p[0] : p[0]) * w - sz / 2) + 'px;top:' + F(q[1] - h * .86 + (1 - p[1]) * h - sz / 2) + 'px;width:' + F(sz) + 'px;height:' + F(sz) + 'px;animation-delay:' + F(i * 1.3 + j * .6) + 's"></i>';
      return out;
    }).join('');
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
