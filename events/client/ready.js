module.exports = {
    name: "ready",
    once: "true",
    execute(client){
        console.log("Le bot est opérationnel sur " + client.guilds.cache.size+ " serveurs discord.");
        client.user.setActivity("aider " + client.guilds.cache.size + " serveurs | !help");
    }
}