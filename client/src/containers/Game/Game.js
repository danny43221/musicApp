import React, { useState, useEffect } from "react";
import classes from "./Game.module.css";
import OpponentModal from '../../components/Game/OpponentModal/OpponentModal'
import { subscribeToOpponentConnection } from "../../shared/socket";

export const Game = props => {
	const [showOpponent, setShowOpponent] = useState(true);

	useEffect(() => {
		const modalTimeout = setTimeout(() => {
			setShowOpponent(false)
		}, 4400);

		subscribeToOpponentConnection(err => {
			if (err) return;
			props.disconnect();
		});

		return () => {
			clearTimeout(modalTimeout);
		}
	}, []);

	return (
		<div>
			<OpponentModal opponent={props.opponent} show={showOpponent} onClose={() => setShowOpponent(false)} />
			<button onClick={props.disconnect}>leavr</button>
		</div>
	);
};

export default Game;
