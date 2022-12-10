const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Discord = require("discord.js")
const list = require("./../../../commands/fun/list.js");


module.exports = {
    name: "pagecontinue",
    async runInteraction(client, interaction, db, lang) {
        var startpage = ++interaction.message.embeds[0].footer.text[0];
        list.runSlash(client, interaction, db, lang, startpage, true);
    },
};