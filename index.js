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
mongoose.connect(process.env.URL_MONGO)
    .then(() => console.log(`✅ DB client connected`))
    .catch((error) => {
        console.log(`❌ DB client error :\n`, error);
        process.exit();
    });

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is ON and listening on port : ${PORT}`));