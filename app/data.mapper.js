const client = require(`./database`);

const dataMapper = {
    getCards: async () => {
        const query = `SELECT * FROM "pokemon";`;   
        const results = await client.query(query);  
        return results.rows;   
    },

    getOneCard: async (id) => {
        const query = `SELECT * FROM "pokemon" WHERE id = $1;`;   
        const results = await client.query(query, [id]);  
        return results.rows[0];   
    }
};

module.exports = dataMapper;