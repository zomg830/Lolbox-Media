const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  _id: String,
  comment_id: String,
  id: String,
  comments: Array
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
