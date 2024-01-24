const express = require("express");
const router = express.Router();
const reminderController = require("../controllers/remindersController");

//GET requests
router.route("/").get(reminderController.index);

//POST requests
router.route("/").post(reminderController.addReminder);

//DELETE requests

//PUT requests

module.exports = router;
