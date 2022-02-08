const express = require("express")
const app = express()
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

app.get("/", (req, res) => {
 res.send("Привет мир!")
})

app.listen(3000, () => {
 console.log("Нет ошибок, ты про")
})
const Discord = require('discord.js');
const client = new Discord.Client()

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`?help `);
});

client.on("message", message => {
if (message.content.startsWith('?ban')) {
if(message.member.hasPermission("BAN_MEMBERS")) {
 const user = message.mentions.users.first();
 
 if (user) {
 
 const member = message.guild.member(user);

 if (member) {
 
 member
 .ban({
 reason: 'They were bad!',
 })
 .then(() => {
 // We let the message author know we were able to ban the person
 message.reply('** Member was Suceffuly banned. | Участник был забанен.** <a:checkmarknotrainbow:826335611853602816>');
 })
 .catch(err => {

 message.reply("**I was unable to ban the member | Я не смог забанить участника**. <:no:826339934452580373>");
 
 console.error(err);
 });
 } else {
 
 message.reply("**This Member is not in the server. | Участника Нету На сервере **<:no:826339934452580373>");
 }
 } else {
 
 message.reply("**Вы не упомянули пользователя, которого нужно забанить! | You didn't mention the user to ban!**<:no:826339934452580373>");
 }
 }
}
if (message.content.startsWith("?kick")) {
 if (message.member.hasPermission("KICK_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.kick().then(mem => {
 message.channel.send(`Kicked ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that...")
 }
 }
 if(message.content === "?help mod") {
 let embed = new Discord.MessageEmbed()
 .setTitle("**:tools:** **|** **Moderation Commands**")
 .setDescription("`?ban`, `?kick`, `?clear`") 
 .setColor("RANDOM")
 .setFooter("Bot Created by @Ker#4353")
 message.channel.send(embed)
}
 if(message.content === "?help music") {
 let embed = new Discord.MessageEmbed()
 .setTitle("**:musical_note:** **|** **Music Commands**")
 .setDescription("`?play`, `?leave` commands no ENEBLED! Developing code.") 
 .setColor("RANDOM")
 .setFooter("Bot Created by @Ker#4353")
 message.channel.send(embed)
}
if(message.content === "?help fun") {
 let embed = new Discord.MessageEmbed()
 .setTitle("**:stuck_out_tongue:|Fun**")
 .setDescription("`?ping` `?invite` `?donate` `?bot info` `?partners` ") 
 .setColor("RANDOM")
 .setFooter("Bot Created by @Ker#4353")
 message.channel.send(embed)
}
if(message.content === "?help animals") {
 let embed = new Discord.MessageEmbed()
 .setTitle("**:dog:** | **Animals Commands**")
 .setDescription("`Команд пока-что нету.`")
 .setColor("RANDOM")
 .setFooter("Bot Created by @Ker#4353")
 .setThumbnail("https://cdn.discordapp.com/avatars/825710266653999144/1f905ad18c0b4cfe546dccbfeed3c703.png?size=1024")
 message.channel.send(embed)
}
if(message.content === "?help util") {
 let embed = new Discord.MessageEmbed()
 .setTitle("**:gear:** | **Utils Commands**")
 .setDescription("`Команд пока-что нету.`")
 .setColor("RANDOM")
 .setFooter("Bot Created by @Ker#4353")
 .setThumbnail("https://cdn.discordapp.com/avatars/825710266653999144/1f905ad18c0b4cfe546dccbfeed3c703.png?size=1024")
 message.channel.send(embed)
}
if(message.content === "?ping") {
 let embed = new Discord.MessageEmbed()
 .setDescription("**:ping_pong: Pong!**") 
 .setColor("RANDOM")
 message.channel.send(embed)
}
if(message.content === "?partners") {
 let embed = new Discord.MessageEmbed()
 .setTitle("Partners help.")
 .setDescription("<--------------------------------->")
 .addField("🔗 Servers - ?partners servers", "**✅ Users - ?partners users**")
 .setColor("RANDOM")
 .setFooter("Bot Created by @Ker#4353")
 message.channel.send(embed)
}
if(message.content === "?donate") {
 let embed = new Discord.MessageEmbed()
 .setTitle("Developer Gift!")
 .setDescription("**🔗 Donate - https://www.donationalerts.com/r/dkbot**") 
 .setColor("RANDOM")
 message.channel.send(embed)
}
if(message.content === "?invite") {
 let embed = new Discord.MessageEmbed()
 .setTitle("Invite bot the server!")
 .setDescription("**🔗 Bot invite - https://clck.ru/auHtw**") 
 .setColor("RANDOM")
 message.channel.send(embed)
}
if(message.content === "?help") {
 let embed = new Discord.MessageEmbed()
 .setTitle("**Prefix = `?`**")
 .setDescription("**Bot's Commands **")
 .addField(":tools:Moderation","`?help mod `") 
 .addField(":gear:Utility", "`?help util`")
 .addField(":stuck_out_tongue:Fun","`?help fun `") 
 .addField(":dog:Animals","`?help animals`")
 .addField(":musical_note:Music", "`?help music`")
 .setColor("RANDOM")
 .setFooter("Bot Created by @Ker#4353")
 .setThumbnail("https://cdn.discordapp.com/avatars/825710266653999144/2c84e0756fa0e8e4270f100c5bd7ac16.png?size=1024")
 message.channel.send(embed)
}
if(message.content === "?bot info") {
 let embed = new Discord.MessageEmbed()
 .setTitle("**Bot name - DKBot**")
 .setDescription(`Monitorning servers - **${client.guilds.cache.size}**`)
 .setColor("RANDOM")
 .setFooter("Bot Created by @Ker#4353")
 .setThumbnail("https://cdn.discordapp.com/avatars/825710266653999144/1f905ad18c0b4cfe546dccbfeed3c703.png?size=1024")
 message.channel.send(embed)
}
if(message.content.startsWith("?clear")){
let arg = message.content.split(" ")
if(message.member.hasPermission("MANAGE_MESSAGES")) {
let clear = arg[1];
if(!clear) return message.channel.send(`:x: | \`Неправильное использование команды, вам нужно предоставить количество сообщений для очистки.\` 
**Example:** \`_purge 50\` `)
if(isNaN(clear)) return message.channel.send(":x: | ``Пожалуйста, введите правильный номер, чтобы удалить сообщения.``")
if(clear > 1000) return message.channel.send(":x: | ``Вы не можете удалить более 1000 сообщений.``")
if(clear < 1) return message.channel.send(":x: | ``Вы не можете удалить менее 1 сообщения.``")

message.channel.bulkDelete(clear)
message.channel.send(`:white_check_mark: | \ **Успешно! Удалено ${clear} сообщений(я)!** `)
.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply("У тебя нет прав!")
}

}
})
client.login("ODI1NzEwMjY2NjUzOTk5MTQ0.YGB4nA.MBKNva90rtI3nU2539r5-MOMISg") 
