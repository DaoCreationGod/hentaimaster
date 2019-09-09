const discord = require ('discord.js');
const config = require ("./config.json");

var client = new discord.Client();

client.on ("ready", () => {
    console.log ("nightcore.js script is now ready");
});

client.on ("message", (message) => {

    if (message.author.bot) return;

    let msg = message.content.toLowerCase();

    if (msg.startsWith(config.prefix + "nightcore")) {
        number = 152;
        nightnumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send( { files: ["./https://mega.nz/#F!sVMABKBJ!2umrgdmyfLuV4Jgf41i9Jg/" + nightnumber + ".jpg"]})
    }
});

client.login (config.token);