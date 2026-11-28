// Redistribue toutes les situations (semaine 1 gardée) pour alterner thèmes, régions et périodes, en respectant les règles du jeu :
// 3 à 5 situations, au moins 1 banale, 2 grandes décisions dès la semaine 7, un rappel par semaine dès la semaine 2, rappel toujours après la décision rappelée.
// Usage : node scripts/redistribuer.js && DUMP_FAM=/tmp/fam.json node tests/check_data.js >/dev/null; node scripts/offres.js /tmp/fam.json
const fs = require('fs'), F = __dirname + '/../src/data/game_data.js';
const S = fs.readFileSync(F, 'utf8'), A = S.indexOf('{'), B = S.lastIndexOf('}') + 1, G = JSON.parse(S.slice(A, B));
let seed = 7; const R = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const N = G.days.length, first = G.days[0];
const pool = G.days.slice(1).flatMap(d => d.events);
const year = e => { const m = String((e.real || {}).date || '').match(/(19|20)\d\d/); return m ? +m[0] : 0; };
const deps = e => (e.recall || []).map(r => r.event).concat(e.choices.filter(c => c.requires).map(c => c.requires.event));
const placed = new Map(); first.events.forEach(e => placed.set(e.id, 1));
const weeks = [first.events];
let majLeft = pool.filter(e => e.kind === 'majeur').length;
for(let w = 2; w <= N; w++){
  const restW = N - w + 1, rest = pool.length;
  const surplus = rest - 3 * restW, oddLeft = Math.ceil((N - w + 1) / 2);
  let size = surplus > 0 && (w % 2 === 1 || surplus > oddLeft) ? 4 : 3; /* alternance 3 / 4 */
  const needMaj = w >= 7 ? 2 : 0, maxMaj = w < 7 ? 1 : 2;
  const recent = weeks.slice(-3).flat(), prev = weeks[weeks.length - 1];
  const ok = e => deps(e).every(id => placed.has(id) && placed.get(id) < w);
  const pick = [];
  const score = e => {
    let s = R() * .5;
    if(pick.some(x => x.sector === e.sector)) s -= 5;
    if(recent.some(x => x.sector === e.sector)) s -= 3;
    if(prev.some(x => x.region === e.region)) s -= 1.5;
    if(prev.some(x => year(x) && year(x) === year(e))) s -= .7;
    if(e.recall) s += 1.2;
    return s;
  };
  const take = (pred) => { const c = pool.filter(e => !pick.includes(e) && ok(e) && pred(e)).sort((a, b) => score(b) - score(a))[0]; if(c){ pick.push(c); pool.splice(pool.indexOf(c), 1); } return c; };
  // décisions majeures en réserve : on garde assez de majeures pour les semaines restantes
  const majNeededLater = 2 * Math.max(0, N - Math.max(w, 6));
  for(let k = 0; k < needMaj; k++) take(e => e.kind === 'majeur');
  take(e => e.kind === 'banal');
  if(!pick.some(e => e.recall)) take(e => !!e.recall && (e.kind !== 'majeur' || pick.filter(x => x.kind === 'majeur').length < maxMaj));
  while(pick.length < size){
    const majHere = pick.filter(e => e.kind === 'majeur').length;
    const majAvail = pool.filter(e => e.kind === 'majeur').length;
    const allowMaj = majHere < maxMaj && majAvail - 1 >= majNeededLater - 2;
    if(!take(e => allowMaj || e.kind !== 'majeur') && !take(() => true)) break;
  }
  while(pick.length > size){ /* trop de situations imposées : on rend la moins nécessaire */
    const nMaj = pick.filter(e => e.kind === 'majeur').length, nBan = pick.filter(e => e.kind === 'banal').length, nRec = pick.filter(e => e.recall).length;
    const i = pick.findIndex(e => !(e.kind === 'majeur' && nMaj <= needMaj) && !(e.kind === 'banal' && nBan <= 1) && !(e.recall && nRec <= 1));
    if(i < 0) break; pool.push(pick.splice(i, 1)[0]);
  }
  pick.forEach(e => placed.set(e.id, w));
  weeks.push(pick);
}
if(pool.length) { console.log('Reste non placé :', pool.map(e => e.id).join(' ')); weeks[weeks.length - 1].push(...pool.splice(0)); }
console.log('tailles', weeks.map(x=>x.length).join(' '), 'reste', pool.length);
// rappels : textes relatifs adaptés, et un rappel par semaine
const all = weeks.flat(); const wk = id => weeks.findIndex(ws => ws.some(e => e.id === id)) + 1;
all.forEach(e => (e.recall || []).forEach(r => { r.text = r.text.replace(/^La semaine dernière, /, 'Il y a quelque temps, ').replace(/^La semaine passée, /, 'Il y a quelque temps, '); }));
for(let w = 2; w <= N; w++){
  const ws = weeks[w - 1];
  if(ws.some(e => e.recall && e.recall.length)) continue;
  let before = weeks.slice(0, w - 1).flat().filter(e => e.kind === 'majeur'); if(!before.length) before = weeks.slice(0, w - 1).flat();
  const tgt = ws.find(e => before.some(p => p.sector === e.sector)) || ws[0];
  const p = [...before].reverse().find(x => x.sector === tgt.sector) || before[before.length - 1];
  tgt.recall = p.choices.map(c => ({ event:p.id, choice:c.id, text:'Sur un sujet proche (« ' + p.title + ' »), vous aviez choisi : ' + c.label + '.', ind:{}, budget:0 }));
}
// méta des semaines
const SEC = Object.fromEntries(G.sectors.map(s => [s.id, s.label]));
const season = w => w <= 12 ? 'automne' : w <= 25 ? 'hiver' : w <= 36 ? 'printemps' : 'ete';
const WEATHER = { automne:['pluie', 'vent', 'soleil'], hiver:['neige', 'pluie', 'vent'], printemps:['soleil', 'pluie', 'soleil'], ete:['soleil', 'soleil', 'vent'] };
const join = a => a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' et ' + a[a.length - 1];
const lc = t => t.charAt(0).toLowerCase() + t.slice(1);
G.days = weeks.map((evs, i) => {
  const d = G.days[i] || {}; const w = i + 1;
  if(w === 1) return Object.assign(d, { events:evs });
  const secs = [...new Set(evs.map(e => SEC[e.sector] || e.sector))].slice(0, 3).map((t, j) => j ? lc(t) : t);
  const sn = season(w);
  return Object.assign({}, d, { day:w, season:sn, title:join(secs), mood: evs.filter(e => e.kind === 'majeur').length >= 2 ? 'tendu' : 'calme',
    weather:WEATHER[sn][w % 3], intro:'Au programme : ' + join(evs.slice(0, 3).map(e => '« ' + e.title.replace(/[ ?!.]+$/, '') + ' »')) + '.', offer:d.offer || [], events:evs });
});
fs.writeFileSync(F, S.slice(0, A) + JSON.stringify(G, null, 1) + S.slice(B));
console.log(G.days.map(d => d.events.length + (d.events.filter(e => e.kind === 'majeur').length ? 'M' + d.events.filter(e => e.kind === 'majeur').length : '')).join(' '));
