// Rend leur position d'origine aux superpositions voulues (feu sur forêt, foule devant usine, météo sur un lieu…).
const fs=require('fs'),F=__dirname+'/../src/data/game_data.js';
const rd=p=>{const S=fs.readFileSync(p,'utf8'),A=S.indexOf('{'),B=S.lastIndexOf('}')+1;return{S,A,B,G:JSON.parse(S.slice(A,B))};};
const N=rd(F),O=rd(process.argv[2]);
const DECOR=new Set(['foret','champ','incendie','inondation','canicule','secheresse','neige','tempete','orage','moustique','foule','manifestants','barrage_agricole','policiers','soignants','eleves','file_attente','personnage','troupeau','fumee','bulle','etiquette','panneau','loupe','cadenas','euro_flux','fleche','pieces','drapeau_ue','frontiere','douane']);
const d2=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);let n=0;
const oldEv={};for(const d of O.G.days)for(const e of d.events)oldEv[e.id]=e;
function fix(oldL,newL,ctx){oldL.forEach((o,i)=>{const nw=newL[i];if(!nw||nw.obj!==o.obj)return;const voulu=ctx.some(p=>p!==o&&p.obj!==o.obj&&d2(p,o)<2.6&&(DECOR.has(p.obj)||DECOR.has(o.obj)));if(voulu&&(nw.x!==o.x||nw.y!==o.y)){nw.x=o.x;nw.y=o.y;if(o.to)nw.to=o.to;n++;}});}
for(const d of N.G.days)for(const e of d.events){const o=oldEv[e.id];if(!o)continue;const ofx=o.fx||[];fix(ofx,e.fx||[],ofx);(o.choices||[]).forEach((c,i)=>{const nc=e.choices[i];if(nc)fix(c.fx||[],nc.fx||[],[...ofx,...(c.fx||[])]);});}
fs.writeFileSync(F,N.S.slice(0,N.A)+JSON.stringify(N.G,null,1)+N.S.slice(N.B));console.log(n+' positions restaurées');
