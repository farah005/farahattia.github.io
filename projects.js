// Liste des projets du portfolio.
// Pour modifier : utilisez le mode édition (index.html?edit) puis exportez ce fichier,
// ou éditez-le à la main. Chaque projet a un texte en français (fr) et en anglais (en).
window.PROJECTS = [
  {
    "id": "eeg-seizure",
    "featured": true,
    "title": {
      "fr": "Détection automatique des crises d’absence à partir de signaux EEG",
      "en": "Automatic absence-seizure detection from EEG signals"
    },
    "role": {
      "fr": "",
      "en": ""
    },
    "desc": {
      "fr": "Chaîne complète de data mining : du signal EEG brut à un modèle qui retrouve les périodes de crise. Projet encadré à l’ENIT.",
      "en": "End-to-end data mining pipeline: from raw EEG signal to a model that recovers seizure periods. Supervised project at ENIT."
    },
    "details": {
      "fr": [
        "Construction de la cible à partir des annotations (début et fin de chaque crise) et mesure du déséquilibre entre classes.",
        "Segmentation en fenêtres de 2 s avec 50 % de recouvrement ; une fenêtre est « crise » si au moins 50 % de ses échantillons le sont.",
        "Caractéristiques temporelles (moyenne, écart-type, variance, min, max, amplitude, RMS, énergie) et fréquentielles (puissance FFT dans les bandes delta, theta, alpha, beta).",
        "Comparaison de Decision Tree, Random Forest, KNN et SVM (découpage 80/20 stratifié).",
        "Évaluation par rappel et F1-score plutôt que l’exactitude, trompeuse quand les crises sont rares.",
        "Reconstruction des intervalles de crise prédits, comparaison avec les annotations réelles et analyse des faux positifs et faux négatifs."
      ],
      "en": [
        "Target built from annotations (start and end of each seizure) and class-imbalance measurement.",
        "Segmentation into 2 s windows with 50% overlap; a window is “seizure” if at least 50% of its samples are.",
        "Time-domain features (mean, std, variance, min, max, amplitude, RMS, energy) and frequency-domain features (FFT power in delta, theta, alpha, beta bands).",
        "Comparison of Decision Tree, Random Forest, KNN and SVM (stratified 80/20 split).",
        "Evaluation with recall and F1-score rather than accuracy, which is misleading when seizures are rare.",
        "Reconstruction of predicted seizure intervals, comparison with the true annotations and false positive/negative analysis."
      ]
    },
    "tags": [
      "Python",
      "scikit-learn",
      "Signal processing",
      "Jupyter"
    ],
    "url": "https://github.com/HamzaEssoussi/detection-crises-absence-eeg"
  },
  {
    "id": "driving-coach",
    "featured": true,
    "title": {
      "fr": "Agentic Driving Coach : voiture simulée pilotée par un LLM",
      "en": "Agentic Driving Coach: LLM-driven simulated car"
    },
    "role": {
      "fr": "",
      "en": ""
    },
    "desc": {
      "fr": "Une voiture simulée s’approche d’un panneau stop avec un petit LLM local dans la boucle de contrôle. Le projet étudie le temps logique, la latence d’inférence, les dépassements de délai et le repli déterministe.",
      "en": "A simulated car approaches a stop sign with a small local LLM inside the control loop. The project studies logical time, inference latency, deadline misses and deterministic fallback."
    },
    "details": {
      "fr": [
        "Contexte : lab du cours « Intelligent and Safe Cyber-Physical Systems » (Arizona State University), inspiré de l’article Agentic Driving Coach (FMSys’26).",
        "Implémentation avec les réacteurs Xronos (SDK Python 0.13.1) : Driver, Car, Environment, Coach hiérarchique (inférence + planification) et Recorder.",
        "Délais logiques modélisés : 500 ms pour les commandes du conducteur, 200 ms pour l’actuation d’urgence du coach.",
        "Trois politiques de coach : règles, rejeu d’une trace, ou réponses en direct de modèles Ollama (Llama 3.2 1B et 3B).",
        "Repli déterministe si la réponse est tardive, dangereuse ou mal formée ; échéance de 1 700 ms pour la comparaison des modèles.",
        "Résultats enregistrés (CSV, JSON, traces, graphiques) pour comparer latence, dépassements de délai et distance d’arrêt."
      ],
      "en": [
        "Context: lab of the course “Intelligent and Safe Cyber-Physical Systems” (Arizona State University), inspired by the Agentic Driving Coach paper (FMSys’26).",
        "Built with Xronos reactors (Python SDK 0.13.1): Driver, Car, Environment, hierarchical Coach (inference + planning) and Recorder.",
        "Modeled logical delays: 500 ms for driver commands, 200 ms for the coach’s emergency actuation.",
        "Three coach policies: rules, trace replay, or live Ollama responses (Llama 3.2 1B and 3B).",
        "Deterministic fallback when a response is late, unsafe or malformed; 1,700 ms deadline for model comparison.",
        "Recorded results (CSV, JSON, traces, plots) to compare latency, deadline misses and stopping distance."
      ]
    },
    "tags": [
      "Python",
      "Xronos",
      "LLM",
      "Ollama",
      "Llama 3.2"
    ],
    "url": "https://github.com/haddarhazem/our-agentic-driving-coach"
  },
  {
    "id": "energymind",
    "featured": true,
    "title": {
      "fr": "EnergyMind Tunisia : couche de confiance IA pour le réseau électrique (IEEE TSYP14)",
      "en": "EnergyMind Tunisia: AI trust layer for the power grid (IEEE TSYP14)"
    },
    "status": {
      "fr": "En cours",
      "en": "In progress"
    },
    "role": {
      "fr": "",
      "en": ""
    },
    "desc": {
      "fr": "Couche de confiance IA explicable et gouvernable pour la résilience énergétique : détecte les données de capteurs défaillantes ou falsifiées sur une ligne électrique d’usine (100 machines) et distingue un événement réseau d’un problème de qualité des données.",
      "en": "Explainable, governable AI trust layer for energy resilience: detects faulty or falsified sensor data on a factory power line (100 machines) and tells a grid event from a data-quality problem."
    },
    "details": {
      "fr": [
        "Contexte : défi technique du congrès IEEE TSYP14, sur une usine de 100 machines (dataset Microsoft Azure Predictive Maintenance, 876 100 mesures horaires).",
        "Idée clé : un événement réseau touche plusieurs machines en même temps avec des mesures cohérentes ; un capteur défaillant touche une machine et casse la cohérence physique.",
        "Anomalies simulées (dérive, biais, capteur bloqué, falsification, creux/surtension, coupure) avec étiquettes et journal des paramètres, graine fixe.",
        "Détection : indicateurs glissants, Isolation Forest et règles de cohérence tension/courant/puissance ; évaluation temporelle (jamais aléatoire).",
        "Explicabilité : score de confiance, valeurs SHAP, explication en langage clair et journal de décisions append-only.",
        "Gouvernance : confiance > 0,9 action automatique ; 0,6 à 0,9 validation d’un opérateur ; < 0,6 ou falsification suspectée, alerte humaine. Interface Streamlit prévue.",
        "Apprentissage partagé entre sites : conception documentée (seuls les motifs d’anomalies sont partagés, jamais les données brutes)."
      ],
      "en": [
        "Context: technical challenge of the IEEE TSYP14 congress, on a 100-machine factory (Microsoft Azure Predictive Maintenance dataset, 876,100 hourly readings).",
        "Key idea: a grid event hits several machines at once with consistent measurements; a faulty sensor hits one machine and breaks physical consistency.",
        "Simulated anomalies (drift, bias, stuck sensor, falsification, sag/surge, outage) with labels and a parameter log, fixed seed.",
        "Detection: rolling features, Isolation Forest and voltage/current/power consistency rules; temporal evaluation (never random).",
        "Explainability: confidence score, SHAP values, plain-language explanation and an append-only decision log.",
        "Governance: confidence > 0.9 automatic action; 0.6 to 0.9 operator approval; < 0.6 or suspected falsification, human alert. Streamlit interface planned.",
        "Shared learning across sites: documented design (only anomaly patterns are shared, never raw data)."
      ]
    },
    "tags": [
      "Python",
      "Isolation Forest",
      "SHAP",
      "Streamlit",
      "Explainable AI"
    ],
    "url": "https://github.com/F-ieee/EnergieMind"
  },
  {
    "id": "argos",
    "featured": true,
    "title": {
      "fr": "Argos : assistant de surveillance de classe (IEEE ENIT, TSYP14)",
      "en": "Argos: classroom monitoring assistant (IEEE ENIT, TSYP14)"
    },
    "status": {
      "fr": "Prototype",
      "en": "Prototype"
    },
    "role": {
      "fr": "",
      "en": ""
    },
    "desc": {
      "fr": "Assistant qui signale à l’enseignant trois comportements possibles en classe (usage de téléphone, tête baissée durablement, conflit physique). L’enseignant confirme ou rejette chaque alerte après un court extrait vidéo : l’IA ne décide jamais seule et n’identifie personne.",
      "en": "Assistant that reports three possible classroom behaviours to the teacher (phone use, persistent head down, physical conflict). The teacher confirms or dismisses each alert after a short clip: the AI never decides alone and never identifies anyone."
    },
    "details": {
      "fr": [
        "Contexte : projet de l’équipe MissionX (IEEE ENIT) pour l’AOTN Challenge, TSYP 14.",
        "Architecture : caméra → Raspberry Pi (YOLO11-Pose, ByteTrack, YOLO11 pour les téléphones) → serveur FastAPI + SQLite avec WebSocket → application Flutter (Android, iOS, navigateur).",
        "Règles explicables « k images sur W » (par exemple téléphone : 10 sur 15), score = confiance moyenne × part d’images concernées, trois niveaux d’alerte.",
        "Mesures normalisées par la largeur d’épaules de chaque élève, donc indépendantes de la distance à la caméra.",
        "Seuil « tête baissée » calibré sur SCBehavior (400 images) : 82 % des têtes baissées détectées, 14 % de fausses alarmes.",
        "Confidentialité : la vidéo reste dans le réseau de l’école, extraits supprimés au bout de 24 h ou dès le rejet, aucune reconnaissance faciale, accès par rôle et journal d’audit.",
        "Installation en une commande sur Raspberry Pi et 60 tests automatisés (appareil, serveur, application, calibration).",
        "Mesuré sur Raspberry Pi 4 : environ 1,1 image/s. Limites connues : lire ou écrire ressemble à une tête baissée, précision et rappel pas encore mesurés sur des vidéos réelles."
      ],
      "en": [
        "Context: project by team MissionX (IEEE ENIT) for the AOTN Challenge, TSYP 14.",
        "Architecture: camera → Raspberry Pi (YOLO11-Pose, ByteTrack, YOLO11 for phones) → FastAPI + SQLite server with WebSocket → Flutter app (Android, iOS, browser).",
        "Explainable “k of W frames” rules (for example phone: 10 of 15), score = mean confidence × share of frames, three alert tiers.",
        "Measurements normalised by each student’s shoulder width, so they do not depend on camera distance.",
        "Head-down threshold calibrated on SCBehavior (400 images): 82% of heads down detected, 14% false alarms.",
        "Privacy: video stays on the school network, clips deleted after 24 h or on dismissal, no face recognition, role-based access and audit log.",
        "One-command install on Raspberry Pi and 60 automated tests (device, server, app, calibration).",
        "Measured on a Raspberry Pi 4: about 1.1 frames/s. Known limits: reading or writing looks like head down, precision and recall not yet measured on real classroom videos."
      ]
    },
    "tags": [
      "Python",
      "YOLO11",
      "FastAPI",
      "Flutter",
      "Raspberry Pi",
      "Computer vision"
    ],
    "url": "https://github.com/farah005/Argos"
  },
  {
    "id": "tnessnisa",
    "title": {
      "fr": "TNessnisa",
      "en": "TNessnisa"
    },
    "desc": {
      "fr": "Plateforme tunisienne d’intelligence sociale et média : transforme en temps réel les signaux de Facebook, TikTok, Instagram et Google Trends en décisions personnalisées (GO, PAUSE, ALERT, EXPLOIT) selon le profil : journaliste, entreprise, influenceur, citoyen ou ONG.",
      "en": "Tunisian social and media intelligence platform: turns Facebook, TikTok, Instagram and Google Trends signals into personalized decisions in real time (GO, PAUSE, ALERT, EXPLOIT) based on the user profile: journalist, business, influencer, citizen or NGO."
    },
    "tags": [
      "Real-time",
      "Social media"
    ],
    "url": "https://github.com/farah005/team-wie"
  },
  {
    "id": "iot-medical",
    "title": {
      "fr": "Plateforme IoT de suivi médical à distance (PFA2)",
      "en": "IoT Medical Remote Monitoring Platform (PFA2)"
    },
    "desc": {
      "fr": "Plateforme distribuée de télésurveillance cardiaque : une montre connectée (capteur PPG + accéléromètre) envoie ses signaux en temps réel, une IA détecte les anomalies et alerte le médecin sur un tableau de bord.",
      "en": "Distributed cardiac telemonitoring platform: a smartwatch (PPG sensor + accelerometer) streams signals in real time, an AI detects anomalies and alerts the clinician on a live dashboard."
    },
    "tags": [
      "Docker",
      "Kafka",
      "Spring Boot",
      "MQTT",
      "FastAPI",
      "XGBoost",
      "React",
      "InfluxDB",
      "Keycloak"
    ],
    "url": "https://github.com/eya-boukeri/pfa",
    "featured": true,
    "role": {
      "fr": "",
      "en": ""
    },
    "details": {
      "fr": [
        "Chaîne complète : montre → MQTT (Mosquitto) → Spring Boot → Kafka → services d’analyse et de notification, chacun consommant à son rythme.",
        "Fusion PPG + accéléromètre et calcul d’un score de qualité du signal (SQS) pour écarter les artefacts de mouvement (seuil 70 %).",
        "Service FastAPI : extraction de 14 caractéristiques physiologiques et classification XGBoost en moins de 50 ms.",
        "Stockage hybride : PostgreSQL (dossiers, audit), InfluxDB (séries temporelles) et Cloudflare R2 (signaux bruts archivés uniquement en cas d’anomalie).",
        "Alertes à trois niveaux (NORMAL, WARNING, CRITICAL) : SSE en direct, SMS Twilio et email pour les cas critiques.",
        "Sécurité : Keycloak (OAuth2/JWT, rôles médecin, patient, admin) derrière une API Gateway Spring Cloud.",
        "Tableau de bord React « Heartline » : courbe PPG en direct, liste de patients par gravité, inspection de la courbe brute d’une alerte.",
        "Test de charge : 50 patients simultanés pendant 300 s, 4 780 messages, 100 % de livraison, latence moyenne de bout en bout de 340 ms."
      ],
      "en": [
        "End-to-end pipeline: watch → MQTT (Mosquitto) → Spring Boot → Kafka → analytics and notification services, each consuming at its own pace.",
        "PPG + accelerometer fusion with a Signal Quality Score (SQS) to discard motion artifacts (70% threshold).",
        "FastAPI service: 14 physiological features and XGBoost classification in under 50 ms.",
        "Hybrid storage: PostgreSQL (records, audit), InfluxDB (time series) and Cloudflare R2 (raw signals archived only on anomaly).",
        "Three-level alerts (NORMAL, WARNING, CRITICAL): live SSE, Twilio SMS and email for critical cases.",
        "Security: Keycloak (OAuth2/JWT, doctor, patient, admin roles) behind a Spring Cloud API Gateway.",
        "React dashboard “Heartline”: live PPG curve, patient roster by severity, raw-signal inspection of any alert.",
        "Load test: 50 concurrent patients for 300 s, 4,780 messages, 100% delivery, 340 ms average end-to-end latency."
      ]
    }
  },
  {
    "id": "smurf-game",
    "title": {
      "fr": "Magical Forest Game (Smurfs)",
      "en": "Magical Forest Game (Smurfs)"
    },
    "desc": {
      "fr": "Jeu graphique développé en C# et .NET avec une architecture MVVM.",
      "en": "Graphical game developed in C# and .NET with an MVVM architecture."
    },
    "tags": [
      "C#",
      ".NET",
      "MVVM"
    ],
    "url": "https://github.com/farah005/SmurfGame"
  },
  {
    "id": "rdv-dentaire",
    "title": {
      "fr": "Application de prise de rendez-vous",
      "en": "Appointment Booking Application"
    },
    "desc": {
      "fr": "Conception et développement d’une application web de gestion de rendez-vous avec Java JEE.",
      "en": "Design and development of an appointment management web application with Java JEE."
    },
    "tags": [
      "Java JEE",
      "Web"
    ],
    "url": "https://github.com/farah005/Rendez-vous-Dentaire"
  },
  {
    "id": "enit-social",
    "title": {
      "fr": "ENIT Social, intranet web",
      "en": "ENIT Social, intranet web application"
    },
    "desc": {
      "fr": "Application web permettant aux étudiants et enseignants de l’ENIT de publier, commenter et aimer des posts au sein de leur département, avec des droits d’accès par département.",
      "en": "Web application allowing ENIT students and teachers to share posts, comments and likes within their departments, with department-based access rights."
    },
    "tags": [
      "ASP.NET Core MVC"
    ],
    "url": "https://github.com/farah005/SiteENIT-C-"
  },
  {
    "id": "nutrition-chatbot",
    "title": {
      "fr": "Chatbot de nutrition intelligent (PFA1)",
      "en": "Smart Nutrition Chatbot (PFA1)"
    },
    "desc": {
      "fr": "Chatbot basé sur un LLM, avec une interface web interactive.",
      "en": "LLM-based chatbot with an interactive web interface."
    },
    "tags": [
      "LLM",
      "Web"
    ],
    "url": "https://github.com/farah005/Nutrition-Chatbot"
  },
  {
    "id": "java-desktop",
    "title": {
      "fr": "Application de bureau Java avec interface graphique",
      "en": "Java Desktop Application with GUI"
    },
    "desc": {
      "fr": "Application desktop en Java et programmation orientée objet, avec une architecture maintenable.",
      "en": "Java / OOP desktop application with a graphical interface and a maintainable architecture."
    },
    "tags": [
      "Java",
      "OOP"
    ],
    "url": "https://github.com/HammaliWael/Mini-Projet"
  },
  {
    "id": "smart-pen",
    "title": {
      "fr": "Stylo intelligent pour utilisateurs dyslexiques (projet IEEE)",
      "en": "Smart Pen for Dyslexic Users (IEEE project)"
    },
    "desc": {
      "fr": "Application mobile connectée par Bluetooth à un stylo intelligent, pour aider à la parole et à l’apprentissage.",
      "en": "Mobile application connected by Bluetooth to a smart pen to assist speech and learning."
    },
    "tags": [
      "Flutter",
      "Bluetooth"
    ],
    "url": ""
  },
  {
    "id": "library-system",
    "title": {
      "fr": "Système de gestion de bibliothèque",
      "en": "Library Management System"
    },
    "desc": {
      "fr": "Application console en C pour gérer une bibliothèque.",
      "en": "C console application for library management."
    },
    "tags": [
      "C"
    ],
    "url": ""
  }
];