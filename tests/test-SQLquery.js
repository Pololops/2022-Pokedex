//? #################################### FICHIER POUR TESTER DES REQUÊTES SQL ####################################

//TODO: Executer " node tests/test-SQLquery.js " dans la console

/*  ############################################################################# */
//! #################### SQL QUERY A MODIFIER POUR LA TESTER ####################
const sql = `SELECT  
pokemon.*,
(
    SELECT type.* FROM pokemon
    JOIN  type ON type.id = pokemon_type.type_id
) AS types
FROM pokemon
JOIN pokemon_type ON pokemon.numero = pokemon_type.pokemon_numero 
WHERE pokemon.id = 1210;`;
/*  ############################################################################# */




// Récupérer les variables d'environnement du ficher '.env'
require(`dotenv`).config();

// Charger le connecteur à la database
const client = require(`../app/database`);




// Méthode à tester  :  à changer pour tester les autres méthodes du dataMapper
const SQLquery = async (query) => {
    try {
        const results = await client.query(query);
        console.log(`\n\n\n\n🟢 RESULTS: `, results);
    }
    catch (error) {
        console.log(`\n\n\n\n🔴 ERROR: `, error);
    }
    finally {
        client.end();
    }
};

SQLquery(sql);