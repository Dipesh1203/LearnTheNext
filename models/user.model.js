const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  collegeId: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["ADMIN", "STUDENT", "STAFF"],
    default: "STUDENT",
    required: true,
  },
});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
