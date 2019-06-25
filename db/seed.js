const Game = require("./models/Game");
// const Event = require("./models/Event.js");
const User = require("./models/User");

const gamesData = require("./data/gameData.json");
// const eventsData = require("./data/eventData.json");
const usersData = require("./data/userData.json");

Game.deleteMany({})
  .then(() => {
    Game.create(gamesData).then(gameDocs => {
      console.log(gameDocs);
      process.exit();
    });
  })
  .catch(err => {
    console.log(err);
  });

User.deleteMany({})
  .then(() => {
    User.create(usersData).then(userDocs => {
      console.log(userDocs);
      process.exit();
    });
  })
  .catch(err => {
    console.log(err);
  });
