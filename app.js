const contact = {
  email: "brahimhanna001@gmail.com",
  phone: "+212 6 64 24 92 08",
  linkedin: "https://www.linkedin.com/in/ibrahim-hanna-0030b52a9/",
  github: "https://github.com/Ibrahim-hanna",
};
const cvUrl = "public/documents/Ibrahim%20HANNAFianle.pdf";
const certifications = [
  { issuer: "IBM · Credly", title: "Machine Learning with Python", url: "https://www.credly.com/badges/396446ea-ff92-4125-865a-d381164e0251" },
  { issuer: "HKUST", title: "Software Engineering: Modeling Software Systems using UML", url: "https://www.coursera.org/account/accomplishments/verify/P4WUXFKRLSBK" },
  { issuer: "Coursera", title: "Software Engineering: Software Design and Project Management", url: "https://www.coursera.org/account/accomplishments/verify/78YVDP7N7562" },
  { issuer: "Packt · Coursera · 29 décembre 2025", title: "Advanced Spring Cloud Microservices & Deployment with Docker", url: "https://coursera.org/share/1e21b4789039efef92e47bb920096682" },
  { issuer: "Coursera", title: "React Basics", url: "https://www.coursera.org/account/accomplishments/verify/QST1MF3OUPV6" },
  { issuer: "Coursera", title: "Introduction to Java and Object-Oriented Programming", url: "https://www.coursera.org/account/accomplishments/verify/DRVBIQHX1Z45" },
  { issuer: "Coursera", title: "SAP Professional Fundamentals", url: "https://www.coursera.org/account/accomplishments/verify/EJEUT62JG3AK" },
];
const projectDetails = {
  pde: {
    problem: "Dans les programmes automobiles, les informations projet sont dispersées : il devient difficile d’anticiper les retards de jalons et de prioriser les points durs.",
    role: "Prototype d’un modèle de prédiction des retards (Random Forest), conception d’un score de risque interprétable, intégration de LLM pour générer recommandations et rapports, pipeline d’ingestion automatisé et tableau de bord.",
    result: "Une plateforme prédictive qui centralise les données projet, classe les risques et propose des actions aux managers, avec une couche IA générative locale (Ollama) ou cloud (Azure OpenAI).",
  },
  rag: {
    problem: "Comment retrouver rapidement une information fiable dans un grand volume de documents métiers, sans lire chaque document ?",
    role: "Conception de l’architecture RAG : ingestion et découpage des documents, embeddings avec Sentence Transformers, recherche sémantique, génération de réponses par LLM et exposition via une API FastAPI.",
    result: "Un assistant qui répond en langage naturel à des questions sur des documents métiers, en citant les sources utilisées.",
  },
  vision: {
    problem: "Comment identifier automatiquement un produit à partir d’une simple image et en produire une description exploitable ?",
    role: "Prétraitement des images avec OpenCV, identification des objets avec des modèles Hugging Face Transformers, génération automatique des descriptions et caractéristiques, exposition via FastAPI.",
    result: "Une application de vision par ordinateur qui transforme une image en informations structurées sur le produit.",
  },
  fraud: {
    problem: "Comment repérer, parmi un grand nombre de transactions, celles qui sont potentiellement frauduleuses ou anormales ?",
    role: "Nettoyage et préparation des données transactionnelles avec Pandas et NumPy, entraînement et évaluation d’un modèle Random Forest avec scikit-learn.",
    result: "Un modèle de classification supervisée qui distingue les transactions normales des transactions potentiellement frauduleuses.",
  },
};

const engineeringTimeline = document.querySelector("#parcours .timeline-current");
if (engineeringTimeline) {
  const date = engineeringTimeline.querySelector(".timeline-date");
  if (date) date.textContent = "2023 — 2026";
}

