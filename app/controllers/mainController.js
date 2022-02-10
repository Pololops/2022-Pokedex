// Import du model Pokemon
const Pokemon = require('../models/Pokemon');


const mainController = {
    home: async (req, res) => {
        try {      
            const pokemons = await Pokemon.find();

            res.render('index', {cards: pokemons});
        } catch (error) {
            console.error(error.message);
            res.status(500).send(`Oops ! Base de donnée inaccessible.`);
        }
    },

    detail: async (req, res) => {
        try {
            const pokemon = await Pokemon.findOne({"id":Number(req.params.id)});

            res.render('detail', {card: pokemon});
        } catch (error) {
            console.error(error.message);
            res.status(500).send(`Oops ! Base de donnée inaccessible.`);
        }
    },

    types: async (request, response) => {
        try {
            const types = await dataMapper.getTypes();

            response.render(`types`, { types });
        } catch (error) {
            console.error(error.message);
            response.status(500).send(`Oops ! Base de donnée inaccessible.`);
        }
    },

    oneType: async (request, response) => {
        try {
            const cards = await dataMapper.getCardsByType(Number(request.params.id));

            response.render(`index`, { cards });
        } catch (error) {
            console.error(error.message);
            response.status(500).send(`Oops ! Base de donnée inaccessible.`);
        }
    },
}

module.exports = mainController;