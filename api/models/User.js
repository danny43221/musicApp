const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
   username: {
      type: String,
      required: [true, "Please add a username"],
      unique: true
   },
	password: {
		type: String,
		minlength: 8,
		required: [true, "Please add a password"],
		select: false,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model("User", UserSchema);
