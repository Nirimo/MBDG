const Database = require("../../../utils/database/Database");
const selectedlangage = require("./../../../functions/langselect/langselected.js")
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField } = require('discord.js');
const Discord = require("discord.js")
module.exports = {
    name: "staffroleselect",
    permissions: [PermissionsBitField.Flags.Administrator],
    async runInteraction(client, interaction, db, lang) {
        let embedconfigrole = new Discord.EmbedBuilder()
                .setColor('#EB1807')
                .setAuthor({ name: `🎞️ ${lang.configserverlang}`})
                .setDescription(" ")
                .setTimestamp()
                .setFooter({ text: `${interaction.guildId}`});
        const rowconfigroleselect = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('rolereturn')
                    .setLabel(`${lang.language}`)
                    .setStyle(ButtonStyle.Danger)
                    .setEmoji(`${lang.emoji}`),
        )
        interaction.update({embeds: [embedconfigrole], components: [rowconfigroleselect]})
    },
};