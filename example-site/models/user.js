var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var findOrCreate = require('mongoose-findorcreate');


var schema = mongoose.Schema({
    username: {type: String, required: true},
    password: String,
});

schema.plugin(findOrCreate);

// Hashes provided password before storage
schema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Validate login by comparing entered password with stored password
schema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', schema);
