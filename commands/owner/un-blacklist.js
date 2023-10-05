const { MessageEmbed } = require('discord.js');
const db = require("./../../models/blacklist")
module.exports = {
    name: "فك-بلاك-ليست",
    run: async(client, message, args) => {
          let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find((m) => m.user.username === args.slice(1).join(" ")) 
                if(!message.member.permissions.has("ADMINISTRATOR")) return ;
        if(!member) return message.reply(`**رجاء كتابة ايدي او منشن العضو** | :x:`)
        const role1 = message.guild.roles.cache.get("1143248145308995604")
        db.findOne({user: member}, async(err,data) => {
            if(err) throw err
            if(data) {
                data.delete();
                message.channel.send({
                    embeds: [
                        new MessageEmbed()
                        .setTitle(`**__تم فك القائمة السوداء من العضو __**`)
                        .setDescription(`**
                        اليوزر : ${data.user}
                        السبب : ${data.reason}
                        **
                        **__نتمنى منك عدم مخالفه القوانين وشكرا لك __**
                        `)
                        .setColor("GREEN")
                        .setFooter({text: "Arab Life | Cfw", iconURL: message.guild.iconURL()})
                    ]
                })
            } else {
                message.reply(`لم اجد الشخص | :x:`)
            }
        })
    }
}