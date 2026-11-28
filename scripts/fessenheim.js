// Ajoute la situation « Fessenheim » (peut être retirée : supprimer l'événement v42_fessenheim)
const fs = require('fs'), P = 'src/data/game_data.js';
const S = fs.readFileSync(P, 'utf8'), a = S.indexOf('{'), b = S.lastIndexOf('}') + 1, G = JSON.parse(S.slice(a, b));
const all = G.days.flatMap(d => d.events), ref = all.find(e => e.id === 'v41_charbon');
if(all.some(e => e.id === 'v42_fessenheim')) { console.log('déjà là'); process.exit(); }
const cam = { region:'grand_est', x:84.5, y:ref.camera.y + 9, zoom:2 }, X = cam.x, Y = cam.y;
const fx = (obj, x, y, delay, label) => Object.assign({ obj, x, y, anim:'appear', delay }, label ? { label } : {});
const src = (label, url) => ({ label, url });
const e = { id:'v42_fessenheim', kind:'banal', region:'grand_est', sector:'energie', title:'Démanteler pour de bon la centrale de Fessenheim ?',
  simple:"La plus vieille centrale nucléaire du pays est arrêtée depuis plusieurs années. L'État vient d'autoriser son démantèlement complet. Certains voudraient plutôt y construire de nouveaux réacteurs. Que faire ?",
  expert:"Décret prescrivant le démantèlement complet de l'installation nucléaire de Fessenheim (fin prévue dans une vingtaine d'années), alors que la relance du nucléaire (EPR2) relance le débat sur la réutilisation du site.",
  context:"Démanteler tourne la page et libère le terrain ; garder le site pour de nouveaux réacteurs profiterait du raccordement au réseau existant, mais prendrait des années.",
  real:{ date:'Décret du 1er mai 2026, publié le 3 mai 2026', place:'Fessenheim (Haut-Rhin)', fact:"Arrêtée depuis plusieurs années, la centrale entre en démantèlement complet, qu\'EDF doit achever d\'ici une vingtaine d\'années.", figures:"405 000 tonnes de matériaux, dont 95 % non radioactifs ; environ 300 personnes mobilisées par an.",
    sources:[ src('EDF : la publication du décret ouvre la voie au démantèlement', 'https://www.edf.fr/la-centrale-nucleaire-de-fessenheim/les-actualites-de-la-centrale-nucleaire-de-fessenheim/fessenheim-la-publication-du-decret-ouvre-la-voie-au-demantelement-du-site'),
      src('Connaissance des énergies (AFP) : un décret autorise le démantèlement', 'https://www.connaissancedesenergies.org/afp/un-decret-autorise-le-demantelement-de-lancienne-centrale-nucleaire-de-fessenheim-260503') ] },
  camera:cam,
  fx:[ fx('centrale_nucleaire', X, Y, 0), fx('chantier_grue', X + 1.6, Y + .8, .3), fx('etiquette', X - 1.6, Y + .8, .6, 'Démantèlement') ],
  choices:[
    { id:'a', label:'Démanteler et créer une zone d\'activités', label_expert:'Démantèlement complet puis reconversion économique du site', plus:'Page tournée, emplois locaux.', minus:'Fin du nucléaire sur le site.', budget:-0.1, budget_note:'La reconversion augmente un peu les dépenses.', axes:{ env:1 }, ind:{ emploi:1, co2:0 }, fx:[fx('chantier_grue', X - 2, Y - 1.5, 0)] },
    { id:'b', label:'Garder le site pour de nouveaux réacteurs', label_expert:'Réserver le site pour de futurs réacteurs EPR2', plus:'Électricité bas carbone, raccordement déjà là.', minus:'Long, coûteux, débat local.', budget:-0.3, budget_note:'Les études augmentent les dépenses.', axes:{ env:-1 }, ind:{ souverainete:1, co2:-1 }, fx:[fx('centrale_nucleaire', X, Y - 1.5, 0)] },
    { id:'c', label:'Y installer un grand parc solaire', label_expert:'Reconversion du site en production solaire', plus:'Rapide, renouvelable.', minus:'Produit bien moins qu\'une centrale.', budget:-0.05, budget_note:'Le soutien au solaire augmente un peu les dépenses.', axes:{ env:2 }, ind:{ co2:-1 }, fx:[fx('panneaux_solaires', X + 2, Y - 1.5, 0)] } ] };
// semaine à 3 situations sans énergie, après la semaine 6
const d = G.days.find((d, i) => i > 6 && d.events.length === 3 && !d.events.some(x => x.sector === 'energie'));
d.events.push(e); console.log('ajouté semaine', G.days.indexOf(d) + 1);
fs.writeFileSync(P, S.slice(0, a) + JSON.stringify(G, null, 1) + S.slice(b));
