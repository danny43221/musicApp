import React from "react";

const LogoIcon = (props) => {
	return (
		<svg
			width="59"
			height="59"
			viewBox="0 0 59 59"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="29.5" cy="29.5" r="28" stroke="white" stroke-width="3" />
			<circle cx="29.5" cy="29.5" r="28" stroke="url(#paint0_linear)" stroke-width="3" />
			<mask
				id="mask0"
				mask-type="alpha"
				maskUnits="userSpaceOnUse"
				x="7"
				y="14"
				width="45"
				height="32"
			>
				<line
					x1="8.5"
					y1="26.5"
					x2="8.5"
					y2="33.5"
					stroke="black"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<line
					x1="50.5"
					y1="26.5"
					x2="50.5"
					y2="33.5"
					stroke="black"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M14.5 26.5V33.5"
					stroke="black"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M20.5 22V39"
					stroke="black"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M26.5 16V44.0002"
					stroke="black"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M32.5 16V43.9998"
					stroke="black"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M38.5 22V39"
					stroke="black"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M44.5 26.5V33.5"
					stroke="black"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</mask>
			<g mask="url(#mask0)">
				<rect x="5" y="14" width="50" height="32" fill="url(#paint1_linear)" />
			</g>
			<defs>
				<linearGradient
					id="paint0_linear"
					x1="29.5"
					y1="0"
					x2="29.5"
					y2="59"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#DF49A6" />
					<stop offset="1" stop-color="#FF7EEE" stop-opacity=".8" />
				</linearGradient>
				<linearGradient
					id="paint1_linear"
					x1="30"
					y1="14"
					x2="30"
					y2="46"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#DF49A6" />
					<stop offset="1" stop-color="#FF7EEE" stop-opacity="0.8" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default LogoIcon;
