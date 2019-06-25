const mongoose = require("../connection.js");

const Schema = mongoose.Schema;

const Event = new Schema({
  name: String,
  host: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  location: String,
  game: [
    {
      type: Schema.Types.ObjectId,
      ref: "Game"
    }
  ],
  participants: {
    name: String,
    email: String
  },
  type: String,
  status: Boolean
});

module.exports = mongoose.model("Event", Event);
