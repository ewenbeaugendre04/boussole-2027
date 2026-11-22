'use strict';
/* =========================================================
   Guide de départ (présenté par « Cap », une chouette mascotte (pas de personnage humain))
   + pages légales : conditions d'utilisation, confidentialité, publicité, mentions.
   Affiché une fois au premier lancement, puis accessible depuis le menu.
   ========================================================= */
var GUIDE_KEY = 'boussole27_guide_vu';
var GUIDE = [
  ['Bonjour, je suis Cap !', 'Vous êtes aux commandes du pays jusqu\'aux prochaines élections. Chaque semaine, des situations inspirées de faits réels arrivent sur la carte : à vous de décider.'],
  ['Vos décisions ont des effets', 'Budget, dette, emploi, pouvoir d\'achat, climat… Chaque choix fait bouger les jauges. Les vrais résultats arrivent parfois quelques semaines plus tard, comme dans la réalité.'],
  ['Découvrir vos orientations', 'Au fil des semaines, « Mon orientation » montre vos tendances, secteur par secteur. Le but : mieux comprendre les enjeux et vos propres priorités, pas vous dire pour qui voter.'],
  ['Une application neutre', 'Aucun parti, aucune couleur politique dans le jeu. Les propositions viennent de tout l\'éventail politique et chaque chiffre est sourcé. Le dossier des candidats est indicatif.'],
  ['Vos données restent chez vous', 'Pas de compte, pas de profil. Vos réponses ne quittent jamais votre appareil : elles ne sont ni envoyées, ni vendues, ni utilisées pour cibler qui que ce soit.']
];
function guideSeen(){ try{ return localStorage.getItem(GUIDE_KEY) === '1'; }catch(e){ return true; } }
function openGuide(after){
  var i = 0;
  function draw(){
    var g = GUIDE[i], last = i === GUIDE.length - 1;
    var html = '<div class="guide"><div class="g-scene"><img class="g-cap" src="' + SPR_DIR + 'mascotte.webp" alt="Cap, la mascotte">' +
      '<div class="g-bulle"><b>' + esc(g[0]) + '</b><p>' + esc(g[1]) + '</p></div></div>' +
      '<p class="g-hint">Touchez la bulle ou glissez pour continuer</p><div class="g-dots">' + GUIDE.map(function(_, k){ return '<i' + (k === i ? ' class="on"' : '') + '></i>'; }).join('') + '</div>' +
      '<div class="g-btns">' + (i ? '<button class="btn pressable" id="gPrev">Retour</button>' : '<button class="btn pressable" id="gSkip">Passer</button>') +
      '<button class="btn brass pressable" id="gNext">' + (last ? 'C\'est parti' : 'Suivant') + '</button></div>' +
      (last ? '<p class="g-legal">En continuant, vous acceptez les <a href="#" id="gCgu">conditions d\'utilisation</a>.</p>' : '') + '</div>';
    openCard(html, { label:'Guide', onClose:function(){} });
    var c = document.querySelector('.card .guide'); if(!c) return;
    function done(){ try{ localStorage.setItem(GUIDE_KEY, '1'); }catch(e){} closeCard(true); if(after) after(); }
    c.querySelector('#gNext').onclick = function(){ if(last) done(); else { i++; draw(); } };
    var p = c.querySelector('#gPrev'); if(p) p.onclick = function(){ i--; draw(); };
    var s = c.querySelector('#gSkip'); if(s) s.onclick = done;
    /* un toucher sur la bulle ou un glissement passe à l'explication suivante */
    c.querySelector('.g-scene').onclick = function(){ if(!last){ i++; draw(); } };
    var x0 = null; c.addEventListener('touchstart', function(e){ x0 = e.touches[0].clientX; }, { passive:true });
    c.addEventListener('touchend', function(e){ if(x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if(dx < -40 && !last){ i++; draw(); } else if(dx > 40 && i){ i--; draw(); } }, { passive:true });
    var l = c.querySelector('#gCgu'); if(l) l.onclick = function(e){ e.preventDefault(); openLegal('cgu', function(){ draw(); }); };
  }
  draw();
}
var LEGAL = {
  cgu:['Conditions d\'utilisation', [
    'Boussole 2027 est un jeu pédagogique gratuit. Il simule des décisions publiques à partir de faits réels simplifiés ; ses résultats sont indicatifs et ne constituent ni un sondage, ni une consigne de vote, ni un conseil.',
    'Les chiffres (budget, dette, effets des mesures) sont des ordres de grandeur sourcés ou des estimations signalées comme telles. Ils peuvent comporter des erreurs : signalez-les, nous les corrigerons.',
    'Le dossier des candidats résume des positions publiques à une date donnée, sans jugement. Il ne remplace pas la lecture des programmes officiels.',
    'L\'application est fournie « en l\'état », sans garantie. Vous vous engagez à ne pas l\'utiliser pour diffuser de fausses informations ou détourner son contenu.',
    'L\'application peut afficher des publicités non politiques (voir « Publicité »). Ces conditions peuvent évoluer ; la date de mise à jour figure ci-dessous.']],
  conf:['Confidentialité', [
    'Aucune donnée personnelle n\'est collectée. Pas de compte, pas de profil, pas de traceur de mesure d\'audience.',
    'Votre partie (décisions, jauges, réglages) est enregistrée uniquement dans le stockage local de votre appareil. Elle n\'est jamais envoyée sur un serveur. Vous pouvez l\'effacer à tout moment depuis le menu ou en effaçant les données du site.',
    'Les polices et images sont hébergées avec l\'application : aucun appel à des services tiers pendant le jeu.',
    'Si des publicités sont ajoutées dans la version application, elles seront non ciblées sur vos réponses : vos choix politiques ne sont jamais transmis à une régie.']],
  pub:['Publicité', [
    'La version finale pourra afficher des publicités pour financer la gratuité, en dehors des écrans de décision.',
    'Aucune publicité politique, militante ou électorale n\'est acceptée. Les publicités ne dépendent jamais de vos réponses dans le jeu.',
    'Selon la réglementation (RGPD, directive ePrivacy), un éventuel ciblage publicitaire nécessiterait votre consentement explicite, que vous pourrez refuser sans perdre l\'accès au jeu.']],
  mentions:['À propos et mentions', [
    'Boussole 2027 — projet indépendant, sans lien avec un parti, un candidat ou une administration.',
    'Code source public : github.com/ewenbeaugendre04/boussole-2027. Illustrations générées avec Recraft (IA), retouchées pour le jeu.',
    'Sources des chiffres : Insee, Cour des comptes, ministères, presse ; chaque événement cite les siennes.',
    'Éditeur, contact et hébergeur : à compléter avant publication sur les magasins d\'applications.']]
};
function openLegal(k, after){
  var L = LEGAL[k];
  var html = '<h2 class="ctitle">' + esc(L[0]) + '</h2>' + L[1].map(function(t){ return '<p class="legal-p">' + esc(t) + '</p>'; }).join('') +
    '<p class="muted" style="font-size:12px">Mise à jour : novembre 2026.</p><button class="btn wide brass pressable" data-close style="margin-top:10px">Fermer</button>';
  openCard(html, { label:L[0], onClose:function(){ if(after) after(); } });
}
(function(){
  var _news = showNews;
  showNews = function(after){ var a = arguments, self = this; if(!guideSeen()) openGuide(function(){ _news.apply(self, a); }); else _news.apply(self, a); };
  var _menu = openMenu;
  openMenu = function(){
    _menu.apply(this, arguments);
    var ref = document.getElementById('mCand') || document.getElementById('mBudget'); if(!ref) return;
    var box = document.createElement('div'); box.className = 'm-legal';
    box.innerHTML = '<button class="btn wide pressable" id="mGuide">Revoir le guide</button>' +
      '<p class="m-links"><a href="#" data-lg="cgu">Conditions</a> · <a href="#" data-lg="conf">Confidentialité</a> · <a href="#" data-lg="pub">Publicité</a> · <a href="#" data-lg="mentions">À propos</a></p>';
    ref.parentNode.insertBefore(box, ref.nextSibling);
    box.querySelector('#mGuide').onclick = function(){ closeCard(true); openGuide(); };
    box.addEventListener('click', function(e){ var a = e.target.closest('[data-lg]'); if(a){ e.preventDefault(); closeCard(true); openLegal(a.getAttribute('data-lg')); } });
  };
})();
