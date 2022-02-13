# Utilisation d'une image existante, ici l'image de node sur l'os alpine, et nommage du container en 'app'
FROM node:lts-alpine AS app

# On créé un dossier 'app' qui va accueillir l'app, ici à la racine du container
WORKDIR /app

# Copie des fichiers package.json et package-lock.json pour permettre d'installer proprement le dossier node-module
COPY ./package*.json ./

# Execution de la commande 'npm i' pour installer les modules nécessaires, utilisation de RUN et pas CMD car la commande RUN ne s'execute qu'à la création du container (une seule fois donc)
RUN npm i

# Copie de tout le contenu du projet local sans écraser ceux déjà présents, ici le 1er '.' c'est la racine du projet, et le deuxième fait référence au WORKDIR
COPY . .

# Facultatif : Exposition du port 3000 du container
EXPOSE 3000

# Lancement ses commandes terminal en plaçant une virgule à chaque espace, ici la commande "npm start"
# CMD ["npm", "start"]
ENTRYPOINT ["npm", "start"]
