import React, { useState, useEffect } from "react";
import instruments from "../../shared/instruments";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./Game.module.css";
import Break from "../../components/UI/Break/Break";
import { subscribeToOpponentConnection } from "../../shared/socket";

export const Game = props => {
	const [showOpponent, setShowOpponent] = useState(true);

	useEffect(() => {
		const modalTimeout = setTimeout(() => {
			setShowOpponent(false)
		}, 4000);

		subscribeToOpponentConnection(err => {
			if (err) return;
			props.disconnect();
		});

		return () => {
			clearTimeout(modalTimeout);
		}
	}, []);

	const InstrumentIcon = instruments[props.opponent.instrument];
	const pinkDark = getComputedStyle(document.documentElement).getPropertyValue("--pink-dark");
	const pinkLight = getComputedStyle(document.documentElement).getPropertyValue("--pink-light");
	return (
		<div>
			<Modal show={showOpponent} onClose={() => setShowOpponent(false)}>
				<div className={classes.Modal}>
					<div className={classes.Label}>Opponent Found</div>
					<Break margin=".5rem">
						<div className={classes.Name}>{props.opponent.name}</div>
					</Break>
					<div className={classes.Circle}>
						<InstrumentIcon primary={pinkDark} secondary={pinkLight} size="5rem" />
					</div>
					{props.opponent.stats.wins} <span className={classes.Blue}>W</span> -{" "} 
					{props.opponent.stats.losses} <span className={classes.Pink}>L</span>
				</div>
			</Modal>
			<button onClick={props.disconnect}>leavr</button>
		</div>
	);
};

export default Game;