const experienceList = document.querySelector(".experience-list");
const featuredExperience = experienceList?.querySelector(".experience-featured");
if (experienceList && featuredExperience) {
  const currentRole = document.createElement("article");
  currentRole.className = "experience-item";
  currentRole.innerHTML = '<div class="experience-meta"><span class="experience-index">01</span><span>CDI · 08/2026 — PRÉSENT</span></div><div class="experience-main"><div class="experience-title"><div><p class="eyebrow">Data Engineer</p><h3>Capgemini Engineering</h3><p class="experience-location">Casablanca, Maroc</p></div></div><p class="experience-description">Conception et optimisation de pipelines d’intégration de données.</p><div class="experience-points"><span>Automatisation des flux de données et tableaux de bord décisionnels pour les équipes métier</span><span>Contrôle de la qualité, de la fiabilité et de la gouvernance des données</span></div><div class="inline-tags"><span>Python</span><span>SQL</span><span>Power BI</span><span>Excel</span></div></div>';
  experienceList.insertBefore(currentRole, featuredExperience);

  const pfeDate = featuredExperience.querySelector(".experience-meta span:last-child");
  if (pfeDate) pfeDate.textContent = "02/2026 — 07/2026";
  const pfeTitle = featuredExperience.querySelector(".experience-title .eyebrow");
  if (pfeTitle) pfeTitle.textContent = "Stagiaire Data & Intelligence Artificielle";

  for (const [index, experience] of [...experienceList.querySelectorAll(".experience-item")].entries()) {
    const company = experience.querySelector(".experience-title h3")?.textContent;
    const date = experience.querySelector(".experience-meta span:last-child");
    const number = experience.querySelector(".experience-index");
    if (number) number.textContent = `0${index + 1}`;
    const role = experience.querySelector(".experience-title .eyebrow");
    if (company === "Edetsecom") {
      if (date) date.textContent = "07/2025 — 08/2025";
      if (role) role.textContent = "Stagiaire Développeur Full Stack Java";
    }
    if (company === "Novopharma") {
      if (date) date.textContent = "07/2024";
      if (role) role.textContent = "Stagiaire Développeur Desktop";
    }
  }
}

