import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import NavArrowIcon from "../../../assets/icons/NavArrowIcon";
import NoteIcon from '../../../assets/icons/NoteIcon'

const Navbar = props => {
	return (
		<nav className={classes.Navbar}>
			<ul className={classes.NavbarNav}>
				<li className={classes.Logo}>
					<div className={classes.NavLink}>
						<span className={classes.LinkText}>TUNRLINK</span>
						<NavArrowIcon primary="#FFFFFF88" secondary="#FFFFFFDD" />
					</div>
				</li>
				<li className={classes.NavItem}>
					<NavLink to="/home" className={classes.NavLink} activeClassName={classes.ActiveLink}>
						<NavArrowIcon primary="#ff7eee" secondary="#df49a6" />
						<span className={classes.LinkText}>Hello</span>
					</NavLink>
				</li>
				<li className={classes.NavItem}>
					<NavLink
						to="/login"
						className={classes.NavLink}
						activeClassName={classes.ActiveLink}
					>
						<NavArrowIcon primary="#ff7eee" secondary="#df49a6" />
						<span className={classes.LinkText}>Cats</span>
					</NavLink>
				</li>
				<li className={classes.NavItem}>
					<NavLink
						to="/register"
						className={classes.NavLink}
						activeClassName={classes.ActiveLink}
					>
						<NoteIcon primary="#ff7eee" secondary="#df49a6" />
						<span className={classes.LinkText}>Dogs</span>
					</NavLink>
				</li>
				<li className={classes.NavItem} style={{ marginTop: "auto" }}>
					<NavLink
						to="/forgotpassword"
						className={classes.NavLink}
						activeClassName={classes.ActiveLink}
					>
						
						<span className={classes.LinkText}>Logout</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
