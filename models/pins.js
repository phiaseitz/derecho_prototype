var mongoose = require("mongoose");

var pinsSchema = mongoose.Schema({
        occupants: [mongoose.Schema.Types.ObjectId],
        group: String,
        hall: Number,
        room: Number,
        tags: [mongoose.Schema.Types.Mixed]
});

module.exports.pinsSchema = pinsSchema;
