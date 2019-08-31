const Discord=require('discord.js');
const bot=new Discord.Client();

const{prefix,token}=require('./config.json');

//Bot get Online 
bot.once('ready',()=>{
    console.log("Bot is Online");
})

//Kick member #!kick <Username Here>
bot.on('message',message=>{

    if(message.member.hasPermission(['KICK_MEMBERS','BAN_MEMBERS'])){

        if(message.content.startsWith(`${prefix}kick`)){
            console.log(message.content);
            let member = message.mentions.members.first();
            member.kick().then(() => console.log(`Kicked ${member.displayName}`))
            .catch(console.error);
        }

    }

    
})

//Send Welcome Message
bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'damn');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Merhabalar, ${member}`);
  });
  




bot.login(token);