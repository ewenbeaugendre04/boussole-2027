const GAME = {
 "version": "0.2.7",
 "rules": {
  "reforms_per_week": 2
 },
 "axes": {
  "eco": {
   "neg": "État protecteur",
   "pos": "Marché libre"
  },
  "soc": {
   "neg": "Ouverture, libertés",
   "pos": "Ordre, autorité"
  },
  "eu": {
   "neg": "Plus d'intégration européenne",
   "pos": "Plus de souveraineté nationale"
  },
  "env": {
   "neg": "Transition rapide",
   "pos": "Pouvoir d'achat d'abord"
  }
 },
 "sectors": [
  {
   "id": "energie",
   "label": "Énergie"
  },
  {
   "id": "europe",
   "label": "Europe"
  },
  {
   "id": "salaires",
   "label": "Emploi & salaires"
  },
  {
   "id": "logement",
   "label": "Logement"
  },
  {
   "id": "sante",
   "label": "Santé"
  },
  {
   "id": "securite",
   "label": "Sécurité"
  },
  {
   "id": "immigration",
   "label": "Immigration"
  },
  {
   "id": "ecole",
   "label": "École"
  },
  {
   "id": "agriculture",
   "label": "Agriculture"
  },
  {
   "id": "defense",
   "label": "Défense"
  },
  {
   "id": "numerique",
   "label": "Numérique & services"
  },
  {
   "id": "retraites",
   "label": "Retraites"
  },
  {
   "id": "fiscalite",
   "label": "Fiscalité & budget"
  },
  {
   "id": "transports",
   "label": "Transports"
  }
 ],
 "regions": [
  {
   "id": "hauts_de_france",
   "label": "Hauts-de-France",
   "x": 56,
   "y": 9
  },
  {
   "id": "normandie",
   "label": "Normandie",
   "x": 37,
   "y": 19
  },
  {
   "id": "ile_de_france",
   "label": "Île-de-France",
   "x": 52,
   "y": 24
  },
  {
   "id": "grand_est",
   "label": "Grand Est",
   "x": 75,
   "y": 22
  },
  {
   "id": "bretagne",
   "label": "Bretagne",
   "x": 15,
   "y": 30
  },
  {
   "id": "pays_de_la_loire",
   "label": "Pays de la Loire",
   "x": 30,
   "y": 39
  },
  {
   "id": "centre_val_de_loire",
   "label": "Centre-Val de Loire",
   "x": 46,
   "y": 38
  },
  {
   "id": "bourgogne_franche_comte",
   "label": "Bourgogne-Franche-Comté",
   "x": 69,
   "y": 40
  },
  {
   "id": "nouvelle_aquitaine",
   "label": "Nouvelle-Aquitaine",
   "x": 35,
   "y": 62
  },
  {
   "id": "auvergne_rhone_alpes",
   "label": "Auvergne-Rhône-Alpes",
   "x": 67,
   "y": 60
  },
  {
   "id": "occitanie",
   "label": "Occitanie",
   "x": 50,
   "y": 80
  },
  {
   "id": "paca",
   "label": "Provence-Alpes-Côte d'Azur",
   "x": 79,
   "y": 77
  },
  {
   "id": "corse",
   "label": "Corse",
   "x": 93,
   "y": 90
  },
  {
   "id": "outre_mer",
   "label": "Outre-mer",
   "x": 7,
   "y": 90,
   "inset": true
  },
  {
   "id": "national",
   "label": "Tout le pays",
   "x": 52,
   "y": 50,
   "national": true
  },
  {
   "id": "bruxelles",
   "label": "Bruxelles (UE)",
   "x": 63,
   "y": 3,
   "abroad": true
  },
  {
   "id": "frontiere_est",
   "label": "Frontière est de l'Europe",
   "x": 97,
   "y": 13,
   "abroad": true
  },
  {
   "id": "allemagne",
   "label": "Allemagne",
   "x": 90,
   "y": 14,
   "abroad": true
  },
  {
   "id": "espagne",
   "label": "Espagne",
   "x": 38,
   "y": 97,
   "abroad": true
  }
 ],
 "indicators": [
  {
   "id": "pouvoir_achat",
   "label": "Pouvoir d'achat",
   "start": 50,
   "good": "high"
  },
  {
   "id": "emploi",
   "label": "Emploi",
   "start": 50,
   "good": "high"
  },
  {
   "id": "co2",
   "label": "Émissions de CO₂",
   "start": 50,
   "good": "low"
  },
  {
   "id": "cohesion",
   "label": "Cohésion sociale",
   "start": 50,
   "good": "high"
  },
  {
   "id": "souverainete",
   "label": "Souveraineté",
   "start": 50,
   "good": "high"
  },
  {
   "id": "services",
   "label": "Services publics",
   "start": 50,
   "good": "high"
  }
 ],
 "budget": {
  "annee": 2026,
  "annee_ref": "Comptes publics 2025 (Insee, mars 2026) et lois de finances 2026",
  "perimetre": "Toutes administrations publiques : État, Sécurité sociale, collectivités",
  "unite": "Md€",
  "pib": 2990,
  "recettes": 1562,
  "depenses": 1714,
  "deficit": 152,
  "dette": 3595.5,
  "dette_source": "Insee, dette de Maastricht à la fin du 2e trimestre 2026 : 3 595,5 Md€, soit 119,0 % du PIB (Informations rapides n° 239, 29 septembre 2026)",
  "charge_interets": 65,
  "postes": [
   {
    "id": "retraites",
    "label": "Retraites (tous régimes, environ 14 % du PIB)",
    "montant": 410
   },
   {
    "id": "sante",
    "label": "Assurance maladie (Ondam 2026)",
    "montant": 271
   },
   {
    "id": "famille",
    "label": "Branche famille (2026)",
    "montant": 60
   },
   {
    "id": "autonomie",
    "label": "Branche autonomie (2026)",
    "montant": 44
   },
   {
    "id": "education",
    "label": "Enseignement scolaire (État, hors pensions)",
    "montant": 64
   },
   {
    "id": "defense",
    "label": "Défense (mission budgétaire 2026)",
    "montant": 57
   },
   {
    "id": "dette_etat",
    "label": "Charge de la dette de l'État (2026)",
    "montant": 58
   }
  ],
  "etat": {
   "depenses_nettes": 452.7,
   "solde": -134.6
  },
  "secu": {
   "depenses": 684.2,
   "recettes": 664.8,
   "solde": -19.4
  },
  "sources": [
   {
    "label": "Insee, Informations rapides : comptes des administrations publiques 2025 (27 mars 2026)",
    "url": "https://www.insee.fr/fr/statistiques/8956575"
   },
   {
    "label": "Vie publique : 152,5 milliards d'euros de déficit public en 2025",
    "url": "https://www.vie-publique.fr/en-bref/302659-1525-milliards-deuros-de-deficit-public-en-2025"
   },
   {
    "label": "Vie publique : budget de l'État 2026, loi de finances 2026",
    "url": "https://www.vie-publique.fr/loi/300444-budget-de-letat-2026-loi-de-finances-2026"
   },
   {
    "label": "Sénat, L'essentiel du projet de loi de finances 2026 (nouvelle lecture)",
    "url": "https://www.senat.fr/lessentiel/pjlf2026.pdf"
   },
   {
    "label": "Sénat, rapport sur le PLF 2026 : charge de la dette de l'État",
    "url": "https://www.senat.fr/rap/l25-139-312/l25-139-312_mono.html"
   },
   {
    "label": "Banque des Territoires : loi de financement de la Sécurité sociale 2026",
    "url": "https://www.banquedesterritoires.fr/loi-de-financement-de-la-securite-sociale-pour-2026-quels-credits-quelles-nouveautes"
   },
   {
    "label": "Cour des comptes (via Vie publique) : situation et perspectives des finances publiques 2026",
    "url": "https://www.vie-publique.fr/rapport/303867-la-situation-et-les-perspectives-des-finances-publiques-2026"
   },
   {
    "label": "Ministère de l'Économie : présentation du projet de budget pour 2026",
    "url": "https://www.economie.gouv.fr/actualites/presentation-du-projet-de-budget-pour-2026"
   }
  ],
  "note": "Ordres de grandeur, à vérifier. Recettes, dépenses, déficit et dette : comptes 2025 de l'Insee (premiers résultats). 1 semaine de jeu = 1/52 d'année : la dette augmente chaque semaine du déficit / 52 plus les effets annuels cumulés / 52 ; les coûts ponctuels (once) s'appliquent tout de suite. Le coût des mesures reprend des chiffres publics quand ils existent (voir les sources de chaque événement et proposition) et des estimations prudentes sinon.",
  "periodes_par_an": 52
 },
 "scales": {
  "note": "Échelle commune à tous les sujets, pour que les effets soient comparables.",
  "budget": "Md€ par an (budget) ou Md€ une fois (once). Sujets du quotidien : 0 à 0,1. Grands sujets : 1 à 30.",
  "pouvoir_achat": "1 point ≈ 2 Md€ par an gagnés ou perdus par les ménages.",
  "emploi": "1 point ≈ 25 000 emplois.",
  "co2": "1 point ≈ 2 millions de tonnes de CO₂ par an (environ 0,5 % des émissions du pays).",
  "autres": "Cohésion, souveraineté, services : 1 à 2 points pour un sujet local, 3 à 8 pour une grande réforme.",
  "induced": {
   "pa_md": 0.6,
   "emploi_md": 0.75,
   "note": "Recettes induites : 1 point de pouvoir d'achat ≈ 2 Md€ de revenus des ménages, dont environ 30 % reviennent aux finances publiques (TVA, impôts) ; 1 point d'emploi ≈ 25 000 emplois rapportant environ 30 000 € chacun par an (cotisations, impôts, allocations évitées). Hypothèses simplifiées du jeu."
  }
 },
 "levels": {
  "1": "simple",
  "2": "simple",
  "3": "expert"
 },
 "level_quiz": {
  "question": "« Le déficit public », pour vous, c'est…",
  "answers": [
   {
    "text": "Pas sûr, je découvre.",
    "level": 1
   },
   {
    "text": "Quand l'État dépense plus qu'il ne gagne.",
    "level": 2
   },
   {
    "text": "Le besoin de financement des administrations publiques, en % du PIB.",
    "level": 3
   }
  ]
 },
 "news": [
  {
   "tag": "faux",
   "title": "« Le SMIC sera supprimé en janvier »",
   "text": "Une capture d'écran circule. Aucun texte de loi, aucun décret ne le prévoit. Le SMIC est fixé par la loi et revalorisé chaque année. Réflexe : chercher la source officielle.",
   "src": "Exemple fictif, publication virale sur un réseau social"
  },
  {
   "tag": "trompeur",
   "title": "« La dette a doublé en un an ! »",
   "text": "Le graphique partagé coupe l'axe vertical à 3 400 Md€ : une hausse de 3 % ressemble à un doublement. Les chiffres sont vrais, le dessin trompe.",
   "src": "Exemple fictif, infographie partagée par un compte anonyme"
  },
  {
   "tag": "ingerence",
   "title": "Un faux journal régional publie des articles en série",
   "text": "Un site imite la maquette d'un quotidien régional. Les articles sont écrits à l'étranger et relayés par des comptes automatisés pour attiser les tensions. Réflexe : vérifier l'adresse du site.",
   "src": "Exemple fictif inspiré de campagnes d'ingérence documentées"
  },
  {
   "tag": "faux",
   "title": "Une vidéo annonce le report de l'élection",
   "text": "Un présentateur télé semble annoncer le report du scrutin. La vidéo est générée par intelligence artificielle : lèvres décalées, voix trop lisse. La date de l'élection est fixée par décret.",
   "src": "Exemple fictif, vidéo truquée"
  },
  {
   "tag": "trompeur",
   "title": "« Cette ville interdit les barbecues »",
   "text": "Vrai en partie : l'interdiction ne vaut que près des forêts, l'été, en période de risque d'incendie. Le titre oublie l'essentiel du contexte.",
   "src": "Exemple fictif, titre de site d'information"
  },
  {
   "tag": "vrai",
   "title": "Une vidéo d'inondation est bien récente",
   "text": "Les images d'une rue inondée semblaient anciennes. La météo, les panneaux et les témoins confirment : elles datent bien de cette semaine. Vérifier, c'est aussi confirmer.",
   "src": "Exemple fictif, vérification d'une vidéo amateur"
  }
 ],
 "days": [
  {
   "day": 1,
   "season": "ete",
   "title": "Une semaine sous le soleil et sous pression",
   "mood": "calme",
   "weather": "canicule",
   "intro": "Semaine 1. Le jeu commence : l'Europe signe un grand accord, et une chaleur écrasante s'installe.",
   "offer": [],
   "events": [
    {
     "id": "v22_mercosur",
     "kind": "majeur",
     "region": "bruxelles",
     "sector": "agriculture",
     "title": "L'Europe signe l'accord avec l'Amérique du Sud, les tracteurs montent à Paris",
     "simple": "Après 25 ans de discussions, l'Europe valide un accord de libre-échange avec le Brésil, l'Argentine, l'Uruguay et le Paraguay. La France a voté contre, mais elle est minoritaire. Des centaines de tracteurs entrent dans Paris.",
     "expert": "Accord UE-Mercosur approuvé à la majorité qualifiée malgré l'opposition de la France, de la Pologne, de l'Autriche, de la Hongrie et de l'Irlande. Clause de sauvegarde si les prix importés sont inférieurs d'au moins 5 % et les volumes en hausse de plus de 5 %. Ratification du Parlement européen incertaine.",
     "context": "L'accord ouvre le marché européen à de la viande et des céréales à bas prix, et ouvre l'Amérique du Sud aux vins, fromages, voitures et machines européens.",
     "real": {
      "date": "9 janvier 2026 (feu vert de l'UE) ; 13 janvier 2026 (tracteurs à Paris)",
      "place": "Bruxelles ; Paris, des Champs-Élysées à l'Assemblée nationale",
      "fact": "Les États membres ont approuvé la signature de l'accord avec le Mercosur, la France votant contre. Environ 350 tracteurs sont entrés dans Paris ; 55 actions ont eu lieu dans 31 départements.",
      "figures": "Clause de sauvegarde : enquête si prix inférieurs d'au moins 5 % et volumes en hausse de plus de 5 %. Environ 2 400 manifestants et 1 000 véhicules selon le ministère de l'Intérieur.",
      "sources": [
       {
        "label": "Aleteia : Mercosur, l'Union européenne donne son feu vert sans la France",
        "url": "https://fr.aleteia.org/2026/01/09/mercosur-lunion-europeenne-donne-son-feu-vert-sans-la-france/"
       },
       {
        "label": "Euronews : des centaines de tracteurs dans Paris contre l'accord",
        "url": "https://www.euronews.com/2026/01/13/hundreds-of-tractors-rumble-through-paris-in-protest-over-eu-mercosur-deal"
       }
      ]
     },
     "camera": {
      "region": "bruxelles",
      "x": 58,
      "y": 14,
      "zoom": 1.2
     },
     "fx": [
      {
       "obj": "batiment_ue",
       "x": 63,
       "y": 3,
       "anim": "appear"
      },
      {
       "obj": "drapeau_ue",
       "x": 66,
       "y": 2,
       "anim": "pulse",
       "delay": 0.3
      },
      {
       "obj": "cargo",
       "x": 2,
       "y": 60,
       "anim": "move",
       "to": {
        "x": 15,
        "y": 52
       },
       "label": "Viande importée",
       "delay": 0.6
      },
      {
       "obj": "tracteur",
       "x": 45,
       "y": 30,
       "anim": "move",
       "to": {
        "x": 52,
        "y": 24
       },
       "count": 6,
       "delay": 0.9
      },
      {
       "obj": "panneau",
       "x": 52,
       "y": 21,
       "anim": "appear",
       "label": "350 tracteurs dans Paris",
       "delay": 1.3
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Voter contre et saisir la justice européenne",
       "label_expert": "Voter contre au Conseil et saisir la CJUE pour avis",
       "plus": "La France défend ses éleveurs jusqu'au bout.",
       "minus": "Isolement en Europe, recours très incertain.",
       "budget": 0,
       "axes": {
        "eu": 2
       },
       "ind": {
        "souverainete": 2,
        "cohesion": 1,
        "emploi": -1
       },
       "real_note": "La France a voté contre ; environ 150 eurodéputés voulaient saisir la justice européenne.",
       "fx": [
        {
         "obj": "parlement",
         "x": 63,
         "y": 6,
         "anim": "appear",
         "label": "Recours"
        },
        {
         "obj": "drapeau_ue",
         "x": 66,
         "y": 2,
         "anim": "shake"
        },
        {
         "obj": "tracteur",
         "x": 52,
         "y": 24,
         "anim": "move",
         "to": {
          "x": 46,
          "y": 30
         },
         "count": 3
        }
       ]
      },
      {
       "id": "b",
       "label": "Activer la clause de sauvegarde dès la première hausse",
       "label_expert": "Activer la clause de sauvegarde bilatérale sur la viande bovine",
       "plus": "Des droits de douane reviennent si les prix chutent.",
       "minus": "Procédure lente, preuves difficiles à réunir.",
       "budget": 0,
       "axes": {
        "eu": -1
       },
       "ind": {
        "souverainete": 1
       },
       "fx": [
        {
         "obj": "douane",
         "x": 30,
         "y": 50,
         "anim": "appear",
         "stay": true
        },
        {
         "obj": "cargo",
         "x": 15,
         "y": 52,
         "anim": "move",
         "to": {
          "x": 2,
          "y": 60
         }
        },
        {
         "obj": "loupe",
         "x": 32,
         "y": 48,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "c",
       "label": "Aides d'urgence aux éleveurs les plus exposés",
       "label_expert": "Aide d'État de crise aux éleveurs, notifiée à la Commission",
       "plus": "Un bol d'air pour les fermes menacées.",
       "minus": "Argent public, sans régler la concurrence.",
       "budget": 0,
       "once": -0.3,
       "axes": {
        "eco": -1
       },
       "ind": {
        "emploi": 1,
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 24,
         "anim": "flow",
         "to": {
          "x": 40,
          "y": 60
         }
        },
        {
         "obj": "troupeau",
         "x": 40,
         "y": 60,
         "anim": "appear"
        },
        {
         "obj": "ferme",
         "x": 42,
         "y": 62,
         "anim": "pulse"
        }
       ],
       "budget_note": "Aide ponctuelle versée par l'État : le déficit augmente une fois."
      },
      {
       "id": "d",
       "label": "Jouer l'accord : conquérir des marchés pour vins et fromages",
       "label_expert": "Exploiter les contingents et indications géographiques protégées de l'accord",
       "plus": "Nouveaux débouchés, plus d'activité taxée.",
       "minus": "L'élevage subit une concurrence plus rude.",
       "budget": 0.2,
       "axes": {
        "eu": -2,
        "eco": 2
       },
       "ind": {
        "emploi": 1,
        "souverainete": -1
       },
       "fx": [
        {
         "obj": "conteneurs",
         "x": 30,
         "y": 50,
         "anim": "appear",
         "label": "Vins et fromages"
        },
        {
         "obj": "cargo",
         "x": 15,
         "y": 52,
         "anim": "move",
         "to": {
          "x": 2,
          "y": 60
         }
        },
        {
         "obj": "pieces",
         "x": 52,
         "y": 24,
         "anim": "rise"
        }
       ],
       "budget_note": "Plus d'exportations, donc plus d'impôts sur les bénéfices : le déficit baisse un peu."
      },
      {
       "id": "e",
       "label": "Interdire la viande produite avec des produits interdits chez nous",
       "label_expert": "Imposer des mesures miroirs sur les importations agricoles",
       "plus": "Mêmes règles pour tous, concurrence plus loyale.",
       "minus": "Contrôles difficiles, prix un peu plus élevés.",
       "budget": 0,
       "axes": {
        "env": -1,
        "eu": 1
       },
       "ind": {
        "souverainete": 1,
        "pouvoir_achat": -1
       },
       "fx": [
        {
         "obj": "douane",
         "x": 30,
         "y": 50,
         "anim": "appear",
         "stay": true
        },
        {
         "obj": "cargo",
         "x": 15,
         "y": 52,
         "anim": "move",
         "to": {
          "x": 2,
          "y": 60
         }
        },
        {
         "obj": "loupe",
         "x": 32,
         "y": 48,
         "anim": "pulse"
        }
       ]
      }
     ]
    },
    {
     "id": "v22_canicule_2003",
     "kind": "majeur",
     "region": "ile_de_france",
     "sector": "sante",
     "title": "La canicule tue en silence",
     "simple": "Depuis deux semaines, il fait plus de 35 °C le jour et les nuits ne rafraîchissent plus. Des personnes âgées, seules chez elles, meurent de chaleur. Les morgues débordent.",
     "expert": "Vague de chaleur exceptionnelle avec pollution à l'ozone : forte surmortalité des personnes âgées isolées ou dépendantes, absence de système d'alerte, établissements non climatisés, défaut de coordination sanitaire.",
     "context": "Après cette crise, un plan canicule, des registres des personnes fragiles et une journée de solidarité pour financer l'aide aux personnes âgées ont été créés.",
     "real": {
      "date": "1er au 20 août 2003",
      "place": "Toute la France, surtout l'Île-de-France",
      "fact": "La vague de chaleur a causé environ 14 800 décès de plus que la normale, surtout chez les personnes âgées. Un plan national canicule avec alertes Météo-France a été créé ensuite.",
      "figures": "Environ 14 800 décès en excès (+60 % par rapport à la mortalité attendue).",
      "sources": [
       {
        "label": "Santé publique France : la vague de chaleur d'août 2003, que s'est-il passé ?",
        "url": "https://www.santepubliquefrance.fr/climat/fortes-chaleurs-canicule/article/la-vague-de-chaleur-daout-2003-que-sest-il-passe"
       }
      ]
     },
     "camera": {
      "region": "ile_de_france",
      "x": 52,
      "y": 26,
      "zoom": 1.8
     },
     "fx": [
      {
       "obj": "canicule",
       "x": 52,
       "y": 24,
       "anim": "pulse"
      },
      {
       "obj": "immeuble",
       "x": 51,
       "y": 25,
       "anim": "shake",
       "count": 3,
       "delay": 0.3
      },
      {
       "obj": "ambulance",
       "x": 47,
       "y": 22,
       "anim": "move",
       "to": {
        "x": 52,
        "y": 25
       },
       "count": 3,
       "delay": 0.7
      },
      {
       "obj": "hopital",
       "x": 54,
       "y": 27,
       "anim": "blink",
       "delay": 1
      },
      {
       "obj": "etiquette",
       "x": 52,
       "y": 21,
       "anim": "appear",
       "label": "Nuits à 25 °C",
       "delay": 1.3
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Plan d'alerte et registre des personnes fragiles",
       "label_expert": "Plan canicule et registre communal des personnes vulnérables",
       "plus": "Les mairies appellent et visitent les isolés.",
       "minus": "Repose sur les inscriptions et les bénévoles.",
       "budget": -0.05,
       "axes": {
        "soc": 1
       },
       "ind": {
        "services": 2,
        "cohesion": 2
       },
       "real_note": "Créé après la crise : plan canicule avec alertes Météo-France et registres communaux.",
       "fx": [
        {
         "obj": "mairie",
         "x": 50,
         "y": 26,
         "anim": "appear"
        },
        {
         "obj": "personnage",
         "x": 51,
         "y": 25,
         "anim": "move",
         "to": {
          "x": 53,
          "y": 25
         },
         "count": 3
        },
        {
         "obj": "antenne",
         "x": 52,
         "y": 22,
         "anim": "pulse",
         "label": "Alerte canicule"
        }
       ],
       "budget_note": "Coût du dispositif d'alerte et des visites : le déficit augmente un peu.",
       "terme": "court"
      },
      {
       "id": "b",
       "label": "Travailler un jour férié pour financer l'aide aux aînés",
       "label_expert": "Journée de solidarité affectée à la contribution solidarité autonomie",
       "term": "Journée de solidarité",
       "plus": "Une recette chaque année pour la dépendance.",
       "minus": "Les salariés travaillent un jour de plus sans salaire.",
       "budget": 2.4,
       "axes": {
        "eco": 1
       },
       "ind": {
        "pouvoir_achat": -1,
        "cohesion": -1,
        "services": 1
       },
       "real_note": "Choix fait ensuite : une journée de solidarité finance l'autonomie des personnes âgées (environ 2 à 3 Md€ par an, ordre de grandeur à vérifier).",
       "fx": [
        {
         "obj": "usine",
         "x": 55,
         "y": 28,
         "anim": "smoke"
        },
        {
         "obj": "pieces",
         "x": 52,
         "y": 24,
         "anim": "rise",
         "count": 3
        },
        {
         "obj": "etiquette",
         "x": 55,
         "y": 25,
         "anim": "appear",
         "label": "Jour férié travaillé"
        }
       ],
       "budget_note": "Nouvelle contribution des employeurs sur une journée travaillée : le déficit baisse.",
       "terme": "long"
      },
      {
       "id": "c",
       "label": "Climatiser les maisons de retraite et les hôpitaux",
       "label_expert": "Plan d'investissement pour climatiser Ehpad et hôpitaux",
       "plus": "Une pièce fraîche pour chaque résident.",
       "minus": "Coûteux, et plus d'électricité consommée.",
       "budget": 0,
       "once": -0.3,
       "axes": {
        "env": 1,
        "eco": -1
       },
       "ind": {
        "services": 2,
        "co2": 1
       },
       "fx": [
        {
         "obj": "hopital",
         "x": 54,
         "y": 27,
         "anim": "appear"
        },
        {
         "obj": "pylone",
         "x": 56,
         "y": 30,
         "anim": "appear"
        },
        {
         "obj": "etiquette",
         "x": 54,
         "y": 24,
         "anim": "appear",
         "label": "Salle fraîche"
        }
       ],
       "budget_note": "Travaux payés une fois par l'État : le déficit augmente une fois.",
       "terme": "court"
      },
      {
       "id": "d",
       "label": "Recruter des soignants dans les maisons de retraite",
       "label_expert": "Créer des postes de soignants en Ehpad sur l'Ondam médico-social",
       "plus": "Plus de soignants présents auprès des personnes âgées.",
       "minus": "Plus d'un milliard par an, métiers difficiles à pourvoir.",
       "budget": -1,
       "axes": {
        "eco": -2
       },
       "ind": {
        "services": 3,
        "emploi": 1
       },
       "fx": [
        {
         "obj": "soignants",
         "x": 53,
         "y": 26,
         "anim": "appear",
         "count": 3
        },
        {
         "obj": "hopital",
         "x": 54,
         "y": 27,
         "anim": "pulse"
        },
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 50,
         "anim": "flow",
         "to": {
          "x": 53,
          "y": 26
         }
        }
       ],
       "budget_note": "Salaires de nouveaux soignants chaque année : le déficit augmente.",
       "terme": "long"
      },
      {
       "id": "e",
       "label": "Planter des arbres dans les villes et les cours d'école",
       "label_expert": "Financer la végétalisation urbaine et des cours d'école « oasis »",
       "plus": "Villes plus fraîches pour des décennies.",
       "minus": "Effet lent, arbres longs à pousser.",
       "budget": -0.3,
       "axes": {
        "env": -2,
        "eco": -1
       },
       "ind": {
        "co2": -1,
        "services": 1,
        "emploi": 1
       },
       "fx": [
        {
         "obj": "soignants",
         "x": 53,
         "y": 26,
         "anim": "appear",
         "count": 3
        },
        {
         "obj": "hopital",
         "x": 54,
         "y": 27,
         "anim": "pulse"
        },
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 50,
         "anim": "flow",
         "to": {
          "x": 53,
          "y": 26
         }
        }
       ],
       "budget_note": "Subventions aux communes (ordre de grandeur du Fonds vert, estimation du jeu) : le déficit augmente.",
       "terme": "long"
      }
     ],
     "multi": {
      "max": 2,
      "pairs": [
       [
        "a",
        "c"
       ],
       [
        "a",
        "d"
       ],
       [
        "c",
        "d"
       ],
       [
        "a",
        "e"
       ],
       [
        "c",
        "e"
       ]
      ],
      "hint": "Une réponse pour le court terme, une pour le long terme."
     }
    },
    {
     "id": "v22_seine",
     "kind": "banal",
     "region": "ile_de_france",
     "sector": "sante",
     "title": "On se baigne de nouveau dans la Seine",
     "simple": "Après un siècle d'interdiction, trois plages surveillées ouvrent dans Paris. Les Parisiens plongent entre les péniches. Les plus prudents regardent la couleur de l'eau.",
     "expert": "Plan baignade lancé pour les Jeux olympiques : bassin de stockage des eaux de pluie d'Austerlitz, raccordement des péniches et des habitations au tout-à-l'égout, suivi bactériologique quotidien.",
     "context": "Les jours de forte pluie, les égouts débordent encore dans la Seine : la baignade est alors fermée.",
     "real": {
      "date": "Juillet 2025 (premiers sites publics) ; plan lancé en 2015",
      "place": "Paris : Bras Marie, Grenelle, Bercy",
      "fact": "Trois sites de baignade publique surveillée ont ouvert dans la Seine, une première depuis environ cent ans, grâce au plan baignade préparé pour les Jeux.",
      "figures": "Plus de 1,4 Md€ investis par l'État, la Ville de Paris et les collectivités ; bassin d'Austerlitz de 50 000 m³.",
      "sources": [
       {
        "label": "Ville de Paris : la Seine s'ouvre à la baignade",
        "url": "https://www.paris.fr/pages/se-baigner-dans-la-seine-en-2024-et-au-dela-6935"
       }
      ]
     },
     "camera": {
      "region": "ile_de_france",
      "x": 52,
      "y": 24,
      "zoom": 2.8
     },
     "fx": [
      {
       "obj": "personnage",
       "x": 51,
       "y": 24,
       "anim": "appear",
       "count": 5
      },
      {
       "obj": "personnage",
       "x": 49,
       "y": 24,
       "anim": "move",
       "to": {
        "x": 55,
        "y": 24
       }
      },
      {
       "obj": "panneau",
       "x": 53,
       "y": 22,
       "anim": "appear",
       "label": "Baignade ouverte",
       "delay": 0.6
      },
      {
       "obj": "loupe",
       "x": 50,
       "y": 22,
       "anim": "pulse",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Ouvrir d'autres plages gratuites et surveillées",
       "label_expert": "Ouvrir de nouveaux sites de baignade surveillés par arrêté municipal",
       "plus": "Un peu de fraîcheur gratuite pour tous.",
       "minus": "Il faut payer des maîtres-nageurs en plus.",
       "budget": -0.005,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "personnage",
         "x": 54,
         "y": 25,
         "anim": "appear",
         "count": 3
        },
        {
         "obj": "panneau",
         "x": 55,
         "y": 23,
         "anim": "appear",
         "label": "Nouvelle plage"
        },
        {
         "obj": "soignants",
         "x": 53,
         "y": 24,
         "anim": "appear"
        }
       ],
       "budget_note": "Salaires des maîtres-nageurs : le déficit augmente très peu."
      },
      {
       "id": "b",
       "label": "Investir encore contre les débordements d'égouts",
       "label_expert": "Bassins de stockage des eaux pluviales contre les surverses",
       "plus": "Baignade ouverte même après la pluie.",
       "minus": "Des centaines de millions pour de gros bassins.",
       "budget": -0.05,
       "axes": {
        "env": -1
       },
       "ind": {
        "services": 1,
        "co2": -1
       },
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 50,
         "y": 26,
         "anim": "grow"
        },
        {
         "obj": "barrage",
         "x": 51,
         "y": 26,
         "anim": "appear",
         "label": "Bassin"
        },
        {
         "obj": "fleche",
         "x": 51,
         "y": 26,
         "anim": "move",
         "to": {
          "x": 52,
          "y": 24
         }
        }
       ],
       "budget_note": "Gros travaux d'assainissement aidés par l'État : le déficit augmente un peu."
      },
      {
       "id": "c",
       "label": "Fermer dès le moindre doute sur l'eau",
       "label_expert": "Fermeture préventive dès dépassement des seuils bactériologiques",
       "plus": "Aucun risque pour la santé des baigneurs.",
       "minus": "Plages souvent fermées, déception des Parisiens.",
       "budget": 0,
       "axes": {
        "soc": 1
       },
       "ind": {
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "panneau",
         "x": 53,
         "y": 22,
         "anim": "blink",
         "label": "Baignade fermée"
        },
        {
         "obj": "personnage",
         "x": 51,
         "y": 24,
         "anim": "fade",
         "count": 3
        },
        {
         "obj": "loupe",
         "x": 50,
         "y": 22,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "d",
       "label": "Arrêter de financer la baignade, garder l'argent",
       "label_expert": "Suspendre les crédits publics du plan baignade",
       "plus": "Économies, priorité à d'autres dépenses.",
       "minus": "Les rivières restent sales en été.",
       "budget": 0.05,
       "axes": {
        "eco": 1,
        "env": 1
       },
       "ind": {
        "services": -1,
        "co2": 1
       },
       "fx": [
        {
         "obj": "panneau",
         "x": 53,
         "y": 22,
         "anim": "blink",
         "label": "Économies"
        },
        {
         "obj": "personnage",
         "x": 51,
         "y": 24,
         "anim": "fade",
         "count": 3
        },
        {
         "obj": "loupe",
         "x": 50,
         "y": 22,
         "anim": "pulse"
        }
       ],
       "budget_note": "Crédits annulés (estimation du jeu) : le déficit baisse un peu."
      },
      {
       "id": "e",
       "label": "Rendre baignables les rivières de toutes les grandes villes",
       "label_expert": "Étendre l'objectif de baignade aux cours d'eau urbains",
       "plus": "Eau plus propre et loisirs gratuits partout.",
       "minus": "Gros travaux d'assainissement à financer.",
       "budget": -0.2,
       "axes": {
        "env": -2,
        "eco": -1
       },
       "ind": {
        "services": 1,
        "co2": -1,
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 50,
         "y": 26,
         "anim": "grow"
        },
        {
         "obj": "barrage",
         "x": 51,
         "y": 26,
         "anim": "appear",
         "label": "Rivières propres"
        },
        {
         "obj": "fleche",
         "x": 51,
         "y": 26,
         "anim": "move",
         "to": {
          "x": 52,
          "y": 24
         }
        }
       ],
       "budget_note": "Travaux d'assainissement aidés par l'État (estimation du jeu) : le déficit augmente."
      }
     ]
    }
   ]
  },
  {
   "day": 2,
   "season": "ete",
   "title": "Feux, colère et pharmacies vides",
   "mood": "tendu",
   "weather": "vent",
   "intro": "Semaine 2. Le vent attise les feux dans le Sud, et le débat sur l'énergie se rallume.",
   "unlock": {
    "title": "Les réformes sont ouvertes",
    "text": "À partir de cette semaine, vous pouvez lancer jusqu'à deux réformes par semaine, parmi les cinq ou six du menu Propositions. Une réforme passe par plusieurs étapes (Conseil des ministres, Parlement…) : ses effets n'arrivent qu'à la fin, et certaines peuvent bloquer ou dépendre d'un vote."
   },
   "offer": [
    "sortie_nucleaire",
    "relance_nucleaire",
    "sortie_marche_electricite",
    "assurance_chomage",
    "taxe_hauts_patrimoines",
    "peines_planchers"
   ],
   "events": [
    {
     "id": "v22_aude",
     "kind": "majeur",
     "region": "occitanie",
     "sector": "securite",
     "title": "Le plus grand incendie depuis plus de 70 ans",
     "simple": "Dans l'Aude, un feu part d'un village et avale 16 000 hectares de garrigue et de pinède en deux jours. Plus que la surface de Paris. Des villages brûlent, une habitante meurt.",
     "expert": "Feu de forêt hors norme dans les Corbières : sécheresse prolongée et restrictions d'eau, vent violent, friches et garrigue combustibles, mobilisation de plus de 2 100 sapeurs-pompiers et de bombardiers d'eau.",
     "context": "Les feux d'été touchent de plus en plus le pourtour méditerranéen et des zones longtemps épargnées.",
     "real": {
      "date": "5 août 2025 (départ du feu)",
      "place": "Ribaute et les Corbières, Aude",
      "fact": "Un incendie parti de Ribaute a brûlé au moins 16 000 hectares, le plus important en France depuis plusieurs décennies selon le ministère de la Transition écologique. Une habitante est morte, treize personnes ont été blessées.",
      "figures": "Au moins 16 000 hectares brûlés ; plus de 2 100 sapeurs-pompiers mobilisés ; 13 blessés dont 11 pompiers.",
      "sources": [
       {
        "label": "Euronews : images du plus grand incendie en France depuis des décennies",
        "url": "https://fr.euronews.com/2025/08/07/aude-images-apocalyptiques-du-plus-grand-incendie-en-france-depuis-des-decennies"
       }
      ]
     },
     "camera": {
      "region": "occitanie",
      "x": 51,
      "y": 85,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "foret",
       "x": 51,
       "y": 85,
       "anim": "appear",
       "count": 5
      },
      {
       "obj": "incendie",
       "x": 50,
       "y": 85,
       "anim": "smoke",
       "delay": 0.3
      },
      {
       "obj": "incendie",
       "x": 53,
       "y": 86,
       "anim": "smoke",
       "delay": 0.6
      },
      {
       "obj": "avion",
       "x": 60,
       "y": 80,
       "anim": "move",
       "to": {
        "x": 51,
        "y": 85
       },
       "label": "Bombardier d'eau",
       "delay": 0.9
      },
      {
       "obj": "panneau",
       "x": 49,
       "y": 82,
       "anim": "appear",
       "label": "16 000 hectares",
       "delay": 1.3
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Acheter des avions bombardiers d'eau",
       "label_expert": "Commander des Canadair inscrits en loi de programmation",
       "plus": "Plus de moyens pour attaquer les feux vite.",
       "minus": "Très cher, et des années avant la livraison.",
       "budget": -0.05,
       "once": -0.5,
       "axes": {
        "eu": 1
       },
       "ind": {
        "souverainete": 1,
        "services": 1
       },
       "fx": [
        {
         "obj": "aeroport",
         "x": 56,
         "y": 80,
         "anim": "appear",
         "stay": true
        },
        {
         "obj": "avion",
         "x": 56,
         "y": 80,
         "anim": "move",
         "to": {
          "x": 51,
          "y": 85
         },
         "count": 2
        },
        {
         "obj": "incendie",
         "x": 50,
         "y": 85,
         "anim": "fade"
        }
       ],
       "budget_note": "Achat d'avions, puis entretien chaque année : le déficit augmente."
      },
      {
       "id": "b",
       "label": "Partager les avions avec les pays européens",
       "label_expert": "Mutualiser la flotte aérienne via le dispositif européen rescEU",
       "term": "Réserve européenne rescEU",
       "plus": "Des renforts des voisins, coût partagé.",
       "minus": "Les avions manquent si tous brûlent en même temps.",
       "budget": -0.03,
       "axes": {
        "eu": -2
       },
       "ind": {
        "services": 1,
        "souverainete": -1
       },
       "fx": [
        {
         "obj": "avion",
         "x": 38,
         "y": 97,
         "anim": "move",
         "to": {
          "x": 51,
          "y": 85
         },
         "label": "Renfort européen"
        },
        {
         "obj": "drapeau_ue",
         "x": 54,
         "y": 83,
         "anim": "appear"
        },
        {
         "obj": "incendie",
         "x": 53,
         "y": 86,
         "anim": "fade"
        }
       ],
       "budget_note": "Part française de la flotte commune : le déficit augmente un peu."
      },
      {
       "id": "c",
       "label": "Débroussaillement obligatoire, avec amendes",
       "label_expert": "Contrôler les obligations légales de débroussaillement, amendes à la clé",
       "term": "Obligations légales de débroussaillement",
       "plus": "Maisons protégées, et les amendes rapportent.",
       "minus": "Coût et travail lourds pour les propriétaires.",
       "budget": 0.02,
       "axes": {
        "soc": 1
       },
       "ind": {
        "cohesion": -1,
        "co2": -1
       },
       "fx": [
        {
         "obj": "maison",
         "x": 50,
         "y": 84,
         "anim": "appear",
         "count": 3
        },
        {
         "obj": "tracteur",
         "x": 50,
         "y": 84,
         "anim": "move",
         "to": {
          "x": 52,
          "y": 85
         }
        },
        {
         "obj": "incendie",
         "x": 53,
         "y": 86,
         "anim": "fade",
         "delay": 1
        }
       ],
       "budget_note": "Amendes encaissées et feux évités : le déficit baisse un peu."
      },
      {
       "id": "d",
       "label": "Replanter des vignes et des cultures coupe-feu",
       "label_expert": "Financer des coupures agricoles coupe-feu sur crédits de la PAC",
       "plus": "Des parcelles cultivées freinent le feu.",
       "minus": "Il faut aider les agriculteurs à les entretenir.",
       "budget": -0.05,
       "axes": {
        "env": -1,
        "eco": -1
       },
       "ind": {
        "emploi": 1,
        "co2": -1
       },
       "fx": [
        {
         "obj": "champ",
         "x": 52,
         "y": 85,
         "anim": "grow",
         "count": 3,
         "stay": true
        },
        {
         "obj": "ferme",
         "x": 53,
         "y": 84,
         "anim": "appear"
        },
        {
         "obj": "incendie",
         "x": 50,
         "y": 85,
         "anim": "fade"
        }
       ],
       "budget_note": "Aides aux agriculteurs pour entretenir les parcelles : le déficit augmente un peu."
      },
      {
       "id": "e",
       "label": "Recruter des forestiers publics pour entretenir les bois",
       "label_expert": "Renforcer les effectifs de l'Office national des forêts",
       "plus": "Forêts entretenues toute l'année.",
       "minus": "Dépense durable, résultats lents.",
       "budget": -0.1,
       "axes": {
        "eco": -2
       },
       "ind": {
        "services": 1,
        "emploi": 1,
        "co2": -1
       },
       "fx": [
        {
         "obj": "champ",
         "x": 52,
         "y": 85,
         "anim": "grow",
         "count": 3,
         "stay": true
        },
        {
         "obj": "ferme",
         "x": 53,
         "y": 84,
         "anim": "appear"
        },
        {
         "obj": "incendie",
         "x": 50,
         "y": 85,
         "anim": "fade"
        }
       ],
       "budget_note": "Emplois publics nouveaux (estimation du jeu) : le déficit augmente."
      }
     ],
     "recall": [
      {
       "event": "v22_canicule_2003",
       "choice": "a",
       "text": "La semaine dernière, pendant la canicule, tu as créé un registre des personnes fragiles : les pompiers s'en servent pour évacuer d'abord les plus âgés.",
       "ind": {
        "services": 1
       }
      },
      {
       "event": "v22_canicule_2003",
       "choice": "b",
       "text": "La semaine dernière, tu as fait travailler un jour férié pour aider les aînés : l'argent finance déjà des équipes, mais la mesure reste mal acceptée."
      },
      {
       "event": "v22_canicule_2003",
       "choice": "c",
       "text": "La semaine dernière, tu as climatisé hôpitaux et maisons de retraite : les malades évacués de la zone du feu y sont accueillis au frais.",
       "ind": {
        "services": 1
       }
      },
      {
       "event": "v22_canicule_2003",
       "choice": "d",
       "text": "La semaine dernière, tu as recruté des soignants : les maisons de retraite proches du feu ont assez de bras pour déplacer leurs résidents.",
       "ind": {
        "services": 1
       }
      },
      {
       "event": "v22_canicule_2003",
       "choice": "e",
       "text": "La semaine dernière, pendant la canicule, vous avez fait planter des arbres en ville : les jeunes plants ne protègent pas encore du feu, mais la mesure est saluée."
      }
     ]
    },
    {
     "id": "v22_fukushima",
     "kind": "majeur",
     "region": "national",
     "sector": "energie",
     "title": "Une catastrophe nucléaire au Japon relance le débat",
     "simple": "Au Japon, un séisme et un tsunami provoquent un accident dans une centrale nucléaire. En France, qui tire environ deux tiers de son électricité du nucléaire, tout le monde se demande : et chez nous ?",
     "expert": "Accident de Fukushima Daiichi : perte totale d'alimentation électrique et de refroidissement. En France : évaluations complémentaires de sûreté, création d'une force d'action rapide nucléaire, « noyau dur » d'équipements résistant à des événements extrêmes.",
     "context": "Après l'accident, plusieurs pays voisins ont décidé de sortir du nucléaire ; la France a renforcé la sûreté et décidé de réduire la part du nucléaire, avant de relancer de nouveaux réacteurs des années plus tard.",
     "real": {
      "date": "11 mars 2011 (accident) ; 23 mars 2011 (évaluations demandées en France)",
      "place": "Japon ; parc nucléaire français",
      "fact": "Douze jours après l'accident, des évaluations complémentaires de sûreté de toutes les installations nucléaires françaises ont été demandées. EDF a ensuite installé des équipements de secours renforcés et créé une force d'intervention rapide.",
      "figures": "Force d'action rapide nucléaire capable d'intervenir sur un site en 24 heures ; nouveaux diesels d'ultime secours sur chaque réacteur.",
      "sources": [
       {
        "label": "IRSN : Fukushima, la sûreté des installations nucléaires en France",
        "url": "https://recherche-expertise.asnr.fr/sites/default/files/documents/connaissances/installations_nucleaires/les-accidents-nucleaires/accident-fukushima-2011/fukushima-2016/IRSN_Fukushima-surete-installations-France_201603.pdf"
       }
      ]
     },
     "camera": {
      "region": "national",
      "x": 58,
      "y": 45,
      "zoom": 1.1
     },
     "fx": [
      {
       "obj": "bulle",
       "x": 92,
       "y": 50,
       "anim": "appear",
       "label": "Accident nucléaire au Japon"
      },
      {
       "obj": "centrale_nucleaire",
       "x": 70,
       "y": 54,
       "anim": "pulse",
       "delay": 0.4
      },
      {
       "obj": "centrale_nucleaire",
       "x": 40,
       "y": 72,
       "anim": "pulse",
       "delay": 0.6
      },
      {
       "obj": "centrale_nucleaire",
       "x": 56,
       "y": 10,
       "anim": "pulse",
       "delay": 0.8
      },
      {
       "obj": "manifestants",
       "x": 52,
       "y": 25,
       "anim": "appear",
       "delay": 1.1
      },
      {
       "obj": "loupe",
       "x": 66,
       "y": 52,
       "anim": "appear",
       "delay": 1.4
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Renforcer la sûreté de tous les réacteurs",
       "label_expert": "Évaluations complémentaires de sûreté et prescriptions de l'ASN",
       "plus": "Des centrales préparées aux pires scénarios.",
       "minus": "Des milliards de travaux à la charge d'EDF.",
       "budget": 0,
       "once": -0.5,
       "axes": {
        "soc": 1
       },
       "ind": {
        "souverainete": 1,
        "cohesion": 1
       },
       "real_note": "Choix fait : évaluations de sûreté, « noyau dur » et force d'action rapide nucléaire. Le montant du jeu est une estimation de la part publique.",
       "fx": [
        {
         "obj": "cadenas",
         "x": 70,
         "y": 54,
         "anim": "appear",
         "stay": true
        },
        {
         "obj": "camion",
         "x": 64,
         "y": 50,
         "anim": "move",
         "to": {
          "x": 70,
          "y": 54
         }
        },
        {
         "obj": "centrale_nucleaire",
         "x": 70,
         "y": 54,
         "anim": "smoke"
        }
       ],
       "budget_note": "L'État actionnaire participe aux travaux de sûreté : le déficit augmente une fois."
      },
      {
       "id": "b",
       "label": "Fermer tout de suite les plus vieux réacteurs",
       "label_expert": "Arrêt anticipé des plus vieux réacteurs, indemnisation de l'exploitant",
       "plus": "Moins de risque sur les centrales les plus âgées.",
       "minus": "L'État indemnise EDF et la production baisse.",
       "budget": -0.1,
       "once": -0.4,
       "axes": {
        "env": -1
       },
       "ind": {
        "souverainete": -2,
        "emploi": -1
       },
       "fx": [
        {
         "obj": "centrale_nucleaire",
         "x": 78,
         "y": 26,
         "anim": "close",
         "label": "Fermée"
        },
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 24,
         "anim": "flow",
         "to": {
          "x": 78,
          "y": 26
         }
        },
        {
         "obj": "usine_fermee",
         "x": 78,
         "y": 28,
         "anim": "appear"
        }
       ],
       "budget_note": "Indemnité versée à l'exploitant et production perdue : le déficit augmente."
      },
      {
       "id": "c",
       "label": "Réduire à la moitié la part du nucléaire",
       "label_expert": "Plafonner la part du nucléaire à 50 % du mix électrique",
       "plus": "Un mix plus varié, plus de renouvelables.",
       "minus": "Il faut construire vite éoliennes et réseaux.",
       "budget": -1,
       "axes": {
        "env": -2,
        "eu": -1
       },
       "ind": {
        "co2": 1,
        "souverainete": -2,
        "emploi": 1
       },
       "fx": [
        {
         "obj": "eolienne",
         "x": 30,
         "y": 40,
         "anim": "grow",
         "count": 4,
         "stay": true
        },
        {
         "obj": "panneaux_solaires",
         "x": 45,
         "y": 75,
         "anim": "grow",
         "count": 2
        },
        {
         "obj": "centrale_nucleaire",
         "x": 56,
         "y": 10,
         "anim": "fade"
        }
       ],
       "budget_note": "Soutien public aux énergies de remplacement : le déficit augmente."
      },
      {
       "id": "d",
       "label": "Prolonger les réacteurs actuels après travaux",
       "label_expert": "Prolonger les réacteurs au-delà de quarante ans (grand carénage)",
       "term": "Grand carénage",
       "plus": "Électricité bas carbone garantie et dividendes pour l'État.",
       "minus": "Centrales vieillissantes, une partie de l'opinion inquiète.",
       "budget": 0.3,
       "axes": {
        "env": 1,
        "eu": 1
       },
       "ind": {
        "souverainete": 2,
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 70,
         "y": 56,
         "anim": "grow"
        },
        {
         "obj": "centrale_nucleaire",
         "x": 70,
         "y": 54,
         "anim": "smoke"
        },
        {
         "obj": "pieces",
         "x": 70,
         "y": 52,
         "anim": "rise"
        }
       ],
       "budget_note": "Électricité produite sans nouvelle centrale, dividendes en plus : le déficit baisse."
      },
      {
       "id": "e",
       "label": "Construire de nouveaux réacteurs nucléaires",
       "label_expert": "Lancer un programme de six réacteurs de nouvelle génération",
       "plus": "Électricité bas carbone pour un siècle.",
       "minus": "Chantiers très coûteux, retards fréquents.",
       "budget": -1,
       "axes": {
        "env": 1,
        "eu": 1
       },
       "ind": {
        "souverainete": 3,
        "emploi": 1,
        "co2": -1,
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 70,
         "y": 56,
         "anim": "grow"
        },
        {
         "obj": "centrale_nucleaire",
         "x": 70,
         "y": 54,
         "anim": "smoke"
        },
        {
         "obj": "pieces",
         "x": 70,
         "y": 52,
         "anim": "rise"
        }
       ],
       "budget_note": "Six réacteurs chiffrés à environ 73 Md€ par l'électricien public, en partie aidés par l'État : le déficit augmente."
      }
     ]
    },
    {
     "id": "v22_medicaments",
     "kind": "banal",
     "region": "bourgogne_franche_comte",
     "sector": "sante",
     "title": "Pas d'antibiotique pour les enfants",
     "simple": "À Dijon, la pharmacienne n'a plus d'amoxicilline en sirop. Les parents font trois pharmacies. Les médicaments sont fabriqués en Asie, et les usines n'arrivent pas à suivre.",
     "expert": "Tensions d'approvisionnement : dépendance aux principes actifs produits en Asie, prix bas des médicaments anciens qui découragent la production en Europe, obligations de stocks de sécurité.",
     "context": "Les ruptures de médicaments sont devenues bien plus fréquentes ces dernières années.",
     "real": {
      "date": "Hiver 2022-2023 (amoxicilline) ; bilan ANSM 2023",
      "place": "Pharmacies de toute la France",
      "fact": "Les signalements de ruptures et de risques de ruptures de médicaments ont atteint un record, avec notamment des pénuries d'amoxicilline pour enfants.",
      "figures": "4 925 signalements de ruptures ou risques de ruptures en un an, contre 3 761 l'année précédente (+30 %).",
      "sources": [
       {
        "label": "Le Quotidien du pharmacien : ruptures de stock, records battus",
        "url": "https://www.lequotidiendupharmacien.fr/exercice-pro/ruptures-de-stock-records-battus-en-2023"
       }
      ]
     },
     "camera": {
      "region": "bourgogne_franche_comte",
      "x": 66,
      "y": 40,
      "zoom": 2.6
     },
     "fx": [
      {
       "obj": "commerce",
       "x": 66,
       "y": 40,
       "anim": "appear",
       "label": "Pharmacie"
      },
      {
       "obj": "file_attente",
       "x": 67,
       "y": 42,
       "anim": "appear",
       "delay": 0.4
      },
      {
       "obj": "cargo",
       "x": 99,
       "y": 80,
       "anim": "move",
       "to": {
        "x": 78,
        "y": 86
       },
       "label": "Médicaments importés",
       "delay": 0.8
      },
      {
       "obj": "etiquette",
       "x": 66,
       "y": 37,
       "anim": "blink",
       "label": "Rupture",
       "delay": 1.2
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Aider à relocaliser la production en France",
       "label_expert": "Aides publiques à la relocalisation des principes actifs",
       "plus": "Moins de dépendance à l'Asie, des emplois ici.",
       "minus": "Plus cher, et des années avant les premières usines.",
       "budget": 0,
       "once": -0.1,
       "axes": {
        "eu": 1,
        "eco": -1
       },
       "ind": {
        "souverainete": 1,
        "emploi": 1
       },
       "fx": [
        {
         "obj": "usine",
         "x": 68,
         "y": 42,
         "anim": "grow",
         "stay": true
        },
        {
         "obj": "camion",
         "x": 68,
         "y": 42,
         "anim": "move",
         "to": {
          "x": 66,
          "y": 40
         }
        },
        {
         "obj": "cargo",
         "x": 78,
         "y": 86,
         "anim": "fade"
        }
       ],
       "budget_note": "Subventions ponctuelles aux usines : le déficit augmente une fois."
      },
      {
       "id": "b",
       "label": "Imposer des stocks de quatre mois aux laboratoires",
       "label_expert": "Obligation de stock de sécurité de quatre mois par décret",
       "plus": "Une réserve en cas de pénurie mondiale.",
       "minus": "Coûteux pour les labos, qui peuvent se retirer.",
       "budget": 0,
       "axes": {
        "soc": 1
       },
       "ind": {
        "services": 1
       },
       "fx": [
        {
         "obj": "entrepot",
         "x": 64,
         "y": 42,
         "anim": "appear",
         "label": "Stocks"
        },
        {
         "obj": "colis",
         "x": 65,
         "y": 41,
         "anim": "appear",
         "count": 3
        },
        {
         "obj": "file_attente",
         "x": 67,
         "y": 42,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "c",
       "label": "Vendre les antibiotiques à l'unité",
       "label_expert": "Autoriser la dispensation à l'unité en officine",
       "plus": "Moins de gaspillage, économies pour la Sécu.",
       "minus": "Plus de travail au comptoir des pharmacies.",
       "budget": 0.01,
       "axes": {
        "env": -1
       },
       "ind": {
        "services": 1
       },
       "fx": [
        {
         "obj": "colis",
         "x": 66,
         "y": 40,
         "anim": "appear"
        },
        {
         "obj": "pieces",
         "x": 66,
         "y": 38,
         "anim": "rise"
        },
        {
         "obj": "personnage",
         "x": 67,
         "y": 42,
         "anim": "appear",
         "count": 2
        }
       ],
       "budget_note": "Moins de boîtes remboursées pour rien : le déficit baisse un peu."
      },
      {
       "id": "d",
       "label": "Créer un fabricant public de médicaments",
       "label_expert": "Créer un pôle public du médicament pour les produits essentiels",
       "plus": "Production garantie des médicaments vitaux.",
       "minus": "Coût pour l'État, gestion publique lente.",
       "budget": -0.1,
       "axes": {
        "eco": -2,
        "eu": 1
       },
       "ind": {
        "souverainete": 2,
        "emploi": 1
       },
       "fx": [
        {
         "obj": "usine",
         "x": 68,
         "y": 42,
         "anim": "grow",
         "stay": true
        },
        {
         "obj": "camion",
         "x": 68,
         "y": 42,
         "anim": "move",
         "to": {
          "x": 66,
          "y": 40
         }
        },
        {
         "obj": "cargo",
         "x": 78,
         "y": 86,
         "anim": "fade"
        }
       ],
       "once": -0.3,
       "budget_note": "Création et fonctionnement de l'établissement (estimation du jeu) : le déficit augmente."
      },
      {
       "id": "e",
       "label": "Doubler la somme payée par le patient sur chaque boîte",
       "label_expert": "Doubler la franchise médicale par boîte de médicament",
       "plus": "Économies pour l'Assurance maladie.",
       "minus": "Pèse sur les malades chroniques.",
       "budget": 0.75,
       "axes": {
        "eco": 1
       },
       "ind": {
        "pouvoir_achat": -1,
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "colis",
         "x": 66,
         "y": 40,
         "anim": "appear"
        },
        {
         "obj": "pieces",
         "x": 66,
         "y": 38,
         "anim": "rise"
        },
        {
         "obj": "personnage",
         "x": 67,
         "y": 42,
         "anim": "appear",
         "count": 2
        }
       ],
       "budget_note": "Environ 0,75 Md€ d'économies selon la presse économique (Les Echos) : le déficit baisse."
      }
     ]
    },
    {
     "id": "v22_emeutes",
     "kind": "majeur",
     "region": "ile_de_france",
     "sector": "securite",
     "title": "Nuits d'émeutes après la mort d'un adolescent",
     "simple": "À Nanterre, un adolescent de 17 ans est tué par un policier lors d'un contrôle routier. Pendant plusieurs nuits, des émeutes éclatent dans de nombreuses villes. Mairies, écoles, commerces et voitures sont incendiés.",
     "expert": "Violences urbaines après un tir policier mortel lors d'un refus d'obtempérer : dégradations de bâtiments publics et commerces, mobilisation massive des forces de l'ordre, débat sur l'usage des armes, la politique de la ville et la responsabilité des familles.",
     "context": "Le sujet touche à la fois la sécurité, la confiance envers la police, la situation des quartiers populaires et l'enquête judiciaire en cours.",
     "real": {
      "date": "27 juin 2023 et nuits suivantes",
      "place": "Nanterre puis de nombreuses villes de France",
      "fact": "Après la mort de Nahel, 17 ans, tué par un policier lors d'un contrôle routier, des émeutes ont touché de nombreuses communes pendant plusieurs nuits.",
      "figures": "Dégâts assurés estimés à 650 M€ par les assureurs (11 300 sinistres), dont 35 % sur des biens des collectivités.",
      "sources": [
       {
        "label": "MoneyVox : les émeutes vont coûter 650 millions d'euros aux assureurs",
        "url": "https://www.moneyvox.fr/assurance/actualites/93603/les-emeutes-vont-couter-650-millions-euros-aux-compagnies"
       }
      ]
     },
     "camera": {
      "region": "ile_de_france",
      "x": 51,
      "y": 24,
      "zoom": 2.2
     },
     "fx": [
      {
       "obj": "voiture",
       "x": 50,
       "y": 23,
       "anim": "smoke",
       "count": 3
      },
      {
       "obj": "mairie",
       "x": 53,
       "y": 25,
       "anim": "shake",
       "delay": 0.4
      },
      {
       "obj": "voiture_police",
       "x": 47,
       "y": 22,
       "anim": "move",
       "to": {
        "x": 51,
        "y": 24
       },
       "count": 3,
       "delay": 0.7
      },
      {
       "obj": "foule",
       "x": 52,
       "y": 26,
       "anim": "appear",
       "delay": 1
      },
      {
       "obj": "panneau",
       "x": 50,
       "y": 20,
       "anim": "appear",
       "label": "Plusieurs nuits de violences",
       "delay": 1.3
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Renforts massifs de police et couvre-feux locaux",
       "label_expert": "Renforts de forces mobiles et arrêtés préfectoraux de couvre-feu",
       "plus": "Le calme revient plus vite dans les rues.",
       "minus": "Tensions accrues avec une partie des habitants.",
       "budget": -0.1,
       "axes": {
        "soc": 2
       },
       "ind": {
        "cohesion": -1,
        "services": 1
       },
       "fx": [
        {
         "obj": "policiers",
         "x": 51,
         "y": 24,
         "anim": "appear",
         "count": 3
        },
        {
         "obj": "voiture_police",
         "x": 53,
         "y": 26,
         "anim": "move",
         "to": {
          "x": 51,
          "y": 24
         }
        },
        {
         "obj": "voiture",
         "x": 50,
         "y": 23,
         "anim": "fade"
        }
       ],
       "budget_note": "Heures et déplacements des forces de l'ordre : le déficit augmente un peu.",
       "terme": "court"
      },
      {
       "id": "b",
       "label": "Plan pour les quartiers : écoles, emploi, transports",
       "label_expert": "Programme de renouvellement urbain et crédits de la politique de la ville",
       "plus": "Agit sur les causes profondes du malaise.",
       "minus": "Coûteux, et effets visibles dans des années.",
       "budget": -0.5,
       "axes": {
        "soc": -1,
        "eco": -1
       },
       "ind": {
        "cohesion": 2,
        "emploi": 1
       },
       "fx": [
        {
         "obj": "ecole",
         "x": 52,
         "y": 26,
         "anim": "grow"
        },
        {
         "obj": "bus",
         "x": 48,
         "y": 26,
         "anim": "move",
         "to": {
          "x": 53,
          "y": 26
         }
        },
        {
         "obj": "chantier_grue",
         "x": 50,
         "y": 27,
         "anim": "appear"
        }
       ],
       "budget_note": "Écoles, emplois aidés et transports à financer : le déficit augmente.",
       "terme": "long"
      },
      {
       "id": "c",
       "label": "Enquête indépendante et dialogue police-population",
       "label_expert": "Commission d'enquête indépendante sur les relations police-population",
       "plus": "Renouer la confiance des deux côtés.",
       "minus": "Une partie des policiers se sent mise en cause.",
       "budget": -0.01,
       "axes": {
        "soc": -2
       },
       "ind": {
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "loupe",
         "x": 51,
         "y": 22,
         "anim": "pulse"
        },
        {
         "obj": "personnage",
         "x": 51,
         "y": 24,
         "anim": "appear",
         "count": 2
        },
        {
         "obj": "policiers",
         "x": 53,
         "y": 24,
         "anim": "appear"
        }
       ],
       "budget_note": "Coût de fonctionnement de la commission : le déficit augmente très peu.",
       "terme": "long"
      },
      {
       "id": "d",
       "label": "Faire payer les dégâts aux auteurs condamnés",
       "label_expert": "Engager la responsabilité civile des auteurs, action récursoire de l'État",
       "plus": "Les contribuables ne paient pas tout.",
       "minus": "Les sommes sont souvent impossibles à récupérer.",
       "budget": 0.02,
       "axes": {
        "soc": 1,
        "eco": 1
       },
       "ind": {
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "etiquette",
         "x": 53,
         "y": 22,
         "anim": "appear",
         "label": "Réparations"
        },
        {
         "obj": "pieces",
         "x": 53,
         "y": 25,
         "anim": "rise"
        },
        {
         "obj": "mairie",
         "x": 53,
         "y": 25,
         "anim": "appear"
        }
       ],
       "budget_note": "Une partie des dégâts remboursée par les auteurs : le déficit baisse un peu.",
       "terme": "court"
      },
      {
       "id": "e",
       "label": "Suspendre les allocations des parents de mineurs condamnés",
       "label_expert": "Suspendre les allocations familiales des parents de mineurs délinquants",
       "plus": "Responsabilise les familles.",
       "minus": "Punit aussi les frères et sœurs.",
       "budget": 0.01,
       "axes": {
        "soc": 2
       },
       "ind": {
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "etiquette",
         "x": 53,
         "y": 22,
         "anim": "appear",
         "label": "Allocations"
        },
        {
         "obj": "pieces",
         "x": 53,
         "y": 25,
         "anim": "rise"
        },
        {
         "obj": "mairie",
         "x": 53,
         "y": 25,
         "anim": "appear"
        }
       ],
       "budget_note": "Allocations suspendues : petite économie, le déficit baisse à peine.",
       "terme": "long"
      }
     ],
     "multi": {
      "max": 2,
      "pairs": [
       [
        "a",
        "b"
       ],
       [
        "b",
        "c"
       ],
       [
        "c",
        "d"
       ],
       [
        "b",
        "d"
       ],
       [
        "a",
        "e"
       ],
       [
        "d",
        "e"
       ]
      ],
      "hint": "Une réponse pour le court terme, une pour le long terme."
     }
    }
   ]
  },
  {
   "day": 3,
   "season": "automne",
   "title": "Une rentrée à haut risque",
   "mood": "tendu",
   "weather": "vent",
   "intro": "Semaine 3. Une usine s'éteint, une île du Pacifique s'embrase, un virus revient.",
   "offer": [
    "report_age_65",
    "referendum_immigration",
    "lutte_fraude",
    "regularisation_metiers_tension",
    "taxe_billets_premium"
   ],
   "events": [
    {
     "id": "v22_florange",
     "kind": "majeur",
     "region": "grand_est",
     "sector": "salaires",
     "title": "Les hauts-fourneaux de Florange s'éteignent",
     "simple": "En Moselle, le géant de l'acier veut fermer pour de bon ses deux hauts-fourneaux. 629 emplois sont en jeu. Un ministre parle de nationaliser l'usine.",
     "expert": "Arrêt définitif de la filière liquide d'un site sidérurgique : surcapacités européennes, concurrence de l'acier importé, débat sur la nationalisation temporaire, la reprise du site et les engagements d'investissement du groupe.",
     "context": "L'acier européen reste fragilisé par l'acier importé à bas prix et par le coût de l'énergie et du carbone.",
     "real": {
      "date": "Octobre à décembre 2012",
      "place": "Florange, Moselle",
      "fact": "Après des semaines de débat sur une nationalisation temporaire, un accord avec le groupe a confirmé l'arrêt des hauts-fourneaux, sans plan social, avec des reclassements sur le même site et des investissements promis.",
      "figures": "629 salariés concernés ; environ 180 M€ d'investissements promis par le groupe sur cinq ans.",
      "sources": [
       {
        "label": "Économie Matin : Florange, les hauts-fourneaux ne redémarreront pas",
        "url": "https://www.economiematin.fr/news-florange-arcelormittal-fourneaux-ayrault-accord"
       }
      ]
     },
     "camera": {
      "region": "grand_est",
      "x": 74,
      "y": 18,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "usine",
       "x": 74,
       "y": 18,
       "anim": "smoke",
       "label": "Hauts-fourneaux"
      },
      {
       "obj": "manifestants",
       "x": 72,
       "y": 20,
       "anim": "appear",
       "delay": 0.4
      },
      {
       "obj": "cargo",
       "x": 32,
       "y": 7,
       "anim": "move",
       "to": {
        "x": 40,
        "y": 7
       },
       "label": "Acier importé",
       "delay": 0.8
      },
      {
       "obj": "bulle",
       "x": 76,
       "y": 15,
       "anim": "appear",
       "label": "629 emplois",
       "delay": 1.2
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Nationaliser l'usine le temps de trouver un repreneur",
       "label_expert": "Nationalisation temporaire avant cession à un repreneur",
       "term": "Nationalisation temporaire",
       "plus": "Les emplois et le savoir-faire restent en France.",
       "minus": "L'État prend le risque de lourdes pertes.",
       "budget": -0.1,
       "once": -1,
       "axes": {
        "eco": -2,
        "eu": 1
       },
       "ind": {
        "emploi": 1,
        "souverainete": 2
       },
       "fx": [
        {
         "obj": "drapeau_ue",
         "x": 74,
         "y": 15,
         "anim": "fade"
        },
        {
         "obj": "usine",
         "x": 74,
         "y": 18,
         "anim": "pulse",
         "label": "Propriété de l'État"
        },
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 24,
         "anim": "flow",
         "to": {
          "x": 74,
          "y": 18
         }
        }
       ],
       "budget_note": "Rachat de l'usine et pertes à couvrir : le déficit augmente."
      },
      {
       "id": "b",
       "label": "Accord : pas de licenciement, reclassement sur place",
       "label_expert": "Accord de site sans licenciement, reclassement interne garanti",
       "plus": "Personne n'est licencié, le site continue.",
       "minus": "Les hauts-fourneaux restent éteints pour de bon.",
       "budget": 0,
       "axes": {
        "eco": 1
       },
       "ind": {
        "emploi": -1,
        "cohesion": -1
       },
       "real_note": "Choix fait : accord avec le groupe, arrêt des hauts-fourneaux sans plan social, environ 180 M€ d'investissements promis.",
       "fx": [
        {
         "obj": "usine_fermee",
         "x": 74,
         "y": 18,
         "anim": "close"
        },
        {
         "obj": "usine",
         "x": 76,
         "y": 20,
         "anim": "appear",
         "label": "Filière froide"
        },
        {
         "obj": "personnage",
         "x": 74,
         "y": 20,
         "anim": "move",
         "to": {
          "x": 76,
          "y": 20
         },
         "count": 3
        }
       ]
      },
      {
       "id": "c",
       "label": "Taxer l'acier importé selon son carbone",
       "label_expert": "Porter un mécanisme d'ajustement carbone aux frontières de l'UE",
       "term": "Mécanisme d'ajustement carbone aux frontières",
       "plus": "L'acier européen propre devient compétitif.",
       "minus": "Acier plus cher pour l'industrie et le bâtiment.",
       "budget": 0.1,
       "axes": {
        "eu": -1,
        "env": -1
       },
       "ind": {
        "souverainete": 1,
        "co2": -1,
        "pouvoir_achat": -1
       },
       "fx": [
        {
         "obj": "douane",
         "x": 56,
         "y": 6,
         "anim": "appear",
         "stay": true
        },
        {
         "obj": "cargo",
         "x": 40,
         "y": 7,
         "anim": "move",
         "to": {
          "x": 32,
          "y": 7
         }
        },
        {
         "obj": "pieces",
         "x": 56,
         "y": 8,
         "anim": "rise"
        }
       ],
       "budget_note": "Taxe perçue sur l'acier importé : le déficit baisse un peu."
      },
      {
       "id": "d",
       "label": "Laisser fermer et aider la reconversion",
       "label_expert": "Contrat de revitalisation du bassin et cellule de reclassement",
       "plus": "Pas d'argent public dans un site non rentable.",
       "minus": "Une vallée perd son industrie historique.",
       "budget": -0.03,
       "axes": {
        "eco": 2
       },
       "ind": {
        "emploi": -2,
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "usine_fermee",
         "x": 74,
         "y": 18,
         "anim": "close"
        },
        {
         "obj": "ecole",
         "x": 72,
         "y": 20,
         "anim": "appear",
         "label": "Formation"
        },
        {
         "obj": "personnage",
         "x": 72,
         "y": 20,
         "anim": "appear",
         "count": 2
        }
       ],
       "budget_note": "Aides à la reconversion des salariés : le déficit augmente un peu."
      },
      {
       "id": "e",
       "label": "Faire rembourser les aides publiques si l'usine ferme",
       "label_expert": "Conditionner les aides publiques au maintien de l'emploi",
       "plus": "L'argent public ne finance pas les fermetures.",
       "minus": "Les investisseurs peuvent hésiter.",
       "budget": 0.05,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1,
        "emploi": -1
       },
       "fx": [
        {
         "obj": "usine_fermee",
         "x": 74,
         "y": 18,
         "anim": "close"
        },
        {
         "obj": "usine",
         "x": 76,
         "y": 20,
         "anim": "appear",
         "label": "Aides remboursées"
        },
        {
         "obj": "personnage",
         "x": 74,
         "y": 20,
         "anim": "move",
         "to": {
          "x": 76,
          "y": 20
         },
         "count": 3
        }
       ],
       "budget_note": "Aides récupérées (estimation du jeu) : le déficit baisse un peu."
      }
     ]
    },
    {
     "id": "v22_caledonie",
     "kind": "majeur",
     "region": "outre_mer",
     "sector": "securite",
     "title": "La Nouvelle-Calédonie s'embrase",
     "simple": "À Nouméa, une réforme du droit de vote aux élections locales met le feu aux poudres. Barrages, pillages, entreprises incendiées. Il y a des morts. L'économie de l'île s'effondre.",
     "expert": "Crise insurrectionnelle après le vote d'une révision constitutionnelle élargissant le corps électoral provincial : état d'urgence, renforts de forces de l'ordre, 700 entreprises détruites ou pillées, chômage partiel massif.",
     "context": "L'avenir institutionnel de la Nouvelle-Calédonie fait l'objet d'accords successifs et de profondes divisions entre indépendantistes et non-indépendantistes.",
     "real": {
      "date": "13 mai 2024 et semaines suivantes",
      "place": "Nouméa et Grand Nouméa, Nouvelle-Calédonie",
      "fact": "Des violences ont éclaté après le vote de la réforme du corps électoral. L'état d'urgence a été déclaré ; la réforme a ensuite été suspendue.",
      "figures": "Coût de la crise : environ 2,2 Md€ (1,2 privé, 1 public) selon le gouvernement local ; 700 entreprises touchées ; environ 24 000 personnes au chômage total ou partiel ; plus de 250 M€ d'aide de l'État dans un premier temps.",
      "sources": [
       {
        "label": "Boursorama / AFP : le coût de la crise évalué à 2,2 milliards d'euros",
        "url": "https://www.boursorama.com/actualite-economique/actualites-amp/nouvelle-caledonie-le-cout-de-la-crise-evalue-a-2-2-milliards-d-euros-selon-le-gouvernement-local-89eeca30cde1e5bcd417429cd08aff88"
       }
      ]
     },
     "camera": {
      "region": "outre_mer",
      "x": 7,
      "y": 90,
      "zoom": 2.6
     },
     "fx": [
      {
       "obj": "commerce",
       "x": 6,
       "y": 89,
       "anim": "smoke",
       "count": 2
      },
      {
       "obj": "barrage_agricole",
       "x": 8,
       "y": 91,
       "anim": "appear",
       "delay": 0.4
      },
      {
       "obj": "avion",
       "x": 30,
       "y": 99,
       "anim": "move",
       "to": {
        "x": 7,
        "y": 90
       },
       "label": "Renforts",
       "delay": 0.8
      },
      {
       "obj": "panneau",
       "x": 7,
       "y": 86,
       "anim": "appear",
       "label": "État d'urgence",
       "delay": 1.2
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "État d'urgence et renforts de gendarmes",
       "label_expert": "Décréter l'état d'urgence et projeter des escadrons de gendarmerie",
       "plus": "L'ordre revient, les routes rouvrent.",
       "minus": "Tensions accrues, la crise politique demeure.",
       "budget": 0,
       "once": -0.2,
       "axes": {
        "soc": 2
       },
       "ind": {
        "cohesion": -1,
        "services": 1
       },
       "real_note": "L'état d'urgence a été déclaré et des renforts envoyés.",
       "fx": [
        {
         "obj": "policiers",
         "x": 7,
         "y": 90,
         "anim": "appear",
         "count": 3
        },
        {
         "obj": "barrage_agricole",
         "x": 8,
         "y": 91,
         "anim": "fade"
        },
        {
         "obj": "voiture_police",
         "x": 5,
         "y": 92,
         "anim": "move",
         "to": {
          "x": 8,
          "y": 90
         }
        }
       ],
       "budget_note": "Envoi et séjour des renforts : le déficit augmente une fois.",
       "terme": "court"
      },
      {
       "id": "b",
       "label": "Suspendre la réforme et rouvrir le dialogue",
       "label_expert": "Suspendre la révision constitutionnelle sur le corps électoral",
       "plus": "Le calme peut revenir par la négociation.",
       "minus": "Une partie des habitants se sent abandonnée.",
       "budget": 0,
       "axes": {
        "soc": -1,
        "eu": -1
       },
       "ind": {
        "cohesion": 2,
        "souverainete": -1
       },
       "real_note": "La réforme a ensuite été suspendue et des discussions institutionnelles relancées.",
       "fx": [
        {
         "obj": "personnage",
         "x": 7,
         "y": 90,
         "anim": "appear",
         "count": 3,
         "label": "Dialogue"
        },
        {
         "obj": "mairie",
         "x": 6,
         "y": 88,
         "anim": "appear"
        },
        {
         "obj": "commerce",
         "x": 6,
         "y": 89,
         "anim": "fade"
        }
       ],
       "terme": "court"
      },
      {
       "id": "c",
       "label": "Grand plan de reconstruction de l'économie",
       "label_expert": "Plan de reconstruction sur crédits exceptionnels de la mission Outre-mer",
       "plus": "Entreprises et emplois reviennent plus vite.",
       "minus": "Plus d'un milliard d'argent public engagé.",
       "budget": 0,
       "once": -1,
       "axes": {
        "eco": -1
       },
       "ind": {
        "emploi": 2,
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 6,
         "y": 89,
         "anim": "grow",
         "stay": true
        },
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 50,
         "anim": "flow",
         "to": {
          "x": 7,
          "y": 90
         }
        },
        {
         "obj": "commerce",
         "x": 8,
         "y": 88,
         "anim": "appear"
        }
       ],
       "budget_note": "Plus d'un milliard d'aides versées une fois : le déficit augmente.",
       "terme": "long"
      },
      {
       "id": "d",
       "label": "Prêter plutôt que donner, contre des réformes locales",
       "label_expert": "Prêt garanti par l'État, conditionné à une réforme fiscale locale",
       "plus": "L'argent public revient avec les intérêts.",
       "minus": "Conditions mal vécues par les élus locaux.",
       "budget": 0.05,
       "once": -0.3,
       "axes": {
        "eco": 1
       },
       "ind": {
        "emploi": 1,
        "cohesion": -1
       },
       "followup": "Les premiers remboursements du prêt arrivent, avec les intérêts.",
       "followup_in": 2,
       "followup_budget": 0.3,
       "fx": [
        {
         "obj": "pieces",
         "x": 7,
         "y": 88,
         "anim": "rise"
        },
        {
         "obj": "etiquette",
         "x": 7,
         "y": 86,
         "anim": "appear",
         "label": "Prêt de l'État"
        },
        {
         "obj": "commerce",
         "x": 8,
         "y": 88,
         "anim": "appear"
        }
       ],
       "budget_note": "Le prêt sort une fois puis est remboursé avec intérêts : le déficit baisse ensuite.",
       "terme": "long"
      },
      {
       "id": "e",
       "label": "Négocier un nouveau statut avec une large autonomie",
       "label_expert": "Négocier un statut d'État associé au sein de la République",
       "plus": "Une sortie politique durable à la crise.",
       "minus": "Accord fragile, contesté des deux côtés.",
       "budget": 0,
       "axes": {
        "soc": -1,
        "eu": -1
       },
       "ind": {
        "cohesion": 1,
        "souverainete": -1
       },
       "fx": [
        {
         "obj": "personnage",
         "x": 7,
         "y": 90,
         "anim": "appear",
         "count": 3,
         "label": "Nouveau statut"
        },
        {
         "obj": "mairie",
         "x": 6,
         "y": 88,
         "anim": "appear"
        },
        {
         "obj": "commerce",
         "x": 6,
         "y": 89,
         "anim": "fade"
        }
       ],
       "terme": "long"
      }
     ],
     "multi": {
      "max": 2,
      "pairs": [
       [
        "b",
        "c"
       ],
       [
        "c",
        "d"
       ],
       [
        "a",
        "e"
       ],
       [
        "b",
        "e"
       ]
      ],
      "hint": "Une réponse pour le court terme, une pour le long terme."
     }
    },
    {
     "id": "v22_louvre",
     "kind": "banal",
     "region": "ile_de_france",
     "sector": "securite",
     "title": "Les bijoux de la Couronne volés au Louvre",
     "simple": "Un dimanche matin, des voleurs montent avec un monte-charge jusqu'à une fenêtre du Louvre. En moins de sept minutes, ils repartent avec des bijoux historiques. Le musée le plus visité du monde est sous le choc.",
     "expert": "Vol dans la galerie d'Apollon : intrusion par l'extérieur, préjudice estimé à 88 M€. La Cour des comptes reproche au musée d'avoir privilégié les acquisitions et opérations visibles au détriment de la sécurité.",
     "context": "Les musées nationaux sont financés en partie par l'État et en partie par la billetterie.",
     "real": {
      "date": "19 octobre 2025",
      "place": "Musée du Louvre, galerie d'Apollon, Paris",
      "fact": "Des voleurs ont dérobé huit objets des joyaux de la Couronne en moins de sept minutes. La Cour des comptes a ensuite critiqué le retard des investissements de sécurité du musée.",
      "figures": "Préjudice estimé à 88 M€ par la conservatrice du musée ; vol en moins de 7 minutes.",
      "sources": [
       {
        "label": "Euronews : cambriolage au Louvre, le préjudice évalué à 88 millions d'euros",
        "url": "https://fr.euronews.com/2025/10/22/cambriolage-au-louvre-le-prejudice-evalue-par-le-musee-a-88-millions-deuros"
       },
       {
        "label": "Brut : le Louvre a privilégié l'attractivité au détriment de la sécurité, selon la Cour des comptes",
        "url": "https://www.brut.media/fr/articles/le-musee-du-louvre-a-privilegie-les-operations-visibles-et-attractives-au-detriment-de-la-securite-estime-la-cour-des-comptes"
       }
      ]
     },
     "camera": {
      "region": "ile_de_france",
      "x": 52,
      "y": 24,
      "zoom": 2.8
     },
     "fx": [
      {
       "obj": "parlement",
       "x": 52,
       "y": 24,
       "anim": "appear",
       "label": "Louvre"
      },
      {
       "obj": "camion",
       "x": 49,
       "y": 25,
       "anim": "move",
       "to": {
        "x": 51,
        "y": 24
       },
       "delay": 0.3
      },
      {
       "obj": "cadenas",
       "x": 52,
       "y": 22,
       "anim": "shake",
       "delay": 0.7
      },
      {
       "obj": "bulle",
       "x": 55,
       "y": 21,
       "anim": "appear",
       "label": "7 minutes",
       "delay": 1.1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Plan d'urgence pour la sécurité des musées",
       "label_expert": "Plan pluriannuel de sûreté des musées nationaux",
       "plus": "Caméras et alarmes modernes dans tous les musées.",
       "minus": "Des dizaines de millions, moins pour les expositions.",
       "budget": 0,
       "once": -0.1,
       "axes": {
        "soc": 1
       },
       "ind": {
        "services": 1
       },
       "fx": [
        {
         "obj": "cadenas",
         "x": 52,
         "y": 22,
         "anim": "appear",
         "stay": true
        },
        {
         "obj": "antenne",
         "x": 54,
         "y": 24,
         "anim": "spin"
        },
        {
         "obj": "policiers",
         "x": 51,
         "y": 25,
         "anim": "appear"
        }
       ],
       "budget_note": "Caméras, alarmes et gardiens en plus : le déficit augmente une fois."
      },
      {
       "id": "b",
       "label": "Billet plus cher pour les visiteurs hors d'Europe",
       "label_expert": "Tarification différenciée pour les visiteurs extra-européens",
       "plus": "Les touristes financent la sécurité du musée.",
       "minus": "Image moins accueillante, débat sur l'égalité.",
       "budget": 0.03,
       "axes": {
        "eu": 1
       },
       "ind": {
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "file_attente",
         "x": 52,
         "y": 26,
         "anim": "appear"
        },
        {
         "obj": "etiquette",
         "x": 52,
         "y": 21,
         "anim": "appear",
         "label": "Nouveau tarif"
        },
        {
         "obj": "pieces",
         "x": 52,
         "y": 23,
         "anim": "rise"
        }
       ],
       "budget_note": "Recettes de billetterie en plus : le déficit baisse un peu."
      },
      {
       "id": "c",
       "label": "Laisser chaque musée gérer sa sécurité",
       "label_expert": "Renvoyer la sûreté à l'autonomie de chaque établissement public",
       "plus": "Chaque direction connaît ses bâtiments.",
       "minus": "Les petits musées n'en ont pas les moyens.",
       "budget": 0,
       "axes": {
        "eco": 1
       },
       "ind": {
        "services": -1
       },
       "fx": [
        {
         "obj": "bulle",
         "x": 55,
         "y": 21,
         "anim": "appear",
         "label": "À chacun ses moyens"
        },
        {
         "obj": "parlement",
         "x": 52,
         "y": 24,
         "anim": "pulse"
        },
        {
         "obj": "cadenas",
         "x": 52,
         "y": 22,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "d",
       "label": "Confier la surveillance à des sociétés privées",
       "label_expert": "Externaliser le gardiennage des musées nationaux",
       "plus": "Moins cher, plus souple à organiser.",
       "minus": "Moins de contrôle sur les agents.",
       "budget": 0.01,
       "axes": {
        "eco": 2
       },
       "ind": {
        "services": -1,
        "emploi": 1
       },
       "fx": [
        {
         "obj": "bulle",
         "x": 55,
         "y": 21,
         "anim": "appear",
         "label": "Sécurité privée"
        },
        {
         "obj": "parlement",
         "x": 52,
         "y": 24,
         "anim": "pulse"
        },
        {
         "obj": "cadenas",
         "x": 52,
         "y": 22,
         "anim": "fade"
        }
       ],
       "budget_note": "Gardiennage moins coûteux (estimation du jeu) : le déficit baisse un peu."
      },
      {
       "id": "e",
       "label": "Recruter des gardiens dans tous les musées publics",
       "label_expert": "Créer des postes d'agents de surveillance dans les musées nationaux",
       "plus": "Plus de gardiens, salles mieux protégées.",
       "minus": "Une dépense durable pour l’État chaque année.",
       "budget": -0.05,
       "axes": {
        "eco": -2
       },
       "ind": {
        "services": 1,
        "emploi": 1
       },
       "fx": [
        {
         "obj": "cadenas",
         "x": 52,
         "y": 22,
         "anim": "appear",
         "stay": true
        },
        {
         "obj": "antenne",
         "x": 54,
         "y": 24,
         "anim": "spin"
        },
        {
         "obj": "policiers",
         "x": 51,
         "y": 25,
         "anim": "appear"
        }
       ],
       "budget_note": "Postes publics nouveaux (estimation du jeu) : le déficit augmente."
      }
     ]
    },
    {
     "id": "v22_covid",
     "kind": "majeur",
     "region": "national",
     "sector": "salaires",
     "title": "Le virus revient : faut-il confiner ?",
     "simple": "Un virus se répand vite et remplit les services de réanimation. Le gouvernement envisage de fermer commerces et restaurants. Pour que personne ne fasse faillite, il faudrait dépenser sans compter.",
     "expert": "Pandémie de Covid-19 : confinements, activité partielle massive, fonds de solidarité pour les indépendants, prêts garantis par l'État. Arbitrage entre santé, activité économique et dette publique.",
     "context": "Ces mesures ont limité les faillites et le chômage, mais ont beaucoup augmenté la dette publique.",
     "real": {
      "date": "Mars 2020 puis octobre 2020 (deuxième confinement)",
      "place": "Toute la France",
      "fact": "Pour faire face à la pandémie, l'État a financé le chômage partiel, un fonds de solidarité et des prêts garantis, selon le principe du « quoi qu'il en coûte ». Le déficit public a fortement augmenté.",
      "figures": "Déficit public d'environ 250 Md€ en un an ; dépenses publiques en hausse d'environ 100 Md€ ; fonds de solidarité : 11,8 Md€ versés à 1,8 million d'entrepreneurs (Cour des comptes).",
      "sources": [
       {
        "label": "Banque des Territoires : Cour des comptes, entre mobilisation et impréparation, les leçons d'une crise",
        "url": "https://www.banquedesterritoires.fr/cour-des-comptes-entre-mobilisation-et-impreparation-les-lecons-dune-crise"
       }
      ]
     },
     "camera": {
      "region": "national",
      "x": 55,
      "y": 45,
      "zoom": 1.1
     },
     "fx": [
      {
       "obj": "hopital",
       "x": 52,
       "y": 26,
       "anim": "blink"
      },
      {
       "obj": "commerce",
       "x": 30,
       "y": 42,
       "anim": "close",
       "count": 3,
       "delay": 0.3
      },
      {
       "obj": "ambulance",
       "x": 47,
       "y": 30,
       "anim": "move",
       "to": {
        "x": 52,
        "y": 26
       },
       "count": 3,
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 56,
       "y": 40,
       "anim": "appear",
       "label": "Réanimations pleines",
       "delay": 1
      },
      {
       "obj": "personnage",
       "x": 60,
       "y": 55,
       "anim": "fade",
       "count": 3,
       "delay": 1.3
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Confiner et payer les salaires : « quoi qu'il en coûte »",
       "label_expert": "Confinement national, activité partielle et fonds de solidarité",
       "term": "Activité partielle et fonds de solidarité",
       "plus": "Presque aucune faillite, les emplois sont sauvés.",
       "minus": "Des dizaines de milliards de dette en plus.",
       "budget": 0,
       "once": -30,
       "axes": {
        "eco": -2,
        "soc": 1
       },
       "ind": {
        "emploi": 4,
        "pouvoir_achat": 2,
        "services": 2,
        "cohesion": 1
       },
       "real_note": "Choix fait : activité partielle, fonds de solidarité (11,8 Md€ versés) et prêts garantis. Le montant du jeu ne compte qu'une partie des mesures.",
       "fx": [
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 24,
         "anim": "flow",
         "to": {
          "x": 30,
          "y": 42
         }
        },
        {
         "obj": "commerce",
         "x": 30,
         "y": 42,
         "anim": "pulse",
         "count": 3
        },
        {
         "obj": "hopital",
         "x": 52,
         "y": 26,
         "anim": "pulse"
        }
       ],
       "budget_note": "Salaires et entreprises soutenus par l'État : le déficit augmente très fortement."
      },
      {
       "id": "b",
       "label": "Aider seulement les secteurs fermés",
       "label_expert": "Aides ciblées aux secteurs fermés par décret",
       "plus": "L'argent va à ceux qui ne peuvent pas travailler.",
       "minus": "Des entreprises fragiles passent entre les mailles.",
       "budget": 0,
       "once": -12,
       "axes": {
        "eco": -1
       },
       "ind": {
        "emploi": 2,
        "services": 1
       },
       "fx": [
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 24,
         "anim": "flow",
         "to": {
          "x": 60,
          "y": 55
         }
        },
        {
         "obj": "commerce",
         "x": 60,
         "y": 55,
         "anim": "pulse"
        },
        {
         "obj": "commerce",
         "x": 30,
         "y": 42,
         "anim": "close"
        }
       ],
       "budget_note": "Aides réservées aux secteurs fermés : le déficit augmente fortement."
      },
      {
       "id": "c",
       "label": "Prêts garantis plutôt que subventions",
       "label_expert": "Prêts garantis par l'État plutôt que subventions",
       "term": "Prêts garantis par l'État",
       "plus": "Les entreprises remboursent, l'État touche des frais.",
       "minus": "Des entreprises s'endettent et certaines ne rembourseront pas.",
       "budget": 0,
       "once": -0.5,
       "axes": {
        "eco": 1
       },
       "ind": {
        "emploi": 2
       },
       "followup": "Les frais de garantie versés par les entreprises rentrent dans les caisses ; quelques défauts sont à payer.",
       "followup_in": 2,
       "followup_budget": 1,
       "fx": [
        {
         "obj": "pieces",
         "x": 52,
         "y": 24,
         "anim": "flow",
         "to": {
          "x": 30,
          "y": 42
         }
        },
        {
         "obj": "etiquette",
         "x": 30,
         "y": 39,
         "anim": "appear",
         "label": "Prêt garanti"
        },
        {
         "obj": "commerce",
         "x": 30,
         "y": 42,
         "anim": "appear"
        }
       ],
       "budget_note": "Seuls les prêts non remboursés coûtent : le déficit augmente peu, puis baisse."
      },
      {
       "id": "d",
       "label": "Pas de confinement strict, protéger les plus fragiles",
       "label_expert": "Stratégie de protection ciblée des personnes vulnérables",
       "plus": "L'économie et l'école continuent de tourner.",
       "minus": "Hôpitaux débordés, plus de malades graves.",
       "budget": 0,
       "axes": {
        "soc": -1,
        "eco": 1
       },
       "ind": {
        "services": -4,
        "emploi": 1,
        "cohesion": -2
       },
       "fx": [
        {
         "obj": "hopital",
         "x": 52,
         "y": 26,
         "anim": "shake"
        },
        {
         "obj": "file_attente",
         "x": 53,
         "y": 28,
         "anim": "appear"
        },
        {
         "obj": "commerce",
         "x": 30,
         "y": 42,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Rétablir l'impôt sur la fortune pour payer la crise",
       "label_expert": "Rétablir l'impôt de solidarité sur la fortune",
       "plus": "Les plus riches participent à l'effort.",
       "minus": "Risque de départs de grandes fortunes.",
       "budget": 2,
       "axes": {
        "eco": -2
       },
       "ind": {
        "cohesion": 1,
        "emploi": -1
       },
       "fx": [
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 24,
         "anim": "flow",
         "to": {
          "x": 30,
          "y": 42
         }
        },
        {
         "obj": "commerce",
         "x": 30,
         "y": 42,
         "anim": "pulse",
         "count": 3
        },
        {
         "obj": "hopital",
         "x": 52,
         "y": 26,
         "anim": "pulse"
        }
       ],
       "budget_note": "L'ancien impôt rapportait environ 4,2 Md€, l'impôt actuel sur l'immobilier environ 2,4 Md€ : recette nette, le déficit baisse."
      }
     ],
     "recall": [
      {
       "event": "v22_medicaments",
       "choice": "a",
       "text": "La semaine dernière, tu as aidé à relocaliser la production de médicaments : quelques lignes françaises peuvent aussi fabriquer masques et gel.",
       "ind": {
        "souverainete": 1
       }
      },
      {
       "event": "v22_medicaments",
       "choice": "b",
       "text": "La semaine dernière, tu as imposé des stocks de quatre mois aux laboratoires : les pharmacies tiennent mieux face à l'afflux de malades.",
       "ind": {
        "services": 1
       }
      },
      {
       "event": "v22_medicaments",
       "choice": "c",
       "text": "La semaine dernière, tu as fait vendre les antibiotiques à l'unité : les pharmaciens savent déjà rationner, mais les stocks restent maigres."
      },
      {
       "event": "v22_medicaments",
       "choice": "d",
       "text": "Il y a peu, vous avez créé un fabricant public de médicaments : il commence à produire du paracétamol, utile pour les malades du virus."
      },
      {
       "event": "v22_medicaments",
       "choice": "e",
       "text": "Il y a peu, vous avez doublé la franchise sur les boîtes : l'Assurance maladie a un peu plus de marge, mais des malades renoncent à des achats."
      }
     ]
    }
   ]
  },
  {
   "day": 4,
   "season": "automne",
   "title": "Tempêtes et factures",
   "mood": "tendu",
   "weather": "pluie",
   "intro": "Semaine 4. Une tempête frappe la côte, la colère monte sur les ronds-points, et les factures d'énergie s'envolent.",
   "offer": [
    "contribution_ue",
    "renovation_massive",
    "smic_hausse",
    "baisse_cotisations_net",
    "fusion_agences",
    "surtaxe_grandes_entreprises"
   ],
   "events": [
    {
     "id": "v22_xynthia",
     "kind": "majeur",
     "region": "pays_de_la_loire",
     "sector": "logement",
     "title": "Une tempête submerge la côte vendéenne",
     "simple": "Une nuit, une tempête pousse la mer par-dessus les digues. À La Faute-sur-Mer, des maisons construites derrière la digue sont envahies en quelques minutes. Des habitants meurent dans leur sommeil.",
     "expert": "Submersion marine : rupture et surverse des digues, lotissements construits en zone basse, défaut d'information sur le risque. Suites : zones déclarées inhabitables, plans de prévention des risques littoraux, plan national submersions rapides.",
     "context": "Après cette catastrophe, l'État a commencé à envisager de déplacer des habitations plutôt que de toujours renforcer les digues.",
     "real": {
      "date": "Nuit du 27 au 28 février 2010",
      "place": "La Faute-sur-Mer (Vendée) et littoral atlantique",
      "fact": "La tempête Xynthia a fait 47 morts sur le littoral français, dont 29 à La Faute-sur-Mer. Les quartiers les plus exposés ont été déclarés inhabitables et un plan national submersions rapides a été lancé.",
      "figures": "47 morts en France, dont 29 à La Faute-sur-Mer ; plus de 600 maisons détruites dans la commune.",
      "sources": [
       {
        "label": "L'info durable : il y a 15 ans, l'électrochoc Xynthia",
        "url": "https://www.linfodurable.fr/il-y-15-ans-lelectrochoc-xynthia-bousculait-la-prevention-des-risques-de-submersion-49643"
       }
      ]
     },
     "camera": {
      "region": "pays_de_la_loire",
      "x": 25,
      "y": 47,
      "zoom": 2.6
     },
     "fx": [
      {
       "obj": "tempete",
       "x": 20,
       "y": 46,
       "anim": "pulse"
      },
      {
       "obj": "inondation",
       "x": 25,
       "y": 47,
       "anim": "grow",
       "delay": 0.3
      },
      {
       "obj": "maison",
       "x": 26,
       "y": 47,
       "anim": "shake",
       "count": 4,
       "delay": 0.6
      },
      {
       "obj": "bateau_peche",
       "x": 12,
       "y": 47,
       "anim": "move",
       "to": {
        "x": 16,
        "y": 48
       },
       "label": "Secours",
       "delay": 0.9
      },
      {
       "obj": "panneau",
       "x": 27,
       "y": 44,
       "anim": "appear",
       "label": "Digue rompue",
       "delay": 1.2
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Racheter et détruire les maisons les plus exposées",
       "label_expert": "Acquisitions amiables financées par le fonds Barnier",
       "plus": "Plus personne ne dort dans la zone la plus dangereuse.",
       "minus": "Coûteux, et des habitants refusent de partir.",
       "budget": 0,
       "once": -0.3,
       "axes": {
        "env": -1
       },
       "ind": {
        "cohesion": -1
       },
       "real_note": "Choix fait : les quartiers les plus exposés ont été déclarés inhabitables et les maisons rachetées. Le montant du jeu est une estimation.",
       "fx": [
        {
         "obj": "maison",
         "x": 26,
         "y": 47,
         "anim": "fade",
         "count": 3
        },
        {
         "obj": "champ",
         "x": 26,
         "y": 47,
         "anim": "grow"
        },
        {
         "obj": "camion",
         "x": 26,
         "y": 47,
         "anim": "move",
         "to": {
          "x": 30,
          "y": 44
         }
        }
       ],
       "budget_note": "Rachat des maisons par l'État : le déficit augmente une fois.",
       "terme": "long"
      },
      {
       "id": "b",
       "label": "Rehausser les digues de tout le littoral",
       "label_expert": "Programme d'actions de prévention des inondations : rehausser les digues",
       "plus": "Les habitants restent chez eux, protégés.",
       "minus": "Très cher, et la mer continuera de monter.",
       "budget": -0.05,
       "once": -0.5,
       "axes": {
        "env": 1
       },
       "ind": {
        "emploi": 1,
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 24,
         "y": 46,
         "anim": "grow"
        },
        {
         "obj": "barrage",
         "x": 24,
         "y": 47,
         "anim": "appear",
         "stay": true
        },
        {
         "obj": "inondation",
         "x": 25,
         "y": 47,
         "anim": "fade"
        }
       ],
       "budget_note": "Travaux de digues puis entretien : le déficit augmente.",
       "terme": "long"
      },
      {
       "id": "c",
       "label": "Interdire de construire en zone de submersion",
       "label_expert": "Plan de prévention des risques littoraux : zones rendues inconstructibles",
       "plus": "Moins de victimes et de dégâts à indemniser.",
       "minus": "Moins de terrains, logements côtiers plus chers.",
       "budget": 0.02,
       "axes": {
        "env": -1,
        "soc": 1
       },
       "ind": {
        "pouvoir_achat": -1
       },
       "fx": [
        {
         "obj": "panneau",
         "x": 26,
         "y": 44,
         "anim": "appear",
         "label": "Zone rouge",
         "stay": true
        },
        {
         "obj": "chantier_grue",
         "x": 26,
         "y": 45,
         "anim": "close"
        },
        {
         "obj": "immeuble",
         "x": 30,
         "y": 44,
         "anim": "grow"
        }
       ],
       "budget_note": "Moins de maisons à indemniser plus tard : le déficit baisse un peu.",
       "terme": "long"
      },
      {
       "id": "d",
       "label": "Indemniser vite et reconstruire sur place",
       "label_expert": "Arrêté de catastrophe naturelle accéléré, reconstruction à l'identique",
       "plus": "Les familles retrouvent leur maison.",
       "minus": "Le risque reste le même à la prochaine tempête.",
       "budget": 0,
       "once": -0.4,
       "axes": {
        "eco": -1,
        "env": 1
       },
       "ind": {
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 50,
         "anim": "flow",
         "to": {
          "x": 26,
          "y": 47
         }
        },
        {
         "obj": "maison",
         "x": 26,
         "y": 47,
         "anim": "grow",
         "count": 3
        },
        {
         "obj": "chantier_grue",
         "x": 27,
         "y": 46,
         "anim": "appear"
        }
       ],
       "budget_note": "Part publique des indemnisations : le déficit augmente une fois.",
       "terme": "court"
      },
      {
       "id": "e",
       "label": "Augmenter la surprime « catastrophes naturelles » des assurances",
       "label_expert": "Relever le taux de la surprime catastrophes naturelles",
       "plus": "Le régime d'aide reste financé.",
       "minus": "Assurances plus chères pour tous.",
       "budget": 0.2,
       "axes": {
        "eco": 1
       },
       "ind": {
        "pouvoir_achat": -1,
        "services": 1
       },
       "fx": [
        {
         "obj": "panneau",
         "x": 26,
         "y": 44,
         "anim": "appear",
         "label": "Assurance",
         "stay": true
        },
        {
         "obj": "chantier_grue",
         "x": 26,
         "y": 45,
         "anim": "close"
        },
        {
         "obj": "immeuble",
         "x": 30,
         "y": 44,
         "anim": "grow"
        }
       ],
       "budget_note": "Moins d'appels à la garantie de l'État (estimation du jeu) : le déficit baisse.",
       "terme": "long"
      }
     ],
     "multi": {
      "max": 2,
      "pairs": [
       [
        "a",
        "d"
       ],
       [
        "b",
        "d"
       ],
       [
        "c",
        "d"
       ],
       [
        "a",
        "c"
       ],
       [
        "d",
        "e"
       ]
      ],
      "hint": "Une réponse pour le court terme, une pour le long terme."
     }
    },
    {
     "id": "v22_gilets_jaunes",
     "kind": "majeur",
     "region": "national",
     "sector": "fiscalite",
     "title": "Les gilets jaunes occupent les ronds-points",
     "simple": "Une nouvelle hausse des taxes sur l'essence et le diesel est prévue. Des milliers de personnes enfilent un gilet jaune et bloquent les ronds-points. Beaucoup vivent loin et dépendent de leur voiture.",
     "expert": "Mouvement social né contre la hausse de la composante carbone des taxes sur les carburants : revendications de pouvoir d'achat, de justice fiscale et de démocratie directe ; manifestations et violences à Paris.",
     "context": "La taxe carbone est vue par beaucoup d'économistes comme un outil efficace contre le CO₂, mais elle pèse plus sur les ménages modestes et ruraux si elle n'est pas compensée.",
     "real": {
      "date": "17 novembre 2018 (premier samedi) ; 10 décembre 2018 (annonces)",
      "place": "Ronds-points de toute la France, Paris",
      "fact": "Face au mouvement, le gouvernement a annulé les hausses de taxe carbone et de taxes sur les carburants prévues, puis annoncé des mesures de pouvoir d'achat.",
      "figures": "Annulation des hausses de taxes : environ 4 Md€ de recettes en moins ; mesures annoncées ensuite (prime d'activité, heures supplémentaires, CSG des retraités) : environ 6 Md€ ; environ 10 Md€ au total.",
      "sources": [
       {
        "label": "Public Sénat : un discours à un milliard d'euros la minute",
        "url": "https://www.publicsenat.fr/article/politique/annonces-de-macron-vu-du-senat-un-discours-a-un-milliard-d-euros-la-minute-136267"
       },
       {
        "label": "Public Sénat : l'exécutif annule les hausses de taxe",
        "url": "https://www.publicsenat.fr/actualites/politique/gilets-jaunes-l-executif-annule-les-hausses-de-taxe-pour-2019-136117"
       }
      ]
     },
     "camera": {
      "region": "national",
      "x": 52,
      "y": 45,
      "zoom": 1.2
     },
     "fx": [
      {
       "obj": "manifestants",
       "x": 40,
       "y": 45,
       "anim": "appear",
       "count": 3,
       "label": "Gilets jaunes"
      },
      {
       "obj": "manifestants",
       "x": 65,
       "y": 55,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "voiture",
       "x": 45,
       "y": 48,
       "anim": "shake",
       "count": 4,
       "delay": 0.6
      },
      {
       "obj": "station_service",
       "x": 50,
       "y": 40,
       "anim": "blink",
       "delay": 0.9
      },
      {
       "obj": "bulle",
       "x": 52,
       "y": 30,
       "anim": "appear",
       "label": "On ne peut plus faire le plein",
       "delay": 1.2
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Annuler la hausse des taxes sur les carburants",
       "label_expert": "Geler la hausse de la composante carbone de la TICPE",
       "plus": "Le plein ne coûte pas plus cher, la colère retombe.",
       "minus": "Environ 4 milliards de recettes en moins, plus de CO₂.",
       "budget": -4,
       "axes": {
        "env": 2,
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": 2,
        "co2": 2,
        "cohesion": 2
       },
       "real_note": "Choix fait : les hausses prévues ont été annulées (environ 4 Md€).",
       "fx": [
        {
         "obj": "station_service",
         "x": 50,
         "y": 40,
         "anim": "pulse"
        },
        {
         "obj": "manifestants",
         "x": 40,
         "y": 45,
         "anim": "fade"
        },
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 24,
         "anim": "flow",
         "to": {
          "x": 45,
          "y": 48
         }
        }
       ],
       "budget_note": "Taxe sur les carburants qui ne rentre pas : le déficit augmente."
      },
      {
       "id": "b",
       "label": "Annoncer des mesures de pouvoir d'achat",
       "label_expert": "Loi d'urgence : prime d'activité relevée, heures supplémentaires défiscalisées",
       "plus": "Les salariés modestes gagnent plus chaque mois.",
       "minus": "Environ 6 milliards par an à financer.",
       "budget": -6,
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": 3,
        "cohesion": 1
       },
       "real_note": "Choix fait ensuite : prime d'activité, heures supplémentaires défiscalisées, CSG réduite pour une partie des retraités (environ 6 Md€).",
       "fx": [
        {
         "obj": "pieces",
         "x": 45,
         "y": 48,
         "anim": "rise",
         "count": 3
        },
        {
         "obj": "maison",
         "x": 40,
         "y": 50,
         "anim": "pulse",
         "count": 3
        },
        {
         "obj": "manifestants",
         "x": 65,
         "y": 55,
         "anim": "fade"
        }
       ],
       "budget_note": "Primes et exonérations versées chaque année : le déficit augmente."
      },
      {
       "id": "c",
       "label": "Garder la taxe et la reverser en chèque aux ménages modestes",
       "label_expert": "Maintenir la taxe carbone avec redistribution forfaitaire ciblée",
       "term": "Taxe carbone redistribuée",
       "plus": "Moins de CO₂, et les modestes ne perdent pas.",
       "minus": "Difficile à expliquer, la méfiance reste.",
       "budget": 0,
       "axes": {
        "env": -2,
        "eco": -1
       },
       "ind": {
        "co2": -2,
        "pouvoir_achat": 1,
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "euro_flux",
         "x": 50,
         "y": 40,
         "anim": "flow",
         "to": {
          "x": 40,
          "y": 50
         }
        },
        {
         "obj": "maison",
         "x": 40,
         "y": 50,
         "anim": "pulse",
         "count": 2
        },
        {
         "obj": "station_service",
         "x": 50,
         "y": 40,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Maintenir la hausse sans compensation",
       "label_expert": "Maintenir la trajectoire carbone sans mesure compensatoire",
       "plus": "Recettes gardées et moins de CO₂.",
       "minus": "Colère accrue, blocages prolongés.",
       "budget": 4,
       "axes": {
        "env": -2,
        "eco": 1
       },
       "ind": {
        "co2": -2,
        "pouvoir_achat": -2,
        "cohesion": -4
       },
       "fx": [
        {
         "obj": "manifestants",
         "x": 52,
         "y": 25,
         "anim": "appear",
         "count": 3
        },
        {
         "obj": "pieces",
         "x": 50,
         "y": 40,
         "anim": "rise"
        },
        {
         "obj": "voiture",
         "x": 45,
         "y": 48,
         "anim": "shake",
         "count": 3
        }
       ],
       "budget_note": "Hausse de taxe encaissée en entier : le déficit baisse."
      },
      {
       "id": "e",
       "label": "Organiser un grand débat national",
       "label_expert": "Grand débat national et cahiers de doléances en mairie",
       "plus": "Chacun peut s'exprimer, des idées remontent.",
       "minus": "Des mois de débats, des attentes déçues.",
       "budget": -0.01,
       "axes": {
        "soc": -1
       },
       "ind": {
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "mairie",
         "x": 45,
         "y": 45,
         "anim": "appear",
         "count": 3
        },
        {
         "obj": "personnage",
         "x": 46,
         "y": 46,
         "anim": "appear",
         "count": 3
        },
        {
         "obj": "bulle",
         "x": 46,
         "y": 42,
         "anim": "appear",
         "label": "Cahiers de doléances"
        }
       ],
       "budget_note": "Coût d'organisation des débats : le déficit augmente très peu."
      }
     ]
    },
    {
     "id": "v22_bouclier",
     "kind": "majeur",
     "region": "national",
     "sector": "energie",
     "title": "L'électricité et le gaz flambent",
     "simple": "Après l'invasion de l'Ukraine, le prix du gaz explose en Europe. Celui de l'électricité suit. Sans aide, les factures pourraient doubler. Que fait l'État ?",
     "expert": "Crise énergétique : envolée des prix de gros du gaz et de l'électricité, couplage des prix européens, réacteurs à l'arrêt pour corrosion. Outils : bouclier tarifaire, chèque énergie, amortisseur pour les entreprises, captation des rentes des producteurs.",
     "context": "Quand les prix de marché sont très hauts, les contrats des éoliennes et du solaire rapportent de l'argent à l'État au lieu d'en coûter. Selon la Cour des comptes, les aides de la crise ont été trop peu ciblées.",
     "real": {
      "date": "2022 et 2023",
      "place": "Toute la France",
      "fact": "Pour contenir les factures, l'État a plafonné la hausse des tarifs réglementés de l'électricité et du gaz (« bouclier tarifaire ») pendant deux ans.",
      "figures": "Coût brut des boucliers : 26,3 Md€ (21,5 électricité, 4,8 gaz) ; coût net : 20,4 Md€ en deux ans, après 5,9 Md€ reversés par les énergies renouvelables (CRE). Selon la Cour des comptes, 36 Md€ nets pour l'ensemble des aides aux consommateurs sur quatre ans.",
      "sources": [
       {
        "label": "MoneyVox / AFP : les boucliers ont coûté plus de 20 milliards d'euros en deux ans (CRE)",
        "url": "https://www.moneyvox.fr/energie/actualites/98865/les-boucliers-tarifaires-gaz-et-electricite-ont-coute-plus-de-20-milliards-euros-en-deux-ans"
       },
       {
        "label": "Vie publique : boucliers énergétiques, 26,3 milliards d'euros",
        "url": "https://www.vie-publique.fr/en-bref/295067-boucliers-energetiques-263-milliards-deuros-entre-2021-et-2024"
       }
      ]
     },
     "camera": {
      "region": "national",
      "x": 58,
      "y": 40,
      "zoom": 1.1
     },
     "fx": [
      {
       "obj": "centrale_gaz",
       "x": 97,
       "y": 13,
       "anim": "smoke",
       "label": "Gaz importé"
      },
      {
       "obj": "euro_flux",
       "x": 97,
       "y": 13,
       "anim": "flow",
       "to": {
        "x": 75,
        "y": 22
       },
       "delay": 0.3
      },
      {
       "obj": "pylone",
       "x": 60,
       "y": 35,
       "anim": "shake",
       "delay": 0.7
      },
      {
       "obj": "maison",
       "x": 52,
       "y": 45,
       "anim": "appear",
       "count": 4,
       "delay": 1
      },
      {
       "obj": "etiquette",
       "x": 52,
       "y": 41,
       "anim": "blink",
       "label": "Facture × 2 ?",
       "delay": 1.3
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Plafonner les prix pour tout le monde",
       "label_expert": "Bouclier tarifaire : gel du tarif réglementé et accise minorée",
       "term": "Bouclier tarifaire",
       "plus": "Personne ne voit sa facture exploser.",
       "minus": "Coût énorme, aide aussi les plus aisés.",
       "budget": 0,
       "once": -12,
       "axes": {
        "eco": -2,
        "env": 1
       },
       "ind": {
        "pouvoir_achat": 7,
        "co2": 2,
        "cohesion": 2
       },
       "followup": "Les prix de marché restent hauts : les éoliennes et le solaire reversent des recettes à l'État, ce qui allège la facture du bouclier.",
       "followup_in": 2,
       "followup_budget": 3,
       "real_note": "Choix fait : 26,3 Md€ bruts, 20,4 Md€ nets en deux ans selon la CRE ; le jeu compte une année, puis le reversement des renouvelables.",
       "fx": [
        {
         "obj": "panneau",
         "x": 52,
         "y": 41,
         "anim": "appear",
         "label": "Hausse plafonnée"
        },
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 24,
         "anim": "flow",
         "to": {
          "x": 52,
          "y": 45
         }
        },
        {
         "obj": "maison",
         "x": 52,
         "y": 45,
         "anim": "pulse",
         "count": 4
        }
       ],
       "budget_note": "L'État paie la hausse à la place de tous : le déficit augmente très fortement.",
       "terme": "court"
      },
      {
       "id": "b",
       "label": "Aider seulement les ménages modestes",
       "label_expert": "Chèque énergie exceptionnel sous conditions de ressources",
       "term": "Chèque énergie exceptionnel",
       "plus": "L'argent va à ceux qui en ont besoin.",
       "minus": "Les classes moyennes paient plein pot.",
       "budget": 0,
       "once": -3,
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": 2,
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 24,
         "anim": "flow",
         "to": {
          "x": 48,
          "y": 46
         }
        },
        {
         "obj": "maison",
         "x": 48,
         "y": 46,
         "anim": "pulse",
         "count": 2
        },
        {
         "obj": "etiquette",
         "x": 48,
         "y": 43,
         "anim": "appear",
         "label": "Chèque énergie"
        }
       ],
       "budget_note": "Chèques versés aux ménages modestes : le déficit augmente.",
       "terme": "court"
      },
      {
       "id": "c",
       "label": "Plan de sobriété : baisser le chauffage",
       "label_expert": "Plan de sobriété : bâtiments publics chauffés à 19 °C",
       "term": "Plan de sobriété énergétique",
       "plus": "Moins de gaz brûlé, moins de risque de coupure.",
       "minus": "Il fait plus froid chez soi et au travail.",
       "budget": 0.2,
       "axes": {
        "env": -2
       },
       "ind": {
        "co2": -3,
        "pouvoir_achat": -2
       },
       "fx": [
        {
         "obj": "etiquette",
         "x": 52,
         "y": 41,
         "anim": "appear",
         "label": "19 °C"
        },
        {
         "obj": "immeuble",
         "x": 52,
         "y": 24,
         "anim": "close"
        },
        {
         "obj": "centrale_gaz",
         "x": 97,
         "y": 13,
         "anim": "fade"
        }
       ],
       "budget_note": "Factures d'énergie des bâtiments publics en baisse : le déficit baisse un peu.",
       "terme": "long"
      },
      {
       "id": "d",
       "label": "Taxer les profits exceptionnels des producteurs",
       "label_expert": "Contribution sur les rentes inframarginales des producteurs",
       "term": "Contribution sur les rentes inframarginales",
       "plus": "Ceux qui profitent de la crise paient.",
       "minus": "Rendement incertain, investissements freinés.",
       "budget": 1,
       "axes": {
        "eco": -2
       },
       "ind": {
        "cohesion": 1,
        "emploi": -1
       },
       "fx": [
        {
         "obj": "centrale_nucleaire",
         "x": 70,
         "y": 54,
         "anim": "pulse"
        },
        {
         "obj": "euro_flux",
         "x": 70,
         "y": 54,
         "anim": "flow",
         "to": {
          "x": 52,
          "y": 24
         }
        },
        {
         "obj": "etiquette",
         "x": 62,
         "y": 46,
         "anim": "appear",
         "label": "Taxe sur les rentes"
        }
       ],
       "budget_note": "Taxe sur les profits exceptionnels : le déficit baisse.",
       "terme": "court"
      },
      {
       "id": "e",
       "label": "Sortir les prix français du marché européen",
       "label_expert": "Découpler le prix de l'électricité du gaz sur le marché européen",
       "plus": "Prix calés sur nos coûts de production.",
       "minus": "Conflit avec les règles et nos voisins.",
       "budget": 0,
       "axes": {
        "eu": 2
       },
       "ind": {
        "souverainete": 4,
        "pouvoir_achat": 3
       },
       "fx": [
        {
         "obj": "frontiere",
         "x": 85,
         "y": 18,
         "anim": "appear",
         "stay": true
        },
        {
         "obj": "euro_flux",
         "x": 97,
         "y": 13,
         "anim": "fade"
        },
        {
         "obj": "centrale_nucleaire",
         "x": 70,
         "y": 54,
         "anim": "pulse"
        }
       ],
       "terme": "long"
      }
     ],
     "recall": [
      {
       "event": "v22_fukushima",
       "choice": "a",
       "text": "Il y a deux semaines, tu as renforcé la sûreté des réacteurs : les travaux arrêtent plusieurs réacteurs au pire moment, la production baisse.",
       "ind": {
        "pouvoir_achat": -1
       }
      },
      {
       "event": "v22_fukushima",
       "choice": "b",
       "text": "Il y a deux semaines, tu as fermé les plus vieux réacteurs : il manque de la production et la France importe plus cher.",
       "ind": {
        "pouvoir_achat": -1,
        "souverainete": -1
       }
      },
      {
       "event": "v22_fukushima",
       "choice": "c",
       "text": "Il y a deux semaines, tu as engagé la baisse de la part du nucléaire : les réacteurs tournent encore, mais le gaz pèse plus dans le débat."
      },
      {
       "event": "v22_fukushima",
       "choice": "d",
       "text": "Il y a deux semaines, tu as prolongé les réacteurs actuels : ils produisent à plein et amortissent un peu la hausse des prix.",
       "ind": {
        "pouvoir_achat": 1
       }
      },
      {
       "event": "v22_fukushima",
       "choice": "e",
       "text": "Il y a peu, vous avez lancé de nouveaux réacteurs : les chantiers avancent, mais ils ne produiront rien avant longtemps."
      }
     ],
     "multi": {
      "max": 2,
      "pairs": [
       [
        "b",
        "c"
       ],
       [
        "b",
        "d"
       ],
       [
        "c",
        "d"
       ]
      ],
      "hint": "Une réponse pour le court terme, une pour le long terme."
     }
    },
    {
     "id": "v22_chido",
     "kind": "majeur",
     "region": "outre_mer",
     "sector": "logement",
     "title": "Un cyclone ravage Mayotte",
     "simple": "Un cyclone d'une violence jamais vue depuis près d'un siècle frappe Mayotte. Les quartiers de tôle sont rasés, l'eau et l'électricité coupées. Il y a des dizaines de morts et des milliers de blessés.",
     "expert": "Cyclone tropical intense sur un territoire très pauvre : destruction massive de l'habitat précaire, des réseaux et des écoles ; loi d'urgence pour la reconstruction (établissement public, dérogations aux règles d'urbanisme et de marchés publics).",
     "context": "Une grande partie des habitants de Mayotte vit dans des logements précaires. La question de l'immigration irrégulière y est très présente dans le débat public.",
     "real": {
      "date": "14 décembre 2024 (cyclone) ; 24 février 2025 (loi d'urgence)",
      "place": "Mayotte",
      "fact": "Le cyclone Chido a dévasté Mayotte. Une loi d'urgence a créé un établissement public chargé de la reconstruction et assoupli temporairement les règles de construction.",
      "figures": "39 morts et 4 466 blessés selon le ministère de l'Intérieur ; coût du sinistre estimé à environ 2 Md€ ; réduction d'impôt de 75 % pour les dons, dans la limite de 2 000 €.",
      "sources": [
       {
        "label": "Sénat : l'essentiel du projet de loi d'urgence pour Mayotte",
        "url": "https://senat.fr/lessentiel/pjl24-260.pdf"
       },
       {
        "label": "Vie publique : loi d'urgence pour Mayotte",
        "url": "https://www.vie-publique.fr/loi/296777-loi-durgence-pour-mayotte-24-fevrier-2025"
       }
      ]
     },
     "camera": {
      "region": "outre_mer",
      "x": 7,
      "y": 90,
      "zoom": 2.6
     },
     "fx": [
      {
       "obj": "tempete",
       "x": 5,
       "y": 88,
       "anim": "spin"
      },
      {
       "obj": "maison",
       "x": 7,
       "y": 90,
       "anim": "shake",
       "count": 4,
       "delay": 0.3
      },
      {
       "obj": "pylone",
       "x": 9,
       "y": 89,
       "anim": "close",
       "delay": 0.6
      },
      {
       "obj": "ferry",
       "x": 2,
       "y": 96,
       "anim": "move",
       "to": {
        "x": 6,
        "y": 92
       },
       "label": "Secours et eau",
       "delay": 0.9
      },
      {
       "obj": "panneau",
       "x": 7,
       "y": 86,
       "anim": "appear",
       "label": "Habitat détruit",
       "delay": 1.2
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Voter une loi d'urgence qui accélère les chantiers",
       "label_expert": "Loi d'urgence dérogeant aux règles d'urbanisme et de commande publique",
       "plus": "Chantiers rapides, règles allégées deux ans.",
       "minus": "Plus d'un milliard, contrôles plus légers.",
       "budget": 0,
       "once": -1,
       "axes": {
        "eco": -1
       },
       "ind": {
        "services": 2,
        "cohesion": 1
       },
       "real_note": "Choix fait : loi d'urgence avec un établissement public de reconstruction et des dérogations temporaires.",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 7,
         "y": 90,
         "anim": "grow",
         "stay": true
        },
        {
         "obj": "maison",
         "x": 8,
         "y": 91,
         "anim": "grow",
         "count": 3
        },
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 50,
         "anim": "flow",
         "to": {
          "x": 7,
          "y": 90
         }
        }
       ],
       "budget_note": "Reconstruction financée par l'État : le déficit augmente une fois."
      },
      {
       "id": "b",
       "label": "Reconstruire en dur et résorber les bidonvilles",
       "label_expert": "Résorption de l'habitat insalubre et reconstruction en dur",
       "plus": "Des logements qui résistent au prochain cyclone.",
       "minus": "Long et cher, des habitants sans solution d'ici là.",
       "budget": -0.05,
       "once": -0.5,
       "axes": {
        "soc": 1
       },
       "ind": {
        "services": 2,
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "immeuble",
         "x": 8,
         "y": 89,
         "anim": "grow",
         "count": 2,
         "stay": true
        },
        {
         "obj": "maison",
         "x": 6,
         "y": 91,
         "anim": "fade",
         "count": 2
        },
        {
         "obj": "chantier_grue",
         "x": 7,
         "y": 88,
         "anim": "appear"
        }
       ],
       "budget_note": "Logements construits puis entretenus : le déficit augmente."
      },
      {
       "id": "c",
       "label": "Durcir les règles d'entrée et d'accès à la nationalité sur l'île",
       "label_expert": "Restreindre le droit du sol dans le régime propre à Mayotte",
       "plus": "Une réponse à la pression migratoire locale.",
       "minus": "Débat juridique et inquiétude des associations.",
       "budget": -0.05,
       "axes": {
        "soc": 2,
        "eu": 1
       },
       "ind": {
        "souverainete": 2,
        "cohesion": -2
       },
       "fx": [
        {
         "obj": "douane",
         "x": 4,
         "y": 92,
         "anim": "appear",
         "stay": true
        },
        {
         "obj": "bateau_peche",
         "x": 1,
         "y": 97,
         "anim": "move",
         "to": {
          "x": 3,
          "y": 94
         }
        },
        {
         "obj": "policiers",
         "x": 5,
         "y": 91,
         "anim": "appear"
        }
       ],
       "budget_note": "Contrôles et procédures en plus : le déficit augmente un peu."
      },
      {
       "id": "d",
       "label": "Demander le fonds de solidarité de l'Union européenne",
       "label_expert": "Mobiliser le Fonds de solidarité de l'Union européenne",
       "plus": "L'Europe paie une partie de la reconstruction.",
       "minus": "Délais d'instruction, montant limité.",
       "budget": 0,
       "once": 0.1,
       "axes": {
        "eu": -1
       },
       "ind": {
        "services": 1
       },
       "fx": [
        {
         "obj": "batiment_ue",
         "x": 63,
         "y": 3,
         "anim": "pulse"
        },
        {
         "obj": "euro_flux",
         "x": 63,
         "y": 3,
         "anim": "flow",
         "to": {
          "x": 7,
          "y": 90
         }
        },
        {
         "obj": "drapeau_ue",
         "x": 9,
         "y": 88,
         "anim": "appear"
        }
       ],
       "budget_note": "Argent versé par l'Union européenne : le déficit baisse une fois."
      },
      {
       "id": "e",
       "label": "Réduire les impôts de ceux qui investissent dans la reconstruction",
       "label_expert": "Créer une défiscalisation pour l'investissement productif à Mayotte",
       "plus": "Les entreprises reviennent vite.",
       "minus": "Avantage fiscal, effets mal contrôlés.",
       "budget": -0.1,
       "axes": {
        "eco": 2
       },
       "ind": {
        "emploi": 2,
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 7,
         "y": 90,
         "anim": "grow",
         "stay": true
        },
        {
         "obj": "maison",
         "x": 8,
         "y": 91,
         "anim": "grow",
         "count": 3
        },
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 50,
         "anim": "flow",
         "to": {
          "x": 7,
          "y": 90
         }
        }
       ],
       "budget_note": "Impôts en moins (estimation du jeu) : le déficit augmente."
      }
     ]
    },
    {
     "id": "v22_boulangerie",
     "kind": "banal",
     "region": "centre_val_de_loire",
     "sector": "fiscalite",
     "title": "Plus de boulangerie, un distributeur de baguettes",
     "simple": "À Autruy-sur-Juine, 729 habitants, la boulangerie a fermé. La mairie installe un distributeur de baguettes. Pratique, mais ce n'est pas tout à fait pareil.",
     "expert": "Disparition du dernier commerce alimentaire d'une commune rurale : portage foncier, construction d'un local communal loué à un artisan, cofinancement département, région, État.",
     "context": "De nombreuses communes rurales n'ont plus aucun commerce. Plusieurs reprennent elles-mêmes les murs pour faire revenir un boulanger.",
     "real": {
      "date": "Fermeture en 2020 ; réouverture en janvier 2025",
      "place": "Autruy-sur-Juine, Loiret",
      "fact": "Après la fermeture de sa boulangerie, la commune a d'abord loué un distributeur de pain, puis fait construire une boulangerie communale louée à un artisan.",
      "figures": "Investissement de 1,134 M€, dont 728 000 € de subventions (département, région, État). Loyer de 1 000 € par mois. Distributeur loué 420 € par mois.",
      "sources": [
       {
        "label": "Banque des Territoires : à Autruy-sur-Juine, les pains sont tout chauds",
        "url": "https://www.banquedesterritoires.fr/experience/autruy-sur-juine-les-pains-et-les-croissants-sont-tout-chauds-45"
       }
      ]
     },
     "camera": {
      "region": "centre_val_de_loire",
      "x": 51,
      "y": 31,
      "zoom": 2.8
     },
     "fx": [
      {
       "obj": "boulangerie",
       "x": 51,
       "y": 31,
       "anim": "close"
      },
      {
       "obj": "maison",
       "x": 49,
       "y": 32,
       "anim": "appear",
       "count": 4,
       "delay": 0.4
      },
      {
       "obj": "personnage",
       "x": 52,
       "y": 33,
       "anim": "move",
       "to": {
        "x": 51,
        "y": 31
       },
       "delay": 0.8
      },
      {
       "obj": "etiquette",
       "x": 51,
       "y": 28,
       "anim": "appear",
       "label": "Plus de pain au village",
       "delay": 1.1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "La commune fait construire une boulangerie",
       "label_expert": "Local commercial communal loué à un artisan",
       "plus": "Un vrai commerce et un lieu de vie reviennent.",
       "minus": "Plus d'un million d'euros pour un seul village.",
       "budget": 0,
       "once": -0.001,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1
       },
       "real_note": "Choix fait à Autruy-sur-Juine : 1,134 M€ d'investissement, dont 728 000 € de subventions. Le loyer de 1 000 € par mois rembourse l'emprunt en 20 ans.",
       "followup": "La nouvelle boulangerie ouvre : le loyer versé par l'artisan rembourse l'emprunt de la commune.",
       "followup_in": 2,
       "followup_ind": {
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 51,
         "y": 31,
         "anim": "grow"
        },
        {
         "obj": "boulangerie",
         "x": 51,
         "y": 31,
         "anim": "appear",
         "delay": 1,
         "stay": true
        },
        {
         "obj": "file_attente",
         "x": 52,
         "y": 33,
         "anim": "appear",
         "delay": 1.4
        }
       ],
       "budget_note": "Investissement payé par la commune : le déficit augmente à peine."
      },
      {
       "id": "b",
       "label": "Garder le distributeur automatique",
       "label_expert": "Laisser le distributeur, sans intervention publique",
       "plus": "Du pain frais à toute heure, pour peu cher.",
       "minus": "Pas de boulanger, pas de café, pas de rencontre.",
       "budget": 0,
       "axes": {
        "eco": 1
       },
       "ind": {
        "cohesion": -1
       },
       "real_note": "Solution provisoire choisie au début : un distributeur loué 420 € par mois.",
       "fx": [
        {
         "obj": "commerce",
         "x": 51,
         "y": 31,
         "anim": "appear",
         "label": "Distributeur"
        },
        {
         "obj": "personnage",
         "x": 52,
         "y": 33,
         "anim": "move",
         "to": {
          "x": 51,
          "y": 31
         },
         "count": 2
        },
        {
         "obj": "pieces",
         "x": 51,
         "y": 30,
         "anim": "rise"
        }
       ]
      },
      {
       "id": "c",
       "label": "Baisser les impôts des commerces de village",
       "label_expert": "Exonérer de CFE les commerces en zone de revitalisation rurale",
       "term": "Exonérations en zone de revitalisation rurale",
       "plus": "Un repreneur peut s'installer à moindre coût.",
       "minus": "Moins de recettes, et sans garantie de repreneur.",
       "budget": -0.05,
       "axes": {
        "eco": 1
       },
       "ind": {
        "emploi": 1
       },
       "fx": [
        {
         "obj": "etiquette",
         "x": 51,
         "y": 28,
         "anim": "appear",
         "label": "Impôts réduits"
        },
        {
         "obj": "boulangerie",
         "x": 51,
         "y": 31,
         "anim": "pulse"
        },
        {
         "obj": "pieces",
         "x": 52,
         "y": 50,
         "anim": "flow",
         "to": {
          "x": 51,
          "y": 31
         }
        }
       ],
       "budget_note": "Impôt local qui ne rentre plus : le déficit augmente un peu."
      },
      {
       "id": "d",
       "label": "Un camion-boulangerie pour dix villages",
       "label_expert": "Tournée itinérante subventionnée par l'intercommunalité",
       "plus": "Du pain livré partout, sans gros chantier.",
       "minus": "Un passage par jour, et le bourg reste vide.",
       "budget": -0.01,
       "axes": {
        "env": 1
       },
       "ind": {
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "camion",
         "x": 46,
         "y": 33,
         "anim": "move",
         "to": {
          "x": 55,
          "y": 30
         },
         "label": "Pain"
        },
        {
         "obj": "maison",
         "x": 55,
         "y": 30,
         "anim": "pulse",
         "count": 3
        },
        {
         "obj": "personnage",
         "x": 55,
         "y": 31,
         "anim": "appear"
        }
       ],
       "budget_note": "Subvention au camion-boulangerie : le déficit augmente très peu."
      },
      {
       "id": "e",
       "label": "Reprendre la boulangerie en coopérative avec les habitants",
       "label_expert": "Créer une société coopérative d'intérêt collectif",
       "plus": "Le village garde son commerce.",
       "minus": "Repose sur des bénévoles motivés.",
       "budget": 0,
       "axes": {
        "eco": -1,
        "soc": -1
       },
       "ind": {
        "cohesion": 2,
        "emploi": 1
       },
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 51,
         "y": 31,
         "anim": "grow"
        },
        {
         "obj": "boulangerie",
         "x": 51,
         "y": 31,
         "anim": "appear",
         "delay": 1,
         "stay": true
        },
        {
         "obj": "file_attente",
         "x": 52,
         "y": 33,
         "anim": "appear",
         "delay": 1.4
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "day": 5,
   "season": "automne",
   "title": "Ce qu'il y a dans nos assiettes",
   "mood": "tendu",
   "weather": "pluie",
   "intro": "Semaine 5. Les jours raccourcissent. Une alerte sanitaire vide les rayons de viande, une pollution invisible inquiète le sud de Lyon, et le beurre se fait rare.",
   "offer": [
    "prix_planchers_agricoles",
    "sortie_pesticides",
    "tva_sociale",
    "cessions_actifs",
    "taxe_kerosene_train",
    "plafonner_allegements"
   ],
   "events": [
    {
     "id": "v25_vache_folle",
     "kind": "majeur",
     "region": "national",
     "sector": "agriculture",
     "title": "Vache folle : plus personne n'achète de bœuf",
     "simple": "Une vache malade est repérée à l'abattoir. La viande du même troupeau a déjà été vendue en supermarché. Les Français ont peur : ils n'achètent presque plus de bœuf, et les cantines le retirent des menus.",
     "expert": "Cas d'encéphalopathie spongiforme bovine (ESB) détecté à l'abattoir, retrait de lots déjà commercialisés, effondrement de la demande de viande bovine. Les farines animales, déjà interdites pour les bovins, restent utilisées pour les porcs et les volailles, avec un risque de contamination croisée.",
     "context": "La maladie de la vache folle vient de farines fabriquées avec des restes d'animaux. Chez l'humain, une forme de la maladie de Creutzfeldt-Jakob lui est liée. Les éleveurs, eux, ne sont pas responsables de la crise mais en subissent le coût.",
     "real": {
      "date": "Fin octobre à mi-novembre 2000",
      "place": "Eure ; magasins d'une grande enseigne ; toute la France",
      "fact": "Un bovin atteint de l'ESB a été conduit à l'abattoir par un négociant de l'Eure ; la viande d'animaux du même lot avait été vendue en grande surface. La consommation de bœuf s'est effondrée et le gouvernement a suspendu les farines animales dans l'alimentation de tous les animaux d'élevage.",
      "figures": "Baisses hebdomadaires des achats de bœuf de 13 %, 24 %, 37 % puis 47 %. Les farines animales étaient déjà interdites pour les bovins depuis une décennie.",
      "sources": [
       {
        "label": "Larousse, Journal de l'année : vache folle, la grande peur de l'an 2000",
        "url": "https://www.larousse.fr/archives/journaux_annee/2001/124/vache_folle_la_grande_peur_de_l_an_2000"
       },
       {
        "label": "Universalis : interdiction des farines d'origine animale",
        "url": "https://www.universalis.fr/encyclopedie/interdiction-des-farines-d-origine-animale/"
       }
      ]
     },
     "camera": {
      "region": "national",
      "x": 46,
      "y": 30,
      "zoom": 1.2
     },
     "fx": [
      {
       "obj": "troupeau",
       "x": 38,
       "y": 22,
       "anim": "appear"
      },
      {
       "obj": "supermarche",
       "x": 52,
       "y": 26,
       "anim": "appear",
       "delay": 0.4
      },
      {
       "obj": "etiquette",
       "x": 52,
       "y": 22,
       "anim": "appear",
       "label": "Ventes de bœuf : -47 %",
       "delay": 0.8
      },
      {
       "obj": "ecole",
       "x": 46,
       "y": 36,
       "anim": "close",
       "delay": 1.1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Interdire toutes les farines animales, pour tous les élevages",
       "label_expert": "Suspension générale des farines animales pour toutes les espèces",
       "plus": "Une règle claire qui rassure les acheteurs.",
       "minus": "Il faut détruire les stocks et importer du soja.",
       "budget": -0.5,
       "axes": {
        "soc": 1,
        "eco": -1
       },
       "ind": {
        "cohesion": 2,
        "souverainete": -1
       },
       "real_note": "C'est ce qui a été décidé : suspension générale des farines animales pour tous les animaux d'élevage.",
       "followup": "Les farines interdites s'entassent dans des entrepôts : il faut payer pour les brûler en cimenterie.",
       "followup_in": 1,
       "followup_budget": -0.1,
       "fx": [
        {
         "obj": "usine_fermee",
         "x": 40,
         "y": 30,
         "anim": "close"
        },
        {
         "obj": "cargo",
         "x": 2,
         "y": 60,
         "anim": "move",
         "to": {
          "x": 15,
          "y": 50
         },
         "label": "Soja importé"
        },
        {
         "obj": "etiquette",
         "x": 40,
         "y": 27,
         "anim": "appear",
         "label": "Farines interdites"
        }
       ],
       "budget_note": "Destruction des stocks payée par l'État : le déficit augmente."
      },
      {
       "id": "b",
       "label": "Tester toutes les vaches avant la vente",
       "label_expert": "Dépistage systématique de l'ESB à l'abattoir",
       "plus": "Chaque bête malade est repérée à temps.",
       "minus": "Des tests chers, des abattoirs ralentis.",
       "budget": -0.4,
       "axes": {
        "soc": 1
       },
       "ind": {
        "cohesion": 1,
        "services": 1
       },
       "fx": [
        {
         "obj": "loupe",
         "x": 38,
         "y": 22,
         "anim": "pulse"
        },
        {
         "obj": "troupeau",
         "x": 38,
         "y": 22,
         "anim": "move",
         "to": {
          "x": 44,
          "y": 26
         }
        }
       ],
       "budget_note": "Tests payés par l'État : le déficit augmente."
      },
      {
       "id": "c",
       "label": "Indemniser les éleveurs et rassurer par une campagne",
       "label_expert": "Indemnisation des éleveurs et campagne d'information sanitaire",
       "plus": "Les fermes tiennent le temps que la peur passe.",
       "minus": "Beaucoup d'argent public, sans lever le doute.",
       "budget": -0.3,
       "once": -0.2,
       "axes": {
        "eco": -1
       },
       "ind": {
        "emploi": 1,
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 26,
         "anim": "flow",
         "to": {
          "x": 38,
          "y": 22
         }
        },
        {
         "obj": "ferme",
         "x": 36,
         "y": 24,
         "anim": "pulse"
        }
       ],
       "budget_note": "Indemnités et campagne payées par l'État : le déficit augmente."
      },
      {
       "id": "d",
       "label": "Payer les contrôles par une taxe sur la viande vendue",
       "label_expert": "Taxe d'équarrissage sur les ventes de viande",
       "plus": "Les contrôles se font sans creuser le déficit.",
       "minus": "La viande coûte un peu plus cher en rayon.",
       "budget": 0.3,
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": -1,
        "services": 1
       },
       "real_note": "Une taxe sur les achats de viande finançait déjà l'élimination des carcasses (service public de l'équarrissage).",
       "fx": [
        {
         "obj": "pieces",
         "x": 52,
         "y": 26,
         "anim": "rise"
        },
        {
         "obj": "loupe",
         "x": 38,
         "y": 22,
         "anim": "pulse"
        }
       ],
       "budget_note": "Une taxe paie les contrôles : le déficit baisse."
      },
      {
       "id": "e",
       "label": "Déclencher la clause de sauvegarde sur la viande importée",
       "label_expert": "Activation de la clause de sauvegarde bilatérale sur les viandes bovines",
       "plus": "Les éleveurs ne subissent pas en plus les importations.",
       "minus": "Les pays d'Amérique du Sud menacent de riposter.",
       "budget": 0,
       "axes": {
        "eu": 1
       },
       "ind": {
        "souverainete": 1,
        "emploi": 1,
        "pouvoir_achat": -1
       },
       "requires": {
        "event": "v22_mercosur",
        "choice": "b"
       },
       "fx": [
        {
         "obj": "ferme",
         "x": 36,
         "y": 24,
         "anim": "pulse"
        },
        {
         "obj": "ferme",
         "x": 40,
         "y": 27,
         "anim": "grow"
        }
       ]
      }
     ],
     "recall": [
      {
       "event": "v22_mercosur",
       "choice": "a",
       "text": "Il y a quatre semaines, tu as voté contre l'accord avec l'Amérique du Sud : la viande importée ne s'ajoutera pas à la crise.",
       "ind": {
        "cohesion": 1
       }
      },
      {
       "event": "v22_mercosur",
       "choice": "b",
       "text": "Il y a quatre semaines, tu as obtenu la clause de sauvegarde de l'accord : tu peux la déclencher si la viande importée afflue pendant la crise."
      },
      {
       "event": "v22_mercosur",
       "choice": "c",
       "text": "Il y a quatre semaines, tu as versé des aides d'urgence aux éleveurs : une deuxième crise en un mois, et les éleveurs demandent de nouveau de l'aide."
      },
      {
       "event": "v22_mercosur",
       "choice": "d",
       "text": "Il y a quatre semaines, tu as joué l'accord commercial : la viande importée arrive au moment où les Français fuient le bœuf.",
       "ind": {
        "emploi": -1
       }
      },
      {
       "event": "v22_mercosur",
       "choice": "e",
       "text": "Il y a quelques semaines, vous avez interdit la viande produite avec des produits interdits chez nous : les importations contrôlées rassurent un peu."
      }
     ]
    },
    {
     "id": "v25_pfas",
     "kind": "majeur",
     "region": "auvergne_rhone_alpes",
     "sector": "sante",
     "title": "Des « polluants éternels » dans les œufs du sud de Lyon",
     "simple": "Autour d'une grande usine chimique près de Lyon, on trouve des PFAS, des produits qui ne disparaissent presque jamais. Les habitants qui ont des poules ne doivent plus manger leurs œufs. L'usine fait travailler des centaines de personnes.",
     "expert": "Pollution aux substances per- et polyfluoroalkylées autour de la plateforme chimique de Pierre-Bénite (fabrication de polymères fluorés). Arrêtés préfectoraux de réduction des rejets, surveillance de l'eau potable, recommandations sanitaires sur l'autoconsommation.",
     "context": "Les PFAS servent dans les poêles antiadhésives, les vêtements imperméables ou les mousses anti-incendie. Certains sont jugés dangereux pour la santé. Les filtrer dans l'eau coûte cher, et les industriels disent avoir besoin de temps pour s'en passer.",
     "real": {
      "date": "2022 (révélations et premiers arrêtés) ; 2023 (résultats sur les œufs)",
      "place": "Pierre-Bénite et communes du sud de Lyon, Rhône",
      "fact": "Des mesures ont révélé une pollution aux PFAS autour de la plateforme chimique de Pierre-Bénite, où deux industriels fabriquent des polymères fluorés. L'agence régionale de santé a recommandé aux habitants d'une quinzaine de communes de ne pas manger les œufs ni la viande de leurs volailles.",
      "figures": "85 % des échantillons d'œufs dépassaient la norme européenne pour au moins un PFAS. Un captage d'eau potable a dépassé la future limite de 0,1 µg/L (somme de 20 PFAS). L'un des industriels doit cesser tout usage de PFAS.",
      "sources": [
       {
        "label": "ARS Auvergne-Rhône-Alpes : PFAS, la situation au sud de Lyon",
        "url": "https://www.auvergne-rhone-alpes.ars.sante.fr/pfas-focus-sur-la-situation-au-sud-de-lyon"
       }
      ]
     },
     "camera": {
      "region": "auvergne_rhone_alpes",
      "x": 66,
      "y": 56,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "usine",
       "x": 66,
       "y": 57,
       "anim": "smoke"
      },
      {
       "obj": "ferme",
       "x": 63,
       "y": 59,
       "anim": "appear",
       "delay": 0.4
      },
      {
       "obj": "loupe",
       "x": 64,
       "y": 58,
       "anim": "pulse",
       "delay": 0.8
      },
      {
       "obj": "etiquette",
       "x": 66,
       "y": 53,
       "anim": "appear",
       "label": "PFAS dans les œufs",
       "delay": 1.1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Interdire tout de suite les rejets de l'usine",
       "label_expert": "Arrêté préfectoral de suspension des rejets de PFAS",
       "plus": "La pollution s'arrête à la source, sans attendre.",
       "minus": "L'usine menace de réduire sa production ici.",
       "budget": 0,
       "axes": {
        "eco": -1,
        "env": -2
       },
       "ind": {
        "services": 2,
        "emploi": -1,
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "usine",
         "x": 66,
         "y": 57,
         "anim": "close"
        },
        {
         "obj": "cadenas",
         "x": 68,
         "y": 56,
         "anim": "appear",
         "stay": true
        }
       ]
      },
      {
       "id": "b",
       "label": "Faire payer l'industriel pour chaque gramme rejeté",
       "label_expert": "Redevance pollueur-payeur sur les rejets de PFAS",
       "plus": "Le pollueur finance le nettoyage de l'eau.",
       "minus": "Recette modeste, l'usine peut partir ailleurs.",
       "budget": 0.02,
       "axes": {
        "eco": -1,
        "env": -1
       },
       "ind": {
        "services": 1
       },
       "real_note": "Une loi a ensuite créé une redevance de 100 € par tranche de 100 grammes de PFAS rejetés.",
       "fx": [
        {
         "obj": "pieces",
         "x": 66,
         "y": 57,
         "anim": "rise"
        },
        {
         "obj": "usine",
         "x": 66,
         "y": 57,
         "anim": "smoke"
        }
       ],
       "budget_note": "Redevance payée par l'industriel : le déficit baisse un peu."
      },
      {
       "id": "c",
       "label": "Financer des filtres dans les usines d'eau potable",
       "label_expert": "Traitement par charbon actif des captages d'eau potable",
       "plus": "L'eau du robinet redevient sûre plus vite.",
       "minus": "Le contribuable paie la pollution d'un autre.",
       "budget": 0,
       "once": -0.2,
       "axes": {
        "eco": -1
       },
       "ind": {
        "services": 2,
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 64,
         "y": 60,
         "anim": "grow"
        },
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 50,
         "anim": "flow",
         "to": {
          "x": 64,
          "y": 60
         }
        }
       ],
       "budget_note": "Filtres payés une fois par l'État : le déficit augmente une fois."
      },
      {
       "id": "d",
       "label": "Informer et suivre la santé des habitants, sans contrainte",
       "label_expert": "Information du public et biosurveillance, sans prescription",
       "plus": "Les emplois sont gardés le temps des études.",
       "minus": "Les habitants restent exposés plus longtemps.",
       "budget": 0,
       "axes": {
        "eco": 1,
        "env": 1
       },
       "ind": {
        "services": -1,
        "cohesion": -1
       },
       "followup": "De nouvelles analyses confirment la pollution : des familles du sud de Lyon portent plainte.",
       "followup_in": 1,
       "followup_ind": {
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "bulle",
         "x": 63,
         "y": 56,
         "anim": "appear",
         "label": "Ne mangez pas vos œufs"
        },
        {
         "obj": "loupe",
         "x": 64,
         "y": 58,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "e",
       "label": "Interdire ces produits dans les objets du quotidien",
       "label_expert": "Interdire les PFAS dans les biens de consommation courante",
       "plus": "On coupe la pollution à la source.",
       "minus": "Industriels à adapter, emplois menacés.",
       "budget": 0,
       "axes": {
        "env": -2,
        "eco": -1
       },
       "ind": {
        "services": 1,
        "emploi": -1
       },
       "fx": [
        {
         "obj": "usine",
         "x": 66,
         "y": 57,
         "anim": "close"
        },
        {
         "obj": "cadenas",
         "x": 68,
         "y": 56,
         "anim": "appear",
         "stay": true
        }
       ]
      }
     ]
    },
    {
     "id": "v25_beurre",
     "kind": "banal",
     "region": "normandie",
     "sector": "agriculture",
     "title": "Plus de beurre au supermarché",
     "simple": "Les rayons de beurre sont vides. Le beurre coûte beaucoup plus cher à fabriquer, mais les supermarchés refusent de le payer plus cher. Certains fabricants arrêtent de livrer.",
     "expert": "Flambée du cours du beurre industriel liée à une demande mondiale en hausse et à une collecte laitière en baisse. Les prix annuels négociés avec la distribution n'ont pas suivi, d'où des arrêts de livraison, surtout pour les marques de distributeurs.",
     "context": "Chaque année, fabricants et supermarchés négocient les prix une fois pour toutes. Quand les coûts bougent fortement en cours d'année, le système se bloque, et les éleveurs laitiers sont souvent les derniers payés.",
     "real": {
      "date": "Automne 2017",
      "place": "Supermarchés de toute la France",
      "fact": "Des rayons de beurre se sont vidés : le prix du beurre en gros avait fortement augmenté, mais les prix fixés avec la grande distribution en début d'année n'avaient pas suivi, et certains industriels ont cessé de livrer.",
      "figures": "Beurre industriel : environ 4 400 € la tonne en début d'année, 6 900 € à la mi-automne (FranceAgriMer, cité par l'INC).",
      "sources": [
       {
        "label": "Institut national de la consommation : que se passe-t-il sur le marché du beurre ?",
        "url": "https://www.inc-conso.fr/content/que-se-passe-t-il-sur-le-marche-du-beurre"
       }
      ]
     },
     "camera": {
      "region": "normandie",
      "x": 39,
      "y": 21,
      "zoom": 2.2
     },
     "fx": [
      {
       "obj": "supermarche",
       "x": 41,
       "y": 20,
       "anim": "appear"
      },
      {
       "obj": "etiquette",
       "x": 41,
       "y": 17,
       "anim": "appear",
       "label": "Plus de beurre",
       "delay": 0.4
      },
      {
       "obj": "troupeau",
       "x": 36,
       "y": 23,
       "anim": "appear",
       "delay": 0.7
      },
      {
       "obj": "file_attente",
       "x": 42,
       "y": 22,
       "anim": "appear",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Rouvrir les négociations entre fabricants et supermarchés",
       "label_expert": "Rouvrir les négociations commerciales annuelles en cours d'année",
       "plus": "Les prix suivent enfin le coût du lait.",
       "minus": "Le beurre coûte plus cher aux familles.",
       "budget": 0,
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": -1,
        "emploi": 1
       },
       "real_note": "Des hausses ont été acceptées en cours d'année, puis une loi sur l'alimentation a revu les règles des négociations.",
       "fx": [
        {
         "obj": "camion",
         "x": 36,
         "y": 23,
         "anim": "move",
         "to": {
          "x": 41,
          "y": 20
         }
        },
        {
         "obj": "pieces",
         "x": 36,
         "y": 23,
         "anim": "rise"
        }
       ]
      },
      {
       "id": "b",
       "label": "Laisser les prix s'ajuster tout seuls",
       "label_expert": "Laisser jouer le marché, sans intervention publique",
       "plus": "Pas d'intervention, le marché se rééquilibre.",
       "minus": "Des semaines de rayons vides et d'inquiétude.",
       "budget": 0,
       "axes": {
        "eco": 2
       },
       "ind": {
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "supermarche",
         "x": 41,
         "y": 20,
         "anim": "pulse"
        },
        {
         "obj": "file_attente",
         "x": 42,
         "y": 22,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "c",
       "label": "Limiter le nombre de plaquettes par client",
       "label_expert": "Rationner en magasin par un plafond d'achat par client",
       "plus": "Chacun trouve encore un peu de beurre.",
       "minus": "Des contrôles en caisse, des clients fâchés.",
       "budget": 0,
       "axes": {
        "soc": 1
       },
       "ind": {
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "panneau",
         "x": 41,
         "y": 17,
         "anim": "appear",
         "label": "2 par client"
        },
        {
         "obj": "file_attente",
         "x": 42,
         "y": 22,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "d",
       "label": "Importer du beurre d'autres pays d'Europe",
       "label_expert": "Recourir aux importations intra-européennes de beurre",
       "plus": "Les rayons se remplissent en quelques jours.",
       "minus": "Nos éleveurs ne profitent pas de la hausse.",
       "budget": 0,
       "axes": {
        "eu": -1,
        "eco": 1
       },
       "ind": {
        "pouvoir_achat": 1,
        "souverainete": -1
       },
       "fx": [
        {
         "obj": "camion",
         "x": 75,
         "y": 22,
         "anim": "move",
         "to": {
          "x": 41,
          "y": 20
         }
        },
        {
         "obj": "drapeau_ue",
         "x": 75,
         "y": 20,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Plafonner les marges des supermarchés sur le beurre",
       "label_expert": "Encadrer les marges de la grande distribution sur les produits de base",
       "plus": "Prix plus bas en rayon.",
       "minus": "Marques et rayons moins fournis.",
       "budget": 0,
       "axes": {
        "eco": -2
       },
       "ind": {
        "pouvoir_achat": 1,
        "emploi": -1
       },
       "fx": [
        {
         "obj": "camion",
         "x": 36,
         "y": 23,
         "anim": "move",
         "to": {
          "x": 41,
          "y": 20
         }
        },
        {
         "obj": "pieces",
         "x": 36,
         "y": 23,
         "anim": "rise"
        }
       ]
      }
     ]
    },
    {
     "id": "v25_train_nuit",
     "kind": "banal",
     "region": "paca",
     "sector": "transports",
     "title": "Le train de nuit pour Nice peut-il revenir ?",
     "simple": "Le train de nuit entre Paris et Nice a été arrêté parce qu'il perdait de l'argent. On montait le soir, on se réveillait au bord de la mer. Des voyageurs demandent son retour.",
     "expert": "Ligne de nuit Paris-Austerlitz – Nice supprimée faute de rentabilité, puis relancée sous convention de l'État, financée dans un plan de relance ferroviaire. Débat sur le coût par voyageur et sur l'ouverture à la concurrence.",
     "context": "Un train de nuit roule lentement, avec peu de places par voiture, et coûte cher à faire tourner. Mais il remplace des trajets en avion ou en voiture et dessert des villes moyennes.",
     "real": {
      "date": "Décembre 2017 (arrêt) ; 20 mai 2021 (retour)",
      "place": "Paris-Austerlitz – Nice",
      "fact": "Le train de nuit Paris-Nice, arrêté faute de rentabilité, a été relancé avec le financement de l'État, plus de trois ans plus tard.",
      "figures": "100 M€ prévus pour les trains de nuit dans un plan de relance ferroviaire de 5,3 Md€. Environ 12 heures de trajet. Deux lignes de nuit en service au moment de la relance, une dizaine visée à terme.",
      "sources": [
       {
        "label": "Euronews : la France relance le train de nuit Paris-Nice",
        "url": "https://www.euronews.com/2021/05/20/france-restarts-paris-nice-night-train-service-3-years-after-cancellation-over-low-profita"
       }
      ]
     },
     "camera": {
      "region": "paca",
      "x": 78,
      "y": 70,
      "zoom": 1.8
     },
     "fx": [
      {
       "obj": "train",
       "x": 52,
       "y": 24,
       "anim": "move",
       "to": {
        "x": 84,
        "y": 76
       }
      },
      {
       "obj": "panneau",
       "x": 84,
       "y": 73,
       "anim": "appear",
       "label": "Ligne fermée",
       "delay": 0.5
      },
      {
       "obj": "avion",
       "x": 52,
       "y": 24,
       "anim": "move",
       "to": {
        "x": 84,
        "y": 76
       },
       "delay": 0.8
      },
      {
       "obj": "etiquette",
       "x": 70,
       "y": 60,
       "anim": "appear",
       "label": "12 h de trajet",
       "delay": 1.1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Subventionner le train de nuit pour le relancer",
       "label_expert": "Train d'équilibre du territoire, l'État autorité organisatrice",
       "plus": "On voyage en dormant, sans prendre l'avion.",
       "minus": "Chaque billet est en partie payé par l'État.",
       "budget": -0.03,
       "axes": {
        "env": -1,
        "eco": -1
       },
       "ind": {
        "services": 1
       },
       "real_note": "C'est ce qui a été fait : l'État finance la ligne dans le cadre d'un plan de relance du train.",
       "followup": "Le train de nuit pour Nice affiche complet pendant les vacances.",
       "followup_in": 1,
       "followup_ind": {
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "train",
         "x": 52,
         "y": 24,
         "anim": "move",
         "to": {
          "x": 84,
          "y": 76
         }
        },
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 30,
         "anim": "flow",
         "to": {
          "x": 70,
          "y": 60
         }
        }
       ],
       "budget_note": "Chaque billet en partie payé par l'État : le déficit augmente un peu."
      },
      {
       "id": "b",
       "label": "Laisser la ligne fermée, elle n'est pas rentable",
       "label_expert": "Maintenir la fermeture de la ligne déficitaire",
       "plus": "L'argent va aux lignes les plus utilisées.",
       "minus": "Des voyageurs reprennent l'avion ou la route.",
       "budget": 0.02,
       "axes": {
        "eco": 1,
        "env": 1
       },
       "ind": {
        "services": -1
       },
       "fx": [
        {
         "obj": "avion",
         "x": 52,
         "y": 24,
         "anim": "move",
         "to": {
          "x": 84,
          "y": 76
         }
        },
        {
         "obj": "voiture",
         "x": 60,
         "y": 40,
         "anim": "move",
         "to": {
          "x": 80,
          "y": 72
         }
        }
       ],
       "budget_note": "Plus de subvention à verser : le déficit baisse un peu."
      },
      {
       "id": "c",
       "label": "Confier la ligne à une compagnie choisie sur appel d'offres",
       "label_expert": "Délégation de service public après appel d'offres",
       "plus": "Une entreprise peut faire mieux à moindre coût.",
       "minus": "Le service s'arrête si elle perd de l'argent.",
       "budget": 0.01,
       "axes": {
        "eco": 2,
        "eu": -1
       },
       "ind": {
        "services": 1
       },
       "fx": [
        {
         "obj": "train",
         "x": 52,
         "y": 24,
         "anim": "move",
         "to": {
          "x": 84,
          "y": 76
         }
        },
        {
         "obj": "loupe",
         "x": 70,
         "y": 60,
         "anim": "pulse"
        }
       ],
       "budget_note": "L'opérateur choisi prend une partie du risque : le déficit baisse un peu."
      },
      {
       "id": "d",
       "label": "Financer le train par une petite taxe sur les vols",
       "label_expert": "Financer la ligne par une écocontribution sur les billets d'avion",
       "plus": "Le train de nuit est payé par l'avion.",
       "minus": "Les billets d'avion coûtent un peu plus.",
       "budget": 0.01,
       "axes": {
        "env": -2
       },
       "ind": {
        "services": 1
       },
       "fx": [
        {
         "obj": "avion",
         "x": 52,
         "y": 24,
         "anim": "fade"
        },
        {
         "obj": "pieces",
         "x": 70,
         "y": 60,
         "anim": "rise"
        }
       ],
       "budget_note": "La taxe sur les vols paie plus que le train : le déficit baisse un peu."
      },
      {
       "id": "e",
       "label": "Racheter des voitures-lits et rouvrir dix lignes",
       "label_expert": "Lancer un plan national de trains de nuit avec matériel neuf",
       "plus": "Un vrai réseau de nuit dans tout le pays.",
       "minus": "Achat de trains très coûteux.",
       "budget": -0.05,
       "axes": {
        "env": -2,
        "eco": -1
       },
       "ind": {
        "services": 2,
        "co2": -1
       },
       "fx": [
        {
         "obj": "train",
         "x": 52,
         "y": 24,
         "anim": "move",
         "to": {
          "x": 84,
          "y": 76
         }
        },
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 30,
         "anim": "flow",
         "to": {
          "x": 70,
          "y": 60
         }
        }
       ],
       "once": -0.5,
       "budget_note": "Achat de matériel et exploitation (estimation du jeu) : le déficit augmente."
      }
     ]
    }
   ]
  },
  {
   "day": 6,
   "season": "hiver",
   "title": "Un hiver dans le noir",
   "mood": "tendu",
   "weather": "vent",
   "intro": "Semaine 6. L'hiver s'installe. Une tempête géante abat forêts et lignes électriques, des villages cherchent un médecin, et Paris retrouve sa cathédrale.",
   "offer": [
    "regulation_installation_medecins",
    "jour_ferie_travaille",
    "tva_energie_5_5",
    "leasing_electrique",
    "encadrement_loyers"
   ],
   "events": [
    {
     "id": "v25_lothar",
     "kind": "majeur",
     "region": "national",
     "sector": "energie",
     "title": "Deux tempêtes coupent le courant à des millions de foyers",
     "simple": "Deux tempêtes traversent le pays coup sur coup, avec des vents à près de 200 km/h. Des arbres tombent sur les routes et les lignes électriques. Des millions de familles n'ont plus de lumière ni de chauffage, parfois pendant des jours.",
     "expert": "Tempêtes extratropicales successives : chute de pylônes haute tension, destruction de milliers de kilomètres de lignes aériennes de distribution, chablis massifs. Mobilisation d'équipes venues d'autres régions et de pays voisins, débat sur l'enfouissement des réseaux.",
     "context": "Une ligne aérienne coûte beaucoup moins cher qu'une ligne enterrée, mais elle tombe avec les arbres. Les forêts abattues mettent des dizaines d'années à repousser, et le bois tombé doit être sorti vite avant de pourrir.",
     "real": {
      "date": "26 au 28 décembre 1999",
      "place": "Toute la France, surtout le nord, l'est et le sud-ouest",
      "fact": "Deux tempêtes successives, Lothar puis Martin, ont traversé la France. Elles ont fait 92 morts dans le pays, privé 3,5 millions de foyers d'électricité et abattu des forêts entières.",
      "figures": "92 morts en France (140 en Europe) ; 3,5 millions de foyers sans courant ; environ 97 millions de m³ de bois abattu, près de 5 % du stock forestier ; 9 à 15 Md€ de dégâts.",
      "sources": [
       {
        "label": "Notre-planete.info : les tempêtes de fin décembre en France",
        "url": "https://www.notre-planete.info/terre/risques_naturels/tempetes-1999-France.php"
       },
       {
        "label": "Universalis : tempêtes en France",
        "url": "https://www.universalis.fr/encyclopedie/tempetes-en-france/"
       }
      ]
     },
     "camera": {
      "region": "national",
      "x": 54,
      "y": 38,
      "zoom": 1.1
     },
     "fx": [
      {
       "obj": "tempete",
       "x": 30,
       "y": 30,
       "anim": "move",
       "to": {
        "x": 80,
        "y": 25
       }
      },
      {
       "obj": "pylone",
       "x": 58,
       "y": 30,
       "anim": "shake",
       "delay": 0.4
      },
      {
       "obj": "foret",
       "x": 72,
       "y": 32,
       "anim": "shake",
       "count": 3,
       "delay": 0.7
      },
      {
       "obj": "maison",
       "x": 46,
       "y": 40,
       "anim": "close",
       "count": 3,
       "delay": 1
      },
      {
       "obj": "etiquette",
       "x": 52,
       "y": 44,
       "anim": "appear",
       "label": "3,5 millions de foyers sans courant",
       "delay": 1.3
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Enterrer les lignes électriques les plus exposées",
       "label_expert": "Programme d'enfouissement des lignes, aides publiques et tarif de réseau",
       "plus": "Le courant résiste mieux aux prochaines tempêtes.",
       "minus": "Un chantier énorme, payé sur les factures.",
       "budget": -1.5,
       "axes": {
        "eco": -1
       },
       "ind": {
        "services": 3,
        "emploi": 1,
        "pouvoir_achat": -1
       },
       "real_note": "Après ces tempêtes, un programme de sécurisation du réseau a été lancé, avec davantage de lignes enterrées.",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 58,
         "y": 30,
         "anim": "grow"
        },
        {
         "obj": "pylone",
         "x": 58,
         "y": 30,
         "anim": "fade"
        },
        {
         "obj": "maison",
         "x": 46,
         "y": 40,
         "anim": "appear",
         "count": 3
        }
       ],
       "budget_note": "Part publique des travaux, le reste sur les factures : le déficit augmente.",
       "terme": "long"
      },
      {
       "id": "b",
       "label": "Appeler l'armée et des équipes de toute l'Europe",
       "label_expert": "Mobiliser l'armée et le mécanisme européen de protection civile",
       "plus": "La lumière revient plus vite chez les gens.",
       "minus": "Coûteux, et le réseau reste aussi fragile.",
       "budget": 0,
       "once": -0.5,
       "axes": {
        "eu": -1
       },
       "ind": {
        "cohesion": 2,
        "services": 1
       },
       "fx": [
        {
         "obj": "camion",
         "x": 90,
         "y": 14,
         "anim": "move",
         "to": {
          "x": 58,
          "y": 30
         },
         "count": 4
        },
        {
         "obj": "drapeau_ue",
         "x": 63,
         "y": 3,
         "anim": "appear"
        },
        {
         "obj": "maison",
         "x": 46,
         "y": 40,
         "anim": "appear",
         "count": 3
        }
       ],
       "budget_note": "Renforts payés une fois : le déficit augmente une fois.",
       "terme": "court"
      },
      {
       "id": "c",
       "label": "Aider à sortir le bois tombé et à replanter",
       "label_expert": "Plan chablis : aides au débardage, au stockage et au reboisement",
       "plus": "Le bois est sauvé et les forêts repoussent.",
       "minus": "Les prix du bois s'effondrent pour des années.",
       "budget": -0.1,
       "once": -0.5,
       "axes": {
        "env": -1
       },
       "ind": {
        "emploi": 1,
        "co2": -1
       },
       "fx": [
        {
         "obj": "camion",
         "x": 72,
         "y": 32,
         "anim": "move",
         "to": {
          "x": 60,
          "y": 40
         }
        },
        {
         "obj": "foret",
         "x": 72,
         "y": 32,
         "anim": "grow"
        }
       ],
       "budget_note": "Aides aux forestiers, puis replantation : le déficit augmente.",
       "terme": "court"
      },
      {
       "id": "d",
       "label": "Faire payer la reconstruction par une surprime d'assurance",
       "label_expert": "Relever la surprime catastrophes naturelles des contrats d'assurance",
       "plus": "La réparation se fait sans creuser le déficit.",
       "minus": "Tous les assurés paient leur contrat plus cher.",
       "budget": 0.4,
       "axes": {
        "eco": 1
       },
       "ind": {
        "pouvoir_achat": -1,
        "services": 1
       },
       "fx": [
        {
         "obj": "pieces",
         "x": 46,
         "y": 40,
         "anim": "rise"
        },
        {
         "obj": "maison",
         "x": 46,
         "y": 40,
         "anim": "appear",
         "count": 3
        }
       ],
       "budget_note": "Surprime versée au régime public de réassurance : le déficit baisse.",
       "terme": "long"
      },
      {
       "id": "e",
       "label": "Indemniser chaque foyer privé de courant plus de cinq heures",
       "label_expert": "Renforcer l'indemnisation automatique des coupures longues",
       "plus": "Les foyers sont remboursés sans démarche.",
       "minus": "Le gestionnaire du réseau paie, tarifs à la hausse.",
       "budget": 0,
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": 1,
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "camion",
         "x": 90,
         "y": 14,
         "anim": "move",
         "to": {
          "x": 58,
          "y": 30
         },
         "count": 4
        },
        {
         "obj": "drapeau_ue",
         "x": 63,
         "y": 3,
         "anim": "appear"
        },
        {
         "obj": "maison",
         "x": 46,
         "y": 40,
         "anim": "appear",
         "count": 3
        }
       ],
       "terme": "court"
      }
     ],
     "recall": [
      {
       "event": "v22_xynthia",
       "choice": "a",
       "text": "Il y a deux semaines, après la tempête en Vendée, tu as racheté les maisons les plus exposées : cette fois, la côte compte moins de sinistrés.",
       "ind": {
        "cohesion": 1
       }
      },
      {
       "event": "v22_xynthia",
       "choice": "b",
       "text": "Il y a deux semaines, tu as fait rehausser les digues : elles tiennent sur la côte, mais le vent frappe surtout les lignes électriques à l'intérieur."
      },
      {
       "event": "v22_xynthia",
       "choice": "c",
       "text": "Il y a deux semaines, tu as interdit de construire en zone de submersion : la règle protège la côte, pas les forêts ni les réseaux électriques."
      },
      {
       "event": "v22_xynthia",
       "choice": "d",
       "text": "Il y a deux semaines, tu as indemnisé vite les sinistrés de Vendée : les assureurs, déjà sollicités, relèvent leurs tarifs.",
       "ind": {
        "pouvoir_achat": -1
       }
      },
      {
       "event": "v22_xynthia",
       "choice": "e",
       "text": "Il y a quelques semaines, vous avez augmenté la surprime d'assurance : le régime d'indemnisation a de quoi payer les dégâts de la tempête."
      }
     ],
     "multi": {
      "max": 2,
      "pairs": [
       [
        "a",
        "b"
       ],
       [
        "b",
        "c"
       ],
       [
        "a",
        "c"
       ],
       [
        "c",
        "d"
       ],
       [
        "e",
        "a"
       ],
       [
        "e",
        "d"
       ]
      ],
      "hint": "Une réponse pour le court terme, une pour le long terme."
     }
    },
    {
     "id": "v25_medecins",
     "kind": "majeur",
     "region": "centre_val_de_loire",
     "sector": "sante",
     "title": "151 territoires en manque de médecins",
     "simple": "Dans beaucoup de campagnes, le médecin part à la retraite et personne ne le remplace. Des millions de gens n'ont plus de médecin traitant. L'État dresse la carte des endroits les plus touchés.",
     "expert": "Identification de 151 intercommunalités prioritaires (« zones rouges ») sur des critères de densité médicale et de besoins. Mission de solidarité territoriale des généralistes, débat sur la régulation de l'installation, délégation de tâches aux pharmaciens et infirmiers.",
     "context": "Un médecin met plus de dix ans à être formé. Les médecins libéraux choisissent librement où s'installer, et beaucoup refusent toute obligation. Les territoires les plus touchés sont surtout au centre et au sud-ouest, loin des côtes.",
     "real": {
      "date": "Avril 2025 (pacte) ; 27 juin 2025 (carte des zones)",
      "place": "151 intercommunalités, surtout au centre et au sud-ouest",
      "fact": "Le gouvernement a présenté un pacte contre les déserts médicaux puis la carte de 151 « zones rouges », où des médecins généralistes volontaires viendront en renfort jusqu'à deux jours par mois.",
      "figures": "Plus de 2,5 millions de patients concernés ; renfort possible jusqu'à 2 jours par mois et par médecin, avec des contreparties financières.",
      "sources": [
       {
        "label": "Banque des Territoires : la carte des 151 zones rouges a été établie",
        "url": "https://www.banquedesterritoires.fr/acces-aux-soins-la-carte-des-151-zones-rouges-ete-etablie"
       }
      ]
     },
     "camera": {
      "region": "centre_val_de_loire",
      "x": 46,
      "y": 42,
      "zoom": 1.8
     },
     "fx": [
      {
       "obj": "cabinet_medical",
       "x": 46,
       "y": 40,
       "anim": "close"
      },
      {
       "obj": "file_attente",
       "x": 48,
       "y": 42,
       "anim": "appear",
       "delay": 0.4
      },
      {
       "obj": "personnage",
       "x": 42,
       "y": 44,
       "anim": "move",
       "to": {
        "x": 46,
        "y": 41
       },
       "delay": 0.7
      },
      {
       "obj": "etiquette",
       "x": 46,
       "y": 36,
       "anim": "appear",
       "label": "151 zones rouges",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Obliger les médecins à venir deux jours par mois",
       "label_expert": "Mission de solidarité territoriale obligatoire, deux jours par mois",
       "plus": "Des consultations reviennent vite sur place.",
       "minus": "Les médecins protestent, des cabinets ferment.",
       "budget": -0.05,
       "axes": {
        "eco": -1,
        "soc": 1
       },
       "ind": {
        "services": 3,
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "voiture",
         "x": 52,
         "y": 24,
         "anim": "move",
         "to": {
          "x": 46,
          "y": 40
         }
        },
        {
         "obj": "cabinet_medical",
         "x": 46,
         "y": 40,
         "anim": "appear"
        },
        {
         "obj": "manifestants",
         "x": 52,
         "y": 26,
         "anim": "appear"
        }
       ],
       "budget_note": "Frais de déplacement des médecins : le déficit augmente un peu."
      },
      {
       "id": "b",
       "label": "Mieux payer les médecins volontaires",
       "label_expert": "Majorations conventionnelles pour exercer en zone sous-dotée",
       "plus": "Aucune contrainte, les volontaires se déclarent.",
       "minus": "Coûteux, et les volontaires sont peu nombreux.",
       "budget": -0.3,
       "axes": {
        "eco": -1
       },
       "ind": {
        "services": 2
       },
       "real_note": "Choix fait en vrai : un renfort de volontaires, avec des contreparties financières.",
       "fx": [
        {
         "obj": "euro_flux",
         "x": 52,
         "y": 30,
         "anim": "flow",
         "to": {
          "x": 46,
          "y": 40
         }
        },
        {
         "obj": "cabinet_medical",
         "x": 46,
         "y": 40,
         "anim": "appear"
        }
       ],
       "budget_note": "Primes payées par l'Assurance maladie : le déficit augmente."
      },
      {
       "id": "c",
       "label": "Confier plus de soins aux pharmaciens et infirmiers",
       "label_expert": "Élargir la prescription des pharmaciens et infirmiers",
       "plus": "Des soins simples, sans attendre un médecin.",
       "minus": "Les médecins craignent une médecine au rabais.",
       "budget": 0.1,
       "axes": {
        "eco": 1
       },
       "ind": {
        "services": 2
       },
       "fx": [
        {
         "obj": "soignants",
         "x": 47,
         "y": 41,
         "anim": "appear"
        },
        {
         "obj": "commerce",
         "x": 44,
         "y": 42,
         "anim": "pulse",
         "label": "Pharmacie"
        }
       ],
       "budget_note": "Actes moins chers que la consultation : le déficit baisse un peu."
      },
      {
       "id": "d",
       "label": "Former beaucoup plus de médecins dans les facultés",
       "label_expert": "Relever le numerus apertus des facultés de médecine",
       "plus": "Le manque se règle durablement, à long terme.",
       "minus": "Rien ne change pour les malades d'aujourd'hui.",
       "budget": -0.4,
       "axes": {
        "eco": -1
       },
       "ind": {
        "services": 1,
        "emploi": 1
       },
       "fx": [
        {
         "obj": "eleves",
         "x": 52,
         "y": 30,
         "anim": "appear"
        },
        {
         "obj": "hopital",
         "x": 50,
         "y": 34,
         "anim": "grow"
        }
       ],
       "budget_note": "Places d'études et stages à financer : le déficit augmente."
      },
      {
       "id": "e",
       "label": "Ouvrir des centres de santé avec des médecins salariés",
       "label_expert": "Créer des centres de santé publics à médecins salariés",
       "plus": "Les jeunes médecins y viennent plus.",
       "minus": "Coût pour l'État et les communes.",
       "budget": -0.15,
       "axes": {
        "eco": -2
       },
       "ind": {
        "services": 2,
        "emploi": 1
       },
       "fx": [
        {
         "obj": "eleves",
         "x": 52,
         "y": 30,
         "anim": "appear"
        },
        {
         "obj": "hopital",
         "x": 50,
         "y": 34,
         "anim": "grow"
        }
       ],
       "budget_note": "Salaires et locaux (estimation du jeu) : le déficit augmente."
      }
     ]
    },
    {
     "id": "v25_notre_dame",
     "kind": "banal",
     "region": "ile_de_france",
     "sector": "fiscalite",
     "title": "Notre-Dame rouvre : faut-il payer pour entrer ?",
     "simple": "Après l'incendie et plus de cinq ans de travaux, la cathédrale Notre-Dame de Paris rouvre ses portes. Elle a été réparée grâce aux dons de centaines de milliers de personnes. Des millions de visiteurs sont attendus.",
     "expert": "Réouverture au culte et à la visite après une restauration financée par une souscription nationale. Les dons ont ouvert droit à des réductions d'impôt. Débat sur un droit d'entrée pour les touristes afin de financer le patrimoine religieux.",
     "context": "En France, les grandes cathédrales appartiennent à l'État et l'entrée y est gratuite. Beaucoup d'églises de village ont besoin de travaux que les communes ne peuvent pas payer.",
     "real": {
      "date": "15 avril 2019 (incendie) ; 7 décembre 2024 (réouverture)",
      "place": "Notre-Dame de Paris",
      "fact": "Après l'incendie, la cathédrale a été restaurée grâce aux dons de particuliers et d'entreprises, et a rouvert au public après plus de cinq ans de fermeture.",
      "figures": "846 M€ de dons, environ 340 000 donateurs de 150 pays ; 2 063 jours de fermeture.",
      "sources": [
       {
        "label": "Adnkronos : Notre-Dame, la restauration en chiffres",
        "url": "https://english.adnkronos.com/2024/11/29/france-notre-dame-towards-reopening-the-restoration-in-figures/"
       },
       {
        "label": "Ministère de la Culture : dossier Notre-Dame de Paris",
        "url": "https://www.culture.gouv.fr/dossiers/notre-dame-de-paris-renaissance-d-un-symbole"
       }
      ]
     },
     "camera": {
      "region": "ile_de_france",
      "x": 52,
      "y": 25,
      "zoom": 2.6
     },
     "fx": [
      {
       "obj": "chantier_grue",
       "x": 53,
       "y": 24,
       "anim": "fade"
      },
      {
       "obj": "foule",
       "x": 52,
       "y": 27,
       "anim": "appear",
       "delay": 0.4
      },
      {
       "obj": "etiquette",
       "x": 52,
       "y": 21,
       "anim": "appear",
       "label": "846 M€ de dons",
       "delay": 0.8
      },
      {
       "obj": "pieces",
       "x": 54,
       "y": 25,
       "anim": "rise",
       "delay": 1.1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Garder l'entrée gratuite pour tous",
       "label_expert": "Maintenir la gratuité, entretien sur crédits du ministère de la Culture",
       "plus": "Chacun peut entrer, croyant ou simple visiteur.",
       "minus": "L'entretien reste payé par les impôts de tous.",
       "budget": 0,
       "axes": {
        "soc": -1
       },
       "ind": {
        "cohesion": 1
       },
       "real_note": "Une entrée payante pour les touristes a été proposée ; l'Église a maintenu la gratuité.",
       "fx": [
        {
         "obj": "foule",
         "x": 52,
         "y": 27,
         "anim": "move",
         "to": {
          "x": 53,
          "y": 24
         }
        },
        {
         "obj": "panneau",
         "x": 52,
         "y": 21,
         "anim": "appear",
         "label": "Entrée libre"
        }
       ]
      },
      {
       "id": "b",
       "label": "Faire payer 5 € aux touristes pour le patrimoine",
       "label_expert": "Droit d'entrée de 5 € affecté au patrimoine religieux",
       "plus": "De quoi réparer des églises dans tout le pays.",
       "minus": "Une entrée payante dans un lieu de prière.",
       "budget": 0.05,
       "axes": {
        "eco": 1
       },
       "ind": {
        "cohesion": -1,
        "services": 1
       },
       "fx": [
        {
         "obj": "file_attente",
         "x": 52,
         "y": 27,
         "anim": "appear"
        },
        {
         "obj": "pieces",
         "x": 54,
         "y": 25,
         "anim": "rise"
        }
       ],
       "budget_note": "Recette de billetterie pour le patrimoine : le déficit baisse un peu."
      },
      {
       "id": "c",
       "label": "Réduire l'avantage fiscal des très gros dons",
       "label_expert": "Plafonner la réduction d'impôt mécénat des très grands dons",
       "plus": "L'État perd moins de recettes d'impôt.",
       "minus": "Les grands mécènes pourraient donner moins.",
       "budget": 0.05,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": -1
       },
       "real_note": "Pour Notre-Dame, la réduction d'impôt des particuliers a été portée à 75 % jusqu'à 1 000 € de don.",
       "fx": [
        {
         "obj": "euro_flux",
         "x": 54,
         "y": 25,
         "anim": "flow",
         "to": {
          "x": 52,
          "y": 50
         }
        },
        {
         "obj": "loupe",
         "x": 53,
         "y": 24,
         "anim": "pulse"
        }
       ],
       "budget_note": "Moins de réduction d'impôt accordée : le déficit baisse un peu."
      },
      {
       "id": "d",
       "label": "Utiliser les dons restants pour les abords et l'accueil",
       "label_expert": "Affecter le reliquat de la souscription nationale aux abords",
       "plus": "Un parvis plus agréable pour les visiteurs.",
       "minus": "Des donateurs voulaient seulement la cathédrale.",
       "budget": 0,
       "axes": {
        "eco": 1
       },
       "ind": {
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 51,
         "y": 27,
         "anim": "grow"
        },
        {
         "obj": "foule",
         "x": 52,
         "y": 27,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Lancer un grand plan pour les églises de village",
       "label_expert": "Financer un plan de restauration du patrimoine religieux rural",
       "plus": "Le patrimoine des campagnes est sauvé.",
       "minus": "Dépense nouvelle pour l'État.",
       "budget": -0.1,
       "axes": {
        "soc": 1,
        "eco": -1
       },
       "ind": {
        "cohesion": 1,
        "emploi": 1
       },
       "fx": [
        {
         "obj": "foule",
         "x": 52,
         "y": 27,
         "anim": "move",
         "to": {
          "x": 53,
          "y": 24
         }
        },
        {
         "obj": "panneau",
         "x": 52,
         "y": 21,
         "anim": "appear",
         "label": "Patrimoine"
        }
       ],
       "budget_note": "Subventions de restauration (estimation du jeu) : le déficit augmente."
      }
     ]
    },
    {
     "id": "v25_panne_iberique",
     "kind": "banal",
     "region": "espagne",
     "sector": "energie",
     "title": "L'Espagne et le Portugal plongés dans le noir",
     "simple": "D'un coup, tout le courant disparaît en Espagne et au Portugal : plus de métro, plus de feux rouges, plus de paiement par carte. Il faut presque une journée pour tout rallumer. Et chez nous, serait-on prêts ?",
     "expert": "Effondrement du système électrique ibérique en quelques secondes, suivi d'un redémarrage progressif appuyé sur les interconnexions avec la France et le Maroc. Débat sur la stabilité du réseau, les interconnexions et la préparation des ménages aux crises.",
     "context": "La péninsule Ibérique est peu reliée au reste du réseau européen. L'Union européenne conseille à chacun de pouvoir tenir seul trois jours en cas de crise : eau, lampe, radio, réserves.",
     "real": {
      "date": "28 avril 2025",
      "place": "Espagne et Portugal ; brèves coupures dans le sud-ouest de la France",
      "fact": "Le réseau électrique de la péninsule Ibérique s'est effondré en quelques secondes. Métros, trains, feux de circulation et paiements par carte se sont arrêtés pendant près d'une journée.",
      "figures": "15 GW perdus en cinq secondes, environ 60 % de la consommation espagnole ; près de 60 millions d'habitants touchés ; plus de 99 % de la demande rétablie le lendemain matin.",
      "sources": [
       {
        "label": "Al Jazeera : ce que l'on sait de la panne en Espagne et au Portugal",
        "url": "https://www.aljazeera.com/news/2025/4/29/what-we-know-about-power-outage-in-spain-portugal"
       }
      ]
     },
     "camera": {
      "region": "espagne",
      "x": 40,
      "y": 90,
      "zoom": 1.2
     },
     "fx": [
      {
       "obj": "pylone",
       "x": 38,
       "y": 92,
       "anim": "shake"
      },
      {
       "obj": "immeuble",
       "x": 34,
       "y": 95,
       "anim": "close",
       "count": 3,
       "delay": 0.4
      },
      {
       "obj": "train",
       "x": 42,
       "y": 95,
       "anim": "shake",
       "delay": 0.7
      },
      {
       "obj": "etiquette",
       "x": 38,
       "y": 88,
       "anim": "appear",
       "label": "60 millions sans courant",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Envoyer à chaque foyer un guide pour tenir trois jours",
       "label_expert": "Guide de résilience des ménages : autonomie de 72 heures",
       "plus": "Chacun sait quoi faire si tout s'arrête.",
       "minus": "Un coût d'impression pour un risque rare.",
       "budget": -0.02,
       "axes": {
        "soc": 1
       },
       "ind": {
        "cohesion": 1
       },
       "real_note": "L'Union européenne a recommandé que chaque foyer puisse tenir seul 72 heures en cas de crise.",
       "fx": [
        {
         "obj": "colis",
         "x": 52,
         "y": 50,
         "anim": "appear",
         "count": 3
        },
        {
         "obj": "maison",
         "x": 50,
         "y": 52,
         "anim": "pulse"
        }
       ],
       "budget_note": "Impression et envoi du guide : le déficit augmente très peu."
      },
      {
       "id": "b",
       "label": "Renforcer les lignes électriques avec l'Espagne",
       "label_expert": "Renforcer les interconnexions transpyrénéennes, projet d'intérêt commun",
       "plus": "Les pays s'entraident mieux en cas de panne.",
       "minus": "De longs travaux à travers les Pyrénées.",
       "budget": 0,
       "once": -0.1,
       "axes": {
        "eu": -2
       },
       "ind": {
        "services": 1,
        "souverainete": -1
       },
       "fx": [
        {
         "obj": "pylone",
         "x": 42,
         "y": 86,
         "anim": "grow"
        },
        {
         "obj": "fleche",
         "x": 44,
         "y": 80,
         "anim": "flow",
         "to": {
          "x": 38,
          "y": 92
         }
        }
       ],
       "budget_note": "Part publique des lignes nouvelles : le déficit augmente une fois."
      },
      {
       "id": "c",
       "label": "Équiper hôpitaux et mairies de groupes électrogènes",
       "label_expert": "Doter les sites critiques de groupes électrogènes de secours",
       "plus": "Les lieux vitaux restent toujours allumés.",
       "minus": "Du matériel cher qui sert très rarement.",
       "budget": -0.05,
       "axes": {
        "env": 1
       },
       "ind": {
        "services": 1
       },
       "fx": [
        {
         "obj": "hopital",
         "x": 50,
         "y": 52,
         "anim": "pulse"
        },
        {
         "obj": "mairie",
         "x": 47,
         "y": 54,
         "anim": "appear"
        }
       ],
       "budget_note": "Achat et entretien des générateurs : le déficit augmente un peu."
      },
      {
       "id": "d",
       "label": "Ne rien changer, notre réseau est plus solide",
       "label_expert": "S'en tenir au plan de défense actuel du réseau",
       "plus": "Aucune dépense, le réseau français a tenu.",
       "minus": "On découvre les failles le jour de la panne.",
       "budget": 0,
       "axes": {
        "eco": 1
       },
       "ind": {
        "services": -1
       },
       "fx": [
        {
         "obj": "pylone",
         "x": 44,
         "y": 80,
         "anim": "pulse"
        },
        {
         "obj": "etiquette",
         "x": 46,
         "y": 78,
         "anim": "appear",
         "label": "Réseau français"
        }
       ]
      },
      {
       "id": "e",
       "label": "Obliger les opérateurs à garder leurs antennes allumées",
       "label_expert": "Imposer des batteries de secours aux antennes de téléphonie",
       "plus": "On peut appeler les secours même sans courant.",
       "minus": "Coût pour les opérateurs, forfaits plus chers.",
       "budget": 0,
       "axes": {
        "eco": -1,
        "soc": 1
       },
       "ind": {
        "services": 1,
        "pouvoir_achat": -1
       },
       "fx": [
        {
         "obj": "hopital",
         "x": 50,
         "y": 52,
         "anim": "pulse"
        },
        {
         "obj": "mairie",
         "x": 47,
         "y": 54,
         "anim": "appear"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "day": 7,
   "season": "hiver",
   "title": "Le grand froid",
   "mood": "tendu",
   "weather": "neige",
   "intro": "Semaine 7. Le froid mord tout le pays : les radiateurs tournent à plein, l'Europe se divise sur la Grèce, l'air devient irrespirable à Lyon et des étudiants font la queue pour manger.",
   "offer": [
    "niches_brunes",
    "non_remplacement_fonctionnaires",
    "rsa_jeunes",
    "revalorisation_enseignants",
    "controle_prestations",
    "reseaux_sociaux_15"
   ],
   "events": [
    {
     "id": "v26_grand_froid",
     "kind": "majeur",
     "region": "national",
     "sector": "energie",
     "title": "Le grand froid fait exploser la consommation d'électricité",
     "simple": "Il fait -16 °C à Orléans. Le soir, tout le pays allume chauffage, four et lumière en même temps : jamais la France n'a consommé autant d'électricité. Il faut en acheter aux voisins pour éviter les coupures.",
     "expert": "Pointe de consommation record, très sensible au chauffage électrique (environ 2 300 MW par degré en moins). Le système tient grâce aux importations et aux moyens thermiques de pointe : débat sur la gestion de la pointe, l'effacement et la rémunération des capacités.",
     "context": "Une grande partie des logements est chauffée à l'électricité, ce qui rend la France plus sensible au froid que ses voisins. L'électricité se stocke mal : il faut produire à chaque instant ce qui est consommé.",
     "real": {
      "date": "7 et 8 février 2012",
      "place": "France entière",
      "fact": "Pendant une vague de froid de treize jours, la consommation d'électricité a battu son record historique deux soirs de suite. La France a dû importer de l'électricité de ses six voisins aux heures de pointe.",
      "figures": "Près de 102 000 MW consommés au pic du second soir ; près de 7 900 MW importés ; -16,3 °C à Orléans ; chaque degré en moins ajoute environ 2 300 MW de demande en hiver.",
      "sources": [
       {
        "label": "Notre-planète.info : nouveau record de consommation d'électricité avec le froid",
        "url": "https://www.notre-planete.info/actualites/3245-record_froid_consommation_electricite"
       },
       {
        "label": "Slate : pourquoi autant de records de consommation électrique battus",
        "url": "https://www.slate.fr/story/49757/france-pic-electricite-consommation-hiver"
       }
      ]
     },
     "camera": {
      "region": "national",
      "x": 52,
      "y": 45,
      "zoom": 1.1
     },
     "fx": [
      {
       "obj": "neige",
       "x": 48,
       "y": 38,
       "anim": "appear",
       "count": 3
      },
      {
       "obj": "pylone",
       "x": 56,
       "y": 30,
       "anim": "shake",
       "delay": 0.4
      },
      {
       "obj": "fleche",
       "x": 88,
       "y": 16,
       "anim": "flow",
       "to": {
        "x": 74,
        "y": 24
       },
       "delay": 0.7
      },
      {
       "obj": "etiquette",
       "x": 52,
       "y": 34,
       "anim": "appear",
       "label": "Record de consommation",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Demander à chacun de baisser le chauffage le soir",
       "label_expert": "Alerte réseau et appel national à écrêter la pointe du soir",
       "plus": "Moins de risque de coupure, sans dépense.",
       "minus": "Effet incertain, chacun fait comme il veut.",
       "budget": 0,
       "axes": {
        "env": -1
       },
       "ind": {
        "co2": -1,
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "maison",
         "x": 46,
         "y": 30,
         "anim": "pulse",
         "count": 2
        },
        {
         "obj": "bulle",
         "x": 48,
         "y": 27,
         "anim": "appear",
         "label": "Baissez d'un degré"
        }
       ]
      },
      {
       "id": "b",
       "label": "Payer les usines qui s'arrêtent aux heures de pointe",
       "label_expert": "Rémunérer l'effacement industriel par appel d'offres du gestionnaire de réseau",
       "plus": "Le réseau tient sans rallumer de centrale.",
       "minus": "On paie des usines pour ne pas produire.",
       "budget": -0.05,
       "axes": {
        "eco": -1
       },
       "ind": {
        "services": 1,
        "co2": -1
       },
       "budget_note": "Primes versées aux industriels qui s'effacent : le déficit augmente un peu.",
       "fx": [
        {
         "obj": "usine",
         "x": 76,
         "y": 26,
         "anim": "close"
        },
        {
         "obj": "pieces",
         "x": 76,
         "y": 24,
         "anim": "rise"
        }
       ]
      },
      {
       "id": "c",
       "label": "Garder des centrales au gaz en réserve pour les grands froids",
       "label_expert": "Mécanisme de capacité rémunérant les centrales de pointe",
       "plus": "Assez de courant même par un froid extrême.",
       "minus": "Plus de CO₂, et un coût ajouté aux factures.",
       "budget": 0,
       "axes": {
        "env": 1
       },
       "ind": {
        "co2": 2,
        "souverainete": 1,
        "pouvoir_achat": -1
       },
       "real_note": "Un mécanisme de capacité a ensuite été mis en place pour garantir assez de moyens de production lors des pointes de froid.",
       "fx": [
        {
         "obj": "centrale_gaz",
         "x": 40,
         "y": 30,
         "anim": "grow"
        },
        {
         "obj": "centrale_gaz",
         "x": 40,
         "y": 30,
         "anim": "smoke",
         "delay": 0.5
        }
       ]
      },
      {
       "id": "d",
       "label": "Éteindre vitrines, bureaux vides et éclairage public la nuit",
       "label_expert": "Arrêté d'extinction nocturne des bâtiments non résidentiels",
       "plus": "Moins de gaspillage, factures publiques allégées.",
       "minus": "Rues plus sombres, commerçants mécontents.",
       "budget": 0.03,
       "axes": {
        "env": -1,
        "soc": 1
       },
       "ind": {
        "co2": -1,
        "cohesion": -1
       },
       "budget_note": "Factures d'éclairage public et des bâtiments publics en baisse : le déficit baisse un peu.",
       "fx": [
        {
         "obj": "commerce",
         "x": 50,
         "y": 26,
         "anim": "close"
        },
        {
         "obj": "mairie",
         "x": 58,
         "y": 48,
         "anim": "close"
        }
       ]
      },
      {
       "id": "e",
       "label": "Importer du courant d'Espagne par les nouvelles lignes",
       "label_expert": "Mobiliser les interconnexions transpyrénéennes renforcées pour importer à la pointe",
       "plus": "Le courant espagnol aide à passer les pointes.",
       "minus": "On dépend des voisins s'ils ont froid aussi.",
       "budget": 0,
       "axes": {
        "eu": -1
       },
       "ind": {
        "souverainete": -1,
        "co2": -1,
        "services": 1
       },
       "requires": {
        "event": "v25_panne_iberique",
        "choice": "b"
       },
       "fx": [
        {
         "obj": "pylone",
         "x": 42,
         "y": 86,
         "anim": "pulse"
        },
        {
         "obj": "fleche",
         "x": 38,
         "y": 92,
         "anim": "flow",
         "to": {
          "x": 44,
          "y": 80
         }
        }
       ]
      }
     ],
     "recall": [
      {
       "event": "v22_fukushima",
       "choice": "a",
       "text": "Il y a cinq semaines, tu as renforcé la sûreté des réacteurs : les travaux sont finis, presque tous tournent pour passer le froid.",
       "ind": {
        "souverainete": 1
       }
      },
      {
       "event": "v22_fukushima",
       "choice": "b",
       "text": "Il y a cinq semaines, tu as fermé les plus vieux réacteurs : il manque de la puissance et le risque de coupure monte.",
       "ind": {
        "services": -1,
        "co2": 1
       }
      },
      {
       "event": "v22_fukushima",
       "choice": "c",
       "text": "Il y a cinq semaines, tu as engagé la baisse du nucléaire : les fermetures ne sont pas faites, mais il faut déjà prévoir de quoi les remplacer."
      },
      {
       "event": "v22_fukushima",
       "choice": "d",
       "text": "Il y a cinq semaines, tu as prolongé les réacteurs actuels : ils fournissent l'essentiel du courant par ce froid.",
       "ind": {
        "souverainete": 1
       }
      },
      {
       "event": "v22_fukushima",
       "choice": "e",
       "text": "Il y a quelques semaines, vous avez lancé de nouveaux réacteurs : ils sont encore en chantier et n'aident pas pendant ce grand froid."
      }
     ]
    },
    {
     "id": "v26_crous",
     "kind": "banal",
     "region": "national",
     "sector": "ecole",
     "title": "Des étudiants font la queue pour manger",
     "simple": "Les petits boulots ont disparu et beaucoup d'étudiants n'ont plus de quoi manger correctement. Devant les distributions alimentaires, les files s'allongent. Faut-il un repas à 1 € pour tous ?",
     "expert": "Précarité étudiante aggravée par la perte des emplois d'appoint. Arbitrage entre une aide universelle (peu de non-recours, coût élevé) et une aide ciblée sur critères sociaux (moins chère, mais avec des effets de seuil).",
     "context": "Le prix payé au restaurant universitaire est bien inférieur au coût réel du repas : l'État paie la différence. Environ un étudiant sur trois est boursier.",
     "real": {
      "date": "21 janvier 2021 (annonce) ; fin janvier 2021 (mise en place)",
      "place": "Restaurants universitaires des Crous, partout en France",
      "fact": "Pendant la crise sanitaire, le repas à 1 € dans les restaurants universitaires, jusque-là réservé aux boursiers, a été ouvert à tous les étudiants. La fréquentation a fortement augmenté.",
      "figures": "Environ 5,5 millions de repas à 1 € servis en deux mois et demi dans 540 restaurants ; de 160 000 à 780 000 repas par semaine.",
      "sources": [
       {
        "label": "Ministère de l'Enseignement supérieur : 5,5 millions de repas à 1 € servis par les Crous",
        "url": "https://www.etudiant.gouv.fr/sites/default/files/2021-04/5-5-millions-de-repas-1-servis-par-les-crous-depuis-fin-janvier-2021-5114.pdf"
       },
       {
        "label": "L'Étudiant : les non-boursiers protestent contre la fin des repas à un euro",
        "url": "https://www.letudiant.fr/lifestyle/aides-financieres/les-etudiants-non-boursiers-protestent-contre-la-fin-des-repas-a-un-euro-1.html"
       }
      ]
     },
     "camera": {
      "region": "national",
      "x": 52,
      "y": 48,
      "zoom": 1.1
     },
     "fx": [
      {
       "obj": "file_attente",
       "x": 50,
       "y": 25,
       "anim": "appear"
      },
      {
       "obj": "eleves",
       "x": 66,
       "y": 54,
       "anim": "appear",
       "delay": 0.4
      },
      {
       "obj": "ecole",
       "x": 31,
       "y": 64,
       "anim": "pulse",
       "delay": 0.7
      },
      {
       "obj": "etiquette",
       "x": 52,
       "y": 31,
       "anim": "appear",
       "label": "Repas à 1 €",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Repas à 1 € pour tous les étudiants",
       "label_expert": "Tarif social Crous universel, compensé par subvention de service public",
       "plus": "Personne n'a honte de venir, la file se vide.",
       "minus": "On aide aussi ceux qui n'en ont pas besoin.",
       "budget": -0.05,
       "axes": {
        "eco": -2
       },
       "ind": {
        "cohesion": 1,
        "services": 1
       },
       "budget_note": "L'État paie la différence avec le coût du repas : le déficit augmente un peu.",
       "fx": [
        {
         "obj": "file_attente",
         "x": 50,
         "y": 25,
         "anim": "fade"
        },
        {
         "obj": "eleves",
         "x": 52,
         "y": 27,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Repas à 1 € seulement pour les boursiers et précaires",
       "label_expert": "Tarif social ciblé sur les boursiers et étudiants précaires",
       "plus": "L'aide va d'abord à ceux qui en ont besoin.",
       "minus": "Les étudiants juste au-dessus du seuil sont exclus.",
       "budget": -0.015,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Repas aidés pour une partie des étudiants : le déficit augmente très peu.",
       "real_note": "Le repas à 1 € a ensuite de nouveau été réservé aux boursiers et aux étudiants précaires.",
       "fx": [
        {
         "obj": "eleves",
         "x": 52,
         "y": 27,
         "anim": "appear"
        },
        {
         "obj": "loupe",
         "x": 50,
         "y": 24,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "c",
       "label": "Augmenter les bourses plutôt que subventionner les repas",
       "label_expert": "Revaloriser les échelons des bourses sur critères sociaux",
       "plus": "Chacun dépense l'aide selon ses besoins.",
       "minus": "Plus cher, et rien pour les non-boursiers.",
       "budget": -0.08,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Bourses plus élevées versées toute l'année : le déficit augmente.",
       "fx": [
        {
         "obj": "pieces",
         "x": 52,
         "y": 27,
         "anim": "rise"
        },
        {
         "obj": "eleves",
         "x": 66,
         "y": 54,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "d",
       "label": "Laisser les associations distribuer l'aide alimentaire",
       "label_expert": "Subventionner les épiceries solidaires étudiantes par appel à projets",
       "plus": "Une aide de proximité qui coûte peu à l'État.",
       "minus": "Des files d'attente et la gêne de demander.",
       "budget": -0.005,
       "axes": {
        "eco": 1
       },
       "ind": {
        "cohesion": -1
       },
       "budget_note": "Petites subventions aux associations : le déficit augmente très peu.",
       "fx": [
        {
         "obj": "colis",
         "x": 50,
         "y": 26,
         "anim": "appear",
         "count": 2
        },
        {
         "obj": "file_attente",
         "x": 52,
         "y": 24,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "e",
       "label": "Faire payer plus cher les étudiants venus hors d'Europe",
       "label_expert": "Appliquer pleinement les droits différenciés aux étudiants extra-européens",
       "plus": "Recettes pour les universités.",
       "minus": "Moins d'étudiants étrangers attirés.",
       "budget": 0.05,
       "axes": {
        "eu": 1,
        "eco": 1
       },
       "ind": {
        "cohesion": -1,
        "services": 1
       },
       "fx": [
        {
         "obj": "colis",
         "x": 50,
         "y": 26,
         "anim": "appear",
         "count": 2
        },
        {
         "obj": "file_attente",
         "x": 52,
         "y": 24,
         "anim": "pulse"
        }
       ],
       "budget_note": "Droits d'inscription plus élevés (estimation du jeu, non vérifiée) : recette, le déficit baisse."
      }
     ]
    },
    {
     "id": "v26_grece",
     "kind": "majeur",
     "region": "bruxelles",
     "sector": "europe",
     "title": "La Grèce au bord de la sortie de l'euro",
     "simple": "La Grèce ne peut plus rembourser ses dettes. Ses habitants votent « non » aux économies demandées par les pays qui lui prêtent de l'argent. Va-t-elle quitter l'euro ? La France doit choisir sa position.",
     "expert": "Défaut imminent, contrôle des capitaux et référendum rejetant le plan des créanciers. Négociation d'un troisième programme du Mécanisme européen de stabilité : conditionnalité, soutenabilité de la dette, risque de sortie de la zone euro.",
     "context": "La France a prêté à la Grèce, directement et par les fonds européens. Aucun pays n'a jamais quitté l'euro : les effets d'une sortie sur les autres membres sont mal connus.",
     "real": {
      "date": "5 juillet 2015 (référendum) ; 12 et 13 juillet 2015 (accord)",
      "place": "Athènes et Bruxelles",
      "fact": "Les électeurs grecs ont rejeté par référendum les conditions proposées par les créanciers. Une semaine plus tard, le gouvernement grec a pourtant accepté un troisième programme d'aide, en échange de réformes et de privatisations.",
      "figures": "Environ 61 % de « non » au référendum ; programme pouvant aller jusqu'à 86 Md€ versé par le Mécanisme européen de stabilité, dont une première tranche de 26 Md€.",
      "sources": [
       {
        "label": "Wikipédia (anglais) : troisième programme d'ajustement économique pour la Grèce",
        "url": "https://en.wikipedia.org/wiki/Third_Economic_Adjustment_Programme_for_Greece"
       },
       {
        "label": "RTBF : le jour où la Grèce est passée tout près du Grexit",
        "url": "https://www.rtbf.be/article/autopsie-episode-1-le-jour-ou-la-grece-est-passee-tout-pres-du-grexit-9349128"
       }
      ]
     },
     "camera": {
      "region": "bruxelles",
      "x": 63,
      "y": 5,
      "zoom": 1.2
     },
     "fx": [
      {
       "obj": "batiment_ue",
       "x": 63,
       "y": 3,
       "anim": "appear"
      },
      {
       "obj": "drapeau_ue",
       "x": 66,
       "y": 5,
       "anim": "pulse",
       "delay": 0.4
      },
      {
       "obj": "bulle",
       "x": 60,
       "y": 9,
       "anim": "appear",
       "label": "Oui ou non ?",
       "delay": 0.7
      },
      {
       "obj": "etiquette",
       "x": 67,
       "y": 9,
       "anim": "appear",
       "label": "Dette grecque",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Prêter vite à la Grèce, avec des conditions allégées",
       "label_expert": "Programme du MES à conditionnalité allégée",
       "plus": "La zone euro reste unie, la Grèce respire.",
       "minus": "Les prêteurs risquent de ne pas être remboursés.",
       "budget": 0,
       "axes": {
        "eu": -2,
        "eco": -1
       },
       "ind": {
        "cohesion": 1,
        "souverainete": -1
       },
       "real_note": "Les pays de la zone euro ont finalement accordé un troisième programme, avec des conditions strictes.",
       "fx": [
        {
         "obj": "euro_flux",
         "x": 63,
         "y": 4,
         "anim": "flow",
         "to": {
          "x": 99,
          "y": 30
         }
        },
        {
         "obj": "drapeau_ue",
         "x": 63,
         "y": 6,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Laisser la Grèce sortir de l'euro",
       "label_expert": "Organiser un « Grexit » ordonné hors de l'union monétaire",
       "plus": "Plus de nouveaux prêts, chaque pays assume ses choix.",
       "minus": "Les prêts déjà accordés risquent d'être perdus.",
       "budget": 0,
       "once": -2,
       "axes": {
        "eu": 2,
        "eco": 1
       },
       "ind": {
        "souverainete": 1,
        "pouvoir_achat": -1
       },
       "budget_note": "Une partie des prêts français ne serait jamais remboursée : le déficit augmente une fois.",
       "fx": [
        {
         "obj": "frontiere",
         "x": 96,
         "y": 26,
         "anim": "appear"
        },
        {
         "obj": "drapeau_ue",
         "x": 63,
         "y": 4,
         "anim": "shake"
        }
       ]
      },
      {
       "id": "c",
       "label": "Effacer une partie de la dette grecque",
       "label_expert": "Restructurer la dette : maturités allongées et taux abaissés",
       "plus": "La Grèce peut enfin rembourser le reste.",
       "minus": "Les pays prêteurs touchent moins d'intérêts.",
       "budget": -0.2,
       "axes": {
        "eu": -1,
        "eco": -2
       },
       "ind": {
        "cohesion": 1,
        "souverainete": -1
       },
       "budget_note": "Intérêts en moins sur les prêts français : le déficit augmente un peu.",
       "fx": [
        {
         "obj": "pieces",
         "x": 63,
         "y": 5,
         "anim": "fade"
        },
        {
         "obj": "batiment_ue",
         "x": 63,
         "y": 3,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "d",
       "label": "Prêter seulement contre des réformes strictes",
       "label_expert": "Mémorandum strict : privatisations, TVA relevée, réforme des retraites",
       "plus": "Les prêts sont mieux garantis, les intérêts rentrent.",
       "minus": "Austérité dure pour les Grecs, colère dans la rue.",
       "budget": 0.1,
       "axes": {
        "eco": 2,
        "eu": -1
       },
       "ind": {
        "cohesion": -1,
        "souverainete": 1
       },
       "budget_note": "Intérêts perçus sur des prêts mieux garantis : le déficit baisse un peu.",
       "fx": [
        {
         "obj": "cadenas",
         "x": 64,
         "y": 6,
         "anim": "appear"
        },
        {
         "obj": "euro_flux",
         "x": 63,
         "y": 4,
         "anim": "flow",
         "to": {
          "x": 99,
          "y": 30
         }
        }
       ]
      },
      {
       "id": "e",
       "label": "Emprunter ensemble en Europe pour aider la Grèce",
       "label_expert": "Mutualiser une partie des dettes par des euro-obligations",
       "plus": "La zone euro se montre solidaire.",
       "minus": "La France s'engage pour les autres.",
       "budget": 0,
       "axes": {
        "eu": -2,
        "eco": -1
       },
       "ind": {
        "cohesion": 1,
        "souverainete": -1
       },
       "fx": [
        {
         "obj": "euro_flux",
         "x": 63,
         "y": 4,
         "anim": "flow",
         "to": {
          "x": 99,
          "y": 30
         }
        },
        {
         "obj": "drapeau_ue",
         "x": 63,
         "y": 6,
         "anim": "appear"
        }
       ]
      }
     ]
    },
    {
     "id": "v26_pollution_lyon",
     "kind": "banal",
     "region": "auvergne_rhone_alpes",
     "sector": "transports",
     "title": "Une brume de pollution sur Lyon",
     "simple": "Pas un souffle de vent depuis des jours : une brume grise recouvre Lyon. Les médecins conseillent d'éviter le sport dehors. Faut-il empêcher une partie des voitures de rouler ?",
     "expert": "Épisode de pollution aux particules fines sous inversion de température. Le préfet peut déclencher des mesures d'urgence graduées : circulation alternée, circulation différenciée selon la vignette, abaissement des vitesses, gratuité des transports.",
     "context": "La pollution de l'air est associée à des dizaines de milliers de décès prématurés par an en France. L'hiver, le chauffage au bois, le trafic et l'industrie en sont les principales sources.",
     "real": {
      "date": "Du 30 novembre au 9 décembre 2016",
      "place": "Lyon et Villeurbanne ; aussi Paris, Grenoble et Lille",
      "fact": "Un anticyclone a bloqué la pollution aux particules fines au-dessus de plusieurs villes. Le préfet du Rhône a imposé pour la première fois la circulation alternée à Lyon et Villeurbanne, par anticipation, tandis que Paris l'appliquait plusieurs jours de suite avec des transports gratuits.",
      "figures": "Jusqu'à 90 µg/m³ de particules à Lyon pour un seuil d'alerte de 80 ; 146 µg/m³ au plus fort de l'épisode ; à Paris, la circulation alternée n'a réduit le trafic que de 5 à 10 %.",
      "sources": [
       {
        "label": "Banque des Territoires : la circulation alternée reconduite en Île-de-France, Lyon s'y met à son tour",
        "url": "https://www.banquedesterritoires.fr/pollution-circulation-alternee-reconduite-en-ile-de-france-lyon-sy-met-son-tour"
       }
      ]
     },
     "camera": {
      "region": "auvergne_rhone_alpes",
      "x": 66,
      "y": 55,
      "zoom": 2.2
     },
     "fx": [
      {
       "obj": "etiquette",
       "x": 67,
       "y": 51,
       "anim": "appear",
       "label": "Pic de particules fines"
      },
      {
       "obj": "voiture",
       "x": 64,
       "y": 56,
       "anim": "move",
       "to": {
        "x": 69,
        "y": 56
       },
       "count": 3,
       "delay": 0.3
      },
      {
       "obj": "usine",
       "x": 69,
       "y": 58,
       "anim": "smoke",
       "delay": 0.6
      },
      {
       "obj": "bus",
       "x": 66,
       "y": 53,
       "anim": "appear",
       "delay": 0.9
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Circulation alternée : un jour sur deux selon la plaque",
       "label_expert": "Arrêté préfectoral de circulation alternée par anticipation",
       "plus": "Moins de voitures, l'air s'améliore plus vite.",
       "minus": "Des dérogations partout, un effet souvent faible.",
       "budget": 0,
       "axes": {
        "soc": 1,
        "env": -1
       },
       "ind": {
        "co2": -1,
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "panneau",
         "x": 65,
         "y": 58,
         "anim": "appear",
         "label": "Plaques impaires"
        },
        {
         "obj": "voiture",
         "x": 66,
         "y": 56,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "b",
       "label": "Transports en commun gratuits pendant le pic",
       "label_expert": "Gratuité temporaire du réseau, compensée à l'autorité organisatrice",
       "plus": "On incite à laisser la voiture sans rien interdire.",
       "minus": "Billets perdus, et peu d'automobilistes changent.",
       "budget": -0.005,
       "axes": {
        "eco": -1,
        "env": -1
       },
       "ind": {
        "co2": -1,
        "cohesion": 1
       },
       "budget_note": "Billets non vendus compensés au réseau : le déficit augmente très peu.",
       "fx": [
        {
         "obj": "bus",
         "x": 68,
         "y": 56,
         "anim": "move",
         "to": {
          "x": 65,
          "y": 54
         }
        },
        {
         "obj": "foule",
         "x": 67,
         "y": 54,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "N'autoriser que les voitures les moins polluantes",
       "label_expert": "Circulation différenciée selon la vignette Crit'Air",
       "plus": "Les vieux véhicules polluants restent au garage.",
       "minus": "Les ménages modestes, aux vieilles voitures, sont visés.",
       "budget": 0,
       "axes": {
        "env": -2,
        "soc": 1
       },
       "ind": {
        "co2": -2,
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "etiquette",
         "x": 66,
         "y": 58,
         "anim": "appear",
         "label": "Vignette obligatoire"
        },
        {
         "obj": "voiture",
         "x": 65,
         "y": 56,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "d",
       "label": "Simple conseil de limiter ses trajets",
       "label_expert": "Procédure d'information-recommandation, sans mesure contraignante",
       "plus": "Aucune contrainte pour ceux qui doivent rouler.",
       "minus": "La pollution dure tant que le vent ne revient pas.",
       "budget": 0,
       "axes": {
        "eco": 1,
        "env": 1
       },
       "ind": {
        "co2": 1,
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "bulle",
         "x": 67,
         "y": 52,
         "anim": "appear",
         "label": "Limitez vos trajets"
        },
        {
         "obj": "voiture",
         "x": 64,
         "y": 56,
         "anim": "move",
         "to": {
          "x": 69,
          "y": 56
         }
        }
       ]
      },
      {
       "id": "e",
       "label": "Faire payer l'entrée des voitures en ville",
       "label_expert": "Instaurer un péage urbain pendant les pics de pollution",
       "plus": "Moins de voitures, recette en plus.",
       "minus": "Pénalise ceux qui n'ont pas d'autre choix.",
       "budget": 0.01,
       "axes": {
        "eco": 1,
        "env": -1
       },
       "ind": {
        "co2": -1,
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "etiquette",
         "x": 66,
         "y": 58,
         "anim": "appear",
         "label": "Péage"
        },
        {
         "obj": "voiture",
         "x": 65,
         "y": 56,
         "anim": "fade"
        }
       ],
       "budget_note": "Recette du péage : le déficit baisse un peu."
      }
     ]
    }
   ]
  },
  {
   "day": 8,
   "season": "hiver",
   "title": "Quand l'eau monte",
   "mood": "tendu",
   "weather": "pluie",
   "intro": "Semaine 8. L'hiver s'achève sans répit : des familles fuient la guerre aux portes de l'Europe, la Seine déborde, les pêcheurs de Boulogne attendent leurs licences et le pays relève son niveau d'alerte.",
   "offer": [
    "retraite_60",
    "baisse_impots_production",
    "defense_europeenne_emprunt",
    "vols_courts_train",
    "service_militaire"
   ],
   "events": [
    {
     "id": "v26_ukraine",
     "kind": "majeur",
     "region": "frontiere_est",
     "sector": "immigration",
     "title": "Des familles fuient la guerre en Ukraine",
     "simple": "La guerre a éclaté aux portes de l'Europe. Des millions de femmes et d'enfants fuient l'Ukraine. Des milliers arrivent en France, souvent avec une seule valise. Comment les accueillir ?",
     "expert": "Activation par le Conseil de l'UE de la directive de protection temporaire : droit au séjour, accès au marché du travail, aux soins et à l'allocation pour demandeur d'asile. Enjeux : capacités d'hébergement, répartition sur le territoire, dépense non prévue en loi de finances.",
     "context": "La protection temporaire évite à chacun une longue demande d'asile. Elle est accordée pour un an, renouvelable. Les pays voisins de l'Ukraine, comme la Pologne, ont accueilli bien plus de personnes que la France.",
     "real": {
      "date": "4 mars 2022 (protection temporaire activée) ; mars 2023 (bilan de la Cour des comptes)",
      "place": "Frontières de l'Ukraine, puis grandes villes et régions de l'est de la France",
      "fact": "Après l'invasion de l'Ukraine, l'Union européenne a activé pour la première fois la protection temporaire : séjour, droit au travail et aides pour les personnes déplacées. En France, une grande partie de l'accueil a reposé sur des particuliers.",
      "figures": "Environ 115 000 personnes arrivées en France, surtout des femmes et des enfants ; 87 000 places d'hébergement créées ; l'accueil chez des particuliers représentait 43 % des solutions à la fin de l'été ; environ 634 M€ dépensés la première année par l'État et la Sécurité sociale.",
      "sources": [
       {
        "label": "Maire-info : accueil des réfugiés ukrainiens, le bilan de la Cour des comptes",
        "url": "https://www.maire-info.com/guerre-en-ukraine/accueil-des-refugies-ukrainiens-la-cour-des-comptes-fait-le-bilan-et-demande-%C3%A0-l'%C3%89tat-de-mieux-anticiper--article-27258"
       }
      ]
     },
     "camera": {
      "region": "frontiere_est",
      "x": 92,
      "y": 15,
      "zoom": 1.2
     },
     "fx": [
      {
       "obj": "foule",
       "x": 97,
       "y": 13,
       "anim": "appear"
      },
      {
       "obj": "train",
       "x": 95,
       "y": 16,
       "anim": "move",
       "to": {
        "x": 80,
        "y": 21
       },
       "delay": 0.4
      },
      {
       "obj": "bus",
       "x": 96,
       "y": 18,
       "anim": "move",
       "to": {
        "x": 78,
        "y": 24
       },
       "delay": 0.7
      },
      {
       "obj": "etiquette",
       "x": 92,
       "y": 10,
       "anim": "appear",
       "label": "Protection temporaire",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Accueillir largement, avec logement et allocation",
       "label_expert": "Protection temporaire : séjour, allocation pour demandeur d'asile, hébergement",
       "plus": "Les familles sont protégées dès leur arrivée.",
       "minus": "Plus d'un demi-milliard, et peu de places libres.",
       "budget": -0.6,
       "axes": {
        "soc": -1,
        "eu": -1
       },
       "ind": {
        "cohesion": 1,
        "services": -1
       },
       "budget_note": "Allocations et hébergement payés par l'État : le déficit augmente.",
       "real_note": "La France a appliqué la protection temporaire, avec allocation et hébergement d'urgence.",
       "fx": [
        {
         "obj": "immeuble",
         "x": 78,
         "y": 24,
         "anim": "appear"
        },
        {
         "obj": "foule",
         "x": 80,
         "y": 22,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Loger les familles chez des habitants volontaires",
       "label_expert": "Hébergement citoyen indemnisé, coordonné par les préfectures",
       "plus": "Un accueil moins cher et plus chaleureux.",
       "minus": "Les hôtes s'épuisent, l'accueil reste fragile.",
       "budget": -0.2,
       "axes": {
        "soc": -1,
        "eco": 1
       },
       "ind": {
        "cohesion": 2
       },
       "budget_note": "Indemnités aux familles qui hébergent : le déficit augmente un peu.",
       "fx": [
        {
         "obj": "maison",
         "x": 76,
         "y": 26,
         "anim": "appear",
         "count": 2
        },
        {
         "obj": "personnage",
         "x": 78,
         "y": 24,
         "anim": "move",
         "to": {
          "x": 76,
          "y": 26
         }
        }
       ]
      },
      {
       "id": "c",
       "label": "Aider surtout les pays voisins de l'Ukraine",
       "label_expert": "Financer l'accueil en Pologne et en Moldavie via le budget de l'UE",
       "plus": "L'aide va là où arrivent la plupart des réfugiés.",
       "minus": "Moins de places en France, voisins débordés.",
       "budget": -0.1,
       "axes": {
        "soc": 1,
        "eu": -1
       },
       "ind": {
        "cohesion": -1,
        "souverainete": 1
       },
       "budget_note": "Contribution française à l'aide européenne : le déficit augmente un peu.",
       "fx": [
        {
         "obj": "euro_flux",
         "x": 63,
         "y": 4,
         "anim": "flow",
         "to": {
          "x": 97,
          "y": 13
         }
        },
        {
         "obj": "drapeau_ue",
         "x": 96,
         "y": 14,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Accueillir en misant sur le travail plutôt que les allocations",
       "label_expert": "Accès immédiat à l'emploi et allocation plafonnée dans le temps",
       "plus": "Les réfugiés travaillent et paient des cotisations.",
       "minus": "Des familles sans emploi vite à court d'argent.",
       "budget": 0.05,
       "axes": {
        "eco": 1,
        "soc": 1
       },
       "ind": {
        "emploi": 1,
        "cohesion": -1
       },
       "budget_note": "Cotisations des réfugiés au travail et aides plus courtes : le déficit baisse un peu.",
       "fx": [
        {
         "obj": "usine",
         "x": 76,
         "y": 26,
         "anim": "pulse"
        },
        {
         "obj": "personnage",
         "x": 78,
         "y": 24,
         "anim": "move",
         "to": {
          "x": 76,
          "y": 26
         }
        }
       ]
      },
      {
       "id": "e",
       "label": "Payer l'aide avec les revenus des avoirs russes gelés",
       "label_expert": "Affecter les revenus des avoirs russes immobilisés à l'aide",
       "plus": "L'agresseur paie, pas le contribuable.",
       "minus": "Base juridique fragile, risques financiers.",
       "budget": 0.1,
       "axes": {
        "eu": -1,
        "soc": 1
       },
       "ind": {
        "souverainete": 1,
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "euro_flux",
         "x": 63,
         "y": 4,
         "anim": "flow",
         "to": {
          "x": 97,
          "y": 13
         }
        },
        {
         "obj": "drapeau_ue",
         "x": 96,
         "y": 14,
         "anim": "appear"
        }
       ],
       "budget_note": "Une part de l'aide est financée sans impôt : le déficit baisse un peu."
      }
     ]
    },
    {
     "id": "v26_brexit_peche",
     "kind": "banal",
     "region": "hauts_de_france",
     "sector": "agriculture",
     "title": "Les pêcheurs de Boulogne privés d'eaux britanniques",
     "simple": "Depuis que le Royaume-Uni a quitté l'Union européenne, les bateaux de Boulogne doivent avoir une licence pour pêcher dans ses eaux, tout près de nos côtes. Beaucoup attendent toujours, certains restent à quai.",
     "expert": "Mise en œuvre du volet pêche de l'accord de commerce et de coopération : licences délivrées sur preuve d'antériorité, période d'ajustement et réduction progressive des quotas de l'UE dans les eaux britanniques.",
     "context": "Une grande partie du poisson pêché par les bateaux des Hauts-de-France vient des eaux britanniques. La pêche relève de la compétence exclusive de l'Union européenne.",
     "real": {
      "date": "24 décembre 2020 (accord) ; 26 avril 2021 (plan présenté à Boulogne-sur-Mer)",
      "place": "Boulogne-sur-Mer, Pas-de-Calais",
      "fact": "Après la sortie du Royaume-Uni de l'Union européenne, les pêcheurs français ont dû obtenir des licences, délivrées au compte-gouttes, pour continuer à pêcher dans les eaux britanniques. L'État a présenté à Boulogne-sur-Mer un plan d'aide aux pêcheurs et aux mareyeurs.",
      "figures": "Plan de 100 M€ validé par la Commission européenne ; arrêts temporaires indemnisés à 70 % du chiffre d'affaires de référence ; aide forfaitaire jusqu'à 30 000 € ; plan de sortie de flotte pour les bateaux dépendants des eaux britanniques.",
      "sources": [
       {
        "label": "Ministère de la Mer : l'accompagnement des pêcheurs français après l'accord post-Brexit",
        "url": "https://mer.gouv.fr/laccompagnement-des-pecheurs-francais-aux-consequences-de-laccord-post-brexit"
       }
      ]
     },
     "camera": {
      "region": "hauts_de_france",
      "x": 45,
      "y": 6,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "bateau_peche",
       "x": 37,
       "y": 4,
       "anim": "move",
       "to": {
        "x": 40,
        "y": 6
       },
       "count": 2
      },
      {
       "obj": "port",
       "x": 46,
       "y": 6,
       "anim": "pulse",
       "delay": 0.4
      },
      {
       "obj": "cadenas",
       "x": 46,
       "y": 9,
       "anim": "appear",
       "delay": 0.7
      },
      {
       "obj": "etiquette",
       "x": 49,
       "y": 11,
       "anim": "appear",
       "label": "Licences en attente",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Indemniser les bateaux bloqués au port",
       "label_expert": "Arrêts temporaires indemnisés à 70 % du chiffre d'affaires",
       "plus": "Les marins sont payés en attendant les licences.",
       "minus": "Argent public, sans garantie d'avoir les licences.",
       "budget": 0,
       "once": -0.03,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Indemnités versées une fois aux armateurs : le déficit augmente un peu.",
       "real_note": "Un plan d'aide a indemnisé les arrêts temporaires et soutenu la trésorerie des entreprises.",
       "fx": [
        {
         "obj": "bateau_peche",
         "x": 40,
         "y": 6,
         "anim": "pulse"
        },
        {
         "obj": "pieces",
         "x": 46,
         "y": 7,
         "anim": "rise"
        }
       ]
      },
      {
       "id": "b",
       "label": "Payer la casse des bateaux de ceux qui arrêtent",
       "label_expert": "Plan de sortie de flotte financé par la réserve d'ajustement au Brexit",
       "plus": "Ceux qui veulent arrêter partent avec une aide.",
       "minus": "Moins de bateaux, un port qui se vide peu à peu.",
       "budget": 0,
       "once": -0.02,
       "axes": {
        "eco": 1
       },
       "ind": {
        "cohesion": -1,
        "souverainete": -1
       },
       "budget_note": "Primes de sortie, en partie payées par l'Union : le déficit augmente un peu.",
       "fx": [
        {
         "obj": "bateau_peche",
         "x": 40,
         "y": 5,
         "anim": "fade"
        },
        {
         "obj": "port",
         "x": 46,
         "y": 6,
         "anim": "close"
        }
       ]
      },
      {
       "id": "c",
       "label": "Bloquer les arrivages britanniques dans nos ports",
       "label_expert": "Contrôles sanitaires et douaniers renforcés, en mesure de rétorsion",
       "plus": "Londres est poussé à délivrer les licences.",
       "minus": "Escalade commerciale, nos ports pénalisés aussi.",
       "budget": -0.005,
       "axes": {
        "eu": 2,
        "soc": 1
       },
       "ind": {
        "souverainete": 1,
        "services": -1
       },
       "budget_note": "Douaniers et contrôles en plus : le déficit augmente très peu.",
       "fx": [
        {
         "obj": "douane",
         "x": 47,
         "y": 8,
         "anim": "appear"
        },
        {
         "obj": "camion",
         "x": 49,
         "y": 9,
         "anim": "shake"
        }
       ]
      },
      {
       "id": "d",
       "label": "Laisser l'Union européenne négocier les licences",
       "label_expert": "Saisir le comité spécialisé pêche de l'accord de commerce et de coopération",
       "plus": "L'Europe pèse plus lourd que la France seule.",
       "minus": "Des mois d'attente pour les marins de Boulogne.",
       "budget": 0,
       "axes": {
        "eu": -2
       },
       "ind": {
        "souverainete": -1
       },
       "fx": [
        {
         "obj": "batiment_ue",
         "x": 63,
         "y": 3,
         "anim": "appear"
        },
        {
         "obj": "drapeau_ue",
         "x": 60,
         "y": 5,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "e",
       "label": "Saisir le tribunal prévu par l'accord avec Londres",
       "label_expert": "Engager la procédure d'arbitrage de l'accord de commerce",
       "plus": "On fait respecter l'accord par le droit.",
       "minus": "Procédure lente, bateaux toujours à quai.",
       "budget": 0,
       "axes": {
        "eu": 1
       },
       "ind": {
        "souverainete": 1
       },
       "fx": [
        {
         "obj": "batiment_ue",
         "x": 63,
         "y": 3,
         "anim": "appear"
        },
        {
         "obj": "drapeau_ue",
         "x": 60,
         "y": 5,
         "anim": "pulse"
        }
       ]
      }
     ]
    },
    {
     "id": "v26_crue_seine",
     "kind": "majeur",
     "region": "ile_de_france",
     "sector": "logement",
     "title": "La Seine sort de son lit",
     "simple": "Il pleut depuis des semaines. La Seine déborde à Paris, les quais disparaissent sous l'eau, des caves et des maisons sont inondées autour de la capitale. Comment protéger les habitants la prochaine fois ?",
     "expert": "Crue lente de la Seine et de la Marne après un cumul de pluie exceptionnel. Leviers : régime de catastrophe naturelle, fonds de prévention des risques naturels majeurs (fonds Barnier), ouvrages écrêteurs de crue, urbanisme encadré par les plans de prévention du risque inondation.",
     "context": "Une crue centennale toucherait des millions de Franciliens et coûterait des dizaines de milliards d'euros. Les grands lacs-réservoirs en amont réduisent la hauteur de l'eau, sans tout empêcher.",
     "real": {
      "date": "Fin janvier 2018 (pic le 28 janvier à Paris)",
      "place": "Paris et vallées de la Seine et de la Marne",
      "fact": "Après des pluies record, la Seine a débordé à Paris et dans de nombreuses communes en amont et en aval. Des centaines de communes ont demandé la reconnaissance de l'état de catastrophe naturelle.",
      "figures": "5,86 m à Paris, contre 6,10 m lors de la crue précédente ; 275 communes reconnues en catastrophe naturelle dès la première vague ; la crue précédente avait causé 182 000 sinistres pour plus de 1,4 Md€.",
      "sources": [
       {
        "label": "Public Sénat : inondations, 275 communes reconnues en état de catastrophe naturelle",
        "url": "https://www.publicsenat.fr/actualites/politique/inondations-de-janvier-275-communes-reconnues-en-etat-de-catastrophe-naturelle"
       }
      ]
     },
     "camera": {
      "region": "ile_de_france",
      "x": 51,
      "y": 24,
      "zoom": 2.2
     },
     "fx": [
      {
       "obj": "orage",
       "x": 47,
       "y": 20,
       "anim": "appear"
      },
      {
       "obj": "inondation",
       "x": 50,
       "y": 24,
       "anim": "grow",
       "delay": 0.4
      },
      {
       "obj": "maison",
       "x": 54,
       "y": 26,
       "anim": "shake",
       "count": 2,
       "delay": 0.7
      },
      {
       "obj": "etiquette",
       "x": 50,
       "y": 20,
       "anim": "appear",
       "label": "La Seine monte",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Indemniser vite les sinistrés",
       "label_expert": "Arrêté de catastrophe naturelle accéléré et avances aux sinistrés",
       "plus": "Les familles réparent et rentrent plus vite.",
       "minus": "On reconstruit au même endroit, toujours à risque.",
       "budget": 0,
       "once": -0.1,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Avances et part publique des indemnités : le déficit augmente une fois.",
       "real_note": "Des centaines de communes ont été reconnues en état de catastrophe naturelle en quelques semaines.",
       "fx": [
        {
         "obj": "pieces",
         "x": 52,
         "y": 25,
         "anim": "rise"
        },
        {
         "obj": "maison",
         "x": 54,
         "y": 26,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Adapter les maisons pour qu'elles résistent à l'eau",
       "label_expert": "Subventions du fonds Barnier pour adapter les logements exposés",
       "plus": "Les maisons restent habitables après la crue.",
       "minus": "Aide modeste, travaux en partie à la charge des familles.",
       "budget": 0,
       "once": -0.2,
       "axes": {
        "env": -1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Subventions aux travaux dans les maisons : le déficit augmente une fois.",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 54,
         "y": 26,
         "anim": "grow"
        },
        {
         "obj": "maison",
         "x": 52,
         "y": 27,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "c",
       "label": "Construire de nouveaux bassins de stockage en amont",
       "label_expert": "Aménagement de la Bassée : casiers de stockage cofinancés État-collectivités",
       "plus": "Moins d'eau dans Paris lors des grandes crues.",
       "minus": "Des années de travaux, des terres agricoles noyées.",
       "budget": -0.02,
       "once": -0.5,
       "axes": {
        "eco": -1
       },
       "ind": {
        "services": 2
       },
       "budget_note": "Grands travaux puis entretien : le déficit augmente.",
       "fx": [
        {
         "obj": "barrage",
         "x": 58,
         "y": 30,
         "anim": "grow"
        },
        {
         "obj": "chantier_grue",
         "x": 57,
         "y": 31,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Rembourser moins ceux qui rebâtissent en zone inondable",
       "label_expert": "Moduler la franchise CatNat hors plan de prévention des risques",
       "plus": "On cesse de payer pour reconstruire au même endroit.",
       "minus": "Des sinistrés touchent moins, parfois sans choix.",
       "budget": 0.05,
       "axes": {
        "eco": 1
       },
       "ind": {
        "cohesion": -1
       },
       "budget_note": "Indemnités garanties par l'État en baisse : le déficit baisse un peu.",
       "fx": [
        {
         "obj": "panneau",
         "x": 52,
         "y": 27,
         "anim": "appear",
         "label": "Zone inondable"
        },
        {
         "obj": "maison",
         "x": 54,
         "y": 26,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "e",
       "label": "Augmenter la taxe locale pour financer les digues",
       "label_expert": "Relever la taxe pour la gestion des milieux aquatiques",
       "plus": "Les digues sont payées localement.",
       "minus": "Impôt local en hausse pour les ménages.",
       "budget": 0.05,
       "axes": {
        "eco": -1
       },
       "ind": {
        "services": 1,
        "pouvoir_achat": -1
       },
       "fx": [
        {
         "obj": "barrage",
         "x": 58,
         "y": 30,
         "anim": "grow"
        },
        {
         "obj": "chantier_grue",
         "x": 57,
         "y": 31,
         "anim": "appear"
        }
       ],
       "budget_note": "Ouvrages financés par les collectivités, moins d'aide de l'État : le déficit baisse."
      }
     ]
    },
    {
     "id": "v26_vigipirate",
     "kind": "banal",
     "region": "national",
     "sector": "securite",
     "title": "Le pays passe en alerte maximale",
     "simple": "Un attentat a fait de nombreux morts dans une salle de concert à l'étranger. Le pays relève son niveau d'alerte au maximum. Faut-il plus de soldats dans les rues, plus de contrôles, ou garder une vie normale ?",
     "expert": "Relèvement de la posture Vigipirate au niveau « urgence attentat » par le Premier ministre, sur évaluation de la menace par les services. Arbitrage entre dissuasion visible (opération Sentinelle), filtrage des accès et résilience de la population.",
     "context": "Vigipirate compte trois niveaux. Le plus élevé est réservé à une menace imminente ou aux jours qui suivent un attentat, pour une durée limitée.",
     "real": {
      "date": "24 mars 2024",
      "place": "France entière",
      "fact": "Après un attentat meurtrier revendiqué par un groupe terroriste dans une salle de concert près de Moscou, le gouvernement a relevé le plan Vigipirate à son niveau le plus élevé, « urgence attentat ». Ce niveau ne peut être appliqué que de façon temporaire.",
      "figures": "Environ 3 000 militaires de l'opération Sentinelle en temps normal ; lors d'un précédent passage au niveau maximal, 7 000 militaires et agents supplémentaires mobilisés ; contrôles d'identité et de sécurité renforcés.",
      "sources": [
       {
        "label": "Connexion France : la France en alerte maximale, ce qui change",
        "url": "https://www.connexionfrance.com/article/French-news/France-placed-on-highest-alert-after-Moscow-attack-what-changes"
       },
       {
        "label": "Gouvernement : plan Vigipirate, niveau urgence attentat déclaré",
        "url": "https://www.info.gouv.fr/actualite/plan-vigipirate-niveau-urgence-attentat-declare"
       }
      ]
     },
     "camera": {
      "region": "national",
      "x": 52,
      "y": 45,
      "zoom": 1.1
     },
     "fx": [
      {
       "obj": "panneau",
       "x": 52,
       "y": 40,
       "anim": "appear",
       "label": "Urgence attentat"
      },
      {
       "obj": "policiers",
       "x": 50,
       "y": 25,
       "anim": "appear",
       "delay": 0.4
      },
      {
       "obj": "voiture_police",
       "x": 65,
       "y": 55,
       "anim": "move",
       "to": {
        "x": 69,
        "y": 57
       },
       "delay": 0.7
      },
      {
       "obj": "train",
       "x": 47,
       "y": 27,
       "anim": "pulse",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Plus de patrouilles dans les gares et autour des écoles",
       "label_expert": "Renforcer l'opération Sentinelle et les patrouilles de sécurisation",
       "plus": "Une présence visible qui rassure beaucoup de gens.",
       "minus": "Soldats et policiers épuisés, retirés d'autres missions.",
       "budget": -0.05,
       "axes": {
        "soc": 1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Heures et déploiements de militaires et policiers : le déficit augmente un peu.",
       "fx": [
        {
         "obj": "policiers",
         "x": 47,
         "y": 27,
         "anim": "appear"
        },
        {
         "obj": "ecole",
         "x": 31,
         "y": 64,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "b",
       "label": "Contrôler les sacs à l'entrée des lieux publics",
       "label_expert": "Généraliser les palpations par agents privés agréés par le CNAPS",
       "plus": "Il devient plus dur d'entrer armé dans la foule.",
       "minus": "Files d'attente, et des coûts pour les lieux publics.",
       "budget": -0.01,
       "axes": {
        "soc": 1
       },
       "ind": {
        "cohesion": -1
       },
       "budget_note": "Agents de sécurité dans les bâtiments publics : le déficit augmente très peu.",
       "fx": [
        {
         "obj": "file_attente",
         "x": 50,
         "y": 25,
         "anim": "appear"
        },
        {
         "obj": "loupe",
         "x": 52,
         "y": 23,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "c",
       "label": "Former les habitants aux gestes qui sauvent",
       "label_expert": "Campagne nationale de formation aux gestes de premiers secours",
       "plus": "Chacun peut aider un blessé en attendant les secours.",
       "minus": "Une formation qui touche peu de monde à la fois.",
       "budget": -0.01,
       "axes": {
        "soc": -1
       },
       "ind": {
        "cohesion": 1,
        "services": 1
       },
       "budget_note": "Formations gratuites payées par l'État : le déficit augmente très peu.",
       "fx": [
        {
         "obj": "foule",
         "x": 52,
         "y": 40,
         "anim": "appear"
        },
        {
         "obj": "soignants",
         "x": 66,
         "y": 54,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Garder le niveau d'alerte habituel",
       "label_expert": "Maintenir la posture « sécurité renforcée – risque attentat »",
       "plus": "Pas d'inquiétude ajoutée, la vie suit son cours.",
       "minus": "Moins de moyens si une menace se précise.",
       "budget": 0,
       "axes": {
        "soc": -1
       },
       "ind": {
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "foule",
         "x": 50,
         "y": 25,
         "anim": "appear"
        },
        {
         "obj": "panneau",
         "x": 52,
         "y": 40,
         "anim": "fade",
         "label": "Urgence attentat"
        }
       ]
      },
      {
       "id": "e",
       "label": "Expulser les étrangers fichés pour radicalisation",
       "label_expert": "Expulser les étrangers inscrits au fichier de radicalisation",
       "plus": "On éloigne les personnes jugées dangereuses.",
       "minus": "Droit et pays d'origine freinent les renvois.",
       "budget": 0,
       "axes": {
        "soc": 2,
        "eu": 1
       },
       "ind": {
        "souverainete": 1,
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "file_attente",
         "x": 50,
         "y": 25,
         "anim": "appear"
        },
        {
         "obj": "loupe",
         "x": 52,
         "y": 23,
         "anim": "pulse"
        }
       ]
      }
     ],
     "recall": [
      {
       "event": "v22_emeutes",
       "choice": "a",
       "text": "Il y a six semaines, tu as envoyé des renforts massifs de police pendant les émeutes : les forces de l'ordre sont fatiguées et les heures supplémentaires s'accumulent.",
       "ind": {
        "services": -1
       }
      },
      {
       "event": "v22_emeutes",
       "choice": "b",
       "text": "Il y a six semaines, tu as lancé un plan pour les quartiers : les associations relaient les consignes de vigilance.",
       "ind": {
        "cohesion": 1
       }
      },
      {
       "event": "v22_emeutes",
       "choice": "c",
       "text": "Il y a six semaines, tu as ouvert une enquête indépendante et un dialogue police-population : la confiance progresse un peu dans les quartiers.",
       "ind": {
        "cohesion": 1
       }
      },
      {
       "event": "v22_emeutes",
       "choice": "d",
       "text": "Il y a six semaines, tu as fait payer les dégâts aux auteurs condamnés : la mesure est populaire, mais les tensions restent vives."
      },
      {
       "event": "v22_emeutes",
       "choice": "e",
       "text": "Il y a quelques semaines, vous avez suspendu des allocations après les émeutes : la mesure reste discutée dans les quartiers."
      }
     ]
    }
   ]
  }
 ],
 "programs": [
  {
   "id": "smic_hausse",
   "label": "Augmenter fortement le SMIC",
   "term": "Revalorisation exceptionnelle du salaire minimum",
   "sector": "salaires",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Le salaire minimum augmente nettement, d'un coup.",
   "expert": "Coup de pouce au SMIC au-delà de la revalorisation automatique, avec effets sur les grilles de branche et sur les allègements de cotisations, qui suivent le SMIC.",
   "budget": -4,
   "once": 0,
   "budget_note": "Allègements de cotisations plus coûteux et salaires publics en hausse : le déficit augmente, en partie compensé par plus de cotisations.",
   "axes": {
    "eco": -2
   },
   "ind": {
    "pouvoir_achat": 4,
    "emploi": -2,
    "cohesion": 2
   },
   "why_cost": "Les allègements de cotisations sont calculés sur le SMIC : s'il monte, l'État compense davantage les entreprises (environ 75 Md€ d'exonérations par an au total).",
   "why_gain": "Plus de salaire, c'est plus de consommation, donc plus de TVA et de cotisations. Une partie du coût revient ainsi dans les caisses.",
   "benefits": [
    "Hausse directe du revenu de millions de salariés.",
    "Moins de travailleurs pauvres, plus de consommation.",
    "Les métiers peu payés deviennent plus attractifs."
   ],
   "problems": [
    "Coût du travail plus élevé pour les petites entreprises.",
    "Les allègements de cotisations coûtent plus à l'État.",
    "Les salaires juste au-dessus du SMIC se tassent."
   ],
   "later": [
    {
     "in": 1,
     "text": "La consommation repart dans les commerces : TVA et cotisations rentrent un peu plus.",
     "budget": 1,
     "ind": {
      "emploi": 1
     }
    },
    {
     "in": 2,
     "text": "Des économistes observent moins d'embauches peu qualifiées ; d'autres ne voient pas d'effet.",
     "ind": {
      "emploi": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Concertation avec les acteurs concernés",
     "weeks": 1
    },
    {
     "label": "Décret et circulaires d'application",
     "weeks": 1
    }
   ],
   "sources": [
    {
     "label": "Vie publique : 75 Md€ d'exonérations de cotisations patronales en 2023",
     "url": "https://www.vie-publique.fr/en-bref/295634-exonerations-de-cotisations-patronales-75-milliards-euros-en-2023"
    }
   ]
  },
  {
   "id": "retraite_60",
   "label": "Revenir à la retraite à 60 ans",
   "term": "Abaissement de l'âge légal de départ",
   "sector": "retraites",
   "origin": "Proposition présente dans plusieurs programmes",
   "intensity": "forte",
   "simple": "On peut de nouveau partir à la retraite à 60 ans.",
   "expert": "Retour de l'âge légal à 60 ans, avec une durée de cotisation réduite (environ 40 annuités selon les versions).",
   "budget": -15,
   "once": 0,
   "budget_note": "Pensions versées plus tôt et cotisations en moins : le déficit augmente fortement.",
   "axes": {
    "eco": -2
   },
   "ind": {
    "pouvoir_achat": 3,
    "cohesion": 3,
    "emploi": -3
   },
   "why_cost": "Chaque année de départ plus tôt, c'est des pensions en plus et des cotisations en moins. La Cour des comptes estime que s'arrêter à 63 ans au lieu de 64 coûterait déjà 13 Md€ par an d'ici une dizaine d'années. Selon la version retenue, les chiffrages vont d'environ 26 Md€ par an (Fipeco, Institut Montaigne) à près de 58 Md€ (Institut Montaigne, version la plus large) : le jeu retient 30 Md€ à terme.",
   "why_gain": "Des emplois libérés pour les plus jeunes selon ses défenseurs, et des retraités plus longtemps en bonne santé.",
   "benefits": [
    "Départ plus tôt pour ceux qui ont commencé jeunes.",
    "Plus d'années de retraite en bonne santé.",
    "Des postes libérés pour les jeunes, selon ses défenseurs."
   ],
   "problems": [
    "Coût de plusieurs dizaines de milliards par an à terme.",
    "Il faut hausser cotisations ou impôts pour financer.",
    "Moins d'actifs pour financer plus de retraités."
   ],
   "later": [
    {
     "in": 2,
     "text": "Montée en charge : de plus en plus de générations partent plus tôt, le coût grimpe.",
     "budget": -15
    },
    {
     "in": 3,
     "text": "Les caisses demandent une hausse des cotisations pour suivre.",
     "ind": {
      "pouvoir_achat": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Présentation en Conseil des ministres",
     "weeks": 1
    },
    {
     "label": "Débat et vote à l'Assemblée",
     "weeks": 1,
     "block": true
    },
    {
     "label": "Examen au Sénat puis décrets d'application",
     "weeks": 1
    }
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Les députés se divisent sur le financement : ils n'arrivent pas à se mettre d'accord.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retirer le projet de loi de l'ordre du jour",
      "outcome": "abandon",
      "plus": "Le calme revient, pas de passage en force.",
      "minus": "Rien ne change, le problème reste entier.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Engager la responsabilité du gouvernement (article 49.3)",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement et vite.",
      "minus": "Débat écourté, colère et risque de censure.",
      "ind": {
       "cohesion": -4
      },
      "axes": {
       "soc": 2
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : 62 ans et carrières longues",
      "label_expert": "Amendement : âge légal à 62 ans, dispositif carrières longues",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Une majorité se forme, la réforme passe.",
      "minus": "Effets réduits, chacun a dû céder.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     },
     {
      "id": "concertation",
      "label": "Confier le dossier aux syndicats et au patronat",
      "label_expert": "Renvoyer à une négociation interprofessionnelle des partenaires sociaux",
      "outcome": "amend",
      "factor": 0.6,
      "plus": "Une solution négociée par ceux qui cotisent.",
      "minus": "Des semaines de discussions, accord partiel.",
      "ind": {
       "cohesion": 2
      },
      "axes": {
       "soc": -1
      }
     }
    ]
   },
   "sources": [
    {
     "label": "Public Sénat : combien coûterait une suspension de la réforme de 2023 (Cour des comptes)",
     "url": "https://www.publicsenat.fr/actualites/politique/retraites-combien-couterait-une-suspension-de-la-reforme-de-2023"
    },
    {
     "label": "Institut Montaigne : retraite à 60 ans, chiffrages",
     "url": "https://www.institutmontaigne.org/legislatives-2024/nouveau-front-populaire/abroger-la-reforme-des-retraites-restaurer-la-retraite-a-60-ans-en-prenant-en-compte-le-rsa-en-portant-le-minimum-contributif-au-smic"
    },
    {
     "label": "Fipeco : retraites, coût d'un retour à 60 ans",
     "url": "https://fipeco.fr/pdf/Retraites%202024.pdf"
    }
   ]
  },
  {
   "id": "taxe_hauts_patrimoines",
   "label": "Taxer les très hauts patrimoines",
   "term": "Impôt plancher sur les patrimoines de plus de 100 M€",
   "sector": "fiscalite",
   "origin": "Proposition présente dans plusieurs programmes",
   "intensity": "forte",
   "simple": "Les plus grandes fortunes paient au moins un petit pourcentage de leur patrimoine chaque année.",
   "expert": "Imposition minimale (de l'ordre de 2 %) sur les patrimoines les plus élevés, y compris professionnels, déduction faite des impôts déjà payés.",
   "budget": 12,
   "once": 0,
   "budget_note": "Nouvel impôt sur les plus grandes fortunes : le déficit baisse.",
   "axes": {
    "eco": -2
   },
   "ind": {
    "cohesion": 2
   },
   "why_cost": "Il faut des contrôleurs pour évaluer des entreprises non cotées, et une partie des contribuables peut partir ou optimiser.",
   "why_gain": "Des recettes nouvelles chaque année : de 5 à 20 Md€ selon les études, le chiffre exact fait débat. Rendement attendu par ses promoteurs : 15 à 25 Md€ par an ; avec les départs et l'optimisation, certaines estimations descendent sous 7,5 Md€. Le jeu part de 12 Md€, puis corrige selon le résultat.",
   "benefits": [
    "Nouvelles recettes pour réduire le déficit.",
    "Les plus fortunés contribuent davantage.",
    "Réduit l'écart d'imposition avec les salariés."
   ],
   "problems": [
    "Rendement débattu : de 5 à 20 Md€ selon les études.",
    "Risque de départs ou d'optimisation fiscale.",
    "Difficile d'évaluer les entreprises non cotées."
   ],
   "later": [
    {
     "in": 3,
     "text": "Quelques départs de contribuables fortunés sont médiatisés ; leur nombre réel fait débat.",
     "ind": {
      "emploi": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Inscription dans le projet de budget",
     "weeks": 1
    },
    {
     "label": "Vote du budget au Parlement",
     "weeks": 1,
     "block": true
    }
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Une partie des députés juge la taxe trop forte, une autre trop faible : pas de majorité.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retirer l'article du projet de loi de finances",
      "outcome": "abandon",
      "plus": "Le calme revient, pas de passage en force.",
      "minus": "Rien ne change, le problème reste entier.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Article 49.3 sur la première partie du projet de loi de finances",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement et vite.",
      "minus": "Débat écourté, colère et risque de censure.",
      "ind": {
       "cohesion": -4
      },
      "axes": {
       "soc": 2
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : taux réduit et exemption des biens professionnels",
      "label_expert": "Amendement : taux réduit, exonération de l'outil professionnel",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Une majorité se forme, la réforme passe.",
      "minus": "Effets réduits, chacun a dû céder.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     }
    ]
   },
   "result": {
    "in": 1,
    "title": "Premières déclarations et avis du Conseil constitutionnel",
    "outcomes": [
     {
      "id": "rendement",
      "label": "La taxe rapporte comme prévu",
      "weight": 0.5,
      "text": "La taxe est validée et rapporte le haut de la fourchette.",
      "plus": "Des recettes nouvelles pour réduire le déficit.",
      "minus": "Les entreprises familiales s'inquiètent.",
      "budget": 2,
      "once": 0,
      "ind": {
       "cohesion": 1
      },
      "axes": {},
      "later": [],
      "budget_note": "Recettes au-dessus de la prévision : le déficit baisse encore."
     },
     {
      "id": "faible",
      "label": "Rendement faible, censure partielle",
      "weight": 0.5,
      "text": "Le juge censure une partie du dispositif et des contribuables optimisent : le rendement baisse.",
      "plus": "Le juge protège les droits des contribuables.",
      "minus": "Recette bien plus faible que prévu.",
      "budget": -7,
      "once": 0,
      "ind": {
       "cohesion": -1
      },
      "axes": {},
      "later": [],
      "budget_note": "Recettes très en dessous de la prévision : le déficit remonte."
     }
    ]
   },
   "sources": [
    {
     "label": "Public Sénat : rendement estimé et effets de comportement",
     "url": "https://www.publicsenat.fr/actualites/economie/budget-la-taxation-des-ultra-riches-nentrainerait-pas-dexil-fiscal-significatif"
    },
    {
     "label": "Sénat : l'essentiel de la proposition de loi sur l'impôt plancher",
     "url": "https://www.senat.fr/fileadmin/cru-1750816532/Commissions/Finances/2024-2025/Textes_legislatifs/Essentiel_PPL_IPF_Post_com.pdf"
    }
   ]
  },
  {
   "id": "regularisation_metiers_tension",
   "label": "Régulariser les sans-papiers qui travaillent dans les métiers en tension",
   "term": "Titre de séjour « métiers en tension »",
   "sector": "immigration",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Les étrangers sans papiers qui travaillent dans des métiers qui manquent de bras peuvent obtenir un titre de séjour.",
   "expert": "Admission exceptionnelle au séjour élargie pour les travailleurs exerçant dans des métiers en tension (BTP, restauration, aide à domicile, agriculture).",
   "budget": 0.5,
   "once": 0,
   "budget_note": "Cotisations et impôts des travailleurs régularisés : le déficit baisse un peu.",
   "axes": {
    "soc": -2
   },
   "ind": {
    "emploi": 2,
    "cohesion": -2
   },
   "why_cost": "Il faut instruire les dossiers en préfecture, et le sujet divise fortement l'opinion.",
   "why_gain": "Des travailleurs déclarés paient des cotisations et des impôts : quelques centaines de millions par an (estimation).",
   "benefits": [
    "Des secteurs en pénurie recrutent plus facilement.",
    "Des travailleurs déclarés, qui cotisent enfin.",
    "Moins d'exploitation par des employeurs peu scrupuleux."
   ],
   "problems": [
    "Une partie de l'opinion y voit un signal d'ouverture.",
    "Débat sur l'effet sur les arrivées futures.",
    "Ne règle pas la question des salaires de ces métiers."
   ],
   "later": [
    {
     "in": 1,
     "text": "Premiers titres délivrés : le bâtiment, la restauration et l'aide à domicile recrutent.",
     "ind": {
      "emploi": 1
     }
    },
    {
     "in": 2,
     "text": "Le sujet relance un débat national vif sur l'immigration.",
     "ind": {
      "cohesion": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Présentation en Conseil des ministres",
     "weeks": 1
    },
    {
     "label": "Débat et vote à l'Assemblée",
     "weeks": 1,
     "block": false
    },
    {
     "label": "Examen au Sénat puis décrets d'application",
     "weeks": 1
    }
   ]
  },
  {
   "id": "encadrement_loyers",
   "label": "Encadrer les loyers dans toutes les villes chères",
   "term": "Généralisation de l'encadrement des loyers",
   "sector": "logement",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Dans les villes où les loyers sont trop hauts, un plafond est imposé.",
   "expert": "Extension à toutes les zones tendues du plafonnement des loyers (loyer de référence majoré), aujourd'hui appliqué dans quelques villes.",
   "budget": 0,
   "once": 0,
   "budget_note": "Règle sur les loyers, sans dépense de l'État : pas d'effet direct sur le déficit.",
   "axes": {
    "eco": -2
   },
   "ind": {
    "pouvoir_achat": 2
   },
   "why_cost": "Presque rien pour l'État, mais moins d'incitation à investir dans le logement locatif.",
   "why_gain": "Des loyers contenus laissent plus d'argent aux locataires chaque mois.",
   "benefits": [
    "Loyers plus raisonnables dans les villes chères.",
    "Moins de hausses brutales entre deux locataires.",
    "Plus de visibilité sur leur budget pour les ménages."
   ],
   "problems": [
    "Des propriétaires retirent leur bien de la location.",
    "Moins d'envie d'investir dans le logement neuf.",
    "Contrôle difficile, contournements possibles."
   ],
   "later": [
    {
     "in": 1,
     "text": "Les loyers se stabilisent dans les grandes villes.",
     "ind": {
      "pouvoir_achat": 1
     }
    },
    {
     "in": 3,
     "text": "Les annonces de location se font plus rares dans certains quartiers.",
     "ind": {
      "cohesion": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Présentation en Conseil des ministres",
     "weeks": 1
    },
    {
     "label": "Débat et vote à l'Assemblée",
     "weeks": 1,
     "block": false
    },
    {
     "label": "Examen au Sénat puis décrets d'application",
     "weeks": 1
    }
   ]
  },
  {
   "id": "surtaxe_grandes_entreprises",
   "label": "Garder et renforcer la surtaxe sur les bénéfices des très grandes entreprises",
   "term": "Contribution exceptionnelle sur l'impôt sur les sociétés",
   "sector": "fiscalite",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Les très grandes entreprises paient un supplément d'impôt sur leurs bénéfices, et on le garde.",
   "expert": "Pérennisation de la contribution exceptionnelle sur l'impôt sur les sociétés des entreprises au chiffre d'affaires le plus élevé.",
   "budget": 8,
   "once": 0,
   "budget_note": "Impôt sur les sociétés en plus : le déficit baisse.",
   "axes": {
    "eco": -2
   },
   "ind": {
    "emploi": -1,
    "souverainete": -1
   },
   "why_cost": "Les groupes peuvent investir ou déclarer leurs bénéfices ailleurs ; la France devient moins attractive selon les entreprises.",
   "why_gain": "Recette rapide et chiffrée : environ 7,3 Md€ attendus de la surtaxe dans le budget de l'an passé.",
   "benefits": [
    "Recette rapide pour réduire le déficit.",
    "Ne touche que les plus grandes entreprises.",
    "Simple : on garde un impôt qui existe déjà."
   ],
   "problems": [
    "Signal négatif pour les investisseurs étrangers.",
    "Promise comme temporaire, elle devient durable.",
    "Risque de bénéfices déplacés vers l'étranger."
   ],
   "later": [
    {
     "in": 2,
     "text": "Quelques groupes reportent des investissements annoncés en France.",
     "ind": {
      "emploi": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Inscription dans le projet de budget",
     "weeks": 1
    },
    {
     "label": "Vote du budget au Parlement",
     "weeks": 1,
     "block": false
    }
   ],
   "sources": [
    {
     "label": "Boursorama : les grandes lignes du budget 2026 (surtaxe : 7,3 Md€)",
     "url": "https://www.boursorama.com/actualite-economique/actualites-amp/impots-defense-deficit-les-grandes-lignes-du-budget-2026-fd618857a431a6011b1018388914f735"
    }
   ]
  },
  {
   "id": "plafonner_allegements",
   "label": "Réduire les allègements de cotisations sur les salaires moyens et hauts",
   "term": "Recentrage des exonérations de cotisations patronales",
   "sector": "salaires",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "L'État aide moins les entreprises à payer les cotisations sur les salaires qui ne sont pas bas.",
   "expert": "Recentrage des allègements généraux sur les bas salaires (suppression progressive au-dessus d'un certain multiple du SMIC).",
   "budget": 3,
   "once": 0,
   "budget_note": "Moins d'exonérations de cotisations à compenser : le déficit baisse.",
   "axes": {
    "eco": -1
   },
   "ind": {
    "emploi": -2
   },
   "why_cost": "Le travail coûte plus cher aux entreprises pour les salaires concernés : des économistes prévoient des emplois en moins.",
   "why_gain": "Les exonérations coûtent environ 75 Md€ par an : en recentrer une partie rapporte quelques milliards.",
   "benefits": [
    "Économie de quelques milliards par an.",
    "Aide recentrée sur les bas salaires.",
    "Moins d'effet d'aubaine selon plusieurs rapports."
   ],
   "problems": [
    "Coût du travail en hausse pour des millions d'emplois.",
    "Des destructions d'emplois possibles selon des économistes.",
    "Les entreprises dénoncent une hausse d'impôt déguisée."
   ],
   "later": [
    {
     "in": 2,
     "text": "Des entreprises gèlent des embauches de cadres et de techniciens.",
     "ind": {
      "emploi": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Inscription dans le projet de budget",
     "weeks": 1
    },
    {
     "label": "Vote du budget au Parlement",
     "weeks": 1,
     "block": false
    }
   ],
   "sources": [
    {
     "label": "Vie publique : 75 Md€ d'exonérations de cotisations patronales en 2023",
     "url": "https://www.vie-publique.fr/en-bref/295634-exonerations-de-cotisations-patronales-75-milliards-euros-en-2023"
    }
   ]
  },
  {
   "id": "baisse_impots_production",
   "label": "Baisser les impôts de production",
   "term": "Réduction de la C3S, de la CFE et de la taxe foncière des entreprises",
   "sector": "fiscalite",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Les entreprises paient moins d'impôts liés à leurs usines et à leur chiffre d'affaires.",
   "expert": "Baisse des impôts assis sur la production (et non sur les bénéfices), plus élevés en France que chez la plupart des voisins.",
   "budget": -8,
   "once": 0,
   "budget_note": "Impôts en moins pour l'État et les collectivités : le déficit augmente.",
   "axes": {
    "eco": 2
   },
   "ind": {
    "emploi": 3,
    "souverainete": 2
   },
   "why_cost": "Ces impôts rapportent des milliards par an, en partie aux collectivités qu'il faut compenser.",
   "why_gain": "Des usines plus compétitives créent des emplois et de l'activité taxée ; une partie du coût revient en quelques années.",
   "benefits": [
    "Usines plus compétitives face à nos voisins.",
    "Encourage l'installation d'industries en France.",
    "Ces impôts pèsent même quand on perd de l'argent."
   ],
   "problems": [
    "Coût de plusieurs milliards pour les comptes publics.",
    "Les collectivités perdent une recette à compenser.",
    "L'effet sur l'emploi est discuté par les économistes."
   ],
   "later": [],
   "long_term": {
    "horizon": "5 à 10 ans",
    "text": "Si l'industrie revient, les recettes d'impôts sur les bénéfices et les salaires compensent une partie du coût.",
    "budget": 3,
    "ind": {
     "emploi": 2
    }
   },
   "steps": [
    {
     "label": "Inscription dans le projet de budget",
     "weeks": 1
    },
    {
     "label": "Vote du budget au Parlement",
     "weeks": 1,
     "block": false
    }
   ],
   "result": {
    "in": 2,
    "title": "Les usines suivent-elles ?",
    "outcomes": [
     {
      "id": "relocalisations",
      "label": "Des usines s'installent",
      "weight": 0.5,
      "text": "Plusieurs groupes annoncent des usines en France en citant la baisse d'impôts.",
      "plus": "Emplois industriels et recettes futures.",
      "minus": "Le coût pour l'État reste élevé.",
      "budget": 1,
      "once": 0,
      "ind": {
       "emploi": 1
      },
      "axes": {},
      "later": [],
      "budget_note": "Nouvelles usines, nouveaux impôts : le déficit baisse un peu."
     },
     {
      "id": "aubaine",
      "label": "Surtout un effet d'aubaine",
      "weight": 0.5,
      "text": "Les entreprises gardent l'économie, sans investissement nouveau visible.",
      "plus": "Les marges des entreprises s'améliorent.",
      "minus": "Peu d'emplois créés pour des milliards.",
      "budget": 0,
      "once": 0,
      "ind": {
       "emploi": -1,
       "cohesion": -1
      },
      "axes": {},
      "later": []
     }
    ]
   }
  },
  {
   "id": "report_age_65",
   "label": "Reporter l'âge de départ à 65 ans",
   "term": "Relèvement de l'âge légal à 65 ans",
   "sector": "retraites",
   "origin": "Proposition présente dans plusieurs programmes",
   "intensity": "forte",
   "simple": "On part à la retraite plus tard, progressivement jusqu'à 65 ans.",
   "expert": "Relèvement progressif de l'âge légal d'ouverture des droits à 65 ans, avec maintien de dispositifs carrières longues et pénibilité.",
   "budget": 6,
   "once": 0,
   "budget_note": "Pensions versées plus tard et cotisations en plus : le déficit baisse.",
   "axes": {
    "eco": 2
   },
   "ind": {
    "cohesion": -5,
    "emploi": 3,
    "pouvoir_achat": -1
   },
   "why_cost": "Des seniors restent plus longtemps au chômage ou en invalidité avant la retraite : une partie de l'économie est reperdue ailleurs.",
   "why_gain": "Moins de pensions versées et plus de cotisations : un recul d'un an représente environ 13 Md€ par an à terme selon la Cour des comptes.",
   "benefits": [
    "Comptes de retraite nettement améliorés à terme.",
    "Plus d'actifs, donc plus de croissance possible.",
    "Pensions préservées sans hausse de cotisations."
   ],
   "problems": [
    "Travailler plus longtemps, dur pour les métiers pénibles.",
    "Des seniors au chômage plus longtemps avant la retraite.",
    "Forte opposition sociale attendue."
   ],
   "later": [
    {
     "in": 1,
     "text": "Grèves et manifestations dans plusieurs grandes villes.",
     "ind": {
      "cohesion": -2
     }
    },
    {
     "in": 3,
     "text": "Les économies montent en charge à chaque nouvelle génération.",
     "budget": 7
    }
   ],
   "steps": [
    {
     "label": "Présentation en Conseil des ministres",
     "weeks": 1
    },
    {
     "label": "Débat et vote à l'Assemblée",
     "weeks": 1,
     "block": true
    },
    {
     "label": "Examen au Sénat puis décrets d'application",
     "weeks": 1
    }
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Les oppositions déposent des milliers d'amendements : le vote n'aboutit pas.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retirer le projet de loi de financement de la Sécurité sociale",
      "outcome": "abandon",
      "plus": "Le calme revient, pas de passage en force.",
      "minus": "Rien ne change, le problème reste entier.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Article 49.3 sur le projet de loi de financement rectificative",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement et vite.",
      "minus": "Débat écourté, colère et risque de censure.",
      "ind": {
       "cohesion": -4
      },
      "axes": {
       "soc": 2
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : 64 ans et mesures pour les carrières longues",
      "label_expert": "Amendement : 64 ans et extension des carrières longues",
      "outcome": "amend",
      "factor": 0.6,
      "plus": "Une majorité se forme, la réforme passe.",
      "minus": "Effets réduits, chacun a dû céder.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     },
     {
      "id": "referendum",
      "label": "Organiser un référendum sur les retraites",
      "label_expert": "Soumettre la réforme au référendum de l'article 11",
      "outcome": "amend",
      "factor": 0.7,
      "plus": "Les Français tranchent eux-mêmes la question.",
      "minus": "Campagne longue, résultat très incertain.",
      "ind": {
       "cohesion": -1
      },
      "axes": {
       "soc": -1
      }
     }
    ]
   },
   "sources": [
    {
     "label": "Public Sénat : combien coûterait une suspension de la réforme de 2023 (Cour des comptes)",
     "url": "https://www.publicsenat.fr/actualites/politique/retraites-combien-couterait-une-suspension-de-la-reforme-de-2023"
    }
   ]
  },
  {
   "id": "non_remplacement_fonctionnaires",
   "label": "Ne pas remplacer un fonctionnaire sur deux partant à la retraite",
   "term": "Réduction des effectifs de la fonction publique",
   "sector": "fiscalite",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Quand deux agents publics partent à la retraite, un seul est remplacé.",
   "expert": "Non-remplacement partiel des départs à la retraite dans les fonctions publiques, hors secteurs jugés prioritaires selon les versions.",
   "budget": 2,
   "once": 0,
   "budget_note": "Moins de salaires publics à payer : le déficit baisse.",
   "axes": {
    "eco": 2
   },
   "ind": {
    "services": -4
   },
   "why_cost": "Moins d'agents, c'est des guichets, des classes ou des services qui ferment ou attendent plus.",
   "why_gain": "La masse salariale publique baisse un peu plus chaque année, sans licenciement.",
   "benefits": [
    "Des économies qui grossissent chaque année.",
    "Pousse l'administration à se moderniser.",
    "Aucun licenciement : on joue sur les départs."
   ],
   "problems": [
    "Moins d'agents dans les écoles, hôpitaux, commissariats.",
    "Plus de travail pour les agents qui restent.",
    "Certains services de proximité ferment."
   ],
   "later": [
    {
     "in": 2,
     "text": "Des guichets ferment plus tôt, des délais s'allongent.",
     "ind": {
      "services": -2
     }
    },
    {
     "in": 3,
     "text": "Les économies se cumulent d'année en année.",
     "budget": 2
    }
   ],
   "steps": [
    {
     "label": "Inscription dans le projet de budget",
     "weeks": 1
    },
    {
     "label": "Vote du budget au Parlement",
     "weeks": 1,
     "block": false
    }
   ]
  },
  {
   "id": "peines_planchers",
   "label": "Peines minimales et nouvelles places de prison",
   "term": "Peines planchers et programme immobilier pénitentiaire",
   "sector": "securite",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Pour certains délits répétés, le juge doit prononcer une peine minimale. On construit des prisons.",
   "expert": "Rétablissement de peines minimales pour les récidivistes (un dispositif a déjà existé pendant sept ans) et accélération de la construction de places de prison.",
   "budget": -1,
   "once": -4,
   "budget_note": "Prisons à construire puis à faire fonctionner : le déficit augmente.",
   "axes": {
    "soc": 2
   },
   "ind": {
    "cohesion": 1
   },
   "why_cost": "Une place de prison coûte cher à construire puis à faire fonctionner chaque année.",
   "why_gain": "Une sanction plus prévisible, qui selon ses défenseurs dissuade la récidive (l'effet est débattu).",
   "benefits": [
    "Sanction plus prévisible pour les récidivistes.",
    "Plus de places pour exécuter les peines prononcées.",
    "Un message de fermeté attendu par une partie du pays."
   ],
   "problems": [
    "Les juges perdent une part de leur liberté de décider.",
    "Coût élevé de construction et de fonctionnement.",
    "L'effet sur la récidive est débattu par les chercheurs."
   ],
   "later": [
    {
     "in": 1,
     "text": "Le nombre de détenus augmente avant que les nouvelles places soient prêtes.",
     "ind": {
      "services": -1
     }
    },
    {
     "in": 3,
     "text": "Les premiers chantiers de prisons démarrent.",
     "ind": {
      "emploi": 1
     }
    }
   ],
   "steps": [
    {
     "label": "Présentation en Conseil des ministres",
     "weeks": 1
    },
    {
     "label": "Débat et vote à l'Assemblée",
     "weeks": 1,
     "block": false
    },
    {
     "label": "Examen au Sénat puis décrets d'application",
     "weeks": 1
    }
   ]
  },
  {
   "id": "baisse_cotisations_net",
   "label": "Baisser les cotisations pour augmenter le salaire net",
   "term": "Transfert de cotisations salariales vers l'impôt",
   "sector": "salaires",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Moins de cotisations sur la fiche de paie : le salaire net augmente, l'employeur ne paie pas plus.",
   "expert": "Réduction des cotisations salariales, compensée par l'État à la Sécurité sociale, pour réduire l'écart entre salaire brut et salaire net.",
   "budget": -10,
   "once": 0,
   "budget_note": "Cotisations en moins, compensées par l'État : le déficit augmente.",
   "axes": {
    "eco": 2
   },
   "ind": {
    "pouvoir_achat": 5,
    "emploi": 1
   },
   "why_cost": "La Sécurité sociale perd des recettes que l'État doit compenser : environ une dizaine de milliards par an.",
   "why_gain": "Plus de salaire net soutient la consommation, et le travail devient plus attractif que l'inactivité.",
   "benefits": [
    "Plus de salaire net en bas de la fiche de paie.",
    "Le travail paie mieux que les aides sociales.",
    "Aucun coût en plus pour l'employeur."
   ],
   "problems": [
    "Il faut compenser la perte pour la Sécurité sociale.",
    "Coût de l'ordre d'une dizaine de milliards par an.",
    "Moins de droits futurs si la compensation est mal faite."
   ],
   "later": [
    {
     "in": 1,
     "text": "La consommation progresse : un peu plus de TVA rentre.",
     "budget": 1
    },
    {
     "in": 2,
     "text": "La Sécurité sociale réclame une compensation complète à l'État.",
     "budget": -2
    }
   ],
   "steps": [
    {
     "label": "Inscription dans le projet de budget",
     "weeks": 1
    },
    {
     "label": "Vote du budget au Parlement",
     "weeks": 1,
     "block": false
    }
   ]
  },
  {
   "id": "assurance_chomage",
   "label": "Durcir les règles de l'assurance chômage",
   "term": "Réduction de la durée d'indemnisation et conditions d'accès renforcées",
   "sector": "salaires",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Il faut avoir travaillé plus longtemps pour toucher le chômage, et on le touche moins longtemps.",
   "expert": "Allongement de la durée d'affiliation exigée, réduction de la durée maximale d'indemnisation, modulation selon la conjoncture.",
   "budget": 3.6,
   "once": 0,
   "budget_note": "Moins d'allocations chômage versées : le déficit baisse.",
   "axes": {
    "eco": 2
   },
   "ind": {
    "emploi": 2,
    "pouvoir_achat": -1,
    "cohesion": -2
   },
   "why_cost": "Des demandeurs d'emploi perdent leurs droits plus tôt : une partie bascule vers le RSA, payé par les départements.",
   "why_gain": "Moins d'allocations versées et plus de retours à l'emploi : le gouvernement visait 3,6 Md€ d'économies et 90 000 emplois en plus.",
   "benefits": [
    "Économies sur les allocations chômage.",
    "Incite à reprendre un emploi plus vite.",
    "Rapproche les règles de celles des voisins."
   ],
   "problems": [
    "Des chômeurs perdent leurs droits plus tôt.",
    "Les plus précaires sont les plus touchés.",
    "L'effet sur l'emploi est contesté par des économistes."
   ],
   "later": [
    {
     "in": 2,
     "text": "Premiers chiffres : un peu plus de reprises d'emploi, et plus d'allocataires du RSA.",
     "ind": {
      "emploi": 1,
      "cohesion": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Concertation avec syndicats et patronat",
     "weeks": 1
    },
    {
     "label": "Négociation des nouvelles règles",
     "weeks": 1,
     "block": true
    },
    {
     "label": "Décret d'application",
     "weeks": 1
    }
   ],
   "block": {
    "title": "Blocage avec les partenaires sociaux",
    "text": "Syndicats et patronat refusent le texte, des députés demandent un vote : ils n'arrivent pas à se mettre d'accord.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retirer la réforme des règles d'indemnisation",
      "outcome": "abandon",
      "plus": "Le dialogue social est préservé.",
      "minus": "Pas d'économie, règles inchangées.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     },
     {
      "id": "decret",
      "label": "Imposer les nouvelles règles par décret",
      "label_expert": "Décret de carence fixant seul les règles d'indemnisation",
      "outcome": "pass",
      "plus": "Les économies arrivent tout de suite.",
      "minus": "Syndicats furieux, recours en justice.",
      "ind": {
       "cohesion": -3
      },
      "axes": {
       "soc": 2
      }
     },
     {
      "id": "compromis",
      "label": "Version de compromis : durcir seulement quand le chômage est bas",
      "label_expert": "Contracyclicité : durée d'indemnisation modulée selon le taux de chômage",
      "outcome": "amend",
      "factor": 0.6,
      "plus": "Règle plus juste selon la conjoncture.",
      "minus": "Économies plus faibles que prévu.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     }
    ]
   },
   "sources": [
    {
     "label": "Boursorama : réforme de l'assurance chômage, 3,6 milliards d'économies visées",
     "url": "https://www.boursorama.com/actualite-economique/actualites/reforme-de-l-assurance-chomage-entre-milliards-d-economies-et-droits-durcis-quel-est-le-projet-du-gouvernement-dc256435e8afd906aa48fe2d41656df7"
    }
   ],
   "result": {
    "in": 1,
    "title": "Issue de la négociation avec syndicats et patronat",
    "outcomes": [
     {
      "id": "accord",
      "label": "Accord des partenaires sociaux",
      "weight": 0.5,
      "text": "Syndicats et patronat signent les nouvelles règles, un peu adoucies.",
      "plus": "Règles acceptées, dialogue social préservé.",
      "minus": "Économies un peu plus faibles que prévu.",
      "budget": -0.6,
      "once": 0,
      "ind": {
       "cohesion": 2
      },
      "axes": {},
      "later": [],
      "budget_note": "Règles adoucies par l'accord, moins d'économies : le déficit remonte un peu."
     },
     {
      "id": "echec",
      "label": "Échec, l'État tranche seul",
      "weight": 0.5,
      "text": "Pas d'accord : l'État fixe les règles par décret.",
      "plus": "Les économies prévues sont tenues.",
      "minus": "Syndicats en colère, recours en justice.",
      "budget": 0,
      "once": 0,
      "ind": {
       "cohesion": -2
      },
      "axes": {},
      "later": []
     }
    ]
   }
  },
  {
   "id": "cessions_actifs",
   "label": "Vendre une partie des participations de l'État",
   "term": "Cessions de participations publiques",
   "sector": "fiscalite",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "L'État vend une partie des actions qu'il possède dans de grandes entreprises.",
   "expert": "Ouverture du capital ou cession de participations détenues par l'Agence des participations de l'État, sur le modèle de la privatisation de la Française des jeux.",
   "budget": -0.1,
   "once": 2,
   "budget_note": "Recette ponctuelle de la vente, puis dividendes perdus chaque année : le déficit baisse une fois (en comptabilité nationale, la vente réduit surtout la dette).",
   "axes": {
    "eco": 2,
    "eu": -1
   },
   "ind": {
    "souverainete": -2
   },
   "why_cost": "L'État perd les dividendes futurs et une part de contrôle sur des entreprises importantes.",
   "why_gain": "Une recette immédiate pour réduire la dette : la vente de la Française des jeux a rapporté environ 1,9 Md€.",
   "benefits": [
    "Recette immédiate pour réduire la dette.",
    "L'État se recentre sur ses missions.",
    "Les entreprises gagnent en liberté d'action."
   ],
   "problems": [
    "Recette ponctuelle, dividendes perdus ensuite.",
    "Moins de contrôle sur des secteurs clés.",
    "Vendre en période de crise, c'est vendre moins cher."
   ],
   "later": [
    {
     "in": 2,
     "text": "Les acheteurs réorganisent une partie des activités vendues.",
     "ind": {
      "emploi": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Concertation avec les acteurs concernés",
     "weeks": 1
    },
    {
     "label": "Décret et circulaires d'application",
     "weeks": 1
    }
   ],
   "sources": [
    {
     "label": "Ministère de l'Économie : succès de l'introduction en Bourse de la FDJ",
     "url": "https://www.economie.gouv.fr/succes-souscription-introduction-bourse-fdj"
    }
   ],
   "result": {
    "in": 1,
    "title": "Résultat de la mise en vente",
    "outcomes": [
     {
      "id": "bon_prix",
      "label": "Marché porteur",
      "weight": 0.5,
      "text": "Les actions se vendent bien, au-dessus du prix espéré.",
      "plus": "Une recette plus élevée pour la dette.",
      "minus": "Des dividendes perdus pour toujours.",
      "budget": 0,
      "once": 1,
      "ind": {},
      "axes": {},
      "later": [],
      "budget_note": "Vente au-dessus du prix attendu : recette ponctuelle en plus."
     },
     {
      "id": "prix_bas",
      "label": "Marché en baisse",
      "weight": 0.5,
      "text": "La Bourse recule : l'État vend moins cher que prévu.",
      "plus": "La vente se fait quand même.",
      "minus": "Recette plus faible qu'espéré.",
      "budget": 0,
      "once": -1,
      "ind": {},
      "axes": {},
      "later": [],
      "budget_note": "Vente sous le prix attendu : recette ponctuelle en moins, le déficit augmente."
     }
    ]
   }
  },
  {
   "id": "relance_nucleaire",
   "label": "Relancer le nucléaire avec de nouveaux réacteurs",
   "term": "Programme de six réacteurs EPR2",
   "sector": "energie",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "On construit de nouvelles centrales nucléaires pour remplacer les anciennes.",
   "expert": "Construction de six réacteurs EPR2 (option sur huit de plus), financée en grande partie par un prêt public à taux bonifié.",
   "budget": -2,
   "once": -10,
   "budget_note": "Investissement public dans les réacteurs : le déficit augmente d'abord.",
   "axes": {
    "eu": 1,
    "env": 1
   },
   "ind": {
    "souverainete": 4,
    "emploi": 2,
    "co2": -1
   },
   "why_cost": "Le devis d'EDF pour six réacteurs atteint 72,8 Md€ hors frais financiers, en hausse par rapport aux estimations précédentes. L'État prête et garantit.",
   "why_gain": "Après la mise en service (une quinzaine d'années), électricité bas carbone et stable pour 60 ans : selon RTE, les scénarios avec nucléaire coûtent 59 à 66 Md€ par an contre 71 à 80 sans.",
   "benefits": [
    "Électricité bas carbone et pilotable pour des décennies.",
    "Moins de dépendance aux énergies importées.",
    "Emplois qualifiés dans toute une filière."
   ],
   "problems": [
    "Coûts élevés, dérives fréquentes sur les chantiers récents.",
    "Premier réacteur pas avant une douzaine d'années.",
    "Des déchets à gérer sur une très longue durée."
   ],
   "later": [
    {
     "in": 1,
     "text": "Les chantiers recrutent soudeurs, ingénieurs et électriciens dans toute la France.",
     "ind": {
      "emploi": 2
     }
    }
   ],
   "long_term": {
    "horizon": "15 à 60 ans",
    "text": "Une fois en service : prix de l'électricité plus stables, recettes et dividendes pour l'État, moins de CO₂.",
    "budget": 3,
    "ind": {
     "pouvoir_achat": 4,
     "co2": -4,
     "souverainete": 2
    }
   },
   "steps": [
    {
     "label": "Décision en Conseil de politique nucléaire",
     "weeks": 1
    },
    {
     "label": "Accord de financement et feu vert européen",
     "weeks": 1
    },
    {
     "label": "Lancement des appels d'offres",
     "weeks": 1
    }
   ],
   "sources": [
    {
     "label": "EDF : devis prévisionnel du programme EPR2 à 72,8 Md€",
     "url": "https://www.edf.fr/groupe-edf/espaces-dedies/journalistes/tous-les-communiques-de-presse/edf-presente-son-devis-previsionnel-du-programme-epr2-a-hauteur-de-728-mdeu"
    },
    {
     "label": "Connaissance des énergies : les Futurs énergétiques 2050 de RTE (coûts par scénario)",
     "url": "https://www.connaissancedesenergies.org/les-futurs-energetiques-2050-de-rte-en-infographies-211025"
    }
   ],
   "result": {
    "in": 1,
    "title": "Résultat de l'appel d'offres des nouveaux réacteurs",
    "outcomes": [
     {
      "id": "devis_tenu",
      "label": "Le devis est tenu",
      "weight": 0.5,
      "text": "Les industriels s'engagent sur les prix et le calendrier.",
      "plus": "Coûts maîtrisés, chantiers lancés.",
      "minus": "Des engagements encore à tenir sur dix ans.",
      "budget": 0,
      "once": 0,
      "ind": {
       "souverainete": 1,
       "emploi": 1
      },
      "axes": {},
      "later": []
     },
     {
      "id": "derive",
      "label": "Le devis dérape",
      "weight": 0.5,
      "text": "Les offres dépassent le devis : il faut plus de prêt public, comme sur les chantiers récents.",
      "plus": "Le programme continue malgré tout.",
      "minus": "Milliards en plus, calendrier repoussé.",
      "budget": 0,
      "once": -3,
      "ind": {
       "cohesion": -1
      },
      "axes": {},
      "later": [],
      "budget_note": "Surcoût du chantier : le déficit augmente une fois."
     }
    ]
   }
  },
  {
   "id": "defense_europeenne_emprunt",
   "label": "Financer la défense par un emprunt européen commun",
   "term": "Endettement commun de l'UE pour la défense",
   "sector": "europe",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Les pays européens empruntent ensemble pour équiper leurs armées.",
   "expert": "Création d'un instrument d'emprunt commun dédié à la défense, sur le modèle du plan de relance européen post-Covid, avec préférence pour l'industrie européenne.",
   "budget": -1,
   "once": 0,
   "budget_note": "Intérêts et part française de l'emprunt commun : le déficit augmente un peu.",
   "axes": {
    "eu": -2
   },
   "ind": {
    "souverainete": 2,
    "emploi": 2
   },
   "why_cost": "La France devra rembourser sa part, par l'impôt ou par sa contribution au budget européen.",
   "why_gain": "Des commandes groupées pour l'industrie européenne, dont une part en France, sans dette nationale immédiate.",
   "benefits": [
    "L'effort de défense est partagé entre Européens.",
    "Commandes groupées pour l'industrie européenne.",
    "Pas de dette nationale en plus tout de suite."
   ],
   "problems": [
    "Il faudra rembourser, par l'impôt ou le budget de l'UE.",
    "Désaccords entre pays sur les achats et les priorités.",
    "Moins de contrôle national sur les décisions."
   ],
   "later": [
    {
     "in": 2,
     "text": "Premiers contrats européens signés, dont une part en France.",
     "ind": {
      "emploi": 1
     },
     "budget": 0.5
    }
   ],
   "steps": [
    {
     "label": "Proposition de la France au Conseil de l'UE",
     "weeks": 1
    },
    {
     "label": "Négociation avec les autres États",
     "weeks": 1,
     "block": true
    },
    {
     "label": "Adaptation du droit français",
     "weeks": 1
    }
   ],
   "block": {
    "title": "Blocage entre États européens",
    "text": "Plusieurs pays refusent toute nouvelle dette commune : ils n'arrivent pas à se mettre d'accord.",
    "choices": [
     {
      "id": "abandon",
      "label": "Renoncer au projet",
      "label_expert": "Retirer la proposition du Conseil européen",
      "outcome": "abandon",
      "plus": "Pas de nouvelle dette européenne.",
      "minus": "Chaque pays s'équipe seul, plus cher.",
      "ind": {
       "souverainete": -1
      },
      "axes": {
       "eu": 1
      }
     },
     {
      "id": "petit_groupe",
      "label": "Avancer avec un petit groupe de pays volontaires",
      "label_expert": "Coopération renforcée entre États membres volontaires",
      "outcome": "amend",
      "factor": 0.6,
      "plus": "Le projet avance sans attendre tout le monde.",
      "minus": "Moins de moyens, Europe à deux vitesses.",
      "ind": {},
      "axes": {
       "eu": -1
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : des prêts plutôt qu'une dette commune",
      "label_expert": "Prêts de l'UE adossés au budget européen, sans dette mutualisée",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Accepté par les pays les plus réticents.",
      "minus": "Chaque pays rembourse seul ce qu'il emprunte.",
      "ind": {},
      "axes": {
       "eu": 1
      }
     }
    ]
   },
   "result": {
    "in": 1,
    "title": "Résultat du sommet européen sur la défense",
    "outcomes": [
     {
      "id": "accord",
      "label": "Accord ambitieux à 27",
      "weight": 0.5,
      "text": "Un grand emprunt commun finance des commandes groupées, dont une part en France.",
      "plus": "Commandes pour les usines françaises de défense.",
      "minus": "Une dette commune à rembourser plus tard.",
      "budget": 0.3,
      "once": 0,
      "ind": {
       "emploi": 1,
       "souverainete": 1
      },
      "axes": {},
      "later": [],
      "budget_note": "Financement partagé à 27 : la charge pour la France baisse."
     },
     {
      "id": "minimal",
      "label": "Accord minimal",
      "weight": 0.5,
      "text": "Les pays ne s'accordent que sur un petit fonds : chacun finance surtout seul.",
      "plus": "Pas de nouvelle dette commune importante.",
      "minus": "Peu de commandes, effort surtout national.",
      "budget": 0,
      "once": 0,
      "ind": {
       "emploi": -1,
       "souverainete": -1
      },
      "axes": {},
      "later": []
     }
    ]
   }
  },
  {
   "id": "reseaux_sociaux_15",
   "label": "Interdire les réseaux sociaux avant 15 ans",
   "term": "Majorité numérique à 15 ans avec vérification d'âge",
   "sector": "numerique",
   "origin": "Proposition transpartisane, présente dans plusieurs programmes",
   "simple": "Les moins de 15 ans ne peuvent plus ouvrir de compte sur les réseaux sociaux.",
   "expert": "Interdiction d'inscription avant 15 ans avec obligation de vérification d'âge pour les plateformes, en lien avec le règlement européen sur les services numériques.",
   "budget": 0,
   "once": 0,
   "budget_note": "Contrôle de l'âge à la charge des plateformes : pas d'effet direct sur le déficit.",
   "axes": {
    "soc": 1
   },
   "ind": {
    "cohesion": 2
   },
   "why_cost": "Le coût de vérification de l'âge est surtout payé par les plateformes ; il pose des questions de vie privée.",
   "why_gain": "Moins de harcèlement et d'addiction chez les jeunes, selon les médecins et enseignants qui soutiennent la mesure.",
   "benefits": [
    "Protège les jeunes du harcèlement et de l'addiction.",
    "Aide les parents qui veulent dire non.",
    "Moins d'exposition à des contenus violents."
   ],
   "problems": [
    "Vérifier l'âge pose des questions de vie privée.",
    "Les adolescents peuvent contourner l'interdiction.",
    "Les plateformes résistent, l'application est lente."
   ],
   "later": [
    {
     "in": 1,
     "text": "Des astuces de contournement circulent dans les cours de récréation.",
     "ind": {
      "cohesion": -1
     }
    },
    {
     "in": 3,
     "text": "Une partie des parents dit mieux gérer les écrans à la maison.",
     "ind": {
      "cohesion": 1
     }
    }
   ],
   "steps": [
    {
     "label": "Présentation en Conseil des ministres",
     "weeks": 1
    },
    {
     "label": "Débat et vote à l'Assemblée",
     "weeks": 1,
     "block": false
    },
    {
     "label": "Examen au Sénat puis décrets d'application",
     "weeks": 1
    }
   ]
  },
  {
   "id": "regulation_installation_medecins",
   "label": "Réguler l'installation des médecins",
   "term": "Régulation de l'installation en zones surdotées",
   "sector": "sante",
   "origin": "Proposition transpartisane, présente dans plusieurs programmes",
   "simple": "Un nouveau médecin ne peut plus s'installer là où il y en a déjà beaucoup.",
   "expert": "Autorisation d'installation conditionnée dans les zones bien dotées (un départ pour une arrivée), sur le modèle d'autres professions de santé.",
   "budget": 0,
   "once": 0,
   "budget_note": "Règle d'installation, sans dépense nouvelle : pas d'effet direct sur le déficit.",
   "axes": {
    "eco": -1
   },
   "ind": {
    "services": 3
   },
   "why_cost": "Pas de coût direct pour l'État, mais des médecins pourraient se détourner de la médecine de ville.",
   "why_gain": "Des patients soignés plus tôt près de chez eux, donc moins de passages coûteux aux urgences.",
   "benefits": [
    "Plus de médecins dans les zones qui en manquent.",
    "Une offre de soins mieux répartie sur le territoire.",
    "Moins de patients sans médecin traitant."
   ],
   "problems": [
    "Les jeunes médecins y voient une contrainte forte.",
    "Certains pourraient choisir le salariat ou l'étranger.",
    "Ne crée pas de médecins en plus à court terme."
   ],
   "later": [
    {
     "in": 2,
     "text": "Des syndicats de médecins appellent à une grève des gardes.",
     "ind": {
      "services": -1
     }
    },
    {
     "in": 3,
     "text": "Premières installations dans des cantons sans médecin.",
     "ind": {
      "services": 1
     }
    }
   ],
   "steps": [
    {
     "label": "Présentation en Conseil des ministres",
     "weeks": 1
    },
    {
     "label": "Débat et vote à l'Assemblée",
     "weeks": 1,
     "block": true
    },
    {
     "label": "Examen au Sénat puis décrets d'application",
     "weeks": 1
    }
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Des députés de tous bords soutiennent le texte, d'autres le bloquent sous la pression des médecins.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retirer la proposition de loi transpartisane",
      "outcome": "abandon",
      "plus": "Le calme revient, pas de passage en force.",
      "minus": "Rien ne change, le problème reste entier.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Article 49.3 sur la régulation à l'installation",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement et vite.",
      "minus": "Débat écourté, colère et risque de censure.",
      "ind": {
       "cohesion": -4
      },
      "axes": {
       "soc": 2
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : obligation limitée aux deux premières années d'exercice",
      "label_expert": "Conventionnement sélectif limité aux deux premières années d'exercice",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Une majorité se forme, la réforme passe.",
      "minus": "Effets réduits, chacun a dû céder.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     },
     {
      "id": "concertation",
      "label": "Négocier d'abord avec les syndicats de médecins",
      "label_expert": "Renvoyer à la négociation conventionnelle avec l'Assurance maladie",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Les médecins participent à la solution.",
      "minus": "Des semaines de plus, mesure affaiblie.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     }
    ]
   }
  },
  {
   "id": "revalorisation_enseignants",
   "label": "Mieux payer les enseignants, avec de nouvelles missions",
   "term": "Revalorisation contre missions complémentaires",
   "sector": "ecole",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Les professeurs sont mieux payés. En échange, ils assurent plus de remplacements et d'aide aux élèves.",
   "expert": "Hausse significative de la rémunération des enseignants, en partie liée à des missions complémentaires (remplacements, soutien, orientation).",
   "budget": -4,
   "once": 0,
   "budget_note": "Masse salariale de l'Éducation nationale en hausse : le déficit augmente.",
   "axes": {
    "eco": -1
   },
   "ind": {
    "services": 3
   },
   "why_cost": "Plus de 800 000 enseignants : chaque hausse de salaire se chiffre vite en milliards.",
   "why_gain": "Un métier plus attractif, des absences mieux remplacées, et à long terme des élèves mieux formés.",
   "benefits": [
    "Un métier plus attractif, plus de candidats aux concours.",
    "Les absences de professeurs mieux remplacées.",
    "Rattrape l'écart de salaire avec les pays voisins."
   ],
   "problems": [
    "Coût de plusieurs milliards d'euros par an.",
    "Les nouvelles missions sont contestées par des syndicats.",
    "Effets sur le niveau des élèves lents à mesurer."
   ],
   "later": [
    {
     "in": 3,
     "text": "Les inscriptions aux concours d'enseignants remontent.",
     "ind": {
      "services": 1
     }
    }
   ],
   "steps": [
    {
     "label": "Inscription dans le projet de budget",
     "weeks": 1
    },
    {
     "label": "Vote du budget au Parlement",
     "weeks": 1,
     "block": false
    }
   ]
  },
  {
   "id": "lutte_fraude",
   "label": "Grand plan contre la fraude fiscale et sociale",
   "term": "Renforcement des contrôles et croisement des données",
   "sector": "fiscalite",
   "origin": "Proposition transpartisane, présente dans plusieurs programmes",
   "simple": "Plus de contrôleurs et de croisements de fichiers pour récupérer l'argent des fraudes aux impôts et aux aides.",
   "expert": "Recrutement d'agents de contrôle, facturation électronique obligatoire contre la fraude à la TVA, croisement des données fiscales et sociales.",
   "budget": 3,
   "once": -0.2,
   "budget_note": "Contrôleurs à recruter, puis impôts et cotisations récupérés : le déficit baisse.",
   "axes": {
    "soc": 1
   },
   "ind": {
    "cohesion": 1
   },
   "why_cost": "Il faut recruter et former des contrôleurs ; le croisement des fichiers pose des questions de libertés.",
   "why_gain": "La fraude détectée atteint environ 20 Md€ par an, dont 13 Md€ récupérés : en récupérer davantage rapporte quelques milliards.",
   "benefits": [
    "Récupère de l'argent dû, sans nouvel impôt.",
    "Plus d'équité entre ceux qui paient et les autres.",
    "Mesure soutenue au-delà des clivages."
   ],
   "problems": [
    "Gains incertains : la fraude est difficile à chiffrer.",
    "Croisement de fichiers et vie privée en débat.",
    "Il faut des années pour former les contrôleurs."
   ],
   "later": [],
   "steps": [
    {
     "label": "Concertation avec les acteurs concernés",
     "weeks": 1
    },
    {
     "label": "Décret et circulaires d'application",
     "weeks": 1
    }
   ],
   "sources": [
    {
     "label": "Boursorama : 20 Md€ de fraude détectés en 2024, 13 Md€ récupérés",
     "url": "https://www.boursorama.com/actualite-economique/actualites-amp/20-milliards-d-euros-de-fraude-detectes-en-2024-13-milliards-recuperes-selon-le-gouvernement-4c080839b383e4ae5a744b4bf0cd3fcf"
    }
   ],
   "result": {
    "in": 1,
    "title": "Bilan des premiers contrôles",
    "outcomes": [
     {
      "id": "efficace",
      "label": "Contrôles efficaces",
      "weight": 0.5,
      "text": "Les redressements augmentent nettement et l'argent est bien récupéré.",
      "plus": "Plus d'argent récupéré sans nouvel impôt.",
      "minus": "Plus de contrôles, plus de contestations.",
      "budget": 1,
      "once": 0,
      "ind": {},
      "axes": {},
      "later": [],
      "budget_note": "Plus de sommes récupérées que prévu : le déficit baisse."
     },
     {
      "id": "decevant",
      "label": "Rendement décevant",
      "weight": 0.5,
      "text": "La fraude est détectée, mais une grande partie de l'argent n'est jamais récupérée.",
      "plus": "Les fraudeurs sont mieux connus.",
      "minus": "Moins d'argent récupéré qu'annoncé.",
      "budget": -1.5,
      "once": 0,
      "ind": {},
      "axes": {},
      "later": [],
      "budget_note": "Moins de sommes récupérées que prévu : le déficit remonte."
     }
    ]
   }
  },
  {
   "id": "fusion_agences",
   "label": "Fusionner ou supprimer un tiers des agences de l'État",
   "term": "Rationalisation des opérateurs et agences publiques",
   "sector": "fiscalite",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "L'État regroupe ou ferme une partie de ses nombreuses agences.",
   "expert": "Suppression ou fusion d'environ un tiers des agences, opérateurs et organismes consultatifs, avec réinternalisation de missions dans les ministères.",
   "budget": 1.5,
   "once": -0.2,
   "budget_note": "Coût de réorganisation, puis frais de fonctionnement en moins : le déficit baisse.",
   "axes": {
    "eco": 1
   },
   "ind": {
    "services": -1
   },
   "why_cost": "Les fusions coûtent au début (déménagements, systèmes informatiques), et certaines missions disparaissent.",
   "why_gain": "Le gouvernement annonçait 2 à 3 Md€ d'économies ; une commission du Sénat jugeait plutôt en millions qu'en milliards, à long terme. Le jeu retient 1,5 Md€.",
   "benefits": [
    "Un État plus lisible, moins de doublons.",
    "Des économies de fonctionnement.",
    "Des décisions remises aux ministres responsables."
   ],
   "problems": [
    "Économies réelles très débattues.",
    "Les fusions passées ont souvent coûté cher.",
    "Certaines politiques publiques sont supprimées avec."
   ],
   "later": [
    {
     "in": 2,
     "text": "Les premières fusions se font ; des dossiers restent en attente le temps des réorganisations.",
     "ind": {
      "services": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Concertation avec les acteurs concernés",
     "weeks": 1
    },
    {
     "label": "Décret et circulaires d'application",
     "weeks": 1
    }
   ],
   "sources": [
    {
     "label": "Public Sénat : 2 à 3 Md€ d'économies sur les agences, un chiffre qui interroge",
     "url": "https://www.publicsenat.fr/actualites/politique/2-a-3-milliards-deconomies-sur-les-agences-de-letat-pourquoi-le-chiffre-de-la-ministre-interroge-la-commission-denquete-du-senat"
    }
   ],
   "result": {
    "in": 1,
    "title": "Bilan des premières fusions d'agences",
    "outcomes": [
     {
      "id": "economies",
      "label": "Économies au rendez-vous",
      "weight": 0.5,
      "text": "Les fusions réduisent les loyers, les systèmes informatiques et les postes de direction.",
      "plus": "Un État plus simple et moins coûteux.",
      "minus": "Des agents mutés, des missions regroupées.",
      "budget": 0.5,
      "once": 0,
      "ind": {},
      "axes": {},
      "later": [],
      "budget_note": "Économies plus fortes que prévu : le déficit baisse."
     },
     {
      "id": "maigre",
      "label": "Économies très faibles",
      "weight": 0.5,
      "text": "Comme l'avait prévu une commission du Sénat, les économies se comptent en millions, pas en milliards.",
      "plus": "Au moins, l'organisation est plus lisible.",
      "minus": "Gain presque nul après les coûts de fusion.",
      "budget": -1.2,
      "once": 0,
      "ind": {},
      "axes": {},
      "later": [],
      "budget_note": "Économies bien plus faibles que prévu : le déficit remonte."
     }
    ]
   }
  },
  {
   "id": "sortie_nucleaire",
   "label": "Sortir progressivement du nucléaire",
   "term": "Fermeture programmée du parc nucléaire",
   "sector": "energie",
   "origin": "Proposition présente dans plusieurs programmes",
   "intensity": "forte",
   "simple": "On ferme peu à peu les centrales nucléaires et on les remplace par d'autres énergies.",
   "expert": "Arrêt progressif des réacteurs existants sans renouvellement du parc, et développement massif des renouvelables, du stockage et des économies d'énergie.",
   "budget": -6,
   "once": -15,
   "budget_note": "Indemnisation de l'exploitant et soutien aux renouvelables : le déficit augmente.",
   "axes": {
    "env": -2,
    "eu": -1
   },
   "ind": {
    "co2": 3,
    "souverainete": -6,
    "pouvoir_achat": -2
   },
   "why_cost": "Il faut remplacer environ deux tiers de notre électricité : éoliennes, solaire, réseaux, stockage. Selon RTE, un système sans nucléaire coûterait 71 à 80 Md€ par an contre 59 à 66 avec.",
   "why_gain": "Plus d'accident nucléaire possible ni de nouveaux déchets, et des milliers d'emplois dans les renouvelables.",
   "benefits": [
    "Fin du risque d'accident nucléaire majeur.",
    "Plus de nouveaux déchets radioactifs à stocker.",
    "Essor des énergies renouvelables et de leurs emplois."
   ],
   "problems": [
    "Il faut remplacer environ deux tiers de notre électricité.",
    "Risque de recours au gaz et aux importations.",
    "Des emplois perdus dans la filière et ses territoires."
   ],
   "later": [
    {
     "in": 1,
     "text": "Les premières fermetures de réacteurs sont annoncées. Les communes concernées s'inquiètent pour leurs emplois.",
     "ind": {
      "emploi": -3
     }
    },
    {
     "in": 2,
     "text": "Les prix de l'électricité montent sur les marchés : il faut importer davantage en hiver.",
     "ind": {
      "pouvoir_achat": -3,
      "souverainete": -2
     }
    },
    {
     "in": 3,
     "text": "Les chantiers éoliens et solaires accélèrent partout et recrutent.",
     "ind": {
      "emploi": 2,
      "co2": -1
     }
    }
   ],
   "long_term": {
    "horizon": "15 à 35 ans",
    "text": "Système électrique plus coûteux selon RTE (environ 12 à 14 Md€ de plus par an), mais sans risque nucléaire ni nouveaux déchets.",
    "budget": -6,
    "ind": {
     "pouvoir_achat": -4,
     "emploi": 2
    }
   },
   "steps": [
    {
     "label": "Présentation en Conseil des ministres",
     "weeks": 1
    },
    {
     "label": "Débat et vote à l'Assemblée",
     "weeks": 1,
     "block": true
    },
    {
     "label": "Examen au Sénat puis décrets d'application",
     "weeks": 1
    }
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "La fermeture des réacteurs divise les députés, y compris dans les régions concernées.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retirer la révision de la programmation pluriannuelle de l'énergie",
      "outcome": "abandon",
      "plus": "Le calme revient, pas de passage en force.",
      "minus": "Rien ne change, le problème reste entier.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Article 49.3 sur la loi de programmation énergie-climat",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement et vite.",
      "minus": "Débat écourté, colère et risque de censure.",
      "ind": {
       "cohesion": -4
      },
      "axes": {
       "soc": 2
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : ne pas construire de nouveaux réacteurs, fermer les plus anciens",
      "label_expert": "Moratoire sur les nouveaux EPR, fermeture des réacteurs les plus anciens",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Une majorité se forme, la réforme passe.",
      "minus": "Effets réduits, chacun a dû céder.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     },
     {
      "id": "referendum",
      "label": "Organiser un référendum sur l'énergie",
      "label_expert": "Référendum de l'article 11 sur la politique énergétique",
      "outcome": "amend",
      "factor": 0.7,
      "plus": "Les citoyens choisissent l'avenir énergétique.",
      "minus": "Campagne très technique, résultat incertain.",
      "ind": {
       "cohesion": -1
      },
      "axes": {
       "soc": -1
      }
     }
    ]
   },
   "sources": [
    {
     "label": "Connaissance des énergies : les Futurs énergétiques 2050 de RTE (coûts par scénario)",
     "url": "https://www.connaissancedesenergies.org/les-futurs-energetiques-2050-de-rte-en-infographies-211025"
    }
   ],
   "result": {
    "in": 1,
    "title": "Résultat des appels d'offres éoliens et solaires",
    "outcomes": [
     {
      "id": "reussite",
      "label": "Les appels d'offres sont remplis",
      "weight": 0.5,
      "text": "Les projets éoliens et solaires sont nombreux et moins chers que prévu.",
      "plus": "Les chantiers recrutent, moins de CO₂.",
      "minus": "Il faut encore des réseaux et du stockage.",
      "budget": 0,
      "once": 0,
      "ind": {
       "emploi": 2,
       "co2": -1
      },
      "axes": {},
      "later": []
     },
     {
      "id": "retards",
      "label": "Retards et recours",
      "weight": 0.5,
      "text": "Des projets sont bloqués par des recours et des délais de raccordement : il faut importer.",
      "plus": "Les riverains sont mieux écoutés.",
      "minus": "Importations et prix en hausse.",
      "budget": -0.5,
      "once": 0,
      "ind": {
       "souverainete": -2,
       "pouvoir_achat": -2,
       "co2": 1
      },
      "axes": {},
      "later": [],
      "budget_note": "Retards et recours, surcoûts : le déficit augmente."
     }
    ]
   }
  },
  {
   "id": "renovation_massive",
   "label": "Plan massif de rénovation des logements",
   "term": "Rénovation énergétique globale des passoires thermiques",
   "sector": "logement",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "L'État paie une grande partie des travaux pour isoler les logements mal chauffés.",
   "expert": "Financement public renforcé de la rénovation globale (isolation, chauffage) des logements classés F et G, avec reste à charge réduit pour les ménages modestes.",
   "budget": -8,
   "once": 0,
   "budget_note": "Subventions de rénovation versées aux ménages : le déficit augmente.",
   "axes": {
    "env": -2,
    "eco": -1
   },
   "ind": {
    "co2": -4,
    "emploi": 3
   },
   "why_cost": "Une rénovation complète coûte des dizaines de milliers d'euros par logement : l'État en paie une grande part.",
   "why_gain": "Des factures plus basses chaque hiver, moins d'importations de gaz, des emplois locaux non délocalisables, et moins d'aides d'urgence lors des crises.",
   "benefits": [
    "Factures de chauffage en baisse durable.",
    "Moins de CO₂ et de logements passoires.",
    "Des emplois locaux dans le bâtiment."
   ],
   "problems": [
    "Coût public de plusieurs milliards par an.",
    "Manque d'artisans qualifiés, fraudes possibles.",
    "Gains réels parfois inférieurs aux calculs."
   ],
   "later": [
    {
     "in": 2,
     "text": "Des arnaques à la rénovation sont signalées.",
     "ind": {
      "cohesion": -1
     }
    },
    {
     "in": 3,
     "text": "Les premières factures baissent dans les logements rénovés.",
     "ind": {
      "pouvoir_achat": 2
     }
    }
   ],
   "long_term": {
    "horizon": "10 à 30 ans",
    "text": "Moins de gaz importé et moins de chèques énergie à verser à chaque crise.",
    "budget": 2,
    "ind": {
     "pouvoir_achat": 3,
     "co2": -3
    }
   },
   "steps": [
    {
     "label": "Inscription dans le projet de budget",
     "weeks": 1
    },
    {
     "label": "Vote du budget au Parlement",
     "weeks": 1,
     "block": false
    }
   ],
   "result": {
    "in": 1,
    "title": "Le secteur du bâtiment suit-il ?",
    "outcomes": [
     {
      "id": "suivi",
      "label": "Les artisans suivent",
      "weight": 0.5,
      "text": "Les entreprises du bâtiment recrutent et forment : les chantiers avancent.",
      "plus": "Chantiers rapides et emplois locaux.",
      "minus": "Prix des travaux en hausse avec la demande.",
      "budget": 0,
      "once": 0,
      "ind": {
       "emploi": 1,
       "co2": -1
      },
      "axes": {},
      "later": []
     },
     {
      "id": "goulot",
      "label": "Pénurie d'artisans et fraudes",
      "weight": 0.5,
      "text": "Pas assez d'artisans qualifiés : délais longs, et des fraudes à l'aide publique.",
      "plus": "Les contrôles des aides se renforcent partout.",
      "minus": "Argent public mal dépensé, travaux en retard.",
      "budget": -1,
      "once": 0,
      "ind": {
       "cohesion": -1
      },
      "axes": {},
      "later": [],
      "budget_note": "Fraudes et surcoûts des aides : le déficit augmente."
     }
    ]
   }
  },
  {
   "id": "taxe_kerosene_train",
   "label": "Taxer le kérosène et financer le train",
   "term": "Fiscalité du transport aérien affectée au ferroviaire",
   "sector": "transports",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Le carburant des avions est taxé. L'argent sert à améliorer les trains.",
   "expert": "Taxation du kérosène sur les vols intérieurs et hausse de la taxe sur les billets, avec affectation des recettes au réseau ferroviaire.",
   "budget": 2,
   "once": 0,
   "budget_note": "Taxe sur le kérosène, en partie réinvestie dans le rail : le déficit baisse.",
   "axes": {
    "env": -2
   },
   "ind": {
    "co2": -2,
    "pouvoir_achat": -1
   },
   "why_cost": "Les billets d'avion augmentent, ce qui touche les familles, le tourisme et les territoires éloignés.",
   "why_gain": "Des recettes nouvelles chaque année et des trains plus fiables, donc moins d'émissions.",
   "benefits": [
    "L'avion paie davantage pour sa pollution.",
    "Des recettes réinvesties dans les trains.",
    "Moins d'écart de prix entre l'avion et le train."
   ],
   "problems": [
    "Billets d'avion plus chers pour les familles.",
    "Outre-mer et Corse très dépendants de l'avion.",
    "Le tourisme et les compagnies s'inquiètent."
   ],
   "later": [
    {
     "in": 2,
     "text": "Des compagnies suppriment quelques lignes intérieures.",
     "ind": {
      "emploi": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Inscription dans le projet de budget",
     "weeks": 1
    },
    {
     "label": "Vote du budget au Parlement",
     "weeks": 1,
     "block": false
    }
   ]
  },
  {
   "id": "sortie_pesticides",
   "label": "Sortir progressivement des pesticides de synthèse",
   "term": "Réduction programmée des produits phytosanitaires",
   "sector": "agriculture",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Les agriculteurs sont aidés à se passer peu à peu des produits chimiques.",
   "expert": "Calendrier de sortie des produits phytosanitaires de synthèse, avec aides à la transition et soutien à l'agriculture biologique.",
   "budget": -2,
   "once": 0,
   "budget_note": "Aides à la conversion des agriculteurs : le déficit augmente.",
   "axes": {
    "env": -2
   },
   "ind": {
    "co2": -1,
    "emploi": -2,
    "souverainete": -2
   },
   "why_cost": "Il faut aider les fermes pendant la transition, car les rendements baissent sur certaines cultures.",
   "why_gain": "Une eau plus propre coûte moins cher à traiter pour les communes, et la santé des agriculteurs s'améliore.",
   "benefits": [
    "Meilleure qualité de l'eau et des sols.",
    "Moins d'exposition des agriculteurs et des riverains.",
    "Les insectes pollinisateurs sont protégés."
   ],
   "problems": [
    "Rendements en baisse sur certaines cultures.",
    "Concurrence d'importations moins encadrées.",
    "Coût de transition pour les exploitations."
   ],
   "later": [
    {
     "in": 2,
     "text": "Des filières demandent des délais pour les cultures sans solution de remplacement.",
     "ind": {
      "cohesion": -1
     }
    },
    {
     "in": 3,
     "text": "Les analyses d'eau s'améliorent dans plusieurs bassins.",
     "budget": 0.2
    }
   ],
   "steps": [
    {
     "label": "Présentation en Conseil des ministres",
     "weeks": 1
    },
    {
     "label": "Débat et vote à l'Assemblée",
     "weeks": 1,
     "block": true
    },
    {
     "label": "Examen au Sénat puis décrets d'application",
     "weeks": 1
    }
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Les députés des zones agricoles s'opposent au calendrier : pas de majorité.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retirer le texte et s'en tenir au plan Écophyto",
      "outcome": "abandon",
      "plus": "Le calme revient, pas de passage en force.",
      "minus": "Rien ne change, le problème reste entier.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Article 49.3 sur la loi de sortie des pesticides",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement et vite.",
      "minus": "Débat écourté, colère et risque de censure.",
      "ind": {
       "cohesion": -4
      },
      "axes": {
       "soc": 2
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : calendrier plus long et dérogations sans alternative",
      "label_expert": "Calendrier allongé et dérogations faute d'alternative",
      "outcome": "amend",
      "factor": 0.6,
      "plus": "Une majorité se forme, la réforme passe.",
      "minus": "Effets réduits, chacun a dû céder.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     }
    ]
   }
  },
  {
   "id": "leasing_electrique",
   "label": "Voiture électrique à petit prix pour les ménages modestes",
   "term": "Leasing social généralisé",
   "sector": "transports",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Les ménages modestes peuvent louer une voiture électrique pour une centaine d'euros par mois.",
   "expert": "Généralisation de la location longue durée subventionnée de véhicules électriques, sous conditions de revenus et de trajets domicile-travail.",
   "budget": -1.5,
   "once": 0,
   "budget_note": "L'État paie une partie des loyers des voitures : le déficit augmente.",
   "axes": {
    "env": -1,
    "eco": -1
   },
   "ind": {
    "co2": -2,
    "pouvoir_achat": 2,
    "souverainete": -1
   },
   "why_cost": "L'État paie une grande partie de la location de chaque voiture.",
   "why_gain": "Moins d'essence achetée par les ménages modestes, donc plus de pouvoir d'achat et moins de pétrole importé.",
   "benefits": [
    "La voiture électrique devient accessible aux modestes.",
    "Moins d'essence achetée, moins de CO₂.",
    "Soutient la production si les voitures sont européennes."
   ],
   "problems": [
    "Coût public de plus d'un milliard d'euros par an.",
    "Une partie des voitures et batteries est importée.",
    "Les bornes de recharge restent rares à la campagne."
   ],
   "later": [
    {
     "in": 2,
     "text": "Forte demande : les listes d'attente s'allongent.",
     "ind": {
      "cohesion": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Concertation avec les acteurs concernés",
     "weeks": 1
    },
    {
     "label": "Décret et circulaires d'application",
     "weeks": 1
    }
   ]
  },
  {
   "id": "niches_brunes",
   "label": "Supprimer les avantages fiscaux qui favorisent les énergies fossiles",
   "term": "Suppression des dépenses fiscales défavorables au climat",
   "sector": "fiscalite",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Certains secteurs paient moins de taxes sur le gazole ou le fioul. Ces réductions sont supprimées peu à peu.",
   "expert": "Extinction progressive des dépenses fiscales brunes : taux réduits de taxe sur le gazole des poids lourds et du gazole non routier, notamment.",
   "budget": 4,
   "once": 0,
   "budget_note": "Fin d'exonérations fiscales sur les carburants : le déficit baisse.",
   "axes": {
    "env": -2,
    "eco": 1
   },
   "ind": {
    "co2": -3,
    "pouvoir_achat": -2,
    "emploi": -1
   },
   "why_cost": "Les transporteurs, le bâtiment et l'agriculture paient plus cher leur carburant, et peuvent répercuter sur les prix.",
   "why_gain": "Ces avantages coûtaient environ 7,6 Md€ par an selon le budget vert de l'État : en supprimer la moitié rapporte environ 4 Md€.",
   "benefits": [
    "Recettes nouvelles sans créer d'impôt.",
    "Moins d'incitation à brûler du pétrole.",
    "Fin de règles différentes selon les secteurs."
   ],
   "problems": [
    "Hausse des coûts pour transporteurs et agriculteurs.",
    "Prix des produits transportés en hausse.",
    "Risque de colère sociale, comme lors de blocages passés."
   ],
   "later": [
    {
     "in": 1,
     "text": "Des transporteurs organisent des opérations escargot.",
     "ind": {
      "cohesion": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Inscription dans le projet de budget",
     "weeks": 1
    },
    {
     "label": "Vote du budget au Parlement",
     "weeks": 1,
     "block": false
    }
   ],
   "sources": [
    {
     "label": "I4CE : les niches fiscales défavorables au climat (7,6 Md€ selon le budget vert)",
     "url": "https://www.i4ce.org/wp-content/uploads/I4CE-NichesFiscales.pdf"
    }
   ]
  },
  {
   "id": "taxe_billets_premium",
   "label": "Taxer davantage les jets privés et les billets en classe affaires",
   "term": "Hausse ciblée de la taxe de solidarité sur les billets d'avion",
   "sector": "transports",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Les vols en jet privé et les billets les plus chers paient une taxe plus forte.",
   "expert": "Hausse de la taxe de solidarité sur les billets d'avion, concentrée sur l'aviation d'affaires et les classes premium.",
   "budget": 0.8,
   "once": 0,
   "budget_note": "Taxe sur les jets privés et les billets premium : le déficit baisse.",
   "axes": {
    "env": -1,
    "eco": -1
   },
   "ind": {
    "co2": -1,
    "cohesion": 1
   },
   "why_cost": "Les compagnies et les aéroports d'affaires craignent de perdre des clients au profit des pays voisins.",
   "why_gain": "Une recette de l'ordre d'un milliard (estimation), payée surtout par les voyageurs les plus aisés.",
   "benefits": [
    "Ceux qui polluent le plus par passager paient plus.",
    "Recette nouvelle sans toucher aux vols ordinaires.",
    "Message d'équité face à l'effort demandé."
   ],
   "problems": [
    "Rendement limité au regard du déficit.",
    "Les vols d'affaires peuvent partir de pays voisins.",
    "Les compagnies françaises s'estiment pénalisées."
   ],
   "later": [
    {
     "in": 2,
     "text": "Une partie des jets privés décolle désormais de pays voisins.",
     "budget": -0.2
    }
   ],
   "steps": [
    {
     "label": "Inscription dans le projet de budget",
     "weeks": 1
    },
    {
     "label": "Vote du budget au Parlement",
     "weeks": 1,
     "block": false
    }
   ]
  },
  {
   "id": "sortie_marche_electricite",
   "label": "Sortir du marché européen de l'électricité",
   "term": "Sortie du mécanisme européen de formation des prix de gros",
   "sector": "energie",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Le prix de l'électricité en France ne suit plus le marché européen, mais nos propres coûts.",
   "expert": "Fixation nationale des prix de l'électricité sur la base des coûts de production du parc français, hors du couplage européen des marchés de gros.",
   "budget": 0,
   "once": -1,
   "budget_note": "Contentieux et mise en place d'un tarif national : le déficit augmente une fois.",
   "axes": {
    "eu": 2,
    "env": 1
   },
   "ind": {
    "pouvoir_achat": 4,
    "souverainete": 4
   },
   "why_cost": "Il faut renégocier les échanges avec nos voisins et risquer des sanctions européennes ; moins d'aide des voisins en cas de pénurie.",
   "why_gain": "Des prix calés sur le nucléaire et l'hydraulique, moins chers et plus stables que le marché européen lors des crises du gaz.",
   "benefits": [
    "Prix calés sur les coûts de production français.",
    "Les crises du gaz pèsent moins sur les factures.",
    "Plus de maîtrise nationale de l'énergie."
   ],
   "problems": [
    "Conflit juridique avec les règles européennes.",
    "Échanges d'électricité avec les voisins compliqués.",
    "Moins de secours des voisins en cas de pénurie."
   ],
   "later": [
    {
     "in": 1,
     "text": "Les fournisseurs annoncent des tarifs plus stables pour l'an prochain.",
     "ind": {
      "pouvoir_achat": 1
     }
    },
    {
     "in": 2,
     "text": "La Commission européenne conteste la mesure ; des négociations s'ouvrent."
    },
    {
     "in": 3,
     "text": "Pic de froid : la France doit négocier en urgence des importations.",
     "ind": {
      "souverainete": -2
     }
    }
   ],
   "steps": [
    {
     "label": "Proposition de la France au Conseil de l'UE",
     "weeks": 1
    },
    {
     "label": "Négociation avec les autres États",
     "weeks": 1,
     "block": false
    },
    {
     "label": "Adaptation du droit français",
     "weeks": 1
    }
   ],
   "result": {
    "in": 1,
    "title": "Réponse de la Commission européenne",
    "outcomes": [
     {
      "id": "derogation",
      "label": "La Commission accepte un régime dérogatoire",
      "weight": 0.5,
      "text": "Un mécanisme de prix fondé sur les coûts du parc français est toléré, avec des conditions.",
      "plus": "Prix stables, sans conflit juridique majeur.",
      "minus": "Conditions à respecter, marge réduite.",
      "budget": 0,
      "once": 0,
      "ind": {
       "pouvoir_achat": 1
      },
      "axes": {},
      "later": []
     },
     {
      "id": "infraction",
      "label": "Procédure d'infraction",
      "weight": 0.5,
      "text": "La Commission ouvre une procédure : risque d'amendes et échanges d'électricité compliqués.",
      "plus": "La France garde la main sur ses prix.",
      "minus": "Amendes possibles, voisins moins solidaires.",
      "budget": -0.5,
      "once": 0,
      "ind": {
       "souverainete": -1,
       "pouvoir_achat": -1
      },
      "axes": {},
      "later": [],
      "budget_note": "Amendes et contentieux européens : le déficit augmente."
     }
    ]
   }
  },
  {
   "id": "referendum_immigration",
   "label": "Organiser un référendum sur l'immigration",
   "term": "Référendum sur les conditions d'entrée et de séjour",
   "sector": "immigration",
   "origin": "Proposition présente dans plusieurs programmes",
   "intensity": "forte",
   "simple": "Les citoyens votent directement sur les règles de l'immigration.",
   "expert": "Consultation référendaire sur l'entrée, le séjour et l'accès aux droits des étrangers, ce qui supposerait probablement une révision constitutionnelle.",
   "budget": -0.3,
   "once": 0,
   "budget_note": "Coût d'organisation du scrutin : le déficit augmente un peu.",
   "axes": {
    "soc": 2,
    "eu": 2
   },
   "ind": {
    "cohesion": -2
   },
   "why_cost": "Organiser un scrutin national coûte quelques centaines de millions ; le texte risque des conflits avec le droit européen.",
   "why_gain": "Si le oui l'emporte, des règles d'entrée et de séjour plus strictes, voulues par une majorité ; si le non l'emporte, la question est tranchée pour un temps.",
   "benefits": [
    "Les citoyens tranchent eux-mêmes un sujet majeur.",
    "Une décision populaire forte et légitime.",
    "Permet de changer les règles d'entrée et de séjour."
   ],
   "problems": [
    "Demande probablement de réviser la Constitution.",
    "Risque de conflit avec le droit européen.",
    "Campagne très polarisante pour le pays."
   ],
   "later": [
    {
     "in": 1,
     "text": "Juristes et Conseil constitutionnel débattent de la procédure.",
     "ind": {
      "cohesion": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Présentation en Conseil des ministres",
     "weeks": 1
    },
    {
     "label": "Vote de la révision par les deux assemblées",
     "weeks": 1,
     "block": true
    },
    {
     "label": "Campagne puis vote des Français",
     "weeks": 1
    }
   ],
   "block": {
    "title": "Blocage au Parlement",
    "text": "La révision de la Constitution exige l'accord des deux assemblées : elles n'arrivent pas à se mettre d'accord.",
    "choices": [
     {
      "id": "abandon",
      "label": "Renoncer au référendum",
      "label_expert": "Renoncer à la procédure référendaire",
      "outcome": "abandon",
      "plus": "Pas de bataille constitutionnelle.",
      "minus": "Ses partisans dénoncent un déni.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "soc": -1
      }
     },
     {
      "id": "article11",
      "label": "Passer par une autre procédure, contestée",
      "label_expert": "Recourir directement à l'article 11, au champ contesté",
      "outcome": "pass",
      "plus": "Le vote populaire a bien lieu.",
      "minus": "Juristes divisés, crise institutionnelle.",
      "ind": {
       "cohesion": -4
      },
      "axes": {
       "soc": 2
      }
     },
     {
      "id": "compromis",
      "label": "Référendum limité à ce que permet la Constitution",
      "label_expert": "Question restreinte à la politique économique et sociale de la nation",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Juridiquement solide, vote possible.",
      "minus": "Portée réduite, déçoit les deux camps.",
      "ind": {},
      "axes": {
       "soc": -1
      }
     }
    ]
   },
   "result": {
    "in": 1,
    "title": "Résultat du référendum sur l'immigration",
    "outcomes": [
     {
      "id": "oui",
      "label": "Le oui l'emporte",
      "weight": 0.5,
      "text": "Les conditions d'entrée, de séjour et de regroupement familial sont durcies ; certaines prestations sont réservées aux résidents de longue durée.",
      "plus": "Une politique migratoire voulue par une majorité.",
      "minus": "Recours devant les juridictions européennes.",
      "budget": -0.1,
      "once": 0,
      "ind": {
       "souverainete": 3,
       "cohesion": -2,
       "emploi": -1
      },
      "axes": {
       "soc": 1,
       "eu": 1
      },
      "later": [
       {
        "in": 2,
        "text": "Des recours sont déposés devant les juridictions européennes ; certains secteurs signalent des difficultés de recrutement.",
        "ind": {
         "souverainete": -1,
         "emploi": -1
        }
       }
      ],
      "budget_note": "Mise en œuvre des mesures votées : le déficit augmente un peu."
     },
     {
      "id": "non",
      "label": "Le non l'emporte",
      "weight": 0.5,
      "text": "Les règles actuelles restent en vigueur. Le débat continue, mais la question est tranchée pour un temps.",
      "plus": "Les règles actuelles restent stables et connues.",
      "minus": "Ses partisans se sentent désavoués par le vote.",
      "budget": 0,
      "once": 0,
      "ind": {
       "cohesion": 1,
       "souverainete": -1
      },
      "axes": {
       "soc": -1
      },
      "later": []
     }
    ]
   }
  },
  {
   "id": "service_militaire",
   "label": "Rétablir un service militaire ou national obligatoire",
   "term": "Service national universel obligatoire",
   "sector": "defense",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Chaque jeune passe quelques mois au service du pays, dans l'armée ou ailleurs.",
   "expert": "Service obligatoire de plusieurs mois pour une classe d'âge (environ 800 000 jeunes), à dominante militaire ou civique selon les versions.",
   "budget": -3,
   "once": -2,
   "budget_note": "Encadrement, hébergement et solde des appelés : le déficit augmente.",
   "axes": {
    "soc": 2,
    "eu": 1
   },
   "ind": {
    "cohesion": 3,
    "souverainete": 2,
    "emploi": -1
   },
   "why_cost": "Loger, nourrir, équiper et encadrer 800 000 jeunes chaque année coûte plusieurs milliards.",
   "why_gain": "Une réserve formée en cas de crise et un brassage social que ses défenseurs jugent précieux.",
   "benefits": [
    "Brassage entre jeunes de tous les milieux.",
    "Une réserve de personnes formées en cas de crise.",
    "Un sentiment d'appartenance renforcé."
   ],
   "problems": [
    "Coût de plusieurs milliards par an (logement, encadrement).",
    "L'armée doit détourner des cadres pour encadrer.",
    "Retarde l'entrée des jeunes en études ou en emploi."
   ],
   "later": [
    {
     "in": 2,
     "text": "Il manque des casernes et des encadrants pour accueillir la première classe d'âge.",
     "budget": -1
    }
   ],
   "steps": [
    {
     "label": "Présentation en Conseil des ministres",
     "weeks": 1
    },
    {
     "label": "Débat et vote à l'Assemblée",
     "weeks": 1,
     "block": false
    },
    {
     "label": "Examen au Sénat puis décrets d'application",
     "weeks": 1
    }
   ]
  },
  {
   "id": "prix_planchers_agricoles",
   "label": "Instaurer des prix planchers pour les agriculteurs",
   "term": "Prix minimum garanti fondé sur les coûts de production",
   "sector": "agriculture",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Les produits agricoles ne peuvent plus être achetés en dessous de ce qu'ils coûtent à produire.",
   "expert": "Fixation de prix minimaux par filière à partir d'indicateurs de coûts de production, opposables dans les négociations commerciales.",
   "budget": 0,
   "once": 0,
   "budget_note": "Prix fixés entre acheteurs et producteurs, sans dépense de l'État : pas d'effet direct.",
   "axes": {
    "eco": -2,
    "eu": 1
   },
   "ind": {
    "emploi": 1,
    "souverainete": 2,
    "pouvoir_achat": -2
   },
   "why_cost": "Pas de coût pour l'État, mais des prix plus élevés en magasin pour les consommateurs.",
   "why_gain": "Moins de fermes qui ferment, donc moins d'aides d'urgence à verser lors des crises agricoles.",
   "benefits": [
    "Les agriculteurs ne vendent plus à perte.",
    "Maintient des fermes et une production française.",
    "Moins de dépendance alimentaire."
   ],
   "problems": [
    "Prix plus élevés en magasin pour les clients.",
    "Importations moins chères difficiles à bloquer.",
    "Fixer le bon prix est complexe selon les fermes."
   ],
   "later": [
    {
     "in": 1,
     "text": "Les négociations avec les supermarchés se tendent.",
     "ind": {
      "pouvoir_achat": -1
     }
    },
    {
     "in": 3,
     "text": "Moins d'exploitations cessent leur activité.",
     "ind": {
      "emploi": 1
     }
    }
   ],
   "steps": [
    {
     "label": "Présentation en Conseil des ministres",
     "weeks": 1
    },
    {
     "label": "Débat et vote à l'Assemblée",
     "weeks": 1,
     "block": false
    },
    {
     "label": "Examen au Sénat puis décrets d'application",
     "weeks": 1
    }
   ]
  },
  {
   "id": "tva_energie_5_5",
   "label": "Baisser la TVA sur l'énergie à 5,5 %",
   "term": "TVA à taux réduit sur l'électricité, le gaz et les carburants",
   "sector": "energie",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "La taxe sur l'électricité, le gaz et l'essence baisse : factures et plein coûtent moins cher.",
   "expert": "Application du taux réduit de TVA à 5,5 % aux produits énergétiques, permise par la directive européenne sur la TVA sous conditions.",
   "budget": -14,
   "once": 0,
   "budget_note": "Recettes de TVA en moins : le déficit augmente.",
   "axes": {
    "env": 2,
    "eco": 1
   },
   "ind": {
    "pouvoir_achat": 6,
    "co2": 3
   },
   "why_cost": "La TVA sur l'énergie est une grosse recette : la baisser coûte au moins une dizaine de milliards par an (estimations de 10 à 17). Les chiffrages vont d'environ 10 Md€ par an (Institut Montaigne) à 17 Md€ (ministère de l'Économie, carburants compris) : le jeu retient 14 Md€.",
   "why_gain": "Baisse immédiate pour tous les ménages, qui dépensent ailleurs ce qu'ils économisent.",
   "benefits": [
    "Baisse immédiate des factures et du plein.",
    "Profite à tous, surtout à ceux qui roulent beaucoup.",
    "Simple et rapide à mettre en place."
   ],
   "problems": [
    "Perte de recettes d'au moins une dizaine de milliards.",
    "Profite aussi aux gros consommateurs aisés.",
    "Moins d'incitation à économiser l'énergie."
   ],
   "later": [
    {
     "in": 1,
     "text": "La consommation repart dans les commerces.",
     "ind": {
      "emploi": 1
     }
    },
    {
     "in": 2,
     "text": "La consommation de carburant repart légèrement à la hausse.",
     "ind": {
      "co2": 1
     }
    }
   ],
   "steps": [
    {
     "label": "Inscription dans le projet de budget",
     "weeks": 1
    },
    {
     "label": "Vote du budget au Parlement",
     "weeks": 1,
     "block": false
    }
   ],
   "sources": [
    {
     "label": "Public Sénat : chiffrage du ministère de l'Économie (16,8 Md€)",
     "url": "https://www.publicsenat.fr/actualites/politique/baisse-de-la-tva-sur-lenergie-proposee-par-le-rn-une-mesure-chiffree-a-17-milliards-selon-bercy"
    },
    {
     "label": "Institut Montaigne : chiffrage de la baisse de TVA sur l'énergie",
     "url": "https://www.institutmontaigne.org/legislatives-2024/rassemblement-national/baisser-la-tva-de-20-a-55-pour-les-carburants-lelectricite-le-gaz-et-le-fioul-domestique"
    }
   ]
  },
  {
   "id": "contribution_ue",
   "label": "Réduire la contribution de la France au budget européen",
   "term": "Renégociation du prélèvement sur recettes au profit de l'UE",
   "sector": "europe",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "La France verse environ 30 milliards par an à l'Europe et en reçoit moins. Elle demande à payer moins.",
   "expert": "Renégociation du prélèvement sur recettes au profit de l'UE (environ 30 Md€ pour l'année en cours), dans le cadre du prochain cadre financier pluriannuel.",
   "budget": 3,
   "once": 0,
   "budget_note": "Versement réduit au budget de l'Union : le déficit baisse.",
   "axes": {
    "eu": 2
   },
   "ind": {
    "souverainete": 2
   },
   "why_cost": "Moins d'argent européen, c'est moins de fonds pour la politique agricole commune, les régions et la recherche, dont la France profite aussi.",
   "why_gain": "La France est contributrice nette : réduire sa part libère quelques milliards par an.",
   "benefits": [
    "Quelques milliards gardés chaque année.",
    "Plus de maîtrise nationale de la dépense.",
    "Pression pour un budget européen plus économe."
   ],
   "problems": [
    "Moins d'aides agricoles et régionales européennes.",
    "Tensions avec les partenaires européens.",
    "Exige l'accord unanime des autres pays."
   ],
   "later": [
    {
     "in": 2,
     "text": "Bruxelles réduit des fonds régionaux et agricoles versés à la France.",
     "budget": -1.5,
     "ind": {
      "emploi": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Proposition de la France au Conseil de l'UE",
     "weeks": 1
    },
    {
     "label": "Négociation avec les autres États",
     "weeks": 1,
     "block": true
    },
    {
     "label": "Adaptation du droit français",
     "weeks": 1
    }
   ],
   "block": {
    "title": "Blocage entre États européens",
    "text": "Les autres pays refusent de payer à la place de la France : ils n'arrivent pas à se mettre d'accord.",
    "choices": [
     {
      "id": "abandon",
      "label": "Renoncer à la demande",
      "label_expert": "Renoncer à rouvrir le cadre financier pluriannuel",
      "outcome": "abandon",
      "plus": "Relations apaisées avec les voisins.",
      "minus": "Aucune économie pour le budget.",
      "ind": {},
      "axes": {
       "eu": -1
      }
     },
     {
      "id": "bloquer",
      "label": "Bloquer les autres décisions européennes",
      "label_expert": "Bloquer les décisions soumises à l'unanimité au Conseil",
      "outcome": "pass",
      "plus": "La France obtient ce qu'elle demande.",
      "minus": "Crise ouverte et isolement en Europe.",
      "ind": {
       "souverainete": 1,
       "cohesion": -2
      },
      "axes": {
       "eu": 2
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : un rabais partiel, comme d'autres pays",
      "label_expert": "Obtenir une correction forfaitaire, sur le modèle des « rabais »",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Un gain obtenu sans crise majeure.",
      "minus": "Gain modeste, contreparties demandées.",
      "ind": {},
      "axes": {
       "eu": 1
      }
     }
    ]
   },
   "sources": [
    {
     "label": "Public Sénat : la contribution de la France au budget européen (30,3 Md€)",
     "url": "https://www.publicsenat.fr/actualites/economie/budget-2026-pourquoi-la-france-a-obtenu-une-hausse-moins-importante-de-sa-contribution-a-lunion-europeenne"
    }
   ],
   "result": {
    "in": 1,
    "title": "Issue de la négociation sur la contribution européenne",
    "outcomes": [
     {
      "id": "rabais",
      "label": "La France obtient un rabais",
      "weight": 0.5,
      "text": "Un rabais sur la contribution est inscrit dans le prochain budget européen.",
      "plus": "Quelques milliards gardés chaque année.",
      "minus": "Moins de fonds européens pour les régions.",
      "budget": 0,
      "once": 0,
      "ind": {
       "souverainete": 1
      },
      "axes": {},
      "later": []
     },
     {
      "id": "refus",
      "label": "Les partenaires refusent",
      "weight": 0.5,
      "text": "Les autres pays bloquent la demande : la contribution reste au même niveau.",
      "plus": "Les relations avec les voisins s'apaisent.",
      "minus": "Aucune économie, la demande a échoué.",
      "budget": -3,
      "once": 0,
      "ind": {
       "souverainete": -1
      },
      "axes": {},
      "later": [],
      "budget_note": "Pas de rabais, l'économie attendue disparaît : le déficit remonte."
     }
    ]
   }
  },
  {
   "id": "controle_prestations",
   "label": "Carte Vitale biométrique et contrôle des prestations versées à l'étranger",
   "term": "Sécurisation des droits sociaux",
   "sector": "sante",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "La carte Vitale contient une empreinte ou une photo vérifiée, et les aides versées hors de France sont mieux contrôlées.",
   "expert": "Carte Vitale sécurisée par biométrie, contrôle d'existence des retraités résidant à l'étranger, croisement des fichiers sociaux.",
   "budget": 0.5,
   "once": -0.5,
   "budget_note": "Coût des nouvelles cartes, puis prestations indues évitées : le déficit baisse.",
   "axes": {
    "soc": 2,
    "eu": 1
   },
   "ind": {
    "cohesion": -1,
    "souverainete": 1
   },
   "why_cost": "Fabriquer et distribuer des millions de cartes sécurisées coûte cher, et les données biométriques posent des questions de libertés.",
   "why_gain": "Moins de fraudes aux prestations : les fraudes détectées par la branche famille et l'Urssaf atteignent déjà plus de 2 Md€ par an.",
   "benefits": [
    "Moins de fraudes à l'assurance maladie.",
    "Des pensions versées seulement aux personnes vivantes.",
    "Confiance renforcée dans le système social."
   ],
   "problems": [
    "Coût élevé de fabrication des cartes.",
    "Données biométriques et vie privée en débat.",
    "Gains réels incertains selon plusieurs rapports."
   ],
   "later": [
    {
     "in": 2,
     "text": "Les premiers contrôles mettent fin à des versements indus.",
     "budget": 0.3
    }
   ],
   "steps": [
    {
     "label": "Présentation en Conseil des ministres",
     "weeks": 1
    },
    {
     "label": "Débat et vote à l'Assemblée",
     "weeks": 1,
     "block": false
    },
    {
     "label": "Examen au Sénat puis décrets d'application",
     "weeks": 1
    }
   ],
   "sources": [
    {
     "label": "Boursorama : 20 Md€ de fraude détectés en 2024 (Urssaf 1,6 Md€, CNAF 450 M€)",
     "url": "https://www.boursorama.com/actualite-economique/actualites-amp/20-milliards-d-euros-de-fraude-detectes-en-2024-13-milliards-recuperes-selon-le-gouvernement-4c080839b383e4ae5a744b4bf0cd3fcf"
    }
   ]
  },
  {
   "id": "rsa_jeunes",
   "label": "Ouvrir le RSA aux jeunes de 18 à 25 ans",
   "term": "Extension du revenu de solidarité active aux 18-24 ans",
   "sector": "salaires",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Un jeune sans ressources peut toucher le RSA dès 18 ans, au lieu d'attendre 25 ans.",
   "expert": "Ouverture du RSA aux 18-24 ans sans condition d'activité antérieure, avec accompagnement vers l'emploi ou la formation.",
   "budget": -3,
   "once": 0,
   "budget_note": "Nouvelle allocation versée à environ 400 000 jeunes : le déficit augmente.",
   "axes": {
    "eco": -2,
    "soc": -1
   },
   "ind": {
    "pouvoir_achat": 1,
    "cohesion": 3,
    "services": 1
   },
   "why_cost": "Environ 400 000 jeunes de 18 à 24 ans pourraient y avoir droit : à quelques centaines d'euros par mois, cela fait près de 3 Md€ par an.",
   "why_gain": "Moins de jeunes dans la grande pauvreté tout de suite ; à plus long terme, un accompagnement qui peut aider à trouver une formation ou un emploi.",
   "benefits": [
    "Les jeunes les plus pauvres ont un revenu minimum.",
    "Met fin à une exception française parmi les pays voisins.",
    "Permet de suivre et d'accompagner ces jeunes."
   ],
   "problems": [
    "Coûte près de 3 Md€ par an.",
    "Des économistes craignent un effet sur l'envie de travailler.",
    "Les départements, qui versent le RSA, demandent des moyens."
   ],
   "later": [
    {
     "in": 2,
     "text": "Les associations voient moins de jeunes à l'aide alimentaire, mais les demandes dépassent un peu les prévisions.",
     "budget": -0.3,
     "ind": {
      "cohesion": 1
     }
    }
   ],
   "steps": [
    {
     "label": "Présentation en Conseil des ministres",
     "weeks": 1
    },
    {
     "label": "Vote du budget au Parlement",
     "weeks": 1
    }
   ],
   "sources": [
    {
     "label": "Observatoire des inégalités : un peu plus de 400 000 jeunes concernés par un RSA jeunes",
     "url": "https://www.inegalites.fr/18-24-ans-un-peu-plus-de-400-000-jeunes-concernes-par-un-RSA-jeunes"
    }
   ]
  },
  {
   "id": "jour_ferie_travaille",
   "label": "Supprimer deux jours fériés pour réduire le déficit",
   "term": "Suppression de deux jours fériés avec contribution des employeurs",
   "sector": "fiscalite",
   "origin": "Proposition présente dans plusieurs programmes",
   "intensity": "forte",
   "simple": "On travaille deux jours fériés de plus par an ; les entreprises reversent une contribution à l'État.",
   "expert": "Deux jours fériés deviennent travaillés, sur le modèle de la journée de solidarité, avec une contribution patronale affectée au budget.",
   "budget": 4.2,
   "once": 0,
   "budget_note": "Contribution des employeurs sur ces jours travaillés : le déficit baisse.",
   "axes": {
    "eco": 2
   },
   "ind": {
    "emploi": 1,
    "cohesion": -3,
    "pouvoir_achat": -1
   },
   "why_cost": "Les salariés travaillent deux jours de plus sans être payés davantage, et le commerce et le tourisme perdent des jours de fête.",
   "why_gain": "Plus de production et une contribution des employeurs : un rendement estimé à 4,2 Md€ par an.",
   "benefits": [
    "Recette importante dès la première année.",
    "Plus d'activité et de production.",
    "Effort partagé, sur le modèle de la journée de solidarité."
   ],
   "problems": [
    "Les salariés travaillent plus sans être mieux payés.",
    "Mesure très impopulaire selon les sondages.",
    "Le tourisme et la restauration perdent des jours fériés."
   ],
   "later": [
    {
     "in": 2,
     "text": "Les deux jours supprimés approchent : appels à la grève et polémique sur les jours choisis.",
     "ind": {
      "cohesion": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Inscription dans le projet de budget",
     "weeks": 1
    },
    {
     "label": "Débat et vote au Parlement",
     "weeks": 1,
     "block": true
    }
   ],
   "block": {
    "title": "Fronde au Parlement",
    "text": "Syndicats unis contre la mesure, députés de tous bords hostiles : le texte ne trouve pas de majorité.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la mesure",
      "label_expert": "Retirer l'article supprimant les deux jours fériés",
      "outcome": "abandon",
      "plus": "Le calme revient chez les salariés.",
      "minus": "Il manque plus de 4 milliards au budget.",
      "ind": {
       "cohesion": 2
      },
      "axes": {
       "eco": -1
      }
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Adoption sans vote par l'article 49.3 de la Constitution",
      "outcome": "pass",
      "plus": "Les 4,2 milliards sont acquis.",
      "minus": "Grèves et motion de censure.",
      "ind": {
       "cohesion": -3
      },
      "axes": {
       "soc": 1
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : un seul jour férié supprimé",
      "label_expert": "Seconde journée de solidarité unique, contribution patronale réduite",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Effort moindre pour les salariés.",
      "minus": "Recette divisée par deux.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "eco": -1
      }
     }
    ]
   },
   "sources": [
    {
     "label": "Public Sénat : la suppression de deux jours fériés, une idée née au Sénat",
     "url": "https://www.publicsenat.fr/actualites/politique/suppression-de-deux-jours-feries-une-idee-nee-au-senat"
    },
    {
     "label": "MoneyVox : suppression de deux jours fériés, 4,2 milliards d'euros d'économies visées",
     "url": "https://www.moneyvox.fr/votre-argent/actualites/104665/suppression-de-deux-jours-feries-4-2-milliards-euros-economies-des-2026-et-une-invitation-a-negocier"
    }
   ]
  },
  {
   "id": "tva_sociale",
   "label": "Monter la TVA pour baisser les cotisations sur les salaires",
   "term": "TVA sociale : transfert de cotisations patronales vers la TVA",
   "sector": "fiscalite",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Les prix augmentent un peu, mais les entreprises paient moins de cotisations : le travail coûte moins cher.",
   "expert": "Hausse du taux normal de TVA compensée par une baisse des cotisations patronales, pour alléger le coût du travail et taxer aussi les importations.",
   "budget": 0,
   "once": 0,
   "budget_note": "La TVA en plus compense les cotisations en moins : le budget ne change presque pas.",
   "axes": {
    "eco": 1
   },
   "ind": {
    "pouvoir_achat": -2,
    "emploi": 2,
    "souverainete": 1
   },
   "why_cost": "La TVA est payée par tous les consommateurs, y compris les retraités et les plus modestes : les prix montent un peu.",
   "why_gain": "Les produits importés financent aussi la protection sociale, et le travail coûte moins cher en France : à terme, des emplois et de la compétitivité.",
   "benefits": [
    "Le travail coûte moins cher aux entreprises.",
    "Les importations contribuent à la protection sociale.",
    "Peut aider l'emploi et l'industrie."
   ],
   "problems": [
    "Les prix augmentent pour tout le monde.",
    "Pèse plus sur les ménages modestes.",
    "Déjà votée une fois puis abrogée avant de s'appliquer."
   ],
   "later": [
    {
     "in": 2,
     "text": "Les prix ont un peu monté ; les entreprises commencent à embaucher avec la baisse des cotisations.",
     "ind": {
      "emploi": 1,
      "pouvoir_achat": -1
     }
    }
   ],
   "steps": [
    {
     "label": "Inscription dans le projet de budget",
     "weeks": 1
    },
    {
     "label": "Débat et vote à l'Assemblée",
     "weeks": 1,
     "block": true
    }
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Une partie des députés refuse une hausse de TVA qui touche tous les ménages : le texte ne passe pas.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retirer le transfert des cotisations vers la TVA",
      "outcome": "abandon",
      "plus": "Les prix ne bougent pas.",
      "minus": "Le coût du travail reste le même.",
      "ind": {},
      "axes": {
       "eco": -1
      }
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Adoption du projet de loi de finances par le 49.3",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement.",
      "minus": "Censure possible, colère des syndicats.",
      "ind": {
       "cohesion": -3
      },
      "axes": {
       "soc": 1
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : une hausse plus petite, et les produits de base épargnés",
      "label_expert": "Hausse limitée au taux normal, taux réduits inchangés",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Les produits de base ne montent pas.",
      "minus": "Baisse du coût du travail plus faible.",
      "ind": {
       "cohesion": 1
      },
      "axes": {
       "eco": -1
      }
     }
    ]
   },
   "sources": [
    {
     "label": "Vie publique : la TVA sociale, comment financer la protection sociale",
     "url": "https://www.vie-publique.fr/questions-reponses/298699-tva-sociale-financement-de-la-protection-sociale"
    }
   ]
  },
  {
   "id": "vols_courts_train",
   "label": "Interdire les vols intérieurs quand le train met moins de 4 heures",
   "term": "Extension de l'interdiction des liaisons aériennes à 4 heures de train",
   "sector": "transports",
   "origin": "Proposition présente dans plusieurs programmes",
   "simple": "Un vol intérieur serait interdit si le même trajet se fait en train en moins de 4 heures (aujourd'hui : 2 heures 30).",
   "expert": "Extension du seuil de la loi Climat et résilience de 2 h 30 à 4 h, avec dérogation pour les vols de correspondance ; mesure soumise à l'accord de la Commission européenne.",
   "budget": -0.1,
   "once": 0,
   "budget_note": "Moins de taxes sur les billets et aides aux aéroports touchés : le déficit augmente un peu.",
   "axes": {
    "env": -2
   },
   "ind": {
    "co2": -1,
    "emploi": -1,
    "services": -1
   },
   "why_cost": "Des aéroports régionaux perdent leurs lignes, des emplois sont menacés et certains trajets deviennent plus longs.",
   "why_gain": "Moins d'émissions sur les trajets où le train est une vraie alternative, et plus de voyageurs pour le rail.",
   "benefits": [
    "Moins de CO₂ sur les trajets courts.",
    "Plus de voyageurs pour le train.",
    "Étend une règle qui existe déjà."
   ],
   "problems": [
    "Des aéroports régionaux perdent des lignes.",
    "Trajets plus longs pour certains voyageurs.",
    "La Commission européenne doit donner son accord."
   ],
   "later": [
    {
     "in": 2,
     "text": "Les trains vers les villes concernées sont pleins ; deux aéroports régionaux demandent de l'aide.",
     "ind": {
      "co2": -1
     },
     "budget": -0.05
    }
   ],
   "steps": [
    {
     "label": "Présentation au Parlement",
     "weeks": 1
    },
    {
     "label": "Avis de la Commission européenne",
     "weeks": 1,
     "block": true
    }
   ],
   "block": {
    "title": "La Commission européenne fait des réserves",
    "text": "Bruxelles rappelle que l'interdiction de lignes aériennes doit rester limitée : les compagnies menacent d'aller en justice.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner l'extension",
      "label_expert": "Renoncer à étendre le seuil au-delà de 2 h 30",
      "outcome": "abandon",
      "plus": "Pas de conflit avec Bruxelles ni les compagnies.",
      "minus": "Les vols courts continuent comme avant.",
      "ind": {},
      "axes": {
       "env": 1
      }
     },
     {
      "id": "passer",
      "label": "Maintenir le seuil de 4 heures",
      "label_expert": "Notifier la mesure malgré l'avis réservé de la Commission",
      "outcome": "pass",
      "plus": "La mesure s'applique entièrement.",
      "minus": "Recours des compagnies en justice.",
      "ind": {
       "souverainete": 1
      },
      "axes": {
       "eu": 1
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : seuil de 3 heures, correspondances autorisées",
      "label_expert": "Seuil intermédiaire de trois heures, dérogation pour les vols de correspondance",
      "outcome": "amend",
      "factor": 0.6,
      "plus": "Accord possible avec Bruxelles.",
      "minus": "Moins de lignes supprimées.",
      "ind": {},
      "axes": {
       "env": 1
      }
     }
    ]
   },
   "sources": [
    {
     "label": "Gouvernement : interdiction des lignes aériennes en cas d'alternative de moins de 2 h 30 en train",
     "url": "https://www.info.gouv.fr/actualite/interdiction-des-lignes-aeriennes-en-cas-dalternative-de-moins-de-2h30-en-train"
    },
    {
     "label": "Que Choisir : vols intérieurs courts, un décret à la portée limitée",
     "url": "https://www.quechoisir.org/actualite-vols-interieurs-courts-un-decret-qui-ne-change-rien-n108070/"
    }
   ]
  }
 ]
};
