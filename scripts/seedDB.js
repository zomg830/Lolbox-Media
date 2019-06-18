const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lolbox");

const lolboxSeed = [
  {
    test: "test"
  }
];

db.Lolbox.remove({})
  .then(() => db.Lolbox.collection.insertMany(lolboxSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
