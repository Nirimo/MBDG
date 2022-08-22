const Discord = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { codeBlock } = require("@discordjs/builders");
module.exports = {
    name: `module`,
    description: `Permet la Gestion des modules du serveur`,
    runSlash: (client, interaction, db, lang) => {
        let embedmodules = new Discord.EmbedBuilder()
                .setColor('#EB203C')
                .setAuthor({ name: `${lang.listofmodule}`})
                .setDescription(` `)
                .addFields(
                    {
                        name: "<:ticket:1008789787945226301> Tickets",
                        value: `${codeBlock("js", `${lang.ticketsdesc}`)}`,
                        inline: true
                    },{
                        name: ":book: Logs",
                        value: `${codeBlock("js", `${lang.logsdesc}`)}`,
                        inline: true
                    },{
                        name: `🎤 ${lang.music}`,
                        value: `${codeBlock("js", `${lang.musicdesc}`)}`,
                        inline: true
                    })
                .setTimestamp()
                .setFooter({ text: interaction.guildId + ""});
            const rowmodulelistselect = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('modulelistticketselect')
                        .setLabel('Tickets')
                        .setEmoji("1008789787945226301")
                        .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                        .setCustomId('modulelistlogsselect')
                        .setLabel('📖  Logs')
                        .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                        .setCustomId('modulelistmusicselect')
                        .setLabel(`🎤  ${lang.music}`)
                        .setStyle(ButtonStyle.Primary),
            );
        interaction.reply({ embeds: [embedmodules], components: [rowmodulelistselect]});
    }

};