const heroRole = document.querySelector(".hero-role");
if (heroRole) heroRole.textContent = "Ingénieur Data — Parcours MIAGE";
const heroHeading = document.querySelector("#hero-title");
if (heroHeading && !document.querySelector(".hero-portrait")) {
  const nameRow = document.createElement("div");
  nameRow.className = "hero-name-row";
  const portrait = document.createElement("img");
  portrait.className = "hero-portrait";
  portrait.src = "public/images/ibrahim-hanna.jpg";
  portrait.alt = "Portrait d’Ibrahim HANNA";
  portrait.width = 160;
  portrait.height = 160;
  portrait.fetchPriority = "high";
  heroHeading.before(nameRow);
  nameRow.append(heroHeading, portrait);
}
const heroLead = document.querySelector(".hero-lead");
if (heroLead) {
  heroLead.textContent = "Data Engineer chez Capgemini Engineering, je conçois des solutions qui combinent pipelines de données, machine learning et LLM pour aider à la décision.";
}
const heroGoal = document.createElement("div");
heroGoal.className = "hero-goal";
heroGoal.innerHTML = "<strong>Objectif</strong><span>Master 2 Intelligence Artificielle & Science des Données — rentrée 2027</span>";
heroLead?.after(heroGoal);
const heroTopics = document.querySelector(".topic-row");
if (heroTopics) {
  heroTopics.replaceChildren(...["Intelligence artificielle", "Machine Learning", "LLM & RAG", "Data Engineering"]
    .map((topic) => {
      const badge = document.createElement("span");
      badge.textContent = topic;
      return badge;
    }));
}
const heroStatus = document.querySelector(".hero-contact > span:first-child");
if (heroStatus) heroStatus.textContent = "Candidat Master 2 IA & Data · rentrée 2027";
const heroContactLink = document.querySelector(".hero-contact a");
if (heroContactLink) {
  heroContactLink.href = "#objectif";
  heroContactLink.textContent = "Mon projet d’études →";
}
const visualKicker = document.querySelector(".visual-kicker");
const visualLive = document.querySelector(".visual-live");
const previewLabel = document.querySelector(".preview-label");
const previewHeading = document.querySelector(".preview-heading h2");
if (visualKicker) visualKicker.textContent = "DATA & IA APPLIQUÉE";
if (visualLive) visualLive.textContent = "IA / DATA";
if (previewLabel) previewLabel.textContent = "DONNÉES · MODÈLES · DÉCISION";
if (previewHeading) previewHeading.textContent = "Pipeline IA";
const previewMetrics = document.querySelectorAll(".preview-metrics > div");
const heroMetrics = [["Machine Learning", "Prédiction", "Random Forest · scikit-learn"], ["IA générative", "LLM", "RAG · agents"]];
previewMetrics.forEach((metric, index) => {
  const [label, value, detail] = heroMetrics[index] ?? [];
  if (!label) return;
  metric.querySelector("span").textContent = label;
  metric.querySelector("strong").textContent = value;
  metric.querySelector("small").textContent = detail;
});
const heroFlow = document.createElement("div");
heroFlow.className = "hero-system-flow";
heroFlow.setAttribute("aria-label", "Données, pipeline, modèle de machine learning, LLM et décision");
const systemStages = [["Données", "Collecte"], ["Pipeline", "Python · SQL"], ["Modèle ML", "scikit-learn"], ["LLM", "RAG · agents"], ["Décision", "Dashboard"]];
systemStages.forEach(([name, detail], index) => {
  const stage = document.createElement("div");
  stage.className = `hero-system-step${index === 1 ? " system-focus" : ""}${index === 4 ? " decision-focus" : ""}`;
  const label = document.createElement("strong");
  label.textContent = name;
  const description = document.createElement("small");
  description.textContent = detail;
  stage.append(label, description);
  heroFlow.append(stage);
  if (index < systemStages.length - 1) {
    const connector = document.createElement("span");
    connector.className = "hero-system-connector";
    connector.setAttribute("aria-hidden", "true");
    connector.textContent = "→";
    heroFlow.append(connector);
  }
});
document.querySelector(".chart-area")?.replaceChildren(heroFlow);
const visualCaption = document.querySelector(".visual-caption");
if (visualCaption) {
  const caption = visualCaption.querySelector("span:first-child");
  const index = visualCaption.querySelector("span:last-child");
  if (caption) caption.textContent = "DONNÉES → MODÈLES → DÉCISION";
  if (index) index.textContent = "IA / 01";
}
const previewFooter = document.querySelector(".preview-footer");
if (previewFooter) {
  const signal = previewFooter.querySelector("span:first-child");
  const decision = previewFooter.querySelector("span:last-child");
  if (signal) {
    const marker = document.createElement("b");
    marker.className = "flow-marker";
    signal.replaceChildren(marker, document.createTextNode("Pipeline de bout en bout"));
  }
  if (decision) decision.textContent = "Aide à la décision";
}
const visualIndex = document.querySelector(".visual-index");
if (visualIndex) visualIndex.textContent = "IA";

const objectiveSection = document.querySelector(".objective-band");
if (objectiveSection) objectiveSection.id = "objectif";
const navigation = document.querySelector(".navigation");
if (navigation && !navigation.querySelector('a[href="#accueil"]')) {
  const homeLink = document.createElement("a");
  homeLink.href = "#accueil";
  homeLink.textContent = "Accueil";
  navigation.prepend(homeLink);
  const objectiveLink = document.createElement("a");
  objectiveLink.href = "#objectif";
  objectiveLink.textContent = "Objectif";
  navigation.querySelector('a[href="#contact"]')?.before(objectiveLink);
}

