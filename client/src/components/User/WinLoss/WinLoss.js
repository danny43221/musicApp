import React from "react";
import classes from "./WinLoss.module.css";
import Paper from "../../UI/Paper/Paper";
import MarkerIcon from "../../../assets/icons/light/MarkerIcon";

const WinLoss = props => {
	const { wins, losses } = props;

	const totalGames = wins + losses;
	const winsWidth = wins / totalGames;
	const lossesWidth = 1 - winsWidth;
   let ratio = (wins / losses).toFixed(2);
   if (losses === 0) {
      ratio = wins.toFixed(2)
   }

	return (
		<Paper>
			<h3 className={classes.CardHeader}>Win / Loss</h3>
			<div className={classes.WinLoss}>
				<div className={classes.Ratio} style={{width: `${winsWidth * 100}%`}}>
					<div className={classes.RatioValue}>{ratio}</div>
					<MarkerIcon fill="#ececec" size="7px" />
				</div>
				<div className={classes.WinBar} style={{ width: `${winsWidth * 100}%` }}></div>
				<div className={classes.LossBar} style={{ width: `${lossesWidth * 100}%` }}></div>
			</div>
			<div className={classes.Legend}>
				<div className={classes.LegendSect}>
					<div className={classes.WinSquare}></div>Wins:
					<span className={classes.LegendValue}>{props.wins}</span>
				</div>
				<div className={classes.LegendSect}>
					<div className={classes.LossSquare}></div>Losses:
					<span className={classes.LegendValue}>{props.losses}</span>
				</div>
            <div className={classes.LegendSect}>
					Total Games:
					<span className={classes.LegendValue}>{props.losses + props.wins}</span>
				</div>
			</div>
		</Paper>
	);
};

export default WinLoss;
