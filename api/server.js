const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors")

dotenv.config({ path: "./config/config.env" });

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(cors())

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`))

process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`);
	// Close server & exit process
	// server.close(() => process.exit(1));
});