const sequenceText = document.querySelector(".intro-inner p");
if (sequenceText) {
  const sequence = document.createElement("div");
  sequence.className = "position-sequence";
  sequence.setAttribute("aria-label", "MIAGE, Data Engineering, Machine Learning, IA générative, Master 2 IA");
  ["MIAGE", "Data Engineering", "Machine Learning", "IA générative", "Master 2 IA"]
    .forEach((label, index, stages) => {
      const stage = document.createElement("span");
      stage.className = "position-stage";
      stage.textContent = label;
      sequence.append(stage);
      if (index < stages.length - 1) {
        const connector = document.createElement("span");
        connector.className = "position-connector";
        connector.setAttribute("aria-hidden", "true");
        sequence.append(connector);
      }
    });
  sequenceText.replaceWith(sequence);
}
const positioningNote = document.querySelector(".intro-note");
if (positioningNote) positioningNote.textContent = "Des données bien structurées aux modèles qui aident à décider.";

const profileTitle = document.querySelector("#profil-title");
if (profileTitle) {
  profileTitle.replaceChildren(
    document.createTextNode("Des données fiables."),
    document.createElement("br"),
    document.createTextNode("Des modèles utiles. Des décisions éclairées."),
  );
}
const profileCopy = document.querySelector(".profile-copy");
if (profileCopy) {
  const paragraphs = [
    "Ingénieur en Génie Informatique (parcours MIAGE, EMSI Casablanca) et Data Engineer chez Capgemini Engineering, je travaille sur toute la chaîne de la donnée : collecte, préparation, modélisation et restitution.",
    "Mon PFE m’a permis de concevoir une plateforme prédictive qui combine machine learning, LLM et pipelines de données pour des programmes automobiles Stellantis. Mes projets académiques couvrent aussi le RAG, la vision par ordinateur et la détection de fraude.",
    "Je souhaite approfondir l’intelligence artificielle et le big data en Master 2, pour évoluer vers un poste d’ingénieur IA / Data.",
  ];
  profileCopy.replaceChildren(...paragraphs.map((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }));
}

const bridge = document.querySelector(".bridge");
if (bridge) {
  const pillars = [
    ["Collecter", "Pipelines · Python · SQL", "Automatiser l’ingestion et garantir des données propres et fiables."],
    ["Modéliser", "Machine Learning · scikit-learn", "Entraîner et évaluer des modèles prédictifs adaptés au problème."],
    ["Augmenter", "LLM · RAG · agents", "Intégrer l’IA générative pour analyser, résumer et recommander."],
    ["Décider", "Dashboards · Power BI · indicateurs", "Restituer les résultats sous une forme utile à la décision."],
  ];
  bridge.replaceChildren(...pillars.map(([title, scope, description], index) => {
    const step = document.createElement("div");
    step.className = "bridge-step";
    step.innerHTML = `<span class="bridge-number">0${index + 1}</span><div><strong>${title}</strong><small>${scope}</small><p>${description}</p></div>`;
    return step;
  }));
}

if (featuredExperience) {
  const pfeType = featuredExperience.querySelector(".experience-title .eyebrow");
  const projectName = featuredExperience.querySelector(".experience-project-name");
  const description = featuredExperience.querySelector(".experience-description");
  if (pfeType) pfeType.textContent = "Stagiaire Data & Intelligence Artificielle";
  if (projectName) projectName.textContent = "PDE — Predictive Delay Engine";
  if (description) description.textContent = "Plateforme prédictive de suivi des risques projets pour des programmes automobiles Stellantis (MG2 Engineering).";
  const contributions = [
    "Prototype de modèle de prédiction des retards de jalons (Random Forest, scikit-learn), puis conception d’un score de risque interprétable",
    "Intégration de LLM (Mistral et Qwen2.5 via Ollama, Azure OpenAI) pour générer recommandations et rapports : prompt engineering et validation des sorties",
    "Architecture agentique : corrélation des risques, priorisation et relances automatiques à trois niveaux",
    "Pipeline d’ingestion automatisé (n8n, déduplication SHA-256), API FastAPI, base SQLite et tableau de bord Streamlit",
  ];
  const points = featuredExperience.querySelector(".experience-points");
  points?.replaceChildren(...contributions.map((text) => {
    const item = document.createElement("span");
    item.textContent = text;
    return item;
  }));
  const technologies = ["Python", "scikit-learn", "Random Forest", "LLM / Ollama", "Azure OpenAI", "FastAPI", "n8n", "Streamlit", "SQLite"];
  const tags = featuredExperience.querySelector(".experience-main > .inline-tags");
  tags?.replaceChildren(...technologies.map((text) => {
    const tag = document.createElement("span");
    tag.textContent = text;
    return tag;
  }));
}

