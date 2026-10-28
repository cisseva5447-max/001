# Projet 001 - CV avec Vite et React

## Étapes de création

1. Vérifier que Node.js est installé : `node -v`
2. Créer le projet avec Vite : `npm create vite@latest 001`
   (framework : React, variant : JavaScript, linter : ESLint)
3. Entrer dans le dossier : `cd 001`
4. Installer les dépendances : `npm install`
5. Lancer le projet : `npm run dev`
6. Nettoyer la page de départ : vider `App.jsx`, `App.css` et `index.css`
7. Créer le dossier `src/components`
8. Créer les 3 composants : `InfosPerso.jsx`, `Competences.jsx`, `Experiences.jsx`
9. Importer et afficher les 3 composants dans `App.jsx`
10. Ajouter le style dans `App.css`
11. Vérifier le résultat sur `http://localhost:5173/`

## Rôle des dossiers et fichiers indispensables

| Élément | Rôle |
|---|---|
| `node_modules/` | Contient les bibliothèques installées par `npm install` |
| `public/` | Fichiers statiques (icône, images) |
| `src/` | Code source du projet |
| `src/components/` | Composants réutilisables du CV |
| `src/assets/` | Images et ressources |
| `src/main.jsx` | Point d'entrée : lance React et affiche `App` |
| `src/App.jsx` | Composant principal qui assemble les autres composants |
| `src/App.css` | Style du CV |
| `src/index.css` | Style global |
| `index.html` | Page HTML unique avec la `div id="root"` |
| `package.json` | Nom du projet, scripts et dépendances |
| `package-lock.json` | Versions exactes des dépendances |
| `vite.config.js` | Configuration de Vite |
| `eslint.config.js` | Configuration du linter ESLint |
| `.gitignore` | Fichiers ignorés par Git |
| `README.md` | Documentation du projet |

## Les 3 composants du CV

- **InfosPerso** : nom, titre, ville, email et téléphone
- **Competences** : liste des compétences
- **Experiences** : parcours et projets réalisés

## Lancer le projet

```bash
npm install
npm run dev
```
