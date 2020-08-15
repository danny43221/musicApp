const asyncHandler = require("../middleware/async");
const User = require("../models/User");

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Private
exports.getUsers = asyncHandler(async (req, res, next) => {
	const users = await User.find();
	res.status(200).json({
		success: true,
		length: users.length,
		data: users,
	});
});

// @desc      Get single users
// @route     GET /api/v1/users/:id
// @access    Private
exports.getUser = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.params.id);

	res.status(200).json({
		success: true,
		data: user,
	});
});

// @desc      Update user
// @route     PUT /api/v1/users/
// @access    Private
exports.updateUser = asyncHandler(async (req, res, next) => {
	const { name, description } = req.body;
	const updateFields = { name, description };
	const user = await User.findByIdAndUpdate(req.user.id, updateFields, {
		new: true,
		runValidators: true,
	});

	res.status(200).json({
		success: true,
		data: user,
	});
});
