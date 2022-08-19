const Discord = require("discord.js")
const { MessageActionRow, MessageButton } = require('discord.js');
const Database = require("../../utils/database/Database");
module.exports = {
    name: 'guildCreate',
    once: false,
    async execute(client, guild){
        Database.query(`INSERT INTO server (guildId, ownerId, langage) VALUES ("${guild.id}", "${guild.ownerId}", "gb")`)
        Database.query(`INSERT INTO module (guildId, tickets, logs, music) VALUES ("${guild.id}", false, false, true)`)
        console.log("Joined New Guild: " + guild.name + "\nId of Guild: "+guild.id + "\nId of Owner: " + guild.ownerId+"\n------------------");
        client.users.fetch(guild.ownerId).then(user => {
            let embedIdies = new Discord.EmbedBuilder()
                .setColor('#0099ff')
                .setAuthor({ name: `👋 ${client.lang.joindiscord}`})
                .setDescription(`${client.lang.thxfu}`)
                .setTimestamp()
                .setFooter({ text: `${guild.id}`});
            user.send({ embeds: [embedIdies]})
        });
	}
}
    

