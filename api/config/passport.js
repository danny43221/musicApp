const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require(bcrypt);

const initialize = (passport, getUserByUsername, getUserById) => {
	const authenticateUser = async (username, password, done) => {
		const user = getUserByUsername(username);

		if (!username) {
			return done(null, false, "No user with username");
		}

		try {
			if (await bcrypt.compare(password, user.password)) {
				return done(null, user);
			} else {
				return done(null, false, "Password incorrect");
			}
		} catch (error) {
			return done(error);
		}
	};

	passport.use(new LocalStrategy({ usernameField: "username" }, authenticateUser));
	passport.serializeUser((user, done) => done(null, user.id));
	passport.deserializeUser((id, done) => {
		return done(null, getUserById(id));
	});
};

module.exports = initialize;
