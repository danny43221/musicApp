const User = require("../models/User");
const asyncHandler = require("../middleware/async");
const passport = require("passport");
const ErrorResponse = require("../utils/errorResponse");

// @desc      Resgister user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
	const { username, password } = req.body;
	const user = await User.create({
		username,
		password,
	});
	res.status(200).json({ success: true, data: user });
});

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (!user) {
			return next(new ErrorResponse("No such user exists", 404));
		}

		req.logIn(user, err => {
			res.status(200).json({ success: true, data: user });
		});
	})(req, res, next);
});

// @desc      Get current user
// @route     GET /api/v1/auth/user
// @access    Public
exports.getUser = asyncHandler((req, res, next) => {
	if (!req.user) {
		return next(new ErrorResponse("No user is currently logged in", 400));
	}
	res.status(200).json({ success: true, data: req.user });
});

// @desc      Logout user
// @route     GET /api/v1/auth/logout
// @access    Public
exports.logout = asyncHandler((req, res, next) => {
	if (!req.user) {
		return next(new ErrorResponse("No user is currently logged in", 400));
	}
	req.logout();
	res.status(200).json({ success: true, data: {} });
});