const experienceCopy = {
  Edetsecom: {
    description: "Participation à la conception et au développement de solutions applicatives destinées à digitaliser et structurer des processus métier.",
    points: ["Compréhension des besoins fonctionnels", "Conception d’API et de fonctionnalités métier", "Gestion et structuration des données", "Amélioration des processus existants"],
    technologies: ["Java", "Spring Boot", "SQL", "REST API", "Git"],
  },
  Novopharma: {
    description: "Contribution à une application de gestion interne à partir des besoins des utilisateurs.",
    points: ["Analyse des besoins et des traitements", "Automatisation de tâches métier", "Structuration des données", "Développement de fonctionnalités de gestion"],
    technologies: ["Développement applicatif", "Base de données", "Automatisation"],
  },
};
for (const experience of experienceList?.querySelectorAll(".experience-item") ?? []) {
  const company = experience.querySelector(".experience-title h3")?.textContent;
  const content = experienceCopy[company];
  if (!content) continue;
  const description = experience.querySelector(".experience-description");
  if (description) description.textContent = content.description;
  let points = experience.querySelector(".experience-points");
  if (!points) {
    points = document.createElement("div");
    points.className = "experience-points";
    experience.querySelector(".experience-main")?.append(points);
  }
  points.replaceChildren(...content.points.map((text) => {
    const item = document.createElement("span");
    item.textContent = text;
    return item;
  }));
  const tags = experience.querySelector(".experience-main > .inline-tags");
  tags?.replaceChildren(...content.technologies.map((text) => {
    const tag = document.createElement("span");
    tag.textContent = text;
    return tag;
  }));
}

const projectOrder = ["pde", "rag", "vision", "fraud"];
const projectGrid = document.querySelector(".project-grid");
if (projectGrid) {
  const projectCards = projectOrder.map((key) => projectGrid.querySelector(`[data-project="${key}"]`)?.closest(".project-card"));
  projectCards.filter(Boolean).forEach((card, index) => {
    card.classList.toggle("project-card-featured", index === 0);
    projectGrid.append(card);
  });
}
const projectCopy = {
  pde: {
    type: "PFE · MACHINE LEARNING · LLM · AGENTS",
    title: "PDE — Predictive Delay Engine",
    description: "Anticiper les retards de jalons, prioriser les risques et générer des recommandations avec des LLM.",
  },
  rag: {
    type: "IA GÉNÉRATIVE · RAG · RECHERCHE SÉMANTIQUE",
    title: "Assistant IA d’analyse documentaire",
    description: "Interroger des documents métiers en langage naturel et obtenir des réponses contextualisées avec leurs sources.",
  },
  vision: {
    type: "VISION PAR ORDINATEUR · TRANSFORMERS",
    title: "Reconnaissance d’images de produits",
    description: "Identifier des objets à partir d’images et générer automatiquement leurs descriptions et caractéristiques.",
  },
  fraud: {
    type: "MACHINE LEARNING · CLASSIFICATION · DATA SCIENCE",
    title: "Détection de transactions frauduleuses",
    description: "Classer les transactions comme normales ou potentiellement frauduleuses avec un modèle Random Forest.",
  },
};
for (const card of projectGrid?.querySelectorAll(".project-card") ?? []) {
  const key = card.querySelector("[data-project]")?.dataset.project;
  const copy = projectCopy[key];
  if (!copy) continue;
  card.querySelector(".project-type").textContent = copy.type;
  card.querySelector(".project-card-body h3").textContent = copy.title;
  card.querySelector(".project-card-body > p").textContent = copy.description;
}

