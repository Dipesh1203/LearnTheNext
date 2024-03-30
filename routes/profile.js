const express = require("express");
const router = express.Router();
const Profile = require("../models/profile.model");
const profileController = require("../controller/profile");

router.route("/createProfile").post().get(profileController.profile);

module.exports = router;
