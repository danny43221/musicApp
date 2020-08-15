import React from "react";
import Paper from "../../UI/Paper/Paper";
import classes from "./Personal.module.css";

const Personal = props => {
	return (
		<div className={classes.Personal}>
			<Paper><h3 className={classes.CardHeader}>Personal</h3>{props.name}</Paper>
		</div>
	);
};

export default Personal;
