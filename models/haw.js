 const { model, Schema } = require("mongoose");
module.exports = model("ticket", new Schema({
    name: String,
                  age: Number,
                  haw: Number,
                  mylad: String,
                  snh: String,
                  user: String
})
                      )