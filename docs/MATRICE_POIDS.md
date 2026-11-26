# Matrice des poids de Boussole 2027

Fichier généré par `node scripts/matrice.js` à partir de `src/data/game_data.js`. Ne pas modifier à la main : corriger les données puis relancer le script.

## Barème : ce que vaut 1 point

| Indicateur | 1 point ≈ | Base de calcul |
|---|---|---|
| Pouvoir d'achat | +0,1 % du revenu disponible des ménages (≈ 1,6 Md€/an) | Revenu disponible brut des ménages ≈ 1 650 Md€ (Insee, comptes nationaux 2024) |
| Emploi | 50 000 emplois | ≈ 0,16 % des 30,9 millions d'emplois (Insee 2025). Repère : le report de 62 à 64 ans est estimé à environ +300 000 emplois à terme (COR, DG Trésor), soit 6 points |
| Émissions de CO₂ | 1 Mt CO₂e par an | Émissions nationales ≈ 366 Mt CO₂e en 2024 (Citepa, inventaire Secten) |
| Cohésion sociale | 20 000 personnes qui sortent de la pauvreté (ou équivalent en inégalités) | 9,1 millions de personnes sous le seuil de pauvreté (Insee 2022-2023) |
| Souveraineté | 1 Md€ de dépendance aux importations en moins (énergie, santé, défense, alimentation) | Déficit commercial de biens ≈ 80 Md€ en 2024 (Douanes) |
| Services publics | 1 Md€/an de moyens effectifs en plus pour un service public (≈ 15 000 agents) | Coût moyen d’un agent public chargé ≈ 65 000 €/an (DGAFP) |

Le budget est déjà en milliards d’euros par an (`budget`) et en coût ponctuel (`once`). Les indicateurs comptent les effets directs et les effets différés (`later`).

## Propositions de correction (à valider)

Comparaison des réformes entre elles avec le barème ci-dessus. Les ordres de grandeur réels sont des estimations publiques connues, à confirmer avec une source précise avant d’appliquer.

| Réforme | Actuel | Proposé | Pourquoi |
|---|---|---|---|
| `retraite_60` | Emploi −3 | Emploi −8 | Revenir à 60 ans retire plusieurs centaines de milliers d’actifs (le report 62→64 en ajoute ≈ 300 000) : −3 est trop faible face à report_age_65 (+3). |
| `report_age_65` | Cohésion −7 | Cohésion −4 | Effet le plus fort de tout le jeu sur la cohésion, alors que retraite_60 ne fait que +3 : asymétrie à corriger. |
| `baisse_impots_production` | Emploi +3 | Emploi +1 | Les évaluations de la baisse des impôts de production chiffrent quelques dizaines de milliers d’emplois, pas 150 000. |
| `defense_europeenne_emprunt` | Emploi +3 | Emploi +1 | +3 (150 000 emplois) pour 1 Md€/an de charge : disproportionné face aux autres dépenses. |
| `relance_nucleaire` | Emploi +4 | Emploi +2 | Le programme de nouveaux réacteurs est chiffré à quelques dizaines de milliers d’emplois au pic de chantier. |
| `tva_sociale` | Emploi +3 | Emploi +2 | Les simulations de TVA sociale donnent en général 50 000 à 100 000 emplois. |
| `prix_planchers_agricoles` | Emploi +2 | Emploi +1 | Effet emploi incertain : maintien d’exploitations plutôt que créations. |
| `sortie_nucleaire` | CO₂ +2 | CO₂ +5 | Remplacer une partie du nucléaire par du gaz pendant la transition ajoute plusieurs Mt de CO₂ par an. |
| `vols_courts_train` | CO₂ −2 | CO₂ −1 (minimum) | L’interdiction réelle a économisé environ 0,05 Mt de CO₂ par an : effet symbolique. |
| `leasing_electrique` | CO₂ −2 | CO₂ −1 | Quelques dizaines de milliers de voitures par an : moins de 0,5 Mt. |
| `regulation_installation_medecins` | Services +3 sans coût | Services +1 | Mieux répartir les médecins ne crée pas de moyens nouveaux : effet réel mais modeste. |
| `non_remplacement_fonctionnaires` | Services −6 | Services −4 | Pour 2 Md€/an d’économie, −6 dépasse l’effet inverse de revalorisation_enseignants (+4 pour 4 Md€). |

## Contrôles automatiques (2)

| Problème | Élément | Détail |
|---|---|---|
| Services publics en hausse sans dépense | regulation_installation_medecins | services 3, budget 0 |
| Effet isolé très fort | sortie_nucleaire | Souveraineté -8 ≈ -8 (1 Md€ de dépendance aux importations en moins par point) |

## Réformes (48)

| Réforme | Budget Md€/an | Ponctuel Md€ | Pouvoir d'achat | Emploi | Émissions de CO₂ | Cohésion sociale | Souveraineté | Services publics |
|---|---|---|---|---|---|---|---|---|
| Augmenter fortement le SMIC (`smic_hausse`) | -4 | 0 | 4 (+6,4) | -2 (-100 000) |  | 2 (+40 000) |  |  |
| Revenir à la retraite à 60 ans (`retraite_60`) | -15 | 0 | 2 (+3,2) | -3 (-150 000) |  | 3 (+60 000) |  |  |
| Taxer les très hauts patrimoines (`taxe_hauts_patrimoines`) | 12 | 0 |  | -1 (-50 000) |  | 2 (+40 000) |  |  |
| Régulariser les sans-papiers qui travaillent dans les métiers en tension (`regularisation_metiers_tension`) | 0.5 | 0 |  | 3 (+150 000) |  | -3 (-60 000) |  |  |
| Encadrer les loyers dans toutes les villes chères (`encadrement_loyers`) | 0 | 0 | 3 (+4,8) |  |  | -1 (-20 000) |  |  |
| Garder et renforcer la surtaxe sur les bénéfices des très grandes entreprises (`surtaxe_grandes_entreprises`) | 8 | 0 |  | -2 (-100 000) |  |  | -1 (-1) |  |
| Réduire les allègements de cotisations sur les salaires moyens et hauts (`plafonner_allegements`) | 3 | 0 |  | -3 (-150 000) |  |  |  |  |
| Baisser les impôts de production (`baisse_impots_production`) | -8 | 0 |  | 3 (+150 000) |  |  | 2 (+2) |  |
| Reporter l'âge de départ à 65 ans (`report_age_65`) | 6 | 0 | -1 (-1,6) | 3 (+150 000) |  | -7 (-140 000) |  |  |
| Ne pas remplacer un fonctionnaire sur deux partant à la retraite (`non_remplacement_fonctionnaires`) | 2 | 0 |  |  |  |  |  | -6 (-6) |
| Peines minimales et nouvelles places de prison (`peines_planchers`) | -1 | -4 |  | 1 (+50 000) |  | 1 (+20 000) |  | -1 (-1) |
| Baisser les cotisations pour augmenter le salaire net (`baisse_cotisations_net`) | -10 | 0 | 5 (+8) | 1 (+50 000) |  |  |  |  |
| Durcir les règles de l'assurance chômage (`assurance_chomage`) | 3.6 | 0 | -1 (-1,6) | 3 (+150 000) |  | -3 (-60 000) |  |  |
| Vendre une partie des participations de l'État (`cessions_actifs`) | -0.1 | 2 |  | -1 (-50 000) |  |  | -2 (-2) |  |
| Relancer le nucléaire avec de nouveaux réacteurs (`relance_nucleaire`) | -2 | -10 |  | 4 (+200 000) | -1 (-1) |  | 4 (+4) |  |
| Financer la défense par un emprunt européen commun (`defense_europeenne_emprunt`) | -1 | 0 |  | 3 (+150 000) |  |  | 2 (+2) |  |
| Interdire les réseaux sociaux avant 15 ans (`reseaux_sociaux_15`) | 0 | 0 |  |  |  | 2 (+40 000) |  |  |
| Réguler l'installation des médecins (`regulation_installation_medecins`) | 0 | 0 |  |  |  |  |  | 3 (+3) |
| Mieux payer les enseignants, avec de nouvelles missions (`revalorisation_enseignants`) | -4 | 0 |  |  |  |  |  | 4 (+4) |
| Grand plan contre la fraude fiscale et sociale (`lutte_fraude`) | 3 | -0.2 |  |  |  | 1 (+20 000) |  |  |
| Fusionner ou supprimer un tiers des agences de l'État (`fusion_agences`) | 0.8 | -0.2 |  |  |  |  |  | -2 (-2) |
| Sortir progressivement du nucléaire (`sortie_nucleaire`) | -6 | -15 | -5 (-8) | -1 (-50 000) | 2 (+2) |  | -8 (-8) |  |
| Plan massif de rénovation des logements (`renovation_massive`) | -8 | 0 | 2 (+3,2) | 3 (+150 000) | -4 (-4) | -1 (-20 000) |  |  |
| Taxer le kérosène et financer le train (`taxe_kerosene_train`) | 1 | 0 | -1 (-1,6) | -1 (-50 000) | -2 (-2) |  |  |  |
| Sortir progressivement des pesticides de synthèse (`sortie_pesticides`) | -2 | 0 |  | -2 (-100 000) | -1 (-1) | -1 (-20 000) | -2 (-2) |  |
| Voiture électrique à petit prix pour les ménages modestes (`leasing_electrique`) | -0.6 | 0 | 2 (+3,2) |  | -2 (-2) | -1 (-20 000) | -1 (-1) |  |
| Supprimer les avantages fiscaux qui favorisent les énergies fossiles (`niches_brunes`) | 4 | 0 | -2 (-3,2) | -1 (-50 000) | -3 (-3) | -1 (-20 000) |  |  |
| Taxer davantage les jets privés et les billets en classe affaires (`taxe_billets_premium`) | 0.8 | 0 |  |  | -1 (-1) | 1 (+20 000) |  |  |
| Sortir du marché européen de l'électricité (`sortie_marche_electricite`) | 0 | -1 | 5 (+8) |  |  |  | 2 (+2) |  |
| Organiser un référendum sur l'immigration (`referendum_immigration`) | -0.3 | 0 |  |  |  | -3 (-60 000) |  |  |
| Rétablir un service militaire ou national obligatoire (`service_militaire`) | -3 | -2 |  | -1 (-50 000) |  | 3 (+60 000) | 2 (+2) |  |
| Instaurer des prix planchers pour les agriculteurs (`prix_planchers_agricoles`) | 0 | 0 | -3 (-4,8) | 2 (+100 000) |  |  | 2 (+2) |  |
| Baisser la TVA sur l'énergie à 5,5 % (`tva_energie_5_5`) | -14 | 0 | 6 (+9,6) | 1 (+50 000) | 4 (+4) |  |  |  |
| Réduire la contribution de la France au budget européen (`contribution_ue`) | 3 | 0 |  | -1 (-50 000) |  |  | 2 (+2) |  |
| Carte Vitale biométrique et contrôle des prestations versées à l'étranger (`controle_prestations`) | 0.3 | -0.5 |  |  |  | -1 (-20 000) | 1 (+1) |  |
| Ouvrir le RSA aux jeunes de 18 à 25 ans (`rsa_jeunes`) | -3 | 0 | 1 (+1,6) |  |  | 4 (+80 000) |  | 1 (+1) |
| Supprimer deux jours fériés pour réduire le déficit (`jour_ferie_travaille`) | 4.2 | 0 | -1 (-1,6) | 1 (+50 000) |  | -4 (-80 000) |  |  |
| Monter la TVA pour baisser les cotisations sur les salaires (`tva_sociale`) | 0 | 0 | -3 (-4,8) | 3 (+150 000) |  |  | 1 (+1) |  |
| Interdire les vols intérieurs quand le train met moins de 4 heures (`vols_courts_train`) | -0.05 | 0 |  | -1 (-50 000) | -2 (-2) |  |  | -1 (-1) |
| Un impôt sur le revenu à 14 tranches (`ir_14_tranches`) | 3 | 0 | 1 (+1,6) |  |  | 2 (+40 000) |  |  |
| 500 000 recrutements dans les services publics en cinq ans (`recrutements_publics`) | -8 | 0 |  | 2 (+100 000) |  | 1 (+20 000) |  | 6 (+6) |
| Baisser la TVA sur les produits de première nécessité (`tva_premiere_necessite`) | -10 | 0 | 5 (+8) |  |  | 1 (+20 000) |  |  |
| Une réduction d'impôt d'environ 3 000 € pour les familles qui travaillent (`reduction_impot_familles`) | -5 | 0 | 3 (+4,8) | 1 (+50 000) |  |  |  |  |
| Déduire de l'impôt les intérêts d'un prêt immobilier (`interets_emprunt_deductibles`) | -1.5 | 0 | 1 (+1,6) |  |  | -1 (-20 000) |  |  |
| Suspendre le RSA des personnes condamnées pour délinquance (`rsa_suspendu_condamnes`) | 0.05 | 0 |  |  |  | -1 (-20 000) |  |  |
| Sortir de l'OTAN (`sortie_otan`) | 0.2 | 0 |  |  |  | -1 (-20 000) | 1 (+1) |  |
| Recruter 8 500 magistrats et personnels de justice (`recrutement_justice`) | -0.6 | 0 |  |  |  | 1 (+20 000) |  | 1 (+1) |
| Réquisitionner les logements vacants pour loger les sans-abri (`requisition_logements_vacants`) | -0.2 | 0 |  |  |  | 2 (+40 000) |  | 1 (+1) |

