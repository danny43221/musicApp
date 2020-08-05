const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

module.exports = passport => {
	const authenticateUser = async (username, password, done) => {
		const user = await User.findOne({ username }).select('+password');
		if (!user) {
			return done(null, false);
		}
		
		const isMatch = await user.matchPassword(password);
		if (isMatch) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	};
	passport.use(new LocalStrategy(authenticateUser));
	passport.serializeUser((user, done) => done(null, user.id));
	passport.deserializeUser((id, done) => {
		User.findById(id, (error, user) => {
			done(error, user);
		});
	});
};
