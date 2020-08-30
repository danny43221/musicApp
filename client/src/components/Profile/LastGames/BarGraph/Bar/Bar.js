import React from "react";
import classes from "./Bar.module.css";

const Bar = props => {
	let color;
	if (props.won) {
		color = getComputedStyle(document.documentElement).getPropertyValue("--blue-dark");
	} else {
		color = getComputedStyle(document.documentElement).getPropertyValue("--pink-dark");
	}

	let letter = props.won ? "W" : "L";
	if (props.won === null) {
		letter = "";
	}

	return (
		<div className={classes.Container} style={{ height: `${(props.value / 100) * 100}%` }}>
			<div className={classes.Letter} style={{ color }}>
				{letter}
			</div>
			<div
				className={classes.Bar}
				style={{ backgroundImage: `linear-gradient(to bottom, ${color}, 83%, transparent)` }}
			/>
		</div>
	);
};

export default Bar;
