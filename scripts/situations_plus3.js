// 3 situations : dissuasion nucléaire (S27), réarmement (S28), animaux abandonnés (S29).
const fs=require('fs'),F=__dirname+'/../src/data/game_data.js',S=fs.readFileSync(F,'utf8'),A=S.indexOf('{'),B=S.lastIndexOf('}')+1,G=JSON.parse(S.slice(A,B));
const f=(obj,x,y,anim,o)=>Object.assign({obj,x,y,anim},o||{});const src=(label,url)=>({label,url});
function ch(id,label,lx,plus,minus,budget,note,axes,ind,fx){const c={id,label,label_expert:lx,plus,minus,budget,axes,ind,fx};if(note)c.budget_note=note;return c;}
const ADD={
27:{id:'v35_dissuasion',kind:'banal',region:'bretagne',sector:'defense',title:'L\'arme atomique française pour protéger l\'Europe ?',
 simple:"La France est le seul pays de l'Union à avoir l'arme atomique. Face aux guerres et aux doutes sur la protection américaine, plusieurs voisins demandent à être associés à sa dissuasion. Que faire ?",
 expert:"« Dissuasion avancée » : association de partenaires européens aux exercices de dissuasion, intérêts vitaux pensés à l'échelle du continent, hausse du nombre de têtes nucléaires.",
 context:"Pour les uns, une Europe mieux protégée et une France plus influente ; pour les autres, un risque de diluer une décision qui doit rester strictement nationale.",
 real:{date:'Discours du 2 mars 2026 à l\'Île Longue ; adhésion de la Finlande le 14 septembre 2026',place:'Île Longue (Finistère), base des sous-marins nucléaires',fact:"Le président de la République a annoncé une « dissuasion avancée » à dimension européenne ; huit pays européens ont accepté un partenariat, puis la Finlande l'a rejoint.",figures:'La France est le seul État de l\'Union européenne doté de l\'arme nucléaire.',
  sources:[src('Vie publique : la « dissuasion avancée », évolution de la doctrine nucléaire','https://www.vie-publique.fr/en-bref/302309-dissuasion-avancee-evolution-doctrine-nucleaire-francaise'),src('Toute l\'Europe : dissuasion nucléaire et doctrine française','https://www.touteleurope.eu/l-ue-dans-le-monde/dissuasion-nucleaire-quelle-doctrine-francaise-face-a-la-menace-de-proliferation/')]},
 camera:{region:'national',x:52,y:40,zoom:1.2},
 fx:[f('missile',18,31,'rise'),f('drapeau_ue',62,8,'appear',{delay:.3}),f('parlement',52,24,'pulse',{delay:.5})],
 choices:[
  ch('a','Associer davantage les Européens','Extension de la dissuasion avancée aux partenaires européens','Europe mieux protégée, France plus influente.','Risque de dilution de la décision.',-0.5,'Exercices communs et forces en plus : le déficit augmente un peu.',{eu:2},{souverainete:1,cohesion:0},[f('drapeau_ue',62,8,'grow')]),
  ch('b','Garder une dissuasion strictement nationale','Maintien d\'une dissuasion exclusivement nationale','Décision 100 % française.','Moins de poids en Europe.',0,null,{eu:-2},{souverainete:1},[f('missile',18,31,'pulse')]),
  ch('c','Faire payer les partenaires','Participation financière des partenaires européens à la dissuasion','Coût partagé.','Les voisins pourraient demander un droit de regard.',0.5,'Contribution des partenaires : un peu de recette, le déficit baisse.',{eu:1},{souverainete:0},[f('pieces',60,10,'appear')]),
  ch('d','Réduire l\'arsenal et relancer le désarmement','Initiative française de désarmement nucléaire multilatéral','Économies et signal de paix.','Moins de protection face aux menaces.',1,'Moins de dépenses nucléaires : le déficit baisse.',{eu:0,soc:-1},{souverainete:-2,cohesion:1},[f('cadenas',18,31,'appear')])]},
28:{id:'v36_rearmement',kind:'banal',region:'grand_est',sector:'defense',title:'Combien dépenser pour réarmer le pays ?',
 simple:"Avec la guerre en Europe, l'armée manque de munitions, de drones et de défense antiaérienne. Le Parlement a ajouté 36 milliards sur cinq ans ; certains veulent 50, d'autres jugent cela trop cher. Que faire ?",
 expert:"Actualisation de la loi de programmation militaire : +36 Md€ sur cinq ans, priorité aux munitions, à la défense sol-air et aux drones ; objectif d'effort de défense à 5 % du PIB à long terme.",
 context:"Plus de dépenses militaires renforcent la sécurité et l'industrie ; mais chaque milliard manque ailleurs ou creuse le déficit.",
 real:{date:'Loi du 16 août 2026',place:'Parlement',fact:"La loi a ajouté 36 milliards d'euros sur cinq ans aux 413 milliards prévus, pour un total de 435,7 milliards ; une commission du Sénat voulait porter l'effort à 50 milliards.",figures:'Budget de la Défense : 57,1 Md€ hors pensions.',
  sources:[src('Vie publique : loi actualisant la programmation militaire','https://www.vie-publique.fr/node/302742'),src('Sénat : compte rendu, effort porté de 36 à 50 milliards en commission','https://www.senat.fr/cra/s20260602/s20260602_mono.html')]},
 camera:{region:'grand_est',x:74,y:22,zoom:1.8},
 fx:[f('char',72,23,'move',{to:{x:77,y:22}}),f('usine',76,20,'smoke',{delay:.3}),f('missile',74,24,'rise',{delay:.6})],
 choices:[
  ch('a','Aller jusqu\'à 50 milliards','Relèvement de l\'effort supplémentaire à 50 Md€ sur cinq ans','Armée renforcée plus vite.','Lourd pour le budget.',-2.8,'14 milliards de plus sur cinq ans : le déficit augmente.',{eu:0,soc:1},{souverainete:2,emploi:1,services:-1},[f('char',72,23,'grow')]),
  ch('b','S\'en tenir aux 36 milliards votés','Maintien de la trajectoire votée','Effort déjà important.','Les armées réclament plus.',0,null,{eu:0},{souverainete:1},[f('usine',76,20,'pulse')]),
  ch('c','Acheter européen en commun','Achats groupés d\'armement avec les partenaires européens','Moins cher, industrie européenne.','Moins de contrôle national.',0.5,'Achats groupés : un peu d\'économies, le déficit baisse.',{eu:2},{souverainete:0,emploi:1},[f('drapeau_ue',75,19,'appear')]),
  ch('d','Ralentir la hausse','Étalement des crédits militaires supplémentaires','Moins de déficit.','Armée moins prête.',2,'Crédits étalés : le déficit baisse.',{soc:-1},{souverainete:-1,services:1},[f('pieces',73,21,'appear')])]},
29:{id:'v37_animaux',kind:'banal',region:'occitanie',sector:'agriculture',title:'Record d\'animaux abandonnés pendant l\'été',
 simple:"Pendant les vacances, près de 10 000 chiens et chats ont été recueillis par la SPA, un record. Les refuges sont pleins. Que faire ?",
 expert:"Hausse des abandons estivaux et des signalements de maltraitance ; saturation des refuges et débat sur la stérilisation des chats et la responsabilisation des acquéreurs.",
 context:"Durcir les règles responsabilise les maîtres ; aider les refuges coûte ; stériliser les chats errants limite les naissances.",
 real:{date:'Été 2026 (bilan publié en septembre)',place:'64 refuges de la SPA en France',fact:"La SPA a recueilli 9 508 animaux en deux mois d'été, un record, dont une grande majorité de chats.",figures:'+20,8 % en un an ; 6 572 chats et 2 220 chiens.',
  sources:[src('La Gazette France : record des abandons dans les refuges de la SPA','https://www.lagazettefrance.fr/article/animaux-record-des-abandons-cet-ete-dans-les-refuges-de-la-spa'),src('Consoglobe : bilan de l\'été dans les refuges','https://www.consoglobe.com/?p=10425759')]},
 camera:{region:'occitanie',x:50,y:78,zoom:2.2},
 fx:[f('chien',49,78,'appear'),f('chat',52,79,'appear',{delay:.3}),f('panneau',51,76,'appear',{label:'Refuge complet',delay:.6})],
 choices:[
  ch('a','Stériliser les chats obligatoirement','Stérilisation obligatoire des chats non destinés à la reproduction','Moins de chatons abandonnés.','Coût pour les propriétaires.',-0.05,'Aide aux communes pour les chats errants : le déficit augmente très peu.',{env:1},{cohesion:1},[f('chat',52,79,'grow')]),
  ch('b','Aider les refuges','Subvention nationale aux refuges et associations','Animaux mieux accueillis.','Ne traite pas la cause.',-0.1,'Subventions : le déficit augmente un peu.',{soc:0},{services:1,cohesion:1},[f('pieces',50,77,'appear')]),
  ch('c','Punir plus fort l\'abandon','Aggravation des sanctions et contrôles de l\'identification','Message dissuasif.','Difficile à prouver.',0.02,'Amendes : petite recette, le déficit baisse très peu.',{soc:1},{cohesion:0},[f('policiers',53,77,'appear')])]}
};
let n=0;for(const[d,e]of Object.entries(ADD)){const D=G.days[+d-1];if(D.events.some(x=>x.id===e.id))continue;D.events.push(e);n++;}
fs.writeFileSync(F,S.slice(0,A)+JSON.stringify(G,null,1)+S.slice(B));console.log(n+' ajoutées');
