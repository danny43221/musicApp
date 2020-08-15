import React from "react";

const Bar = props => {
	let color;
	if (props.won) {
		color = getComputedStyle(document.documentElement).getPropertyValue("--blue-dark");
	} else {
		color = getComputedStyle(document.documentElement).getPropertyValue("--pink-dark");
	}

	const containerStyle = {
		height: `${(props.value / 100) * 100}%`,
		flex: 1,
		marginTop: "auto",
		position: "relative",
	};

	const barStyle = {
		backgroundImage: `linear-gradient(to bottom, ${color}, 83%, transparent)`,
		height: "100%",
		margin: "0 20%",
		borderRadius: "10px 10px 0 0",
	};

	const letterStyle = {
		position: "absolute",
      left: "50%",
      top: '-2rem',
      color,
      transform: "translateX(-50%)",
		textAlign: "center",
   };
   
   let letter = props.won ? 'W' : 'L'
   if (props.won === null) {
      letter = ''
   }


	return (
		<div style={containerStyle}>
			<div style={letterStyle}>{letter}</div>
			<div style={barStyle} />
		</div>
	);
};

export default Bar;
