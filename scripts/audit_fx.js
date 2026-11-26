// Audit + correction : collisions d'objets, mouvements trop courts, zoom/caméra. Usage : node scripts/audit_fx.js [--fix]
const fs=require('fs'),F=__dirname+'/../src/data/game_data.js',S=fs.readFileSync(F,'utf8'),A=S.indexOf('{'),B=S.lastIndexOf('}')+1,G=JSON.parse(S.slice(A,B));
const FIX=process.argv.includes('--fix');const MIN=2.6;let col=0,mv=0,cam=0;
const d2=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
function spread(list){for(let it=0;it<30;it++){let moved=false;for(let i=0;i<list.length;i++)for(let j=i+1;j<list.length;j++){const a=list[i],b=list[j],d=d2(a,b);if(a.obj!==b.obj&&d<MIN){if(it==0)col++;if(!FIX)continue;let dx=b.x-a.x,dy=b.y-a.y;if(d<.01){dx=1;dy=.4;}const k=(MIN-d)/2/(Math.hypot(dx,dy));a.x=+(a.x-dx*k).toFixed(1);a.y=+(a.y-dy*k).toFixed(1);b.x=+(b.x+dx*k).toFixed(1);b.y=+(b.y+dy*k).toFixed(1);moved=true;}}if(!moved)break;}}
for(const d of G.days)for(const e of d.events){
 const all=[...(e.fx||[])];
 for(const c of e.choices||[]){spread([...all,...(c.fx||[])].filter(o=>!o.to||true));}
 spread(all);
 for(const o of [...all,...(e.choices||[]).flatMap(c=>c.fx||[])]){if((o.anim==='move'||o.anim==='flow')&&o.to&&d2(o,o.to)<4){mv++;if(FIX){const dx=o.to.x-o.x||1,dy=o.to.y-o.y,n=Math.hypot(dx,dy)||1;o.to={x:+(o.x+dx/n*5).toFixed(1),y:+(o.y+dy/n*5).toFixed(1)};}}}
 const c=e.camera;if(c&&c.region!=='national'&&c.region!=='bruxelles'&&c.zoom<1.6&&all.length){const mx=all.reduce((s,o)=>s+o.x,0)/all.length,my=all.reduce((s,o)=>s+o.y,0)/all.length,sp=Math.max(...all.map(o=>d2(o,{x:mx,y:my})));if(sp<12){cam++;if(FIX){c.zoom=2;c.x=+mx.toFixed(1);c.y=+my.toFixed(1);}}}
 if(c&&all.length&&FIX&&c.zoom>=1.6){const mx=all.reduce((s,o)=>s+o.x,0)/all.length,my=all.reduce((s,o)=>s+o.y,0)/all.length;if(Math.hypot(c.x-mx,c.y-my)>6){cam++;c.x=+mx.toFixed(1);c.y=+my.toFixed(1);}}
}
console.log({collisions:col,mouvements_courts:mv,cameras:cam});
if(FIX)fs.writeFileSync(F,S.slice(0,A)+JSON.stringify(G,null,1)+S.slice(B));
