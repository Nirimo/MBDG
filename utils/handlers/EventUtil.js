const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);

module.exports = async client => {
    var i = 0;
    (await pGlob(`${process.cwd()}/events/*/*`.replaceAll("\\", "/"))).map(async (eventFile) => {
        const event = require(eventFile)
        if(!eventList.includes(event.name) || !(event.name)) {
            return console.log("\x1b[36m%s\x1b[0m",`╬`,"\x1b[31m", `  ${eventFile}  ✗`), i++;
        }
        if(event.once){
            client.once(event.name, (...args) => event.execute(client, ...args))
        } else {
            client.on(event.name, (...args) => event.execute(client, ...args))
        }
        console.log("\x1b[36m%s\x1b[0m",`╬`,`  ${event.name} `,"\x1b[32m",` √   `);
    })
    console.log("\x1b[36m%s\x1b[0m",`╬ `,"\x1b[33m", `${i} Evenements non chargées`)
    console.log("\x1b[36m%s\x1b[0m","╬============Buttons=============");
}

const eventList = ['apiRequest', 'apiResponse', 'applicationCommandCreate', 'applicationCommandDelete', 'applicationCommandUpdate', 'channelCreate', 'channelDelete', 'channelPinsUpdate', 'channelUpdate', 'debug', 'emojiCreate', 'emojiDelete', 'emojiUpdate', 'error', 'guildBanAdd', 'guildBanRemove', 'guildCreate', 'guildDelete', 'guildIntegrationsUpdate', 'guildMemberAdd', 'guildMemberAvailable', 'guildMemberRemove', 'guildMembersChunk', 'guildMemberUpdate', 'guildScheduledEventCreate', 'guildScheduledEventDelete', 'guildScheduledEventUpdate', 'guildScheduledEventUserAdd', 'guildScheduledEventUserRemove', 'guildUnavailable', 'guildUpdate', 'interaction', 'interactionCreate', 'invalidated', 'invalidRequestWarning', 'inviteCreate', 'inviteDelete', 'message', 'messageCreate', 'messageDelete', 'messageDeleteBulk', 'messageReactionAdd', 'messageReactionRemove', 'messageReactionRemoveAll', 'messageReactionRemoveEmoji', 'messageUpdate', 'presenceUpdate', 'rateLimit', 'ready', 'roleCreate', 'roleDelete', 'roleUpdate', 'shardDisconnect', 'shardError', 'shardReady', 'shardReconnecting', 'shardResume', 'stageInstanceCreate', 'stageInstanceDelete', 'stageInstanceUpdate', 'stickerCreate', 'stickerDelete', 'stickerUpdate', 'threadCreate', 'threadDelete', 'threadListSync', 'threadMembersUpdate', 'threadMemberUpdate', 'threadUpdate', 'typingStart', 'userUpdate', 'voiceStateUpdate', 'warn', 'webhookUpdate'];
