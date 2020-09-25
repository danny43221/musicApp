import io from "socket.io-client";

let socket;

export const initiateSocket = (userId, room) => {
	socket = io("http://localhost:5000");
	if (socket && room) {
		socket.emit("join", { userId, room });
	}
};

export const disconnectSocket = () => {
	if (socket) {
		socket.disconnect();
	}
};

export const subscribeToQueue = cb => {
	if (!socket) return true;

	socket.on("start game", data => {
		const { gameId, opponentId } = data;
		socket.emit("join", { userId: null, room: gameId });
		return cb(null, opponentId);
	});
};

export const subscribeToOpponentConnection = cb => {
   if (!socket) return true;

   socket.on("left game", () => {
      return cb(null);
   })
}