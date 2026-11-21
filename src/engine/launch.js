'use strict';
/* =========================================================
   Écrans de lancement
   ========================================================= */
function screen(html, id){
  var old = document.querySelector('.screen'); if(old) old.remove();
  var d = document.createElement('section'); d.className = 'screen'; d.id = id; d.innerHTML = html; document.body.appendChild(d); return d;
}
function hideScreen(cb){
  var s = document.querySelector('.screen'); if(!s){ if(cb) cb(); return; }
  s.classList.add('hide'); setTimeout(function(){ s.remove(); if(cb) cb(); }, reduceMotion ? 0 : 420);
}
function showTitle(){
  var saved = loadSave();
  RUN.busy = false; RUN.ev = null; $('result').classList.remove('on'); $('fxl').innerHTML = ''; hideCaption(); camHome(0);
  // le plateau tourne en fond
  if(!S){ S = freshState(1); S._preview = true; renderAll(); $('pinl').innerHTML = ''; $('stayl').innerHTML = ''; buildClouds('soleil'); setWeather('soleil'); }
  var html = '<div class="logo">' + COMPASS + '<h1>Boussole<span>2027</span></h1></div>' +
    '<p class="pitch">Aux commandes du pays, semaine après semaine. Des choix concrets, un budget qui tourne, et ta boussole qui se dessine.</p>';
  if(saved && !saved.finished){
    html += '<button class="btn brass pressable" id="btnContinue" data-autofocus>Continuer la partie<br><small style="font-family:var(--f-body);font-weight:400;font-size:13px">semaine ' + (saved.dayIdx + 1) + ' sur ' + DAYS.length + ', ' + MONTHS[(saved.month - 1) % 12] + ' ' + saved.year + '</small></button><button class="btn pressable" id="btnNew">Nouvelle partie</button>';
  } else {
    html += '<button class="btn brass pressable" id="btnNew" data-autofocus>' + (saved && saved.finished ? 'Rejouer une année' : 'Commencer') + '</button>';
    if(saved && saved.finished) html += '<button class="btn pressable" id="btnContinue">Revoir mon bilan</button>';
  }
  html += '<p class="muted" style="text-align:center;margin:14px 0 0">Sauvegarde sur ce téléphone, rien n\'est envoyé.</p>';
  var s = screen(html, 'title');
  var c = s.querySelector('#btnContinue');
  if(c) c.addEventListener('click', function(){ snd('tap'); S = saved; hideScreen(function(){ if(NEWS.length && !saved.finished) showNews(function(){ enterGame(false); }); else enterGame(false); }); });
  s.querySelector('#btnNew').addEventListener('click', function(){ snd('tap'); hideScreen(showLevel); });
}
function showLevel(){
  var opts = [[1, 'De loin', 'Je découvre, explique-moi simplement.'], [2, 'Un peu', 'Je suis l\'actu de temps en temps.'], [3, 'De près', 'Donne-moi les détails et les vrais termes.']];
  var html = '<h2 class="lvq">La politique, tu suis ça comment ?</h2><p class="muted" style="margin:0 0 4px;font-size:14px">On adapte les textes du jeu. Tu pourras changer dans les réglages.</p>' +
    opts.map(function(o){ return '<button class="lvl pressable" data-lvl="' + o[0] + '"><span class="dots" aria-hidden="true">' + [1,2,3].map(function(k){ return '<i class="' + (k <= o[0] ? 'f' : '') + '" style="height:' + (8 + k * 6) + 'px"></i>'; }).join('') + '</span><span><b>' + o[1] + '</b><span>' + o[2] + '</span></span></button>'; }).join('');
  var s = screen(html, 'level');
  s.querySelectorAll('.lvl').forEach(function(b){ b.addEventListener('click', function(){
    snd('tap'); vibe(8);
    S = freshState(+b.getAttribute('data-lvl')); save();
    hideScreen(function(){ if(NEWS.length) showNews(function(){ enterGame(true); }); else enterGame(true); });
  }); });
}
function showNews(after){
  var tagL = { faux:'Faux', trompeur:'Trompeur', ingerence:'Ingérence', vrai:'Vrai' };
  var html = '<h2 class="ctitle" style="margin-top:2px">Ça circule en ce moment</h2><p class="muted" style="margin:0">Exemples fictifs, pour s\'entraîner à démêler le vrai du faux. Ferme d\'un geste vers le bas si ça ne t\'intéresse pas.</p>' +
    NEWS.map(function(n){ var t = String(n.tag || '').toLowerCase(); return '<div class="news-item"><span class="ntag t-' + esc(t) + '">' + esc(tagL[t] || n.tag || '') + '</span><h3>' + esc(n.title) + '</h3><p>' + esc(n.text) + '</p>' + (n.src ? '<div class="src">' + esc(n.src) + '</div>' : '') + '</div>'; }).join('') +
    '<button class="btn wide brass pressable" data-close id="newsClose" style="margin-top:14px">Aller au plateau</button>';
  openCard(html, { label:'Actualité à vérifier', onClose:function(){ if(after) after(); } });
}

