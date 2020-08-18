import React from "react";
import classes from "./Select.module.css";
import MarkerIcon from "../../../../assets/icons/light/MarkerIcon";

const Select = props => {
	const { name, register, errorMessage, label, children, ...rest } = props;

	let error = null;
	if (errorMessage) {
		error = <span className={classes.ErrorMessage}> - {props.errorMessage}</span>;
	}

	return (
		<div className={classes.Input}>
			<div className={classes.LabelContainer}>
				<label className={classes.Label} for={name}>
					<span class={classes.LabelText}>{label}</span>
					{error}
				</label>
			</div>
			<div className={classes.SelectContainer}>
				<div className={classes.Icon}>
					<MarkerIcon fill="#ececec" size="7px" />
				</div>
				<select className={classes.Select} name={name} ref={register} {...rest}>
					{children}
				</select>
			</div>
		</div>
	);
};

export default Select;
