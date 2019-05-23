const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lolboxSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Lolbox = mongoose.model("Lolbox", lolboxSchema);

module.exports = Lolbox;
