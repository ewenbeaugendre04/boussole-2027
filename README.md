# Boussole 2027

Jeu sérieux et neutre pour se situer avant l'élection présidentielle de 2027. La France est une île : chaque semaine, des situations inspirées de faits réels arrivent sur le plateau, le joueur décide, le budget de l'État et les indicateurs bougent. Aucune donnée ne quitte le téléphone (sauvegarde locale uniquement).

## Structure
```
src/
  index.html          page principale (balisage), charge les styles, les données puis le moteur
  styles/             base.css, plateau.css, sheets.css
  data/game_data.js   TOUT le contenu : semaines, événements, choix, budget, propositions (constante GAME)
  art/                bibliothèque graphique : board.js (plateau), objects.js (objets animés),
                      placement.js (règles terre / mer), layers.js (bateaux, trains, nuages)
  engine/             core.js (données, état, sauvegarde), camera.js, flow.js (déroulé guidé),
                      hud.js, modal.js, reforms.js, orientation.js, budget.js, settings.js, launch.js, loop.js
docs/SCHEMA.md        format des données (contrat entre contenu et moteur)
scripts/build.py      assemble src/ en un seul fichier dist/index.html
tests/                check_data.js (contrôle du contenu), smoke.py (chargement sans erreur)
```
Les fichiers JavaScript sont des scripts classiques chargés dans l'ordre de `src/index.html` (portée globale partagée). Garder cet ordre.

## Travailler
- Ouvrir `src/index.html` dans un navigateur pour jouer en local.
- Avant de publier : `node tests/check_data.js && python3 scripts/build.py && python3 tests/smoke.py`.
- Chaque push sur `main` lance les contrôles et met le site en ligne (GitHub Pages).

## Neutralité
Aucun nom de candidat ni de parti dans le contenu, aucune couleur de parti, plus et moins de même poids pour chaque choix, chiffres réels sourcés et signalés comme ordres de grandeur.
