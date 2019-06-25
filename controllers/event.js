const Event = require("./db/models/Event.js");

module.exports = {
  index: (req, res) => {
    Event.find()
      .then(events => {
        res.json(events);
      })
      .catch(err => {
        console.log(err);
      });
  },
  findByName: (req, res) => {
    Event.findOne({ name: req.params.name })
      .then(event => {
        res.json(event);
      })
      .catch(err => {
        console.log(err);
      });
  },
  findByHost: (req, res) => {
    Event.findOne({ host: req.params.id })
      .then(event => {
        res.json(event);
      })
      .catch(err => {
        console.log(err);
      });
  },
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
