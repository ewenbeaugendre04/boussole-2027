'use strict';
/* =========================================================
   Bibliothèque d'objets animés (v2)
   Repère local : sol en y = 0, x de -w/2 à w/2, y de -h+2 à 2.
   1 unité locale = 0,25 unité de plateau.
   ========================================================= */
function R_(x, y, w, h, f, ex){ return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + f + '"' + (ex || '') + '/>'; }
function P_(d, f, ex){ return '<path d="' + d + '" fill="' + f + '"' + (ex || '') + '/>'; }
function C_(x, y, r, f, ex){ return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + f + '"' + (ex || '') + '/>'; }
var SK = ' stroke="var(--roof-d)" stroke-width=".45" stroke-linejoin="round"';
var SKT = ' stroke="var(--roof-d)" stroke-width=".3" stroke-linejoin="round"';
var LN = ' fill="none" stroke="var(--roof-d)" stroke-width=".5" stroke-linecap="round" stroke-linejoin="round"';
var LIT = '#F2CE77', GLASS = '#AFC0C2', STEEL = '#B4B2AE', OCHRE = '#C9A46A', LILAC = '#8E8494', SAND = '#D9C8A5', CREAM = '#F3ECDF', SLATE = '#5F5A6B';
var SKIN = ['#F1D3B5', '#D9A77C', '#A86F47', '#7A4E33', '#E6BC94'];
var CLOTH = ['#7E6F7C', '#B49A6E', '#5D5669', '#D9CDBB', '#9AA3A0', '#C98F5A', '#6F8A8C', '#A88F9C'];
function sh(rx, cy){ return '<ellipse cx="0" cy="' + (cy || .5) + '" rx="' + (rx || 8) + '" ry="1.3" fill="var(--shadow)" opacity=".16"/>'; }
function wheel(x, y, r){ return C_(x, y, r, 'var(--roof-d)') + C_(x, y, r * .42, STEEL); }
function wins(x0, y0, cols, rows, cw, ch, gx, gy, lit){
  var o = '';
  for(var j = 0; j < rows; j++) for(var i = 0; i < cols; i++) o += R_(F(x0 + i * gx), F(y0 + j * gy), cw, ch, lit ? LIT : 'var(--win)', lit ? ' class="lit"' : '');
  return o;
}
function person(x, y, s, k, extra){
  var skin = SKIN[k % SKIN.length], cloth = CLOTH[(k * 3 + 1) % CLOTH.length];
  return '<g transform="translate(' + x + ',' + y + ') scale(' + (s || 1) + ')">' + '<ellipse cx=".3" cy=".2" rx="1.6" ry=".45" fill="var(--shadow)" opacity=".2"/>' +
    P_('M-1.3,0V-3.4Q-1.3,-5 0,-5Q1.3,-5 1.3,-3.4V0Z', extra && extra.cloth || cloth, SKT) + C_(0, -6.2, 1.15, skin, SKT) + (extra && extra.top || '') + '</g>';
}
function crowd(n, spreadX, spreadY, seed, fn){
  var R = rng(seed || 7), pts = [];
  for(var i = 0; i < n; i++) pts.push([F((R() - .5) * spreadX), F((R() - .2) * spreadY), i]);
  pts.sort(function(a, b){ return a[1] - b[1]; });
  return pts.map(function(p){ return fn ? fn(p[0], p[1], p[2]) : person(p[0], p[1], .95, p[2]); }).join('');
}
function treeL(x, y, s){ return '<g transform="translate(' + x + ',' + y + ') scale(' + s + ')">' + '<ellipse cx=".6" cy=".2" rx="2.4" ry=".7" fill="var(--shadow)" opacity=".18"/>' + R_(-.35, -2.4, .7, 2.4, 'var(--cliff)') + C_(0, -4.4, 2.6, 'var(--forest)') + C_(.9, -3.9, 1.5, 'var(--forest-d)') + '</g>'; }
function houseL(x, y, s, lit){
  return '<g transform="translate(' + x + ',' + y + ') scale(' + s + ')">' + sh(5) +
    P_('M3.5,0l2.4,-1.6v-5.4l-2.4,1.6Z', 'var(--house-side)', SKT) + R_(-3.5, -5.4, 7, 5.4, 'var(--house)', SKT) +
    P_('M-4,-5.4L0,-9.2L4,-5.4Z', 'var(--roof)', SKT) + P_('M0,-9.2l2.4,-1.6l3.9,3.8l-2.3,1.6Z', 'var(--roof-d)', SKT) +
    R_(-2.6, -4, 1.6, 1.5, lit ? LIT : 'var(--win)', lit ? ' class="lit"' : '') + R_(1, -4, 1.6, 1.5, lit ? LIT : 'var(--win)', lit ? ' class="lit"' : '') + R_(-.7, -2.4, 1.4, 2.4, 'var(--roof-d)') + '</g>';
}
function coinL(x, y, r){ return '<g transform="translate(' + x + ',' + y + ')">' + '<ellipse cx="0" cy=".5" rx="' + r + '" ry="' + (r * .42) + '" fill="#A87521"/>' + '<ellipse cx="0" cy="0" rx="' + r + '" ry="' + (r * .42) + '" fill="var(--brass)" stroke="#8A5F18" stroke-width=".3"/></g>'; }
function shutter(x, y, w, h){ return R_(x, y, w, h, '#A49C93', ' class="shut"') ; }
function smokeAt(list){ return list; }
function bladeSet(cx, cy, L, cls){
  var b = '';
  for(var i = 0; i < 3; i++) b += '<path d="M0,0 C.7,-' + (L * .3) + ' .5,-' + (L * .8) + ' 0,-' + L + ' C-.3,-' + (L * .8) + ' -.5,-' + (L * .3) + ' 0,0Z" fill="#FBF8F1" stroke="var(--roof-d)" stroke-width=".25" transform="rotate(' + (i * 120) + ')"/>';
  return '<g transform="translate(' + cx + ',' + cy + ')"><g class="' + (cls || 'rot') + '">' + b + '</g>' + C_(0, 0, .7, '#FBF8F1', SKT) + '</g>';
}