const skillGroups = [
  ["IA & Machine Learning", "Apprentissage supervisé · Random Forest · scikit-learn · Détection d’anomalies · Vision par ordinateur (OpenCV) · Hugging Face Transformers", "IA"],
  ["IA générative & LLM", "LLM (Ollama, Azure OpenAI) · RAG · LangChain · Sentence Transformers · Recherche sémantique · Prompt engineering · Systèmes agentiques", "LLM"],
  ["Data", "Python (Pandas, NumPy) · SQL · Pipelines ETL · Data Warehouse · PostgreSQL · MySQL · SQL Server · Oracle · SQLite", "DATA"],
  ["Développement", "FastAPI · Streamlit · Java Spring Boot · React · Git", "DEV"],
  ["Visualisation & décision", "Power BI · Plotly · Excel · Indicateurs · Tableaux de bord", "BI"],
  ["Méthodes", "Modélisation UML · Gestion de projet", "UML"],
];
const skillsGrid = document.querySelector(".skills-grid");
if (skillsGrid) {
  skillsGrid.replaceChildren(...skillGroups.map(([title, text, mark], index) => {
    const row = document.createElement("article");
    row.className = "skill-group";
    row.innerHTML = `<span class="skill-index">0${index + 1}</span><div><h3>${title}</h3><p>${text}</p></div><span class="skill-mark">${mark}</span>`;
    return row;
  }));
}

const education = document.querySelector("#parcours .timeline-current .timeline-content");
if (education) {
  const institution = education.querySelector(".timeline-title-row p");
  if (institution) institution.textContent = "EMSI — École Marocaine des Sciences de l’Ingénieur, Casablanca";
  const summary = document.createElement("p");
  summary.className = "education-summary";
  summary.textContent = "Niveau Bac+5. Modules principaux : Machine Learning, Deep Learning, statistiques, programmation Python, bases de données et Business Intelligence.";
  education.querySelector(".inline-tags")?.before(summary);
  const tags = education.querySelector(".inline-tags");
  tags?.replaceChildren(...["Machine Learning", "Deep Learning", "Statistiques", "Python", "Bases de données & BI"].map((text) => {
    const tag = document.createElement("span");
    tag.textContent = text;
    return tag;
  }));
}

const objectiveInner = document.querySelector(".objective-inner");
if (objectiveInner) {
  const eyebrow = objectiveInner.querySelector(".eyebrow");
  const title = objectiveInner.querySelector("h2");
  const summary = objectiveInner.querySelector("p:not(.eyebrow)");
  if (eyebrow) eyebrow.textContent = "MASTER 2 · PROJET D’ÉTUDES · RENTRÉE 2027";
  if (title) title.textContent = "Mon projet d’études";
  if (summary) summary.textContent = "Approfondir l’intelligence artificielle et le big data en Master 2 en France, pour devenir ingénieur IA / Data.";
  objectiveInner.querySelector(".objective-tags")?.remove();
  const objectives = [
    ["01", "Objectif académique", "Master 2 Intelligence Artificielle & Science des Données", "Machine learning, deep learning et big data, en formation initiale."],
    ["02", "Ce que j’apporte", "Une expérience concrète de l’IA appliquée", "Machine learning, LLM et pipelines de données en contexte industriel chez Capgemini Engineering."],
    ["03", "À moyen terme", "Ingénieur IA / Data", "Ingénieur IA · Consultant spécialisé IA / Data · Chef de projet technique"],
  ];
  const grid = document.createElement("div");
  grid.className = "objective-grid";
  objectives.forEach(([number, label, heading, description]) => {
    const card = document.createElement("article");
    card.className = "objective-card";
    const index = document.createElement("span");
    index.className = "objective-index";
    index.textContent = number;
    const stage = document.createElement("p");
    stage.className = "objective-stage";
    stage.textContent = label;
    const cardTitle = document.createElement("h3");
    cardTitle.textContent = heading;
    const cardDescription = document.createElement("p");
    cardDescription.textContent = description;
    card.append(index, stage, cardTitle, cardDescription);
    grid.append(card);
  });
  objectiveInner.append(grid);
}

