//? ############################ FICHIER POUR TESTER UNE MÉTHODE EXTRAITE DU DATAMAPPER ############################

//TODO: Executer " node tests/test-dataMapper.js " dans la console



// Récupérer les variables d'environnement du ficher '.env'
require(`dotenv`).config();

// Charger le dataMapper
const dataMapper = require(`../app/data.mapper`);

// Charger le connecteur à la database
const client = require(`../app/database`);



// Méthode à tester  :  à changer pour tester les autres méthodes du dataMapper
dataMapper.getCardsByType(1)
    .then((results) => console.log(`\n\n\n\n🟢 RESULTS: `, results.length))
    .catch((error) => console.log(`\n\n\n\n🔴 ERROR: `, error))
    .finally(() => client.end());