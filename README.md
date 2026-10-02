# Portfolio professionnel — Ibrahim HANNA

Site vitrine responsive en HTML, CSS et JavaScript natifs. La V1 fonctionne sans installation ni base de données et peut être ouverte directement depuis `index.html`.

## Modifier les informations

- Coordonnées et liens sociaux : compléter l’objet `contact` au début de `app.js`.
- Formation, expériences, compétences et textes : modifier les sections correspondantes dans `index.html`.
- Détails des projets : éditer les éléments `<template id="project-...">` à la fin de `index.html`.
- Style et responsive : `styles.css`.
- CV : le PDF fourni se trouve dans `public/documents/Ibrahim HANNA (2).pdf`. Le bouton principal le télécharge sous le nom `Ibrahim_HANNA_CV.pdf`. « Version imprimable » reste une option secondaire.
- Certifications : les quatre certifications indiquées dans `app.js` attendent leurs PDF dans `public/certificates/`. Le bouton de consultation s’active seulement lorsque le fichier existe.
- QR code : `portfolioUrl` dans `app.js` est configurée avec `https://ibrahim-hanna.github.io`. Le service QR externe reçoit cette URL ; une génération locale demanderait d’ajouter une bibliothèque QR au projet.
- SEO : `sitemap.xml` et `robots.txt` sont configurés pour `https://ibrahim-hanna.github.io`.

## Prévisualiser

Ouvrir `index.html` dans un navigateur. Pour tester le QR code et le comportement d’un hébergement web, publier le dossier sur GitHub Pages, Netlify ou Vercel.

## Publication

Le dossier est statique et peut être déployé tel quel, sans étape de build. Avant publication, compléter les coordonnées, vérifier les expériences/dates, ajouter les liens LinkedIn et GitHub, et ne publier que des éléments autorisés. Ajouter les documents réels dans un dossier public si nécessaire.

## À compléter avant diffusion

- Email, téléphone, URL LinkedIn et URL GitHub dans `app.js`.
- Dates exactes pour Edetsecom et Novopharma.
- Vérification du statut et des dates du PFE Capgemini Engineering.
- Années et fichiers justificatifs vérifiés pour les certifications listées dans `app.js`.
- Résultats mesurables et captures autorisées des projets.
- Fichiers CV/certifications définitifs et favicon de marque si souhaité.
- Contributions personnelles et résultats vérifiables dans `projectDetails` au début de `app.js`.

Aucune donnée chiffrée de réalisation, certification, adresse personnelle ou coordonnée n’a été inventée dans cette version.
