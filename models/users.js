var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var findOrCreate = require('mongoose-findorcreate');


var usersSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  contactMethods: [String],
  contactValues: [String],
  messages: [mongoose.Schema.Types.ObjectId],
  pin: mongoose.Schema.Types.ObjectId,
});

usersSchema.plugin(findOrCreate);

// Hashes provided password before storage
usersSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Validate login by comparing entered password with stored password
usersSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}


module.exports = mongoose.model('User', usersSchema);