## Classements par indicateur (réformes)

**Pouvoir d'achat** : tva_energie_5_5 +6, baisse_cotisations_net +5, sortie_marche_electricite +5, tva_premiere_necessite +5, smic_hausse +4, encadrement_loyers +3, reduction_impot_familles +3, retraite_60 +2, renovation_massive +2, leasing_electrique +2, rsa_jeunes +1, ir_14_tranches +1, interets_emprunt_deductibles +1, report_age_65 -1, assurance_chomage -1, taxe_kerosene_train -1, jour_ferie_travaille -1, niches_brunes -2, prix_planchers_agricoles -3, tva_sociale -3, sortie_nucleaire -5.

**Emploi** : relance_nucleaire +4, regularisation_metiers_tension +3, baisse_impots_production +3, report_age_65 +3, assurance_chomage +3, defense_europeenne_emprunt +3, renovation_massive +3, tva_sociale +3, prix_planchers_agricoles +2, recrutements_publics +2, peines_planchers +1, baisse_cotisations_net +1, tva_energie_5_5 +1, jour_ferie_travaille +1, reduction_impot_familles +1, taxe_hauts_patrimoines -1, cessions_actifs -1, sortie_nucleaire -1, taxe_kerosene_train -1, niches_brunes -1, service_militaire -1, contribution_ue -1, vols_courts_train -1, smic_hausse -2, surtaxe_grandes_entreprises -2, sortie_pesticides -2, retraite_60 -3, plafonner_allegements -3.

**Émissions de CO₂** : tva_energie_5_5 +4, sortie_nucleaire +2, relance_nucleaire -1, sortie_pesticides -1, taxe_billets_premium -1, taxe_kerosene_train -2, leasing_electrique -2, vols_courts_train -2, niches_brunes -3, renovation_massive -4.

**Cohésion sociale** : rsa_jeunes +4, retraite_60 +3, service_militaire +3, smic_hausse +2, taxe_hauts_patrimoines +2, reseaux_sociaux_15 +2, ir_14_tranches +2, requisition_logements_vacants +2, peines_planchers +1, lutte_fraude +1, taxe_billets_premium +1, recrutements_publics +1, tva_premiere_necessite +1, recrutement_justice +1, encadrement_loyers -1, renovation_massive -1, sortie_pesticides -1, leasing_electrique -1, niches_brunes -1, controle_prestations -1, interets_emprunt_deductibles -1, rsa_suspendu_condamnes -1, sortie_otan -1, regularisation_metiers_tension -3, assurance_chomage -3, referendum_immigration -3, jour_ferie_travaille -4, report_age_65 -7.

**Souveraineté** : relance_nucleaire +4, baisse_impots_production +2, defense_europeenne_emprunt +2, sortie_marche_electricite +2, service_militaire +2, prix_planchers_agricoles +2, contribution_ue +2, controle_prestations +1, tva_sociale +1, sortie_otan +1, surtaxe_grandes_entreprises -1, leasing_electrique -1, cessions_actifs -2, sortie_pesticides -2, sortie_nucleaire -8.

**Services publics** : recrutements_publics +6, revalorisation_enseignants +4, regulation_installation_medecins +3, rsa_jeunes +1, recrutement_justice +1, requisition_logements_vacants +1, peines_planchers -1, vols_courts_train -1, fusion_agences -2, non_remplacement_fonctionnaires -6.

## Choix des événements (327)

