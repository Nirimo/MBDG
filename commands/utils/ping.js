const Discord = require("discord.js")
const moment = require("moment");
module.exports = {
    name: `ping`,
    description: `Les latences du bot`,
    runSlash: (client, interaction, db, lang) => {
        let embedping = new Discord.EmbedBuilder()
            .setColor('#79EB67')
            .setAuthor({ name: `⚙️ ${lang.latencebot}`})
            .setDescription(" ")
            .setTimestamp()
            .addFields(
                { name: ` ${lang.latencebot}`, value: `${Date.now() - interaction.createdTimestamp} ms`, inline: false },
                { name: ` ${lang.latenceapi}`, value: `${Math.round(client.ws.ping)} ms`, inline: false },
            )
            .setFooter({ text: `${interaction.guildId}`});
        interaction.reply({ embeds: [embedping]})
    }
}

