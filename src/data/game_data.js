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
   "x": 98,
   "y": 6,
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
  "co2": "Climat : 1 point ≈ 2 millions de tonnes de CO₂ évitées par an (environ 0,5 % des émissions du pays). Plus le score est haut, mieux c'est.",
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
    "requisition_logements_vacants",
    "ir_14_tranches"
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
       "once": -70,
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
       "once": -30,
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
       "budget": 1.8,
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
       "budget": -10,
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
       "once": -20,
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
       "once": -1.8,
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
     "region": "auvergne_rhone_alpes",
     "sector": "agriculture",
     "title": "Une maladie de la peau frappe les vaches des Alpes",
     "simple": "Une maladie contagieuse des bovins, venue d'Italie, touche des élevages de Savoie. La règle impose d'abattre tout le troupeau touché. Les éleveurs sont sous le choc. Que faire ?",
     "expert": "Foyers de dermatose nodulaire contagieuse (DNC), maladie virale transmise par insectes : dépeuplement total des foyers, zones réglementées, vaccination obligatoire autour des foyers et restrictions de mouvements des bovins.",
     "context": "La maladie n'est pas dangereuse pour l'humain mais ruine les élevages et bloque les exportations. Abattre vite limite la propagation ; vacciner largement coûte et peut fermer certains marchés.",
     "real": {
      "date": "29 juin 2025 (premier foyer) ; automne 2025 (extension)",
      "place": "Savoie et Haute-Savoie, puis d'autres départements",
      "fact": "Un premier foyer de dermatose nodulaire contagieuse a été confirmé dans un élevage de Savoie. L'État a imposé l'abattage des troupeaux touchés et une vaccination autour des foyers, ce qui a provoqué la colère d'éleveurs.",
      "figures": "Vaccination obligatoire dans un rayon d'environ 50 km autour des foyers.",
      "sources": [
       {
        "label": "Ministère de l'Agriculture : dermatose nodulaire contagieuse, foire aux questions",
        "url": "https://www.agriculture.gouv.fr/dermatose-nodulaire-contagieuse-des-bovins-dnc-foire-aux-questions"
       },
       {
        "label": "Réussir : un foyer de DNC confirmé dans un élevage en Savoie",
        "url": "https://www.reussir.fr/lesmarches/un-foyer-de-dermatose-nodulaire-contagieuse-dnc-confirme-dans-un-elevage-bovin-en-savoie"
       }
      ]
     },
     "camera": {
      "region": "auvergne_rhone_alpes",
      "x": 72,
      "y": 56,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "troupeau",
       "x": 72,
       "y": 56,
       "anim": "pulse"
      },
      {
       "obj": "ferme",
       "x": 73,
       "y": 57,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "camion",
       "x": 69,
       "y": 56,
       "anim": "move",
       "to": {
        "x": 72,
        "y": 56
       },
       "delay": 0.6
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Abattre tout le troupeau touché, comme la règle le prévoit",
       "label_expert": "Dépeuplement total des foyers et zones réglementées",
       "plus": "La maladie s'arrête plus vite.",
       "minus": "Des éleveurs perdent tout leur troupeau.",
       "budget": -0.1,
       "axes": {
        "soc": 1
       },
       "ind": {
        "emploi": -1,
        "cohesion": -1,
        "souverainete": 1
       },
       "budget_note": "Indemnités d'abattage : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "troupeau",
         "x": 72,
         "y": 56,
         "anim": "fade"
        },
        {
         "obj": "ferme",
         "x": 73,
         "y": 57,
         "anim": "close"
        }
       ]
      },
      {
       "id": "b",
       "label": "Vacciner tous les bovins du pays",
       "label_expert": "Vaccination généralisée du cheptel bovin",
       "plus": "Les élevages sont protégés partout.",
       "minus": "Des exportations bloquées pendant des mois.",
       "budget": -0.3,
       "axes": {
        "soc": -1
       },
       "ind": {
        "services": 1,
        "emploi": -1
       },
       "budget_note": "Achat des vaccins : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "cabinet_medical",
         "x": 71,
         "y": 55,
         "anim": "appear"
        },
        {
         "obj": "troupeau",
         "x": 72,
         "y": 56,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "N'abattre que les bêtes malades et vacciner autour",
       "label_expert": "Abattage partiel et vaccination en anneau",
       "plus": "Les éleveurs gardent une partie des bêtes.",
       "minus": "Un risque que le virus circule plus longtemps.",
       "budget": 0,
       "axes": {
        "soc": -1
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Vaccins fournis par la banque européenne de vaccins : pas d'effet sur le déficit (estimation du jeu).",
       "fx": [
        {
         "obj": "troupeau",
         "x": 72,
         "y": 56,
         "anim": "pulse"
        },
        {
         "obj": "cabinet_medical",
         "x": 71,
         "y": 55,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Faire payer les contrôles par une cotisation des filières",
       "label_expert": "Cotisation interprofessionnelle pour le fonds sanitaire",
       "plus": "L'État dépense moins.",
       "minus": "Le prix de la viande augmente un peu.",
       "budget": 0.1,
       "axes": {
        "eco": 1
       },
       "ind": {
        "pouvoir_achat": -1
       },
       "budget_note": "Cotisation des filières : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 72,
         "y": 56,
         "anim": "rise"
        }
       ]
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
       "fx": [
        {
         "obj": "ferme",
         "x": 73,
         "y": 57,
         "anim": "pulse"
        }
       ],
       "requires": {
        "event": "v22_mercosur",
        "choice": "b"
       }
      }
     ],
     "recall": [
      {
       "event": "v22_mercosur",
       "choice": "a",
       "text": "Il y a quatre semaines, vous avez voté contre l'accord avec l'Amérique du Sud : la viande importée ne s'ajoutera pas à la crise sanitaire.",
       "ind": {
        "cohesion": 1
       }
      },
      {
       "event": "v22_mercosur",
       "choice": "b",
       "text": "Il y a quatre semaines, vous avez obtenu la clause de sauvegarde de l'accord : vous pouvez la déclencher si la viande importée afflue pendant la crise sanitaire."
      },
      {
       "event": "v22_mercosur",
       "choice": "c",
       "text": "Il y a quatre semaines, vous avez versé des aides d'urgence aux éleveurs : une deuxième crise en un mois, et les éleveurs demandent de nouveau de l'aide."
      },
      {
       "event": "v22_mercosur",
       "choice": "d",
       "text": "Il y a quatre semaines, vous avez joué l'accord commercial : la viande importée arrive alors que les éleveurs perdent leurs troupeaux.",
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
    "encadrement_loyers",
    "interets_emprunt_deductibles"
   ],
   "events": [
    {
     "id": "v25_lothar",
     "kind": "majeur",
     "region": "hauts_de_france",
     "sector": "energie",
     "title": "Le Nord sous l'eau pendant des semaines",
     "simple": "Dans le Nord, la pluie ne s'arrête pas. Des villages sont inondés deux fois en deux mois. Des familles ont tout perdu. Comment les aider et éviter que cela recommence ?",
     "expert": "Inondations répétées dans le bassin de l'Aa et de la Liane : état de catastrophe naturelle, entretien des wateringues (réseau de canaux de drainage), relogement et prévention.",
     "context": "Dans le Nord, une partie des terres est sous le niveau de la mer et drainée par des canaux. Les entretenir et les moderniser coûte cher ; ne rien faire expose à de nouvelles crues.",
     "real": {
      "date": "Novembre 2023 à janvier 2024",
      "place": "Pas-de-Calais, vallée de l'Aa",
      "fact": "Des pluies exceptionnelles ont provoqué des inondations à répétition dans le Pas-de-Calais. L'État a reconnu l'état de catastrophe naturelle et mis en place des aides pour les particuliers et les entreprises.",
      "figures": "Des centaines de communes reconnues en catastrophe naturelle.",
      "sources": [
       {
        "label": "Ministère de l'Économie : dispositif de soutien après les inondations du Nord-Pas-de-Calais",
        "url": "https://www.economie.gouv.fr/actualites/inondations-nord-pas-de-calais-dispositif-soutien-particuliers-entreprises"
       },
       {
        "label": "Ministère de la Transition écologique : comité de suivi des inondations",
        "url": "https://www.ecologie.gouv.fr/comite-suivi-des-inondations-gouvernement-poursuit-laccompagnement-des-sinistres-du-nord-pas-calais"
       }
      ]
     },
     "camera": {
      "region": "hauts_de_france",
      "x": 52,
      "y": 8,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "inondation",
       "x": 52,
       "y": 9,
       "anim": "appear"
      },
      {
       "obj": "maison",
       "x": 53,
       "y": 9,
       "anim": "shake",
       "delay": 0.3
      },
      {
       "obj": "orage",
       "x": 50,
       "y": 7,
       "anim": "pulse",
       "delay": 0.5
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Racheter les maisons les plus exposées",
       "label_expert": "Acquisition amiable des biens exposés via le fonds Barnier",
       "plus": "Les familles quittent les zones à risque.",
       "minus": "Un coût élevé et des villages qui se vident.",
       "budget": -0.4,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1,
        "services": 1
       },
       "budget_note": "Rachats par le fonds de prévention : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "maison",
         "x": 53,
         "y": 9,
         "anim": "fade"
        },
        {
         "obj": "champ",
         "x": 53,
         "y": 9,
         "anim": "appear"
        }
       ],
       "terme": "long"
      },
      {
       "id": "b",
       "label": "Envoyer l'armée et des pompes en urgence",
       "label_expert": "Mobilisation des moyens militaires et de sécurité civile",
       "plus": "Des secours rapides et visibles.",
       "minus": "Une aide qui ne règle pas le fond.",
       "budget": 0,
       "axes": {
        "soc": 1
       },
       "ind": {
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "camion",
         "x": 50,
         "y": 10,
         "anim": "move",
         "to": {
          "x": 52,
          "y": 9
         }
        },
        {
         "obj": "ambulance",
         "x": 54,
         "y": 10,
         "anim": "appear"
        }
       ],
       "terme": "court"
      },
      {
       "id": "c",
       "label": "Aider les communes à curer les canaux",
       "label_expert": "Fonds d'urgence pour l'entretien des wateringues",
       "plus": "L'eau s'évacue plus vite.",
       "minus": "Des travaux à refaire chaque année.",
       "budget": -0.1,
       "axes": {
        "env": -1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Subventions aux communes : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 51,
         "y": 8,
         "anim": "appear"
        }
       ],
       "terme": "court"
      },
      {
       "id": "d",
       "label": "Relever la surprime d'assurance catastrophes naturelles",
       "label_expert": "Hausse du taux de la surprime CatNat",
       "plus": "Le régime d'indemnisation reste solide.",
       "minus": "Les contrats d'assurance coûtent plus cher.",
       "budget": 0.4,
       "axes": {
        "eco": 1
       },
       "ind": {
        "pouvoir_achat": -1
       },
       "budget_note": "La surprime finance les indemnisations : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 52,
         "y": 8,
         "anim": "rise"
        }
       ],
       "terme": "long"
      },
      {
       "id": "e",
       "label": "Indemniser chaque foyer inondé sans attendre l'assurance",
       "label_expert": "Aide forfaitaire d'urgence de l'État aux sinistrés",
       "plus": "Les familles peuvent repartir vite.",
       "minus": "Une dépense lourde, sans prévention.",
       "budget": -0.1,
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": 1,
        "cohesion": 1
       },
       "budget_note": "Aide d'urgence : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "maison",
         "x": 53,
         "y": 9,
         "anim": "appear"
        }
       ],
       "terme": "court"
      }
     ],
     "recall": [
      {
       "event": "v22_xynthia",
       "choice": "a",
       "text": "Il y a deux semaines, après la tempête en Vendée, vous avez racheté les maisons les plus exposées : la méthode est rodée pour le Nord.",
       "ind": {
        "cohesion": 1
       }
      },
      {
       "event": "v22_xynthia",
       "choice": "b",
       "text": "Il y a deux semaines, vous avez fait rehausser les digues : elles tiennent sur la côte, mais l'eau monte cette fois par les rivières de l'intérieur."
      },
      {
       "event": "v22_xynthia",
       "choice": "c",
       "text": "Il y a deux semaines, vous avez interdit de construire en zone de submersion : la règle protège la côte, pas les villages de l'intérieur."
      },
      {
       "event": "v22_xynthia",
       "choice": "d",
       "text": "Il y a deux semaines, vous avez indemnisé vite les sinistrés de Vendée : les assureurs, déjà sollicités, relèvent leurs tarifs.",
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
    "service_militaire",
    "recrutements_publics"
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
  },
  {
   "day": 9,
   "season": "hiver",
   "title": "Vents violents et trains à l'arrêt",
   "mood": "tendu",
   "weather": "vent",
   "intro": "Une tempête frappe l'ouest pendant qu'une grève paralyse les transports.",
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
     "id": "v27_ciaran",
     "kind": "majeur",
     "region": "bretagne",
     "sector": "energie",
     "title": "Une tempête géante prive la Bretagne d'électricité",
     "simple": "Des rafales à plus de 200 km/h ont balayé la pointe bretonne. Des arbres sont tombés sur les lignes : des centaines de milliers de foyers n'ont plus de courant, parfois pendant des jours.",
     "expert": "Tempête extratropicale aux rafales record dans le Finistère : réseau de distribution aérien endommagé, renforts nationaux du gestionnaire de réseau, indemnisation automatique des coupures longues prévue par le tarif d'utilisation des réseaux.",
     "context": "Une grande partie des lignes électriques de campagne passe encore dans les airs. Les enterrer protège des tempêtes mais coûte cher. Une coupure de plus de cinq heures donne droit à une indemnité automatique.",
     "real": {
      "date": "2 novembre 2023",
      "place": "Finistère, Côtes-d'Armor et Manche",
      "fact": "La tempête Ciarán a frappé le nord-ouest avec des rafales de plus de 200 km/h à la pointe du Finistère. Environ 1,2 million de foyers ont été privés d'électricité au plus fort de l'épisode.",
      "figures": "Rafale de 207 km/h à la pointe du Raz ; environ 1,2 million de foyers coupés, dont une grande partie en Bretagne ; des milliers d'agents envoyés en renfort.",
      "sources": [
       {
        "label": "L'info durable : forêts et réseau électrique, Ciarán a ravagé le nord-ouest",
        "url": "https://www.linfodurable.fr/forets-reseau-electrique-ciaran-ravage-le-nord-ouest-de-la-france-47649"
       },
       {
        "label": "Enedis : les renforts concentrés sur quatre départements",
        "url": "https://www.enedis.fr/sites/default/files/documents/pdf/CP%20-%20CIARAN_Les%20renforts%20concentr%C3%A9s%20sur%204%20d%C3%A9partements_071123.pdf"
       }
      ]
     },
     "camera": {
      "region": "bretagne",
      "x": 12,
      "y": 30,
      "zoom": 2.2
     },
     "fx": [
      {
       "obj": "tempete",
       "x": 9,
       "y": 28,
       "anim": "spin"
      },
      {
       "obj": "foret",
       "x": 12,
       "y": 31,
       "anim": "shake",
       "delay": 0.3
      },
      {
       "obj": "pylone",
       "x": 14,
       "y": 29,
       "anim": "close",
       "delay": 0.6
      },
      {
       "obj": "maison",
       "x": 11,
       "y": 32,
       "anim": "close",
       "count": 3,
       "delay": 0.8
      },
      {
       "obj": "etiquette",
       "x": 12,
       "y": 26,
       "anim": "appear",
       "label": "1,2 million de foyers sans courant",
       "delay": 1.1
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
        "a",
        "e"
       ],
       [
        "b",
        "c"
       ],
       [
        "b",
        "d"
       ],
       [
        "b",
        "e"
       ]
      ],
      "hint": "Une réponse pour le court terme, une pour le long terme."
     },
     "choices": [
      {
       "id": "a",
       "label": "Envoyer des électriciens de toute la France",
       "label_expert": "Mobiliser la force d'intervention rapide et les renforts nationaux",
       "plus": "Le courant revient en quelques jours.",
       "minus": "Coût élevé, autres régions dégarnies.",
       "budget": 0,
       "once": -0.1,
       "terme": "court",
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1,
        "services": 1
       },
       "budget_note": "Heures et déplacements des équipes, en partie publics : le déficit augmente une fois (estimation du jeu).",
       "fx": [
        {
         "obj": "pylone",
         "x": 14,
         "y": 29,
         "anim": "grow"
        },
        {
         "obj": "camion",
         "x": 30,
         "y": 32,
         "anim": "move",
         "to": {
          "x": 15,
          "y": 30
         },
         "count": 3
        }
       ]
      },
      {
       "id": "b",
       "label": "Laisser le gestionnaire du réseau payer seul",
       "label_expert": "Réparations financées par le seul tarif de réseau, sans dotation",
       "plus": "Aucune dépense publique nouvelle.",
       "minus": "Les réparations prennent plus de temps.",
       "budget": 0,
       "terme": "court",
       "axes": {
        "eco": 1
       },
       "ind": {
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "pylone",
         "x": 14,
         "y": 29,
         "anim": "grow"
        },
        {
         "obj": "camion",
         "x": 30,
         "y": 32,
         "anim": "move",
         "to": {
          "x": 15,
          "y": 30
         }
        }
       ]
      },
      {
       "id": "c",
       "label": "Enterrer les lignes électriques des campagnes",
       "label_expert": "Programme d'enfouissement accéléré du réseau moyenne tension",
       "plus": "Bien moins de coupures aux prochaines tempêtes.",
       "minus": "Des milliards, payés en partie par la facture.",
       "budget": -0.3,
       "terme": "long",
       "axes": {
        "eco": -1,
        "env": -1
       },
       "ind": {
        "services": 1,
        "pouvoir_achat": -1
       },
       "budget_note": "Aide publique à l'enfouissement : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 12,
         "y": 31,
         "anim": "grow",
         "stay": true
        },
        {
         "obj": "pylone",
         "x": 14,
         "y": 29,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "d",
       "label": "Obliger les propriétaires à élaguer près des lignes",
       "label_expert": "Obligation d'élagage renforcée et sanctionnée pour les riverains",
       "plus": "Moins d'arbres tombent sur les fils.",
       "minus": "Des haies et des arbres disparaissent.",
       "budget": 0.02,
       "terme": "long",
       "axes": {
        "soc": 1,
        "env": 1
       },
       "ind": {
        "services": 1,
        "cohesion": -1
       },
       "budget_note": "Amendes des propriétaires qui n'élaguent pas : petite recette, le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "foret",
         "x": 12,
         "y": 31,
         "anim": "fade"
        },
        {
         "obj": "tracteur",
         "x": 11,
         "y": 30,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Créer un fonds tempêtes payé par les assurances",
       "label_expert": "Contribution additionnelle sur les contrats d'assurance habitation",
       "plus": "Un fonds prêt pour les prochaines tempêtes.",
       "minus": "Les primes d'assurance augmentent.",
       "budget": 0.2,
       "terme": "long",
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": -1,
        "cohesion": 1
       },
       "budget_note": "Recette nouvelle sur les contrats : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 12,
         "y": 30,
         "anim": "rise"
        },
        {
         "obj": "maison",
         "x": 10,
         "y": 31,
         "anim": "appear"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_greve_retraites",
     "kind": "majeur",
     "region": "national",
     "sector": "retraites",
     "title": "Grève record dans les trains et le métro",
     "simple": "Un projet de retraite unique, avec des points, fait descendre des centaines de milliers de personnes dans la rue. Les trains et le métro s'arrêtent pendant des semaines. Que faites-vous ?",
     "expert": "Mouvement interprofessionnel contre un système universel de retraite par points et la fin des régimes spéciaux : grève reconductible la plus longue de l'histoire de la SNCF, pertes d'exploitation, négociation sur l'âge pivot.",
     "context": "La France compte plus de quarante régimes de retraite. Les agents de la SNCF et de la RATP avaient des règles particulières. Un système unique simplifie, mais change les droits de millions de personnes.",
     "real": {
      "date": "5 décembre 2019 à janvier 2020",
      "place": "Paris et grandes villes, réseaux SNCF et RATP",
      "fact": "Une grève reconductible a paralysé les transports pendant plus d'un mois contre la réforme des retraites par points. Le projet a ensuite été suspendu au début de l'épidémie de covid.",
      "figures": "Perte d'exploitation d'environ 614 M€ pour la SNCF sur le premier mois de grève ; plus de 800 000 manifestants le premier jour selon le ministère de l'Intérieur.",
      "sources": [
       {
        "label": "TourMaG : pertes colossales pour la SNCF",
        "url": "https://www.tourmag.com/Pertes-colossales-pour-la-SNCF-en-2019_a102559.html"
       },
       {
        "label": "Public Sénat : une mobilisation aussi longue que celle de 1995",
        "url": "https://www.publicsenat.fr/actualites/non-classe/retraites-poursuite-d-une-mobilisation-desormais-aussi-longue-que-celle-de-1995"
       }
      ]
     },
     "camera": {
      "region": "national",
      "x": 52,
      "y": 40,
      "zoom": 1.2
     },
     "fx": [
      {
       "obj": "manifestants",
       "x": 52,
       "y": 24,
       "anim": "appear",
       "count": 2
      },
      {
       "obj": "tgv",
       "x": 46,
       "y": 36,
       "anim": "close",
       "delay": 0.3
      },
      {
       "obj": "velo",
       "x": 48,
       "y": 28,
       "anim": "move",
       "to": {
        "x": 52,
        "y": 25
       },
       "count": 3,
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 52,
       "y": 20,
       "anim": "appear",
       "label": "Trains à l'arrêt",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Retirer la réforme pour apaiser",
       "label_expert": "Retrait du projet de loi instituant un système universel",
       "plus": "Les trains repartent, le calme revient.",
       "minus": "Les déficits des retraites restent là.",
       "budget": -0.4,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 2
       },
       "budget_note": "Économies attendues abandonnées : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "tgv",
         "x": 46,
         "y": 36,
         "anim": "move",
         "to": {
          "x": 51,
          "y": 26
         }
        },
        {
         "obj": "manifestants",
         "x": 52,
         "y": 24,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "b",
       "label": "Tenir bon et aller au vote",
       "label_expert": "Maintien du calendrier et vote du texte au Parlement",
       "plus": "Un système plus simple pour tous.",
       "minus": "Des semaines de blocage, commerces vides.",
       "budget": 0.5,
       "once": -0.3,
       "axes": {
        "eco": 1,
        "soc": 1
       },
       "ind": {
        "cohesion": -2,
        "emploi": -1
       },
       "budget_note": "Économies sur les régimes spéciaux malgré les pertes de la grève : le déficit baisse à terme (estimation du jeu).",
       "fx": [
        {
         "obj": "parlement",
         "x": 52,
         "y": 22,
         "anim": "appear"
        },
        {
         "obj": "manifestants",
         "x": 53,
         "y": 25,
         "anim": "shake",
         "count": 2
        }
       ]
      },
      {
       "id": "c",
       "label": "Garder la réforme pour les seuls nouveaux salariés",
       "label_expert": "Clause du grand-père : réforme réservée aux nouveaux entrants",
       "plus": "Les salariés en poste gardent leurs droits.",
       "minus": "Les économies n'arrivent que dans trente ans.",
       "budget": 0.1,
       "axes": {
        "eco": 1
       },
       "ind": {
        "cohesion": -1
       },
       "budget_note": "Petites économies à long terme : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "parlement",
         "x": 52,
         "y": 22,
         "anim": "appear"
        },
        {
         "obj": "tgv",
         "x": 46,
         "y": 36,
         "anim": "move",
         "to": {
          "x": 51,
          "y": 26
         }
        }
       ]
      },
      {
       "id": "d",
       "label": "Instaurer un service minimum garanti",
       "label_expert": "Loi sur le service minimum avec réquisition aux heures de pointe",
       "plus": "Les usagers peuvent aller travailler.",
       "minus": "Le droit de grève est limité.",
       "budget": 0,
       "axes": {
        "soc": 2
       },
       "ind": {
        "cohesion": -1,
        "emploi": 1
       },
       "fx": [
        {
         "obj": "bus",
         "x": 46,
         "y": 30,
         "anim": "move",
         "to": {
          "x": 51,
          "y": 25
         },
         "count": 2
        },
        {
         "obj": "voiture_police",
         "x": 50,
         "y": 24,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Financer les retraites par plus de cotisations",
       "label_expert": "Hausse des cotisations vieillesse plutôt que recul des droits",
       "plus": "Les droits de chacun sont préservés.",
       "minus": "Le coût du travail augmente.",
       "budget": 0.6,
       "axes": {
        "eco": -2
       },
       "ind": {
        "emploi": -1,
        "pouvoir_achat": -1,
        "cohesion": 1
       },
       "budget_note": "Recettes de cotisations en plus : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 52,
         "y": 24,
         "anim": "rise"
        },
        {
         "obj": "usine",
         "x": 56,
         "y": 26,
         "anim": "appear"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_maternite",
     "kind": "banal",
     "region": "centre_val_de_loire",
     "sector": "sante",
     "title": "La maternité de la petite ville ferme",
     "simple": "L'agence de santé ferme la maternité d'une petite ville de l'Indre : trop peu d'accouchements, pas assez de médecins. Les futures mères devront faire près d'une heure de route.",
     "expert": "Fermeture d'une maternité de niveau 1 réalisant moins de 300 accouchements par an, au nom de la sécurité des soins (seuils d'activité, gardes d'obstétriciens et d'anesthésistes) ; mobilisation des élus et recours.",
     "context": "Les autorités jugent risqué un service qui fait peu d'accouchements, faute d'équipes complètes jour et nuit. Les habitants craignent des accouchements sur la route. Le nombre de maternités a beaucoup baissé en quarante ans.",
     "real": {
      "date": "Juin à octobre 2018",
      "place": "Le Blanc, Indre",
      "fact": "La maternité du Blanc a été suspendue puis fermée ; les accouchements ont été transférés à Châteauroux. Les habitants ont occupé les locaux et organisé une opération ville morte.",
      "figures": "Moins de 300 accouchements par an avant la fermeture ; la maternité de référence est à près d'une heure de route.",
      "sources": [
       {
        "label": "Le Quotidien du médecin : la maternité du Blanc évacuée après la décision de fermeture",
        "url": "https://www.lequotidiendumedecin.fr/actualites/article/2018/10/30/la-maternite-du-blanc-evacuee-ce-mardi-matin-apres-decision-de-fermeture_862340"
       },
       {
        "label": "Le Quotidien du médecin : opération ville morte au Blanc",
        "url": "https://www.lequotidiendumedecin.fr/actualites/article/2018/11/05/au-blanc-operation-ville-morte-pour-denoncer-la-fermeture-de-la-maternite_862480"
       }
      ]
     },
     "camera": {
      "region": "centre_val_de_loire",
      "x": 42,
      "y": 46,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "hopital",
       "x": 42,
       "y": 46,
       "anim": "close"
      },
      {
       "obj": "manifestants",
       "x": 44,
       "y": 47,
       "anim": "appear",
       "delay": 0.4
      },
      {
       "obj": "ambulance",
       "x": 42,
       "y": 47,
       "anim": "move",
       "to": {
        "x": 47,
        "y": 44
       },
       "delay": 0.7
      },
      {
       "obj": "etiquette",
       "x": 42,
       "y": 42,
       "anim": "appear",
       "label": "Maternité fermée",
       "delay": 1
      }
     ],
     "recall": [
      {
       "event": "v25_medecins",
       "choice": "a",
       "text": "Il y a quelques semaines, vous avez obligé les médecins à venir dans les déserts médicaux : quelques gynécologues viennent en renfort, mais pas la nuit."
      },
      {
       "event": "v25_medecins",
       "choice": "b",
       "text": "Il y a quelques semaines, vous avez mieux payé les médecins volontaires : la maternité a reçu deux candidatures, trop peu pour des gardes complètes."
      },
      {
       "event": "v25_medecins",
       "choice": "c",
       "text": "Il y a quelques semaines, vous avez confié plus de soins aux pharmaciens et infirmiers : les sages-femmes suivent davantage de grossesses.",
       "ind": {
        "services": 1
       }
      },
      {
       "event": "v25_medecins",
       "choice": "d",
       "text": "Il y a quelques semaines, vous avez décidé de former plus de médecins : les premiers diplômés n'arriveront que dans plusieurs années."
      },
      {
       "event": "v25_medecins",
       "choice": "e",
       "text": "Il y a quelques semaines, vous avez ouvert des centres de santé salariés : l'un d'eux accueille des consultations de grossesse.",
       "ind": {
        "services": 1
       }
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Rouvrir la maternité avec des médecins intérimaires",
       "label_expert": "Réouverture financée par des contrats d'intérim médical",
       "plus": "Les mères accouchent près de chez elles.",
       "minus": "Cher, et équipes instables la nuit.",
       "budget": -0.02,
       "axes": {
        "eco": -1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Intérim payé par l'hôpital public : le déficit augmente un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "hopital",
         "x": 42,
         "y": 46,
         "anim": "pulse"
        },
        {
         "obj": "ambulance",
         "x": 43,
         "y": 47,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Garder la fermeture, avec un hébergement près du grand hôpital",
       "label_expert": "Hôtel hospitalier pour femmes enceintes près de la maternité de référence",
       "plus": "Des équipes complètes et plus sûres.",
       "minus": "Les familles s'éloignent de chez elles.",
       "budget": 0.01,
       "axes": {
        "eco": 1
       },
       "ind": {
        "services": -1,
        "cohesion": -1
       },
       "budget_note": "Moins de charges qu'un service complet : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "hopital",
         "x": 47,
         "y": 44,
         "anim": "pulse"
        },
        {
         "obj": "maison",
         "x": 46,
         "y": 45,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Créer un centre de suivi tenu par des sages-femmes",
       "label_expert": "Centre périnatal de proximité sans accouchement, animé par des sages-femmes",
       "plus": "Le suivi de grossesse reste sur place.",
       "minus": "On doit toujours accoucher plus loin.",
       "budget": 0,
       "axes": {
        "eco": -1,
        "soc": -1
       },
       "ind": {
        "services": 1
       },
       "fx": [
        {
         "obj": "cabinet_medical",
         "x": 42,
         "y": 46,
         "anim": "appear"
        },
        {
         "obj": "soignants",
         "x": 43,
         "y": 47,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Payer une équipe d'urgence de garde la nuit",
       "label_expert": "Équipe mobile d'urgence obstétricale et transport héliporté de garde",
       "plus": "Les urgences sont couvertes vite.",
       "minus": "Coûteux pour quelques interventions.",
       "budget": -0.01,
       "axes": {
        "eco": -1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Équipe et transport de garde : le déficit augmente un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "ambulance",
         "x": 42,
         "y": 47,
         "anim": "appear",
         "count": 2
        },
        {
         "obj": "hopital",
         "x": 47,
         "y": 44,
         "anim": "pulse"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "day": 10,
   "season": "hiver",
   "title": "Neige rare, scandales en rayon",
   "mood": "tendu",
   "weather": "neige",
   "intro": "La saison de ski tourne court, et deux affaires sanitaires inquiètent les familles.",
   "offer": [
    "report_age_65",
    "referendum_immigration",
    "lutte_fraude",
    "regularisation_metiers_tension",
    "taxe_billets_premium",
    "tva_premiere_necessite"
   ],
   "events": [
    {
     "id": "v27_chlordecone",
     "kind": "majeur",
     "region": "outre_mer",
     "sector": "sante",
     "title": "Un pesticide interdit a contaminé les Antilles",
     "simple": "Pendant des années, un pesticide toxique a été utilisé dans les bananeraies des Antilles, alors qu'il était interdit ailleurs. La justice ne poursuit finalement personne, et la colère monte.",
     "expert": "Pollution durable des sols et des eaux par le chlordécone, insecticide organochloré autorisé par dérogation dans les bananeraies ; non-lieu pour prescription ; reconnaissance du cancer de la prostate comme maladie professionnelle.",
     "context": "Ce produit reste dans les sols pendant des siècles. La quasi-totalité des habitants en a dans le sang. Il est lié à des cancers de la prostate. Certaines zones ne peuvent plus être pêchées ni cultivées.",
     "real": {
      "date": "2 janvier 2023 (non-lieu)",
      "place": "Martinique et Guadeloupe",
      "fact": "Les juges d'instruction ont prononcé un non-lieu dans l'enquête sur l'empoisonnement au chlordécone, en reconnaissant un scandale sanitaire mais en invoquant la prescription.",
      "figures": "Plus de 90 % des adultes des deux îles ont du chlordécone dans le sang selon Santé publique France ; un fonds d'indemnisation existe pour les agriculteurs exposés.",
      "sources": [
       {
        "label": "Maire-info : chlordécone, un scandale sanitaire mais pas de coupable",
        "url": "https://www.maire-info.com/sante-publique/chlordecone-pour-la-justice-un-scandale-sanitaire-...-mais-pas-de-coupable-article-27065"
       },
       {
        "label": "Public Sénat : après le non-lieu, un sentiment de déni de justice",
        "url": "https://www.publicsenat.fr/actualites/societe/chlordecone-apres-le-non-lieu-un-sentiment-de-deni-de-justice-en-guadeloupe-et-en"
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
       "obj": "champ",
       "x": 6,
       "y": 90,
       "anim": "appear"
      },
      {
       "obj": "ferme",
       "x": 8,
       "y": 91,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "manifestants",
       "x": 7,
       "y": 88,
       "anim": "appear",
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 7,
       "y": 86,
       "anim": "appear",
       "label": "Sols pollués",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Indemniser toutes les personnes malades",
       "label_expert": "Fonds d'indemnisation élargi à tous les malades exposés",
       "plus": "Les victimes sont enfin reconnues.",
       "minus": "Coût élevé et preuves difficiles.",
       "budget": -0.15,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 2
       },
       "budget_note": "Indemnités versées par un fonds public : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 7,
         "y": 90,
         "anim": "rise"
        },
        {
         "obj": "hopital",
         "x": 8,
         "y": 89,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Tester gratuitement les habitants et chercher à dépolluer",
       "label_expert": "Dépistage gratuit et programme de recherche sur la dépollution",
       "plus": "On mesure et on traite le problème.",
       "minus": "La dépollution reste lente et incertaine.",
       "budget": -0.05,
       "axes": {
        "env": -1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Analyses et recherche payées par l'État : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "tracteur",
         "x": 6,
         "y": 90,
         "anim": "appear"
        },
        {
         "obj": "cabinet_medical",
         "x": 8,
         "y": 89,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Faire payer les fabricants et vendeurs du pesticide",
       "label_expert": "Action récursoire contre les industriels et distributeurs responsables",
       "plus": "Les responsables paient, pas le contribuable.",
       "minus": "Procès longs, sociétés parfois disparues.",
       "budget": 0.03,
       "axes": {
        "eco": -1,
        "soc": 1
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Sommes récupérées auprès des industriels : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "parlement",
         "x": 8,
         "y": 88,
         "anim": "appear"
        },
        {
         "obj": "pieces",
         "x": 7,
         "y": 90,
         "anim": "rise"
        }
       ]
      },
      {
       "id": "d",
       "label": "Interdire pêche et cultures dans les zones polluées",
       "label_expert": "Extension des arrêtés d'interdiction de pêche et de culture",
       "plus": "Moins de produit dans les assiettes.",
       "minus": "Pêcheurs et agriculteurs perdent leur revenu.",
       "budget": 0,
       "axes": {
        "soc": 1,
        "env": -1
       },
       "ind": {
        "emploi": -1,
        "services": 1
       },
       "fx": [
        {
         "obj": "champ",
         "x": 6,
         "y": 90,
         "anim": "close"
        },
        {
         "obj": "ferme",
         "x": 8,
         "y": 91,
         "anim": "close"
        }
       ]
      },
      {
       "id": "e",
       "label": "Taxer les bananes importées hors d'Europe pour financer le plan",
       "label_expert": "Contribution sur les importations de bananes hors Union européenne",
       "plus": "Un financement sans impôt local en plus.",
       "minus": "Les bananes coûtent plus cher partout.",
       "budget": 0.08,
       "axes": {
        "eu": 1
       },
       "ind": {
        "pouvoir_achat": -1,
        "souverainete": 1
       },
       "budget_note": "Recette sur les importations : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "douane",
         "x": 5,
         "y": 91,
         "anim": "appear"
        },
        {
         "obj": "pieces",
         "x": 7,
         "y": 90,
         "anim": "rise"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_sambuy",
     "kind": "banal",
     "region": "auvergne_rhone_alpes",
     "sector": "salaires",
     "title": "Faute de neige, la station de ski ferme pour de bon",
     "simple": "Une petite station de Haute-Savoie arrête ses remontées : plus assez de neige, des pertes chaque hiver. Le village se demande comment vivre sans le ski.",
     "expert": "Fermeture définitive d'une station de moyenne altitude exploitée en régie par une intercommunalité : déficit d'exploitation chronique, enneigement insuffisant, démontage des remontées et reconversion vers un tourisme quatre saisons.",
     "context": "Les stations de basse et moyenne altitude ont de moins en moins de jours de neige. La neige artificielle coûte cher et consomme de l'eau. Beaucoup de stations vivent de l'argent des communes.",
     "real": {
      "date": "Septembre 2023",
      "place": "La Sambuy, Seythenex (Haute-Savoie)",
      "fact": "La communauté de communes a voté la fermeture définitive de la petite station de La Sambuy, jugée trop déficitaire faute d'enneigement suffisant.",
      "figures": "Station de moyenne altitude ; la collectivité ne pouvait plus couvrir des pertes répétées.",
      "sources": [
       {
        "label": "TourMaG : faute de neige, la station de la Sambuy ferme définitivement",
        "url": "https://www.tourmag.com/Sambuy-faute-de-neige-la-station-ferme-definitivement_a119925.html"
       },
       {
        "label": "L'info durable : déficitaire, la station de La Sambuy va fermer",
        "url": "https://www.linfodurable.fr/haute-savoie-deficitaire-la-station-de-la-sambuy-va-fermer-40870"
       }
      ]
     },
     "camera": {
      "region": "auvergne_rhone_alpes",
      "x": 77,
      "y": 56,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "neige",
       "x": 77,
       "y": 54,
       "anim": "fade"
      },
      {
       "obj": "pylone",
       "x": 78,
       "y": 56,
       "anim": "close",
       "delay": 0.3
      },
      {
       "obj": "maison",
       "x": 76,
       "y": 57,
       "anim": "appear",
       "count": 2,
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 77,
       "y": 52,
       "anim": "appear",
       "label": "Remontées à l'arrêt",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Payer des canons à neige pour sauver la saison",
       "label_expert": "Subvention à l'enneigement artificiel et aux retenues d'eau",
       "plus": "Les emplois d'hiver sont gardés.",
       "minus": "Cher, et l'eau manque en montagne.",
       "budget": -0.01,
       "axes": {
        "env": 1,
        "eco": -1
       },
       "ind": {
        "emploi": 1
       },
       "budget_note": "Subvention publique aux équipements : le déficit augmente un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "neige",
         "x": 77,
         "y": 54,
         "anim": "appear"
        },
        {
         "obj": "pylone",
         "x": 78,
         "y": 56,
         "anim": "grow"
        }
       ]
      },
      {
       "id": "b",
       "label": "Aider le village à vivre du tourisme toute l'année",
       "label_expert": "Contrat de reconversion vers un tourisme quatre saisons",
       "plus": "Randonnée, vélo : une activité plus durable.",
       "minus": "Moins de recettes que le ski en hiver.",
       "budget": 0,
       "axes": {
        "env": -1
       },
       "ind": {
        "emploi": -1,
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "velo",
         "x": 76,
         "y": 57,
         "anim": "appear",
         "count": 2
        },
        {
         "obj": "maison",
         "x": 78,
         "y": 57,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Laisser fermer, sans argent public",
       "label_expert": "Fin du soutien public, démontage à la charge de l'exploitant",
       "plus": "L'argent public va à d'autres priorités.",
       "minus": "Saisonniers sans travail, village vidé.",
       "budget": 0.01,
       "axes": {
        "eco": 1
       },
       "ind": {
        "emploi": -1,
        "cohesion": -1
       },
       "budget_note": "Fin des pertes couvertes par la collectivité : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "pylone",
         "x": 78,
         "y": 56,
         "anim": "fade"
        },
        {
         "obj": "maison",
         "x": 76,
         "y": 57,
         "anim": "close"
        }
       ]
      },
      {
       "id": "d",
       "label": "Confier la station à un groupe privé du tourisme",
       "label_expert": "Délégation de service public à un opérateur privé de stations",
       "plus": "Un exploitant qui sait gérer et investir.",
       "minus": "Forfaits plus chers, priorité aux profits.",
       "budget": 0.01,
       "axes": {
        "eco": 2
       },
       "ind": {
        "pouvoir_achat": -1,
        "emploi": 1
       },
       "budget_note": "Redevance du délégataire : petite recette, le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 77,
         "y": 56,
         "anim": "appear"
        },
        {
         "obj": "pieces",
         "x": 78,
         "y": 55,
         "anim": "rise"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_lactalis",
     "kind": "majeur",
     "region": "pays_de_la_loire",
     "sector": "sante",
     "title": "Du lait pour bébé contaminé à la salmonelle",
     "simple": "Des bébés tombent malades après avoir bu du lait infantile fabriqué dans une grande usine de Mayenne. Des centaines de lots sont retirés, mais certaines boîtes restent vendues.",
     "expert": "Contamination à Salmonella Agona dans une tour de séchage d'un site de nutrition infantile : retrait-rappel ordonné par arrêté ministériel, défaillances de l'autocontrôle et des contrôles officiels, failles du retrait en distribution.",
     "context": "Les usines contrôlent elles-mêmes leur production ; l'État vérifie par sondage. Les inspecteurs de l'alimentation sont peu nombreux. Après l'affaire, les retraits de produits ont été mieux encadrés.",
     "real": {
      "date": "Décembre 2017 à janvier 2018",
      "place": "Craon, Mayenne ; magasins de toute la France",
      "fact": "Des laits infantiles fabriqués à Craon ont été contaminés par des salmonelles. L'État a ordonné le retrait de centaines de lots, puis de toute la production récente, et des boîtes ont encore été vendues malgré le rappel.",
      "figures": "Une quarantaine de nourrissons malades en France ; plus de 12 millions de boîtes concernées dans plus de 80 pays.",
      "sources": [
       {
        "label": "Ministère de l'Économie : rappel de lots de lait infantile",
        "url": "https://www.economie.gouv.fr/salmonelle-retrait-lait-infantile"
       },
       {
        "label": "Que Choisir : un filet de contrôles aux mailles bien trop larges",
        "url": "https://www.quechoisir.org/actualite-lait-bebe-contamine-un-filet-de-controles-aux-mailles-bien-trop-larges-n50168"
       }
      ]
     },
     "camera": {
      "region": "pays_de_la_loire",
      "x": 28,
      "y": 34,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "usine",
       "x": 28,
       "y": 34,
       "anim": "close"
      },
      {
       "obj": "camion",
       "x": 28,
       "y": 35,
       "anim": "move",
       "to": {
        "x": 35,
        "y": 32
       },
       "count": 2,
       "delay": 0.3
      },
      {
       "obj": "supermarche",
       "x": 35,
       "y": 31,
       "anim": "appear",
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 28,
       "y": 30,
       "anim": "appear",
       "label": "Lots retirés",
       "delay": 1
      }
     ],
     "recall": [
      {
       "event": "v25_vache_folle",
       "choice": "a",
       "text": "Il y a quelques semaines, vous avez fait abattre les troupeaux malades : les services vétérinaires savent agir vite.",
       "ind": {
        "services": 1
       }
      },
      {
       "event": "v25_vache_folle",
       "choice": "b",
       "text": "Il y a quelques semaines, vous avez fait vacciner tous les bovins : les laboratoires vétérinaires sont débordés."
      },
      {
       "event": "v25_vache_folle",
       "choice": "c",
       "text": "Il y a quelques semaines, vous avez choisi un abattage partiel : les éleveurs vous font davantage confiance.",
       "ind": {
        "cohesion": -1
       }
      },
      {
       "event": "v25_vache_folle",
       "choice": "d",
       "text": "Il y a quelques semaines, vous avez fait payer les contrôles par les filières : cette recette paie aussi des inspecteurs.",
       "ind": {
        "services": 1
       }
      },
      {
       "event": "v25_vache_folle",
       "choice": "e",
       "text": "Il y a quelques semaines, vous avez fermé la porte à la viande importée : cette fois, le produit en cause est fabriqué en France."
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Recruter des inspecteurs de l'alimentation",
       "label_expert": "Hausse des effectifs de contrôle des services vétérinaires",
       "plus": "Plus d'usines contrôlées chaque année.",
       "minus": "Une dépense durable pour l'État.",
       "budget": -0.06,
       "axes": {
        "eco": -1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Salaires de nouveaux inspecteurs : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "voiture",
         "x": 34,
         "y": 33,
         "anim": "move",
         "to": {
          "x": 29,
          "y": 34
         }
        },
        {
         "obj": "usine",
         "x": 28,
         "y": 34,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "b",
       "label": "Faire payer les contrôles aux industriels",
       "label_expert": "Redevance sanitaire payée par les établissements agroalimentaires",
       "plus": "Le contribuable ne paie pas les contrôles.",
       "minus": "Coût répercuté sur le prix des produits.",
       "budget": 0.05,
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": -1,
        "services": 1
       },
       "budget_note": "Redevance payée par les entreprises : recette, le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 28,
         "y": 34,
         "anim": "rise"
        },
        {
         "obj": "usine",
         "x": 28,
         "y": 34,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "c",
       "label": "Sanctionner lourdement l'entreprise",
       "label_expert": "Amendes proportionnelles au chiffre d'affaires et poursuites pénales",
       "plus": "Un signal fort pour toute l'industrie.",
       "minus": "Procès longs, emplois locaux menacés.",
       "budget": 0.02,
       "axes": {
        "soc": 1
       },
       "ind": {
        "cohesion": 1,
        "emploi": -1
       },
       "budget_note": "Amendes encaissées : petite recette, le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "parlement",
         "x": 30,
         "y": 32,
         "anim": "appear"
        },
        {
         "obj": "usine",
         "x": 28,
         "y": 34,
         "anim": "close"
        }
       ]
      },
      {
       "id": "d",
       "label": "Obliger les magasins à bloquer en caisse les produits rappelés",
       "label_expert": "Blocage automatique en caisse des lots rappelés, sous peine d'amende",
       "plus": "Plus aucune boîte rappelée ne se vend.",
       "minus": "Les magasins doivent s'équiper.",
       "budget": 0,
       "axes": {
        "soc": 1
       },
       "ind": {
        "services": 1
       },
       "fx": [
        {
         "obj": "supermarche",
         "x": 35,
         "y": 31,
         "anim": "pulse"
        },
        {
         "obj": "etiquette",
         "x": 35,
         "y": 28,
         "anim": "appear",
         "label": "Blocage en caisse"
        }
       ]
      },
      {
       "id": "e",
       "label": "Indemniser les familles, sans changer les règles",
       "label_expert": "Fonds d'indemnisation des familles, contrôles inchangés",
       "plus": "Les familles touchées sont aidées vite.",
       "minus": "Le même problème peut revenir.",
       "budget": -0.01,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Indemnités avancées par l'État : le déficit augmente un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 30,
         "y": 35,
         "anim": "rise"
        },
        {
         "obj": "maison",
         "x": 31,
         "y": 36,
         "anim": "appear"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "day": 11,
   "season": "printemps",
   "title": "Fumées, pirates et pots vides",
   "mood": "tendu",
   "weather": "pluie",
   "intro": "Un incendie d'usine, un hôpital piraté : la semaine commence mal.",
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
     "id": "v27_lubrizol",
     "kind": "majeur",
     "region": "normandie",
     "sector": "securite",
     "title": "Une usine chimique brûle en pleine ville",
     "simple": "Une usine classée dangereuse prend feu près de Rouen. Un nuage noir de plusieurs kilomètres passe au-dessus des maisons. Les écoles ferment, les agriculteurs ne peuvent plus vendre leur lait.",
     "expert": "Incendie d'un site Seveso seuil haut et d'un entrepôt voisin : milliers de tonnes de produits brûlés, panache de suie, consignation des productions agricoles, critiques sur l'information du public et le contrôle des installations classées.",
     "context": "La France compte plus de 1 300 sites Seveso, souvent proches des villes. Les inspecteurs ne peuvent pas tout contrôler chaque année. Les riverains réclament d'être mieux informés.",
     "real": {
      "date": "26 septembre 2019",
      "place": "Rouen et Petit-Quevilly, Seine-Maritime",
      "fact": "Un incendie a détruit des milliers de tonnes de produits chimiques sur les sites de Lubrizol et de Normandie Logistique. Un long panache de fumée a traversé la région et des restrictions ont touché des centaines de communes agricoles.",
      "figures": "Environ 9 500 tonnes de produits brûlés ; panache d'environ 22 km ; plus de 200 communes concernées par des restrictions agricoles.",
      "sources": [
       {
        "label": "Santé publique France : l'incendie industriel de Rouen, que s'est-il passé ?",
        "url": "https://www.santepubliquefrance.fr/regions-et-territoires/normandie/incendie-industriel-du-26-septembre-2019-a-rouen/lincendie-industriel-de-rouen-que-sest-il-passe"
       },
       {
        "label": "Vie publique : rapport sur l'incendie de Lubrizol et Normandie Logistique",
        "url": "https://www.vie-publique.fr/rapport/273826-incendie-lubrizolnl-logistique-du-26-septembre-2019-rouen"
       }
      ]
     },
     "camera": {
      "region": "normandie",
      "x": 42,
      "y": 18,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "usine",
       "x": 42,
       "y": 18,
       "anim": "smoke"
      },
      {
       "obj": "incendie",
       "x": 43,
       "y": 19,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "ecole",
       "x": 40,
       "y": 20,
       "anim": "close",
       "delay": 0.6
      },
      {
       "obj": "troupeau",
       "x": 38,
       "y": 19,
       "anim": "appear",
       "delay": 0.8
      },
      {
       "obj": "etiquette",
       "x": 42,
       "y": 14,
       "anim": "appear",
       "label": "Panache de 22 km",
       "delay": 1.1
      }
     ],
     "recall": [
      {
       "event": "v25_pfas",
       "choice": "a",
       "text": "Il y a quelques semaines, vous avez interdit les rejets d'une usine chimique : les inspecteurs sont plus présents sur les sites."
      },
      {
       "event": "v25_pfas",
       "choice": "b",
       "text": "Il y a quelques semaines, vous avez fait payer chaque gramme rejeté : cette recette finance quelques inspecteurs de plus.",
       "ind": {
        "services": 1
       }
      },
      {
       "event": "v25_pfas",
       "choice": "c",
       "text": "Il y a quelques semaines, vous avez financé des filtres pour l'eau potable : l'eau du robinet de la région reste surveillée."
      },
      {
       "event": "v25_pfas",
       "choice": "d",
       "text": "Il y a quelques semaines, vous avez choisi l'information sans contrainte : les riverains réclament cette fois des mesures fermes.",
       "ind": {
        "cohesion": -1
       }
      },
      {
       "event": "v25_pfas",
       "choice": "e",
       "text": "Il y a quelques semaines, vous avez interdit ces produits dans les objets du quotidien : l'industrie chimique redoute de nouvelles règles."
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Doubler le nombre d'inspecteurs des usines dangereuses",
       "label_expert": "Renforcement des effectifs de l'inspection des installations classées",
       "plus": "Chaque site est contrôlé plus souvent.",
       "minus": "Une dépense durable pour l'État.",
       "budget": -0.05,
       "axes": {
        "env": -1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Salaires de nouveaux inspecteurs : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "usine",
         "x": 42,
         "y": 18,
         "anim": "pulse"
        },
        {
         "obj": "voiture",
         "x": 47,
         "y": 20,
         "anim": "move",
         "to": {
          "x": 43,
          "y": 19
         }
        }
       ]
      },
      {
       "id": "b",
       "label": "Indemniser vite les agriculteurs et les commerçants",
       "label_expert": "Fonds d'indemnisation abondé par l'industriel et l'État",
       "plus": "Les fermes et commerces tiennent le coup.",
       "minus": "L'État avance des sommes importantes.",
       "budget": 0,
       "once": -0.05,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Avances publiques aux sinistrés : le déficit augmente une fois (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 39,
         "y": 19,
         "anim": "rise"
        },
        {
         "obj": "ferme",
         "x": 38,
         "y": 20,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Éloigner les usines dangereuses des villes",
       "label_expert": "Plans de prévention des risques avec délocalisation des sites",
       "plus": "Les habitants ne vivent plus à côté du danger.",
       "minus": "Très cher, et emplois déplacés ailleurs.",
       "budget": -0.2,
       "axes": {
        "env": -1,
        "soc": 1
       },
       "ind": {
        "emploi": -1,
        "cohesion": 1
       },
       "budget_note": "Rachats et déménagements aidés : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "usine",
         "x": 42,
         "y": 18,
         "anim": "fade"
        },
        {
         "obj": "chantier_grue",
         "x": 46,
         "y": 20,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Augmenter les amendes et la taxe des sites à risque",
       "label_expert": "Hausse de la fiscalité et des sanctions sur les sites Seveso",
       "plus": "Les industriels investissent dans la sécurité.",
       "minus": "Des usines menacent de partir à l'étranger.",
       "budget": 0.04,
       "axes": {
        "eco": -1
       },
       "ind": {
        "emploi": -1,
        "services": 1
       },
       "budget_note": "Taxe et amendes en hausse : recette, le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 42,
         "y": 18,
         "anim": "rise"
        },
        {
         "obj": "usine",
         "x": 42,
         "y": 18,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "e",
       "label": "Laisser l'industriel payer seul les dégâts",
       "label_expert": "Responsabilité de l'exploitant et remboursement des frais de secours",
       "plus": "Pas de charge nouvelle pour l'industrie.",
       "minus": "Les riverains ont peu de garanties.",
       "budget": 0.02,
       "axes": {
        "eco": 1
       },
       "ind": {
        "cohesion": -1,
        "emploi": 1
       },
       "budget_note": "L'État se fait rembourser ses frais de secours : petite recette, le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "usine",
         "x": 42,
         "y": 18,
         "anim": "appear"
        },
        {
         "obj": "camion",
         "x": 42,
         "y": 19,
         "anim": "move",
         "to": {
          "x": 47,
          "y": 21
         }
        }
       ]
      }
     ]
    },
    {
     "id": "v27_cyber_hopital",
     "kind": "majeur",
     "region": "ile_de_france",
     "sector": "numerique",
     "title": "Des pirates paralysent un hôpital et demandent une rançon",
     "simple": "Des pirates informatiques bloquent tous les ordinateurs d'un grand hôpital de l'Essonne. Ils réclament des millions pour rendre les données. Les urgences envoient des malades ailleurs.",
     "expert": "Attaque par rançongiciel contre un centre hospitalier : chiffrement du système d'information, plan blanc et fonctionnement dégradé, refus de payer la rançon, divulgation de données de santé.",
     "context": "Les hôpitaux sont des cibles fréquentes : leurs logiciels sont souvent anciens. La France refuse en principe de payer les rançons. Protéger un hôpital coûte cher, mais une attaque coûte aussi des millions.",
     "real": {
      "date": "21 août 2022",
      "place": "Centre hospitalier Sud Francilien, Corbeil-Essonnes",
      "fact": "Un rançongiciel a paralysé l'informatique de l'hôpital de Corbeil-Essonnes. L'hôpital a refusé de payer et les pirates ont publié des données de patients.",
      "figures": "Rançon demandée : 10 millions de dollars, puis revue à la baisse ; plusieurs semaines de fonctionnement dégradé.",
      "sources": [
       {
        "label": "Banque des Territoires : cyberattaque du centre hospitalier de Corbeil-Essonnes",
        "url": "https://www.banquedesterritoires.fr/cyberattaque-du-centre-hospitalier-de-corbeil-essonnes-il-faut-repenser-des-systemes-informatiques"
       },
       {
        "label": "Le Quotidien du médecin : les pirates divulguent des données de santé",
        "url": "https://www.lequotidiendumedecin.fr/hopital/cyberattaque-de-corbeil-essonnes-les-pirates-divulguent-des-donnees-de-sante-volees-pour-exercer-un"
       }
      ]
     },
     "camera": {
      "region": "ile_de_france",
      "x": 51,
      "y": 26,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "hopital",
       "x": 51,
       "y": 26,
       "anim": "close"
      },
      {
       "obj": "cyberattaque",
       "x": 53,
       "y": 24,
       "anim": "pulse",
       "delay": 0.3
      },
      {
       "obj": "ambulance",
       "x": 51,
       "y": 27,
       "anim": "move",
       "to": {
        "x": 48,
        "y": 25
       },
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 51,
       "y": 22,
       "anim": "appear",
       "label": "Rançon demandée",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Payer un plan national de cybersécurité des hôpitaux",
       "label_expert": "Programme de mise à niveau des systèmes d'information hospitaliers",
       "plus": "Les hôpitaux résistent mieux aux attaques.",
       "minus": "Un coût élevé, sur plusieurs années.",
       "budget": -0.25,
       "axes": {
        "eco": -1
       },
       "ind": {
        "services": 1,
        "souverainete": 1
       },
       "budget_note": "Investissements informatiques publics : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "antenne",
         "x": 53,
         "y": 25,
         "anim": "appear"
        },
        {
         "obj": "hopital",
         "x": 51,
         "y": 26,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "b",
       "label": "Refuser de payer et faire tourner l'hôpital sur papier",
       "label_expert": "Refus de la rançon, plan blanc et procédures papier",
       "plus": "Les pirates ne gagnent rien.",
       "minus": "Des semaines de soins ralentis.",
       "budget": 0,
       "axes": {
        "soc": 1
       },
       "ind": {
        "services": -1,
        "souverainete": 1
       },
       "fx": [
        {
         "obj": "hopital",
         "x": 51,
         "y": 26,
         "anim": "pulse"
        },
        {
         "obj": "ambulance",
         "x": 51,
         "y": 27,
         "anim": "move",
         "to": {
          "x": 48,
          "y": 25
         }
        }
       ]
      },
      {
       "id": "c",
       "label": "Interdire par la loi le paiement des rançons",
       "label_expert": "Interdiction légale du paiement des rançons et de leur assurance",
       "plus": "Les pirates ont moins intérêt à attaquer.",
       "minus": "Des structures risquent de tout perdre.",
       "budget": 0,
       "axes": {
        "soc": 2
       },
       "ind": {
        "souverainete": 1,
        "services": -1
       },
       "fx": [
        {
         "obj": "parlement",
         "x": 52,
         "y": 22,
         "anim": "appear"
        },
        {
         "obj": "cyberattaque",
         "x": 53,
         "y": 24,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "d",
       "label": "Regrouper l'informatique des hôpitaux d'une région",
       "label_expert": "Groupement régional d'hébergement et de sécurité des données de santé",
       "plus": "Moins de systèmes, mieux protégés, moins chers.",
       "minus": "Une seule panne peut toucher toute la région.",
       "budget": 0.03,
       "axes": {
        "eco": 1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Moins de logiciels en double : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "antenne",
         "x": 53,
         "y": 25,
         "anim": "appear"
        },
        {
         "obj": "satellite",
         "x": 55,
         "y": 22,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Riposter avec les services de l'État contre les pirates",
       "label_expert": "Mobilisation du cybercommandement et coopération policière internationale",
       "plus": "Les réseaux de pirates sont démantelés.",
       "minus": "Résultats lents, pirates souvent à l'étranger.",
       "budget": -0.05,
       "axes": {
        "soc": 1
       },
       "ind": {
        "souverainete": 1
       },
       "budget_note": "Moyens des services spécialisés : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "satellite",
         "x": 55,
         "y": 22,
         "anim": "appear"
        },
        {
         "obj": "voiture_police",
         "x": 50,
         "y": 25,
         "anim": "appear"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_moutarde",
     "kind": "banal",
     "region": "bourgogne_franche_comte",
     "sector": "agriculture",
     "title": "Plus de moutarde dans les rayons",
     "simple": "Les pots de moutarde ont disparu des supermarchés. Les graines venaient surtout du Canada, où la sécheresse a ruiné la récolte. Les usines de Dijon tournent au ralenti.",
     "expert": "Rupture d'approvisionnement en graines de moutarde brune, importées surtout du Canada, après une sécheresse exceptionnelle ; hausse des prix et relance d'une filière bourguignonne sous indication géographique.",
     "context": "La moutarde de Dijon est une recette, pas une origine : les graines viennent en majorité du Canada. Une filière locale existe, mais petite. Produire en France coûte plus cher.",
     "real": {
      "date": "Printemps et été 2022",
      "place": "Dijon et supermarchés de toute la France",
      "fact": "Une sécheresse au Canada a fait chuter la récolte de graines de moutarde, provoquant des rayons vides et une hausse des prix en France. Les producteurs bourguignons ont appelé à relancer la culture locale.",
      "figures": "Environ 80 % des graines utilisées en France venaient du Canada ; récolte canadienne divisée par deux environ.",
      "sources": [
       {
        "label": "L'info durable : la moutarde de Dijon en péril",
        "url": "https://www.linfodurable.fr/changement-climatique-inflation-et-penuries-la-moutarde-de-dijon-en-peril-30030"
       },
       {
        "label": "Terre-net : la relocalisation comme remède à la pénurie",
        "url": "https://www.terre-net.fr/economie-agricole/article/220964/la-relocalisation-comme-remede-a-la-penurie"
       }
      ]
     },
     "camera": {
      "region": "bourgogne_franche_comte",
      "x": 69,
      "y": 40,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "supermarche",
       "x": 69,
       "y": 40,
       "anim": "close"
      },
      {
       "obj": "usine",
       "x": 71,
       "y": 38,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "cargo",
       "x": 6,
       "y": 55,
       "anim": "move",
       "to": {
        "x": 12,
        "y": 47
       },
       "label": "Graines du Canada",
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 69,
       "y": 36,
       "anim": "appear",
       "label": "Rayons vides",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Aider les agriculteurs à cultiver la moutarde en France",
       "label_expert": "Aide à la relance de la filière de graines bourguignonnes",
       "plus": "Moins de dépendance aux graines du Canada.",
       "minus": "Une aide à payer, effets dans des années.",
       "budget": -0.01,
       "axes": {
        "eu": 1,
        "env": -1
       },
       "ind": {
        "souverainete": 1
       },
       "budget_note": "Aide aux semis : le déficit augmente un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "champ",
         "x": 67,
         "y": 41,
         "anim": "grow"
        },
        {
         "obj": "tracteur",
         "x": 66,
         "y": 42,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Laisser le marché s'ajuster",
       "label_expert": "Aucune intervention, ajustement par les prix et les stocks",
       "plus": "Aucune dépense, les prix finiront par baisser.",
       "minus": "Rayons vides et prix hauts pendant des mois.",
       "budget": 0,
       "axes": {
        "eco": 2
       },
       "ind": {
        "pouvoir_achat": -1
       },
       "fx": [
        {
         "obj": "supermarche",
         "x": 69,
         "y": 40,
         "anim": "pulse"
        },
        {
         "obj": "cargo",
         "x": 6,
         "y": 55,
         "anim": "move",
         "to": {
          "x": 12,
          "y": 47
         }
        }
       ]
      },
      {
       "id": "c",
       "label": "Réserver la mention « Dijon » aux graines françaises",
       "label_expert": "Révision du cahier des charges avec origine française des graines",
       "plus": "Un produit plus local et mieux valorisé.",
       "minus": "Moins de volume, prix plus élevés.",
       "budget": 0,
       "axes": {
        "eu": 1
       },
       "ind": {
        "souverainete": 1,
        "pouvoir_achat": -1
       },
       "fx": [
        {
         "obj": "champ",
         "x": 67,
         "y": 41,
         "anim": "appear"
        },
        {
         "obj": "etiquette",
         "x": 69,
         "y": 36,
         "anim": "appear",
         "label": "Graines françaises"
        }
       ]
      },
      {
       "id": "d",
       "label": "Faire financer un stock de sécurité par les industriels",
       "label_expert": "Stock stratégique de matières premières financé par les industriels",
       "plus": "Un stock pour passer les mauvaises années.",
       "minus": "Les prix augmentent un peu en magasin.",
       "budget": 0.01,
       "axes": {
        "eco": -1
       },
       "ind": {
        "souverainete": 1,
        "pouvoir_achat": -1
       },
       "budget_note": "Contribution des industriels : petite recette, le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "entrepot",
         "x": 71,
         "y": 41,
         "anim": "appear"
        },
        {
         "obj": "camion",
         "x": 71,
         "y": 41,
         "anim": "move",
         "to": {
          "x": 69,
          "y": 40
         }
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "day": 12,
   "season": "printemps",
   "title": "L'eau, trésor disputé",
   "mood": "tendu",
   "weather": "soleil",
   "intro": "Réserves dans les champs, robinets à sec outre-mer, pompes vides : la semaine manque de tout.",
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
     "id": "v27_sainte_soline",
     "kind": "majeur",
     "region": "nouvelle_aquitaine",
     "sector": "agriculture",
     "title": "Affrontements autour d'une réserve d'eau agricole",
     "simple": "Des milliers de manifestants marchent vers une immense réserve d'eau creusée pour irriguer les champs. Les heurts avec les gendarmes font des centaines de blessés. Faut-il stocker l'eau pour l'agriculture ?",
     "expert": "Retenues de substitution remplies par pompage hivernal dans les nappes pour l'irrigation estivale, portées par une coopérative avec environ 70 % de financements publics ; manifestation interdite, maintien de l'ordre contesté.",
     "context": "Les agriculteurs disent que sans irrigation, certaines cultures deviennent impossibles l'été. Les opposants jugent que ces réserves profitent à quelques fermes et s'évaporent. Les nappes de la région sont souvent basses.",
     "real": {
      "date": "25 mars 2023",
      "place": "Sainte-Soline, Deux-Sèvres",
      "fact": "Une manifestation interdite contre une réserve d'eau agricole a donné lieu à de violents affrontements avec les gendarmes. Des centaines de personnes ont été blessées des deux côtés, dont deux manifestants dans le coma.",
      "figures": "Environ 3 200 gendarmes mobilisés ; plusieurs milliers de manifestants ; programme de 16 réserves financé à environ 70 % par de l'argent public.",
      "sources": [
       {
        "label": "Gendarmerie nationale : les gendarmes mobilisés à Sainte-Soline",
        "url": "https://www.gendarmerie.interieur.gouv.fr/gendinfo/actualites/2023/sainte-soline-les-gendarmes-mobilises-face-a-un-deferlement-de-violence"
       },
       {
        "label": "Reporterre : l'ampleur de la répression policière mise en cause",
        "url": "https://reporterre.net/Sainte-Soline-l-ampleur-de-la-repression-policiere-mise-en-cause"
       }
      ]
     },
     "camera": {
      "region": "nouvelle_aquitaine",
      "x": 34,
      "y": 51,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "barrage",
       "x": 34,
       "y": 51,
       "anim": "appear"
      },
      {
       "obj": "manifestants",
       "x": 30,
       "y": 50,
       "anim": "move",
       "to": {
        "x": 33,
        "y": 51
       },
       "delay": 0.3
      },
      {
       "obj": "voiture_police",
       "x": 36,
       "y": 51,
       "anim": "appear",
       "count": 2,
       "delay": 0.6
      },
      {
       "obj": "champ",
       "x": 36,
       "y": 53,
       "anim": "appear",
       "delay": 0.8
      },
      {
       "obj": "etiquette",
       "x": 34,
       "y": 47,
       "anim": "appear",
       "label": "Réserve d'eau agricole",
       "delay": 1.1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Continuer les réserves, avec des règles de partage",
       "label_expert": "Poursuite du programme avec protocole d'usage et pratiques agroécologiques",
       "plus": "Les cultures sont irriguées l'été.",
       "minus": "L'opposition reste forte sur le terrain.",
       "budget": -0.03,
       "axes": {
        "env": 1,
        "eco": 1
       },
       "ind": {
        "emploi": 1,
        "cohesion": -1
       },
       "budget_note": "Part publique des chantiers : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "barrage",
         "x": 34,
         "y": 51,
         "anim": "grow"
        },
        {
         "obj": "tracteur",
         "x": 36,
         "y": 52,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Suspendre les chantiers et lancer un débat public",
       "label_expert": "Moratoire et saisine de la Commission nationale du débat public",
       "plus": "Le calme revient, chacun est écouté.",
       "minus": "Les agriculteurs restent sans solution cet été.",
       "budget": 0.02,
       "axes": {
        "env": -1
       },
       "ind": {
        "cohesion": 1,
        "emploi": -1
       },
       "budget_note": "Subventions des chantiers suspendues : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 34,
         "y": 51,
         "anim": "close"
        },
        {
         "obj": "foule",
         "x": 32,
         "y": 50,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Aider les fermes à passer à des cultures moins gourmandes en eau",
       "label_expert": "Aides à la conversion vers des cultures sobres en eau",
       "plus": "Moins de besoin d'eau à long terme.",
       "minus": "Transition coûteuse et revenus incertains.",
       "budget": -0.05,
       "axes": {
        "env": -2
       },
       "ind": {
        "emploi": -1,
        "cohesion": 1
       },
       "budget_note": "Aides à la conversion : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "champ",
         "x": 36,
         "y": 53,
         "anim": "grow"
        },
        {
         "obj": "ferme",
         "x": 35,
         "y": 54,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Faire payer l'eau d'irrigation à son vrai prix",
       "label_expert": "Hausse de la redevance pour prélèvement d'eau agricole",
       "plus": "Chacun économise l'eau qu'il paie.",
       "minus": "Les petites fermes souffrent les premières.",
       "budget": 0.04,
       "axes": {
        "eco": 1,
        "env": -1
       },
       "ind": {
        "pouvoir_achat": -1,
        "emploi": -1
       },
       "budget_note": "Redevance plus élevée : recette, le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 34,
         "y": 51,
         "anim": "rise"
        },
        {
         "obj": "ferme",
         "x": 35,
         "y": 54,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "e",
       "label": "Interdire la manifestation et dissoudre les groupes violents",
       "label_expert": "Interdictions préfectorales et dissolution administrative des collectifs",
       "plus": "Les chantiers sont protégés.",
       "minus": "La contestation se durcit ailleurs.",
       "budget": -0.01,
       "axes": {
        "soc": 2
       },
       "ind": {
        "cohesion": -1
       },
       "budget_note": "Forces de l'ordre mobilisées : le déficit augmente un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "voiture_police",
         "x": 36,
         "y": 51,
         "anim": "appear",
         "count": 2
        },
        {
         "obj": "barrage",
         "x": 34,
         "y": 51,
         "anim": "appear"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_mayotte_eau",
     "kind": "majeur",
     "region": "outre_mer",
     "sector": "sante",
     "title": "À Mayotte, l'eau ne coule plus qu'un jour sur trois",
     "simple": "Après une sécheresse historique, les réserves d'eau de Mayotte sont presque vides. Le robinet n'est ouvert qu'un jour sur trois. Les familles font la queue pour des bouteilles.",
     "expert": "Crise hydrique due à un déficit de pluie et à un sous-investissement chronique (retenues collinaires, forages, dessalement, fuites du réseau) : tours d'eau, distribution de bouteilles par l'État, risques sanitaires.",
     "context": "Mayotte est le département le plus pauvre de France. Sa population a augmenté plus vite que les réseaux. Une partie de l'eau se perd dans des tuyaux qui fuient.",
     "real": {
      "date": "Été et automne 2023",
      "place": "Mayotte",
      "fact": "Face à une sécheresse exceptionnelle, Mayotte a connu des coupures d'eau organisées jusqu'à deux jours sur trois. L'État a distribué des bouteilles d'eau aux habitants et annoncé de nouveaux équipements, dont une usine de dessalement.",
      "figures": "Coupures pouvant durer deux jours sur trois ; distribution gratuite de bouteilles d'eau à chaque habitant.",
      "sources": [
       {
        "label": "Info.gouv : des bouteilles d'eau pour chaque habitant",
        "url": "https://www.info.gouv.fr/actualite/crise-de-leau-a-mayotte-des-bouteilles-deau-pour-chaque-habitant"
       },
       {
        "label": "Info.gouv : les mesures pour affronter la crise de l'eau à Mayotte",
        "url": "https://www.info.gouv.fr/index.php/actualite/crise-de-leau-a-mayotte-presentation-par-elisabeth-borne-des-nouvelles-mesures-mises-en-place"
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
       "obj": "secheresse",
       "x": 6,
       "y": 89,
       "anim": "appear"
      },
      {
       "obj": "foule",
       "x": 8,
       "y": 91,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "camion",
       "x": 4,
       "y": 92,
       "anim": "move",
       "to": {
        "x": 7,
        "y": 90
       },
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 7,
       "y": 86,
       "anim": "appear",
       "label": "Eau un jour sur trois",
       "delay": 1
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
        "a",
        "e"
       ],
       [
        "b",
        "c"
       ],
       [
        "b",
        "d"
       ],
       [
        "b",
        "e"
       ]
      ],
      "hint": "Une réponse pour le court terme, une pour le long terme."
     },
     "recall": [
      {
       "event": "v22_chido",
       "choice": "a",
       "text": "Après le cyclone, vous avez fait voter une loi d'urgence : les chantiers vont vite, mais les réseaux d'eau n'ont pas suivi."
      },
      {
       "event": "v22_chido",
       "choice": "b",
       "text": "Après le cyclone, vous avez lancé la reconstruction en dur : les nouveaux logements sont raccordés à l'eau.",
       "ind": {
        "services": 1
       }
      },
      {
       "event": "v22_chido",
       "choice": "c",
       "text": "Après le cyclone, vous avez durci les règles d'entrée sur l'île : les besoins en eau restent pourtant immenses."
      },
      {
       "event": "v22_chido",
       "choice": "d",
       "text": "Après le cyclone, vous avez obtenu le fonds de solidarité européen : une partie peut financer les réseaux d'eau."
      },
      {
       "event": "v22_chido",
       "choice": "e",
       "text": "Après le cyclone, vous avez réduit les impôts des investisseurs : quelques entreprises proposent des forages privés."
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Distribuer gratuitement de l'eau en bouteille à tous",
       "label_expert": "Distribution universelle de bouteilles par l'État",
       "plus": "Chaque famille a de l'eau potable.",
       "minus": "Coûteux, et des montagnes de plastique.",
       "budget": 0,
       "once": -0.1,
       "terme": "court",
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1,
        "services": 1
       },
       "budget_note": "Achat et transport des bouteilles : le déficit augmente une fois (estimation du jeu).",
       "fx": [
        {
         "obj": "camion",
         "x": 4,
         "y": 92,
         "anim": "move",
         "to": {
          "x": 7,
          "y": 90
         }
        },
        {
         "obj": "foule",
         "x": 8,
         "y": 91,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Couper l'eau à tour de rôle, sans aide de plus",
       "label_expert": "Tours d'eau stricts sans distribution supplémentaire",
       "plus": "Les réserves tiennent plus longtemps.",
       "minus": "Les plus pauvres manquent d'eau potable.",
       "budget": 0,
       "terme": "court",
       "axes": {
        "eco": 1
       },
       "ind": {
        "cohesion": -1,
        "services": -1
       },
       "fx": [
        {
         "obj": "secheresse",
         "x": 6,
         "y": 89,
         "anim": "pulse"
        },
        {
         "obj": "foule",
         "x": 8,
         "y": 91,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Construire une grande usine de dessalement",
       "label_expert": "Seconde usine de dessalement d'eau de mer",
       "plus": "De l'eau potable même sans pluie.",
       "minus": "Très chère, gourmande en électricité.",
       "budget": -0.05,
       "terme": "long",
       "axes": {
        "env": 1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Construction payée par l'État : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "usine",
         "x": 8,
         "y": 92,
         "anim": "grow",
         "stay": true
        },
        {
         "obj": "chantier_grue",
         "x": 6,
         "y": 91,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Réparer les fuites, payé par le prix de l'eau",
       "label_expert": "Renouvellement des canalisations financé par la facture d'eau",
       "plus": "Moins d'eau perdue, sans argent de l'État.",
       "minus": "La facture d'eau augmente pour tous.",
       "budget": 0.02,
       "terme": "long",
       "axes": {
        "eco": 1
       },
       "ind": {
        "pouvoir_achat": -1,
        "services": 1
       },
       "budget_note": "Travaux payés par les usagers, aide de l'État réduite : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 6,
         "y": 91,
         "anim": "appear"
        },
        {
         "obj": "pieces",
         "x": 7,
         "y": 90,
         "anim": "rise"
        }
       ]
      },
      {
       "id": "e",
       "label": "Faire payer plus cher les gros consommateurs d'eau",
       "label_expert": "Tarification progressive de l'eau par tranche de consommation",
       "plus": "L'eau est partagée plus justement.",
       "minus": "Les grandes familles paient davantage.",
       "budget": 0.01,
       "terme": "long",
       "axes": {
        "eco": -1,
        "env": -1
       },
       "ind": {
        "cohesion": 1,
        "pouvoir_achat": -1
       },
       "budget_note": "Recettes des tranches élevées : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 7,
         "y": 90,
         "anim": "rise"
        },
        {
         "obj": "maison",
         "x": 8,
         "y": 91,
         "anim": "appear"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_carburant",
     "kind": "banal",
     "region": "national",
     "sector": "energie",
     "title": "Les stations-service à sec",
     "simple": "Une grève dans les raffineries bloque l'essence. Près d'une station sur trois n'a plus rien à vendre. Les files d'attente s'allongent ; certains ne peuvent plus aller travailler.",
     "expert": "Grève dans les raffineries et dépôts pour des hausses de salaires après des profits exceptionnels : ruptures d'approvisionnement, déblocage des stocks stratégiques et réquisition de personnels.",
     "context": "La France a peu de raffineries en activité. L'État garde des stocks stratégiques de carburant pour les crises. Le droit de réquisition existe, mais il est encadré.",
     "real": {
      "date": "Fin septembre à fin octobre 2022",
      "place": "Raffineries de Normandie, du Nord et de Provence ; stations de toute la France",
      "fact": "Une grève pour les salaires dans les raffineries de TotalEnergies et d'ExxonMobil a provoqué une pénurie de carburant. Le gouvernement a réquisitionné des grévistes et puisé dans les stocks stratégiques.",
      "figures": "Près d'une station-service sur trois en difficulté au pire de la crise ; hausse de salaires de 7 % obtenue chez TotalEnergies.",
      "sources": [
       {
        "label": "Connaissance des énergies (AFP) : près d'une station sur trois sans rien à vendre",
        "url": "https://www.connaissancedesenergies.org/afp/carburants-pres-dune-station-service-sur-trois-en-france-navait-rien-vendre-au-pire-de-la-penurie-selon-une-analyse-afp-221021"
       },
       {
        "label": "Maire-info : carburant, les raisons d'une pénurie",
        "url": "https://www.maire-info.com/energie/carburant-les-raisons-dune-penurie-qui-devient-preoccupante-art26-26775"
       }
      ]
     },
     "camera": {
      "region": "national",
      "x": 50,
      "y": 35,
      "zoom": 1.2
     },
     "fx": [
      {
       "obj": "voiture",
       "x": 52,
       "y": 24,
       "anim": "appear",
       "count": 4
      },
      {
       "obj": "usine",
       "x": 37,
       "y": 18,
       "anim": "close",
       "delay": 0.3
      },
      {
       "obj": "camion",
       "x": 38,
       "y": 19,
       "anim": "move",
       "to": {
        "x": 50,
        "y": 24
       },
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 52,
       "y": 20,
       "anim": "appear",
       "label": "Une station sur trois à sec",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Réquisitionner les grévistes",
       "label_expert": "Réquisition préfectorale des personnels des dépôts",
       "plus": "L'essence revient vite à la pompe.",
       "minus": "Les syndicats dénoncent un recul.",
       "budget": 0,
       "axes": {
        "soc": 2
       },
       "ind": {
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "usine",
         "x": 37,
         "y": 18,
         "anim": "pulse"
        },
        {
         "obj": "camion",
         "x": 38,
         "y": 19,
         "anim": "move",
         "to": {
          "x": 50,
          "y": 24
         },
         "count": 2
        }
       ]
      },
      {
       "id": "b",
       "label": "Taxer les superprofits pour financer les hausses de salaires",
       "label_expert": "Contribution exceptionnelle sur les bénéfices des pétroliers",
       "plus": "Une recette, et les salaires montent.",
       "minus": "Les entreprises investissent moins en France.",
       "budget": 0.5,
       "axes": {
        "eco": -2
       },
       "ind": {
        "pouvoir_achat": 1,
        "emploi": -1
       },
       "budget_note": "Recette de la contribution : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 37,
         "y": 18,
         "anim": "rise"
        },
        {
         "obj": "usine",
         "x": 37,
         "y": 18,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Puiser dans les stocks stratégiques",
       "label_expert": "Déblocage des stocks stratégiques pétroliers, reconstitués par les pétroliers",
       "plus": "Les stations sont livrées sans contrainte.",
       "minus": "Moins de réserve si une crise plus grave arrive.",
       "budget": 0,
       "axes": {
        "soc": -1
       },
       "ind": {
        "souverainete": -1
       },
       "fx": [
        {
         "obj": "entrepot",
         "x": 45,
         "y": 22,
         "anim": "appear"
        },
        {
         "obj": "camion",
         "x": 45,
         "y": 22,
         "anim": "move",
         "to": {
          "x": 51,
          "y": 24
         }
        }
       ]
      },
      {
       "id": "d",
       "label": "Baisser les taxes sur le carburant pendant la crise",
       "label_expert": "Remise temporaire sur l'accise des carburants",
       "plus": "Le plein coûte moins cher pour tous.",
       "minus": "Des centaines de millions de recettes en moins.",
       "budget": -0.8,
       "axes": {
        "env": 2
       },
       "ind": {
        "pouvoir_achat": 2
       },
       "budget_note": "Taxes non perçues : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "voiture",
         "x": 46,
         "y": 28,
         "anim": "move",
         "to": {
          "x": 51,
          "y": 24
         },
         "count": 3
        },
        {
         "obj": "pieces",
         "x": 52,
         "y": 24,
         "anim": "rise"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "day": 13,
   "season": "printemps",
   "title": "Marée noire et bancs d'école",
   "mood": "tendu",
   "weather": "pluie",
   "intro": "Le pétrole arrive sur les plages, et le collège change ses règles.",
   "offer": [
    "regulation_installation_medecins",
    "jour_ferie_travaille",
    "tva_energie_5_5",
    "leasing_electrique",
    "encadrement_loyers",
    "reduction_impot_familles"
   ],
   "events": [
    {
     "id": "v27_erika",
     "kind": "majeur",
     "region": "nouvelle_aquitaine",
     "sector": "transports",
     "title": "La pêche fermée un mois pour sauver les dauphins",
     "simple": "Des centaines de dauphins meurent chaque hiver dans les filets au large de l'Atlantique. La justice impose de fermer la pêche pendant un mois. Les pêcheurs restent à quai. Que faire ?",
     "expert": "Fermeture spatio-temporelle de la pêche au filet et au chalut pélagique dans le golfe de Gascogne pour réduire les captures accidentelles de petits cétacés, avec indemnisation par le fonds européen pour les affaires maritimes.",
     "context": "Les dauphins sont protégés par le droit européen. Fermer la pêche les protège mais coûte aux pêcheurs, aux criées et aux poissonniers ; équiper les bateaux de répulsifs coûte aussi.",
     "real": {
      "date": "22 janvier au 20 février 2024 (puis reconduite en 2025)",
      "place": "Golfe de Gascogne, de la Bretagne au Pays basque",
      "fact": "Sur décision du Conseil d'État, la pêche avec certains engins a été interdite pendant un mois dans le golfe de Gascogne pour protéger les dauphins. L'État et l'Union européenne ont indemnisé les pêcheurs.",
      "figures": "Un mois de fermeture, indemnisée à hauteur d'une grande partie du chiffre d'affaires.",
      "sources": [
       {
        "label": "Préfecture de Nouvelle-Aquitaine : les premiers pêcheurs indemnisés",
        "url": "https://www.prefectures-regions.gouv.fr/nouvelle-aquitaine/Actualites/Fermeture-de-la-peche-dans-le-Golfe-de-Gascogne-les-premiers-pecheurs-indemnises-par-l-Etat"
       },
       {
        "label": "Ministère de la Mer : captures accidentelles de petits cétacés",
        "url": "https://mer.gouv.fr/captures-accidentelles-de-petits-cetaces-dans-le-golfe-de-gascogne"
       }
      ]
     },
     "camera": {
      "region": "nouvelle_aquitaine",
      "x": 24,
      "y": 56,
      "zoom": 2.2
     },
     "fx": [
      {
       "obj": "bateau_peche",
       "x": 13,
       "y": 55,
       "anim": "shake"
      },
      {
       "obj": "port",
       "x": 27,
       "y": 55,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "foule",
       "x": 29,
       "y": 56,
       "anim": "appear",
       "delay": 0.6
      }
     ],
     "recall": [
      {
       "event": "v26_brexit_peche",
       "choice": "a",
       "text": "Après l'accord avec Londres, vous aviez indemnisé les bateaux bloqués : les pêcheurs savent que l'État peut payer."
      },
      {
       "event": "v26_brexit_peche",
       "choice": "b",
       "text": "Après l'accord avec Londres, vous aviez financé la casse de bateaux : la flotte est plus petite, la fermeture touche moins de navires."
      },
      {
       "event": "v26_brexit_peche",
       "choice": "c",
       "text": "Après l'accord avec Londres, vous aviez bloqué les arrivages britanniques : les criées sont déjà fragiles."
      },
      {
       "event": "v26_brexit_peche",
       "choice": "d",
       "text": "Après l'accord avec Londres, vous aviez laissé l'Europe négocier : Bruxelles finance cette fois une partie des indemnités."
      },
      {
       "event": "v26_brexit_peche",
       "choice": "e",
       "text": "Après l'accord avec Londres, vous aviez saisi le tribunal de l'accord : les pêcheurs se demandent qui défend leurs intérêts ici."
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Fermer la pêche et indemniser les pêcheurs",
       "label_expert": "Fermeture d'un mois et indemnisation par l'État et le fonds européen",
       "plus": "Les dauphins sont protégés, les pêcheurs payés.",
       "minus": "Un coût public chaque hiver.",
       "budget": -0.08,
       "axes": {
        "env": -1
       },
       "ind": {
        "co2": -1,
        "cohesion": 1
       },
       "budget_note": "Indemnités : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "bateau_peche",
         "x": 13,
         "y": 55,
         "anim": "appear"
        },
        {
         "obj": "pieces",
         "x": 28,
         "y": 56,
         "anim": "rise"
        }
       ]
      },
      {
       "id": "b",
       "label": "Équiper les bateaux de répulsifs et de caméras",
       "label_expert": "Dispositifs acoustiques de dissuasion et caméras embarquées",
       "plus": "La pêche continue presque normalement.",
       "minus": "Des résultats incertains selon les scientifiques.",
       "budget": 0,
       "axes": {
        "env": 1
       },
       "ind": {
        "emploi": 1
       },
       "budget_note": "Équipements financés par le fonds européen pour la pêche : pas d'effet sur le déficit (estimation du jeu).",
       "fx": [
        {
         "obj": "bateau_peche",
         "x": 13,
         "y": 55,
         "anim": "move",
         "to": {
          "x": 11,
          "y": 58
         }
        },
        {
         "obj": "antenne",
         "x": 27,
         "y": 55,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Fermer sans indemniser",
       "label_expert": "Fermeture sans compensation financière",
       "plus": "Aucune dépense publique.",
       "minus": "Des pêcheurs au bord de la faillite.",
       "budget": 0.05,
       "axes": {
        "eco": 1,
        "env": -1
       },
       "ind": {
        "emploi": -2,
        "cohesion": -1
       },
       "budget_note": "Pas d'indemnités : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "bateau_peche",
         "x": 13,
         "y": 55,
         "anim": "appear"
        },
        {
         "obj": "port",
         "x": 27,
         "y": 55,
         "anim": "close"
        }
       ]
      },
      {
       "id": "d",
       "label": "Demander à l'Europe d'assouplir la règle",
       "label_expert": "Demande de révision des mesures de protection des cétacés",
       "plus": "Les bateaux peuvent sortir.",
       "minus": "Le risque d'une condamnation par la justice.",
       "budget": 0.02,
       "axes": {
        "eu": 2,
        "env": 1
       },
       "ind": {
        "emploi": 1,
        "co2": 1
       },
       "budget_note": "Pas de fermeture à indemniser : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "bateau_peche",
         "x": 13,
         "y": 55,
         "anim": "move",
         "to": {
          "x": 11,
          "y": 58
         }
        }
       ]
      },
      {
       "id": "e",
       "label": "Taxer le poisson vendu pour financer la protection",
       "label_expert": "Taxe sur les premières ventes en criée",
       "plus": "Une recette pour indemniser.",
       "minus": "Le poisson coûte un peu plus cher.",
       "budget": 0.04,
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": -1
       },
       "budget_note": "Recette de la taxe : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 27,
         "y": 55,
         "anim": "rise"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_groupes_niveau",
     "kind": "majeur",
     "region": "national",
     "sector": "ecole",
     "title": "Des groupes de niveau au collège",
     "simple": "Le gouvernement veut regrouper les collégiens par niveau en français et en maths. Les uns y voient un moyen d'aider les élèves en difficulté, les autres un tri trop précoce. Que décidez-vous ?",
     "expert": "Réforme dite du « choc des savoirs » : groupes de niveau en sixième et cinquième pour le français et les mathématiques, besoin de milliers de postes, contestation syndicale et recours devant le Conseil d'État sur la base juridique.",
     "context": "Les enquêtes internationales montrent une baisse du niveau en maths en France. Les études sur les groupes de niveau donnent des résultats contrastés. Il faut plus de professeurs pour faire des petits groupes.",
     "real": {
      "date": "5 décembre 2023 (annonce) ; rentrée 2024 (mise en place)",
      "place": "Collèges de toute la France",
      "fact": "Après de mauvais résultats aux évaluations internationales, le ministre de l'Éducation a annoncé des groupes de niveau en sixième et cinquième. La mesure a été assouplie en « groupes de besoins », puis fragilisée par la justice administrative.",
      "figures": "La France était sous la moyenne de l'OCDE en mathématiques dans la dernière enquête PISA ; les syndicats estimaient à plusieurs milliers les postes nécessaires.",
      "sources": [
       {
        "label": "Banque des Territoires : le choc des savoirs, textes publiés, questions en suspens",
        "url": "https://www.banquedesterritoires.fr/choc-des-savoirs-textes-publies-questions-en-suspens"
       },
       {
        "label": "Weka : la poursuite des groupes de besoins nécessitera un nouveau texte",
        "url": "https://www.weka.fr/actualite/education/article/college-la-poursuite-des-groupes-de-besoins-necessitera-un-nouveau-texte-decide-la-justice-188758/"
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
       "obj": "ecole",
       "x": 52,
       "y": 30,
       "anim": "appear"
      },
      {
       "obj": "ecole",
       "x": 40,
       "y": 46,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "ecole",
       "x": 64,
       "y": 56,
       "anim": "appear",
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 52,
       "y": 26,
       "anim": "appear",
       "label": "Groupes de niveau",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Généraliser les groupes de niveau",
       "label_expert": "Groupes de niveau obligatoires en français et mathématiques",
       "plus": "Les élèves faibles avancent à leur rythme.",
       "minus": "Risque d'enfermer un élève dans un groupe.",
       "budget": -0.3,
       "axes": {
        "soc": 1
       },
       "ind": {
        "services": 1,
        "cohesion": -1
       },
       "budget_note": "Postes d'enseignants supplémentaires : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "ecole",
         "x": 52,
         "y": 30,
         "anim": "grow"
        },
        {
         "obj": "ecole",
         "x": 40,
         "y": 46,
         "anim": "grow"
        }
       ]
      },
      {
       "id": "b",
       "label": "Laisser chaque collège décider",
       "label_expert": "Autonomie des établissements sur l'organisation des groupes",
       "plus": "Chaque équipe s'adapte à ses élèves.",
       "minus": "Des inégalités entre collèges.",
       "budget": 0,
       "axes": {
        "eco": 1
       },
       "ind": {
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "ecole",
         "x": 52,
         "y": 30,
         "anim": "pulse"
        },
        {
         "obj": "ecole",
         "x": 64,
         "y": 56,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "c",
       "label": "Réduire la taille de toutes les classes",
       "label_expert": "Plafonnement des effectifs à 24 élèves en collège",
       "plus": "Tous les élèves reçoivent plus d'attention.",
       "minus": "Il faut des milliers de professeurs en plus.",
       "budget": -0.6,
       "axes": {
        "eco": -1,
        "soc": -1
       },
       "ind": {
        "services": 2
       },
       "budget_note": "Recrutements massifs : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "ecole",
         "x": 52,
         "y": 30,
         "anim": "grow",
         "count": 2
        },
        {
         "obj": "ecole",
         "x": 64,
         "y": 56,
         "anim": "grow"
        }
       ]
      },
      {
       "id": "d",
       "label": "Remplacer les groupes par du soutien en ligne",
       "label_expert": "Plateforme publique de soutien scolaire en ligne à la place de postes",
       "plus": "Accessible à tous et peu coûteux.",
       "minus": "Les élèves fragiles décrochent.",
       "budget": 0.1,
       "axes": {
        "eco": 1
       },
       "ind": {
        "services": -1
       },
       "budget_note": "Moins de recrutements prévus : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "antenne",
         "x": 54,
         "y": 31,
         "anim": "appear"
        },
        {
         "obj": "ecole",
         "x": 52,
         "y": 30,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Orienter plus tôt vers des filières professionnelles",
       "label_expert": "Orientation précoce vers des filières professionnelles dès la quatrième",
       "plus": "Des élèves motivés par un métier.",
       "minus": "Un choix d'avenir fait trop tôt.",
       "budget": 0.05,
       "axes": {
        "soc": 1,
        "eco": 1
       },
       "ind": {
        "emploi": 1,
        "cohesion": -1
       },
       "budget_note": "Formations en alternance cofinancées par les entreprises : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "usine",
         "x": 56,
         "y": 32,
         "anim": "appear"
        },
        {
         "obj": "ecole",
         "x": 52,
         "y": 30,
         "anim": "appear"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_velib",
     "kind": "banal",
     "region": "ile_de_france",
     "sector": "transports",
     "title": "Les vélos en libre-service ne marchent plus",
     "simple": "La ville a changé d'opérateur pour ses vélos en libre-service. Résultat : stations éteintes, vélos introuvables, abonnés furieux. Faut-il reprendre la main ?",
     "expert": "Changement de titulaire d'un marché public de vélos partagés : retards de déploiement des stations, défaillances techniques, chute des abonnements, pénalités contractuelles et débat sur la régie publique.",
     "context": "Ces vélos sont financés par les impôts locaux et les abonnements. Le service est confié à une entreprise après un appel d'offres. Changer d'opérateur peut faire baisser les prix, mais aussi casser le service.",
     "real": {
      "date": "Janvier à l'automne 2018",
      "place": "Paris et communes voisines",
      "fact": "Le nouvel opérateur du Vélib' n'a pas réussi à installer ses stations à temps : beaucoup sont restées hors service pendant des mois et de nombreux abonnés sont partis.",
      "figures": "Plusieurs mois de service très dégradé ; des abonnés indemnisés ; un plan d'urgence exigé par les élus.",
      "sources": [
       {
        "label": "Que Choisir : Vélib', la transition déraille",
        "url": "https://www.quechoisir.org/actualite-velib-la-transition-deraille-n50088/"
       },
       {
        "label": "Banque des Territoires : la mairie de Paris demande un plan d'urgence pour le Vélib'",
        "url": "https://www.banquedesterritoires.fr/la-mairie-de-paris-demande-un-plan-durgence-pour-le-velib"
       }
      ]
     },
     "camera": {
      "region": "ile_de_france",
      "x": 52,
      "y": 24,
      "zoom": 2.6
     },
     "fx": [
      {
       "obj": "velo",
       "x": 52,
       "y": 24,
       "anim": "close",
       "count": 3
      },
      {
       "obj": "foule",
       "x": 54,
       "y": 25,
       "anim": "appear",
       "delay": 0.4
      },
      {
       "obj": "mairie",
       "x": 50,
       "y": 23,
       "anim": "appear",
       "delay": 0.7
      },
      {
       "obj": "etiquette",
       "x": 52,
       "y": 20,
       "anim": "appear",
       "label": "Stations éteintes",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Reprendre le service en régie publique",
       "label_expert": "Passage en régie d'un syndicat mixte public",
       "plus": "La ville maîtrise enfin son service.",
       "minus": "Un coût et des risques pour la collectivité.",
       "budget": -0.01,
       "axes": {
        "eco": -2
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Rachat et gestion publique : le déficit augmente un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "velo",
         "x": 52,
         "y": 24,
         "anim": "grow"
        },
        {
         "obj": "mairie",
         "x": 50,
         "y": 23,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "b",
       "label": "Infliger des pénalités et laisser l'opérateur réparer",
       "label_expert": "Application des pénalités contractuelles et plan d'urgence imposé",
       "plus": "L'entreprise paie pour ses retards.",
       "minus": "Le service reste mauvais des mois.",
       "budget": 0.01,
       "axes": {
        "eco": 1
       },
       "ind": {
        "services": -1
       },
       "budget_note": "Pénalités encaissées : petite recette, le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 52,
         "y": 24,
         "anim": "rise"
        },
        {
         "obj": "velo",
         "x": 53,
         "y": 25,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Ouvrir la ville aux vélos privés sans station",
       "label_expert": "Autorisation des vélos et trottinettes en libre-service sans borne",
       "plus": "Plus d'offre, sans argent public.",
       "minus": "Des vélos garés partout sur les trottoirs.",
       "budget": 0.01,
       "axes": {
        "eco": 2
       },
       "ind": {
        "services": 1,
        "cohesion": -1
       },
       "budget_note": "Redevance d'occupation payée par les opérateurs : petite recette, le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "velo",
         "x": 52,
         "y": 24,
         "anim": "appear",
         "count": 3
        },
        {
         "obj": "pieces",
         "x": 54,
         "y": 25,
         "anim": "rise"
        }
       ]
      },
      {
       "id": "d",
       "label": "Rembourser les abonnés aux frais de l'opérateur",
       "label_expert": "Indemnisation des abonnés imputée sur la rémunération du prestataire",
       "plus": "Les usagers sont enfin respectés.",
       "minus": "L'opérateur investit encore moins.",
       "budget": 0,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "pieces",
         "x": 52,
         "y": 24,
         "anim": "rise"
        },
        {
         "obj": "foule",
         "x": 54,
         "y": 25,
         "anim": "appear"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "day": 14,
   "season": "printemps",
   "title": "Colère en Guyane, stress des lycéens",
   "mood": "tendu",
   "weather": "soleil",
   "intro": "Un territoire bloqué, des lycéens inquiets et des villages sans eau.",
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
     "id": "v27_guyane",
     "kind": "majeur",
     "region": "outre_mer",
     "sector": "securite",
     "title": "La Guyane bloquée par un grand mouvement social",
     "simple": "Barrages sur les routes, écoles et commerces fermés : la Guyane se soulève contre l'insécurité et le manque d'hôpitaux et d'écoles. Les collectifs demandent des milliards à l'État.",
     "expert": "Mouvement social porté par des collectifs citoyens : blocage du territoire pendant plus d'un mois, revendications sur la sécurité, la santé, l'éducation et le foncier ; accord avec un plan d'urgence d'environ un milliard d'euros.",
     "context": "La Guyane a une population jeune qui augmente vite. Le chômage, l'insécurité et l'orpaillage illégal y sont élevés. Les équipements publics y sont moins nombreux qu'en métropole.",
     "real": {
      "date": "Mars à avril 2017",
      "place": "Guyane (Cayenne, Kourou, Saint-Laurent-du-Maroni)",
      "fact": "Un mouvement social a bloqué la Guyane pendant plus d'un mois. Il s'est terminé par l'accord de Guyane, avec un plan d'urgence d'un peu plus d'un milliard d'euros et la prise en compte de demandes supplémentaires.",
      "figures": "Plan d'urgence d'environ 1,08 Md€ ; 2,1 Md€ de mesures supplémentaires demandées par les collectifs.",
      "sources": [
       {
        "label": "Maire-info : Guyane, fin du conflit après plus d'un mois de blocage",
        "url": "https://maire-info.com/guyane-fin-du-conflit-apres-plus-dun-mois-de-blocage-article2-20683"
       },
       {
        "label": "Banque des Territoires : ce que le gouvernement propose à la Guyane",
        "url": "https://www.banquedesterritoires.fr/plan-durgence-accords-thematiques-plan-de-convergence-ce-que-le-gouvernement-propose-la-guyane"
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
       "obj": "manifestants",
       "x": 7,
       "y": 90,
       "anim": "appear"
      },
      {
       "obj": "voiture",
       "x": 5,
       "y": 91,
       "anim": "close",
       "count": 2,
       "delay": 0.3
      },
      {
       "obj": "ecole",
       "x": 9,
       "y": 89,
       "anim": "close",
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 7,
       "y": 86,
       "anim": "appear",
       "label": "Territoire bloqué",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Signer un grand plan d'urgence",
       "label_expert": "Accord prévoyant un plan d'urgence d'environ un milliard d'euros",
       "plus": "Hôpitaux, écoles et police renforcés.",
       "minus": "Une facture lourde pour l'État.",
       "budget": -0.3,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 2,
        "services": 1
       },
       "budget_note": "Investissements et postes en Guyane : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "hopital",
         "x": 8,
         "y": 89,
         "anim": "grow"
        },
        {
         "obj": "ecole",
         "x": 9,
         "y": 90,
         "anim": "grow"
        }
       ]
      },
      {
       "id": "b",
       "label": "Envoyer des renforts de police et de gendarmerie",
       "label_expert": "Renforts d'escadrons et lutte contre l'orpaillage illégal",
       "plus": "L'insécurité recule rapidement.",
       "minus": "Les autres demandes restent sans réponse.",
       "budget": -0.05,
       "axes": {
        "soc": 2
       },
       "ind": {
        "cohesion": -1
       },
       "budget_note": "Renforts des forces de l'ordre : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "voiture_police",
         "x": 6,
         "y": 90,
         "anim": "appear",
         "count": 2
        },
        {
         "obj": "commissariat",
         "x": 8,
         "y": 91,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Refuser de céder sous la pression des barrages",
       "label_expert": "Exiger la levée des blocages avant toute négociation",
       "plus": "Aucune promesse qu'on ne pourra pas tenir.",
       "minus": "Le blocage dure, l'économie s'effondre.",
       "budget": 0,
       "axes": {
        "soc": 1,
        "eco": 1
       },
       "ind": {
        "cohesion": -2,
        "emploi": -1
       },
       "fx": [
        {
         "obj": "manifestants",
         "x": 7,
         "y": 90,
         "anim": "shake"
        },
        {
         "obj": "voiture",
         "x": 5,
         "y": 91,
         "anim": "close"
        }
       ]
      },
      {
       "id": "d",
       "label": "Donner plus d'autonomie à la collectivité de Guyane",
       "label_expert": "Évolution statutaire avec compétences et fiscalité propres",
       "plus": "Des décisions prises sur place.",
       "minus": "Moins de solidarité nationale à terme.",
       "budget": 0.05,
       "axes": {
        "soc": -1,
        "eco": 1
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Transfert de compétences avec recettes locales : le déficit de l'État baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "mairie",
         "x": 7,
         "y": 90,
         "anim": "appear"
        },
        {
         "obj": "parlement",
         "x": 9,
         "y": 88,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Conditionner l'aide à une meilleure gestion locale",
       "label_expert": "Contrat de redressement des finances locales en échange des aides",
       "plus": "L'argent public est mieux suivi.",
       "minus": "Les élus locaux dénoncent une tutelle.",
       "budget": 0.05,
       "axes": {
        "eco": 1,
        "soc": 1
       },
       "ind": {
        "cohesion": -1
       },
       "budget_note": "Aides réduites et mieux ciblées : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "mairie",
         "x": 7,
         "y": 90,
         "anim": "pulse"
        },
        {
         "obj": "pieces",
         "x": 8,
         "y": 91,
         "anim": "rise"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_parcoursup",
     "kind": "majeur",
     "region": "national",
     "sector": "ecole",
     "title": "Une nouvelle plateforme trie les futurs étudiants",
     "simple": "Pour entrer à l'université, les lycéens passent désormais par une plateforme où chaque formation classe les dossiers. Des milliers attendent tout l'été sans proposition. Faut-il sélectionner à l'entrée de la fac ?",
     "expert": "Loi orientation et réussite des étudiants : fin du tirage au sort, examen des dossiers selon des attendus, procédure en continu, réponses « oui si » avec remise à niveau, tension sur les places en licence.",
     "context": "Le nombre de bacheliers augmente plus vite que les places à l'université. Avant, certaines filières tiraient au sort. Beaucoup d'étudiants échouent en première année.",
     "real": {
      "date": "Printemps et été 2018",
      "place": "Lycées et universités de toute la France",
      "fact": "La plateforme Parcoursup a remplacé l'ancien système et son tirage au sort. Lors de la première session, des dizaines de milliers de candidats étaient encore sans proposition au début de l'été.",
      "figures": "Environ 810 000 candidats inscrits lors de la première session.",
      "sources": [
       {
        "label": "Ministère de l'Enseignement supérieur : la loi ORE en bref",
        "url": "https://www.enseignementsup-recherche.gouv.fr/fr/la-loi-ore-en-bref-49643"
       },
       {
        "label": "Assemblée nationale : question écrite sur Parcoursup",
        "url": "https://questions.assemblee-nationale.fr/dyn/15/questions/QANR5L15QE11417.pdf"
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
       "obj": "ecole",
       "x": 52,
       "y": 30,
       "anim": "appear"
      },
      {
       "obj": "antenne",
       "x": 55,
       "y": 32,
       "anim": "pulse",
       "delay": 0.3
      },
      {
       "obj": "foule",
       "x": 49,
       "y": 31,
       "anim": "appear",
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 52,
       "y": 26,
       "anim": "appear",
       "label": "Dossiers en attente",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Ouvrir beaucoup plus de places à l'université",
       "label_expert": "Création massive de places en licence et recrutement d'enseignants-chercheurs",
       "plus": "Chaque bachelier trouve une place.",
       "minus": "Très coûteux, et réussite incertaine.",
       "budget": -0.4,
       "axes": {
        "eco": -1,
        "soc": -1
       },
       "ind": {
        "services": 1,
        "cohesion": 1
       },
       "budget_note": "Places et postes nouveaux : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "ecole",
         "x": 52,
         "y": 30,
         "anim": "grow",
         "count": 2
        },
        {
         "obj": "foule",
         "x": 49,
         "y": 31,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Assumer la sélection à l'entrée de la fac",
       "label_expert": "Sélection sur dossier généralisée en licence",
       "plus": "Moins d'échecs en première année.",
       "minus": "Des jeunes restent sans études.",
       "budget": 0.1,
       "axes": {
        "eco": 1,
        "soc": 1
       },
       "ind": {
        "cohesion": -1
       },
       "budget_note": "Moins d'étudiants en échec à financer : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "ecole",
         "x": 52,
         "y": 30,
         "anim": "pulse"
        },
        {
         "obj": "foule",
         "x": 49,
         "y": 31,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "c",
       "label": "Développer l'apprentissage après le bac",
       "label_expert": "Aides à l'embauche d'apprentis dans l'enseignement supérieur",
       "plus": "Des jeunes formés et payés en entreprise.",
       "minus": "Une aide coûteuse pour chaque apprenti.",
       "budget": -0.3,
       "axes": {
        "eco": 1
       },
       "ind": {
        "emploi": 1
       },
       "budget_note": "Aides aux employeurs d'apprentis : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "usine",
         "x": 56,
         "y": 32,
         "anim": "appear"
        },
        {
         "obj": "ecole",
         "x": 52,
         "y": 30,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Augmenter les frais d'inscription, avec plus de bourses",
       "label_expert": "Hausse modulée des droits d'inscription et bourses sur critères sociaux",
       "plus": "Plus de moyens pour les universités.",
       "minus": "Les familles modestes hésitent à s'inscrire.",
       "budget": 0.3,
       "axes": {
        "eco": 2
       },
       "ind": {
        "pouvoir_achat": -1,
        "services": 1
       },
       "budget_note": "Recettes des droits d'inscription : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 52,
         "y": 30,
         "anim": "rise"
        },
        {
         "obj": "ecole",
         "x": 54,
         "y": 31,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Revenir au tirage au sort pour les filières pleines",
       "label_expert": "Rétablissement du tirage au sort en filière sous tension",
       "plus": "Le hasard plutôt qu'un tri des dossiers.",
       "minus": "Les plus motivés peuvent être recalés.",
       "budget": 0,
       "axes": {
        "soc": -1
       },
       "ind": {
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "ecole",
         "x": 52,
         "y": 30,
         "anim": "pulse"
        },
        {
         "obj": "foule",
         "x": 49,
         "y": 31,
         "anim": "appear"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_doubs_eau",
     "kind": "banal",
     "region": "bourgogne_franche_comte",
     "sector": "agriculture",
     "title": "Des villages ravitaillés en eau par camion",
     "simple": "La sécheresse a vidé les sources du Haut-Doubs. Une rivière a même disparu par endroits. Des villages sont ravitaillés par camions-citernes et les arrosages sont interdits.",
     "expert": "Sécheresse avec arrêtés de crise sur tout le département : restrictions des usages, ravitaillement de communes par citernes, sources karstiques taries, débat sur l'interconnexion des réseaux et la priorité entre usages.",
     "context": "Dans le Jura et le Doubs, l'eau traverse vite les roches calcaires : les sources tarissent dès que l'été est sec. Beaucoup de petites communes ont un réseau isolé. Les relier coûte cher.",
     "real": {
      "date": "Juillet et août 2022",
      "place": "Haut-Doubs et Jura",
      "fact": "Tout le Doubs a été placé en situation de crise sécheresse ; dans le Haut-Doubs, une portion de rivière s'est asséchée et des communes ont dû être ravitaillées en eau.",
      "figures": "Niveau de crise étendu à tout le département du Doubs ; dans le Jura, 136 communes reconnues en état de catastrophe naturelle pour la sécheresse.",
      "sources": [
       {
        "label": "macommune.info : le niveau crise étendu à tout le Doubs",
        "url": "https://www.macommune.info/secheresse-le-niveau-crise-etendu-a-tout-le-departement-du-doubs-a-partir-du-10-aout-22"
       },
       {
        "label": "macommune.info : 136 communes du Jura en catastrophe naturelle",
        "url": "https://www.macommune.info/secheresse-dans-le-jura-en-2022-136-communes-reconnues-comme-etat-de-catastrophe-naturelle"
       }
      ]
     },
     "camera": {
      "region": "bourgogne_franche_comte",
      "x": 78,
      "y": 44,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "secheresse",
       "x": 78,
       "y": 44,
       "anim": "appear"
      },
      {
       "obj": "camion",
       "x": 72,
       "y": 42,
       "anim": "move",
       "to": {
        "x": 78,
        "y": 45
       },
       "delay": 0.3
      },
      {
       "obj": "maison",
       "x": 80,
       "y": 45,
       "anim": "appear",
       "count": 2,
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 78,
       "y": 40,
       "anim": "appear",
       "label": "Arrosage interdit",
       "delay": 1
      }
     ],
     "recall": [
      {
       "event": "v27_sainte_soline",
       "choice": "a",
       "text": "Il y a deux semaines, vous avez poursuivi les réserves d'eau agricoles : ici, sur la roche calcaire, elles ne retiendraient rien."
      },
      {
       "event": "v27_sainte_soline",
       "choice": "b",
       "text": "Il y a deux semaines, vous avez suspendu les chantiers et lancé un débat public : ses conclusions sur le partage de l'eau sont attendues."
      },
      {
       "event": "v27_sainte_soline",
       "choice": "c",
       "text": "Il y a deux semaines, vous avez aidé les fermes à changer de cultures : certaines consomment déjà moins d'eau.",
       "ind": {
        "cohesion": 1
       }
      },
      {
       "event": "v27_sainte_soline",
       "choice": "d",
       "text": "Il y a deux semaines, vous avez fait payer l'eau agricole plus cher : les éleveurs du Doubs s'inquiètent pour leurs bêtes."
      },
      {
       "event": "v27_sainte_soline",
       "choice": "e",
       "text": "Il y a deux semaines, vous avez interdit la manifestation contre les réserves : la colère autour de l'eau reste vive."
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Relier les villages aux réseaux des villes",
       "label_expert": "Interconnexion subventionnée des réseaux d'eau potable",
       "plus": "Plus aucun village sans eau.",
       "minus": "Des travaux longs et coûteux.",
       "budget": -0.05,
       "axes": {
        "env": -1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Subvention aux travaux : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 77,
         "y": 44,
         "anim": "appear"
        },
        {
         "obj": "camion",
         "x": 72,
         "y": 42,
         "anim": "move",
         "to": {
          "x": 78,
          "y": 45
         }
        }
       ]
      },
      {
       "id": "b",
       "label": "Interdire tous les usages non essentiels",
       "label_expert": "Arrêtés de restriction renforcés et contrôlés",
       "plus": "L'eau potable est bien préservée.",
       "minus": "Fermes et entreprises perdent gros.",
       "budget": 0.01,
       "axes": {
        "soc": 1,
        "env": -1
       },
       "ind": {
        "emploi": -1
       },
       "budget_note": "Amendes pour non-respect : petite recette, le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "secheresse",
         "x": 78,
         "y": 44,
         "anim": "pulse"
        },
        {
         "obj": "voiture_police",
         "x": 79,
         "y": 45,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Aider les éleveurs à acheter du fourrage",
       "label_expert": "Aide d'urgence pour calamités agricoles et achat de fourrage",
       "plus": "Les troupeaux sont nourris cet été.",
       "minus": "Une aide sans solution durable.",
       "budget": 0,
       "once": -0.03,
       "axes": {
        "eco": -1
       },
       "ind": {
        "emploi": 1
       },
       "budget_note": "Aide d'urgence : le déficit augmente une fois (estimation du jeu).",
       "fx": [
        {
         "obj": "troupeau",
         "x": 79,
         "y": 46,
         "anim": "appear"
        },
        {
         "obj": "camion",
         "x": 72,
         "y": 42,
         "anim": "move",
         "to": {
          "x": 78,
          "y": 45
         }
        }
       ]
      },
      {
       "id": "d",
       "label": "Faire payer l'eau plus cher au-delà d'un seuil",
       "label_expert": "Tarification saisonnière de l'eau en période de sécheresse",
       "plus": "Chacun réduit sa consommation.",
       "minus": "Les familles nombreuses paient plus.",
       "budget": 0.02,
       "axes": {
        "eco": 1,
        "env": -1
       },
       "ind": {
        "pouvoir_achat": -1
       },
       "budget_note": "Recettes supplémentaires des services d'eau : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 78,
         "y": 44,
         "anim": "rise"
        },
        {
         "obj": "maison",
         "x": 80,
         "y": 45,
         "anim": "appear"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "day": 15,
   "season": "ete",
   "title": "Trains, immeubles et algues",
   "mood": "tendu",
   "weather": "soleil",
   "intro": "Bruxelles tranche sur une grande fusion, une ville pleure ses morts, une plage devient dangereuse.",
   "offer": [
    "retraite_60",
    "baisse_impots_production",
    "defense_europeenne_emprunt",
    "vols_courts_train",
    "service_militaire",
    "rsa_suspendu_condamnes"
   ],
   "events": [
    {
     "id": "v27_alstom",
     "kind": "majeur",
     "region": "bruxelles",
     "sector": "europe",
     "title": "Bruxelles interdit la fusion de deux géants du train",
     "simple": "Un grand constructeur français de trains voulait s'unir à son concurrent allemand pour résister aux géants chinois. La Commission européenne dit non : la fusion ferait monter les prix en Europe.",
     "expert": "Veto de la Commission à une concentration dans le matériel roulant et la signalisation ferroviaire, au titre du règlement sur les concentrations ; débat sur la doctrine de concurrence face aux champions industriels non européens.",
     "context": "La Commission contrôle les grandes fusions pour protéger les clients européens. Certains pays veulent que ces règles tiennent plus compte de la concurrence chinoise. D'autres craignent des monopoles.",
     "real": {
      "date": "6 février 2019",
      "place": "Bruxelles ; sites ferroviaires de France et d'Allemagne",
      "fact": "La Commission européenne a interdit la fusion d'Alstom et de Siemens Mobility, estimant qu'elle réduirait trop la concurrence sur la signalisation et les trains à grande vitesse. Les gouvernements français et allemand ont critiqué la décision.",
      "figures": "Le nouvel ensemble aurait réalisé environ 15 Md€ de chiffre d'affaires.",
      "sources": [
       {
        "label": "Alstom : réaction à la décision d'interdiction de la Commission",
        "url": "https://www.alstom.com/fr/press-releases-news/2019/2/alstom-regrette-la-decision-de-la-commission-europeenne-dinterdiction-de"
       },
       {
        "label": "Le Temps : Bruxelles interdit la fusion Siemens-Alstom",
        "url": "https://www.letemps.ch/economie/bruxelles-interdit-fusion-siemensalstom-voulue-paris-berlin"
       }
      ]
     },
     "camera": {
      "region": "bruxelles",
      "x": 63,
      "y": 8,
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
       "y": 3,
       "anim": "pulse",
       "delay": 0.3
      },
      {
       "obj": "tgv",
       "x": 70,
       "y": 28,
       "anim": "move",
       "to": {
        "x": 80,
        "y": 35
       },
       "delay": 0.6
      },
      {
       "obj": "usine",
       "x": 82,
       "y": 37,
       "anim": "appear",
       "delay": 0.8
      },
      {
       "obj": "etiquette",
       "x": 63,
       "y": 9,
       "anim": "appear",
       "label": "Fusion refusée",
       "delay": 1.1
      }
     ],
     "recall": [
      {
       "event": "v22_florange",
       "choice": "a",
       "text": "Il y a plusieurs semaines, vous avez nationalisé une usine le temps de la reprendre : l'État hésite à intervenir de nouveau dans l'industrie."
      },
      {
       "event": "v22_florange",
       "choice": "b",
       "text": "Il y a plusieurs semaines, vous avez obtenu un accord sans licenciement : les syndicats du rail demandent la même garantie."
      },
      {
       "event": "v22_florange",
       "choice": "c",
       "text": "Il y a plusieurs semaines, vous avez taxé l'acier importé selon son carbone : l'Europe débat déjà de protections industrielles."
      },
      {
       "event": "v22_florange",
       "choice": "d",
       "text": "Il y a plusieurs semaines, vous avez laissé fermer l'usine en aidant la reconversion : la région craint un nouveau recul industriel.",
       "ind": {
        "cohesion": -1
       }
      },
      {
       "event": "v22_florange",
       "choice": "e",
       "text": "Il y a plusieurs semaines, vous avez exigé le remboursement des aides publiques : les industriels du train surveillent vos choix."
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Accepter la décision et laisser chaque entreprise seule",
       "label_expert": "Respect de la décision et maintien des deux groupes indépendants",
       "plus": "La concurrence protège les acheteurs de trains.",
       "minus": "Face aux géants chinois, nous restons petits.",
       "budget": 0,
       "axes": {
        "eu": -1,
        "eco": 1
       },
       "ind": {
        "souverainete": -1
       },
       "fx": [
        {
         "obj": "batiment_ue",
         "x": 63,
         "y": 3,
         "anim": "pulse"
        },
        {
         "obj": "tgv",
         "x": 70,
         "y": 28,
         "anim": "move",
         "to": {
          "x": 80,
          "y": 35
         }
        }
       ]
      },
      {
       "id": "b",
       "label": "Demander de changer les règles européennes de concurrence",
       "label_expert": "Réforme du contrôle des concentrations tenant compte de la concurrence mondiale",
       "plus": "Des champions européens deviennent possibles.",
       "minus": "Risque de prix plus élevés pour les clients.",
       "budget": 0,
       "axes": {
        "eu": -1
       },
       "ind": {
        "souverainete": 1
       },
       "fx": [
        {
         "obj": "drapeau_ue",
         "x": 66,
         "y": 3,
         "anim": "pulse"
        },
        {
         "obj": "parlement",
         "x": 60,
         "y": 6,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Faire entrer l'État au capital du groupe français",
       "label_expert": "Prise de participation de l'État via l'Agence des participations",
       "plus": "L'État protège un fleuron stratégique.",
       "minus": "Des milliards immobilisés dans une entreprise.",
       "budget": 0,
       "once": -0.5,
       "axes": {
        "eco": -2,
        "eu": 1
       },
       "ind": {
        "souverainete": 2
       },
       "budget_note": "Achat d'actions par l'État : le déficit augmente une fois (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 80,
         "y": 35,
         "anim": "rise"
        },
        {
         "obj": "usine",
         "x": 82,
         "y": 37,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "d",
       "label": "Réserver les commandes publiques aux trains faits en Europe",
       "label_expert": "Clause de préférence européenne dans les marchés publics ferroviaires",
       "plus": "Les usines européennes ont des commandes.",
       "minus": "Des trains plus chers pour les régions.",
       "budget": -0.05,
       "axes": {
        "eu": -1
       },
       "ind": {
        "emploi": 1,
        "souverainete": 1
       },
       "budget_note": "Achats publics un peu plus chers : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "tgv",
         "x": 76,
         "y": 32,
         "anim": "appear"
        },
        {
         "obj": "usine",
         "x": 82,
         "y": 37,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Vendre des parts de l'État pour financer l'innovation",
       "label_expert": "Cession de participations publiques pour financer l'innovation ferroviaire",
       "plus": "Une recette pour financer la recherche.",
       "minus": "L'État perd du poids dans ces entreprises.",
       "budget": 0,
       "once": 0.3,
       "axes": {
        "eco": 2
       },
       "ind": {
        "souverainete": -1
       },
       "budget_note": "Produit des ventes d'actions : recette, le déficit baisse une fois (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 63,
         "y": 6,
         "anim": "rise"
        },
        {
         "obj": "usine",
         "x": 82,
         "y": 37,
         "anim": "appear"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_rue_aubagne",
     "kind": "majeur",
     "region": "paca",
     "sector": "logement",
     "title": "Deux immeubles s'effondrent au cœur de la ville",
     "simple": "Deux vieux immeubles insalubres s'écroulent dans un quartier populaire de Marseille. Huit habitants meurent. Des milliers de personnes sont ensuite évacuées d'immeubles jugés dangereux.",
     "expert": "Effondrement d'immeubles relevant de l'habitat indigne : défaillance des procédures de péril, copropriétés dégradées, marchands de sommeil, évacuations massives et procès pour homicides involontaires.",
     "context": "En France, des centaines de milliers de logements sont jugés indignes. Les mairies peuvent ordonner des travaux ou interdire l'accès. Certains propriétaires louent cher des logements dangereux.",
     "real": {
      "date": "5 novembre 2018",
      "place": "Rue d'Aubagne, quartier de Noailles, Marseille",
      "fact": "Deux immeubles se sont effondrés rue d'Aubagne, faisant huit morts. Dans les mois suivants, des milliers d'habitants ont été évacués d'immeubles menacés.",
      "figures": "8 morts ; plus de 3 000 personnes évacuées dans les mois suivants.",
      "sources": [
       {
        "label": "Wikipédia (en) : effondrement d'immeubles à Marseille",
        "url": "https://en.wikipedia.org/wiki/2018_Marseille_building_collapse"
       },
       {
        "label": "Maire-info : le procès du logement indigne s'ouvre à Marseille",
        "url": "https://www.maire-info.com/logement/effondrements-de-la-rue-daubagne-le-proces-du-logement-indigne-souvre-%EF%BF%BD-marseille-article-29093"
       }
      ]
     },
     "camera": {
      "region": "paca",
      "x": 72,
      "y": 81,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "immeuble",
       "x": 72,
       "y": 81,
       "anim": "shake",
       "count": 2
      },
      {
       "obj": "ambulance",
       "x": 74,
       "y": 82,
       "anim": "appear",
       "delay": 0.4
      },
      {
       "obj": "foule",
       "x": 70,
       "y": 80,
       "anim": "appear",
       "delay": 0.7
      },
      {
       "obj": "etiquette",
       "x": 72,
       "y": 77,
       "anim": "appear",
       "label": "Immeubles évacués",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Lancer un grand plan de rénovation des quartiers anciens",
       "label_expert": "Opération de requalification financée par l'État et la ville",
       "plus": "Des logements sûrs pour des milliers de familles.",
       "minus": "Des centaines de millions sur des années.",
       "budget": -0.2,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1,
        "services": 1
       },
       "budget_note": "Subventions de rénovation : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 72,
         "y": 81,
         "anim": "grow"
        },
        {
         "obj": "immeuble",
         "x": 73,
         "y": 82,
         "anim": "grow"
        }
       ]
      },
      {
       "id": "b",
       "label": "Sanctionner durement les marchands de sommeil",
       "label_expert": "Confiscation des biens et interdiction d'acheter pour les marchands de sommeil",
       "plus": "Les propriétaires voyous sont arrêtés.",
       "minus": "Des contrôles lourds, peu de résultats rapides.",
       "budget": 0.02,
       "axes": {
        "soc": 2
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Biens confisqués et amendes : recette, le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "commissariat",
         "x": 71,
         "y": 80,
         "anim": "appear"
        },
        {
         "obj": "voiture_police",
         "x": 73,
         "y": 81,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Obliger un diagnostic de solidité avant chaque location",
       "label_expert": "Permis de louer et diagnostic structurel obligatoire",
       "plus": "Les logements dangereux sont repérés.",
       "minus": "Les loyers montent, les bailleurs protestent.",
       "budget": 0,
       "axes": {
        "soc": 1,
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": -1,
        "services": 1
       },
       "fx": [
        {
         "obj": "immeuble",
         "x": 72,
         "y": 81,
         "anim": "pulse"
        },
        {
         "obj": "maison",
         "x": 70,
         "y": 80,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Reloger les familles évacuées à l'hôtel aux frais de l'État",
       "label_expert": "Hébergement d'urgence financé par l'État pour les évacués",
       "plus": "Personne ne reste à la rue.",
       "minus": "Coûteux et sans solution durable.",
       "budget": 0,
       "once": -0.05,
       "axes": {
        "eco": -1
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Nuits d'hôtel payées par l'État : le déficit augmente une fois (estimation du jeu).",
       "fx": [
        {
         "obj": "immeuble",
         "x": 70,
         "y": 79,
         "anim": "appear"
        },
        {
         "obj": "bus",
         "x": 72,
         "y": 81,
         "anim": "move",
         "to": {
          "x": 69,
          "y": 79
         }
        }
       ]
      },
      {
       "id": "e",
       "label": "Taxer davantage les logements vides et dégradés",
       "label_expert": "Majoration de la taxe sur les logements vacants et insalubres",
       "plus": "Les propriétaires sont poussés à rénover.",
       "minus": "De petits propriétaires sont pénalisés.",
       "budget": 0.03,
       "axes": {
        "eco": -1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Recette de la taxe majorée : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 72,
         "y": 81,
         "anim": "rise"
        },
        {
         "obj": "immeuble",
         "x": 72,
         "y": 81,
         "anim": "pulse"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_algues_vertes",
     "kind": "banal",
     "region": "bretagne",
     "sector": "agriculture",
     "title": "Des algues vertes toxiques envahissent une plage",
     "simple": "Sur une plage bretonne, des algues vertes en décomposition dégagent un gaz toxique. Un cheval meurt, son cavalier est sauvé de justesse. Ces algues se nourrissent des nitrates venus des élevages.",
     "expert": "Marées vertes liées aux excédents de nitrates d'origine agricole dans les bassins versants : dégagement d'hydrogène sulfuré, condamnations de l'État par la justice administrative, plans de lutte successifs.",
     "context": "La Bretagne concentre beaucoup d'élevages de porcs et de volailles. L'azote des lisiers ruisselle vers la mer et nourrit les algues. Réduire les élevages menace des milliers d'emplois.",
     "real": {
      "date": "Juillet 2009",
      "place": "Saint-Michel-en-Grève, Côtes-d'Armor",
      "fact": "Un cheval est mort après s'être enlisé dans des algues vertes en décomposition ; son cavalier a perdu connaissance. L'État a ensuite lancé un premier plan de lutte contre les algues vertes.",
      "figures": "Plusieurs plans de lutte successifs ; l'État a été condamné à plusieurs reprises par la justice administrative.",
      "sources": [
       {
        "label": "Futura : les algues vertes, un problème écologique inquiétant",
        "url": "https://www.futura-sciences.com/planete/actualites/developpement-durable-algues-vertes-point-probleme-ecologique-inquietant-31236/"
       },
       {
        "label": "Maire-info : algues vertes, l'État condamné une nouvelle fois",
        "url": "https://maire-info.com/environnement/algues-vertes-letat-condamne-une-nouvelle-fois-art26-17476"
       }
      ]
     },
     "camera": {
      "region": "bretagne",
      "x": 13,
      "y": 28,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "troupeau",
       "x": 15,
       "y": 29,
       "anim": "appear"
      },
      {
       "obj": "ferme",
       "x": 16,
       "y": 30,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "tracteur",
       "x": 15,
       "y": 28,
       "anim": "move",
       "to": {
        "x": 12,
        "y": 27
       },
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 12,
       "y": 25,
       "anim": "appear",
       "label": "Gaz toxique",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Ramasser les algues chaque jour",
       "label_expert": "Ramassage et traitement quotidien des algues échouées",
       "plus": "Les plages restent ouvertes l'été.",
       "minus": "Coûteux, et le problème revient chaque année.",
       "budget": -0.01,
       "axes": {
        "env": 1
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Ramassage payé par les collectivités et l'État : le déficit augmente un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "tracteur",
         "x": 15,
         "y": 28,
         "anim": "move",
         "to": {
          "x": 12,
          "y": 27
         },
         "count": 2
        },
        {
         "obj": "camion",
         "x": 16,
         "y": 29,
         "anim": "move",
         "to": {
          "x": 18,
          "y": 30
         }
        }
       ]
      },
      {
       "id": "b",
       "label": "Réduire les élevages dans les zones touchées",
       "label_expert": "Plafonnement des cheptels et rachat de droits dans les bassins versants",
       "plus": "Moins de nitrates, moins d'algues.",
       "minus": "Des éleveurs perdent leur activité.",
       "budget": -0.03,
       "axes": {
        "env": -2
       },
       "ind": {
        "emploi": -1
       },
       "budget_note": "Rachat des exploitations : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "troupeau",
         "x": 15,
         "y": 29,
         "anim": "fade"
        },
        {
         "obj": "ferme",
         "x": 16,
         "y": 30,
         "anim": "close"
        }
       ]
      },
      {
       "id": "c",
       "label": "Taxer les engrais azotés",
       "label_expert": "Redevance sur les excédents d'azote d'origine agricole",
       "plus": "Les agriculteurs en utilisent moins.",
       "minus": "Coûts de production en hausse.",
       "budget": 0.05,
       "axes": {
        "env": -1,
        "eco": -1
       },
       "ind": {
        "emploi": -1
       },
       "budget_note": "Recette de la redevance : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 15,
         "y": 29,
         "anim": "rise"
        },
        {
         "obj": "champ",
         "x": 17,
         "y": 30,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Payer les agriculteurs qui changent de pratiques",
       "label_expert": "Paiements pour services environnementaux et conversion à l'herbe",
       "plus": "Une transition acceptée.",
       "minus": "Une aide durable à financer.",
       "budget": -0.02,
       "axes": {
        "env": -1
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Paiements aux agriculteurs : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "champ",
         "x": 17,
         "y": 30,
         "anim": "grow"
        },
        {
         "obj": "troupeau",
         "x": 15,
         "y": 29,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Faire financer le ramassage par les élevages intensifs",
       "label_expert": "Contribution des élevages intensifs au financement du ramassage",
       "plus": "Les pollueurs financent le nettoyage.",
       "minus": "Les éleveurs, déjà fragiles, paient plus.",
       "budget": 0.01,
       "axes": {
        "env": -1,
        "eco": -1
       },
       "ind": {
        "emploi": -1
       },
       "budget_note": "Contribution des élevages : petite recette, le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 15,
         "y": 29,
         "anim": "rise"
        },
        {
         "obj": "troupeau",
         "x": 15,
         "y": 29,
         "anim": "appear"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "day": 16,
   "season": "ete",
   "title": "Fournaise et moustiques",
   "mood": "tendu",
   "weather": "canicule",
   "intro": "Un record de chaleur, une épidémie outre-mer, des piscines fermées : l'été commence fort.",
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
     "id": "v27_canicule_2019",
     "kind": "majeur",
     "region": "occitanie",
     "sector": "ecole",
     "title": "Record absolu de chaleur, le brevet est reporté",
     "simple": "Le thermomètre atteint 46 °C dans un village de l'Hérault, du jamais vu en France. Les écoles étouffent, le brevet des collèges est repoussé. Comment adapter le pays ?",
     "expert": "Épisode caniculaire précoce avec record national de température : première vigilance rouge canicule, report des épreuves du diplôme national du brevet, fermetures d'écoles et adaptation du bâti scolaire.",
     "context": "Les vagues de chaleur sont plus fréquentes et plus précoces. Beaucoup d'écoles ont été construites sans protection contre la chaleur. Adapter les bâtiments coûte des milliards aux communes.",
     "real": {
      "date": "28 juin 2019",
      "place": "Vérargues, Hérault ; toute la France",
      "fact": "Météo-France a mesuré 46 °C à Vérargues, record absolu en France. La vigilance rouge canicule a été déclenchée pour la première fois et les épreuves du brevet ont été reportées.",
      "figures": "46,0 °C à Vérargues ; quatre départements en vigilance rouge.",
      "sources": [
       {
        "label": "Futura : le record absolu de température en France porté à 46 °C",
        "url": "https://www.futura-sciences.com/planete/breves/meteorologie-record-absolu-temperature-france-eleve-finalement-46-c-919/"
       },
       {
        "label": "Euronews : Météo-France révise le record de juin à 46 °C",
        "url": "https://www.euronews.com/2019/07/19/meteo-france-revises-june-record-temperature-to-46-degrees-celsius"
       }
      ]
     },
     "camera": {
      "region": "occitanie",
      "x": 62,
      "y": 78,
      "zoom": 2.2
     },
     "fx": [
      {
       "obj": "canicule",
       "x": 62,
       "y": 76,
       "anim": "pulse"
      },
      {
       "obj": "ecole",
       "x": 63,
       "y": 79,
       "anim": "close",
       "delay": 0.3
      },
      {
       "obj": "secheresse",
       "x": 60,
       "y": 79,
       "anim": "appear",
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 62,
       "y": 73,
       "anim": "appear",
       "label": "46 °C",
       "delay": 1
      }
     ],
     "recall": [
      {
       "event": "v22_canicule_2003",
       "choice": "a",
       "text": "Lors de la première canicule, vous avez créé un registre des personnes fragiles : les mairies appellent les aînés isolés.",
       "ind": {
        "cohesion": 1
       }
      },
      {
       "event": "v22_canicule_2003",
       "choice": "b",
       "text": "Lors de la première canicule, vous avez fait travailler un jour férié pour les aînés : cette recette finance une partie de l'aide."
      },
      {
       "event": "v22_canicule_2003",
       "choice": "c",
       "text": "Lors de la première canicule, vous avez climatisé hôpitaux et maisons de retraite : les aînés sont protégés, les écoles non."
      },
      {
       "event": "v22_canicule_2003",
       "choice": "d",
       "text": "Lors de la première canicule, vous avez recruté des soignants en maison de retraite : les établissements tiennent mieux le choc.",
       "ind": {
        "services": 1
       }
      },
      {
       "event": "v22_canicule_2003",
       "choice": "e",
       "text": "Lors de la première canicule, vous avez planté des arbres dans les villes et les cours d'école : certaines cours sont déjà plus fraîches."
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Rénover et végétaliser toutes les écoles",
       "label_expert": "Plan national d'adaptation thermique du bâti scolaire",
       "plus": "Des classes fraîches dans tout le pays.",
       "minus": "Des milliards sur une décennie.",
       "budget": -0.5,
       "axes": {
        "env": -1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Subventions aux communes : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "ecole",
         "x": 63,
         "y": 79,
         "anim": "grow"
        },
        {
         "obj": "foret",
         "x": 61,
         "y": 78,
         "anim": "grow"
        }
       ]
      },
      {
       "id": "b",
       "label": "Adapter le calendrier scolaire aux fortes chaleurs",
       "label_expert": "Calendrier scolaire modulable et examens avancés avant les chaleurs",
       "plus": "Aucun coût, des élèves protégés.",
       "minus": "Les familles doivent réorganiser l'été.",
       "budget": 0,
       "axes": {
        "soc": 1
       },
       "ind": {
        "cohesion": -1
       },
       "fx": [
        {
         "obj": "ecole",
         "x": 63,
         "y": 79,
         "anim": "close"
        },
        {
         "obj": "etiquette",
         "x": 62,
         "y": 73,
         "anim": "appear",
         "label": "Examens avancés"
        }
       ]
      },
      {
       "id": "c",
       "label": "Installer la climatisation dans les écoles",
       "label_expert": "Équipement des salles de classe en climatisation",
       "plus": "Effet immédiat dans les classes.",
       "minus": "Consomme de l'électricité, réchauffe la rue.",
       "budget": -0.2,
       "axes": {
        "env": 1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Achat et électricité : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "ecole",
         "x": 63,
         "y": 79,
         "anim": "appear"
        },
        {
         "obj": "pylone",
         "x": 65,
         "y": 78,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Financer l'adaptation par une taxe sur les climatiseurs",
       "label_expert": "Écocontribution sur la vente de climatiseurs",
       "plus": "Une recette pour adapter les bâtiments.",
       "minus": "Les climatiseurs coûtent plus cher.",
       "budget": 0.05,
       "axes": {
        "env": -1,
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": -1
       },
       "budget_note": "Recette de l'écocontribution : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 62,
         "y": 78,
         "anim": "rise"
        },
        {
         "obj": "ecole",
         "x": 63,
         "y": 79,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Reporter les travaux dans les écoles pour tenir le budget",
       "label_expert": "Gel temporaire des dotations d'investissement scolaire",
       "plus": "Des économies immédiates pour l'État.",
       "minus": "Les écoles restent des fournaises.",
       "budget": 0.2,
       "axes": {
        "eco": 1
       },
       "ind": {
        "services": -1
       },
       "budget_note": "Dotations gelées : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "ecole",
         "x": 63,
         "y": 79,
         "anim": "pulse"
        },
        {
         "obj": "pieces",
         "x": 62,
         "y": 78,
         "anim": "rise"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_chikungunya",
     "kind": "majeur",
     "region": "outre_mer",
     "sector": "sante",
     "title": "Le chikungunya revient en force sur l'île de La Réunion",
     "simple": "Sur l'île de La Réunion, un moustique transmet une maladie qui donne de fortes douleurs. Des dizaines de milliers d'habitants sont touchés. Un vaccin existe, mais pose question pour les plus âgés. Que faire ?",
     "expert": "Épidémie de chikungunya transmise par Aedes albopictus : lutte antivectorielle, campagne de vaccination ciblée (Ixchiq) puis suspension de la recommandation chez les 65 ans et plus après des effets indésirables graves.",
     "context": "Le moustique tigre s'installe aussi en métropole. Supprimer les eaux stagnantes est la méthode la plus efficace. Les insecticides tuent aussi d'autres insectes.",
     "real": {
      "date": "Janvier à mai 2025",
      "place": "La Réunion",
      "fact": "La Réunion a connu une forte épidémie de chikungunya, la première de cette ampleur depuis vingt ans. Une campagne de vaccination a été lancée, puis la recommandation a été suspendue pour les plus de 65 ans.",
      "figures": "Plus de 44 000 cas confirmés au printemps.",
      "sources": [
       {
        "label": "Santé publique France : chikungunya à La Réunion, une épidémie en cours",
        "url": "https://www.santepubliquefrance.fr/index.php/en/les-actualites/chikungunya-reunion-ongoing-outbreak-requires-everyones-vigilance"
       },
       {
        "label": "ANSM : campagne vaccinale contre le chikungunya (Ixchiq)",
        "url": "https://ansm.sante.fr/actualites/lansm-accompagne-la-campagne-vaccinale-contre-le-chikungunya-vaccin-ixchiq"
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
       "obj": "hopital",
       "x": 8,
       "y": 89,
       "anim": "pulse"
      },
      {
       "obj": "foule",
       "x": 6,
       "y": 91,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "ambulance",
       "x": 7,
       "y": 90,
       "anim": "move",
       "to": {
        "x": 8,
        "y": 89
       },
       "delay": 0.6
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Démoustiquer massivement avec l'armée",
       "label_expert": "Lutte antivectorielle par épandage d'insecticides avec appui militaire",
       "plus": "Les moustiques reculent vite.",
       "minus": "Les insecticides nuisent à la nature.",
       "budget": 0,
       "once": -0.05,
       "axes": {
        "soc": 1,
        "env": 1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Opérations militaires et produits : le déficit augmente une fois (estimation du jeu).",
       "fx": [
        {
         "obj": "camion",
         "x": 5,
         "y": 92,
         "anim": "move",
         "to": {
          "x": 7,
          "y": 90
         }
        },
        {
         "obj": "foule",
         "x": 7,
         "y": 90,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "b",
       "label": "Mobiliser les habitants pour vider les eaux stagnantes",
       "label_expert": "Campagne de suppression des gîtes larvaires avec les habitants",
       "plus": "Une méthode durable et peu chère.",
       "minus": "Lente, elle dépend de chacun.",
       "budget": 0,
       "axes": {
        "env": -1
       },
       "ind": {
        "cohesion": 1
       },
       "fx": [
        {
         "obj": "foule",
         "x": 6,
         "y": 91,
         "anim": "appear"
        },
        {
         "obj": "maison",
         "x": 8,
         "y": 91,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Vacciner en priorité les personnes fragiles",
       "label_expert": "Campagne de vaccination ciblée et suivi des effets indésirables",
       "plus": "Les plus exposés sont protégés vite.",
       "minus": "Des effets indésirables chez les plus âgés.",
       "budget": -0.05,
       "axes": {
        "eco": -1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Crédits de recherche : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "hopital",
         "x": 8,
         "y": 89,
         "anim": "appear"
        },
        {
         "obj": "cabinet_medical",
         "x": 6,
         "y": 90,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Taxer les séjours touristiques pour financer la lutte",
       "label_expert": "Taxe de séjour additionnelle affectée à la lutte antivectorielle",
       "plus": "Les visiteurs participent à l'effort.",
       "minus": "Le tourisme, déjà touché, recule encore.",
       "budget": 0.01,
       "axes": {
        "eco": -1
       },
       "ind": {
        "emploi": -1
       },
       "budget_note": "Recette de la taxe de séjour : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 7,
         "y": 90,
         "anim": "rise"
        },
        {
         "obj": "avion",
         "x": 4,
         "y": 88,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Reporter les soins non urgents pour soulager l'hôpital",
       "label_expert": "Déprogrammation des soins non urgents et redéploiement hospitalier",
       "plus": "Pas de coût en plus, les urgences tiennent.",
       "minus": "Les autres malades attendent leurs soins.",
       "budget": 0.02,
       "axes": {
        "eco": 1
       },
       "ind": {
        "services": -1
       },
       "budget_note": "Moins d'activité programmée remboursée : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "hopital",
         "x": 8,
         "y": 89,
         "anim": "pulse"
        },
        {
         "obj": "ambulance",
         "x": 6,
         "y": 90,
         "anim": "appear"
        }
       ]
      }
     ]
    },
    {
     "id": "v27_piscines",
     "kind": "banal",
     "region": "auvergne_rhone_alpes",
     "sector": "salaires",
     "title": "Les piscines ferment, faute de maîtres-nageurs",
     "simple": "En pleine chaleur, une grande ville ferme des piscines : il manque des maîtres-nageurs. Des enfants n'apprennent plus à nager et des familles se rabattent sur les rivières.",
     "expert": "Pénurie de maîtres-nageurs sauveteurs : coût et durée de la formation au diplôme d'État, rémunérations peu attractives dans la fonction publique territoriale, fermetures de bassins et risque accru de noyades.",
     "context": "Les noyades augmentent lors des étés chauds. La formation de maître-nageur coûte plusieurs milliers d'euros. Les communes paient les piscines et leurs salariés.",
     "real": {
      "date": "Été 2022",
      "place": "Lyon et de nombreuses communes",
      "fact": "En pleine canicule, la ville de Lyon a dû fermer des piscines faute de maîtres-nageurs, une pénurie signalée dans toute la France.",
      "figures": "Une pénurie estimée à plusieurs milliers de maîtres-nageurs au niveau national.",
      "sources": [
       {
        "label": "LyonMag : la Ville de Lyon doit fermer deux piscines",
        "url": "https://www.lyonmag.com/article/145937/en-pleine-canicule-la-ville-de-lyon-doit-fermer-deux-piscines-a-cause-d-une-penurie-de-maitres-nageurs"
       },
       {
        "label": "Maire-info : pénurie de maîtres-nageurs, une problématique chronique",
        "url": "https://www.maire-info.com/sports/penurie-maitres-nageurs-sauveteurs-une-problematique-chronique-pour-les-collectivites-article-26451"
       }
      ]
     },
     "camera": {
      "region": "auvergne_rhone_alpes",
      "x": 66,
      "y": 55,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "canicule",
       "x": 66,
       "y": 53,
       "anim": "appear"
      },
      {
       "obj": "foule",
       "x": 67,
       "y": 56,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "immeuble",
       "x": 65,
       "y": 55,
       "anim": "close",
       "delay": 0.6
      },
      {
       "obj": "etiquette",
       "x": 66,
       "y": 51,
       "anim": "appear",
       "label": "Piscines fermées",
       "delay": 1
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Payer la formation des maîtres-nageurs",
       "label_expert": "Prise en charge publique du diplôme d'État de maître-nageur",
       "plus": "Plus de candidats en quelques mois.",
       "minus": "Une dépense pour l'État et les régions.",
       "budget": -0.02,
       "axes": {
        "eco": -1
       },
       "ind": {
        "emploi": 1
       },
       "budget_note": "Formations financées : le déficit augmente un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "ecole",
         "x": 66,
         "y": 55,
         "anim": "appear"
        },
        {
         "obj": "foule",
         "x": 67,
         "y": 56,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Mieux payer les maîtres-nageurs municipaux",
       "label_expert": "Revalorisation de la grille des éducateurs sportifs territoriaux",
       "plus": "Le métier redevient attractif.",
       "minus": "Les communes doivent trouver l'argent.",
       "budget": -0.02,
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": 1
       },
       "budget_note": "Hausse des salaires publics : le déficit augmente un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 66,
         "y": 55,
         "anim": "rise"
        },
        {
         "obj": "mairie",
         "x": 65,
         "y": 54,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Confier les piscines à des entreprises privées",
       "label_expert": "Délégation de service public des équipements aquatiques",
       "plus": "Des horaires élargis, gérés par des pros.",
       "minus": "Des entrées plus chères pour les familles.",
       "budget": 0.02,
       "axes": {
        "eco": 2
       },
       "ind": {
        "pouvoir_achat": -1
       },
       "budget_note": "Économies de gestion pour les communes : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "commerce",
         "x": 66,
         "y": 55,
         "anim": "appear"
        },
        {
         "obj": "pieces",
         "x": 67,
         "y": 56,
         "anim": "rise"
        }
       ]
      },
      {
       "id": "d",
       "label": "Autoriser des surveillants moins diplômés l'été",
       "label_expert": "Dérogation pour les titulaires du brevet de surveillant de baignade",
       "plus": "Les bassins rouvrent tout de suite.",
       "minus": "La sécurité des baigneurs est moins garantie.",
       "budget": 0.01,
       "axes": {
        "eco": 1,
        "soc": -1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Salaires moins élevés : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "foule",
         "x": 67,
         "y": 56,
         "anim": "appear"
        },
        {
         "obj": "immeuble",
         "x": 65,
         "y": 55,
         "anim": "appear"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "day": 17,
   "season": "ete",
   "title": "Des rails sabotés et des prix qui débordent",
   "mood": "tendu",
   "weather": "soleil",
   "intro": "Des trains à l'arrêt en plein départ en vacances, une île qui proteste contre le prix des courses : l'été se tend.",
   "events": [
    {
     "id": "v28_sabotage_tgv",
     "kind": "majeur",
     "region": "national",
     "sector": "transports",
     "title": "Incendies volontaires sur les lignes à grande vitesse",
     "simple": "Dans la nuit, des câbles brûlent le long de plusieurs lignes de TGV. Des centaines de milliers de voyageurs restent à quai. Comment protéger le réseau ?",
     "expert": "Actes de malveillance coordonnés contre les installations de signalisation de trois lignes à grande vitesse : saturation des circulations, enquête du parquet antiterroriste et question de la protection des infrastructures critiques.",
     "context": "Le réseau ferré compte près de 28 000 km de voies, impossibles à surveiller partout. Protéger les points sensibles coûte cher ; ne rien faire expose à de nouvelles pannes.",
     "real": {
      "date": "26 juillet 2024",
      "place": "Lignes Atlantique, Nord et Est",
      "fact": "Quelques heures avant l'ouverture des Jeux de Paris, des incendies volontaires ont touché des installations de la SNCF sur trois lignes à grande vitesse. Le trafic a été très perturbé tout le week-end.",
      "figures": "Environ 800 000 voyageurs touchés.",
      "sources": [
       {
        "label": "Franceinfo : attaque massive sur le réseau TGV",
        "url": "https://www.franceinfo.fr/economie/transports/sncf/attaque-massive-sur-le-reseau-tgv/"
       },
       {
        "label": "Le Club des juristes : le parquet de Paris saisi de l'enquête",
        "url": "https://www.leclubdesjuristes.com/en-bref/attaque-massive-contre-le-reseau-tgv-sncf-le-parquet-de-paris-saisi-de-lenquete-6727/"
       }
      ]
     },
     "camera": {
      "region": "national",
      "x": 50,
      "y": 32,
      "zoom": 1.3
     },
     "fx": [
      {
       "obj": "tgv",
       "x": 48,
       "y": 30,
       "anim": "shake"
      },
      {
       "obj": "incendie",
       "x": 46,
       "y": 33,
       "anim": "smoke",
       "delay": 0.3
      },
      {
       "obj": "foule",
       "x": 52,
       "y": 26,
       "anim": "appear",
       "delay": 0.6
      },
      {
       "obj": "voiture_police",
       "x": 44,
       "y": 34,
       "anim": "move",
       "to": {
        "x": 46,
        "y": 33
       },
       "delay": 0.9
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Surveiller les lignes avec des drones et des agents",
       "label_expert": "Plan de sûreté des infrastructures ferroviaires critiques (drones, agents)",
       "plus": "Les points sensibles sont gardés.",
       "minus": "Un coût annuel élevé pour la SNCF et l'État.",
       "budget": -0.3,
       "axes": {
        "soc": 1
       },
       "ind": {
        "services": 1,
        "cohesion": 1
       },
       "budget_note": "Agents et équipements : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "voiture_police",
         "x": 46,
         "y": 33,
         "anim": "appear"
        },
        {
         "obj": "antenne",
         "x": 48,
         "y": 31,
         "anim": "grow"
        }
       ]
      },
      {
       "id": "b",
       "label": "Doubler les câbles pour que le réseau tienne seul",
       "label_expert": "Redondance et enfouissement des câbles de signalisation",
       "plus": "Une panne locale ne bloque plus tout.",
       "minus": "Des années de travaux sur les voies.",
       "budget": -0.5,
       "axes": {
        "env": -1
       },
       "ind": {
        "services": 2,
        "emploi": 1
       },
       "budget_note": "Travaux sur le réseau : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 46,
         "y": 33,
         "anim": "grow"
        },
        {
         "obj": "tgv",
         "x": 48,
         "y": 30,
         "anim": "move",
         "to": {
          "x": 44,
          "y": 36
         }
        }
       ]
      },
      {
       "id": "c",
       "label": "Faire payer les réparations par la SNCF, sans aide",
       "label_expert": "Prise en charge des réparations sur le budget propre de l'opérateur",
       "plus": "Pas de dépense nouvelle pour l'État.",
       "minus": "Moins d'argent pour l'entretien ailleurs.",
       "budget": 0.1,
       "axes": {
        "eco": 1
       },
       "ind": {
        "services": -1
       },
       "budget_note": "Pas d'aide publique : le déficit baisse légèrement (estimation du jeu).",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 46,
         "y": 33,
         "anim": "appear"
        },
        {
         "obj": "pieces",
         "x": 50,
         "y": 30,
         "anim": "rise"
        }
       ]
      },
      {
       "id": "d",
       "label": "Alourdir les peines pour atteinte aux réseaux",
       "label_expert": "Aggravation des sanctions pénales pour sabotage d'infrastructures essentielles",
       "plus": "Un message ferme aux auteurs.",
       "minus": "Dissuade peu ceux qui sont décidés.",
       "budget": 0.02,
       "axes": {
        "soc": 2
       },
       "ind": {
        "cohesion": -1
       },
       "budget_note": "Amendes plus lourdes : petite recette, le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "commissariat",
         "x": 52,
         "y": 28,
         "anim": "appear"
        },
        {
         "obj": "prison",
         "x": 54,
         "y": 30,
         "anim": "appear"
        }
       ]
      }
     ]
    },
    {
     "id": "v28_martinique_vie_chere",
     "kind": "majeur",
     "region": "outre_mer",
     "sector": "salaires",
     "title": "Des barrages contre le prix des courses",
     "simple": "Sur une île des Antilles, la nourriture coûte bien plus cher qu'en métropole. Des habitants bloquent les routes depuis des semaines. Que faire ?",
     "expert": "Mobilisation contre la vie chère : écart de prix alimentaires d'environ 40 % avec l'Hexagone, protocole négocié sur l'octroi de mer, la TVA et les marges de la distribution.",
     "context": "Les produits arrivent par bateau, paient des taxes locales et passent par peu de distributeurs. Baisser les taxes réduit les recettes des collectivités ; encadrer les marges touche les entreprises.",
     "real": {
      "date": "Septembre à octobre 2024 (protocole signé le 16 octobre)",
      "place": "Martinique",
      "fact": "Un mouvement contre la vie chère a bloqué l'île pendant plusieurs semaines. L'État, la collectivité et la grande distribution ont signé un protocole visant à baisser les prix de milliers de produits alimentaires.",
      "figures": "Objectif : baisse moyenne de 20 % sur environ 6 000 produits.",
      "sources": [
       {
        "label": "LSA : la grande distribution signe un accord pour baisser les prix de 20 %",
        "url": "https://www.lsa-conso.fr/martinique-la-grande-distribution-signe-un-accord-visant-a-baisser-les-prix-de-l-alimentaire-de-20,457711"
       },
       {
        "label": "Le Club des juristes : vers une sortie de crise pour la Martinique ?",
        "url": "https://www.leclubdesjuristes.com/en-bref/vers-une-sortie-de-crise-pour-la-martinique-7352/"
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
       "obj": "supermarche",
       "x": 8,
       "y": 89,
       "anim": "pulse"
      },
      {
       "obj": "manifestants",
       "x": 6,
       "y": 91,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "pieces",
       "x": 8,
       "y": 88,
       "anim": "rise",
       "delay": 0.6
      }
     ],
     "recall": [
      {
       "event": "v22_bouclier",
       "choice": "a",
       "text": "Pendant la flambée de l'énergie, vous aviez plafonné les prix pour tous : les habitants demandent le même traitement pour l'alimentation."
      },
      {
       "event": "v22_bouclier",
       "choice": "b",
       "text": "Pendant la flambée de l'énergie, vous aviez aidé les ménages modestes : ils réclament une aide ciblée sur les courses."
      },
      {
       "event": "v22_bouclier",
       "choice": "c",
       "text": "Pendant la flambée de l'énergie, vous aviez misé sur la sobriété : ici, on ne peut pas moins manger."
      },
      {
       "event": "v22_bouclier",
       "choice": "d",
       "text": "Pendant la flambée de l'énergie, vous aviez taxé les profits exceptionnels : les manifestants veulent la même chose pour la distribution."
      },
      {
       "event": "v22_bouclier",
       "choice": "e",
       "text": "Pendant la flambée de l'énergie, vous aviez sorti les prix du marché européen : l'idée d'un prix fixé par l'État revient."
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Supprimer la TVA sur les produits de base",
       "label_expert": "Exonération de TVA et compensation de l'octroi de mer",
       "plus": "Une baisse visible dans les rayons.",
       "minus": "Une perte de recettes chaque année.",
       "budget": -0.15,
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": 2,
        "cohesion": 1
       },
       "budget_note": "Moins de taxes perçues : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "supermarche",
         "x": 8,
         "y": 89,
         "anim": "appear"
        },
        {
         "obj": "pieces",
         "x": 7,
         "y": 88,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "b",
       "label": "Encadrer les marges de la grande distribution",
       "label_expert": "Plafonnement réglementaire des marges et contrôle par l'observatoire des prix",
       "plus": "Les prix baissent sans argent public.",
       "minus": "Des distributeurs menacent de réduire l'offre.",
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
         "obj": "supermarche",
         "x": 8,
         "y": 89,
         "anim": "close"
        },
        {
         "obj": "mairie",
         "x": 6,
         "y": 90,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Ouvrir le marché à de nouveaux distributeurs",
       "label_expert": "Réforme de la concurrence (lutte contre les exclusivités d'importation)",
       "plus": "Plus de concurrence, des prix qui baissent.",
       "minus": "Des effets lents, des emplois locaux fragilisés.",
       "budget": 0.05,
       "axes": {
        "eco": 2
       },
       "ind": {
        "pouvoir_achat": 1,
        "emploi": -1
       },
       "budget_note": "Moins d'aides à verser à terme : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "cargo",
         "x": 3,
         "y": 93,
         "anim": "move",
         "to": {
          "x": 5,
          "y": 91
         }
        },
        {
         "obj": "commerce",
         "x": 8,
         "y": 90,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Aider la production agricole locale",
       "label_expert": "Soutien aux filières agricoles locales pour réduire les importations",
       "plus": "Moins de dépendance aux bateaux.",
       "minus": "Coûteux et lent à produire ses effets.",
       "budget": -0.08,
       "axes": {
        "eu": 1,
        "env": -1
       },
       "ind": {
        "souverainete": 1,
        "emploi": 1
       },
       "budget_note": "Subventions agricoles : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "champ",
         "x": 6,
         "y": 89,
         "anim": "grow"
        },
        {
         "obj": "ferme",
         "x": 7,
         "y": 91,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Rétablir l'ordre et lever les barrages",
       "label_expert": "Opérations de maintien de l'ordre et couvre-feu ciblé",
       "plus": "Les routes et les magasins rouvrent.",
       "minus": "La colère reste sans réponse sur les prix.",
       "budget": 0.02,
       "axes": {
        "soc": 2
       },
       "ind": {
        "cohesion": -2
       },
       "budget_note": "Fin du blocage de l'économie : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "voiture_police",
         "x": 6,
         "y": 91,
         "anim": "appear"
        },
        {
         "obj": "manifestants",
         "x": 6,
         "y": 91,
         "anim": "fade"
        }
       ]
      }
     ]
    },
    {
     "id": "v28_france_travail_cyber",
     "kind": "banal",
     "region": "ile_de_france",
     "sector": "numerique",
     "title": "Les données de millions de demandeurs d'emploi volées",
     "simple": "Des pirates ont copié les noms, adresses et numéros de sécurité sociale de millions d'inscrits à l'agence pour l'emploi. Comment réagir ?",
     "expert": "Exfiltration de données personnelles d'un système d'information public via des comptes de conseillers usurpés : notification à la CNIL, plainte et renforcement de l'authentification.",
     "context": "Les services publics conservent beaucoup de données. Les protéger coûte de l'argent et du temps ; une fuite expose les personnes aux arnaques.",
     "real": {
      "date": "13 mars 2024",
      "place": "France Travail, Paris",
      "fact": "France Travail a annoncé une cyberattaque ayant exposé les données de personnes inscrites sur vingt ans. La CNIL a ouvert une enquête.",
      "figures": "Jusqu'à 43 millions de personnes potentiellement concernées.",
      "sources": [
       {
        "label": "CNIL : enquête sur la fuite de données de France Travail",
        "url": "https://www.cnil.fr/fr/france-travail-la-cnil-enquete-sur-la-fuite-de-donnees-et-donne-des-conseils-pour-se-proteger"
       },
       {
        "label": "France Travail : communiqué sur la cyberattaque",
        "url": "https://www.francetravail.org/accueil/communiques/2024/france-travail-et-cap-emploi-victimes-dune-cyberattaque.html?type=article"
       }
      ]
     },
     "camera": {
      "region": "ile_de_france",
      "x": 52,
      "y": 24,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "cyberattaque",
       "x": 52,
       "y": 24,
       "anim": "pulse"
      },
      {
       "obj": "immeuble",
       "x": 53,
       "y": 25,
       "anim": "shake",
       "delay": 0.3
      },
      {
       "obj": "antenne",
       "x": 50,
       "y": 23,
       "anim": "appear",
       "delay": 0.6
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Créer une agence de cybersécurité pour les services publics",
       "label_expert": "Renforcement des moyens de l'ANSSI et équipes dédiées aux administrations",
       "plus": "Des systèmes mieux protégés partout.",
       "minus": "Des centaines de recrutements à payer.",
       "budget": -0.2,
       "axes": {
        "soc": 1
       },
       "ind": {
        "services": 1,
        "souverainete": 1
       },
       "budget_note": "Recrutements d'experts : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "satellite",
         "x": 52,
         "y": 22,
         "anim": "appear"
        },
        {
         "obj": "immeuble",
         "x": 53,
         "y": 25,
         "anim": "grow"
        }
       ]
      },
      {
       "id": "b",
       "label": "Obliger la double authentification et limiter les accès",
       "label_expert": "Authentification forte obligatoire et cloisonnement des accès des agents",
       "plus": "Rapide à mettre en place, peu coûteux.",
       "minus": "Les agents perdent du temps chaque jour.",
       "budget": 0,
       "axes": {
        "soc": 1
       },
       "ind": {
        "services": -1
       },
       "fx": [
        {
         "obj": "antenne",
         "x": 50,
         "y": 23,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Garder moins de données et effacer les anciennes",
       "label_expert": "Minimisation des données et durée de conservation réduite",
       "plus": "Beaucoup moins de données à voler.",
       "minus": "Moins d'historique pour les dossiers.",
       "budget": 0.01,
       "axes": {
        "soc": -1
       },
       "ind": {
        "services": -1
       },
       "budget_note": "Moins de stockage : le déficit baisse à peine (estimation du jeu).",
       "fx": [
        {
         "obj": "cyberattaque",
         "x": 52,
         "y": 24,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "d",
       "label": "Sanctionner les prestataires informatiques fautifs",
       "label_expert": "Pénalités contractuelles et exclusion des marchés publics",
       "plus": "L'argent des pénalités revient à l'État.",
       "minus": "Moins de candidats aux marchés.",
       "budget": 0.03,
       "axes": {
        "eco": 1
       },
       "ind": {
        "emploi": -1
       },
       "budget_note": "Pénalités encaissées : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 52,
         "y": 24,
         "anim": "rise"
        }
       ]
      }
     ]
    }
   ],
   "offer": [
    "report_age_65",
    "referendum_immigration",
    "lutte_fraude",
    "regularisation_metiers_tension",
    "taxe_billets_premium",
    "sortie_otan"
   ]
  },
  {
   "day": 18,
   "season": "automne",
   "title": "Crues, hauts-fourneaux et pesticides",
   "mood": "tendu",
   "weather": "pluie",
   "intro": "Une ville de l'Ouest sous l'eau, une aciérie qui réduit ses effectifs, une loi agricole contestée : la semaine est chargée.",
   "events": [
    {
     "id": "v28_rennes_crue",
     "kind": "majeur",
     "region": "bretagne",
     "sector": "logement",
     "title": "Une ville de l'Ouest les pieds dans l'eau",
     "simple": "Après plusieurs tempêtes, la rivière déborde au cœur d'une grande ville bretonne. Des centaines d'habitants sont évacués. Comment se protéger ?",
     "expert": "Crue d'une ampleur inédite depuis quarante ans après trois dépressions successives : vigilance rouge crues, évacuations, question des zones d'expansion des crues et de l'urbanisation en zone inondable.",
     "context": "Les sols gorgés d'eau ne retiennent plus la pluie. Laisser des champs s'inonder protège les villes mais coûte aux agriculteurs ; construire des digues coûte cher et ne suffit pas toujours.",
     "real": {
      "date": "26 au 29 janvier 2025",
      "place": "Rennes et Redon, Ille-et-Vilaine",
      "fact": "Après la tempête Herminia et d'autres dépressions, l'Ille-et-Vilaine a été placée en vigilance rouge crues. Des quartiers de Rennes ont été inondés.",
      "figures": "Environ 600 personnes évacuées en Ille-et-Vilaine.",
      "sources": [
       {
        "label": "Reporterre : à Rennes inondée, « on a peur pour la suite »",
        "url": "https://reporterre.net/A-Rennes-inondee-on-a-peur-pour-la-suite"
       },
       {
        "label": "Maire info : la vigilance rouge s'étend au Morbihan et à la Loire-Atlantique",
        "url": "https://www.maire-info.com/imprimer2.php?param=29336"
       }
      ]
     },
     "camera": {
      "region": "bretagne",
      "x": 22,
      "y": 31,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "inondation",
       "x": 22,
       "y": 31,
       "anim": "appear"
      },
      {
       "obj": "maison",
       "x": 23,
       "y": 32,
       "anim": "shake",
       "delay": 0.3
      },
      {
       "obj": "orage",
       "x": 20,
       "y": 29,
       "anim": "pulse",
       "delay": 0.5
      },
      {
       "obj": "ambulance",
       "x": 25,
       "y": 31,
       "anim": "move",
       "to": {
        "x": 22,
        "y": 31
       },
       "delay": 0.8
      }
     ],
     "recall": [
      {
       "event": "v25_lothar",
       "choice": "a",
       "text": "Il y a quelques semaines, dans le Nord, vous aviez racheté les maisons trop exposées : la méthode est connue, les familles d'ici la demandent."
      },
      {
       "event": "v25_lothar",
       "choice": "b",
       "text": "Il y a quelques semaines, dans le Nord, vous aviez envoyé l'armée et des pompes : les mêmes équipes repartent vers l'Ouest."
      },
      {
       "event": "v25_lothar",
       "choice": "c",
       "text": "Il y a quelques semaines, dans le Nord, vous aviez aidé les communes à curer les canaux : cette fois, la rivière déborde en pleine ville."
      },
      {
       "event": "v25_lothar",
       "choice": "d",
       "text": "Il y a quelques semaines, dans le Nord, vous aviez relevé la surprime d'assurance : le fonds a de quoi payer."
      },
      {
       "event": "v25_lothar",
       "choice": "e",
       "text": "Il y a quelques semaines, dans le Nord, vous aviez indemnisé chaque foyer inondé : les sinistrés d'ici attendent la même chose."
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Laisser des champs en amont servir de zones d'inondation",
       "label_expert": "Zones d'expansion des crues indemnisées en amont",
       "plus": "Les villes sont mieux protégées.",
       "minus": "Des agriculteurs perdent des récoltes.",
       "budget": -0.1,
       "axes": {
        "env": -1
       },
       "ind": {
        "cohesion": 1,
        "emploi": -1
       },
       "budget_note": "Indemnités aux agriculteurs : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "champ",
         "x": 18,
         "y": 30,
         "anim": "appear"
        },
        {
         "obj": "inondation",
         "x": 18,
         "y": 30,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Construire des digues et des bassins de retenue",
       "label_expert": "Programme d'ouvrages hydrauliques de protection",
       "plus": "Une protection solide des quartiers.",
       "minus": "Cher, et inutile si l'eau monte plus haut.",
       "budget": -0.3,
       "axes": {
        "env": 1
       },
       "ind": {
        "services": 1,
        "emploi": 1
       },
       "budget_note": "Travaux publics : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "barrage",
         "x": 20,
         "y": 30,
         "anim": "grow"
        },
        {
         "obj": "chantier_grue",
         "x": 21,
         "y": 31,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Interdire de construire en zone inondable",
       "label_expert": "Gel des permis de construire dans les zones d'aléa fort",
       "plus": "Moins de sinistrés lors des prochaines crues.",
       "minus": "Moins de logements neufs, des terrains perdus.",
       "budget": 0.02,
       "axes": {
        "soc": 1
       },
       "ind": {
        "pouvoir_achat": -1
       },
       "budget_note": "Moins d'indemnisations futures : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 23,
         "y": 32,
         "anim": "fade"
        },
        {
         "obj": "mairie",
         "x": 24,
         "y": 31,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Laisser les assureurs indemniser seuls",
       "label_expert": "Indemnisation par le régime catastrophes naturelles, sans fonds d'État",
       "plus": "Pas de dépense publique supplémentaire.",
       "minus": "Des franchises lourdes pour les sinistrés.",
       "budget": 0.05,
       "axes": {
        "eco": 1
       },
       "ind": {
        "pouvoir_achat": -1,
        "cohesion": -1
       },
       "budget_note": "Pas d'aide d'État : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "maison",
         "x": 23,
         "y": 32,
         "anim": "appear"
        },
        {
         "obj": "pieces",
         "x": 22,
         "y": 30,
         "anim": "rise"
        }
       ]
      },
      {
       "id": "e",
       "label": "Relever la taxe locale contre les inondations",
       "label_expert": "Hausse du plafond de la taxe GEMAPI des intercommunalités",
       "plus": "Une recette dédiée à la prévention.",
       "minus": "Une taxe de plus pour les habitants.",
       "budget": 0.05,
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": -1,
        "services": 1
       },
       "budget_note": "Recette de la taxe : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 22,
         "y": 31,
         "anim": "rise"
        },
        {
         "obj": "mairie",
         "x": 24,
         "y": 31,
         "anim": "appear"
        }
       ]
      }
     ]
    },
    {
     "id": "v28_arcelor_dunkerque",
     "kind": "majeur",
     "region": "hauts_de_france",
     "sector": "salaires",
     "title": "L'aciérie du Nord annonce des centaines de suppressions de postes",
     "simple": "Un géant de l'acier veut supprimer environ 600 emplois dans ses usines du Nord. Il dit que l'acier importé, moins cher, le met en danger. Que faire ?",
     "expert": "Plan de réduction d'effectifs d'un sidérurgiste dans un contexte de surcapacités mondiales et de décarbonation reportée : débat sur la nationalisation, les mesures de sauvegarde commerciales et les aides publiques conditionnées.",
     "context": "L'acier est utile pour l'armée, l'industrie et l'énergie. Le produire en France coûte plus cher qu'ailleurs ; le perdre crée une dépendance.",
     "real": {
      "date": "23 avril 2025",
      "place": "Dunkerque, Nord, et six autres sites",
      "fact": "ArcelorMittal a annoncé un projet de suppression d'environ 600 postes dans sept sites français, dont Dunkerque. Des élus ont demandé une nationalisation, d'autres une protection commerciale européenne.",
      "figures": "Environ 600 postes concernés sur 7 sites.",
      "sources": [
       {
        "label": "Banque des territoires : 600 postes supprimés chez ArcelorMittal",
        "url": "https://www.banquedesterritoires.fr/suppressions-de-600-postes-chez-arcelormittal-les-elus-expriment-leur-desarroi"
       },
       {
        "label": "Le Journal des entreprises : environ 600 emplois dans 7 usines",
        "url": "https://www.lejournaldesentreprises.com/article/arcelormittal-projette-de-supprimer-environ-600-emplois-dans-7-usines-francaises-2118302"
       }
      ]
     },
     "camera": {
      "region": "hauts_de_france",
      "x": 53,
      "y": 7,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "usine",
       "x": 53,
       "y": 8,
       "anim": "smoke"
      },
      {
       "obj": "manifestants",
       "x": 55,
       "y": 9,
       "anim": "appear",
       "delay": 0.4
      },
      {
       "obj": "cargo",
       "x": 38,
       "y": 7,
       "anim": "move",
       "to": {
        "x": 40,
        "y": 8
       },
       "delay": 0.7
      }
     ],
     "recall": [
      {
       "event": "v22_florange",
       "choice": "a",
       "text": "À Florange, vous aviez nationalisé l'usine le temps d'un repreneur : les salariés du Nord demandent la même chose."
      },
      {
       "event": "v22_florange",
       "choice": "b",
       "text": "À Florange, vous aviez obtenu un accord sans licenciement : le groupe refuse cette fois de s'y engager."
      },
      {
       "event": "v22_florange",
       "choice": "c",
       "text": "À Florange, vous aviez défendu une taxe carbone sur l'acier importé : elle commence à être discutée à Bruxelles."
      },
      {
       "event": "v22_florange",
       "choice": "d",
       "text": "À Florange, vous aviez laissé fermer et aidé la reconversion : le bassin d'emploi du Nord craint le même sort."
      },
      {
       "event": "v22_florange",
       "choice": "e",
       "text": "À Florange, vous aviez exigé le remboursement des aides : le groupe hésite à demander de nouvelles aides."
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Nationaliser temporairement les usines",
       "label_expert": "Prise de participation majoritaire temporaire de l'État",
       "plus": "L'acier et les emplois restent en France.",
       "minus": "Des milliards à mettre sur la table.",
       "budget": -1,
       "axes": {
        "eco": -2,
        "eu": 1
       },
       "ind": {
        "emploi": 2,
        "souverainete": 2
       },
       "budget_note": "Rachat et investissements : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "usine",
         "x": 53,
         "y": 8,
         "anim": "grow"
        },
        {
         "obj": "mairie",
         "x": 56,
         "y": 9,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Demander à l'Europe des quotas sur l'acier importé",
       "label_expert": "Renforcement des mesures de sauvegarde européennes sur l'acier",
       "plus": "L'acier européen est protégé des importations.",
       "minus": "L'acier coûte plus cher à l'industrie.",
       "budget": 0.05,
       "axes": {
        "eu": -1
       },
       "ind": {
        "emploi": 1,
        "pouvoir_achat": -1
       },
       "budget_note": "Droits de douane perçus : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "cargo",
         "x": 38,
         "y": 7,
         "anim": "fade"
        },
        {
         "obj": "port",
         "x": 52,
         "y": 7,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Aider à investir dans un acier moins polluant",
       "label_expert": "Subventions conditionnées à la décarbonation (fours électriques)",
       "plus": "Une usine modernisée et moins polluante.",
       "minus": "De l'argent public sans garantie de maintien.",
       "budget": -0.4,
       "axes": {
        "env": -1
       },
       "ind": {
        "co2": -2,
        "emploi": 1
       },
       "budget_note": "Subvention industrielle : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "usine",
         "x": 53,
         "y": 8,
         "anim": "grow"
        },
        {
         "obj": "pylone",
         "x": 55,
         "y": 8,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Laisser l'entreprise décider et financer la reconversion",
       "label_expert": "Accompagnement par contrats de sécurisation professionnelle, sans intervention au capital",
       "plus": "Pas d'argent public dans une usine en difficulté.",
       "minus": "Des familles et une ville fragilisées.",
       "budget": 0.2,
       "axes": {
        "eco": 2
       },
       "ind": {
        "emploi": -2,
        "cohesion": -1
       },
       "budget_note": "Pas d'aide à l'entreprise : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "usine",
         "x": 53,
         "y": 8,
         "anim": "close"
        },
        {
         "obj": "ecole",
         "x": 56,
         "y": 9,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Exiger le remboursement des aides publiques reçues",
       "label_expert": "Clause de remboursement des aides en cas de suppressions d'emplois",
       "plus": "L'argent public revient à l'État.",
       "minus": "Le groupe peut quitter la France plus vite.",
       "budget": 0.05,
       "axes": {
        "eco": -1
       },
       "ind": {
        "emploi": -1
       },
       "budget_note": "Aides remboursées : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 53,
         "y": 8,
         "anim": "rise"
        }
       ]
      }
     ]
    },
    {
     "id": "v28_loi_pesticide",
     "kind": "banal",
     "region": "national",
     "sector": "agriculture",
     "title": "Une loi agricole rouvre la porte à un pesticide interdit",
     "simple": "Une loi veut autoriser de nouveau un insecticide interdit en France mais permis ailleurs en Europe. Une pétition réunit deux millions de signatures. Que décider ?",
     "expert": "Loi de simplification agricole prévoyant la réintroduction par dérogation d'un néonicotinoïde (acétamipride) ; pétition citoyenne record et saisine du Conseil constitutionnel.",
     "context": "Certains producteurs disent ne pas avoir d'autre solution contre les ravageurs et subir la concurrence des pays voisins. Des scientifiques et apiculteurs alertent sur les effets pour les abeilles et la santé.",
     "real": {
      "date": "8 juillet 2025 (adoption) ; 7 août 2025 (décision du Conseil constitutionnel)",
      "place": "Parlement, Paris",
      "fact": "La loi agricole dite « Duplomb » a été adoptée. Une pétition contre elle a dépassé deux millions de signatures. Le Conseil constitutionnel a censuré la réintroduction de l'acétamipride.",
      "figures": "Plus de 2 millions de signatures sur le site de l'Assemblée.",
      "sources": [
       {
        "label": "LCP : la pétition dépasse les deux millions de signatures",
        "url": "https://lcp.fr/actualites/loi-duplomb-la-petition-depasse-les-deux-millions-de-signatures-391460"
       },
       {
        "label": "Terre-net : la simplification validée, l'acétamipride censuré",
        "url": "https://www.terre-net.fr/reglementation/article/886171/la-decision-du-conseil-constitutionnel-sur-la-loi-duplomb"
       }
      ]
     },
     "camera": {
      "region": "national",
      "x": 50,
      "y": 40,
      "zoom": 1.3
     },
     "fx": [
      {
       "obj": "champ",
       "x": 46,
       "y": 40,
       "anim": "appear"
      },
      {
       "obj": "tracteur",
       "x": 47,
       "y": 41,
       "anim": "move",
       "to": {
        "x": 45,
        "y": 39
       },
       "delay": 0.3
      },
      {
       "obj": "parlement",
       "x": 52,
       "y": 24,
       "anim": "pulse",
       "delay": 0.6
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Autoriser le pesticide sous conditions strictes",
       "label_expert": "Dérogation encadrée et temporaire pour certaines filières",
       "plus": "Les producteurs restent compétitifs.",
       "minus": "Des inquiétudes pour la santé et les abeilles.",
       "budget": 0.03,
       "axes": {
        "env": 2,
        "eu": -1
       },
       "ind": {
        "emploi": 1,
        "co2": 1
       },
       "budget_note": "Récoltes préservées, moins d'aides : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "tracteur",
         "x": 46,
         "y": 40,
         "anim": "appear"
        },
        {
         "obj": "champ",
         "x": 46,
         "y": 40,
         "anim": "grow"
        }
       ]
      },
      {
       "id": "b",
       "label": "Maintenir l'interdiction et aider à trouver d'autres solutions",
       "label_expert": "Interdiction maintenue et plan de recherche sur les alternatives",
       "plus": "Santé et biodiversité protégées.",
       "minus": "Des pertes de récoltes à compenser.",
       "budget": -0.1,
       "axes": {
        "env": -2
       },
       "ind": {
        "emploi": -1,
        "co2": -1
       },
       "budget_note": "Aides et recherche : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "champ",
         "x": 46,
         "y": 40,
         "anim": "grow"
        },
        {
         "obj": "ferme",
         "x": 48,
         "y": 41,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Interdire les produits importés traités avec ce pesticide",
       "label_expert": "Clause miroir sur les importations alimentaires",
       "plus": "Une concurrence plus juste pour les producteurs.",
       "minus": "Des prix plus élevés et des tensions commerciales.",
       "budget": 0.01,
       "axes": {
        "eu": 1
       },
       "ind": {
        "souverainete": 1,
        "pouvoir_achat": -1
       },
       "budget_note": "Redevances de contrôle : le déficit baisse à peine (estimation du jeu).",
       "fx": [
        {
         "obj": "camion",
         "x": 60,
         "y": 30,
         "anim": "fade"
        },
        {
         "obj": "entrepot",
         "x": 58,
         "y": 32,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Indemniser les producteurs sans changer la loi",
       "label_expert": "Fonds d'indemnisation des pertes liées aux ravageurs",
       "plus": "Un soutien rapide aux exploitations.",
       "minus": "Une dépense qui revient chaque année.",
       "budget": -0.15,
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": 1
       },
       "budget_note": "Indemnités versées : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 46,
         "y": 40,
         "anim": "rise"
        },
        {
         "obj": "ferme",
         "x": 48,
         "y": 41,
         "anim": "appear"
        }
       ]
      }
     ]
    }
   ],
   "offer": [
    "contribution_ue",
    "renovation_massive",
    "smic_hausse",
    "baisse_cotisations_net",
    "fusion_agences",
    "surtaxe_grandes_entreprises"
   ]
  },
  {
   "day": 19,
   "season": "automne",
   "title": "Un réacteur s'allume, une frontière se ferme",
   "mood": "calme",
   "weather": "vent",
   "intro": "Un nouveau réacteur produit ses premiers kilowattheures, le voisin allemand contrôle ses frontières, une métropole révise ses règles de circulation.",
   "events": [
    {
     "id": "v28_epr_flamanville",
     "kind": "majeur",
     "region": "normandie",
     "sector": "energie",
     "title": "Le nouveau réacteur normand est enfin raccordé",
     "simple": "Après dix-sept ans de chantier et un coût multiplié, le nouveau réacteur de la Manche envoie son premier courant sur le réseau. Faut-il en construire d'autres ?",
     "expert": "Couplage au réseau du réacteur EPR de Flamanville 3 avec douze ans de retard ; la Cour des comptes réévalue son coût et s'interroge sur la rentabilité du programme EPR2.",
     "context": "Le nucléaire produit environ deux tiers de l'électricité française, avec peu de CO2. Les nouveaux chantiers coûtent des dizaines de milliards et prennent plus de dix ans ; les renouvelables sont plus rapides mais intermittentes.",
     "real": {
      "date": "21 décembre 2024",
      "place": "Flamanville, Manche",
      "fact": "L'EPR de Flamanville a été raccordé au réseau électrique, une première en France depuis 25 ans, après dix-sept ans de chantier.",
      "figures": "Coût de construction réévalué à environ 23,7 Md€ par la Cour des comptes.",
      "sources": [
       {
        "label": "EDF : le réacteur produit ses premiers électrons",
        "url": "https://www.edf.fr/groupe-edf/espaces-dedies/journalistes/tous-les-communiques-de-presse/point-d-actualite-sur-l-epr-de-flamanville-le-reacteur-produit-ses-premiers-electrons-sur-le-reseau-electrique-national"
       },
       {
        "label": "Connaissance des énergies : la Cour des comptes recalcule le coût de Flamanville 3",
        "url": "https://www.connaissancedesenergies.org/afp/programme-depr-la-cour-des-comptes-publie-un-rapport-critique-et-recalcule-le-cout-de-flamanville-3-250114"
       }
      ]
     },
     "camera": {
      "region": "normandie",
      "x": 31,
      "y": 16,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "centrale_nucleaire",
       "x": 31,
       "y": 16,
       "anim": "pulse"
      },
      {
       "obj": "pylone",
       "x": 33,
       "y": 17,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "chantier_grue",
       "x": 32,
       "y": 15,
       "anim": "fade",
       "delay": 0.6
      }
     ],
     "recall": [
      {
       "event": "v22_fukushima",
       "choice": "a",
       "text": "Après l'accident au Japon, vous aviez renforcé la sûreté : le nouveau réacteur intègre ces exigences."
      },
      {
       "event": "v22_fukushima",
       "choice": "b",
       "text": "Après l'accident au Japon, vous aviez fermé les plus vieux réacteurs : ce nouveau réacteur compense en partie."
      },
      {
       "event": "v22_fukushima",
       "choice": "c",
       "text": "Après l'accident au Japon, vous aviez visé moitié moins de nucléaire : ce réacteur relance le débat."
      },
      {
       "event": "v22_fukushima",
       "choice": "d",
       "text": "Après l'accident au Japon, vous aviez prolongé les réacteurs : ce nouveau venu s'ajoute au parc existant."
      },
      {
       "event": "v22_fukushima",
       "choice": "e",
       "text": "Après l'accident au Japon, vous aviez choisi de nouveaux réacteurs : le premier est enfin en service."
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Lancer six nouveaux réacteurs",
       "label_expert": "Programme EPR2 de six réacteurs avec prêt bonifié de l'État",
       "plus": "Une électricité stable et peu carbonée pour longtemps.",
       "minus": "Des dizaines de milliards, des retards possibles.",
       "budget": -1.5,
       "axes": {
        "env": -1,
        "eu": 1
       },
       "ind": {
        "co2": -2,
        "souverainete": 2,
        "emploi": 2
       },
       "budget_note": "EPR2 estimé à environ 73 Md€ par EDF : le déficit augmente (prêts et garanties).",
       "fx": [
        {
         "obj": "centrale_nucleaire",
         "x": 33,
         "y": 20,
         "anim": "grow"
        },
        {
         "obj": "chantier_grue",
         "x": 34,
         "y": 20,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Miser sur l'éolien en mer et le solaire",
       "label_expert": "Appels d'offres renouvelables accélérés et stockage",
       "plus": "Plus rapide à construire et à raccorder.",
       "minus": "Une production qui dépend du vent et du soleil.",
       "budget": -0.6,
       "axes": {
        "env": -2
       },
       "ind": {
        "co2": -2,
        "emploi": 1
       },
       "budget_note": "Soutien aux renouvelables : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "eolienne_mer",
         "x": 30,
         "y": 9,
         "anim": "grow"
        },
        {
         "obj": "panneaux_solaires",
         "x": 35,
         "y": 19,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Vendre l'électricité plus cher aux gros consommateurs",
       "label_expert": "Contrat de long terme à prix élevé pour l'industrie électro-intensive",
       "plus": "EDF rembourse plus vite sa dette.",
       "minus": "L'industrie paie plus cher son énergie.",
       "budget": 0.4,
       "axes": {
        "eco": 1
       },
       "ind": {
        "emploi": -1
       },
       "budget_note": "Recettes d'EDF et dividendes : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "usine",
         "x": 36,
         "y": 19,
         "anim": "pulse"
        },
        {
         "obj": "pieces",
         "x": 31,
         "y": 16,
         "anim": "rise"
        }
       ]
      },
      {
       "id": "d",
       "label": "Faire une pause et auditer le chantier avant tout",
       "label_expert": "Moratoire sur les nouveaux projets et audit indépendant",
       "plus": "Pas de nouvelle dépense sans garantie.",
       "minus": "Des compétences risquent de se perdre.",
       "budget": 0.3,
       "axes": {
        "eco": 1
       },
       "ind": {
        "emploi": -1,
        "souverainete": -1
       },
       "budget_note": "Investissements reportés : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 32,
         "y": 15,
         "anim": "close"
        },
        {
         "obj": "mairie",
         "x": 33,
         "y": 17,
         "anim": "appear"
        }
       ]
      }
     ]
    },
    {
     "id": "v28_controles_allemagne",
     "kind": "majeur",
     "region": "allemagne",
     "sector": "immigration",
     "title": "Le voisin allemand contrôle toutes ses frontières",
     "simple": "L'Allemagne rétablit des contrôles à toutes ses frontières, y compris avec la France, pour limiter l'immigration irrégulière. Que fait la France ?",
     "expert": "Réintroduction temporaire des contrôles aux frontières intérieures de l'espace Schengen par l'Allemagne (article 25 du code frontières Schengen) : effets sur les travailleurs frontaliers et sur les refoulements.",
     "context": "Chaque jour, des dizaines de milliers de frontaliers traversent le Rhin. Des contrôles rassurent une partie des habitants mais ralentissent le travail, le commerce et les camions.",
     "real": {
      "date": "16 septembre 2024",
      "place": "Frontières de l'Allemagne, dont le Rhin",
      "fact": "L'Allemagne a étendu des contrôles temporaires à toutes ses frontières terrestres, y compris avec la France, pour au moins six mois, puis les a prolongés.",
      "figures": "Neuf pays voisins concernés.",
      "sources": [
       {
        "label": "Euronews : l'Allemagne va renforcer les contrôles de toutes ses frontières",
        "url": "https://fr.euronews.com/2024/09/10/lallemagne-va-renforcer-les-controles-de-toutes-ses-frontieres"
       },
       {
        "label": "Le Club des juristes : rétablissement des contrôles aux frontières de l'Allemagne",
        "url": "https://www.leclubdesjuristes.com/international/retablissement-des-controles-aux-frontieres-de-lallemagne-quel-avenir-pour-la-politique-migratoire-commune-en-europe-7082/"
       }
      ]
     },
     "camera": {
      "region": "allemagne",
      "x": 84,
      "y": 22,
      "zoom": 1.3
     },
     "fx": [
      {
       "obj": "voiture_police",
       "x": 83,
       "y": 23,
       "anim": "appear"
      },
      {
       "obj": "camion",
       "x": 80,
       "y": 24,
       "anim": "move",
       "to": {
        "x": 83,
        "y": 23
       },
       "delay": 0.3
      },
      {
       "obj": "foule",
       "x": 82,
       "y": 24,
       "anim": "appear",
       "delay": 0.6
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Rétablir aussi nos contrôles aux frontières",
       "label_expert": "Contrôles réciproques aux frontières intérieures",
       "plus": "Une réponse ferme et visible aux frontières.",
       "minus": "Des bouchons et des coûts pour les frontaliers.",
       "budget": -0.15,
       "axes": {
        "eu": 2,
        "soc": 1
       },
       "ind": {
        "souverainete": 1,
        "emploi": -1
       },
       "budget_note": "Policiers supplémentaires : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "voiture_police",
         "x": 79,
         "y": 24,
         "anim": "appear"
        },
        {
         "obj": "commissariat",
         "x": 78,
         "y": 23,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Négocier des patrouilles communes franco-allemandes",
       "label_expert": "Brigades mixtes et coopération policière renforcée",
       "plus": "Moins de bouchons, une action concertée.",
       "minus": "Moins visible pour les habitants.",
       "budget": 0,
       "axes": {
        "eu": -1
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Patrouilles financées par le fonds européen pour la sécurité intérieure : pas d'effet sur le déficit (estimation du jeu).",
       "fx": [
        {
         "obj": "voiture_police",
         "x": 82,
         "y": 23,
         "anim": "move",
         "to": {
          "x": 80,
          "y": 23
         }
        },
        {
         "obj": "voiture_police",
         "x": 81,
         "y": 24,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Pousser l'Europe à renforcer ses frontières extérieures",
       "label_expert": "Accélération du pacte asile et migration et des moyens de Frontex",
       "plus": "Les contrôles internes pourraient s'arrêter.",
       "minus": "Des résultats lents, une facture européenne.",
       "budget": 0,
       "axes": {
        "eu": -2
       },
       "ind": {
        "souverainete": -1
       },
       "fx": [
        {
         "obj": "parlement",
         "x": 63,
         "y": 4,
         "anim": "pulse"
        }
       ]
      },
      {
       "id": "d",
       "label": "Accepter les contrôles et aider les frontaliers",
       "label_expert": "Indemnisation des retards et facilités pour les travailleurs frontaliers",
       "plus": "Les relations avec le voisin restent bonnes.",
       "minus": "Une dépense pour un problème venu d'ailleurs.",
       "budget": -0.02,
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": 1
       },
       "budget_note": "Aides aux frontaliers : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "bus",
         "x": 80,
         "y": 24,
         "anim": "move",
         "to": {
          "x": 84,
          "y": 22
         }
        }
       ]
      },
      {
       "id": "e",
       "label": "Ne rien changer et laisser faire Berlin",
       "label_expert": "Statu quo, sans contre-mesure",
       "plus": "Aucune dépense nouvelle pour l'État.",
       "minus": "Les frontaliers subissent les retards.",
       "budget": 0.02,
       "axes": {
        "eco": 1
       },
       "ind": {
        "cohesion": -1,
        "emploi": -1
       },
       "budget_note": "Aucune dépense : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "camion",
         "x": 80,
         "y": 24,
         "anim": "appear"
        }
       ]
      }
     ]
    },
    {
     "id": "v28_zfe_strasbourg",
     "kind": "banal",
     "region": "grand_est",
     "sector": "transports",
     "title": "Les vieilles voitures bientôt interdites en ville",
     "simple": "Une grande ville de l'Est interdit peu à peu les voitures les plus polluantes. Des habitants sans moyens de changer de voiture protestent. Que décider ?",
     "expert": "Zone à faibles émissions mobilité (ZFE-m) et calendrier d'interdiction des vignettes Crit'Air ; l'Assemblée a voté leur suppression, que le Conseil constitutionnel a ensuite censurée pour un motif de procédure.",
     "context": "La pollution de l'air cause des maladies et des décès. Changer de voiture coûte cher, surtout pour les ménages modestes et ceux qui habitent loin des transports.",
     "real": {
      "date": "28 mai 2025 (vote de l'Assemblée)",
      "place": "Strasbourg et autres métropoles",
      "fact": "L'Assemblée nationale a voté la suppression des zones à faibles émissions. Le Conseil constitutionnel a ensuite censuré cette mesure : les ZFE sont restées en place.",
      "figures": "Une quarantaine de ZFE prévues en France.",
      "sources": [
       {
        "label": "LCP : la suppression des ZFE approuvée par l'Assemblée",
        "url": "https://lcp.fr/actualites/zfe-la-suppression-des-zones-a-faibles-emissions-approuvee-par-l-assemblee-nationale"
       },
       {
        "label": "L'argus : les ZFE restent en place après le Conseil constitutionnel",
        "url": "https://www.largus.fr/actualite-automobile/zfe-elles-restent-finalement-en-place-sur-decision-du-conseil-constitutionnel-2196820.html"
       }
      ]
     },
     "camera": {
      "region": "grand_est",
      "x": 80,
      "y": 28,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "voiture",
       "x": 79,
       "y": 28,
       "anim": "smoke"
      },
      {
       "obj": "bus",
       "x": 81,
       "y": 29,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "manifestants",
       "x": 78,
       "y": 27,
       "anim": "appear",
       "delay": 0.6
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Maintenir l'interdiction avec une prime à l'achat",
       "label_expert": "Calendrier ZFE maintenu et prime à la conversion renforcée",
       "plus": "Un air plus sain en ville.",
       "minus": "Une prime coûteuse pour l'État.",
       "budget": -0.2,
       "axes": {
        "env": -2
       },
       "ind": {
        "co2": -1,
        "services": 1
       },
       "budget_note": "Prime à la conversion : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "pylone",
         "x": 80,
         "y": 28,
         "anim": "appear"
        },
        {
         "obj": "voiture",
         "x": 79,
         "y": 28,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "b",
       "label": "Supprimer l'interdiction",
       "label_expert": "Abrogation des zones à faibles émissions",
       "plus": "Les ménages gardent leur voiture.",
       "minus": "La pollution baisse moins vite.",
       "budget": 0.02,
       "axes": {
        "env": 2
       },
       "ind": {
        "pouvoir_achat": 1,
        "co2": 1
       },
       "budget_note": "Plus de prime à verser : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "voiture",
         "x": 79,
         "y": 28,
         "anim": "move",
         "to": {
          "x": 81,
          "y": 27
         }
        }
       ]
      },
      {
       "id": "c",
       "label": "Reporter de deux ans et développer les transports en commun",
       "label_expert": "Report du calendrier et financement de lignes de bus express",
       "plus": "Le temps de proposer d'autres solutions.",
       "minus": "Les travaux de transports coûtent cher.",
       "budget": -0.1,
       "axes": {
        "env": -1
       },
       "ind": {
        "services": 1
       },
       "budget_note": "Lignes de bus financées : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "bus",
         "x": 81,
         "y": 29,
         "anim": "move",
         "to": {
          "x": 78,
          "y": 27
         }
        }
       ]
      },
      {
       "id": "d",
       "label": "Remplacer l'interdiction par un péage urbain",
       "label_expert": "Péage de congestion modulé selon la pollution du véhicule",
       "plus": "Une recette pour les transports.",
       "minus": "Une taxe de plus pour circuler.",
       "budget": 0.05,
       "axes": {
        "eco": 1,
        "env": -1
       },
       "ind": {
        "pouvoir_achat": -1,
        "co2": -1
       },
       "budget_note": "Recette du péage : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 80,
         "y": 28,
         "anim": "rise"
        }
       ]
      }
     ]
    }
   ],
   "offer": [
    "prix_planchers_agricoles",
    "sortie_pesticides",
    "tva_sociale",
    "cessions_actifs",
    "taxe_kerosene_train",
    "plafonner_allegements"
   ]
  },
  {
   "day": 20,
   "season": "hiver",
   "title": "Autoroute, trafic de drogue et électroménager",
   "mood": "tendu",
   "weather": "neige",
   "intro": "Un chantier d'autoroute suspendu par la justice, une ville du Sud face aux trafiquants, la dernière usine d'électroménager qui ferme : dernière semaine.",
   "events": [
    {
     "id": "v28_a69",
     "kind": "majeur",
     "region": "occitanie",
     "sector": "transports",
     "title": "La justice arrête une autoroute à moitié construite",
     "simple": "Le tribunal annule l'autorisation d'une autoroute entre deux villes du Sud-Ouest, alors que les travaux sont bien avancés. Que faire du chantier ?",
     "expert": "Annulation de l'autorisation environnementale de l'A69 Castres-Toulouse faute de « raison impérative d'intérêt public majeur » ; l'État fait appel, la cour administrative d'appel rétablit ensuite les autorisations.",
     "context": "Les élus du territoire défendent un désenclavement attendu depuis longtemps. Les opposants dénoncent des terres et des arbres détruits pour un gain de temps limité. Arrêter un chantier avancé coûte aussi de l'argent.",
     "real": {
      "date": "27 février 2025 (annulation) ; décembre 2025 (appel)",
      "place": "Entre Castres (Tarn) et Toulouse",
      "fact": "Le tribunal administratif de Toulouse a annulé l'autorisation environnementale de l'autoroute A69 et le chantier s'est arrêté. L'État a fait appel ; la cour administrative d'appel a ensuite rétabli les autorisations, ce que le Conseil d'État a confirmé.",
      "figures": "Autoroute de 53 km, travaux avancés à environ 70 % au moment de l'annulation.",
      "sources": [
       {
        "label": "Tribunal administratif de Toulouse : communiqué sur l'A69",
        "url": "https://toulouse.tribunal-administratif.fr/content/download/225843/document/CP_A69.pdf"
       },
       {
        "label": "Banque des territoires : la cour d'appel valide les autorisations",
        "url": "https://www.banquedesterritoires.fr/autoroute-a69-la-cour-administrative-dappel-de-toulouse-valide-les-autorisations-environnementales"
       }
      ]
     },
     "camera": {
      "region": "occitanie",
      "x": 54,
      "y": 76,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "chantier_grue",
       "x": 55,
       "y": 76,
       "anim": "close"
      },
      {
       "obj": "camion",
       "x": 53,
       "y": 77,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "foret",
       "x": 56,
       "y": 75,
       "anim": "appear",
       "delay": 0.5
      },
      {
       "obj": "manifestants",
       "x": 52,
       "y": 76,
       "anim": "appear",
       "delay": 0.8
      }
     ],
     "recall": [
      {
       "event": "v28_zfe_strasbourg",
       "choice": "a",
       "text": "La semaine dernière, vous avez maintenu les zones à faibles émissions : les opposants à l'autoroute s'en réclament."
      },
      {
       "event": "v28_zfe_strasbourg",
       "choice": "b",
       "text": "La semaine dernière, vous avez supprimé les zones à faibles émissions : les partisans de l'autoroute y voient un signal."
      },
      {
       "event": "v28_zfe_strasbourg",
       "choice": "c",
       "text": "La semaine dernière, vous avez misé sur les bus express : certains demandent la même solution ici."
      },
      {
       "event": "v28_zfe_strasbourg",
       "choice": "d",
       "text": "La semaine dernière, vous avez créé un péage urbain : l'autoroute, elle aussi, serait à péage."
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Finir l'autoroute après l'appel",
       "label_expert": "Poursuite du chantier sous réserve de la décision d'appel",
       "plus": "Le territoire est désenclavé.",
       "minus": "Des terres et des arbres en moins.",
       "budget": -0.05,
       "axes": {
        "env": 2
       },
       "ind": {
        "emploi": 1,
        "co2": 1
       },
       "budget_note": "Compensations publiques : le déficit augmente un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "chantier_grue",
         "x": 55,
         "y": 76,
         "anim": "grow"
        },
        {
         "obj": "voiture",
         "x": 53,
         "y": 77,
         "anim": "move",
         "to": {
          "x": 57,
          "y": 75
         }
        }
       ]
      },
      {
       "id": "b",
       "label": "Abandonner et renaturer le tracé",
       "label_expert": "Abandon du projet et restauration écologique des emprises",
       "plus": "Les terres agricoles sont rendues.",
       "minus": "Des indemnités au concessionnaire.",
       "budget": -0.4,
       "axes": {
        "env": -2
       },
       "ind": {
        "co2": -1,
        "emploi": -1
       },
       "budget_note": "Indemnités et travaux de remise en état : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "foret",
         "x": 55,
         "y": 76,
         "anim": "grow"
        },
        {
         "obj": "champ",
         "x": 54,
         "y": 77,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Transformer le tracé en route nationale sans péage",
       "label_expert": "Requalification en route express gratuite à 2x1 voie",
       "plus": "Un compromis moins coûteux pour les usagers.",
       "minus": "L'État paie l'entretien à la place du péage.",
       "budget": -0.1,
       "axes": {
        "eco": -1
       },
       "ind": {
        "pouvoir_achat": 1
       },
       "budget_note": "Entretien public : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "voiture",
         "x": 53,
         "y": 77,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Simplifier les recours contre les grands chantiers",
       "label_expert": "Réforme du contentieux environnemental (délais de recours raccourcis)",
       "plus": "Moins de chantiers arrêtés en cours de route.",
       "minus": "Moins de possibilités de contester un projet.",
       "budget": 0.1,
       "axes": {
        "soc": 1,
        "env": 1
       },
       "ind": {
        "emploi": 1,
        "cohesion": -1
       },
       "budget_note": "Moins de surcoûts liés aux arrêts : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "parlement",
         "x": 52,
         "y": 24,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "e",
       "label": "Faire payer le péage plus cher pour rembourser le retard",
       "label_expert": "Hausse des tarifs de péage pour couvrir les surcoûts",
       "plus": "Le contribuable ne paie pas le retard.",
       "minus": "Les usagers paient plus cher.",
       "budget": 0.05,
       "axes": {
        "eco": 1
       },
       "ind": {
        "pouvoir_achat": -1
       },
       "budget_note": "Surcoûts couverts par l'usager : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 55,
         "y": 76,
         "anim": "rise"
        }
       ]
      }
     ]
    },
    {
     "id": "v28_narcotrafic",
     "kind": "majeur",
     "region": "paca",
     "sector": "securite",
     "title": "Des fusillades liées au trafic de drogue dans une ville du Sud",
     "simple": "Dans une grande ville du Sud, les règlements de comptes entre trafiquants se multiplient. Une nouvelle loi veut frapper plus fort. Quelle priorité ?",
     "expert": "Loi visant à sortir la France du piège du narcotrafic : parquet national anticriminalité organisée (Pnaco), quartiers de haute sécurité, gel administratif des avoirs et techniques de renseignement élargies.",
     "context": "Le trafic de drogue brasse des milliards et recrute des adolescents. Plus de policiers et de prisons coûte cher ; la prévention et les soins agissent lentement ; certaines mesures touchent aux libertés.",
     "real": {
      "date": "13 juin 2025 (loi promulguée)",
      "place": "Marseille et toute la France",
      "fact": "La loi « narcotrafic » a créé un parquet national spécialisé, des quartiers de haute sécurité en prison et de nouveaux outils d'enquête.",
      "figures": "Un parquet national anticriminalité organisée créé par la loi.",
      "sources": [
       {
        "label": "Vie publique : loi du 13 juin 2025 contre le narcotrafic",
        "url": "https://www.vie-publique.fr/loi/297230-loi-du-13-juin-2025-visant-sortir-la-france-du-piege-du-narcotrafic"
       },
       {
        "label": "Info.gouv : loi contre le narcotrafic, ce qu'il faut retenir",
        "url": "https://www.info.gouv.fr/actualite/loi-contre-le-narcotrafic-ce-quil-faut-retenir"
       }
      ]
     },
     "camera": {
      "region": "paca",
      "x": 74,
      "y": 80,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "voiture_police",
       "x": 74,
       "y": 79,
       "anim": "move",
       "to": {
        "x": 75,
        "y": 80
       }
      },
      {
       "obj": "immeuble",
       "x": 75,
       "y": 80,
       "anim": "pulse",
       "delay": 0.3
      },
      {
       "obj": "commissariat",
       "x": 73,
       "y": 79,
       "anim": "appear",
       "delay": 0.6
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Recruter des enquêteurs et des magistrats spécialisés",
       "label_expert": "Renforcement des effectifs de police judiciaire et du parquet spécialisé",
       "plus": "Les réseaux sont mieux poursuivis.",
       "minus": "Des salaires à payer chaque année.",
       "budget": -0.3,
       "axes": {
        "soc": 1
       },
       "ind": {
        "services": 1,
        "cohesion": 1
       },
       "budget_note": "Recrutements : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "commissariat",
         "x": 73,
         "y": 79,
         "anim": "grow"
        },
        {
         "obj": "voiture_police",
         "x": 75,
         "y": 80,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "b",
       "label": "Saisir et revendre les biens des trafiquants",
       "label_expert": "Saisie et confiscation élargies des avoirs criminels",
       "plus": "L'argent du trafic revient à l'État.",
       "minus": "Des procédures longues et contestées.",
       "budget": 0.15,
       "axes": {
        "soc": 1
       },
       "ind": {
        "cohesion": 1
       },
       "budget_note": "Biens saisis revendus : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "pieces",
         "x": 74,
         "y": 80,
         "anim": "rise"
        },
        {
         "obj": "voiture",
         "x": 75,
         "y": 80,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "c",
       "label": "Miser sur la prévention et les soins aux consommateurs",
       "label_expert": "Prévention, éducation et réduction des risques",
       "plus": "Moins de jeunes recrutés à terme.",
       "minus": "Des effets lents à mesurer.",
       "budget": -0.1,
       "axes": {
        "soc": -1
       },
       "ind": {
        "services": 1,
        "cohesion": 1
       },
       "budget_note": "Programmes de prévention : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "ecole",
         "x": 73,
         "y": 80,
         "anim": "appear"
        },
        {
         "obj": "cabinet_medical",
         "x": 75,
         "y": 79,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "d",
       "label": "Légaliser et taxer le cannabis",
       "label_expert": "Légalisation encadrée avec monopole de vente et taxe",
       "plus": "Une recette nouvelle, un marché noir réduit.",
       "minus": "Des risques pour la santé, un débat moral.",
       "budget": 0.5,
       "axes": {
        "soc": -2,
        "eco": 1
       },
       "ind": {
        "services": -1
       },
       "budget_note": "Taxe sur les ventes : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "commerce",
         "x": 74,
         "y": 80,
         "anim": "appear"
        },
        {
         "obj": "pieces",
         "x": 74,
         "y": 79,
         "anim": "rise"
        }
       ]
      }
     ]
    },
    {
     "id": "v28_brandt",
     "kind": "banal",
     "region": "centre_val_de_loire",
     "sector": "salaires",
     "title": "La dernière usine d'électroménager du pays ferme",
     "simple": "Le dernier fabricant français de fours et de lave-linge est liquidé. Environ 700 salariés perdent leur emploi près d'Orléans et dans le Loir-et-Cher. Que faire ?",
     "expert": "Liquidation judiciaire du groupe Brandt faute d'offre de reprise industrielle viable, malgré un projet de société coopérative soutenu par les collectivités.",
     "context": "Les appareils fabriqués en Asie coûtent moins cher. Sauver une usine demande de l'argent public sans garantie ; la laisser partir fait perdre des savoir-faire.",
     "real": {
      "date": "11 décembre 2025",
      "place": "Saint-Jean-de-la-Ruelle (Loiret) et Vendôme (Loir-et-Cher)",
      "fact": "Le tribunal a prononcé la liquidation de Brandt, dernier fabricant de gros électroménager en France. Un projet de reprise en coopérative n'a pas abouti.",
      "figures": "Environ 700 emplois supprimés.",
      "sources": [
       {
        "label": "Public Sénat : Brandt en liquidation judiciaire, 700 emplois supprimés",
        "url": "https://www.publicsenat.fr/actualites/economie/brandt-en-liquidation-judiciaire-quelque-700-emplois-supprimes"
       },
       {
        "label": "Banque des territoires : la liquidation de Brandt suscite la consternation",
        "url": "https://www.banquedesterritoires.fr/la-liquidation-de-brandt-dernier-fabricant-delectromenager-en-france-suscite-la-consternation"
       }
      ]
     },
     "camera": {
      "region": "centre_val_de_loire",
      "x": 47,
      "y": 35,
      "zoom": 2.4
     },
     "fx": [
      {
       "obj": "usine",
       "x": 47,
       "y": 35,
       "anim": "close"
      },
      {
       "obj": "manifestants",
       "x": 48,
       "y": 36,
       "anim": "appear",
       "delay": 0.3
      },
      {
       "obj": "camion",
       "x": 45,
       "y": 34,
       "anim": "move",
       "to": {
        "x": 42,
        "y": 33
       },
       "delay": 0.6
      }
     ],
     "recall": [
      {
       "event": "v28_arcelor_dunkerque",
       "choice": "a",
       "text": "Il y a deux semaines, vous avez nationalisé l'aciérie du Nord : les salariés d'ici demandent la même chose."
      },
      {
       "event": "v28_arcelor_dunkerque",
       "choice": "b",
       "text": "Il y a deux semaines, vous avez demandé des quotas sur l'acier importé : on réclame la même protection pour l'électroménager."
      },
      {
       "event": "v28_arcelor_dunkerque",
       "choice": "c",
       "text": "Il y a deux semaines, vous avez financé un acier moins polluant : on attend une aide comparable ici."
      },
      {
       "event": "v28_arcelor_dunkerque",
       "choice": "d",
       "text": "Il y a deux semaines, vous avez laissé l'aciérie décider seule : vous restez cohérent, ou vous changez de ligne."
      },
      {
       "event": "v28_arcelor_dunkerque",
       "choice": "e",
       "text": "Il y a deux semaines, vous avez exigé le remboursement des aides de l'aciérie : la même règle s'appliquerait ici."
      }
     ],
     "choices": [
      {
       "id": "a",
       "label": "Financer la reprise par les salariés en coopérative",
       "label_expert": "Prêt public et participation des collectivités à une SCOP",
       "plus": "Les savoir-faire restent en France.",
       "minus": "Un pari risqué pour l'argent public.",
       "budget": -0.05,
       "axes": {
        "eco": -1
       },
       "ind": {
        "emploi": 1,
        "souverainete": 1
       },
       "budget_note": "Prêt et subvention : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "usine",
         "x": 47,
         "y": 35,
         "anim": "grow"
        }
       ]
      },
      {
       "id": "b",
       "label": "Réserver une part des achats publics au « fabriqué en France »",
       "label_expert": "Critères d'origine dans la commande publique",
       "plus": "Des débouchés pour les usines françaises.",
       "minus": "Des achats publics plus chers.",
       "budget": -0.03,
       "axes": {
        "eu": 1
       },
       "ind": {
        "emploi": 1
       },
       "budget_note": "Achats plus chers : le déficit augmente un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "entrepot",
         "x": 46,
         "y": 36,
         "anim": "appear"
        }
       ]
      },
      {
       "id": "c",
       "label": "Accompagner les salariés vers d'autres emplois",
       "label_expert": "Cellule de reclassement et formations financées",
       "plus": "Une aide concrète aux familles.",
       "minus": "L'usine et ses savoir-faire disparaissent.",
       "budget": 0.02,
       "axes": {
        "eco": 1
       },
       "ind": {
        "emploi": -1
       },
       "budget_note": "Pas d'argent dans l'usine : le déficit baisse un peu (estimation du jeu).",
       "fx": [
        {
         "obj": "ecole",
         "x": 48,
         "y": 36,
         "anim": "appear"
        },
        {
         "obj": "usine",
         "x": 47,
         "y": 35,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "d",
       "label": "Baisser les impôts de production des usines",
       "label_expert": "Allègement de la cotisation foncière des entreprises industrielles",
       "plus": "Les usines restantes deviennent plus compétitives.",
       "minus": "Moins de recettes pour les communes et l'État.",
       "budget": -0.2,
       "axes": {
        "eco": 2
       },
       "ind": {
        "emploi": 1
       },
       "budget_note": "Moins d'impôts perçus : le déficit augmente (estimation du jeu).",
       "fx": [
        {
         "obj": "usine",
         "x": 49,
         "y": 34,
         "anim": "appear"
        },
        {
         "obj": "pieces",
         "x": 47,
         "y": 35,
         "anim": "fade"
        }
       ]
      },
      {
       "id": "e",
       "label": "Laisser faire le marché",
       "label_expert": "Aucune intervention publique dans la liquidation",
       "plus": "Pas de dépense publique.",
       "minus": "Une région fragilisée.",
       "budget": 0.05,
       "axes": {
        "eco": 2
       },
       "ind": {
        "emploi": -2,
        "cohesion": -1
       },
       "budget_note": "Aucune aide : le déficit baisse (estimation du jeu).",
       "fx": [
        {
         "obj": "usine",
         "x": 47,
         "y": 35,
         "anim": "close"
        }
       ]
      }
     ]
    }
   ],
   "offer": [
    "regulation_installation_medecins",
    "jour_ferie_travaille",
    "tva_energie_5_5",
    "leasing_electrique",
    "encadrement_loyers",
    "recrutement_justice"
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
   "budget": 0.8,
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
   "budget": 1,
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
   "budget": -0.6,
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
    "Coût public de plusieurs centaines de millions d'euros par an.",
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
   "budget": 0.3,
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
   "budget": -0.05,
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
  },
  {
   "origin": "Proposition présente dans au moins un programme présidentiel",
   "once": 0,
   "later": [],
   "steps": [
    {
     "label": "Dépôt du texte",
     "weeks": 1
    },
    {
     "label": "Débat et vote au Parlement",
     "weeks": 1,
     "block": true
    }
   ],
   "id": "ir_14_tranches",
   "label": "Un impôt sur le revenu à 14 tranches",
   "term": "Barème de l'impôt sur le revenu plus progressif",
   "sector": "fiscalite",
   "simple": "L'impôt passe de 5 à 14 tranches : les hauts revenus paient plus, les revenus moyens un peu moins.",
   "expert": "Refonte du barème de l'IR avec 14 tranches au lieu de 5, hausse des taux marginaux supérieurs et baisse pour les premières tranches.",
   "budget": 3,
   "budget_note": "Les hauts revenus paient plus que ce que perdent les autres : recette nette modeste (ordre de grandeur, chiffrage non indépendant).",
   "axes": {
    "eco": -2
   },
   "ind": {
    "cohesion": 2,
    "pouvoir_achat": 1
   },
   "why_cost": "Les plus hauts revenus peuvent réduire leurs revenus déclarés ou partir : la recette réelle est incertaine.",
   "why_gain": "Les revenus moyens et modestes paient un peu moins, les très hauts revenus davantage.",
   "benefits": [
    "Impôt plus progressif.",
    "Baisse pour les revenus moyens."
   ],
   "problems": [
    "Risque d'évasion ou de départs.",
    "Recette incertaine."
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Une partie des députés refuse le texte : il ne passe pas.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retrait du texte par le gouvernement",
      "outcome": "abandon",
      "plus": "Pas de dépense ni de conflit.",
      "minus": "Rien ne change.",
      "ind": {},
      "axes": {}
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Adoption sans vote par l'article 49.3",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement.",
      "minus": "Censure possible, colère de l'opposition.",
      "ind": {
       "cohesion": -2
      },
      "axes": {
       "soc": 1
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : moins de tranches",
      "label_expert": "Adoption d'une version amendée du texte",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Le texte passe.",
      "minus": "Effets réduits de moitié.",
      "ind": {},
      "axes": {}
     }
    ]
   },
   "sources": [
    {
     "label": "République 2027 : programmes, budget et impôts",
     "url": "https://republique2027.fr/programmes"
    },
    {
     "label": "data.gouv.fr : programmes présidentielle 2027 résumés par thème",
     "url": "https://www.data.gouv.fr/reuses/programmes-presidentielle-2027-le-programme-de-chaque-candidat-resume-et-analyse-theme-par-theme"
    }
   ]
  },
  {
   "origin": "Proposition présente dans au moins un programme présidentiel",
   "once": 0,
   "later": [],
   "steps": [
    {
     "label": "Dépôt du texte",
     "weeks": 1
    },
    {
     "label": "Débat et vote au Parlement",
     "weeks": 1,
     "block": true
    }
   ],
   "id": "recrutements_publics",
   "label": "500 000 recrutements dans les services publics en cinq ans",
   "term": "Plan pluriannuel d'embauches publiques",
   "sector": "sante",
   "simple": "L'État embauche 100 000 personnes par an : soignants, enseignants, agents.",
   "expert": "Recrutements dans l'hôpital, l'école et les services de proximité, environ 100 000 postes par an pendant cinq ans.",
   "budget": -8,
   "budget_note": "Environ 100 000 agents de plus par an à près de 50 000 € chacun : le déficit augmente chaque année.",
   "axes": {
    "eco": -2
   },
   "ind": {
    "services": 6,
    "emploi": 2,
    "cohesion": 1
   },
   "why_cost": "Chaque agent coûte salaire et cotisations, puis une retraite : la dépense grandit année après année.",
   "why_gain": "Plus de soignants, d'enseignants et de guichets ouverts.",
   "benefits": [
    "Services publics renforcés.",
    "Emplois créés."
   ],
   "problems": [
    "Dépense durable très élevée.",
    "Difficile de recruter autant (métiers en tension)."
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Une partie des députés refuse le texte : il ne passe pas.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retrait du texte par le gouvernement",
      "outcome": "abandon",
      "plus": "Pas de dépense ni de conflit.",
      "minus": "Rien ne change.",
      "ind": {},
      "axes": {}
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Adoption sans vote par l'article 49.3",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement.",
      "minus": "Censure possible, colère de l'opposition.",
      "ind": {
       "cohesion": -2
      },
      "axes": {
       "soc": 1
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : 250 000 postes",
      "label_expert": "Adoption d'une version amendée du texte",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Le texte passe.",
      "minus": "Effets réduits de moitié.",
      "ind": {},
      "axes": {}
     }
    ]
   },
   "sources": [
    {
     "label": "Libnanews : l'État au cœur des programmes 2027",
     "url": "https://libnanews.com/presidentielle-2027-letat-au-coeur-des-programmes/"
    },
    {
     "label": "data.gouv.fr : programmes présidentielle 2027 résumés par thème",
     "url": "https://www.data.gouv.fr/reuses/programmes-presidentielle-2027-le-programme-de-chaque-candidat-resume-et-analyse-theme-par-theme"
    }
   ]
  },
  {
   "origin": "Proposition présente dans au moins un programme présidentiel",
   "once": 0,
   "later": [],
   "steps": [
    {
     "label": "Dépôt du texte",
     "weeks": 1
    },
    {
     "label": "Débat et vote au Parlement",
     "weeks": 1,
     "block": true
    }
   ],
   "id": "tva_premiere_necessite",
   "label": "Baisser la TVA sur les produits de première nécessité",
   "term": "TVA réduite ou nulle sur un panier de produits essentiels",
   "sector": "salaires",
   "simple": "Les produits de base (alimentation, hygiène) coûtent moins cher en caisse.",
   "expert": "Taux de TVA réduit ou nul sur une liste de produits de première nécessité.",
   "budget": -10,
   "budget_note": "Moins de TVA encaissée sur des achats très courants : le déficit augmente fortement.",
   "axes": {
    "eco": -1
   },
   "ind": {
    "pouvoir_achat": 5,
    "cohesion": 1
   },
   "why_cost": "La TVA est la première recette de l'État : même un panier limité représente plusieurs milliards.",
   "why_gain": "Gain immédiat en caisse, surtout pour les ménages modestes, si les commerçants répercutent la baisse.",
   "benefits": [
    "Prix en baisse sur l'essentiel.",
    "Aide surtout les budgets serrés."
   ],
   "problems": [
    "Coût élevé.",
    "Baisse pas toujours répercutée sur les prix."
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Une partie des députés refuse le texte : il ne passe pas.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retrait du texte par le gouvernement",
      "outcome": "abandon",
      "plus": "Pas de dépense ni de conflit.",
      "minus": "Rien ne change.",
      "ind": {},
      "axes": {}
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Adoption sans vote par l'article 49.3",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement.",
      "minus": "Censure possible, colère de l'opposition.",
      "ind": {
       "cohesion": -2
      },
      "axes": {
       "soc": 1
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : un panier plus petit",
      "label_expert": "Adoption d'une version amendée du texte",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Le texte passe.",
      "minus": "Effets réduits de moitié.",
      "ind": {},
      "axes": {}
     }
    ]
   },
   "sources": [
    {
     "label": "ÉlyséeScope : positions et propositions pour 2027",
     "url": "https://www.elyseescope.com/le-radar/marine-le-pen-positions-programme-20260930"
    },
    {
     "label": "data.gouv.fr : programmes présidentielle 2027 résumés par thème",
     "url": "https://www.data.gouv.fr/reuses/programmes-presidentielle-2027-le-programme-de-chaque-candidat-resume-et-analyse-theme-par-theme"
    }
   ]
  },
  {
   "origin": "Proposition présente dans au moins un programme présidentiel",
   "once": 0,
   "later": [],
   "steps": [
    {
     "label": "Dépôt du texte",
     "weeks": 1
    },
    {
     "label": "Débat et vote au Parlement",
     "weeks": 1,
     "block": true
    }
   ],
   "id": "reduction_impot_familles",
   "label": "Une réduction d'impôt d'environ 3 000 € pour les familles qui travaillent",
   "term": "Avantage fiscal pour les actifs avec enfants",
   "sector": "fiscalite",
   "simple": "Les parents qui travaillent paient environ 3 000 € d'impôt en moins.",
   "expert": "Réduction d'impôt ciblée sur les foyers actifs avec enfants, avec un prêt à taux zéro pour un logement plus grand à l'arrivée d'un enfant.",
   "budget": -5,
   "budget_note": "Ordre de grandeur, chiffrage détaillé non publié : le déficit augmente.",
   "axes": {
    "eco": 1,
    "soc": 1
   },
   "ind": {
    "pouvoir_achat": 3,
    "emploi": 1
   },
   "why_cost": "Plusieurs millions de foyers concernés : la dépense fiscale est importante.",
   "why_gain": "Travailler rapporte plus aux parents, ce qui peut encourager l'activité.",
   "benefits": [
    "Plus de revenu pour les familles actives.",
    "Incite à travailler."
   ],
   "problems": [
    "Ne touche pas les foyers non imposables.",
    "Coût important."
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Une partie des députés refuse le texte : il ne passe pas.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retrait du texte par le gouvernement",
      "outcome": "abandon",
      "plus": "Pas de dépense ni de conflit.",
      "minus": "Rien ne change.",
      "ind": {},
      "axes": {}
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Adoption sans vote par l'article 49.3",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement.",
      "minus": "Censure possible, colère de l'opposition.",
      "ind": {
       "cohesion": -2
      },
      "axes": {
       "soc": 1
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : une réduction plus petite",
      "label_expert": "Adoption d'une version amendée du texte",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Le texte passe.",
      "minus": "Effets réduits de moitié.",
      "ind": {},
      "axes": {}
     }
    ]
   },
   "sources": [
    {
     "label": "Euronews : le programme d'un candidat sur le travail et les dépenses",
     "url": "https://fr.euronews.com/2026/10/09/presidentielle-2027-edouard-philippe-mise-sur-le-travail-et-la-reduction-des-depenses-publ"
    },
    {
     "label": "data.gouv.fr : programmes présidentielle 2027 résumés par thème",
     "url": "https://www.data.gouv.fr/reuses/programmes-presidentielle-2027-le-programme-de-chaque-candidat-resume-et-analyse-theme-par-theme"
    }
   ]
  },
  {
   "origin": "Proposition présente dans au moins un programme présidentiel",
   "once": 0,
   "later": [],
   "steps": [
    {
     "label": "Dépôt du texte",
     "weeks": 1
    },
    {
     "label": "Débat et vote au Parlement",
     "weeks": 1,
     "block": true
    }
   ],
   "id": "interets_emprunt_deductibles",
   "label": "Déduire de l'impôt les intérêts d'un prêt immobilier",
   "term": "Déductibilité des intérêts d'emprunt pour la résidence principale",
   "sector": "logement",
   "simple": "Ceux qui achètent leur logement paient moins d'impôt, d'autant plus qu'ils ont d'enfants.",
   "expert": "Crédit ou déduction d'impôt sur les intérêts d'emprunt de la résidence principale, modulé selon le nombre d'enfants.",
   "budget": -1.5,
   "budget_note": "Un dispositif proche, déjà essayé, a coûté jusqu'à environ 2 Md€ par an : le déficit augmente.",
   "axes": {
    "eco": 1
   },
   "ind": {
    "pouvoir_achat": 1,
    "cohesion": -1
   },
   "why_cost": "L'État renonce à une partie de l'impôt de chaque acheteur pendant plusieurs années.",
   "why_gain": "Acheter devient plus accessible pour les familles.",
   "benefits": [
    "Aide l'accession à la propriété.",
    "Favorise les familles."
   ],
   "problems": [
    "Peut faire monter les prix.",
    "Profite peu aux locataires."
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Une partie des députés refuse le texte : il ne passe pas.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retrait du texte par le gouvernement",
      "outcome": "abandon",
      "plus": "Pas de dépense ni de conflit.",
      "minus": "Rien ne change.",
      "ind": {},
      "axes": {}
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Adoption sans vote par l'article 49.3",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement.",
      "minus": "Censure possible, colère de l'opposition.",
      "ind": {
       "cohesion": -2
      },
      "axes": {
       "soc": 1
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : limité aux primo-accédants",
      "label_expert": "Adoption d'une version amendée du texte",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Le texte passe.",
      "minus": "Effets réduits de moitié.",
      "ind": {},
      "axes": {}
     }
    ]
   },
   "sources": [
    {
     "label": "Public Sénat : déduire les intérêts d'emprunt selon le nombre d'enfants",
     "url": "https://www.publicsenat.fr/actualites/politique/logement-bruno-retailleau-propose-de-deduire-de-l-imot-les-interets-d-emprunt-pour-un-pret-immobilier-en-fonction-du-nombre-d-enfants"
    },
    {
     "label": "data.gouv.fr : programmes présidentielle 2027 résumés par thème",
     "url": "https://www.data.gouv.fr/reuses/programmes-presidentielle-2027-le-programme-de-chaque-candidat-resume-et-analyse-theme-par-theme"
    }
   ]
  },
  {
   "origin": "Proposition présente dans au moins un programme présidentiel",
   "once": 0,
   "later": [],
   "steps": [
    {
     "label": "Dépôt du texte",
     "weeks": 1
    },
    {
     "label": "Débat et vote au Parlement",
     "weeks": 1,
     "block": true
    }
   ],
   "id": "rsa_suspendu_condamnes",
   "label": "Suspendre le RSA des personnes condamnées pour délinquance",
   "term": "Suspension automatique du RSA après condamnation",
   "sector": "securite",
   "simple": "Une personne condamnée perd son RSA, sauf si le maire s'y oppose.",
   "expert": "Suspension automatique du revenu de solidarité active en cas de condamnation, avec une possibilité d'opposition du maire au cas par cas.",
   "budget": 0.05,
   "budget_note": "Peu de personnes concernées : économie très faible.",
   "axes": {
    "soc": 2
   },
   "ind": {
    "cohesion": -1
   },
   "why_cost": "Risque de pousser vers plus de précarité des personnes déjà fragiles.",
   "why_gain": "Message de fermeté : les aides sont liées au respect de la loi.",
   "benefits": [
    "Sanction supplémentaire.",
    "Économie, même faible."
   ],
   "problems": [
    "Risque de précarité et de récidive.",
    "Contestation juridique possible."
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Une partie des députés refuse le texte : il ne passe pas.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retrait du texte par le gouvernement",
      "outcome": "abandon",
      "plus": "Pas de dépense ni de conflit.",
      "minus": "Rien ne change.",
      "ind": {},
      "axes": {}
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Adoption sans vote par l'article 49.3",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement.",
      "minus": "Censure possible, colère de l'opposition.",
      "ind": {
       "cohesion": -2
      },
      "axes": {
       "soc": 1
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : une suspension temporaire",
      "label_expert": "Adoption d'une version amendée du texte",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Le texte passe.",
      "minus": "Effets réduits de moitié.",
      "ind": {},
      "axes": {}
     }
    ]
   },
   "sources": [
    {
     "label": "Dakaractu : un candidat mise sur des réformes radicales",
     "url": "https://www.dakaractu.com/Presidentielle-2027-en-France-Edouard-Philippe-mise-sur-des-reformes-radicales_a278364.amp.html"
    },
    {
     "label": "data.gouv.fr : programmes présidentielle 2027 résumés par thème",
     "url": "https://www.data.gouv.fr/reuses/programmes-presidentielle-2027-le-programme-de-chaque-candidat-resume-et-analyse-theme-par-theme"
    }
   ]
  },
  {
   "origin": "Proposition présente dans au moins un programme présidentiel",
   "once": 0,
   "later": [],
   "steps": [
    {
     "label": "Dépôt du texte",
     "weeks": 1
    },
    {
     "label": "Débat et vote au Parlement",
     "weeks": 1,
     "block": true
    }
   ],
   "id": "sortie_otan",
   "label": "Sortir de l'OTAN",
   "term": "Retrait de la France de l'Alliance atlantique",
   "sector": "defense",
   "simple": "La France quitte l'alliance militaire avec les États-Unis et l'Europe.",
   "expert": "Retrait du commandement intégré puis de l'Alliance, pour une défense non alignée.",
   "budget": 0.2,
   "budget_note": "Contribution à l'Alliance en moins, mais une défense plus autonome à financer seule : effet faible sur le déficit.",
   "axes": {
    "eu": 2
   },
   "ind": {
    "souverainete": 1,
    "cohesion": -1
   },
   "why_cost": "Moins de partage de renseignement et de matériel avec les alliés.",
   "why_gain": "Décisions militaires prises sans dépendre d'une alliance.",
   "benefits": [
    "Indépendance diplomatique.",
    "Pas d'engagement automatique."
   ],
   "problems": [
    "Isolement face aux menaces.",
    "Tension avec les partenaires européens."
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Une partie des députés refuse le texte : il ne passe pas.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retrait du texte par le gouvernement",
      "outcome": "abandon",
      "plus": "Pas de dépense ni de conflit.",
      "minus": "Rien ne change.",
      "ind": {},
      "axes": {}
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Adoption sans vote par l'article 49.3",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement.",
      "minus": "Censure possible, colère de l'opposition.",
      "ind": {
       "cohesion": -2
      },
      "axes": {
       "soc": 1
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : quitter seulement le commandement intégré",
      "label_expert": "Adoption d'une version amendée du texte",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Le texte passe.",
      "minus": "Effets réduits de moitié.",
      "ind": {},
      "axes": {}
     }
    ]
   },
   "sources": [
    {
     "label": "Voter en 2027 : comparatif des programmes",
     "url": "https://voteren2027.fr/"
    },
    {
     "label": "data.gouv.fr : programmes présidentielle 2027 résumés par thème",
     "url": "https://www.data.gouv.fr/reuses/programmes-presidentielle-2027-le-programme-de-chaque-candidat-resume-et-analyse-theme-par-theme"
    }
   ]
  },
  {
   "origin": "Proposition présente dans au moins un programme présidentiel",
   "once": 0,
   "later": [],
   "steps": [
    {
     "label": "Dépôt du texte",
     "weeks": 1
    },
    {
     "label": "Débat et vote au Parlement",
     "weeks": 1,
     "block": true
    }
   ],
   "id": "recrutement_justice",
   "label": "Recruter 8 500 magistrats et personnels de justice",
   "term": "Renforcement des effectifs de la justice",
   "sector": "securite",
   "simple": "Plus de juges et de greffiers pour des procès plus rapides.",
   "expert": "Recrutement de 8 500 magistrats, greffiers et personnels de justice supplémentaires.",
   "budget": -0.6,
   "budget_note": "Environ 8 500 postes à près de 70 000 € : le déficit augmente un peu.",
   "axes": {
    "soc": 1
   },
   "ind": {
    "services": 1,
    "cohesion": 1
   },
   "why_cost": "Salaires et formation des nouveaux personnels.",
   "why_gain": "Délais de jugement raccourcis.",
   "benefits": [
    "Justice plus rapide.",
    "Moins de dossiers en attente."
   ],
   "problems": [
    "Formation longue des magistrats.",
    "Effets visibles seulement après plusieurs années."
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Une partie des députés refuse le texte : il ne passe pas.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retrait du texte par le gouvernement",
      "outcome": "abandon",
      "plus": "Pas de dépense ni de conflit.",
      "minus": "Rien ne change.",
      "ind": {},
      "axes": {}
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Adoption sans vote par l'article 49.3",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement.",
      "minus": "Censure possible, colère de l'opposition.",
      "ind": {
       "cohesion": -2
      },
      "axes": {
       "soc": 1
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : moitié moins de postes",
      "label_expert": "Adoption d'une version amendée du texte",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Le texte passe.",
      "minus": "Effets réduits de moitié.",
      "ind": {},
      "axes": {}
     }
    ]
   },
   "sources": [
    {
     "label": "Votons 2027 : programme d'un candidat",
     "url": "https://votons-2027.fr/candidats/attal/programme"
    },
    {
     "label": "data.gouv.fr : programmes présidentielle 2027 résumés par thème",
     "url": "https://www.data.gouv.fr/reuses/programmes-presidentielle-2027-le-programme-de-chaque-candidat-resume-et-analyse-theme-par-theme"
    }
   ]
  },
  {
   "origin": "Proposition présente dans au moins un programme présidentiel",
   "once": 0,
   "later": [],
   "steps": [
    {
     "label": "Dépôt du texte",
     "weeks": 1
    },
    {
     "label": "Débat et vote au Parlement",
     "weeks": 1,
     "block": true
    }
   ],
   "id": "requisition_logements_vacants",
   "label": "Réquisitionner les logements vacants pour loger les sans-abri",
   "term": "Réquisition par les préfets de logements inoccupés",
   "sector": "logement",
   "simple": "Les préfets peuvent obliger à prêter des logements vides pour loger des personnes à la rue.",
   "expert": "Usage renforcé du droit de réquisition des logements vacants, avec indemnisation des propriétaires.",
   "budget": -0.2,
   "budget_note": "Indemnités versées aux propriétaires et travaux : petite dépense.",
   "axes": {
    "eco": -2
   },
   "ind": {
    "cohesion": 2,
    "services": 1
   },
   "why_cost": "Indemniser les propriétaires et remettre en état les logements.",
   "why_gain": "Des personnes sans abri sont logées rapidement.",
   "benefits": [
    "Logement rapide de personnes à la rue.",
    "Mobilise des logements inutilisés."
   ],
   "problems": [
    "Atteinte au droit de propriété.",
    "Procédures longues et contestées."
   ],
   "block": {
    "title": "Blocage à l'Assemblée",
    "text": "Une partie des députés refuse le texte : il ne passe pas.",
    "choices": [
     {
      "id": "abandon",
      "label": "Abandonner la réforme",
      "label_expert": "Retrait du texte par le gouvernement",
      "outcome": "abandon",
      "plus": "Pas de dépense ni de conflit.",
      "minus": "Rien ne change.",
      "ind": {},
      "axes": {}
     },
     {
      "id": "493",
      "label": "Passer en force avec le 49.3",
      "label_expert": "Adoption sans vote par l'article 49.3",
      "outcome": "pass",
      "plus": "La réforme s'applique entièrement.",
      "minus": "Censure possible, colère de l'opposition.",
      "ind": {
       "cohesion": -2
      },
      "axes": {
       "soc": 1
      }
     },
     {
      "id": "compromis",
      "label": "Compromis : seulement les logements vides depuis longtemps",
      "label_expert": "Adoption d'une version amendée du texte",
      "outcome": "amend",
      "factor": 0.5,
      "plus": "Le texte passe.",
      "minus": "Effets réduits de moitié.",
      "ind": {},
      "axes": {}
     }
    ]
   },
   "sources": [
    {
     "label": "Présidentielle 2027 : fiches repères des candidats",
     "url": "https://www.presidentielle-2027.com/candidats-a-la-presidentielle-2027/"
    },
    {
     "label": "data.gouv.fr : programmes présidentielle 2027 résumés par thème",
     "url": "https://www.data.gouv.fr/reuses/programmes-presidentielle-2027-le-programme-de-chaque-candidat-resume-et-analyse-theme-par-theme"
    }
   ]
  }
 ]
};
