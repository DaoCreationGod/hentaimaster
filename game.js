const discord = require ('discord.js');
const config = require ("./config.json")

var client = new discord.Client();

client.on ("ready", () => {
    console.log ("game.js script is now ready");
});

client.on ("message", (message) => {

    if (message.author.bot) return;

    let msg = message.content.toLowerCase();
    
    if (msg.startsWith (config.prefix + "ping")) {
        message.channel.sendMessage ("Pong!");
    }
    if (msg.startsWith (config.prefix + 'ding')) {
        MessageChannel.sendMessage ('Dong!');
    }
    if (answered == false) {
        userAnswer = msg;
        if (userAnswer == cAnswer) {
            message.reply("You had right")
        }
        else 
        {
            message.reply("You guessed wrong!")
        }
        answered = true; cAnswer = ""; userAnswer = "";
    }
    if (msg.startsWith(config.prefix + "quiz")) {
        numberq = 8;
        var random = Math.floor (Math.random() * (numberq - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ("Who is this character?", { files: ["./https://mega.nz/#!ZB1wQSKb!KugkZ2pIumjoKBwne9dUtEMLoy_aX641dSQq3C96qHE/" + ".jpg"]});
            cAnswer = "saitama"; break;
            case 2: message.channel.send ("From what anime is this character?", { files: ["./https://mega.nz/#!5UkAUKpT!YN32EcH5wxkLk01I_zYO83ztSbDQKNzmRa9xdlDzAMM/" + ".jpg"]});
            cAnswer = "darling in the franxx"; break;
            case 3: message.channel.send ("What is he called?", { files: ["./https://mega.nz/#!8E0C2IIT!3AcG1kbtFM3moiqIJrJDtkO277nHJWGRLYMcBvRrN1I/" + ".jpg"]});
            cAnswer = "nurarihyon"; break;
            case 4: message.channel.send ("How old is she?", { files: ["./https://mega.nz/#!MVlg0QxQ!k83aKYJA64sHZ6MygkWLpB2AT6M33hB0jCPINcIKTZg/" + ".jpg"]});
            cAnswer = "18"; break;
            case 5: message.channel.send ("What does she work with?", { files: ["./https://mega.nz/#!UEsSUA7Q!Wi5A0udWSmkQS2Ew-Q7nbVzsueO5Dsm45lbi4-6BeDc/" + ".jpg"]});
            cAnswer = "drawing erotic pictures"; break;
            case 6: message.channel.send ("Which level is this character?", { files: ["./https://mega.nz/#!ld0CxYgb!37F5AandrGU2z0WCKCXTvQF1D5VaCaun-WmcYC_GEpg/" + ".jpg"]});
            cAnswer = "310"; break;
            case 7: message.channel.send ("What are this gang called?", { files: ["./https://mega.nz/#!0V8WQIba!ITyE606BvBRLVe4eXSIO1gWHJ7f2pqWdwaWagTtq8-Q/" + ".jpg"]});
            cAnswer = "the straw hats"; break;
            case 8: message.channel.send ("What does RWBY stand for?, answer with commas (,) between the words");
            cAnswer = "Red, Black, White, Yellow"; break;
        }
        answered = false;
    }
    if (answered1 == false) {
        userAnswer1 = msg;
        if (userAnswer1 == cAnswer1) {
            message.reply("You had right your pervert")
        }
        else
        {
            message.reply("How could you have wrong you pervert!")
        }
        answered1 = true; cAnswer1 = ""; userAnswer1 = "";
    }
    if (msg.startsWith(config.prefix1 + "quiz")) {
        numbernq = 18;
        var random1 = Math.floor (Math.random() * (numbernq - 1 +1)) + 1;
        switch (random1) {
            case 1: message.channel.send ("From what anime is this fan pic?", { files: ["./https://mega.nz/#!xFVhACZT!O_EnExQOhC5tQzXF7yTpq2zqfV-_Bv-OfQ7PDwT_8rg/" + ".jpg"]});
             cAnswer1 = "darling in the franxx"; break;
            case 2: message.channel.send("Which characters is this? (the dominated one first and an 'and' between", { files: ["./https://mega.nz/#!ZNNl0KRI!93QaYfMbUvf-whSE-Ok4NbuMVnDYQZakiO4i2R92jaw/" + ".jpg"]});
             cAnswer1 = "uruka and momo"; break;
            case 3: message.channel.send("What dream does this character have?", { files: ["./https://mega.nz/#!hZV3xKYb!VBU8ePYt8dQr8xKGK5GQpJFGlcirLp1CfF3cfHL-XME/" + ".jpg"]});
             cAnswer1 = "becoming a magician"; break;
            case 4: message.channel.send("What are the girls nicknames? (oldest first)", { files: ["./https://mega.nz/#!sccxhYTR!tjldb-rC5tnjcn_G0_gWuWnzvf6gha02c-5XH1A21dk/" + ".jpg"]});
             cAnswer1 = "tornado and blizzard"; break;
            case 5: message.channel.send("Does these character know each other well?", { files: ["./https://mega.nz/#!ER9XUCyR!c9AnX3wGj51INi3MruO3JXhF7XVIVmKNQsjoWd2uStU/" + ".jpg"]});
            cAnswer1 = "yes"; break;
            case 6: message.channel.send("How long has this anime been going on? (add since before the full year)", { files: ["./https://mega.nz/#!ZBkVRYZb!9Sb4WHVBxig8i77rZdpcKSWqpP90QHD6uioe59_lCEk/" + ".jpg"]});
            cAnswer1 = "since 1997"; break;
            case 7: message.channel.send("What kind of creature is she?", { files: ["./https://mega.nz/#!lY1DkQ4S!mAjab1h6rKyIWD9VCI96SUULbv5PtfeRMMfJ27dmwPQ/" + ".jpg"]});
            cAnswer1 = "dragon"; break;
            case 8: message.channel.send("Which character has the biggest chance of being behind these girls?", { files: ["./https://mega.nz/#!pAtXCSDD!J2oR-LcuPp3r5i_nb5mW-GD29oH9V1dlyDuwqJ9D0ak/" + ".jpg"]});
            cAnswer1 = "naruto"; break;
            case 9: message.channel.send("Does this character have a twin?", { files: ["./https://mega.nz/#!0cl3GabQ!WOM5UnTnnpeXohxUC0qhD_x0jH3PxDVb2FHUrBxE1Ns/" + ".jpg"]});
            cAnswer1 = "yes"; break;
            case 10: message.channel.send("Is she a slave?", { files: ["./https://mega.nz/#!cY8xRIrL!wQvYW-1Wu15ULz6qtP-zza-6KdAlyytCJiMgl1UuqqA/" + ".jpg"]});
            cAnswer1 = "yes"; break;
            case 11: message.channel.send("Does she have much money?", { files: ["./https://mega.nz/#!lYtXwYLC!viyALfLt7Kc27qYJ4AfKR5C3HHEfmqFmmnlKbmyjqjw/" + ".jpg"]});
            cAnswer1 = "no"; break;
            case 12: message.channel.send("Is she half something? (elf, dragon, dwarf...)", { files: ["./https://mega.nz/#!NQsnSaxR!46p-yzdCOt3A_nO8nEWMZJenIk9vWJWAVfX3hWHvRbU/" + ".jpg"]});
            cAnswer1 = "yes"; break;
            case 13: message.channel.send("Are they stupid?", { files: ["./https://mega.nz/#!cMsj1CbL!a-55_lGRsEdWphls1SPcBgFhJIUsJk4GY6-k8Ll1OFg/" + ".jpg"]});
            cAnswer1 = "yes"; break;
            case 14: message.channel.send("How old is she? (add an + after the age)", { files: ["./https://mega.nz/#!dVkFCAAD!QCPG2YiNLELBb0CWSdWJpDqWoaRbB7TfpGUgX0OzAdM/" + ".jpg"]});
            cAnswer1 = "6000+"; break;
            case 15: message.channel.send("Do they have such big boobs in the TV-series?", { files: ["./https://mega.nz/#!YAt3BQ4B!8V9IbyvEegue2Hb_SM5YuF3SpOv4iQ5m91zBgmvQIig/" + ".jpg"]});
            cAnswer1 = "no"; break;
            case 16: message.channel.send("Have she been betrayed in her life if she has by whom? (comma between)", { files: ["./https://mega.nz/#!UR81BSTZ!GyjAEHnaKVgBQgrzDRkWv7HYc4VuQljR_ux73C6-LmI/" + ".jpg"]});
            cAnswer1 = "yes, by her uncle"; break;
            case 17: message.channel.send("What is the biggest enemy in the series? (plural)", { files: ["./https://mega.nz/#!IMsDwSTI!xfgOt4i88dU3-IUnwUjPzR0dqKOqN4TGZEJP7MEDjI4/" + ".jpg"]});
            cAnswer1 = "goblins"; break;
            case 18: message.channel.send("Does she love somebody?", { files: ["./https://mega.nz/#!AQ0HxaTL!f0Fa-kK5rWD_ObU4dtUIswwor_nXVQLbM2IbhhZC0Do/" + ".jpg"]});
            cAnswer1 = "yes"; break;
        }
        answered1 = false;
    }
});

client.login (config.token);