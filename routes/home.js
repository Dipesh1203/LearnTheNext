const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const home = require("../controller/home.js");

router.route("/all").get(wrapAsync(home.renderHome));

module.exports = router;
