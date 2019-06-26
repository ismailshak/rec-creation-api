const Game = require("../db/models/Game");

module.exports = {
  /**
   * @api {get} /api/games/ Request All Games
   * @apiName GetGames
   * @apiGroup Game
   */

  index: (req, res) => {
    Game.find()
      .then(games => {
        res.json(games);
      })
      .catch(err => {
        console.log(err);
      });
  },
  /**
   * @api {get} /api/games/name/:name Request Game By Name
   * @apiName GetGameByName
   * @apiGroup Game
   *
   * @apiParam {String} name Game's Name
   */
  findByName: (req, res) => {
    Game.findOne({ name: req.params.name })
      .then(game => {
        res.json(game);
      })
      .catch(err => {
        console.log(err);
      });
  },
  /**
   * @api {get} /api/games/id/:id Request Game By id
   * @apiName GetGameById
   * @apiGroup Game
   *
   * @apiParam {String} id Game's id in the Database
   */
  findById: (req, res) => {
    Game.findOne({ _id: req.params.id })
      .then(game => {
        res.json(game);
      })
      .catch(err => {
        console.log(err);
      });
  },
  /**
   * @api {post} /api/games/ Create a New Game
   * @apiName CreateGame
   * @apiGroup Game
   *
   * @apiDescription These are all optional fields to include in the request body. Only NAME is required
   * @apiParam (Request body (JSON)) {String} name Name of the Game
   * @apiParam (Request body (JSON)) {String} supplies Supplies for the Game
   * @apiParam (Request body (JSON)) {Number} players Minimum number of players of the Game
   * @apiParam (Request body (JSON)) {String} rules Rules and instructions for the Game
   * @apiParam (Request body (JSON)) {String} image Image url to show the Game in action
   * @apiParam (Request body (JSON)) {[Object]} events Array of Event ids
   */
  create: (req, res) => {
    Game.create(req.body).then(game => {
      res.json(game);
    });
  },
  /**
   * @api {put} /api/games/edit/:name Edit an Existing Game
   * @apiName EditGame
   * @apiGroup Game
   *
   * @apiParam {String} name Name of the Game
   * @apiParam (Request body (JSON)) {String} supplies Supplies for the Game
   * @apiParam (Request body (JSON)) {Number} players Minimum Number of Players of the Game
   * @apiParam (Request body (JSON)) {String} rules Rules and Instructions for the Game
   * @apiParam (Request body (JSON)) {String} image Image url to Show the Game in Action
   * @apiParam (Request body (JSON)) {[Object]} events Array of Event ids
   */
  update: (req, res) => {
    Game.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(game => res.json(game));
  },
  /**
   * @api {delete} /api/games/delete/:name Delete an Existing Game
   * @apiName DeleteGame
   * @apiGroup Game
   *
   * @apiParam {String} name Game's Name
   */
  delete: (req, res) => {
    Game.findOneAndDelete({ name: req.params.name }).then(game =>
      res.json(game)
    );
  }
};
