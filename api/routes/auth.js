const express = require("express");
const { register, login, logout, getUser } = require("../controllers/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout)
router.get("/user", getUser)

module.exports = router;
