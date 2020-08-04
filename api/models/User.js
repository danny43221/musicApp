const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

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

UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", UserSchema);
