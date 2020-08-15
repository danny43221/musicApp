import React from "react";
import classes from "./LastGames.module.css";
import Paper from "../../UI/Paper/Paper";
import BarGraph from "./BarGraph/BarGraph";

const LastGames = props => {
	return (
		<div className={classes.LastGames}>
         <Paper style={{height: '100%'}}>
				<h3 className={classes.CardHeader}>Last 7 Games</h3>
				<BarGraph values={props.values} />
			</Paper>
		</div>
	);
};

export default LastGames;
