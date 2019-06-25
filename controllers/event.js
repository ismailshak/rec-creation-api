const express = require("express");
const router = express.Router();

const eventsController = require("../controllers/event.js");

router.get("/", eventsController.index);
router.get("/:name", eventsController.findByName);
router.post("/", eventsController.create);
router.put("/:name", eventsController.update);
router.delete("/:name", eventsController.delete);

module.exports = router;
