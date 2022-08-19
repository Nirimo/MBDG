const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Discord = require("discord.js")
const moment = require("moment");
module.exports = {
    name: `config`,
    description: `Configurer votre serveur discord`,
    runSlash: (client, interaction, db, lang) => {
        let embedconfigfirst = new Discord.EmbedBuilder()
            .setColor('#EB1807')
            .setAuthor({ name: `🎞️ ${lang.configserverlang}`})
            .setDescription(" ")
            .setTimestamp()
            .addFields({ 
                name: `🏳️ ${lang.language}`, 
                value: `${lang.currentlang}: :flag_${lang.lang}:`, 
                inline: false
            },{
                name: `e`, 
                value: `e`, 
                inline: false
            },{ 
                name: `e`, 
                value: `e`, 
                inline: false
            })
            .setFooter({ text: `${interaction.guildId}`});
        const rowconfigselect = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('langageselect')
					.setLabel(`${lang.language}`)
					.setStyle(ButtonStyle.Primary),
            )
        interaction.reply({ embeds: [embedconfigfirst], components: [rowconfigselect]})
    }
}