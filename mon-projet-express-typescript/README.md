# Exemple de projet Node.js avec TypeScript et Express

## Description

Ce projet est une application **Node.js** utilisant **TypeScript** et **Express** pour créer un serveur API REST. Il est structuré avec des dossiers pour les contrôleurs, les services, les modèles, et utilise Jest pour les tests unitaires.

## Prérequis

Assurez-vous d'avoir installé les éléments suivants sur votre machine :

- [Node.js](https://nodejs.org/en/) (v12 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Installation

1. Clonez le projet :

   ```bash
   git clone https://github.com/la-sarita/420-514_A24.git
   cd 420-514_A24/mon-projet-express-typescript

   ```

2. Installez les dépendances du projet :

   ```bash
   npm install
   ```

## Configuration

Créez un fichier `.env` à la racine du projet pour stocker les variables d'environnement, par exemple :

```bash
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/dbname
```

## Scripts disponibles

Voici quelques scripts importants que vous pouvez exécuter avec npm :

- **Démarrer le projet en développement :**

   ```bash
   npm run start
   ```

   Utilise `ts-node-dev` pour démarrer le serveur avec hot-reload.

- **Compiler TypeScript en JavaScript :**

   ```bash
   npm run build
   ```

   Compile les fichiers TypeScript dans le dossier `dist/`.

- **Exécuter les tests unitaires :**

   ```bash
   npm run test
   ```

   Exécute les tests avec Jest.

## Structure du projet

Voici la structure des dossiers du projet :

```
├── src/
│   ├── controllers/        # Contrôleurs Express pour gérer les routes
│   ├── interfaces/         # Interfaces TypeScript
│   ├── middlewares/        # Middlewares Express
│   ├── models/             # Modèles de données
│   ├── routes/             # Définition des routes Express
│   ├── services/           # Services pour la logique métier
│   ├── utils/              # Utilitaires du projet
│   ├── app.ts              # Configuration de l'application Express
│   ├── server.ts           # Point d'entrée pour démarrer le serveur
├── tests/                  # Tests unitaires avec Jest
├── dist/                   # Fichiers compilés (générés après la compilation)
├── package.json            # Fichier de configuration des dépendances et scripts
├── tsconfig.json           # Configuration de TypeScript
└── README.md               # Documentation du projet
```

## Démarrage

1. Démarrez le serveur avec la commande suivante :

   ```bash
   npm run start
   ```

2. Par défaut, le serveur est disponible sur [http://localhost:3000](http://localhost:3000).

## Tests

Pour exécuter les tests unitaires avec Jest, utilisez la commande suivante :

```bash
npm run test
```

Les tests se trouvent dans le dossier `tests/`.

## Contribution

1. Forkez ce dépôt
2. Créez votre branche de fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalité`)
3. Commitez vos modifications (`git commit -m 'Ajouter une nouvelle fonctionnalité'`)
4. Poussez votre branche (`git push origin feature/nouvelle-fonctionnalité`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence [MIT](LICENSE).