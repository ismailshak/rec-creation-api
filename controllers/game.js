const Game = require("../db/models/Game");

module.exports = {
  /**
   * @api {get} /api/games/ Request all Games
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
   * @api {get} /api/games/name/:name Request Game by Name
   * @apiName GetGameByName
   * @apiGroup Game
   *
   * @apiParam {String} name Game's name
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
   * @api {get} /api/games/id/:id Reques Game by id
   * @apiName GetGameById
   * @apiGroup Game
   *
   * @apiParam {String} id Game's id in the database
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
   * @api {post} /api/games/ Create a new Game
   * @apiName CreateGame
   * @apiGroup Game
   *
   * @apiDescription These are all optional fields to include in the request body. ONly NAME is required
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
   * @api {put} /api/games/edit/:name Edit an existing Game
   * @apiName EditGame
   * @apiGroup Game
   *
   * @apiParam {String} name Name of the Game
   * @apiParam (Request body (JSON)) {String} supplies Supplies for the Game
   * @apiParam (Request body (JSON)) {Number} players Minimum number of players of the Game
   * @apiParam (Request body (JSON)) {String} rules Rules and instructions for the Game
   * @apiParam (Request body (JSON)) {String} image Image url to show the Game in action
   * @apiParam (Request body (JSON)) {[Object]} events Array of Event ids
   */
  update: (req, res) => {
    Game.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(game => res.json(game));
  },
  /**
   * @api {delete} /api/games/delete/:name Delete an exiting Game
   * @apiName DeleteGame
   * @apiGroup Game
   *
   * @apiParam {String} name Game's name
   */
  delete: (req, res) => {
    Game.findOneAndDelete({ name: req.params.name }).then(game =>
      res.json(game)
    );
  }
};
