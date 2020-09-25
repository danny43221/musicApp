import React from "react";

const DrumIcon = props => {
	return (
		<svg height={props.size || '4rem'} transform="scale(300%)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{transform: "translateX(-1%)"}}>
			<path
				d="M256 352a24 24 0 0 0-24 24v103.47c7.91.32 15.9.53 24 .53s16.09-.21 24-.53V376a24 24 0 0 0-24-24zM96 320a24 24 0 0 0-24 24v101.76a327.89 327.89 0 0 0 48 17V344a24 24 0 0 0-24-24zm320 0a24 24 0 0 0-24 24v118.77a327.89 327.89 0 0 0 48-17V344a24 24 0 0 0-24-24zm93.31-267.56l-8.87-13.31a16 16 0 0 0-22.19-4.44L232.88 192.94a16 16 0 0 0-4.44 22.19l8.87 13.31a16 16 0 0 0 22.19 4.44L504.88 74.63a16 16 0 0 0 4.43-22.19z"
				class="fa-secondary"
				fill={props.secondary}
			/>
			<path
				d="M512 208v160c0 30.23-27.5 57.61-72 77.76V344a24 24 0 0 0-48 0v118.77c-33.05 9.1-71.07 15-112 16.7V376a24 24 0 0 0-48 0v103.47c-40.93-1.67-78.95-7.6-112-16.7V344a24 24 0 0 0-48 0v101.76C27.5 425.61 0 398.23 0 368V208a37.5 37.5 0 0 1 1.33-10.38C15.09 101.32 214.73 96 256 96c17.58 0 63.9 1 112.32 9.58l-62.55 40.34c-16-1.21-32.58-1.92-49.77-1.92-114.87 0-208 28.65-208 64s93.13 64 208 64 208-28.65 208-64c0-21.27-33.87-40.07-85.77-51.7l53.23-34.3c40.86 15 73.91 38.5 79.21 75.65A37.5 37.5 0 0 1 512 208z"
				class="fa-primary"
				fill={props.primary}
			/>
		</svg>
	);
};

export default DrumIcon;
