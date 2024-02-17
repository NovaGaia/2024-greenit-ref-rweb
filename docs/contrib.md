---
label: Contribuer / mettre à jour
icon: iterations
order: 9000
---

# Contribuer

## Prérequis

[!ref](./installation.md)

## Informations de base

!!!info Des Référentiels différents [!badge RWP] [!badge RWEB] [!badge ...]
Les référentiels ayant été créé pour des publics différents et par des équipes différentes, ils n'ont pas tous les mêmes métadatas ou la même structure de contenu.  
**Au fur et a mesure de l'évolution des versions des référentiels, nous tâcherons de les harmoniser.**
!!!

### [!badge RWP] refID

`numero de cycle.numéro de la bonne pratique` (sur 3 digits)

**Exemple pour `3.08`**

- **Cycle de vie** `3` pour (Conception & Design)
- **Séparateur** `.`
- **Numéro de la bonne pratique** `008`

### [!badge RWEB] refID

Sur 4 digits depuis cette dernière version.

### Titre

Il doit être parlant et court.

### Versions

> Le `RefID`peut évoluer dans le temps, au fil des versions successives des référentiels.

Un champ `versions` est donc disponible pour indiquer son `refID` adapté la version du référentiel. Vous pouvez renseigner plusieurs couples `refID`/`version` pour une même fiche.  
:icon-stop: **Il n'est pas automatisé**.

### Explication de certaines métadatas

!!!warning Attention
Les référentiels n'ont pas tous les mêmes métadatas.  
Le CMS est configuré pour les gérer et vous proposer des champs adaptés.
!!!

#### [!badge RWP] [!badge RWEB] Le cycle de vie

Le cycle de vie d'un service numérique regroupe les étapes par lesquelles ce service passe au cours du temps.
Nous l'avons défini comme suit :

1.  Analyse des besoins
2.  Installation
3.  Conception & Design
4.  Intégration & Développement
5.  Contenu & médias
6.  Tests & validation
7.  Mise en ligne
8.  Maintenance
9.  Fin de vie

#### [!badge RWP] La priorité d'implémentation

Nous estimons la priorité de mettre en oeuvre une bonne pratique via ce système :

- Faible 👍
- Moyen 👍👍
- Fort 👍👍👍

!!!info [!badge RWEB] l'équivalent de la priorité d'implémentation est le Degré de priorité
Le Degré de priorité est de `1` à `5` et est automatiquement calculée en utilisant `MOE` et `Impact l'environnemental`. C'est la raison pour laquelle vous ne la retrouvez pas dans l'outil de contribution.
!!!

#### [!badge RWP] L'impact environnemental

Nous évaluons l'impact de chaque bonne pratique, voire de chaque solution proposée avec le système suivant :

- Faible 🌱
- Moyen 🌱🌱
- Fort 🌱🌱🌱

#### [!badge RWEB] L'impact environnemental

Il est évalué en donnant une note de `1` à `5` pour chaque bonne pratique.

> Il est un des critères pour évaluer le Degré de priorité.

#### [!badge RWP] Compléxité d'implémentation

Nous évaluons l'impact de chaque bonne pratique, voire de chaque solution proposée avec le système suivant :

- Faible 🌱
- Moyen 🌱🌱
- Fort 🌱🌱🌱

#### [!badge RWEB] _Compléxité de_ Mise en œuvre

Il est évalué en donnant une note de `1` à `5` pour chaque bonne pratique.

> Il est un des critères pour évaluer le Degré de priorité.

#### [!badge RWP] [!badge RWEB] Les ressources sauvegardées

Pour une meilleure compréhension, de la localisation de l'impact ou des impacts environnementaux :

- **A utiliser en priorité**
  - Processeur
  - Mémoire vive
  - Stockage
  - Réseau
  - Requêtes
- A utiliser suivant le contexte
  - Déchets électroniques
  - Consommation électrique
  - Émissions de gaz à effet de serre

#### [!badge RWP] Le scope

Il est utilisé pour définir le périmètre de la bonne pratique. C'est une notion qui "s'ajoute" à la notion de cycle de vie.

- Périmètre
- Cache
- Documents
- Fonctionnalités
- Images
- Front-office
- Hébergement
- Performance
- Sécurité
- Thèmes
- SEO
- Stockage
- Vidéos/Audios

#### [!badge RWEB] Le Tier impacté

- Utilisateur/Terminal
- Réseau
- Datacenter

## Processus de contribution

**Règles à respecter**

1. Une nouvelle fiche fait l'objet d'une discussion dans GitHub avant d'être créée (consulter :icon-plus-circle: **Proposer**)&nbsp;;
2. Travaillez sur une branche dédiée (voir ci-après) à la fiche que vous souhaitez modifier ou ajouter&nbsp;;
3. Créer la fiche, ajouter des fiches au lexique si besoin&nbsp;;
4. Faire une Pull Request&nbsp;;
5. Attendre la validation de la Pull Request&nbsp;;

!!!info Branche dédiée et banche source
\- Lors d'une nouvelle version du référentiel, il est nécessaire de créer une branche à partir de la branche de la nouvelle version `X.Y.z` (consulter la personne qui pilote).  
\- En "temps normal", il est nécessaire de créer une branche à partir de la branche `develop`.
!!!

[!ref](./proposal.md)

[!ref](./installation.md)
