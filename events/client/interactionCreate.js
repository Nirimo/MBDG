const { InteractionType } = require('discord.js')
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
                cmd.runSlash(client, interaction, db, lang);
            });
        } else if (interaction.isButton()){
            db.query(`SELECT langage FROM server WHERE guildId = "${interaction.guildId}"`, (err, req) => {
                const lang = require(`./../../lang/${req[0].langage}.json`)
                const btn = client.buttons.get(interaction.customId);
                if(!btn) return interaction.reply("Ce boutton n'existe pas");
                btn.runInteraction(client, interaction, db, lang);
            })
        }

        
    }
}