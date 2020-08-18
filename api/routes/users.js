const express = require("express");
const protect = require("../middleware/protect");
const { getUsers, getUser, updateUser } = require("../controllers/users");
const advancedResults = require("../middleware/advancedResults");
const User = require('../models/User')

const router = express.Router();

router.use(protect);

router.get("/", advancedResults(User), getUsers);
router.get("/:id", getUser);
router.put("/", updateUser);

module.exports = router;
