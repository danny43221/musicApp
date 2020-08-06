const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

module.exports = passport => {
	const authenticateUser = async (email, password, done) => {
		const user = await User.findOne({ email }).select('+password');
		if (!user) {
			return done('Incorrect email or password', false);
		}
		
		const isMatch = await user.matchPassword(password);
		if (isMatch) {
			return done(null, user);
		} else {
			return done("Incorrect email or password", false);
		}
	};
	passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser));
	passport.serializeUser((user, done) => done(null, user.id));
	passport.deserializeUser((id, done) => {
		User.findById(id, (error, user) => {
			done(error, user);
		});
	});
};
