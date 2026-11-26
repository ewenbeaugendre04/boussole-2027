// Cohérence des dessins : chaque sprite référencé a un fichier, un ratio et une largeur ; chaque objet des données est connu.
const fs = require('fs'), R = __dirname + '/..';
const ss = fs.readFileSync(R + '/src/art/sprites.js', 'utf8');
const AR = JSON.parse(ss.match(/var SPR_AR = (\{.*?\});/)[1]);
const OBJ = eval('(' + ss.match(/var OBJ_SPR = (\{[\s\S]*?\});/)[1] + ')');
const W = eval('(' + ss.match(/var SPR_W = (\{[\s\S]*?\});/)[1] + ')');
const files = new Set(fs.readdirSync(R + '/assets/sprites').filter(f => f.endsWith('.webp')).map(f => f.slice(0, -5)));
const objs = fs.readFileSync(R + '/src/art/objects.js', 'utf8');
let errs = 0; const err = m => { errs++; console.log('ERREUR : ' + m); };
Object.keys(AR).forEach(k => { if (!files.has(k)) err('ratio sans fichier : ' + k); });
files.forEach(f => { if (!(f in AR)) err('fichier sans ratio : ' + f); });
Object.entries(OBJ).forEach(([o, s]) => { if (!files.has(s)) err('objet ' + o + ' → sprite absent ' + s); if (!(s in W)) err('objet ' + o + ' → largeur manquante pour ' + s); });
[...ss.matchAll(/put\('([a-z_0-9]+)'/g)].forEach(m => { if (!files.has(m[1])) err('décor : sprite absent ' + m[1]); });
const s = fs.readFileSync(R + '/src/data/game_data.js', 'utf8'); const G = JSON.parse(s.slice(s.indexOf('{'), s.lastIndexOf('}') + 1));
const used = new Set(); const walk = o => { if (Array.isArray(o)) o.forEach(walk); else if (o && typeof o === 'object') { if (typeof o.obj === 'string') used.add(o.obj); Object.values(o).forEach(walk); } }; walk(G);
used.forEach(o => { if (!new RegExp('\\n\\s*' + o + ':\\{').test(objs)) err('objet utilisé mais non dessiné dans objects.js : ' + o); });
console.log(errs ? errs + ' erreur(s)' : 'Dessins : OK (' + files.size + ' sprites, ' + used.size + ' objets utilisés)');
process.exit(errs ? 1 : 0);
