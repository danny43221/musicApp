import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import NavArrowIcon from "../../../assets/icons/duotone/NavArrowIcon";
import NoteIcon from "../../../assets/icons/duotone/NoteIcon";
import LogoutIcon from "../../../assets/icons/duotone/LogoutIcon"
import UserIcon from "../../../assets/icons/duotone/UserIcon"
import StarsIcon from "../../../assets/icons/duotone/StarsIcon"

const Navbar = props => {
	const iconPrimaryColor = getComputedStyle(document.documentElement).getPropertyValue('--pink-light');
	const iconSecondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--pink-dark');
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
                  <UserIcon primary={iconPrimaryColor} secondary={iconSecondaryColor} />
						<span className={classes.LinkText}>Hello</span>
					</NavLink>
				</li>
				<li className={classes.NavItem}>
					<NavLink
						to="/register"
						className={classes.NavLink}
						activeClassName={classes.ActiveLink}
					>
						<NoteIcon primary={iconPrimaryColor} secondary={iconSecondaryColor} />
						<span className={classes.LinkText}>Find Match</span>
					</NavLink>
				</li>
				<li className={classes.NavItem}>
					<NavLink
						to="/login"
						className={classes.NavLink}
						activeClassName={classes.ActiveLink}
					>
						<StarsIcon primary={iconPrimaryColor} secondary={iconSecondaryColor} />
						<span className={classes.LinkText}>Leaderboards</span>
					</NavLink>
				</li>
				<li className={classes.NavItem} style={{ marginTop: "auto" }}>
					<NavLink
						to="/forgotpassword"
						className={classes.NavLink}
						activeClassName={classes.ActiveLink}
					>
                  <LogoutIcon primary={iconPrimaryColor} secondary={iconSecondaryColor} />
						<span className={classes.LinkText}>Logout</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
