var mongoose = require("mongoose");

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

module.exports.usersSchema = usersSchema;
