const { Message, Client, MessageEmbed } = require("discord.js");
const client = require("./../../index.js")
 
const prefix = '=';
module.exports = {
    name: "مخالفة",
    
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const m = message
        const user = message.mentions.users.first()
        
        const offer1 = await message.content.replace(/!مخالفة-مرورية <@[^>]+>/g, "").split("").filter((element) => {
        return isNaN(parseInt(element))
      }).join("")
       
        let the_numbers = await message.content.replace(/<@[^>]+>/g, "").split("").filter((element) => {
        return !isNaN(parseInt(element))
      }).join("")
        console.log(the_numbers);
            if(!user) return ;
        
        if(!message.member.roles.cache.has('1151150614336774224')) return;
            if(!user) return ;
        const db = require("../../models/m5alfh")
        const id = Math.floor(Math.random() * 1000000) + 7271
      const channel = message.client.channels.cache.get('1151531274314465431')        
          user.send({embeds:[
            new MessageEmbed()
            .setColor("BLUE")
            .setDescription(`
           المخالفه : ${offer1}
           المعرف : ${id}
    كم مضى على المخالفه : <t:${Math.floor((Date.now() - 50000) / 1000)}:R>
    ${the_numbers}
                      في حال سدادها راجع تذاكر المرور 
            `)
        ]}).then((m)=>{message.reply(`تمت مخالفه الشخص المعرف الخاص بالمخالفه : ${id}`)}).catch((m) => {message.reply(`لن يتم ارسال الرساله خاص بل ارسالها في الروم المحدد ، تمت مخالفه الشخص فاالنظام`)
                                                                 channel.send({embeds: [
                               new MessageEmbed()
                               .setTitle("مخالفه عامه (اي الخاص مقفل نرجو منك فتح الخاص)")
                               .setDescription(`
        المخالفه وسعرها : ${offer1} 
        رقم المخالفه : ||${id}||
        المخالف : ${user}
        سعر المخالفه : ${the_numbers}
        من : ${m.author}
        في حال بغيت تسددها راجع تكت التسديد في نفس الكاتجوري
                               `)
                               
                           ]})
                                                                        })
            
       db.create({
            userId: message.author.id, 
           guildId: message.guild.id,
  m5alfh: offer1,
    id: id,
    timestamp: Date.now(),
    userm: user.id,
           s3r: the_numbers
        })
        
        
        
        
        
        
    },
};