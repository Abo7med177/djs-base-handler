const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "edit-haw", 
    description: "لتعديل الهويات", 

    options: [
        {
            name: "type", description: "تعديل الاسم او رقم الهويه ",
            choices: [
                {
                    name: "تعديل الهويه", value: "haw",
                }, 
                { name: "تعديل الاسم", value: "name", }, 
            ], 
            type: "STRING", 
required: true, 
        }, 
{ name: "text", description: "كلمات التعديل", 
type: "STRING", 
required: true,
}
       
    ],
run: async ( client, interaction) => {
    const inter = interaction;
    const db = require("./../../models/haw");
    const text = inter.options.getString('text')
    if (interaction.options._hoistedOptions.find((r) => r.value === 'name')) {
     data = await db.findOne({ user: inter.user.id })
        if(data) {
          
           await data.updateOne({name: text})
            inter.followUp({
                embeds: [
                    new MessageEmbed()
                    .setThumbnail(inter.user.displayAvatarURL())
                    .setTitle(`**__تمت عمليه التعديل بنجاح__**`)
                    .setDescription(`**
                    معرف الهويه : ||${data._id}||
                    **`).setColor("DARK_BLUE")
                ]
            })
        } else {
            inter.followUp({
                content: `لم اجد هويتك فالنظام راجع تسجيلات الهويات`
            })
        }
    }
        if (interaction.options._hoistedOptions.find((r) => r.value === 'haw')) {
     data1 = await db.findOne({ user: inter.user.id })
        if(data1) {
          
           await data1.updateOne({haw: text})
            inter.followUp({
                embeds: [
                    new MessageEmbed()
                    .setThumbnail(inter.user.displayAvatarURL())
                    .setTitle(`**__تمت عمليه التعديل بنجاح__**`)
                    .setDescription(`**
                    معرف الهويه : ||${data1._id}||
                    **`).setColor("DARK_BLUE")
                ]
            })
        } else {
            inter.followUp({
                content: `لم اجد هويتك فالنظام راجع تسجيلات الهويات`
            })
        }
    }
}
}