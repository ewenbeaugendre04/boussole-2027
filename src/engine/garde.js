'use strict';
/* Garde-fou global : une erreur inattendue ne doit jamais laisser un écran figé.
   La sauvegarde locale n'est pas touchée ; on propose simplement de recharger. */
(function(){
  var shown = false;
  function oops(msg){
    if(shown) return; shown = true;
    try{ console.error('[Boussole]', msg); }catch(e){}
    var d = document.createElement('div'); d.className = 'oops'; d.setAttribute('role', 'alert');
    d.innerHTML = '<b>Un petit souci est survenu.</b><span>Votre partie est sauvegardée sur cet appareil.</span><button type="button">Recharger</button>';
    d.querySelector('button').onclick = function(){ location.reload(); };
    (document.body || document.documentElement).appendChild(d);
  }
  window.addEventListener('error', function(e){ if(e && e.message && !/ResizeObserver|Script error/.test(e.message)) oops(e.message); });
  window.addEventListener('unhandledrejection', function(e){ var r = e && e.reason; if(r && !/fetch|Failed to fetch|file/i.test(String(r))) oops(String(r)); });
})();
