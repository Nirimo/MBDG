const Discord = require("discord.js")
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
    name: 'guildCreate',
    once: "false",
    async execute(client, guild){
        console.log("Joined New Guild: " + guild.name + " " + guild.ownerId);
        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Francais')
					.setStyle('PRIMARY'),
			);
        client.users.fetch(guild.ownerId).then(user => {
            let embedIdies = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setAuthor({ name: "👋 MBDG Rejoin votre serveur Discord"})
                .setDescription("")
                .setTimestamp()
                .setFooter({ text: 'Merci de votre confiance'});
            user.send({ embeds: [embedIdies], components: [row]})

        });
	}
}
    

