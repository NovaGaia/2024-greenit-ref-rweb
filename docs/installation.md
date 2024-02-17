---
label: Installation et utilisation
icon: download
order: 6000
---

# Installation

## Prérequis

- Docker desktop : https://www.docker.com/products/docker-desktop/ (redémarrage requis)
- Git : https://git-scm.com/downloads
- Visual Studio Code : https://code.visualstudio.com/download
  - [Le plugin VScode Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) `ms-vscode-remote.remote-containers`

## Installation

1. Cloner le projet
2. Ouvrir le projet dans Visual Studio Code
3. Ouvrir le dossier dans un container
4. Lancer le container
5. Ouvrir un terminal dans le container
6. Installer les dépendances

```bash
npm install
```

> Il n'y a pas besoin de fichier de configuration `.env`.

## Lancement

Lancer le site Astro et TinaCMS

```bash
npm run dev
```

- Pour voir le site : [http://localhost:4321/](http://localhost:4321/)
- Pour voir TinaCMS : [http://localhost:4321/admin/index.html](http://localhost:4321/admin/index.html)

**Arreter le site Astro et TinaCMS**

dans le terminal faites `[ctrl]`+`[c]`

### Ajout ou modification d'une fiche

Dans VSCode, créez une nouvelle branche à partir de la branche `main`.

Dans TinaCMS, ajoutez ou modifiez une fiche.

[TODO]
