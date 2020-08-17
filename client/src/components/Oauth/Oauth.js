import React from "react";
import Button from "../UI/Button/Button";
import { FacebookIcon, GithubIcon, GoogleIcon } from "../../assets/icons/logo";
import classes from "./Oauth.module.css";

const Oauth = props => {
	const buttonColor = getComputedStyle(document.documentElement).getPropertyValue(
		"--text-secondary"
	);

	return (
		<div>
			<div className={classes.ButtonContainer}>
				<a href="http://localhost:5000/api/v1/auth/google">
					<Button color={buttonColor} outlined width="100%">
						<div className={classes.IconContainer}>
							<GoogleIcon />
						</div>
						Continue with Google
					</Button>
				</a>
			</div>

			<div className={classes.ButtonContainer}>
				<a href="http://localhost:5000/api/v1/auth/facebook">
					<Button color={buttonColor} outlined width="100%">
						<div className={classes.IconContainer}>
							<FacebookIcon />
						</div>
						Continue with Facebook
					</Button>
				</a>
			</div>

			<div className={classes.ButtonContainer} style={{ padding: "0" }}>
				<a href="http://localhost:5000/api/v1/auth/github">
					<Button color={buttonColor} outlined width="100%">
						<div className={classes.IconContainer}>
							<GithubIcon />
						</div>
						Continue with Github
					</Button>
				</a>
			</div>
		</div>
	);
};

export default Oauth;