| Semaine | Choix | Budget | Ponctuel | Pouvoir d'achat | Emploi | Émissions de CO₂ | Cohésion sociale | Souveraineté | Services publics |
|---|---|---|---|---|---|---|---|---|---|
| 1 | L'Europe signe l'accord avec l'Amérique du Sud, les tracteurs montent à Paris → Voter contre et saisir la justice européenne | 0 | 0 |  | -1 |  | 1 | 2 |  |
| 1 | L'Europe signe l'accord avec l'Amérique du Sud, les tracteurs montent à Paris → Activer la clause de sauvegarde dès la première hausse | 0 | 0 |  |  |  |  | 1 |  |
| 1 | L'Europe signe l'accord avec l'Amérique du Sud, les tracteurs montent à Paris → Aides d'urgence aux éleveurs les plus exposés | 0 | -0.3 |  | 1 |  | 1 |  |  |
| 1 | L'Europe signe l'accord avec l'Amérique du Sud, les tracteurs montent à Paris → Jouer l'accord : conquérir des marchés pour vins et fromages | 0.2 | 0 |  | 1 |  |  | -1 |  |
| 1 | L'Europe signe l'accord avec l'Amérique du Sud, les tracteurs montent à Paris → Interdire la viande produite avec des produits interdits chez nous | 0 | 0 | -1 |  |  |  | 1 |  |
| 1 | La canicule tue en silence → Plan d'alerte et registre des personnes fragiles | -0.05 | 0 |  |  |  | 2 |  | 2 |
| 1 | La canicule tue en silence → Travailler un jour férié pour financer l'aide aux aînés | 2.4 | 0 | -1 |  |  | -1 |  | 1 |
| 1 | La canicule tue en silence → Climatiser les maisons de retraite et les hôpitaux | 0 | -0.3 |  |  | 1 |  |  | 2 |
| 1 | La canicule tue en silence → Recruter des soignants dans les maisons de retraite | -1 | 0 |  | 1 |  |  |  | 3 |
| 1 | La canicule tue en silence → Planter des arbres dans les villes et les cours d'école | -0.3 | 0 |  | 1 | -1 |  |  | 1 |
| 1 | On se baigne de nouveau dans la Seine → Ouvrir d'autres plages gratuites et surveillées | -0.005 | 0 |  |  |  | 1 |  |  |
| 1 | On se baigne de nouveau dans la Seine → Investir encore contre les débordements d'égouts | -0.05 | 0 |  |  | -1 |  |  | 1 |
| 1 | On se baigne de nouveau dans la Seine → Fermer dès le moindre doute sur l'eau | 0 | 0 |  |  |  | -1 |  |  |
| 1 | On se baigne de nouveau dans la Seine → Arrêter de financer la baignade, garder l'argent | 0.05 | 0 |  |  | 1 |  |  | -1 |
| 1 | On se baigne de nouveau dans la Seine → Rendre baignables les rivières de toutes les grandes villes | -0.2 | 0 |  |  | -1 | 1 |  | 1 |
| 2 | Le plus grand incendie depuis plus de 70 ans → Acheter des avions bombardiers d'eau | -0.05 | -0.5 |  |  |  |  | 1 | 1 |
| 2 | Le plus grand incendie depuis plus de 70 ans → Partager les avions avec les pays européens | -0.03 | 0 |  |  |  |  | -1 | 1 |
| 2 | Le plus grand incendie depuis plus de 70 ans → Débroussaillement obligatoire, avec amendes | 0.02 | 0 |  |  | -1 | -1 |  |  |
| 2 | Le plus grand incendie depuis plus de 70 ans → Replanter des vignes et des cultures coupe-feu | -0.05 | 0 |  | 1 | -1 |  |  |  |
| 2 | Le plus grand incendie depuis plus de 70 ans → Recruter des forestiers publics pour entretenir les bois | -0.1 | 0 |  | 1 | -1 |  |  | 1 |
| 2 | Une catastrophe nucléaire au Japon relance le débat → Renforcer la sûreté de tous les réacteurs | 0 | -0.5 |  |  |  | 1 | 1 |  |
| 2 | Une catastrophe nucléaire au Japon relance le débat → Fermer tout de suite les plus vieux réacteurs | -0.1 | -0.4 |  | -1 |  |  | -2 |  |
| 2 | Une catastrophe nucléaire au Japon relance le débat → Réduire à la moitié la part du nucléaire | -1 | 0 |  | 1 | 1 |  | -2 |  |
| 2 | Une catastrophe nucléaire au Japon relance le débat → Prolonger les réacteurs actuels après travaux | 0.3 | 0 |  |  |  | -1 | 2 |  |
| 2 | Une catastrophe nucléaire au Japon relance le débat → Construire de nouveaux réacteurs nucléaires | -1 | 0 |  | 1 | -1 | -1 | 3 |  |
| 2 | Pas d'antibiotique pour les enfants → Aider à relocaliser la production en France | 0 | -0.1 |  | 1 |  |  | 1 |  |
| 2 | Pas d'antibiotique pour les enfants → Imposer des stocks de quatre mois aux laboratoires | 0 | 0 |  |  |  |  |  | 1 |
| 2 | Pas d'antibiotique pour les enfants → Vendre les antibiotiques à l'unité | 0.01 | 0 |  |  |  |  |  | 1 |
| 2 | Pas d'antibiotique pour les enfants → Créer un fabricant public de médicaments | -0.1 | -0.3 |  | 1 |  |  | 2 |  |
| 2 | Pas d'antibiotique pour les enfants → Doubler la somme payée par le patient sur chaque boîte | 0.75 | 0 | -1 |  |  | -1 |  |  |
| 2 | Nuits d'émeutes après la mort d'un adolescent → Renforts massifs de police et couvre-feux locaux | -0.1 | 0 |  |  |  | -1 |  | 1 |
| 2 | Nuits d'émeutes après la mort d'un adolescent → Plan pour les quartiers : écoles, emploi, transports | -0.5 | 0 |  | 1 |  | 2 |  |  |
| 2 | Nuits d'émeutes après la mort d'un adolescent → Enquête indépendante et dialogue police-population | -0.01 | 0 |  |  |  | 1 |  |  |
| 2 | Nuits d'émeutes après la mort d'un adolescent → Faire payer les dégâts aux auteurs condamnés | 0.02 | 0 |  |  |  | -1 |  |  |
| 2 | Nuits d'émeutes après la mort d'un adolescent → Suspendre les allocations des parents de mineurs condamnés | 0.01 | 0 |  |  |  | -1 |  |  |
| 3 | Les hauts-fourneaux de Florange s'éteignent → Nationaliser l'usine le temps de trouver un repreneur | -0.1 | -1 |  | 1 |  |  | 2 |  |
| 3 | Les hauts-fourneaux de Florange s'éteignent → Accord : pas de licenciement, reclassement sur place | 0 | 0 |  | -1 |  | -1 |  |  |
| 3 | Les hauts-fourneaux de Florange s'éteignent → Taxer l'acier importé selon son carbone | 0.1 | 0 | -1 |  | -1 |  | 1 |  |
| 3 | Les hauts-fourneaux de Florange s'éteignent → Laisser fermer et aider la reconversion | -0.03 | 0 |  | -2 |  | -1 |  |  |
| 3 | Les hauts-fourneaux de Florange s'éteignent → Faire rembourser les aides publiques si l'usine ferme | 0.05 | 0 |  | -1 |  | 1 |  |  |
| 3 | La Nouvelle-Calédonie s'embrase → État d'urgence et renforts de gendarmes | 0 | -0.2 |  |  |  | -1 |  | 1 |
| 3 | La Nouvelle-Calédonie s'embrase → Suspendre la réforme et rouvrir le dialogue | 0 | 0 |  |  |  | 2 | -1 |  |
| 3 | La Nouvelle-Calédonie s'embrase → Grand plan de reconstruction de l'économie | 0 | -1 |  | 2 |  | 1 |  |  |
| 3 | La Nouvelle-Calédonie s'embrase → Prêter plutôt que donner, contre des réformes locales | 0.05 | -0.3 |  | 1 |  | -1 |  |  |
| 3 | La Nouvelle-Calédonie s'embrase → Négocier un nouveau statut avec une large autonomie | 0 | 0 |  |  |  | 1 | -1 |  |
| 3 | Les bijoux de la Couronne volés au Louvre → Plan d'urgence pour la sécurité des musées | 0 | -0.1 |  |  |  |  |  | 1 |
| 3 | Les bijoux de la Couronne volés au Louvre → Billet plus cher pour les visiteurs hors d'Europe | 0.03 | 0 |  |  |  | -1 |  |  |
| 3 | Les bijoux de la Couronne volés au Louvre → Laisser chaque musée gérer sa sécurité | 0 | 0 |  |  |  |  |  | -1 |
| 3 | Les bijoux de la Couronne volés au Louvre → Confier la surveillance à des sociétés privées | 0.01 | 0 |  | 1 |  |  |  | -1 |
| 3 | Les bijoux de la Couronne volés au Louvre → Recruter des gardiens dans tous les musées publics | -0.05 | 0 |  | 1 |  |  |  | 1 |
| 3 | Le virus revient : faut-il confiner ? → Confiner et payer les salaires : « quoi qu'il en coûte » | 0 | -70 | 2 | 4 |  | 1 |  | 2 |
| 3 | Le virus revient : faut-il confiner ? → Aider seulement les secteurs fermés | 0 | -30 |  | 2 |  |  |  | 1 |
| 3 | Le virus revient : faut-il confiner ? → Prêts garantis plutôt que subventions | 0 | -0.5 |  | 2 |  |  |  |  |
| 3 | Le virus revient : faut-il confiner ? → Pas de confinement strict, protéger les plus fragiles | 0 | 0 |  | 1 |  | -2 |  | -4 |
| 3 | Le virus revient : faut-il confiner ? → Rétablir l'impôt sur la fortune pour payer la crise | 1.8 | 0 |  | -1 |  | 1 |  |  |
| 4 | Une tempête submerge la côte vendéenne → Racheter et détruire les maisons les plus exposées | 0 | -0.3 |  |  |  | -1 |  |  |
| 4 | Une tempête submerge la côte vendéenne → Rehausser les digues de tout le littoral | -0.05 | -0.5 |  | 1 |  | 1 |  |  |
| 4 | Une tempête submerge la côte vendéenne → Interdire de construire en zone de submersion | 0.02 | 0 | -1 |  |  |  |  |  |
| 4 | Une tempête submerge la côte vendéenne → Indemniser vite et reconstruire sur place | 0 | -0.4 |  |  |  | 1 |  |  |
| 4 | Une tempête submerge la côte vendéenne → Augmenter la surprime « catastrophes naturelles » des assurances | 0.2 | 0 | -1 |  |  |  |  | 1 |
| 4 | Les gilets jaunes occupent les ronds-points → Annuler la hausse des taxes sur les carburants | -4 | 0 | 2 |  | 2 | 2 |  |  |
| 4 | Les gilets jaunes occupent les ronds-points → Annoncer des mesures de pouvoir d'achat | -10 | 0 | 3 |  |  | 1 |  |  |
| 4 | Les gilets jaunes occupent les ronds-points → Garder la taxe et la reverser en chèque aux ménages modestes | 0 | 0 | 1 |  | -2 | -1 |  |  |
| 4 | Les gilets jaunes occupent les ronds-points → Maintenir la hausse sans compensation | 4 | 0 | -2 |  | -2 | -4 |  |  |
| 4 | Les gilets jaunes occupent les ronds-points → Organiser un grand débat national | -0.01 | 0 |  |  |  | 1 |  |  |
| 4 | L'électricité et le gaz flambent → Plafonner les prix pour tout le monde | 0 | -20 | 7 |  | 2 | 2 |  |  |
| 4 | L'électricité et le gaz flambent → Aider seulement les ménages modestes | 0 | -1.8 | 2 |  |  | 1 |  |  |
| 4 | L'électricité et le gaz flambent → Plan de sobriété : baisser le chauffage | 0.2 | 0 | -2 |  | -3 |  |  |  |
| 4 | L'électricité et le gaz flambent → Taxer les profits exceptionnels des producteurs | 1 | 0 |  | -1 |  | 1 |  |  |
| 4 | L'électricité et le gaz flambent → Sortir les prix français du marché européen | 0 | 0 | 3 |  |  |  | 4 |  |
| 4 | Un cyclone ravage Mayotte → Voter une loi d'urgence qui accélère les chantiers | 0 | -1 |  |  |  | 1 |  | 2 |
| 4 | Un cyclone ravage Mayotte → Reconstruire en dur et résorber les bidonvilles | -0.05 | -0.5 |  |  |  | -1 |  | 2 |
| 4 | Un cyclone ravage Mayotte → Durcir les règles d'entrée et d'accès à la nationalité sur l'île | -0.05 | 0 |  |  |  | -2 | 2 |  |
| 4 | Un cyclone ravage Mayotte → Demander le fonds de solidarité de l'Union européenne | 0 | 0.1 |  |  |  |  |  | 1 |
| 4 | Un cyclone ravage Mayotte → Réduire les impôts de ceux qui investissent dans la reconstruction | -0.1 | 0 |  | 2 |  | -1 |  |  |
| 4 | Plus de boulangerie, un distributeur de baguettes → La commune fait construire une boulangerie | 0 | -0.001 |  |  |  | 1 |  |  |
| 4 | Plus de boulangerie, un distributeur de baguettes → Garder le distributeur automatique | 0 | 0 |  |  |  | -1 |  |  |
| 4 | Plus de boulangerie, un distributeur de baguettes → Baisser les impôts des commerces de village | -0.05 | 0 |  | 1 |  |  |  |  |
| 4 | Plus de boulangerie, un distributeur de baguettes → Un camion-boulangerie pour dix villages | -0.01 | 0 |  |  |  | 1 |  |  |
| 4 | Plus de boulangerie, un distributeur de baguettes → Reprendre la boulangerie en coopérative avec les habitants | 0 | 0 |  | 1 |  | 2 |  |  |
| 5 | Une maladie de la peau frappe les vaches des Alpes → Abattre tout le troupeau touché, comme la règle le prévoit | -0.1 | 0 |  | -1 |  | -1 | 1 |  |
| 5 | Une maladie de la peau frappe les vaches des Alpes → Vacciner tous les bovins du pays | -0.3 | 0 |  | -1 |  |  |  | 1 |
| 5 | Une maladie de la peau frappe les vaches des Alpes → N'abattre que les bêtes malades et vacciner autour | 0 | 0 |  |  |  | 1 |  |  |
| 5 | Une maladie de la peau frappe les vaches des Alpes → Faire payer les contrôles par une cotisation des filières | 0.1 | 0 | -1 |  |  |  |  |  |
| 5 | Une maladie de la peau frappe les vaches des Alpes → Déclencher la clause de sauvegarde sur la viande importée | 0 | 0 | -1 | 1 |  |  | 1 |  |
| 5 | Des « polluants éternels » dans les œufs du sud de Lyon → Interdire tout de suite les rejets de l'usine | 0 | 0 |  | -1 |  | 1 |  | 2 |
| 5 | Des « polluants éternels » dans les œufs du sud de Lyon → Faire payer l'industriel pour chaque gramme rejeté | 0.02 | 0 |  |  |  |  |  | 1 |
| 5 | Des « polluants éternels » dans les œufs du sud de Lyon → Financer des filtres dans les usines d'eau potable | 0 | -0.2 |  |  |  | 1 |  | 2 |
| 5 | Des « polluants éternels » dans les œufs du sud de Lyon → Informer et suivre la santé des habitants, sans contrainte | 0 | 0 |  |  |  | -1 |  | -1 |
| 5 | Des « polluants éternels » dans les œufs du sud de Lyon → Interdire ces produits dans les objets du quotidien | 0 | 0 |  | -1 |  |  |  | 1 |
| 5 | Plus de beurre au supermarché → Rouvrir les négociations entre fabricants et supermarchés | 0 | 0 | -1 | 1 |  |  |  |  |
| 5 | Plus de beurre au supermarché → Laisser les prix s'ajuster tout seuls | 0 | 0 |  |  |  | -1 |  |  |
| 5 | Plus de beurre au supermarché → Limiter le nombre de plaquettes par client | 0 | 0 |  |  |  | 1 |  |  |
| 5 | Plus de beurre au supermarché → Importer du beurre d'autres pays d'Europe | 0 | 0 | 1 |  |  |  | -1 |  |
| 5 | Plus de beurre au supermarché → Plafonner les marges des supermarchés sur le beurre | 0 | 0 | 1 | -1 |  |  |  |  |
| 5 | Le train de nuit pour Nice peut-il revenir ? → Subventionner le train de nuit pour le relancer | -0.03 | 0 |  |  |  |  |  | 1 |
| 5 | Le train de nuit pour Nice peut-il revenir ? → Laisser la ligne fermée, elle n'est pas rentable | 0.02 | 0 |  |  |  |  |  | -1 |
| 5 | Le train de nuit pour Nice peut-il revenir ? → Confier la ligne à une compagnie choisie sur appel d'offres | 0.01 | 0 |  |  |  |  |  | 1 |
| 5 | Le train de nuit pour Nice peut-il revenir ? → Financer le train par une petite taxe sur les vols | 0.01 | 0 |  |  |  |  |  | 1 |
| 5 | Le train de nuit pour Nice peut-il revenir ? → Racheter des voitures-lits et rouvrir dix lignes | -0.05 | -0.5 |  |  | -1 |  |  | 2 |
| 6 | Le Nord sous l'eau pendant des semaines → Racheter les maisons les plus exposées | -0.4 | 0 |  |  |  | 1 |  | 1 |
| 6 | Le Nord sous l'eau pendant des semaines → Envoyer l'armée et des pompes en urgence | 0 | 0 |  |  |  | 1 |  |  |
| 6 | Le Nord sous l'eau pendant des semaines → Aider les communes à curer les canaux | -0.1 | 0 |  |  |  |  |  | 1 |
| 6 | Le Nord sous l'eau pendant des semaines → Relever la surprime d'assurance catastrophes naturelles | 0.4 | 0 | -1 |  |  |  |  |  |
| 6 | Le Nord sous l'eau pendant des semaines → Indemniser chaque foyer inondé sans attendre l'assurance | -0.1 | 0 | 1 |  |  | 1 |  |  |
| 6 | 151 territoires en manque de médecins → Obliger les médecins à venir deux jours par mois | -0.05 | 0 |  |  |  | -1 |  | 3 |
| 6 | 151 territoires en manque de médecins → Mieux payer les médecins volontaires | -0.3 | 0 |  |  |  |  |  | 2 |
| 6 | 151 territoires en manque de médecins → Confier plus de soins aux pharmaciens et infirmiers | 0.1 | 0 |  |  |  |  |  | 2 |
| 6 | 151 territoires en manque de médecins → Former beaucoup plus de médecins dans les facultés | -0.4 | 0 |  | 1 |  |  |  | 1 |
| 6 | 151 territoires en manque de médecins → Ouvrir des centres de santé avec des médecins salariés | -0.15 | 0 |  | 1 |  |  |  | 2 |
| 6 | Notre-Dame rouvre : faut-il payer pour entrer ? → Garder l'entrée gratuite pour tous | 0 | 0 |  |  |  | 1 |  |  |
| 6 | Notre-Dame rouvre : faut-il payer pour entrer ? → Faire payer 5 € aux touristes pour le patrimoine | 0.05 | 0 |  |  |  | -1 |  | 1 |
| 6 | Notre-Dame rouvre : faut-il payer pour entrer ? → Réduire l'avantage fiscal des très gros dons | 0.05 | 0 |  |  |  | -1 |  |  |
| 6 | Notre-Dame rouvre : faut-il payer pour entrer ? → Utiliser les dons restants pour les abords et l'accueil | 0 | 0 |  |  |  | 1 |  |  |
| 6 | Notre-Dame rouvre : faut-il payer pour entrer ? → Lancer un grand plan pour les églises de village | -0.1 | 0 |  | 1 |  | 1 |  |  |
| 6 | L'Espagne et le Portugal plongés dans le noir → Envoyer à chaque foyer un guide pour tenir trois jours | -0.02 | 0 |  |  |  | 1 |  |  |
| 6 | L'Espagne et le Portugal plongés dans le noir → Renforcer les lignes électriques avec l'Espagne | 0 | -0.1 |  |  |  |  | -1 | 1 |
| 6 | L'Espagne et le Portugal plongés dans le noir → Équiper hôpitaux et mairies de groupes électrogènes | -0.05 | 0 |  |  |  |  |  | 1 |
| 6 | L'Espagne et le Portugal plongés dans le noir → Ne rien changer, notre réseau est plus solide | 0 | 0 |  |  |  |  |  | -1 |
| 6 | L'Espagne et le Portugal plongés dans le noir → Obliger les opérateurs à garder leurs antennes allumées | 0 | 0 | -1 |  |  |  |  | 1 |
| 7 | Le grand froid fait exploser la consommation d'électricité → Demander à chacun de baisser le chauffage le soir | 0 | 0 |  |  | -1 | 1 |  |  |
| 7 | Le grand froid fait exploser la consommation d'électricité → Payer les usines qui s'arrêtent aux heures de pointe | -0.05 | 0 |  |  | -1 |  |  | 1 |
| 7 | Le grand froid fait exploser la consommation d'électricité → Garder des centrales au gaz en réserve pour les grands froids | 0 | 0 | -1 |  | 2 |  | 1 |  |
| 7 | Le grand froid fait exploser la consommation d'électricité → Éteindre vitrines, bureaux vides et éclairage public la nuit | 0.03 | 0 |  |  | -1 | -1 |  |  |
| 7 | Le grand froid fait exploser la consommation d'électricité → Importer du courant d'Espagne par les nouvelles lignes | 0 | 0 |  |  | -1 |  | -1 | 1 |
| 7 | Des étudiants font la queue pour manger → Repas à 1 € pour tous les étudiants | -0.05 | 0 |  |  |  | 1 |  | 1 |
| 7 | Des étudiants font la queue pour manger → Repas à 1 € seulement pour les boursiers et précaires | -0.015 | 0 |  |  |  | 1 |  |  |
| 7 | Des étudiants font la queue pour manger → Augmenter les bourses plutôt que subventionner les repas | -0.08 | 0 |  |  |  | 1 |  |  |
| 7 | Des étudiants font la queue pour manger → Laisser les associations distribuer l'aide alimentaire | -0.005 | 0 |  |  |  | -1 |  |  |
| 7 | Des étudiants font la queue pour manger → Faire payer plus cher les étudiants venus hors d'Europe | 0.05 | 0 |  |  |  | -1 |  | 1 |
| 7 | La Grèce au bord de la sortie de l'euro → Prêter vite à la Grèce, avec des conditions allégées | 0 | 0 |  |  |  | 1 | -1 |  |
| 7 | La Grèce au bord de la sortie de l'euro → Laisser la Grèce sortir de l'euro | 0 | -2 | -1 |  |  |  | 1 |  |
| 7 | La Grèce au bord de la sortie de l'euro → Effacer une partie de la dette grecque | -0.2 | 0 |  |  |  | 1 | -1 |  |
| 7 | La Grèce au bord de la sortie de l'euro → Prêter seulement contre des réformes strictes | 0.1 | 0 |  |  |  | -1 | 1 |  |
| 7 | La Grèce au bord de la sortie de l'euro → Emprunter ensemble en Europe pour aider la Grèce | 0 | 0 |  |  |  | 1 | -1 |  |
| 7 | Une brume de pollution sur Lyon → Circulation alternée : un jour sur deux selon la plaque | 0 | 0 |  |  | -1 | -1 |  |  |
| 7 | Une brume de pollution sur Lyon → Transports en commun gratuits pendant le pic | -0.005 | 0 |  |  | -1 | 1 |  |  |
| 7 | Une brume de pollution sur Lyon → N'autoriser que les voitures les moins polluantes | 0 | 0 |  |  | -2 | -1 |  |  |
| 7 | Une brume de pollution sur Lyon → Simple conseil de limiter ses trajets | 0 | 0 |  |  | 1 | 1 |  |  |
| 7 | Une brume de pollution sur Lyon → Faire payer l'entrée des voitures en ville | 0.01 | 0 |  |  | -1 | -1 |  |  |
| 8 | Des familles fuient la guerre en Ukraine → Accueillir largement, avec logement et allocation | -0.6 | 0 |  |  |  | 1 |  | -1 |
| 8 | Des familles fuient la guerre en Ukraine → Loger les familles chez des habitants volontaires | -0.2 | 0 |  |  |  | 2 |  |  |
| 8 | Des familles fuient la guerre en Ukraine → Aider surtout les pays voisins de l'Ukraine | -0.1 | 0 |  |  |  | -1 | 1 |  |
| 8 | Des familles fuient la guerre en Ukraine → Accueillir en misant sur le travail plutôt que les allocations | 0.05 | 0 |  | 1 |  | -1 |  |  |
| 8 | Des familles fuient la guerre en Ukraine → Payer l'aide avec les revenus des avoirs russes gelés | 0.1 | 0 |  |  |  | 1 | 1 |  |
| 8 | Les pêcheurs de Boulogne privés d'eaux britanniques → Indemniser les bateaux bloqués au port | 0 | -0.03 |  |  |  | 1 |  |  |
| 8 | Les pêcheurs de Boulogne privés d'eaux britanniques → Payer la casse des bateaux de ceux qui arrêtent | 0 | -0.02 |  |  |  | -1 | -1 |  |
| 8 | Les pêcheurs de Boulogne privés d'eaux britanniques → Bloquer les arrivages britanniques dans nos ports | -0.005 | 0 |  |  |  |  | 1 | -1 |
| 8 | Les pêcheurs de Boulogne privés d'eaux britanniques → Laisser l'Union européenne négocier les licences | 0 | 0 |  |  |  |  | -1 |  |
| 8 | Les pêcheurs de Boulogne privés d'eaux britanniques → Saisir le tribunal prévu par l'accord avec Londres | 0 | 0 |  |  |  |  | 1 |  |
| 8 | La Seine sort de son lit → Indemniser vite les sinistrés | 0 | -0.1 |  |  |  | 1 |  |  |
| 8 | La Seine sort de son lit → Adapter les maisons pour qu'elles résistent à l'eau | 0 | -0.2 |  |  |  |  |  | 1 |
| 8 | La Seine sort de son lit → Construire de nouveaux bassins de stockage en amont | -0.02 | -0.5 |  |  |  |  |  | 2 |
| 8 | La Seine sort de son lit → Rembourser moins ceux qui rebâtissent en zone inondable | 0.05 | 0 |  |  |  | -1 |  |  |
| 8 | La Seine sort de son lit → Augmenter la taxe locale pour financer les digues | 0.05 | 0 | -1 |  |  |  |  | 1 |
| 8 | Le pays passe en alerte maximale → Plus de patrouilles dans les gares et autour des écoles | -0.05 | 0 |  |  |  |  |  | 1 |
| 8 | Le pays passe en alerte maximale → Contrôler les sacs à l'entrée des lieux publics | -0.01 | 0 |  |  |  | -1 |  |  |
| 8 | Le pays passe en alerte maximale → Former les habitants aux gestes qui sauvent | -0.01 | 0 |  |  |  | 1 |  | 1 |
| 8 | Le pays passe en alerte maximale → Garder le niveau d'alerte habituel | 0 | 0 |  |  |  | 1 |  |  |
| 8 | Le pays passe en alerte maximale → Expulser les étrangers fichés pour radicalisation | 0 | 0 |  |  |  | -1 | 1 |  |
| 9 | Une tempête géante prive la Bretagne d'électricité → Envoyer des électriciens de toute la France | 0 | -0.1 |  |  |  | 1 |  | 1 |
| 9 | Une tempête géante prive la Bretagne d'électricité → Laisser le gestionnaire du réseau payer seul | 0 | 0 |  |  |  | -1 |  |  |
| 9 | Une tempête géante prive la Bretagne d'électricité → Enterrer les lignes électriques des campagnes | -0.3 | 0 | -1 |  |  |  |  | 1 |
| 9 | Une tempête géante prive la Bretagne d'électricité → Obliger les propriétaires à élaguer près des lignes | 0.02 | 0 |  |  |  | -1 |  | 1 |
| 9 | Une tempête géante prive la Bretagne d'électricité → Créer un fonds tempêtes payé par les assurances | 0.2 | 0 | -1 |  |  | 1 |  |  |
| 9 | Grève record dans les trains et le métro → Retirer la réforme pour apaiser | -0.4 | 0 |  |  |  | 2 |  |  |
| 9 | Grève record dans les trains et le métro → Tenir bon et aller au vote | 0.5 | -0.3 |  | -1 |  | -2 |  |  |
| 9 | Grève record dans les trains et le métro → Garder la réforme pour les seuls nouveaux salariés | 0.1 | 0 |  |  |  | -1 |  |  |
| 9 | Grève record dans les trains et le métro → Instaurer un service minimum garanti | 0 | 0 |  | 1 |  | -1 |  |  |
| 9 | Grève record dans les trains et le métro → Financer les retraites par plus de cotisations | 0.6 | 0 | -1 | -1 |  | 1 |  |  |
| 9 | La maternité de la petite ville ferme → Rouvrir la maternité avec des médecins intérimaires | -0.02 | 0 |  |  |  |  |  | 1 |
| 9 | La maternité de la petite ville ferme → Garder la fermeture, avec un hébergement près du grand hôpital | 0.01 | 0 |  |  |  | -1 |  | -1 |
| 9 | La maternité de la petite ville ferme → Créer un centre de suivi tenu par des sages-femmes | 0 | 0 |  |  |  |  |  | 1 |
| 9 | La maternité de la petite ville ferme → Payer une équipe d'urgence de garde la nuit | -0.01 | 0 |  |  |  |  |  | 1 |
| 10 | Un pesticide interdit a contaminé les Antilles → Indemniser toutes les personnes malades | -0.15 | 0 |  |  |  | 2 |  |  |
| 10 | Un pesticide interdit a contaminé les Antilles → Tester gratuitement les habitants et chercher à dépolluer | -0.05 | 0 |  |  |  |  |  | 1 |
| 10 | Un pesticide interdit a contaminé les Antilles → Faire payer les fabricants et vendeurs du pesticide | 0.03 | 0 |  |  |  | 1 |  |  |
| 10 | Un pesticide interdit a contaminé les Antilles → Interdire pêche et cultures dans les zones polluées | 0 | 0 |  | -1 |  |  |  | 1 |
| 10 | Un pesticide interdit a contaminé les Antilles → Taxer les bananes importées hors d'Europe pour financer le plan | 0.08 | 0 | -1 |  |  |  | 1 |  |
| 10 | Faute de neige, la station de ski ferme pour de bon → Payer des canons à neige pour sauver la saison | -0.01 | 0 |  | 1 |  |  |  |  |
| 10 | Faute de neige, la station de ski ferme pour de bon → Aider le village à vivre du tourisme toute l'année | 0 | 0 |  | -1 |  | 1 |  |  |
| 10 | Faute de neige, la station de ski ferme pour de bon → Laisser fermer, sans argent public | 0.01 | 0 |  | -1 |  | -1 |  |  |
| 10 | Faute de neige, la station de ski ferme pour de bon → Confier la station à un groupe privé du tourisme | 0.01 | 0 | -1 | 1 |  |  |  |  |
| 10 | Du lait pour bébé contaminé à la salmonelle → Recruter des inspecteurs de l'alimentation | -0.06 | 0 |  |  |  |  |  | 1 |
| 10 | Du lait pour bébé contaminé à la salmonelle → Faire payer les contrôles aux industriels | 0.05 | 0 | -1 |  |  |  |  | 1 |
| 10 | Du lait pour bébé contaminé à la salmonelle → Sanctionner lourdement l'entreprise | 0.02 | 0 |  | -1 |  | 1 |  |  |
| 10 | Du lait pour bébé contaminé à la salmonelle → Obliger les magasins à bloquer en caisse les produits rappelés | 0 | 0 |  |  |  |  |  | 1 |
| 10 | Du lait pour bébé contaminé à la salmonelle → Indemniser les familles, sans changer les règles | -0.01 | 0 |  |  |  | 1 |  |  |
| 11 | Une usine chimique brûle en pleine ville → Doubler le nombre d'inspecteurs des usines dangereuses | -0.05 | 0 |  |  |  |  |  | 1 |
| 11 | Une usine chimique brûle en pleine ville → Indemniser vite les agriculteurs et les commerçants | 0 | -0.05 |  |  |  | 1 |  |  |
| 11 | Une usine chimique brûle en pleine ville → Éloigner les usines dangereuses des villes | -0.2 | 0 |  | -1 |  | 1 |  |  |
| 11 | Une usine chimique brûle en pleine ville → Augmenter les amendes et la taxe des sites à risque | 0.04 | 0 |  | -1 |  |  |  | 1 |
| 11 | Une usine chimique brûle en pleine ville → Laisser l'industriel payer seul les dégâts | 0.02 | 0 |  | 1 |  | -1 |  |  |
| 11 | Des pirates paralysent un hôpital et demandent une rançon → Payer un plan national de cybersécurité des hôpitaux | -0.25 | 0 |  |  |  |  | 1 | 1 |
| 11 | Des pirates paralysent un hôpital et demandent une rançon → Refuser de payer et faire tourner l'hôpital sur papier | 0 | 0 |  |  |  |  | 1 | -1 |
| 11 | Des pirates paralysent un hôpital et demandent une rançon → Interdire par la loi le paiement des rançons | 0 | 0 |  |  |  |  | 1 | -1 |
| 11 | Des pirates paralysent un hôpital et demandent une rançon → Regrouper l'informatique des hôpitaux d'une région | 0.03 | 0 |  |  |  |  |  | 1 |
| 11 | Des pirates paralysent un hôpital et demandent une rançon → Riposter avec les services de l'État contre les pirates | -0.05 | 0 |  |  |  |  | 1 |  |
| 11 | Plus de moutarde dans les rayons → Aider les agriculteurs à cultiver la moutarde en France | -0.01 | 0 |  |  |  |  | 1 |  |
| 11 | Plus de moutarde dans les rayons → Laisser le marché s'ajuster | 0 | 0 | -1 |  |  |  |  |  |
| 11 | Plus de moutarde dans les rayons → Réserver la mention « Dijon » aux graines françaises | 0 | 0 | -1 |  |  |  | 1 |  |
| 11 | Plus de moutarde dans les rayons → Faire financer un stock de sécurité par les industriels | 0.01 | 0 | -1 |  |  |  | 1 |  |
| 12 | Affrontements autour d'une réserve d'eau agricole → Continuer les réserves, avec des règles de partage | -0.03 | 0 |  | 1 |  | -1 |  |  |
| 12 | Affrontements autour d'une réserve d'eau agricole → Suspendre les chantiers et lancer un débat public | 0.02 | 0 |  | -1 |  | 1 |  |  |
| 12 | Affrontements autour d'une réserve d'eau agricole → Aider les fermes à passer à des cultures moins gourmandes en eau | -0.05 | 0 |  | -1 |  | 1 |  |  |
| 12 | Affrontements autour d'une réserve d'eau agricole → Faire payer l'eau d'irrigation à son vrai prix | 0.04 | 0 | -1 | -1 |  |  |  |  |
| 12 | Affrontements autour d'une réserve d'eau agricole → Interdire la manifestation et dissoudre les groupes violents | -0.01 | 0 |  |  |  | -1 |  |  |
| 12 | À Mayotte, l'eau ne coule plus qu'un jour sur trois → Distribuer gratuitement de l'eau en bouteille à tous | 0 | -0.1 |  |  |  | 1 |  | 1 |
| 12 | À Mayotte, l'eau ne coule plus qu'un jour sur trois → Couper l'eau à tour de rôle, sans aide de plus | 0 | 0 |  |  |  | -1 |  | -1 |
| 12 | À Mayotte, l'eau ne coule plus qu'un jour sur trois → Construire une grande usine de dessalement | -0.05 | 0 |  |  |  |  |  | 1 |
| 12 | À Mayotte, l'eau ne coule plus qu'un jour sur trois → Réparer les fuites, payé par le prix de l'eau | 0.02 | 0 | -1 |  |  |  |  | 1 |
| 12 | À Mayotte, l'eau ne coule plus qu'un jour sur trois → Faire payer plus cher les gros consommateurs d'eau | 0.01 | 0 | -1 |  |  | 1 |  |  |
| 12 | Les stations-service à sec → Réquisitionner les grévistes | 0 | 0 |  |  |  | -1 |  |  |
| 12 | Les stations-service à sec → Taxer les superprofits pour financer les hausses de salaires | 0.5 | 0 | 1 | -1 |  |  |  |  |
| 12 | Les stations-service à sec → Puiser dans les stocks stratégiques | 0 | 0 |  |  |  |  | -1 |  |
| 12 | Les stations-service à sec → Baisser les taxes sur le carburant pendant la crise | -0.8 | 0 | 2 |  |  |  |  |  |
| 13 | La pêche fermée un mois pour sauver les dauphins → Fermer la pêche et indemniser les pêcheurs | -0.08 | 0 |  |  | -1 | 1 |  |  |
| 13 | La pêche fermée un mois pour sauver les dauphins → Équiper les bateaux de répulsifs et de caméras | 0 | 0 |  | 1 |  |  |  |  |
| 13 | La pêche fermée un mois pour sauver les dauphins → Fermer sans indemniser | 0.05 | 0 |  | -2 |  | -1 |  |  |
| 13 | La pêche fermée un mois pour sauver les dauphins → Demander à l'Europe d'assouplir la règle | 0.02 | 0 |  | 1 | 1 |  |  |  |
| 13 | La pêche fermée un mois pour sauver les dauphins → Taxer le poisson vendu pour financer la protection | 0.04 | 0 | -1 |  |  |  |  |  |
| 13 | Des groupes de niveau au collège → Généraliser les groupes de niveau | -0.3 | 0 |  |  |  | -1 |  | 1 |
| 13 | Des groupes de niveau au collège → Laisser chaque collège décider | 0 | 0 |  |  |  | -1 |  |  |
| 13 | Des groupes de niveau au collège → Réduire la taille de toutes les classes | -0.6 | 0 |  |  |  |  |  | 2 |
| 13 | Des groupes de niveau au collège → Remplacer les groupes par du soutien en ligne | 0.1 | 0 |  |  |  |  |  | -1 |
| 13 | Des groupes de niveau au collège → Orienter plus tôt vers des filières professionnelles | 0.05 | 0 |  | 1 |  | -1 |  |  |
| 13 | Les vélos en libre-service ne marchent plus → Reprendre le service en régie publique | -0.01 | 0 |  |  |  |  |  | 1 |
| 13 | Les vélos en libre-service ne marchent plus → Infliger des pénalités et laisser l'opérateur réparer | 0.01 | 0 |  |  |  |  |  | -1 |
| 13 | Les vélos en libre-service ne marchent plus → Ouvrir la ville aux vélos privés sans station | 0.01 | 0 |  |  |  | -1 |  | 1 |
| 13 | Les vélos en libre-service ne marchent plus → Rembourser les abonnés aux frais de l'opérateur | 0 | 0 |  |  |  | 1 |  |  |
| 14 | La Guyane bloquée par un grand mouvement social → Signer un grand plan d'urgence | -0.3 | 0 |  |  |  | 2 |  | 1 |
| 14 | La Guyane bloquée par un grand mouvement social → Envoyer des renforts de police et de gendarmerie | -0.05 | 0 |  |  |  | -1 |  |  |
| 14 | La Guyane bloquée par un grand mouvement social → Refuser de céder sous la pression des barrages | 0 | 0 |  | -1 |  | -2 |  |  |
| 14 | La Guyane bloquée par un grand mouvement social → Donner plus d'autonomie à la collectivité de Guyane | 0.05 | 0 |  |  |  | 1 |  |  |
| 14 | La Guyane bloquée par un grand mouvement social → Conditionner l'aide à une meilleure gestion locale | 0.05 | 0 |  |  |  | -1 |  |  |
| 14 | Une nouvelle plateforme trie les futurs étudiants → Ouvrir beaucoup plus de places à l'université | -0.4 | 0 |  |  |  | 1 |  | 1 |
| 14 | Une nouvelle plateforme trie les futurs étudiants → Assumer la sélection à l'entrée de la fac | 0.1 | 0 |  |  |  | -1 |  |  |
| 14 | Une nouvelle plateforme trie les futurs étudiants → Développer l'apprentissage après le bac | -0.3 | 0 |  | 1 |  |  |  |  |
| 14 | Une nouvelle plateforme trie les futurs étudiants → Augmenter les frais d'inscription, avec plus de bourses | 0.3 | 0 | -1 |  |  |  |  | 1 |
| 14 | Une nouvelle plateforme trie les futurs étudiants → Revenir au tirage au sort pour les filières pleines | 0 | 0 |  |  |  | -1 |  |  |
| 14 | Des villages ravitaillés en eau par camion → Relier les villages aux réseaux des villes | -0.05 | 0 |  |  |  |  |  | 1 |
| 14 | Des villages ravitaillés en eau par camion → Interdire tous les usages non essentiels | 0.01 | 0 |  | -1 |  |  |  |  |
| 14 | Des villages ravitaillés en eau par camion → Aider les éleveurs à acheter du fourrage | 0 | -0.03 |  | 1 |  |  |  |  |
| 14 | Des villages ravitaillés en eau par camion → Faire payer l'eau plus cher au-delà d'un seuil | 0.02 | 0 | -1 |  |  |  |  |  |
| 15 | Bruxelles interdit la fusion de deux géants du train → Accepter la décision et laisser chaque entreprise seule | 0 | 0 |  |  |  |  | -1 |  |
| 15 | Bruxelles interdit la fusion de deux géants du train → Demander de changer les règles européennes de concurrence | 0 | 0 |  |  |  |  | 1 |  |
| 15 | Bruxelles interdit la fusion de deux géants du train → Faire entrer l'État au capital du groupe français | 0 | -0.5 |  |  |  |  | 2 |  |
| 15 | Bruxelles interdit la fusion de deux géants du train → Réserver les commandes publiques aux trains faits en Europe | -0.05 | 0 |  | 1 |  |  | 1 |  |
| 15 | Bruxelles interdit la fusion de deux géants du train → Vendre des parts de l'État pour financer l'innovation | 0 | 0.3 |  |  |  |  | -1 |  |
| 15 | Deux immeubles s'effondrent au cœur de la ville → Lancer un grand plan de rénovation des quartiers anciens | -0.2 | 0 |  |  |  | 1 |  | 1 |
| 15 | Deux immeubles s'effondrent au cœur de la ville → Sanctionner durement les marchands de sommeil | 0.02 | 0 |  |  |  | 1 |  |  |
| 15 | Deux immeubles s'effondrent au cœur de la ville → Obliger un diagnostic de solidité avant chaque location | 0 | 0 | -1 |  |  |  |  | 1 |
| 15 | Deux immeubles s'effondrent au cœur de la ville → Reloger les familles évacuées à l'hôtel aux frais de l'État | 0 | -0.05 |  |  |  | 1 |  |  |
| 15 | Deux immeubles s'effondrent au cœur de la ville → Taxer davantage les logements vides et dégradés | 0.03 | 0 |  |  |  |  |  | 1 |
| 15 | Des algues vertes toxiques envahissent une plage → Ramasser les algues chaque jour | -0.01 | 0 |  |  |  | 1 |  |  |
| 15 | Des algues vertes toxiques envahissent une plage → Réduire les élevages dans les zones touchées | -0.03 | 0 |  | -1 |  |  |  |  |
| 15 | Des algues vertes toxiques envahissent une plage → Taxer les engrais azotés | 0.05 | 0 |  | -1 |  |  |  |  |
| 15 | Des algues vertes toxiques envahissent une plage → Payer les agriculteurs qui changent de pratiques | -0.02 | 0 |  |  |  | 1 |  |  |
| 15 | Des algues vertes toxiques envahissent une plage → Faire financer le ramassage par les élevages intensifs | 0.01 | 0 |  | -1 |  |  |  |  |
| 16 | Record absolu de chaleur, le brevet est reporté → Rénover et végétaliser toutes les écoles | -0.5 | 0 |  |  |  |  |  | 1 |
| 16 | Record absolu de chaleur, le brevet est reporté → Adapter le calendrier scolaire aux fortes chaleurs | 0 | 0 |  |  |  | -1 |  |  |
| 16 | Record absolu de chaleur, le brevet est reporté → Installer la climatisation dans les écoles | -0.2 | 0 |  |  |  |  |  | 1 |
| 16 | Record absolu de chaleur, le brevet est reporté → Financer l'adaptation par une taxe sur les climatiseurs | 0.05 | 0 | -1 |  |  |  |  |  |
| 16 | Record absolu de chaleur, le brevet est reporté → Reporter les travaux dans les écoles pour tenir le budget | 0.2 | 0 |  |  |  |  |  | -1 |
| 16 | Le chikungunya revient en force sur l'île de La Réunion → Démoustiquer massivement avec l'armée | 0 | -0.05 |  |  |  |  |  | 1 |
| 16 | Le chikungunya revient en force sur l'île de La Réunion → Mobiliser les habitants pour vider les eaux stagnantes | 0 | 0 |  |  |  | 1 |  |  |
| 16 | Le chikungunya revient en force sur l'île de La Réunion → Vacciner en priorité les personnes fragiles | -0.05 | 0 |  |  |  |  |  | 1 |
| 16 | Le chikungunya revient en force sur l'île de La Réunion → Taxer les séjours touristiques pour financer la lutte | 0.01 | 0 |  | -1 |  |  |  |  |
| 16 | Le chikungunya revient en force sur l'île de La Réunion → Reporter les soins non urgents pour soulager l'hôpital | 0.02 | 0 |  |  |  |  |  | -1 |
| 16 | Les piscines ferment, faute de maîtres-nageurs → Payer la formation des maîtres-nageurs | -0.02 | 0 |  | 1 |  |  |  |  |
| 16 | Les piscines ferment, faute de maîtres-nageurs → Mieux payer les maîtres-nageurs municipaux | -0.02 | 0 | 1 |  |  |  |  |  |
| 16 | Les piscines ferment, faute de maîtres-nageurs → Confier les piscines à des entreprises privées | 0.02 | 0 | -1 |  |  |  |  |  |
| 16 | Les piscines ferment, faute de maîtres-nageurs → Autoriser des surveillants moins diplômés l'été | 0.01 | 0 |  |  |  |  |  | 1 |
| 17 | Incendies volontaires sur les lignes à grande vitesse → Surveiller les lignes avec des drones et des agents | -0.3 | 0 |  |  |  | 1 |  | 1 |
| 17 | Incendies volontaires sur les lignes à grande vitesse → Doubler les câbles pour que le réseau tienne seul | -0.5 | 0 |  | 1 |  |  |  | 2 |
| 17 | Incendies volontaires sur les lignes à grande vitesse → Faire payer les réparations par la SNCF, sans aide | 0.1 | 0 |  |  |  |  |  | -1 |
| 17 | Incendies volontaires sur les lignes à grande vitesse → Alourdir les peines pour atteinte aux réseaux | 0.02 | 0 |  |  |  | -1 |  |  |
| 17 | Des barrages contre le prix des courses → Supprimer la TVA sur les produits de base | -0.15 | 0 | 2 |  |  | 1 |  |  |
| 17 | Des barrages contre le prix des courses → Encadrer les marges de la grande distribution | 0 | 0 | 1 | -1 |  |  |  |  |
| 17 | Des barrages contre le prix des courses → Ouvrir le marché à de nouveaux distributeurs | 0.05 | 0 | 1 | -1 |  |  |  |  |
| 17 | Des barrages contre le prix des courses → Aider la production agricole locale | -0.08 | 0 |  | 1 |  |  | 1 |  |
| 17 | Des barrages contre le prix des courses → Rétablir l'ordre et lever les barrages | 0.02 | 0 |  |  |  | -2 |  |  |
| 17 | Les données de millions de demandeurs d'emploi volées → Créer une agence de cybersécurité pour les services publics | -0.2 | 0 |  |  |  |  | 1 | 1 |
| 17 | Les données de millions de demandeurs d'emploi volées → Obliger la double authentification et limiter les accès | 0 | 0 |  |  |  |  |  | -1 |
| 17 | Les données de millions de demandeurs d'emploi volées → Garder moins de données et effacer les anciennes | 0.01 | 0 |  |  |  |  |  | -1 |
| 17 | Les données de millions de demandeurs d'emploi volées → Sanctionner les prestataires informatiques fautifs | 0.03 | 0 |  | -1 |  |  |  |  |
| 18 | Une ville de l'Ouest les pieds dans l'eau → Laisser des champs en amont servir de zones d'inondation | -0.1 | 0 |  | -1 |  | 1 |  |  |
| 18 | Une ville de l'Ouest les pieds dans l'eau → Construire des digues et des bassins de retenue | -0.3 | 0 |  | 1 |  |  |  | 1 |
| 18 | Une ville de l'Ouest les pieds dans l'eau → Interdire de construire en zone inondable | 0.02 | 0 | -1 |  |  |  |  |  |
| 18 | Une ville de l'Ouest les pieds dans l'eau → Laisser les assureurs indemniser seuls | 0.05 | 0 | -1 |  |  | -1 |  |  |
| 18 | Une ville de l'Ouest les pieds dans l'eau → Relever la taxe locale contre les inondations | 0.05 | 0 | -1 |  |  |  |  | 1 |
| 18 | L'aciérie du Nord annonce des centaines de suppressions de postes → Nationaliser temporairement les usines | -1 | 0 |  | 2 |  |  | 2 |  |
| 18 | L'aciérie du Nord annonce des centaines de suppressions de postes → Demander à l'Europe des quotas sur l'acier importé | 0.05 | 0 | -1 | 1 |  |  |  |  |
| 18 | L'aciérie du Nord annonce des centaines de suppressions de postes → Aider à investir dans un acier moins polluant | -0.4 | 0 |  | 1 | -2 |  |  |  |
| 18 | L'aciérie du Nord annonce des centaines de suppressions de postes → Laisser l'entreprise décider et financer la reconversion | 0.2 | 0 |  | -2 |  | -1 |  |  |
| 18 | L'aciérie du Nord annonce des centaines de suppressions de postes → Exiger le remboursement des aides publiques reçues | 0.05 | 0 |  | -1 |  |  |  |  |
| 18 | Une loi agricole rouvre la porte à un pesticide interdit → Autoriser le pesticide sous conditions strictes | 0.03 | 0 |  | 1 | 1 |  |  |  |
| 18 | Une loi agricole rouvre la porte à un pesticide interdit → Maintenir l'interdiction et aider à trouver d'autres solutions | -0.1 | 0 |  | -1 | -1 |  |  |  |
| 18 | Une loi agricole rouvre la porte à un pesticide interdit → Interdire les produits importés traités avec ce pesticide | 0.01 | 0 | -1 |  |  |  | 1 |  |
| 18 | Une loi agricole rouvre la porte à un pesticide interdit → Indemniser les producteurs sans changer la loi | -0.15 | 0 | 1 |  |  |  |  |  |
| 19 | Le nouveau réacteur normand est enfin raccordé → Lancer six nouveaux réacteurs | -1.5 | 0 |  | 2 | -2 |  | 2 |  |
| 19 | Le nouveau réacteur normand est enfin raccordé → Miser sur l'éolien en mer et le solaire | -0.6 | 0 |  | 1 | -2 |  |  |  |
| 19 | Le nouveau réacteur normand est enfin raccordé → Vendre l'électricité plus cher aux gros consommateurs | 0.4 | 0 |  | -1 |  |  |  |  |
| 19 | Le nouveau réacteur normand est enfin raccordé → Faire une pause et auditer le chantier avant tout | 0.3 | 0 |  | -1 |  |  | -1 |  |
| 19 | Le voisin allemand contrôle toutes ses frontières → Rétablir aussi nos contrôles aux frontières | -0.15 | 0 |  | -1 |  |  | 1 |  |
| 19 | Le voisin allemand contrôle toutes ses frontières → Négocier des patrouilles communes franco-allemandes | 0 | 0 |  |  |  | 1 |  |  |
| 19 | Le voisin allemand contrôle toutes ses frontières → Pousser l'Europe à renforcer ses frontières extérieures | 0 | 0 |  |  |  |  | -1 |  |
| 19 | Le voisin allemand contrôle toutes ses frontières → Accepter les contrôles et aider les frontaliers | -0.02 | 0 | 1 |  |  |  |  |  |
| 19 | Le voisin allemand contrôle toutes ses frontières → Ne rien changer et laisser faire Berlin | 0.02 | 0 |  | -1 |  | -1 |  |  |
| 19 | Les vieilles voitures bientôt interdites en ville → Maintenir l'interdiction avec une prime à l'achat | -0.2 | 0 |  |  | -1 |  |  | 1 |
| 19 | Les vieilles voitures bientôt interdites en ville → Supprimer l'interdiction | 0.02 | 0 | 1 |  | 1 |  |  |  |
| 19 | Les vieilles voitures bientôt interdites en ville → Reporter de deux ans et développer les transports en commun | -0.1 | 0 |  |  |  |  |  | 1 |
| 19 | Les vieilles voitures bientôt interdites en ville → Remplacer l'interdiction par un péage urbain | 0.05 | 0 | -1 |  | -1 |  |  |  |
| 20 | La justice arrête une autoroute à moitié construite → Finir l'autoroute après l'appel | -0.05 | 0 |  | 1 | 1 |  |  |  |
| 20 | La justice arrête une autoroute à moitié construite → Abandonner et renaturer le tracé | -0.4 | 0 |  | -1 | -1 |  |  |  |
| 20 | La justice arrête une autoroute à moitié construite → Transformer le tracé en route nationale sans péage | -0.1 | 0 | 1 |  |  |  |  |  |
| 20 | La justice arrête une autoroute à moitié construite → Simplifier les recours contre les grands chantiers | 0.1 | 0 |  | 1 |  | -1 |  |  |
| 20 | La justice arrête une autoroute à moitié construite → Faire payer le péage plus cher pour rembourser le retard | 0.05 | 0 | -1 |  |  |  |  |  |
| 20 | Des fusillades liées au trafic de drogue dans une ville du Sud → Recruter des enquêteurs et des magistrats spécialisés | -0.3 | 0 |  |  |  | 1 |  | 1 |
| 20 | Des fusillades liées au trafic de drogue dans une ville du Sud → Saisir et revendre les biens des trafiquants | 0.15 | 0 |  |  |  | 1 |  |  |
| 20 | Des fusillades liées au trafic de drogue dans une ville du Sud → Miser sur la prévention et les soins aux consommateurs | -0.1 | 0 |  |  |  | 1 |  | 1 |
| 20 | Des fusillades liées au trafic de drogue dans une ville du Sud → Légaliser et taxer le cannabis | 0.5 | 0 |  |  |  |  |  | -1 |
| 20 | La dernière usine d'électroménager du pays ferme → Financer la reprise par les salariés en coopérative | -0.05 | 0 |  | 1 |  |  | 1 |  |
| 20 | La dernière usine d'électroménager du pays ferme → Réserver une part des achats publics au « fabriqué en France » | -0.03 | 0 |  | 1 |  |  |  |  |
| 20 | La dernière usine d'électroménager du pays ferme → Accompagner les salariés vers d'autres emplois | 0.02 | 0 |  | -1 |  |  |  |  |
| 20 | La dernière usine d'électroménager du pays ferme → Baisser les impôts de production des usines | -0.2 | 0 |  | 1 |  |  |  |  |
| 20 | La dernière usine d'électroménager du pays ferme → Laisser faire le marché | 0.05 | 0 |  | -2 |  | -1 |  |  |
