const db = require("../models");

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
            username: req.body.username
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
      .catch(err => res.status(422).json(err));
  }
};
