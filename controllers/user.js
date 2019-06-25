const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.js");

router.get("/", userController.index);
router.get("/:name", userController.findByName);
router.post("/", userController.create);
router.put("/:name", userController.update);
router.delete("/:name", userController.delete);

module.exports = router;
