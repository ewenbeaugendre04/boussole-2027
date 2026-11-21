'use strict';
/* =========================================================
   Budget détaillé
   ========================================================= */
function openBudget(){
  var postes = arr(B.postes), max = Math.max.apply(null, postes.map(function(p){ return num(p.montant); }).concat([1]));
  var html = '<h2 class="ctitle" style="margin-top:2px">Le budget du pays</h2><p class="muted" style="margin:0 0 10px">Chaque semaine, la dette augmente d\'un cinquante-deuxième du déficit annuel. Tes décisions changent ce déficit.</p>' +
    '<div class="kv">' +
    (B.recettes ? '<span>Recettes (départ)</span><b>' + f0(num(B.recettes)) + ' ' + esc(UNIT) + '</b>' : '') +
    (B.depenses ? '<span>Dépenses (départ)</span><b>' + f0(num(B.depenses)) + ' ' + esc(UNIT) + '</b>' : '') +
    '<span>Déficit de départ</span><b>' + f1(BASE_DEF) + ' ' + esc(UNIT) + '</b>' +
    '<span>Effet direct de tes choix sur le déficit, par an</span><b>' + signed1(-S.annual).replace('-', '−') + ' ' + esc(UNIT) + '</b>' +
    '<span>Recettes induites par le pouvoir d\'achat, par an</span><b>' + signed1(induced().pa) + ' ' + esc(UNIT) + '</b>' +
    '<span>Recettes induites par l\'emploi, par an</span><b>' + signed1(induced().em) + ' ' + esc(UNIT) + '</b>' +
    '<span>Déficit actuel, par an</span><b>' + f1(curDeficit()) + ' ' + esc(UNIT) + '</b>' +
    '<span class="sep"></span>' +
    '<span>Dépenses et recettes ponctuelles</span><b>' + signed1(S.onceTotal) + ' ' + esc(UNIT) + '</b>' +
    '<span>Dette au départ</span><b>' + f0(num(B.dette)) + ' ' + esc(UNIT) + '</b>' +
    '<span>Dette aujourd\'hui</span><b>' + f1(S.dette) + ' ' + esc(UNIT) + '</b>' +
    '<span>Solde ponctuel, cumulé</span><b>' + f1(S.solde) + ' ' + esc(UNIT) + '</b>' +
    (num(B.pib) ? '<span>Dette en part de la richesse produite (PIB)</span><b>' + f0(S.dette / num(B.pib) * 100) + ' %</b>' : '') +
    (num(B.charge_interets) ? '<span>Intérêts de la dette, par an</span><b>' + f1(num(B.charge_interets)) + ' ' + esc(UNIT) + '</b>' : '') +
    (B.etat && B.etat.solde !== undefined ? '<span>Solde de l\'État (départ)</span><b>' + f1(num(B.etat.solde)) + ' ' + esc(UNIT) + '</b>' : '') +
    (B.secu && B.secu.solde !== undefined ? '<span>Solde de la Sécurité sociale (départ)</span><b>' + f1(num(B.secu.solde)) + ' ' + esc(UNIT) + '</b>' : '') +
    '</div>' + (B.perimetre || B.annee_ref ? '<p class="muted" style="margin:8px 0 0">' + esc([B.perimetre, B.annee_ref].filter(Boolean).join('. ')) + '.</p>' : '') +
    (postes.length ? '<div class="sec-h">Les grands postes de dépense</div><div class="bars">' + postes.map(function(p){ return '<div class="row"><span>' + esc(p.label) + '</span><b>' + f0(num(p.montant)) + ' ' + esc(UNIT) + '</b><div class="bar"><i style="width:' + F(num(p.montant) / max * 100) + '%"></i></div></div>'; }).join('') + '</div>' : '') +
    '<p class="muted" style="margin-top:12px">Recettes induites : quand le pouvoir d\'achat monte, les ménages consomment plus et l\'État perçoit plus de TVA et d\'impôts (environ 0,6 Md€ par an par point). Quand l\'emploi monte, il y a plus de cotisations et moins d\'allocations chômage (environ 0,75 Md€ par an par point, soit 25 000 emplois). L\'inverse vaut quand ils baissent. Ordres de grandeur simplifiés.</p>' +
    (B.note ? '<p class="muted" style="margin-top:14px">' + esc(B.note) + '</p>' : '') +
    (arr(B.sources).length ? '<div class="sec-h" style="font-size:15px">Sources</div><ul class="lst srcs">' + arr(B.sources).map(function(s){ return '<li><span class="sg" aria-hidden="true">i</span><a href="' + esc(s.url || '#') + '" target="_blank" rel="noopener noreferrer">' + esc(s.label || s.url) + '</a></li>'; }).join('') + '</ul>' : '');
  openCard(html, { label:'Budget' });
}

