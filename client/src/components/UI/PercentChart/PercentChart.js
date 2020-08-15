import React from "react";
import classes from "./PercentChart.module.css";

const PercentChart = props => {
	return (
		<div className={classes.PercentChart}>
         <div className={classes.Label}>
				<div className={classes.Value}>
					<div className={classes.Percent}>{props.percent}</div>
					<div className={classes.PercentSymbol}>%</div>
				</div>
            <div className={classes.LabelText}>{props.label}</div>   
			</div>

			<svg viewBox="0 0 36 36">
				<path
					class={classes.CircleBackground}
					d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
				/>
				<path
					line
					className={classes.Circle}
					d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
					stroke-dasharray={`${props.percent}, 100`}
				/>
			</svg>
		</div>
	);
};

export default PercentChart;
