# On part d'une image existante, ici l'image de node sur l'os alpine
FROM node:current-alpine3.15

# On créé un dossier 'app' qui va accueillir l'app, ici à la racine du container
WORKDIR /app




###################################################################
####################### LA METHODE BOURRIN ########################
###################################################################
# On copie tout le projet, ici le 1er '.' c'est le chemin de notre dossier de projet, et le deuxième fait référence au WORKDIR
# COPY . .

# On lance les commandes terminal en plaçant une virgule à chaque espace, ici la commande "npm start"
# CMD ["npm", "start"]




###################################################################
###################### LA METHODE PLUS CLEAN ######################
###################################################################
# On copie le package.json et le package-lock.json qui vont permettre d'installer ensuite proprement le dossier node-module
COPY ./package*.json ./

# On execute la commande 'npm i' pour installer les modules nécessaires, ici on utilise RUN et pas CMD car la commande est à faire uniquement lers de la création du container (une seule fois donc)
RUN npm i

# On copie tout le contenu du projet local qui n'est pas similaire à ce qui déjà present sur le container, dans le container, ici le 1er '.' c'est la racine du projet, et le deuxième fait référence au WORKDIR
COPY . .

# Facultatif : montre qu'on expose le port 3000 du container
EXPOSE 3000

# On lance les commandes terminal en plaçant une virgule à chaque espace, ici la commande "npm start"
CMD ["npm", "start"]