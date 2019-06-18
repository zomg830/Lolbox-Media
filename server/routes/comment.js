const router = require("express").Router();
const commentController = require("../controllers/commentController");

router.route("/:userId/:id").put(commentController.create);
router.route("/:id").get(commentController.fetchcomments);

module.exports = router;
