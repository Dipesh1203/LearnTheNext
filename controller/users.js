const User = require("../models/user.model");

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signup = async (req, res) => {
  try {
    let { username, email, collegeId, userType, password } = req.body;
    if (!(username || email || collegeId || userType || password)) {
      res.status(404).send("all fields are necessary");
    }
    console.log(req.body);
    const newUser = new User({ username, email, collegeId, userType });
    console.log(newUser);
    const registeredUser = await User.register(newUser, password);
    // console.log(registeredUser);

    res.redirect("/login");
  } catch (error) {
    // req.flash("error", error.message);
    res.redirect(`/signup`);
    // res.send(error);
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
  // req.flash("sucess", "Welcome Back to Learn Next !");
  let redirectUrl = res.locals.redirectUrl || "/home";
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("sucess", "you are logged out!");
    res.redirect("/home");
  });
};
