const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Discord = require("discord.js")
const list = require("./../../../commands/fun/list.js");

module.exports = {
    name: "pagesetothefirst",
    async runInteraction(client, interaction, db, lang) {
        var startpage = 1;
        list.runSlash(client, interaction, db, lang, startpage, true);
    },
};