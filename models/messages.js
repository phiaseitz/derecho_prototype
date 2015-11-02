var mongoose = require("mongoose");

var messagesSchema = mongoose.Schema({
  from: mongoose.Schema.Types.ObjectId,
  to: [mongoose.Schema.Types.ObjectId],
  subject: [String],
  body: [String],
});

module.exports.messagesSchema = messagesSchema;

