const router = require("express").Router();
const Authentication = require("../controllers/authenticationController");
const passport = require("passport");

require("../services/passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireLogin = passport.authenticate("local", { session: false });

router.route("/").get(requireAuth, async (req, res) => {
  const userData = await Authentication.fetchUser(req.headers.authorization);
  res.send(userData);
});
router.route("/login").post(requireLogin, Authentication.login);
router.route("/signup").post(Authentication.signup);

module.exports = router;
