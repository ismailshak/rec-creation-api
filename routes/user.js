const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.js");

router.get("/", userController.index);
router.get("/name/:name", userController.findByName);
router.get("/email/:email", userController.findByEmail);
router.post("/", userController.create);
router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.put("/edit/:name", userController.update);
router.delete("/delete/:name", userController.delete);

module.exports = router;
