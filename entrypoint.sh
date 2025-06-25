#!/bin/sh
set -e

echo "Waiting for PostgreSQL to be ready..."
until pg_isready -h postgres -p 5432; do
  echo "Postgres is unavailable - sleeping"
  sleep 2
done

echo "PostgreSQL is ready"

if [ ! -d "vendor" ]; then
  echo "Installing composer dependencies..."
  composer install --no-interaction --optimize-autoloader
fi

echo "Lancement des migrations Doctrine..."
symfony console doctrine:migrations:migrate --no-interaction

echo "Loading des fixtures..."
symfony console doctrine:fixtures:load --no-interaction

echo "Démarrage du serveur Symfony..."
exec php -S 0.0.0.0:8000 -t public