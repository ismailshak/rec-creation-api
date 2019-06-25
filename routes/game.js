const express = require("express");
const router = express.Router();

const gamesController = require("../controllers/game.js");

router.get("/", gamesController.index);
router.get("/name/:name", gamesController.findByName);
router.post("/", gamesController.create);
router.put("/edit/:name", gamesController.update);
router.delete("/delete/:name", gamesController.delete);

module.exports = router;
