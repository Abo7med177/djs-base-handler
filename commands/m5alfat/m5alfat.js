const client = require("../..");
const db = require("./../../models/m5alfh");
const { MessageEmbed } = require("discord.js");
const moment = require("moment")
module.exports = {
    name: "مخالفات", 
    run: async(client,message,args) => {
     const user = message.mentions.users.first();
    
     if(user) {
if(!message.member.roles.cache.has("1151150614336774224")) return;
const data = await db.find({userm: user.id, guildId: message.guild.id})
if(!data?.length) return message.reply(`لايوجد مخالفات لهاذا الشخص | :x:`)
const em1 = data.map((data) => {
    const userm = message.guild.members.cache.get(data.userm);
    const userId = message.guild.members.cache.get(data.userId);
    return[
        `**رقم المخالفه** : ${data.id}`,
        `**سبب المخالفه** : ${data.m5alfh}`,
        `**سعر المخالفه** : ${data.s3r}`,
        `**المخالف** : ${userm}`,
        `**تمت مخالفته من العسكري ** : ${userId}`,
        `**وقت المخالفه** : ${moment(data.timestamp).format('MMMM Do YYYY, h:mm:ss a')}`
    ].join("\n")
}).join("\n\n");
message.channel.send({
    embeds: [
        new MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle(`**__مخالفات الشخص : __** ${user}`)
        .setDescription(em1)
        .setColor('BLUE')
        .setFooter("Arab Life - Cfw")
    ]
})
     } else {
        const data1 = await db.find({ guildId: message.guild.id })
        if(!data1?.length) return message.reply(`لايوجد مخالفات لهاذا السيرفر  | :x:`)
        const em1 = data1.map((data) => {
            const userm1 = message.guild.members.cache.get(data.userm);
            const userId1 = message.guild.members.cache.get(data.userId);
            return[
                `**رقم المخالفه** : ${data.id}`,
                `**سبب المخالفه** : ${data.m5alfh}`,
                `**سعر المخالفه** : ${data.s3r}`,
                `**المخالف** : ${userm1}`,
                `**تمت مخالفته من العسكري ** : ${userId1}`,
                `**وقت المخالفه** : ${moment(data.timestamp).format('MMMM Do YYYY, h:mm:ss a')}`
            ].join("\n")
        }).join("\n\n");
        message.channel.send({
            embeds: [
                new MessageEmbed()
                .setThumbnail(message.guild.iconURL())
                .setTitle(`**مخالفات السيرفر : **`)
                .setDescription(em1)
                .setColor('BLUE')
                .setFooter("Arab Life - Cfw")
            ]
        })
     }
        }
}