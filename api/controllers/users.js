const asyncHandler = require("../middleware/async")
const User = require("../models/User")

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Private
exports.getUsers = asyncHandler(async (req, res, next) => {
   const users = await User.find();
   res.status(200).json({
      success: true,
      length: users.length,
      data: users
   })
});
