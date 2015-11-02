var mongoose = require("mongoose");

var usersSchema = mongoose.Schema({
	username: String,
        password: String,
        name: String,
        email: String,
        roommate: {
                name: String,
                id: ObjectID
        }
        pin: String,
        tags: Mixed
});

module.exports.usersSchema = usersSchema;
