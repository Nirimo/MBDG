const moment = require("moment");
const Discord = require("discord.js");
const { Permissions, ChannelType } = require("discord.js")
module.exports = {
    name: `serverinfo`,
    description: `Toutes les informations du serveur`,
    runSlash: (client, interaction, db, lang) => {
        var serverIcon = interaction.guild.iconURL({ dynamic: true });
        let embedserverinfo = new Discord.EmbedBuilder()
                .setColor('#EB203C')
                .setAuthor({ name: `${interaction.guild.name}`, iconURL: serverIcon})
                .addFields({
                    name: 'General',
                    value: 
                    `
                    ${lang.name}: ${interaction.guild.name}
                    ${lang.owner}: <@${interaction.guild.ownerId}>
                    ${lang.creationdate}: ${moment(interaction.guild.createdAt).format("DD/MM/YYYY")} (<t:${parseInt(interaction.guild.createdTimestamp / 1000)}:R>)
                    Boost: ${interaction.guild.premiumSubscriptionCount ? interaction.guild.premiumSubscriptionCount : "❌"} (${interaction.guild.premiumTier ? "Level 0" : interaction.guild.premiumTier })
                    ${lang.language}: :flag_${lang.lang}:
                    `,
                    inline: false,
                },{
                    name: `📚 ${lang.channel}`,
                    value: 
                    `
                      ${interaction.guild.channels.cache.filter((c) => c.type === ChannelType.GuildText).size} ${lang.writtechannel}
                      ${interaction.guild.channels.cache.filter((c) => c.type === ChannelType.GuildVoice).size} ${lang.voicechannel}
                      ${interaction.guild.channels.cache.filter((c) => c.type === ChannelType.GuildCategory).size} ${lang.category}

                        ➜ ${interaction.guild.channels.cache.size} ${lang.total}
                    `,
                    inline: false,
                },{
                    name: `👨‍👩‍👦‍👦 ${lang.member}`,
                    value: 
                    `
                    ${interaction.guild.members.cache.filter((p) => p.permissions.has(Discord.PermissionsBitField.Flags.Administrator) && !p.user.bot).size} ${lang.admin}
                    ${interaction.guild.members.cache.filter((p) => !p.user.bot && !p.permissions.has(Discord.PermissionsBitField.Flags.Administrator)).size} ${lang.member}
                    ${interaction.guild.members.cache.filter((p) => p.user.bot).size} Bots

                        ➜ ${interaction.guild.members.cache.size} ${lang.total}

                    ${lang.thxforuse}
                    `,
                    inline: false,
                })
                .setThumbnail(serverIcon)
                .setTimestamp()
                .setFooter({ text: interaction.guildId + ""});
        interaction.reply({ embeds: [embedserverinfo]});

    }

};