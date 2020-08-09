import React from "react";
import Paper from "../../../components/UI/Paper/Paper";
import classes from "./AuthLayout.module.css";
import LogoIcon from '../../../assets/icons/logo/LogoIcon'

const AuthLayout = props => {
	return (
		<div className={classes.Layout}>
			<main className={classes.Content}>
				<Paper><LogoIcon />{props.children}</Paper>
			</main>
		</div>
	);
};

export default AuthLayout;
