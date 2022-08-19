const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);

module.exports = async client => {
    console.log("\x1b[36m%s\x1b[0m","╦============Commands============");
    (await pGlob(`${process.cwd()}/interactions/buttons/*/*`.replaceAll("\\", "/"))).map(async (btnFile) => {
        const btn = require(btnFile)
        if(!btn.name) return console.log(`  ${btn.name}  ✗   `);
        client.buttons.set(btn.name, btn);
        console.log("\x1b[36m%s\x1b[0m", `╬ `, `${btn.name} `, "\x1b[32m", `√   `)

    })
    console.log("\x1b[36m%s\x1b[0m","╩================================");
    
}
