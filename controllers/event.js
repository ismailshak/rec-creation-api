const Event = require("../db/models/Event");

module.exports = {
  /**
   * @api {get} /api/events/ Request all Events
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
   * @api {get} /api/events/name/:name Request Event by name
   * @apiName GetEventByName
   * @apiGroup Event
   *
   * @apiParam {String} name Event's name
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
   * @api {get} /api/events/id/:id Request Event by id
   * @apiName GetEventById
   * @apiGroup Event
   *
   * @apiParam {String} id Event's id
   */
  findById: (req, res) => {
    Event.findbyId({ _id: req.params.id })
      .then(event => {
        res.json(event);
      })
      .catch(err => {
        console.log(err);
      });
  },
  /**
   * @api {get} /api/events/host/:id Request Event by host User
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
   * @api {get} /api/events/game/:id Request Event by game
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
   * @api {post} /api/events/ Create new Event
   * @apiName CreateEvent
   * @apiGroup Event
   *
   * @apiParam (Request body (JSON)) {String} name Name of the Event
   * @apiParam (Request body (JS))
   */
  create: (req, res) => {
    Event.create(req.body).then(event => {
      res.json(event);
    });
  },
  update: (req, res) => {
    Event.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(event => res.json(event));
  },
  delete: (req, res) => {
    Event.findOneAndDelete({ name: req.params.name }).then(event =>
      res.json(event)
    );
  }
};
