const express = require("express");
const protect = require("../middleware/protect");
const { getUsers, getUser, updateUser } = require("../controllers/users");

const router = express.Router();

router.use(protect);

router.get("/", getUsers);
router.get("/:id", getUser)
router.put('/', updateUser)


module.exports = router;
