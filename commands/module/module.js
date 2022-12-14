const Discord = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField } = require('discord.js');
const { codeBlock } = require("@discordjs/builders");
const sendpage = require("./../../functions/page/sendpage.js").sendpage;
const sendbuttonlistmodule = require("./../../functions/page/sendbuttonlist.js");
const modulelist = require("./../../lang/module/fr_module.json")

module.exports = {
    name: `module`,
    description: `List des modules de votre serveur discord`,
    ownerOnly: false,
    runSlash: (client, interaction, db, lang, number, stats) => {
        var maxValue= 5;
        var startpage = number ? number : 1;
        var nmboflist = Object.keys(modulelist).length
        sendpage(client, interaction, db, lang, startpage, lang.listofmodule, sendbuttonlistmodule.sendbuttonforpage(lang, startpage, nmboflist, maxValue), maxValue, nmboflist, modulelist, true, stats ? false : true);
    }
};
