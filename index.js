console.log("BOT Discord en cours de lancement ...");

const { Client } = require("discord.js");
const client = new Client({intents: 1})

require("./utils/handlers/EventUtil")(client);

client.login(require("./dontopen/login.json").token);