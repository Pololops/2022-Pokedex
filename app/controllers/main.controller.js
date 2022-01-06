const dataMapper = require(`../data.mapper`);

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
            const card = await dataMapper.getOneCard(request.params.id);

            response.render(`detail`, { card });
        } catch (error) {
            console.error(error.message);
            response.status(500).send(`Oops ! Base de donnée inaccessible.`);
        }
    }
};

module.exports = mainController;