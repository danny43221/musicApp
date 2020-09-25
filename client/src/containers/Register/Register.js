import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "../../shared/axios-api";
import { useForm } from "react-hook-form";
import TextInput from "../../components/UI/Inputs/TextInput/TextInput";
import EnvelopeIcon from "../../assets/icons/light/EnvelopeIcon";
import LockIcon from "../../assets/icons/light/LockIcon";
import classes from "./Register.module.css";
import Button from "../../components/UI/Button/Button";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout";
import Oauth from "../../components/Oauth/Oauth";
import Break from "../../components/UI/Break/Break";
import { AuthContext } from "../../shared/AuthContext";

const Register = props => {
	const { setIsAuthenticated, setUser } = useContext(AuthContext);

	const { handleSubmit, errors, setError, register, watch } = useForm({
		reValidateMode: "onSubmit",
		shouldFocusError: true,
	});

	const onSubmit = data => {
		axios
			.post("auth/register", data)
			.then(res => {
				axios
					.post("auth/login", data)
					.then(res => {
						setIsAuthenticated(true);
						setUser(res.data.data)
					})
					.catch(err => {
						props.history.push("/login");
					});
			})
			.catch(err => {
				const email = document.getElementById("email");
				email.focus();
				setError("email", {
					type: "manual",
					message: err.response.data.error,
				});
			});
	};

	const emailError = errors.email ? errors.email.message : null;
	const passwordError = errors.password ? errors.password.message : null;
	const confirmPasswordError = errors.confirmpassword ? errors.confirmpassword.message : null;

	const buttonColor = getComputedStyle(document.documentElement).getPropertyValue("--pink-dark");

	return (
		<AuthLayout>
			<Oauth />
			<Break uppercase>or</Break>
			<form onSubmit={handleSubmit(onSubmit)} className={classes.RegisterForm}>
				<TextInput
					name="email"
					id="email"
					label="Email"
					errorMessage={emailError}
					Icon={EnvelopeIcon}
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
					id="password"
					Icon={LockIcon}
					label="password"
					errorMessage={passwordError}
					type="password"
					register={register({
						required: "This field is required",
						minLength: {
							value: "8",
							message: "Must be atleast 8 characters",
						},
					})}
				/>
				<TextInput
					name="confirmpassword"
					id="confirmpassword"
					type="password"
					errorMessage={confirmPasswordError}
					Icon={LockIcon}
					label="confirm password"
					register={register({
						validate: value => value === watch("password") || "Passwords don't match",
						required: "This field is required",
					})}
				/>
				<div className={classes.ButtonContainer}>
					<Button color={buttonColor}>register</Button>
				</div>
			</form>
			<div className={classes.LoginLink}>
				Already have an account? <Link to="/login">Login</Link>
			</div>
		</AuthLayout>
	);
};

export default Register;
