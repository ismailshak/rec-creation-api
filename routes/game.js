const express = require("express");
const router = express.Router();

const gamesController = require("../controllers/game.js");

router.get("/", gamesController.index);
router.get("/:name", gamesController.findByName);
router.post("/", gamesController.create);
router.put("/:name", gamesController.update);
router.delete("/:name", gamesController.delete);

module.exports = router;
