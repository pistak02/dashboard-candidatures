# Dashboard de candidatures

En recherche active d'alternance, j'ai rencontré un problème : celui de garder un suivi sur toutes les offres auxquelles je postulais. J'ai donc décidé de construire une solution, qui me permettra par le même occasion de monter en compétences (premier projet utilisant React).

## Technos 
- Symfony
- React
- PostgreSQL

### Mémo

#### Démarrage
```
# construire/démarrer l'image des containers
docker-compose up -d --build
# ouvrir un terminal dans un container
docker exec -ti ... bash
# créer les apps
symfony new ... --webapp
npx create-react-app ...
# lancer les serveurs
symfony server:start --no-tls --listen-ip=0.0.0.0 --d
npm start
```

#### BACK
```
# créer la bd 
symfony console doctrine:database:create
# ajouter une entité
symfony console make:entity ...
# créer un fichier de migration
symfony console make:migration
# effectuer les migrations 
symfony console doctrine:migrations:migrate
# installer le package fixture
symfony composer require orm-fixtures --dev
# créer une fixture
symfony console make:fixture

# utilisation d'un type énuméré (via création d'une classe) pour restreindre les valeurs possibles du statut d'une candidature - ajout d'une liste déroulante plus tard

# on revient sur ce type énuméré pendant le dev du front : ajout du controller StatutController afin de pouvoir envoyer via l'api les valeurs possibles du statut - chargement dynamique dans la liste déroulante possible et maj auto en cas de modification dans la bd grâce à ça
symfony console make:controller StatutController # (suppr le template ajouté il n'est pas utile)
```


#### FRONT
Ajout d'un .env pour régler le problème d'auto-reload lié à Docker/WSL (précise à Webpack l'adresse, le port et le chemin qu'il doit utiliser pour configurer les WebSockets)

Configuration des routes dans le fichier routes.js avec RouterConfig

Création des pages/composants en essayant de garder une architecture propre et cohérente

Création d'un service qui récupère le json des candidatures de la BD via l'API.
Deuxième service qui sert à la même chose pour le type énuméré Statut
(pense à changer le localhost lors du déploiement)

MAJ de ce service avec toutes les méthodes CRUD pour le site, et utilisation dans les pages

- Visualisation des candidatures &#x2611;
- Ajout d'une candidature &#x2611;
- Visualation des détails d'une candidature &#x2612;
- Modification d'une candidature &#x2612;
- Suppression d'une candidature &#x2612;

```
# installer react-router
npm install react-router-dom
```