const {  Collection } = require("discord.js")
const client = require("../index");
const delay = new Collection()
const ms = require("ms")
client.on("interactionCreate", async (interaction) => {
    // Slash Command Handling
    if (interaction.isCommand()) {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});
if(interaction.channel.id == "981518980269363250" || interaction.channel.id == "981518740946550814" || interaction.channel.id == "978750802669764638") return interaction.followUp(`${interaction.user} ** عدم استخدام الاوامر في الشات او غيره ** ⚠️`)
        const cmd = client.slashCommands.get(interaction.commandName);
        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);
        if (!cmd)
            return interaction.followUp({ content: "An error has occured " });
if(cmd) {
    if(cmd.cooldown){
        if(delay.has(`${cmd.name}-${interaction.user.id}`)) return interaction.followUp({content: `لايمكنني الاجابه اليك لانك تستخدم بشكل تكرار بعد (${ms(delay.get(`${cmd.name}-${interaction.user.id}`) - Date.now(), {long: true} )})`})
        cmd.run(client, interaction, args);
        delay.set(`${cmd.name}-${interaction.user.id}`, Date.now() + cmd.cooldown)
        setTimeout(() => {
            
        }, cmd.cooldown)
    } else {
        cmd.run(client, interaction, args);
    }
}
        

        
    }
 
// Channel 
    
          
    // Context Menu Handling
    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }
});
