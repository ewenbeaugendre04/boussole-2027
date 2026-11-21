'use strict';
/* Candidats 2027 : données indicatives, générées par un script, neutres. Clés de matrice absentes = non documenté (null). */
const CANDIDATS = {
 "maj": "2026-11-21",
 "avertissement": "Indicatif : ne remplace pas la lecture des programmes. Positions estimées à partir des fiches sources, sur les axes du jeu.",
 "sources": {
  "dossier": "Dossier présidentielle 2027 au 20/11/2026 (fiches par candidat, compilées d'après Poligraph, Fondation IFRAP, LCP, Public Sénat, vie-publique.fr)",
  "ifop": "Baromètre Ifop-Fiducial pour Le Figaro, LCI et Sud Radio, publié le 18/11/2026 (fourchettes selon les scénarios ; relayé par La Libre Belgique)"
 },
 "sondage_source": "ifop",
 "tri": "Candidats mesurés : par niveau dans le baromètre (milieu de fourchette). Puis non mesurés, groupés par proximité d'idées.",
 "familles": {
  "rupture_gauche": "Rupture et gauche radicale",
  "gauche_sociale": "Gauche sociale",
  "ecologie": "Écologie",
  "social_democratie": "Social-démocratie",
  "centre": "Centre et libéraux",
  "droite": "Droite",
  "nationaux": "Nationaux et souverainistes",
  "transversal": "Hors clivage"
 },
 "secteur_axe": {
  "energie": "env",
  "europe": "eu",
  "salaires": "eco",
  "logement": "eco",
  "sante": "eco",
  "securite": "soc",
  "immigration": "soc",
  "ecole": "soc",
  "agriculture": "env",
  "defense": "eu",
  "numerique": "eco",
  "retraites": "eco",
  "fiscalite": "eco",
  "transports": "env"
 },
 "origine": {
  "candidat": "programme ou déclarations du candidat",
  "parti": "programme du parti ou du mouvement"
 },
 "liste": [
  {
   "id": "le_pen",
   "nom": "Marine Le Pen",
   "parti": "Rassemblement national (RN)",
   "statut": "declare",
   "famille": "nationaux",
   "sondage": [
    32,
    36
   ],
   "programme_origine": "parti",
   "idees": [
    {
     "texte": "Baisse de 30 % du prix de l'électricité par la sortie des règles européennes de fixation des prix",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "« Alliance européenne des nations » inscrite dans la Constitution par référendum",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "TVA à 0 % sur un panier de produits de première nécessité",
     "source": "dossier",
     "secteur_dossier": "Salaires et pouvoir d'achat"
    },
    {
     "texte": "« Frein d'urgence » de 20 Md€ d'économies dès mai 2027 (140 à 150 Md€ au total)",
     "source": "dossier",
     "secteur_dossier": "Économie et finances"
    },
    {
     "texte": "Référendum instaurant la « préférence nationale »",
     "source": "dossier",
     "secteur_dossier": "Immigration"
    },
    {
     "texte": "80 % de produits agricoles français dans les cantines publiques",
     "source": "dossier",
     "secteur_dossier": "Agriculture"
    }
   ],
   "axes": {
    "eco": {
     "v": 0,
     "source": "dossier",
     "note": "Mélange : TVA 0 % sur produits de base et 140-150 Md€ d'économies"
    },
    "soc": {
     "v": 2,
     "source": "dossier",
     "note": "Référendum sur la préférence nationale"
    },
    "eu": {
     "v": 2,
     "source": "dossier",
     "note": "« Alliance européenne des nations », primauté nationale"
    },
    "env": {
     "v": 2,
     "source": "dossier",
     "note": "Priorité à la baisse du prix de l'électricité"
    }
   },
   "secteurs": {
    "energie": {
     "v": 2,
     "source": "dossier",
     "note": "Baisse de 30 % du prix de l'électricité"
    },
    "europe": {
     "v": 2,
     "source": "dossier",
     "note": "Alliance des nations par référendum"
    },
    "salaires": {
     "v": -1,
     "source": "dossier",
     "note": "TVA 0 % sur produits de base"
    },
    "logement": null,
    "sante": null,
    "securite": null,
    "immigration": {
     "v": 2,
     "source": "dossier",
     "note": "Préférence nationale"
    },
    "ecole": null,
    "agriculture": {
     "v": 1,
     "source": "dossier",
     "note": "Patriotisme alimentaire, 80 % français"
    },
    "defense": null,
    "numerique": null,
    "retraites": null,
    "fiscalite": {
     "v": 0,
     "source": "dossier",
     "note": "Économies et baisse de TVA ciblée"
    },
    "transports": null
   }
  },
  {
   "id": "melenchon",
   "nom": "Jean-Luc Mélenchon",
   "parti": "La France insoumise (LFI)",
   "statut": "declare",
   "famille": "rupture_gauche",
   "sondage": [
    17,
    19.5
   ],
   "programme_origine": "parti",
   "idees": [
    {
     "texte": "Sortie planifiée du nucléaire et 100 % d'énergies renouvelables",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Suspension de la règle européenne des 3 % de déficit",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "SMIC à 1 700 € nets et indexation des salaires sur l'inflation",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "« Taxe Zucman » (2 % sur les très grands patrimoines) et ISF renforcé",
     "source": "dossier",
     "secteur_dossier": "Fiscalité"
    },
    {
     "texte": "« 100 % Sécu » : remboursement intégral des soins prescrits",
     "source": "dossier",
     "secteur_dossier": "Santé"
    },
    {
     "texte": "Prix planchers agricoles et encadrement des marges",
     "source": "dossier",
     "secteur_dossier": "Agriculture"
    }
   ],
   "axes": {
    "eco": {
     "v": -2,
     "source": "dossier",
     "note": "SMIC 1 700 €, 106 Md€ de recettes nouvelles"
    },
    "soc": {
     "v": -2,
     "source": "dossier",
     "note": "Droit du sol intégral, régularisations"
    },
    "eu": {
     "v": 1,
     "source": "dossier",
     "note": "Désobéissance aux règles budgétaires européennes, sortie de l'OTAN"
    },
    "env": {
     "v": -2,
     "source": "dossier",
     "note": "Sortie du nucléaire et des pesticides, planification écologique"
    }
   },
   "secteurs": {
    "energie": {
     "v": -2,
     "source": "dossier",
     "note": "Sortie planifiée du nucléaire, 100 % renouvelables"
    },
    "europe": {
     "v": 1,
     "source": "dossier",
     "note": "« Bloc de bifurcation », fin des 3 %"
    },
    "salaires": {
     "v": -2,
     "source": "dossier",
     "note": "SMIC 1 700 € nets, indexation"
    },
    "logement": {
     "v": -2,
     "source": "dossier",
     "note": "Baisse des loyers, 200 000 logements très sociaux/an"
    },
    "sante": {
     "v": -2,
     "source": "dossier",
     "note": "100 % Sécu"
    },
    "securite": null,
    "immigration": {
     "v": -2,
     "source": "dossier",
     "note": "Droit du sol intégral, régularisations"
    },
    "ecole": {
     "v": -1,
     "source": "dossier",
     "note": "Gratuité réelle de l'école publique"
    },
    "agriculture": {
     "v": -2,
     "source": "dossier",
     "note": "Sortie des pesticides, 100 % bio et local en cantine"
    },
    "defense": {
     "v": 2,
     "source": "dossier",
     "note": "Sortie de l'OTAN, non-alignement"
    },
    "numerique": null,
    "retraites": null,
    "fiscalite": {
     "v": -2,
     "source": "dossier",
     "note": "Taxe Zucman, ISF renforcé"
    },
    "transports": null
   }
  },
  {
   "id": "philippe",
   "nom": "Édouard Philippe",
   "parti": "Horizons",
   "statut": "declare",
   "famille": "centre",
   "sondage": [
    10,
    15
   ],
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Relance massive du nucléaire avec les renouvelables",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Moratoire sur toute nouvelle norme européenne (« zéro surtransposition »)",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Budget des armées à 3 % du PIB",
     "source": "dossier",
     "secteur_dossier": "Défense"
    },
    {
     "texte": "Âge légal de retraite à 65 ans",
     "source": "dossier",
     "secteur_dossier": "Retraites"
    },
    {
     "texte": "Déficit sous 2,5 % du PIB en 2030, zéro nouvel impôt, règle d'or par référendum",
     "source": "dossier",
     "secteur_dossier": "Finances"
    },
    {
     "texte": "Division par deux de l'immigration légale",
     "source": "dossier",
     "secteur_dossier": "Immigration"
    }
   ],
   "axes": {
    "eco": {
     "v": 2,
     "source": "dossier",
     "note": "Zéro nouvel impôt, règle d'or, retraite à 65 ans"
    },
    "soc": {
     "v": 1,
     "source": "dossier",
     "note": "Immigration légale divisée par deux"
    },
    "eu": {
     "v": 0,
     "source": "dossier",
     "note": "Attaché au marché unique, moratoire sur les normes"
    },
    "env": {
     "v": 1,
     "source": "dossier",
     "note": "Nucléaire et compétitivité agricole, refus des surtranspositions"
    }
   },
   "secteurs": {
    "energie": {
     "v": 1,
     "source": "dossier",
     "note": "Relance du nucléaire"
    },
    "europe": {
     "v": 0,
     "source": "dossier",
     "note": "Marché unique + moratoire normatif"
    },
    "salaires": null,
    "logement": {
     "v": 1,
     "source": "dossier",
     "note": "Suppression des frais de notaire pour le premier achat des moins de 35 ans"
    },
    "sante": {
     "v": 1,
     "source": "dossier",
     "note": "Stabilisation des dépenses, 3 jours de carence"
    },
    "securite": null,
    "immigration": {
     "v": 2,
     "source": "dossier",
     "note": "Immigration légale divisée par deux, moratoire regroupement familial"
    },
    "ecole": {
     "v": 1,
     "source": "dossier",
     "note": "Écoles publiques autonomes, +20 % pour les professeurs"
    },
    "agriculture": {
     "v": 1,
     "source": "dossier",
     "note": "Compétitivité, stockage de l'eau"
    },
    "defense": {
     "v": 0,
     "source": "dossier",
     "note": "Armées à 3 % du PIB"
    },
    "numerique": null,
    "retraites": {
     "v": 2,
     "source": "dossier",
     "note": "Âge légal à 65 ans"
    },
    "fiscalite": {
     "v": 2,
     "source": "dossier",
     "note": "Déficit < 2,5 % en 2030, zéro nouvel impôt"
    },
    "transports": null
   }
  },
  {
   "id": "lisnard",
   "nom": "David Lisnard",
   "parti": "Nouvelle Énergie (associé à LR)",
   "statut": "declare",
   "famille": "droite",
   "sondage": [
    8,
    12
   ],
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Construction massive de nouveaux réacteurs nucléaires",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Subsidiarité stricte : l'UE limitée à la défense, aux frontières et au commerce",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "120 Md€ rendus aux actifs en salaire net par la baisse des cotisations",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Au moins 200 Md€ d'économies d'ici 2032",
     "source": "dossier",
     "secteur_dossier": "Finances"
    },
    {
     "texte": "Quotas migratoires votés, fin du droit du sol automatique",
     "source": "dossier",
     "secteur_dossier": "Immigration"
    },
    {
     "texte": "Suppression des normes qui bloquent la construction, fin de la SRU coercitive",
     "source": "dossier",
     "secteur_dossier": "Logement"
    }
   ],
   "axes": {
    "eco": {
     "v": 2,
     "source": "dossier",
     "note": "200 Md€ d'économies, baisse des cotisations"
    },
    "soc": {
     "v": 2,
     "source": "dossier",
     "note": "Fermeté migratoire, tolérance zéro"
    },
    "eu": {
     "v": 1,
     "source": "dossier",
     "note": "Subsidiarité stricte"
    },
    "env": {
     "v": 1,
     "source": "dossier",
     "note": "Rejet de la « sobriété subie »"
    }
   },
   "secteurs": {
    "energie": {
     "v": 1,
     "source": "dossier",
     "note": "Nouveaux réacteurs, rejet de la décroissance"
    },
    "europe": {
     "v": 1,
     "source": "dossier",
     "note": "Subsidiarité stricte"
    },
    "salaires": {
     "v": 2,
     "source": "dossier",
     "note": "Baisse des cotisations"
    },
    "logement": {
     "v": 2,
     "source": "dossier",
     "note": "Suppression de normes, SRU assouplie"
    },
    "sante": {
     "v": 1,
     "source": "dossier",
     "note": "Liberté d'installation, suppression des ARS actuelles"
    },
    "securite": {
     "v": 2,
     "source": "dossier",
     "note": "Tolérance zéro"
    },
    "immigration": {
     "v": 2,
     "source": "dossier",
     "note": "Quotas, OQTF exécutées"
    },
    "ecole": {
     "v": 1,
     "source": "dossier",
     "note": "Autonomie des établissements, fondamentaux"
    },
    "agriculture": {
     "v": 1,
     "source": "dossier",
     "note": "10 000 installations/an, guichet unique"
    },
    "defense": {
     "v": -1,
     "source": "dossier",
     "note": "Soutien à l'Ukraine et à Taïwan"
    },
    "numerique": null,
    "retraites": null,
    "fiscalite": {
     "v": 2,
     "source": "dossier",
     "note": "200 Md€ d'économies"
    },
    "transports": null
   }
  },
  {
   "id": "glucksmann",
   "nom": "Raphaël Glucksmann",
   "parti": "Place publique (soutenu par le PS)",
   "statut": "declare",
   "famille": "social_democratie",
   "sondage": [
    8,
    11.5
   ],
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "« Révolution écologique » de 200 Md€ : nucléaire et renouvelables",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "« Buy European Act » : préférence européenne dans les marchés publics",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Soutien militaire massif à l'Ukraine",
     "source": "dossier",
     "secteur_dossier": "Défense"
    },
    {
     "texte": "SMIC à 1 700 € nets et partage de la valeur",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Taxation accrue des très hauts patrimoines et des « méga-héritages »",
     "source": "dossier",
     "secteur_dossier": "Fiscalité"
    },
    {
     "texte": "Petite voiture électrique abordable avec leasing social",
     "source": "dossier",
     "secteur_dossier": "Transports"
    }
   ],
   "axes": {
    "eco": {
     "v": -1,
     "source": "dossier",
     "note": "SMIC 1 700 €, taxation des hauts patrimoines"
    },
    "soc": {
     "v": -1,
     "source": "dossier",
     "note": "Protection de l'asile, voies légales de travail"
    },
    "eu": {
     "v": -2,
     "source": "dossier",
     "note": "Europe puissance, fédéralisme stratégique"
    },
    "env": {
     "v": -1,
     "source": "dossier",
     "note": "Plan écologique de 200 Md€"
    }
   },
   "secteurs": {
    "energie": {
     "v": -1,
     "source": "dossier",
     "note": "200 Md€ de transition, nucléaire maintenu"
    },
    "europe": {
     "v": -2,
     "source": "dossier",
     "note": "Buy European Act, Europe puissance"
    },
    "salaires": {
     "v": -1,
     "source": "dossier",
     "note": "SMIC 1 700 €"
    },
    "logement": null,
    "sante": {
     "v": -1,
     "source": "dossier",
     "note": "Régulation de l'installation des médecins"
    },
    "securite": null,
    "immigration": {
     "v": -1,
     "source": "dossier",
     "note": "Asile protégé, immigration de travail encadrée"
    },
    "ecole": {
     "v": -1,
     "source": "dossier",
     "note": "Investissement massif dans l'école publique"
    },
    "agriculture": {
     "v": 0,
     "source": "dossier",
     "note": "Revenu digne, blocage du Mercosur"
    },
    "defense": {
     "v": -2,
     "source": "dossier",
     "note": "Soutien massif à l'Ukraine, défense européenne"
    },
    "numerique": null,
    "retraites": null,
    "fiscalite": {
     "v": -1,
     "source": "dossier",
     "note": "Méga-héritages, très hauts patrimoines"
    },
    "transports": {
     "v": -1,
     "source": "dossier",
     "note": "Leasing social électrique"
    }
   }
  },
  {
   "id": "attal",
   "nom": "Gabriel Attal",
   "parti": "Renaissance",
   "statut": "declare",
   "famille": "centre",
   "sondage": [
    4,
    9
   ],
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Plan « Messmer II » : nouveaux réacteurs et électrification",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Intégration européenne par cercles de pays volontaires (IA, défense, énergie)",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "« Droit au brut » : hausse du net sans coût pour l'employeur",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Zéro hausse d'impôts sur le quinquennat",
     "source": "dossier",
     "secteur_dossier": "Finances"
    },
    {
     "texte": "Immigration à points avec quotas votés tous les deux ans",
     "source": "dossier",
     "secteur_dossier": "Immigration"
    },
    {
     "texte": "Enseignants revalorisés de 200 à 500 € nets par mois",
     "source": "dossier",
     "secteur_dossier": "École"
    }
   ],
   "axes": {
    "eco": {
     "v": 1,
     "source": "dossier",
     "note": "Zéro hausse d'impôts, « droit au brut »"
    },
    "soc": {
     "v": 1,
     "source": "dossier",
     "note": "Immigration à points, quotas"
    },
    "eu": {
     "v": -1,
     "source": "dossier",
     "note": "Cercles de pays volontaires"
    },
    "env": {
     "v": 0,
     "source": "dossier",
     "note": "Nucléaire et électrification"
    }
   },
   "secteurs": {
    "energie": {
     "v": 1,
     "source": "dossier",
     "note": "Messmer II"
    },
    "europe": {
     "v": -1,
     "source": "dossier",
     "note": "Intégration par cercles"
    },
    "salaires": {
     "v": 1,
     "source": "dossier",
     "note": "Droit au brut"
    },
    "logement": null,
    "sante": null,
    "securite": null,
    "immigration": {
     "v": 1,
     "source": "dossier",
     "note": "Système à points, quotas"
    },
    "ecole": {
     "v": 0,
     "source": "dossier",
     "note": "Revalorisation, remplacements garantis"
    },
    "agriculture": {
     "v": 0,
     "source": "dossier",
     "note": "Refus du Mercosur, PAC renforcée"
    },
    "defense": {
     "v": -1,
     "source": "dossier",
     "note": "Nouveau Livre blanc, montée en puissance"
    },
    "numerique": {
     "v": 1,
     "source": "dossier",
     "note": "200 Md€ public-privé pour l'IA"
    },
    "retraites": null,
    "fiscalite": {
     "v": 1,
     "source": "dossier",
     "note": "Zéro hausse d'impôts"
    },
    "transports": null
   }
  },
  {
   "id": "retailleau",
   "nom": "Bruno Retailleau",
   "parti": "Les Républicains (LR)",
   "statut": "declare",
   "famille": "droite",
   "sondage": [
    4,
    7
   ],
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Prolongation des réacteurs nucléaires vers 80 ans",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "« Europe des nations » : primauté de la Constitution française",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Hausse du salaire net par la baisse des cotisations",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "197 Md€ d'économies sur le quinquennat",
     "source": "dossier",
     "secteur_dossier": "Finances"
    },
    {
     "texte": "Référendum sur l'immigration, suppression du droit du sol",
     "source": "dossier",
     "secteur_dossier": "Immigration"
    },
    {
     "texte": "Recentrage sur les savoirs fondamentaux, notes chiffrées, redoublement",
     "source": "dossier",
     "secteur_dossier": "École"
    }
   ],
   "axes": {
    "eco": {
     "v": 2,
     "source": "dossier",
     "note": "197 Md€ d'économies, baisse des cotisations"
    },
    "soc": {
     "v": 2,
     "source": "dossier",
     "note": "Référendum immigration, fin du droit du sol"
    },
    "eu": {
     "v": 1,
     "source": "dossier",
     "note": "Europe des nations"
    },
    "env": {
     "v": 1,
     "source": "dossier",
     "note": "Pas d'interdiction de phytosanitaires sans alternative"
    }
   },
   "secteurs": {
    "energie": {
     "v": 1,
     "source": "dossier",
     "note": "Réacteurs prolongés, nouveaux réacteurs"
    },
    "europe": {
     "v": 1,
     "source": "dossier",
     "note": "Primauté constitutionnelle"
    },
    "salaires": {
     "v": 2,
     "source": "dossier",
     "note": "Baisse des cotisations"
    },
    "logement": {
     "v": 1,
     "source": "dossier",
     "note": "Accession à la propriété, PTZ élargi"
    },
    "sante": {
     "v": 1,
     "source": "dossier",
     "note": "Liberté d'installation, incitations fiscales"
    },
    "securite": null,
    "immigration": {
     "v": 2,
     "source": "dossier",
     "note": "Référendum, fin du droit du sol"
    },
    "ecole": {
     "v": 2,
     "source": "dossier",
     "note": "Fondamentaux, notes, redoublement"
    },
    "agriculture": {
     "v": 1,
     "source": "dossier",
     "note": "Pas d'interdiction sans alternative"
    },
    "defense": {
     "v": 0,
     "source": "dossier",
     "note": "OTAN maintenue et européanisée"
    },
    "numerique": null,
    "retraites": null,
    "fiscalite": {
     "v": 2,
     "source": "dossier",
     "note": "197 Md€ d'économies"
    },
    "transports": null
   }
  },
  {
   "id": "riner",
   "nom": "Teddy Riner",
   "parti": "La France qu'on veut",
   "statut": "declare",
   "famille": "transversal",
   "sondage": [
    4,
    4
   ],
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Accompagnement vers l'emploi et l'insertion des jeunes",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Soutien au pouvoir d'achat des familles",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Cohésion nationale, prévention et respect des règles républicaines dès le plus jeune âge",
     "source": "dossier",
     "secteur_dossier": "Sécurité"
    }
   ],
   "axes": {
    "eco": null,
    "soc": null,
    "eu": null,
    "env": null
   },
   "secteurs": {
    "energie": null,
    "europe": null,
    "salaires": null,
    "logement": null,
    "sante": null,
    "securite": null,
    "immigration": null,
    "ecole": null,
    "agriculture": null,
    "defense": null,
    "numerique": null,
    "retraites": null,
    "fiscalite": null,
    "transports": null
   }
  },
  {
   "id": "zemmour",
   "nom": "Éric Zemmour",
   "parti": "Reconquête !",
   "statut": "declare",
   "famille": "nationaux",
   "sondage": [
    3,
    3.5
   ],
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Priorité exclusive au nucléaire, fin des subventions aux renouvelables",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Primauté absolue du droit français sur le droit européen",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Pas de hausse du SMIC par décret, baisse de la CSG sur les salaires < 2 000 €",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "280 Md€ d'économies pour 30 Md€ de baisses d'impôts",
     "source": "dossier",
     "secteur_dossier": "Finances"
    },
    {
     "texte": "Objectif « immigration zéro »",
     "source": "dossier",
     "secteur_dossier": "Immigration"
    },
    {
     "texte": "Préférence nationale pour les logements sociaux, DPE assoupli",
     "source": "dossier",
     "secteur_dossier": "Logement"
    }
   ],
   "axes": {
    "eco": {
     "v": 2,
     "source": "dossier",
     "note": "280 Md€ d'économies, baisse d'impôts"
    },
    "soc": {
     "v": 2,
     "source": "dossier",
     "note": "Immigration zéro"
    },
    "eu": {
     "v": 2,
     "source": "dossier",
     "note": "Primauté absolue du droit français"
    },
    "env": {
     "v": 2,
     "source": "dossier",
     "note": "Fin des subventions aux renouvelables"
    }
   },
   "secteurs": {
    "energie": {
     "v": 2,
     "source": "dossier",
     "note": "Nucléaire seul, fin des subventions aux renouvelables"
    },
    "europe": {
     "v": 2,
     "source": "dossier",
     "note": "Primauté du droit français"
    },
    "salaires": {
     "v": 1,
     "source": "dossier",
     "note": "Baisse de CSG plutôt que SMIC"
    },
    "logement": {
     "v": 1,
     "source": "dossier",
     "note": "DPE assoupli"
    },
    "sante": null,
    "securite": null,
    "immigration": {
     "v": 2,
     "source": "dossier",
     "note": "Immigration zéro"
    },
    "ecole": null,
    "agriculture": {
     "v": 1,
     "source": "dossier",
     "note": "Protectionnisme, moins de normes"
    },
    "defense": null,
    "numerique": null,
    "retraites": null,
    "fiscalite": {
     "v": 2,
     "source": "dossier",
     "note": "280 Md€ d'économies"
    },
    "transports": null
   }
  },
  {
   "id": "tondelier",
   "nom": "Marine Tondelier",
   "parti": "Les Écologistes",
   "statut": "pressenti",
   "famille": "ecologie",
   "sondage": [
    2,
    3
   ],
   "programme_origine": "parti",
   "idees": [
    {
     "texte": "Émissions de CO2 réduites de 50 % d'ici 2030 (base 1990)",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Approfondissement de l'intégration européenne",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Défense européenne autonome",
     "source": "dossier",
     "secteur_dossier": "Défense"
    },
    {
     "texte": "Superprofits taxés et ISF climatique",
     "source": "dossier",
     "secteur_dossier": "Fiscalité"
    },
    {
     "texte": "Régulation de l'installation des médecins dans les zones surdotées",
     "source": "dossier",
     "secteur_dossier": "Santé"
    },
    {
     "texte": "Encadrement généralisé des loyers",
     "source": "dossier",
     "secteur_dossier": "Logement"
    }
   ],
   "axes": {
    "eco": {
     "v": -1,
     "source": "dossier",
     "note": "ISF climatique, taxation des superprofits"
    },
    "soc": {
     "v": -2,
     "source": "dossier",
     "note": "Accueil des demandeurs d'asile, régularisations"
    },
    "eu": {
     "v": -2,
     "source": "dossier",
     "note": "Intégration européenne"
    },
    "env": {
     "v": -2,
     "source": "dossier",
     "note": "-50 % de CO2 d'ici 2030"
    }
   },
   "secteurs": {
    "energie": {
     "v": -2,
     "source": "dossier",
     "note": "-50 % de CO2 d'ici 2030"
    },
    "europe": {
     "v": -2,
     "source": "dossier",
     "note": "Intégration approfondie"
    },
    "salaires": {
     "v": -1,
     "source": "dossier",
     "note": "Revalorisation du SMIC"
    },
    "logement": {
     "v": -2,
     "source": "dossier",
     "note": "Encadrement généralisé des loyers"
    },
    "sante": {
     "v": -1,
     "source": "dossier",
     "note": "Régulation de l'installation"
    },
    "securite": null,
    "immigration": {
     "v": -2,
     "source": "dossier",
     "note": "Droit au travail dès la demande d'asile"
    },
    "ecole": {
     "v": -1,
     "source": "dossier",
     "note": "Plus de budget, moins d'élèves par classe"
    },
    "agriculture": {
     "v": -2,
     "source": "dossier",
     "note": "PAC conditionnée à la transition"
    },
    "defense": {
     "v": -1,
     "source": "dossier",
     "note": "Défense européenne autonome"
    },
    "numerique": null,
    "retraites": null,
    "fiscalite": {
     "v": -1,
     "source": "dossier",
     "note": "ISF climatique"
    },
    "transports": null
   }
  },
  {
   "id": "roussel",
   "nom": "Fabien Roussel",
   "parti": "Parti communiste français (PCF)",
   "statut": "declare",
   "famille": "rupture_gauche",
   "sondage": [
    1.5,
    2.5
   ],
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Socle nucléaire public fort avec de nouveaux réacteurs",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Remise en cause des traités européens libéraux",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "SMIC à 1 700 € nets, hausse des salaires et pensions",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "ISF renforcé et taxation des superprofits",
     "source": "dossier",
     "secteur_dossier": "Fiscalité"
    },
    {
     "texte": "100 000 postes à l'hôpital et en EHPAD, fin de la T2A",
     "source": "dossier",
     "secteur_dossier": "Santé"
    },
    {
     "texte": "200 000 logements sociaux par an, encadrement des loyers",
     "source": "dossier",
     "secteur_dossier": "Logement"
    }
   ],
   "axes": {
    "eco": {
     "v": -2,
     "source": "dossier",
     "note": "SMIC 1 700 €, ISF renforcé"
    },
    "soc": {
     "v": -1,
     "source": "dossier",
     "note": "Régularisation des travailleurs sans papiers"
    },
    "eu": {
     "v": 1,
     "source": "dossier",
     "note": "Remise en cause des traités, sortie de l'OTAN"
    },
    "env": {
     "v": 0,
     "source": "dossier",
     "note": "Nucléaire public, baisse de TVA sur produits essentiels"
    }
   },
   "secteurs": {
    "energie": {
     "v": 0,
     "source": "dossier",
     "note": "Nucléaire public + renouvelables"
    },
    "europe": {
     "v": 1,
     "source": "dossier",
     "note": "Traités remis en cause"
    },
    "salaires": {
     "v": -2,
     "source": "dossier",
     "note": "SMIC 1 700 €"
    },
    "logement": {
     "v": -2,
     "source": "dossier",
     "note": "200 000 logements sociaux/an"
    },
    "sante": {
     "v": -2,
     "source": "dossier",
     "note": "100 000 postes, 100 % remboursé"
    },
    "securite": null,
    "immigration": {
     "v": -1,
     "source": "dossier",
     "note": "Régularisations"
    },
    "ecole": {
     "v": -1,
     "source": "dossier",
     "note": "Recrutement massif, fin de Parcoursup"
    },
    "agriculture": {
     "v": -1,
     "source": "dossier",
     "note": "Prix garantis, marges encadrées"
    },
    "defense": {
     "v": 1,
     "source": "dossier",
     "note": "Sortie de l'OTAN"
    },
    "numerique": null,
    "retraites": null,
    "fiscalite": {
     "v": -2,
     "source": "dossier",
     "note": "ISF renforcé"
    },
    "transports": {
     "v": -1,
     "source": "dossier",
     "note": "Relance du fret ferroviaire"
    }
   }
  },
  {
   "id": "dupont_aignan",
   "nom": "Nicolas Dupont-Aignan",
   "parti": "Debout la France (DLF)",
   "statut": "declare",
   "famille": "nationaux",
   "sondage": [
    1.5,
    2
   ],
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Sortie du marché européen de l'électricité, relance du nucléaire",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "« Communauté des nations européennes » à la carte",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "+10 % de salaire net jusqu'à 2 500 € par la baisse des cotisations",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Moratoire sur l'immigration légale, fin du droit du sol et de l'AME",
     "source": "dossier",
     "secteur_dossier": "Immigration"
    },
    {
     "texte": "Sortie de la PAC, prix planchers garantis",
     "source": "dossier",
     "secteur_dossier": "Agriculture"
    },
    {
     "texte": "Renationalisation des autoroutes, suppression des ZFE",
     "source": "dossier",
     "secteur_dossier": "Transports"
    }
   ],
   "axes": {
    "eco": {
     "v": 0,
     "source": "dossier",
     "note": "Baisse des cotisations et protectionnisme"
    },
    "soc": {
     "v": 2,
     "source": "dossier",
     "note": "Moratoire sur l'immigration"
    },
    "eu": {
     "v": 2,
     "source": "dossier",
     "note": "Communauté des nations à la carte"
    },
    "env": {
     "v": 2,
     "source": "dossier",
     "note": "Factures divisées par deux, fin des ZFE"
    }
   },
   "secteurs": {
    "energie": {
     "v": 2,
     "source": "dossier",
     "note": "Factures divisées par deux"
    },
    "europe": {
     "v": 2,
     "source": "dossier",
     "note": "Nations à la carte"
    },
    "salaires": {
     "v": 1,
     "source": "dossier",
     "note": "Baisse des cotisations"
    },
    "logement": null,
    "sante": null,
    "securite": null,
    "immigration": {
     "v": 2,
     "source": "dossier",
     "note": "Moratoire, fin du droit du sol"
    },
    "ecole": null,
    "agriculture": {
     "v": 0,
     "source": "dossier",
     "note": "Sortie de la PAC, prix planchers"
    },
    "defense": null,
    "numerique": null,
    "retraites": {
     "v": -1,
     "source": "dossier",
     "note": "Abrogation de la réforme des retraites"
    },
    "fiscalite": null,
    "transports": {
     "v": 2,
     "source": "dossier",
     "note": "Suppression des ZFE"
    }
   }
  },
  {
   "id": "arthaud",
   "nom": "Nathalie Arthaud",
   "parti": "Lutte ouvrière (LO)",
   "statut": "declare",
   "famille": "rupture_gauche",
   "sondage": null,
   "programme_origine": "parti",
   "idees": [
    {
     "texte": "Expropriation des grands groupes énergétiques",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Aucun revenu sous 2 000 € nets, indexé sur les prix",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Opposition aux budgets militaires et à l'OTAN",
     "source": "dossier",
     "secteur_dossier": "Défense"
    },
    {
     "texte": "Régularisation de tous les travailleurs sans papiers",
     "source": "dossier",
     "secteur_dossier": "Immigration"
    },
    {
     "texte": "Réquisition des logements vides",
     "source": "dossier",
     "secteur_dossier": "Logement"
    }
   ],
   "axes": {
    "eco": {
     "v": -2,
     "source": "dossier",
     "note": "Expropriations, contrôle ouvrier"
    },
    "soc": {
     "v": -2,
     "source": "dossier",
     "note": "Liberté de circulation"
    },
    "eu": {
     "v": 0,
     "source": "dossier",
     "note": "Rejet de l'UE capitaliste au nom de l'internationalisme"
    },
    "env": null
   },
   "secteurs": {
    "energie": null,
    "europe": {
     "v": 0,
     "source": "dossier",
     "note": "Ni UE actuelle ni repli national"
    },
    "salaires": {
     "v": -2,
     "source": "dossier",
     "note": "2 000 € nets minimum"
    },
    "logement": {
     "v": -2,
     "source": "dossier",
     "note": "Réquisitions"
    },
    "sante": {
     "v": -2,
     "source": "dossier",
     "note": "Service public de santé gratuit"
    },
    "immigration": {
     "v": -2,
     "source": "dossier",
     "note": "Régularisation de tous"
    },
    "securite": null,
    "ecole": null,
    "agriculture": null,
    "defense": null,
    "numerique": null,
    "retraites": null,
    "fiscalite": null,
    "transports": null
   }
  },
  {
   "id": "kazib",
   "nom": "Anasse Kazib",
   "parti": "Révolution permanente",
   "statut": "declare",
   "famille": "rupture_gauche",
   "sondage": null,
   "programme_origine": "parti",
   "idees": [
    {
     "texte": "Expropriation des multinationales polluantes",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "SMIC à 2 000 € nets, retraite à 60 ans",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Annulation de la dette détenue par les marchés",
     "source": "dossier",
     "secteur_dossier": "Finances"
    },
    {
     "texte": "Régularisation de tous les sans-papiers",
     "source": "dossier",
     "secteur_dossier": "Immigration"
    },
    {
     "texte": "Gratuité des transports en commun",
     "source": "dossier",
     "secteur_dossier": "Transports"
    }
   ],
   "axes": {
    "eco": {
     "v": -2,
     "source": "dossier",
     "note": "Nationalisations, annulation de dette"
    },
    "soc": {
     "v": -2,
     "source": "dossier",
     "note": "Désarmement de la police"
    },
    "eu": {
     "v": 1,
     "source": "dossier",
     "note": "Rupture avec les traités"
    },
    "env": {
     "v": -1,
     "source": "dossier",
     "note": "Planification écologique"
    }
   },
   "secteurs": {
    "energie": {
     "v": -1,
     "source": "dossier",
     "note": "Planification écologique"
    },
    "salaires": {
     "v": -2,
     "source": "dossier",
     "note": "SMIC 2 000 €"
    },
    "retraites": {
     "v": -2,
     "source": "dossier",
     "note": "Retraite à 60 ans"
    },
    "immigration": {
     "v": -2,
     "source": "dossier",
     "note": "Régularisation de tous"
    },
    "securite": {
     "v": -2,
     "source": "dossier",
     "note": "Dissolution des unités répressives"
    },
    "transports": {
     "v": -2,
     "source": "dossier",
     "note": "Gratuité"
    },
    "europe": null,
    "logement": null,
    "sante": null,
    "ecole": null,
    "agriculture": null,
    "defense": null,
    "numerique": null,
    "fiscalite": null
   }
  },
  {
   "id": "labib",
   "nom": "Selma Labib",
   "parti": "NPA-Révolutionnaires",
   "statut": "declare",
   "famille": "rupture_gauche",
   "sondage": null,
   "programme_origine": "parti",
   "idees": [
    {
     "texte": "Expropriation des grands groupes énergétiques",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "SMIC à 2 000 € nets, retraite à 60 ans",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Retrait de l'OTAN",
     "source": "dossier",
     "secteur_dossier": "Défense"
    },
    {
     "texte": "Expropriation sans indemnité des banques",
     "source": "dossier",
     "secteur_dossier": "Finances"
    },
    {
     "texte": "Gratuité des transports collectifs",
     "source": "dossier",
     "secteur_dossier": "Transports"
    }
   ],
   "axes": {
    "eco": {
     "v": -2,
     "source": "dossier",
     "note": "Expropriations"
    },
    "soc": {
     "v": -2,
     "source": "dossier",
     "note": "Désarmement de la police"
    },
    "eu": {
     "v": 1,
     "source": "dossier",
     "note": "Rupture avec l'UE"
    },
    "env": {
     "v": -1,
     "source": "dossier",
     "note": "Planification écologique"
    }
   },
   "secteurs": {
    "salaires": {
     "v": -2,
     "source": "dossier",
     "note": "SMIC 2 000 €"
    },
    "retraites": {
     "v": -2,
     "source": "dossier",
     "note": "Retraite à 60 ans"
    },
    "immigration": {
     "v": -2,
     "source": "dossier",
     "note": "Régularisation immédiate"
    },
    "transports": {
     "v": -2,
     "source": "dossier",
     "note": "Gratuité"
    },
    "defense": {
     "v": 2,
     "source": "dossier",
     "note": "Retrait de l'OTAN"
    },
    "energie": null,
    "europe": null,
    "logement": null,
    "sante": null,
    "securite": null,
    "ecole": null,
    "agriculture": null,
    "numerique": null,
    "fiscalite": null
   }
  },
  {
   "id": "branco",
   "nom": "Juan Branco",
   "parti": "Les Ruches / Aurores",
   "statut": "declare",
   "famille": "rupture_gauche",
   "sondage": null,
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Renationalisation de l'énergie, planification par référendum",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Rupture avec les traités européens",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Sortie de l'OTAN, non-alignement",
     "source": "dossier",
     "secteur_dossier": "Défense"
    },
    {
     "texte": "Audit citoyen de la dette",
     "source": "dossier",
     "secteur_dossier": "Finances"
    },
    {
     "texte": "RIC en toutes matières, fin de la Ve République",
     "source": "dossier",
     "secteur_dossier": "Institutions"
    }
   ],
   "axes": {
    "eco": {
     "v": -2,
     "source": "dossier",
     "note": "Renationalisations"
    },
    "soc": {
     "v": -2,
     "source": "dossier",
     "note": "Abrogation des lois sécuritaires"
    },
    "eu": {
     "v": 2,
     "source": "dossier",
     "note": "Désobéissance aux normes européennes"
    },
    "env": null
   },
   "secteurs": {
    "europe": {
     "v": 2,
     "source": "dossier",
     "note": "Rupture avec les traités"
    },
    "defense": {
     "v": 2,
     "source": "dossier",
     "note": "Sortie de l'OTAN"
    },
    "securite": {
     "v": -2,
     "source": "dossier",
     "note": "Abrogation des lois sécuritaires"
    },
    "energie": null,
    "salaires": null,
    "logement": null,
    "sante": null,
    "immigration": null,
    "ecole": null,
    "agriculture": null,
    "numerique": null,
    "retraites": null,
    "fiscalite": null,
    "transports": null
   }
  },
  {
   "id": "ruffin",
   "nom": "François Ruffin",
   "parti": "Debout !",
   "statut": "declare",
   "famille": "gauche_sociale",
   "sondage": null,
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Planification écologique sans « écologie punitive »",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Protectionnisme écologique et social aux frontières",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "SMIC à 1 700 € nets, écarts de salaires de 1 à 20",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Rétablissement de l'ISF, aides aux entreprises conditionnées",
     "source": "dossier",
     "secteur_dossier": "Fiscalité"
    },
    {
     "texte": "Prix planchers agricoles, blocage du libre-échange agricole",
     "source": "dossier",
     "secteur_dossier": "Agriculture"
    }
   ],
   "axes": {
    "eco": {
     "v": -2,
     "source": "dossier",
     "note": "ISF, SMIC 1 700 €"
    },
    "soc": {
     "v": -1,
     "source": "dossier",
     "note": "Régularisations ciblées et moyens de police"
    },
    "eu": {
     "v": 1,
     "source": "dossier",
     "note": "Protectionnisme aux frontières"
    },
    "env": {
     "v": 0,
     "source": "dossier",
     "note": "Écologie non punitive"
    }
   },
   "secteurs": {
    "energie": {
     "v": 0,
     "source": "dossier",
     "note": "Pas d'écologie punitive"
    },
    "europe": {
     "v": 1,
     "source": "dossier",
     "note": "Protectionnisme"
    },
    "salaires": {
     "v": -2,
     "source": "dossier",
     "note": "SMIC 1 700 €"
    },
    "immigration": {
     "v": -1,
     "source": "dossier",
     "note": "Régularisation métiers en tension"
    },
    "agriculture": {
     "v": -1,
     "source": "dossier",
     "note": "Prix planchers"
    },
    "fiscalite": {
     "v": -2,
     "source": "dossier",
     "note": "ISF"
    },
    "logement": {
     "v": -1,
     "source": "dossier",
     "note": "Encadrement des loyers"
    },
    "sante": null,
    "securite": null,
    "ecole": null,
    "defense": null,
    "numerique": null,
    "retraites": null,
    "transports": null
   }
  },
  {
   "id": "batho",
   "nom": "Delphine Batho",
   "parti": "Génération écologie",
   "statut": "declare",
   "famille": "ecologie",
   "sondage": null,
   "programme_origine": "parti",
   "idees": [
    {
     "texte": "Sobriété planifiée, sortie progressive du nucléaire et des fossiles",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Arrêt des accords de libre-échange (Mercosur, CETA)",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Réduction du temps de travail, abrogation de la réforme des retraites",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Sortie accélérée des pesticides, fin de l'élevage intensif",
     "source": "dossier",
     "secteur_dossier": "Agriculture"
    },
    {
     "texte": "Moratoire sur les autoroutes et extensions d'aéroports",
     "source": "dossier",
     "secteur_dossier": "Transports"
    }
   ],
   "axes": {
    "eco": {
     "v": -1,
     "source": "dossier",
     "note": "Tarifs progressifs sur les biens essentiels"
    },
    "soc": {
     "v": -1,
     "source": "dossier",
     "note": "Statut de réfugié climatique"
    },
    "eu": {
     "v": 0,
     "source": "dossier",
     "note": "Réorientation écologique des traités"
    },
    "env": {
     "v": -2,
     "source": "dossier",
     "note": "Sobriété, sortie du nucléaire"
    }
   },
   "secteurs": {
    "energie": {
     "v": -2,
     "source": "dossier",
     "note": "Sortie du nucléaire et des fossiles"
    },
    "agriculture": {
     "v": -2,
     "source": "dossier",
     "note": "Sortie des pesticides"
    },
    "transports": {
     "v": -2,
     "source": "dossier",
     "note": "Moratoire autoroutes et aéroports"
    },
    "retraites": {
     "v": -1,
     "source": "dossier",
     "note": "Abrogation de la réforme"
    },
    "europe": null,
    "salaires": null,
    "logement": null,
    "sante": null,
    "securite": null,
    "immigration": null,
    "ecole": null,
    "defense": null,
    "numerique": null,
    "fiscalite": null
   }
  },
  {
   "id": "mikolajczak",
   "nom": "Antoine Mikolajczak",
   "parti": "Équinoxe",
   "statut": "declare",
   "famille": "ecologie",
   "sondage": null,
   "programme_origine": "parti",
   "idees": [
    {
     "texte": "Décarbonation par le nucléaire et les renouvelables",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Ajustement carbone strict aux frontières de l'UE",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Fiscalité réorientée vers les activités décarbonées",
     "source": "dossier",
     "secteur_dossier": "Finances"
    },
    {
     "texte": "Agroécologie, moins d'engrais de synthèse",
     "source": "dossier",
     "secteur_dossier": "Agriculture"
    }
   ],
   "axes": {
    "eco": null,
    "soc": null,
    "eu": {
     "v": -1,
     "source": "dossier",
     "note": "Ajustement carbone européen"
    },
    "env": {
     "v": -1,
     "source": "dossier",
     "note": "Décarbonation rapide"
    }
   },
   "secteurs": {
    "energie": {
     "v": -1,
     "source": "dossier",
     "note": "Décarbonation rapide, nucléaire inclus"
    },
    "agriculture": {
     "v": -1,
     "source": "dossier",
     "note": "Agroécologie"
    },
    "transports": {
     "v": -1,
     "source": "dossier",
     "note": "Transports collectifs et vélo"
    },
    "europe": null,
    "salaires": null,
    "logement": null,
    "sante": null,
    "securite": null,
    "immigration": null,
    "ecole": null,
    "defense": null,
    "numerique": null,
    "retraites": null,
    "fiscalite": null
   }
  },
  {
   "id": "markovic",
   "nom": "Mira Markovic",
   "parti": "Parti animaliste",
   "statut": "declare",
   "famille": "ecologie",
   "sondage": null,
   "programme_origine": "parti",
   "idees": [
    {
     "texte": "Moins d'émissions liées à l'élevage industriel",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "PAC sans subventions à l'élevage intensif",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Sortie de l'élevage intensif et des cages",
     "source": "dossier",
     "secteur_dossier": "Agriculture"
    },
    {
     "texte": "Ministère de la protection animale",
     "source": "dossier",
     "secteur_dossier": "Institutions"
    }
   ],
   "axes": {
    "eco": null,
    "soc": null,
    "eu": null,
    "env": {
     "v": -1,
     "source": "dossier",
     "note": "Transition alimentaire"
    }
   },
   "secteurs": {
    "agriculture": {
     "v": -2,
     "source": "dossier",
     "note": "Sortie de l'élevage intensif"
    },
    "energie": null,
    "europe": null,
    "salaires": null,
    "logement": null,
    "sante": null,
    "securite": null,
    "immigration": null,
    "ecole": null,
    "defense": null,
    "numerique": null,
    "retraites": null,
    "fiscalite": null,
    "transports": null
   }
  },
  {
   "id": "cazeneuve",
   "nom": "Bernard Cazeneuve",
   "parti": "La Convention",
   "statut": "declare",
   "famille": "social_democratie",
   "sondage": null,
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Nouveaux réacteurs EPR2 et renouvelables",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Engagement européen fort, couple franco-allemand",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Soutien durable à l'Ukraine, maintien dans l'OTAN",
     "source": "dossier",
     "secteur_dossier": "Défense"
    },
    {
     "texte": "Trajectoire crédible de désendettement",
     "source": "dossier",
     "secteur_dossier": "Finances"
    },
    {
     "texte": "Fermeté contre le terrorisme et le narcotrafic",
     "source": "dossier",
     "secteur_dossier": "Sécurité"
    }
   ],
   "axes": {
    "eco": {
     "v": 0,
     "source": "dossier",
     "note": "Désendettement et fiscalité plus juste sur les très hauts revenus"
    },
    "soc": {
     "v": 1,
     "source": "dossier",
     "note": "Fermeté républicaine"
    },
    "eu": {
     "v": -1,
     "source": "dossier",
     "note": "Engagement européen fort"
    },
    "env": {
     "v": 0,
     "source": "dossier",
     "note": "Nucléaire et renouvelables"
    }
   },
   "secteurs": {
    "energie": {
     "v": 0,
     "source": "dossier",
     "note": "EPR2 + renouvelables"
    },
    "europe": {
     "v": -1,
     "source": "dossier",
     "note": "Couple franco-allemand"
    },
    "securite": {
     "v": 1,
     "source": "dossier",
     "note": "Fermeté républicaine"
    },
    "fiscalite": {
     "v": 0,
     "source": "dossier",
     "note": "Désendettement et justice fiscale"
    },
    "ecole": {
     "v": 0,
     "source": "dossier",
     "note": "Budget sanctuarisé, laïcité"
    },
    "salaires": null,
    "logement": null,
    "sante": null,
    "immigration": null,
    "agriculture": null,
    "defense": null,
    "numerique": null,
    "retraites": null,
    "transports": null
   }
  },
  {
   "id": "bouamrane",
   "nom": "Karim Bouamrane",
   "parti": "Parti socialiste (candidature hors primaire)",
   "statut": "declare",
   "famille": "social_democratie",
   "sondage": null,
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Mix nucléaire et renouvelables, rénovation thermique des quartiers",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Europe sociale, industrielle et souveraine",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Abrogation de la réforme des retraites",
     "source": "dossier",
     "secteur_dossier": "Retraites"
    },
    {
     "texte": "Police de proximité renforcée",
     "source": "dossier",
     "secteur_dossier": "Sécurité"
    },
    {
     "texte": "Construction massive de logements abordables",
     "source": "dossier",
     "secteur_dossier": "Logement"
    }
   ],
   "axes": {
    "eco": {
     "v": -1,
     "source": "dossier",
     "note": "Fiscalité plus juste sur les grandes fortunes"
    },
    "soc": {
     "v": 0,
     "source": "dossier",
     "note": "Droit à la sécurité, police de proximité"
    },
    "eu": {
     "v": -1,
     "source": "dossier",
     "note": "Europe sociale et souveraine"
    },
    "env": null
   },
   "secteurs": {
    "retraites": {
     "v": -1,
     "source": "dossier",
     "note": "Abrogation de la réforme"
    },
    "securite": {
     "v": 1,
     "source": "dossier",
     "note": "Police de proximité"
    },
    "logement": {
     "v": -1,
     "source": "dossier",
     "note": "Logements abordables"
    },
    "energie": null,
    "europe": null,
    "salaires": null,
    "sante": null,
    "immigration": null,
    "ecole": null,
    "agriculture": null,
    "defense": null,
    "numerique": null,
    "fiscalite": null,
    "transports": null
   }
  },
  {
   "id": "becht",
   "nom": "Olivier Becht",
   "parti": "Agir / Renaissance",
   "statut": "declare",
   "famille": "centre",
   "sondage": null,
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Relance du nucléaire pour l'industrie",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Politique commerciale européenne offensive, clauses miroirs",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Intéressement, participation et partage de la valeur",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Attractivité et réindustrialisation",
     "source": "dossier",
     "secteur_dossier": "Finances"
    }
   ],
   "axes": {
    "eco": {
     "v": 1,
     "source": "dossier",
     "note": "Attractivité, exportation"
    },
    "soc": null,
    "eu": {
     "v": -1,
     "source": "dossier",
     "note": "Europe commerciale offensive"
    },
    "env": {
     "v": 0,
     "source": "dossier",
     "note": "Énergie compétitive"
    }
   },
   "secteurs": {
    "energie": {
     "v": 1,
     "source": "dossier",
     "note": "Relance du nucléaire"
    },
    "salaires": {
     "v": 1,
     "source": "dossier",
     "note": "Partage de la valeur"
    },
    "europe": null,
    "logement": null,
    "sante": null,
    "securite": null,
    "immigration": null,
    "ecole": null,
    "agriculture": null,
    "defense": null,
    "numerique": null,
    "retraites": null,
    "fiscalite": null,
    "transports": null
   }
  },
  {
   "id": "bertrand",
   "nom": "Xavier Bertrand",
   "parti": "Nous France / Les Républicains",
   "statut": "declare",
   "famille": "droite",
   "sondage": null,
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Relance du nucléaire (EPR2, petits réacteurs)",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "« Buy European », rejet du Mercosur",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Hausse du net par la baisse des cotisations",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Baisse des impôts de production",
     "source": "dossier",
     "secteur_dossier": "Finances"
    },
    {
     "texte": "Peines planchers, expulsion des étrangers condamnés",
     "source": "dossier",
     "secteur_dossier": "Sécurité"
    }
   ],
   "axes": {
    "eco": {
     "v": 1,
     "source": "dossier",
     "note": "Baisse des impôts de production et des cotisations"
    },
    "soc": {
     "v": 2,
     "source": "dossier",
     "note": "Peines planchers"
    },
    "eu": {
     "v": 0,
     "source": "dossier",
     "note": "Protectionnisme européen ciblé"
    },
    "env": {
     "v": 1,
     "source": "dossier",
     "note": "Arrêt des surtranspositions environnementales"
    }
   },
   "secteurs": {
    "energie": {
     "v": 1,
     "source": "dossier",
     "note": "EPR2, SMR"
    },
    "salaires": {
     "v": 1,
     "source": "dossier",
     "note": "Baisse des cotisations"
    },
    "securite": {
     "v": 2,
     "source": "dossier",
     "note": "Peines planchers"
    },
    "fiscalite": {
     "v": 1,
     "source": "dossier",
     "note": "Baisse des impôts de production"
    },
    "agriculture": {
     "v": 1,
     "source": "dossier",
     "note": "Arrêt des surtranspositions"
    },
    "defense": {
     "v": 0,
     "source": "dossier",
     "note": "Budgets renforcés"
    },
    "europe": null,
    "logement": null,
    "sante": null,
    "immigration": null,
    "ecole": null,
    "numerique": null,
    "retraites": null,
    "transports": null
   }
  },
  {
   "id": "philippot",
   "nom": "Florian Philippot",
   "parti": "Les Patriotes",
   "statut": "declare",
   "famille": "nationaux",
   "sondage": null,
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Sortie du marché européen de l'électricité, relance du nucléaire",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Sortie de l'UE (« Frexit ») et retour au franc",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "SMIC à 1 600 € nets, abrogation de la réforme des retraites",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Arrêt de l'immigration légale et illégale",
     "source": "dossier",
     "secteur_dossier": "Immigration"
    },
    {
     "texte": "Renationalisation des autoroutes, suppression des ZFE",
     "source": "dossier",
     "secteur_dossier": "Transports"
    }
   ],
   "axes": {
    "eco": {
     "v": -1,
     "source": "dossier",
     "note": "Nationalisations, protectionnisme"
    },
    "soc": {
     "v": 2,
     "source": "dossier",
     "note": "Arrêt de l'immigration"
    },
    "eu": {
     "v": 2,
     "source": "dossier",
     "note": "Frexit"
    },
    "env": {
     "v": 2,
     "source": "dossier",
     "note": "Baisse de TVA sur les carburants, fin des ZFE"
    }
   },
   "secteurs": {
    "europe": {
     "v": 2,
     "source": "dossier",
     "note": "Frexit"
    },
    "salaires": {
     "v": -1,
     "source": "dossier",
     "note": "SMIC 1 600 €"
    },
    "immigration": {
     "v": 2,
     "source": "dossier",
     "note": "Arrêt de l'immigration"
    },
    "transports": {
     "v": 2,
     "source": "dossier",
     "note": "Fin des ZFE"
    },
    "energie": {
     "v": 2,
     "source": "dossier",
     "note": "Sortie du marché européen"
    },
    "logement": null,
    "sante": null,
    "securite": null,
    "ecole": null,
    "agriculture": null,
    "defense": null,
    "numerique": null,
    "retraites": null,
    "fiscalite": null
   }
  },
  {
   "id": "asselineau",
   "nom": "François Asselineau",
   "parti": "Union populaire républicaine (UPR)",
   "statut": "declare",
   "famille": "nationaux",
   "sondage": null,
   "programme_origine": "parti",
   "idees": [
    {
     "texte": "Renationalisation d'EDF et Engie, sortie du marché européen",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Sortie de l'UE, de l'euro et de l'OTAN",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Retraite à 60 ans à taux plein",
     "source": "dossier",
     "secteur_dossier": "Retraites"
    },
    {
     "texte": "Financement de l'État par la Banque de France",
     "source": "dossier",
     "secteur_dossier": "Finances"
    },
    {
     "texte": "Politique migratoire décidée par référendum",
     "source": "dossier",
     "secteur_dossier": "Immigration"
    }
   ],
   "axes": {
    "eco": {
     "v": -1,
     "source": "dossier",
     "note": "Nationalisations"
    },
    "soc": {
     "v": 1,
     "source": "dossier",
     "note": "Frontières nationales rétablies"
    },
    "eu": {
     "v": 2,
     "source": "dossier",
     "note": "Sortie de l'UE"
    },
    "env": null
   },
   "secteurs": {
    "europe": {
     "v": 2,
     "source": "dossier",
     "note": "Sortie de l'UE"
    },
    "retraites": {
     "v": -2,
     "source": "dossier",
     "note": "60 ans à taux plein"
    },
    "defense": {
     "v": 2,
     "source": "dossier",
     "note": "Sortie de l'OTAN"
    },
    "energie": null,
    "salaires": null,
    "logement": null,
    "sante": null,
    "securite": null,
    "immigration": null,
    "ecole": null,
    "agriculture": null,
    "numerique": null,
    "fiscalite": null,
    "transports": null
   }
  },
  {
   "id": "polony",
   "nom": "Natacha Polony",
   "parti": "Nous sommes la France",
   "statut": "declare",
   "famille": "nationaux",
   "sondage": null,
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Pôle public de l'énergie fondé sur le nucléaire",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Remise en cause de la primauté du droit européen dérivé",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Défense de la retraite par répartition",
     "source": "dossier",
     "secteur_dossier": "Retraites"
    },
    {
     "texte": "Assimilation républicaine, maîtrise des flux migratoires",
     "source": "dossier",
     "secteur_dossier": "Immigration"
    },
    {
     "texte": "Rejet des traités de libre-échange agricole",
     "source": "dossier",
     "secteur_dossier": "Agriculture"
    }
   ],
   "axes": {
    "eco": {
     "v": -1,
     "source": "dossier",
     "note": "Lutte contre la financiarisation"
    },
    "soc": {
     "v": 1,
     "source": "dossier",
     "note": "Assimilation exigeante"
    },
    "eu": {
     "v": 1,
     "source": "dossier",
     "note": "Primauté nationale"
    },
    "env": null
   },
   "secteurs": {
    "europe": {
     "v": 1,
     "source": "dossier",
     "note": "Primauté nationale"
    },
    "immigration": {
     "v": 1,
     "source": "dossier",
     "note": "Maîtrise des flux"
    },
    "energie": null,
    "salaires": null,
    "logement": null,
    "sante": null,
    "securite": null,
    "ecole": null,
    "agriculture": null,
    "defense": null,
    "numerique": null,
    "retraites": null,
    "fiscalite": null,
    "transports": null
   }
  },
  {
   "id": "villepin",
   "nom": "Dominique de Villepin",
   "parti": "La France humaniste",
   "statut": "pressenti",
   "famille": "transversal",
   "sondage": null,
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Transition écologique exécutée par les communes",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Europe puissance souveraine",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Diplomatie d'équilibre et multilatéralisme",
     "source": "dossier",
     "secteur_dossier": "Défense"
    },
    {
     "texte": "Abrogation de la réforme des retraites de 2023, retraite en annuités",
     "source": "dossier",
     "secteur_dossier": "Retraites"
    },
    {
     "texte": "« Big bang » fiscal : extinction des niches, neuf grands impôts",
     "source": "dossier",
     "secteur_dossier": "Fiscalité"
    }
   ],
   "axes": {
    "eco": {
     "v": 0,
     "source": "dossier",
     "note": "Big bang fiscal"
    },
    "soc": {
     "v": 0,
     "source": "dossier",
     "note": "Fermeté dans le respect des principes"
    },
    "eu": {
     "v": 0,
     "source": "dossier",
     "note": "Europe puissance souveraine"
    },
    "env": null
   },
   "secteurs": {
    "retraites": {
     "v": -1,
     "source": "dossier",
     "note": "Abrogation de la réforme 2023"
    },
    "fiscalite": {
     "v": 0,
     "source": "dossier",
     "note": "Fin des niches"
    },
    "energie": null,
    "europe": null,
    "salaires": null,
    "logement": null,
    "sante": null,
    "securite": null,
    "immigration": null,
    "ecole": null,
    "agriculture": null,
    "defense": null,
    "numerique": null,
    "transports": null
   }
  },
  {
   "id": "lassalle",
   "nom": "Jean Lassalle",
   "parti": "Résistons !",
   "statut": "declare",
   "famille": "transversal",
   "sondage": null,
   "programme_origine": "candidat",
   "idees": [
    {
     "texte": "Hydroélectricité, nucléaire, opposition à l'éolien industriel",
     "source": "dossier",
     "secteur_dossier": "Énergie"
    },
    {
     "texte": "Rejet des accords Mercosur et CETA",
     "source": "dossier",
     "secteur_dossier": "UE"
    },
    {
     "texte": "Baisse des taxes sur les carburants en zone rurale",
     "source": "dossier",
     "secteur_dossier": "Salaires"
    },
    {
     "texte": "Petites lignes ferroviaires et bureaux de poste maintenus",
     "source": "dossier",
     "secteur_dossier": "Transports"
    }
   ],
   "axes": {
    "eco": {
     "v": -1,
     "source": "dossier",
     "note": "Services publics ruraux"
    },
    "soc": {
     "v": 1,
     "source": "dossier",
     "note": "Gendarmerie rurale renforcée"
    },
    "eu": {
     "v": 1,
     "source": "dossier",
     "note": "Remise à plat des traités"
    },
    "env": {
     "v": 1,
     "source": "dossier",
     "note": "Baisse des taxes sur les carburants"
    }
   },
   "secteurs": {
    "agriculture": {
     "v": 0,
     "source": "dossier",
     "note": "Agriculture paysanne, prix garantis"
    },
    "transports": {
     "v": 0,
     "source": "dossier",
     "note": "Petites lignes ferroviaires"
    },
    "energie": null,
    "europe": null,
    "salaires": null,
    "logement": null,
    "sante": null,
    "securite": null,
    "immigration": null,
    "ecole": null,
    "defense": null,
    "numerique": null,
    "retraites": null,
    "fiscalite": null
   }
  }
 ],
 "matrice": {
  "prog:smic_hausse": [
   "melenchon",
   "roussel",
   "ruffin",
   "glucksmann",
   "arthaud",
   "kazib",
   "labib",
   "philippot"
  ],
  "prog:retraite_60": [
   "kazib",
   "labib",
   "asselineau"
  ],
  "prog:taxe_hauts_patrimoines": [
   "melenchon",
   "roussel",
   "ruffin",
   "tondelier",
   "glucksmann"
  ],
  "prog:regularisation_metiers_tension": [
   "ruffin",
   "melenchon",
   "roussel",
   "tondelier"
  ],
  "prog:encadrement_loyers": [
   "melenchon",
   "roussel",
   "ruffin",
   "tondelier"
  ],
  "prog:baisse_impots_production": [
   "bertrand"
  ],
  "prog:report_age_65": [
   "philippe"
  ],
  "prog:peines_planchers": [
   "bertrand"
  ],
  "prog:baisse_cotisations_net": [
   "retailleau",
   "lisnard",
   "bertrand",
   "dupont_aignan",
   "attal"
  ],
  "prog:relance_nucleaire": [
   "attal",
   "philippe",
   "retailleau",
   "lisnard",
   "bertrand",
   "zemmour",
   "roussel",
   "cazeneuve",
   "glucksmann",
   "dupont_aignan",
   "philippot",
   "becht",
   "mikolajczak"
  ],
  "prog:sortie_nucleaire": [
   "melenchon",
   "batho"
  ],
  "prog:sortie_pesticides": [
   "melenchon",
   "batho"
  ],
  "prog:leasing_electrique": [
   "glucksmann"
  ],
  "prog:sortie_marche_electricite": [
   "le_pen",
   "dupont_aignan",
   "philippot",
   "asselineau",
   "polony"
  ],
  "prog:referendum_immigration": [
   "retailleau",
   "asselineau"
  ],
  "prog:prix_planchers_agricoles": [
   "melenchon",
   "ruffin",
   "dupont_aignan",
   "roussel",
   "philippot"
  ],
  "prog:regulation_installation_medecins": [
   "tondelier",
   "glucksmann"
  ],
  "prog:revalorisation_enseignants": [
   "attal",
   "philippe",
   "cazeneuve"
  ],
  "v22_mercosur.a": [
   "attal",
   "glucksmann",
   "bertrand",
   "ruffin",
   "batho",
   "lassalle"
  ],
  "v22_fukushima.e": [
   "attal",
   "philippe",
   "retailleau",
   "lisnard",
   "bertrand",
   "zemmour",
   "roussel",
   "cazeneuve",
   "glucksmann",
   "dupont_aignan",
   "philippot",
   "becht",
   "mikolajczak"
  ],
  "v22_fukushima.c": [
   "melenchon",
   "batho"
  ],
  "v22_bouclier.e": [
   "le_pen",
   "dupont_aignan",
   "philippot",
   "asselineau",
   "polony"
  ],
  "v22_bouclier.d": [
   "ruffin",
   "roussel",
   "tondelier"
  ],
  "v22_florange.a": [
   "philippot",
   "kazib"
  ],
  "v22_florange.e": [
   "ruffin"
  ],
  "v22_florange.c": [
   "mikolajczak"
  ],
  "v22_covid.e": [
   "roussel",
   "ruffin",
   "melenchon"
  ],
  "v22_medicaments.d": [
   "kazib",
   "arthaud",
   "labib"
  ],
  "v25_medecins.a": [
   "tondelier",
   "glucksmann"
  ],
  "v25_medecins.b": [
   "retailleau",
   "bertrand"
  ],
  "v25_beurre.e": [
   "melenchon",
   "roussel"
  ],
  "v26_vigipirate.e": [
   "bertrand",
   "dupont_aignan"
  ]
 }
};
