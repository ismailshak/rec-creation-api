const express = require("express");
const router = express.Router();
const passport = require('passport')

const eventsController = require("../controllers/event.js");

router.get("/", eventsController.index);
router.get("/name/:name", eventsController.findByName);
router.get("/id/:id", eventsController.findById);
router.get("/host/:id", eventsController.findByHost);
router.post("/", passport.authenticate("jwt", {session: false}),  eventsController.create);
router.put("/edit/:name", passport.authenticate("jwt", {session: false}),  eventsController.update);
router.delete("/delete/:name", passport.authenticate("jwt", {session: false}),  eventsController.delete);

module.exports = router;
