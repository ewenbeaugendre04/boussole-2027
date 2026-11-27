// 2 situations internationales : nucléaire iranien (S19), Gaza (S21).
const fs=require('fs'),F=__dirname+'/../src/data/game_data.js',S=fs.readFileSync(F,'utf8'),A=S.indexOf('{'),B=S.lastIndexOf('}')+1,G=JSON.parse(S.slice(A,B));
const f=(obj,x,y,anim,o)=>Object.assign({obj,x,y,anim},o||{});const src=(label,url)=>({label,url});
function ch(id,label,lx,plus,minus,budget,note,axes,ind,fx){const c={id,label,label_expert:lx,plus,minus,budget,axes,ind,fx};if(note)c.budget_note=note;return c;}
const ADD={
19:{id:'v27_iran',kind:'banal',region:'national',sector:'defense',title:'Le nucléaire iranien : lever ou garder les sanctions ?',
 simple:"L'Iran a dépassé les limites promises sur son programme nucléaire. La France a fait revenir les sanctions de l'ONU. Des négociations reprennent et Téhéran demande leur levée. Que faire ?",
 expert:"Après la réactivation des sanctions onusiennes (mécanisme de « retour rapide » déclenché par la France, l'Allemagne et le Royaume-Uni), Paris conditionne toute levée à un accord sur le nucléaire, les missiles balistiques et les activités régionales.",
 context:"Garder les sanctions maintient la pression ; les lever contre des garanties peut éviter une guerre et relancer le commerce. Membre permanent du Conseil de sécurité, la France a son mot à dire.",
 real:{date:'Sanctions rétablies fin septembre 2025 ; déclarations de juin et juillet 2026',place:'Conseil de sécurité de l\'ONU, Paris',fact:"Les embargos de l'ONU sur les armes, les banques et le nucléaire ont été réappliqués à l'initiative de la France, de l'Allemagne et du Royaume-Uni ; Paris refuse toute levée sans accord satisfaisant.",figures:'Limites de l'accord de Vienne dépassées.',
  sources:[src('Ministère des Affaires étrangères : réponse sur la situation en Iran','https://www.diplomatie.gouv.fr/fr/presse-et-ressources/decouvrir-et-informer/actualites/situation-en-iran-reponse-de-jean-noel-barrot-ministre-de-l-europe-et-des-affaires-etrangeres-a-une-1'),src('Connaissance des énergies (AFP) : trois conditions posées à Téhéran','https://www.connaissancedesenergies.org/afp/iran-pas-de-levee-de-sanctions-tant-que-teheran-ne-renonce-pas-a-son-programme-nucleaire-chef-de-la-diplomatie-francaise-260713')]},
 camera:{region:'national',x:52,y:45,zoom:1.2},
 fx:[f('parlement',52,24,'pulse'),f('cadenas',60,40,'appear',{delay:.3}),f('bulle',56,34,'appear',{label:'Sanctions ?',delay:.6})],
 choices:[
  ch('a','Garder toutes les sanctions','Maintien intégral des sanctions sans accord global','Pression maximale sur Téhéran.','Risque d\'escalade militaire.',0,null,{eu:0,soc:1},{souverainete:1},[f('cadenas',60,40,'grow')]),
  ch('b','Les lever pas à pas contre des contrôles','Levée progressive conditionnée aux inspections','Évite la guerre, contrôle renforcé.','L\'Iran peut tricher.',0.1,'Reprise de quelques échanges commerciaux : petite recette.',{eu:1},{souverainete:0,cohesion:1},[f('loupe',58,38,'appear')]),
  ch('c','Laisser les États-Unis négocier seuls','Retrait de la France des négociations','Pas de risque diplomatique.','La France perd de l\'influence.',0,null,{eu:-1},{souverainete:-1},[f('bulle',56,34,'fade',{label:'…'})])]},
21:{id:'v29_gaza',kind:'banal',region:'national',sector:'defense',title:'Gaza : envoyer des soldats, de l\'aide ou de l\'argent ?',
 simple:"Après le cessez-le-feu, Gaza est en ruines et l'aide entre mal. Une force internationale se prépare pour sécuriser le territoire. La France doit dire ce qu'elle apporte. Que faire ?",
 expert:"Mise en œuvre du plan de paix : déploiement d'une force internationale de stabilisation, désarmement du Hamas, retrait israélien progressif, aide humanitaire et financement de la reconstruction.",
 context:"Envoyer des soldats donne du poids mais expose nos militaires ; financer la reconstruction coûte cher ; rester en retrait limite l'influence de la France au Proche-Orient.",
 real:{date:'Cessez-le-feu du 10 octobre 2025 ; communiqué du 17 juin 2026',place:'Bande de Gaza',fact:"Depuis le début de la guerre, la France a versé plus de 300 millions d'euros d'aide humanitaire aux Palestiniens ; elle a annoncé vouloir participer à la force internationale de stabilisation.",figures:'Près de 400 tonnes d\'aliments thérapeutiques envoyées par la mer pour 42 000 enfants.',
  sources:[src('Ministère des Affaires étrangères : 20e envoi d\'aide humanitaire pour Gaza','https://www.diplomatie.gouv.fr/fr/presse-et-ressources/decouvrir-et-informer/actualites/la-france-reste-mobilisee-pour-la-palestine-20e-envoi-d-aide-humanitaire-pour-la-population-de-gaza'),src('Ministère des Affaires étrangères : accord sur le désarmement du Hamas','https://www.diplomatie.gouv.fr/fr/presse-et-ressources/decouvrir-et-informer/actualites/israelpalestine-annonce-d-un-accord-sur-le-desarmement-du-hamas')]},
 camera:{region:'national',x:60,y:60,zoom:1.2},
 fx:[f('avion',55,50,'move',{to:{x:68,y:66}}),f('colis',66,66,'appear',{delay:.4}),f('bulle',60,58,'appear',{label:'Aide',delay:.6})],
 choices:[
  ch('a','Envoyer des soldats dans la force internationale','Participation militaire à la force de stabilisation','Poids diplomatique, aide sécurisée.','Soldats exposés.',-0.3,'Opération militaire : le déficit augmente un peu.',{eu:1,soc:1},{souverainete:1,cohesion:-1},[f('char',64,64,'appear')]),
  ch('b','Former la police et financer la reconstruction','Formation des policiers palestiniens et contribution à la reconstruction','Aide utile sans soldats au sol.','Coûteux, résultats lents.',-0.5,'Reconstruction : le déficit augmente.',{eu:1},{cohesion:1},[f('chantier_grue',66,66,'appear')]),
  ch('c','Seulement de l\'aide humanitaire','Maintien d\'une aide strictement humanitaire','Soulage les civils vite.','Peu d\'influence sur la suite.',-0.1,'Aide humanitaire : le déficit augmente un peu.',{soc:0},{cohesion:1},[f('colis',66,66,'grow')]),
  ch('d','Conditionner l\'aide au désarmement du Hamas','Aide subordonnée au désarmement effectif','Exigence de sécurité.','Les civils attendent.',0,null,{soc:1},{souverainete:0,cohesion:-1},[f('cadenas',62,62,'appear')])]}
};
let n=0;for(const[d,e]of Object.entries(ADD)){const D=G.days[+d-1];if(D.events.some(x=>x.id===e.id))continue;D.events.push(e);n++;}
fs.writeFileSync(F,S.slice(0,A)+JSON.stringify(G,null,1)+S.slice(B));console.log(n+' ajoutées');
