const Discord = require('discord.js');
const client =new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on(message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
});

// THIS MUST BE THIS WAY
client.login(process.evn.NDQ4ODgzMDQ3MjkxNDIwNzAy.Deh78Q.dIvkwsZig-74Eg-pNJpQpOMX7kY);
