# Consignes pour les sessions de travail sur ce dépôt

- **Lire d'abord `docs/SUIVI.md`** (vision, décisions, préférences d'Ewen, prochaines étapes) et le mettre à jour en fin de session.

- Économiser les tokens : ne jamais lire un fichier en entier. Utiliser `grep -n` puis lire de petites plages. Le contenu (`src/data/game_data.js`, JSON) se lit et se modifie avec de petits scripts `node`.
- Où modifier quoi :
  - contenu, chiffres, sources, propositions : `src/data/game_data.js` (format dans `docs/SCHEMA.md`) ;
  - dessin des objets animés : `src/art/objects.js` ; placement terre/mer : `src/art/placement.js` ; plateau : `src/art/board.js` ;
  - caméra : `src/engine/camera.js` ; déroulé des événements : `src/engine/flow.js` ; cartes et fenêtres : `src/engine/modal.js` ; réformes : `src/engine/reforms.js` ;
  - styles : `src/styles/`.
- Après chaque changement : `node tests/check_data.js && python3 scripts/build.py && python3 tests/smoke.py`.
- Neutralité absolue (voir README). Langue : français.
