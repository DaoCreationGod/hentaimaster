const discord = require ('discord.js');
const config = require ("./config.json");

var client = new discord.Client();

client.on ("ready", () => {
    console.log ("admin.js script is now ready");
});

client.on ("message", (message) => {

    if (message.author.bot) return;

    mention = message.mentions.users.first();

    let msg = message.content.toLowerCase();
    if (msg.startsWith (config.prefix2 + "ban")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        if (mention == null) return;
        if (message.guild.member(mention).hasPermission("BAN_MEMBERS")) return;
        let reason = message.content.slice (config.prefix2.length + mention.toString().length + 5);
        message.channel.send (mention.username + " has been banned");
        mention.sendMessage ("You have been banned because: \n" + reason).then (d_msg => {
            message.guild.member (mention).ban(reason);
        })
    }
    if (msg.startsWith (config.prefix2 + "kick")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        if (mention == null) return;
        if (message.guild.member(mention).hasPermission("KICK_MEMBERS")) return;
        let reason = message.content.slice (config.prefix2.length + mention.toString().length + 5);
        message.channel.send (mention.username + " has been kicked");
        mention.sendMessage ("You have been kicked because: \n" + reason).then (d_msg => {
            message.guild.member (mention).kick(reason);
        })
    }
});

client.login (config.token);