const client = require("./../index")
const haw = require("./../models/haw")
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const { Modal, TextInputComponent } = require("discord.js")
client.on("messageCreate", async(message) => {
    if(message.content.startsWith("#menu")) {
        const b1 = new MessageButton()
        .setCustomId("08")
        .setStyle("SUCCESS")
        .setLabel("إنشاء هوية")
        const a1 = new MessageActionRow()
        .addComponents(b1)
        const em = new MessageEmbed()
        .setTitle(`**__إنشاء هوية__**`)
        .setColor(`DARK_BLUE`)
        .setThumbnail(message.guild.iconURL())
        .setDescription(`**
        إنشاء هوية في سيرفر __عرب لايف __ :
        - الاسامي واقعية واماكن الميلاد الواقعية
        - هويتك لايمكن الكشف عنها الى العسكري في الامن العام ، اما في حال واجهت ضابط في اي قطاع اجباري تعطيه هويتك لغرض التحقيق وماشبه ذلك 
        - في حال اي اداري ماشافك مسجل هويه ممكن تصل للبان 
        وشاكرين لكم .
        **`)
        message.channel.send({
            embeds: [em],
            components: [a1]
        })
    }
})
client.on("interactionCreate", async(interaction) => {
    const inter = interaction
     if(inter.isButton()) {
        if(inter.customId == "08") {
           var t1 = new TextInputComponent()
            .setCustomId('asm')
            .setLabel('اسمك واسم العائله')
                .setPlaceholder("فلان بن فلاني")
            .setMaxLength(2)
            .setMaxLength(25)
            .setRequired(true)
            .setStyle("SHORT")
             var t2 = new TextInputComponent()
            .setCustomId('age')
            .setLabel('العمر')
                  .setPlaceholder("19")
            .setMaxLength(2)
            .setMaxLength(25)
            .setRequired(true)
            .setStyle("SHORT")
               var t3 = new TextInputComponent()
            .setCustomId('num')
            .setLabel('الهويه')
                    .setPlaceholder("1000")
            .setMaxLength(2)  
                   
            .setMaxLength(45)
            .setRequired(true)
            .setStyle("SHORT")
             var t4 = new TextInputComponent()
            .setCustomId('mylad')
            .setLabel("مكان الميلاد")
               .setPlaceholder("لوس سانتوس")   
            .setMaxLength(2)
            .setMaxLength(25)
            .setRequired(true)
            .setStyle("SHORT")
             var t5 = new TextInputComponent()
            .setCustomId('snh')
            .setLabel('سنه الميلاد')
            .setMaxLength(2)
                 .setPlaceholder("2009-7-27")
            .setMaxLength(25)
            .setRequired(true)
            .setStyle("SHORT")
           
        const p1 = new MessageActionRow().addComponents(t1)
              const p2 = new MessageActionRow().addComponents(t2)
              const p3 = new MessageActionRow().addComponents(t3)
              const p4 = new MessageActionRow().addComponents(t4)
              const p5 = new MessageActionRow().addComponents(t5)
           
            const modal = new Modal()
            .setTitle('إنشاء هوية')
            .setCustomId("h1")
           modal.addComponents(p1,p2,p3,p4,p5)
await inter.showModal(modal)
        }
    }
})
