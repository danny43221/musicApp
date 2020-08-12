import React from "react";
import classes from "./Break.module.css";

const Break = props => {
	return (
		<div className={classes.Break}>
			<div className={classes.Line}></div>
			<span className={classes.BreakText}>{props.children}</span>
			<div className={classes.Line}></div>
		</div>
	);
};

export default Break;
