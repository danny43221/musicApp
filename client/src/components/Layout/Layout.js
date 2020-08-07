import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import classes from './Layout.module.css'

const Layout = props => {
	return (
		<>
			<Navbar />
			<main className={classes.Content}>{props.children}</main>
		</>
	);
};

export default Layout;
