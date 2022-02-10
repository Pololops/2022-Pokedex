require(`dotenv`).config();

const express = require('express');
const app = express();
const router = require('./app/router');


app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./public'));


// Import du module Mongoose
const mongoose = require('mongoose');
// Connexion au serveur Mongo et à la BDD 'pokemon'
mongoose.connect('mongodb://localhost:27017/pokemon');


app.use(router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is ON and listening on port : ${PORT}`));