const contactTitle = document.querySelector("#contact-title");
if (contactTitle) contactTitle.textContent = "Construisons la prochaine étape";
const contactCopy = document.querySelector(".contact-main > p:not(.eyebrow)");
if (contactCopy) {
  contactCopy.textContent = "Candidat à un Master 2 en Intelligence Artificielle et Science des Données pour la rentrée 2027. Je serais heureux d’échanger sur mon parcours et mes projets.";
  const contactSupport = document.createElement("p");
  contactSupport.className = "contact-support";
  contactSupport.textContent = "Data, machine learning, LLM : je souhaite approfondir ces sujets dans un cadre académique exigeant.";
  contactCopy.after(contactSupport);
}

async function enableDownloadWhenAvailable(link, path, readyLabel, pendingLabel) {
  link.href = path;
  link.setAttribute("aria-disabled", "true");
  link.textContent = pendingLabel;
  link.addEventListener("click", (event) => {
    if (link.getAttribute("aria-disabled") === "true") event.preventDefault();
  });

  if (path === cvUrl && window.location.protocol === "file:") {
    link.removeAttribute("aria-disabled");
    link.textContent = readyLabel;
    return;
  }

  try {
    const response = await fetch(path, { method: "HEAD" });
    if (response.ok) {
      link.removeAttribute("aria-disabled");
      link.textContent = readyLabel;
    }
  } catch {
    link.title = "Ajouter le fichier puis ouvrir le portfolio via un serveur web.";
  }
}

const menuToggle = document.querySelector(".menu-toggle");
const englishCvRow = [...document.querySelectorAll(".documents-list .document-row")]
  .find((row) => row.textContent.includes("CV — English"));
englishCvRow?.remove();

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
  navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Ouvrir le menu");
  });
});

const sectionLinks = [...document.querySelectorAll('.navigation a[href^="#"]')];
const observedSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const updateActiveSection = () => {
  const checkpoint = window.scrollY + 150;
  const current = observedSections.reduce((active, section) => (
    section.offsetTop <= checkpoint ? section : active
  ), observedSections[0]);
  if (!current) return;
  sectionLinks.forEach((link) => {
    if (link.hash === `#${current.id}`) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
};
window.addEventListener("scroll", updateActiveSection, { passive: true });
window.addEventListener("resize", updateActiveSection);
updateActiveSection();

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.body.classList.add("motion-ready");
  let pendingRevealItems = [...document.querySelectorAll(
    ".hero-copy, .hero-visual, .section-heading, .profile-copy, .bridge, .timeline-item, .experience-item, .project-card, .skill-group, .documents-grid, .objective-inner, .objective-card, .position-sequence, .contact-main, .contact-side",
  )];
  pendingRevealItems.forEach((item, index) => {
    item.classList.add("reveal-item");
    item.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
  });

  const updateVisibleReveals = () => {
    pendingRevealItems = pendingRevealItems.filter((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top >= window.innerHeight - 36 || rect.bottom <= 0) return true;
      item.classList.add("is-visible");
      return false;
    });
  };
  window.addEventListener("scroll", updateVisibleReveals, { passive: true });
  window.addEventListener("resize", updateVisibleReveals);
  updateVisibleReveals();
}

const projectDialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");

function openProject(projectName) {
  const template = document.querySelector(`#project-${projectName}`);
  if (!template || !projectDialog || !dialogContent) return;
  dialogContent.replaceChildren(template.content.cloneNode(true));
  dialogContent.classList.add("project-content-ready");
  const details = projectDetails[projectName];
  if (details) {
    const createSection = (title, text) => {
      const section = document.createElement("section");
      section.className = "dialog-section";
      const heading = document.createElement("h3");
      heading.textContent = title;
      const description = document.createElement("p");
      description.textContent = text;
      section.append(heading, description);
      return section;
    };
    const firstSection = dialogContent.querySelector(".dialog-section");
    const problemSection = createSection("Problématique", details.problem);
    const roleSection = createSection("Mon rôle", details.role);
    if (firstSection) firstSection.after(problemSection, roleSection);
    const resultSection = createSection("Résultat & apport", details.result);
    const confidentialityNote = dialogContent.querySelector(".confidentiality-note");
    if (confidentialityNote) confidentialityNote.before(resultSection);
    else dialogContent.append(resultSection);
  }
  projectDialog.showModal();
  document.body.classList.add("body-lock");
}

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.project));
});

