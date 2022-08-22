const { ActivityType } = require("discord.js") 
module.exports = {
    name: "ready",
    once: true,
    async execute(client){
        client.user.setPresence({
            activities: [{ name: `${client.guilds.cache.size} serveurs`, type: ActivityType.Watching}],
            status: "online",
        });
        setInterval(async () => {
            const activityList = [`${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} membres`, `${client.guilds.cache.size} serveurs`, `/help`, `Faustin`, "CumulusCloud.fr"]
            const activity = activityList[Math.floor(Math.random() * activityList.length)]
            client.user.setActivity(activity, { type: ActivityType.Watching})
        }, 20000)
        console.log("Le bot est opérationnel sur " + client.guilds.cache.size+ " serveurs discord.");
        const devGuild = await client.guilds.cache.get("982923593707028480");
        devGuild.commands.set(client.commands.map(cmd => cmd));
        // client.application.commands.set(client.commands.map(cmd => cmd));
    }   
}