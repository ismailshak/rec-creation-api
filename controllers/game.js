const Game = require("../db/models/Game");

module.exports = {
  index: (req, res) => {
    Game.find()
      .then(games => {
        res.json(games);
      })
      .catch(err => {
        console.log(err);
      });
  },
  findByName: (req, res) => {
    Game.findOne({ name: req.params.name })
      .then(game => {
        res.json(game);
      })
      .catch(err => {
        console.log(err);
      });
  },
  create: (req, res) => {
    Game.create(req.body).then(game => {
      res.json(game);
    });
  },
  update: (req, res) => {
    Game.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(game => res.json(game));
  },
  delete: (req, res) => {
    Game.findOneAndDelete({ name: req.params.name }).then(game =>
      res.json(game)
    );
  }
};
