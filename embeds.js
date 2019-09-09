const discord = require ('discord.js');
const config = require ("./config.json");

var client = new discord.Client();

client.on ("ready", () => {
    console.log ("emebeds.js script is now ready");
});

client.on ("message", (message) => {

    
    if (message.author.bot) return;

    let msg = message.content.toLowerCase();

    if (msg.startsWith (config.prefix + "user")){
        const embed = new discord.RichEmbed()
             .setTitle('User Information')
             .addField('Username', message.author.username)
             .addField('Current Server', message.guild.name)
             .setColor(0x0BEE11)
             .setThumbnail(message.author.avatarURL)
             message.channel.sendEmbed(embed);
    }
    if (msg.startsWith (config.prefix + "help")){
        const embed1 = new discord.RichEmbed()
            .setTitle('Command help page')
            .addField('£help', 'This page' )
            .addField('£h2', 'Page 2 of the commands')
            .addField('£hello', 'This says Hi')
            .addField('£ping', 'A Ping-Pong match against this "BOT"')
            .addField('£user', 'YOUR user infomation')
            .addField('£version', 'This "BOTS" version')
            .addField('£creator', 'This "BOTS" Creator')
            .addField('£bot', 'Clean info about this bot')
            .addField('£support', 'This is an command that gives you contact/support info')
            .setFooter('By having this bot/being on a server with it and using any command (even this) so are you giving up YOUR right to sue the creator bc of something')
            .setColor(0x0BEE12)
            message.channel.sendEmbed(embed1);
    }
    if (msg.startsWith (config.prefix + 'bot')){
        const embed2 = new discord.RichEmbed()
        .setTitle('Bot Information')
        .addField('Bot Name', 'HentaiMasters NSFW')
        .addField('Version ', version)
        .addField('Creator', 'HentaiMaster')
        .addField('Created', '13/9-2019')
        .addField('Prefix', 'This Bots prefix is £')
        .addField('Age restricted?', 'Yes this bot is age restricted in that way that you Need to be 18+ to use it other wise so have you lost your right to report this bot (you got warned)')
        .addField('Extra', 'This bot is case sensitive so it only accepts lowercase letters')
        .setFooter('By having this bot/being on a server with it and using any command (even this) so are you giving up YOUR right to sue the creator bc of something')
        .setColor(0x0BEE12)
        message.channel.sendEmbed(embed2);

    }
    if (msg.startsWith(config.prefix1 + 'hn')){
        const embed3 = new discord.RichEmbed()
        .setTitle('NSFW Commands')
        .addField('¤nsfw', 'A random NSFW picture')
        .addField('¤gif', 'A NSFW gif command')
        .addField('¤anime','NSFW pictures with anime characters')
        .addField('¤bdsm','NSFW bdsm pictures')
        .addField('¤foot','NSFW feet pictures')
        .addField('¤futanari','NSFW futanari pictures')
        .addField('¤yuri','NSFW yuri pictures')
        .addField('¤mature', 'NSFW mature women pictures aka Big breasted women')
        .addField('¤quiz', 'NSFW quiz command')
        .addField('¤hn2', 'This an second page of NSFW commands')
        .setFooter('By having this bot/being on a server with it and using any command (even this) so are you giving up YOUR right to sue the creator bc of something')
        .setColor(0x0BEE12)
        message.channel.sendEmbed(embed3);
    }
    if (msg.startsWith(config.prefix + 'h2')){
        const embed4 = new discord.RichEmbed()
        .setTitle('Command help page 2')
        .addField('£user', 'This is wchich server you are in and your username.')
        .addField('£quiz', 'This is an quiz command.')
        .addField('£sfw','SFW pictures')
        .addField('£nightcore', 'This is an command which gives you an nightcore picture')
        .addField('£credits', 'A commands which gives credit to every one who deserves it.')
        .setFooter('By having this bot/being on a server with it and using any command (even this) so are you giving up YOUR right to sue the creator bc of something')
        .setColor(0x0BEE12)
        message.channel.sendEmbed(embed4);
    }
    if (msg.startsWith(config.prefix + 'info')){
        const embed5 = new discord.RichEmbed()
        .setTitle('This is an overall information page')
        .addField('READ!', 'You pronunce this bots name as "HentaiMasters"')
        .addField('READ!', 'This bot was made for fun and is being update pretty often.')
        .addField('READ!', 'It is being run 24/7 thanks to heroku (no ad) and git.')
        .addField('READ!', 'The bot is written in javascript')
        .addField('READ!', 'It does have secret commands which you need to find the prefix for and after the prefix put hn')
        .addField('READ!', 'This bot most basic command for getting started is £help')
        .addField('READ!', 'I hope you are gonna like this bot by your own HentaiMaster')
        .setFooter('By having this bot/being on a server with it and using any command (even this) so are you giving up YOUR right to sue the creator bc of something')
        .setColor(0x0BEE12)
        message.channel.sendEmbed(embed5);
    }
    if (msg.startsWith(config.prefix + 'credits')){
        const embed6 = new discord.RichEmbed()
        .setTitle('CREDITS!')
        .addField('THE credits', 'Credit goes to every author, contributer, creator which things I have used in this bot.')
        .setFooter('By having this bot/being on a server with it and using any command (even this) so are you giving up YOUR right to sue the creator bc of something')
        .setColor(0x0BEE12)
        message.channel.sendEmbed(embed6);
    }
});

client.login (config.token);