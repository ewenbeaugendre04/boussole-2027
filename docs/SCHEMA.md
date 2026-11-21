# Boussole 2027 — format du jeu « plateau » (contrat entre les agents)

Deux fichiers, assemblés par : `python3 -c "g=open('/home/claude/jeu/game.html').read(); d=open('/home/claude/jeu/game_data.js').read(); open('/home/claude/jeu/plateau.html','w').write(g.replace('/*DATA*/',d))"`

- `game_data.js` (agent game design) : définit UNE constante globale `GAME` (aucun autre code).
- `game.html` (agent direction artistique) : moteur, rendu, interface. Contient `<script>/*DATA*/</script>` avant son propre script. Pendant le développement, il peut utiliser `stub_data.js` (même format, petit).

## Format de GAME
```js
const GAME = {
  version: "0.1",
  axes: { eco:{neg:"État protecteur",pos:"Marché libre"}, soc:{neg:"Ouverture, libertés",pos:"Ordre, autorité"},
          eu:{neg:"Plus d'intégration européenne",pos:"Plus de souveraineté nationale"}, env:{neg:"Transition rapide",pos:"Pouvoir d'achat d'abord"} },
  sectors: [ {id:"energie", label:"Énergie"}, ... ],          // 10 à 14 secteurs
  regions: [ {id:"bretagne", label:"Bretagne", x:18, y:30}, ... ], // positions en % sur le plateau (0-100), pour placer les événements
  indicators: [ {id:"pouvoir_achat", label:"Pouvoir d'achat", start:50}, {id:"emploi",...}, {id:"co2",...}, {id:"cohesion",...}, {id:"souverainete",...} ], // 0-100
  budget: {
    annee: 2026, unite: "Md€",
    recettes: 0, depenses: 0, deficit: 0, dette: 0,        // ordres de grandeur réels, sourcés
    postes: [ {id:"education", label:"Éducation", montant:0}, ... ],
    jours_par_an: 12,          // 1 jour de jeu = 1 mois : à chaque jour, la dette augmente de deficit/12 + effets cumulés/12
    sources: [ {label:"…", url:"https://…"} ],
    note: "Ordres de grandeur, à vérifier."
  },
  levels: { 1:"simple", 2:"simple", 3:"expert" },          // question de vocabulaire au lancement (3 niveaux)
  news: [ {tag:"faux"|"trompeur"|"ingerence"|"vrai", title:"…", text:"…", src:"…"} ], // exemples FICTIFS pour la fenêtre d'actu à l'ouverture
  days: [
    { day:1, title:"Lundi de rentrée", mood:"calme"|"tendu", weather:"soleil"|"pluie"|"neige"|"canicule"|"vent",
      events: [
        { id:"d1_boulangerie", kind:"banal"|"majeur", region:"bretagne", sector:"salaires",
          title:"…", simple:"texte court niveau simple", expert:"texte niveau expert", context:"ce qu'il faut savoir (neutre)",
          choices: [
            { id:"a", label:"…", plus:"ce que ça peut apporter", minus:"ce que ça peut coûter",
              budget: -1.2,                      // Md€ par an (négatif = coûte), peut être 0
              once: 0,                           // coût ponctuel en Md€ (optionnel)
              axes: {eco:-1},                    // -2..+2
              ind: {pouvoir_achat:+3, emploi:-1},// variation des indicateurs
              followup: "texte d'une conséquence qui apparaît un ou deux jours plus tard (optionnel)",
              followup_in: 2 }
          ] }
      ] }
  ],
  programs: [   // propositions présentes dans des programmes politiques, SANS nom de candidat ni de parti
    { id:"sortie_nucleaire", label:"Sortir du nucléaire", sector:"energie", origin:"Proposition présente dans plusieurs programmes",
      budget: -0, once: -0, axes:{env:-2}, ind:{co2:+0},
      benefits:["…"], problems:["…"],             // annoncés quand on applique
      later:[ {in:2, text:"…", ind:{pouvoir_achat:-3}, budget:-0} ] } // problèmes ou effets qui arrivent les jours suivants
  ]
};
```
Règles de neutralité : aucun nom de candidat ou de parti, aucune couleur de parti, chaque choix a un plus et un moins de même longueur, aucun choix n'est présenté comme meilleur, les chiffres réels sont sourcés et marqués comme ordres de grandeur.

