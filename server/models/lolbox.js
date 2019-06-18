const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lolboxSchema = new Schema({
  id: { type: String },
  description: { type: String },
  userId: { type: String },
  urls: { type: Map, of: String },
  date: { type: Date, default: Date.now },
  title: { type: String },
  url: { type: String }
});

const Lolbox = mongoose.model("Lolbox", lolboxSchema);

module.exports = Lolbox;