document.querySelector(".dialog-close")?.addEventListener("click", () => projectDialog?.close());
projectDialog?.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});
projectDialog?.addEventListener("close", () => document.body.classList.remove("body-lock"));

document.querySelectorAll("[data-print-cv]").forEach((button) => {
  button.textContent = "Version imprimable";
  button.addEventListener("click", () => window.print());
});

const navCvButton = document.querySelector(".nav-cv");
if (navCvButton) {
  const navCvLink = document.createElement("a");
  navCvLink.className = "nav-cv";
  navCvLink.dataset.cvDownload = "";
  navCvLink.setAttribute("download", "Ibrahim_HANNA_CV.pdf");
  navCvLink.innerHTML = '<span aria-hidden="true">↧</span> Télécharger mon CV';
  navCvButton.replaceWith(navCvLink);
  enableDownloadWhenAvailable(navCvLink, cvUrl, "Télécharger mon CV", "CV PDF à ajouter");
}

const cvRow = document.querySelector(".documents-list .document-row:not(.document-pending)");
if (cvRow) {
  const cvLink = document.createElement("a");
  cvLink.className = "text-link cv-download-link";
  cvLink.dataset.cvDownload = "";
  cvLink.setAttribute("download", "Ibrahim_HANNA_CV.pdf");
  cvRow.querySelector(".text-link")?.before(cvLink);
  enableDownloadWhenAvailable(cvLink, cvUrl, "Télécharger le CV", "CV PDF à ajouter");
  const cvDescription = cvRow.querySelector("small");
  if (cvDescription) cvDescription.textContent = "CV PDF fourni · téléchargement direct";
}

const certificationPlaceholder = document.querySelector(".documents-list .document-row.document-pending");
if (certificationPlaceholder) {
  const certificationList = document.createElement("div");
  certificationList.className = "certification-list";
  certifications.forEach((certification) => {
    const row = document.createElement("div");
    row.className = "certification-row";
    const copy = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = certification.title;
    const issuer = document.createElement("small");
    issuer.textContent = certification.issuer;
    copy.append(title, issuer);
    const link = document.createElement("a");
    link.className = "text-link certification-link";
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    row.append(copy, link);
    certificationList.append(row);
    if (certification.url) {
      link.href = certification.url;
      link.textContent = "Vérifier le certificat";
    } else {
      enableDownloadWhenAvailable(link, certification.file, "Voir le certificat", "Certificat à ajouter");
    }
  });
  certificationPlaceholder.replaceWith(certificationList);
}

const emailLink = document.querySelector("[data-email-link]");
const emailLabel = document.querySelector("[data-email-label]");
if (contact.email) {
  emailLink?.setAttribute("href", `mailto:${contact.email}`);
  if (emailLabel) emailLabel.textContent = contact.email;
} else {
  emailLink?.setAttribute("aria-disabled", "true");
}

const phoneLabel = document.querySelector("[data-phone-label]");
if (contact.phone && phoneLabel) {
  const phoneLink = document.createElement("a");
  phoneLink.href = `tel:${contact.phone.replace(/[^+\d]/g, "")}`;
  phoneLink.textContent = contact.phone;
  phoneLabel.replaceWith(phoneLink);
}

document.querySelectorAll("[data-social]").forEach((link) => {
  const url = contact[link.dataset.social];
  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.setAttribute("aria-disabled", "true");
    link.addEventListener("click", (event) => event.preventDefault());
    link.title = "Ajouter le lien dans app.js";
  }
});

document.querySelector(".qr-panel")?.remove();
const documentsGrid = document.querySelector(".documents-grid");
if (documentsGrid) {
  documentsGrid.classList.add("documents-grid-no-qr");
  documentsGrid.style.gridTemplateColumns = "minmax(0, 1fr)";
}
