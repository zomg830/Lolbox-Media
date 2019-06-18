const router = require("express").Router();
const lolboxRoutes = require("./lolbox");
const userRoutes = require("./users");

router.use("/lolbox", lolboxRoutes);
router.use("/users", userRoutes);

module.exports = router;
