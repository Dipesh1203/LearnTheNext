const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user.model");

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  collegeId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  dob: {
    type: date,
    required: true,
  },
  userType: {
    type: String,
    enum: ("admin", "student", "staff"),
    default: "student",
    required: true,
  },
  skills: {
    type: [String],
  },
  projects: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
