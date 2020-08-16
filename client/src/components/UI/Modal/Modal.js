import React from "react";
import ReactModal from "react-modal";

const Modal = props => {
	const contentBgColor = getComputedStyle(document.documentElement).getPropertyValue(
		"--bg-primary"
	);

	const modalStyle = {
		overlay: {
			zIndex: "500",
			backgroundColor: "rgba(150, 150, 150, .6)",
			backdropFilter: "blur(2px)",
		},
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			zIndex: "500",
			borderRadius: ".6rem",
			border: "none",
			padding: "3rem",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			backgroundColor: contentBgColor,
			boxShadow:
				"0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)",
		},
   };
   
	return (
		<ReactModal
			isOpen={props.isOpen}
			style={modalStyle}
			onRequestClose={props.onClose}
			shouldCloseOnOverlayClick
		>
			{props.children}
		</ReactModal>
	);
};

export default Modal;
