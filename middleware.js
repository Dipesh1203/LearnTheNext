const User = require("./models/user.model.js");
const profile = require("./models/profile.model.js");
// const ExpressError = require("./utils/ExpressError.js");

module.exports.isLoggedIn = (req, res, next) => {
  console.log(req.user);
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    // req.flash("error", "You must be logged in to create listing!");
    console.log("You must be logged in to create listing!");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

// owner validation middle ware
module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let profile = await Profile.findById(id);
  if (!profile.owner.equals(res.locals.currUser._id)) {
    // req.flash("error", "You are not Owner Of this listing")
    console.log(error);
    return res.redirect(`/profile/${id}`);
  }
  next();
};
