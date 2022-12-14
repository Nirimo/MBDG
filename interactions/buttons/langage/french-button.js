const { ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField } = require('discord.js');
const Discord = require("discord.js")
const selectedlangage = require("./../../../functions/langselect/langselected.js")

module.exports = {
    name: "frenchselect",
    permissions: [PermissionsBitField.Flags.Administrator],
    async runInteraction(client, interaction, db, lang) {
        db.query(`UPDATE server SET langage="fr" WHERE guildId="${interaction.guildId}"`)
        selectedlangage.langageselected(interaction, "fr")
    },
};