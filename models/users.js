var mongoose = require("mongoose");

var usersSchema = mongoose.Schema({
	username: String,
        password: String,
        firstName: String,
        lastName: String,
        contactMethods: [String],
        contactValues: [String],
        roommate: mongoose.Schema.Types.ObjectId,
        pin: mongoose.Schema.Types.ObjectId,
});

module.exports.usersSchema = usersSchema;
