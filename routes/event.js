const express = require("express");
const router = express.Router();

const eventsController = require("../controllers/event.js");

router.get("/", eventsController.index);
router.get("/name/:name", eventsController.findByName);
router.get("/host/:id", eventsController.findByHost);
router.post("/", eventsController.create);
router.put("/edit", eventsController.update);
router.delete("/delete", eventsController.delete);

module.exports = router;
