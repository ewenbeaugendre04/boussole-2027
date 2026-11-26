// 3 situations : vidéosurveillance algorithmique (S22), permis de conduire (S23), travail du dimanche (S25).
const fs=require('fs'),F=__dirname+'/../src/data/game_data.js',S=fs.readFileSync(F,'utf8'),A=S.indexOf('{'),B=S.lastIndexOf('}')+1,G=JSON.parse(S.slice(A,B));
const f=(obj,x,y,anim,o)=>Object.assign({obj,x,y,anim},o||{});const src=(label,url)=>({label,url});
function ch(id,label,lx,plus,minus,budget,note,axes,ind,fx){const c={id,label,label_expert:lx,plus,minus,budget,axes,ind,fx};if(note)c.budget_note=note;return c;}
const ADD={
22:{id:'v30_vsa',kind:'banal',region:'ile_de_france',sector:'securite',title:'Des caméras qui repèrent seules les situations à risque',
 simple:"Dans les gares et les stades, des logiciels analysent les images des caméras et donnent l'alerte en cas de foule anormale ou de colis abandonné. L'essai devait s'arrêter, il est prolongé. Que faire ?",
 expert:"Prolongation de l'expérimentation de la vidéoprotection algorithmique (sans reconnaissance faciale), lancée pour les grands événements sportifs.",
 context:"Pour les uns, un outil utile contre le terrorisme ; pour les autres, un bilan encore limité (fausses alertes) et un risque pour les libertés.",
 real:{date:'Prolongation votée en 2025-2026, jusqu\'au 31 décembre 2027',place:'Parlement',fact:"L'expérimentation, lancée pour les Jeux de Paris, a été prolongée ; le Sénat a voté une seconde prolongation et une extension à certains bâtiments.",figures:'Bilan jugé « limité mais réel » ; fausses alertes relevées pendant le premier essai.',
  sources:[src('Public Sénat : le Sénat prolonge et étend la vidéosurveillance algorithmique','https://www.publicsenat.fr/actualites/parlementaire/loi-ripost-le-senat-prolonge-et-etend-le-recours-a-la-video-surveillance-algorithmique'),src('Clubic : la vidéosurveillance algorithmique prolongée','https://www.clubic.com/actualite-592201-souriez-vous-etes-filmes-la-videosurveillance-algorithmique-se-prolonge-jusqu-en-2027.html')]},
 camera:{region:'ile_de_france',x:52,y:24,zoom:2.2},
 fx:[f('antenne',50,23,'pulse'),f('foule',54,25,'appear',{delay:.3}),f('loupe',52,22,'blink',{delay:.6})],
 choices:[
  ch('a','Rendre le dispositif définitif','Pérennisation de la vidéoprotection algorithmique','Outil disponible partout.','Libertés publiques en question.',-0.05,'Logiciels et caméras : faible coût, le déficit augmente très peu.',{soc:2},{cohesion:0,services:1},[f('antenne',50,23,'grow')]),
  ch('b','Prolonger l\'essai avec une évaluation indépendante','Prolongation encadrée et évaluée par une autorité indépendante','On juge sur des preuves.','Décision repoussée.',-0.03,'Évaluation : faible coût, le déficit augmente très peu.',{soc:0},{cohesion:1},[f('loupe',52,22,'grow')]),
  ch('c','Arrêter l\'expérimentation','Fin de l\'expérimentation à son terme','Protège la vie privée.','Un outil en moins pour la police.',0,null,{soc:-2},{cohesion:0},[f('cadenas',51,25,'appear')])]},
23:{id:'v31_permis',kind:'banal',region:'hauts_de_france',sector:'transports',title:'Des mois d\'attente pour passer le permis',
 simple:"Depuis qu'on peut passer le permis à 17 ans, les candidats sont plus nombreux, mais pas les examinateurs. Certains jeunes attendent huit mois et paient des heures en plus. Que faire ?",
 expert:"Allongement des délais d'accès à l'examen pratique du permis B, faute d'inspecteurs, après l'abaissement de l'âge minimal à 17 ans.",
 context:"Le permis conditionne souvent l'accès à l'emploi. Recruter des inspecteurs coûte ; confier l'examen au privé fait débat.",
 real:{date:'Questions écrites à l\'Assemblée nationale, 2026',place:'Pévèle Carembault (Nord) et toute la France',fact:"Environ 1 200 inspecteurs font passer près de 1,8 million d'examens ; les délais dépassent parfois huit mois.",figures:'Délai réglementaire visé : 45 jours.',
  sources:[src('Assemblée nationale : question écrite sur les délais du permis de conduire','https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE17299'),src('Inspection générale de l\'administration : réformer l\'examen du permis de conduire','https://www.vie-publique.fr/files/rapport/pdf/304214.pdf')]},
 camera:{region:'hauts_de_france',x:57,y:10,zoom:2},
 fx:[f('voiture',54,10,'move',{to:{x:59,y:10}}),f('file_attente',58,8,'appear',{delay:.3}),f('panneau',56,12,'appear',{label:'Attente : 8 mois',delay:.6})],
 choices:[
  ch('a','Recruter beaucoup plus d\'inspecteurs','Recrutement massif d\'inspecteurs du permis de conduire','Délais raccourcis.','Coût pour l\'État.',-0.06,'Salaires d\'inspecteurs : le déficit augmente très peu.',{eco:-1},{emploi:1,services:1},[f('personnage',55,11,'appear')]),
  ch('b','Laisser des examinateurs privés agréés','Externalisation de l\'examen à des organismes agréés','Places d\'examen vite disponibles.','Peur d\'un examen à deux vitesses.',0,null,{eco:2},{services:1,cohesion:-1},[f('etiquette',56,9,'appear',{label:'Agréé'})]),
  ch('c','Rappeler des inspecteurs retraités','Recours temporaire à des inspecteurs retraités','Rapide et peu coûteux.','Solution provisoire.',-0.02,'Vacations : faible coût, le déficit augmente très peu.',{eco:0},{services:1},[f('file_attente',58,8,'fade')])]},
25:{id:'v33_dimanche',kind:'banal',region:'bretagne',sector:'salaires',title:'Ouvrir les boulangeries les jours fériés et le dimanche ?',
 simple:"Un boulanger veut faire travailler ses salariés un jour férié ; il risque une amende. Une proposition de loi veut l'autoriser, payé double. Les syndicats refusent. Que faire ?",
 expert:"Proposition de loi autorisant le travail des salariés dans les commerces de bouche de proximité lors de certains jours fériés et dimanches, sur la base du volontariat.",
 context:"Pour les uns, liberté de travailler et service aux clients ; pour les autres, le jour de repos commun est un acquis à protéger.",
 real:{date:'Avril 2026',place:'Assemblée nationale',fact:"Une proposition de loi adoptée au Sénat visait à permettre l'ouverture des boulangeries ou fleuristes un jour férié ; le gouvernement l'a mise en pause.",figures:'Part des actifs travaillant le dimanche : 23,5 %.',
  sources:[src('LCP : le gouvernement recule sur l\'ouverture de certains commerces','https://lcp.fr/actualites/1er-mai-le-gouvernement-recule-sur-la-loi-visant-a-permettre-l-ouverture-de-certains'),src('Assemblée nationale : proposition de loi n° 2503','https://www.assemblee-nationale.fr/dyn/17/textes/l17b2503_proposition-loi.pdf')]},
 camera:{region:'bretagne',x:16,y:30,zoom:2.2},
 fx:[f('boulangerie',16,30,'pulse'),f('personnage',19,31,'appear',{delay:.3}),f('panneau',13,29,'appear',{label:'Fermé',delay:.6})],
 choices:[
  ch('a','Autoriser, volontariat et paiement double','Dérogation pour les commerces de bouche, volontariat et salaire doublé','Plus de revenus et de service.','Pression possible sur les salariés.',0.03,'Activité en plus : un peu de recette, le déficit baisse très peu.',{eco:2},{pouvoir_achat:1,cohesion:-1},[f('pieces',18,29,'appear')]),
  ch('b','Laisser chaque branche négocier','Ouverture renvoyée à un accord de branche','Les partenaires sociaux décident.','Lent et inégal.',0,null,{eco:0},{cohesion:1},[f('bulle',17,28,'appear',{label:'Accord'})]),
  ch('c','Garder le repos commun','Maintien de l\'interdiction actuelle','Repos commun protégé.','Petits commerçants mécontents.',0,null,{eco:-1,soc:-1},{cohesion:1,pouvoir_achat:-1},[f('panneau',13,29,'appear',{label:'Repos'})])]}
};
let n=0;for(const[d,e]of Object.entries(ADD)){const D=G.days[+d-1];if(D.events.some(x=>x.id===e.id))continue;D.events.push(e);n++;}
fs.writeFileSync(F,S.slice(0,A)+JSON.stringify(G,null,1)+S.slice(B));console.log(n+' ajoutées');
