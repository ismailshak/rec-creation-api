const express = require("express");
const router = express.Router();
const passport = require('passport')

const userController = require("../controllers/user.js");

router.get("/", userController.index);
router.get("/name/:name", userController.findByName);
router.get("/email/:email", userController.findByEmail);
router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.put("/edit/:name", passport.authenticate("jwt", {session: false}), userController.update);
router.delete("/delete/:name", passport.authenticate("jwt", {session: false}), userController.delete);

module.exports = router;
