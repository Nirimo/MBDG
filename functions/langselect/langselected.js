const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Discord = require("discord.js")


module.exports = {
    langageselected: function(interaction, nameoflang){
        const lang = require(`./../../lang/${nameoflang}.json`)
        let embedfinishselect = new Discord.EmbedBuilder()
            .setColor('#EB1807')
            .setAuthor({ name: `${lang.configserver}`})
            .setDescription(`\n:flag_${lang.lang}: ${lang.langageselected} ${lang.languagename} :flag_${lang.lang}:`)
            .setTimestamp()
            .setFooter({ text: `${interaction.guildId}`});
        interaction.update({embeds: [embedfinishselect], components: []})
    }
}
