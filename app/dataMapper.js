const client = require(`./database`);

const dataMapper = {
    getCards: async () => {
        const query = `SELECT * FROM "pokemon";`;
       
        const results = await client.query(query);
        return results.rows;
    },

    getOneCard: async (id) => {
        const cardQuery = `SELECT * FROM "pokemon" WHERE id = $1;`; 
        const typesQuery = `SELECT type.* FROM type 
            LEFT JOIN pokemon_type ON pokemon_type.type_id = type.id
            LEFT JOIN pokemon ON pokemon.numero = pokemon_type.pokemon_numero
            WHERE pokemon.id = $1;`;
        const cardResults = await client.query(cardQuery, [id]);
        const typesResults = await client.query(typesQuery, [id]);

        const card = cardResults.rows[0];
        card.types = typesResults.rows;

        return card;
    },

    getTypes: async () => {
        const query = `SELECT * FROM "type";`;
        const results = await client.query(query);
        return results.rows;
    },

    getCardsByType: async (id) => {
        const query = `SELECT pokemon.* FROM pokemon 
            JOIN pokemon_type ON pokemon_type.pokemon_numero = pokemon.numero
            JOIN type ON type.id = pokemon_type.type_id
            WHERE type.id = $1;`;
        
        const results = await client.query(query, [id]);
        return results.rows;
    },
};

module.exports = dataMapper;