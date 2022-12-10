const Discord = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField } = require('discord.js');
const { codeBlock } = require("@discordjs/builders");

module.exports = {
    sendpage: function(client, interaction, db, lang, index, nameEmbed, buttons, maxValue, nboflist, list, codeblockstats, firstsend) {
        let embedlistpage = new Discord.EmbedBuilder()
            .setColor('#EB1807')
            .setAuthor({ name: `${nameEmbed}`})
            .setDescription(` `)
            .setTimestamp()
            .setFooter({ text: `${index}/${Math.ceil(nboflist/maxValue)}`});
        var maxpages = index* maxValue;
        var pages= maxpages- maxValue;
        var current = 0;
        for (const category of Object.entries(list)) {
            if(((index-1) * maxValue <= current)&& (current < ((index-1)* maxValue)+maxValue)){
                pages++;
                embedlistpage.addFields({name: `${pages}.${category[1].titre}`, value: `${codeblockstats ? codeBlock("js", `${category[1].desc}`) : `${category[1].desc}`}`, inline: true});
            }
            current++;
        }
        firstsend ? interaction.reply({embeds: [embedlistpage], components: (buttons ? [buttons] : [])}) : interaction.update({embeds: [embedlistpage], components: (buttons ? [buttons] : [])})
    }
}

