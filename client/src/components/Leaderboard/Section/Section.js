import React from "react";
import classes from "./Section.module.css";
import Paper from "../../UI/Paper/Paper";
import instruments from "../../../shared/instruments";
import { Link } from "react-router-dom";

const Section = props => {
	const InstrumentIcon = instruments[props.user.instrument];
	const pinkDark = getComputedStyle(document.documentElement).getPropertyValue("--pink-dark");
	const pinkLight = getComputedStyle(document.documentElement).getPropertyValue("--pink-light");
	return (
		<Paper style={{ padding: "1.9rem", marginBottom: "1rem" }}>
			<div className={classes.Section}>
				<div className={classes.Circle}>
					<InstrumentIcon primary={pinkDark} secondary={pinkLight} size="1.6rem" />
				</div>
				<Link className={classes.Name} to={props.link}>
					{props.user.name}
				</Link>
				<div className={classes.Stat}>{props.user.stats.wins + props.user.stats.losses}</div>
				<div className={classes.Stat}>{props.user.stats.winLoss.toFixed(1)}</div>
				<div className={classes.Stat}>
					{(props.user.stats.noteAccuracy * 100).toFixed(0)}
					<span className={classes.Percent}> %</span>
				</div>
			</div>
		</Paper>
	);
};

export default Section;
