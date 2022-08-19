const Discord = require("discord.js")
const moment = require("moment");
module.exports = {
    name: `emoji`,
    description: `Tous les émojis du serveur`,
    runSlash: (client, interaction, db, lang) => {
        let embedemojilist = new Discord.EmbedBuilder()
            .setColor('#79EB67')
            .setAuthor({ name: `🎞️ ${lang.emojilist}`})
            .setDescription(" ")
            .setTimestamp()
            .setFooter({ text: `${interaction.guildId}`});
        const emojiList = interaction.guild.emojis.cache.forEach((e, x) =>{
            embedemojilist.addFields({ name: `      ${e}`, value: `**${lang.name}:**\n ${e.name}\n**ID:**\n||${x}||`, inline: true },)
        })
        interaction.reply({ embeds: [embedemojilist]})
    }
}