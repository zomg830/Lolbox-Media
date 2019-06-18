const router = require("express").Router();
const lolboxController = require("../../controllers/lolboxController");

router.route("/:userId").get(lolboxController.findByUserId);

module.exports = router;
