const mongoose = require("../connection.js");

const Schema = mongoose.Schema;

const Event = new Schema({
  name: String,
  host: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  location: String,
  game: {
    type: Schema.Types.ObjectId,
    ref: "Game"
  },
  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  participants: Number,
  type: String,
  status: Boolean,
  description: String
});

module.exports = mongoose.model("Event", Event);
