const express = require("express");
const router = express.Router();
const reminderController = require("../controllers/remindersController");

//GET requests
router.route("/").get(reminderController.index);

//POST requests
router.route("/").post(reminderController.addReminder);

//DELETE requests

//PUT requests
router.route("/:id").put(reminderController.updateReminder);
router.route("/complete/:id").put(reminderController.completeReminder);

module.exports = router;
