const User = require("../db/models/User");
const jwt = require('jwt-simple');
const config = require('../config/config')

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
  },
  signup: (req, res) => {
    if (req.body.email && req.body.password) {
      let newUser = {
        email: req.body.email,
        password: req.body.password
      };
      User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
          User.create(newUser).then(user => {
            if (user) {
              var payload = {
                id: newUser.id
              };
              var token = jwt.encode(payload, config.jwtSecret);
              newUser.id = token;
              res.json({
                token: token,
                user
              });
            } else {
              res.sendStatus(401);
            }
          });
        } else {
          res.sendStatus(401);
        }
      });
    } else {
      res.sendStatus(401);
    }
  },
  login: (req, res) => {
    if (req.body.email && req.body.password) {
      User.findOne({ email: req.body.email }).then(user => {
        if (user) {
          if (user.password === req.body.password) {
            var payload = {
              id: user.id
            };
            var token = jwt.encode(payload, config.jwtSecret);
            res.json({
              token: token,
              userID: user._id
            });
          } else {
            res.sendStatus(401);
          }
        } else {
          res.sendStatus(401);
        }
      });
    } else {
      res.sendStatus(401);
    }
  }
};
