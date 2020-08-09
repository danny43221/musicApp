import React from "react";

const NoteIcon = props => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path
				d="M272 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zM144 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
				class="fa-secondary"
				fill={props.secondary}
			/>
			<path
				d="M192 432c0 44.18 50.14 80 112 80s112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67l-96.53 28.51A32 32 0 0 0 352 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80z"
				class="fa-primary"
				fill={props.primary}
			/>
		</svg>
	);
};

export default NoteIcon;