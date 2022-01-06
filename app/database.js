const { Client } = require(`pg`);
const client = new Client();

client.connect()
    .then(() => console.log(`✅ DB client connected`))
    .catch((error) => {
        console.log(`❌ DB client error :\n`, error);
        process.exit();
    });

module.exports = client;