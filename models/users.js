var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var findOrCreate = require('mongoose-findorcreate');


var usersSchema = mongoose.Schema({
    username: String,
        password: String,
        name: String,
        email: String,
        roommate: {
                name: String,
                id: mongoose.Schema.Types.ObjectId,
        },
        pin: String,
        tags: mongoose.Schema.Types.Mixed
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
