export const MISSION_DETAILS = {
  defense: {
    longDescription: `La mission Défense est cruciale pour la protection du territoire national et des intérêts français à l'étranger. Elle comprend quatre programmes majeurs : la préparation et l'emploi des forces, le soutien de la politique de défense, l'équipement des forces et la recherche militaire.`,
    keyObjectives: [
      "Assurer la protection du territoire national",
      "Maintenir la dissuasion nucléaire",
      "Moderniser les équipements militaires",
      "Renforcer la cyberdéfense"
    ],
    programs: [
      { name: "Préparation des forces", budget: 16.8, description: "Entraînement et maintien en condition" },
      { name: "Équipement des forces", budget: 14.7, description: "Modernisation du matériel" },
      { name: "Soutien", budget: 12.4, description: "Infrastructure et logistique" },
      { name: "Recherche", budget: 6.0, description: "Innovation et développement" }
    ]
  },
  education: {
    longDescription: `L'enseignement scolaire représente le premier poste budgétaire de l'État. Cette mission couvre l'ensemble de l'éducation primaire et secondaire, ainsi que la vie scolaire et la formation des enseignants. Elle vise à garantir l'égalité des chances et à préparer les élèves à leur vie future.`,
    keyObjectives: [
      "Garantir l'égalité des chances",
      "Améliorer le niveau des élèves",
      "Former les enseignants",
      "Moderniser l'école"
    ],
    programs: [
      { name: "Premier degré", budget: 24.2, description: "Écoles maternelles et élémentaires" },
      { name: "Second degré", budget: 18.6, description: "Collèges et lycées" },
      { name: "Vie scolaire", budget: 7.4, description: "Accompagnement des élèves" },
      { name: "Formation", budget: 5.0, description: "Formation des personnels" }
    ]
  },
  research: {
    longDescription: `La mission Recherche et enseignement supérieur est essentielle pour l'innovation et la compétitivité de la France. Elle finance les universités, la recherche fondamentale et appliquée, ainsi que les grands organismes de recherche. Cette mission est cruciale pour maintenir la position de la France dans la compétition internationale.`,
    keyObjectives: [
      "Soutenir la recherche fondamentale",
      "Favoriser l'innovation",
      "Améliorer la qualité de l'enseignement supérieur",
      "Renforcer les liens recherche-industrie"
    ],
    programs: [
      { name: "Formations supérieures", budget: 14.2, description: "Universités et grandes écoles" },
      { name: "Recherche scientifique", budget: 7.1, description: "Recherche fondamentale" },
      { name: "Innovation", budget: 4.8, description: "Transfert technologique" },
      { name: "Vie étudiante", budget: 3.0, description: "Bourses et logement" }
    ]
  },
  solidarity: {
    longDescription: `La mission Solidarité, insertion et égalité des chances est au cœur de la politique sociale de l'État. Elle vise à réduire les inégalités, à favoriser l'inclusion sociale et à protéger les personnes vulnérables. Cette mission est essentielle pour maintenir la cohésion sociale et garantir la dignité de tous les citoyens.`,
    keyObjectives: [
      "Lutter contre la pauvreté",
      "Favoriser l'insertion professionnelle",
      "Promouvoir l'égalité femmes-hommes",
      "Soutenir les personnes handicapées"
    ],
    programs: [
      { name: "Inclusion sociale", budget: 12.5, description: "Aide aux plus démunis" },
      { name: "Handicap et dépendance", budget: 9.8, description: "Soutien aux personnes handicapées" },
      { name: "Égalité", budget: 4.3, description: "Promotion de l'égalité des chances" },
      { name: "Insertion professionnelle", budget: 3.2, description: "Accompagnement vers l'emploi" }
    ]
  },
  ecology: {
    longDescription: `La mission Écologie, développement et mobilité durables est au cœur de la transition écologique. Elle finance les actions en faveur du climat, de la biodiversité et des transports durables. Cette mission est cruciale pour atteindre les objectifs climatiques de la France et assurer un avenir durable.`,
    keyObjectives: [
      "Réduire les émissions de gaz à effet de serre",
      "Protéger la biodiversité",
      "Développer les transports propres",
      "Améliorer l'efficacité énergétique"
    ],
    programs: [
      { name: "Transition énergétique", budget: 8.4, description: "Énergies renouvelables" },
      { name: "Transports", budget: 6.2, description: "Infrastructures durables" },
      { name: "Biodiversité", budget: 4.1, description: "Protection des écosystèmes" },
      { name: "Prévention des risques", budget: 2.9, description: "Risques naturels et technologiques" }
    ]
  },
  security: {
    longDescription: `La mission Sécurité assure la protection des citoyens et le maintien de l'ordre public. Elle couvre la police nationale, la gendarmerie et la sécurité civile. Cette mission est fondamentale pour garantir la sécurité intérieure et la tranquillité publique sur l'ensemble du territoire.`,
    keyObjectives: [
      "Assurer la sécurité publique",
      "Lutter contre la criminalité",
      "Renforcer la sécurité routière",
      "Moderniser les forces de l'ordre"
    ],
    programs: [
      { name: "Police nationale", budget: 9.8, description: "Sécurité publique et ordre" },
      { name: "Gendarmerie", budget: 7.2, description: "Surveillance du territoire" },
      { name: "Sécurité civile", budget: 2.9, description: "Protection des populations" },
      { name: "Modernisation", budget: 1.8, description: "Équipements et formation" }
    ]
  },
  justice: {
    longDescription: `La mission Justice vise à garantir l'État de droit et l'accès à la justice pour tous les citoyens. Elle finance les tribunaux, l'administration pénitentiaire et la protection judiciaire de la jeunesse. Cette mission est essentielle pour maintenir un système judiciaire efficace et équitable.`,
    keyObjectives: [
      "Améliorer l'accès à la justice",
      "Moderniser le système judiciaire",
      "Renforcer la réinsertion",
      "Protéger la jeunesse"
    ],
    programs: [
      { name: "Justice judiciaire", budget: 5.2, description: "Fonctionnement des tribunaux" },
      { name: "Administration pénitentiaire", budget: 4.1, description: "Gestion des établissements" },
      { name: "Protection de la jeunesse", budget: 2.3, description: "Accompagnement des mineurs" },
      { name: "Accès au droit", budget: 1.2, description: "Aide juridictionnelle" }
    ]
  },
  culture: {
    longDescription: `La mission Culture joue un rôle crucial dans la préservation et la promotion du patrimoine culturel français. Elle soutient la création artistique, maintient les institutions culturelles et favorise l'accès à la culture pour tous. Cette mission contribue au rayonnement culturel de la France et à l'éducation artistique.`,
    keyObjectives: [
      "Préserver le patrimoine",
      "Soutenir la création artistique",
      "Démocratiser l'accès à la culture",
      "Développer l'éducation artistique"
    ],
    programs: [
      { name: "Patrimoines", budget: 1.2, description: "Conservation et restauration" },
      { name: "Création", budget: 1.0, description: "Soutien aux artistes" },
      { name: "Transmission", budget: 0.8, description: "Éducation artistique" },
      { name: "Diffusion", budget: 0.7, description: "Accès aux œuvres" }
    ]
  }
} as const

export type MissionId = keyof typeof MISSION_DETAILS