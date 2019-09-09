const discord = require ('discord.js');
const config = require ("./config.json");

var client = new discord.Client();
var version = ("0.6.3");


spembeds = require ("./embeds")
spnsfw = require ("./nsfw")
spgame = require ("./game")
spnightcore = require ("./nightcore")
spadmin = require ("./admin")

client.on ("ready", () => {
    console.log ("hentaimaster.js script is now ready");

    answered = true;
    cAnswer = "";
    userAnswer = "";
    answered1 = true;
    cAnswer1 = "";
    userAnswer1 = "";

    client.user.setActivity ("£info");

});

client.on("guildMemberAdd", member => {
    member.send("Welcome", { files: ["./Random/1.jpg"]});
    member.send("Big thanks for joining us");
})

client.on ("message", (message) => {

    if (message.author.bot) return;

    let msg = message.content.toLowerCase();

    if (msg.startsWith (config.prefix + "hello")) {
        message.reply ('HI!');
    }
    if (msg.startsWith (config.prefix + "version")){
        message.channel.sendMessage ("Version " + version);
    }
    if (msg.startsWith (config.prefix + "creator")){
        message.channel.sendMessage("HentaiMaster");
    }
    if (msg.startsWith (config.prefix + "support")){
        message.author.send( { files: ["./Contact info/Support.pdf"]})
        message.author.send('Here is and PDF file with the information you asked for')
    }
});

client.login (config.token);