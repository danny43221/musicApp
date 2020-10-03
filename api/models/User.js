const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Email is required"],
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"],
		unique: true,
	},
	password: {
		type: String,
		minlength: 8,
		required: [true, "Password is required"],
		select: false,
	},
	name: {
		type: String,
		maxlength: 20,
		default: "Anonymous Musician",
	},
	description: {
		type: String,
		maxlength: 280,
		default: "Has not written a description yet",
	},
	instrument: {
		type: String,
		default: "none",
		required: "Instrument is required",
		enum: [
			"clarinet",
			"percussion",
			"flute",
			"guitar",
			"vocals",
			"piano",
			"saxophone",
			"trumpet",
			"violin",
			"none",
		],
	},
	stats: {
		wins: {
			type: Number,
			default: 0,
		},
		losses: {
			type: Number,
			default: 0,
		},
		winLoss: {
			type: Number,
			default: 0,
		},
		notesPlayed: {
			type: Number,
			default: 0,
		},
		correctNotesPlayed: {
			type: Number,
			default: 0,
		},
		noteAccuracy: Number,
		skill: Number,
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

//Hash password
UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

//Update stats
UserSchema.pre("save", function (next) {
	this.stats.winLoss = this.calculateWinLoss();
	this.stats.noteAccuracy = this.calculateNoteAccuracy();
	this.stats.skill = this.calculateSkill();
	next();
});

//Match user's hashed password
UserSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

//Generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
	const resetToken = crypto.randomBytes(20).toString("hex");
	this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
	this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
	return resetToken;
};

//Calculate win/loss ratio
UserSchema.methods.calculateWinLoss = function () {
	let winLoss;
	if (this.stats.losses === 0) {
		winLoss = this.stats.wins;
	} else {
		winLoss = this.stats.wins / this.stats.losses;
	}
	return winLoss;
};

//Calculate note accuracy
UserSchema.methods.calculateNoteAccuracy = function () {
	let noteAccuracy;
	if (this.stats.notesPlayed === 0) {
		noteAccuracy = 0;
	} else {
		noteAccuracy = this.stats.correctNotesPlayed / this.stats.notesPlayed;
	}
	return noteAccuracy;
};

//Calculate skill
UserSchema.methods.calculateSkill = function () {
	const { winLoss, noteAccuracy, wins, losses } = this.stats;
	return winLoss * noteAccuracy * (wins + losses);
};

module.exports = mongoose.model("User", UserSchema);
