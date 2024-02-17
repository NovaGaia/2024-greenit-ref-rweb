---
label: Nouvelle version du référentiel
icon: tag
order: 7000
---

# Actions à réaliser pour une nouvelle version du référentiel

!!!info Organisation
Un référent/chef de projet sera désigné pour chaque version du référentiel. Il sera responsable de la création de la nouvelle version du référentiel.
!!!

## 1. Créer une nouvelle branche

Nommer la branche en fonction de la version à créer. Par exemple, pour la version 1.2.0, la branche sera nommée `1.2.0`.

## 2. Mettre à jour le fichier `package.json` avec cette version

```json
{
  "version": "1.2.0",
  "description": "Référentiel d'écoconception web (RWEB)"
}
```

## 3. Mettre à jour le fichier `retype.yml`

C'est le badge affiché dans cette documentation. Mettez à jour le fichier `retype.yml` avec la nouvelle version du référentiel.

```yaml
...
branding:
  ...
  label: 1.2.0
  ...
...
```

## 4. Mettre à jour le fichier `referentiel-config.ts`

Mettez à jour le fichier `referentiel-config.ts` avec la nouvelle version du référentiel.

```typescript
export const getRefConfig: RefConfig = (specificRef) => {
  ...
  const config = {
    refInformations: {
        currentVersion: '1.2.0',
        ...
    },
    ...
  },
  ...
};
```

## 5. Inviter des contributeurs dans GitHub

1. Demander les @username des contributeurs à inviter.
2. Inviter les contributeurs dans le projet GitHub.

## 6. Chaque contributeur doit créer une branche en partant de la branche de la nouvelle version

En suivant les exemples précédents, chaque contributeur doit créer une branche à partir de la branche `1.2.0`.

Retouver les étapes suivantes et les informations importantes dans la page :icon-iterations: **Contribuer / mettre à jour** (lien ci-dessous).

[!ref](./contrib.md)
