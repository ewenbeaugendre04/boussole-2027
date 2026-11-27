// Donne du mouvement aux scènes statiques : véhicules qui roulent, bâtiments qui sortent du sol, pièces qui montent, foules qui s'agitent.
const fs=require('fs'),F=__dirname+'/../src/data/game_data.js',S=fs.readFileSync(F,'utf8'),A=S.indexOf('{'),B=S.lastIndexOf('}')+1,G=JSON.parse(S.slice(A,B));
const VEH=/^(tracteur|camion|voiture|bus|train|tgv|velo|ambulance|voiture_police|char|avion)$/,MAR=/^(cargo|ferry|bateau_peche|eolienne_mer)$/,MONTE=/^(pieces|euro_flux|colis|missile|fleche)$/,
BAT=/^(maison|immeuble|usine|chantier_grue|ecole|hopital|cabinet_medical|mairie|commissariat|prison|boulangerie|commerce|supermarche|entrepot|parlement|musee|batiment_ue|ferme|centrale_nucleaire|centrale_gaz|eolienne|panneaux_solaires|borne_recharge|antenne|pylone|barrage|port|aeroport|station_service)$/,
GENS=/^(foule|manifestants|barrage_agricole|policiers|soignants|eleves|file_attente|personnage|troupeau|chien|chat)$/,LAB=/^(panneau|bulle|etiquette)$/;
function anime(list){const o=list.find(x=>!LAB.test(x.obj)&&x.anim==='appear');if(!o)return 0;
 if(VEH.test(o.obj)){o.anim='move';o.to={x:+(o.x+4).toFixed(1),y:+(o.y+.6).toFixed(1)};}
 else if(MONTE.test(o.obj))o.anim='rise';else if(BAT.test(o.obj))o.anim='grow';else if(GENS.test(o.obj)||MAR.test(o.obj))o.anim='pulse';else o.anim='pulse';return 1;}
let n=0;G.days.forEach(d=>d.events.forEach(e=>{if((e.fx||[]).every(x=>x.anim==='appear'||x.anim==='fade'))n+=anime(e.fx);(e.choices||[]).forEach(c=>{if((c.fx||[]).every(x=>x.anim==='appear'))n+=anime(c.fx);});}));
fs.writeFileSync(F,S.slice(0,A)+JSON.stringify(G,null,1)+S.slice(B));console.log(n+' scènes animées');
