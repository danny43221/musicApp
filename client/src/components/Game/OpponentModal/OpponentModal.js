import React from "react";
import Break from "../../../components/UI/Break/Break";
import Modal from '../../UI/Modal/Modal'
import instruments from "../../../shared/instruments"
import classes from './OpponentModal.module.css'

const OpponentModal = props => {
	const InstrumentIcon = instruments[props.opponent.instrument];
	const pinkDark = getComputedStyle(document.documentElement).getPropertyValue("--pink-dark");
	const pinkLight = getComputedStyle(document.documentElement).getPropertyValue("--pink-light");
	return (
		<div>
			<Modal show={props.show} onClose={props.onClose}>
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
		</div>
	);
};

export default OpponentModal;
