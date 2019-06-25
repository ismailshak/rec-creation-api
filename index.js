const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const gamesRouter = require("./routes/games");
const eventsRouter = require("./routes/events");
const usersRouter = require("./routes/users");

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.use("/api/games", gamesRouter);
app.use("/api/events", eventsRouter);
app.use("/api/users", usersRouter);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("listening on port" + app.get("port"));
});
