const User = require("./db/models/User.js");

module.exports = {
  index: (req, res) => {
    User.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        console.log(err);
      });
  },
  findByName: (req, res) => {
    User.findOne({ name: req.params.name })
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        console.log(err);
      });
  },
  findByEmail: (req, res) => {
    User.findOne({ email: req.params.email })
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        console.log(err);
      });
  },

  create: (req, res) => {
    User.create(req.body).then(user => {
      res.json(user);
    });
  },
  update: (req, res) => {
    User.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(user => res.json(user));
  },
  delete: (req, res) => {
    User.findOneAndDelete({ name: req.params.name }).then(user =>
      res.json(user)
    );
  }
};
