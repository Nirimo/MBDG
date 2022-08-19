console.log("BOT Discord en cours de lancement ...");
const dotenv = require("dotenv"); dotenv.config();
const { Collection } = require("discord.js");
const Database = require("./utils/database/Database");
const Discord = require('discord.js');
const client = new Discord.Client({intents: 3276799});

['commands', 'buttons'].forEach(x => client[x] = new Collection());
['CommandUtil', 'EventUtil', 'ButtonUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });
language = require("./lang/gb.json")
client.lang = language;



this.db = Database;
client.login(process.env.DISCORD_TOKEN);
