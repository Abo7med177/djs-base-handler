const db = require("./../../models/m5alfh");
const { MessageEmbed } = require("discord.js");
const moment = require('moment')
module.exports = {
    name: 'استعلام-مخالفة',
    run: async(client,message,args) => {
        let id = await message.content.replace(/<@[^>]+>/g, "").split("").filter((element) => {
            return !isNaN(parseInt(element))
          }).join("")
        if(!id) return message.reply('**اكتب ارقاما وليس حروفا** | :x: ');
     db.findOne({id}, async(err,data) => {
        if(err) throw err;
        if(data) {
            const em = new MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL())
            .setTitle(`**__معرف المخالفه : ${id}__**`)
            .setColor('DARK_BLUE')
            .setDescription(`**
            السبب : ${data.m5alfh}
            السعر : ${data.s3r}
            من العسكري : <@${data.userId}>
            مضى عليها : ${moment(data.timestamp).format('MMMM Do YYYY, h:mm:ss a')}
            المخالف : <@${data.userm}>
            **
            `)
            .setFooter('Arab Life - Cfw')
            message.channel.send({
                embeds: [em]
            })
        } else {
            message.reply("لم اجد المخالفه في النظام | ❌")
        }
     })
     
    }
}