const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Discord = require("discord.js")
const { codeBlock } = require("@discordjs/builders");

module.exports = {
    sendbuttonforpage: function(lang, index, limite, maxValue){
        const rowbuttonpage = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('pagesetothefirst')
                    .setLabel(`⏮️ ${lang.pagefirst}`)
                    .setStyle(index === 1 ? ButtonStyle.Secondary : ButtonStyle.Primary)
                    .setDisabled(index === 1),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('pageback')
                    .setLabel(`⬅️ ${lang.pageback}`)
                    .setStyle(index === 1 ? ButtonStyle.Secondary : ButtonStyle.Primary)
                    .setDisabled(index === 1),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('pagecontinue')
                    .setLabel(`➡️ ${lang.pagecontinue}`)
                    .setStyle(ButtonStyle.Primary)
                    .setDisabled(index === Math.ceil(limite/maxValue)),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('pagesetothelast')
                    .setLabel(`⏭️ ${lang.pagelast}`)
                    .setStyle(ButtonStyle.Primary)
                    .setDisabled(index === Math.ceil(limite/maxValue)),
            );
        return rowbuttonpage;
    }
   
}
