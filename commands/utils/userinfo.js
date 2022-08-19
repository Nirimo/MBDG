const moment = require("moment");
const Discord = require("discord.js");
const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');
module.exports = {
    name: `userinfo`,
    description: `Les informations d'un membres`,
    options: [
        {
            name: "target",
            description: "Informations d'un membre spécifique",
            type: ApplicationCommandOptionType.User,
            required: false
        }
    ],
    runSlash: (client, interaction, db, lang) => {
        const target = interaction.options.getMember('target');
        if(target && target.user.bot) return interaction.reply(`${client.lang.infobot}`);
        var userIcon = target ? target.user.displayAvatarURL() : interaction.user.displayAvatarURL();
        let embeduserinfo = new Discord.EmbedBuilder()
            .setColor('#79EB67')
            .setAuthor({ name: `${target ? target.user.username: interaction.user.username}`, iconURL: userIcon})
            .setThumbnail(userIcon)
            .addFields(
                {
                    name: "Nitro:",
                    value: 
                    `${target ? target.premiumSince ? "✅" : "❌" : interaction.member.premiumSince ? "✅" : "❌"}
                    `,
                    inline: true
                },{
                    name: "ID:",
                    value: `||${target ? target.id : interaction.member.id}||`,
                    inline: false
                },{
                    name: `${lang.creationdate}:`,
                    value:
                    `${moment(target ? target.user.createdAt : interaction.user.createdAt).format("DD/MM/YYYY")}
                    (<t:${parseInt(target? target.user.createdTimestamp / 1000 : interaction.user.createdTimestamp / 1000)}:R>)
                    `,
                    inline: true
                },{
                    name: `${lang.datejoined}`,
                    value: 
                    `${moment(target ? target.joinedAt : interaction.member.joinedAt).format("DD/MM/YYYY")}
                    (<t:${parseInt(target ? target.joinedTimestamp / 1000 : interaction.member.joinedTimestamp / 1000)}:R>)
                    `,
                    inline: true
                }
            )
            .setTimestamp()
            .setFooter({ text: interaction.guildId + ""});
        interaction.reply({ embeds: [embeduserinfo]});

    }
}