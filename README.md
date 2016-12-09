# Web-Prototypes RadiSaclay

Fonctionne grace au [server (branche"proto")](https://github.com/radiSaclay/radiServer/tree/proto), penser à référencer l'url du server dans les configs `./radiXXX/src/config.json`.

Attention, il n'est pas possible de créer des comptes depuis des apps de démo, utilisez l'API.

## Fonctionnalités dans la démo
- Connexion
- Création des events
- Edition de la ferme
- Recherche de fermes
- Recherche et épinglage des events
- Retour sur les épinglages

## Build & Dev

Rendez-vous dans le dossier `./radiXXX`, puis lancher les commandes dont vous avez besoin.

``` bash
# _Dev___________________________
npm i
npm run dev

# _Build_________________________
npm run build
```

Les fichiers construits se trouvent dans `./radiXXX/dist`.
