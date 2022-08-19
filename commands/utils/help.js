const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Discord = require("discord.js")
const moment = require("moment");
module.exports = {
    name: `help`,
    description: `Toutes les commandes du bot`,
    runSlash: (client, interaction, db, lang) => {
        let embedhelp = new Discord.EmbedBuilder()
            .setColor('#79EB67')
            .setAuthor({ name: `⚙️ ${lang.latencebot}`})
            .setDescription(" ")
            .setTimestamp()
            .addFields(
                { name: ` ${lang.latencebot}`, value: `${Date.now() - interaction.createdTimestamp} ms`, inline: false },
                { name: ` ${lang.latenceapi}`, value: `${Math.round(client.ws.ping)} ms`, inline: false },
            )
            .setFooter({ text: `${interaction.guildId}`});
        const rowhelpselect = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('moderationselect')
					.setLabel(' ⚔️ Modération')
					.setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
					.setCustomId('moduleselect')
					.setLabel(' 📋 Module')
					.setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
					.setCustomId('configselect')
					.setLabel(' 🔧 Configurations')
					.setStyle(ButtonStyle.Primary),
			);
        interaction.reply({ embeds: [embedhelp], components: [rowhelpselect] })
    }
}