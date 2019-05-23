const router = require("express").Router();
const lolboxController = require("../../controllers/lolboxController");

router
  .route("/")
  .get(lolboxController.findAll)
  .post(lolboxController.create);

router
  .route("/:id")
  .get(lolboxController.findById)
  .put(lolboxController.update)
  .delete(lolboxController.remove);

module.exports = router;
