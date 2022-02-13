const dataMapper = require(`../dataMapper`);

const mainController = {
    home: async (request, response) => {
        try {
            const cards = await dataMapper.getCards();

            response.render(`index`, { cards });
        } catch (error) {
            console.error(error.message);
            response.status(500).send(`Oops ! Base de donnée inaccessible.`);
        }
    },

    detail: async (request, response) => {
        try {
            const card = await dataMapper.getOneCard(Number(request.params.id));

            response.render(`detail`, {
                id: card.id,
                nom: card.nom,
                numero: card.numero,
                capacities: [
                    {
                        title: `PV`,
                        capacity: card.pv
                    },
                    {
                        title: `Attaque`,
                        capacity: card.attaque
                    },
                    {
                        title: `Défense`,
                        capacity: card.defense
                    },
                    {
                        title: `Attaque Spé`,
                        capacity: card.attaque_spe
                    },
                    {
                        title: `Défense Spé`,
                        capacity: card.defense_spe
                    },
                    {
                        title: `Vitesse`,
                        capacity: card.vitesse
                    }
                ],
                types: card.types
            });
        } catch (error) {
            console.error(error.message);
            response.status(500).send(`Oops ! Base de donnée inaccessible.`);
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
};

module.exports = mainController;