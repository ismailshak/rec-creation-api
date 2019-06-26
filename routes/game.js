const express = require("express");
const router = express.Router();
const passport = require('passport')

const gamesController = require("../controllers/game.js");

router.get("/", gamesController.index);
router.get("/name/:name", gamesController.findByName);
router.get("/id/:id", gamesController.findById);
router.post("/", passport.authenticate("jwt", {session: false}), gamesController.create);
router.put("/edit/:name", passport.authenticate("jwt", {session: false}),  gamesController.update);
router.delete("/delete/:name", passport.authenticate("jwt", {session: false}),  gamesController.delete);

module.exports = router;
