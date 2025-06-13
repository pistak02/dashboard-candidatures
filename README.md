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

#### BD
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
```