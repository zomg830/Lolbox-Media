const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Lolbox.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserId: function(req, res) {
    db.User.findById(req.params.userId, "lolbox")
      .then(lolbox => {
        res.json(lolbox);
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Lolbox.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.findByIdAndUpdate(
      req.body.userId,
      {
        $push: { lolbox: [req.body] }
      },
      { upsert: true }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Lolbox.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.update(
      { _id: req.params.userId },
      { $pull: { lolbox: { id: req.params.id } } }
    ).catch(err => res.status(422).json(err));
  }
};
