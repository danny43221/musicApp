import React from "react";

const MicrophoneIcon = props => {
	return (
		<svg height={props.size || '4rem'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
			<path
				d="M80 256V96a96 96 0 0 1 192 0h-85.33c-5.89 0-10.67 3.58-10.67 8v16c0 4.42 4.78 8 10.67 8H272v32h-85.33c-5.89 0-10.67 3.58-10.67 8v16c0 4.42 4.78 8 10.67 8H272v32h-85.33c-5.89 0-10.67 3.58-10.67 8v16c0 4.42 4.78 8 10.67 8H272a96 96 0 0 1-192 0z"
				class="fa-secondary"
				fill={props.secondary}
			/>
			<path
				d="M186.67 128H272V96h-85.33c-5.89 0-10.67 3.58-10.67 8v16c0 4.42 4.78 8 10.67 8zm0 64H272v-32h-85.33c-5.89 0-10.67 3.58-10.67 8v16c0 4.42 4.78 8 10.67 8zM336 192h-16a16 16 0 0 0-16 16v48a128.15 128.15 0 0 1-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v40.16c0 89.64 64 169.55 152 181.69V464H96a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48a16 16 0 0 0-16-16zm-149.33 64H272v-32h-85.33c-5.89 0-10.67 3.58-10.67 8v16c0 4.42 4.78 8 10.67 8z"
				class="fa-primary"
				fill={props.primary}
			/>
		</svg>
	);
};

export default MicrophoneIcon;
