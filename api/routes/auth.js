const express = require("express");
const {
	register,
	login,
	logout,
	getUser,
	forgotPassword,
	resetPassword,
	google,
	facebook,
	github
} = require("../controllers/auth");

const passport = require('passport')

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/user", getUser);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);

//Oauth strategies
router.get("/google", google);
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
  // Successful authentication, redirect home.
  res.writeHead(301,{Location: 'http://localhost:3000/'});
  res.end();
});

router.get("/facebook", facebook);
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
  // Successful authentication, redirect home.
  res.writeHead(301,{Location: 'http://localhost:3000/'});
  res.end();
});

router.get("/github", github);
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), function(req, res) {
	// Successful authentication, redirect home.
	res.writeHead(301,{Location: 'http://localhost:3000/'});
	res.end();
 });


module.exports = router;
