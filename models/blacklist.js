const { Schema, model } = require("mongoose");
module.exports = model("blacklist", new Schema({
user: String,
    reason: String,
    guildId: String
})
                      )