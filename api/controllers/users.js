const asyncHandler = require("../middleware/async");
const User = require("../models/User");

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Private
exports.getUsers = asyncHandler(async (req, res, next) => {
	res.status(200).json(res.advancedResults)
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
// @route     PUT /api/v1/users
// @access    Private
exports.updateUser = asyncHandler(async (req, res, next) => {
	const updateFields = {};

	if (req.body.name) {
		updateFields["name"] = req.body.name;
	}

	if (req.body.description !== undefined) {
		updateFields["description"] = req.body.description;
	}

	if (req.body.instrument) {
		updateFields["instrument"] = req.body.instrument;
	}

	const user = await User.findByIdAndUpdate(req.user.id, updateFields, {
		new: true,
		runValidators: true,
	});

	res.status(200).json({
		success: true,
		data: user,
	});
});
