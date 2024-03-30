const express = require("express");
const router = express.Router();
const eventController = require("../controller/event");

router.route("/showEvent").get(eventController.showEvent);
module.exports = router;
