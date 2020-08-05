const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/db");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config/config.env" });

connectDB();

const auth = require("./routes/auth");

const app = express();

//Middleware
app.use(express.json())

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
	})
);
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

//Mount routes
app.use("/auth", auth);

const PORT = process.env.PORT || 5000;
const server = app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`)
);

//Error handling
app.use(errorHandler);

process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`);
	// Close server & exit process
	// server.close(() => process.exit(1));
});
