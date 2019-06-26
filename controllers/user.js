const User = require("../db/models/User");
const jwt = require("jwt-simple");
const config = require("../config/config");

module.exports = {
  /**
   * @api {get} /api/users/ Request all Users
   * @apiName GetUsers
   * @apiGroup User
   */
  index: (req, res) => {
    User.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        console.log(err);
      });
  },
  /**
   * @api {get} /api/users/id/:id Request User by id
   * @apiName GetById
   * @apiGroup User
   *
   * @apiParam {String} id User's id in the database
   */
  findById: (req, res) => {
    User.findById({ _id: req.params.id })
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        console.log(err);
      });
  },
  /**
   * @api {get} /api/users/email/:email Request User by email
   * @apiName GetByEmail
   * @apiGroup User
   *
   * @apiParam {String} email User's email in the database
   */
  findByEmail: (req, res) => {
    User.findOne({ email: req.params.email })
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        console.log(err);
      });
  },
  /**
   * @api {post} /api/users/ Create a new User
   * @apiName
   */
  create: (req, res) => {
    User.create(req.body).then(user => {
      res.json(user);
    });
  },
  update: (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(user => res.json(user));
  },
  delete: (req, res) => {
    User.findByIdAndDelete({ _id: req.params.id }).then(user => res.json(user));
  },
  signup: (req, res) => {
    if (req.body.email && req.body.password) {
      let newUser = req.body;
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