var OBJ = {
  /* ---------------- Transports ---------------- */
  tracteur:{ cat:'transports', w:20, h:16, veh:1, smk:[[2.6,-11]], d:
    sh(7) + P_('M-6.5,-12.5H-1V-4.5H-6.5Z', GLASS, SK) + P_('M-7,-13H-.6V-12H-7Z', 'var(--roof)', SK) +
    P_('M-7,-5H6.5V-7.5Q6.5,-8.4 5.6,-8.4H-1V-12.2H-7Z', OCHRE, SK) + R_(2.2, -11, .9, 2.8, 'var(--roof-d)') +
    '<g class="wh">' + wheel(-4, -3.6, 3.6) + wheel(4.6, -2.1, 2.1) + '</g>' },
  camion:{ cat:'transports', w:26, h:14, veh:1, d:
    sh(11) + R_(-11.5, -10, 15, 7.6, CREAM, SK) + P_('M-11.5,-6.2H3.5', 'none', ' stroke="var(--roof)" stroke-width=".5"') +
    P_('M4,-2.4V-8.6Q4,-9.4 4.8,-9.4H8.2L10.6,-5.8V-2.4Z', 'var(--brass)', SK) + P_('M5.2,-8.4H7.8L9.4,-6H5.2Z', GLASS, SKT) +
    wheel(-8, -1.6, 1.7) + wheel(-4.4, -1.6, 1.7) + wheel(7.2, -1.6, 1.7) },
  voiture:{ cat:'transports', w:16, h:10, veh:1, d:
    sh(6) + P_('M-6.6,-1.6V-4.2Q-6.6,-5.2 -5.6,-5.4L-3.6,-7.8H2.2L4.8,-5.4Q6.6,-5.2 6.6,-4V-1.6Z', LILAC, SK) +
    P_('M-3.2,-7.1H-.6V-5.4H-4.6ZM.2,-7.1H2L3.8,-5.4H.2Z', GLASS, SKT) + wheel(-3.7, -1.5, 1.5) + wheel(3.7, -1.5, 1.5) },
  bus:{ cat:'transports', w:26, h:13, veh:1, d:
    sh(11) + R_(-11.5, -10, 23, 8, 'var(--brass)', SK + ' rx="1.6"') + wins(-10, -8.8, 6, 1, 2.6, 2.6, 3.4, 0) + R_(9, -8.8, 1.8, 6, GLASS, SKT) +
    R_(-11.5, -4.4, 23, .7, 'var(--roof-d)') + wheel(-7.5, -1.7, 1.7) + wheel(7, -1.7, 1.7) },
  train:{ cat:'transports', w:40, h:12, veh:1, d:
    sh(18) + P_('M-19,-.8H19', 'none', ' stroke="var(--rail)" stroke-width=".6"') +
    R_(-19, -8.5, 11.4, 7, CREAM, SK + ' rx="1"') + R_(-6.6, -8.5, 11.4, 7, CREAM, SK + ' rx="1"') + P_('M5.8,-1.5V-8.5H15.5Q18.5,-8.5 19,-5V-1.5Z', 'var(--roof)', SK) +
    wins(-17.8, -7.3, 4, 1, 1.8, 2, 2.6, 0) + wins(-5.4, -7.3, 4, 1, 1.8, 2, 2.6, 0) + R_(15, -7.3, 2.6, 2.2, GLASS, SKT) +
    [-16, -11, -4, 1, 8, 15].map(function(x){ return wheel(x, -1.2, 1); }).join('') },
  tgv:{ cat:'transports', w:44, h:11, veh:1, d:
    sh(20) + P_('M-21,-.8H21', 'none', ' stroke="var(--rail)" stroke-width=".6"') +
    P_('M-21,-1.6V-7.6H8Q14,-7.6 21,-3.2V-1.6Z', CREAM, SK) + P_('M-21,-4H20', 'none', ' stroke="' + SLATE + '" stroke-width="1"') +
    P_('M9,-7.2Q13,-7 16.5,-5H11Z', GLASS, SKT) + wins(-19.5, -6.6, 9, 1, 1.6, 1.6, 3, 0) + [-17, -10, -3, 4, 11].map(function(x){ return wheel(x, -1.1, .9); }).join('') },
  avion:{ cat:'transports', w:28, h:18, veh:1, d:
    '<ellipse cx="0" cy="1" rx="9" ry="1.2" fill="var(--shadow)" opacity=".14"/>' +
    '<g transform="translate(0,-9)">' + P_('M-11,0Q-11,-1.6 -9,-1.8H8Q12,-1.6 12.5,0Q12,1.4 8,1.6H-9Q-11,1.4 -11,0Z', '#FBF8F1', SK) +
    P_('M-10,-1.6L-12,-6H-9.4L-6.4,-1.6Z', 'var(--roof)', SK) + P_('M-2,.8L-6,6.5H-3.6L3,.8Z', CREAM, SK) + P_('M-2,-1.4L-4.5,-4.2H-2.8L2,-1.4Z', 'var(--house-side)', SK) +
    wins(-7, -.8, 7, 1, .9, .9, 2, 0) + R_(9, -.9, 1.6, .9, GLASS) + '</g>' },
  cargo:{ cat:'transports', w:40, h:16, veh:1, sea:1, d:
    '<ellipse cx="0" cy=".3" rx="19" ry="1.4" fill="var(--foam)" opacity=".5"/>' + P_('M-18,-4H18L15.5,0H-16Z', SLATE, SK) + P_('M-18,-4H18L17.6,-3H-17.8Z', 'var(--house-side)') +
    R_(-15, -6.6, 5, 2.6, OCHRE, SKT) + R_(-10, -6.6, 5, 2.6, LILAC, SKT) + R_(-5, -6.6, 5, 2.6, CREAM, SKT) + R_(0, -6.6, 5, 2.6, '#9AA3A0', SKT) +
    R_(-12.5, -9.2, 5, 2.6, CREAM, SKT) + R_(-7.5, -9.2, 5, 2.6, OCHRE, SKT) + R_(-2.5, -9.2, 5, 2.6, LILAC, SKT) +
    R_(9, -10.5, 5, 6.5, 'var(--house)', SK) + wins(9.7, -9.5, 3, 1, 1, 1, 1.4, 0) + R_(11.6, -13, 1.6, 2.6, 'var(--roof)', SKT) },
  ferry:{ cat:'transports', w:34, h:15, veh:1, sea:1, d:
    '<ellipse cx="0" cy=".3" rx="16" ry="1.3" fill="var(--foam)" opacity=".5"/>' + P_('M-15,-4H15.5L13,0H-13Z', '#FBF8F1', SK) + R_(-15, -3.2, 30, .8, 'var(--roof)') +
    R_(-11, -7.4, 21, 3.4, 'var(--house)', SK) + R_(-7, -10.2, 14, 2.8, 'var(--house)', SK) + wins(-10, -6.6, 9, 1, 1.4, 1.2, 2.2, 0) + wins(-6, -9.5, 6, 1, 1.4, 1.1, 2.2, 0) +
    P_('M1.5,-10.2L2.2,-13.2H5L5.2,-10.2Z', 'var(--brass)', SK) },
  bateau_peche:{ cat:'transports', w:18, h:16, veh:1, sea:1, d:
    '<ellipse cx="0" cy=".3" rx="8" ry="1" fill="var(--foam)" opacity=".5"/>' + P_('M-7.5,-3H7.5L5.5,0H-5.8Z', OCHRE, SK) + R_(-1, -6.6, 4.6, 3.6, '#FBF8F1', SK) + R_(.2, -5.8, 1.4, 1.2, GLASS) +
    P_('M-4,-3V-12.5M-4,-12.5L5,-6.6M-4,-11L-7.5,-3.4', 'none', LN) + P_('M-6.6,-5.2L-4.6,-9.4L-3.2,-3.6Z', '#D9CDBB', ' opacity=".8"') },
  velo:{ cat:'transports', w:12, h:13, veh:1, d:
    sh(4) + '<g fill="none" stroke="var(--roof-d)" stroke-width=".55">' + '<circle cx="-3.3" cy="-2.2" r="2.1"/><circle cx="3.3" cy="-2.2" r="2.1"/><path d="M-3.3,-2.2L-1,-5.4H2.8L3.3,-2.2M-1,-5.4L0,-2.2L2.8,-5.4M-1.6,-6.4H-.2M2.6,-6.4L2.8,-5.4"/></g>' +
    P_('M-1.2,-6.4L.8,-10.4L2.6,-9.8L1.6,-6.6Z', CLOTH[6], SKT) + C_(1.3, -11.6, 1, SKIN[1], SKT) },
  ambulance:{ cat:'transports', w:20, h:13, veh:1, d:
    sh(8) + P_('M-8.6,-1.6V-9.4H4L8.4,-5.6V-1.6Z', '#FBF8F1', SK) + P_('M4.4,-8.6L7,-5.8H4.4Z', GLASS, SKT) + R_(-8.6, -4.6, 17, 1, 'var(--brass)') +
    P_('M-3.6,-8.4h1.4v1.4h1.4v1.4h-1.4v1.4h-1.4v-1.4h-1.4v-1.4h1.4z', 'var(--roof-d)') + R_(-1, -10.6, 2.6, 1.2, 'var(--brass)', ' class="blk"') + wheel(-5, -1.5, 1.6) + wheel(5, -1.5, 1.6) },
  voiture_police:{ cat:'transports', w:16, h:11, veh:1, d:
    sh(6) + P_('M-6.6,-1.6V-4.2Q-6.6,-5.2 -5.6,-5.4L-3.6,-7.8H2.2L4.8,-5.4Q6.6,-5.2 6.6,-4V-1.6Z', SLATE, SK) + R_(-6.6, -4.2, 13.2, .9, '#FBF8F1') +
    P_('M-3.2,-7.1H-.6V-5.4H-4.6ZM.2,-7.1H2L3.8,-5.4H.2Z', GLASS, SKT) + R_(-1.4, -9, 1.4, 1.1, 'var(--brass)', ' class="blk"') + R_(0, -9, 1.4, 1.1, '#FBF8F1', ' class="blk b2"') + wheel(-3.7, -1.5, 1.5) + wheel(3.7, -1.5, 1.5) },

  /* ---------------- Énergie ---------------- */
  eolienne:{ cat:'energie', w:20, h:30, spread:1.6, d:
    sh(3) + P_('M-.9,0L-.35,-21H.35L.9,0Z', '#FBF8F1', SK) + bladeSet(0, -21.3, 8.5) },
  eolienne_mer:{ cat:'energie', w:20, h:30, spread:1.7, sea:1, d:
    '<ellipse cx="0" cy=".2" rx="4" ry="1" fill="var(--foam)" opacity=".7"/>' + R_(-1.6, -1.8, 3.2, 1.8, 'var(--brass)', SK) + P_('M-.8,-1.8L-.35,-21H.35L.8,-1.8Z', '#FBF8F1', SK) + bladeSet(0, -21.3, 8.5) },
  centrale_nucleaire:{ cat:'energie', w:30, h:24, smk:[[-7.5,-15.5],[2.5,-15.5]], steam:1, d:
    sh(13) + P_('M-12,0Q-10.4,-7 -11.2,-15.5H-3.8Q-4.6,-7 -3,0Z', '#E7E1D7', SK) + P_('M-2,0Q-.4,-7 -1.2,-15.5H6.2Q5.4,-7 7,0Z', '#E7E1D7', SK) +
    P_('M-11.2,-15.5H-3.8M-1.2,-15.5H6.2', 'none', ' stroke="var(--roof-d)" stroke-width=".6"') + P_('M8,0V-5.5A3.3,3.3 0 0 1 14.6,-5.5V0Z', 'var(--house)', SK) + R_(7, -2, 8.6, 2, 'var(--house-side)', SKT) },
  centrale_gaz:{ cat:'energie', w:24, h:26, smk:[[-5,-21],[0,-21]], d:
    sh(10) + R_(-6, -21, 2, 21, 'var(--house-side)', SK) + R_(-1, -21, 2, 21, 'var(--house-side)', SK) + R_(-6, -19, 2, .8, 'var(--brass)') + R_(-1, -19, 2, .8, 'var(--brass)') +
    R_(-10, -7, 20, 7, 'var(--house)', SK) + P_('M-10,-7L-6,-9.5H10V-7Z', 'var(--roof)', SK) + wins(-8.5, -5.2, 6, 1, 1.6, 1.4, 2.7, 1) + R_(5, -12, 5, 5, STEEL, SK + ' rx="2.4"') },
  panneaux_solaires:{ cat:'energie', w:24, h:12, spread:1.6, d:
    sh(10) + [-6.5, 0, 6.5].map(function(x){ return '<g transform="translate(' + x + ',0)">' + P_('M0,-1.5V-3.2', 'none', LN) + P_('M-3,-3.2L-1.6,-7.6H3.4L2,-3.2Z', SLATE, SK) +
      P_('M-2.3,-5.4H2.7M-.5,-7.6L-1,-3.2M1.4,-7.6L.6,-3.2', 'none', ' stroke="#8F95A8" stroke-width=".3"') + '</g>'; }).join('') },
  barrage:{ cat:'energie', w:30, h:18, d:
    P_('M-14,-12Q0,-15 14,-12V-9Q0,-11.5 -14,-9Z', 'var(--sea-hi)', SKT) + P_('M-14,-9Q0,-11.5 14,-9L12,0Q0,-2 -12,0Z', '#CFC8BC', SK) +
    P_('M-6,-10.4V-1.2M0,-10.8V-1.6M6,-10.4V-1.2', 'none', ' stroke="var(--house-side)" stroke-width=".5"') + P_('M-2,-1.6Q0,1 2,-1.6L2.6,1.8H-2.6Z', 'var(--foam)', ' class="flk"') + R_(-13, -16, 4, 4, 'var(--house)', SK) },
  pylone:{ cat:'energie', w:18, h:28, d:
    sh(4) + '<g fill="none" stroke="var(--roof-d)" stroke-width=".55" stroke-linejoin="round"><path d="M-3.5,0L-1,-22H1L3.5,0M-2.6,-8L2.6,-8M-1.8,-15H1.8M-3,-4L2,-12M3,-4L-2,-12M-1.6,-12L1.4,-19M1.6,-12L-1.4,-19M-7,-18H7M-5.5,-21.5H5.5"/></g>' +
    P_('M-9,-17.4Q-8,-15 -7,-18M7,-18Q8,-15 9,-17.4M-9,-21Q-7.5,-19 -5.5,-21.5M5.5,-21.5Q7.5,-19 9,-21', 'none', ' stroke="var(--roof-d)" stroke-width=".25"') },
  borne_recharge:{ cat:'energie', w:14, h:14, d:
    sh(5) + R_(-5, -9.5, 3.4, 9.5, CREAM, SK + ' rx=".8"') + R_(-4.3, -8.4, 2, 2.2, GLASS) + P_('M-3.6,-5.6L-3,-4.4H-3.8L-3.2,-3.2', 'none', ' stroke="var(--brass)" stroke-width=".4"') +
    P_('M-1.6,-4Q1,-4 1.4,-1.8', 'none', LN) + '<g transform="translate(4,0) scale(.55)">' + P_('M-6.6,-1.6V-4.2Q-6.6,-5.2 -5.6,-5.4L-3.6,-7.8H2.2L4.8,-5.4Q6.6,-5.2 6.6,-4V-1.6Z', '#9AA3A0', SK) + wheel(-3.7, -1.5, 1.5) + wheel(3.7, -1.5, 1.5) + '</g>' },
  station_service:{ cat:'energie', w:26, h:16, d:
    sh(11) + R_(-11, -12, 22, 1.8, 'var(--brass)', SK) + R_(-9.5, -10.2, .9, 10.2, STEEL) + R_(8.6, -10.2, .9, 10.2, STEEL) +
    R_(-5, -5, 2.6, 5, CREAM, SK) + R_(2.4, -5, 2.6, 5, CREAM, SK) + R_(-4.5, -4.2, 1.6, 1.2, GLASS) + R_(2.9, -4.2, 1.6, 1.2, GLASS) + R_(-12, -6, 3, 6, 'var(--house)', SK) },

  /* ---------------- Bâtiments ---------------- */
  maison:{ cat:'batiments', w:16, h:16, d: houseL(0, 0, 1.15) },
  immeuble:{ cat:'batiments', w:16, h:26, d:
    sh(6) + P_('M5,0l2.5,-1.6V-21.6L5,-20Z', 'var(--house-side)', SK) + R_(-5, -20, 10, 20, 'var(--house)', SK) + P_('M-5,-20L-2.5,-21.6H7.5L5,-20Z', 'var(--roof)', SK) +
    wins(-3.8, -18.6, 3, 6, 1.8, 1.8, 2.9, 2.9, 1) + R_(-1, -2.6, 2, 2.6, 'var(--roof-d)') },
  usine:{ cat:'batiments', w:28, h:22, smk:[[8,-18.5]], d:
    sh(12) + R_(6.8, -18.5, 2.4, 13, 'var(--house-side)', SK) + R_(6.8, -17, 2.4, .8, 'var(--brass)') +
    P_('M-12,0V-8L-8,-11.5V-8L-4,-11.5V-8L0,-11.5V-8L4,-11.5V-8L12,-8V0Z', 'var(--house)', SK) + P_('M-12,-8L-8,-11.5V-8L-4,-11.5V-8L0,-11.5V-8L4,-11.5V-8Z', 'var(--roof)', SKT) +
    wins(-10.6, -6.4, 7, 1, 2, 2.2, 3, 0, 1) + R_(7, -3.6, 3.4, 3.6, 'var(--roof-d)') + shutter(7, -3.6, 3.4, 3.6) },
  usine_fermee:{ cat:'batiments', w:28, h:20, d:
    sh(12) + R_(6.8, -18.5, 2.4, 13, 'var(--house-side)', SK) +
    P_('M-12,0V-8L-8,-11.5V-8L-4,-11.5V-8L0,-11.5V-8L4,-11.5V-8L12,-8V0Z', '#D8D0C3', SK) + P_('M-12,-8L-8,-11.5V-8L-4,-11.5V-8L0,-11.5V-8L4,-11.5V-8Z', 'var(--roof-d)', SKT) +
    wins(-10.6, -6.4, 7, 1, 2, 2.2, 3, 0, 0) + P_('M-10.6,-6.4l2,2.2M-7.6,-6.4l2,2.2M-1.6,-6.4l2,2.2', 'none', ' stroke="var(--roof-d)" stroke-width=".4"') + R_(7, -3.6, 3.4, 3.6, '#A49C93', SK) +
    P_('M-11,-1H-6', 'none', ' stroke="var(--forest)" stroke-width="1.2" stroke-linecap="round"') },
  chantier_grue:{ cat:'batiments', w:28, h:30, d:
    sh(12) + '<g fill="none" stroke="var(--roof-d)" stroke-width=".4">' + '<path d="M-10,0V-7H-2V0M-10,-3.5H-2M-6,0V-7"/></g>' + R_(-10, -7.6, 8, .6, 'var(--brass)') +
    '<g fill="none" stroke="var(--brass)" stroke-width=".6" stroke-linejoin="round"><path d="M3,0V-24M5,0V-24M3,-4L5,-8L3,-12L5,-16L3,-20L5,-24"/></g>' +
    '<g class="swing"><path d="M-8,-24.5H13M4,-27.5L-8,-24.5M4,-27.5L13,-24.5" fill="none" stroke="var(--brass)" stroke-width=".7"/>' + R_(10.5, -24, 2.6, 2, SLATE) + P_('M-5,-24.5V-15', 'none', ' stroke="var(--roof-d)" stroke-width=".25"') + R_(-6, -15, 2, 1.4, 'var(--roof-d)') + '</g>' + R_(2.6, -25, 2.8, 2, 'var(--house)', SK) },
  ecole:{ cat:'batiments', w:24, h:20, d:
    sh(10) + R_(-10, -9, 20, 9, CREAM, SK) + P_('M-11,-9L0,-13L11,-9Z', 'var(--roof)', SK) + R_(-2, -16, 4, 3.4, 'var(--house)', SK) + C_(0, -14.4, 1, LIT, SKT) +
    wins(-8.6, -7, 4, 1, 2.4, 2.4, 3.6, 0, 1) + wins(3.2, -7, 2, 1, 2.4, 2.4, 3.6, 0, 1) + R_(-1, -3.6, 2, 3.6, 'var(--roof-d)') +
    P_('M-12,0V-2.2M-12,-1.6H-10.5', 'none', LN) },
  hopital:{ cat:'batiments', w:26, h:24, d:
    sh(11) + P_('M10,0l2,-1.4V-15.4L10,-14Z', 'var(--house-side)', SK) + R_(-10, -14, 20, 14, '#FBF8F1', SK) + P_('M-10,-14L-8,-15.4H12L10,-14Z', 'var(--roof)', SK) +
    wins(-8.6, -12.4, 6, 3, 1.7, 1.6, 2.8, 3.3, 1) + R_(-3, -20, 6, 6, 'var(--house)', SK) + P_('M-.8,-19h1.6v1.6h1.6v1.6h-1.6v1.6h-1.6v-1.6h-1.6v-1.6h1.6z', 'var(--roof-d)') + R_(-2, -3, 4, 3, GLASS, SKT) },
  cabinet_medical:{ cat:'batiments', w:16, h:17, d:
    houseL(0, 0, 1) + R_(2.6, -7.4, 3, 3, '#FBF8F1', SKT) + P_('M3.6,-7h.8v.9h.9v.8h-.9v.9h-.8v-.9h-.9v-.8h.9z', 'var(--roof-d)') },
  mairie:{ cat:'batiments', w:26, h:24, d:
    sh(11) + R_(-10, -10, 20, 10, CREAM, SK) + P_('M-11,-10L0,-14.5L11,-10Z', 'var(--house)', SK) + C_(0, -11.6, 1.3, '#FBF8F1', SKT) + P_('M0,-12.4V-11.6H.6', 'none', ' stroke="var(--roof-d)" stroke-width=".25"') +
    [-8, -4.6, -1.2, 2.2, 5.6].map(function(x){ return R_(x, -8.6, 1, 8.6, '#FBF8F1', SKT); }).join('') + wins(-7, -6.6, 5, 1, 1.4, 1.8, 3.4, 0, 1) +
    P_('M0,-14.5V-20.5', 'none', LN) + P_('M0,-20.5H3.6L3,-19.4L3.6,-18.3H0Z', 'var(--paper)', SKT) },
  commissariat:{ cat:'batiments', w:22, h:18, d:
    sh(9) + R_(-9, -11, 18, 11, 'var(--house)', SK) + P_('M-9.6,-11H9.6V-12.6H-9.6Z', 'var(--roof)', SK) + R_(-5, -10.2, 10, 1.8, SLATE) +
    P_('M-3.6,-9.3H3.6', 'none', ' stroke="#FBF8F1" stroke-width=".5" stroke-dasharray=".8 .5"') + wins(-7.6, -7, 5, 1, 1.8, 2, 3.2, 0, 1) + R_(-1.2, -3.6, 2.4, 3.6, 'var(--roof-d)') + C_(6.6, -14, 1, 'var(--brass)', ' class="blk"') + P_('M6.6,-12.6V-13', 'none', LN) },
  prison:{ cat:'batiments', w:28, h:18, d:
    sh(12) + R_(-12, -7, 24, 7, '#C9C1B4', SK) + R_(-13, -11, 4, 11, '#BDB4A6', SK) + R_(9, -11, 4, 11, '#BDB4A6', SK) + P_('M-13.4,-11L-11,-13L-8.6,-11ZM8.6,-11L11,-13L13.4,-11Z', 'var(--roof-d)') +
    R_(-5, -11.5, 10, 4.5, 'var(--house)', SK) + '<g stroke="var(--roof-d)" stroke-width=".35">' + [-3.6, -1.2, 1.2, 3.6].map(function(x){ return '<path d="M' + x + ',-10.6V-8.2M' + (x - .5) + ',-10.6V-8.2"/>'; }).join('') + '</g>' + R_(-1.4, -3.4, 2.8, 3.4, 'var(--roof-d)') },
  boulangerie:{ cat:'batiments', w:18, h:18, d:
    sh(7) + R_(-7, -12, 14, 12, CREAM, SK) + P_('M-7.6,-12H7.6V-13.6H-7.6Z', 'var(--roof)', SK) + R_(-5.6, -11.2, 11.2, 1.8, OCHRE) +
    '<path d="M-3.6,-10.3Q0,-11.2 3.6,-10.3" stroke="#FBF8F1" stroke-width=".7" fill="none" stroke-linecap="round"/>' +
    P_('M-7.4,-8.6H7.4L6.4,-7H-6.4Z', 'var(--brass)', SKT) + R_(-5.6, -6.4, 6, 4.6, LIT, ' class="lit"') + R_(1.6, -6.4, 3.4, 6.4, 'var(--roof-d)') + shutter(-5.6, -6.4, 6, 4.6) },
  commerce:{ cat:'batiments', w:18, h:17, d:
    sh(7) + R_(-7, -11, 14, 11, 'var(--house)', SK) + P_('M-7.6,-11H7.6V-12.4H-7.6Z', 'var(--roof)', SK) +
    [0, 1, 2, 3, 4, 5, 6].map(function(i){ return P_('M' + (-7.4 + i * 2.1) + ',-8.6h2.1l-.3,1.8h-1.5z', i % 2 ? '#FBF8F1' : 'var(--brass)', SKT); }).join('') +
    R_(-5.6, -6.2, 7, 4.4, LIT, ' class="lit"') + R_(2.4, -6.2, 3, 6.2, 'var(--roof-d)') + shutter(-5.6, -6.2, 7, 4.4) },
  supermarche:{ cat:'batiments', w:30, h:16, d:
    sh(13) + R_(-13, -9, 26, 9, CREAM, SK) + R_(-13.6, -10.6, 27.2, 1.8, 'var(--roof)', SK) + R_(-6, -8.6, 12, 2, 'var(--brass)') +
    R_(-10, -5.6, 20, 4, LIT, ' class="lit"') + P_('M-4,-4.2H-2L-1.4,-2.4H.6L1,-3.6', 'none', LN) + C_(-1.2, -1.7, .35, 'var(--roof-d)') + C_(.4, -1.7, .35, 'var(--roof-d)') + shutter(-10, -5.6, 20, 4) },
  entrepot:{ cat:'batiments', w:30, h:16, d:
    sh(13) + P_('M-13,0V-7Q0,-13 13,-7V0Z', '#D8D2C6', SK) + P_('M-13,-7Q0,-13 13,-7', 'none', ' stroke="var(--roof)" stroke-width="1.2"') +
    R_(-9, -5, 4, 5, 'var(--roof-d)') + R_(-3, -5, 4, 5, 'var(--roof-d)') + R_(3, -5, 4, 5, 'var(--roof-d)') + P_('M-9,-3.6H-5M-3,-3.6H1M3,-3.6H7', 'none', ' stroke="#A49C93" stroke-width=".3"') },
  port:{ cat:'batiments', w:30, h:24, sea:1, d:
    R_(-14, -3, 28, 3, '#BDB4A6', SK) + P_('M-14,0H14', 'none', ' stroke="var(--foam)" stroke-width=".8"') +
    '<g fill="none" stroke="var(--brass)" stroke-width=".8" stroke-linejoin="round"><path d="M-8,-3V-18M-3,-3V-18M-10,-18H8M-8,-12H-3"/></g>' + R_(4.6, -19, 3.4, 2, SLATE) + P_('M6,-17V-11', 'none', ' stroke="var(--roof-d)" stroke-width=".25"') +
    R_(2, -6, 4.6, 3, OCHRE, SKT) + R_(6.6, -6, 4.6, 3, LILAC, SKT) + R_(4.2, -9, 4.6, 3, CREAM, SKT) },
  aeroport:{ cat:'batiments', w:34, h:24, d:
    P_('M-16,0L-12,-3H16L13,0Z', '#AEA79C') + P_('M-12,-1.5H13', 'none', ' stroke="#FBF8F1" stroke-width=".4" stroke-dasharray="1.4 1"') +
    R_(-4, -9, 18, 5.6, CREAM, SK) + R_(-3, -8, 16, 2, GLASS, SKT) + R_(-12, -16, 2.4, 13, 'var(--house)', SK) + P_('M-13.6,-16H-8V-19.6H-13.6Z', GLASS, SK) + P_('M-14,-19.6H-7.6L-8.6,-21H-13Z', 'var(--roof)', SKT) + C_(-10.8, -21.6, .5, 'var(--brass)', ' class="blk"') },
  parlement:{ cat:'batiments', w:30, h:24, d:
    sh(13) + R_(-13, -2, 26, 2, '#E3DCD0', SK) + R_(-11, -11, 22, 9, CREAM, SK) + [-9.6, -6.4, -3.2, 0, 3.2, 6.4].map(function(x){ return R_(x + .3, -10.4, 1.4, 8.4, '#FBF8F1', SKT); }).join('') +
    P_('M-12,-11L0,-15.4L12,-11Z', '#EDE7DC', SK) + P_('M-4.4,-15.4Q-4.4,-21 0,-21Q4.4,-21 4.4,-15.4Z', 'var(--house-side)', SK) + P_('M0,-21V-23', 'none', LN) },
  musee:{ cat:'batiments', w:30, h:24, d:
    sh(13) + R_(-13, -2, 26, 2, '#E3DCD0', SK) + R_(-11, -10, 22, 8, CREAM, SK) +
    P_('M-6,-2L0,-11L6,-2Z', GLASS, SK) + P_('M-3,-2L0,-7L3,-2M-6,-2L0,-11', 'none', ' stroke="#FBF8F1" stroke-width=".35"') +
    wins(-10, -8.6, 2, 2, 1.6, 2, 2.4, 3, 1) + wins(6.4, -8.6, 2, 2, 1.6, 2, 2.4, 3, 1) +
    P_('M-12,-10L-11,-12H11L12,-10Z', 'var(--roof)', SK) + R_(-8, -12.8, 3, .8, 'var(--brass)') + R_(5, -12.8, 3, .8, 'var(--brass)') },
  batiment_ue:{ cat:'batiments', w:28, h:26, d:
    sh(12) + P_('M-11,0V-15Q0,-20 11,-15V0Z', GLASS, SK) + P_('M-11,-11Q0,-16 11,-11M-11,-7Q0,-12 11,-7M-11,-3Q0,-8 11,-3M-5.5,-17.6V0M0,-18.6V0M5.5,-17.6V0', 'none', ' stroke="#FBF8F1" stroke-width=".35"') +
    '<g transform="translate(0,-22)">' + [0,1,2,3,4,5,6,7,8,9,10,11].map(function(i){ var a = i / 12 * Math.PI * 2; return C_(F(Math.cos(a) * 2.6), F(Math.sin(a) * 2.6), .42, 'var(--brass)'); }).join('') + '</g>' },
  ferme:{ cat:'batiments', w:26, h:20, d:
    sh(11) + R_(-11, -8, 13, 8, 'var(--cliff-2)', SK) + P_('M-12,-8L-4.5,-13L3,-8Z', 'var(--roof)', SK) + P_('M-7,0V-4.6H-2V0ZM-7,-4.6L-2,0M-2,-4.6L-7,0', 'none', ' stroke="#F3ECDF" stroke-width=".4"') +
    R_(4.5, -13, 4.6, 13, '#CFC8BC', SK + ' rx="2.3"') + P_('M4.5,-11Q6.8,-14.2 9.1,-11', 'var(--roof)', SKT) + C_(-4.5, -10, .8, 'var(--house)') },

  /* ---------------- Personnes ---------------- */
  foule:{ cat:'personnes', w:22, h:12, d: crowd(11, 18, 5, 3) },
  manifestants:{ cat:'personnes', w:22, h:16, d: crowd(7, 18, 4, 5) +
    '<g>' + P_('M-5,-4V-12.5', 'none', LN) + R_(-8, -15.5, 6, 3.4, 'var(--paper)', SK) + P_('M-7,-14.2H-3.2M-7,-13.2H-4', 'none', ' stroke="var(--roof)" stroke-width=".35"') +
    P_('M5,-4V-12', 'none', LN) + R_(2.2, -15, 5.6, 3.2, 'var(--brass)', SK) + P_('M3,-13.8H7M3,-12.8H6', 'none', ' stroke="var(--roof-d)" stroke-width=".35"') + '</g>' },
  barrage_agricole:{ cat:'personnes', w:26, h:16, d:
    sh(12) + [-9, -4, 1].map(function(x){ return '<g transform="translate(' + x + ',0)">' + '<ellipse cx="0" cy="-2.2" rx="2.4" ry="2.3" fill="#E1C47F" stroke="#A88A4A" stroke-width=".35"/><ellipse cx="-1" cy="-2.2" rx=".9" ry="2.1" fill="#D6B66A" stroke="#A88A4A" stroke-width=".3"/></g>'; }).join('') +
    '<ellipse cx="7" cy="-1" rx="2.2" ry="1" fill="var(--roof-d)"/><ellipse cx="7" cy="-1.9" rx="2.2" ry="1" fill="var(--roof-d)"/><ellipse cx="7" cy="-1.9" rx="1" ry=".4" fill="' + SLATE + '"/>' +
    person(-6.5, 1.2, .9, 1) + person(4, 1.4, .9, 2) + person(10.5, 1, .9, 4) },
  policiers:{ cat:'personnes', w:20, h:12, d: crowd(5, 15, 3, 9, function(x, y, k){ return person(x, y, .95, k, { cloth:SLATE, top:'<path d="M-1.3,-7.1H1.3V-7.6Q0,-8.4 -1.3,-7.6Z" fill="' + SLATE + '"/>' }); }) +
    R_(-8.6, -4.6, 2.4, 3.6, GLASS, SKT + ' opacity=".8"') },
  soignants:{ cat:'personnes', w:20, h:12, d: crowd(4, 13, 3, 11, function(x, y, k){ return person(x, y, .95, k, { cloth:'#FBF8F1', top:'<path d="M-.3,-3.6h.6v.6h.6v.6h-.6v.6h-.6v-.6h-.6v-.6h.6z" fill="var(--roof-d)"/>' }); }) },
  eleves:{ cat:'personnes', w:20, h:10, d: crowd(5, 15, 3, 13, function(x, y, k){ return person(x, y, .72, k, { top:'<rect x="-2.2" y="-4.6" width="1.2" height="2.2" rx=".4" fill="var(--brass)"/>' }); }) },
  file_attente:{ cat:'personnes', w:26, h:10, d: [0, 1, 2, 3, 4, 5].map(function(i){ return person(-10 + i * 4, 0, .9, i + 2); }).join('') },
  personnage:{ cat:'personnes', w:8, h:10, d: person(0, 0, 1.2, 2) },

  /* ---------------- Nature et climat ---------------- */
  champ:{ cat:'nature', w:26, h:12, d:
    P_('M-12,0L-8,-8H12L8,0Z', '#E3CC8C', SKT) + P_('M-10.5,-2H9.5M-9.5,-4H10.5M-8.5,-6H11.3', 'none', ' stroke="#C9A85E" stroke-width=".5"') },
  troupeau:{ cat:'nature', w:22, h:10, d: crowd(5, 16, 4, 17, function(x, y){ return '<g transform="translate(' + x + ',' + y + ')">' + '<ellipse cx=".3" cy=".2" rx="2.2" ry=".5" fill="var(--shadow)" opacity=".18"/>' +
    P_('M-1.4,0V-1.4M1.2,0V-1.4', 'none', LN) + '<ellipse cx="0" cy="-2.2" rx="2.2" ry="1.4" fill="#FBF8F1" stroke="var(--roof-d)" stroke-width=".3"/>' + '<ellipse cx="2.2" cy="-2.7" rx=".9" ry=".7" fill="' + SLATE + '"/></g>'; }) },
  foret:{ cat:'nature', w:22, h:16, d: treeL(-6, -1, 1) + treeL(4, -1.5, 1.15) + treeL(-1, 1, 1.2) + treeL(7, 1.4, .9) + treeL(-8.5, 1.6, .85) },
  incendie:{ cat:'nature', w:22, h:20, smk:[[-2,-12],[3,-10]], dark:1, d:
    sh(9) + treeL(-6, 0, .9) + treeL(6, 0, .8) + '<g class="flk">' + P_('M-6,0Q-7,-6 -3,-9Q-3,-6 -1,-5Q-1,-10 2,-13Q2,-8 5,-6Q6,-3 5,0Z', '#E58A3A', ' stroke="#B9632A" stroke-width=".3"') +
    P_('M-3.6,0Q-4,-4 -1.6,-6Q-1.2,-3.5 .4,-3Q.6,-6.4 2.6,-8Q3,-4 3.6,0Z', '#F6C25B') + '</g>' },
  inondation:{ cat:'nature', w:26, h:14, d:
    '<ellipse cx="0" cy="-1" rx="12.5" ry="3.4" fill="var(--river)" stroke="var(--sea-deep)" stroke-width=".3"/>' + houseL(-2, -.6, .8) + R_(-6, -1.6, 9, 1.6, 'var(--river)', ' opacity=".85"') +
    '<g class="bobw">' + P_('M-10,-1.2q1,-.6 2,0t2,0M4,-.4q1,-.6 2,0t2,0M-4,1q1,-.6 2,0t2,0', 'none', ' stroke="var(--foam)" stroke-width=".4"') + '</g>' },
  canicule:{ cat:'nature', w:22, h:20, d:
    C_(0, -12, 4.4, '#F2B95A', SK) + '<g class="rot slow" style="transform-origin:0px -12px">' + [0,1,2,3,4,5,6,7].map(function(i){ return '<path d="M0,-18.2V-20" transform="rotate(' + (i * 45) + ' 0 -12)" stroke="var(--roof-d)" stroke-width=".6" stroke-linecap="round"/>'; }).join('') + '</g>' +
    '<g class="bobw">' + P_('M-9,-2q1.5,-1.2 3,0t3,0 3,0 3,0 3,0 3,0M-7,-4.6q1.5,-1.2 3,0t3,0 3,0 3,0 3,0', 'none', ' stroke="#D98E3C" stroke-width=".55" stroke-linecap="round"') + '</g>' },
  secheresse:{ cat:'nature', w:24, h:14, d:
    '<ellipse cx="0" cy="-1" rx="11" ry="3" fill="#DCC08A" stroke="#B8975A" stroke-width=".3"/>' + P_('M-7,-1.4L-4,-.6L-2,-2L1,-1L3,-2.6M-3,-.6L-2,1M1,-1L2,.6L5,0M3,-2.6L6,-2', 'none', ' stroke="#9C7A45" stroke-width=".35"') +
    P_('M7,-1.5V-7M7,-5L9,-7M7,-4L5,-6M7,-6.4L8,-8', 'none', ' stroke="var(--cliff)" stroke-width=".6" stroke-linecap="round"') },
  neige:{ cat:'nature', w:20, h:16, d:
    P_('M-9,0Q-6,-5 -2,-3.4Q1,-7 5,-4Q8,-3.6 9,0Z', '#FBFAF4', SK) + '<g class="fall">' + [[-6,-10],[-1,-13],[4,-11],[7,-8],[-4,-7],[1,-8.5]].map(function(p){ return C_(p[0], p[1], .6, '#FBFAF4', ' stroke="var(--roof-d)" stroke-width=".15"'); }).join('') + '</g>' },
  tempete:{ cat:'nature', w:24, h:22, d:
    '<g class="rot slow" style="transform-origin:0px -14px">' + P_('M0,-14m-7,0a7,4 0 1,0 14,0a7,4 0 1,0 -14,0', '#8E8A98', SK) + P_('M-4,-14Q0,-17 4,-14Q0,-12 -2,-14', 'none', ' stroke="#FBF8F1" stroke-width=".5"') + '</g>' +
    '<g class="fall">' + P_('M-6,-9l-2,4M-2,-9l-2,4M2,-9l-2,4M6,-9l-2,4M-4,-4l-2,4M0,-4l-2,4M4,-4l-2,4', 'none', ' stroke="#7C8A9A" stroke-width=".5" stroke-linecap="round"') + '</g>' },
  orage:{ cat:'nature', w:22, h:22, d:
    P_('M-8,-11h14a4,4 0 0 0 0,-8 5.5,5.5 0 0 0 -10.5,-1.4A4.4,4.4 0 0 0 -8,-11z', '#8E8A98', SK) + P_('M0,-11L-2.6,-5H.2L-1.6,1L4,-7H1L2.6,-11Z', 'var(--brass)', ' class="blk" stroke="#8A5F18" stroke-width=".3"') },
  moustique:{ cat:'nature', w:12, h:12, d:
    '<g transform="translate(0,-6)">' + '<g class="buzz">' + '<ellipse cx="-1" cy="-2" rx="2.2" ry="1" fill="#E7EEF0" opacity=".8" stroke="var(--roof-d)" stroke-width=".15" transform="rotate(-30 -1 -2)"/><ellipse cx="1" cy="-2" rx="2.2" ry="1" fill="#E7EEF0" opacity=".8" stroke="var(--roof-d)" stroke-width=".15" transform="rotate(30 1 -2)"/></g>' +
    '<ellipse cx="0" cy="0" rx="2.8" ry=".7" fill="var(--roof-d)"/>' + C_(3, -.3, .7, 'var(--roof-d)') + P_('M3.6,-.2L5.4,.4M-1,.4L-2,2.4M0,.4L0,2.6M1,.4L2,2.4', 'none', ' stroke="var(--roof-d)" stroke-width=".25"') + '</g>' },

  /* ---------------- Symboles et infos ---------------- */
  drapeau_ue:{ cat:'symboles', w:14, h:20, d:
    sh(3) + P_('M-4,0V-18', 'none', LN) + '<g class="flagw">' + P_('M-4,-17.6Q0,-18.6 2,-17.6T7,-17.6V-11Q4,-12 2,-11T-4,-11Z', '#FBF8F1', SK) +
    '<g transform="translate(1.6,-14.3)">' + [0,1,2,3,4,5,6,7,8,9,10,11].map(function(i){ var a = i / 12 * Math.PI * 2; return C_(F(Math.cos(a) * 2), F(Math.sin(a) * 2), .32, 'var(--brass)'); }).join('') + '</g></g>' },
  frontiere:{ cat:'symboles', w:28, h:10, d:
    P_('M-13,-1H13', 'none', ' stroke="var(--roof-d)" stroke-width=".6" stroke-dasharray="1.6 1"') + [-10, -3, 4, 11].map(function(x){ return R_(x - .5, -4, 1, 4, '#FBF8F1', SKT) + R_(x - .5, -4, 1, 1, 'var(--brass)'); }).join('') },
  douane:{ cat:'symboles', w:24, h:14, d:
    sh(10) + R_(-10, -9, 6, 9, CREAM, SK) + P_('M-10.6,-9H-3.4V-10.4H-10.6Z', 'var(--roof)', SK) + R_(-9, -7.4, 4, 2.4, GLASS, SKT) +
    R_(-2.4, -4.6, 1.4, 4.6, SLATE) + '<g class="barrier" style="transform-origin:-1.7px -4px">' + R_(-1.7, -4.6, 12.5, 1.1, '#FBF8F1', SKT) + R_(1, -4.6, 2, 1.1, 'var(--brass)') + R_(5, -4.6, 2, 1.1, 'var(--brass)') + '</g>' },
  panneau:{ cat:'symboles', w:14, h:11, lab:'panneau', d:
    sh(3) + R_(-.5, -9, 1, 9, 'var(--cliff)', SKT) },
  bulle:{ cat:'symboles', w:8, h:8, lab:'bulle', d: '' },
  etiquette:{ cat:'symboles', w:8, h:8, lab:'etiquette', d: '' },
  pieces:{ cat:'symboles', w:12, h:12, d:
    sh(4) + coinL(-2, -1, 2.6) + coinL(-2, -2.1, 2.6) + coinL(-2, -3.2, 2.6) + coinL(2.6, -.6, 2.4) + coinL(2.6, -1.7, 2.4) },
  euro_flux:{ cat:'symboles', w:10, h:12, d:
    '<g transform="translate(0,-5)">' + C_(0, 0, 3.6, 'var(--brass)', ' stroke="#8A5F18" stroke-width=".4"') + C_(0, 0, 2.8, 'none', ' stroke="#F2C66E" stroke-width=".3"') +
    P_('M1.4,-1.4Q.8,-2 0,-2Q-1.8,-2 -1.8,0Q-1.8,2 0,2Q.8,2 1.4,1.4M-2.6,-.5H.6M-2.6,.6H.4', 'none', ' stroke="#5E3F0E" stroke-width=".45" stroke-linecap="round"') + '</g>' },
  fleche:{ cat:'symboles', w:14, h:12, d:
    '<g transform="translate(0,-5)">' + P_('M-6,-1.4H1.6V-4L6.6,0L1.6,4V1.4H-6Z', 'var(--paper)', ' stroke="var(--line)" stroke-width=".7" stroke-linejoin="round"') + '</g>' },
  satellite:{ cat:'symboles', w:18, h:16, d:
    '<g transform="translate(0,-8) rotate(-20)">' + R_(-1.8, -1.8, 3.6, 3.6, 'var(--brass)', SK) + R_(-8, -1.3, 5.6, 2.6, SLATE, SKT) + R_(2.4, -1.3, 5.6, 2.6, SLATE, SKT) +
    P_('M-6.6,-1.3V1.3M-5.2,-1.3V1.3M-3.8,-1.3V1.3M3.8,-1.3V1.3M5.2,-1.3V1.3M6.6,-1.3V1.3', 'none', ' stroke="#8F95A8" stroke-width=".25"') + P_('M0,1.8V3.4', 'none', LN) + C_(0, 3.8, .5, 'var(--roof-d)') + '</g>' },
  cyberattaque:{ cat:'symboles', w:16, h:16, d:
    sh(5) + R_(-6.5, -13, 13, 9, SLATE, SK + ' rx="1"') + R_(-5.6, -12.1, 11.2, 7.2, '#2E2B3A') + P_('M-1.4,-4H1.4L2,-1.6H-2Z', 'var(--house-side)', SKT) +
    '<g class="blk">' + R_(-4.6, -11, 4, .8, 'var(--brass)') + R_(-1.6, -9.6, 6, .8, 'var(--brass)') + R_(-4.6, -8.2, 3, .8, '#F2C66E') + R_(-.6, -6.8, 4.4, .8, 'var(--brass)') + '</g>' +
    P_('M1.6,-10.6a1.4,1.4 0 0 1 2.8,0', 'none', ' stroke="#FBF8F1" stroke-width=".4"') + R_(1.3, -10.6, 3.4, 2.6, '#FBF8F1') + P_('M2.6,-10L3.2,-9.2L2.8,-8.6', 'none', ' stroke="' + SLATE + '" stroke-width=".35"') },
  antenne:{ cat:'symboles', w:16, h:24, d:
    sh(3) + '<g fill="none" stroke="var(--roof-d)" stroke-width=".5" stroke-linejoin="round"><path d="M-2.4,0L0,-17L2.4,0M-1.6,-5H1.6M-1,-10H1M-2,-2.5L1.4,-7.5M2,-2.5L-1.4,-7.5"/></g>' + C_(0, -17.6, .9, 'var(--brass)') +
    '<g class="blk">' + P_('M-3,-20Q-4.4,-17.6 -3,-15.2M3,-20Q4.4,-17.6 3,-15.2M-5,-21.4Q-7.2,-17.6 -5,-13.8M5,-21.4Q7.2,-17.6 5,-13.8', 'none', ' stroke="var(--roof-d)" stroke-width=".45" stroke-linecap="round"') + '</g>' },
  colis:{ cat:'symboles', w:12, h:12, d:
    sh(4.5) + P_('M-4,0V-5.4L0,-7L4,-5.4V0L0,1.4Z', '#D4B07A', SK) + P_('M-4,-5.4L0,-4L4,-5.4M0,-4V1.4', 'none', ' stroke="#A9834C" stroke-width=".4"') + P_('M-2,-6.2L2,-4.7', 'none', ' stroke="var(--paper)" stroke-width=".8"') },
  conteneurs:{ cat:'symboles', w:22, h:14, d:
    sh(9) + R_(-9, -4, 9, 4, OCHRE, SK) + R_(0, -4, 9, 4, LILAC, SK) + R_(-4.5, -8, 9, 4, CREAM, SK) + R_(-9, -8, 4.4, 4, '#9AA3A0', SK) +
    P_('M-7,-3.4V-.6M-5,-3.4V-.6M-3,-3.4V-.6M2,-3.4V-.6M4,-3.4V-.6M6,-3.4V-.6M-2.5,-7.4V-4.6M-.5,-7.4V-4.6M1.5,-7.4V-4.6', 'none', ' stroke="rgba(0,0,0,.18)" stroke-width=".35"') },
  cadenas:{ cat:'symboles', w:12, h:14, d:
    sh(4) + P_('M-2.6,-6.4V-8.6A2.6,2.6 0 0 1 2.6,-8.6V-6.4', 'none', ' stroke="var(--roof-d)" stroke-width="1.1"') + R_(-4, -6.6, 8, 6.4, 'var(--brass)', SK + ' rx="1"') + C_(0, -4, .9, '#5E3F0E') + R_(-.3, -4, .6, 1.8, '#5E3F0E') },
  loupe:{ cat:'symboles', w:14, h:14, d:
    '<g transform="translate(0,-6)">' + C_(-1.2, -1.2, 3.6, 'rgba(255,255,255,.45)', ' stroke="var(--roof-d)" stroke-width=".9"') + P_('M1.4,1.4L4.6,4.6', 'none', ' stroke="var(--roof-d)" stroke-width="1.5" stroke-linecap="round"') + P_('M-3,-2.6Q-2.4,-3.6 -1,-3.8', 'none', ' stroke="#FBF8F1" stroke-width=".5"') + '</g>' }
};
OBJ.voiture2 = null; delete OBJ.voiture2;
var OBJ_CATS = [['transports', 'Transports'], ['energie', 'Énergie'], ['batiments', 'Bâtiments'], ['personnes', 'Personnes'], ['nature', 'Nature et climat'], ['symboles', 'Symboles et infos']];
var FX_ANIMS = ['appear', 'fade', 'move', 'flow', 'pulse', 'smoke', 'spin', 'shake', 'blink', 'rise', 'grow', 'close'];
/* #########################################################################
   ##  DESSIN : FIN                                                       ##
   #########################################################################
   Ci-dessous : placement (objEl, findSpot, spawnFx, settleScene), sans dessin. */

/* ---------- Fabrication d'un objet ---------- */
var LOCAL = 0.25;
/* ---------- Jouer un FX sur le plateau (v2.2 : disposition sans chevauchement) ---------- */
var CLUSTER = [[0, 0], [2.8, .9], [-2.8, .9], [1.4, -1.7], [-1.4, -1.7], [4.2, -.6], [-4.2, -.6], [0, 2.2], [2.8, 2.9], [-2.8, 2.9], [5.6, 1.5], [-5.6, 1.5]];
var SCENE = { occ:[], labs:[], live:[] }, FXID = 0;
