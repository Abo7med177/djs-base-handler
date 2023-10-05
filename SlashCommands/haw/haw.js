const db = require("./../../models/haw");
const { MessageEmbed, Interaction } = require("discord.js");
module.exports = {
    name: "hawity",
    description: "لرويه هويتك الشخصيه",
    run: async(client, interaction) => {
        data = await db.findOne({user: interaction.user.id}) 
        if(data) {
            let embed = new MessageEmbed()
            .setTitle(`**__الهويه الوطنيه__**`)
            .setThumbnail(interaction.user.displayAvatarURL())
            .setColor('WHITE')
            .setFooter('الاحوال المدينه')
            .addFields(
                {name: "**منشن للشخص** :", value: `<@${data.user}>`},
                {name: "**الاسم الفاضل** : ", value: `${data.name}`},
                {name: "**العمر** :", value: `${data.age}`},
                {name: "**الهويه رقم** :", value: `${data.haw}`},
                {name: "**مكان الميلاد**: ", value: `${data.mylad}`},
                {name: "**سنه الميلاد** : ", value:`${data.snh}`}
            )
           await interaction.followUp({
                embeds: [embed]
            })
        } else {
            interaction.followUp({
                content: `**لم اعثر على هويتك سجل مره اخرى** | :x: `
            })
        }
    }
}