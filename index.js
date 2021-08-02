const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join(861376397791854592) 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**<a:9FAF7C0CF0104A2F979F1263DF55D91A:855230044258828328> پێویستە تۆ لە ڤۆیسەکە بیت **'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`https://discord.gg/DkTwfpx92s`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("861376425835233322").send(
`> <a:E14567BBEE164342AF58DF6872011807:853287588390633502> By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Masko 🖤`) 
});




client.login("ODU5MTIzNzc0NzQxMDIwNzEz.YNoHXQ.8KfThXP_7tDMfjRB5IVyh4lbuOo");// Your Token
