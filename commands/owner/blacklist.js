const { MessageEmbed } = require('discord.js');
const db = require("./../../models/blacklist")
const client = require("../../index")
module.exports = {
    name: "بلاك-ليست",
    run: async(client, message, args) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find((m) => m.user.username === args.slice(1).join(" ")) 
        let user = member
        const ar = message.content.split(' ').slice(2).join(" ")
        if(!message.member.permissions.has("ADMINISTRATOR")) return ;
        if(!member) return message.reply(`**رجاء كتابة ايدي او منشن العضو** | :x:`)
if (user.roles.highest.position >= message.guild.members.resolve(client.user).roles.highest.position ) return message.reply(`رتبي لاتسمح لي ان ابند هذا الشخص | :x:`)
       db.findOne({user: member.id , guildId: message.guild.id}, async(err,data) => {
           if(err) throw err ;
            if(data) {
            message.reply(`تم عثور الشخص لايمكنني ان خالفه مره اخرى | :x:`)
        } else {
              member.roles.cache.forEach((role) => { 
        member.roles.remove(role).catch(() => 0);
      })
              const role1 = message.guild.roles.cache.get("1143248145308995604")
             member.roles.add(role1)
             db.create({
                 user: member.id,
                 reason: ar,
                 guildId: message.guild.id
             }) 
             message.channel.send({
                 embeds: [
                     new MessageEmbed()
                     .setTitle("**تم وضع العضو في قائمه السوداء**")
                     .setDescription(`
                     **
                     بلاك ليست : ${member}
                     الفاعل للامر : ${message.author}
                     السبب : ${ar}
                     تمت العمليه 
                     **
                     `)
                     .setColor("RED").setFooter({text: "Arab Life | Cfw", iconURL: message.guild.iconURL()})
                     
                 ]
             })
   
        
        
        }
       })
       
    }
}