const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Please add a username"],
		unique: true,
	},
	password: {
		type: String,
		minlength: 6,
		required: [true, "Please add a password"],
		select: false
	},
	description: {
		type: String,
		maxlength: 50,
		default: 'Has not written a description yet'
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

//Hash password
UserSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

//Match user's hashed password
UserSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);