const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😎KING RAGNAR😎═════╗*\n           \n*⚜═SALMAN═⚜*\n\n*owner KING RAGNAR - http://Wa.me/+919072814956*\n* *\n🔰instagram:-https://instagram.com/salman_ramos_4 *\n* *\n https://instagram.com/srfx.mp4*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator:SALMAN RAMOS*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Sophia Owner KING RAGNAR═💥*\n\n*💘 https://github.com/salman1ramos/Sophia-1*\n*     *\nSALMAN═⚜*\n\n*owner KING RAGNAR - http://Wa.me/+919072814956*\n* *\n🔰instagram:-https://instagram.com/salman_ramos_4 *\n* *\n https://instagram.com/srfx.mp4*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'creator', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😎KING RAGNAR😎═════╗*\n           \n*⚜═SALMAN═⚜*\n\n*owner KING RAGNAR - http://Wa.me/+919072814956*\n* *\n🔰instagram:-https://instagram.com/salman_ramos_4 *\n* *\n https://instagram.com/srfx.mp4*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator:SALMAN RAMOS*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Sophia Owner KING RAGNAR═💥*\n\n*💘 https://github.com/salman1ramos/Sophia-1*\n*     *\nSALMAN═⚜*\n\n*owner KING RAGNAR - http://Wa.me/+919072814956*\n* *\n🔰instagram:-https://instagram.com/salman_ramos_4 *\n* *\n https://instagram.com/srfx.mp4*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }