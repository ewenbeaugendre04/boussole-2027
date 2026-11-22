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

## Architecture (pour la future appli)

```
src/
  index.html            coquille : styles, balisage, scripts dans l'ordre
  engine/garde.js       garde-fou d'erreurs (chargé en premier)
  data/                 contenu pur (JSON) : game_data.js, candidats.js — aucun code
  engine/               logique : core (état, budget), camera, flow (déroulé), modal (cartes),
                        reforms, orientation, budget, candidats, guide (tuto + pages légales), loop
  art/                  rendu : board (plateau SVG), layers (cuisson du décor), placement (terre/mer),
                        objects (anciens dessins), sprites (bibliothèque Recraft → carte)
  styles/               base (thèmes), plateau, sheets, da (direction artistique, chargée en dernier)
assets/
  library/              sources Recraft : svg/ (originaux C2PA), svg_final/ (couleurs retouchées), manifest.json, recolor.json
  sprites/ icons/ fonts/  fichiers servis par le jeu (générés par scripts/sprites.py)
scripts/                build.py (dist/), sprites.py, gen_candidats.js
tests/                  check_data.js (contenu), smoke.py (Playwright, 2 tailles d'écran)
```

Principes : contenu séparé du code ; tout est local (aucun appel réseau, sauvegarde dans le stockage du navigateur) ;
chaque modification passe `node tests/check_data.js && python3 scripts/build.py && python3 tests/smoke.py`, rejoués par la CI.
Pour l'App Store / Play Store : emballer `dist/` avec Capacitor (aucun serveur nécessaire).
