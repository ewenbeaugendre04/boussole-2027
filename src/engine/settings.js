'use strict';
/* =========================================================
   Réglages
   ========================================================= */
function openMenu(){
  var lv = S ? S.level : 1;
  var pc = S ? Math.round(100 * S.dayIdx / Math.max(1, DAYS.length)) : 0;
  var html = '<h2 class="ctitle" style="margin-top:2px">Réglages</h2>' + (S ? '<div class="lprog" style="margin:4px 0 12px;max-width:none" role="progressbar" aria-valuenow="' + pc + '" aria-valuemin="0" aria-valuemax="100" aria-label="Avancement de la partie"><div class="lprog-t"><span>Avancement de la partie</span><b>' + pc + ' %</b></div><div class="lprog-b"><i style="width:' + pc + '%"></i></div></div>' : '') +
    '<div class="mrow"><b>Ambiance</b><div class="seg" data-k="theme"><button aria-pressed="' + (PREF.theme !== 'dark') + '" data-v="light">Jour</button><button aria-pressed="' + (PREF.theme === 'dark') + '" data-v="dark" id="themeDark">Nuit</button></div></div>' +
    '<div class="mrow"><b>Textes</b><div class="seg" data-k="level" style="grid-template-columns:1fr 1fr 1fr"><button aria-pressed="' + (lv === 1) + '" data-v="1">De loin</button><button aria-pressed="' + (lv === 2) + '" data-v="2">Un peu</button><button aria-pressed="' + (lv === 3) + '" data-v="3">De près</button></div></div>' +
    '<div class="mrow"><b>Sons</b><div class="seg" data-k="sound"><button aria-pressed="' + !PREF.sound + '" data-v="0">Coupés</button><button aria-pressed="' + !!PREF.sound + '" data-v="1">Activés</button></div></div>' +
    '<div class="mrow"><b>Vibrations</b><div class="seg" data-k="vib"><button aria-pressed="' + !PREF.vib + '" data-v="0">Coupées</button><button aria-pressed="' + !!PREF.vib + '" data-v="1">Activées</button></div></div>' +
    '<div class="mrow" style="margin-top:18px">' + '<button class="btn wide pressable" id="mBudget">Voir le budget détaillé</button><button class="btn wide pressable" id="mNew">Nouvelle partie</button></div>' +
    '<p class="muted" style="margin-top:14px">La partie est sauvegardée automatiquement sur ce téléphone. Rien n\'est envoyé nulle part.</p>';
  var card = openCard(html, { label:'Réglages' });
  card.addEventListener('click', function(e){
    var b = e.target.closest('.seg button');
    if(b){
      var k = b.parentNode.getAttribute('data-k'), v = b.getAttribute('data-v');
      b.parentNode.querySelectorAll('button').forEach(function(x){ x.setAttribute('aria-pressed', String(x === b)); });
      if(k === 'theme'){ PREF.theme = v; applyTheme(); }
      if(k === 'sound'){ PREF.sound = v === '1'; snd('tap'); }
      if(k === 'vib'){ PREF.vib = v === '1'; vibe(20); }
      if(k === 'level' && S){ S.level = +v; save(); }
      savePrefs(); return;
    }
    if(e.target.closest('#mBudget')){ closeCard(true); openBudget(); }
    if(e.target.closest('#mNew')){
      var m = e.target.closest('#mNew');
      if(m.getAttribute('data-sure')){ closeCard(true); dropStore(KEY); S = null; showTitle(); }
      else { m.setAttribute('data-sure', '1'); m.textContent = 'Effacer la partie en cours et recommencer'; m.classList.add('brass'); }
    }
  });
}

