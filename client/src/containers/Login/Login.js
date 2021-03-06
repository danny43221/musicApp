import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "../../shared/axios-api";
import { useForm } from "react-hook-form";
import TextInput from "../../components/UI/Inputs/TextInput/TextInput";
import EnvelopeIcon from "../../assets/icons/light/EnvelopeIcon";
import LockIcon from "../../assets/icons/light/LockIcon";
import classes from "./Login.module.css";
import Button from "../../components/UI/Button/Button";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout";
import Oauth from "../../components//Oauth/Oauth";
import Break from "../../components/UI/Break/Break";
import { AuthContext } from "../../shared/AuthContext";

const Login = props => {
	const { setIsAuthenticated, setUser } = useContext(AuthContext);
	const { register, errors, handleSubmit, setError } = useForm({
		reValidateMode: "onSubmit",
		shouldFocusError: true,
	});

	const onSubmit = data => {
		axios
			.post("/auth/login", data)
			.then(res => {
				setIsAuthenticated(true);
				setUser(res.data.data);
			})
			.catch(err => {
				const email = document.getElementById("email");
				email.focus();
				setError("email", {
					type: "manual",
					message: err.response.data.error,
				});
				setError("password", {
					type: "manual",
					message: err.response.data.error,
				});
			});
	};

	const emailError = errors.email ? errors.email.message : null;
	const passwordError = errors.password ? errors.password.message : null;

	const buttonColor = getComputedStyle(document.documentElement).getPropertyValue("--pink-dark");

	return (
		<AuthLayout>
			<Oauth />
			<Break uppercase>or</Break>
			<form onSubmit={handleSubmit(onSubmit)} className={classes.LoginForm}>
				<TextInput
					name="email"
					id="email"
					Icon={EnvelopeIcon}
					label="email"
					errorMessage={emailError}
					register={register({
						required: "This field is required",
						pattern: {
							value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
							message: "Please enter a valid email",
						},
					})}
				/>
				<TextInput
					name="password"
					type="password"
					label="password"
					Icon={LockIcon}
					errorMessage={passwordError}
					id="password"
					register={register({
						required: "This field is required",
					})}
				/>
				<Link to="/forgotpassword" className={classes.ForgotLink}>
					Forgot your password?
				</Link>
				<div className={classes.ButtonContainer}>
					<Button color={buttonColor}>Login</Button>
				</div>
			</form>
			<div className={classes.RegisterLink}>
				Need an account? <Link to="/register">Register</Link>
			</div>
		</AuthLayout>
	);
};

export default Login;
