const { MessageEmbed } = require('discord.js');
const db = require("./../../models/blacklist")
module.exports = {
    name: "قائمة-السوداء",
    run: async(client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return ;
        const data = await db.find({guildId: message.guild.id})
       if (!data?.length) return message.reply(`لاتوجد قائمه شوداء | :x:`)
        const embed = data.map((data) => {
            const user =  message.guild.members.cache.get(data.user)
            return [
                `الشخص : ${user}`,
                `سبب المخالفه : ${data.reason}`
            ].join("\n");
        }).join("\n\n");
        const em = new MessageEmbed()
        .setTitle(`**__جميع المخالفين في السيرفر__**`).setDescription(embed).setThumbnail(message.guild.iconURL()) .setFooter(`Requested by: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setColor("DARK_BUT_NOT_BLACK")
         message.channel.send({
             embeds: [em]
         })
    }
}
    