const Database = require("../../utils/database/Database")

module.exports = {
    name: 'guildDelete',
    once: false,
    async execute(client, guild){
        Database.query(`DELETE FROM server WHERE guildId=${guild.id}`)
        Database.query(`DELETE FROM module WHERE guildId=${guild.id}`)
        console.log("Remove Guild: " + guild.name + "\nId of Guild: "+guild.id + "\nId of Owner: " + guild.ownerId+"\n")
    }
}