const express = require("express");
const router = express.Router();

const gamesController = require("../controllers/game.js");

router.get("/", gamesController.index);
router.get("/name/:name", gamesController.findByName);
router.post("/", gamesController.create);
router.put("/edit", gamesController.update);
router.delete("/delete", gamesController.delete);

module.exports = router;
