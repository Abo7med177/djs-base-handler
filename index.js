const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const { Client, Collection, MessageEmbed } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
const { ms } = require("ms")
const prefix = require("./config.json");
const { inviteTracker } = require("discord-inviter")


            
const { AutoKill } = require("autokill")
AutoKill({Client: client, Time: 5000})
require("./handler")(client);
//

client.login("MTE1MTE1MDY0NjI5MzE3MjIyNA.GlddUn.RJvpeANkW7ZLmNIyF8nHXNV-rEbK5yUh8rfka0");

