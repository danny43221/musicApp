import React from "react";

const MarkerIcon = props => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={props.size || "1.6rem"}
			style={{ transform: "rotate(-180deg" }}
			viewBox="0 0 576 512"
		>
			<path
				fill={props.fill}
				d="M329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.9 0 60-40 41.6-72l-240-416z"
			/>
		</svg>
	);
};

export default MarkerIcon;
