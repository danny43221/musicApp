const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/db");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const socketio = require("socket.io");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

//Route files
const auth = require("./routes/auth");
const users = require("./routes/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Socket

io.on("connection", socket => {
	console.log(`connected: ${socket.id}`);

	socket.on("join", data => {
		const { userId, room } = data;
		if (socket.room) socket.leave(socket.room);
		if (userId) socket.userId = userId;
		socket.room = room;
		socket.join(room);

		const queueRoom = socket.adapter.rooms["queue"];
		if (queueRoom && queueRoom.length >= 2) {
			const socketIds = Object.keys(queueRoom.sockets);
			const gameId = socketIds[0] + socketIds[1];
			io.to(socketIds[0]).emit("start game", {
				gameId,
				opponentId: io.sockets.connected[socketIds[1]].userId,
			});
			io.to(socketIds[1]).emit("start game", {
				gameId,
				opponentId: io.sockets.connected[socketIds[0]].userId,
			});
		}
		console.log(`Socket ${socket.id} joining ${room}`);
	});

	socket.on("disconnect", () => {
		if (socket.room && socket.room != "queue") {
			io.to(socket.room).emit("left game");
		}
		console.log(`disconnected: ${socket.id}`);
	});
});

//Middleware
app.use(express.json());

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

//Configure passport strategies
require("./config/passport")(passport);

//Security
app.use(mongoSanitize());

app.use(helmet());

app.use(xss());

const limiter = rateLimit({
	windowMs: 10 * 60 * 1000,
	max: 1000,
});
app.use(limiter);

app.use(hpp());

//Mount routes
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);

const PORT = process.env.PORT || 5000;

server.listen(
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
