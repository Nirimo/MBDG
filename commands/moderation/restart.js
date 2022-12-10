const Discord = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField } = require('discord.js');
const { codeBlock } = require("@discordjs/builders");
module.exports = {
    name: `restart`,
    description: `Eteindre MBDG`,
    ownerOnly: true,
    runSlash: (client, interaction, db, lang) => {
        interaction.channel.send('MBDG Restart :)').then(m => {
            client.destroy()
            client.login(process.env.DISCORD_TOKEN);
        });
    }
}