const discord = require ('discord.js');
const config = require ("./config.json");

var client = new discord.Client();

client.on ("ready", () => {
    console.log ("nsfw.js script is now ready");
});

client.on ("message", (message) => {

    
    if (message.author.bot) return;

    let msg = message.content.toLowerCase();

    if (msg.startsWith (config.prefix1 + "nsfw")) {
        numbernsfw = 10;
        var random = Math.floor (Math.random() * (numbernsfw - 1 + 1)) + 1;
        switch (random) {
            case 1 : number10 = 79;
                    anime1number = Math.floor (Math.random() * (number10 - 1 + 1)) + 1;
                    message.channel.send( { files: ["./https://mega.nz/#F!YVtnBY6R!QrmfI1g5eaXlM8gk7ke-HQ/" + anime1number + ".jpg"]}); break;
            case 2 :  number11 = 19;
                    bdsm1number = Math.floor (Math.random() * (number11 - 1 + 1)) + 1;
                    message.channel.send( { files: ["./https://mega.nz/#F!NIEwyahZ!qq7Jd5oDHG9cZc4YBxLifA/" + bdsm1number + ".jpg"]}); break;
            case 3 : number12 = 17;
                    foot1number = Math.floor (Math.random() * (number12 - 1 + 1)) + 1;
                    message.channel.send( { files: ["./https://mega.nz/#F!FYNwgKSD!-SFAsWw5r2hZgBHB3FZlwA/" + foot1number + ".jpg"]}); break;
            case 5 : number16 = 53; 
                    futanari1number = Math.floor (Math.random() * (number16 - 1 + 1)) + 1;
                    message.channel.send( { files: ["./https://mega.nz/#F!Zd1hTQwQ!nVNOlMV8C-fGc_w4Vg562Q/" + futanari1number + ".jpg"]}); break;
            case 6 : number17 = 51;
                    sfw1number = Math.floor (Math.random() * (number17 - 1 + 1)) + 1;
                    message.channel.send( { files: ["./https://mega.nz/#F!wNk10aqT!7h2mgCLIgz_YUEQLZPW2SA/" + sfw1number + ".jpg"]}); break;
            case 7 : number18 = 75;
                    yuri1number = Math.floor (Math.random() * (number18 - 1 + 1)) + 1;
                    message.channel.send( { files: ["./https://mega.nz/#F!tdM0yaQL!gxnaFFdbWGjne6x9hG1RYw" + yuri1number + ".jpg"]}); break;
            case 8 : number19 = 40;
                    mature1number = Math.floor (Math.random() * (number19 - 1 + 1)) + 1;
                    message.channel.send( { files: ["./https://mega.nz/#F!4AFAiKLb!BbneylQbBwtFcXNtLro8MA/" + mature1number + ".jpg"]}); break;
            case 9 : number20 = 8;
                    loli1number = Math.floor (Math.random() * (number20 - 1 + 1)) + 1;
                    message.channel.send( { files: ["./https://mega.nz/#F!ZA81AQBI!AKSJsYXsxLN-81sAGWZnPQ/" + loli1number + ".jpg"]}); break;
        }
    }
    if (msg.startsWith (config.prefix1 + "gif")) {
        number1 = 44;
        gifNumber = Math.floor (Math.random() * (number1 - 1 + 1)) + 1;
        message.channel.send( { files: ["./https://mega.nz/#F!ANEU2YTA!m6KTAcVXQmdgQLIJQIcMvA/" + gifNumber + ".gif"]})
    }
    if (msg.startsWith(config.prefix1 + "anime")) {
        number2 = 87;
        animenumber = Math.floor (Math.random() * (number2 - 1 + 1)) + 1;
        message.channel.send( { files: "./https://mega.nz/#F!YVtnBY6R!QrmfI1g5eaXlM8gk7ke-HQ/" + animenumber + ".jpg"})
    }
    if (msg.startsWith(config.prefix1 + "bdsm")) {
        number3 = 19;
        bdsmnumber = Math.floor (Math.random() * (number3 - 1 + 1)) + 1;
        message.channel.send( { files: ["./https://mega.nz/#F!NIEwyahZ!qq7Jd5oDHG9cZc4YBxLifA/" + bdsmnumber + ".jpg"]})
    }
    if (msg.startsWith(config.prefix1 + "foot")) {
        number4 = 17;
        footnumber = Math.floor (Math.random() * (number4 - 1 + 1)) + 1;
        message.channel.send( { files: ["./https://mega.nz/#F!FYNwgKSD!-SFAsWw5r2hZgBHB3FZlwA/" + footnumber + ".jpg"]})
    }
    if (msg.startsWith(config.prefix1 + "futanari")) {
        number5 = 55;
        futanarinumber = Math.floor (Math.random() * (number5 - 1 + 1)) + 1;
        message.channel.send( { files: ["./https://mega.nz/#F!Zd1hTQwQ!nVNOlMV8C-fGc_w4Vg562Q/" + futanarinumber + ".jpg"]})
    }
    if (msg.startsWith(config.prefix + "sfw")) {
        number6 = 45;
        sfwnumber = Math.floor (Math.random() * (number6 - 1 + 1)) + 1;
        message.channel.send( { files: ["./https://mega.nz/#F!wNk10aqT!7h2mgCLIgz_YUEQLZPW2SA/" + sfwnumber + ".jpg"]})
    }
    if (msg.startsWith(config.prefix1 + "yuri")) {
        number7 = 85;
        yurinumber = Math.floor (Math.random() * (number7 - 1 + 1)) + 1;
        message.channel.send( { files: ["./https://mega.nz/#F!tdM0yaQL!gxnaFFdbWGjne6x9hG1RYw" + yurinumber + ".jpg"]})
    }
    if (msg.startsWith(config.prefix1 + "mature")) {
        number8 = 47;
        maturenumber = Math.floor (Math.random() * (number8 - 1 + 1)) + 1;
        message.channel.send( { files: ["./https://mega.nz/#F!4AFAiKLb!BbneylQbBwtFcXNtLro8MA/" + maturenumber + ".jpg"]})
    }
    if (msg.startsWith(config.prefix1 + "loli")) {
        number9 = 14;
        lolinumber = Math.floor (Math.random() * (number9 - 1 + 1)) + 1;
        message.channel.send( { files: ["./https://mega.nz/#F!ZA81AQBI!AKSJsYXsxLN-81sAGWZnPQ/" + lolinumber + ".jpg"]})
    }
});
client.login (config.token);