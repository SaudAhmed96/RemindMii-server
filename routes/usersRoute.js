const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//GET requests
//no get request as we dont want to send this info to anyone

//POST requests
router.route("/").post(userController.addUser);

//DELETE requests

//PUT requests

module.exports = router;
