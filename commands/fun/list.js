const Discord = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField } = require('discord.js');
const { codeBlock } = require("@discordjs/builders");
const sendpage = require("./../../functions/page/sendpage.js").sendpage;
const sendbuttonlistmodule = require("./../../functions/page/sendbuttonlist.js");
const modulelist = require("./../../lang/module/fr_module.json")

module.exports = {
    name: `list`,
    description: `faire une list`,
    ownerOnly: false,
    UserPerms: ["BanMembers"],
    runSlash: (client, interaction, db, lang, number, stats) => {
        interaction.reply("salut");
    }
};
