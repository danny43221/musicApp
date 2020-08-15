const express = require("express");
const redirect = require("../middleware/redirect");
const protect = require("../middleware/protect");
const {
	register,
	login,
	logout,
	getMe,
	forgotPassword,
	resetPassword,
	google,
	googleCallback,
	facebook,
	facebookCallback,
	github,
	githubCallback,
} = require("../controllers/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", protect, logout);
router.get("/me", protect, getMe);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);

//Oauth strategies
router.get("/google", google);
router.get("/google/callback", googleCallback, redirect("http://localhost:3000/"));

router.get("/facebook", facebook);
router.get("/facebook/callback", facebookCallback, redirect("http://localhost:3000/"));

router.get("/github", github);
router.get("/github/callback", githubCallback, redirect("http://localhost:3000/"));

module.exports = router;
