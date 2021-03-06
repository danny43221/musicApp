import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import {
	NavArrowIcon,
	NoteIcon,
	LogoutIcon,
	UserIcon,
	StarsIcon,
} from "../../../assets/icons/duotone";
import { AuthContext } from "../../../shared/AuthContext";
import axios from "../../../shared/axios-api";

const Navbar = props => {
	const { setIsAuthenticated, setUser } = useContext(AuthContext);
	const handleLogout = () => {
		axios.get("/auth/logout").then(res => {
			setIsAuthenticated(false);
			setUser({});
		});
	};

	const iconPrimaryColor = getComputedStyle(document.documentElement).getPropertyValue(
		"--pink-light"
	);
	const iconSecondaryColor = getComputedStyle(document.documentElement).getPropertyValue(
		"--pink-dark"
	);
	return (
		<nav className={classes.Navbar}>
			<ul className={classes.NavbarNav}>
				<li className={classes.Logo}>
					<div className={classes.NavLink}>
						<span className={classes.LinkText}>COTUNER</span>
						<NavArrowIcon primary="#FFFFFF88" secondary="#FFFFFFDD" />
					</div>
				</li>
				<li className={classes.NavItem}>
					<NavLink
						to="/profile"
						className={classes.NavLink}
						activeClassName={classes.ActiveLink}
					>
						<UserIcon primary={iconPrimaryColor} secondary={iconSecondaryColor} />
						<span className={classes.LinkText}>Profile</span>
					</NavLink>
				</li>
				<li className={classes.NavItem}>
					<NavLink
						to="/match"
						className={classes.NavLink}
						activeClassName={classes.ActiveLink}
					>
						<NoteIcon primary={iconPrimaryColor} secondary={iconSecondaryColor} />
						<span className={classes.LinkText}>Find Match</span>
					</NavLink>
				</li>
				<li className={classes.NavItem}>
					<NavLink
						to="/leaderboard"
						className={classes.NavLink}
						activeClassName={classes.ActiveLink}
					>
						<StarsIcon primary={iconPrimaryColor} secondary={iconSecondaryColor} />
						<span className={classes.LinkText}>Leaderboards</span>
					</NavLink>
				</li>
				<li className={classes.NavItem} style={{ marginTop: "auto" }}>
					<div onClick={handleLogout} className={classes.NavLink}>
						<LogoutIcon primary={iconPrimaryColor} secondary={iconSecondaryColor} />
						<span className={classes.LinkText}>Logout</span>
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
