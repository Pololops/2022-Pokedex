const { Schema, model } = require('mongoose');

const pokemonSchema = new Schema({
    id: Number,
    name: String,
    img: String,
    type: [String],
    height: String,
	weight: String,
	candy: String,
	candy_count: Number,
	egg: String,
	spawn_chance: Number,
	avg_spawns: Number,
	spawn_time: String,
    multipliers: [Number],
    weaknesses: [String]
});


// export d'un model Pokemon avec comme structure (schema) pokemonSchema lié à une collection nommé pokedex en BDD pour le rende disponible dans notre WebApp
module.exports = model('Pokemon', pokemonSchema, 'pokedex');