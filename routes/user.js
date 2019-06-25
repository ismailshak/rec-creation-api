const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.js");

router.get("/", userController.index);
router.get("/name/:name", userController.findByName);
router.get("/email/:email", userController.findByEmail);
router.post("/", userController.create);
router.put("/edit", userController.update);
router.delete("/delete", userController.delete);

module.exports = router;
