const User = require("../models/User");
const asyncHandler = require("../middleware/async");
const passport = require("passport");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

// @desc      Resgister user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;

	if (await User.findOne({ email })) {
		return next(new ErrorResponse("Email already exists", 400));
	}

	const user = await User.create({
		email,
		password,
	});
	res.status(200).json({ success: true, data: user });
});

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) {
			return next(new ErrorResponse(err, 404));
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

// @desc		  Forgot password
// @route     POST /api/v1/auth/forgotpassword
// @access    Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
	const user = await User.findOne({ email: req.body.email });
	if (user) {
		const resetToken = user.getResetPasswordToken();
		await user.save({ validateBeforeSave: false });

		//Create reset url
		const resetUrl = `${req.protocol}://localhost:3000/resetpassword/${resetToken}`;
		const message = `You are receiving this email to reset password please send PUT request to: \n\n ${resetUrl}`;
		try {
			await sendEmail({
				email: user.email,
				subject: "Password reset token",
				message,
			});
		} catch (error) {
			user.resetPasswordToken = undefined;
			user.resetPasswordExpire = undefined;
			await user.save({ validateBeforeSave: false });
			return next(new ErrorResponse("Email could not be sent", 500));
		}
	}
	res.status(200).json({
		success: true,
		data: `If you have registered before, an email has been sent to ${req.body.email} with instructions to reset your password`,
	});
});

// @desc		  Reset password
// @route     PUT /api/v1/auth/resetpassword/:resettoken
// @access    Public
exports.resetPassword = asyncHandler(async (req, res, next) => {
	//Get hashed token
	const resetPasswordToken = crypto
		.createHash("sha256")
		.update(req.params.resettoken)
		.digest("hex");

	const user = await User.findOne({
		resetPasswordToken,
		resetPasswordExpire: { $gt: Date.now() },
	});

	if (!user) {
		return next(new ErrorResponse("Invalid token", 400));
	}

	user.password = req.body.password;
	user.resetPasswordToken = undefined;
	user.resetPasswordExpire = undefined;
	await user.save();

	res.status(200).json({ success: true, data: user });
});