---------------------------------------------------------------------
# VERSION 2 (prototype de 4 jours) — ajouts au contrat

## Principe de jeu v2
- Déroulé guidé, comme un jeu narratif : « Jour 1. Le jeu commence. » Puis les événements arrivent UN PAR UN, dans l'ordre du tableau `events`. Pour chaque événement, LA CAMÉRA DU JEU se déplace toute seule et zoome en douceur vers le lieu, une animation se joue sur la carte (objets qui apparaissent, bougent, fument, clignotent), puis la carte de décision s'ouvre. Après la décision, l'animation de conséquence du choix se joue, la caméra recule, et l'événement suivant arrive.
- Le joueur NE déplace PLUS la carte et ne zoome plus à la main (c'était saccadé). Toute la caméra est pilotée par le jeu, de façon fluide (une seule transformation CSS translate/scale sur un calque, 60 images par seconde visées).
- 4 jours de contenu (1 jour = 1 mois), 3 à 5 événements par jour, mélange de décisions importantes et de petites décisions du quotidien.
- Budget, indicateurs, fenêtre d'actualité au lancement, question de vocabulaire, propositions, Mon orientation, sauvegarde locale : on garde tout.

## Nouveaux champs (tous les événements de la v2 doivent les avoir)
```js
event.real = {               // FAIT RÉEL dont l'événement s'inspire (obligatoire en v2)
  date: "2024-01-26",        // date réelle (ou mois)
  place: "A64, Haute-Garonne",
  fact: "Ce qui s'est réellement passé, en une ou deux phrases neutres.",
  figures: "Chiffres réels utiles (coûts, volumes), avec unité.",   // optionnel
  sources: [ {label:"…", url:"https://…"} ]                          // au moins une source fiable
}
event.camera = { region:"occitanie", x:58, y:78, zoom:2.2 }   // cible de la caméra (x,y en % du plateau), zoom 1 à 3
event.fx = [ FX, ... ]        // animation jouée à l'arrivée de l'événement
choice.fx = [ FX, ... ]       // animation jouée après ce choix (conséquence visible sur la carte)
choice.real_note = "Ce qui a été décidé en vrai à l'époque (neutre, optionnel)."
```

## Format d'un FX
```js
{ obj:"tracteur",           // nom d'objet de la BIBLIOTHÈQUE ci-dessous (obligatoire)
  x:58, y:78,               // position en % du plateau
  anim:"move",              // une des animations de la bibliothèque
  to:{x:60, y:70},          // pour move / flow
  count:3,                  // nombre d'exemplaires (optionnel, défaut 1), disposés autour du point
  label:"Texte court",      // pour panneau, bulle, etiquette (optionnel)
  delay:0.4,                // secondes (optionnel)
  stay:true }               // l'objet reste sur la carte les jours suivants (optionnel)
```

## BIBLIOTHÈQUE D'OBJETS (le moteur doit tous les dessiner ; le contenu n'utilise QUE ces noms)
Transports : tracteur, camion, voiture, bus, train, tgv, avion, cargo, ferry, bateau_peche, velo, ambulance, voiture_police
Énergie : eolienne, eolienne_mer, centrale_nucleaire, centrale_gaz, panneaux_solaires, barrage, pylone, borne_recharge, station_service
Bâtiments : maison, immeuble, usine, usine_fermee, chantier_grue, ecole, hopital, cabinet_medical, mairie, commissariat, prison, boulangerie, commerce, supermarche, entrepot, port, aeroport, parlement, batiment_ue, ferme
Personnes : foule, manifestants, barrage_agricole, policiers, soignants, eleves, file_attente, personnage
Nature et climat : champ, troupeau, foret, incendie, inondation, canicule, secheresse, neige, tempete, orage, moustique
Symboles et infos : drapeau_ue, frontiere, douane, panneau (avec label), bulle (avec label), etiquette (avec label), pieces, euro_flux, fleche, satellite, cyberattaque, antenne, colis, conteneurs, cadenas, loupe

## ANIMATIONS
appear (apparaît avec un petit rebond), fade (disparaît), move (se déplace vers `to`), flow (flux continu de points ou de flèches de x,y vers `to`, ex. importations), pulse (pulsation d'alerte), smoke (fumée ou vapeur), spin (rotation, ex. pales), shake (tremble), blink (clignote), rise (monte et disparaît, ex. pièces), grow (pousse/se construit), close (se ferme : rideau, lumière éteinte)

Neutralité inchangée : aucune animation ne doit rendre un choix plus beau ou plus laid qu'un autre (même lumière, même météo du jour, même qualité de dessin).

---------------------------------------------------------------------
# VERSION 2.1 — ajouts demandés par le client (prioritaires)

## Le temps : à la semaine, sans date
- Un « jour » du tableau `days` devient UNE SEMAINE de jeu. À l'écran : « Semaine 1 », « Semaine 2 »… Jamais de date précise ni de mois dans le déroulé du jeu (pas de « 2 juillet », pas de « janvier »). La saison peut être suggérée par la météo et le décor (`day.season`: "hiver"|"printemps"|"ete"|"automne", optionnel).
- Le fait réel (`event.real.date`) reste affiché seulement dans l'encart « Inspiré d'un fait réel », pas dans le déroulé.
- Budget : `budget.periodes_par_an = 52` (remplace jours_par_an pour la v2.1 ; le moteur accepte les deux). À chaque semaine, la dette augmente du déficit / 52 + effets annuels cumulés / 52 ; les `once` s'appliquent tout de suite.
- `day.title` : un titre de semaine (« Semaine agitée à la campagne »), `day.intro` : une phrase d'ouverture.

## Les réformes prennent du temps, et peuvent bloquer à l'Assemblée
```js
program.steps = [ {label:"Présentation en Conseil des ministres", weeks:1},
                  {label:"Débat et vote à l'Assemblée", weeks:1, block:true},   // block:true = un blocage peut survenir à cette étape
                  {label:"Décrets d'application", weeks:1} ]
program.block = {                  // événement de blocage, joué quand on arrive à l'étape block:true
  title:"Blocage à l'Assemblée", text:"Les députés n'arrivent pas à se mettre d'accord…",
  choices:[ {id:"abandon", label:"Abandonner la réforme", outcome:"abandon", plus:"…", minus:"…", ind:{}, axes:{}},
            {id:"493", label:"Passer en force avec le 49.3", outcome:"pass", plus:"…", minus:"…", ind:{cohesion:-4}},
            {id:"compromis", label:"Proposer une version de compromis", outcome:"amend", factor:0.5, plus:"…", minus:"…"},
            {id:"referendum", label:"…", outcome:"pass"|"abandon"|"amend", ... } ] }
```
- outcome "pass" : la réforme s'applique entièrement ; "amend" : effets multipliés par `factor` ; "abandon" : rien ne s'applique (sauf effets propres au choix).
- Pendant les étapes, la réforme est « en cours » (visible dans un petit suivi), ses effets ne s'appliquent qu'à la fin. Les effets `later` partent de la fin de la réforme.
- Toutes les propositions n'ont pas de blocage : environ un tiers.

## Les propositions changent chaque semaine
- `day.offer = ["id_prop1","id_prop2","id_prop3"]` : 2 à 4 propositions disponibles cette semaine-là (les autres ne sont pas proposées). On peut en appliquer au plus une par semaine. De temps en temps une proposition plus forte ou plus radicale.

## Coûts ET bénéfices, à court et à long terme
- Les effets doivent montrer le POURQUOI : `program.why_cost` (pourquoi ça coûte), `program.why_gain` (ce que ça rapporte, et quand).
- Les effets `later` peuvent être positifs pour le budget (recettes fiscales, emplois, baisse des prix) : par exemple un programme nucléaire coûte beaucoup au début puis crée des emplois, fait baisser le prix de l'électricité et rapporte des recettes. Chaque `later` a un `text` qui explique.
- Il faut autant de leviers qui AMÉLIORENT le solde (économies, recettes, croissance, lutte contre la fraude, réformes structurelles) que de leviers qui le dégradent, chacun avec ses inconvénients.
- Échelles cohérentes : un sujet majeur (énergie, retraites, santé) doit avoir des effets d'un ordre de grandeur réaliste et comparable aux autres (en milliards et en points d'indicateurs). Les petits sujets du quotidien ont de petits effets.

---------------------------------------------------------------------
# VERSION 2.2 — ajouts

## Résultat différé des propositions à issue incertaine (référendum, négociation, appel d'offres…)
```js
program.result = {
  in: 1,                                   // semaines après la fin de la réforme
  title: "Résultat du référendum sur l'immigration",
  outcomes: [
    { id:"oui", label:"Le oui l'emporte", weight:0.5, text:"…ce qui change concrètement…",
      plus:"…", minus:"…", budget:-0.0, once:0, ind:{}, axes:{}, later:[ {in:2, text:"…", budget:0, ind:{}} ] },
    { id:"non", label:"Le non l'emporte", weight:0.5, ... }
  ] }
```
Le moteur tire l'issue selon `weight` (tirage sauvegardé dans la partie, jamais retiré au rechargement), l'annonce comme un événement guidé (caméra, animation), affiche ce que ça apporte en plus et en moins, et applique budget, indicateurs et effets `later`. Le coût de la procédure elle-même reste dans `program.once` / `program.budget`.

## Les réformes arrivent en semaine 2
- `days[0].offer = []` : pas de réforme en semaine 1.
- `days[1].unlock = { title:"Les réformes sont ouvertes", text:"…comment ça marche, en 2 phrases…" }` : message d'introduction affiché au début de la semaine 2, avec un repère visuel sur le bouton Propositions.

---------------------------------------------------------------------
# VERSION 2.6 — ajouts
- 8 semaines au total (`days` de 0 à 7). Bilan mensuel après les semaines 4 et 8.
- `choice.label_expert` : libellé du choix pour le niveau 3 (« Je m'y connais » : public de type Sciences Po), avec les termes techniques exacts et l'instrument précis (ex. « Activer la clause de sauvegarde bilatérale de l'accord » au lieu de « Protéger nos éleveurs »). Le moteur l'affiche au niveau 3, sinon `label`.
- `choice.budget_note` (et `program.budget_note`) : une phrase courte qui explique l'effet sur le budget et son sens (ex. « Recettes de la taxe : le déficit baisse » ou « Dépense nouvelle : le déficit augmente »).
- Convention de signe, partout : `budget` > 0 = le solde s'améliore = le déficit BAISSE ; `budget` < 0 = le déficit AUGMENTE. Le moteur doit l'afficher sans ambiguïté.
- Placement des animations : objets marins (cargo, ferry, bateau_peche, eolienne_mer, conteneurs en mer) toujours en mer ; tous les autres objets sur la terre ferme, en France (sauf Bruxelles et les pays voisins pour drapeau_ue, batiment_ue, frontiere, douane, flux).

---------------------------------------------------------------------
# VERSION 2.7 — ajouts
## Deux réponses compatibles (court terme + long terme)
`event.multi = { max:2, pairs:[["a","c"],["b","c"]], hint:"Tu peux combiner une mesure d'urgence et une mesure de fond." }`
Sur certains événements (environ 1 sur 3), le joueur peut cocher deux choix compatibles listés dans `pairs`. Les effets s'additionnent (budget, once, ind, axes, fx, followup). Les autres combinaisons sont refusées avec un message court.

## Rappel des décisions passées (cohérence entre semaines)
`event.recall = [ { event:"id_evenement_passe", choice:"id_choix", text:"La semaine dernière, tu as choisi … : voilà où on en est.", ind:{}, budget:0 } ]`
Quand un événement porte sur un sujet déjà traité, il rappelle le choix fait avant (texte affiché en haut de la carte, éventuellement un petit effet). Plusieurs entrées possibles, une par choix passé possible ; seule celle qui correspond à la décision réelle du joueur s'affiche. `choice.requires` (optionnel) : un choix qui n'apparaît que si un choix passé a été fait (`{event:"…", choice:"…"}`).

## Réformes : jusqu'à 2 par semaine, 5 ou 6 proposées
`day.offer` contient 5 ou 6 propositions ; le joueur peut en appliquer jusqu'à 2 par semaine (`GAME.rules.reforms_per_week = 2`).
