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
    role: "Développement d’une plateforme intelligente de suivi des risques projets, conception d’indicateurs et de tableaux de bord décisionnels.",
    result: "Plateforme de suivi des risques projets et valorisation des données pour l’aide à la décision et le pilotage opérationnel.",
  },
  erpconnect: {
    role: "Conception et intégration d’une solution ERP Odoo, développement des échanges et synchronisations de données, création de tableaux de bord et d’indicateurs.",
    result: "Contribution à l’optimisation des processus métier et au pilotage décisionnel.",
  },
  bi: {
    role: "Conception d’un entrepôt de données en schéma étoile, développement de tableaux de bord Power BI et mise en place d’indicateurs.",
    result: "Indicateurs d’aide à la décision pour le suivi des performances commerciales.",
  },
  academic: {
    role: "Conception d’un SI centralisant la gestion des étudiants, modélisation des processus et gestion du cycle de vie des données.",
    result: "Automatisation des opérations administratives et amélioration de la traçabilité.",
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
  currentRole.innerHTML = '<div class="experience-meta"><span class="experience-index">01</span><span>AOÛT 2026 — PRÉSENT</span></div><div class="experience-main"><div class="experience-title"><div><p class="eyebrow">DATA ENGINEER</p><h3>Capgemini Engineering</h3><p class="experience-location">Casablanca, Maroc</p></div></div><p class="experience-description">Conception et optimisation de solutions d’intégration et d’exploitation des données.</p><div class="experience-points"><span>Automatisation des flux pour les besoins décisionnels des métiers</span><span>Amélioration de la qualité, de la fiabilité et de la gouvernance des données</span><span>Collaboration avec les équipes fonctionnelles et techniques sur des projets de transformation digitale</span></div><div class="inline-tags"><span>Data Engineering</span><span>Intégration de données</span><span>Qualité des données</span><span>Gouvernance</span></div></div>';
  experienceList.insertBefore(currentRole, featuredExperience);

  const pfeDate = featuredExperience.querySelector(".experience-meta span:last-child");
  if (pfeDate) pfeDate.textContent = "FÉV. — JUIL. 2026";

  for (const experience of experienceList.querySelectorAll(".experience-item")) {
    const company = experience.querySelector(".experience-title h3")?.textContent;
    const date = experience.querySelector(".experience-meta span:last-child");
    if (company === "Edetsecom" && date) date.textContent = "JUIL. — AOÛT 2025";
    if (company === "Novopharma" && date) date.textContent = "JUIL. 2024";
  }
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
const navigation = document.querySelector(".navigation");
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

const projectDialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");

function openProject(projectName) {
  const template = document.querySelector(`#project-${projectName}`);
  if (!template || !projectDialog || !dialogContent) return;
  dialogContent.replaceChildren(template.content.cloneNode(true));
  const details = projectDetails[projectName];
  if (details) {
    for (const [title, text] of [["Mon rôle", details.role], ["Résultats", details.result]]) {
      const section = document.createElement("section");
      section.className = "dialog-section";
      const heading = document.createElement("h3");
      heading.textContent = title;
      const description = document.createElement("p");
      description.textContent = text;
      section.append(heading, description);
      dialogContent.append(section);
    }
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
