import React from "react";
import Bar from "./Bar/Bar";
import classes from "./BarGraph.module.css";

const BarGraph = props => {
	let bars = [];
	for (let i = 0; i < 7; i++) {
		if (i < props.values.length) {
			bars.push(<Bar value={props.values[i].accuracy} key={i} won={props.values[i].won} />);
		} else {
			bars.push(<Bar value={0} key={i} won={null} />);
		}
	}
	return (
		<div style={{display: 'flex', alignItems: 'stretch', height: '81%'}}>
			<div className={classes.Values}>
				<div>100</div>
				<div>75</div>
				<div>50</div>
				<div>25</div>
				<div>0</div>
			</div>
			<div className={classes.BarGraph}>{bars}</div>
		</div>
	);
};

export default BarGraph;
