const Game = require("./models/Game");
const Event = require("./models/Event.js");
const User = require("./models/User");

const gamesData = require("./data/gameData.json");
// const eventsData = require("./data/eventData.json");
const usersData = require("./data/userData.json");

Game.deleteMany({})
  .then(() => {
    Game.create(gamesData).then(gameDocs => {
      console.log(gameDocs);
    });
  })
  .catch(err => {
    console.log(err);
  });

User.deleteMany({})
  .then(() => {
    User.create(usersData).then(userDocs => {
      console.log(userDocs);
    });
  })
  .catch(err => {
    console.log(err);
  });

Event.deleteMany({}).then(_ => console.log("Wiped events"));
