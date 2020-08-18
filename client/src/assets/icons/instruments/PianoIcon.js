import React from "react";

const PianoIcon = props => {
	return (
		<svg height={props.size || '4rem'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path
				d="M512,384v96a32,32,0,0,1-32,32H32A32,32,0,0,1,0,480V384H48v80H464V384Z"
				class="fa-secondary"
				fill={props.secondary}
			/>
			<path
				d="M512,327.55V384H432v40a8,8,0,0,1-8,8H408a8,8,0,0,1-8-8V384H368v40a8,8,0,0,1-8,8H344a8,8,0,0,1-8-8V384H240v40a8,8,0,0,1-8,8H216a8,8,0,0,1-8-8V384H176v40a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V384H112v40a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V384H0V184.45A184.45,184.45,0,0,1,184.45,0h15.1A184.45,184.45,0,0,1,384,184.45h0a64,64,0,0,0,35.38,57.24l57.24,28.62A64,64,0,0,1,512,327.55Z"
				class="fa-primary"
				fill={props.primary}
			/>
		</svg>
	);
};

export default PianoIcon;
