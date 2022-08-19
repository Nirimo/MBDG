const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
    name: "modulelistmusicselect",
    async runInteraction(client, interaction, db, lang) {
        let embedmodulemusicselect = new Discord.EmbedBuilder()
                .setColor('#EB203C')
                .setAuthor({ name: `🎤 Musique `})
                .setDescription(` `)
                .addFields(
                    {
                        name: `${lang.status}`,
                        value: ` eee `,
                        inline: false
                    },{
                        name: `${lang.desc}`,
                        value: `${lang.musicdesc}`,
                        inline: true
                    })
                .setTimestamp()
                .setFooter({ text: interaction.guildId + ""});
        interaction.update({embeds: [embedmodulemusicselect], components: []})
    },
};