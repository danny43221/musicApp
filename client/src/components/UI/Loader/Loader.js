import React from "react";
import classes from "./Loader.module.css";

const Loader = () => {
	return (
		<div className={classes.Container}>
			<div className={classes.Loader}>Loading...</div>
		</div>
	);
};

export default Loader;
