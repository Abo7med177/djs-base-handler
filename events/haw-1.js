const client = require("./../index")
const haw = require("./../models/haw")
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const { Modal, TextInputComponent } = require("discord.js")
client.on("interactionCreate", async(inter) => {
    
    if(inter.customId == "h1") {
         const name = inter.fields.getTextInputValue("asm")
         const age = inter.fields.getTextInputValue("age")
         const p1 = inter.fields.getTextInputValue("num")
         const my = inter.fields.getTextInputValue("mylad")
        const snh = inter.fields.getTextInputValue("snh")
       if(isNaN(age)) return inter.reply({
            content :  `اكتب عمرا حقيقيا`,
            ephemeral: true
        })
        
        
         if(isNaN(p1)) return inter.reply({
            content :  `اكنب هويه دون الاحرف`,
            ephemeral: true
        })
        
       haw.findOne({user: inter.user.id}, async(err,data)=> {
           if(err) throw err;
           if(data) {
              inter.reply({
                  content: `لديك هويه سابقه`,
                  ephemeral: true
              })
           } else {
                haw.create({
                  name: name,
                  age: age,
                  haw: p1,
                  mylad: my,
                  snh: snh,
                  user: inter.user.id
              }).then(() => {
                  inter.reply({content: `تم انشاء هويه بنجاح | شكرا لصبرك.`, ephemeral: true})
                const ch = inter.client.channels.cache.get("1143248505939431475")  
                  ch.send({
                      embeds: [
                          new MessageEmbed()
                          .setThumbnail(inter.user.displayAvatarURL())
                          .setTitle(`**Create a national identity | إنشاء هوية وطنية**`)
                          .addFields(
                              {name: "**منشن للشخص** :", value: `${inter.user}`},
                              {name: "**اسم للشخص** :", value: `${name}`},
                              {name: "**هويه للشخص** :", value: `${p1}`},
                              {name: "** مكان ميلاد للشخص** :", value: `${my}`},
                              {name: "**يوم ميلاد للشخص** :", value: `${snh}`},
                              {name: "**عمر للشخص** :", value: `${age}`}
                          )
                          .setFooter(`الاحوال المدنية - Civil Status`)
                          .setColor("WHITE")
                      ]
                  }) 
        })
           }
       })
    }
      }

         )
    