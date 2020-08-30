import React from "react";
import Paper from "../../UI/Paper/Paper";
import classes from "./NoteAccuracy.module.css";
import PercentChart from "../../UI/PercentChart/PercentChart";

const NoteAccuracy = props => {
	return (
		<Paper>
			<h3 className={classes.CardHeader}>Note Accuracy</h3>
			<PercentChart percent={props.accuracy} label="accuracy" />
		</Paper>
	);
};

export default NoteAccuracy;
