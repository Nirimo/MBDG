const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Permissions } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
    name: "modlockdesctivate",
    async runInteraction(client, interaction, db, lang) {
        if(interaction.member.permissions.has(Discord.PermissionsBitField.Flags.ManageMessages)){
            await interaction.channel.permissionOverwrites.create(interaction.channel.guild.roles.everyone, { SendMessages: true });
            await interaction.message.delete();
            let embedlockdesactivate = new Discord.EmbedBuilder()
                .setColor('#EB203C')
                .setAuthor({ name: `✅ ${lang.delockinfochannelname} ✅`})
                .setDescription(`${lang.delockinfochannel}`)
                .setTimestamp()
                .setFooter({ text: interaction.guildId + ""});
            interaction.channel.send({embeds: [embedlockdesactivate]})
        } else {
            interaction.reply({content: "Vous n'êtes pas autorisé à faire ceci !", ephemeral: true});
        }
    },
};