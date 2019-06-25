const mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
} else {
  mongoose.connect("mongodb://localhost/rec-creation-api", {
    useNewUrlParser: true
  });
}

mongoose.Promise = Promise;

module.exports = mongoose;
