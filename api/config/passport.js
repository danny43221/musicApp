const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy
const FacebookStrategy = require("passport-facebook").Strategy
const GithubStrategy = require("passport-github").Strategy
const User = require("../models/User");

module.exports = passport => {
	const authenticateLocal = async (email, password, done) => {
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

	const authenticateGoogle = async (accessToken, refreshToken, profile, done) => {	
      const email = profile.emails[0].value
      const password = profile.id
		let user = await User.findOne({ email });
		try {
			if (!user) {
				user = await User.create({ email , password });
			}
			return done(null, user);
		} catch (e) {
			return done(e, false);
		}
	};

	const authenticateFacebook = async (accessToken, refreshToken, profile, done) => {
		const email = profile.emails[0].value
		const password = profile.id
      let user = await User.findOne({ email });
		try {
			if (!user) {
				user = await User.create({ email , password });
			}
			return done(null, user);
		} catch (e) {
			return done(e, false);
		}
	};

	const authenticateGithub = async (accessToken, refreshToken, profile, done) => {
		const email = profile.emails[0].value
		const password = profile.id
      let user = await User.findOne({ email });
		try {
			if (!user) {
				user = await User.create({ email , password });
			}
			return done(null, user);
		} catch (e) {
			return done(e, false);
		}
	};

	passport.use(new LocalStrategy({usernameField: 'email'}, authenticateLocal));

	passport.use(
		new GoogleStrategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
				callbackURL: "http://localhost:5000/api/v1/auth/google/callback",
			},
			authenticateGoogle
		)
	);

	passport.use(
		new FacebookStrategy(
			{
				clientID: process.env.FACEBOOK_APP_ID,
				clientSecret: process.env.FACEBOOK_APP_SECRET,
				callbackURL: "http://localhost:5000/api/v1/auth/facebook/callback",
				profileFields: ['id', 'email']
			},
			authenticateFacebook
		)
	);

	passport.use(
		new GithubStrategy(
			{
				clientID: process.env.GITHUB_CLIENT_ID,
				clientSecret: process.env.GITHUB_CLIENT_SECRET,
				callbackURL: "http://localhost:5000/api/v1/auth/github/callback",
				scope: 'user:email'
			},
			authenticateGithub
		)
	);

	passport.serializeUser((user, done) => done(null, user.id));
	passport.deserializeUser((id, done) => {
		User.findById(id, (error, user) => {
			done(error, user);
		});
	});
};
