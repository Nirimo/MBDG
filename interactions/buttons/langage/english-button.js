const { PermissionsBitField } = require("discord.js");
const Database = require("../../../utils/database/Database");
const selectedlangage = require("./../../../functions/langselect/langselected.js")
module.exports = {
    name: "englishselect",
    permissions: [PermissionsBitField.Flags.Administrator],
    async runInteraction(client, interaction, db, lang) {
        Database.query(`UPDATE server SET langage="gb" WHERE guildId="${interaction.guildId}"`)
        selectedlangage.langageselected(interaction, "gb")
    },
};