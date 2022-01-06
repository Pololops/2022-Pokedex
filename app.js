const dotenv = require(`dotenv`);
dotenv.config();

const express = require(`express`);
const router = require(`./app/router`);
const session = require(`express-session`);
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(`public`));

app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24  
    }
}));

app.use(router);

app.listen(PORT, () => console.log(`Listening on : ${PORT}`));