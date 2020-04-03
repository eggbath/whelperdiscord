const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njc4NjM5NTYwNzk1NjE5MzM1.Xklyfg.ImGE8WetnOmsOgRR1NUxXxM4DMQ';

const PREFIX = '.';

bot.on('ready', () =>{
    console.log('This bot is ready.');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case'ping':
            message.channel.sendMessage('Pong!')
            break;
        case 'website':
            message.channel.sendMessage('https://whelperbot.blogspot.com/')
            break;
        case 'help':
            message.channel.sendMessage('Commands: .ping, .website, .help, .cat, .contact, .fortnitevbucks, .invite, .kick, .ban')
            break;
        case'cat':
            message.channel.sendMessage('https://www.youtube.com/watch?v=SaA_cs4WZHM')
            break;
        case'contact':
            message.channel.sendMessage('Here is the link to our Server: https://discordapp.com/invite/SurzxNN')
            break;
        case'fortnitevbucks':
            message.channel.sendMessage('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            break;
        case'developercmd':
            message.channel.sendMessage('Wait what? no you arent supposed to run this command it is secret no one knows about it. Well you found the command out, but keep it secret ok?')
            break;
	case'invite':
	    message.channel.sendMessage('https://discordapp.com/oauth2/authorize?client_id=678639560795619335&scope=bot&permissions=1677790278')
        break;
    case'kick':

        const user = message.mentions.users.first();

        if(user){
            const member = message.guild.member(user);

            if(member){
                member.kick('You were kicked from the server!').then(() =>{
                    message.reply('I succesfully kicked that person!');
                }).catch(err =>{
                    message.reply('I was unable to kick that person');
                    console.log(kick_err);
                });
            } else {
                message.reply("That user isn\'t in this guild.")

            }
        } else {
                message.reply('You need to specify someone.')

            }
            break;
            case'ban':

        const EmbedA = message.mentions.users.first();

        if (EmbedA) {
            const member = message.guild.member(EmbedA);

            if(member){
                member.ban({ression: 'You were banned from the server!'}).then(() =>{
                    message.reply('I succesfully banned that person!');
                }).catch(err =>{
                    message.reply('I was unable to ban that person.');
                    console.log(ban_err);
                });
            } else {
                message.reply("That user isn\'t in this guild.")

            }
        } else {
                message.reply('You need to specify someone.')

            }
            break;
            case'node':
                message.channel.sendMessage('bot.client.overload(node stop C:/Users/Andrew/Documents/Discord bot/index.js);')
                break;
        }
});
bot.login(token);