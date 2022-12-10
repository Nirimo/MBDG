const { InteractionType } = require('discord.js');
const { relativeTimeRounding } = require('moment');
const db = require("../../utils/database/Database");
module.exports = {
    name: "interactionCreate",
    once: false,
    async execute(client, interaction){
        if(interaction.type === InteractionType.ApplicationCommand){
            db.query(`SELECT langage FROM server WHERE guildId = "${interaction.guildId}"`, (err, req) => {
                const lang = require(`./../../lang/${req[0].langage}.json`)
                const cmd = client.commands.get(interaction.commandName);
                if(!cmd) return interaction.reply(`Cette commande n'existe pas`)
                if(cmd.ownerOnly && process.env.IDOWNERBOT !== interaction.member.id) return interaction.reply({content: `${lang.notpoprio}`, ephemeral: true})
                // if(!interaction.member.permissions.has([cmd.permissions ? cmd.permissions : [""]])) return interaction.reply({content: `${lang.notperm}`, ephemeral: true})
                cmd.runSlash(client, interaction, db, lang);
            });
        } else if (interaction.isButton()){
            db.query(`SELECT langage FROM server WHERE guildId = "${interaction.guildId}"`, (err, req) => {
                const lang = require(`./../../lang/${req[0].langage}.json`)
                const btn = client.buttons.get(interaction.customId);
                if(!interaction.member.permissions.has([btn.permissions ? btn.permissions : [""]])) return interaction.reply({content: `${lang.notperm}`, ephemeral: true})
                if(!btn) return interaction.reply("Ce boutton n'existe pas");
                btn.runInteraction(client, interaction, db, lang);
            })
        }

        
    }
}