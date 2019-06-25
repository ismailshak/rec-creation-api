const mongoose = require("../connection.js");

const Schema = mongoose.Schema;

const Game = new Schema({
  name: String,
  supplies: String,
  players: Number,
  rules: String,
  image: String,
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
  ]
});

module.exports = mongoose.model("Game", Game);
