const Event = require("../db/models/Event");
const Game = require("../db/models/Game");

module.exports = {
  /**
   * @api {get} /api/events/ Request All Events
   * @apiName GetEvents
   * @apiGroup Event
   */
  index: (req, res) => {
    Event.find()
      .then(events => {
        res.json(events);
      })
      .catch(err => {
        console.log(err);
      });
  },
  /**
   * @api {get} /api/events/name/:name Request Event By Name
   * @apiName GetEventByName
   * @apiGroup Event
   *
   * @apiParam {String} name Event's Name
   */
  findByName: (req, res) => {
    Event.findOne({ name: req.params.name })
      .then(event => {
        res.json(event);
      })
      .catch(err => {
        console.log(err);
      });
  },
  /**
   * @api {get} /api/events/id/:id Request Event By id
   * @apiName GetEventById
   * @apiGroup Event
   *
   * @apiParam {String} id Event's id
   */
  findById: (req, res) => {
    Event.findById({ _id: req.params.id })
      .populate()
      .then(event => {
        res.json(event);
      })
      .catch(err => {
        console.log(err);
      });
  },
  /**
   * @api {get} /api/events/host/:id Request Event By Host User
   * @apiName GetEventByHost
   * @apiGroup Event
   *
   * @apiParam {[Object]} host Host User's id
   */
  findByHost: (req, res) => {
    Event.findById({ host: req.params.id })
      .then(event => {
        res.json(event);
      })
      .catch(err => {
        console.log(err);
      });
  },
  /**
   * @api {get} /api/events/game/:id Request Event By Game
   * @apiName GetEventByGame
   * @apiGroup Event
   *
   * @apiParam {[Object]} game Id of Game in Event
   */
  findByGame: (req, res) => {
    Event.findById({ game: req.params.id })
      .then(even => {
        res.json(event);
      })
      .catch(err => {
        console.log(err);
      });
  },
  /**
   * @api {post} /api/events/ Create New Event
   * @apiName CreateEvent
   * @apiGroup Event
   *
   * @apiParam (Request body (JSON)) {String} name Name of the Event
   * @apiParam (Request body (JSON)) {[Object]} host Host User of the Event
   * @apiParam (Request body (JSON)) {String} location Location of the Event
   * @apiParam (Request body (JSON)) {[Object]} game Game Featured in the Event
   * @apiParam (Request body (JSON)) {Object} participants Participants in the Event
   * @apiParam (Request body (JSON)) {String} type Type of Event
   * @apiParam (Request body (JSON)) {Boolean} status Status of Event
   */
  create: (req, res) => {
    Event.create(req.body).then(event => {
      res.json(event);
      // Game.findOne({ name: event.game }).then(game => {
      //   game.events.push(event._id);
      //   game.save();
      //
      // });
    });
  },
  /**
   * @api {put} /api/events/edit/:name Edit an Existing Event
   * @apiName EditEvent
   * @apiGroup Event
   *
   * @apiParam {String} name Event's Name
   * @apiParam (Request body (JSON)) {[Object]} host Host User of the Event
   * @apiParam (Request body (JSON)) {String} location Location of the Event
   * @apiParam (Request body (JSON)) {[Object]} game Game Featured in the Event
   * @apiParam (Request body (JSON)) {Object} participants Participants in the Event
   * @apiParam (Request body (JSON)) {String} type Type of Event
   * @apiParam (Request body (JSON)) {Boolean} status Status of Event
   */
  update: (req, res) => {
    Event.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(event => res.json(event));
  },
  /**
   * @api {delete} /api/events/delete/:name Delete an Existing Event
   * @apiName DeleteEvent
   * @apiGroup Event
   *
   * @apiParam {String} name Event's Name
   */
  delete: (req, res) => {
    Event.findOneAndDelete({ name: req.params.name }).then(event =>
      res.json(event)
    );
  }
};
