const contact = {
  email: "brahimhanna001@gmail.com",
  phone: "+212 6 64 24 92 08",
  linkedin: "https://www.linkedin.com/in/ibrahim-hanna-0030b52a9/",
  github: "https://github.com/Ibrahim-hanna",
};
const portfolioUrl = "https://ibrahim-hanna.github.io";
const cvUrl = "public/documents/Ibrahim%20HANNA%20(2).pdf";
const certifications = [
  { issuer: "IBM · Credly", title: "Machine Learning with Python", url: "https://www.credly.com/badges/396446ea-ff92-4125-865a-d381164e0251" },
  { issuer: "University of Michigan", title: "Programming for Everybody (Getting Started with Python)", url: "https://www.coursera.org/account/accomplishments/verify/96J9QFRBYPKD" },
  { issuer: "HKUST", title: "Software Engineering: Modeling Software Systems using UML", url: "https://www.coursera.org/account/accomplishments/verify/P4WUXFKRLSBK" },
  { issuer: "Packt · Coursera · 29 décembre 2025", title: "Advanced Spring Cloud Microservices & Deployment with Docker", url: "https://coursera.org/share/1e21b4789039efef92e47bb920096682" },
  { issuer: "Coursera", title: "SAP Professional Fundamentals", url: "https://www.coursera.org/account/accomplishments/verify/EJEUT62JG3AK" },
  { issuer: "Coursera", title: "The Art of the Job Interview", url: "https://www.coursera.org/account/accomplishments/verify/A209TK68CK57" },
  { issuer: "Coursera", title: "Introduction to Java and Object-Oriented Programming", url: "https://www.coursera.org/account/accomplishments/verify/DRVBIQHX1Z45" },
  { issuer: "Coursera", title: "React Basics", url: "https://www.coursera.org/account/accomplishments/verify/QST1MF3OUPV6" },
  { issuer: "Coursera", title: "The Unix Workbench", url: "https://www.coursera.org/account/accomplishments/verify/FADA5EZQHENN" },
  { issuer: "Coursera", title: "La recherche documentaire", url: "https://www.coursera.org/account/accomplishments/verify/45ED523MHYUJ" },
  { issuer: "Coursera", title: "Software Engineering: Software Design and Project Management", url: "https://www.coursera.org/account/accomplishments/verify/78YVDP7N7562" },
  { issuer: "Coursera", title: "Successful Presentation", url: "https://www.coursera.org/account/accomplishments/verify/XY5NPD3LUXLD" },
  { issuer: "Coursera", title: "Introduction à la programmation orientée objet (en C++)", url: "https://www.coursera.org/account/accomplishments/verify/5UUM64BPYT9X" },
];
const projectDetails = {
  pde: {
    problem: "Les informations projet étant réparties entre différentes sources, l’enjeu était de centraliser les données, suivre les jalons, identifier les situations à risque et faciliter l’aide à la décision.",
    role: "Analyse du besoin, structuration des données projet, définition des indicateurs, automatisation de vérifications métier et conception d’une interface de pilotage.",
    result: "Une plateforme de suivi des risques projets qui valorise les données opérationnelles pour aider au pilotage. L’IA générative a été explorée comme assistance utilisateur.",
  },
  erpconnect: {
    problem: "Comment faire circuler l’information entre un ERP, les applications métier et les outils de pilotage tout en conservant une donnée cohérente et exploitable ?",
    role: "Analyse du besoin fonctionnel, modélisation des données, intégration Odoo, échanges API, synchronisation des informations et exploitation des données pour les KPI.",
    result: "Une architecture d’intégration ERP orientée processus métier, cohérence des données et pilotage décisionnel.",
  },
  bi: {
    problem: "Comment transformer des données de ventes et de stocks en indicateurs lisibles pour suivre les performances commerciales ?",
    role: "Conception d’un entrepôt de données en schéma étoile, développement de tableaux de bord Power BI et mise en place d’indicateurs commerciaux.",
    result: "Des analyses décisionnelles des ventes, des stocks et des performances commerciales à partir de données d’entreprise.",
  },
  academic: {
    problem: "Comment structurer les principales activités d’un établissement académique autour de ses acteurs, de ses processus et de règles métier cohérentes ?",
    role: "Identification des acteurs et besoins, modélisation des processus, structuration des données et définition des principales règles métier.",
    result: "Un système d’information académique pensé pour automatiser les opérations administratives et renforcer la traçabilité.",
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
  currentRole.innerHTML = '<div class="experience-meta"><span class="experience-index">01</span><span>CDI · 08/2026 — PRÉSENT</span></div><div class="experience-main"><div class="experience-title"><div><p class="eyebrow">Data Engineer</p><h3>Capgemini Engineering</h3><p class="experience-location">Casablanca, Maroc</p></div></div><p class="experience-description">Conception et optimisation de solutions d’intégration et d’exploitation des données.</p><div class="experience-points"><span>Automatisation des flux pour les besoins décisionnels des métiers</span><span>Amélioration de la qualité, de la fiabilité et de la gouvernance des données</span><span>Collaboration avec les équipes fonctionnelles et techniques sur des projets de transformation digitale</span></div><div class="inline-tags"><span>Data Engineering</span><span>Intégration de données</span><span>Qualité des données</span><span>Gouvernance</span></div></div>';
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
if (heroRole) heroRole.textContent = "Ingénieur Informatique — Parcours MIAGE";
const heroLead = document.querySelector(".hero-lead");
if (heroLead) {
  heroLead.textContent = "À l’interface entre les besoins métier, les systèmes d’information et les solutions ERP, avec un socle technique en BI, Data et développement applicatif.";
}
const heroGoal = document.createElement("div");
heroGoal.className = "hero-goal";
heroGoal.innerHTML = "<strong>Objectif</strong><span>Master 2 Management des Systèmes d’Information — orientation ERP</span>";
heroLead?.after(heroGoal);
const heroTopics = document.querySelector(".topic-row");
if (heroTopics) {
  heroTopics.replaceChildren(...["Systèmes d’Information", "ERP", "Business Analysis", "Transformation digitale"]
    .map((topic) => {
      const badge = document.createElement("span");
      badge.textContent = topic;
      return badge;
    }));
}
const heroStatus = document.querySelector(".hero-contact > span:first-child");
if (heroStatus) heroStatus.textContent = "Master 2 Management des SI · orientation ERP";
const heroContactLink = document.querySelector(".hero-contact a");
if (heroContactLink) {
  heroContactLink.href = "#objectif";
  heroContactLink.textContent = "Alternance en France →";
}
const visualKicker = document.querySelector(".visual-kicker");
const visualLive = document.querySelector(".visual-live");
const previewLabel = document.querySelector(".preview-label");
const previewHeading = document.querySelector(".preview-heading h2");
if (visualKicker) visualKicker.textContent = "SYSTÈMES D’INFORMATION";
if (visualLive) visualLive.textContent = "ERP / SI";
if (previewLabel) previewLabel.textContent = "PROCESSUS · INTÉGRATION · PILOTAGE";
if (previewHeading) previewHeading.textContent = "Flux d’information";
const previewMetrics = document.querySelectorAll(".preview-metrics > div");
const heroMetrics = [["ERP", "Odoo", "Processus métier"], ["Pilotage", "KPI", "Aide à la décision"]];
previewMetrics.forEach((metric, index) => {
  const [label, value, detail] = heroMetrics[index] ?? [];
  if (!label) return;
  metric.querySelector("span").textContent = label;
  metric.querySelector("strong").textContent = value;
  metric.querySelector("small").textContent = detail;
});
const heroFlow = document.createElement("div");
heroFlow.className = "hero-system-flow";
heroFlow.setAttribute("aria-label", "Processus métier, ERP Odoo, API, données, BI et KPI");
const systemStages = [["Processus", "Métier"], ["ERP", "Odoo"], ["API", "Intégration"], ["Données", "SQL"], ["BI · KPI", "Pilotage"]];
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
  if (caption) caption.textContent = "PROCESSUS → ERP → DONNÉES → PILOTAGE";
  if (index) index.textContent = "SI / 01";
}
const previewFooter = document.querySelector(".preview-footer");
if (previewFooter) {
  const signal = previewFooter.querySelector("span:first-child");
  const decision = previewFooter.querySelector("span:last-child");
  if (signal) {
    const marker = document.createElement("b");
    marker.className = "flow-marker";
    signal.replaceChildren(marker, document.createTextNode("Flux intégrés"));
  }
  if (decision) decision.textContent = "Performance métier";
}
const visualIndex = document.querySelector(".visual-index");
if (visualIndex) visualIndex.textContent = "SI";

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
  sequence.setAttribute("aria-label", "MIAGE, systèmes d’information, ERP, Business Analysis, transformation digitale");
  ["MIAGE", "Systèmes d’information", "ERP", "Business Analysis", "Transformation digitale"]
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
if (positioningNote) positioningNote.textContent = "Du besoin métier au système d’information, puis du système d’information au pilotage.";

const profileTitle = document.querySelector("#profil-title");
if (profileTitle) {
  profileTitle.replaceChildren(
    document.createTextNode("Comprendre les organisations."),
    document.createElement("br"),
    document.createTextNode("Transformer les systèmes. Piloter l’information."),
  );
}
const profileCopy = document.querySelector(".profile-copy");
if (profileCopy) {
  const paragraphs = [
    "Ingénieur en Génie Informatique, parcours MIAGE, je m’intéresse à la manière dont les systèmes d’information structurent les processus, centralisent l’information et améliorent le pilotage des organisations.",
    "Mes expériences en développement applicatif, en Business Intelligence et dans la conception de solutions numériques m’ont amené à travailler sur les besoins métier, la structuration de l’information et l’automatisation.",
    "Cette double approche, fonctionnelle et technique, constitue le socle de mon projet professionnel. Mon objectif n’est pas de me spécialiser uniquement dans le développement, mais de relier la technologie aux enjeux métier, organisationnels et décisionnels.",
    "Je souhaite approfondir cette orientation en Master 2 Management des Systèmes d’Information, avec un intérêt particulier pour les ERP, la Business Analysis, le conseil SI et la transformation digitale.",
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
    ["Comprendre", "Besoins métier · utilisateurs · processus · organisation", "Identifier les besoins et représenter les processus avant de concevoir une solution."],
    ["Analyser", "Systèmes d’information · flux · données", "Structurer l’information et traduire les besoins métier en exigences fonctionnelles."],
    ["Transformer", "ERP · digitalisation · intégration", "Améliorer les processus et la circulation de l’information avec des solutions SI."],
    ["Piloter", "KPI · BI · analyse · décision", "Transformer les données en indicateurs utiles au suivi de la performance."],
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
  if (projectName) projectName.textContent = "PDE — Solution digitale de pilotage des projets industriels";
  if (description) description.textContent = "Conception d’une solution intelligente pour centraliser les informations projet, suivre les jalons, repérer les risques et faciliter le pilotage.";
  const contributions = [
    "Analyse du besoin et compréhension du processus de suivi projet",
    "Structuration des données et mise en place d’indicateurs de pilotage",
    "Automatisation de vérifications métier et développement d’un moteur d’analyse des risques",
    "Conception d’une interface multi-profils et exploration de l’IA comme assistance utilisateur",
  ];
  const points = featuredExperience.querySelector(".experience-points");
  points?.replaceChildren(...contributions.map((text) => {
    const item = document.createElement("span");
    item.textContent = text;
    return item;
  }));
  const technologies = ["Python", "FastAPI", "Streamlit", "SQL", "Machine Learning", "IA générative"];
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

const projectOrder = ["erpconnect", "pde", "bi", "academic"];
const projectGrid = document.querySelector(".project-grid");
if (projectGrid) {
  const projectCards = projectOrder.map((key) => projectGrid.querySelector(`[data-project="${key}"]`)?.closest(".project-card"));
  projectCards.filter(Boolean).forEach((card, index) => {
    card.classList.toggle("project-card-featured", index === 0);
    projectGrid.append(card);
  });
}
const projectCopy = {
  erpconnect: {
    type: "ERP · PROCESSUS MÉTIER · INTÉGRATION SI",
    title: "ERPConnect",
    description: "Explorer l’intégration d’Odoo avec les applications métier et les outils décisionnels pour centraliser l’information et suivre les KPI.",
  },
  pde: {
    type: "SYSTÈME D’INFORMATION · PILOTAGE · IA APPLIQUÉE",
    title: "PDE — Predictive Delay Engine",
    description: "Centraliser les données projet, suivre les jalons et transformer les signaux de risque en informations utiles au pilotage.",
  },
  bi: {
    type: "BI · DATA WAREHOUSE · KPI · POWER BI",
    title: "Business Intelligence & aide à la décision",
    description: "Transformer des données de ventes et de stocks en analyses décisionnelles grâce à un schéma en étoile et des tableaux de bord.",
  },
  academic: {
    type: "ANALYSE FONCTIONNELLE · PROCESSUS · SI",
    title: "Système de gestion académique",
    description: "Modéliser les acteurs, processus et règles métier d’un système d’information pour un établissement académique.",
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
  ["Management des Systèmes d’Information", "Analyse fonctionnelle · Analyse des besoins · Processus métier · Modélisation SI · UML · Gestion de projet SI · Transformation digitale", "SI"],
  ["ERP & intégration", "ERP · Odoo · Processus métier · Intégration SI · API · Synchronisation des données · Flux d’information", "ERP"],
  ["Business Intelligence", "SQL · Power BI · ETL · Data Warehouse · Schéma en étoile · KPI · Reporting · Aide à la décision", "BI"],
  ["Pilotage & analyse", "Analyse de données · Suivi de performance · Indicateurs · Analyse des risques · Reporting projet · Aide au pilotage", "KPI"],
  ["Socle technique", "Python · Java · Spring Boot · FastAPI · React · Git · PostgreSQL · MySQL · SQL Server · Oracle", "DEV"],
  ["IA appliquée", "Machine Learning · Random Forest · LLM · IA générative · Automatisation intelligente", "IA"],
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
  summary.textContent = "Formation couvrant l’informatique, les systèmes d’information, les bases de données, le développement logiciel, la Business Intelligence et la gestion de projet.";
  education.querySelector(".inline-tags")?.before(summary);
  const tags = education.querySelector(".inline-tags");
  tags?.replaceChildren(...["Systèmes d’information", "Business Intelligence", "Gestion de projet", "Développement applicatif", "Data & IA"].map((text) => {
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
  if (eyebrow) eyebrow.textContent = "M2 · ALTERNANCE · PROJET PROFESSIONNEL";
  if (title) title.textContent = "Mon projet professionnel";
  if (summary) summary.textContent = "Construire un profil à l’interface entre les métiers et les systèmes d’information, avec une spécialisation progressive en ERP, Business Analysis et transformation digitale.";
  objectiveInner.querySelector(".objective-tags")?.remove();
  const objectives = [
    ["01", "Objectif académique", "Master 2 — Management des Systèmes d’Information", "Orientation ERP."],
    ["02", "En parallèle", "Alternance en France", "Contribuer à des missions en systèmes d’information, ERP, conseil SI, pilotage de projets ou transformation digitale."],
    ["03", "À moyen terme", "Évoluer à l’interface", "Consultant SI · Consultant fonctionnel ERP · Business Analyst · Chef de projet SI"],
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
  contactCopy.textContent = "À la recherche d’une alternance en Management des Systèmes d’Information, ERP, Business Analysis ou transformation digitale dans le cadre de mon futur Master 2.";
  const contactSupport = document.createElement("p");
  contactSupport.className = "contact-support";
  contactSupport.textContent = "Je souhaite mettre mon socle informatique au service de problématiques métier, SI et ERP.";
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

const qrImage = document.querySelector("#portfolio-qr");
const qrPlaceholder = document.querySelector("#qr-placeholder");
if (qrImage && qrPlaceholder && portfolioUrl.startsWith("https://")) {
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=224x224&data=${encodeURIComponent(portfolioUrl)}`;
  qrImage.addEventListener("load", () => qrPlaceholder.remove());
  qrImage.addEventListener("error", () => {
    qrImage.removeAttribute("src");
    qrPlaceholder.textContent = "QR indisponible. Vérifier l’adresse permanente configurée.";
  });
} else if (qrPlaceholder) {
  qrPlaceholder.textContent = "Configurer l’URL HTTPS définitive dans app.js pour générer le QR code.";
}
