const moment = require("moment");
require("moment-duration-format");
const Discord = require("discord.js")
module.exports = {
    name: `info`,
    description: `Informations utile du bot Discord`,
    aliases: [""],
    runSlash: (client, interaction, db, lang) => {
        let embedinfobot = new Discord.EmbedBuilder()
                .setColor('#79EB67')
                .setAuthor({ name: `⚙️ ${lang.characteristicofbot}`})
                .setDescription(" ")
                .setTimestamp()
                .addFields(
                    { name: `🔋 ${lang.conso}`, value: `${(process.memoryUsage().heapUsed/ 1024 / 1024).toFixed(2)} MB`, inline: false },
                    { name: `⏱️ Uptime:`, value: `${moment.duration(client.uptime).format(" D [jours], H [heures], m [minutes], s [secondes]").replace("secondses", "secondes")}`, inline: false },
                    { name: `📌 Ping:`, value: `${client.ws.ping} ms`, inline: false },
                    { name: `🗂️ ${lang.numberserver}`, value: `${client.guilds.cache.size} ${lang.servers}`, inline: false },
                    { name: `🟧 ${lang.etatbot}`, value: `${lang.maintenance}`, inline: false },
                )
                .setFooter({ text: `${interaction.guildId}`});
        interaction.reply({ embeds: [embedinfobot]})
    }
}