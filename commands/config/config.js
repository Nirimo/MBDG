const { ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits } = require('discord.js');
const Discord = require("discord.js")
const moment = require("moment");
module.exports = {
    name: `config`,
    description: `Configurer votre serveur discord`,
    setDefaultMemberPermissions: [PermissionFlagsBits.Administrator],
    runSlash: (client, interaction, db, lang) => {
        db.query(`SELECT staffrole FROM server WHERE guildId = "${interaction.guildId}"`, (err, req) => {
            let embedconfigfirst = new Discord.EmbedBuilder()
                .setColor('#EB1807')
                .setAuthor({ name: `🎞️ ${lang.configserver}`})
                .setDescription(" ")
                .setTimestamp()
                .addFields({ 
                    name: `🏳️ ${lang.language}`, 
                    value: `> ${lang.currentlang}: :flag_${lang.lang}:`, 
                    inline: false
                },{
                    name: `<:protection:1012144777870983219> ${lang.configstaffrole}`, 
                    value: `> ${lang.staffrole}: ${req[0].staffrole ? `${req[0].staffrole}` : "Acun rôle défini"} 
                    > ${lang.memberrole}: ${req[0].memberrole ? `${req[0].memberrole}` : "Acun rôle défini"}
                    `, 
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
					    .setStyle(ButtonStyle.Primary)
                        .setEmoji(`${lang.emoji}`),
                )
                .addComponents(
				    new ButtonBuilder()
					    .setCustomId('staffroleselect')
					    .setLabel(`${lang.role}`)
					    .setStyle(ButtonStyle.Primary)
                        .setEmoji("1013451306024845342"),
                )
            interaction.reply({ embeds: [embedconfigfirst], components: [rowconfigselect]})
                })
            
    }
}