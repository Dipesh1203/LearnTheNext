const Profile = require("../models/profile.model");

exports.profile = (req, res) => {
  res.render("users/signup.ejs");
};
module.exports.createProfile = (req, res) => {
  let {
    name,
    gender,
    collegeId,
    email,
    mobileNo,
    dob,
    course,
    branch,
    address,
    district,
    pincode,
  } = req.body;
};
