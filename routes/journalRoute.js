const express = require("express");
const router = express.Router();
const journalController = require("../controllers/journalController");

//GET requests
router.route("/").get(journalController.index);
router.route("/:id").get(journalController.singleEntry);

//POST requests
router.route("/").post(journalController.addJournal);

//DELETE requests

//PUT requests
router.route("/:id").put(journalController.updateJournal);
// router.route("/complete/:id").put(journalController.completeReminder);

module.exports = router;
