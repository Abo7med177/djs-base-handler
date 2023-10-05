const db = require("./../../models/m5alfh")
const {MessageEmbed} = require("discord.js");
const moment = require("moment")
module.exports = {
    name: "مسح-المخالفة", 
    run: async(client,message,args) => {
        const ar = await message.content.replace(/<@[^>]+>/g, "").split("").filter((element) => {
            return !isNaN(parseInt(element))
          }).join("")
        if(!message.member.roles.cache.has('1151150614336774224')) return;
       
        if(isNaN(ar)) return message.reply("اكتب ارقاما وليس احرف | :x:");
        db.findOneAndDelete({id: ar}, async(err,data) => {
            if(err) throw err;
            if(data) {
                
                    message.channel.send({
                        embeds:[
                            new MessageEmbed()
                            .setColor("GREEN")
                            .setTitle(`**__تمت عمليه مسح المخالفه__**`)
                            .setDescription(`**
                            السبب : ${data.m5alfh}
                            السعر : ${data.s3r}
                            من العسكري : <@${data.userId}>
                            مضى عليها : ${moment(data.timestamp).format('MMMM Do YYYY, h:mm:ss a')}
                            المخالف : <@${data.userm}>
                            **`)
                            .setFooter("Arab Life - Cfw")
                            .setThumbnail(message.guild.iconURL())
                        ]
                    })
                
            } else {
                message.reply("لم اجد المخالفه في النظام | :x:")
            }
        })
    }
}