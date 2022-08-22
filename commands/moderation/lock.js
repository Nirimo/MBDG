const Discord = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { codeBlock } = require("@discordjs/builders");
module.exports = {
    name: `lock`,
    description: `Fermer un cannal temporairement`,
    runSlash: (client, interaction, db, lang) => {
        let embedlockactived = new Discord.EmbedBuilder()
                .setColor('#EB203C')
                .setAuthor({ name: `⛔ ${lang.lockinfochannelname} ⛔`})
                .setDescription(`${lang.lockinfochannel}`)
                .setTimestamp()
                .setFooter({ text: interaction.guildId + ""});
            const rowmlockactived = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('modlockdesctivate')
                        .setLabel(`🗝️ ${lang.desaclocked}`)
                        .setStyle(ButtonStyle.Danger),
            );
        interaction.reply({ embeds: [embedlockactived], components: [rowmlockactived]});
        interaction.channel.permissionOverwrites.create(interaction.channel.guild.roles.everyone, { SendMessages: false });
    }

};
