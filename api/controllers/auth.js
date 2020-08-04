const User = require("../models/User");
const asyncHandler = require("../middleware/async")

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
