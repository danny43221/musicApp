import React from "react";
import classes from "./PageSelect.module.css";
import MarkerIcon from "../../../assets/icons/light/MarkerIcon";

const PageSelect = props => {
	let pages = [];
	for (let i = 1; i <= props.totalPages; i++) {
		pages.push(
			<div
				className={`${classes.PageLink} ${props.currentPage === i && classes.Active}`}
				onClick={() => props.setPage(i)}
			>
				{i}
			</div>
		);
	}
	const white = getComputedStyle(document.documentElement).getPropertyValue("--text-secondary");

	return (
		<div className={classes.PageSelect}>
			<div className={classes.Left} onClick={() => props.setPage(props.currentPage - 1)}>
				{props.currentPage > 1 && <MarkerIcon fill={white} size={"1.2rem"} />}
			</div>
			{pages}
			<div className={classes.Right} onClick={() => props.setPage(props.currentPage + 1)}>
				{props.currentPage < props.totalPages && <MarkerIcon fill={white} size={"1.2rem"} />}
			</div>
		</div>
	);
};

export default PageSelect;
