import React from "react";
import classes from "./Break.module.css";

const Break = props => {
	let br;
	if (!props.children) {
		br = (
			<div className={classes.Break} style={{ padding: `${props.margin} 0` }}>
				<div className={classes.Line}></div>
			</div>
		);
	} else {
		br = (
			<div className={classes.Break} style={{ padding: props.margin }}>
				<div className={classes.Line}></div>
				<span className={classes.BreakText}>{props.children}</span>
				<div className={classes.Line}></div>
			</div>
		);
	}
	return br;
};

export default Break;
