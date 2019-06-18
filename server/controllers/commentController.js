const db = require("../models");
const nanoid = require("nanoid");

module.exports = {
  findAll: function(req, res) {
    db.Comment.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Comment.update(
      { _id: req.params.id },
      {
        $push: {
          comments: {
            userId: req.params.userId,
            comment: req.body.comment,
            username: req.body.username,
            comment_id: nanoid(10)
          }
        }
      },
      { upsert: true, useFindAndModify: false }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  fetchcomments: function(req, res) {
    db.Comment.findById(req.params.id)
      .then(dbModel => res.json(dbModel.comments))
      .catch(err => res.status(422).send({ error: "No comments found" }));
  }
};
