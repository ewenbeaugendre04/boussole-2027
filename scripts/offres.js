// Répartit les propositions offertes (semaines 2 à 30) : une par famille + une en lien avec les situations, 6 semaines d'écart, les moins vues d'abord.
// Usage : DUMP_FAM=/tmp/fam.json node tests/check_data.js && node scripts/offres.js /tmp/fam.json
const fs=require('fs'),F=__dirname+'/../src/data/game_data.js',S=fs.readFileSync(F,'utf8'),A=S.indexOf('{'),B=S.lastIndexOf('}')+1,G=JSON.parse(S.slice(A,B));
const FAM=JSON.parse(fs.readFileSync(process.argv[2]));const fams=Object.keys(FAM);const P={};G.programs.forEach(p=>P[p.id]=p);
const last={},count={};
G.days.forEach((d,i)=>{if(i===0){d.offer=[];return;}
 const secs=new Set(d.events.map(e=>e.sector));const ok=id=>P[id]&&!(last[id]&&d.day-last[id]<6);
 const score=id=>(count[id]||0)*10-(secs.has(P[id].sector)?5:0)+(last[id]?-(d.day-last[id])*0.1:0);
 const pick=[];const rot=fams.slice(i%fams.length).concat(fams.slice(0,i%fams.length));
 for(const f of rot){const c=FAM[f].filter(id=>ok(id)&&!pick.includes(id)).sort((a,b)=>score(a)-score(b))[0];if(c)pick.push(c);}
 if(d.day===G.days.length){const fo=G.programs.filter(p=>p.intensity==='forte'&&ok(p.id)&&!pick.includes(p.id))[0];if(fo)pick.push(fo.id);}
 if(pick.length<6){const all=fams.flatMap(f=>FAM[f]).filter(id=>ok(id)&&!pick.includes(id)).sort((a,b)=>score(a)-score(b));if(all[0])pick.push(all[0]);}
 d.offer=pick.slice(0,6);pick.forEach(id=>{last[id]=d.day;count[id]=(count[id]||0)+1;});});
fs.writeFileSync(F,S.slice(0,A)+JSON.stringify(G,null,1)+S.slice(B));
console.log('jamais offertes :',G.programs.filter(p=>!count[p.id]).map(p=>p.id).join(' ')||'aucune');
