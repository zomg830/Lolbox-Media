const router = require("express").Router();
const lolboxController = require("../../controllers/lolboxController");

router
  .route("/")
  .get(lolboxController.findAll)
  .post(lolboxController.create);

router
  .route("/:id")
  .get(lolboxController.findById)
  .put(lolboxController.update);

router.route("/:userId/:id").delete(lolboxController.remove);

module.exports = router;
