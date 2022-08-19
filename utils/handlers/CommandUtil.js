const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);

module.exports = async client => {
    (await pGlob(`${process.cwd()}/commands/*/*`.replaceAll("\\", "/"))).map(async (cmdFile) => {
        const cmd = require(cmdFile)
        if(!cmd.name || !(cmd.description)) return console.log(` ${cmdFile} ✗`)
        client.commands.set(cmd.name, cmd);
        console.log("\x1b[36m%s\x1b[0m",`╬ `,` ${cmd.name} `,"\x1b[32m",` √   `)
    })
    console.log("\x1b[36m%s\x1b[0m", "╬============Events==============");
}
