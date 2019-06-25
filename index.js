const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const router = require("./routes/games");
const router = require("./routes/events");
const router = require("./routes/users");

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.use("/api/games", router);
app.use("/api/events", router);
app.use("/api/users", router);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("listening on port" + app.get("port"));
});
