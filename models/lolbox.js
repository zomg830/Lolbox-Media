const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lolboxSchema = new Schema({
  id: { type: String },
  description: { type: String },
  userId: { type: String },
  urls: { type: Map, of: String },
  date: { type: Date, default: Date.now }
});

const Lolbox = mongoose.model("Lolbox", lolboxSchema);

module.exports = Lolbox;
