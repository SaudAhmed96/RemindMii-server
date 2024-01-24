const express = require("express");
const router = express.Router();
const goalsController = require("../controllers/goalsController");

//GET requests
router.route("/").get(goalsController.index);

//POST requests

//DELETE requests

//PUT requests

module.exports = router;
