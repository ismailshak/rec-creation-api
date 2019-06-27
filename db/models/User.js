const mongoose = require("../connection.js");

const Schema = mongoose.Schema;

const User = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  attending: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
  ],
  hosting: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
  ]
});

module.exports = mongoose.model("User", User);
