const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user.model");

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
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
  mobileNo: {
    type: String,
    minlength: 10,
    maxlength: 10,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  course: {
    type: String,
    enum: ["BTech", "MTech", "MBA", "MCA", "BCA", "MBBS"],
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  admissionYear: {
    type: Number,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
