const Joi = require("joi");

module.exports.profileSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  mobileNo: Joi.string().maxlength(10).minlength(10).required(),
  collegeId: Joi.string().required(),
  gender: Joi.string().valid("Male", "Female", "Other").required(),
  dob: Joi.date().required(),
  nriStatus: Joi.boolean().required(),
  courses: Joi.array().items(Joi.string()).required(),
  address: Joi.string().required(),
  district: Joi.string().required(),
  state: Joi.string().required(),
  pincode: Joi.string().required(),
  admissionYear: Joi.number().required(),
  owner: Joi.string().required(), // Assuming owner ID is a string
});
